import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import ProfileNavBar from "../../Components/ProfileNavBar";
import { TextArea } from "../../Components/Inputs";
import { useStateValue } from "../../ContextAPI/StateProvider";
import { storage, db } from "../../Firebase/firebase";
import firebase from "firebase";
import "./EditProfile.css";
import Footer from '../../Components/Footer';

function EditProfile(props) {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState("");
  const [appUsers, setAppUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [{ user }] = useStateValue();

  useEffect(() => {
    db.collection("AppUsers")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        //it listens for any new post added
        setAppUsers(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            post: doc.data(),
          }))
        );
      });
  }, []);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //progress function..
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
        alert(error.message);
      },
      //complete function
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            // post image inside db
            db.collection("AppUsers").doc(appUsers.id).collection("Bio").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imageUrl: url,
              username: user.person,
            });
            setProgress(0);
            setCaption("");
            setImage(null);
          });
      }
    );
  };

  return (
    <div className="display">
      <ProfileNavBar />
      <div className="content">
        <h4>Edit profile</h4>
        <TextArea
          type="text"
          label="Bio"
          placeholder="Enter Bio Data..."
          value={caption}
          onChange={(event) => setCaption(event.target.value)}
          // value={props.value}
          // onChange={props.onChange}
          rows="5"
          cols="50"
        />
        <progress
          className="imageupload_progress"
          value={progress}
          max="100"
        ></progress>
        <p></p>
        <input type="file" onChange={handleChange} />
        <p></p>
        <Button variant="contained" color="primary" onClick={handleUpload}>
          Upload
        </Button>
      </div>
        <Footer/>
    </div>
  );
}

export default EditProfile;

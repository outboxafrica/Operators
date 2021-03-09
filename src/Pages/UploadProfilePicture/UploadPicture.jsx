import "./UploadPicture.css";
import { useState, useEffect } from "react";
import Avatar from "react-avatar";
import axios from "axios";
import { Image } from "cloudinary-react";

function UploadPicture() {
  const [imageSelected, setImageSelected] = useState("");
  const [url, setUrl] = useState("");
  const [avatar, setAvatar] = useState(Avatar);
  // const [profilePicture, setProfilePicture] = useState("");

  // const setProfile= ()=>{
  //   imageSelected ?
  // }

  useEffect(() => {
    setAvatar("");
  }, [avatar]);

  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "dfyqadsy");

    axios
      .post("https://api.cloudinary.com/v1_1/olili27/image/upload", formData)
      .then((response) => {
        console.log(response);
        console.log(response.data.url);
        setUrl(response.data.url);
      });
  };

  return (
    <div className="App  card-panel  ">
      <div className="row z-depth-2 ">
        <div className="col s12 m12">
          <div className="card z-depth-2">
            <div className="card-image #4db6ac teal lighten-2 ">
              {!imageSelected || avatar ? (
                <Avatar
                  facebookId="100008388744912"
                  color="#0000ff blue"
                  size="150"
                />
              ) : (
                <Image
                  width="150rem"
                  height="150rem"
                  size="70"
                  cloudName="olili27"
                  publicId={url}
                />
              )}
              {/* <img src="https://materializecss.com/images/sample-1.jpg" /> */}
              <span className="card-title">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) => {
                    setImageSelected(event.target.files[0]);
                  }}
                />
              </span>
            </div>
            <div className="card-content  ">
              {/* this can be passed aa a prop of value name*/}
              <h2 ><input type="text" placeholder="Name"/></h2>
            </div>
            <div className="card-action   ">
              {/* this can be passed as a prop of value role */}
              <h4><input type="text" placeholder="Role"/></h4>
              <span>
                <button className="#4db6ac teal lighten-2" onClick={uploadImage}>Upload</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadPicture;

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
    <div className="App">
      <div className="row #42a5f5 blue lighten-1 ">
        <div className="col s12 m12">
          <div className="card">
            <div className="card-image #64b5f6 blue lighten-2 ">
              {!imageSelected || avatar ? (
                <Avatar
                  facebookId="100008343750912"
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
            <div className="card-content #42a5f5 blue lighten-1 ">
              {/* this can be passed aa a prop of value name*/}
              <h3 className='lime-text text-lighten-5'>olili timothy</h3>
            </div>
            <div className="card-action  #b2ebf2 cyan lighten-4 ">
              {/* this can be passed as a prop of value role */}
              <h4>Student</h4>
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

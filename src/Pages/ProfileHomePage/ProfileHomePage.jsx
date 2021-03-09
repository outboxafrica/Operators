import React, { useEffect, useState } from "react";
import { useStateValue } from "../../ContextAPI/StateProvider";
import { Link } from "react-router-dom";
import Post from "../../Components/Post";
import { db, auth } from "../../Firebase/firebase";
import { useHistory } from "react-router-dom";
import ProfileNavBar from "../../Components/ProfileNavBar";
import "./ProfileHomePage.css";
import Footer from '../../Components/Footer';

import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function ProfileHomePage(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [posts, setPosts] = useState();
  const [{ user }] = useStateValue();

  const history = useHistory();

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            post: doc.data(),
            // comment2:doc.data(),
          }))
        );
      });
  }, []);
  // console.log(posts);

  return (
    <div className="display">
      <ProfileNavBar profile={user.person} />
      <div className="content">
        <h3>All Posts</h3>
        {console.log(posts)}
        {typeof posts != "undefined"
          ? posts.map(({ id, post }) => (
              <Post
                key={id}
                postId={id}
                question={post.question}
                author={post.author}
              />
            ))
          : ""}
      </div>
      <Footer/>
    </div>
  );
}

export default ProfileHomePage;

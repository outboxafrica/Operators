import React, { useEffect, useState } from "react";
import { useStateValue } from "../../ContextAPI/StateProvider";
import Post from "../../Components/Post";
import { db } from "../../Firebase/firebase";
import ProfileNavBar from "../../Components/ProfileNavBar";
import "./ProfileHomePage.css";
import Footer from "../../Components/Footer";

function ProfileHomePage(props) {
  const [posts, setPosts] = useState();
  const [{ user }] = useStateValue();

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            post: doc.data(),
          }))
        );
      });
  }, []);

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
      <Footer />
    </div>
  );
}

export default ProfileHomePage;

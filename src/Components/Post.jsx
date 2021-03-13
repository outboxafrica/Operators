import React, { useEffect, useState } from "react";
import firebase from "firebase";
import { useStateValue } from "../ContextAPI/StateProvider";
import { db } from "../Firebase/firebase";
import "./Post.css";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccountCircle from "@material-ui/icons/AccountCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 370,
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

function Post(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [{ user }] = useStateValue();

  useEffect(() => {
    let unsubscribe;
    if (props.postId) {
      unsubscribe = db
        .collection("posts")
        .doc(props.postId)
        .collection("comments")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }

    return () => {
      unsubscribe();
    };
  }, [props.postId]);

  function postComment(event) {
    event.preventDefault();
    db.collection("posts").doc(props.postId).collection("comments").add({
      text: comment,
      // username: user.displayName,
      username: user.person,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    console.log(comment);
    setComment("");
  }
  function myID() {
    setInterval(Math.random(), 1);
  }
  
  return (
    <div className="post_card ">
      <div className="Post content ">
        <Card className={classes.root} >
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                <AccountCircle />
              </Avatar>
            }
            title={props.author}
          />
          <hr />

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              <p>{props.question}</p>
            </Typography>
          </CardContent>
          <hr />
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <DeleteIcon
                onClick={(event) =>
                  db.collection("posts").doc(props.postId).delete()
                }
              />
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Comments</Typography>
              <Typography paragraph>
                {typeof comments != "undefined" ? (
                  comments.map((comment) => (
                    <div key={myID} className="comment">
                      <p className="comment1">
                        <strong>{comment.username}: </strong>
                        {comment.text}
                      </p>
                    </div>
                  ))
                ) : (
                  <h1>Loading...</h1>
                )}
              </Typography>
              <Typography paragraph>
                <form className="post_commentBox">
                  <TextField
                    type="text"
                    className="post_input"
                    placeholder="Add a comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />

                  <Button
                    disabled={!comment}
                    className="post_button"
                    type="submit"
                    onClick={postComment}
                  >
                    comment
                  </Button>
                </form>
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </div>
  );
}

export default Post;

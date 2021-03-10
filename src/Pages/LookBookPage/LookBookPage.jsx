import React, { useEffect, useState } from 'react';
import {db} from '../../Firebase/firebase';
import ProfileNavBar from '../../Components/ProfileNavBar';
import './LookBookPage.css'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Footer from '../../Components/Footer';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  

function LookBookPage() {
    const[appUsers,setAppUsers] = useState([]);
    const[bio,setBio] = useState([]);
    const classes = useStyles();

    useEffect(()=>{
        db.collection('AppUsers').orderBy('timestamp','desc').onSnapshot(snapshot =>{
          //it listens for any new post added
          setAppUsers(snapshot.docs.map(doc => ({
            id:doc.id,
            post:doc.data()
           })));
        })
       },[]);

       useEffect(()=>{
        db.collection('AppUsers')
        .doc(appUsers.id)
        .collection("Bio")
        .orderBy('timestamp','desc')
        .onSnapshot(snapshot =>{
          //it listens for any new post added
          setBio(snapshot.docs.map(doc => ({
            id:doc.id,
            post:doc.data()
           })));
        })
       },[]);
    return (
        <div className="display">
            <ProfileNavBar/>
            <div className="contents">
            <h1>lookbook</h1>
        <div className="items">
      {
        appUsers.map(({id, post}) =>(
          <div key={id}  className="card">
              <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={bio.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {post.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This is an Edu Online 
            Look Book 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        {post.email}
        </Button>
        <Button size="small" color="primary">
        {post.facilitator}
        {post.student}
        </Button>
      </CardActions>
    </Card>
          </div>
        ))
      }
</div>
</div>
<Footer/>
        </div>
    )
}

export default LookBookPage

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
       },[appUsers]);
    return (
        <div className="display" style={{display:"flex", flexDirection:"column",justifyContent:"center", margin:"auto"}}>
            <ProfileNavBar/>
            <div className="contents" >
            <h1 style={{color:"#3F51B5", textAlign:"center", margin:"2rem", fontSize:"3rem",fontWeight:"bold"}}>lookbook</h1>
            <hr style={{color:"blue", margin:"0 0.5rem"}}/>
        <div className="items">
      {
        appUsers.map(({id, post}) =>(
          <div key={id}  className="card">
              <Card className={classes.root} style={{display:"flex", flexDirection:"column", justifyContent:"center",margin:"0 auto"}}>
      <CardActionArea style={{minHeight:"2rem",  background:"white"}}>
        <CardMedia
          className={classes.media}
          image={bio.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" 
          >
          {post.name}
          </Typography>
          <hr />
          <Typography variant="body2" color="textSecondary" style={{padding:"5px",color:"#ddd", textAlign:"center"}} component="p">
            This is an Edu Online 
            Look Book 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        {post.email}
        </Button>
        <p>-</p>
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

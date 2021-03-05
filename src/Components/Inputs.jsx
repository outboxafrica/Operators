import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       '& .MuiTextField-root': {
//         margin: theme.spacing(1),
//         width: 200,
//       },
//     },
//   }));

 export function Inputs(props) {
    // const classes = useStyles();
    return (
        <div>
        <TextField
        //   label="Size"
        variant={props.variant}
          id={props.id}
          value={props.value}
          onChange={props.onChange}
        />
        </div>
        
    )
}



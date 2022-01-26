import { makeStyles } from "@mui/styles";
import React from "react";
import { RegistrationForm } from "./registration/registration.component";
import { SigInForm } from "./sign-in/sign-in.component";

const useStyles = makeStyles({
    FormContainer: {
        textAlign: 'center',
        display: 'flex',
        margin: '30px auto',
        justifyContent: 'space-between',
        width: '500px',
        alignItems: 'start'
    },
    PagesContainer: {
        width: 'auto',
        textAlign: 'center'
    }
  });

const App = () => {
    const classes = useStyles();
    return (
        <div className={classes.PagesContainer}>
    <div className={classes.FormContainer}>
        
        <SigInForm onSubmit={({userName, password}) => {
            console.log(userName, password)
        }}
        />
        <RegistrationForm onSubmit={({userName, email, password, confirmPassword}) => {
            console.log(userName, email, password, confirmPassword) 
        }}
        />
    </div>
        <h1>Succesfully logged in!</h1>
    </div>
    );
};

export default App;
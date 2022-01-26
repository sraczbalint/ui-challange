import {TextField, Button } from '@material-ui/core';
import { Formik, Form } from 'formik';
import React, { FC } from "react";
import { makeStyles} from '@mui/styles';

interface values {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const useStyles = makeStyles({
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 32,
    padding: '0px 6px'
  },

  buttoncontainer: {
    margin: '20px'
  },
});

type Props = {
  onSubmit: (values: values) => void;
}

export const RegistrationForm:FC<Props> = ({ onSubmit }) => {
  const classes = useStyles();

  return (
      <Formik initialValues={{userName: '',email: '', password: '', confirmPassword: ''}} onSubmit={(values) => onSubmit(values)}>
        {({values, handleChange, handleBlur}) => (
        <Form>
        <h1>Sign Up</h1>
        <p>Join to the Opswat team!</p>
        <div>
            <TextField 
              name= "userName"
              label="username"
              type="text"
              value={values.userName}
              onChange={handleChange}
              onBlur={handleBlur}         
            />
        </div>
        <div>
            <TextField 
              name= "Email"
              label="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}         
            />
        </div>
        <div>
            <TextField
              name= "password" 
              label="Password"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}   
            />
      </div>
      <div>
            <TextField
              name= " Confirm password" 
              label="Confirm your password"
              type="password"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}   
            />
      </div>
      <div className={classes.buttoncontainer}>
            <Button className={classes.button} variant="contained" type='submit'>  
              Sign Up!
            </Button>
      </div>  
        </Form>
        )}
      </Formik>
  );
};

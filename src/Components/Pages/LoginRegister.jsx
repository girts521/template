import React from "react";
import { Formik, Form, Field, ErrorMessage, useFormik  } from 'formik';
import * as yup from 'yup';
import styled from "styled-components";

const Container = styled.div`
/* height: 90vh; */
width: 80vw;
max-width: 305px;
margin:auto;
margin-top: 50px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

h1 {
    font-family: 'Open Sans';
    font-size: 20px;
    margin-bottom: 15px;
}

input {
    width: 100%;
    height: 30px;
    margin-bottom: 15px;
    border: 1px solid #DBE2EF;
    font-family: 'Open Sans';
    font-size: 14px;
    color: #3F72AF;
}

button {
    width: 100%;
    height: 30px;
    background-color: #112D4E;
    color: #F9F7F7;
    font-family: 'Open Sans';
    font-size: 14px;
    margin-bottom: 50px;
}
`
const Error = styled.div`
    color: red;
    margin-bottom: 15px;
`

const RegisterSchema = yup.object().shape({
    name: yup.string().required('Name is required!'),
    lastName: yup.string().required('Last name is required!'),
    email: yup.string().required('Email is required!').email('Must be a valid email!'),
    confirmEmail: yup.string().required('Please confirm your email!').email('Must be a valid email!'),
    password: yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/g, 'The password must be atleast 8 characters long, contain an uppercase,lowercase and a special caracter').required('Password is required!'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Please confirm your password!'),
    consent: yup.boolean().oneOf([true], 'You must agree to terms and conditions')
})

const LoginSchema = yup.object().shape({
    email: yup.string().required('Email is required!').email('Must be a valid email!'),
    password: yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/g, 'The password must be atleast 8 characters long, contain an uppercase,lowercase and a special caracter').required('Password is required!')
})

const LoginRegister = (props) => {
    console.log(props)

    return (
        <Container>
       <h1> {props.login ? 'Log in' : 'Register'}</h1>

 {props.login ? 
 
 <Formik initialValues={{
    email: '',
    password: ''
  }} 
  validationSchema={LoginSchema}
  onSubmit={values => {console.log(values)}}>
    
    {({ errors, touched }) => (

        <Form>
        <label htmlFor="email">
            Email: 
           <Field name="email" type="email" />
           {errors.email && touched.email ? <Error>{errors.email}</Error> : null}
           </label>
            
           <label htmlFor="password">
            Password: 
           <Field name="password" type="password" />
           {errors.password && touched.password ? <Error>{errors.password}</Error> : null}
           </label>

            <button type="submit">Log in</button>
        </Form>
    )}

 </Formik>
 
 : 
       <Formik initialValues={{
         name: '',
         lastName: '',
         email: '',
         confirmEmail: '',
         password: '',
         confirmPassword: '',
         consent: false
       }} 
       validationSchema={RegisterSchema}
       onSubmit={values => {console.log(values)}}>

        {({ errors, touched }) => (
         <Form>

            <label htmlFor="name">
            Name: 
           <Field name="name" />
           {errors.name && touched.name ? (
             <Error>{errors.name}</Error>
           ) : null}
           </label>

            <label htmlFor="lastName">
            Last name: 
           <Field name="lastName" />
           {errors.lastName && touched.lastName ? (
             <Error>{errors.lastName}</Error>
           ) : null}
           </label>

            <label htmlFor="email">
            Email: 
           <Field name="email" type="email" />
           {errors.email && touched.email ? <Error>{errors.email}</Error> : null}
           </label>

            <label htmlFor="confirmEmail">
            Confirm email: 
           <Field name="confirmEmail" type="email" />
           {errors.confirmEmail && touched.confirmEmail ? <Error>{errors.confirmEmail}</Error> : null}
            </label>

            <label htmlFor="password">
            Password: 
           <Field name="password" type="password" />
           {errors.password && touched.password ? <Error>{errors.password}</Error> : null}
           </label>

            <label htmlFor="confirmPassword">
            Confirm password: 
           <Field name="confirmPassword" type="password" />
           {errors.confirmPassword && touched.confirmPassword ? <Error>{errors.confirmPassword}</Error> : null}
           </label>

            <label htmlFor="">
            I agree to the terms and conditions
           <Field name="consent" type="checkbox" />
           {errors.consent && touched.consent ? <Error>{errors.consent}</Error> : null}
           </label>

           <button type="submit">Register</button>
         </Form>
       )}

   </Formik>
}
    

        </Container>
    )
}

export default LoginRegister
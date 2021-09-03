import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import './components.css';
import Layout from "../components/layout";
 
const SignIn = () =>{
  const validationSchema = yup.object().shape({
    name: yup.string().typeError('must be string').required('Input your name'),
    password: yup.string().typeError('must be string').required('Input correct password'),
    email: yup.string().email('Input your email here, please use real email!')
  });

  return (
  <Layout>
    <div className="content-container">
    <div className="signup-form">
        <Formik
          initialValues={{ 
            email:'',
            password:''
          }}
          validateOnBlur
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={validationSchema}
          >
          {({ 
            values,
            errors,
            touched,
            handleChange,
            handleBlur, 
            isValid, 
            handleSubmit,
            dirty
          }) => (
          <div className="sign-form__wrapper">
            <div className="sign-form__item">
              <div className="sign-form__title">Log into your account</div>
            </div> 
            <div className="sign-form__item">
              <div className="sign-form__plate"> 
                <div className="sign-form__input-wrapper">
                  <label className="sign-form__text" htmlFor={`email`}>
                    Email
                  </label>

                  <input 
                    className="sign-form__input"
                    type={`text`} 
                    name={`email`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </div>
                { touched.email && errors.email && <p>{errors.email}</p>}

                <div className="sign-form__input-wrapper">
                  <label className="sign-form__text" htmlFor={`password`}>
                    Password
                  </label>

                  <input 
                    className="sign-form__input"
                    type={`password`} 
                    name={`password`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                </div>
                { touched.password && errors.password && <p>{errors.password}</p>}

                <button
                  className="sign-form__button"
                  disabled={!isValid && !dirty }
                  onClick={handleSubmit}
                  type={`submit`}
                >
                  Login
                </button>
              </div>    
            </div>
          </div>  
          )}
      </Formik>
    </div>
  </div>
</Layout> 
  )  
};

export default SignIn;
























































//  // Render Prop
//  import React from 'react';
//  import { Formik, Form, Field, ErrorMessage } from 'formik';
 
//  const SignIn = () => (
//    <div>
//      <h1>Any place in your app!</h1>
//      <Formik
//        initialValues={{ email: '', password: '' }}
//        validate={values => {
//          const errors = {};
//          if (!values.email) {
//            errors.email = 'Required';
//          } else if (
//            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//          ) {
//            errors.email = 'Invalid email address';
//          }
//          return errors;
//        }}
//        onSubmit={(values, { setSubmitting }) => {
//          setTimeout(() => {
//            alert(JSON.stringify(values, null, 2));
//            setSubmitting(false);
//          }, 400);
//        }}
//      >
//        {({ isSubmitting }) => (
//          <Form>
//            <Field type="email" name="email" />
//            <ErrorMessage name="email" component="div" />
//            <Field type="password" name="password" />
//            <ErrorMessage name="password" component="div" />
//            <button type="submit" disabled={isSubmitting}>
//              Submit
//            </button>
//          </Form>
//        )}
//      </Formik>
//    </div>
//  );
 
//  export default SignIn;







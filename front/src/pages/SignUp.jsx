import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import './components.css';

const SignUp = () =>{
  const validationSchema = yup.object().shape({
    name: yup.string().typeError('must be string').required('Input your name'),
    password: yup.string().typeError('must be string').required('Input correct password'),
    email: yup.string().email('Input your email here, please use real email!')
  });

  return (
    <div className="content-container">
    <div className="signup-form">
      <Formik
        initialValues={{ 
          name:'',
          password:'', 
          email:''
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
                <div className="sign-form__title">Create an account</div>
            </div> 
            <div className="sign-form__item">
              <div className="sign-form__plate"> 
                <div className="sign-form__input-wrapper">
                  <label className="sign-form__text" htmlFor={`name`}>
                    Name
                  </label>

                  <input 
                    className="sign-form__input"
                    type={`text`} 
                    name={`name`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                </div>
                { touched.name && errors.name && <p>{errors.name}</p>}

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
                  Register
                </button>
              </div>
            </div>
          </div>  
          )}
      </Formik>
    </div>
  </div>
  )  
};

export default SignUp;
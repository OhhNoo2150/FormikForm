import React from "react";
import { FormikContext, useFormik } from 'formik';

const validate = values => {
  let errors = {};
  if (!values.nameField) {
    errors.name = 'Field required';
  }
  if (!values.pswField) {
    errors.password = 'Field required';
  }
  if (!values.emailField) {
    errors.email = 'Field required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    .test(values.emailField)) {
    errors.email = 'Username should be an email';
  }
  return errors;
}

function App() {

  const formik = useFormik({
    initialValues: {
      emailField: '',
      pswField: ''
    },
    validate,
    onSubmit: values => {
        alert('Login Successful!');
        console.log('form:', values);
    }
  });

  const errorStyle = {
    color: 'red'
  }

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>        
        <div>Name</div>
        <input
          id='nameField' type='name' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.nameField} />{formik.touched.nameField && formik.errors.name ? (<div id='nameError' style={errorStyle}>{formik.errors.email}</div>) : null}
        <div>Email</div>
        <input
          id='emailField' type='email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.emailField} />{formik.touched.emailField && formik.errors.email ? (<div id='emailError' style={errorStyle}>{formik.errors.email}</div>) : null}

        <div>Password</div>
        <input id='pswField' type='password' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.pswField} />{formik.touched.pswField && formik.errors.password ? (<div id='pswError' style={errorStyle}>{formik.errors.password}</div>) : null}<br />

        <button type='submit' id='submitBtn'>Submit</button>

      </form>
    </div>
  );
}

export default App;
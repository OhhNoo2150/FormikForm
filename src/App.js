import React from "react";
import './App.css';
import { useFormik } from 'formik'

function App() {
  // TODO: add a const called formik assigned to useFormik()

  return (
    <div>
      <form>
        <div>Name</div>
        <input id="name" type="text" />
        <div>Email</div>
        <input id="email" type="text" />
        <div>Password</div>
        <input id="password" type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

import './App.css';
import { useState } from 'react';

function App() {

  const initialValues = {
    username: "",
    email: '',
    password: ''
  };

  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)


  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues,[name]:value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true)
  }

  useState(() =>{
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues)
    }
  },[formErrors])

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.username){
      errors.username = "Username required"
    }
    if(!values.email){
      errors.email = "Email required"
    }else if(!regex.test(values.email)){
      errors.email = "This is not a valid email address"
    }
    if(!values.password){
      errors.password = "Password required"
    }else if(values.password < 6){
      errors.password = "Password must be at least 6 characters"
    }
    return errors
  }

  return (
    <div className='container'>
      {Object.keys(formErrors).length === 0 && isSubmit ? (<div>SignIn Success</div>) :
      (<div>SignIn Failed</div>) }
        <h1>Login Form</h1>
      <form onChange={handleSubmit}>
        <div className='ui form'>
          <div className='field'>
            <label>Username</label>
            <input type="text" name="username" placeholder='Username' value={formValues.username} onChange={handleChange}/>
          </div>
          <p>{formErrors.username}</p>
          <div className='field'>
            <label>Email</label>
            <input type="email" name="email" placeholder='Email' value={formValues.email} onChange={handleChange}/>
          </div>
          <p>{formErrors.email}</p>
          <div className='field'>
            <label>Password</label>
            <input type="password" name="password" placeholder='Password' value={formValues.password} onChange={handleChange}/>
          </div>
          <p>{formErrors.password}</p>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;

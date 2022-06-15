
import { useState,useEffect } from 'react'
import { Logo, FormRow, Alert } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'
import { useAppContext } from '../context/appContext'

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
    showAlert: false
}

const Register = () => {

    const [values, setValues] = useState(initialState)
    const { isLoading, showAlert, displayAlert } = useAppContext()
  //  console.log(state)

    const toogleMember = () => {
        setValues({ ...values, isMember: !values.isMember })
    }
    const handleChange = (e) => {
        setValues({...values,[e.target.name]:e.target.value})
      //  console.log(e.target);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, isMember } = values;
        if (!email || !password || (!isMember && !name)) {
            displayAlert();
            return;
        }
        console.log(values);
    }
  return (
      <Wrapper className='full-page'>
          <form className='form' onSubmit={onSubmit}>
              <Logo />
              {showAlert && <Alert />}
              <h3>{values.isMember ? "Login" : "Register"}</h3>
              {/* <div className='form-row'>
                    <label htmlFor='name' className='form-label'>
                        name
                    </label>

                    <input
                        type='text'
                        value={values.name}
                        name='name'
                        onChange={handleChange}
                        className='form-input'
                  />
                  
                  
              </div> */}
              {!values.isMember && (
                  <FormRow type='text' name='name' value={values.name} handleChange={handleChange} />   

              )}
              <FormRow type='email' name='email' value={values.email} handleChange={handleChange} />
              <FormRow type='password' name='password' value={values.password} handleChange={handleChange} />

              <button type='submit' className='btn btn-block'>
                        submit
              </button>
              <p>
                  {values.isMember ? "Not a member yet?":"Already a member?"}
                  <button type='button' onClick={toogleMember} className='member-btn' >
                      {values.isMember ? "Register" : "Login"}
                  </button>
              </p>
              
          </form>
    </Wrapper>
  )
}

export default Register
import React, { useState } from 'react'
import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import './Login.css'

const UserLoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Enter valid email')
    .required('Required'),
  password: Yup.string()
    .required('Required')
}); 

const USER_LOGIN = '/auth/login'

function Login() {

  const [loading, setLoading] = useState(false)
  const [showPass, setShowPass] = useState(false)

  const navigate = useNavigate();

  const toggleShowPass = () => {
    setShowPass(!showPass)
  }

  return (
    <div className='login'>
      <div className='login__header'>
        <h2>Login</h2>
      </div>
      <div className='login__container'>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={UserLoginSchema}
            onSubmit={async (data, { resetForm }) => {
              console.log(data)
                setLoading(true)
                axios.post(`${import.meta.env.VITE_APP_MAIN_API}${USER_LOGIN}`, data)
                .then((res) => {
                    setLoading(false)
                    // updateUser(res.data.id)
                    // updateUserToken(res.data.user_token)
                    // updateUserType('user')
                    alert('logged in')
                    // navigate('/profile')
                }).catch(err => {
                    setLoading(false)
                    resetForm()
                })
            }}
        >
            {({ errors }) => (
                <Form className='user_auth_form'>
                  <div className='club_auth_details'>
                    <div className='club_auth_user'>
                      <label className='auth_label'>Email</label>                  
                      <Field id="email" name="email" className='auth__input' placeholder="user@gmail.com" />
                      <p className='auth__error'>{errors.email}</p>
                    </div>
                    <div className='club_auth_user'>
                      <label className='auth_label'>Password</label>
                      <Field id="password" name="password" type={showPass ? 'text' : 'password'} className='auth__input ' placeholder="*********" />
                      <p className='auth__error'>{errors.password}</p>
                      {showPass ? <BsEye className='auth_input_eye' onClick={toggleShowPass}/> : <BsEyeSlash className='auth_input_eye user_reg_input_eye' onClick={toggleShowPass}/>}
                    </div>
                  </div>
                  <div className='reg_login_btns'>
                    <div className='club_login_btn'>
                        <button  disabled={loading ? true : false} type='submit' className='clublogin_button'>
                        {loading ? "Submitting..." : "Login"}
                      </button>
                    </div>
                  </div>
                </Form>
            )}
        </Formik>
      </div>
    </div>
  )
}

export default Login
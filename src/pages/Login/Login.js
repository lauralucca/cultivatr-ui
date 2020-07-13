import React from 'react'
import GoogleLogin from 'react-google-login'
import {User} from '../../api'

const responseGoogleSuccess = async (response) => {
    const userInfo = {
        name: response.profileObj.name,
        email: response.profileObj.email
    }
   
    await User.saveNew(userInfo)
    localStorage.setItem('user-email', userInfo.email)
  }

const responseGoogleFailure = (response) => {
    console.log('failure', response);
  }



const Login = () => (
    <GoogleLogin
    clientId="888291695738-c01715sl74g8g2plmenm40bgcccofvi0.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogleSuccess}
    onFailure={responseGoogleFailure}
    cookiePolicy={'single_host_origin'}
    />

)

export default Login
import React from 'react';
import HelloApi from './api';
import UserSignUp from './UserSignUp/UserSignUp'
import GoogleLogin from 'react-google-login'

const responseGoogle = (response) => {
  console.log(response);
}

async function getHello(name) {
    const hello = await HelloApi.get(name)
    alert(hello)
}

function App() {
  return (
    <div className="text-center">
        <UserSignUp />
        <GoogleLogin
        clientId="888291695738-c01715sl74g8g2plmenm40bgcccofvi0.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        />
    </div>
  );
}

export default App;

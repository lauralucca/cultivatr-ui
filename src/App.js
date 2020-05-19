import React from 'react';
import HelloApi from './api';
import UserSignUp from './UserSignUp/UserSignUp'

async function getHello(name) {
    const hello = await HelloApi.get(name)
    alert(hello)
}

function App() {
  return (
    <div className="text-center">
        <UserSignUp />
    </div>
  );
}

export default App;

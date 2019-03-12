import React, { useState } from 'react';

const Login = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <div>
          <button
            onClick={e => {
              e.preventDefault();
              props.onSubmit(username, password).then(() => {
                props.history.push('/');
              });
            }}
            type="submit"
          >
            Submit
          </button>
          {!props.signingUp && (
            <button
              onClick={e => {
                e.preventDefault();
                props.history.push('/signup');
              }}
            >
              Register
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;

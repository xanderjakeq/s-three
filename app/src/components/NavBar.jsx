import React from 'react';

const NavBar = props => {
  return (
    <nav>
      <button onClick={props.loggingOut}>Logout</button>
    </nav>
  );
};

export default NavBar;

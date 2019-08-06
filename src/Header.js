import React from 'react';

import useAuth from './firebase/useAuth';

function Header() {
  const auth = useAuth();

  return (
    <>
      <h1>HandyStandy</h1>
      {auth.isLoaded && auth.user && (
        <>
          <div>{auth.user.email}</div>
          <img src={auth.user.photoURL} width={64} alt={auth.user.email}/>
          <button onClick={auth.signOut}>Sign Out</button>
          <hr />
        </>
      )}
      {auth.isLoaded && !auth.user && (
        <>
          <button onClick={auth.signIn}>Sign in with Google</button>
          <hr />
        </>
      )}
    </>
  );
}

export default Header;

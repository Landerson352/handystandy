import React from 'react';

import useAuth from './firebase/useAuth';
import productEntityType from './entitityTypes/product';
import EntityList from './crud/EntityList';

function App() {
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
          <EntityList entityType={productEntityType} />
        </>
      )}
      {auth.isLoaded && !auth.user && (
        <button onClick={auth.signIn}>Sign in with Google</button>
      )}
    </>
  );
}

export default App;

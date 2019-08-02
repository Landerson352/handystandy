import React from 'react';

import useAuth from './firebase/useAuth';

function App() {
  const auth = useAuth();

  return (
    <div>
      <h1>HandyStandy</h1>
      {auth.isLoaded && auth.user && (
          <button onClick={auth.signOut}>Sign Out</button>
        )}
      {auth.isLoaded && !auth.user && (
          <button onClick={auth.signIn}>Sign in with Google</button>
      )}
    </div>
  );
}

export default App;

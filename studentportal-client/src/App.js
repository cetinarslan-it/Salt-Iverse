import React, { useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";

import Account from './Components/Account';
import LoadingPage from './Components/LoadingPage';

function App() {
  const { user, isAuthenticated, loginWithRedirect, isLoading } = useAuth0();
  useEffect(() => {
    (async function login() {
      if (!isLoading && !user) {
        await loginWithRedirect();
      }
    })();
  }, [isLoading]);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      {isAuthenticated && <Account /> }
    </>
  );
}

export default App;

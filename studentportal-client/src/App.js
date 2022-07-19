import React, { useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Home from './Components/Home';
import Account from './Components/Account';
import RedirectPage from './Components/RedirectPage';

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  );
};

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
    return <RedirectPage />;
  }

  return (
    <>
      <Account />
      {isAuthenticated && <LogoutButton/>}
    </>
  );
}

export default App;

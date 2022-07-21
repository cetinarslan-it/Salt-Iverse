import React, { useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import LoadingPage from './Components/LoadingPage';
import WeekTopics from './Components/WeekTopics';
import Topic from './Components/Topic';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Account from './Components/Account';
import NotFoundPage from './Components/NotFoundPage';

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
      {/* {isAuthenticated && <Account /> } */}
      {isAuthenticated && (
        <Navbar>
          <Routes>
            <Route exact path="/" element={<Navigate replace to="/account" />} />
            <Route path="/account" element={<Account />} />
            <Route path="/topics" element={<WeekTopics />} />
            <Route path="/topics/:id" element={<Topic />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Navbar>

      )}
    </>
  );
}
export default App;

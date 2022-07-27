import React, { useEffect, useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import LoadingPage from './Components/LoadingPage';
import WeekTopics from './Components/WeekTopics';
import Topic from './Components/Topic';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Account from './Components/Account';
import NotFoundPage from './Components/NotFoundPage';
import Labs from './Components/Labs'; 
import ErrorPage from './Components/ErrorPage';
import LabList from './Components/LabList';
import AssignmentsResults from './Components/AssignmentsResults';
import Dashboard from './Components/Dashboard';

import WrongUser from './Components/WrongUser';


function App() {
  const { user, isAuthenticated, loginWithRedirect, isLoading, getAccessTokenSilently} = useAuth0();
  const [wrongUser, setWrongUser] = useState(false);
  const [isUserChecking, setIsUserChecking] = useState(true);

  const checkIfUserExists = async () => {
    try {
      const accessToken = await getAccessTokenSilently({
        audience: "https://dev-2sq5ot8u.us.auth0.com/api/v2/",
        scope: "read:users"
      });
      const response = await fetch("https://studentportalapi.azurewebsites.net/students/me", {
        headers: { Authorization: `Bearer ${accessToken}` }
      });
      if (response.status === 403) {
        setWrongUser(true);
      } else {
        setWrongUser(false);
      }
    } catch (e) {
      console.log("Unhandled error while getting acc info:", e.message);
    } finally {
      setIsUserChecking(false);
    }
  };

  useEffect(() => {
    (async function login() {
      if (!isLoading && !user) {
        await loginWithRedirect();
      }
    })();
    if (user) {
      checkIfUserExists();
    }
  }, [isLoading]);

  if (isLoading || isUserChecking) {
    return <LoadingPage message={isUserChecking ? 'Verifying user...' : undefined} />;
  }

  if (wrongUser) {
    return <WrongUser />
  }
    
  return (
    <>
      {isAuthenticated && (
        <Navbar>
          <Routes>
            <Route exact path="/" element={<Navigate replace to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/account" element={<Account />} />
            <Route path="/topics" element={<WeekTopics />} />
            <Route path="/topics/:id" element={<Topic />} />
            <Route path="/labs" element={<LabList />} />
            <Route path="/assignments" element={<AssignmentsResults />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Navbar>
      )}
    </>
  );
}
export default App;

import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import { useAuth0 } from "@auth0/auth0-react";
import LoadingPage from './LoadingPage';
import ErrorPage from './ErrorPage';
import AccountHeader from './AccountHeader';
import WeekTopicsHeader from './WeekTopicsHeader';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, useParams
} from "react-router-dom";


export default function WeekTopics() {
  const { user, getAccessTokenSilently } = useAuth0();
  const [selectedWeekIndex, setSelectedWeekIndex] = useState(0);
  const [weekTopics, setWeekTopics] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const accessToken = await getAccessTokenSilently({
        audience: "https://dev-2sq5ot8u.us.auth0.com/api/v2/",
        scope: "read:users"
      });
      const response = await fetch('https://localhost:7119/Material/MaterialList', {
        headers: { Authorization: `Bearer ${accessToken}` }
      });

      if (response.status !== 200) {
        setWeekTopics({ errorMessage: `Code: ${response.status}` });
      } else {
        const data = await response.json();
        data.sort((a, b) => a.weekNo - b.weekNo);
        if (data.length === 0) {
          setWeekTopics({ errorMessage: `Couldn't find courses for you` });
          return;
        }
        setWeekTopics(data);
      }
    };
    fetchData();
  }, []);

  if (weekTopics == null) {
    return <LoadingPage message={"Fetching materials..."} />
  }
  if (weekTopics.errorMessage != null) {
    return <ErrorPage message={weekTopics.errorMessage} />
  }

  return (
    <>
      <WeekTopicsHeader />
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        spacing={2}>
        <List>
          {weekTopics.map((wt, index) =>
            <ListItemButton key={wt.topicName}
              selected={selectedWeekIndex === index}
              onClick={(event) => setSelectedWeekIndex(index)}>
              <ListItemText primary={wt.topicName} />
              <ListItemText sx={{ textAlign: "right" }} secondary={`week #${wt.weekNo}`} />
            </ListItemButton>
          )}
        </List>
        <List>
          {weekTopics[selectedWeekIndex].topics.map(t =>
            <Link style={{color:"black", textDecoration: "none"}} to={`/topics/${t.id}`}>
              <ListItemButton key={t.topicName}>
                <ListItemText primary={t.topicName} />
              </ListItemButton>
            </Link >
          )}
        </List>
      </Stack>
    </>
  );
}


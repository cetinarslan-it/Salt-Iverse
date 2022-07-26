import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tab from '@mui/material/Tab';
import Presentation from './Presentation';
import Labs from './Labs';
import Videos from './Videos';
import { useAuth0 } from "@auth0/auth0-react";
import LoadingPage from './LoadingPage';


const Topic = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [selectedTab, setSelectedTab] = useState('1');
  const { id } = useParams();
  const [Topics, setTopics] = useState(null);

  useEffect(() => {
    console.log("fetching fata...");
    const fetchData = async () => {
      const accessToken = await getAccessTokenSilently({
        audience: "https://dev-2sq5ot8u.us.auth0.com/api/v2/",
        scope: "read:users"
      });
      
      let response = null;
      try {
        response = await fetch(`https://studentportalapi.azurewebsites.net/Material/TopicInfo?selectedTopicId=${id}`, {
          headers: { Authorization: `Bearer ${accessToken}` }
        });
      } catch (e) {
        console.log("Unhandled error:", e.message);
        return;
      }
      
      if (response.status !== 200) {
        setTopics({ errorMessage: `Code: ${response.status}` });
      } else {
        const data = await response.json();
        if (data.length === 0) {
          setTopics({ errorMessage: `Couldn't find courses for you` });
          return;
        }
        setTopics(data[0]);
      }
    };
    fetchData();
  }, []);

  if (Topics === null) {
    return <LoadingPage message={`Fetching data for ${id}`} />
  }

  return (
    <>
      <h1>{`${Topics.topicName}`}</h1>
      <p>{`${Topics.description}`}</p>
      <TabContext value={selectedTab}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={(ev, newv) => setSelectedTab(newv)} aria-label="lab API tabs example">
            <Tab label="Presentation" value="1" />
            <Tab label="Videos" value="2" />
            <Tab label="Labs" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Presentation pres={Topics.presentations} />
        </TabPanel>
        <TabPanel value="2">
          <Videos videos={Topics.videos} />
        </TabPanel>
        <TabPanel value="3">
          <Labs labs={Topics.labs} />
        </TabPanel>
      </TabContext>
      
    </>
  );
}
export default Topic;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import LoadingPage from './LoadingPage';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';


const LabList = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [Labs, setLabs] = useState(null);

  useEffect(() => {
    console.log("fetching fata for labs' list...");
    const fetchData = async () => {
      const accessToken = await getAccessTokenSilently({
        audience: "https://dev-2sq5ot8u.us.auth0.com/api/v2/",
        scope: "read:users"
      });
      let response = null;
      try {
        response = await fetch(`https://studentportalapi.azurewebsites.net/Material/AllLabs`, {
          headers: { Authorization: `Bearer ${accessToken}` }
        });
      } catch (e) {
        console.log("Unhandled error:", e.message);
        return;
      }
      
      if (response.status !== 200) {
        setLabs({ errorMessage: `Code: ${response.status}` });
      } else {
        const data = await response.json();
        
        if (data.length === 0) {
            setLabs({ errorMessage: `There are no labs so far` });
          return;
        }
        setLabs(data);
      }
    };
    fetchData();
  }, []);

  if (Labs === null) {
    return <LoadingPage message={`Fetching labs list`} />
  }

  return (
    <>
      <h1>List of labs</h1>
      <List>
            {Labs?.map((lab, i) =>
                <ListItem key={i}>
                    <ListItemIcon>
                        <GitHubIcon />
                    </ListItemIcon>
                    <Link href={lab.labUrl} target="blank">{lab.labName}</Link>
                </ListItem>
            )}
        </List>
      
    </>
  );
}
export default LabList;
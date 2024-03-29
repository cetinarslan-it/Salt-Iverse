import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import AccountDetails from "./AccountDetails";
import AccountHeader from "./AccountHeader";
import AccountDocuments from "./AccountDocuments";
import ErrorPage from "./ErrorPage";
import LoadingPage from "./LoadingPage";

const API_URL = "https://studentportalapi.azurewebsites.net";
const ME_URL = `${API_URL}/students/me`;

const Account = ({ onError }) => {
  const { user, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);
  const [selectedTab, setSelectedTab] = useState('1');

  useEffect(() => {
    const getUserMetadata = async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          audience: "https://dev-2sq5ot8u.us.auth0.com/api/v2/",
          scope: "read:users"
        });
        
        const metadataResponse = await fetch(ME_URL, {
          headers: { Authorization: `Bearer ${accessToken}` }
        });

        

        if (metadataResponse.status !== 200) {
          setUserMetadata({ errorMessage: `${user?.name}, you are not allowed yet. Please, contact admin!` });
          if (onError) { onError(`${user?.name}, you are not allowed yet`, 'Please, contact admin!'); }
        } else {
          const data = await metadataResponse.json();
          setUserMetadata(data);
          
        }
      } catch (e) {
        console.log("Unhandled error:", e.message);
        setUserMetadata({ errorMessage: e.message });
      }
    };
    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);

  if (userMetadata === null) {
    return <LoadingPage />
  }

  return (
    (
      userMetadata?.errorMessage != null
        ? <ErrorPage message={userMetadata?.errorMessage} />
        : 
          <div>
            <AccountHeader user={user} />
            <TabContext value={selectedTab}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={(ev, newv) => setSelectedTab(newv)} aria-label="lab API tabs example">
                  <Tab label="Personal Details" value="1" />
                  <Tab label="Documents" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <AccountDetails user={userMetadata} />
              </TabPanel>
              <TabPanel value="2">
                <AccountDocuments docs={userMetadata.documents} />
              </TabPanel>
            </TabContext>
          </div>
    )
  );
}

export default Account;
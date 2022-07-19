import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";


const Account = () => {
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
    const [userMetadata, setUserMetadata] = useState(null);

    useEffect(() => {
        const getUserMetadata = async () => {
          const domain = "localhost:7119";
      
          try {
            const accessToken = await getAccessTokenSilently({
                audience: "https://dev-2sq5ot8u.us.auth0.com/api/v2/",
                scope: "read:users"
            });
            console.log('token', accessToken);
            const userDetailsByIdUrl = `https://${domain}/students/claims`;
      
            const metadataResponse = await fetch(userDetailsByIdUrl, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            });
      
            const claims = await metadataResponse.json();
      
            setUserMetadata(claims);
          } catch (e) {
            console.log("ERROR!!! - ", e.message);
          }
        };
        getUserMetadata();
      }, [getAccessTokenSilently, user?.sub]);

    return (
        isAuthenticated && (
          <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
                <p>{user.email}</p>
            <h3>User Metadata</h3>
            {userMetadata ? (
              <ul>
                {userMetadata.map((v, i) => 
                  (<li key={i}>
                    <p>{`${v.type} - ${v.value}`}</p>
                  </li>)
                )
                }
              </ul>
            ) : (
              "No user metadata defined"
            )}
          </div>
        )
      );
}

export default Account;
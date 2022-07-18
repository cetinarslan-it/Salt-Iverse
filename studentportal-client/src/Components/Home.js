import React from 'react'
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

const Home = () => {
    const { user, isAuthenticated } = useAuth0();
    return (
        <>
            {(isAuthenticated && <h1>{`Hello, ${user.name}`}</h1>)}
        </>
    );
}

export default Home;
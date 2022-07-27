import React from 'react'
import Button from '@mui/material/Button';
import { useAuth0 } from "@auth0/auth0-react";
import LogoutIcon from '@mui/icons-material/Logout';

const WrongUser = () => {
    const { user, logout } = useAuth0();
    return (
        <>
            <h1>Sorry, you are not allowed to use this app</h1>
            <p>Your have logged in by: <strong>{ user.email}</strong></p>
            <p>Please, use your work google account</p>
            <Button
                variant='outlined'
                startIcon={<LogoutIcon/>}
                onClick={() => logout({ returnTo: window.location.origin })}>
                Log out
            </Button>
        </>
    );
}

export default WrongUser;
import React from 'react'
import Button from '@mui/material/Button';
import { useAuth0 } from "@auth0/auth0-react";
import LogoutIcon from '@mui/icons-material/Logout';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';



const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <Button variant="text"
            sx={{ color: "white" }}

            startIcon={<LogoutIcon />}
            onClick={() => logout({ returnTo: window.location.origin })}>
            LogOut
        </Button>
    );
}

export default LogoutButton;
import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import MobCard from './MobCard';
import { useAuth0 } from "@auth0/auth0-react";


const AccountCard = () => {
    const { user } = useAuth0();

    if (!user) {
        return <div>Cannot get user info</div>
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: '100%'
                }}>
                
                <Avatar src={user?.picture}
                    sx={{
                        my: 1,
                        width: 60,
                        height: 60
                    }} />
                <Typography variant='h5' >
                    {user.name}
                </Typography>
                <Typography variant='subtitle2' color="text.secondary" >
                    {`Course: DNFS-SUMMER-2022`}
                </Typography>
            </Box>
        </>
    );
}

export default AccountCard;
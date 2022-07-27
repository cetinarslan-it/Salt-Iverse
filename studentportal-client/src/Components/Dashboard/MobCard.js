import React from 'react';
import Box from '@mui/material/Box';
import { useAuth0 } from "@auth0/auth0-react";
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { textAlign } from '@mui/system';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';


import Stack from '@mui/material/Stack';

const mob = {
    name: "SilentShooters",
    members: [
        { name: "Ankita" },
        { name: "Rinat" },
        { name: "Migle" },
    ]
};

const MobCard = () => {
    const theme = useTheme();
    const { user } = useAuth0();
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}>
                <Typography variant="subtitle1" sx={{
                    fontWeight: 600,
                    color: theme.palette.primary.main,
                    mt: 1, mb: 0.3
                }}>
                    {`</${mob.name}>`}
                </Typography>
                <Stack spacing={2} direction="row" justifyContent="center">
                    {mob.members.map(member => 
                        <Stack >
                            <Avatar>{ member.name[0]}</Avatar>
                            <Typography>
                                {member.name}
                            </Typography>
                        </Stack>)}
                </Stack>
            </Box>
        </>
    );
}

export default MobCard;
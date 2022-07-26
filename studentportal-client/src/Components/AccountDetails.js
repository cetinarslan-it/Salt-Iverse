import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { useAuth0 } from "@auth0/auth0-react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';


const AccountDetails = ({ user }) => {
    const { getAccessTokenSilently } = useAuth0();
    const [linkedInValue, setLinkedInValue] = useState(user.linkedInUrl);
    const [githubValue, setGithubValue] = useState(user.gitHubUrl);

    const onSaveClick = (endpoint, value) => {
        const patch = async () => {
            const accessToken = await getAccessTokenSilently({
                audience: "https://dev-2sq5ot8u.us.auth0.com/api/v2/",
                scope: "read:users"
            });
            var res = await fetch(`https://studentportalapi.azurewebsites.net/${endpoint}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    url: value,
                }),
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-type': 'application/json; charset=UTF-8'
                },
            });
            console.log(res);
        };
        patch();
    };

return (
    <Box
        component="form"
        sx={{
            display: 'flex',
            alignItems: 'strech',
            flexDirection: 'column',
            '& > :not(style)': { m: 2 },
        }}
        noValidate
        autoComplete="off"
    >
        <TextField
            label="Full name"
            value={user.fullName}
            variant="filled"
            InputProps={{
                readOnly: true,
            }}
        />
        <TextField
            label="Email"
            value={user.email}
            variant="filled"
            InputProps={{
                readOnly: true,
            }}
        />
        <TextField
            label="Mob Name"
            value={user.mobName}
            variant="filled"
            InputProps={{
                readOnly: true,
            }}
        />
        <TextField
            label="Courses"
            value={user.course.courseName}
            variant="filled"
            InputProps={{
                readOnly: true,
            }}
        />

        <Stack direction="row" spacing={2}>
            <TextField
                label="LinkedIn"
                value={linkedInValue}
                onChange={(e) => setLinkedInValue(e.target.value)}
                sx={{ flexGrow: "1" }}
            />
            <IconButton variant="outlined"
                disabled={linkedInValue === user.linkedInUrl}
                onClick={() => onSaveClick("linkedin", linkedInValue)}>
                <SaveIcon />
            </IconButton>
        </Stack>

        <Stack direction="row" spacing={2}>
            <TextField
                label="GitHub"
                value={githubValue}
                onChange={(e) => setGithubValue(e.target.value)}
                sx={{ flexGrow: "1" }}
            />
            <IconButton variant="outlined"
                disabled={githubValue === user.gitHubUrl}
                onClick={() => onSaveClick("github", githubValue)}>
                <SaveIcon />
            </IconButton>
        </Stack>
    </Box>
);
}

export default AccountDetails;
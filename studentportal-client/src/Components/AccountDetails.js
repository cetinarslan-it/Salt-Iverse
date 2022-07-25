import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const AccountDetails = ({ user }) => {
    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: 'column',
                '& > :not(style)': { m: 2, width: '35ch' },
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
            <TextField
                label="LinkedIn"
                value={user.linkedInUrl}
                InputProps={{
                    readOnly: false,
                }}
            />
            <TextField
                label="GitHub"
                value={user.gitHubUrl}
                InputProps={{
                    readOnly: true,
                }}
            />
        </Box>
    );
}

export default AccountDetails;
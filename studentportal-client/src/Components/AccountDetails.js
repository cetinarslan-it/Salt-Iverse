import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';


const AccountDetails = ({ user }) => {
    const [liEditable, setLiEditable] = useState(false);
    const onEditClickHandled = () => {
        setLiEditable(true);
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
                    value={user.linkedInUrl}
                    InputProps={{
                        readOnly: liEditable,
                    }}
                    sx={{flexGrow: "1"}}
                />
                <IconButton variant="outlined" onClick={onEditClickHandled}>
                    <EditIcon />
                </IconButton>
                <IconButton variant="outlined" disabled>
                    <SaveIcon />
                </IconButton>
            </Stack>    

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
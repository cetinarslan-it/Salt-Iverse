import React from 'react';
import Box from '@mui/material/Box';
import {  useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { textAlign } from '@mui/system';
import { Link } from 'react-router-dom';

const topic = {
    id: 14,
    name: "Introduction to ASP.NET WebAPI",
    weekNo: 5
}

const CurrentTopicCard = () => {
    const theme = useTheme();
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                <Box sx={{ alignItems: 'flex-start', textAlign:'left' }}>
                    <Typography variant="subtitle1" color="text.secondary">
                        Current topic
                    </Typography>
                    <Typography variant='h5' >
                        {topic.name}
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}>
                    <Typography variant="subtitle2" color="text.secondary">
                        {`Week ${topic.weekNo}`}
                    </Typography>
                    <Button variant="contained" component={Link} to={`/topics/${topic.id}`}>
                        Learn
                    </Button>
                </Box>
            </Box>
        </>
    );
}

export default CurrentTopicCard;
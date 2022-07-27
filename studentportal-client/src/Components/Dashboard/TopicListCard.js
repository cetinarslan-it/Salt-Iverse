import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Stack from '@mui/material/Stack';
import TopicListItemCard from './TopicListItemCard';

const topicList = [
    {
        id: 13,
        name: 'C# reflections',
        description: "nfsbdjhdfbdsfn dsds sf snsfhjs fbhjs fms"
    },
    {
        id: 12,
        name: 'C# Functional',
        description: "nfsbdjhdfbdsfn dsds sf snsfhjs fbhjs fms"
    },
    {
        id: 11,
        name: 'Repository pattern',
        description: "nfsbdjhdfbdsfn dsds sf snsfhjs fbhjs fms"
    }
]

const TopicListCard = () => {
    return (
        <Box>
            <Typography variant="subtitle1" color="text.secondary" sx={{ textAlign: "left", mb: 1 }}>
                Last topics
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="space-between">
                {topicList.map(topic => <TopicListItemCard topic={topic} />)}
            </Stack>
        </Box>
    );
}

export default TopicListCard;
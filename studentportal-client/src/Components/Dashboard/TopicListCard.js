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
        description: "Reflection provides objects that describe assemblies, modules, and types"
    },
    {
        id: 12,
        name: 'C# Functional',
        description: "A programming paradigm in C# that is frequently combined with object orie"
    },
    {
        id: 11,
        name: 'Repository pattern',
        description: "How to integrate all of the fundamental data operations relssssssssssssss"
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
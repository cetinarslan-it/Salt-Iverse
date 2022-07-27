import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo from './reactlogo.svg';
import { maxHeight } from '@mui/system';
import { Link } from 'react-router-dom';

const TopicListItemCard = ({ topic }) => {
    return (
        <Card sx={{
            display: 'flex', flexDirection: 'column', backgroundColor: '#eaeaea'
        }}>
            <CardHeader
                sx={{pb: 0.5, textAlign: 'left'}}
                title={
                    <Typography gutterBottom variant="h6" component="h4" sx={{fontSize: 16}}>
                        {topic.name}
                    </Typography>
                }/>
            <CardContent sx={{flexGrow: 1, py: 0}}>
                <Typography noWrap variant="body2" color="text.secondary" sx={{
                    fontSize: 12,
                    overflow: 'hidden',
                }}>
                    {topic.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" component={Link} to={`/topics/${topic.id}`}>
                    Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default TopicListItemCard;
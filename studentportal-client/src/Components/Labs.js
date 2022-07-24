import React from 'react';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ListItemIcon from '@mui/material/ListItemIcon';
import GitHubIcon from '@mui/icons-material/GitHub';

const Labs = ({labs}) => {
    return (
        <>
        <List>
            {labs?.map((lab, i) =>
                <ListItem key={i}>
                    <ListItemIcon>
                        <GitHubIcon />
                    </ListItemIcon>
                    <Link href={lab.labUrl} target="blank">{lab.labName}</Link>
                    <p> {lab.description} </p>
                </ListItem>
            )}
        </List>
    </>
    );
}

export default Labs;
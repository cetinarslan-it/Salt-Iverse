import React from 'react'
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ListItemIcon from '@mui/material/ListItemIcon';


const Presentation = ({ pres }) => {
    return (
        <>
            <List>
                {pres?.map((pr, i) =>
                    <ListItem key={i}>
                        <ListItemIcon>
                            <PictureAsPdfIcon />
                        </ListItemIcon>
                        <Link href={pr.presentationUrl} target="blank">{pr.presentationName}</Link>
                    </ListItem>
                )}
            </List>
        </>
    );
}

export default Presentation;
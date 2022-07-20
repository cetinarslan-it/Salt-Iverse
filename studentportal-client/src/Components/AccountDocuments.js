import React from 'react'
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ListItemIcon from '@mui/material/ListItemIcon';



const AccountDocuments = () => {
    const docs = [
        {
            title: "Macbook rental contract",
            url: "https://drive.google.com/file/d/1BuolmtoS2B-CEvQZTtB2H5dwVoevFKbP/view?usp=sharing"
        },
        {
            title: "Bootcamp study contract",
            url: "https://drive.google.com/file/d/13AL0UAxWGg2zqT9CvHEveRCwAsuJLBvo/view?usp=sharing"
        },
    ];

    return (
        <>
            <List>
                {docs.map((d, i) =>
                    <ListItem key={i}>
                        <ListItemIcon>
                            <PictureAsPdfIcon/>
                        </ListItemIcon>
                        <Link href={d.url} target="blank">{d.title}</Link>
                    </ListItem>
                )}
            </List>
        </>
    );
}

export default AccountDocuments;
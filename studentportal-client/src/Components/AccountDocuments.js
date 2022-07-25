import React from 'react'
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ListItemIcon from '@mui/material/ListItemIcon';

// const docs = [
//     {
//         title: "Macbook rental contract",
//         url: "https://drive.google.com/file/d/1BuolmtoS2B-CEvQZTtB2H5dwVoevFKbP/view?usp=sharing"
//     },
//     {
//         title: "Bootcamp study contract",
//         url: "https://drive.google.com/file/d/13AL0UAxWGg2zqT9CvHEveRCwAsuJLBvo/view?usp=sharing"
//     },
// ];

const AccountDocuments = ({ docs }) => {
    
    if (!docs) {
        return <p>There are no documents for you, sorry</p>
    }
    return (
        <>
            <List>
                {docs.map((doc, i) =>
                    <ListItem key={i}>
                        <ListItemIcon>
                            <PictureAsPdfIcon/>
                        </ListItemIcon>
                        <Link href={doc.documentUrl} target="blank">{doc.documentName}</Link>
                    </ListItem>
                )}
            </List>
        </>
    );
}

export default AccountDocuments;
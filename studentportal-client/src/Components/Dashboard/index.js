import * as React from 'react';
import { styled, createTheme, useTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';

import AccountCard from './AccountCard';
import CurrentTopicCard from './CurrentTopicCard';
import TopicListCard from './TopicListCard';
import MobCard from './MobCard';


const currentTopic = {
    name: "React hooks",
    weekNo: 7
};

const Dashboard = () => {
    const theme = useTheme();
    return (
        <Box component="main"
            sx={{

                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
            }}>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                    
                    <Grid item xs={12} md={8} lg={9}>
                        <Paper
                            sx={{
                                p: 2, mb: 3,
                                display: 'flex',
                                flexDirection: 'column',
                                backgroundColor: '#c0dffe'
                            }}>
                            <CurrentTopicCard topic={currentTopic} />
                        </Paper>

                        <Box
                            sx={{
                                p: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                m: 0
                            }}>
                            <TopicListCard />
                        </Box>
                    </Grid>
                    
                    <Grid item xs={12} md={4} lg={3}>
                        <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%'
                            }}
                        >
                            <AccountCard />
                            <MobCard/>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Dashboard;
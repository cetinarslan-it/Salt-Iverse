import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import LogoutIcon from '@mui/icons-material/Logout';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from './LogoutButton';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';

import PersonIcon from '@mui/icons-material/Person';
import BookIcon from '@mui/icons-material/Book';
import ScienceIcon from '@mui/icons-material/Science';
import QuizIcon from '@mui/icons-material/Quiz';

import { Link, NavLink } from 'react-router-dom';

const drawerWidth = 240;
const menuItems = [
  { name: 'Account', icon: <PersonIcon /> },
  { name: 'Topics', icon: <BookIcon /> },
  { name: 'Labs', icon: <ScienceIcon /> },
  { name: 'Assignments', icon: <QuizIcon /> }
];

const Navbar = (props) => {
  const { window } = props;
  const { user, logout } = useAuth0();

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogoutClick = () => {
    logout({
      returnTo: window.location.origin
    })
  };

  const drawer = (
    <div>
      <Toolbar
        sx={{ color: "white", backgroundColor: "rgb(25, 118, 210)", justifyContent: "center" }}>
        <img src="https://precourse.salt.study/_next/static/media/salt-logo-white.3c845df7.svg" alt="salt" width="100px" />
      </Toolbar>
      <Divider />
      <List>
        {menuItems.map((menuItem, index) => (
          <ListItem key={menuItem.name} disablePadding>
            <Button
              sx={(theme) => ({
                padding: '0',
                flexGrow: '1',
                '&.active': {
                  backgroundColor: theme.palette.primary.main,
                  color: 'white',
                }
              })}
              component={NavLink}
              to={`/${menuItem.name.toLowerCase()}`}>
              <ListItemButton>
                {menuItem.icon}
                <ListItemText primary={menuItem.name}
                  sx={{ marginLeft: "20px" }}
                />
              </ListItemButton>
            </Button>
          </ListItem>
        ))}
      </List>
      <Divider />

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <Stack
            sx={{ width: "100%" }}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={0}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                Student Portal
              </Typography>
            </Stack>
            {/* <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center">

              <LogoutButton />

              <Avatar alt={user.name} src={user.picture} />
            </Stack> */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={user.name} src={user.picture} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem key="profileItem" onClick={handleCloseUserMenu} sx={{ padding: 0 }}>
                  <Button sx={{ px: 5, flexGrow: 1 }} component={Link} to="/account" startIcon={<PersonIcon />}>
                    <Typography>Account</Typography>
                  </Button>
                </MenuItem>
                <Divider />
                <MenuItem key="logoutItem" onClick={handleLogoutClick} sx={{ padding: 0 }}>
                  <Button sx={{ px: 5, flexGrow: 1 }} startIcon={<LogoutIcon />}>
                    <Typography>Logout</Typography>
                  </Button>
                </MenuItem>
              </Menu>
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}

export default Navbar;
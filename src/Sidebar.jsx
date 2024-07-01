import EmailIcon from '@mui/icons-material/AlternateEmail';
import ArticleIcon from '@mui/icons-material/Article';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DataObjectIcon from '@mui/icons-material/DataObject';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Drawer, DrawerHeader, drawerWidth } from './sidebarStyles';

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
      setOpen(true);
  };

  const handleDrawerClose = () => {
      setOpen(false);
  };
  
  const sidebarOptions = [
    { icon: <PersonIcon />, text: 'About Me', route: '/' },
    { icon: <DataObjectIcon />, text: 'Projects', route: '/projects' },
    { icon: <ArticleIcon />, text: 'Resources', route: '/resources' },
    { icon: <SchoolIcon />, text: 'Academic', route: '/resources' },
    { icon: <DeveloperBoardIcon />, text: 'Skills', route: '/skills' },
    { icon: <EmailIcon />, text: 'Contact', route: '/contact' },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{marginRight: 5, ...(open && { display: 'none' })}}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="overline" noWrap component="div">
              OKRIM | Computer Science portfolio
          </Typography>
          </Box>
          <Box component="img" src="/icon.png" alt="logo" sx={{ maxHeight: '30px', width: 'auto', marginLeft: '10px' }} />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Divider />
        <List>
          {sidebarOptions.map((option, index) => (
            <ListItem key={option.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton component={Link} to={option.route}
                  sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }}
              >
                  <Tooltip title={option.text} placement="right">
                  <ListItemIcon
                  sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}
                  >
                      {option.icon}
                  </ListItemIcon>
                  </Tooltip>
                  <ListItemText primary={option.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/* Adjust content margin based on sidebar state */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 3,
          marginLeft: open ? `${drawerWidth}px` : 0, // Add margin if sidebar is open
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      ></Box>
    </Box>
  );
}
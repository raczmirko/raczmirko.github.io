import EmailIcon from "@mui/icons-material/AlternateEmail";
import ResourceIcon from "@mui/icons-material/Article";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ProjectIcon from "@mui/icons-material/DataObject";
import SkillsIcon from "@mui/icons-material/DeveloperBoard";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import AcademicIcon from "@mui/icons-material/School";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import * as React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  AppBar,
  Drawer,
  DrawerHeader,
  drawerWidth,
} from "../../assets/sidebarStyles";
import LanguageSelector from '../common/LanguageSelector';
import LanguageIcon from "@mui/icons-material/Language";

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const { t: translate } = useTranslation();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const sidebarOptions = [
    { icon: <HomeIcon />, text: translate("menu.home"), route: "/" },
    { icon: <PersonIcon />, text: translate("menu.about"), route: "/about" },
    {
      icon: <ProjectIcon />,
      text: translate("menu.projects"),
      route: "/projects",
    },
    {
      icon: <ResourceIcon />,
      text: translate("menu.resources"),
      route: "/resources",
    },
    {
      icon: <AcademicIcon />,
      text: translate("menu.academic"),
      route: "/academic",
    },
    { icon: <SkillsIcon />, text: translate("menu.skills"), route: "/skills" },
    { icon: <EmailIcon />, text: translate("menu.contact"), route: "/contact" },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ marginRight: 5, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="overline" noWrap component="div">
              {translate("general.pageTitle")}
            </Typography>
          </Box>
          <Box
            component="img"
            src="/icon.png"
            alt="logo"
            sx={{ maxHeight: "30px", width: "auto", marginLeft: "10px" }}
          />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Divider />
        <List>
          {/* Pages */}
          {sidebarOptions.map((option, index) => (
            <ListItem
              key={option.text}
              disablePadding
              sx={{ display: "block" }}
            >
              <ListItemButton
                component={Link}
                to={option.route}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <Tooltip title={option.text} placement="right">
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {option.icon}
                  </ListItemIcon>
                </Tooltip>
                <ListItemText
                  primary={option.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          {/* Language selector */}
          <ListItem sx={{ minHeight: 48, px: 2.5 }}>
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <LanguageIcon />
            </ListItemIcon>
            <LanguageSelector sx={{ opacity: open ? 1 : 0 }} />
          </ListItem>
        </List>
      </Drawer>
      {/* Adjust content margin based on sidebar state */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
          marginLeft: open ? `${drawerWidth}px` : 0, // Add margin if sidebar is open
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      ></Box>
    </Box>
  );
}

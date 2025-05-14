import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Link,
  useScrollTrigger,
  Slide,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Divider,
  Grid,
  Stack,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  YouTube as YouTubeIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import { useTheme as useAppTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";

interface LayoutProps {
  children: React.ReactNode;
}

interface HideOnScrollProps {
  children: React.ReactElement;
}

interface NavigationItem {
  label: string;
  path: string;
}

interface AuthItem {
  label: string;
  path?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

function HideOnScroll(props: HideOnScrollProps) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useAppTheme();
  const { isAuthenticated, user, logout } = useAuth();

  const navigationItems: NavigationItem[] = [
    { label: "Home", path: "/" },
    { label: "Hidden Gems", path: "/hidden-gems" },
    { label: "Upcoming", path: "/upcoming" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const authItems: AuthItem[] = isAuthenticated
    ? [
        {
          label: "Profile",
          path: "/profile",
          icon: <PersonIcon sx={{ mr: 1 }} />,
        },
        {
          label: "Logout",
          onClick: () => {
            logout();
            navigate("/");
          },
        },
      ]
    : [
        { label: "Login", path: "/login" },
        { label: "Register", path: "/register" },
      ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        FestiveFusion
      </Typography>
      <Divider />
      <List>
        {navigationItems.map((item) => (
          <ListItem
            key={item.label}
            onClick={() => navigate(item.path)}
            sx={{
              backgroundColor:
                location.pathname === item.path
                  ? theme.palette.primary.main
                  : "transparent",
              color:
                location.pathname === item.path
                  ? theme.palette.primary.contrastText
                  : "inherit",
              "&:hover": {
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.primary.contrastText,
              },
            }}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
        <Divider sx={{ my: 1 }} />
        {authItems.map((item) => (
          <ListItem
            key={item.label}
            onClick={() =>
              item.onClick ? item.onClick() : item.path && navigate(item.path)
            }
            sx={{
              backgroundColor:
                location.pathname === item.path
                  ? theme.palette.primary.main
                  : "transparent",
              color:
                location.pathname === item.path
                  ? theme.palette.primary.contrastText
                  : "inherit",
              "&:hover": {
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.primary.contrastText,
              },
            }}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <HideOnScroll>
        <AppBar position="fixed" color="default" elevation={0}>
          <Container maxWidth="lg">
            <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: 700,
                    color: theme.palette.primary.main,
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/")}
                >
                  FestiveFusion
                </Typography>
              </Box>

              {isMobile ? (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
              ) : (
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  {navigationItems.map((item) => (
                    <Button
                      key={item.label}
                      onClick={() => navigate(item.path)}
                      sx={{
                        color:
                          location.pathname === item.path
                            ? theme.palette.primary.main
                            : "inherit",
                        fontWeight: location.pathname === item.path ? 600 : 400,
                        "&:hover": {
                          backgroundColor: "transparent",
                          color: theme.palette.primary.main,
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  ))}
                  {authItems.map((item) => (
                    <Button
                      key={item.label}
                      onClick={() =>
                        item.onClick
                          ? item.onClick()
                          : item.path && navigate(item.path)
                      }
                      startIcon={item.icon}
                      sx={{
                        color:
                          location.pathname === item.path
                            ? theme.palette.primary.main
                            : "inherit",
                        fontWeight: location.pathname === item.path ? 600 : 400,
                        "&:hover": {
                          backgroundColor: "transparent",
                          color: theme.palette.primary.main,
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  ))}
                  <IconButton onClick={toggleTheme} color="inherit">
                    {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
                  </IconButton>
                </Box>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 240,
          },
        }}
      >
        {drawer}
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: { xs: 8, sm: 9 },
          pb: { xs: 6, sm: 8 },
        }}
      >
        {children}
      </Box>

      <Box
        component="footer"
        sx={{
          py: 6,
          px: 2,
          mt: "auto",
          backgroundColor: theme.palette.background.paper,
          borderTop: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Discover the rich cultural heritage of India through its vibrant
                festivals. We bring you authentic experiences and hidden gems of
                Indian celebrations.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Quick Links
              </Typography>
              <Stack spacing={1}>
                {navigationItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.path}
                    color="text.secondary"
                    sx={{
                      textDecoration: "none",
                      "&:hover": {
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Contact Us
              </Typography>
              <Stack spacing={1}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <EmailIcon color="primary" />
                  <Typography variant="body2" color="text.secondary">
                    info@festivefusion.com
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <PhoneIcon color="primary" />
                  <Typography variant="body2" color="text.secondary">
                    +91 123 456 7890
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <LocationIcon color="primary" />
                  <Typography variant="body2" color="text.secondary">
                    Mumbai, India
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Follow Us
              </Typography>
              <Stack direction="row" spacing={2}>
                <IconButton
                  color="primary"
                  aria-label="Facebook"
                  component="a"
                  href="#"
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  color="primary"
                  aria-label="Twitter"
                  component="a"
                  href="#"
                >
                  <TwitterIcon />
                </IconButton>
                <IconButton
                  color="primary"
                  aria-label="Instagram"
                  component="a"
                  href="#"
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  color="primary"
                  aria-label="YouTube"
                  component="a"
                  href="#"
                >
                  <YouTubeIcon />
                </IconButton>
              </Stack>
            </Grid>
          </Grid>
          <Box
            sx={{
              mt: 4,
              pt: 2,
              borderTop: `1px solid ${theme.palette.divider}`,
              textAlign: "center",
            }}
          >
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} FestiveFusion. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;

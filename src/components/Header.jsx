import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

import logo from '../assets/servelink icon.png'

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (id) => {
    if (location.pathname !== '/') {
      // go home first
      navigate('/', { state: { scrollTo: id } });
    } else {
      // already home → just scroll
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const toggleDrawer = (open) => () => {
    setMobileOpen(open);
  };
  const handleMobileNav = (id, path = '/') => {
    setMobileOpen(false);

    if (path !== location.pathname) {
      navigate(path, { state: id ? { scrollTo: id } : null });
    } else if (id) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };




  // const handleScroll = (id) => {
  //   const el = document.getElementById(id);
  //   if (el) {
  //     el.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };



  const handleScrol = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        paddingY: 1,
        px: { xs: 2, md: 8 },
        borderBottom: '1px solid #f1f1f1',
        position: 'fixed',
        backgroundColor: 'white',
        top: 0,
        left: 0,

      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: 0 }}>

        { }

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, paddingLeft: '85px', }}>
          <img
            src={logo}
            alt="Servelink Logo"
            style={{ height: 40, width: 'auto', cursor: "pointer" }}
            onClick={() => navigate('/')}
          />
          <Typography variant="h6" sx={{ fontWeight: 800 }}>
            Servelink
          </Typography>
        </Box>


        {/* NAV LINKS (Desktop Only) */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            gap: 3,
            alignItems: 'center'
          }}
        >



          <Button
            sx={{
              textTransform: 'none',
              fontSize: '1rem'
            }}
            onClick={() => handleNavClick('howItWorks')}
          >
            How It Works
          </Button>

          <Button
            sx={{ textTransform: 'none', fontSize: '1rem' }}
            onClick={() => handleNavClick('Categories')}
          >Services
          </Button>
          <Button sx={{ textTransform: 'none', fontSize: '1rem' }}
            onClick={() => handleNavClick('CTASection')}
          >
            Pricing
          </Button>
          <Button
            sx={{ textTransform: 'none', fontSize: '1rem' }}
            onClick={() => handleNavClick('Testimonials')}
          >
            About
          </Button>
        </Box>

        {/* BUTTONS */}
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Button
            variant="text"
            sx={{
              display: { xs: 'none', sm: 'inline-flex' },
              textTransform: 'none',
              fontSize: '1rem'
            }}
            onClick={() => navigate('/service')}

          >
            Sign In
          </Button>

          <Button
            variant="contained"
            sx={{
              textTransform: 'none',
              fontSize: '1rem',
              px: 2.5,
              bgcolor: '#0A66FF',
              ':hover': { bgcolor: '#004CE8' }
            }}
            onClick={() => navigate('/join')}

          >
            Join Now
          </Button>

          {/* MOBILE MENU ICON */}
          <IconButton
            sx={{ display: { md: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon sx={{ fontSize: '2rem' }} />
          </IconButton>

        </Box>

      </Toolbar>
      <Drawer
  anchor="right"
  open={mobileOpen}
  onClose={toggleDrawer(false)}
>
  <Box sx={{ width: 260, mt: 2 }}>
    <List>

      <ListItem disablePadding>
        <ListItemButton onClick={() => handleMobileNav('howItWorks')}>
          <ListItemText primary="How It Works" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton onClick={() => handleMobileNav('Categories')}>
          <ListItemText primary="Services" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton onClick={() => handleMobileNav('CTASection')}>
          <ListItemText primary="Pricing" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton onClick={() => handleMobileNav('Testimonials')}>
          <ListItemText primary="About" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton onClick={() => handleMobileNav(null, '/join')}>
          <ListItemText primary="Join as Expert" />
        </ListItemButton>
      </ListItem>

    </List>
  </Box>
</Drawer>

    </AppBar>
  )
}
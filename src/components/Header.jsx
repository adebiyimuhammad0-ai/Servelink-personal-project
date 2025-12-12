import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import logo from '../assets/servelink icon.png'

export default function Header() {
   const handleScroll = (id)=> { 
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
        top:0,
        left:0,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: 0 }}>

        { }

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, paddingLeft: '85px', }}>
          <img
            src={logo}
            alt="Servelink Logo"
            style={{ height: 40, width: 'auto', cursor: "pointer" }}
            onClick={() => handleScroll('home')}
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
            onClick={() => handleScroll('howItWorks')}
          >
            How It Works
          </Button>

          <Button 
          sx={{ textTransform: 'none', fontSize: '1rem' }}
          onClick={() => handleScroll('Categories')}
          >Services
          </Button>
          <Button sx={{ textTransform: 'none', fontSize: '1rem' }}
          onClick={() => handleScroll('CTASection')}
          >
            Pricing
            </Button>
          <Button 
          sx={{ textTransform: 'none', fontSize: '1rem' }}
          onClick={() => handleScroll('Testimonials')}
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
          >
            Join Now
          </Button>

          {/* MOBILE MENU ICON */}
          <IconButton sx={{ display: { md: 'none' } }}>
            <MenuIcon sx={{ fontSize: '2rem' }} />
          </IconButton>
        </Box>

      </Toolbar>
    </AppBar>
  )
}
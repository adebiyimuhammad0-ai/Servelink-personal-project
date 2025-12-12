import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import Chip from '@mui/material/Chip'

export default function Hero() {
  return (
    <Grid
      id="home"
      container
      spacing={{ xs: 4, md: 6, lg: 10, }}
      alignItems="center"
      sx={{ mt: { xs: 4, md: 8 }, px: { xs: 2, md: 6, lg: 12 } }}
    >
      {/* LEFT SIDE */}
      <Grid item xs={12} md={6}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            lineHeight: 1.2,
            marginTop: '60px',
            fontSize: { xs: '2rem', md: '3rem', lg: '3.2rem' }
          }}
        >
          Connect with{' '}
          <Box component="span" sx={{ color: 'primary.main' }}>
            Local Experts
          </Box>{' '}
          for Every Job
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mt: 2,
            color: 'text.secondary',
            fontSize: { xs: '1rem', md: '1.15rem' },
            maxWidth: 580
          }}
        >
          Find trusted service providers in your area or offer your skills to
          neighbors who need them. From home repairs to tutoring, we make local
          connections simple.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            gap: 2,
            mt: 4,
            flexWrap: 'wrap'
          }}
        >
          <Button variant="contained" size="large">
            Find Services
          </Button>
          <Button variant="outlined" size="large">
            Offer Your Skills
          </Button>
        </Box>

        {/* Stats */}
        <Box sx={{ display: 'flex', gap: 6, mt: 4 }}>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              50K+
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Active Users
            </Typography>
          </Box>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              15K+
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Services Completed
            </Typography>
          </Box>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              4.9
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Average Rating
            </Typography>
          </Box>
        </Box>
      </Grid>

      {/* RIGHT SIDE — IMAGE */}
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            width: '100%',
            borderRadius: 3,
            overflow: 'hidden',
            boxShadow: 4,
            position: 'relative'
          }}
        >
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1000&q=80"
            alt="Two people shaking hands"
            sx={{
              width: '100%',
              height: { xs: 240, sm: 300, md: 380, lg: 420 },
              objectFit: 'cover'
            }}
          />

          {/* Floating Profile Tag */}
          <Chip
            avatar={<Avatar src="https://randomuser.me/api/portraits/men/32.jpg" />}
            label="Mike Johnson"
            sx={{
              position: 'absolute',
              bottom: 16,
              left: 16,
              bgcolor: 'white',
              fontWeight: 700,
              boxShadow: 3
            }}
          />
        </Box>
      </Grid>
    </Grid>
  )
}
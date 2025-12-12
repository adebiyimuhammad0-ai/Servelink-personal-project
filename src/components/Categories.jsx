import React from 'react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
// import HomeRepairIcon from '@mui/icons-material/Build'
// import TutoringIcon from '@mui/icons-material/MenuBook'
// import PhotoIcon from '@mui/icons-material/CameraAlt'
// import LawnIcon from '@mui/icons-material/Grass'
import homerepairicon from '../assets/homerepair.png'
import tutoringicon from '../assets/tutoring.png'
import photographyicon from '../assets/Photography.png'
import landScapingicon from '../assets/landscaping.png'

const categories = [
  {
    title: 'Home Repair',
    desc: 'Plumbing, electrical, carpentry, and general maintenance',
    icon: (
      <Box
        component="img"
        src={homerepairicon}
        alt="Home Repair"
        sx={{ width: 40, height: 40 }}
      />
    ),
    count: '1,200+ providers',
    color: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);',
  },
  {
    title: 'Tutoring',
    desc: 'Academic support, language learning, test prep',
    icon: (
      <Box
        component="img"
        src={tutoringicon}
        alt="Tutoring"
        sx={{ width: 40, height: 40 }}
      />
    ),
    count: '900+ tutors',
    color: '#14cf62ff',
  },
  {
    title: 'Photography',
    desc: 'Events, portraits, product photography',
    icon: (
      <Box
        component="img"
        src={photographyicon}
        alt="Photography"
        sx={{ width: 40, height: 40 }}
      />
    ),
    count: '450+ photographers',
    color: '#F6EAFB',
  },
  {
    title: 'Landscaping',
    desc: 'Garden design, lawn care, outdoor maintenance',
    icon: (
      <Box
        component="img"
        src={landScapingicon}
        alt="Landscaping"
        sx={{ width: 40, height: 40 }}
      />
    ),
    count: '800+ gardeners',
    color: '#FFF4E6',
  },
];


export default function Categories() {
  return (
    <Box
      id="Categories"
      sx={{
        mt: 19,
        px: {
          xs: 2,
          md: 8
        },
        gap: '20px',
      }}>

      {/* SECTION TITLE */}
      <Box sx={{ textAlign: 'center', mb: 6, backgroundColor: 'beige', }}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Popular Service Categories
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mt: 1 }}
        >
          Discover the most requested services in your area
        </Typography>
      </Box>

      {/* GRID CARDS */}
      <Grid container spacing={10}>
        {categories.map((c) => (
          <Grid key={c.title} item xs={12} sm={6} md={3}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 3,
                cursor: 'pointer',
                bgcolor: 'white',
                height: '100%',
                border: '1px solid #f1f1f1',
                transition: '0.2s ease',
                '&:hover': { transform: 'translateY(-5px)', boxShadow: 3 }
              }}
            >
              <Box sx={{ mb: 2 }}>
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: c.color
                  }}
                >
                  {c.icon}
                </Box>
              </Box>

              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                {c.title}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 1, fontSize: '0.85rem', display: 'block' }}
              >
                {c.desc}
              </Typography>

              <Typography
                variant="subtitle2"
                color="primary"
                sx={{
                  display: 'block',
                  mt: 2,
                  fontWeight: 600,
                  fontSize: '0.9rem'
                }}
              >
                {c.count}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

    </Box>
  )
}
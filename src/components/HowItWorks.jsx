import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'

const steps = [
  {
    title: 'Post Your Need',
    text: 'Describe what you need done, set your budget, and specify your location. Our smart matching system will find the right providers for you.'
  },
  {
    title: 'Get Matched',
    text: 'Receive proposals from verified local professionals. Compare profiles, reviews, and pricing to choose the best fit.'
  },
  {
    title: 'Get It Done',
    text: 'Work directly with your chosen provider. Pay securely through our platform and leave a review.'
  }
]

export default function HowItWorks() {
  return (
    <Box sx={{ mt: 12, px: { xs: 2, md: 8 } }}>

      {/* SECTION HEADER */}
      <Box
        id="howItWorks"
        sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          How SERVELINK Works
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mt: 1, maxWidth: 600, mx: 'auto' }}
        >
          Getting help or finding work is easier than ever
        </Typography>
      </Box>

      {/* STEPS GRID */}
      <Grid container spacing={4}>
        {steps.map((s, idx) => (
          <Grid item xs={12} md={4} key={s.title}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                borderRadius: 3,
                textAlign: 'center',
                border: '1px solid #f0f0f0',
                transition: '0.2s ease-in-out',
                '&:hover': { transform: 'translateY(-4px)', boxShadow: 3 }
              }}
            >
              {/* NUMBER CIRCLE */}
              <Box
                sx={{
                  width: 70,
                  height: 70,
                  borderRadius: '50%',
                  bgcolor: '#0A66FF',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 3,
                  fontSize: '1.5rem',
                  fontWeight: 700
                }}
              >
                {idx + 1}
              </Box>

              {/* TITLE */}
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                {s.title}
              </Typography>

              {/* TEXT */}
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 1, fontSize: '0.95rem', lineHeight: 1.55 }}
              >
                {s.text}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

    </Box>
  )
}
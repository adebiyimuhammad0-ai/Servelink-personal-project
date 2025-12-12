import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'

export default function CTASection() {
  return (
    <Box
    id="CTASection"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: { xs: 8, md: 10 },
        mt: 14
      }}
    >
      <Container maxWidth="lg">

        {/* TEXT */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: 800, mb: 1 }}
          >
            Ready to Get Started?
          </Typography>

          <Typography
            variant="h6"
            sx={{
              opacity: 0.95,
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            Join thousands of users who are already connecting, working, and growing with SERVELINK.
          </Typography>
        </Box>

        {/* BUTTONS */}
        <Box
          sx={{
            display: 'flex',
            gap: 3,
            justifyContent: 'center',
            flexWrap: 'wrap',
            mt: 2
          }}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: 'white',
              color: 'primary.main',
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'none',
              borderRadius: 2,
              '&:hover': { bgcolor: '#f4f4f4' }
            }}
          >
            I Need a Service
          </Button>

          <Button
            variant="outlined"
            sx={{
              borderColor: 'white',
              color: 'white',
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'none',
              borderRadius: 2,
              '&:hover': {
                borderColor: '#e9e9e9',
                bgcolor: 'rgba(255,255,255,0.1)'
              }
            }}
          >
            I Want to Work
          </Button>
        </Box>

      </Container>
    </Box>
  )
}
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1565d8' // strong blue like screenshot
    },
    background: {
      default: '#f4f7fb'
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif'
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true
      }
    }
  }
})







import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function App() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <Header />
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 6, lg: 10 } }}>
        <Hero />
        <Box sx={{ my: 6 }}>
          <Categories />
        </Box>
        <Box sx={{ my: 6 }}>
          <HowItWorks />
        </Box>
        <Box sx={{ my: 6 }}>
          <Testimonials />
        </Box>
      </Container>

      <Box sx={{ mt: 6 }}>
        <CTASection />
        <Footer />
      </Box>
    </Box>
  )
}
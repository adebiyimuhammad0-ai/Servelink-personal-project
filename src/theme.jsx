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


import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    background: { default: "#f5f5f5" }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
    fontWeightBold: 700, // ensures CssBaseline can read this property
  }
});

export default theme;

// export default function App() {
//   return (
//     <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
//       <Header />
//       <Container maxWidth="lg" sx={{ mt: 6 }}>
//         <Hero />
//         <Box sx={{ my: 6 }}>
//           <Categories />
//         </Box>
//         <Box sx={{ my: 6 }}>
//           <HowItWorks />
//         </Box>
//         <Box sx={{ my: 6 }}>
//           <Testimonials />
//         </Box>
//       </Container>

//       <Box sx={{ mt: 6 }}>
//         <CTASection />
//         <Footer />
//       </Box>
//     </Box>
//   )
// }
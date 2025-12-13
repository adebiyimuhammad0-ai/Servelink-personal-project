import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Container } from "@mui/material";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import NeedAService from './assets/pages/signup';
import JoinAsExpert from "./assets/pages/JoinAsExpert";

export default function App() {
  return (
    <BrowserRouter>
      <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
        <Header />

        <Routes>
          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <>
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
              </>
            }
          />

          {/* JOIN AS EXPERT PAGE */}
          <Route path="/join" element={<JoinAsExpert />} />
           {/* I NEED A SERVICE PAGE */}
          <Route path="/service" element={<NeedAService />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

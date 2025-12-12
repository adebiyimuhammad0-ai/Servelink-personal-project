import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#0f1724', color: 'rgba(255,255,255,0.9)', pt: 8, pb: 4 }}>
      <Container maxWidth="lg">

        {/* TOP GRID */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            gap: { xs: 4, md: 8 }
          }}
        >
          {/* BRAND */}
          <Box sx={{ maxWidth: 360 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              SERVELINK
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}
            >
              Connecting local service providers with customers who need them.
              Building stronger communities one service at a time.
            </Typography>
          </Box>

          {/* LINKS */}
          <Box sx={{ display: 'flex', gap: { xs: 6, md: 10 } }}>
            
            {/* CUSTOMER LINKS */}
            <Box>
              <Typography sx={{ fontWeight: 700, mb: 1.5 }}>
                For Customers
              </Typography>

              {[
                'Find Services',
                'How it Works',
                'Support'
              ].map((item) => (
                <Link
                  key={item}
                  href="#"
                  underline="none"
                  sx={{
                    display: 'block',
                    color: 'rgba(255,255,255,0.75)',
                    mb: 1,
                    '&:hover': { color: 'white' }
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>

            {/* PROVIDER LINKS */}
            <Box>
              <Typography sx={{ fontWeight: 700, mb: 1.5 }}>
                For Providers
              </Typography>

              {[
                'Join as Provider',
                'Resources',
                'Community'
              ].map((item) => (
                <Link
                  key={item}
                  href="#"
                  underline="none"
                  sx={{
                    display: 'block',
                    color: 'rgba(255,255,255,0.75)',
                    mb: 1,
                    '&:hover': { color: 'white' }
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Box>
        </Box>

        {/* DIVIDER LINE */}
        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.15)', mt: 6, pt: 3, textAlign: 'center' }}>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>
            © {new Date().getFullYear()} SERVELINK. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
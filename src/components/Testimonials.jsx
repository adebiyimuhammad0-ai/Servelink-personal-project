import React from 'react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Rating from '@mui/material/Rating'
import Box from '@mui/material/Box'

const testimonials = [
  {
    name: 'Sarah Chen',
    title: 'Homeowner',
    avatar: '/profile1.jpg',
    rating: 5,
    text: 'Found an amazing electrician through SERVELINK who fixed my kitchen lighting in just 2 hours. The whole process was seamless.'
  },
  {
    name: 'David Rodriguez',
    title: 'Freelance Tutor',
    avatar: '/profile2.jpg',
    rating: 5,
    text: 'As a math tutor, SERVELINK has helped me connect with students in my area. I built a steady client base quickly.'
  },
  {
    name: 'Maria Thompson',
    title: 'Small Business Owner',
    avatar: '/profile3.jpg',
    rating: 5,
    text: 'The photographer I hired through SERVELINK did an incredible job with our product photos. Professional quality at a fraction of agency costs.'
  }
]

export default function Testimonials() {
  return (
    <Box
    id="Testimonials"
     sx={{ mt: 12, px: { xs: 2, md: 8 } }}>

      {/* HEADER */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          What Our Users Say
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mt: 1 }}
        >
          Real experiences from our community
        </Typography>
      </Box>

      {/* TESTIMONIAL CARDS */}
      <Grid container spacing={4}>
        {testimonials.map((t) => (
          <Grid item xs={12} md={4} key={t.name}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 3,
                border: '1px solid #efefef',
                height: '100%',
                transition: '0.25s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 4
                }
              }}
            >
              {/* TOP ROW: Avatar + Name + Rating */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Avatar
                  src={t.avatar}
                  sx={{ width: 56, height: 56 }}
                />
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    {t.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {t.title}
                  </Typography>
                </Box>

                <Box>
                  <Rating
                    name="read-only"
                    value={t.rating}
                    readOnly
                    size="small"
                  />
                </Box>
              </Box>

              {/* TESTIMONIAL TEXT */}
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  lineHeight: 1.6,
                  fontSize: '0.93rem'
                }}
              >
                {t.text}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

    </Box>
  )
}
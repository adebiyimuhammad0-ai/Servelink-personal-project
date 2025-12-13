import React from "react";
import {
  Box,
  Container,
  TextField,
  Typography,
  Button,
  MenuItem,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function NeedAService() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1485217988980-11786ced9454')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        py: 6,
        marginTop: "90px"
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={6}
          sx={{
            p: { xs: 3, sm: 4 },
            borderRadius: 3,
            backgroundColor: "rgba(255,255,255,0.95)",
          }}
        >
          <Box display="flex" justifyContent="center" mb={1}>
            <Box
              sx={{
                bgcolor: "#e8f5e9",
                p: 1.2,
                borderRadius: "50%",
              }}
            >
              <SearchIcon sx={{ color: "#2e7d32" }} />
            </Box>
          </Box>

          <Typography variant="h6" fontWeight="bold" align="center">
            I Need a Service
          </Typography>
          <Typography
            variant="body2"
            align="center"
            color="text.secondary"
            mb={3}
          >
            Find trusted local experts for any job
          </Typography>

          <TextField
            select
            label="What service do you need?"
            fullWidth
            margin="normal"
          >
            <MenuItem value="plumbing">Plumbing</MenuItem>
            <MenuItem value="electrical">Electrical</MenuItem>
            <MenuItem value="cleaning">Cleaning</MenuItem>
            <MenuItem value="tutoring">Tutoring</MenuItem>
          </TextField>

          <TextField
            label="Describe your project"
            multiline
            rows={3}
            fullWidth
            margin="normal"
            placeholder="Tell us about your project, what needs to be done, and any specific requirements..."
          />

          <TextField
            label="Your Location (Zip Code)"
            fullWidth
            margin="normal"
          />

          <TextField
            select
            label="When do you need this done?"
            fullWidth
            margin="normal"
          >
            <MenuItem value="asap">As soon as possible</MenuItem>
            <MenuItem value="week">Within a week</MenuItem>
            <MenuItem value="month">Within a month</MenuItem>
          </TextField>

          <TextField
            select
            label="Budget Range"
            fullWidth
            margin="normal"
          >
            <MenuItem value="low">Below $100</MenuItem>
            <MenuItem value="medium">$100 – $500</MenuItem>
            <MenuItem value="high">$500+</MenuItem>
          </TextField>

          <Box display="grid" gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr" }} gap={2} mt={1}>
            <TextField label="Your Name" fullWidth />
            <TextField label="Phone Number" fullWidth placeholder="+1 (555) 123-4567" />
          </Box>

          <TextField
            label="Email Address"
            type="email"
            fullWidth
            margin="normal"
            placeholder="your@email.com"
          />

          <Button
            variant="contained"
            fullWidth
            size="large"
            sx={{ mt: 2, py: 1.2, bgcolor: "#2e7d32" }}
          >
            Find Local Experts
          </Button>

          <Box mt={4}>
            <Typography variant="subtitle2" fontWeight="bold" mb={1}>
              How it works
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <b>1.</b> Tell us what you need<br />
              <b>2.</b> Get matched with experts<br />
              <b>3.</b> Choose and hire the best fit
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

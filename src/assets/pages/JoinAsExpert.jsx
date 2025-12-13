import React from "react";
import {
    Box,
    Container,
    TextField,
    Typography,
    Button,
    MenuItem,
    Checkbox,
    FormControlLabel,
    Paper,
} from "@mui/material";

export default function JoinAsExpert() {

    return (
        <Box
         id="joinasexpert"
            sx={{
                minHeight: "100vh",
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
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
                        backdropFilter: "blur(6px)",
                        backgroundColor: "rgba(255,255,255,0.95)",
                    }}
                >
                    <Typography variant="h5" fontWeight="bold" align="center">
                        Join as an Expert
                    </Typography>
                    <Typography
                        variant="body2"
                        align="center"
                        color="text.secondary"
                        mb={3}
                    >
                        Connect with local customers and grow your business
                    </Typography>

                    <Box display="grid" gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr" }} gap={2}>
                        <TextField label="First Name" fullWidth />
                        <TextField label="Last Name" fullWidth />
                    </Box>

                    <TextField
                        label="Email Address"
                        type="email"
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        label="Phone Number"
                        fullWidth
                        margin="normal"
                        placeholder="+1 (555) 123-4567"
                    />

                    <TextField
                        select
                        label="Service Category"
                        fullWidth
                        margin="normal"
                    >
                        <MenuItem value="plumbing">Plumbing</MenuItem>
                        <MenuItem value="electrical">Electrical</MenuItem>
                        <MenuItem value="tutoring">Tutoring</MenuItem>
                        <MenuItem value="cleaning">Cleaning</MenuItem>
                    </TextField>

                    <TextField
                        select
                        label="Years of Experience"
                        fullWidth
                        margin="normal"
                    >
                        <MenuItem value="1-2">1 – 2 years</MenuItem>
                        <MenuItem value="3-5">3 – 5 years</MenuItem>
                        <MenuItem value="6-10">6 – 10 years</MenuItem>
                        <MenuItem value="10+">10+ years</MenuItem>
                    </TextField>

                    <TextField
                        label="Service Area (Zip Code)"
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        label="Tell us about your services"
                        multiline
                        rows={4}
                        fullWidth
                        margin="normal"
                        placeholder="Describe your expertise, services offered, and what makes you unique..."
                    />

                    <FormControlLabel
                        control={<Checkbox />}
                        label={
                            <Typography variant="body2">
                                I agree to the <b>Terms of Service</b> and <b>Privacy Policy</b>
                            </Typography>
                        }
                        sx={{ mt: 1 }}
                    />

                    <Button
                        variant="contained"
                        fullWidth
                        size="large"
                        sx={{ mt: 2, borderRadius: 2, py: 1.2 }}
                    >
                        Join as Expert
                    </Button>

                    <Box mt={4}>
                        <Typography variant="subtitle2" fontWeight="bold">
                            Why join LocalPro?
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            ✓ Connect with local customers
                            <br />✓ Set your own rates and schedule
                            <br />✓ Secure payment processing
                            <br />✓ 24/7 customer support
                        </Typography>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}


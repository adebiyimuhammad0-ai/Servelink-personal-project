import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import { useParams } from "react-router-dom";

import Avatar from "../../../components/common/Avatar";
import Rating from "../../../components/common/Rating";
import VerifiedBadge from "../../../components/common/VerifiedBadge";

import ProviderStats from "../../../components/providers/ProviderStats";
import PortfolioGrid from "../../../components/providers/PortfolioGrid";
import ServiceCard from "../../../components/providers/ServiceCard";

import providers from "../../../data/providers";
import services from "../../../data/services";

function ProviderProfile() {
  const { providerId } = useParams();

  const provider = providers.find(
    (item) =>
      item.id === Number(providerId)
  );

  const providerServices =
    services.filter(
      (service) =>
        service.providerId ===
        Number(providerId)
    );

  if (!provider) {
    return (
      <Container sx={{ py: 8 }}>
        <Typography variant="h5">
          Provider not found
        </Typography>
      </Container>
    );
  }

  const portfolio = [
    provider.cover,
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
  ];

  return (
    <Box
      sx={{
        backgroundColor:
          "background.default",
        minHeight: "100vh",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            borderRadius: 3,
            border: "1px solid",
            borderColor:
              "divider",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={provider.cover}
            sx={{
              width: "100%",
              height: {
                xs: 180,
                md: 280,
              },
              objectFit: "cover",
            }}
          />

          <Box sx={{ p: 3 }}>
            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              justifyContent="space-between"
              spacing={2}
            >
              <Stack
                direction="row"
                spacing={2}
              >
                <Avatar
                  src={provider.avatar}
                  name={provider.name}
                  size={82}
                />

                <Box>
                  <Stack direction="row">
                    <Typography
                      variant="h5"
                      fontWeight={700}
                    >
                      {provider.name}
                    </Typography>

                    {provider.verified && (
                      <VerifiedBadge
                        size={20}
                      />
                    )}
                  </Stack>

                  <Typography
                    color="text.secondary"
                  >
                    {provider.category}
                  </Typography>

                  <Rating
                    value={provider.rating}
                    count={
                      provider.reviewCount
                    }
                  />
                </Box>
              </Stack>

              <Stack
                direction="row"
                spacing={1}
              >
                <Button
                  variant="outlined"
                  sx={{
                    textTransform:
                      "none",
                  }}
                >
                  Message
                </Button>

                <Button
                  variant="contained"
                  sx={{
                    textTransform:
                      "none",
                  }}
                >
                  Request service
                </Button>
              </Stack>
            </Stack>

            <ProviderStats
              provider={provider}
            />

            <Divider sx={{ my: 3 }} />

            <Typography
              variant="body1"
              sx={{
                maxWidth: 700,
                lineHeight: 1.7,
              }}
            >
              {provider.description}
            </Typography>
          </Box>
        </Paper>

        <Grid
          container
          spacing={3}
          sx={{ mt: 1 }}
        >
          <Grid
            size={{
              xs: 12,
              md: 8,
            }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 3,
                border: "1px solid",
                borderColor:
                  "divider",
              }}
            >
              <Typography
                variant="h6"
                fontWeight={700}
                sx={{ mb: 2 }}
              >
                Services
              </Typography>

              <Grid
                container
                spacing={2}
              >
                {providerServices.map(
                  (service) => (
                    <Grid
                      key={service.id}
                      size={{
                        xs: 12,
                        sm: 6,
                      }}
                    >
                      <ServiceCard
                        service={service}
                        onRequest={(id) =>
                          console.log(
                            "Request:",
                            id
                          )
                        }
                      />
                    </Grid>
                  )
                )}
              </Grid>
            </Paper>
          </Grid>

          <Grid
            size={{
              xs: 12,
              md: 4,
            }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 3,
                border: "1px solid",
                borderColor:
                  "divider",
              }}
            >
              <Typography
                variant="h6"
                fontWeight={700}
                sx={{ mb: 2 }}
              >
                Contact
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                Location
              </Typography>

              <Typography sx={{ mb: 2 }}>
                {provider.location}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                Response time
              </Typography>

              <Typography>
                {provider.responseTime}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProviderProfile;
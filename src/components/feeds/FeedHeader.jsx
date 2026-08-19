import React from "react";
import {
  Box,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function FeedHeader({
  search,
  onSearchChange,
}) {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography
        variant="h4"
        fontWeight={700}
      >
        Discover services
      </Typography>

      <Typography
        color="text.secondary"
        sx={{ mt: 0.5, mb: 2.5 }}
      >
        Discover local professionals and see
        their work.
      </Typography>

      <TextField
        fullWidth
        value={search}
        onChange={(event) =>
          onSearchChange(event.target.value)
        }
        placeholder="Search services or providers..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{
          maxWidth: 700,
          "& .MuiOutlinedInput-root": {
            borderRadius: 3,
          },
        }}
      />
    </Box>
  );
}

export default FeedHeader;
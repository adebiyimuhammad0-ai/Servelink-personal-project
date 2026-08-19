import React from "react";
import {
  Box,
  Button,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";

function ServiceRequestForm({
  service,
  onSubmit,
}) {
  const [form, setForm] =
    React.useState({
      description: "",
      location: "",
      preferredDate: "",
      budget: "",
    });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]:
        event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({
      serviceId: service.id,
      ...form,
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
    >
      <Stack spacing={2}>
        <TextField
          name="description"
          label="What do you need?"
          multiline
          rows={4}
          value={form.description}
          onChange={handleChange}
          required
        />

        <TextField
          name="location"
          label="Your location"
          value={form.location}
          onChange={handleChange}
          required
        />

        <TextField
          name="preferredDate"
          label="Preferred date"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          value={form.preferredDate}
          onChange={handleChange}
        />

        <TextField
          name="budget"
          label="Budget"
          select
          value={form.budget}
          onChange={handleChange}
        >
          <MenuItem value="negotiable">
            Negotiable
          </MenuItem>

          <MenuItem value="15000">
            ₦15,000
          </MenuItem>

          <MenuItem value="30000">
            ₦30,000
          </MenuItem>

          <MenuItem value="50000">
            ₦50,000
          </MenuItem>
        </TextField>

        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{
            textTransform: "none",
          }}
        >
          Send request
        </Button>
      </Stack>
    </Box>
  );
}

export default ServiceRequestForm;
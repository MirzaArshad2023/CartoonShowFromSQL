import React from 'react';
import { Paper, Typography, Divider } from '@mui/material';
import { styled } from '@mui/material/styles'; // Import styled from @mui/material/styles for MUI v5

const TicketPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  maxWidth: 600,
  margin: 'auto',
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
}));

const TicketDisplay = () => {
  return (
    <TicketPaper elevation={3}>
      <Typography variant="h5" sx={{ marginBottom: 1 }}>
        Event Name
      </Typography>
      <Typography variant="subtitle1" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Date: July 19, 2024
      </Typography>
      <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
        Location: Example Venue
      </Typography>
      <Divider style={{ margin: '8px 0' }} />
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        hendrerit scelerisque dolor, non aliquam ligula sodales et.
      </Typography>
    </TicketPaper>
  );
};

export default TicketDisplay;

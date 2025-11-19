import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import Counter from '../components/Counter';

const HomePage: React.FC = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Riftbound Sealed Website
        </Typography>
        <Typography variant="body1" paragraph>
          A website that simulates the deck registration and construction experience
          for players to practice the sealed deck format.
        </Typography>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" gutterBottom>
            Redux Counter Example
          </Typography>
          <Counter />
        </Box>
      </Paper>
    </Container>
  );
};

export default HomePage;

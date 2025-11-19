import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import CardItem from '../components/CardItem';
import { mockCards } from '../mockData/cards';

const CardList: React.FC = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Card Library
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {mockCards.map((card) => (
          <Box key={card.id} sx={{ minWidth: 275, flex: '1 1 300px' }}>
            <CardItem card={card} />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default CardList;

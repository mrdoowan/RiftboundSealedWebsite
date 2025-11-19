import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../redux/store/hooks';
import { increment, decrement, selectValue } from '../redux/slices/exampleSlice';

const Counter: React.FC = () => {
  const count = useAppSelector(selectValue);
  const dispatch = useAppDispatch();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 2 }}>
      <Button variant="contained" onClick={() => dispatch(decrement())}>
        -
      </Button>
      <Typography variant="h4">{count}</Typography>
      <Button variant="contained" onClick={() => dispatch(increment())}>
        +
      </Button>
    </Box>
  );
};

export default Counter;

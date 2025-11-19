import React from 'react';
import { CssBaseline, ThemeProvider, createTheme, AppBar, Toolbar, Typography, Box, Tabs, Tab } from '@mui/material';
import HomePage from './containers/HomePage';
import CardList from './containers/CardList';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Riftbound Sealed
          </Typography>
        </Toolbar>
        <Tabs value={tabValue} onChange={handleTabChange} textColor="inherit" indicatorColor="secondary">
          <Tab label="Home" />
          <Tab label="Cards" />
        </Tabs>
      </AppBar>
      <Box>
        {tabValue === 0 && <HomePage />}
        {tabValue === 1 && <CardList />}
      </Box>
    </ThemeProvider>
  );
}

export default App;

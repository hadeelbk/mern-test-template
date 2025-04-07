import React from 'react';
import { Container, CssBaseline, Typography } from '@mui/material';
import SlotList from './components/SlotList';

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" style={{ marginTop: '2rem' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Choose your time slot:
        </Typography>
        <SlotList />
      </Container>
    </>
  );
}

export default App;
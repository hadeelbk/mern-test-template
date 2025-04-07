import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  DialogActions,
} from '@mui/material';

const BookingForm = ({ open, handleClose, selectedTime, onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    onSubmit({ name, email, time: selectedTime });
    setName('');
    setEmail('');
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} disableEnforceFocus disableAutoFocus>
      <DialogTitle>Book Slot – {selectedTime}</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained">
          Book
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BookingForm;
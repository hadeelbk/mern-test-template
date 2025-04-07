import React, { useEffect, useState } from 'react';
import { Grid, Button, Typography, Box, Stack, Paper } from '@mui/material';
import BookingForm from './ BookingForm';
import { fetchBookings, createBooking } from '../services/api';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const SlotList = () => {
  const [slots, setSlots] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');

  // Generate time slots intervals
  useEffect(() => {
    const generateSlots = (startHour, startMinute, endHour, endMinute) => {
      const slotArray = [];
      const start = new Date();
      start.setHours(startHour, startMinute, 0, 0);
  
      const end = new Date();
      end.setHours(endHour, endMinute, 0, 0);
  
      const current = new Date(start);
      while (current <= end) {
        slotArray.push(current.toTimeString().slice(0, 5)); // e.g., "10:15"
        current.setMinutes(current.getMinutes() + 15);
      }
  
      return slotArray;
    };
  
    const morningSlots = generateSlots(10, 0, 15, 0);   // 10:00–15:00
    const afternoonSlots = generateSlots(15, 45, 17, 45); // 15:45–17:45
  
    setSlots([...morningSlots, ...afternoonSlots]);
  }, []);

  // Load existing bookings
  const loadBookings = async () => {
    try {
      const res = await fetchBookings();
      setBookings(res.data);
    } catch (err) {
      console.error('Error fetching bookings:', err);
    }
  };

  useEffect(() => {
    loadBookings();
  }, []);

  // Check if a slot is already booked
  const isBooked = (time) => {
    return bookings.some((b) => b.time === time);
  };

  // Handle booking
  const handleBookingSubmit = async (bookingData) => {
    try {
      await createBooking(bookingData);
      await loadBookings();
    } catch (err) {
      if (err.response?.status === 409) {
        alert('This slot has already been booked!');
      } else {
        console.error('Error creating booking:', err);
      }
    }
  };



  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Virtual Meeting Slots
      </Typography>
  
      {/* Morning Slots */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Stack direction="row" alignItems="center" spacing={1} mb={2}>
          <AccessTimeIcon />
          <Typography variant="h6">Morning (10:00 AM – 3:00 PM)</Typography>
        </Stack>
        <Grid container spacing={2}>
          {slots
            .filter((slot) => slot >= '10:00' && slot <= '15:00')
            .map((slot) => (
              <Grid item xs={6} sm={4} md={2} key={slot}>
                <Button
                  variant="contained"
                  color={isBooked(slot) ? 'secondary' : 'primary'}
                  fullWidth
                  onClick={() => {
                    setSelectedTime(slot);
                    setOpenForm(true);
                  }}
                  disabled={isBooked(slot)}
                >
                  {slot} {isBooked(slot) ? ' (Booked)' : ''}
                </Button>
              </Grid>
            ))}
        </Grid>
      </Paper>
  
      {/* Afternoon Slots */}
      <Paper elevation={3} sx={{ p: 3 }}>
        <Stack direction="row" alignItems="center" spacing={1} mb={2}>
          <AccessTimeIcon />
          <Typography variant="h6">Afternoon (3:45 PM – 5:45 PM)</Typography>
        </Stack>
        <Grid container spacing={2}>
          {slots
            .filter((slot) => slot >= '15:45')
            .map((slot) => (
              <Grid item xs={6} sm={4} md={2} key={slot}>
                <Button
                  variant="contained"
                  color={isBooked(slot) ? 'secondary' : 'primary'}
                  fullWidth
                  onClick={() => {
                    setSelectedTime(slot);
                    setOpenForm(true);
                  }}
                  disabled={isBooked(slot)}
                >
                  {slot} {isBooked(slot) ? ' (Booked)' : ''}
                </Button>
              </Grid>
            ))}
        </Grid>
      </Paper>
  
      {/* Booking Form */}
      <BookingForm
        open={openForm}
        handleClose={() => setOpenForm(false)}
        selectedTime={selectedTime}
        onSubmit={handleBookingSubmit}
      />
    </Box>
  );

};

export default SlotList;
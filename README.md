# Virtual Meeting Slot Reservation System

## Project Description:

The developer should create an application that allows users to reserve one of the available 15-minute meeting slots, with the schedule ranging from 10:00 AM to 3:00 PM. The frontend should allow users to select a time slot and fill out a form with their name and email. This information should then be sent to the backend and stored in MongoDB.

## Task Requirements:

### 1. Frontend:
- Use **React**
- Use **MUI (Material UI)** for the user interface, displaying a list of available meeting slots.
- Display the time slots clearly from 10:00 AM to 3:00 PM in 15-minute intervals.
- Each slot should be selectable, opening a form to input the user’s name and email.
- Show booked slots in frontend.

### 2. Backend:
- Set up an **Express** server with **MongoDB** to handle reservations.
- For non-consumable slots, allow a time slot to be reserved multiple times.
- If consumable slots are implemented, ensure that each slot can only be reserved once.

## Application Flow:
1. The user will see the available time slots on the frontend (from 10:00 AM to 3:00 PM).
2. After selecting a slot, a form will open to input the user’s name and email.
3. We list the slots and the bookings.

## Bonus (Optional)
1. Implement consumable slots where each time slot can only be reserved once.
2. Add a second period of slots between 3:45 PM to 5:45 PM
2. Provide dockerfile and compose to run the project.
3. Documentation - Provide a readme.md explaining solutions, assumptions and decisions

## Criteria:
- The developer must submit a functional application that allows users to reserve virtual meeting slots.
- The frontend should be clear and easy to use
- The backend should correctly handle reservations and store them in MongoDB.
- If consumable slots are implemented, ensure each slot can only be reserved once.

## Estimated Time:
Recommended working time is 6 hours, but the developer has the flexibility to take up to 2 working days to deliver the project.

> [!IMPORTANT]  
> Fork the project and provide the link to our team to review the code.

# Base image
FROM node:18

# Create app directory
WORKDIR /app

# Copy and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the server code
COPY . .

# Expose port
EXPOSE 3001

# Start server
CMD ["node", "server.js"]
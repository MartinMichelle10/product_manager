# Use the official Node.js 16 image as the base image
FROM node:16 AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install all dependencies (including dev dependencies)
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Use a lightweight Node.js image for the final image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy all dependencies and the built application code from the builder image
COPY --from=builder /app .

# Set environment variables
ENV NODE_ENV=staging

# Expose the application port (adjust if needed)
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]

# Optional: Add health check if needed
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 CMD [ "curl", "-f", "http://localhost:3000/health" ] || exit 1

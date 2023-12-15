# Base image
FROM node

# Set working directory so that all subsequent command runs in this folder
WORKDIR /app

# Copy package json and install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy our app
COPY . .

# Expose port to access server
EXPOSE 3001

# Command to run our app
CMD [ "npm", "start" ]
# Use the official Node.js 20 image
FROM node:20

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY ./projeto_inicial/admin/package*.json ./

# Install dependencies
RUN npm install --global browser-sync json-server concurrently

# Copy the rest of the application code to the working directory
COPY ./projeto_inicial/admin .

# Expose the necessary ports
EXPOSE 3000
EXPOSE 5000

# Command to run your application
CMD ["npm", "run", "start"]

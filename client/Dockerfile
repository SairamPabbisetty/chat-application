# Stage 1: Build the Vite application
FROM node:14 AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vite app
RUN npm run build && ls -l /app && ls -l /app/dist

# Stage 2: Serve the Vite app using Nginx
FROM nginx:alpine

# Copy the build output to the Nginx html folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose the port on which the server will run
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]

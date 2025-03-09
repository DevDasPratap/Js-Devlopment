# ==============================
# DOCKERFILE FOR NODE.JS BACKEND
# ==============================

# 1. Use an official Node.js runtime as a parent image
FROM node:18

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the entire project directory into the container
COPY . .

# 6. Expose the application port (Ensure this matches the port your app runs on)
EXPOSE 5000

# 7. Start the application
CMD ["npm", "start"]

# ==============================
# COMMANDS TO USE THIS FILE:
# ==============================

# 1. Build Docker Image:
#    docker build -t my-node-app .

# 2. Run the Container:
#    docker run -p 5000:5000 my-node-app

# 3. Run in Detached Mode:
#    docker run -d -p 5000:5000 my-node-app

# 4. List Running Containers:
#    docker ps

# 5. Stop a Running Container:
#    docker stop <container_id>

# 6. Remove a Container:
#    docker rm <container_id>

# 7. Remove an Image:
#    docker rmi my-node-app

# 8. View Container Logs:
#    docker logs -f <container_id>

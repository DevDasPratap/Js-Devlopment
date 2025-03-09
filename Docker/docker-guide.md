# Docker Configuration Guide for JavaScript Full-Stack Applications

## Project Structure
```
project/
├── frontend/              # React application
│   ├── Dockerfile        # Frontend container configuration
│   └── nginx.conf        # Nginx reverse proxy configuration
├── backend/              # Node.js application
│   └── Dockerfile        # Backend container configuration
└── docker-compose.yml    # Multi-container orchestration
```

## Docker Compose Configuration
```yaml
version: '3.8'

services:
  # Frontend React Application
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    volumes:
      - ./frontend:/app
      - /app/node_modules
    environment:
      - VITE_API_URL=http://localhost:5000
    depends_on:
      - backend

  # Backend Node.js Application
  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    ports:
      - "5000:5000"
    volumes:
      - ./backend:/app
      - /app/node_modules
    environment:
      - MONGODB_URI=mongodb://mongodb:27017/myapp
      - NODE_ENV=development
      - PORT=5000
    depends_on:
      - mongodb

  # MongoDB Database
  mongodb:
    image: mongo:latest
    ports:
      - "27017:27017"
    volumes:
      - mongodb_data:/data/db
    environment:
      - MONGO_INITDB_ROOT_USERNAME=admin
      - MONGO_INITDB_ROOT_PASSWORD=password123

volumes:
  mongodb_data:
```

### Docker Compose Explanation

1. **Version**
   - `version: '3.8'`: Specifies Docker Compose file format version

2. **Services**
   Each service represents a container:

   **Frontend Service:**
   ```yaml
   frontend:
     build:
       context: ./frontend      # Build context directory
       dockerfile: Dockerfile   # Dockerfile location
     ports:
       - "3000:3000"           # Port mapping (host:container)
     volumes:
       - ./frontend:/app       # Mount source code
       - /app/node_modules     # Anonymous volume for node_modules
   ```

   **Backend Service:**
   ```yaml
   backend:
     build:
       context: ./backend
     ports:
       - "5000:5000"
     environment:              # Environment variables
       - MONGODB_URI=mongodb://mongodb:27017/myapp
   ```

   **Database Service:**
   ```yaml
   mongodb:
     image: mongo:latest      # Use official MongoDB image
     volumes:
       - mongodb_data:/data/db # Persistent data storage
   ```

## Frontend Dockerfile
```dockerfile
# Build stage
FROM node:18-alpine as build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built assets from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 3000

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
```

### Frontend Dockerfile Explanation

1. **Build Stage**
   - Uses multi-stage build for smaller final image
   - Installs dependencies and builds the application
   ```dockerfile
   FROM node:18-alpine as build
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   ```

2. **Production Stage**
   - Uses Nginx to serve static files
   - Copies only built assets from build stage
   ```dockerfile
   FROM nginx:alpine
   COPY --from=build /app/dist /usr/share/nginx/html
   ```

## Backend Dockerfile
```dockerfile
# Use Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Expose port
EXPOSE 5000

# Start command
CMD ["npm", "start"]
```

### Backend Dockerfile Explanation

1. **Base Image**
   - Uses Alpine-based Node.js image for smaller size
   ```dockerfile
   FROM node:18-alpine
   ```

2. **Application Setup**
   - Copies dependencies separately for better caching
   ```dockerfile
   COPY package*.json ./
   RUN npm install
   ```

## Nginx Configuration
```nginx
server {
    listen 3000;
    server_name localhost;

    location / {
        root /usr/share/nginx/html;
        index index.html;
        try_files $uri $uri/ /index.html;
    }

    # Proxy API requests to backend
    location /api {
        proxy_pass http://backend:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Nginx Configuration Explanation

1. **Static File Serving**
   ```nginx
   location / {
       root /usr/share/nginx/html;
       try_files $uri $uri/ /index.html;
   }
   ```
   - Serves React application
   - Handles client-side routing

2. **API Proxy**
   ```nginx
   location /api {
       proxy_pass http://backend:5000;
   }
   ```
   - Forwards API requests to backend service
   - Handles WebSocket connections

## Common Docker Commands

### Building and Running
```bash
# Build all services
docker-compose build

# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down
```

### Container Management
```bash
# List containers
docker ps

# Enter container shell
docker exec -it <container_name> sh

# View container logs
docker logs <container_name>
```

### Development Workflow
```bash
# Rebuild single service
docker-compose build frontend

# Restart single service
docker-compose restart backend

# View service logs
docker-compose logs -f backend
```

## Interview Tips

1. **Key Points to Remember**
   - Multi-stage builds for frontend
   - Volume mounting for development
   - Environment variable management
   - Container networking
   - Data persistence

2. **Common Questions**
   - Explain the multi-stage build process
   - How to handle hot reloading in development
   - Database persistence and backups
   - Container communication
   - Production vs development setup

3. **Best Practices**
   - Use .dockerignore file
   - Optimize layer caching
   - Implement health checks
   - Secure sensitive data
   - Monitor container resources
# Docker Commands - Step by Step Guide
Docker help us build a containers
Docker container: single bundle/unit application along with depency.

container are portable/can be share with diffrent system
container very light weight
conatiner also provide we can run diffrent application with diffrent version with same dependency like node v16 and node v18
conatainer provide complete separate/isolate envionment


Docker Image: is a executable file, inside have have instruction to build containers.
image and container it relation like class and object, docker image is static snapshot/screenshot, and container running instance

when we share details we only share docker image not container

## Why Use Docker?

When working as a team, a new member joining the team may need to replicate the project environment on their own system, whether it's Windows, Linux, or macOS. They have to install all the necessary project-related packages and dependencies, which can be a time-consuming and error-prone process. Docker helps in such scenarios, especially when working with large projects or in large teams. It ensures a consistent development environment across all team members' machines.

Additionally, when deploying code on a production server, the same errors can occur due to differences in environments. Docker eliminates these inconsistencies by providing a standardized runtime environment.

## What is Docker?

Docker helps us build and run containers. A **Docker container** is a single unit of an application along with all its dependencies. 

### Features of Containers:
- **Portable** – Can be shared and run on different systems without modification.
- **Lightweight** – Consumes fewer resources compared to virtual machines.
- **Isolated Environment** – Each container runs separately, ensuring no conflicts between applications.
- **Multiple Versions Support** – We can run different versions of the same application with the same dependencies, e.g., Node.js v16 and Node.js v18.

### What is a Docker Image?
A **Docker Image** is an executable file containing instructions to create a container. 
- **Image vs. Container:** An image is like a blueprint (or a class in programming), while a container is the running instance (or an object created from a class).
- **Static vs. Running:** A Docker image is a static snapshot, whereas a container is an active process running the application.
- **Sharing:** When sharing application details, we share the Docker image, not the running container.

## Difference Between Docker and Virtual Machines

| Feature          | Docker (Containers) | Virtual Machines (VMs) |
|-----------------|--------------------|-----------------------|
| **Startup Time** | Starts in seconds | Takes minutes to boot |
| **Size** | Lightweight (MBs) | Heavy (GBs) |
| **Resource Usage** | Shares host OS kernel, uses fewer resources | Requires full OS installation, consumes more RAM & CPU |
| **Isolation** | Process-level isolation | Full OS-level isolation |
| **Portability** | Can be easily moved across different environments | Tied to a specific hypervisor and OS |
| **Performance** | Faster | Slower due to OS overhead |
| **Use Case** | Best for microservices, DevOps, and CI/CD pipelines | Best for running different OS environments |

## Common Problems and How Docker Helps:

1. **Dependency Conflicts:** Different team members may have different versions of dependencies installed, leading to compatibility issues. Docker ensures everyone runs the same versions.
2. **Works on My Machine Issue:** Code that runs on one machine may fail on another due to OS-specific configurations. Docker abstracts the OS layer, making applications OS-independent.
3. **Slow Onboarding for New Developers:** Setting up the environment manually can take hours or days. With Docker, a simple `docker-compose up` can set up the entire environment within minutes.
4. **Production Environment Parity:** The production environment might be different from development, leading to unexpected issues. Docker ensures that development, testing, and production environments remain identical.
5. **Port Conflicts:** Running multiple projects on the same machine can lead to conflicts in port allocations. Docker isolates applications using containerized networking.
6. **Complex Application Stack Management:** Large projects require multiple services (databases, caching layers, etc.), making setup complicated. Docker Compose simplifies multi-container applications.

Docker image to build docker container
docker run image_name
docker run -it image_name
it: intractive we can access on terminal input or output

if dont have image but we want to run then first pull from docker hub then run on container
ex: docker run -it ubuntu

exit from terminal: exit

remove docker image: docker rmi hellow-world
if it conatiner running then first delete container: docker ps -a then docker rm id/imageName

when we pull docker image from docker hub it by default download latest but if want to download specific version then e.g: docker pull mysql:8.0

Docker image layers:

Container (here only we can change )
Layer 3 (below this layer is read only/imetable nature)
Layer 2 (below this layer is read only/imetable nature)
Layer 1 (below this layer is read only/imetable nature)
Base layer (below this layer is read only/imetable nature)

docker run -d \
-p27017:271017 \
--name mongo \
--network mongo-network \ // write create network name
-e MONGO_INITDB_ROOT_USERNAME=admin \
-e MONGO_INITDB_ROOT_PASSWORD=qwerty \
mongo // write image name



docker run -d \
-p8081:8081 \
--name mongo-express \
--network mongo-express-network \ // write created network name
-e MONGO_INITDB_ROOT_USERNAME=admin \
-e MONGO_INITDB_ROOT_PASSWORD=qwerty \
-e ME_CONFIG_MONGODB_URL="mongodb://admin:qwerty@mongo:27017" \
mongo-express // write image name

// ME_CONFIG_MONGODB_URL="mongodb://username:password@name:port"

localhost:8081
username: admin
password: pass


Docker compose:
Docker compose: is a tool for defining and running multi-container applications

actually need when we need multiple container run then we need lot of configuration each container so here is compose .yaml file we can create here

docker compose -f fileName.yaml up -d
docker compose -f fileName.yaml down

Dockerizing our app
our node.js app => docker image => container

jenkin tool does work for us using cicd

Docker volumes:
when docker close then data will lost.
Volumes are presistent data stores for containers
using volumn we replicate/mount container data, we store multiple container data in single volume

---
## IMAGES:

### List all Local Images
```sh
docker images
```

### Delete an Image
```sh
docker rmi <image_name>
```

### Remove Unused Images
```sh
docker image prune
```

### Build an Image from a Dockerfile
```sh
docker build -t <image_name>:<version> .  # version is optional
```

### Build an Image Without Cache
```sh
docker build -t <image_name>:<version> . --no-cache
```

---
## CONTAINER:

### List all Local Containers (Running & Stopped)
```sh
docker ps -a
```

### List all Running Containers
```sh
docker ps
```

### Create & Run a New Container
```sh
docker run <image_name>
```
*If the image is not available locally, it will be downloaded from DockerHub.*

### Run Container in Background
```sh
docker run -d <image_name>
```

### Run Container with Custom Name
```sh
docker run --name <container_name> <image_name>
```

### Port Binding in Container
```sh
docker run -p <host_port>:<container_port> <image_name>
```

### Set Environment Variables in a Container
```sh
docker run -e <var_name>=<var_value> <container_name> (or <container_id>)
```

### Start or Stop an Existing Container
```sh
docker start|stop <container_name> (or <container_id>)
```

### Inspect a Running Container
```sh
docker inspect <container_name> (or <container_id>)
```

### Delete a Container
```sh
docker rm <container_name> (or <container_id>)
```

---
## TROUBLESHOOTING:

### Fetch Logs of a Container
```sh
docker logs <container_name> (or <container_id>)
```

### Open Shell Inside Running Container
```sh
docker exec -it <container_name> /bin/bash
```
Or
```sh
docker exec -it <container_name> sh
```

---
## DOCKER HUB:

### Pull an Image from DockerHub
```sh
docker pull <image_name>
```

### Publish an Image to DockerHub
```sh
docker push <username>/<image_name>
```

### Login into DockerHub
```sh
docker login -u <image_name>
```
Or
```sh
docker login
```
To logout:
```sh
docker logout
```

### Search for an Image on DockerHub
```sh
docker search <image_name>
```

---
## VOLUMES:

### List all Volumes
```sh
docker volume ls
```

### Create a New Named Volume
```sh
docker volume create <volume_name>
```

### Delete a Named Volume
```sh
docker volume rm <volume_name>
```

### Mount Named Volume with Running Container
```sh
docker run --volume <volume_name>:<mount_path>
```
Or using `--mount`:
```sh
docker run --mount type=volume,src=<volume_name>,dest=<mount_path>
```

### Mount Anonymous Volume with Running Container
```sh
docker run --volume <mount_path>
```

### Create a Bind Mount
```sh
docker run --volume <host_path>:<container_path>
```
Or using `--mount`:
```sh
docker run --mount type=bind,src=<host_path>,dest=<container_path>
```

### Remove Unused Local Volumes
```sh
docker volume prune  # for anonymous volumes
```

---
## NETWORK:

### List all Networks
```sh
docker network ls
```

### Create a Network
```sh
docker network create <network_name>
```

### Remove a Network
```sh
docker network rm <network_name>
```

### Remove All Unused Networks
```sh
docker network prune
```






# Complete Docker Guide

## Introduction to Docker

### What is Docker?
Docker is a platform for developing, shipping, and running applications in containers. Containers are lightweight, portable units that package an application with all its dependencies, ensuring consistent behavior across different environments.

### Why Use Docker?
- **Consistency**: Same environment across development, testing, and production
- **Isolation**: Applications run independently without conflicts
- **Portability**: Run anywhere that supports Docker
- **Resource Efficiency**: Lighter than traditional virtual machines
- **Rapid Deployment**: Quick to start, stop, and scale
- **Version Control**: Track changes in application environments

## Core Concepts

### Container vs Image
- **Image**: Read-only template with instructions for creating a container
- **Container**: Running instance of an image
- **Registry**: Repository for storing and sharing images (e.g., Docker Hub)

### Architecture
```
┌─────────────────────────────────────┐
│           Docker Client             │
└───────────────────┬─────────────────┘
                    │
┌───────────────────┴─────────────────┐
│           Docker Daemon             │
├─────────────────────────────────────┤
│    Images    │    Containers        │
├─────────────────────────────────────┤
│           Storage Drivers           │
└─────────────────────────────────────┘
```

## Docker Image Layers

### Layer Architecture
```
Container Layer (R/W)
├── Application Layer (R/O)
├── Dependencies Layer (R/O)
├── Configuration Layer (R/O)
└── Base OS Layer (R/O)
```

### Key Characteristics
- **Read-Only (R/O)**: Base layers are immutable
- **Read-Write (R/W)**: Only container layer allows modifications
- **Layer Sharing**: Multiple containers share base layers
- **Cache Efficiency**: Each layer is cached for faster builds
- **Size Optimization**: Layers are reused across images

### Layer Management Commands
```bash
# View image layers
docker history <image_name>

# View layer details
docker inspect <image_name>

# Show layer size and metadata
docker image inspect <image_name>
```

## Dockerizing Applications

### Basic Dockerfile Structure
```dockerfile
# Base image
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
EXPOSE 3000

# Start command
CMD ["npm", "start"]
```

### Building and Running
```bash
# Build image
docker build -t myapp:1.0 .

# Run container
docker run -d -p 3000:3000 myapp:1.0

# Run with environment variables
docker run -d \
  -p 3000:3000 \
  -e NODE_ENV=production \
  myapp:1.0
```

## Container Management

### Basic Commands
```bash
# List containers
docker ps -a

# Start/Stop containers
docker start|stop <container_name>

# Remove container
docker rm <container_name>

# View logs
docker logs <container_name>

# Execute commands in container
docker exec -it <container_name> /bin/sh
```

### Container Networking
```bash
# Create network
docker network create mynetwork

# Run container in network
docker run -d \
  --network mynetwork \
  --name myapp \
  myapp:1.0
```

## Docker Volumes

### Types of Volumes

1. **Named Volumes**
   ```bash
   # Create volume
   docker volume create mydata
   
   # Use volume
   docker run -d \
     -v mydata:/app/data \
     myapp:1.0
   ```

2. **Bind Mounts**
   ```bash
   # Mount local directory
   docker run -d \
     -v $(pwd):/app \
     myapp:1.0
   ```

3. **tmpfs Mounts**
   ```bash
   # Create temporary storage
   docker run -d \
     --tmpfs /app/temp \
     myapp:1.0
   ```

### Volume Management
```bash
# List volumes
docker volume ls

# Inspect volume
docker volume inspect mydata

# Remove volume
docker volume rm mydata

# Clean up unused volumes
docker volume prune
```

## Docker Compose

### Example docker-compose.yml
```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - app-data:/app/data
    environment:
      NODE_ENV: production
    networks:
      - app-network

  db:
    image: mongo:latest
    volumes:
      - db-data:/data/db
    networks:
      - app-network

volumes:
  app-data:
  db-data:

networks:
  app-network:
```

### Compose Commands
```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f

# Scale service
docker-compose up -d --scale app=3
```

## Best Practices

### Security
- Use official base images
- Run containers as non-root users
- Regularly update images
- Implement security scanning
- Use specific image tags
- Enable content trust

### Performance
- Minimize layer count
- Use multi-stage builds
- Optimize cache usage
- Clean up unused resources
- Monitor container metrics
- Use appropriate base images

### Development
- Use bind mounts for development
- Implement health checks
- Use Docker Compose
- Keep configs separate
- Use .dockerignore
- Document requirements

## Troubleshooting Guide

### Common Issues
1. **Container Won't Start**
   ```bash
   # Check logs
   docker logs <container_name>
   
   # Inspect container
   docker inspect <container_name>
   ```

2. **Network Issues**
   ```bash
   # Check network connectivity
   docker network inspect <network_name>
   
   # View container networking
   docker exec <container_name> ping <target>
   ```

3. **Volume Problems**
   ```bash
   # Verify volume mounting
   docker inspect -f '{{ .Mounts }}' <container_name>
   
   # Check volume permissions
   docker exec <container_name> ls -la <mount_point>
   ```

### Monitoring Commands
```bash
# View container stats
docker stats

# Process list
docker top <container_name>

# System-wide information
docker system df

# Event monitoring
docker events
```

## Production Deployment

### Deployment Checklist
- [ ] Use production-ready base images
- [ ] Implement health checks
- [ ] Set resource limits
- [ ] Configure logging
- [ ] Set up monitoring
- [ ] Enable automatic restarts
- [ ] Use Docker Compose or orchestration
- [ ] Implement backup strategy
- [ ] Document deployment process

### Example Production Configuration
```yaml
version: '3.8'

services:
  app:
    image: myapp:1.0
    deploy:
      replicas: 3
      resources:
        limits:
          cpus: '0.5'
          memory: 512M
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"
```

## Additional Resources

### Documentation
- [Docker Official Documentation](https://docs.docker.com/)
- [Docker Hub](https://hub.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)

### Tools
- Docker Desktop
- Docker Compose
- Docker Hub
- Docker Scout
- Docker BuildKit
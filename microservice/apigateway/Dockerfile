# ---------------------------
# Stage 1: Base dependencies
# ---------------------------
FROM node:22-alpine AS base

# Set working directory
WORKDIR /usr/src/app

# Copy package files first (for better caching)
COPY package*.json ./

# Install dependencies (only production deps for smaller image)
RUN npm install --only=production

# Copy the rest of the source code
COPY . .

# ---------------------------
# Stage 2: Runtime environment
# ---------------------------
FROM node:22-alpine AS runtime

WORKDIR /usr/src/app

# Copy built files and dependencies from base
COPY --from=base /usr/src/app /usr/src/app

# Environment variables
ENV NODE_ENV=production
ENV PORT=9000

# Expose the port the app runs on
EXPOSE 9000

# Use non-root user (for security)
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Start the gateway
CMD ["node", "src/core/Server.js"]
# app/Dockerfile
# Builder stage (install deps and run build)
FROM node:22-alpine AS builder
WORKDIR /srv/app

# Tools often required to build native modules
RUN apk add --no-cache python3 g++ make

# Copy package manifests and install dependencies (cache-friendly)
COPY package*.json ./
RUN npm ci

# Copy application source
COPY . .

# Build Strapi admin & server files
RUN npm run build

# Production stage - runtime
FROM node:22-alpine AS production
WORKDIR /srv/app

# Copy only the built app & node_modules from builder
COPY --from=builder /srv/app /srv/app

# Expose port and set NODE_ENV
ENV NODE_ENV=production
EXPOSE 1337

# Start Strapi in production mode (ensure package.json has a "start" script)
CMD ["npm", "run", "start"]

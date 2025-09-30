# app/Dockerfile
# Builder stage (install deps and run build)
FROM node:22-alpine AS builder
WORKDIR /srv/app

# Install npm 11 explicitly
RUN npm install -g npm@11.4.1

# Tools often required to build native modules + PostgreSQL client headers
RUN apk add --no-cache python3 g++ make postgresql-dev

# Copy package manifests and install dependencies (cache-friendly)
COPY package*.json ./

# Install dependencies, including pg
RUN npm ci

# Copy application source
COPY . .

# Build Strapi admin & server files
RUN npm run build

# Production stage - runtime
FROM node:22-alpine AS production
WORKDIR /srv/app

# Install runtime dependencies for pg
RUN apk add --no-cache libpq

# Copy only the built app & node_modules from builder
COPY --from=builder /srv/app /srv/app

# Expose port and set NODE_ENV
ENV NODE_ENV=production
EXPOSE 1337

# Start Strapi in production mode
CMD ["npm", "run", "start"]
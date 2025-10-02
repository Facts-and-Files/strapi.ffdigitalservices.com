# Builder stage (install deps and build Strapi)
FROM node:22-alpine AS builder
WORKDIR /srv/app

# Install npm 11 explicitly
RUN npm install -g npm@11.4.1

# Tools required for native modules + PostgreSQL headers
RUN apk add --no-cache python3 g++ make postgresql-dev

# Copy package manifests and install dependencies
COPY package*.json ./
RUN npm ci

# Copy application source
COPY . .

# Build Strapi admin & server files
RUN npm run build

# ----------------------------
# Production stage - runtime
# ----------------------------
FROM node:22-alpine AS production
WORKDIR /srv/app

# Install runtime dependencies
RUN apk add --no-cache libpq

# Copy built app & node_modules from builder
COPY --from=builder /srv/app /srv/app

# Ensure node user owns everything
RUN chown -R node:node /srv/app

# Switch to non-root user
USER node

# Set environment
ENV NODE_ENV=production
EXPOSE 1337

# Start Strapi
CMD ["npm", "run", "start"]

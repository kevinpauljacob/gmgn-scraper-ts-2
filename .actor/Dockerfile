FROM apify/actor-node:20 AS builder

# Copy package files
COPY package*.json ./

# Install all dependencies for building
RUN npm install --include=dev --audit=false

# Copy source files
COPY . ./

# Build the project
RUN npm run build

# Create final image
FROM apify/actor-node:20

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm --quiet set progress=false \
    && npm install --omit=dev --omit=optional \
    && echo "Node.js version: $(node --version)" \
    && echo "NPM version: $(npm --version)" \
    && rm -r ~/.npm

# Copy built JS files from builder image
COPY --from=builder /usr/src/app/dist ./dist

# Copy other necessary files
COPY .actor ./.actor

# Create and run as non-root user for security
RUN adduser -h /home/apify -D apify && \
    chown -R apify:apify ./
USER apify

# Run the actor
CMD npm run start:prod --silent

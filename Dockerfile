# Use Bun image from the Docker Hub
FROM oven/bun:debian

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy app files
COPY . .

# Install dependencies
RUN bun install

# Generate Prisma client using bunx
RUN bunx prisma generate

# Run the application
CMD ["bun", "start"]
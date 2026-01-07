# Use official Bun image
FROM oven/bun:1 AS base

# Set working directory inside container
WORKDIR /app

# Copy only dependency files first (for layer caching)
COPY package.json bun.lock ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy rest of the source code
COPY . .

# Expose backend port
EXPOSE 3001
# Run the app
CMD ["bun", "run", "index.ts"]

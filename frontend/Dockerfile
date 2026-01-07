# -------- BUILD STAGE --------
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build Next.js app
RUN npm run build

# -------- RUN STAGE --------
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copy only required files from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.ts ./next.config.ts

# Expose Next.js port
EXPOSE 3000

# Start Next.js
CMD ["npm", "run", "start"]

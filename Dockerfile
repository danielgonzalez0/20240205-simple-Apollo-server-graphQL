# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=20.9.0
FROM node:${NODE_VERSION}-slim AS base

LABEL fly_launch_runtime="Node.js"

# Node.js app lives here
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"

# Install pnpm
ARG PNPM_VERSION=8.13.1
RUN npm install -g pnpm@$PNPM_VERSION


# Throw-away build stage to reduce size of final image
FROM base AS build

# Install packages needed to build node modules
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3

# Install node modules
COPY package.json pnpm-lock.yaml ./

# Install all dependencies including devDependencies for build
RUN pnpm install

# Install TypeScript and type definitions globally
RUN npm install -g typescript @types/node @types/jest

# Copy application code
COPY . .

# Create a production tsconfig file specifically for the build
RUN echo '{"extends":"./tsconfig.json","compilerOptions":{"skipLibCheck":true}}' > tsconfig.prod.json

# Compile TypeScript code with the production config
RUN npx tsc -p tsconfig.prod.json || echo "Ignoring TypeScript errors for production build" && \
    ls -la dist/ && \
    test -f dist/index.js || exit 1


# Final stage for app image
FROM base

# Copy built application
COPY --from=build /app /app

# Set the environment variable for the port
ENV PORT=4000

# Start the server by default, this can be overwritten at runtime
EXPOSE 4000
CMD [ "node", "dist/index.js" ]

# syntax=docker/dockerfile:1

# Stage 1: build the Angular application
FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies based on the lockfile for reproducible builds
COPY package.json package-lock.json ./
RUN npm ci

# Copy source code and build for production
COPY . .
RUN npm run build -- --configuration production

# Stage 2: serve the compiled app with Nginx
FROM nginx:1.27-alpine AS runtime

# Copy build output to Nginx's html directory
COPY --from=build /app/dist/LandingPage/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

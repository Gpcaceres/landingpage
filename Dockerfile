# syntax=docker/dockerfile:1

# Stage 1: build the Angular application
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build -- --configuration production

# Stage 2: serve with Nginx
FROM nginx:1.27-alpine AS runtime
# Config SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Acepta cualquier nombre de carpeta bajo dist
COPY --from=build /app/dist/*/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

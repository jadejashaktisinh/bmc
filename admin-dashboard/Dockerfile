# Stage 1: Build the Angular application
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
# Install specific optional dependencies if needed
RUN npm install --save-optional lightningcss-linux-x64-musl
COPY . .
# Generate the production build
RUN npx ng build --configuration production

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine AS runner
# Copy the build artifacts from the builder stage
# Replace 'admin-dashboard' with your actual project name from angular.json
COPY --from=builder /app/dist/admin-dashboard/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


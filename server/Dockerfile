FROM node:lts-bookworm-slim AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .

FROM node:lts-bookworm-slim
WORKDIR /usr/src/app
COPY --from=build /app .
EXPOSE 5000
CMD ["npm", "start"]
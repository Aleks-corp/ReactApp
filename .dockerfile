# Stage 1: Build React app
FROM node:18 as builder
WORKDIR /app/frontend
COPY ./frontend/package.json ./frontend/yarn.lock ./
RUN yarn install
COPY ./frontend ./
RUN yarn build

# Stage 2: Build NestJS app
WORKDIR /app/backend
COPY ./backend/package.json ./backend/yarn.lock ./
RUN yarn install
COPY ./backend ./
RUN yarn build

# Stage 3: Combine React and NestJS builds
FROM node:18
WORKDIR /app
COPY --from=builder /app/frontend/dist ./frontend/dist
COPY --from=builder /app/backend ./

COPY docker-compose.yml .

# backend
WORKDIR /app/backend
RUN yarn install

# frontend
WORKDIR /app/frontend
RUN yarn install

# Expose ports
EXPOSE 3000

# Run the NestJS app
CMD ["yarn", "dev"]

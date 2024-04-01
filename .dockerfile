# Stage 1: Build React app
FROM node:18 as react-build
WORKDIR /app/frontend
COPY ./frontend/package.json ./frontend/yarn.lock ./
RUN yarn install
COPY ./frontend ./
RUN yarn build

# Stage 2: Build NestJS app
FROM node:18 as nest-build
WORKDIR /app/backend
COPY ./backend/package.json ./backend/yarn.lock ./
RUN yarn install
COPY ./backend ./
RUN yarn build

# Stage 3: Combine React and NestJS builds
FROM node:18
WORKDIR /app/backend
COPY --from=react-build /app/frontend/build ./frontend/build
COPY --from=nest-build /app/backend/dist ./
COPY --from=nest-build /app/backend/node_modules ./node_modules
COPY ./backend/package.json ./backend/yarn.lock ./

# Install PostgreSQL client (if needed)
# RUN apt-get update && apt-get install -y postgresql-client

# Expose ports
EXPOSE 3000

# Set environment variables for database connection (if needed)
ENV POSTGRES_HOST=localhost
ENV POSTGRES_PORT=5432
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres
ENV POSTGRES_DB=postgres
# Run the NestJS app
CMD ["yarn", "start:prod"]

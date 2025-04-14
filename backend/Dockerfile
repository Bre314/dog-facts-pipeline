# backend/Dockerfile.backend

FROM node:18

WORKDIR /app

# Copy package.json and package-lock.json first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all other backend files
COPY . .

EXPOSE 3001

CMD ["npm", "start"]

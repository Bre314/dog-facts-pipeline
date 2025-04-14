# Dockerfile.backend

FROM node:18

WORKDIR /app

# Copy only package.json and package-lock.json
COPY package*.json ./
RUN npm install

# Copy everything else in the backend folder
COPY . .

EXPOSE 3001

CMD ["npm", "start"]
git add backend/Dockerfile.backend


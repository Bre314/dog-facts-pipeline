FROM node:18

WORKDIR /app

COPY backend /app/backend
COPY frontend /app/frontend

WORKDIR /app/backend
RUN npm install

EXPOSE 3000
CMD ["npm", "start"]


FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY /app .
EXPOSE 6999
CMD ["node", "index.js"]
  
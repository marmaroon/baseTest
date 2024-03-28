FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install npm@latest -g
RUN npm install --omit=optional

COPY . .

CMD ["npm", "test"]

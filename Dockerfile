FROM node:16

# Create app dir
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . . /usr/src/app/

# Bind to port
EXPOSE 3000

CMD [ "node", "app.js" ]
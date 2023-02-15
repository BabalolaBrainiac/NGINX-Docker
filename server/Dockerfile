FROM node:16

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

#Package.Json wildcard to copy both package.json and package.lock.json

COPY package*.json ./

RUN npm install
#If building application for prod, remember to do a clean install instead, npm ci


#Copy all application files
COPY . .

EXPOSE 7070

CMD ["npm", "run", "start"]
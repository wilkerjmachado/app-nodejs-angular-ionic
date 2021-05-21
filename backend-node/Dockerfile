FROM node:14.17.0

WORKDIR /usr/src/app

COPY . /usr/src/app/

RUN npm install

EXPOSE 4200

CMD echo "Esperando mongo" && sleep 5 && npm start
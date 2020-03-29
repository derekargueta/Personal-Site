FROM node:13.12.0-alpine3.10

WORKDIR srv
COPY ./ ./

RUN npm install
RUN ./node_modules/bower/bin/bower install --allow-root

ENTRYPOINT ["npm", "start"]

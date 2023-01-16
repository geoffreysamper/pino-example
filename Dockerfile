FROM node:18
RUN mkdir app
WORKDIR /app
COPY * /app/
RUN npm install --omit=dev
#RUN mkdir /log-store2/ && touch /log-store2/pino.log && chmod 700 -R /log-store2/



ENTRYPOINT [ "node", "index.mjs" ]
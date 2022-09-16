FROM node:18
RUN mkdir app
WORKDIR /app
COPY * /app/
RUN npm install --omit=dev

ENTRYPOINT [ "node", "index.mjs" ]
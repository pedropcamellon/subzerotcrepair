FROM node:18-alpine

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json ./

RUN NODE_ENV=development npm i

CMD ["npm", "run", "dev"]

FROM node:alpine

WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .

ENV MONGO_URL = mongodb+srv://pavan:pavan@shapeai.ujqaw.mongodb.net/zomato?retryWrites=true&w=majority
ENV GOOGLE_CLIENT_ID =1082404466629-e1viu2v7epncrmdl1s1qou5bpjss8bih.apps.googleusercontent.com
ENV GOOGLE_CLIENT_SECRET =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
ENV MAILGUN_DOMAIN=sandbox1f69a0eab77044ed803892b9b398bb9b.mailgun.org
ENV MAILGUN_API_KEY=bd7c7a87d84e4ce759436edd488ece74-fb87af35-b9876c51
ENV RZR_PAY_ID=rzp_test_JVPDfGcUyRVnBy
ENV RZR_PAY_SECRET=uf98hFpPOwl4mLd3QcIa6aPZ
ENV NODE_ENV=production
ENV PORT=4000

RUN npm run build


CMD ["npm", "run", "start"]

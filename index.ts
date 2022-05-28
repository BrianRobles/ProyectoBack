import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './graphql/types';
import { resolvers } from './graphql/resolvers';
import conectarBD from './db/db';
const jwtCheck = require('./validate.ts')


dotenv.config();

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

const app = express();
app.use(express.json());
app.use(cors());
app.use(jwtCheck);

app.listen(process.env.PORT || 4000, async () => {
  await conectarBD();
  await server.start();

  server.applyMiddleware({ app });
  console.log('servidor listo');
});

const { ApolloServer, PubSub } = require('apollo-server-express');
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
require('dotenv').config();

const pubsub = new PubSub();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req, pubsub })
});

const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });
}

server.applyMiddleware({ app, path: '/graphql' });

const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }).then(() => {
  console.log('MongoDB connected');
  return app.listen({ port }, () => {
    console.log(`Server running at ${port}`);
  });
});

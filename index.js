import express from 'express';
import mongoose from 'mongoose';
import expressGraphQL from 'express-graphql';
import cluster from 'cluster';
import schema from './lib/schema';
import config from './lib/config';

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.get('MONGODB_URL'));

app.use('/', expressGraphQL(req => ({
  schema,
  graphiql: true,
  rootValue: {
    request: req,
  },
  pretty: config.get('NODE_ENV') !== 'production',
})));

if (cluster.isMaster) {
  for (let i = 0; i < config.get('WEB_CONCURRENCY'); i++) { // eslint-disable-line no-plusplus
    cluster.fork();
  }

  cluster.on('exit', (worker) => {
    /* eslint-disable no-console */
    console.log(`worker ${worker.process.pid} died`);
    /* eslint-enable no-console */
  });
} else {
  app.listen(config.get('PORT'), () => {
    /* eslint-disable no-console */
    console.log(`The server is running at http://localhost:${config.get('PORT')}/`);
    /* eslint-enable no-console */
  });
}

export default app;

import mongoose from 'mongoose';
import config from '../lib/config';
import Page from '../lib/schema/page/model';
import pageMock from './page';

mongoose.Promise = global.Promise;
mongoose.connect(config.get('MONGODB_URL'));

/* eslint-disable no-console */
async function populate() {
  await Page.find().remove(() => {
    console.log('finished cleaning Page');
  });

  await Page.create(...pageMock, () => {
    console.log('finished populating Page');
  });

  console.log('finished populating db');

  process.exit(0);
}
/* eslint-enable no-console */

populate();

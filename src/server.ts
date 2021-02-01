import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import helmet from 'helmet';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const app = polka(); // You can also use Express

app.use(
  helmet(),
  compression({ threshold: 0 }),
  sirv('static', { dev }),
  sapper.middleware()
);

app.listen(PORT, (err: Error)  => {
  if (err) console.log('error', err);
});

module.exports = app;

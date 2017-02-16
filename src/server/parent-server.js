import hapiServer from './hapi-server'
import webpackServer from './webpack-server'

const PORT = process.env.PORT || 3000
const PROD = process.env.NODE_ENV === 'production'

if (PROD) {
  hapiServer(PORT);
} else {
  hapiServer(PORT - 1);
  webpackServer(PORT);
}
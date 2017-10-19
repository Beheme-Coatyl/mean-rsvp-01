// server/config.js
module.exports = {
  AUTH0_DOMAIN: '<AUTH0-client-domain>',
  AUTH0_API_AUDIENCE: '<API_SERVER>/api',
  MONGO_URI: process.env.MONGO_URI || '<MONGODB-url>',
  NAMESPACE: 'http://myapp.com/roles'
};

// server/config.js
module.exports = {
  AUTH0_DOMAIN: '<AUTH0-client-domain>', // e.g., kmaida.auth0.com
  AUTH0_API_AUDIENCE: 'http://localhost:8083/api/', // e.g., 'http://localhost:8083/api/'
  MONGO_URI: process.env.MONGO_URI || '<MONGODB-url>',
  NAMESPACE: 'http://myapp.com/roles'
};

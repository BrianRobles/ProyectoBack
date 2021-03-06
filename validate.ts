var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

var jwtCheck = jwt.expressjwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://gestionproyectos.us.auth0.com/.well-known/jwks.json',
  }),
  audience: 'https://gestion-proyectos/graphql',
  issuer: 'https://gestionproyectos.us.auth0.com/',
  algorithms: ['RS256'],
});

module.exports = jwtCheck;

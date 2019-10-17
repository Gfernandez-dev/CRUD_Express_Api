const winston = require('winston');

module.exports = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: '_errors.log', level: 'error' }),
    new winston.transports.File({ filename: '_ok.log' })
  ]
});
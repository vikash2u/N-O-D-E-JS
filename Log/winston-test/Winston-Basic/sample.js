// default logger
var winston = require('winston');

// these are the same
winston.log('info', 'Hello distributed log files!');
winston.log('info', 'test mesajı', { bilgi: 'bu bir metadatadır' });
winston.info('Hello again distributed logs');


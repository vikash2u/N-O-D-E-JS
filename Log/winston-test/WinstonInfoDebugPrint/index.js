'use strict';
const { createLogger, format, transports } = require('winston');

const logger = createLogger({
    level: 'debug',
    // In simple format
    // format: format.simple(),
    // In JSON format
    // format: format.json(),
    // Colorize Winston console log output
    // format: format.combine(format.colorize(), format.simple()),
    format: format.combine(
        format.colorize(),
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
    ),
    transports: [new transports.Console()]
});

logger.info('Hello world');
logger.debug('Debugging info');
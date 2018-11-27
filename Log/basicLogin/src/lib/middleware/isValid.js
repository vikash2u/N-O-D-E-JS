const logger = require("../logger");

module.exports = (req, res, next) => {
    logger.info("Incoming request query", {
        query: req.query
    });
    if (req.query.q == 1) {
        const error = { error: "Invalid number" };
        logger.info("Request failed returning error", error);
        return res.json(error);
    } else if (!req.query.q) {
        const error = { error: "Invalid query" };
        logger.info("Request failed returning error", error);
        return res.json(error);
    }
    return next();
};
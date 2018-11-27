const express = require("express");
const app = express();
const isValid = require("./lib/middleware/isValid");
const logger = require("./lib/logger");

app.all("*", (req, res, next) => {
    logger.info("Incoming request", {
      method: req.method
    });

    logger.debug("Incoming request verbose", {
      headers: req.headers,
      query: req.query,
      body: req.body
    });

  return next();
});

app.get("/", isValid, (req, res) => {
  logger.info("/query", { 
    query: req.query 
  });
  const msg = { q: req.query.q };
  logger.info("/response", msg);
  res.json(msg);
})

module.exports = app;

//logger middleware: logs method, url and current date + time for every request
const logger = (req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  next();
};
module.exports = logger;


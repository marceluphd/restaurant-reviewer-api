module.exports = {
  db: {
    url: process.env.MONGOLAB_URI || 'mongodb://127.0.0.1:27017/restaurant-reviewer-dev';
  }
};

module.exports = (app) => {

  app.get('/api/status', (req, res) => {
    res.status(200).end();
  });

}

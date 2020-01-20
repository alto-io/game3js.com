export default (app) => {

  app.get('/status/', (req, res) => {

    res.json({hello: "world"}).status(200).end();
  });

  app.post('/status/', (req, res) => {
    res.status(200).end();
  });


};

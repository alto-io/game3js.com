import routes from './routes';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';

const app = express();

app.use(bodyParser.json());
app.use('/api', routes);

// require('./routes/nakamaRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  // app.get("*", (req, res) => {
  //    let url = path.join(__dirname, '../client/build', 'index.html');
  //    if (!url.startsWith('/app/')) // we're on local windows
  //    url = url.substring(1);
  //   res.sendFile(url);
  // });

  app.get('*', (req,res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })

}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
})

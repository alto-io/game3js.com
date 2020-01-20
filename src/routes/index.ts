import * as express from 'express';
// import user from './user';
import status from './status';

const app = express();

// user(app);
status(app);

export default app;

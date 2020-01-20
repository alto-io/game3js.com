/*
import AuthService from '../services/auth';
import isAuth from '../middlewares/isAuth';

export default (app) => {

  app.post('/login/', async (req, res) => {
    try {
    const email = req.body.user.email;
    const password = req.body.user.password;
      const authServiceInstance = new AuthService();
      const { user, token } = await authServiceInstance.Login(email, password);
      return res.status(200).json({ user, token }).end();
    } catch(e) {
      return res.json(e).status(500).end();
    }
  });

  app.post('/signup/', async (req, res) => {
    try {
      const { name, email, password } = req.body.user;
      const authServiceInstance = new AuthService();
      const { user, token } = await authServiceInstance.SignUp(email, password, name);
      return res.json({ user, token }).status(200).end();
    } catch (e) {
      return res.json(e).status(500).end();
    }
  });

};
*/

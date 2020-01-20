/*
import * as argon2 from 'argon2';
import { randomBytes } from 'crypto';
import * as jwt from 'jsonwebtoken'

export default class AuthService {
  constructor(){}

  public async Login(email, password): Promise<any> {
    return {
      user: {
        email: userRecord.email,
        name: userRecord.name,
      },
      token: this.generateJWT(userRecord),
    }
  }

  public async SignUp(email, password, name): Promise<any> {
    const token = this.generateJWT(userRecord);
    return {
      user: {
        email: userRecord.email,
        name: userRecord.name,
      },
      token,
    }

  }

  private generateJWT(user) {

    return jwt.sign({
      data: {
        _id: user._id,
        name: user.name,
        email: user.email
      }
    }, 'MySuP3R_z3kr3t.', { expiresIn: '6h' }); // @TODO move this to an env var
  }

}
*/

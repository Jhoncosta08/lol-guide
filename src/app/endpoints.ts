import {environment} from "./environments/environment";

export class Endpoints {

  static signUpApi(): string {
    return `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${environment.firebase.apiKey}`;
  }

  static signInApi(): string {
    return `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${environment.firebase.apiKey}`;
  }

}

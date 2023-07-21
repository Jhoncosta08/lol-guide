import { environment } from "../environments/environment";

export class Endpoints {

  //LOGIN ROUTES
  static signUpApi(): string {
    return `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebase.apiKey}`;
  }

  static signInApi(): string {
    return `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebase.apiKey}`;
  }

}

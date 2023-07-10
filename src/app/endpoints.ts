import {environment} from "./environments/environment";

export class Endpoints {

  //LOGIN ROUTES
  static signUpApi(): string {
    return `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${environment.firebase.apiKey}`;
  }

  static signInApi(): string {
    return `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${environment.firebase.apiKey}`;
  }

  //CHAMPIONS ROUTES
  static getChampionsList(): string {
    return `${environment.apiUrl}/champions`;
  }

  static getChampionData(championName: string): string {
    return `${environment.apiUrl}/champions/${championName}`;
  }

}

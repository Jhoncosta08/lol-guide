export interface AuthResponseData {
  kind: string,
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: any,
  localId: string,
  registered?: boolean
}

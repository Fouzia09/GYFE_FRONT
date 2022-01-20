export interface User{
    id?: number,
    email: string,
    roles: [],
    name: string,
    plainPassword: string,
    username: string
  }
  export interface UserToken{
    roles: string[],
    username: string,
    exp: number,
    iat: number
  }

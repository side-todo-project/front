export interface IUserInfo {
  email: string;
  id: string;
  newUser: boolean;
  nickname: string;
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

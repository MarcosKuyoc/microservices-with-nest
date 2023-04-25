interface User {
  _id: number;
  username: string;
  email?: string;
  password: string;
  role: string;
  createdAt: Date;
}
export interface UserOuput {
  user: User;
  token?: string;
}

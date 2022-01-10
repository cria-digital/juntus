import { SetStateAction } from "react";

interface IUser {
  isAuthenticated: boolean;
  user: {
    id: string;
    email: string;
    name: string;
  } | null;
}

export interface IAuth {
  auth: IUser;
  setAuth: SetStateAction<any>;
}

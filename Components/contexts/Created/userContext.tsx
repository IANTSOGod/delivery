import { createContext } from "react";

export interface UserCredentials {
  username: string;
  email: string;
  profile: string;
  qrCode: string;
}

export const UserContext = createContext({
  user: {} as UserCredentials,
  defineUser: ({ username, email, profile, qrCode }: UserCredentials) => {},
});

import { createContext } from "react";

export interface UserCredentials{
  username:string,
  email:string,
  mdp:string,
}
export const UserContext = createContext({
  user: {} as UserCredentials,
  defineUser: ({username,email,mdp}:UserCredentials) => {},
});

import { ReactNode, useState } from "react";
import { UserContext, UserCredentials } from "../Created/userContext";

interface userContextProps {
  children: ReactNode;
}

export default function UserContextProvider({ children }: userContextProps) {
  const [user, setUser] = useState({
    username: "admin",
    email: "admin@native.com",
    profile: "",
    qrCode: "",
  } as UserCredentials);

  const defineUser = (newUser: UserCredentials) => {
    setUser(newUser);
  };
  return (
    <UserContext.Provider value={{ user, defineUser }}>
      {children}
    </UserContext.Provider>
  );
}

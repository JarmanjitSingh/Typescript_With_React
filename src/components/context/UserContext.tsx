import { createContext, useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

type UserContextChildrenType = {
  children: React.ReactNode;
};

type ContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

//you can also able to use type assertion here to avoid the optional chaining and every time checkin the usercontext is exist or not in the the user component by using like below line
// export const UserContext = createContext({} as ContextType);
export const UserContext = createContext<ContextType | null>(null);

export const UserContextProvider = ({ children }: UserContextChildrenType) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

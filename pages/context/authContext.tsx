import { createContext, useState, useEffect, ReactNode } from "react";

type User = {
  token: string | undefined;
  user: Record<string, unknown> | undefined;
};

export type AuthContextType = {
  loggedInUser: User;
  setLoggedInUser: React.Dispatch<React.SetStateAction<User>>;
};

const AuthContext = createContext<AuthContextType>({
  loggedInUser: { token: "", user: undefined },
  setLoggedInUser: () => undefined,
});

type AuthContextComponentProps = {
  children: ReactNode;
};

function AuthContextComponent(props: AuthContextComponentProps) {
  const [loggedInUser, setLoggedInUser] = useState<User>({
    token: undefined,
    user: {},
  });

  console.log(loggedInUser);
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    const parsedStoredUser = JSON.parse(storedUser || '""');

    if (parsedStoredUser.token) {
      setLoggedInUser(parsedStoredUser);
    } else setLoggedInUser({ token: "", user: {} });
  }, []);

  return (
    <AuthContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextComponent };

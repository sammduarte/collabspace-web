import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

import { useNavigate } from "react-router-dom";

import { User } from "../services/Sessions/types";

import { session } from "../services/Sessions";

import api from "../services/Api/api";
import usePersistedState from "../hooks/usePersistedState";
import { IAddress } from "../services/address/types";

interface SignInRequest {
  email: string;
  password: string;
}

interface SignInResponse {
  result: "success" | "error";
  message: string;
}

interface AuthenticationContextType {
  signed: boolean;
  loading: boolean;
  user: Partial<User> | null;
  token: string;
  loggedEmail: string;
  handleLoggedEmail: (email: string) => void;
  handleUser: (
    name: string,
    telephone: string,
    birthDate: string,
    bio: string,
  ) => void;
  handleAvatarUrl: (avatarUrl: string) => void;
  handleCoverUrl: (coverUrl: string) => void;
  handleAddress: (address: IAddress[]) => void;
  signIn(data: SignInRequest): Promise<SignInResponse>;
  signOut(): void;
  me(id?: string): void;
}

interface AuthenticationProviderProps {
  children: ReactNode;
}

const AuthenticationContext = createContext<AuthenticationContextType>(
  {} as AuthenticationContextType,
);

const AuthenticationProvider = ({ children }: AuthenticationProviderProps) => {
  const navigate = useNavigate();

  const [user, setUser] = usePersistedState<Partial<User> | null>("user", null);
  const [token, setToken] = usePersistedState<string>("token", "");

  const [loading, setLoading] = useState<boolean>(false);
  const [loggedEmail, setLoggedEmail] = useState<string>("");

  const handleLoggedEmail = useCallback(
    (email: string) => {
      setLoggedEmail(email);
    },
    [setLoggedEmail],
  );

  const handleUser = useCallback(
    (name: string, telephone: string, birthDate: string, bio: string) => {
      setUser((prevState) => ({
        ...prevState,
        name,
        telephone,
        birthDate,
        bio,
      }));
    },
    [setUser],
  );

  const handleAvatarUrl = useCallback(
    (avatarUrl: string) => {
      setUser((prevState) => ({
        ...prevState,
        avatarUrl,
      }));
    },
    [setUser],
  );

  const handleCoverUrl = useCallback(
    (coverUrl: string) => {
      setUser((prevState) => ({
        ...prevState,
        coverUrl,
      }));
    },
    [setUser],
  );

  const handleAddress = useCallback(
    (address: IAddress[]) => {
      setUser((prevState) => ({
        ...prevState,
        address,
      }));
    },
    [setUser],
  );

  const signIn = useCallback(
    async ({ email, password }: SignInRequest): Promise<SignInResponse> => {
      setLoading(true);

      try {
        const { result, message, data } = await session({ email, password });

        if (result === "success") {
          if (data) {
            setUser(data.user);
            setToken(data.token);

            api.defaults.headers.authorization = `Bearer ${data.token}`;
          }
        }

        setLoading(false);

        return { result, message };
      } catch (error: any) {
        setLoading(false);
        return { result: "error", message: error.message };
      }
    },
    [setUser, setToken],
  );

  const signOut = () => {
    setUser(null);
    setToken("");
  };

  const me = (id?: string) => {
    if (id) navigate(`/me/${id}`);
  };

  return (
    <AuthenticationContext.Provider
      value={{
        signed: !!user,
        loading,
        user,
        token,
        loggedEmail,
        handleUser,
        handleLoggedEmail,
        handleAvatarUrl,
        handleCoverUrl,
        handleAddress,
        signIn,
        signOut,
        me,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

function useAuthentication(): AuthenticationContextType {
  return useContext(AuthenticationContext);
}

export { AuthenticationProvider, useAuthentication };

"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string | null;
  [key: string]: any;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context)
    throw new Error("useUser deve ser usado dentro do UserProvider");
  return context;
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await axios.get("/api/me");
        setUser(res.data);
      } catch (err: any) {
        console.error(err);
        setUser(null);
      }
    }
    fetchUser();
  }, []);

  const logout = async () => {
    try {
      await axios.post("/api/logout");
    } catch {}
    setUser(null);
    router.push("/login");
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

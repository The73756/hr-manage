"use client";
import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/user-store";

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const router = useRouter();
  const setIsAuth = useUserStore((state) => state.setIsAuth);
  const setUser = useUserStore((state) => state.setUser);
  const auth = useUserStore((state) => state.isAuth);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
      setIsAuth(true);
    } else {
      router.push("/login");
    }
  }, [auth, router]);

  return auth ? children : null;
};

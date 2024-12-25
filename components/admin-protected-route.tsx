"use client";
import {ReactNode, useEffect, useState} from "react";
import {usePathname, useRouter} from "next/navigation";
import { useUserStore } from "@/store/user-store";

interface ProtectedRouteProps {
  children: ReactNode;
}

export const AdminProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const router = useRouter();
  const user = useUserStore((state) => state.user);
  const pathname = usePathname();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const userId = pathname.split("/").pop();
    if (user?.role !== "ADMIN" && user?.id !== Number(userId)) {
      router.push(`/employee/${user?.id}`);
      setLoad(true);
    }
  }, []);

  return load ? null : children;
};

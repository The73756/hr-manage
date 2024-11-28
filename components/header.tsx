"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/user-store";

export const Header = () => {
  const router = useRouter();
  const setIsAuth = useUserStore((state) => state.setIsAuth);
  const setUser = useUserStore((state) => state.setUser);
  const auth = useUserStore((state) => state.isAuth);

  const logout = () => {
    setUser({});
    setIsAuth(false);
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <div className="py-5 border-b border-b-blue-light">
      <div className="flex justify-between items-center container">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={154} height={70} />
        </Link>
        {auth && (
          <Dialog>
            <DialogTrigger asChild>
              <Button intent="secondary">Выйти</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Выйти из сервиса?</DialogTitle>
                <DialogDescription>
                  Время работы будет сохранено
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button onClick={logout} className="bg-red w-full text-white">
                  Выйти
                </Button>
                <DialogClose asChild>
                  <Button
                    intent="secondary"
                    className="border-blue w-full text-blue"
                  >
                    Отменить
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
};

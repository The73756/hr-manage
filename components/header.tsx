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
import {logout} from "@/api/user-api";
import {User} from "@/types/user";

export const Header = () => {
  const router = useRouter();
  const setIsAuth = useUserStore((state) => state.setIsAuth);
  const setUser = useUserStore((state) => state.setUser);
  const auth = useUserStore((state) => state.isAuth);
  const user = useUserStore((state) => state.user);

  const exit = async () => {
    try {
      const res = await logout(user?.id);
      if (res) {
        setUser({} as User);
        setIsAuth(false);
        localStorage.removeItem("user");
        router.push("/login");
      } else {
      }
    } catch (error) {
      console.error(error);
    }
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
                <Button onClick={exit} className="bg-red w-full text-white">
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

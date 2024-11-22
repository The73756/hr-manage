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

export const Header = () => {
  const user = true;

  return (
    <div className="py-5 border-b border-b-blue-light">
      <div className="flex justify-between items-center container">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={154} height={70} />
        </Link>
        {user && (
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
                <Button className="bg-red w-full text-white">Выйти</Button>
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

import { EmployeeInfo } from "@/components/employee-info";
import { Header } from "@/components/header";
import { OneEmployeeTable } from "@/components/one-employee-table";
import { DeleteIcon } from "@/components/shared/delete-icon";
import { EditIcon } from "@/components/shared/edit-icon";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function EmployeePage() {
  return (
    <>
      <Header />
      <div className="py-16 container">
        <EmployeeInfo />
        <div className="flex justify-between items-center gap-2">
          <Select>
            <SelectTrigger className="w-[120px] min-w-[120px]">
              <SelectValue placeholder="Дата" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="20.11.2024">20.11.2024</SelectItem>
              <SelectItem value="19.11.2024">19.11.2024</SelectItem>
              <SelectItem value="18.11.2024">18.11.2024</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex gap-5 max-md:hidden">
            <Button>
              <Link href="/edit">Редактировать работника</Link>
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button intent="secondary">Удалить работника</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Удалить выбранного работника?</DialogTitle>
                  <DialogDescription>
                    Это действие нельзя отменить
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button className="bg-red w-full text-white">Удалить</Button>
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
          </div>
          <div className="flex gap-2 md:hidden">
            <Button className="bg-blue" intent="icon">
              <EditIcon />
            </Button>
            <Button className="bg-red" intent="icon">
              <DeleteIcon />
            </Button>
          </div>
        </div>
        <OneEmployeeTable />
      </div>
    </>
  );
}

import { DeleteIcon } from "./shared/delete-icon";
import { EditIcon } from "./shared/edit-icon";
import { Button } from "./ui/button";
import { TableCell } from "./ui/table-cell";
import { EmployeeCell } from "./ui/employee-cell";
import { TableHead } from "./ui/table-head";
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

export const EmployeesTable = () => {
  return (
    <div className="my-16 overflow-x-auto">
      <div className="w-full min-w-[915px]">
        <div className="gap-4 lg:gap-6 grid grid-cols-5 md:grid-cols-4 mb-2 w-full">
          <span />
          <div className="gap-2 grid grid-cols-[repeat(24,minmax(0,1fr))] col-span-4 md:col-span-3">
            <TableHead className="col-span-4 lg:col-span-5">
              График работы
            </TableHead>
            <TableHead className="col-span-4">Начало работы</TableHead>
            <TableHead className="col-span-4">Конец работы</TableHead>
            <TableHead className="col-span-4">Выполнено</TableHead>
            <TableHead className="col-span-4">З/п за месяц</TableHead>
            <span />
          </div>
        </div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((employee) => (
          <div
            key={employee}
            className="gap-4 lg:gap-6 grid grid-cols-5 md:grid-cols-4 mb-2 w-full"
          >
            <EmployeeCell id={employee}>Иванов Иван Иванович</EmployeeCell>
            <div className="gap-2 grid grid-cols-[repeat(24,minmax(0,1fr))] col-span-4 md:col-span-3">
              <TableCell className="col-span-4 lg:col-span-5">
                08:00-17:00
              </TableCell>
              <TableCell className="col-span-4">08:00</TableCell>
              <TableCell className="col-span-4">17:00</TableCell>
              <TableCell className="col-span-4">8:30</TableCell>
              <TableCell className="col-span-4">50 000</TableCell>
              <div className="flex justify-end gap-2 col-span-4 lg:col-span-3">
                <Button className="bg-blue" intent="icon">
                  <EditIcon />
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-red" intent="icon">
                      <DeleteIcon />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Удалить выбранного работника?</DialogTitle>
                      <DialogDescription>
                        Это действие нельзя отменить
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <Button className="bg-red w-full text-white">
                        Удалить
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

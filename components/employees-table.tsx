import { DeleteIcon } from "./shared/delete-icon";
import { EditIcon } from "./shared/edit-icon";
import { Button } from "./ui/button";
import { TableCell } from "./ui/table-cell";
import { TableEmployee } from "./ui/table-employee";
import { TableHead } from "./ui/table-head";

export const EmployeesTable = () => {
  return (
    <div className="my-16 w-full">
      <div className="gap-6 grid grid-cols-4 mb-2 w-full">
        <span />
        <div className="gap-2 grid grid-cols-[repeat(24,minmax(0,1fr))] col-span-3">
          <TableHead className="col-span-5">График работы</TableHead>
          <TableHead className="col-span-4">Начало работы</TableHead>
          <TableHead className="col-span-4">Конец работы</TableHead>
          <TableHead className="col-span-4">Выполнено</TableHead>
          <TableHead className="col-span-4">З/п за месяц</TableHead>
          <span />
        </div>
      </div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((employee) => (
        <div key={employee} className="gap-6 grid grid-cols-4 mb-2 w-full">
          <TableEmployee>Иванов Иван Иванович</TableEmployee>
          <div className="gap-2 grid grid-cols-[repeat(24,minmax(0,1fr))] col-span-3">
            <TableCell className="col-span-5">08:00-17:00</TableCell>
            <TableCell className="col-span-4">08:00</TableCell>
            <TableCell className="col-span-4">17:00</TableCell>
            <TableCell className="col-span-4">8:30</TableCell>
            <TableCell className="col-span-4">50 000</TableCell>
            <div className="flex justify-end gap-2 col-span-3">
              <Button className="bg-blue" intent="icon">
                <EditIcon />
              </Button>
              <Button className="bg-red" intent="icon">
                <DeleteIcon />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

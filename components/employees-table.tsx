import { Button } from "./ui/button";
import { TableHead } from "./ui/table-head";

export const EmployeesTable = () => {
  return (
    <div className="my-16 w-full">
      <div className="gap-5 grid grid-cols-4 w-full">
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
        <tr key={employee} className="gap-5 grid grid-cols-4 w-full">
          <td>Иванов Иван Иванович</td>
          <td>08:00-17:00</td>
          <td>08:00</td>
          <td>17:00</td>
          <td>8:30</td>
          <td>50 000</td>
          <td className="flex">
            <Button className="bg-blue" intent="icon"></Button>
            <Button className="bg-red" intent="icon"></Button>
          </td>
        </tr>
      ))}
    </div>
  );
};

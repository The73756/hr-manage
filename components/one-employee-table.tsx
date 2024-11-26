import { TableCell } from "./ui/table-cell";
import { TableHead } from "./ui/table-head";

export const OneEmployeeTable = () => {
  return (
    <div className="max-md:flex max-md:gap-2 mt-16 w-full">
      <div className="gap-2 grid md:grid-cols-5 max-md:grid-rows-5 md:mb-2 w-full">
        <TableHead>График работы</TableHead>
        <TableHead>Начало работы</TableHead>
        <TableHead>Конец работы</TableHead>
        <TableHead>Выполнено</TableHead>
        <TableHead>З/п за месяц</TableHead>
      </div>
      <div className="gap-2 grid md:grid-cols-5 max-md:grid-rows-5 md:mb-2 w-full">
        <TableCell>08:00-17:00</TableCell>
        <TableCell>08:00</TableCell>
        <TableCell>17:00</TableCell>
        <TableCell>8:30</TableCell>
        <TableCell>50 000</TableCell>
      </div>
    </div>
  );
};

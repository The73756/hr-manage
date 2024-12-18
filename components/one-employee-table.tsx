import {TableCell} from "./ui/table-cell";
import {TableHead} from "./ui/table-head";
import {Schedule} from "@/types/schedule";

interface OneEmployeeTableProps {
  data: {
    schedule: Schedule
    workDay: any
    salary: any
  }
}

export const OneEmployeeTable = ({data}: OneEmployeeTableProps) => {
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
        <TableCell>
          {data.schedule?.startWork}-{data.schedule?.endWork}
        </TableCell>
        <TableCell>{data.workDay?.startTime || "-"}</TableCell>
        <TableCell>{data.workDay?.endTime || "-"}</TableCell>
        <TableCell className={data.workDay?.totalTime >= 8 ? 'bg-green/50' : 'bg-red/50'}>{data.workDay?.totalTime || "-"}</TableCell>
        <TableCell>{data.salary?.totalSalary || "-"}</TableCell>
      </div>
    </div>
  );
};

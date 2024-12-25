"use client"
import {DeleteIcon} from "./shared/delete-icon";
import {EditIcon} from "./shared/edit-icon";
import {Button} from "./ui/button";
import {TableCell} from "./ui/table-cell";
import {EmployeeCell} from "./ui/employee-cell";
import {TableHead} from "./ui/table-head";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {DialogClose} from "@radix-ui/react-dialog";
import {User} from "@/types/user";
import Link from "next/link";
import {useEmployeeStore} from "@/store/employees-store";
import {useEffect} from "react";
import {Schedule} from "@/types/schedule";
import {deleteEmployee} from "@/api/employee-api";
import {formatTime} from "@/utils/format-time";

interface EmployeesTableProps {
  data: {
    employees: User[];
    schedules: Schedule[]
    workDays: any
    salaries: any
  }
}

export const EmployeesTable = ({data}: EmployeesTableProps) => {
  const employees = useEmployeeStore(state => state.employees);
  const schedules = useEmployeeStore(state => state.schedules);
  const workDays = useEmployeeStore(state => state.workDays)
  const salaries = useEmployeeStore(state => state.salaries)
  const setEmployees = useEmployeeStore(state => state.setEmployees);
  const removeEmployee = useEmployeeStore(state => state.removeEmployee)
  const setSchedules = useEmployeeStore(state => state.setSchedules);
  const setWorkDays = useEmployeeStore(state => state.setWorkDays);
  const setSalaries = useEmployeeStore(state => state.setSalaries);
  const currentDate = useEmployeeStore(state => state.currentDate)

  const currentWorkDay = workDays.filter(day => day.date === currentDate)
  const currentSalaries = salaries.filter(salary => salary.monthDate.split("-")[1] === currentDate.split("-")[1])

  useEffect(() => {
    setEmployees(data.employees)
    setSchedules(data.schedules)
    setWorkDays(data.workDays)
    setSalaries(data.salaries)
  }, [data]);

  const delEmployee = async (id: number) => {
    try {
      const res = await deleteEmployee(id)
      if (res) {
        removeEmployee(id)
      }
    } catch {
      console.log('error')
    }
  }

  return (
    <div className="my-16 overflow-x-auto">
      {employees.length > 0
        ? <div className="w-full min-w-[915px]">
          <div className="gap-4 lg:gap-6 grid grid-cols-5 md:grid-cols-4 mb-2 w-full">
            <span/>
            <div className="gap-2 grid grid-cols-[repeat(24,minmax(0,1fr))] col-span-4 md:col-span-3">
              <TableHead className="col-span-4 lg:col-span-5">
                График работы
              </TableHead>
              <TableHead className="col-span-4">Начало работы</TableHead>
              <TableHead className="col-span-4">Конец работы</TableHead>
              <TableHead className="col-span-4">Выполнено</TableHead>
              <TableHead className="col-span-4">З/п за месяц</TableHead>
              <span/>
            </div>
          </div>
          {employees.map((employee) => (
            <div
              key={employee.id}
              className="gap-4 lg:gap-6 grid grid-cols-5 md:grid-cols-4 mb-2 w-full"
            >
              <EmployeeCell id={employee.id}>
                {employee.surname} {employee.name} {employee.patronymic}
              </EmployeeCell>
              <div className="gap-2 grid grid-cols-[repeat(24,minmax(0,1fr))] col-span-4 md:col-span-3">
                <TableCell className="col-span-4 lg:col-span-5">
                  {schedules.find(schedule => schedule.userId === employee.id) ? `${schedules.find(schedule => schedule.id === employee.id)?.startWork}-${schedules.find(schedule => schedule.id === employee.id)?.endWork}` : "-"}
                </TableCell>
                <TableCell
                  className="col-span-4">{currentWorkDay.find(date => date.userId === employee.id)?.startTime || "-"}</TableCell>
                <TableCell
                  className="col-span-4">{currentWorkDay.find(date => date.userId === employee.id)?.endTime || "-"}</TableCell>
                <TableCell
                  className={`col-span-4 ${currentWorkDay.find(date => date.userId === employee.id)!.totalTime >= 8 ? 'bg-green/50' : 'bg-red/50'}`}>
                  {currentWorkDay.find(date => date.userId === employee.id)?.totalTime
                    ? formatTime(currentWorkDay.find(date => date.userId === employee.id)!.totalTime)
                    : '-'}
                </TableCell>
                <TableCell
                  className="col-span-4">{currentSalaries.find(salary => salary.userId === employee.id)?.totalSalary || "-"}</TableCell>
                <div className="flex justify-end gap-2 col-span-4 lg:col-span-3">
                  <Button className="bg-blue" intent="icon">
                    <Link href={`/edit/${employee.id}`}>
                      <EditIcon/>
                    </Link>
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-red" intent="icon">
                        <DeleteIcon/>
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
                        <DialogClose asChild>
                          <Button onClick={() => delEmployee(employee.id)} className="bg-red w-full text-white">
                            Удалить
                          </Button>
                        </DialogClose>
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
        : <div className="text-center h-full">Список работников пуст</div>}
    </div>
  );
};

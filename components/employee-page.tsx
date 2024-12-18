"use client"
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
import {useEffect, useState} from "react";
import {useEmployeeStore} from "@/store/employees-store";
import {useParams} from "next/navigation";
import {Schedule} from "@/types/schedule";
import {User} from "@/types/user";

interface Props {
  data: {
    employees: User[];
    schedules: Schedule[];
  };
}

export const EmployeePage = ({data}: Props) => {
  const params = useParams()
  const id = Number(params.id)
  const employees = useEmployeeStore(state => state.employees);
  const schedules = useEmployeeStore(state => state.schedules);
  const setEmployees = useEmployeeStore(state => state.setEmployees);
  const setSchedules = useEmployeeStore(state => state.setSchedules);
  const [employee, setEmployee] = useState<User>();
  const [schedule, setSchedule] = useState<Schedule>();

  useEffect(() => {
    setEmployees(data.employees);
    setSchedules(data.schedules);
  }, [data, setEmployees, setSchedules]);

  useEffect(() => {
    if (employees.length > 0 && schedules.length > 0) {
      setEmployee(employees.find(emp => emp.id === id));
      setSchedule(schedules.find(sch => sch.userId === id));
    }
  }, [id, employees, schedules]);

  return (
    <>
      <Header />
      <div className="py-16 container">
        {employee && <EmployeeInfo employee={employee} />}
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
              <Link href={`/edit/${id}`}>Редактировать работника</Link>
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
        {schedule && <OneEmployeeTable schedule={schedule} /> }
      </div>
    </>
  );
}
"use client"
import {EmployeeInfo} from "@/components/employee-info";
import {Header} from "@/components/header";
import {OneEmployeeTable} from "@/components/one-employee-table";
import {DeleteIcon} from "@/components/shared/delete-icon";
import {EditIcon} from "@/components/shared/edit-icon";
import {Button} from "@/components/ui/button";
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
import {useParams, useRouter} from "next/navigation";
import {Schedule} from "@/types/schedule";
import {User} from "@/types/user";
import {deleteEmployee} from "@/api/employee-api";
import {useUserStore} from "@/store/user-store";

interface Props {
  data: {
    employees: User[];
    schedules: Schedule[];
    workDays: any
    salaries: any
  };
}

export const EmployeePage = ({data}: Props) => {
  const params = useParams()
  const id = Number(params.id)
  const router = useRouter()

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
  const setCurrentDate = useEmployeeStore(state => state.setCurrentDate)

  const user = useUserStore(state => state.user);

  const [date, setDate] = useState(currentDate)

  const [employee, setEmployee] = useState<User>();
  const [schedule, setSchedule] = useState<Schedule>();
  const [workDay, setWorkDay] = useState();
  const [salary, setSalary] = useState();

  useEffect(() => {
    setEmployees(data.employees);
    setSchedules(data.schedules);
    setWorkDays(data.workDays)
    setSalaries(data.salaries)
  }, [data]);

  useEffect(() => {
    if (employees.length > 0 && schedules.length > 0) {
      setEmployee(employees.find(emp => emp.id === id));
      setSchedule(schedules.find(sch => sch.userId === id));
      setWorkDay(workDays.find(emp => emp.userId === id && emp.date === currentDate) as any);
      setSalary(salaries.find(sch => sch.userId === id && sch.monthDate.split("-")[1] === currentDate.split("-")[1]) as any);
    }
  }, [id, employees, schedules, workDays, salaries, currentDate]);

  const delEmployee = async (id: number) => {
    try {
      const res = await deleteEmployee(id)
      if (res) {
        removeEmployee(id)
        router.push("/")
      }
    } catch {
      console.log('error')
    }
  }

  return (
    <>
      <Header/>
      <div className="py-16 container">
        {employee && <EmployeeInfo employee={employee}/>}
        <div className="flex justify-between items-center gap-2">
          <Select value={date} onValueChange={(val) => {
            setCurrentDate(val)
            setDate(val)
          }}>
            <SelectTrigger className="w-full xs:w-[120px] min-w-[125px]">
              <SelectValue placeholder="Дата"/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024-12-26">26.12.2024</SelectItem>
              <SelectItem value="2024-12-25">25.12.2024</SelectItem>
              <SelectItem value="2024-12-24">24.12.2024</SelectItem>
              <SelectItem value="2024-12-23">23.12.2024</SelectItem>
              <SelectItem value="2024-12-22">22.12.2024</SelectItem>
              <SelectItem value="2024-12-21">21.12.2024</SelectItem>
              <SelectItem value="2024-12-20">20.12.2024</SelectItem>
              <SelectItem value="2024-12-19">19.12.2024</SelectItem>
              <SelectItem value="2024-12-18">18.12.2024</SelectItem>
              <SelectItem value="2024-12-17">17.12.2024</SelectItem>
              <SelectItem value="2024-12-16">16.12.2024</SelectItem>
              <SelectItem value="2024-12-15">15.12.2024</SelectItem>
              <SelectItem value="2024-12-14">14.12.2024</SelectItem>
              <SelectItem value="2024-12-13">13.12.2024</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex gap-5 max-md:hidden">
            <Button>
              <Link href={`/edit/${id}`}>Редактировать {user.id === id ? "данные" : "работника"}</Link>
            </Button>
            {user.role === "ADMIN" &&
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
                    <Button onClick={() => delEmployee(employee?.id || 1)}
                            className="bg-red w-full text-white">Удалить</Button>
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
              </Dialog>}
          </div>
          <div className="flex gap-2 md:hidden">
            <Button className="bg-blue" intent="icon">
              <EditIcon/>
            </Button>
            <Button className="bg-red" intent="icon">
              <DeleteIcon/>
            </Button>
          </div>
        </div>
        {schedule && <OneEmployeeTable data={{schedule, workDay, salary}}/>}
      </div>
    </>
  );
}
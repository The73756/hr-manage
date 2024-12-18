import {EmployeePage} from "@/components/employee-page";
import {getEmployees} from "@/api";
import {User} from "@/types/user";
import {Schedule} from "@/types/schedule";

export default async function OneEmployeePage() {
  const {employees, schedules, workDays, salaries} = (await getEmployees()) as {employees: User[], schedules: Schedule[], workDays: any, salaries: any};
  return (
    <EmployeePage data={{employees, schedules, workDays, salaries}} />
  );
}
import {EmployeePage} from "@/components/employee-page";
import {getEmployees} from "@/api";
import {User} from "@/types/user";
import {Schedule} from "@/types/schedule";
import {ProtectedRoute} from "@/components/protected-route";
import {AdminProtectedRoute} from "@/components/admin-protected-route";

export default async function OneEmployeePage() {
  const {employees, schedules, workDays, salaries} = (await getEmployees()) as {
    employees: User[],
    schedules: Schedule[],
    workDays: any,
    salaries: any
  };

  return (
    <ProtectedRoute>
      <AdminProtectedRoute>
        <EmployeePage data={{employees, schedules, workDays, salaries}}/>
      </AdminProtectedRoute>
    </ProtectedRoute>
  );
}
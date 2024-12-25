import {getEmployees} from "@/api";
import {EmployeesTable} from "@/components/employees-table";
import {FilterBar} from "@/components/filter-bar";
import {Header} from "@/components/header";
import {ProtectedRoute} from "@/components/protected-route";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {User} from "@/types/user";
import {Schedule} from "@/types/schedule";
import {AdminProtectedRoute} from "@/components/admin-protected-route";

export default async function Home() {
  const {employees, schedules, workDays, salaries} = (await getEmployees()) as {
    employees: User[],
    schedules: Schedule[],
    workDays: any,
    salaries: any
  };

  return (
    <ProtectedRoute>
      <AdminProtectedRoute>
        <Header/>
        <div className="py-16 container">
          <FilterBar/>
          <EmployeesTable data={{employees, schedules, workDays, salaries}}/>
          { /* <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href=""/>
            </PaginationItem>
            {[1, 2, 3, 4, 5].map((page) => (
              <PaginationItem key={page}>
                <PaginationLink isActive={page === 2} href="">
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext href=""/>
            </PaginationItem>
          </PaginationContent>
        </Pagination> */}
        </div>
      </AdminProtectedRoute>
    </ProtectedRoute>
  );
}

import { EmployeesTable } from "@/components/employees-table";
import { FilterBar } from "@/components/filter-bar";
import { Header } from "@/components/header";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function Home() {
  return (
    <>
      <Header />
      <div className="py-16 container">
        <FilterBar />
        <EmployeesTable />
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="" />
            </PaginationItem>
            {[1, 2, 3, 4, 5].map((page) => (
              <PaginationItem key={page}>
                <PaginationLink isActive={page === 2} href="">
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext href="" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
}

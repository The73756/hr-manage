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

export default function EmployeePage() {
  return (
    <>
      <Header />
      <div className="py-16 container">
        <EmployeeInfo />
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
            <Button>Редактировать работника</Button>
            <Button intent="secondary">Удалить работника</Button>
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
        <OneEmployeeTable />
      </div>
    </>
  );
}

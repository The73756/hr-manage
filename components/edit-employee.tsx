"use client";
import {EditForm} from "@/components/edit-form";
import {useParams} from "next/navigation";
import {useUserStore} from "@/store/user-store";
import {useEmployeeStore} from "@/store/employees-store";
import {User} from "@/types/user";

export const EditEmployee = () => {
  const params = useParams()
  const id = Number(params.id)
  const user = useUserStore(state => state.user);
  const employees = useEmployeeStore(state => state.originalEmployees);

  return (
    <div className="flex flex-col flex-shrink-0 gap-20 w-full md:w-[420px]">
      <h1 className="md:max-w-[390px] font-semibold text-2xl text-blue sm:text-3xl md:text-4xl">
        Редактирование {user.id === id ? "данных" : "работника"}
      </h1>
      <EditForm employee={employees.find(e => e.id === id) as User} admin={user.role === "ADMIN"} adminProfile={user.role === "ADMIN" && user.id === id}/>
    </div>
  );
}

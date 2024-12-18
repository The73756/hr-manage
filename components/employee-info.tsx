import {User} from "@/types/user";

interface OneEmployeeTableProps {
  employee: User
}

export const EmployeeInfo = ({employee}: OneEmployeeTableProps) => {
  return (
    <div className="flex flex-wrap justify-between gap-8 mb-16 md:mb-32">
      <h1 className="font-semibold text-2xl text-blue sm:text-3xl">
        {employee?.surname} {employee?.name} {employee?.patronymic}
      </h1>
      <div className="items-center gap-x-2 gap-y-2 sm:gap-x-5 grid grid-cols-2 w-full sm:w-[420px] text-blue-light">
        <p className="max-sm:text-sm">Электронная почта</p>
        <p className="font-bold sm:text-xl">{employee?.email}</p>
        <p className="max-sm:text-sm">Телефон</p>
        <p className="font-bold sm:text-xl">{employee?.phone}</p>
        <p className="max-sm:text-sm">Ставка (руб./час)</p>
        <p className="font-bold sm:text-xl">{employee?.salaryRate}</p>
      </div>
    </div>
  );
};

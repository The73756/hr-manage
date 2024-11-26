import Link from "next/link";
import { ReactNode } from "react";

interface TableEmployeeProps {
  children: ReactNode;
  id: number;
}

export const EmployeeCell = ({ children, id }: TableEmployeeProps) => {
  return (
    <Link
      href={`/employee/${id}`}
      className="inline-block content-center bg-blue-light/20 md:px-4 p-2 rounded-lg w-full md:font-bold text-blue-light text-ellipsis max-lg:text-sm xl:text-lg whitespace-nowrap overflow-hidden"
    >
      {children}
    </Link>
  );
};

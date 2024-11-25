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
      className="bg-blue-light/20 px-4 py-2 rounded-lg font-bold text-blue-light text-lg"
    >
      {children}
    </Link>
  );
};

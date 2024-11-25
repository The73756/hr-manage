import { ReactNode } from "react";

interface TableEmployeeProps {
  children: ReactNode;
}

export const TableEmployee = ({ children }: TableEmployeeProps) => {
  return (
    <div className="bg-blue-light/20 px-4 py-2 rounded-lg font-bold text-blue-light text-lg">
      {children}
    </div>
  );
};

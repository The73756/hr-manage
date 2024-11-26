import { ReactNode } from "react";

interface TableHeadProps {
  children: ReactNode;
  className?: string;
}

export const TableHead = ({ children, className }: TableHeadProps) => {
  return (
    <div
      className={`bg-blue-light px-4 py-2 rounded-lg sm:font-bold text-center max-sm:text-xs flex items-center justify-center text-white ${className}`}
    >
      {children}
    </div>
  );
};

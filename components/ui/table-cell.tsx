import { ReactNode } from "react";

interface TableCellProps {
  children: ReactNode;
  className?: string;
}

export const TableCell = ({ children, className }: TableCellProps) => {
  return (
    <div
      className={`bg-blue-light/50 p-2 rounded-lg font-medium flex max-sm:text-sm text-center items-center justify-center text-black ${className}`}
    >
      {children}
    </div>
  );
};

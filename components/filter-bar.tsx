import Link from "next/link";
import { Filters } from "./filters";
import { Button } from "./ui/button";

export const FilterBar = () => {
  return (
    <div className="flex flex-wrap justify-between gap-x-20 gap-y-8">
      <Filters />
      <Link href="add">
        <Button>Добавить работника</Button>
      </Link>
    </div>
  );
};

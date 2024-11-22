import { Filters } from "./filters";
import { Button } from "./ui/button";

export const FilterBar = () => {
  return (
    <div className="flex justify-between gap-5">
      <Filters />
      <Button>Добавить работника</Button>
    </div>
  );
};

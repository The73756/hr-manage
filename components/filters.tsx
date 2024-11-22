import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export const Filters = () => {
  return (
    <div className="flex flex-shrink-0 gap-5">
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
      <Select>
        <SelectTrigger className="min-w-[150px]">
          <SelectValue placeholder="Фильтровать" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Фильтр 1</SelectItem>
          <SelectItem value="2">Фильтр 2</SelectItem>
          <SelectItem value="3">Фильтр 3</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="min-w-[150px]">
          <SelectValue placeholder="Сортировать" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">По алфавиту</SelectItem>
          <SelectItem value="2">По часам</SelectItem>
          <SelectItem value="3">По зарплате</SelectItem>
        </SelectContent>
      </Select>
      <Input className="min-w-[270px]" placeholder="Найти работника..." />
    </div>
  );
};

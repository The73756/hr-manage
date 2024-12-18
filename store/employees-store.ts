import { create } from "zustand";
import { User } from "@/types/user";
import { Schedule } from "@/types/schedule";

interface WorkDay {
  id: number;
  userId: number;
  date: string;
  startTime: string;
  endTime: string;
  totalTime: number;
}

interface Salary {
  id: number;
  userId: number;
  totalSalary: number;
  monthDate: string;
}

interface EmployeeState {
  employees: User[];
  schedules: Schedule[];
  workDays: WorkDay[];
  salaries: Salary[];
  searchQuery: string;
  currentDate: string;
  sortOption: string;
  addEmployee: (employee: User) => void;
  removeEmployee: (id: number) => void;
  setEmployees: (employees: User[]) => void;
  addSchedule: (schedule: Schedule) => void;
  setSchedules: (schedules: Schedule[]) => void;
  setWorkDays: (workDays: WorkDay[]) => void;
  setSalaries: (salaries: Salary[]) => void;
  setSearchQuery: (query: string) => void;
  setCurrentDate: (date: string) => void;
  setSortOption: (option: string) => void;
}

export const useEmployeeStore = create<EmployeeState>()((set) => ({
  employees: [],
  schedules: [],
  workDays: [],
  salaries: [],
  searchQuery: "",
  currentDate: "2024-12-19",
  sortOption: "",
  addEmployee: (employee) => set((state) => ({ employees: [...state.employees, employee] })),
  removeEmployee: (id) => set((state) => ({ employees: state.employees.filter(emp => emp.id !== id) })),
  setEmployees: (employees) => set({ employees }),
  addSchedule: (schedule) => set((state) => ({ schedules: [...state.schedules, schedule] })),
  setSchedules: (schedules) => set({ schedules }),
  setWorkDays: (workDays) => set({ workDays }),
  setSalaries: (salaries) => set({ salaries }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setCurrentDate: (date) => set({ currentDate: date }),
  setSortOption: (option) => set({ sortOption: option }),
}));
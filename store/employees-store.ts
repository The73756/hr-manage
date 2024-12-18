import { create } from "zustand";
import { User } from "@/types/user";
import {Schedule} from "@/types/schedule";

interface EmployeeState {
  employees: User[];
  schedules: Schedule[];
  addEmployee: (employee: User) => void;
  removeEmployee: (id: string) => void;
  setEmployees: (employees: User[]) => void;
  addSchedule: (schedule: Schedule) => void;
  setSchedules: (schedules: Schedule[]) => void;
}

export const useEmployeeStore = create<EmployeeState>()((set) => ({
  employees: [],
  schedules: [],
  addEmployee: (employee) => set((state) => ({ employees: [...state.employees, employee] })),
  removeEmployee: (id) => set((state) => ({ employees: state.employees.filter(emp => emp.id !== id) })),
  setEmployees: (employees) => set({ employees }),
  addSchedule: (schedule) => set((state) => ({ schedules: [...state.schedules, schedule] })),
  setSchedules: (schedules) => set({ schedules }),
}));
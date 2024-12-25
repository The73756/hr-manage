"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { User } from "@/types/user";
import { useEmployeeStore } from "@/store/employees-store";
import { editEmployee } from "@/api/employee-api";
import { Schedule } from "@/types/schedule";

const formSchema = z.object({
  surname: z.string().min(1, { message: "Это обязательное поле" }),
  name: z.string().min(1, { message: "Это обязательное поле" }),
  patronymic: z.string().min(1, { message: "Это обязательное поле" }),
  phone: z
    .string()
    .min(10, { message: "Некорректный номер телефона" })
    .regex(/^\+?[0-9]{10,15}$/, {
      message: "Некорректный номер телефона",
    }),
  password: z.string().min(6, { message: "Некорректная длина пароля" }),
  startWork: z.string().min(1, { message: "Это обязательное поле" }),
  endWork: z.string().min(1, { message: "Это обязательное поле" }),
  salaryRate: z.coerce.number().min(1, { message: "Это обязательное поле" }),
});

interface EditFormProps {
  admin: boolean;
  adminProfile: boolean;
  employee: User;
}

export const EditForm = ({ admin, adminProfile, employee }: EditFormProps) => {
  const employees = useEmployeeStore((state) => state.employees);
  const setEmployees = useEmployeeStore((state) => state.setEmployees);
  const schedules = useEmployeeStore((state) => state.schedules);
  const setSchedules = useEmployeeStore((state) => state.setSchedules);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      surname: employee?.surname,
      name: employee?.name,
      patronymic: employee?.patronymic,
      phone: employee?.phone,
      password: employee?.password,
      startWork: schedules?.find((sch) => sch.userId === employee.id)?.startWork,
      endWork: schedules?.find((sch) => sch.userId === employee.id)?.endWork,
      salaryRate: employee?.salaryRate,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    try {
      const { updatedEmployee, updatedSchedule } = (await editEmployee({
        id: employee.id,
        ...values,
      })) as { updatedEmployee: User; updatedSchedule: Schedule };
      if (updatedEmployee && updatedSchedule) {
        form.reset();
        setEmployees(
          employees.map((emp) =>
            emp.id === updatedEmployee.id ? updatedEmployee : emp
          )
        );
        setSchedules(
          schedules.map((sch) =>
            sch.userId === updatedEmployee.id ? updatedSchedule : sch
          )
        );
        window.location.href = "/";
        // toast({
        //   title: "добавлен",
        // });
      } else {
        // toast({
        //   title: "Ошибка добавления",
        // });
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <div className="space-y-5">
          {admin && (
            <>
              <FormField
                control={form.control}
                name="surname"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Фамилия" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Имя" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="patronymic"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Отчество" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Телефон" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {(!admin || adminProfile) && (
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="password" placeholder="Пароль" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          {admin && (
            <>
              <div className="flex gap-2">
                <FormField
                  control={form.control}
                  name="startWork"
                  render={({ field }) => (
                    <FormItem className="min-w-[calc(50%-8px)]">
                      <FormControl>
                        <Input
                          type="time"
                          placeholder="Начало рабочего дня"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="endWork"
                  render={({ field }) => (
                    <FormItem className="min-w-[calc(50%-8px)]">
                      <FormControl>
                        <Input
                          type="time"
                          placeholder="Конец рабочего дня"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="salaryRate"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="number" placeholder="Ставка" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}
        </div>
        <Button className="w-full" type="submit">
          Сохранить
        </Button>
      </form>
    </Form>
  );
};
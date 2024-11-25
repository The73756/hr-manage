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
import { useRouter } from "next/navigation";

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
  email: z.string().email({ message: "Некорректные данные" }),
  password: z.string().min(6, { message: "Некорректная длина пароля" }),
  workStart: z.string().min(1, { message: "Это обязательное поле" }),
  workEnd: z.string().min(1, { message: "Это обязательное поле" }),
  salaryRate: z.string().min(1, { message: "Это обязательное поле" }),
});

export const EditForm = () => {
  const admin = false;
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      surname: "Иванов",
      name: "Иван",
      patronymic: "Иванович",
      phone: "79999999999",
      email: "i@mail.ru",
      password: "1234567",
      workStart: "12:30",
      workEnd: "17:00",
      salaryRate: "700",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    form.reset();
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
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Электронная почта" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {!admin && (
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
                  name="workStart"
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
                  name="workEnd"
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
          Войти
        </Button>
      </form>
    </Form>
  );
};

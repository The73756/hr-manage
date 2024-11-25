import { Header } from "@/components/header";
import { LoginForm } from "@/components/login-form";
import Image from "next/image";

export default function Login() {
  return (
    <>
      <Header />
      <div className="custom-container my-5">
        <div className="flex flex-col flex-shrink-0 gap-20 w-full md:w-[420px]">
          <h1 className="md:max-w-[390px] font-semibold text-2xl text-blue sm:text-3xl md:text-4xl">
            Авторизуйтесь, чтобы использовать сервис
          </h1>
          <LoginForm />
        </div>
        <div className="flex max-md:hidden">
          <Image src="/img-1.png" alt="" aria-hidden width={530} height={404} />
        </div>
      </div>
    </>
  );
}

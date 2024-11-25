import { ChangePasswordForm } from "@/components/change-password-form";
import { Header } from "@/components/header";
import Image from "next/image";

export default function FirstAuth() {
  return (
    <>
      <Header />
      <div className="custom-container my-5">
        <div className="flex max-md:hidden">
          <Image src="/img-2.png" alt="" aria-hidden width={530} height={404} />
        </div>
        <div className="flex flex-col flex-shrink-0 gap-20 w-full md:w-[420px]">
          <h1 className="md:max-w-[390px] font-semibold text-2xl text-blue sm:text-3xl md:text-4xl">
            Измените пароль
          </h1>
          <ChangePasswordForm />
        </div>
      </div>
    </>
  );
}

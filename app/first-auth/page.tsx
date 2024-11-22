import { ChangePasswordForm } from "@/components/change-password-form";
import { Header } from "@/components/header";
import Image from "next/image";

export default function FirstAuth() {
  return (
    <>
      <Header />
      <div className="custom-container">
        <Image src="/img-2.png" alt="" aria-hidden width={530} height={404} />
        <div className="flex flex-col gap-20">
          <h1 className="max-w-[390px] font-semibold text-4xl text-blue">
            Измените пароль
          </h1>
          <ChangePasswordForm />
        </div>
      </div>
    </>
  );
}

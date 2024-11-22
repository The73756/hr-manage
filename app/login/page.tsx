import { Header } from "@/components/header";
import Image from "next/image";

export default function Login() {
  return (
    <>
      <Header />
      <div className="custom-container">
        <div className="flex flex-col gap-20">
          <h1 className="max-w-[390px] font-semibold text-4xl text-blue">
            Авторизуйтесь, чтобы использовать сервис
          </h1>
        </div>
        <Image src="/img-1.png" alt="" aria-hidden width={530} height={404} />
      </div>
    </>
  );
}

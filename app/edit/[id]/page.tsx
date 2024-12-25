import {EditForm} from "@/components/edit-form";
import {Header} from "@/components/header";
import Image from "next/image";
import {ProtectedRoute} from "@/components/protected-route";
import {AdminProtectedRoute} from "@/components/admin-protected-route";

export default function Edit() {
  return (
    <ProtectedRoute>
      <AdminProtectedRoute>
        <Header/>
        <div className="custom-container">
          <div className="flex flex-col flex-shrink-0 gap-20 w-full md:w-[420px]">
            <h1 className="md:max-w-[390px] font-semibold text-2xl text-blue sm:text-3xl md:text-4xl">
              Редактирование работника
            </h1>
            <EditForm/>
          </div>
          <div className="flex max-md:hidden">
            <Image src="/img-3.png" alt="" aria-hidden width={530} height={404}/>
          </div>
        </div>
      </AdminProtectedRoute>
    </ProtectedRoute>
  );
}

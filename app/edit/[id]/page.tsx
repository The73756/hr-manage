import {Header} from "@/components/header";
import Image from "next/image";
import {ProtectedRoute} from "@/components/protected-route";
import {AdminProtectedRoute} from "@/components/admin-protected-route";
import {EditEmployee} from "@/components/edit-employee";

export default function Edit() {
  return (
    <ProtectedRoute>
      <AdminProtectedRoute>
        <Header/>
        <div className="custom-container">
          <EditEmployee />
          <div className="flex max-md:hidden">
            <Image src="/img-3.png" alt="" aria-hidden width={530} height={404}/>
          </div>
        </div>
      </AdminProtectedRoute>
    </ProtectedRoute>
  );
}

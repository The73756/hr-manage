import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <div className="py-5 border-b border-b-blue-light">
      <div className="flex justify-between items-center container">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={154} height={70} />
        </Link>
        <Button intent="secondary">drjg</Button>
      </div>
    </div>
  );
};

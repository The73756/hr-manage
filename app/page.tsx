import { FilterBar } from "@/components/filter-bar";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="py-16 container">
        <FilterBar />
      </div>
    </>
  );
}

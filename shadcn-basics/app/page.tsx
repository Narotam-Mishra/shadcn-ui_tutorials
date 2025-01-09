"use client"
import { useSearchParams } from "next/navigation";
// import MyAccordion from "./shadcn-components/MyAccordion";
import MyAlert from "./shadcn-components/MyAlert";

export default function Home() {
  const params = useSearchParams()

  alert(params.get("balance"));
  const balance = params.get("balance")
  
  return (
    <div className="w-[200px]">
      {/* <MyAccordion /> */}
      {
        balance ? <MyAlert /> : ""
      }
    </div>
  );
}

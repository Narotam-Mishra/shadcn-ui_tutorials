"use client"

import MyAlertDialog from "./shadcn-components/MyAlertDialog";

import MyAccordion from "./shadcn-components/MyAccordion";
// import MyAlert from "./shadcn-components/MyAlert";

export default function Home() {
  
  return (
    <div className="w-[200px]">
      {/* <MyAccordion /> */}
      {/* {
        balance ? <MyAlert /> : ""
      } */}
      <MyAlertDialog title="Open" content="Are you sure?" component={<MyAccordion/>} />
    </div>
  );
}

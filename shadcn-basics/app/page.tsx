"use client"

import MyButton from "./shadcn-components/MyButton";
import MyCalender from "./shadcn-components/MyCalender";
import MyCard from "./shadcn-components/MyCard";

// import MyBreadCrumb from "./shadcn-components/MyBreadCrumb";

// import MyBadge from "./shadcn-components/MyBadge";

// import MyAvatar from "./shadcn-components/MyAvatar";

// import { useSearchParams } from "next/navigation";
// import MyAlertDialog from "./shadcn-components/MyAlertDialog";

// import MyAccordion from "./shadcn-components/MyAccordion";
// import MyAspectRatio from "./shadcn-components/MyAspectRatio";
// import MyAlert from "./shadcn-components/MyAlert";
// import MyCalender from "./shadcn-components/MyCalender";

export default function Home() {
  // const params = useSearchParams()
  // const balance = params.get("balance");

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      {/* <MyAccordion /> */}
      {/* <MyAlert /> */}
      {/* {
        balance ? <MyAlert /> : ""
      } */}
      {/* <MyAlertDialog title="Open" content="Are you sure?" component={<MyAccordion/>} /> */}
      {/* <MyAspectRatio /> */}
      {/* <MyAvatar /> */}
      {/* <MyBadge title='ShadCN UI' variant="destructive" /> */}
      {/* <MyBreadCrumb /> */}
      {/* <MyButton title="Save" /> */}
      {/* <MyCalender /> */}
      <MyCard title="Card" description="We are using Card Component" content={<MyCalender />} footer={<MyButton title="Button" />}/>
    </div>
  );
}

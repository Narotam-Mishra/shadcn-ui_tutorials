"use client"

import MyBadge from "./shadcn-components/MyBadge";

// import MyAvatar from "./shadcn-components/MyAvatar";

// import { useSearchParams } from "next/navigation";
// import MyAlertDialog from "./shadcn-components/MyAlertDialog";

// import MyAccordion from "./shadcn-components/MyAccordion";
// import MyAspectRatio from "./shadcn-components/MyAspectRatio";
// import MyAlert from "./shadcn-components/MyAlert";

export default function Home() {
  // const params = useSearchParams()
  // const balance = params.get("balance");

  return (
    <div className="w-[200px]">
      {/* <MyAccordion /> */}
      {/* <MyAlert /> */}
      {/* {
        balance ? <MyAlert /> : ""
      } */}
      {/* <MyAlertDialog title="Open" content="Are you sure?" component={<MyAccordion/>} /> */}
      {/* <MyAspectRatio /> */}
      {/* <MyAvatar /> */}
      <MyBadge title='ShadCN UI' variant="destructive" />
    </div>
  );
}

import { ReactNode } from "react";
import "../globals.css";
import LeftBar from "@/components/LeftBar";
import RightBar from "@/components/RightBar";

export const metadata = {
  title: "Linkify",
  describtion: "Social media app similar to twitter",
};

const BoardLayout = ({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) => {
  return (
    <div className="flex justify-between mx-auto max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl">
      <div className="px-2 xsm:px-4 xxl:px-8 ">
        <LeftBar />
      </div>
      <div className="flex-1 lg:min-w-[600px] border-x-[1px] border-borderGray">
        {children}
        {modal}
      </div>
      <div className="ml-4 md:ml-8 flex-1">
        <RightBar />
      </div>
    </div>
  );
};

export default BoardLayout;

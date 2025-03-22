import Feed from "@/components/Feed";
import Share from "@/components/Share";
import Link from "next/link";
import React from "react";

const Homepage = () => {
  return (
    <div className="">
      <div className="flex justify-between text-textGray font-bold border-b-[1px] px-4 pt-4">
        <Link
          href={"/"}
          className="pb-3 flex items-center border-b-4 border-iconBlue"
        >
          For you
        </Link>
        <Link href={"/"} className="pb-3 flex items-center">
          Following{" "}
        </Link>
        <Link href={"/"} className="hidden pb-3 lg:flex items-center">
          React.js
        </Link>
        <Link href={"/"} className="hidden pb-3 lg:flex items-center">
          Javascript
        </Link>
        <Link href={"/"} className="hidden pb-3 lg:flex items-center">
          CSS
        </Link>
      </div>
      <Share />
      <Feed />
    </div>
  );
};

export default Homepage;

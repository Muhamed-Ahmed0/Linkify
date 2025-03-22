import Link from "next/link";
import React from "react";
import Image from "./Image";

const Recommendations = () => {
  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
      {/* UserCard */}
      <div className="flex items-center justify-between">
        {/* Image & User Info */}
        <div className="flex items-center gap-2">
          <div className="relative rounded-full overflow-hidden w-10 h-10">
            <Image
              path="public/general/avatar.PNG"
              alt="avatar"
              w={100}
              h={100}
              tr={true}
            />
          </div>
          <div className="">
            <h1 className="text-md font-bold">3anteel elma7alla</h1>
            <span className="text-textGray text-sm">@3anteel elma7alla</span>
          </div>
        </div>
        {/* Button */}
        <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">
          Follow
        </button>
      </div>

      {/* UserCard */}
      <div className="flex items-center justify-between">
        {/* Image & User Info */}
        <div className="flex items-center gap-2">
          <div className="relative rounded-full overflow-hidden w-10 h-10">
            <Image
              path="public/general/avatar.PNG"
              alt="avatar"
              w={100}
              h={100}
              tr={true}
            />
          </div>
          <div className="">
            <h1 className="text-md font-bold">3anteel elma7alla</h1>
            <span className="text-textGray text-sm">@3anteel elma7alla</span>
          </div>
        </div>
        {/* Button */}
        <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">
          Follow
        </button>
      </div>
      <Link href="/" className="text-iconBlue">
        Show More
      </Link>
    </div>
  );
};

export default Recommendations;

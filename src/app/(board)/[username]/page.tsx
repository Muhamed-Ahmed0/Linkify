import Feed from "@/components/Feed";
import Image from "@/components/Image";
import { prisma } from "@/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const UserPage = async ({
  params,
}: {
  params: Promise<{ username: string }>;
}) => {
  const user = await prisma.user.findUnique({
    where: {
      username: (await params).username,
    },
  });
  console.log(params);
  if (!user) return notFound();
  return (
    <div>
      {/* Title */}
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000084]">
        <Link href="/">
          <Image path="public/icons/back.svg" w={24} h={24} alt="back" />
        </Link>
        <h1 className="font-bold text-lg">Muhamed</h1>
      </div>
      {/* Info */}
      <div className="">
        {/* Cover & Avatar Container */}
        <div className="relative w-full">
          <div className="w-full aspect-[3/1] relative">
            <Image
              path="public/general/post.jpeg"
              alt="cover"
              w={600}
              h={200}
            />
          </div>
          <div className="absolute w-1/6 h-1/2 aspect-sqaure left-4 translate-y-[-22px] lg:translate-y-[-45px] rounded-full overflow-hidden border-4 bg-gray-300 ">
            <Image
              path="public/general/me.png"
              alt="cover"
              w={100}
              h={100}
              tr={true}
            />
          </div>
        </div>
        <div className="flex w-full items-center justify-end gap-2 p-2">
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image path="public/icons/more.svg" alt="more" w={20} h={20} />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image path="public/icons/explore.svg" alt="more" w={20} h={20} />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image path="public/icons/message.svg" alt="more" w={20} h={20} />
          </div>
          <button className="py-2 px-4 bg-white text-black rounded-full font-bold">
            Follow
          </button>
        </div>
        {/* User Details */}
        <div className="p-4 flex flex-col gap-2">
          {/* Username & Handle */}
          <div className="">
            <h1 className="text-2xl font-bold ">Muhamed</h1>
            <span className="text-textGray text-sm ">@muhamed_z0</span>
          </div>
          <p>Number 1 Full Stack Developer</p>
          {/* Job & Location & Date */}
          <div className="flex gap-4 text-textGray text-[15px]">
            <div className="flex items-center gap-2">
              <Image
                path="public/icons/userLocation.svg"
                alt="location"
                w={20}
                h={20}
              />
              <span>EGY</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                path="public/icons/date.svg"
                alt="location"
                w={20}
                h={20}
              />
              <span>Joined February 2025</span>
            </div>
          </div>
          {/* Followings & Followers */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold">100</span>
              <span className="text-textGray text-[15px] ">Followers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">52</span>
              <span className="text-textGray text-[15px] ">Followings</span>
            </div>
          </div>
        </div>
      </div>
      {/* Feed */}
      <Feed userProfileId={user.id} />
    </div>
  );
};

export default UserPage;

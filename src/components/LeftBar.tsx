"use client";
import Link from "next/link";
import React from "react";
import Image from "./Image";
import { useRouter } from "next/navigation";

const LeftBar = () => {
  const router = useRouter();

  const menuList = [
    {
      id: 1,
      name: "Homepage",
      link: "/",
      icon: "home.svg",
    },
    {
      id: 2,
      name: "Explore",
      link: "/",
      icon: "explore.svg",
    },
    {
      id: 3,
      name: "Notification",
      link: "/",
      icon: "notification.svg",
    },
    {
      id: 4,
      name: "Messages",
      link: "/",
      icon: "message.svg",
    },
    {
      id: 5,
      name: "Bookmarks",
      link: "/",
      icon: "bookmark.svg",
    },
    {
      id: 6,
      name: "Jobs",
      link: "/",
      icon: "job.svg",
    },
    {
      id: 7,
      name: "Communities",
      link: "/",
      icon: "community.svg",
    },
    {
      id: 8,
      name: "Premium",
      link: "/",
      icon: "logo.svg",
    },
    {
      id: 9,
      name: "Profile",
      link: "/",
      icon: "profile.svg",
    },
    {
      id: 10,
      name: "More",
      link: "/",
      icon: "more.svg",
    },
  ];

  return (
    <div className="flex flex-col justify-between h-screen sticky top-0 pt-4 pb-8 gap-5">
      {/* Logo Menu Button */}
      <div className="flex flex-col gap-4 text-lg">
        <Link
          href="/"
          className="p-2 rounded-full hover:bg-[#181818] w-10 h-10"
        >
          <Image path={"public/icons/logo.svg"} alt="logo" w={24} h={24} />
        </Link>
        {/* Menu List */}
        <div className="flex flex-col">
          {menuList.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="p-2 rounded-full hover:bg-[#181818] flex items-center gap-4"
            >
              <Image
                path={`public/icons/${item.icon}`}
                alt={item.name}
                w={24}
                h={24}
              />
              <span className="hidden xxl:inline">{item.name}</span>
            </Link>
          ))}
        </div>
        {/* Button */}
        <Link
          href={"/compose/post"}
          className="xxl:hidden bg-white text-black rounded-full w-12 h-12 flex items-center justify-center"
        >
          <Image path={"public/icons/post.svg"} alt="post" w={24} h={24} />
        </Link>
        <button
          className="hidden xxl:block bg-white text-black py-2 px-20 font-bold rounded-full"
          onClick={() => router.push("/compose/post")}
        >
          Post
        </button>
      </div>

      {/* User */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 relative rounded-full overflow-hidden">
            <Image
              path={"public/general/me.png"}
              alt="User Image"
              w={100}
              h={100}
              tr={true}
            />
          </div>
          <div className="hidden xxl:flex flex-col">
            <span className="font-bold">Muhamed</span>
            <span className="text-sm">@muhamed_z0</span>
          </div>
        </div>
        <div className="hidden xxl:block cursor-pointer font-bold">...</div>
      </div>
    </div>
  );
};

export default LeftBar;

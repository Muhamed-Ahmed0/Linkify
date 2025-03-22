import React from "react";
import Search from "./Search";
import PopularTags from "./PopularTags";
import Recommendations from "./Recommendations";
import Link from "next/link";
import { Github, Facebook, Instagram } from "lucide-react";

const RightBar = () => {
  return (
    <div className="pt-4 flex flex-col gap-4 sticky top-0 h-max">
      <Search />
      <PopularTags />
      <Recommendations />
      <div className="text-textGray  text-sm flex gap-x-4 flex-wrap">
        <div className="flex items-center gap-4 flex-wrap">
          <Link href={"https://github.com/Muhamed-Ahmed0"}>
            <Github />
          </Link>
          <Link
            href={"https://www.facebook.com/profile.php?id=100058886620445"}
          >
            <Facebook />
          </Link>
          <Link href={"https://www.instagram.com/muhamed_zz0/"}>
            <Instagram />
          </Link>
        </div>
        <span>&copy; {new Date().getFullYear()} | Linkify.</span>
      </div>
    </div>
  );
};

export default RightBar;

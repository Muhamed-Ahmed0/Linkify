import React from "react";
import Image from "./Image";
import Link from "next/link";

const PopularTags = () => {
  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
      <h1 className="text-xl font-bold text-textGrayLight">
        {"What's"} Happening ?{" "}
      </h1>
      {/* Trend Event */}
      <div className="flex gap-4">
        <div className="relative w-20 h-20 rounded-xl overflow-hidden">
          <Image
            path="public/general/post.jpeg"
            alt="event"
            w={120}
            h={120}
            tr={true}
          />
        </div>
        <div className="flex-1">
          <h2 className="text-textGrayLight font-bold">Mount Everest</h2>
          <span className="text-sm text-textGray">Last Night</span>
        </div>
      </div>

      {/* Topics */}
      <div>
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Technology * Trending</span>
          <Image path="public/icons/infoMore.svg" alt="info" w={16} h={16} />
        </div>
        <h2 className="text-textGrayLight font-bold">OpenAI</h2>
        <span className="text-sm text-textGray">20K posts</span>
      </div>
      <Link href="/" className="text-iconBlue">
        Show More
      </Link>
    </div>
  );
};

export default PopularTags;

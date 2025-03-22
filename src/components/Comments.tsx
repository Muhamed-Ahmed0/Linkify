import React from "react";
import Post from "./Post";
import Image from "./Image";

const Comments = () => {
  return (
    <div className="">
      <form className="flex items-center justify-between gap-4 p-4">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            path="public/general/avatar.PNG"
            alt="avatar"
            w={100}
            h={100}
            tr={true}
          />
        </div>
        <input
          className="flex-1 p-2 text-xl bg-transparent outline-none"
          placeholder="Post your reply"
        />
        <button className="py-2 px-4 font-bold bg-white text-black rounded-full">
          Reply
        </button>
      </form>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Comments;

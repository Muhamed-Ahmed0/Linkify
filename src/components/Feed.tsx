import React from "react";
import Post from "./Post";
import { prisma } from "@/prisma";
import { auth } from "@clerk/nextjs/server";

const Feed = async ({ userProfileId }: { userProfileId: string }) => {
  const { userId } = await auth();
  if (!userId) return;

  // Fetch posts from current user and followings
  return (
    <div className="">
      <Post type="status" />
      <Post type="status" />
      <Post type="status" />
      <Post type="status" />
    </div>
  );
};

export default Feed;

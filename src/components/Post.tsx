import React from "react";
import Image from "./Image";
import PostInfo from "./PostInfo";
import PostInteractions from "./PostInteractions";
import { imagekit } from "@/utils";
import Video from "./Video";
import clsx from "clsx";
import Link from "next/link";

interface FileDetailsResponse {
  width: number;
  height: number;
  filePath: string;
  url: string;
  fileType: string;
  customMetaData?: { sensetive: boolean };
}

const Post = async ({ type }: { type: "status" | "comment" }) => {
  const getFileDetails = async (
    fileId: string
  ): Promise<FileDetailsResponse> => {
    return new Promise((resolve, reject) => {
      imagekit.getFileDetails(fileId, function (error, result) {
        if (error) reject(error);
        else resolve(result as FileDetailsResponse);
      });
    });
  };

  const fileDetails = await getFileDetails("67a112f2432c476416fcbd6e");

  return (
    <div className="p-4 border-y-[1px] border-borderGray">
      {/* Post Type */}
      <div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            className="fill-textGray"
            d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
          />
        </svg>{" "}
        <span>3anteel elma7alla reposted</span>
      </div>
      {/* Post Content */}
      <div className={clsx("flex gap-4", type === "status" && "flex-col")}>
        {/* Avatar */}
        <div
          className={clsx(
            "relative w-10 h-10 rounded-full overflow-hidden",
            type === "status" && "hidden"
          )}
        >
          <Image
            path="public/general/me.png"
            alt="post"
            w={100}
            h={100}
            tr={true}
          />
        </div>
        {/* Content */}
        <div className="flex-1 flex flex-col gap-2">
          {/* Top */}
          <div className="w-full flex justify-between">
            <Link href={"/user"} className="flex gap-4 ">
              <div
                className={clsx(
                  "relative w-10 h-10 rounded-full overflow-hidden",
                  type !== "status" && "hidden"
                )}
              >
                <Image
                  path="public/general/me.png"
                  alt="post"
                  w={100}
                  h={100}
                  tr={true}
                />
              </div>
              <div
                className={clsx(
                  "flex items-center gap-2 flex-wrap",
                  type === "status" && "flex-col gap-0 !items-start"
                )}
              >
                <h1 className="text-md font-bold">Muhamed</h1>
                <span
                  className={clsx(
                    "text-textGray",
                    type === "status" && "text-sm"
                  )}
                >
                  @muhamed_z0
                </span>
                {type !== "status" && (
                  <span className="text-textGray">1 day ago</span>
                )}{" "}
              </div>
            </Link>
            <PostInfo />
          </div>
          {/* Text & Media */}
          <Link href={"/user/status/123"}>
            <p className={clsx(type === "status" && "text-lg")}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              corrupti blanditiis ducimus numquam velit praesentium eveniet
              debitis tempore ut magni veritatis id iure, placeat veniam officia
              voluptatum et iusto optio?
            </p>
          </Link>
          {fileDetails && fileDetails.fileType === "image" ? (
            <Image
              path={fileDetails.filePath}
              alt="Post Image"
              w={fileDetails.width}
              h={fileDetails.height}
              className={fileDetails.customMetaData?.sensetive ? "blur-lg" : ""}
            />
          ) : (
            <Video
              path={fileDetails.filePath}
              className={fileDetails.customMetaData?.sensetive ? "blur-lg" : ""}
            />
          )}
          {type === "status" && (
            <span className="text-textGray">8: 45 . Dec 5, 2025</span>
          )}
          <PostInteractions />
        </div>
      </div>
    </div>
  );
};

export default Post;

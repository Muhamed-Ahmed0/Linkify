"use client";
import React, { useState } from "react";
import Image from "./Image";
import NextImage from "next/image";
import { shareAction } from "@/actions";
import ImageEditor from "./ImageEditor";
import clsx from "clsx";

const Share = () => {
  const [media, setMedia] = useState<File | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState<boolean | null>(false);
  const [settings, setSettings] = useState<{
    type: "original" | "wide" | "square";
    sensitive: boolean;
  }>({
    type: "original",
    sensitive: false,
  });

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0]);
    }
  };

  const previewURL = media ? URL.createObjectURL(media) : null;

  return (
    <form
      className="p-4 flex gap-4"
      action={(formData) => {
        shareAction(formData, settings);
      }}
    >
      {/* Avatar */}
      <div className="relative w-10 h-10 rounded-full overflow-hidden">
        <Image
          path="public/general/me.png"
          alt="post"
          w={100}
          h={100}
          tr={true}
        />
      </div>
      {/* Others */}
      <div className="flex-1 flex flex-col gap-4">
        <input
          type="text"
          placeholder="What's Happening ?!"
          className="bg-transparent outline-none placeholder:text-textGray"
          name="desc"
        />
        {/* Preview Image */}
        {media?.type?.includes("image") && previewURL && (
          <div className="relative rounded-xl overflow-hidden ">
            <NextImage
              src={previewURL}
              alt="preview image"
              width={600}
              height={600}
              className={clsx(
                "w-[600px] mx-auto",
                settings.type === "original"
                  ? "h-full object-contain"
                  : settings.type === "square"
                  ? "aspect-square object-cover h-[430px] w-[520px] mx-auto"
                  : "aspect-video object-cover"
              )}
            />
            <div
              className="absolute top-2 left-2 bg-black bg-opacity-50 py-1 px-4 rounded-full font-bold text-sm cursor-pointer"
              onClick={() => {
                setIsEditorOpen(true);
              }}
            >
              Edit
            </div>
            <div
              onClick={() => setMedia(null)}
              className="absolute cursor-pointer font-bold text-sm top-2 right-2 bg-black bg-opacity-50 text-white h-8 w-8 flex items-center justify-center rounded-full"
            >
              X
            </div>
          </div>
        )}
        {media?.type?.includes("video") && previewURL && (
          <div className="relative">
            <video src={previewURL} width={600} height={600} controls />
            <div
              onClick={() => setMedia(null)}
              className="absolute cursor-pointer font-bold text-sm top-2 right-2 bg-black bg-opacity-50 text-white h-8 w-8 flex items-center justify-center rounded-full"
            >
              X
            </div>
          </div>
        )}
        {isEditorOpen && previewURL && (
          <ImageEditor
            onClose={() => setIsEditorOpen(false)}
            previewURL={previewURL}
            settings={settings}
            setSettings={setSettings}
          />
        )}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex gap-4 flex-wrap">
            <input
              type="file"
              onChange={handleMediaChange}
              className="hidden"
              id="file"
              name="file"
              accept="image/*,video/*"
            />
            <label htmlFor="file">
              <Image
                path="public/icons/image.svg"
                alt=""
                w={20}
                h={20}
                className="cursor-pointer"
              />
            </label>
            <Image
              path="public/icons/gif.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="public/icons/poll.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="public/icons/emoji.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="public/icons/schedule.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="public/icons/location.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
          </div>
          <button className="bg-white text-black font-bold rounded-full py-2 px-4">
            Post
          </button>
        </div>
      </div>
    </form>
  );
};

export default Share;

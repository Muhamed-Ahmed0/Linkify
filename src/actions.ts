/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
"use server";
import { imagekit } from "@/utils";

export const shareAction = async (
  formdata: FormData,
  settings: {
    type: "original" | "wide" | "square";
    sensitive: boolean;
  }
) => {
  const file = formdata.get("file") as File;

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const transformation = `w-600, ${
    settings.type === "square"
      ? "ar-1-1"
      : settings.type === "wide"
      ? "ar-16-9"
      : ""
  }`;

  imagekit.upload(
    {
      file: buffer,
      fileName: file.name,
      folder: "/posts",
      ...(file.type.includes("image") && {
        transformation: {
          pre: transformation,
        },
      }),
      customMetadata: {
        sensetive: settings.sensitive,
      },
    },

    function (error, success) {
      if (error) console.log(error);
      else console.log(success);
    }
  );
};

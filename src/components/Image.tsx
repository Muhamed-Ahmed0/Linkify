"use client";
import { IKImage } from "imagekitio-next";
import React from "react";

type ImageType = {
  path?: string;
  w?: number;
  h?: number;
  alt?: string;
  className?: string;
  tr?: boolean;
};

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const Image = ({ path, w, h, alt = "", className, tr }: ImageType) => {
  return (
    <IKImage
      urlEndpoint={urlEndpoint}
      path={path}
      width={w}
      height={h}
      lqip={{ active: true, quality: 20 }}
      className={className}
      alt={alt}
      {...(tr
        ? {
            transformation: [{ width: `${w}`, height: `${h}` }],
          }
        : { width: w, height: h })}
    />
  );
};

export default Image;

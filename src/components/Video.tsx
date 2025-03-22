"use client";
import React from "react";
import { IKVideo } from "imagekitio-next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

type VideoType = {
  path?: string;
  className?: string;
};

const Video = ({ path, className }: VideoType) => {
  return (
    <IKVideo
      urlEndpoint={urlEndpoint}
      src={path}
      controls
      className={className}
      transformation={[
        { width: "1920", height: "1080", q: "90" },
        { raw: "l-text,i-muhamed,fs-100,l-end,co-white" },
      ]}
    />
  );
};

export default Video;

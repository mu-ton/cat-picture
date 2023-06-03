"use client";

import { useEffect, useState } from "react";
import { NextPage } from "next";
import fetchImage from "./fetchImage";

export default function Home() {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);

  const handleClick = async () => {
    setLoading(true);
    const newImage = await fetchImage();
    setImageUrl(newImage.url);
    setLoading(false);
  };
  useEffect(() => {
    fetchImage().then((newImage) => {
      setImageUrl(newImage.url);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <button onClick={handleClick}>Click!</button>
      {!loading && <img src={imageUrl} />}
    </div>
  );
}

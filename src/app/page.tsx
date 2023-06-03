"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchImage = async (): Promise<Image> => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const images = await res.json();
    return images[0];
  };

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

  type Image = {
    url: string;
  };

  return (
    <div>
      <button onClick={handleClick}>Click!</button>
      {!loading && <img src={imageUrl} />}
    </div>
  );
}

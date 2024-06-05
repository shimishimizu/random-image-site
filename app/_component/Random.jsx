"use client";
import { useState } from "react";
import Image from "./Image";

export default function Button() {
  const [url, setUrl] = useState("");

  const clickHandler = () => {
    fetch("https://source.unsplash.com/random")
      .then((res) => setUrl(res.url))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <button onClick={clickHandler}>ランダム</button>
      <Image src={url} />
    </>
  );
}

import React from "react";
import Image from "next/image";
interface Props {
  imgSrc: string;
}

export default async function Recommendation({ imgSrc }: Props) {
  const random = Math.floor(Math.random() * 5 + 5) * 1000;
  await new Promise((resolve, reject) => {
    return setTimeout(resolve, random);
  });
  return (
    <div className="relative aspect-square w-[500px] h-[500px]">
      <Image src={imgSrc} fill alt="hello" className="object-cover rounded-md" />
    </div>
  );
}

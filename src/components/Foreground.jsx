// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      desc: "This is rdocs to perform all task and complete here.",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Downloaded.", tagColor: "green" },
    },
    {
      desc: "This is rdocs to perform all task and complete here.",
      fileSize: ".7mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now.", tagColor: "blue" },
    },
    {
      desc: "This is rdocs to perform all task and complete here.",
      fileSize: ".4mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Upload.", tagColor: "green" },
    },
    {
      desc: "This is rdocs to perform all task and complete here.",
      fileSize: ".6mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Upload.", tagColor: "green" },
    },
  ];
  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5"
    >
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;

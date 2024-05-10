import React, { useRef, useState } from "react";
import Card from "./Card"

function foreground() {

    const ref = useRef(null);

    const data = [
        {description: "This is background color",
            filesize: "0.9mb",
            close: true,
            tag: {isOpen: true, tagTitle: "Download", tagColor: "green"},
         },
         {description: "This is background color",
            filesize: "0.9mb",
            close: true,
            tag: {isOpen: true, tagTitle: "Upload", tagColor: "blue"},
         },
         {description: "This is background color",
            filesize: "0.9mb",
            close: true,
            tag: {isOpen: true, tagTitle: "Download", tagColor: "green"},
         },
         {description: "This is background color",
            filesize: "0.9mb",
            close: true,
            tag: {isOpen: false, tagTitle: "Download", tagColor: "green"},
         },
         {description: "This is background color",
            filesize: "0.9mb",
            close: true,
            tag: {isOpen: true, tagTitle: "Download", tagColor: "green"},
         },
         {description: "This is background color",
            filesize: "0.9mb",
            close: true,
            tag: {isOpen: true, tagTitle: "Download", tagColor: "green"},
         }
    ];
  return (
        <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-10">
            {data.map((item, index) => (
                <Card data={item} reference={ref} />
            ))}
      </div>
  )
}

export default foreground
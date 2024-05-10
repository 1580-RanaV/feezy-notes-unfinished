import React from "react";
import { FaRegFile } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoCloseCircle } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.25}} dragElastic={0.8} dragTransition={{ bounceStiffness: 150, bounceDamping: 10 }} className='relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
        <FaRegFile />
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.description}</p>
    <div className='footer absolute bottom-0 w-full left-0'>
        <div className='flex items-center justify-between px-8 py-3 mb-1'>
            <h5>{data.filesize}</h5>
            <span className='w-8 h-8 bg-zinc-600 rounded-full py-3 flex items-center justify-center'>
            {data.close ? <IoCloseCircle size="1.6em" /> : <LuDownload size="1.2em" color='#fff' /> }
            </span>
        </div>
            {data.tag.isOpen ? (
                <div className={`tag w-full h-10 py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                </div> 
             ) : null}
        </div>
    </motion.div>
  );
}

export default Card
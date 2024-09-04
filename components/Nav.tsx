import React from "react";
import { motion } from "framer-motion";
export default function Nav({
  openWin,
}: {
  openWin: (window: string) => void;
}) {
  return (
    <motion.div
      initial={{ y: 150 }}
      animate={{ y: 0 }}
      className="absolute z-50 bottom-16 bg-white/60 shadow-lg dark:bg-black flex flex-row py-3 px-16 rounded-full space-x-16 dark:text-gray-100 dark:hover:blue-500 backdrop-blur-lg "
    >
      <a
        onClick={() => openWin("about")}
        className="font-semibold cursor-pointer text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:blue-500 transition ease-in-out"
      >
        About
      </a>
      <a
        onClick={() => openWin("portfolio")}
        className="font-semibold cursor-pointer text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:blue-500 transition ease-in-out"
      >
        Portfolio
      </a>
      <a
        onClick={() => openWin("contact")}
        className="font-semibold cursor-pointer text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:blue-500 transition ease-in-out"
      >
        Contact
      </a>
    </motion.div>
  );
}

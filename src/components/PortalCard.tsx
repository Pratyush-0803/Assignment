"use client";

import { motion } from "framer-motion";

export default function PortalCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      whileHover={{ scale: 1.05 }}
      style={{ rotate: 5 }}
      className="
        bg-[#DDD9F5]
        dark:bg-[#3D3B65]
        rounded-full
        shadow-xl
        cursor-pointer
        select-none
        w-[320px]
        px-6
        py-2.5
        flex items-center gap-4
      "
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex items-center gap-4 w-full"
      >
        {/* Avatar */}
        <div
          className="
            w-11 h-11 rounded-full overflow-hidden
            flex-shrink-0
            bg-gradient-to-br from-amber-400 to-orange-500
            flex items-center justify-center text-xl
          "
        >
          👨🏾
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center leading-tight">
          <p className="text-[#2D2B45] dark:text-white font-bold text-sm">
            John Doe – Portal
          </p>

          <p className="text-[#5B5880] dark:text-[#9B99B5] text-[11px]">
            Hey! Could you please review a document for me?
          </p>

          <p className="text-[#9B99B5] text-[9px] mt-[1px]">
            MAT-2233 · 2 h ago
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
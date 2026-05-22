"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type FloatingCardProps = {
  color: "blue" | "orange" | "dark" | "light";
  rotation: number;
  icon: LucideIcon;
  label: string;
  animationDelay?: number;
};

const colorMap = {
  blue: "bg-[#4F46E5] text-white",
  orange: "bg-[#F97316] text-white",
  dark: "bg-[#2D2B45] text-white",
  light: "bg-[#E8E7F5] text-[#2D2B45]",
};

export default function FloatingCard({
  color,
  rotation,
  icon: Icon,
  label,
  animationDelay = 0,
}: FloatingCardProps) {
  const iconColor = color === "dark" ? "text-[#F97316]" : "text-white";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: animationDelay }}
      whileHover={{ scale: 1.05 }}
      style={{ rotate: rotation }}
      className={`
        flex items-center gap-5 px-10 py-5 rounded-full
        shadow-xl cursor-pointer select-none w-[320px]
        ${colorMap[color]}
      `}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 3 + animationDelay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex items-center gap-5"
      >
        <Icon size={30} strokeWidth={2} className={iconColor} />

        <span className="text-2xl font-semibold whitespace-nowrap">
          {label}
        </span>
      </motion.div>
    </motion.div>
  );
}
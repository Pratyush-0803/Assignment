"use client";

import { motion } from "framer-motion";
import { Receipt, Home, CheckSquare, FileText } from "lucide-react";

import FloatingCard from "@/components/FloatingCard";
import PortalCard from "@/components/PortalCard";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import ThemeToggle from "@/components/ThemeToggle";

export default function HeroSection() {
  return (
    <main className="min-h-screen bg-[#EEEDF5] dark:bg-[#1A1830] transition-colors duration-300 relative overflow-hidden">
      <BackgroundBlobs />
      <ThemeToggle />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-24 lg:px-40 py-12 min-h-screen">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-[760px]"
        >
          <h1 className="text-5xl md:text-6xl font-medium leading-tight text-[#5B5880] dark:text-[#A09DC5] text-left">
            A single platform to{" "}
            <span className="font-extrabold text-[#2D2B45] dark:text-white">
              manage
            </span>{" "}
            every part of your{" "}
            <span className="font-extrabold text-[#2D2B45] dark:text-white">
              legal work
            </span>
          </h1>
        </motion.div>

        <div className="mt-4 flex justify-between gap-8">

          <div className="flex-[0.9] flex flex-col justify-between min-h-[280px]">

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[#7B79A0] dark:text-[#9B99B5] text-lg leading-relaxed max-w-md"
            >
              Track matters, coordinate schedules, manage clients,
              centralize documents, and handle communication – all in one
              system.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="self-end mr-8"
            >
              <FloatingCard
                color="orange"
                rotation={-12}
                icon={Home}
                label="Matters"
                animationDelay={0.3}
              />
            </motion.div>
          </div>

          <div className="flex-[1.3] flex flex-col justify-center gap-16 pt-8">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="ml-0"
            >
              <FloatingCard
                color="blue"
                rotation={12}
                icon={Receipt}
                label="Billing"
                animationDelay={0.1}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="ml-12"
            >
              <PortalCard />
            </motion.div>
          </div>
        </div>

        <div className="mt-8 flex justify-end">

          <div className="flex items-center gap-20">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <FloatingCard
                color="dark"
                rotation={0}
                icon={CheckSquare}
                label="Tasks"
                animationDelay={0.5}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <FloatingCard
                color="dark"
                rotation={-8}
                icon={FileText}
                label="Documents"
                animationDelay={0.7}
              />
            </motion.div>

          </div>
        </div>

        <div className="md:hidden flex flex-wrap gap-4 justify-center mt-12">
          {[
            { color: "blue" as const, icon: Receipt, label: "Billing" },
            { color: "orange" as const, icon: Home, label: "Matters" },
            { color: "dark" as const, icon: CheckSquare, label: "Tasks" },
            { color: "dark" as const, icon: FileText, label: "Documents" },
          ].map((pill) => (
            <FloatingCard
              key={pill.label}
              color={pill.color}
              rotation={0}
              icon={pill.icon}
              label={pill.label}
            />
          ))}
        </div>

      </div>
    </main>
  );
}
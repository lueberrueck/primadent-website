import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "../../lib/utils";

interface CardProps extends HTMLMotionProps<"div"> {
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  className,
  children,
  hoverEffect = true,
  ...props
}) => {
  return (
    <motion.div
      initial={hoverEffect ? { y: 0 } : undefined}
      whileHover={hoverEffect ? { y: -5, transition: { duration: 0.2 } } : undefined}
      className={cn(
        "bg-white rounded-2xl border border-lavender-light/50 p-6 shadow-sm",
        hoverEffect && "hover:shadow-xl hover:shadow-lavender/10 hover:border-lavender/50 transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
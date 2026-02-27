"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface SectionRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "left" | "right";
}

export default function SectionReveal({
    children,
    className = "",
    delay = 0,
    direction = "up",
}: SectionRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    const directionOffset = {
        up: { x: 0, y: 40 },
        left: { x: -40, y: 0 },
        right: { x: 40, y: 0 },
    };

    return (
        <motion.div
            ref={ref}
            initial={{
                opacity: 0,
                x: directionOffset[direction].x,
                y: directionOffset[direction].y,
            }}
            animate={
                isInView
                    ? { opacity: 1, x: 0, y: 0 }
                    : {
                        opacity: 0,
                        x: directionOffset[direction].x,
                        y: directionOffset[direction].y,
                    }
            }
            transition={{
                duration: 0.7,
                delay,
                ease: [0.25, 0.4, 0.25, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

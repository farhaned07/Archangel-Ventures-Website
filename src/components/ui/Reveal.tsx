"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, Variant } from "framer-motion";

interface RevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    className?: string;
    variant?: "fade" | "slide";
}

export const Reveal = ({
    children,
    width = "100%",
    delay = 0,
    className = "",
    variant = "slide"
}: RevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.15 }); // Trigger when 15% visible
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    // The "Heavy" Ease: [0.25, 0.25, 0, 1]
    const transition = { duration: 0.8, ease: [0.25, 0.25, 0, 1] as any, delay: delay };

    const variants = {
        hidden: { opacity: 0, y: variant === "slide" ? 40 : 0 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div ref={ref} style={{ position: "relative", width }} className={className}>
            <motion.div
                variants={variants}
                initial="hidden"
                animate={mainControls}
                transition={transition}
            >
                {children}
            </motion.div>
        </div>
    );
};

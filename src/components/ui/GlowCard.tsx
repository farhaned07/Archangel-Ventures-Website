"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface GlowCardProps {
    children: React.ReactNode;
    className?: string;
    image?: string;
}

export function GlowCard({ children, className, image }: GlowCardProps) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const xPct = (clientX - left) / width - 0.5;
        const yPct = (clientY - top) / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    }

    function onMouseLeave() {
        x.set(0);
        y.set(0);
    }

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

    return (
        <motion.div
            className={cn("relative group rounded-xl p-[1px]", className)}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
        >
            {/* Background Glow Layer */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-md" />

            {/* Border Layer */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-xl group-hover:from-accent/50 transition-colors duration-500" />

            {/* Content Layer */}
            <div className="relative h-full bg-black/90 backdrop-blur-sm rounded-xl border border-white/5 overflow-hidden">
                {/* Optional Background Image */}
                {image && (
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
                        <Image
                            src={image}
                            alt=""
                            fill
                            className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700"
                        />
                    </div>
                )}

                {/* Inner Subtle Glow */}
                <div className="absolute -top-[100px] -right-[100px] w-[200px] h-[200px] bg-accent/20 blur-[80px] rounded-full group-hover:bg-accent/40 transition-colors duration-500 z-10" />

                <div className="relative z-20 p-6 h-full" style={{ transform: "translateZ(50px)" }}>
                    {children}
                </div>
            </div>
        </motion.div>
    );
}

import React from "react";

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
    return (
        <div style={{ position: "relative", width }} className={className}>
            <div
                className={variant === "fade" ? "reveal-safe reveal-fade" : "reveal-safe"}
                style={{ animationDelay: `${delay}s` }}
            >
                {children}
            </div>
        </div>
    );
};

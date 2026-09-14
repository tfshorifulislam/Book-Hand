"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            autoRaf: true,

            smoothWheel: true,
            wheelMultiplier: 1,

            duration: 0.8,

            syncTouch: false,
            touchMultiplier: 1,
        });

        return () => {
            lenis.destroy();
        };
    }, []);

    return null;
}
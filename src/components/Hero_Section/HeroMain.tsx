import React from "react";
import HeroSectionText from "./HeroText";

const HeroMain = () => {
  return (
    <section
      className="
        relative mx-auto flex min-h-[70vh] 
        items-center justify-center overflow-hidden px-6
        bg-emerald-50
        dark:bg-zinc-950
      "
    >
      {/* Subtle Emerald Glow */}
      <div
        className="
          absolute -right-32 -top-32
          h-96 w-96 rounded-full
          bg-emerald-200/40 blur-3xl
          dark:bg-emerald-900/20
        "
      />

      <div
        className="
          absolute -bottom-40 -left-32
          h-96 w-96 rounded-full
          bg-emerald-100/50 blur-3xl
          dark:bg-emerald-950/30
        "
      />

      <div className="relative z-10">
        <HeroSectionText />
      </div>
    </section>
  );
};

export default HeroMain;
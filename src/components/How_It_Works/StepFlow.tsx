"use client";

import { type LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

type Step = {
    number: string;
    icon: LucideIcon;
    title: string;
    description: string;
};

type StepFlowProps = {
    label: string;
    steps: Step[];
};

const colors = [
    {
        box: "border-[#FF9100]/20 bg-[#FF9100]/5",
        icon: "border-[#FF9100]/20 bg-[#FF9100]/10 text-[#EB7D00]",
    },
    {
        box: "border-[#FF9100]/15 bg-[#FF9100]/3",
        icon: "border-[#FF9100]/15 bg-[#FF9100]/8 text-[#EB7D00]",
    },
    {
        box: "border-[#FF9100]/20 bg-[#FF9100]/5",
        icon: "border-[#FF9100]/20 bg-[#FF9100]/10 text-[#EB7D00]",
    },
];

const StepFlow = ({ label, steps }: StepFlowProps) => {
    const reducedMotion = useReducedMotion();

    return (
        <div>
            <motion.div
                initial={reducedMotion ? false : { opacity: 0, y: 15 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-8 flex items-center justify-center gap-3"
            >
                <span className="h-px w-8 bg-border" />

                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#EB7D00]">
                    {label}
                </span>

                <span className="h-px w-8 bg-border" />
            </motion.div>

            <ol className="grid gap-4 lg:grid-cols-3">
                {steps.map((step, index) => {
                    const Icon = step.icon;
                    const color = colors[index] ?? colors[0];

                    return (
                        <motion.li
                            key={step.number}
                            initial={reducedMotion ? false : { opacity: 0, y: 25 }}
                            whileInView={
                                reducedMotion ? undefined : { opacity: 1, y: 0 }
                            }
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: reducedMotion ? 0 : index * 0.1,
                            }}
                            className={`
                group rounded-2xl border p-6
                transition-colors duration-300
                hover:border-[#FF9100]/40
                ${color.box}
              `}
                        >
                            <motion.div
                                whileHover={
                                    reducedMotion
                                        ? undefined
                                        : { scale: 1.05, rotate: 2 }
                                }
                                transition={{ duration: 0.2 }}
                                className={`
                  flex size-12 items-center justify-center
                  rounded-xl border
                  transition-colors duration-300
                  ${color.icon}
                `}
                            >
                                <Icon className="size-5" />
                            </motion.div>

                            <span className="mt-6 block font-mono text-[11px] font-medium text-muted-foreground/60">
                                {step.number}
                            </span>

                            <h3 className="mt-1 text-lg font-semibold tracking-tight">
                                {step.title}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                {step.description}
                            </p>

                            <div className="mt-6 h-0.5 w-0 bg-[#FF9100] transition-all duration-300 group-hover:w-8" />
                        </motion.li>
                    );
                })}
            </ol>
        </div>
    );
};

export default StepFlow;
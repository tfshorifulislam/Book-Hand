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

const StepFlow = ({ label, steps }: StepFlowProps) => {
  const reducedMotion = useReducedMotion();

  return (
    <div>
      {/* Flow Header */}
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 12 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mb-8 flex items-center gap-4"
      >
        <span className="text-sm font-semibold tracking-tight">{label}</span>

        <span className="h-px flex-1 bg-border" />

        <span className="text-xs text-muted-foreground">
          {steps.length} steps
        </span>
      </motion.div>

      {/* Steps */}
      <ol className="grid gap-4 lg:grid-cols-3">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.li
              key={step.number}
              initial={
                reducedMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 20,
                    }
              }
              whileInView={
                reducedMotion
                  ? undefined
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: reducedMotion ? 0 : index * 0.08,
              }}
              className="group relative rounded-2xl border border-border bg-background p-6 transition-colors duration-300 hover:border-[#FF9100]/40"
            >
              {/* Top */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] font-medium tracking-wider text-muted-foreground/50">
                  {step.number}
                </span>

                <div className="flex size-10 items-center justify-center rounded-lg border border-[#FF9100]/20 bg-[#FF9100]/5 text-[#EB7D00] transition-colors duration-300 group-hover:border-[#FF9100]/40 group-hover:bg-[#FF9100]/10">
                  <Icon className="size-4" strokeWidth={1.8} />
                </div>
              </div>

              {/* Content */}
              <h3 className="mt-8 text-xl font-semibold tracking-tight">
                {step.title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                {step.description}
              </p>

              {/* Bottom Accent */}
              <div className="mt-7 flex items-center gap-2">
                <span className="h-0.5 w-5 bg-[#FF9100] transition-all duration-300 group-hover:w-10" />

                <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground/50">
                  Step {step.number}
                </span>
              </div>

              {/* Connector */}
              {index < steps.length - 1 && (
                <span className="absolute -right-4 top-1/2 hidden h-px w-4 bg-border lg:block" />
              )}
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
};

export default StepFlow;
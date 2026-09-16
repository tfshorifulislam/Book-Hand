'use client';
import HeroLeft from "./Hero_Left";
import HeroRight from "./Hero_Right";
import { motion } from "motion/react";

const HeroMain = () => {
    return (
        <section className="overflow-hidden py-12 sm:py-16 lg:py-24">
            <div
                className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8" >

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="order-1">
                    <HeroLeft />
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="order-2 w-full">

                    <HeroRight />
                </motion.div>

            </div>
        </section>
    );
};

export default HeroMain;


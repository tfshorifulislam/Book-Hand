'use client';
import HeroLeft from "./Hero_Left";
import HeroRight from "./Hero_Right";
import { motion } from "motion/react";

const HeroMain = () => {
    return (
        <section className="w-full">
            <div
                className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 py-10 sm:px-6 md:gap-12 md:py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20 " >

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


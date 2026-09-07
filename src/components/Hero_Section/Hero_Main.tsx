'use client';
import HeroLeft from "./Hero_Left";
import HeroRight from "./Hero_Right";
import { motion } from "motion/react";

const HeroMain = () => {
    return (
        <section className="w-full">
            <div
                className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 py-10 md:py-16 lg:py-20 px-4 md:px-6" >

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


import { HERO_CONTENT} from "../constants";
import profilePic from "../assets/kevinRushProfile.png";
import { motion } from "framer-motion";
import majedphoto2 from "../assets/MajedPhoto2.jpg";
import majedphoto1 from "../assets/majedPhoto1.jpg";


const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0, 
        opacity: 1,
    transition: { duration: 0.5, delay: delay},
    },
});


const Hero = () => {
  return (
    <div className="borer-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                        Majed Ahmad
                    </motion.h1>
                    <motion.span
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3qxl tracking-tight text-transparent">
                        Computer Science Engineering Student 
                    </motion.span>
                    <motion.p
                    variants={container(1)}
                    initial="hidden"
                    animate="visible" 
                    className="my-2 max-w-xl py-6 font-light tracking-tighter">
                        {HERO_CONTENT}
                    </motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img 
                    initial={{opacity: 0}} 
                    animate={{opacity: 1}}
                    transition={{duration: 1, delay: 1.2}}
                    src={majedphoto1}
                    alt="Majed Ahmad"
                    className="w-full max-w-xs rounded-lg shadow-lg lg:max-w-md" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Hero;

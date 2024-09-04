import aboutImg from "../assets/about.jpg";
import {ABOUT_TEXT} from "../constants";
import { motion } from "framer-motion";
import majedphoto2 from "../assets/MajedPhoto2.jpg";
import majedphoto1 from "../assets/majedPhoto1.jpg";



const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">
            About
            <span className="text-neutral-500">Me</span>
        </h1> 
        <div className="flex flex-wrap">
            <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{ opacity: 0, x: -100}}
            transition={{duration: 0.5}}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-6 lg:mb-0 lg:pr-12">
                <div className="flex items-center justify-center">
                    <img className="rounded-2xl max-w-md" src={majedphoto2} alt= "about" />
                </div>
            </motion.div>
            <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: 100}}
            tarnsition={{duration: 0.5}}
            className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className="my-2 max-w-xl py-6 px-4 lg:px-0 lg:ml-4 text-center lg:text-left">{ABOUT_TEXT}</p>
                </div>
            </motion.div>
        </div>
    </div>
  );
};

export default About;

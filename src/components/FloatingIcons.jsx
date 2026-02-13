import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import {
    SiJavascript, SiTypescript, SiHtml5, SiCss3, SiReact, SiRedux,
    SiTailwindcss, SiBootstrap, SiMui, SiVite, SiNodedotjs, SiExpress,
    SiPostman, SiJsonwebtokens, SiMongodb, SiMysql, SiPostgresql,
    SiGit, SiGithub, SiVercel, SiLinux
} from 'react-icons/si';
import { FaJava, FaCode } from 'react-icons/fa';

const iconMap = {
    SiJavascript, SiTypescript, SiHtml5, SiCss3, SiReact, SiRedux,
    SiTailwindcss, SiBootstrap, SiMui, SiVite, SiNodedotjs, SiExpress,
    SiPostman, SiJsonwebtokens, SiMongodb, SiMysql, SiPostgresql,
    SiGit, SiGithub, SiVercel, SiLinux, FaJava, FaCode
};

const FloatingIcons = () => {
    const allSkills = [
        ...skills.languages,
        ...skills.frontend,
        ...skills.backend,
        ...skills.databases,
        ...skills.tools
    ];

    return (
        <div className="py-10">
            <h3 className="text-xl text-center text-slate-400 mb-8">Option 1: Floating Icon Grid</h3>
            <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
                {allSkills.map((skill, index) => {
                    const IconComponent = iconMap[skill.icon] || FaCode;
                    return (
                        <motion.div
                            key={index}
                            animate={{
                                y: [0, -15, 0],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: Math.random() * 2,
                            }}
                            className="flex flex-col items-center justify-center gap-2 group cursor-pointer"
                        >
                            <div className="p-4 glass-effect rounded-full group-hover:bg-cyan-500/10 transition-colors duration-300">
                                <IconComponent className="w-8 h-8 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />
                            </div>
                            <span className="text-xs text-slate-500 group-hover:text-cyan-400 transition-colors duration-300 opacity-0 group-hover:opacity-100 absolute -bottom-6">
                                {skill.name}
                            </span>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default FloatingIcons;

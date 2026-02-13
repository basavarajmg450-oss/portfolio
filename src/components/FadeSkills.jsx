import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../data/portfolio';

const FadeSkills = () => {
    const [activeSkills, setActiveSkills] = useState([]);

    const allSkills = [
        ...skills.languages,
        ...skills.frontend,
        ...skills.backend,
        ...skills.databases,
        ...skills.tools
    ].map(s => s.name);

    useEffect(() => {
        // Initial random set
        const getRandomSkill = () => allSkills[Math.floor(Math.random() * allSkills.length)];

        // Interval to cycle skills
        const interval = setInterval(() => {
            setActiveSkills(prev => {
                // Keep active skills list small
                const next = [...prev];
                if (next.length > 15) next.shift(); // Increased count for background
                const angle = Math.random() * Math.PI * 2;
                const radius = Math.random() * 40; // 0% to 40% radius (relative to center)
                const center = 50;

                next.push({
                    id: Date.now(),
                    text: getRandomSkill(),
                    x: center + radius * Math.cos(angle),
                    y: center + radius * Math.sin(angle),
                    scale: Math.random() * 0.5 + 0.5,
                });
                return next;
            });
        }, 800); // Faster generation

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
            <AnimatePresence>
                {activeSkills.map((skill) => (
                    <motion.div
                        key={skill.id}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 0.2, scale: skill.scale }} // Low opacity for background
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 4 }}
                        className="absolute text-cyan-400 font-bold whitespace-nowrap"
                        style={{
                            left: `${skill.x}%`,
                            top: `${skill.y}%`,
                            fontSize: `${Math.max(12, 24 * skill.scale)}px`,
                        }}
                    >
                        {skill.text}
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default FadeSkills;

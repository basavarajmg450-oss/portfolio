import { useEffect, useRef, useState } from 'react';
import { skills } from '../data/portfolio';

const SkillOrb = () => {
    const containerRef = useRef(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    const allSkills = [
        ...skills.languages,
        ...skills.frontend,
        ...skills.backend,
        ...skills.databases,
        ...skills.tools
    ].map(s => s.name);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let requestId;
        let angleX = 0;
        let angleY = 0;
        const radius = 150;

        const animate = () => {
            angleX += 0.001;
            angleY += 0.002;
            setRotation({ x: angleX, y: angleY });
            requestId = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(requestId);
    }, []);

    // Helper to calculate position on sphere
    const getPosition = (index, total, radius, rotX, rotY) => {
        const phi = Math.acos(-1 + (2 * index) / total);
        const theta = Math.sqrt(total * Math.PI) * phi;

        let x = radius * Math.cos(theta) * Math.sin(phi);
        let y = radius * Math.sin(theta) * Math.sin(phi);
        let z = radius * Math.cos(phi);

        // Rotate around Y
        const cosY = Math.cos(rotY);
        const sinY = Math.sin(rotY);
        const x1 = x * cosY - z * sinY;
        const z1 = z * cosY + x * sinY;

        // Rotate around X
        const cosX = Math.cos(rotX);
        const sinX = Math.sin(rotX);
        const y2 = y * cosX - z1 * sinX;
        const z2 = z1 * cosX + y * sinX;

        return { x: x1, y: y2, z: z2, scale: (z2 + radius * 2) / (radius * 3) };
    };

    return (
        <div className="py-10 flex flex-col items-center justify-center overflow-hidden">
            <h3 className="text-xl text-center text-slate-400 mb-8">Option 2: 3D Skill Orb</h3>
            <div
                ref={containerRef}
                className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]"
            >
                {allSkills.map((skill, index) => {
                    const pos = getPosition(index, allSkills.length, 140, rotation.x * 20, rotation.y * 20);
                    const opacity = Math.max(0.1, pos.scale);

                    return (
                        <div
                            key={index}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-cyan-400 font-bold transition-all duration-75 pointer-events-none"
                            style={{
                                transform: `translate3d(${pos.x}px, ${pos.y}px, ${pos.z}px) scale(${pos.scale})`,
                                opacity: opacity,
                                zIndex: Math.round(pos.z),
                                fontSize: `${Math.max(10, 16 * pos.scale)}px`,
                                textShadow: `0 0 ${10 * pos.scale}px rgba(34, 211, 238, ${opacity})`
                            }}
                        >
                            {skill}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SkillOrb;

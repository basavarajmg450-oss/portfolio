import { motion } from 'framer-motion';
import {
  SiJavascript, SiTypescript, SiPython, SiCplusplus, SiHtml5, SiCss3,
  SiReact, SiRedux, SiTailwindcss, SiBootstrap, SiMui, SiVite,
  SiNodedotjs, SiExpress, SiPostman, SiJsonwebtokens,
  SiMongodb, SiMysql, SiPostgresql,
  SiGit, SiGithub, SiNpm, SiVercel, SiLinux
} from 'react-icons/si';
import { FaJava, FaCode } from 'react-icons/fa';
import { skills } from '../data/portfolio';
import { fadeIn, staggerContainer, staggerItem } from '../utils/animations';

const iconMap = {
  SiJavascript, SiTypescript, SiPython, SiCplusplus, FaJava, SiHtml5, SiCss3,
  SiReact, SiRedux, SiTailwindcss, SiBootstrap, SiMui, SiVite,
  SiNodedotjs, SiExpress, SiPostman, SiJsonwebtokens,
  SiMongodb, SiMysql, SiPostgresql,
  SiGit, SiGithub, FaCode, SiNpm, SiVercel, SiLinux
};

const Skills = () => {
  const skillCategories = [
    { title: 'Languages', data: skills.languages, gradient: 'from-cyan-500 to-blue-600' },
    { title: 'Frontend', data: skills.frontend, gradient: 'from-blue-500 to-purple-600' },
    { title: 'Backend', data: skills.backend, gradient: 'from-purple-500 to-pink-600' },
    { title: 'Databases', data: skills.databases, gradient: 'from-pink-500 to-rose-600' },
    { title: 'Tools & Others', data: skills.tools, gradient: 'from-rose-500 to-orange-600' }
  ];

  return (
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden bg-slate-900/50">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mb-6"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with to build modern web applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              {/* Category Title */}
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-2xl font-bold text-slate-200">{category.title}</h3>
                <div className={`flex-1 h-1 bg-gradient-to-r ${category.gradient} rounded-full`}></div>
              </div>

              {/* Skills Grid */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
              >
                {category.data.map((skill, index) => {
                  const Icon = iconMap[skill.icon];
                  return (
                    <motion.div
                      key={index}
                      variants={staggerItem}
                      whileHover={{ y: -8, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="glass-effect rounded-xl p-6 flex flex-col items-center justify-center gap-3 group hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer"
                    >
                      {Icon && (
                        <Icon className="w-10 h-10 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                      )}
                      <span className="text-slate-300 text-sm text-center font-medium group-hover:text-slate-100 transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect rounded-xl p-8 max-w-3xl mx-auto">
            <h4 className="text-xl font-semibold text-slate-200 mb-4">
              Continuously Learning & Growing
            </h4>
            <p className="text-slate-400">
              I'm always exploring new technologies and staying up-to-date with the latest trends in web development. 
              Currently focusing on mastering advanced React patterns, microservices architecture, and cloud technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';
import { personalInfo } from '../data/portfolio';
import { fadeIn, slideUp } from '../utils/animations';
import FadeSkills from './FadeSkills';

const About = () => {


  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-30"></div>
        <FadeSkills />
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
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto"></div>
        </motion.div>



        {/* Tech Marquee */}


        {/* Bio and Education */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-slate-200 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                👨‍💻
              </span>
              My Journey
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              {personalInfo.bio}
            </p>
            <div className="flex items-start gap-3 text-slate-400 mb-4">
              <FaMapMarkerAlt className="w-5 h-5 mt-1 text-cyan-400 flex-shrink-0" />
              <span>{personalInfo.location}</span>
            </div>
          </motion.div>

          {/* Education & Experience */}
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            {/* Education */}
            <div className="glass-effect rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaGraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-slate-200 mb-1">
                    {personalInfo.education.degree}
                  </h4>
                  <p className="text-cyan-400 mb-2">{personalInfo.education.institution}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                    <span>{personalInfo.education.year}</span>

                  </div>
                </div>
              </div>
            </div>

            {/* Internships */}
            {personalInfo.internships.map((internship, index) => (
              <div
                key={index}
                className="glass-effect rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaBriefcase className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-200 mb-1">
                      {internship.role}
                    </h4>
                    <p className="text-cyan-400 mb-2">{internship.company}</p>
                    <p className="text-sm text-slate-400 mb-2">{internship.period}</p>
                    <p className="text-sm text-slate-400">{internship.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

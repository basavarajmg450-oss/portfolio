import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';
import { personalInfo, socialLinks } from '../data/portfolio';
import { fadeIn, slideUp, staggerContainer, staggerItem } from '../utils/animations';

const Contact = () => {
  const contactMethods = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: '@basavarajmg450-oss',
      href: personalInfo.github,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: personalInfo.linkedin,
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden bg-slate-900/50">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
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
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mb-6"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              target={method.label !== 'Email' ? '_blank' : undefined}
              rel={method.label !== 'Email' ? 'noopener noreferrer' : undefined}
              variants={staggerItem}
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glass-effect rounded-xl p-8 text-center group hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer"
            >
              <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${method.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <method.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-200 mb-2">{method.label}</h3>
              <p className="text-slate-400 group-hover:text-cyan-400 transition-colors break-all">
                {method.value}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="glass-effect rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-slate-200 mb-4">
            Have a project in mind?
          </h3>
          <p className="text-slate-400 mb-8 text-lg">
            Let's collaborate and bring your ideas to life. I'm available for freelance projects and full-time opportunities.
          </p>
          <motion.a
            href={`mailto:${personalInfo.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
          >
            <FaEnvelope className="w-5 h-5" />
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.footer
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-20 pt-8 border-t border-slate-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-slate-400 text-center md:text-left">
              <p className="flex items-center justify-center md:justify-start gap-2">
                © {new Date().getFullYear()} {personalInfo.name}. Built with{' '}
                <FaHeart className="text-red-500 animate-pulse" /> using React & Tailwind CSS
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target={link.name !== 'Email' ? '_blank' : undefined}
                  rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 glass-effect rounded-full flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors"
                  aria-label={link.name}
                >
                  {link.icon === 'FaGithub' && <FaGithub className="w-5 h-5" />}
                  {link.icon === 'FaLinkedin' && <FaLinkedin className="w-5 h-5" />}
                  {link.icon === 'FaEnvelope' && <FaEnvelope className="w-5 h-5" />}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="mt-6 text-center text-slate-500 text-sm flex items-center justify-center gap-2">
            <FaMapMarkerAlt className="w-4 h-4" />
            {personalInfo.location}
          </div>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;

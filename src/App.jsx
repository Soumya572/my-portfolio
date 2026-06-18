import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, ChevronDown, Moon, Sun, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import ContactForm from './components/ContactForm';

const Portfolio = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const projects = [
        {
            id: 1,
            title: 'React Weather Dashboard',
            description: 'An intuitive, location-aware weather application that provides real-time atmospheric data.',
            challenge: 'Managed asynchronous API chaining to convert raw geographic data. Implemented a reverse geocoding workflow translating latitude/longitude into localized city names while handling loading states and edge cases.',
            tags: ['React', 'OpenWeatherMap API', 'Geolocation'],
            link: 'https://github.com/Soumya572/waether-app/tree/main'
        },
        {
            id: 2,
            title: 'Real-Time Media Chat',
            description: 'A responsive, real-time communication platform capable of handling text and rich media messaging.',
            challenge: 'Architected efficient database handling for rapid messaging utilizing MongoDB for document storage, while integrating the Cloudinary API to optimize and serve user-generated images and videos without server bottlenecking.',
            tags: ['MongoDB', 'Cloudinary', 'Real-Time Sync'],
            link: 'https://chat-app-nine-nu-66.vercel.app'
        }
    ];

    const navItems = [
        { label: 'Projects', href: '#projects' },
        { label: 'About', href: '#about' },
        { label: 'Contact', href: '#contact' }
    ];

    const handleNavClick = (href) => {
        setIsMenuOpen(false);
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToSection = (sectionId) => {
        const element = document.querySelector(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-gradient-to-br from-gray-50 via-purple-50 to-gray-100 text-gray-900'}`}>

            {/* Background with blur effect */}
            <div className={`fixed inset-0 -z-10 ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 via-purple-50 to-gray-100'}`}>
                <div className={`absolute inset-0 opacity-30 ${isDarkMode ? 'bg-purple-900/20' : 'bg-purple-400/10'}`}
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}>
                </div>
            </div>

            {/* Navigation */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                className={`fixed w-full top-0 z-50 p-6 transition-all duration-300 backdrop-blur-md ${scrolled
                    ? isDarkMode
                        ? 'bg-gray-800/80 shadow-xl'
                        : 'bg-white/80 shadow-lg'
                    : isDarkMode
                        ? 'bg-gray-900/50'
                        : 'bg-transparent'
                    }`}
            >
                <div className="flex justify-between items-center max-w-5xl mx-auto">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="font-bold text-xl tracking-tighter cursor-pointer bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent"
                    >
                        Soumya Maurya
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-6 items-center">
                        {navItems.map((item) => (
                            <motion.a
                                key={item.label}
                                whileHover={{ color: '#a855f7', y: -2 }}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(item.href);
                                }}
                                className={`transition-colors cursor-pointer ${isDarkMode ? 'hover:text-purple-400' : 'hover:text-purple-600'}`}
                            >
                                {item.label}
                            </motion.a>
                        ))}

                        {/* Dark Mode Toggle */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'bg-purple-900/30 text-yellow-400' : 'bg-purple-100 text-purple-600'}`}
                        >
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </motion.button>
                    </div>

                    {/* Mobile Menu & Dark Mode Button */}
                    <div className="md:hidden flex items-center gap-3">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'bg-purple-900/30 text-yellow-400' : 'bg-purple-100 text-purple-600'}`}
                        >
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={isDarkMode ? 'text-white' : 'text-gray-900'}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={`md:hidden mt-4 space-y-2 ${isDarkMode ? 'bg-gray-800/50' : 'bg-white/30'} backdrop-blur-sm rounded-lg p-4`}
                    >
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(item.href);
                                }}
                                className={`block px-4 py-3 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-purple-900/30' : 'hover:bg-purple-100'}`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </motion.div>
                )}
            </motion.nav>

            {/* Hero Section */}
            <motion.header
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="max-w-5xl mx-auto px-6 py-20 md:py-40 pt-28 md:pt-32"
            >
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
                    >
                        Building fast, scalable, <br />
                        <motion.span
                            className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent inline-block"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            and interactive web apps.
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className={`text-xl max-w-2xl mb-10 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
                    >
                        Hi, I'm a Web & Mobile Developer primarily using C++ and specializing in full-stack environments, asynchronous APIs, and real-time data management.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(168, 85, 247, 0.3)' }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollToSection('#projects')}
                            className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-purple-500 text-white px-8 py-3 md:py-4 rounded-lg font-medium hover:from-purple-700 hover:to-purple-600 transition-all cursor-pointer text-center"
                        >
                            View My Work
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollToSection('#contact')}
                            className={`w-full sm:w-auto px-8 py-3 md:py-4 rounded-lg font-medium transition-colors cursor-pointer text-center ${isDarkMode ? 'bg-gray-700/50 border border-purple-500 text-purple-300 hover:bg-gray-700' : 'bg-white border border-purple-300 text-purple-600 hover:bg-purple-50'}`}
                        >
                            Get In Touch
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="mt-16 flex justify-center"
                >
                    <ChevronDown className={isDarkMode ? 'text-gray-500' : 'text-gray-400'} size={32} />
                </motion.div>
            </motion.header>

            {/* Projects Section */}
            <section id="projects" className={`py-16 md:py-24 ${isDarkMode ? 'bg-gray-800/50 backdrop-blur-sm' : 'bg-white/40 backdrop-blur-sm'}`}>
                <div className="max-w-5xl mx-auto px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-12"
                    >
                        Featured Projects
                    </motion.h2>

                    <motion.div
                        className="grid md:grid-cols-2 gap-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, staggerChildren: 0.2 }}
                        viewport={{ once: true }}
                    >

                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -8, boxShadow: isDarkMode ? '0 25px 50px -12px rgba(168, 85, 247, 0.2)' : '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}
                                transition={{ duration: 0.3 }}
                                viewport={{ once: true }}
                                onClick={() => setSelectedProject(project)}
                                className={`rounded-xl p-6 md:p-8 hover:shadow-lg transition-all cursor-pointer border ${isDarkMode ? 'bg-gray-700/50 backdrop-blur-sm border-purple-500/30' : 'bg-white/50 backdrop-blur-sm border-purple-200'}`}
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold">{project.title}</h3>
                                    <motion.a
                                        whileHover={{ scale: 1.2, rotate: 45 }}
                                        whileTap={{ scale: 0.9 }}
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <ExternalLink className={`cursor-pointer transition-colors ${isDarkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-400 hover:text-purple-600'}`} size={24} />
                                    </motion.a>
                                </div>

                                <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    {project.description}
                                </p>

                                <div className="mb-6">
                                    <h4 className="font-semibold mb-2">Technical Challenge:</h4>
                                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {project.challenge}
                                    </p>
                                </div>

                                <motion.div
                                    className="flex flex-wrap gap-2"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {project.tags.map((tag) => (
                                        <motion.span
                                            key={tag}
                                            whileHover={{ scale: 1.05 }}
                                            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${isDarkMode ? 'bg-purple-900/50 text-purple-300' : 'bg-purple-100 text-purple-700'}`}
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-16 md:py-24 max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center"
                >
                    <div className="flex-1 text-center md:text-left w-full">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">About Me</h2>
                        <p className={`text-lg leading-relaxed mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            I am a dedicated developer who thrives at the intersection of logic and creativity, specializing in building robust, interactive web applications. Guided by hard work, resilience, and a deep commitment to problem-solving, I focus on turning complex technical challenges into clean, scalable code.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 mb-6 text-left">
                            <div className={`p-5 rounded-xl border transition-all hover:shadow-md ${isDarkMode ? 'bg-gray-800/40 border-purple-500/20' : 'bg-purple-50/50 border-purple-100'}`}>
                                <h3 className="font-bold text-purple-600 dark:text-purple-400 text-lg mb-1 flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                                    Real-Time MERN Chat App
                                </h3>
                                <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                    A responsive communication platform leveraging Socket.IO for instant, low-latency messaging and media sharing.
                                </p>
                            </div>
                            <div className={`p-5 rounded-xl border transition-all hover:shadow-md ${isDarkMode ? 'bg-gray-800/40 border-purple-500/20' : 'bg-purple-50/50 border-purple-100'}`}>
                                <h3 className="font-bold text-purple-600 dark:text-purple-400 text-lg mb-1 flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                                    React Weather Dashboard
                                </h3>
                                <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                    An intuitive application integrating geolocation APIs and asynchronous data flows to provide real-time weather analytics.
                                </p>
                            </div>
                        </div>

                        <p className={`text-lg leading-relaxed mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Whether designing database schemas or optimizing frontend layouts, I bring dedication and attention to detail to every project. I’m always eager to collaborate with peers and connect with recruiters. Explore my projects below, and let’s connect to build something meaningful together!
                        </p>

                        {/* Skills Grid */}
                        <motion.div
                            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2, staggerChildren: 0.1 }}
                            viewport={{ once: true }}
                        >
                            {['C++', 'React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'JavaScript', 'REST APIs', 'Git', 'Web Design'].map((skill) => (
                                <motion.div
                                    key={skill}
                                    whileHover={{ scale: 1.05 }}
                                    className={`px-4 py-3 rounded-lg text-center font-medium transition-all cursor-pointer border ${isDarkMode ? 'bg-gray-700/50 hover:bg-purple-900/30 border-purple-500/30' : 'bg-purple-50 hover:bg-purple-100 border-purple-200'}`}
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/3 flex justify-center md:justify-end mb-2 md:mb-0"
                    >
                        <div className={`relative overflow-hidden shadow-xl md:shadow-2xl border-4 ${isDarkMode ? 'border-gray-700' : 'border-white'} w-48 h-48 rounded-full md:w-full md:h-auto md:max-w-sm md:rounded-2xl shrink-0`}>
                            {/* Mobile Profile Image */}
                            <img
                                src="/profile-mobile.jpg"
                                alt="Soumya Maurya Profile"
                                className="w-full h-full object-cover block md:hidden"
                            />
                            {/* Desktop Profile Image */}
                            <img
                                src="/profile.jpg"
                                alt="Soumya Maurya Profile"
                                className="w-full h-auto object-cover hidden md:block"
                            />
                            <div className="absolute inset-0 bg-purple-500/10 mix-blend-overlay"></div>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Contact Section */}
            <footer id="contact" className={`py-16 md:py-24 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800/80 backdrop-blur-sm' : 'bg-gradient-to-b from-purple-600/10 to-gray-100 backdrop-blur-sm'}`}>
                <div className="max-w-5xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's build something together.</h2>
                        <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
                        </p>
                    </motion.div>

                    {/* Contact Form */}
                    <ContactForm isDarkMode={isDarkMode} />

                    {/* Social Links */}
                    <motion.div
                        className={`flex justify-center gap-4 md:gap-6 mt-12 pt-8 border-t ${isDarkMode ? 'border-gray-600' : 'border-purple-200'}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <motion.a
                            whileHover={{ scale: 1.2, y: -5 }}
                            href="https://github.com/Soumya572"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`transition-colors ${isDarkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'}`}
                        >
                            <Github size={32} />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.2, y: -5 }}
                            href="https://www.linkedin.com/in/somya-maurya-27a228312?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`transition-colors ${isDarkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'}`}
                        >
                            <Linkedin size={32} />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.2, y: -5 }}
                            href="https://leetcode.com/u/somyamaurya/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`transition-colors ${isDarkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'}`}
                        >
                            <Code2 size={32} />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.2, y: -5 }}
                            href="mailto:your.email@example.com"
                            className={`transition-colors ${isDarkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'}`}
                        >
                            <Mail size={32} />
                        </motion.a>
                    </motion.div>

                    {/* Copyright */}
                    <motion.p
                        className={`text-sm text-center mt-8 ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        © {new Date().getFullYear()} Soumya Maurya. Built with React, Tailwind & Framer Motion.
                    </motion.p>
                </div>
            </footer>

            {/* Project Modal */}
            {selectedProject && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedProject(null)}
                    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        className={`rounded-xl p-6 md:p-8 max-w-2xl w-full max-h-[80vh] md:max-h-96 overflow-y-auto ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
                    >
                        <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
                        <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{selectedProject.description}</p>
                        <p className={`mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>{selectedProject.challenge}</p>
                        <div className="flex flex-wrap gap-2">
                            {selectedProject.tags.map((tag) => (
                                <span key={tag} className={`px-3 py-1 rounded-full text-sm font-medium ${isDarkMode ? 'bg-purple-900/50 text-purple-300' : 'bg-purple-100 text-purple-700'}`}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            href={selectedProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-6 bg-gradient-to-r from-purple-600 to-purple-500 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-purple-600 transition-all"
                        >
                            {selectedProject.link.includes('github.com') ? 'View on GitHub' : 'View Live Demo'}
                        </motion.a>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
};

export default Portfolio;

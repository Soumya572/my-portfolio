import React, { useState } from 'react';
import { Mail, Phone, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactForm = ({ isDarkMode = false }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setStatus('loading');

        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });

            // Reset success message after 3 seconds
            setTimeout(() => setStatus('idle'), 3000);
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full max-w-lg mx-auto space-y-6"
        >
            {/* Name Field */}
            <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${errors.name
                            ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                            : isDarkMode
                                ? 'bg-gray-700/50 border-gray-600 text-white focus:ring-purple-500 focus:border-purple-500'
                                : 'bg-white border-gray-300 text-gray-900 focus:ring-purple-500 focus:border-purple-500'
                        } focus:outline-none focus:ring-2`}
                    placeholder="Your name"
                />
                {errors.name && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle size={14} /> {errors.name}
                    </p>
                )}
            </div>

            {/* Email Field */}
            <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${errors.email
                            ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                            : isDarkMode
                                ? 'bg-gray-700/50 border-gray-600 text-white focus:ring-purple-500 focus:border-purple-500'
                                : 'bg-white border-gray-300 text-gray-900 focus:ring-purple-500 focus:border-purple-500'
                        } focus:outline-none focus:ring-2`}
                    placeholder="your.email@example.com"
                />
                {errors.email && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle size={14} /> {errors.email}
                    </p>
                )}
            </div>

            {/* Message Field */}
            <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Message
                </label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full px-4 py-3 rounded-lg border transition-colors resize-none ${errors.message
                            ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                            : isDarkMode
                                ? 'bg-gray-700/50 border-gray-600 text-white focus:ring-purple-500 focus:border-purple-500'
                                : 'bg-white border-gray-300 text-gray-900 focus:ring-purple-500 focus:border-purple-500'
                        } focus:outline-none focus:ring-2`}
                    placeholder="Tell me about your project..."
                />
                {errors.message && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle size={14} /> {errors.message}
                    </p>
                )}
            </div>

            {/* Status Messages */}
            {status === 'success' && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
                >
                    <CheckCircle className="text-green-600" size={20} />
                    <p className="text-green-700 font-medium">
                        Message sent successfully! I'll get back to you soon.
                    </p>
                </motion.div>
            )}

            {status === 'error' && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3"
                >
                    <AlertCircle className="text-red-600" size={20} />
                    <p className="text-red-700 font-medium">
                        Something went wrong. Please try again.
                    </p>
                </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === 'loading'}
                type="submit"
                className={`w-full py-3 rounded-lg font-medium transition-all ${status === 'loading'
                        ? isDarkMode
                            ? 'bg-gray-600 cursor-not-allowed'
                            : 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white'
                    }`}
            >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
            </motion.button>
        </motion.form>
    );
};

export default ContactForm;

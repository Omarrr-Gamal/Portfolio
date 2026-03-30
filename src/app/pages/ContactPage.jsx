import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useData } from '../contexts/DataContext';
import { FaFacebookF, FaInstagram, FaGithub, FaWhatsapp } from 'react-icons/fa';

export const ContactPage = () => {

  const { contactData } = useData();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!formData.name.trim()) return 'Name is required';
    if (!formData.email.trim()) return 'Email is required';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) return 'Invalid email';

    if (!formData.message.trim()) return 'Message is required';

    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validate();

    if (error) return alert(error);

    // mailto fallback
    const mail = `mailto:${contactData.email}?subject=Portfolio Message from ${formData.name}&body=${formData.message} - ${formData.email}`;

    window.location.href = mail;

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 3000);
  };

  const email = contactData?.email || 'No email yet';
  const phone = contactData?.phone || 'No phone yet';
  const location = contactData?.location || 'No location yet';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 pt-24 pb-12 px-4">

      <div className="max-w-7xl mx-auto">

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-16">

          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
            Get in <span className="text-indigo-600">Touch</span>
          </h1>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* FORM */}

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl">

            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

            {submitted ? (

              <div className="text-center py-10">
                <Send className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <p className="text-lg font-semibold">
                  Message Sent Successfully 🚀
                </p>
              </div>

            ) : (

              <form onSubmit={handleSubmit} className="space-y-5">

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-indigo-500"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-indigo-500"
                />

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-indigo-500"
                />

                <button className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                  Send Message
                </button>

              </form>

            )}

          </div>

          {/* CONTACT INFO */}

          <div className="space-y-6 bg-white dark:bg-slate-800 py-11 px-3 md:px-6 rounded-2xl shadow-lg">

            {/* EMAIL */}

            <div className="flex items-center gap-4 group cursor-pointer">

              <a
                href={`mailto:${contactData?.email}`}
                className="flex items-center gap-4"
              >

                <div className="p-3 rounded-full border border-gray-300 dark:border-gray-600 
                group-hover:border-indigo-500 transition-all duration-300 group-hover:scale-110">

                  <Mail className="w-5 h-5 text-gray-700 group-hover:text-indigo-500" />

                </div>

                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {email}
                  </p>
                </div>

              </a>

            </div>

            {/* PHONE */}

            <div className="flex items-center gap-4 group cursor-pointer">

              <a href={`tel:${contactData?.phone}`} className="flex items-center gap-4">

                <div className="p-3 rounded-full border border-gray-300 dark:border-gray-600 
                group-hover:border-green-500 transition-all duration-300 group-hover:scale-110">

                  <Phone className="w-5 h-5 group-hover:text-green-500" />

                </div>

                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {phone}
                  </p>
                </div>

              </a>

            </div>

            {/* MAP */}

            <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg">

              <iframe
                title="map"
                src={`https://www.google.com/maps?q=${encodeURIComponent(location)}&output=embed`}
                className="w-full h-48 border-0"
              />

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 hover:bg-gray-100 dark:hover:bg-slate-700 transition"
              >

                <div className="flex items-center gap-3">

                  <MapPin />

                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-sm text-gray-500">{location}</p>
                  </div>

                </div>

              </a>

            </div>

            {/* SOCIALS */}

            <div className="flex gap-5 mt-6">

              <motion.a whileHover={{ scale: 1.08, rotate: 5 }}
                href={contactData?.socials?.facebook}
                target="_blank"
                className="p-4 rounded-full bg-[#1877F2] text-white shadow-lg">

                <FaFacebookF size={22} />

              </motion.a>

              <motion.a whileHover={{ scale: 1.08, rotate: -5 }}
                href={contactData?.socials?.instagram}
                target="_blank"
                className="p-4 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white shadow-lg">

                <FaInstagram size={22} />

              </motion.a>

              <motion.a whileHover={{ scale: 1.08, rotate: 5 }}
                href={contactData?.socials?.github}
                target="_blank"
                className="p-4 rounded-full bg-black text-white shadow-lg">

                <FaGithub size={22} />

              </motion.a>

              <motion.a whileHover={{ scale: 1.08, rotate: -5 }}
                href={`https://wa.me/${contactData?.whatsapp}`}
                target="_blank"
                className="p-4 rounded-full bg-[#25D366] text-white shadow-lg">

                <FaWhatsapp size={22} />

              </motion.a>

            </div>

          </div>

        </div>

      </div>

    </div>
  );

};
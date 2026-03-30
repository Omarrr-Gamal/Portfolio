import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useData } from '../contexts/DataContext';
import { Save } from 'lucide-react';

export const AdminContact = () => {

    const { contactData, updateContact } = useData();

    const [formData, setFormData] = useState(contactData);
    const [saved, setSaved] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSocialChange = (e) => {
        setFormData({
            ...formData,
            socials: {
                ...formData.socials,
                [e.target.name]: e.target.value
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        updateContact(formData);

        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    return (
        <div className="space-y-6">

            <div>
                <h1 className="text-3xl font-bold">Contact Settings</h1>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow"
            >

                <form onSubmit={handleSubmit} className="space-y-6">

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">

                        </label>

                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full p-3 border rounded-lg"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            phone
                        </label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone"
                            className="w-full p-3 border rounded-lg"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            location
                        </label>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="Location"
                            className="w-full p-3 border rounded-lg"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            facebook
                        </label>
                        <input
                            type="text"
                            name="facebook"
                            value={formData.socials.facebook}
                            onChange={handleSocialChange}
                            placeholder="Facebook"
                            className="w-full p-3 border rounded-lg"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            instagram
                        </label>
                        <input
                            type="text"
                            name="instagram"
                            value={formData.socials.instagram}
                            onChange={handleSocialChange}
                            placeholder="Instagram"
                            className="w-full p-3 border rounded-lg"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            github
                        </label>
                        <input
                            type="text"
                            name="github"
                            value={formData.socials.github}
                            onChange={handleSocialChange}
                            placeholder="GitHub"
                            className="w-full p-3 border rounded-lg"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            whatsapp
                        </label>
                        <input
                            type="text"
                            name="whatsapp"
                            value={formData.whatsapp}
                            onChange={handleChange}
                            placeholder="WhatsApp Number"
                            className="w-full p-3 border rounded-lg"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            linkedIn
                        </label>
                        <input
                            type="text"
                            name="linkedIn"
                            value={formData.socials.linkedIn}
                            onChange={handleSocialChange}
                            placeholder="linkedIn"
                            className="w-full p-3 border rounded-lg"
                        />
                    </div>

                    <button className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg">
                        <Save size={18} />
                        Save Changes
                    </button>

                    {saved && (
                        <p className="text-green-500 font-medium">
                            Contact updated successfully
                        </p>
                    )}

                </form>

            </motion.div>
        </div>
    );
};
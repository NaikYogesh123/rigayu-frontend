"use client";

import { useState } from "react";

export default function InterestSection() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        comment: ""
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
            newErrors.phone = "Include at least 10 digits";
        }

        if (!formData.comment.trim()) newErrors.comment = "Please tell us how we can help you";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => {
                const newErrs = { ...prev };
                delete newErrs[name];
                return newErrs;
            });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitted(true);
            // In a real app, you would handle the form submission here
        }
    };

    return (
        <section id="interest" className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-apit-blue/5 rounded-full blur-3xl -mr-48 -mt-48"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-apit-blue font-bold tracking-widest uppercase text-sm mb-4">Express Your Interest</h2>
                        <h3 className="text-4xl font-extrabold text-gray-900 mb-6">Want to learn more about our Smart Solutions?</h3>
                        <p className="text-gray-600 text-lg">
                            Leave us a message with your specific requirements or questions, and our experts will get back to you with a tailored consultation.
                        </p>
                    </div>

                    <div className="bg-white rounded-[2.5rem] shadow-xl p-8 md:p-12 border border-gray-100">
                        {isSubmitted ? (
                            <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
                                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                                    ✓
                                </div>
                                <h4 className="text-2xl font-bold text-gray-900 mb-2">Thank You for Ihr Interest!</h4>
                                <p className="text-gray-600">Our team has received your message and will contact you shortly.</p>
                                <button
                                    onClick={() => {
                                        setIsSubmitted(false);
                                        setFormData({ fullName: "", email: "", phone: "", comment: "" });
                                    }}
                                    className="mt-8 text-apit-blue font-bold hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                                        <input
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            type="text"
                                            placeholder="Enter your name"
                                            className={`w-full px-6 py-4 rounded-2xl bg-gray-50 border ${errors.fullName ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-apit-blue focus:bg-white focus:border-transparent outline-none transition-all placeholder:text-gray-400`}
                                        />
                                        {errors.fullName && <p className="text-red-500 text-xs ml-1">{errors.fullName}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                                        <input
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            type="email"
                                            placeholder="your@email.com"
                                            className={`w-full px-6 py-4 rounded-2xl bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-apit-blue focus:bg-white focus:border-transparent outline-none transition-all placeholder:text-gray-400`}
                                        />
                                        {errors.email && <p className="text-red-500 text-xs ml-1">{errors.email}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                                        <input
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            type="tel"
                                            placeholder="+91 00000 00000"
                                            className={`w-full px-6 py-4 rounded-2xl bg-gray-50 border ${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-apit-blue focus:bg-white focus:border-transparent outline-none transition-all placeholder:text-gray-400`}
                                        />
                                        {errors.phone && <p className="text-red-500 text-xs ml-1">{errors.phone}</p>}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">How can we help you? (Comment box)</label>
                                    <textarea
                                        name="comment"
                                        value={formData.comment}
                                        onChange={handleChange}
                                        rows={5}
                                        placeholder="Tell us about your interest, specific plant requirements, or any questions you have..."
                                        className={`w-full px-6 py-4 rounded-2xl bg-gray-50 border ${errors.comment ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-apit-blue focus:bg-white focus:border-transparent outline-none transition-all placeholder:text-gray-400 resize-none`}
                                    ></textarea>
                                    {errors.comment && <p className="text-red-500 text-xs ml-1">{errors.comment}</p>}
                                </div>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        className="w-full bg-apit-blue text-white py-5 rounded-2xl font-bold text-lg hover:bg-apit-dark-blue transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0"
                                    >
                                        Send Your Interest
                                    </button>
                                </div>

                                <p className="text-center text-gray-400 text-xs">
                                    By submitting this form, you agree to our privacy policy and terms of service.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

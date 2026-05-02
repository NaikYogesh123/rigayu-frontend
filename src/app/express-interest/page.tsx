"use client";

import { useState } from "react";
import Link from "next/link";

export default function ExpressInterestPage() {
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
        }
    };

    return (
        <div className="min-h-screen bg-background pt-32 pb-20 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom duration-700">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">Express Your Interest</h1>
                    <p className="text-2xl text-gray-400 max-w-2xl mx-auto">
                        Ready to bring smart sprout solutions to your community? Fill out the form below and our experts will get back to you with a tailored consultation.
                    </p>
                </div>

                <div className="bg-surface rounded-[2.5rem] shadow-2xl shadow-black/40 p-8 md:p-12 border border-border-color animate-in fade-in slide-in-from-bottom duration-700 delay-100">
                    {isSubmitted ? (
                        <div className="text-center py-16 animate-in fade-in zoom-in duration-500">
                            <div className="w-20 h-20 bg-green-900/30 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 text-5xl">
                                ✓
                            </div>
                            <h2 className="text-4xl font-bold text-white mb-4">Interest Recorded!</h2>
                            <p className="text-gray-400 text-xl mb-10">We've received your request and our team will reach out within 24-48 business hours.</p>
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 bg-apit-blue text-white font-bold px-8 py-4 rounded-2xl hover:bg-apit-dark-blue transition-all"
                            >
                                Back to Home
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                            </Link>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-base font-bold text-gray-300 ml-1">Full Name</label>
                                    <input
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="John Doe"
                                        className={`w-full px-6 py-4 rounded-2xl bg-background border ${errors.fullName ? 'border-red-500' : 'border-border-color'} focus:ring-2 focus:ring-apit-blue outline-none transition-all text-white`}
                                    />
                                    {errors.fullName && <p className="text-red-400 text-sm ml-1 font-medium">{errors.fullName}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-base font-bold text-gray-300 ml-1">Email Address</label>
                                    <input
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        type="email"
                                        placeholder="john@example.com"
                                        className={`w-full px-6 py-4 rounded-2xl bg-background border ${errors.email ? 'border-red-500' : 'border-border-color'} focus:ring-2 focus:ring-apit-blue outline-none transition-all text-white`}
                                    />
                                    {errors.email && <p className="text-red-400 text-sm ml-1 font-medium">{errors.email}</p>}
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-base font-bold text-gray-300 ml-1">Phone Number</label>
                                    <input
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        type="tel"
                                        placeholder="+91 00000 00000"
                                        className={`w-full px-6 py-4 rounded-2xl bg-background border ${errors.phone ? 'border-red-500' : 'border-border-color'} focus:ring-2 focus:ring-apit-blue outline-none transition-all text-white`}
                                    />
                                    {errors.phone && <p className="text-red-400 text-sm ml-1 font-medium">{errors.phone}</p>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-base font-bold text-gray-300 ml-1">Tell us more about your requirements</label>
                                <textarea
                                    name="comment"
                                    value={formData.comment}
                                    onChange={handleChange}
                                    rows={5}
                                    placeholder="I'm interested in deploying a unit at my corporate campus..."
                                    className={`w-full px-6 py-4 rounded-2xl bg-background border ${errors.comment ? 'border-red-500' : 'border-border-color'} focus:ring-2 focus:ring-apit-blue outline-none transition-all text-white resize-none`}
                                ></textarea>
                                {errors.comment && <p className="text-red-400 text-sm ml-1 font-medium">{errors.comment}</p>}
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-apit-blue text-white py-5 rounded-2xl font-bold text-xl hover:bg-apit-dark-blue transition-all shadow-lg shadow-apit-blue/25 hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0"
                            >
                                Submit Expression of Interest
                            </button>

                            <p className="text-center text-gray-500 text-base">
                                Guaranteed response within 48 hours. Let's build a healthier future together.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

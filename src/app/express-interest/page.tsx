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
            <div className="max-w-4xl mx-auto reveal">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-green/10 text-green font-syne text-[0.75rem] font-bold tracking-[0.1em] uppercase px-4 py-1.5 rounded-full mb-6">
                        Contact Us
                    </div>
                    <h1 className="font-syne text-[clamp(2.5rem,5vw,4rem)] font-extrabold text-dark mb-6 leading-tight">Express Your Interest</h1>
                    <p className="text-lg text-[#5a6e5c] max-w-2xl mx-auto font-medium">
                        Ready to bring smart sprout solutions to your community? Fill out the form below and our experts will get back to you with a tailored consultation.
                    </p>
                </div>

                <div className="bg-dark rounded-[2.5rem] shadow-[0_30px_80px_rgba(13,26,15,0.25)] p-8 md:p-12 border border-white/5 relative overflow-hidden">
                    <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-lime opacity-[0.05] rounded-full"></div>

                    {isSubmitted ? (
                        <div className="text-center py-16">
                            <div className="w-20 h-20 bg-green/20 text-lime rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                                ✓
                            </div>
                            <h2 className="font-syne text-3xl font-bold text-white mb-4">Interest Recorded!</h2>
                            <p className="text-white/60 text-lg mb-10">We&apos;ve received your request and our team will reach out within 24-48 business hours.</p>
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 bg-green text-white font-syne font-bold px-8 py-4 rounded-full hover:bg-[#18a348] transition-all hover:scale-[1.02]"
                            >
                                Back to Home
                            </Link>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-8 relative z-10" noValidate>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-lime tracking-widest uppercase ml-1">Full Name</label>
                                    <input
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="John Doe"
                                        className={`w-full px-6 py-4 rounded-2xl bg-white/5 border ${errors.fullName ? 'border-red-500' : 'border-white/10'} focus:border-lime outline-none transition-all text-white placeholder:text-white/20 font-medium`}
                                    />
                                    {errors.fullName && <p className="text-red-400 text-xs ml-1 font-medium">{errors.fullName}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-lime tracking-widest uppercase ml-1">Email Address</label>
                                    <input
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        type="email"
                                        placeholder="john@example.com"
                                        className={`w-full px-6 py-4 rounded-2xl bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} focus:border-lime outline-none transition-all text-white placeholder:text-white/20 font-medium`}
                                    />
                                    {errors.email && <p className="text-red-400 text-xs ml-1 font-medium">{errors.email}</p>}
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-xs font-bold text-lime tracking-widest uppercase ml-1">Phone Number</label>
                                    <input
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        type="tel"
                                        placeholder="+91 00000 00000"
                                        className={`w-full px-6 py-4 rounded-2xl bg-white/5 border ${errors.phone ? 'border-red-500' : 'border-white/10'} focus:border-lime outline-none transition-all text-white placeholder:text-white/20 font-medium`}
                                    />
                                    {errors.phone && <p className="text-red-400 text-xs ml-1 font-medium">{errors.phone}</p>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-lime tracking-widest uppercase ml-1">Requirements & Questions</label>
                                <textarea
                                    name="comment"
                                    value={formData.comment}
                                    onChange={handleChange}
                                    rows={5}
                                    placeholder="Tell us about your space..."
                                    className={`w-full px-6 py-4 rounded-2xl bg-white/5 border ${errors.comment ? 'border-red-500' : 'border-white/10'} focus:border-lime outline-none transition-all text-white resize-none placeholder:text-white/20 font-medium`}
                                ></textarea>
                                {errors.comment && <p className="text-red-400 text-xs ml-1 font-medium">{errors.comment}</p>}
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-lime text-dark py-5 rounded-full font-syne font-bold text-lg hover:bg-white transition-all transform hover:-translate-y-1 active:translate-y-0"
                            >
                                Submit Interest →
                            </button>

                            <p className="text-center text-white/30 text-xs tracking-wide">
                                GUARANTEED RESPONSE WITHIN 48 HOURS
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

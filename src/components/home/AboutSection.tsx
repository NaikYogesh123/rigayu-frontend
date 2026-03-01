export default function AboutSection() {
    return (
        <section id="about" className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom duration-1000">
                    <h2 className="text-apit-blue font-bold tracking-widest uppercase text-sm mb-4">Why Choose RIGAYU</h2>
                    <h3 className="text-4xl font-extrabold text-gray-900 mb-6">Food Process Innovation</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        RIGAYU Innovations Pvt Ltd is a leading provider of advanced food processing solutions, specializing in efficient and hygienic sprout production systems for commercial and industrial setups. With a focus on innovation, safety, and quality, we design machines that streamline processes from cleaning and soaking to germination and collection, ensuring fresh, high-quality sprouts every time.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Feature 1 */}
                    <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-apit-blue transition-colors">
                            <span className="text-3xl group-hover:scale-110 transition-transform">🎯</span>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Values & Vision</h4>
                        <ul className="text-gray-600 leading-relaxed list-disc list-inside space-y-2">
                            <li>Commitment to healthy, natural, and chemical-free food processing</li>
                            <li>Vision: Making nutritious sprouted foods accessible to everyone</li>
                            <li>Sustainability: Zero waste processing and energy-efficient machines</li>
                            <li>Supporting small farmers, health food businesses, and organic producers</li>
                            <li>Principles: Food safety, hygiene standards, and continuous innovation</li>
                        </ul>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-apit-blue transition-colors">
                            <span className="text-3xl group-hover:scale-110 transition-transform">🏗️</span>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Achievements & Credibility</h4>
                        <ul className="text-gray-600 leading-relaxed list-disc list-inside space-y-2">
                            <li>Founding year and the journey so far</li>
                            <li>Prototype to production milestone</li>
                            <li>Patents filed or pending</li>
                            <li>Research or testing done (lab results, efficiency data)</li>
                            <li>Founder&apos;s background and expertise in food tech or engineering</li>
                        </ul>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-apit-blue transition-colors">
                            <span className="text-3xl group-hover:scale-110 transition-transform">🤝</span>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Social Proof (Without Big Numbers)</h4>
                        <ul className="text-gray-600 leading-relaxed list-disc list-inside space-y-2">
                            <li>Currently being tested by X businesses</li>
                            <li>Demo videos of the machine working</li>
                            <li>Founder interviews or local press coverage</li>
                            <li>Any exhibition or trade fair you&apos;ve participated in</li>
                            <li>Founder&apos;s background and expertise in food tech or engineering</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

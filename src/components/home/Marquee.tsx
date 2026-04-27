export default function Marquee() {
    const items = [
        "Automated Sprout Vending",
        "Zero Preservatives",
        "Smart IoT Integration",
        "100% Organic",
        "Farm to Kiosk",
        "Touchless Operation",
        "AI Inventory Tracking",
        "Ancient Nutrition"
    ];

    return (
        <div className="marquee-wrap bg-dark text-lime overflow-hidden py-[1.1rem] border-y border-[rgba(181,255,58,0.2)]">
            <div className="marquee-track flex gap-[3rem] whitespace-nowrap animate-[marquee_20s_linear_infinite] font-syne text-[0.85rem] font-[700] tracking-[0.1em] uppercase">
                {/* Original items */}
                {items.map((item, i) => (
                    <div key={i} className="marquee-item flex items-center gap-[0.5rem]">
                        <span className="text-lime">✦</span> {item}
                    </div>
                ))}
                {/* Duplicate for seamless loop */}
                {items.map((item, i) => (
                    <div key={`dup-${i}`} className="marquee-item flex items-center gap-[0.5rem]">
                        <span className="text-lime">✦</span> {item}
                    </div>
                ))}
            </div>
        </div>
    );
}

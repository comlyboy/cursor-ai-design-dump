import { motion } from "framer-motion";
import { ArrowRight, Menu as MenuIcon, Smartphone, Cloud } from "lucide-react";

export default function LandingPage() {
return (
<div className="min-h-screen bg-black text-white font-sans overflow-x-hidden relative">
	{/* GLOBAL FUTURISTIC BACKGROUND */}
	<div className="fixed inset-0 -z-10 bg-gradient-to-b from-black via-purple-950/40 to-black" />
	<div
		className="fixed inset-0 -z-10 opacity-20 bg-[radial-gradient(circle_at_50%_20%,#7c3aed,transparent_70%)] animate-pulse" />
	<div
		className="fixed inset-0 -z-10 opacity-40 bg-[radial-gradient(circle_at_80%_80%,#3b82f6,transparent_70%)] blur-3xl" />

	{/* HEADER */}
	<header
		className="w-full py-6 px-8 flex justify-between items-center backdrop-blur-xl bg-white/5 border-b border-purple-500/20 shadow-[0_0_20px_rgba(124,58,237,0.3)]">
		<h1
			className="text-3xl font-bold tracking-wider bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
			MENUVERSE
		</h1>
		<nav className="hidden md:flex gap-8 text-sm opacity-80">
			<a href="#features" className="hover:text-purple-400 transition">Features</a>
			<a href="#how" className="hover:text-purple-400 transition">How It Works</a>
			<a href="#pricing" className="hover:text-purple-400 transition">Pricing</a>
			<a href="#contact" className="hover:text-purple-400 transition">Contact</a>
		</nav>
		<button
			className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-semibold hover:opacity-90 transition flex items-center gap-2 shadow-[0_0_15px_rgba(124,58,237,0.6)]">
			Try Free
			<ArrowRight className="w-4" />
		</button>
	</header>

	{/* HERO SECTION */}
	<section
		className="relative w-full min-h-[90vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">

		{/* HERO BACKGROUND IMAGE BELOW OVERLAYS */}
		<div className="absolute inset-0 -z-20 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-30" />

		{/* (existing overlays remain above) */}

		<motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
			className="text-6xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-purple-300 via-blue-300 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(124,58,237,0.5)]">
			The Future of Menu Management
		</motion.h2>

		<motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}
			className="text-lg md:text-xl max-w-2xl opacity-80 mb-10">
			A futuristic SaaS platform that lets restaurants, cafés, and bars manage, customise, and instantly sync their
			menus across all digital touchpoints.
		</motion.p>

		{/* CTA Buttons */}
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4 }} className="flex gap-4">
			<button
				className="px-10 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 font-bold shadow-[0_0_20px_rgba(124,58,237,0.5)] hover:opacity-80 transition">
				Start Free Trial
			</button>
			<button
				className="px-10 py-3 border border-white/20 bg-white/5 rounded-xl font-semibold hover:bg-white/10 transition">
				Watch Demo
			</button>
		</motion.div>
	</section>

	{/* FEATURES */}
	<section id="features" className="py-32 px-6 md:px-20 text-center relative">
		<h3 className="text-4xl font-bold mb-4">Futuristic Features</h3>
		<p className="max-w-2xl mx-auto opacity-70 mb-16">Powered by cloud sync, immersive UI, and next‑gen tools.</p>

		<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,#7c3aed20,transparent_70%)]" />

		<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
			<FeatureCard icon={<MenuIcon />} title="Neon Menu Builder" desc="Edit menus with glowing UI, holographic buttons,
			and real-time preview." />
			<FeatureCard icon={<Smartphone />} title="Hologram Mobile View" desc="Your menu animates smoothly across all
			modern devices with futuristic transitions." />
			<FeatureCard icon={<Cloud />} title="Instant Cloud Sync" desc="Updates sync across branches instantly with zero
			refresh or downtime." />
		</div>
	</section>

	{/* HOW IT WORKS */}
	<section id="how" className="py-32 px-6 md:px-20 text-center">
		<h3 className="text-4xl font-bold mb-4">Getting Started is Light‑Speed</h3>
		<p className="opacity-70 mb-16">From signup to published menu in minutes.</p>

		<div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left max-w-5xl mx-auto">
			<Step number="01" title="Create Account" desc="Register instantly on a sleek UI powered by neon gradients." />
			<Step number="02" title="Build Menu" desc="Upload items, add pricing, and customise futuristic layouts." />
			<Step number="03" title="Go Live" desc="Share QR codes, URLs, or embed your menu anywhere." />
		</div>
	</section>

	{/* PRICING */}
	<section id="pricing" className="py-32 px-6 md:px-20 text-center">
		<h3 className="text-4xl font-bold mb-6">Transparent Pricing</h3>
		<p className="opacity-70 mb-16">Simple plans. Futuristic value.</p>

		<div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
			<PricingCard title="Starter" price="$9/mo" features={["Unlimited Items", "Basic Analytics" , "1 Restaurant" ]} />
			<PricingCard premium title="Professional" price="$19/mo" features={["Remove Branding", "Advanced Insights"
				, "Menu Scheduling" ]} />
			<PricingCard title="Enterprise" price="Custom" features={["Multi-Branch", "POS Integration" , "24/7 Support" ]} />
		</div>
	</section>

	{/* CTA */}
	<section className="py-32 px-6 md:px-20 text-center relative">
		<h3 className="text-4xl font-bold mb-4">Your Menu. Reinvented.</h3>
		<p className="max-w-xl mx-auto opacity-70 mb-10">Level up your food business with hyper‑modern digital menus.</p>
		<button
			className="px-10 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl font-bold shadow-[0_0_25px_rgba(124,58,237,0.6)] hover:opacity-80 transition">
			Start Free Trial
		</button>
	</section>

	{/* FOOTER */}
	<footer className="py-10 px-6 md:px-20 border-t border-white/10 text-center opacity-60 text-sm">
		© {new Date().getFullYear()} MENUVERSE — Futuristic Menu Management.
	</footer>
</div>
);
}

function FeatureCard({ icon, title, desc }) {
return (
<div
	className="p-8 rounded-2xl border border-purple-500/20 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition shadow-[0_0_15px_rgba(124,58,237,0.3)] text-center">
	<div className="mb-4 flex justify-center text-purple-400 animate-pulse">{icon}</div>
	<h4 className="text-2xl font-semibold mb-3">{title}</h4>
	<p className="opacity-70 text-sm">{desc}</p>
</div>
);
}

function Step({ number, title, desc }) {
return (
<div
	className="p-8 border border-purple-500/20 rounded-2xl bg-white/5 backdrop-blur-xl shadow-[0_0_15px_rgba(124,58,237,0.3)]">
	<div className="text-purple-400 text-4xl font-bold mb-4">{number}</div>
	<h4 className="text-xl font-semibold mb-2">{title}</h4>
	<p className="opacity-70 text-sm">{desc}</p>
</div>
);
}

function PricingCard({ title, price, features, premium }) {
return (
<div className={`p-10 rounded-2xl border backdrop-blur-xl shadow-[0_0_20px_rgba(124,58,237,0.3)] ${premium
	? "border-purple-500/40 bg-purple-500/10" : "border-white/10 bg-white/5" }`}>
	<h4 className="text-2xl font-bold mb-3">{title}</h4>
	<p className="text-4xl font-extrabold mb-6">{price}</p>
	<ul className="space-y-2 opacity-80 mb-6">
		{features.map((f) => (
		<li key={f}>• {f}</li>
		))}
	</ul>
	<button className={`w-full py-3 rounded-xl font-bold shadow-[0_0_15px_rgba(124,58,237,0.5)] hover:opacity-80
		transition ${premium ? "bg-purple-600 text-white" : "bg-white/10 text-white" }`}>
		{premium ? "Get Started" : "Choose Plan"}
	</button>
</div>
);
}
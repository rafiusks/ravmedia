import { motion } from "framer-motion";

function Footer() {
	return (
		<footer
			className="container mx-auto py-10 text-right text-sm"
			transition:persist
		>
			<div className="border-t border-gray-800 pt-8">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<p className="text-gray-400 mb-4 md:mb-0">
						© {new Date().getFullYear()} Rafael Vidal. All rights reserved.
					</p>

					<div className="flex items-center space-x-4">
						<span className="text-gray-400">Built with:</span>
						<a
							href="//tailwindcss.com"
							className="text-blue-400 hover:text-blue-300 transition"
						>
							Tailwind
						</a>
						<span className="text-gray-600">•</span>
						<a
							href="//astro.build"
							className="text-blue-400 hover:text-blue-300 transition"
						>
							Astro
						</a>
						<span className="text-gray-600">•</span>
						<a
							href="//reactjs.org"
							className="text-blue-400 hover:text-blue-300 transition"
						>
							React
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;

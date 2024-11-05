import { motion } from "framer-motion";

function Footer() {
	return (
		<footer
			className="container mx-auto py-10 text-sm border-t border-gray-100"
			transition:persist
		>
			<div className="pt-8">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<p className="text-gray-600 mb-4 md:mb-0">
						© {new Date().getFullYear()} RavMedia. All rights reserved.
					</p>

					<div className="flex items-center space-x-4">
						<span className="text-gray-500">Built with:</span>
						<a
							href="//tailwindcss.com"
							className="text-primary-600 hover:text-primary-700 transition"
						>
							Tailwind
						</a>
						<span className="text-gray-300">•</span>
						<a
							href="//astro.build"
							className="text-primary-600 hover:text-primary-700 transition"
						>
							Astro
						</a>
						<span className="text-gray-300">•</span>
						<a
							href="//reactjs.org"
							className="text-primary-600 hover:text-primary-700 transition"
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

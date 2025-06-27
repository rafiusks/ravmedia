export interface Project {
	title: string;
	description: string;
	url: string;
	status: "active" | "inactive" | "coming-soon";
}

export interface Service {
	title: string;
	description: string;
	icon: string;
	category: "Development" | "Data" | "Strategy" | "Consulting";
	deliverables: string[];
}

export interface NavItem {
	path: string;
	label: string;
	icon: string;
}

export interface LayoutProps {
	title: string;
	description?: string;
	image?: string;
}

export interface ButtonProps {
	href?: string;
	variant?: "primary" | "accent" | "outline";
	size?: "sm" | "md" | "lg";
}

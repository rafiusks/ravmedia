import type { Service } from "../types";

export const services: Service[] = [
	{
		title: "Legacy System Modernization",
		description: "Upgrade outdated systems to modern, scalable architectures.",
		icon: "🔄",
		category: "Development",
		deliverables: [
			"Technology Stack Upgrade",
			"Microservices Migration",
			"Data Migration and Integration",
			"Improved Performance and Scalability",
		],
	},
	{
		title: "Cloud-Native Development",
		description:
			"Build and deploy applications that leverage the full potential of the cloud.",
		icon: "☁️",
		category: "Development",
		deliverables: [
			"Cloud Infrastructure Setup (AWS, Azure, GCP)",
			"Containerization (Docker, Kubernetes)",
			"Serverless Architecture",
			"CI/CD for Cloud Environments",
		],
	},
	{
		title: "Data Engineering & Analytics",
		description:
			"Transform data into actionable insights with robust data pipelines and analytics solutions.",
		icon: "📊",
		category: "Data",
		deliverables: [
			"Data Warehouse Design and Implementation",
			"ETL/ELT Pipeline Development",
			"Business Intelligence (BI) Dashboards",
			"Predictive Analytics and Machine Learning Models",
		],
	},
	{
		title: "API & Integration Services",
		description:
			"Connect disparate systems and unlock new capabilities with secure and scalable APIs.",
		icon: "🔗",
		category: "Development",
		deliverables: [
			"RESTful and GraphQL API Development",
			"API Gateway and Management",
			"Third-Party API Integration",
			"Real-time Data Syncing",
		],
	},
	{
		title: "DevOps & Automation",
		description:
			"Streamline your development and operations with automated workflows and CI/CD pipelines.",
		icon: "⚙️",
		category: "Strategy",
		deliverables: [
			"Infrastructure as Code (IaC)",
			"Automated Testing and Quality Assurance",
			"Monitoring and Logging Solutions",
			"Security and Compliance Automation",
		],
	},
	{
		title: "Blockchain & DLT Solutions",
		description:
			"Explore the potential of decentralized technologies for your business.",
		icon: "⛓️",
		category: "Consulting",
		deliverables: [
			"Feasibility Study and Use Case Analysis",
			"Smart Contract Development and Audit",
			"Private and Public Blockchain Integration",
			"Decentralized Application (dApp) Development",
		],
	},
];

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  longDescription?: string;
  technologies?: string[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "1",
    title: "Smart Health Management for Clinics and Hospitals",
    category: "Custom Software Solutions",
    description:
      "A comprehensive ERP system developed for healthcare institutions. Streamlines patient management, appointments, billing, and medical records.",
    image: "https://images.unsplash.com/photo-1576091160550-112173f7f869?w=500&h=300&fit=crop",
    longDescription:
      "This innovative healthcare solution provides clinics and hospitals with complete patient management capabilities, appointment scheduling, billing integration, and secure medical records management.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"]
  },
  {
    id: "2",
    title: "E-Commerce Sales Analysis Platform",
    category: "Web App Development",
    description:
      "Government pension management system featuring analytics and customer data insights. Enables efficient administration of pension schemes.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    longDescription:
      "An advanced analytics platform for government pension systems, providing real-time insights into customer data and transaction patterns.",
    technologies: ["React", "Python", "PostgreSQL", "Tableau"]
  },
  {
    id: "3",
    title: "GPS Tracking & Transport Management Dashboard",
    category: "Web App Development",
    description:
      "Real-time fleet tracking and logistics management system. Revolutionizes transportation and logistics operations with GPS integration.",
    image: "https://images.unsplash.com/photo-1553531889-e6cf89d45398?w=500&h=300&fit=crop",
    longDescription:
      "A comprehensive transport management dashboard enabling real-time vehicle tracking, route optimization, and fleet operations management.",
    technologies: ["React", "Google Maps API", "Firebase", "Node.js"]
  },
  {
    id: "4",
    title: "Mobile Banking Application",
    category: "Mobile App Development",
    description:
      "Secure mobile banking app enabling users to manage accounts, transfer funds, and pay bills on the go.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&h=300&fit=crop",
    longDescription:
      "A secure, feature-rich mobile banking application with biometric authentication, fund transfers, and bill payment capabilities.",
    technologies: ["Swift", "Kotlin", "Node.js", "MongoDB"]
  },
  {
    id: "5",
    title: "Food Delivery Application",
    category: "Mobile App Development",
    description:
      "Complete food delivery platform connecting restaurants with customers. Features order tracking, payments, and ratings.",
    image: "https://images.unsplash.com/photo-1585162714684-38269d6639fd?w=500&h=300&fit=crop",
    longDescription:
      "A full-featured food delivery app with real-time order tracking, multiple payment options, restaurant ratings, and customer reviews.",
    technologies: ["React Native", "Firebase", "Node.js", "MongoDB"]
  },
  {
    id: "6",
    title: "Jewellery E-Commerce Portal",
    category: "Web App Development",
    description:
      "Premium jewellery e-commerce platform with product showcase, secure payments, and inventory management.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=300&fit=crop",
    longDescription:
      "A sophisticated jewellery retail platform featuring high-quality product imaging, 3D visualization, secure transactions, and customer accounts.",
    technologies: ["React", "Node.js", "Stripe", "MongoDB"]
  }
];

export const portfolioCategories = [
  "Custom Software Solutions",
  "Web App Development",
  "Mobile App Development"
];

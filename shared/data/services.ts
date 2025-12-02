export interface Service {
  id: string;
  category: string;
  title: string;
  description: string;
  icon?: string;
}

export const services: Service[] = [
  {
    id: "1",
    category: "Custom Software Solutions",
    title: "Enterprise Software Development",
    description:
      "Build scalable, secure enterprise solutions tailored to your business needs. Our expert team delivers robust applications that drive efficiency and growth."
  },
  {
    id: "2",
    category: "Custom Software Solutions",
    title: "Legacy System Modernization",
    description:
      "Upgrade your outdated systems with modern technologies. We help you transform legacy applications into scalable, maintainable solutions."
  },
  {
    id: "3",
    category: "Custom Software Solutions",
    title: "API Development & Integration",
    description:
      "Create powerful APIs and integrate third-party services seamlessly. Our team ensures secure, scalable API solutions for your platform."
  },
  {
    id: "4",
    category: "Web App Development",
    title: "Single Page Applications",
    description:
      "Develop responsive, fast single page applications using modern frameworks. We create engaging web experiences that users love."
  },
  {
    id: "5",
    category: "Web App Development",
    title: "E-Commerce Solutions",
    description:
      "Build feature-rich e-commerce platforms with payment integration, inventory management, and analytics to boost your online sales."
  },
  {
    id: "6",
    category: "Web App Development",
    title: "Content Management Systems",
    description:
      "Create flexible, user-friendly CMS solutions that empower your team to manage content effortlessly."
  },
  {
    id: "7",
    category: "Mobile App Development",
    title: "iOS App Development",
    description:
      "Build native iOS applications with exceptional user experience. We deliver high-performance apps optimized for Apple devices."
  },
  {
    id: "8",
    category: "Mobile App Development",
    title: "Android App Development",
    description:
      "Create powerful Android applications reaching millions of users. Our team develops feature-rich apps with excellent performance."
  },
  {
    id: "9",
    category: "Mobile App Development",
    title: "Cross-Platform Development",
    description:
      "Develop mobile apps for iOS and Android simultaneously using modern cross-platform frameworks, reducing time and cost."
  }
];

export const serviceCategories = [
  "Custom Software Solutions",
  "Web App Development",
  "Mobile App Development"
];

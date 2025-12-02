import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ServiceCard from "@/components/ServiceCard";
import { CheckCircle, Zap, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-20 md:py-32 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className={"absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><g fill=\"%23ffffff\" fill-opacity=\"0.1\"><path d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/></g></g></svg>')]"}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                We Are a Team of Experts
              </motion.h1>
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-primary">Digital Solutions</span> for Your Business Growth
              </motion.h2>
              <motion.p
                className="text-xl text-gray-200 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Custom Software, Web, and Mobile App Development
              </motion.p>
              <motion.p
                className="text-lg text-gray-300 mb-8 italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Tailored to Your Needs | Delivered with Excellence
              </motion.p>
              <motion.p
                className="text-gray-300 mb-12 text-base leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Partner with BlackBugs Technologies to turn your ideas into powerful, scalable solutions that drive success.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg">
                  Let's Talk →
                </Button>
                <Link to="/portfolio">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 rounded-full px-8 py-6 text-lg w-full sm:w-auto">
                    View all Work →
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right - Team image */}
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=600&fit=crop"
                  alt="BlackBugs Team"
                  className="rounded-lg shadow-2xl hover:shadow-3xl transition-shadow"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-lg text-primary font-semibold mb-2">← Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              IT Expertise You Can Trust
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl">
              Years of hands-on experience across industries allow us to deliver tailored solutions that solve real business challenges and drive measurable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Award />,
                title: "Industry Experience",
                description: "Years of hands-on experience across industries allow us to deliver tailored solutions."
              },
              {
                icon: <Zap />,
                title: "Latest Technologies",
                description: "We use cutting-edge tools and frameworks to build modern, scalable solutions."
              },
              {
                icon: <Users />,
                title: "Expert Team",
                description: "Our passionate professionals bring expertise and dedication to every project."
              },
              {
                icon: <CheckCircle />,
                title: "Quality Assurance",
                description: "Rigorous testing and QA ensure reliable, bug-free applications."
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceCard
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Custom Software Development</h3>
              <p className="text-blue-100 mb-6">
                Build scalable, secure enterprise solutions tailored specifically to your unique business requirements.
              </p>
              <Link to="/services" className="text-blue-200 hover:text-white font-semibold flex items-center gap-2">
                Learn more →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Web App Development</h3>
              <p className="text-blue-100 mb-6">
                Create responsive, fast, and engaging web applications using modern frameworks and best practices.
              </p>
              <Link to="/services" className="text-blue-200 hover:text-white font-semibold flex items-center gap-2">
                Learn more →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Mobile App Development</h3>
              <p className="text-blue-100 mb-6">
                Develop feature-rich mobile applications for iOS and Android that users love to use.
              </p>
              <Link to="/services" className="text-blue-200 hover:text-white font-semibold flex items-center gap-2">
                Learn more →
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg">
                Explore All Services →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how BlackBugs Technologies can help you achieve your digital goals.
          </p>
          <Button className="bg-white text-primary hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold">
            Get in Touch Today
          </Button>
        </div>
      </section>
    </Layout>
  );
}

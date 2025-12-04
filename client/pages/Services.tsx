import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import CategoryFilter from "@/components/CategoryFilter";
import { services, serviceCategories } from "@shared/data/services";
import { Code2, Smartphone, Wrench } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
export default function Services() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [activeCategory, setActiveCategory] = useState(categoryParam || "all");

  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);

  const icons: Record<string, React.ReactNode> = {
    custom: <Wrench size={32} />,
    web: <Code2 size={32} />,
    mobile: <Smartphone size={32} />,
  };

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter(
          (service) =>
            service.category.toLowerCase().replace(/\s+/g, "-") ===
            activeCategory.toLowerCase().replace(/\s+/g, "-"),
        );

  return (
    <Layout>
      <HeroSection
        title="Our Services"
        subtitle="Comprehensive digital solutions tailored to your business needs"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-16">
            <CategoryFilter
              categories={serviceCategories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => {
              const iconKey = service.category.toLowerCase().includes("custom")
                ? "custom"
                : service.category.toLowerCase().includes("web")
                  ? "web"
                  : "mobile";
              return (
                <ServiceCard
                  key={service.id}
                  icon={icons[iconKey]}
                  title={service.title}
                  description={service.description}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Services?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">✓</span>
                  <span className="text-gray-700">
                    <strong>Expert Team:</strong> Experienced developers with
                    proven track record
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">✓</span>
                  <span className="text-gray-700">
                    <strong>Latest Technologies:</strong> We use cutting-edge
                    tools and frameworks
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">✓</span>
                  <span className="text-gray-700">
                    <strong>Scalable Solutions:</strong> Built to grow with your
                    business
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">✓</span>
                  <span className="text-gray-700">
                    <strong>On-time Delivery:</strong> We respect deadlines and
                    deliver quality
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">✓</span>
                  <span className="text-gray-700">
                    <strong>Ongoing Support:</strong> We're here to support you
                    after launch
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary to-blue-700 rounded-lg p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">Get Started Today</h3>
              <p className="text-blue-100 mb-8">
                Let's discuss your project and create a solution that matches
                your vision and budget.
              </p>
              <Link to="/contact">
                <button className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors">
                  Schedule a Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

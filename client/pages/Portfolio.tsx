import { useState } from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/HeroSection";
import PortfolioCard from "@/components/PortfolioCard";
import CategoryFilter from "@/components/CategoryFilter";
import { portfolioProjects, portfolioCategories } from "@shared/data/portfolio";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? portfolioProjects
      : portfolioProjects.filter(
          (project) =>
            project.category.toLowerCase().replace(/\s+/g, "-") ===
            activeCategory.toLowerCase().replace(/\s+/g, "-")
        );

  return (
    <Layout>
      <HeroSection title="Our Portfolio" />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title and Description */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Success stories - See how we've helped our Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Blackbugs Technologies, our work speaks through the success of our clients. From startups to enterprises, we've partnered with businesses across industries to build powerful digital solutions, streamline operations, and drive measurable growth.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <CategoryFilter
              categories={portfolioCategories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredProjects.map((project) => (
              <PortfolioCard
                key={project.id}
                image={project.image}
                title={project.title}
                category={project.category}
                description={project.description}
                onViewDetails={() => {
                  // Handle view details - could navigate to detail page
                  console.log("View details for:", project.id);
                }}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're ready to bring your ideas to life. Let's create something amazing together.
          </p>
          <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full transition-colors">
            Let's Get Started
          </button>
        </div>
      </section>
    </Layout>
  );
}

import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/HeroSection";
import { Lightbulb, Target, Users, Award } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <HeroSection
        title="About BlackBugs Technologies"
        subtitle="Transforming Ideas Into Digital Reality"
      />

      {/* Company Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Founded with a vision to transform businesses through
                technology, BlackBugs Technologies has been at the forefront of
                digital innovation for years. We started small but thought big,
                believing that every business deserves access to world-class
                technology solutions.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Today, we're a team of passionate developers, designers, and
                strategists dedicated to delivering solutions that make a real
                impact. We've worked with startups, SMEs, and enterprises,
                helping them navigate the digital landscape and achieve their
                goals.
              </p>
              <p className="text-lg text-gray-700">
                Our success is built on a foundation of trust, transparency, and
                a relentless commitment to excellence.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary to-blue-700 rounded-lg p-12 text-white">
              <h3 className="text-2xl font-bold mb-8">By The Numbers</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold">50+</div>
                  <div className="text-blue-100">Successful Projects</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">100+</div>
                  <div className="text-blue-100">Happy Clients</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">25+</div>
                  <div className="text-blue-100">Team Members</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">10+</div>
                  <div className="text-blue-100">Years of Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Our Mission, Vision & Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6 mx-auto">
                <Target className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 text-center">
                To empower businesses with innovative, scalable, and reliable
                digital solutions that drive growth and transform industries.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6 mx-auto">
                <Lightbulb className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 text-center">
                To be the most trusted technology partner for businesses seeking
                digital transformation and sustainable growth in a rapidly
                evolving world.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6 mx-auto">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
                Our Values
              </h3>
              <p className="text-gray-700 text-center">
                Innovation, Integrity, Collaboration, and Customer-Centricity
                drive every decision we make and every solution we deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Team</h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl">
            Our strength lies in our diverse, talented team of developers,
            designers, and strategists. We believe in fostering a culture of
            continuous learning, innovation, and collaboration where everyone
            can thrive.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "Expert Developers", icon: "💻" },
              { label: "Creative Designers", icon: "🎨" },
              { label: "Strategic Thinkers", icon: "🧠" },
              { label: "Customer Advocates", icon: "❤️" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <p className="text-gray-900 font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Want to Learn More?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get in touch with our team to discuss how we can help your business.
          </p>
          <button className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors">
            Contact Us Today
          </button>
        </div>
      </section>
    </Layout>
  );
}

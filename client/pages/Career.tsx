import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import { Zap, TrendingUp, Shield, Smile, Leaf, Star } from "lucide-react";
import { careerBenefits } from "@shared/data/careers";
import { Link } from "react-router-dom";
export default function Career() {
  const icons = [Zap, TrendingUp, Shield, Smile, Leaf, Star];

  return (
    <Layout>
      <HeroSection title="Career" />

      {/* Career Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Career at Ventechplus Technologies
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore exciting career opportunities with Ventechplus Technologies.
            Join a passionate team of innovators and take your professional
            journey to the next level. We're always looking for driven, skilled,
            and creative individuals to grow with us.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            Why Work With Us?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careerBenefits.map((benefit, index) => {
              const Icon = icons[index % icons.length];
              return (
                <div
                  key={benefit.id}
                  className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6 mx-auto">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 text-center">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Open Positions
          </h2>

          <div className="space-y-6">
            {[
              {
                title: "Senior Full Stack Developer",
                location: "Lubbock, Texus",
                type: "Full-time",
                description:
                  "We're looking for an experienced full stack developer with expertise in React, Node.js, and cloud technologies. You'll work on innovative projects that impact thousands of users.",
              },
              {
                title: "Mobile App Developer",
                location: "Lubbock, Texus",
                type: "Full-time",
                description:
                  "Join our mobile team to develop cutting-edge iOS and Android applications. Experience with React Native or native development is a plus.",
              },
              {
                title: "UI/UX Designer",
                location: "Lubbock, Texus",
                type: "Full-time",
                description:
                  "Create beautiful and intuitive user interfaces for our web and mobile applications. Portfolio showcasing your design work is required.",
              },
            ].map((position, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-col md:flex-row gap-4 text-gray-600 mb-4">
                      <span className="flex items-center gap-2">
                        📍 {position.location}
                      </span>
                      <span className="flex items-center gap-2">
                        🕐 {position.type}
                      </span>
                    </div>
                    <p className="text-gray-700">{position.description}</p>
                  </div>
                    <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full whitespace-nowrap transition-colors">
                      Apply Now
                    </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Program */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Internship Program
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Are you a student or fresh graduate? Our internship program provides
            hands-on experience, mentorship, and a chance to work on real-world
            projects. Get a head start in your tech career!
          </p>
          <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full transition-colors">
            Learn About Internships
          </button>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Culture
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop"
                alt="Ventechplus Team"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Work-Life Balance & Growth
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-gray-700">
                    <strong>Flexible Work Environment:</strong> Choose your work
                    style - office, remote, or hybrid
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-gray-700">
                    <strong>Learning Opportunities:</strong> Continuous training
                    and skill development
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-gray-700">
                    <strong>Competitive Benefits:</strong> Health insurance,
                    paid leave, and more
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-gray-700">
                    <strong>Team Activities:</strong> Regular team outings and
                    celebrations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-gray-700">
                    <strong>Career Growth:</strong> Clear career paths and
                    advancement opportunities
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Send your resume and let's talk about your career with Ventechplus
            Technologies.
          </p>
          <a
            href="mailto:admin@ventechplus.xyz"
            className="inline-block bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors"
          >
            Apply Now
          </a>
        </div>
      </section>
    </Layout>
  );
}

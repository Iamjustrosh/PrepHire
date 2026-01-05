import { services } from "../data/services";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Our Services
        </h1>
        <p className="text-gray-700 text-lg">
          Everything you need to prepare for interviews, group discussions,
          and career growth — powered by AI and expert guidance.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <Link
            key={s.slug}
            to={`/services/${s.slug}`}
            className="group"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-primary h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-full">
                  <span className="text-primary font-bold text-lg">
                    {s.title[0]}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-primary">
                  {s.title}
                </h2>
              </div>

              <p className="text-gray-700 text-sm flex-1">
                {s.description}
              </p>

              <div className="mt-6 flex justify-between items-center">
                <span className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent font-semibold">
                  {s.plan} Plan
                </span>
                <span className="text-sm font-semibold text-primary group-hover:underline">
                  Learn more →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-24 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Not sure which service to choose?
        </h2>
        <p className="text-gray-600 mb-6">
          Explore our plans and pick what suits your career goals best.
        </p>
        <Link
          to="/pricing"
          className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          View Pricing
        </Link>
      </div>
    </div>
  );
}

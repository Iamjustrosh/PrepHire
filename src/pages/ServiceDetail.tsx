import { useParams, Link } from "react-router-dom";
import { services } from "../data/services";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Service Not Found</h2>
        <Link to="/services" className="text-primary font-semibold hover:underline">
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Back */}
      <Link
        to="/services"
        className="text-accent font-medium hover:text-primary transition"
      >
        ← Back to Services
      </Link>

      {/* Hero */}
      <div className="mt-8 mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">
          {service.title}
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl whitespace-pre-line">
          {service.longDescription}
        </p>
      </div>

      {/* Who is this for */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Who is this for?</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>College students preparing for placements</li>
          <li>Fresh graduates attending interviews for the first time</li>
          <li>Working professionals looking to upgrade or switch roles</li>
        </ul>
      </div>

      {/* How it works */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">How it works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Choose your role & level",
            "Attend AI-powered practice sessions",
            "Receive feedback & improve",
          ].map((step, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow border border-gray-100"
            >
              <span className="text-primary font-bold text-xl">
                {i + 1}.
              </span>
              <p className="mt-2 text-gray-700">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Plan & CTA */}
      <div className="bg-primary text-white rounded-2xl p-8 text-center">
        <p className="text-lg mb-2">
          Available in the <strong>{service.plan}</strong> plan
        </p>
        <Link
          to="/pricing"
          className="inline-block mt-4 bg-secondary text-primary px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          View Pricing & Get Started
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;

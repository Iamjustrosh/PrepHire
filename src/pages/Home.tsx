export default function Home() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* HERO SECTION */}
      <div className="mb-24">
        <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
          AI-Powered Interview & <br /> Group Discussion Preparation
        </h1>
        <p className="mt-6 text-lg max-w-2xl text-gray-700">
          PrepHire helps students and professionals across India bridge the gap
          between academic knowledge and industry-ready employability skills
          through intelligent practice, feedback, and guidance.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="/services"
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Explore Services
          </a>
          <a
            href="/pricing"
            className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition"
          >
            View Pricing
          </a>
        </div>
      </div>

      {/* VISION & MISSION */}
      <div className="grid md:grid-cols-2 gap-10 mb-24">
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-3">🎯 Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            To help every job seeker feel confident, prepared, and ready to get
            hired by providing access to high-quality interview and group
            discussion preparation regardless of background or location.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-3">🚀 Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            To make interview and group discussion preparation simple,
            affordable, and effective using technology, AI-driven feedback, and
            practical guidance aligned with real industry expectations.
          </p>
        </div>
      </div>

      {/* WHY PREPHIRE */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-primary mb-10">
          Why Choose PrepHire?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "AI-Powered Feedback",
              desc: "Get intelligent insights on communication, confidence, and technical accuracy after every session.",
            },
            {
              title: "Affordable for All",
              desc: "High-quality preparation starting at just ₹49/month, designed for students and job seekers.",
            },
            {
              title: "End-to-End Preparation",
              desc: "From mock interviews and GDs to CV building and career consultation.",
            },
            {
              title: "Mobile-First Access",
              desc: "Practice anytime, anywhere with a platform built for India’s digital ecosystem.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* WHO IS IT FOR */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold mb-10">Who Is PrepHire For?</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "College Students",
              desc: "Prepare early for placements, GDs, and interviews with structured practice.",
            },
            {
              title: "Fresh Graduates",
              desc: "Improve confidence, communication, and technical interview performance.",
            },
            {
              title: "Working Professionals",
              desc: "Upskill, switch roles, or prepare for better career opportunities.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="bg-primary text-white rounded-2xl p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Start Your Interview Preparation Today
        </h2>
        <p className="max-w-2xl mx-auto mb-6 opacity-90">
          Join PrepHire and take the first step toward confidence, clarity,
          and career success with AI-powered preparation.
        </p>
        <a
          href="/pricing"
          className="inline-block bg-secondary text-primary px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}

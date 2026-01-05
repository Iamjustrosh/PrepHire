const plans = [
  {
    title: "Basic",
    price: "₹49 / month",
    features: [
      "1 Mock Interview per month",
      "AI Feedback & Scorecard",
      "Access to basic questions",
      "Email support",
    ],
    highlight: false,
    button: "Get Started",
  },
  {
    title: "Professional",
    price: "₹99 / month",
    features: [
      "4 Mock Interviews per month",
      "AI & Expert Feedback",
      "Group Discussion practice",
      "Priority email support",
      "Unlock all interview types",
    ],
    highlight: true,
    button: "Most Popular",
  },
  {
    title: "Premium",
    price: "₹299 / 3 months",
    features: [
      "Unlimited Interviews & GDs",
      "Personalized expert sessions",
      "Full analytics & reports",
      "1:1 session scheduling",
      "WhatsApp & email support",
    ],
    highlight: false,
    button: "Upgrade Now",
  },
];

export default function Pricing() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-10 text-center">Pricing Plans</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className={`relative bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center border transition hover:-translate-y-1 hover:shadow-2xl ${
              plan.highlight
                ? "border-primary ring-1 ring-primary scale-105"
                : "border-gray-200"
            }`}
          >
            {plan.highlight && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white rounded-full px-4 py-1 text-xs font-semibold shadow">
                {plan.button}
              </span>
            )}
            <h2 className="text-2xl font-bold mb-2 text-primary">{plan.title}</h2>
            <p className="text-3xl font-extrabold mb-6 text-secondary">{plan.price}</p>
            <ul className="space-y-3 mb-8 text-sm text-gray-700 w-full">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-green-500 font-bold text-lg">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className={`mt-auto px-6 py-2 rounded-lg font-semibold transition text-white shadow ${
                plan.highlight
                  ? "bg-primary hover:bg-primary/90"
                  : "bg-accent hover:bg-accent/90"
              }`}
            >
              {plan.highlight ? "Subscribe" : "Get Started"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

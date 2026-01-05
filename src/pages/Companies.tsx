import { useState } from "react";
import { companies } from "../data/companies";

export default function Companies() {
  const [query, setQuery] = useState("");

  const filtered = companies.filter(
    (c) =>
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.roles.join(" ").toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Company Search</h1>

      <input
        className="w-full p-3 border rounded-lg mb-8"
        placeholder="Search company or role..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="space-y-4">
        {filtered.map((c) => (
          <div key={c.name} className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-semibold text-lg">{c.name}</h2>
            <p>{c.industry}</p>
            <p>Roles: {c.roles.join(", ")}</p>
            <p>Openings: {c.openings}</p>
            <p>Location: {c.location}</p>
            <p>Salary: {c.salary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

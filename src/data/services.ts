export interface Service {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  plan: "Basic" | "Professional" | "Premium";
  category?: string;
}

export const services: Service[] = [
  {
    slug: "mock-interviews",
    title: "Mock Interviews",
    description: "AI-based HR, technical & case interviews",
    longDescription: `
Our AI-powered mock interviews simulate real-world interview scenarios
including HR rounds, technical interviews, and case-based discussions.

Candidates receive intelligent feedback on communication skills, technical
accuracy, confidence level, and problem-solving approach. This helps job
seekers identify gaps, improve performance, and walk into real interviews
with confidence.

Ideal for students, fresh graduates, and working professionals preparing
for company-specific roles.
    `,
    plan: "Professional",
    category: "Interview Preparation",
  },
  {
    slug: "group-discussions",
    title: "Group Discussions",
    description: "AI + peer-based GD practice",
    longDescription: `
PrepHire’s Group Discussion module allows candidates to participate in
structured GD sessions with peers or AI moderators.

Participants are evaluated on leadership, clarity of thought, listening
skills, teamwork, and logical reasoning. AI feedback ensures unbiased and
consistent evaluation.

This service is especially useful for campus placements, MBA admissions,
and competitive hiring processes.
    `,
    plan: "Basic",
    category: "Communication Skills",
  },
  {
    slug: "cv-building",
    title: "CV Preparation",
    description: "Company-specific resume building",
    longDescription: `
Our CV preparation service helps candidates create professional,
ATS-friendly resumes tailored for specific companies and job roles.

We focus on formatting, keyword optimization, project presentation, and
quantifying achievements to improve shortlisting chances.

Candidates also receive guidance on LinkedIn profile optimization and
personal branding.
    `,
    plan: "Professional",
    category: "Career Branding",
  },
  {
    slug: "consultation",
    title: "Career Consultation",
    description: "1-on-1 expert guidance",
    longDescription: `
Personalized 1-on-1 career consultations with industry experts to help
candidates identify the right career path, skill gaps, and growth strategy.

Sessions include career roadmap planning, interview strategy,
role-switch guidance, and long-term professional development advice.

Best suited for professionals seeking clarity, career transitions, or
advanced guidance.
    `,
    plan: "Premium",
    category: "Career Guidance",
  },
];

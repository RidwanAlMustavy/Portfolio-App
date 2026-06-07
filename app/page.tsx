import ContactForm from "./components/ContactForm";
import {
  FolderGit2,
  UserRound,
  Mail,
  ExternalLink,
  Code2,
  Layers,
  Briefcase,
  FileText,
  Download,
  Eye,
  Sparkles,
  Terminal,
  Award,
  GraduationCap,
} from "lucide-react";

// Real Projects from your CV
const PROJECTS = [
  {
    title: "Web Technology Portal",
    description:
      "An advanced, fully responsive web application built with modern architecture, focusing on clean user flows and efficient backend processing.",
    tags: ["React JS", "Node JS", "JavaScript", "HTML/CSS"],
    link: "https://github.com/RidwanAlMustavy",
  },
  {
    title: "Database Architecture System",
    description:
      "A comprehensive relational database solution built to manage complex operational datasets, optimize query speeds, and maintain relational integrity.",
    tags: ["SQL", "Oracle", "MySQL", "Database Management"],
    link: "https://github.com/RidwanAlMustavy",
  },
  {
    title: "Mobile Application Project",
    description:
      "A native mobile app built focusing on streamlined UI performance, seamless navigation systems, and cross-platform scalability metrics.",
    tags: ["Kotlin", "Android Studio", "Mobile Dev"],
    link: "https://github.com/RidwanAlMustavy",
  },
  {
    title: "Software Quality & Testing (SQT)",
    description:
      "A structured project implementing unit testing, system behavior validation pipelines, and comprehensive quality assurance protocols.",
    tags: ["SQT", "Testing Frameworks", "Software Engineering"],
    link: "https://github.com/RidwanAlMustavy",
  },
];

// Real Experience from your CV
const EXPERIENCE = [
  {
    role: "Surveyor and Data Analyst",
    company: "Edison Real Estate",
    period: "April 2025 - June 2025",
    details:
      "Handled data collation, analytical visualization metrics, and system mapping tasks to assist organizational growth and property development frameworks.",
  },
];

// Academic Qualifications from your CV
const EDUCATION = [
  {
    degree: "B.Sc. in Computer Science and Engineering (CSE)",
    institution: "American International University Bangladesh (AIUB)",
    result: "CGPA: 3.68 / 4.00",
    timeline: "Final Semester / Current",
  },
  {
    degree: "Higher Secondary Certificate (H.S.C) - Science",
    institution: "Lions School & College, Rangpur",
    result: "GPA: 5.00 / 5.00",
    timeline: "Class of 2021",
  },
];

// Top Skills chosen from your CV matrix
const TOOLS = [
  "React JS",
  "Node JS",
  "TypeScript",
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C / C++",
  "SQL",
  "PHP",
  "Kotlin",
  "Git / GitHub",
  "Figma",
  "Oracle & MySQL",
  "Android Studio",
  "Linux",
];

// Real Honors and Awards from your CV
const AWARDS = [
  {
    title: "President's Scout Award (2017)",
    giver: "Honorable President of Bangladesh",
    desc: "The highest scouting honor awarded for exemplary leadership, civic duty, and community discipline.",
  },
  {
    title: "Social Development Award (2017)",
    giver: "Ministry of Disaster Management and Relief",
    desc: "Recognized for community service and dynamic impact contributions.",
  },
  {
    title: "Academic Poster Presentation Certificates",
    giver: "AIUB (Spring & Summer 22-23)",
    desc: "Awarded for exceptional technical presentation and system research defense.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-500/30 text-slate-200">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold tracking-tight text-lg text-white flex items-center gap-2">
            <Terminal className="w-5 h-5 text-blue-400" />
            ridwan1
          </span>
          <nav className="flex gap-6 text-sm font-semibold text-slate-300">
            <a href="#about" className="hover:text-blue-400 transition-colors">
              About
            </a>
            <a href="#cv" className="hover:text-blue-400 transition-colors">
              CV
            </a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-blue-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="hover:text-blue-400 transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main Container Area */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-16 space-y-36">
        {/* Hero Section */}
        <section id="about" className="pt-8 md:pt-16 space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/40 border border-blue-800/60 rounded-full text-xs text-blue-400 font-semibold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Final Semester
            CSE Student at AIUB
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Hi, I am{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-300 to-purple-400">
              Md. Ridwan Al Mustavy
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-100 leading-relaxed font-normal antialiased">
            I am an analytical and innovative{" "}
            <strong className="text-white font-semibold">
              Full Stack Engineer
            </strong>{" "}
            based in Dhaka. Proficient across systems development, web
            applications, data mapping, and building interactive client
            environments.
          </p>
          <div className="flex gap-4 pt-2">
            <a
              href="https://github.com/RidwanAlMustavy"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FolderGit2 className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/ridwan-al-mustavy-4021aa290/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <UserRound className="w-6 h-6" />
            </a>
            <a
              href="#contact"
              className="p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </section>

        {/* CV View & Action Grid */}
        <section id="cv" className="scroll-mt-20">
          <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-blue-400 text-xs font-bold uppercase tracking-widest">
                <FileText className="w-4 h-4" />
                <span>Credentials</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Curriculum Vitae
              </h3>
              <p className="text-slate-200 text-sm max-w-md leading-relaxed">
                Review or download my complete background profile covering
                system frameworks, volunteering records, and academic history.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                href="/resume.pdf"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold text-sm border border-slate-700 transition-colors cursor-pointer"
              >
                <Eye className="w-4 h-4" /> View Online
              </a>
              <a
                href="/resume.pdf"
                download="Ridwan_Al_Mustavy_CV.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white rounded-xl font-semibold text-sm shadow-xl shadow-blue-600/20 transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" /> Download CV
              </a>
            </div>
          </div>
        </section>

        {/* Technical Core Tools */}
        <section id="skills" className="space-y-8 scroll-mt-20">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-blue-400 font-bold tracking-widest uppercase text-xs">
              <Layers className="w-4 h-4" />
              <span>Abilities</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Software & Toolkit
            </h2>
          </div>
          <div className="flex flex-wrap gap-2.5 max-w-4xl">
            {TOOLS.map((tool, idx) => (
              <div
                key={idx}
                className="bg-slate-900/80 text-slate-100 px-4 py-2.5 rounded-xl text-sm border border-slate-800 font-semibold shadow-xs hover:border-slate-600 transition-colors"
              >
                {tool}
              </div>
            ))}
          </div>
        </section>

        {/* Projects Architecture Section */}
        <section id="projects" className="space-y-8 scroll-mt-20">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-blue-400 font-bold tracking-widest uppercase text-xs">
              <Code2 className="w-4 h-4" />
              <span>Academic Engineering</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Featured Project Track
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((project, idx) => (
              <div
                key={idx}
                className="group relative bg-slate-900/20 p-6 rounded-2xl border border-slate-900 flex flex-col justify-between hover:bg-slate-900/40 hover:border-slate-800 transition-all duration-300 shadow-xl"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-slate-950 text-blue-400 rounded-lg border border-slate-800">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <h3 className="font-bold text-lg text-white group-hover:text-blue-400 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-200 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] bg-slate-950 text-slate-300 font-semibold px-2.5 py-1 rounded-md border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Tracks Section */}
        <section id="experience" className="space-y-8 scroll-mt-20">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-blue-400 font-bold tracking-widest uppercase text-xs">
              <Briefcase className="w-4 h-4" />
              <span>Industry Work History</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Relevant Experience
            </h2>
          </div>

          <div className="space-y-6 max-w-3xl">
            {EXPERIENCE.map((exp, idx) => (
              <div
                key={idx}
                className="relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-slate-800 last:before:bottom-full"
              >
                <div className="absolute left-[-4px] top-2 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-slate-950" />
                <div className="bg-slate-900/20 border border-slate-900 p-5 rounded-xl space-y-2 hover:border-slate-800 transition-colors shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="font-bold text-white text-lg">{exp.role}</h3>
                    <span className="text-xs font-bold text-blue-400 bg-blue-950/50 px-2.5 py-1 rounded-md border border-blue-900/40 w-max tracking-wide">
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-300">
                    {exp.company}
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-200 pt-1">
                    {exp.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="space-y-8 scroll-mt-20">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-blue-400 font-bold tracking-widest uppercase text-xs">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Paths</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Education Timeline
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {EDUCATION.map((edu, idx) => (
              <div
                key={idx}
                className="bg-slate-900/20 border border-slate-900 p-6 rounded-xl space-y-2 hover:border-slate-800 transition-colors"
              >
                <span className="text-xs font-bold text-indigo-400 bg-indigo-950/40 px-2.5 py-1 rounded-md border border-indigo-900/40">
                  {edu.timeline}
                </span>
                <h3 className="font-bold text-white text-lg pt-2">
                  {edu.degree}
                </h3>
                <p className="text-sm text-slate-300 font-medium">
                  {edu.institution}
                </p>
                <p className="text-sm text-emerald-400 font-bold">
                  {edu.result}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Honors and Distinctions */}
        <section id="awards" className="space-y-8 scroll-mt-20">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-blue-400 font-bold tracking-widest uppercase text-xs">
              <Award className="w-4 h-4" />
              <span>Achievements</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Honors & Distinctions
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {AWARDS.map((award, idx) => (
              <div
                key={idx}
                className="bg-slate-900/10 border border-slate-900/80 p-5 rounded-xl hover:border-slate-800 transition-all"
              >
                <Award className="w-5 h-5 text-amber-400 mb-3" />
                <h3 className="font-bold text-white text-base mb-1">
                  {award.title}
                </h3>
                <span className="text-xs text-blue-400 font-semibold block mb-2">
                  {award.giver}
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {award.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Communications Segment */}
        <section
          id="contact"
          className="space-y-8 scroll-mt-20 border-t border-slate-900 pt-16"
        >
          <div className="text-center space-y-2 max-w-xl mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Initiate Connection
            </h2>
            <p className="text-slate-200 text-sm leading-relaxed">
              Have an opening on your development squad, web technology
              projects, or engineering proposal inquiries? Send a parameter
              message down below.
            </p>
          </div>
          <ContactForm />
        </section>
      </main>

      {/* Footer Interface */}
      <footer className="border-t border-slate-900 py-8 bg-slate-950 text-center text-xs text-slate-500">
        <p>
          © {new Date().getFullYear()} Md. Ridwan Al Mustavy. Executed using
          Next.js & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}

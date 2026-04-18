import { useState } from "react";

const experiences = [
  {
    id: 1,
    company: "BlueStock Trading App",
    role: "Software Development Intern",
    duration: "2 Months",
    year: "2026",
    emoji: "📈",
    tags: ["MongoDB", "React.js", "Express", "Cloudinary"],
    description:
      "Built and maintained scalable web applications using the MERN stack, handling APIs, databases, and responsive UI for a stock-focused trading platform.",
    highlights: [
      "Developed RESTful APIs with Node.js & Express for real-time stock data",
      "Designed responsive dashboards with React and Tailwind CSS",
      "Optimized MongoDB aggregation queries for performance",
    ],
    link: "#",
    sourceCode: "https://github.com/manandubla21/ecommerce-website"
  },
];

export default function WorkExperience() {
  const [activeId, setActiveId] = useState(null);

  return (
    <>
      <style>{`
        
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes pulseGlow {
          0%,100% { box-shadow:0 0 10px #7c3aed44; }
          50%      { box-shadow:0 0 26px #7c3aed88; }
        }
        .afu1 { animation: fadeUp .55s .05s both; }
        .afu2 { animation: fadeUp .55s .20s both; }
        .afu3 { animation: fadeUp .55s .35s both; }
        .logo-pulse { animation: pulseGlow 3s ease-in-out infinite; }

        .slide-panel {
          display: grid;
          grid-template-rows: 0fr;
          opacity: 0;
          transition: grid-template-rows .4s cubic-bezier(.4,0,.2,1), opacity .3s ease;
        }
        .slide-panel.open {
          grid-template-rows: 1fr;
          opacity: 1;
        }
        .slide-inner { overflow: hidden; }
      `}</style>

      <section className="font-outfit min-h-screen flex flex-col items-center px-5 py-20 relative overflow-hidden">


        {/* ── Header ── */}
        <div className="afu1 relative z-10 text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-violet-500" />
            <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-violet-400">
              Career Timeline
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-violet-500" />
          </div>
          <h1 className="font-syne text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-none">
            Work{" "}
            <span className="bg-gradient-to-br from-violet-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h1>
          <p className="mt-4 text-sm font-light text-white/30 tracking-wide">
            Where ideas became production-grade code
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="afu2 relative z-10 w-full max-w-3xl flex flex-col gap-5">
          {experiences.map((exp) => {
            const isOpen = activeId === exp.id;
            return (
              <div
                key={exp.id}
                onClick={() => setActiveId(isOpen ? null : exp.id)}
                className={`group relative cursor-pointer rounded-2xl border p-7 transition-all duration-300
                  ${isOpen
                    ? "border-violet-500/50 bg-violet-950/30 shadow-[0_0_40px_rgba(124,58,237,0.15)]"
                    : "border-white/[0.06] bg-white/[0.025] hover:border-violet-500/30 hover:bg-violet-950/20 hover:shadow-[0_0_24px_rgba(124,58,237,0.08)]"
                  }`}
              >
                {/* shine overlay */}
                <div
                  className={`pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                  style={{ background: "linear-gradient(135deg,rgba(124,58,237,.07) 0%,transparent 55%)" }}
                />

                {/* Top row */}
                <div className="relative flex items-center gap-5">
                  {/* Logo */}
                  <div className={`logo-pulse flex-shrink-0 w-14 h-14 rounded-[14px] flex items-center justify-center text-2xl border bg-gradient-to-br from-[#2d1b69] to-[#140d30] transition-all duration-300
                    ${isOpen ? "border-violet-400/60" : "border-violet-700/40 group-hover:border-violet-500/50"}`}>
                    {exp.emoji}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-syne text-[23px] font-bold text-white tracking-tight truncate">
                      {exp.company}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      <span className="text-violet-300/90 text-[16px]">{exp.role}</span>
                      <span className="w-1 h-1 rounded-full bg-white/15" />
                      <span className="text-[13px] font-medium px-2.5 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300">
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  {/* Year + toggle */}
                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    <span className="font-syne text-s font-semibold text-white/20">{exp.year}</span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center leading-none text-3xl border border-violet-500/25 bg-violet-500/10 text-violet-300 transition-all duration-300
                      ${isOpen ? "rotate-45 bg-violet-500/20 border-violet-400/50" : "group-hover:bg-violet-500/20"}`}>
                      <span className="pb-1">+</span>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="relative flex flex-wrap gap-2 mt-5 pt-5 border-t border-white/[0.05]">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[14px] font-medium px-2.5 py-1 rounded-md border border-white/[0.07] bg-white/[0.03] text-white/40 hover:bg-violet-500/10 hover:border-violet-500/30 hover:text-violet-300 transition-all duration-200 cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Expandable panel */}
                <div className={`slide-panel relative ${isOpen ? "open" : ""}`}>
                  <div className="slide-inner">
                    <div className="pt-5 border-t border-white/[0.05] mt-5">
                      <p className="text-[13.5px] leading-relaxed text-white/45 mb-4">
                        {exp.description}
                      </p>
                      <ul className="flex flex-col gap-2.5 mb-5">
                        {exp.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-3 text-[13px] text-white/50 leading-snug">
                            <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0 shadow-[0_0_6px_#7c3aed]" />
                            {h}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-medium text-violet-300 border border-violet-500/30 bg-violet-500/10 hover:bg-violet-500/25 hover:border-violet-400/60 hover:text-white transition-all duration-200 group/btn mr-5"
                      >
                        View Project
                        <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1"
                          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </a>
                      <a
                        href={exp.sourceCode}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-medium text-violet-300 border border-violet-500/30 bg-violet-500/10 hover:bg-violet-500/25 hover:border-violet-400/60 hover:text-white transition-all duration-200 group/btn"
                      >
                        Source Code
                        <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1"
                          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Stats ── */}
        <div className="afu3 relative z-10 mt-14 flex items-center gap-10">
          {[
            { num: "1+",   label: "Internship"  },
            { num: "2mo",  label: "Experience"  },
            { num: "MERN", label: "Core Stack"  },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-10">
              {i !== 0 && <div className="h-8 w-px bg-white/[0.07]" />}
              <div className="text-center">
                <div className="font-syne text-2xl font-extrabold bg-gradient-to-br from-violet-300 to-indigo-400 bg-clip-text text-transparent">
                  {stat.num}
                </div>
                <div className="text-[10px] uppercase tracking-[0.15em] text-white/20 mt-1">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>
    </>
  );
}
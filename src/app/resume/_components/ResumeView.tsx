import { resume } from '@/content/resume';
import { personal } from '@/content/personal';
import { ResumeActions } from './ResumeActions';
import Image from 'next/image';

export function ResumeView() {
  return (
    <div className="bg-surface print:bg-white border border-border print:border-none rounded-2xl p-6 sm:p-10 print:p-0 shadow-2xl print:shadow-none max-w-5xl mx-auto text-foreground print:text-slate-800">
      <ResumeActions />

      {/* Decorative top accent gradient bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-sky-400 rounded-full mb-6 print:mb-4" />

      {/* Header */}
      <header className="mb-6 print:mb-4 pb-5 print:pb-3.5 border-b border-border/80 print:border-slate-200 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 print:gap-4.5 print:flex-row print:items-center print:text-left">
        {/* Profile Image */}
        <div className="shrink-0 relative w-24 h-24 sm:w-28 sm:h-28 print:w-[86px] print:h-[86px] rounded-full overflow-hidden ring-4 ring-blue-500/20 print:ring-blue-600/30 shadow-md">
          <Image
            src="/images/profile.png"
            alt={personal.name}
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        {/* Text */}
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl print:text-[29px] font-black tracking-tight text-foreground print:text-slate-900 leading-none">
            {personal.name}
          </h1>
          <div className="mt-2.5 flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-primary border border-blue-500/30 print:bg-blue-50 print:text-blue-700 print:border-blue-200 shadow-2xs">
              {resume.headline}
            </span>
            <span className="text-xs sm:text-[13px] print:text-[12px] font-medium text-foreground-muted print:text-slate-600 hidden sm:inline print:inline">
              • React · TypeScript · Python · Full Stack Web Development
            </span>
          </div>
        </div>
      </header>

      {/* 2-Column Main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 print:grid-cols-3 print:gap-6">
        {/* Left Column: Contact, Education, Skills */}
        <div className="md:col-span-1 print:col-span-1 space-y-6 print:space-y-5">
          {/* Contact */}
          <section>
            <div className="flex items-center gap-2 border-b border-border print:border-blue-200 pb-1.5 mb-3 print:mb-2.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-blue-600 shrink-0" />
              <h2 className="text-xs sm:text-[13px] print:text-[12px] font-extrabold uppercase tracking-wider text-foreground print:text-blue-900">
                Contact
              </h2>
            </div>
            <ul className="space-y-3 print:space-y-2 text-xs sm:text-[13px] text-foreground-muted print:text-slate-700">
              <li>
                <a href={`mailto:${personal.email}`} className="hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-6 h-6 rounded-md bg-blue-500/10 text-primary border border-blue-500/20 print:bg-blue-50 print:text-blue-600 print:border-blue-200 flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <span className="text-xs print:text-[11px] font-medium tracking-tight group-hover:underline">{personal.email}</span>
                </a>
              </li>
              <li>
                <a href="https://james-portfolio.vercel.app" className="hover:text-primary transition-colors flex items-center gap-2 group" target="_blank" rel="noopener noreferrer">
                  <span className="w-6 h-6 rounded-md bg-blue-500/10 text-primary border border-blue-500/20 print:bg-blue-50 print:text-blue-600 print:border-blue-200 flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </span>
                  <span className="text-xs print:text-[11.5px] font-medium group-hover:underline">james-portfolio.vercel.app</span>
                </a>
              </li>
              <li>
                <a href={personal.github} className="hover:text-primary transition-colors flex items-center gap-2 group" target="_blank" rel="noopener noreferrer">
                  <span className="w-6 h-6 rounded-md bg-blue-500/10 text-primary border border-blue-500/20 print:bg-blue-50 print:text-blue-600 print:border-blue-200 flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </span>
                  <span className="text-xs print:text-[11.5px] font-medium group-hover:underline">GitHub Profile</span>
                </a>
              </li>
              <li>
                <a href={personal.linkedin} className="hover:text-primary transition-colors flex items-center gap-2 group" target="_blank" rel="noopener noreferrer">
                  <span className="w-6 h-6 rounded-md bg-blue-500/10 text-primary border border-blue-500/20 print:bg-blue-50 print:text-blue-600 print:border-blue-200 flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </span>
                  <span className="text-xs print:text-[11.5px] font-medium group-hover:underline">LinkedIn Profile</span>
                </a>
              </li>
            </ul>
          </section>

          {/* Education */}
          <section>
            <div className="flex items-center gap-2 border-b border-border print:border-blue-200 pb-1.5 mb-3 print:mb-2.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-blue-600 shrink-0" />
              <h2 className="text-xs sm:text-[13px] print:text-[12px] font-extrabold uppercase tracking-wider text-foreground print:text-blue-900">
                Education
              </h2>
            </div>
            <div className="space-y-3.5 print:space-y-3">
              {resume.education.map((edu, idx) => (
                <div key={idx} className="bg-surface-2/40 print:bg-transparent p-2.5 print:p-0 rounded-lg border border-border/50 print:border-none">
                  <h3 className="text-xs sm:text-[13px] print:text-[12.5px] font-bold text-foreground print:text-slate-900 leading-tight">
                    {edu.institution}
                  </h3>
                  <p className="text-xs print:text-[11.5px] text-primary print:text-blue-700 font-semibold mt-1 print:mt-0.5">
                    {edu.degree}
                  </p>
                  <span className="inline-block mt-1 text-[10.5px] font-mono font-semibold px-2 py-0.5 rounded bg-surface-2 text-foreground-muted border border-border/60 print:bg-slate-100 print:text-slate-600 print:border-slate-200">
                    {edu.period}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Skills with Modern UI Pill Tags */}
          <section>
            <div className="flex items-center gap-2 border-b border-border print:border-blue-200 pb-1.5 mb-3 print:mb-2.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-blue-600 shrink-0" />
              <h2 className="text-xs sm:text-[13px] print:text-[12px] font-extrabold uppercase tracking-wider text-foreground print:text-blue-900">
                Technical Skills
              </h2>
            </div>
            <div className="space-y-3 print:space-y-2.5">
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-primary print:text-blue-800 mb-1.5">
                  Languages
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {resume.skills.languages.map((skill) => (
                    <span key={skill} className="px-2.5 py-0.5 rounded text-[11px] font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20 print:bg-blue-50 print:text-blue-800 print:border-blue-200 shadow-2xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-primary print:text-blue-800 mb-1.5">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {resume.skills.frontend.map((skill) => (
                    <span key={skill} className="px-2.5 py-0.5 rounded text-[11px] font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 print:bg-indigo-50 print:text-indigo-800 print:border-indigo-200 shadow-2xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-primary print:text-blue-800 mb-1.5">
                  Backend
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {resume.skills.backend.map((skill) => (
                    <span key={skill} className="px-2.5 py-0.5 rounded text-[11px] font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 print:bg-cyan-50 print:text-cyan-800 print:border-cyan-200 shadow-2xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-primary print:text-blue-800 mb-1.5">
                  Databases
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {resume.skills.databases.map((skill) => (
                    <span key={skill} className="px-2.5 py-0.5 rounded text-[11px] font-medium bg-slate-500/10 text-slate-300 border border-slate-500/20 print:bg-slate-100 print:text-slate-800 print:border-slate-300 shadow-2xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-primary print:text-blue-800 mb-1.5">
                  Tools & DevOps
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {resume.skills.tools.map((skill) => (
                    <span key={skill} className="px-2.5 py-0.5 rounded text-[11px] font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 print:bg-emerald-50 print:text-emerald-800 print:border-emerald-200 shadow-2xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Summary, Selected Projects, Leadership */}
        <div className="md:col-span-2 print:col-span-2 space-y-6 print:space-y-4.5">
          {/* Summary */}
          <section>
            <div className="flex items-center gap-2 border-b border-border print:border-blue-200 pb-1.5 mb-2.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-blue-600 shrink-0" />
              <h2 className="text-xs sm:text-[13px] print:text-[12px] font-extrabold uppercase tracking-wider text-foreground print:text-blue-900">
                Professional Summary
              </h2>
            </div>
            <p className="text-xs sm:text-[13px] print:text-[13px] text-foreground-muted print:text-slate-700 leading-relaxed">
              {resume.summary}
            </p>
          </section>

          {/* Selected Projects */}
          <section>
            <div className="flex items-center gap-2 border-b border-border print:border-blue-200 pb-1.5 mb-3 print:mb-2.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-blue-600 shrink-0" />
              <h2 className="text-xs sm:text-[13px] print:text-[12px] font-extrabold uppercase tracking-wider text-foreground print:text-blue-900">
                Selected Projects
              </h2>
            </div>
            <div className="space-y-4 print:space-y-3.5">
              {resume.projects.map((project) => (
                <div key={project.projectSlug} className="relative pl-3.5 border-l-2 border-blue-500/40 print:border-blue-400">
                  <div className="absolute w-2 h-2 bg-blue-600 rounded-full -left-[5px] top-1.5 ring-2 ring-blue-100" />
                  <div className="flex flex-wrap items-baseline gap-2 mb-1">
                    <h3 className="text-sm sm:text-[15px] print:text-[14.5px] font-extrabold text-foreground print:text-slate-900">
                      {project.projectSlug === 'ai-chat-manager' && 'AI Chat Manager'}
                      {project.projectSlug === 'serbisure' && 'SerbiSure'}
                      {project.projectSlug === 'vibeo' && 'Vibeo'}
                    </h3>
                    <span className="text-xs print:text-[12px] font-bold text-primary print:text-blue-600">
                      {project.projectSlug === 'ai-chat-manager' && '• Sole Developer'}
                      {project.projectSlug === 'serbisure' && '• Backend Developer'}
                      {project.projectSlug === 'vibeo' && '• Backend Developer'}
                    </span>
                    <span className="text-[11.5px] font-medium text-foreground-muted print:text-slate-500">
                      {project.projectSlug === 'ai-chat-manager' && '(React, TypeScript, Tailwind CSS)'}
                      {project.projectSlug === 'serbisure' && '(Python, FastAPI, PostgreSQL, TypeScript)'}
                      {project.projectSlug === 'vibeo' && '(JavaScript, Node.js, Express.js, ML)'}
                    </span>
                  </div>
                  <ul className="list-disc list-outside ml-3.5 space-y-1 print:space-y-1 text-xs sm:text-[13px] print:text-[12.5px] text-foreground-muted print:text-slate-700">
                    {project.bullets.map((bullet, idx) => (
                      <li key={idx} className="pl-0.5 leading-relaxed">{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Leadership & Organization */}
          <section>
            <div className="flex items-center gap-2 border-b border-border print:border-blue-200 pb-1.5 mb-3 print:mb-2.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-blue-600 shrink-0" />
              <h2 className="text-xs sm:text-[13px] print:text-[12px] font-extrabold uppercase tracking-wider text-foreground print:text-blue-900">
                Leadership & Organization
              </h2>
            </div>
            <div className="space-y-4 print:space-y-3">
              {resume.leadership.map((item, idx) => (
                <div key={idx} className="relative pl-3.5 border-l-2 border-blue-500/40 print:border-blue-400">
                  <div className="absolute w-2 h-2 bg-blue-600 rounded-full -left-[5px] top-1.5 ring-2 ring-blue-100" />
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-0.5">
                    <h3 className="text-sm sm:text-[15px] print:text-[14.5px] font-extrabold text-foreground print:text-slate-900">
                      {item.organization}
                    </h3>
                    <span className="text-[10.5px] font-mono font-semibold px-2 py-0.5 rounded bg-blue-500/10 text-primary border border-blue-500/20 print:bg-blue-50 print:text-blue-700 print:border-blue-200 mt-1 sm:mt-0 self-start">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-xs print:text-[12px] font-bold text-primary print:text-blue-600 mb-1">
                    {item.role}
                  </p>
                  <ul className="list-disc list-outside ml-3.5 space-y-1 print:space-y-1 text-xs sm:text-[13px] print:text-[12.5px] text-foreground-muted print:text-slate-700">
                    {item.bullets.map((bullet, i) => (
                      <li key={i} className="pl-0.5 leading-relaxed">{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

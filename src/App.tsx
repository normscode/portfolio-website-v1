import "./App.css";
import ThemeToggle from "./ThemeToggle";
function App() {
  return (
    <>
      <nav className="sticky z-50 dark:bg-zinc-950 dark:text-white border-black/10 dark:border-white/5 border-b top-0 right-0 left-0 backdrop-blur-md gap-x-6 gap-y-6">
        <div className="flex justify-between max-w-5xl mx-auto px-6 h-16 items-center">
          <a href="" className="text-md font-bold">
            NA
          </a>
          <div className="flex gap-6 text-xs dark:text-zinc-400 font-semibold">
            <a href="">Work</a>
            <a href="">Experience</a>
            <a href="">Stack</a>
            <a href="">Contact</a>
            <ThemeToggle></ThemeToggle>
          </div>
        </div>
      </nav>
      {/* Main Content */}
      <main className="pt-32 pb-20 px-6 dark:bg-zinc-950 dark:text-white">
        <div className="max-w-5xl mx-auto">
          <section className="space-y-8">
            <div className="inline-flex text-xs font-medium dark:text-zinc-300 bg-white/5 border-white/10 border rounded-full pt-1 px-2.5 pb-1  gap-x-6 gap-y-6 items-center">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-400"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for new projects
            </div>
            <div>
              <h1 className="md:text-6xl font-medium text-4xl tracking-tight">
                Crafting digital <br /> experiences <br /> with{" "}
                <span className="text-zinc-500">precision & code.</span>
              </h1>
            </div>
            <p className="md:text-xl leading-relaxed text-lg font-light text-zinc-500 max-w-lg">
              I am a frontend engineer obsessed with pixel-perfect design,
              micro-interactions, and scalable architecture.
            </p>
            <div className="flex gap-4 items-center">
              <a
                href=""
                className="px-6 py-2 bg-black text-white dark:bg-white dark:text-black rounded-md"
              >
                View Work
              </a>
              <a
                href=""
                className="border px-6 py-2 inline-flex gap-2 items-center bg-transparent dark:border-white/10 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  data-lucide="github"
                  className="lucide lucide-github w-4 h-4"
                >
                  <path
                    d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                    className=""
                  ></path>
                  <path d="M9 18c-4.51 2-5-2-7-2" className=""></path>
                </svg>
                Github
              </a>
            </div>
          </section>

          {/* Technologies */}
          <section className="pt-[8rem] space-y-4">
            <h1 className="dark:text-zinc-400 font-semibold text-sm">
              TECHNOLOGIES
            </h1>
            {/* React */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 gap-x-4 gap-y-4">
              <div className="group flex gap-3 transition-all cursor-default hover:border-white/10 border-white/5 border rounded-lg pt-3 pr-3 pb-3 pl-3 gap-x-3 gap-y-3 items-center">
                <div className="text-zinc-200 bg-black border-white/10 border rounded pt-1.5 pr-1.5 pb-1.5 pl-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-lucide="code-2"
                    className="lucide lucide-code-2 w-4 h-4"
                  >
                    <path d="m18 16 4-4-4-4"></path>
                    <path d="m6 8-4 4 4 4"></path>
                    <path d="m14.5 4-5 16"></path>
                  </svg>
                </div>
                <span className="text-sm font-medium dark:text-zinc-300">
                  React
                </span>
              </div>

              <div className="flex gap-3 transition-all cursor-default hover:border-white/10 border-white/5 border rounded-lg pt-3 pb-3 px-3 gap-x-3 gap-y-3 items-center">
                <div className="p-1.5 rounded border bg-black border-white/10 text-zinc-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-lucide="box"
                    className="lucide lucide-box w-[16px] h-[16px]"
                    data-icon-replaced="true"
                  >
                    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                    <path d="m3.3 7 8.7 5 8.7-5"></path>
                    <path d="M12 22V12"></path>
                  </svg>
                </div>
                <span className="text-sm font-medium dark:text-zinc-300">
                  Laravel
                </span>
              </div>

              <div className="flex gap-3 transition-all cursor-default hover:border-white/10 border-white/5 border rounded-lg pt-3 pb-3 px-3 gap-x-3 gap-y-3 items-center">
                <div className="p-1.5 rounded border bg-black border-white/10 text-zinc-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-lucide="box"
                    className="lucide lucide-box w-[16px] h-[16px]"
                    data-icon-replaced="true"
                  >
                    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                    <path d="m3.3 7 8.7 5 8.7-5"></path>
                    <path d="M12 22V12"></path>
                  </svg>
                </div>
                <span className="text-sm font-medium dark:text-zinc-300">
                  Tailwind
                </span>
              </div>

              <div className="group flex gap-3 transition-all cursor-default hover:border-white/10 border-white/5 border rounded-lg pt-3 pb-3 px-3 gap-x-3 gap-y-3 items-center">
                <div className="p-1.5 rounded border bg-black border-white/10 text-zinc-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-lucide="box"
                    className="lucide lucide-box w-[16px] h-[16px]"
                    data-icon-replaced="true"
                  >
                    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                    <path d="m3.3 7 8.7 5 8.7-5"></path>
                    <path d="M12 22V12"></path>
                  </svg>
                </div>
                <span className="text-sm font-medium dark:text-zinc-300">
                  Typescript
                </span>
              </div>

              <div className="group flex gap-3 transition-all cursor-default hover:border-white/10 border-white/5 border rounded-lg pt-3 pb-3 px-3 gap-x-3 gap-y-3 items-center">
                <div className="p-1.5 rounded border bg-black border-white/10 text-zinc-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-lucide="box"
                    className="lucide lucide-box w-[16px] h-[16px]"
                    data-icon-replaced="true"
                  >
                    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                    <path d="m3.3 7 8.7 5 8.7-5"></path>
                    <path d="M12 22V12"></path>
                  </svg>
                </div>
                <span className="text-sm font-medium dark:text-zinc-300">
                  Figma
                </span>
              </div>
            </div>
          </section>

          <section className="pt-[8rem]">
            <div className="flex justify-between items-baseline">
              <h2 className="text-2xl font-medium tracking-tight dark:text-zinc-100">
                Selected Work
              </h2>
              <p className="text-xs dark:text-zinc-500 transition-colors hover:text-zinc-300">
                View all archives →
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-x-6 gap-y-6 pt-6">
              {/* Project Card 1 */}
              <div className="group relative rounded-xl border transition-all duration-300 overflow-hidden flex flex-col h-full border-white/5 dark:bg-zinc-900/30 hover:bg-zinc-900/50 hover:border-white/10">
                <div className="aspect-video w-full bg-gradient-to-tr border-b relative overflow-hidden from-zinc-800 to-zinc-900 border-white/5">
                  {/*-- Abstract Project Visual */}
                  <div className="flex group-hover:opacity-40 transition-opacity group-hover:scale-105 duration-500 opacity-30 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
                    <div className="w-32 h-32 border border-zinc-500 rounded-full flex items-center justify-center">
                      <div className="w-20 h-20 border rounded-full border-zinc-400"></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-grow p-6">
                  <div className="flex mb-4 items-start justify-between">
                    <div className="">
                      <h3 className="text-base font-medium tracking-tight dark:text-zinc-100">
                        Finance Dashboard
                      </h3>
                      <p className="text-sm dark:text-zinc-500 mt-1">
                        Real-time data visualization platform.
                      </p>
                    </div>
                    <a
                      href="#"
                      className="p-2 rounded-full transition-colors bg-white/5 hover:bg-white/10 dark:text-zinc-400 hover:text-zinc-100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        data-lucide="arrow-up-right"
                        className="lucide lucide-arrow-up-right w-4 h-4"
                      >
                        <path d="M7 7h10v10" className=""></path>
                        <path d="M7 17 17 7"></path>
                      </svg>
                    </a>
                  </div>
                  <div className="flex gap-2 mt-auto">
                    <span className="px-2 py-1 text-xs rounded border bg-black/5 border-black/5 dark:bg-white/5 dark:text-zinc-400 dark:border-white/5">
                      React
                    </span>
                    <span className="px-2 py-1 text-xs rounded border bg-black/5 border-black/5 dark:bg-white/5 dark:text-zinc-400 dark:border-white/5">
                      D3.js
                    </span>
                  </div>
                </div>
              </div>

              <div className="group relative rounded-xl border transition-all duration-300 overflow-hidden flex flex-col h-full border-white/5 dark:bg-zinc-900/30 hover:bg-zinc-900/50 hover:border-white/10">
                <div className="aspect-video w-full bg-gradient-to-tr border-b relative overflow-hidden from-zinc-800 to-zinc-900 border-white/5">
                  {/*-- Abstract Project Visual */}
                  <div className="flex group-hover:opacity-40 transition-opacity group-hover:scale-105 duration-500 opacity-30 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
                    <div className="w-32 h-32 border border-zinc-500 rounded-full flex items-center justify-center">
                      <div className="w-20 h-20 border rounded-full border-zinc-400"></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-grow p-6">
                  <div className="flex mb-4 items-start justify-between">
                    <div className="">
                      <h3 className="text-base font-medium tracking-tight dark:text-zinc-100">
                        Finance Dashboard
                      </h3>
                      <p className="text-sm dark:text-zinc-500 mt-1">
                        Real-time data visualization platform.
                      </p>
                    </div>
                    <a
                      href="#"
                      className="p-2 rounded-full transition-colors bg-white/5 hover:bg-white/10 dark:text-zinc-400 hover:text-zinc-100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        data-lucide="arrow-up-right"
                        className="lucide lucide-arrow-up-right w-4 h-4"
                      >
                        <path d="M7 7h10v10" className=""></path>
                        <path d="M7 17 17 7"></path>
                      </svg>
                    </a>
                  </div>
                  <div className="flex gap-2 mt-auto">
                    <span className="px-2 py-1 text-xs rounded border bg-black/5 border-black/5 dark:bg-white/5 dark:text-zinc-400 dark:border-white/5">
                      React
                    </span>
                    <span className="px-2 py-1 text-xs rounded border bg-black/5 border-black/5 dark:bg-white/5 dark:text-zinc-400 dark:border-white/5">
                      D3.js
                    </span>
                  </div>
                </div>
              </div>

              <div className="group relative rounded-xl border transition-all duration-300 overflow-hidden flex flex-col h-full border-white/5 dark:bg-zinc-900/30 hover:bg-zinc-900/50 hover:border-white/10">
                <div className="aspect-video w-full bg-gradient-to-tr border-b relative overflow-hidden from-zinc-800 to-zinc-900 border-white/5">
                  {/*-- Abstract Project Visual */}
                  <div className="flex group-hover:opacity-40 transition-opacity group-hover:scale-105 duration-500 opacity-30 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
                    <div className="w-32 h-32 border border-zinc-500 rounded-full flex items-center justify-center">
                      <div className="w-20 h-20 border rounded-full border-zinc-400"></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-grow p-6">
                  <div className="flex mb-4 items-start justify-between">
                    <div className="">
                      <h3 className="text-base font-medium tracking-tight dark:text-zinc-100">
                        Finance Dashboard
                      </h3>
                      <p className="text-sm dark:text-zinc-500 mt-1">
                        Real-time data visualization platform.
                      </p>
                    </div>
                    <a
                      href="#"
                      className="p-2 rounded-full transition-colors bg-white/5 hover:bg-white/10 dark:text-zinc-400 hover:text-zinc-100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        data-lucide="arrow-up-right"
                        className="lucide lucide-arrow-up-right w-4 h-4"
                      >
                        <path d="M7 7h10v10" className=""></path>
                        <path d="M7 17 17 7"></path>
                      </svg>
                    </a>
                  </div>
                  <div className="flex gap-2 mt-auto">
                    <span className="px-2 py-1 text-xs rounded border bg-black/5 border-black/5 dark:bg-white/5 dark:text-zinc-400 dark:border-white/5">
                      React
                    </span>
                    <span className="px-2 py-1 text-xs rounded border bg-black/5 border-black/5 dark:bg-white/5 dark:text-zinc-400 dark:border-white/5">
                      D3.js
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-[8rem]">
            <h2 className="text-2xl font-medium tracking-tight dark:text-zinc-100">
              Experience
            </h2>
            <div>
              <div className="group flex flex-col md:flex-row gap-4 md:gap-10 dark:border-white/5 border-b pb-8 relative gap-x-4 gap-y-4 pt-6">
                <div className="md:w-40 flex-shrink-0 flex mt-1 items-start">
                  <span className="text-xs font-medium dark:text-zinc-500 font-mono">
                    2025 - present
                  </span>
                </div>
                <div className="flex-grow space-y-2">
                  <h2 className="text-sm font-medium dark:text-zinc-300">
                    Freelance
                  </h2>
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-medium dark:text-zinc-100 group-hover:text-emerald-400 transition-colors">
                      Flutter Developer
                    </h3>
                    <a
                      href="#"
                      className="text-zinc-600 hover:text-zinc-300 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        data-lucide="arrow-up-right"
                        className="lucide lucide-arrow-up-right w-4 h-4"
                      >
                        <path d="M7 7h10v10"></path>
                        <path d="M7 17 17 7"></path>
                      </svg>
                    </a>
                  </div>
                  <p className="text-sm text-zinc-500 leading-relaxed max-w-2xl">
                    Developed a Flutter and Firebase-based mobile application
                    designed to digitize the school’s On-the-Job Training
                    process. It features secure face recognition for attendance,
                    task management for supervisors, attendance review, intern
                    progress tracking, and company/section management—all built
                    to centralize and streamline OJT operations for interns,
                    supervisors, and advisers.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-2 py-0.5 text-[10px] font-medium rounded-full border bg-white/5 border-black/10 dark:border-white/10 dark:text-zinc-400">
                      Flutter & Dart
                    </span>
                    <span className="px-2 py-0.5 text-[10px] font-medium rounded-full border bg-white/5 border-black/10 dark:border-white/10 dark:text-zinc-400">
                      Firebase
                    </span>
                    <span className="px-2 py-0.5 text-[10px] font-medium rounded-full border bg-white/5 border-black/10 dark:border-white/10 dark:text-zinc-400">
                      Face Recognition
                    </span>
                  </div>
                </div>
              </div>

              <div className="group flex flex-col md:flex-row gap-4 md:gap-10 border-white/5 border-b pb-8 relative gap-x-4 gap-y-4 pt-6">
                <div className="md:w-40 flex-shrink-0 flex mt-1 items-start">
                  <span className="text-xs font-medium dark:text-zinc-500 font-mono">
                    2024 - 2025
                  </span>
                </div>
                <div className="flex-grow space-y-2">
                  <h2 className="text-sm font-medium dark:text-zinc-300">
                    Golden Arrow Digital Solution Inc.
                  </h2>
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-medium dark:text-zinc-100 group-hover:text-emerald-400 transition-colors">
                      Backend Developer
                    </h3>
                    <a
                      href="#"
                      className="text-zinc-600 hover:text-zinc-300 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        data-lucide="arrow-up-right"
                        className="lucide lucide-arrow-up-right w-4 h-4"
                      >
                        <path d="M7 7h10v10"></path>
                        <path d="M7 17 17 7"></path>
                      </svg>
                    </a>
                  </div>
                  <p className="text-sm text-zinc-500 leading-relaxed max-w-2xl">
                    Backend Programmer role, focusing on API development,
                    backend logic, feature testing, and system migration.
                    Contributed to the successful migration of legacy systems,
                    improving backend performance and stability.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-2 py-0.5 text-[10px] font-medium rounded-full border bg-white/5 border-black/10 dark:border-white/10 dark:text-zinc-400">
                      Laravel
                    </span>
                    <span className="px-2 py-0.5 text-[10px] font-medium rounded-full border bg-white/5 border-black/10 dark:border-white/10 dark:text-zinc-400">
                      PHP
                    </span>
                    <span className="px-2 py-0.5 text-[10px] font-medium rounded-full border bg-white/5 border-black/10 dark:border-white/10 dark:text-zinc-400">
                      POSTGRE SQL
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 border-black/5 border-t pt-[8rem] gap-x-12 gap-y-12 border-t dark:border-white/5">
            <div className="space-y-4">
              <h2 className="text-2xl font-medium tracking-tight dark:text-zinc-100">
                Let's collaborate
              </h2>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Currently looking for a new role as a Junior Frontend Engineer.
                Whether you have a question or just want to say hi, I'll try my
                best to get back to you!
              </p>
              <div className="flex items-center gap-3 text-sm text-zinc-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  data-lucide="mail"
                  className="lucide lucide-mail w-4 h-4 text-zinc-500"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                </svg>
                azares.norman.ccs@gmail.com
              </div>

              <div className="flex items-center gap-3 text-sm text-zinc-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  data-lucide="map-pin"
                  className="lucide lucide-map-pin w-4 h-4 text-zinc-500"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Masbate City, PH (Remote)
              </div>
            </div>

            <form className="dark:bg-zinc-900/20 border-black/5 dark:border-white/5 border rounded-xl p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-500 ml-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded-lg px-3 py-2.5 text-sm placeholder-zinc-700 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all border-black/10 dark:bg-zinc-950 dark:border-white/10 dark:text-zinc-200"
                    placeholder="Jane Doe"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-500 ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border rounded-lg px-3 py-2.5 text-sm placeholder-zinc-700 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all border-black/10 dark:bg-zinc-950 dark:border-white/10 dark:text-zinc-200"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-zinc-500 ml-1">
                  Message
                </label>
                <textarea
                  className="w-full border rounded-lg px-3 py-2.5 text-sm placeholder-zinc-700 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all border-black/10 dark:bg-zinc-950 dark:border-white/10 dark:text-zinc-200 min-h-[120px] resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              {/* Custom Checkbox */}
              <div className="flex items-start gap-3 pt-2">
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    className="peer h-4 w-4 cursor-pointer appearance-none rounded border checked:bg-zinc-100 checked:border-zinc-100 transition-all dark:border-zinc-700 dark:bg-zinc-950"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 opacity-0 peer-checked:opacity-100 pointer-events-none text-black"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <label
                  htmlFor="terms"
                  className="text-xs text-zinc-500 select-none cursor-pointer leading-tight"
                >
                  I consent to having my information submitted so you can
                  respond to my inquiry.
                </label>
              </div>

              <button className="w-full mt-2 font-medium text-sm py-2.5 rounded-lg transition-colors bg-black dark:bg-zinc-100 text-white dark:text-zinc-950 hover:bg-black/10 hover:text-black hover:dark:bg-zinc-200">
                Send Message
              </button>
            </form>
          </section>
        </div>
      </main>
      <footer className="py-12 dark:bg-zinc-950 dark:text-white border-white/5 border-t">
        <div className="flex flex-col md:flex-row gap-6 max-w-5xl mr-auto ml-auto pr-6 pl-6 gap-x-6 gap-y-6 items-center justify-between">
          <div className="flex gap-2 font-medium dark:text-zinc-100 tracking-tight gap-x-2 gap-y-2 items-center">
            NA
            <span className="font-light text-zinc-600 mr-2 ml-2">/</span>
            <span className="text-xs dark:text-zinc-500 font-normal">
              © 2025 Norms Dev
            </span>
          </div>

          <div className="flex gap-6">
            <a
              href="https://instagram.com/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 transition-colors hover:text-zinc-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="instagram"
                className="lucide lucide-instagram w-4 h-4"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            <a
              href="#"
              className="text-zinc-500 transition-colors hover:text-zinc-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="linkedin"
                className="lucide lucide-linkedin w-4 h-4"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a
              href="#"
              className="text-zinc-500 transition-colors hover:text-zinc-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-lucide="github"
                className="lucide lucide-github w-4 h-4"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;

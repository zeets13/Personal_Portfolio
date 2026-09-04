import React from "react";

const testGroups = [
  { name: "Homepage smoke tests", count: 6 },
  { name: "Main navigation", count: 10 },
  { name: "About section", count: 6 },
  { name: "Skills section", count: 5 },
  { name: "Projects", count: 9 },
  { name: "External links", count: 6 },
  { name: "Responsive layout", count: 8 },
];

const totalTests = testGroups.reduce(
  (total, group) => total + group.count,
  0
);

const QaLab = () => {
  return (
    <section
      id="qa-lab"
      className="bg-ink px-6 py-24 text-white md:px-12 lg:px-20"
    >
      {/* ================= HEADER ================= */}
      <div className="mx-auto max-w-6xl">

       

        {/* Main heading */}
        <h2 className="max-w-4xl text-xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          This portfolio can test itself.
        </h2>

        <p className="mt-8 max-w-2xl text-md leading-6 text-grey-200">
          A Playwright suite built to validate your experience on my portfolio.
        </p>
      </div>

      {/* ================= QA PANEL ================= */}
      <div className="mx-auto mt-12 max-w-6xl overflow-hidden rounded-2xl bg-[#f8f8f7] text-slate-900 shadow-2xl">

        {/* ================= TOP AREA ================= */}
        <div className="flex flex-col justify-between gap-10 border-b border-slate-200 p-7 md:flex-row md:items-center md:p-8">

          {/* Description */}
          <div className="flex-1">

            <p className="text-[15px] font-bold tracking-[0.15em] text-[#717286]">
              PLAYWRIGHT AUTOMATION
            </p>

            <p className="mt-12 max-w-xl text-md leading-6 text-slate-500">
              Explore the test suite behind this portfolio, from navigation and
              case studies to interactions and responsive behaviour.
            </p>

          </div>

          {/* ================= STATS ================= */}
          <div className="flex w-full max-w-md border border-slate-200 md:w-auto">

            {/* Tests */}
            <div className="flex min-w-[100px] flex-1 flex-col items-center justify-center border-r border-slate-200 px-5 py-6">
              <span className="text-3xl font-semibold text-cyan-600">
                {totalTests}
              </span>

              <span className="mt-1 text-[10px] font-medium tracking-widest text-slate-500">
                TESTS
              </span>
            </div>

            {/* Browsers */}
            <div className="flex min-w-[100px] flex-1 flex-col items-center justify-center border-r border-slate-200 px-5 py-6">
              <span className="text-3xl font-semibold text-cyan-600">
                2
              </span>

              <span className="mt-1 text-[10px] font-medium tracking-widest text-slate-500">
                BROWSERS
              </span>
            </div>

            {/* Passing */}
            <div className="flex min-w-[100px] flex-1 flex-col items-center justify-center px-5 py-6">
              <span className="text-3xl font-semibold text-cyan-600">
                100%
              </span>

              <span className="mt-1 text-[10px] font-medium tracking-widest text-slate-500">
                PASS
              </span>
            </div>

          </div>
        </div>

        {/* ================= BODY ================= */}
        <div className="grid md:grid-cols-[42%_58%]">

          {/* ================= TEST LIST ================= */}
          <div className="bg-[#f8f8f7] p-4">

            {testGroups.map((group) => (
              <div
                key={group.name}
                className="flex items-center gap-3 border-b border-slate-200 px-3 py-4 last:border-b-0"
              >

                

                {/* Name */}
                <span className="flex-1 text-sm font-medium text-slate-800">
                  {group.name}
                </span>

                {/* Count */}
                <span className="text-[12px] text-slate-600">
                  {String(group.count).padStart(2, "0")} tests
                </span>

                {/* Arrow */}
                <span className="text-md text-cyan-600">
                  ⌄
                </span>

              </div>
            ))}

          </div>

          {/* ================= PLAYWRIGHT RUNNER ================= */}
          <div className="flex min-h-[320px] flex-col bg-[#0d1717] text-slate-300">

            {/* Runner header */}
            <div className="flex items-center justify-between border-b border-[#263535] px-5 py-3">

              <span className="text-[11px] font-bold tracking-wider text-slate-300">
                
                PLAYWRIGHT RUNNER
              </span>

              <span className="text-[10px] text-slate-400">
                Chromium  · Mobile Safari
              </span>

            </div>

            {/* Terminal */}
            <div className="flex-1 px-7 py-8 font-mono text-[13px] leading-6">

              <p className="text-blue-400">
                &gt; Waiting for test run...
              </p>

              <p className="mt-3 text-slate-300">
                The live runner will execute the real Playwright suite here.
              </p>

              <p className="text-slate-300">
                Watch test steps and browser activity in real time.
              </p>

            </div>

            {/* Runner footer */}
            <div className="flex flex-col gap-3 border-t border-[#263535] px-5 py-3 sm:flex-row sm:items-center">

              <button
                type="button"
                className="rounded-full bg-[#5E88C3] px-5 py-2 text-[11px] font-bold tracking-wide 
                text-[#0d1717] transition hover:bg-[#80A0CB]"
              >
                RUN TESTS
              </button>


            </div>
          </div>

        </div>

        <div className="flex w-full border-t border-slate-200 
        px-5 py-4 text-[13px] sm:flex-row sm:items-center sm:justify-end">
      <a
        href="https://github.com/zeets13/Personal_portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-[#39639F] transition hover:text-[#62A3FF]"
      >
        View Playwright suite on GitHub
      </a>
    </div>

      </div>
    </section>
  );
};

export default QaLab;
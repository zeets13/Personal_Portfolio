
import React, { useState } from "react";
const testGroups = [
  { name: "Homepage smoke tests", count: 6 },
  { name: "Main navigation", count: 10 },
  { name: "Contact section", count: 6 },
  { name: "Skills section", count: 5 },
  { name: "Projects", count: 9 },
  { name: "External links", count: 6 },
  { name: "Responsive layout", count: 8 },
];

{/*const totalTests = testGroups.reduce(
  (total, group) => total + group.count,
  
);*/}

const QaLab = () => {
const [logs, setLogs] = useState([
  "Waiting for test run...",
]);
const [isRunning, setIsRunning] = useState(false);
const addLog = (message) => {
  setLogs((previousLogs) => [...previousLogs, message]);
};
const handleRunTests = async () => {
  try {
    setIsRunning(true);

    setLogs([]);

    addLog("QA suite triggered successfully");

    await new Promise((resolve) => setTimeout(resolve, 1000));

    addLog("Waiting for GitHub runner...");

    const response = await fetch("/api/run_test", {
      method: "POST",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to start test suite");
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));

    addLog("GitHub Actions workflow started");

    // Wait for GitHub workflow to appear
    await new Promise((resolve) => setTimeout(resolve, 3000));

    let completed = false;
  
    let lastWorkflowStatus = "";

    while (!completed) {
      const statusResponse = await fetch("/api/test_status");

      const statusData = await statusResponse.json();

      if (!statusResponse.ok) {
        throw new Error(
          statusData.message || "Failed to check workflow status"
        );
      }
  // Only add a log when the status changes
  if (statusData.status !== lastWorkflowStatus) {
    
    lastWorkflowStatus = statusData.status;

    if (statusData.status === "queued") {
      addLog("Workflow queued...");
    }

    if (statusData.status === "in_progress") {
      addLog("Github Actions Workflow Running...");
      
    }
  }

  if (statusData.status === "completed") {
    completed = true;

    if (statusData.conclusion === "success") {
      addLog("64/64 tests completed");
      addLog("All tests passed ✓");
    } else {
      addLog("QA suite completed with failures ✗");
    }

    break;
  }

  // Check again after 5 seconds
  await new Promise((resolve) => setTimeout(resolve, 5000));
}

  } catch (error) {
    console.error(error);

    addLog("Failed to start or monitor the QA suite.");
  } finally {
    setIsRunning(false);
  }
};
  return (
    <section
      id="qa-lab"
      className="bg-[#432f2e] px-6 py-24 text-white md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">

        <h2 className="max-w-4xl text-xl font-bold 
        leading-tight tracking-tight sm:text-5xl md:text-6xl">
          This portfolio can test itself.
        </h2>

        <p className="mt-8 max-w-2xl text-md leading-6 text-grey-200">
          A Playwright suite built to validate your experience on my portfolio.
        </p>
      </div>

     
      <div className="mx-auto mt-12 max-w-6xl overflow-hidden
       rounded-2xl bg-[#f4efe7]  text-slate-900 shadow-2xl">

        <div className="flex flex-col justify-between gap-10 c
        border-b border-[#432f2e]  p-7 md:flex-row md:items-center md:p-8">

          <div className="flex-1">

            <p className="text-[15px] font-bold tracking-[0.15em] text-[#717286]">
              PLAYWRIGHT AUTOMATION
            </p>

            <p className="mt-12 max-w-xl text-md leading-6 text-slate-500">
              Explore the test suite behind this portfolio, from navigation and
              case studies to interactions and responsive behaviour.
            </p>

          </div>

          
          <div className="flex w-full max-w-md border border-[#432f2e] md:w-auto">

            {/* Tests */}
            <div className="flex min-w-[100px] flex-1 flex-col items-center justify-center 
             border-r border-[#432f2e] px-5 py-6">
              <span className="text-3xl font-semibold text-[#432f2e]">
                64
              </span>

              <span className="mt-1 text-[10px] font-medium tracking-widest text-slate-500">
                TESTS
              </span>
            </div>

            {/* Browsers */}
            <div className="flex min-w-[100px] flex-1 flex-col items-center justify-center 
            border-r border-[#432f2e] px-5 py-6">
              <span className="text-3xl font-semibold text-[#432f2e]">
                2
              </span>

              <span className="mt-1 text-[10px] font-medium tracking-widest text-slate-500">
                BROWSERS
              </span>
            </div>

            {/* Passing */}
            <div className="flex min-w-[100px] flex-1 flex-col items-center 
            border-r border-[#432f2e] justify-center px-5 py-6">
              <span className="text-3xl font-semibold text-[#432f2e]">
                100%
              </span>

              <span className="mt-1 text-[10px] font-medium tracking-widest text-slate-500">
                PASS
              </span>
            </div>

          </div>
        </div>

        <div className="grid md:grid-cols-[42%_58%]">

          <div className="bg-[#f4efe7]  p-4">

            {testGroups.map((group) => (
              <div
                key={group.name}
                className="flex items-center gap-3 border-b 
                border-[#432f2e] px-3 py-4 last:border-b-0"
              > 

                {/* Name */}
                <span className="flex-1 text-sm font-medium text-slate-800">
                  {group.name}
                </span>

                {/* Count 
                <span className="text-[12px] text-slate-600">
                  {String(group.count).padStart(2, "0")} tests
                </span>

                
                <span className="text-md text-cyan-600">
                  ⌄
                </span>
                */}

              </div>
            ))}

          </div>

          <div className="flex min-h-[320px] flex-col bg-black/90 text-slate-300">

            {/* Runner header */}
            <div className="flex items-center justify-between border-b border-[#263535] px-5 py-3">

              <span className="text-[11px] font-bold tracking-wider text-slate-300">
                
                PLAYWRIGHT RUNNER
              </span>

              <span className="text-[10px] text-slate-400">
                Desktop Chrome  · Mobile Safari
              </span>

            </div>

            {/* Terminal */}
          <div className="flex-1 overflow-y-auto px-7 py-8 font-mono 
          text-[13px] leading-7">

            {logs.map((log, index) => (
              <p
                key={index}
                className={
                  log.includes("passed")
                    ? "text-green-400"
                    : log.includes("fail")
                    ? "text-red-400"
                    : "text-[#f4efe7]"
                }
              >
                &gt; {log}
              </p>
            ))}

          </div>

            {/* Runner footer */}
            <div className="flex flex-col gap-3 border-t
             border-[#263535] px-5 py-3 sm:flex-row sm:items-center">

              <button
              type="button"
              onClick={handleRunTests}
              disabled={isRunning}
              className="rounded-full bg-[#feefb8] px-5 py-2 
              text-[10px] font-bold text-[#432f2e]   
              cursor-pointer transition hover:bg-[#432f2e] hover:text-[#feefb8] 
              "
            >
              {isRunning ? "STARTING..." : "RUN QA SUITE"}
            </button>

            </div>
          </div>

        </div>

        <div className="flex w-full border-t border-[#432f2e]
        px-5 py-4 text-[13px] sm:flex-row sm:items-center sm:justify-end">
      <a
        href="https://github.com/zeets13/Personal_portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-[#432f2e] transition "
      >
        View Playwright suite on GitHub
      </a>
    </div>

      </div>
    </section>
  );
};

export default QaLab;
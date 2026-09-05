import { useEffect, useState } from "react";
import { ArrowUpRight, Download, CheckCircle2 } from "lucide-react";

const FULL_NAME = "Hi, I'm Jarifa!";

const CODE_LINES = [
  "test('Jarifa.build', () => {",
  "  test('makes clean UIs', ...)",
  "  test('writes solid tests', ...)",
  "  test('solves real problems', ...)",
  "})",
];

export default function Hero() {
  const [typedText, setTypedText] = useState("");

  // Only animation: typing effect
  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      index++;

      setTypedText(FULL_NAME.slice(0, index));

      if (index === FULL_NAME.length) {
        clearInterval(typing);
      }
    }, 70);

    return () => clearInterval(typing);
  }, []);

  return (
    <section
      className="flex min-h-screen w-full items-center bg-[#F2EFE7] px-6 sm:px-10 pt-10"
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >
      <div
        className="
          mx-auto grid w-full max-w-6xl
          grid-cols-1 items-center
          gap-14 py-20
          lg:grid-cols-[1.05fr_0.95fr]
          lg:gap-16
        "
      >

        <div className="order-2 text-left lg:order-1">

          {/* Badge */}
            <span className=" text-sm " >
            Quality Assurance Engineer | Frontend Developer
            </span>
         


          {/* Heading */}
          <h1
            className="
              mt-7
              min-h-[1.1em]
              text-5xl
              font-extrabold
              tracking-tight
              sm:text-6xl
              lg:text-7xl
            "
            style={{
              fontFamily: "'Sora', sans-serif",
              color: "#432f2e",
            }}
          >
            {typedText}

            {/* Typing cursor */}
            {typedText.length < FULL_NAME.length && (
              <span className="jt-cursor align-middle" />
            )}
          </h1>


          {/* Description */}
          <div>
            <p className="mt-4 font-semibold max-w-md text-lg  text-[#6b5d52]">
             Breaking down applications, so users dont have to.
            </p>


            {/* Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/jarifa-tasnim"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group inline-flex items-center gap-2
                  rounded-full
                  border-2 border-[#432f2e]
                  bg-[#432f2e]
                  px-6 py-2.5
                  text-sm font-semibold
                  text-[#feefb8]
                "
              >
                linkedin.com/in/jarifa-tasnim

                <ArrowUpRight className="h-4 w-4" />
              </a>


              {/* Resume */}
              <a
                href="/Jarifa_Tasnim_CV.pdf"
                download
                className="
                  inline-flex items-center gap-2
                  rounded-full
                  border-2 border-[#432f2e]/30
                  px-6 py-2.5
                  text-sm font-semibold
                  text-[#432f2e]
                "
              >
                Get my resume

                <Download className="h-4 w-4" />
              </a>

            </div>
          </div>
        </div>


        {/* ================= RIGHT SIDE ================= */}

        <div
          className="
            relative order-1 mx-auto
            w-full max-w-sm
            lg:order-2 lg:mx-0
            lg:max-w-none
          "
        >

          {/* Background card */}
          <div
            className="
              absolute inset-0
              translate-x-4 translate-y-4
              rounded-2xl
              bg-[#feefb8]
            "
            style={{
              transform: "rotate(4deg)",
            }}
          />


          {/* Code card */}
          <div
            className="
              relative
              rounded-2xl
              bg-[#432f2e]
              px-6 py-6
            "
            style={{
              transform: "rotate(-2deg)",
            }}
          >

            {/* Window header */}
            <div className="mb-5 flex items-center gap-1.5">

              <span className="h-2.5 w-2.5 rounded-full bg-[#feefb8]/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#feefb8]/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#feefb8]/40" />

              <span className="ml-3 text-xs text-[#d9c6a3]">
                jarifa.test.js
              </span>

            </div>


            {/* Code */}
            <div className="space-y-2  text-[13px] leading-relaxed">

              {CODE_LINES.map((line, index) => (
                <div
                  key={index}
                  className={
                    index === 0 || index === CODE_LINES.length - 1
                      ? "text-[#d9c6a3]"
                      : "text-[#feefb8]"
                  }
                >
                  {line}
                </div>
              ))}

            </div>


            {/* Test result */}
            <div
              className="
                mt-6 flex items-center gap-2
                rounded-lg
                bg-[rgba(124,140,107,0.18)]
                px-3 py-2
              "
            >
              <CheckCircle2
                className="h-4 w-4 flex-shrink-0 text-[#9fb385]"
              />

              <span className="text-xs font-medium text-[#c7d4b8]">
                3 tests passed, 0 failed
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
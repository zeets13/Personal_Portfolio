import { useEffect, useState } from "react";
import { ArrowUpRight, Download } from "lucide-react";

const FULL_NAME = "Hi, I'm Jarifa!";

export default function Hero() {
  const [typedText, setTypedText] = useState("");

  // Typing animation
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
      className="
        relative
        flex
        min-h-screen
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-[#F2EFE7]
        px-6
        py-20
        sm:px-10
      "
      style={{
        fontFamily: "'Manrope', sans-serif",
      }}
    >
      {/* Decorative butterfly */}
      <div
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-[12%]
          z-10
          hidden
          lg:block
        "
      >
        {/* Flight path */}
        <svg
          width="360"
          height="180"
          viewBox="0 0 360 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -right-56 top-10"
        >
          <path
            d="
              M 10 85
              C 70 135, 95 20, 145 65
              C 190 110, 215 130, 265 85
              C 300 55, 330 45, 355 50
            "
            stroke="#432f2e"
            strokeWidth="1.5"
            strokeDasharray="5 7"
            strokeLinecap="round"
            opacity="0.8"
          />
        </svg>

        {/* Butterfly */}
        <svg
          width="150"
          height="130"
          viewBox="0 0 150 130"
          xmlns="http://www.w3.org/2000/svg"
          className="relative"
        >
          {/* Left upper wing */}
          <path
            d="
              M74 59
              C57 36 32 17 12 24
              C-3 30 3 54 19 66
              C36 79 57 75 73 66
              Z
            "
            fill="#F4A51C"
            stroke="#432f2e"
            strokeWidth="3"
          />

          {/* Right upper wing */}
          <path
            d="
              M76 59
              C91 34 111 8 129 13
              C144 18 143 43 133 59
              C122 77 99 78 77 66
              Z
            "
            fill="#F4A51C"
            stroke="#432f2e"
            strokeWidth="3"
          />

          {/* Left lower wing */}
          <path
            d="
              M72 66
              C54 69 36 78 35 96
              C34 112 52 116 65 105
              C74 97 77 83 76 69
              Z
            "
            fill="#F4A51C"
            stroke="#432f2e"
            strokeWidth="3"
          />

          {/* Right lower wing */}
          <path
            d="
              M78 66
              C94 72 113 78 116 94
              C119 109 103 116 91 107
              C80 99 76 83 77 69
              Z
            "
            fill="#F4A51C"
            stroke="#432f2e"
            strokeWidth="3"
          />

          {/* Black wing patterns */}
          <g
            fill="none"
            stroke="#432f2e"
            strokeWidth="3"
            strokeLinecap="round"
          >
            <path d="M15 32 C30 38 43 48 60 58" />
            <path d="M12 43 C28 48 42 56 58 62" />
            <path d="M25 27 C37 34 48 42 58 53" />

            <path d="M135 25 C120 32 105 45 90 57" />
            <path d="M138 39 C122 43 107 53 92 61" />
            <path d="M126 21 C113 29 103 39 94 51" />

            <path d="M43 86 C51 82 60 78 69 72" />
            <path d="M108 87 C98 82 89 78 81 72" />
          </g>

          {/* White wing spots */}
          <g fill="#F2EFE7">
            <circle cx="23" cy="36" r="3" />
            <circle cx="31" cy="42" r="2.5" />
            <circle cx="40" cy="47" r="2.5" />
            <circle cx="51" cy="53" r="2" />

            <circle cx="127" cy="28" r="3" />
            <circle cx="118" cy="35" r="2.5" />
            <circle cx="109" cy="43" r="2.5" />
            <circle cx="100" cy="51" r="2" />
          </g>

          {/* Body */}
          <ellipse
            cx="75"
            cy="67"
            rx="5"
            ry="28"
            fill="#432f2e"
          />

          {/* Antennae */}
          <path
            d="M73 42 C67 28 61 24 55 21"
            stroke="#432f2e"
            strokeWidth="2"
            fill="none"
          />

          <path
            d="M77 42 C83 28 89 24 95 21"
            stroke="#432f2e"
            strokeWidth="2"
            fill="none"
          />

          <circle cx="55" cy="21" r="2" fill="#432f2e" />
          <circle cx="95" cy="21" r="2" fill="#432f2e" />
        </svg>
      </div>

      {/* Main content */}
      <div
        className="
          relative
          z-20
          mx-auto
          flex
          w-full
          max-w-5xl
          flex-col
          items-center
          justify-center
          text-center
        "
      >
        {/* Badge */}
        <span
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-[#432f2e]/40
            px-5
            py-2
            text-sm
            font-medium
            text-[#432f2e]
            sm:text-base
          "
        >
          Aspiring QA Engineer | Frontend Developer
        </span>

        {/* Heading */}
        <h1
          className="
            mt-8
            min-h-[1.15em]
            text-5xl
            font-extrabold
            tracking-tight
            text-[#432f2e]
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
          "
          style={{
            fontFamily: "'Sora', sans-serif",
          }}
        >
          {typedText}

          {/* Typing cursor */}
          {typedText.length < FULL_NAME.length && (
            <span className="jt-cursor ml-1 inline-block align-middle" />
          )}
        </h1>

        {/* Description */}
        <p
          className="
            mt-5
            max-w-3xl
            text-base
            font-semibold
            leading-relaxed
            text-[#6b5d52]
            sm:text-lg
            md:text-xl
          "
        >
          Breaking down applications, so users dont have to.
        </p>

        {/* Buttons */}
        <div
          className="
            mt-9
            flex
            flex-wrap
            items-center
            justify-center
            gap-4
          "
        >
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/jarifa-tasnim"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              border-2
              border-[#432f2e]
              bg-[#432f2e]
              px-6
              py-3
              text-sm
              font-semibold
              text-[#feefb8]
              transition-all
              duration-200
              hover:-translate-y-1
              hover:shadow-lg
              sm:px-7
            "
          >
            linkedin.com/in/jarifa-tasnim

            <ArrowUpRight
              className="
                h-4
                w-4
                transition-transform
                duration-200
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </a>

          {/* Resume */}
          <a
            href="/Jarifa_Tasnim_CV.pdf"
            download
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border-2
              border-[#432f2e]/30
              bg-transparent
              px-6
              py-3
              text-sm
              font-semibold
              text-[#432f2e]
              transition-all
              duration-200
              hover:-translate-y-1
              hover:border-[#432f2e]
              hover:bg-[#432f2e]/5
              sm:px-7
            "
          >
            Get my resume

            <Download className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

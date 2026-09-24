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

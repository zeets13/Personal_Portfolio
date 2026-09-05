import React, { useState } from "react";
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
} from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function Certifications() {
  const slides = [
    {
      url: "/sqa.jpg",
    },
    {
      url: "/ba.jpg",
    },
    {
      url: "/wie.jpg",
    },
    {
      url: "/3mt.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;

    setCurrentIndex(
      isFirstSlide ? slides.length - 1 : currentIndex - 1
    );
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;

    setCurrentIndex(
      isLastSlide ? 0 : currentIndex + 1
    );
  };

  return (
    <section
      id="certifications"
      className="bg-[#F2EFE7] py-20"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-[#432f2e] sm:text-5xl">
            Certifications
          </h2>
        </div>

        {/* Carousel */}
        <div className="group relative mx-auto h-[500px] w-full max-w-4xl sm:h-[600px]">

          {/* Certificate Image */}
          <div
            style={{
              backgroundImage: `url(${slides[currentIndex].url})`,
            }}
            className="
              h-full
              w-full
              rounded-2xl
              bg-contain
            
              bg-center
              bg-no-repeat
              duration-500
            "
          />

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            aria-label="Previous certificate"
            className="
              absolute
              left-3
              top-1/2
              -translate-y-1/2
              rounded-full
              bg-[#432f2e]/80
              p-3
              text-white
              transition
              hover:bg-[#432f2e]
            "
          >
            <BsChevronCompactLeft size={28} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            aria-label="Next certificate"
            className="
              absolute
              right-3
              top-1/2
              -translate-y-1/2
              rounded-full
              bg-[#432f2e]/80
              p-3
              text-white
              transition
              hover:bg-[#432f2e]
            "
          >
            <BsChevronCompactRight size={28} />
          </button>

        </div>

        {/* Dots */}
        <div className="mt-5 flex justify-center">

          {slides.map((_, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => setCurrentIndex(slideIndex)}
              aria-label={`Go to certificate ${slideIndex + 1}`}
              className={`text-2xl transition ${
                currentIndex === slideIndex
                  ? "text-[#432f2e]"
                  : "text-[#432f2e]/30"
              }`}
            >
              <RxDotFilled />
            </button>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;
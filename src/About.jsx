import { MapPin } from "lucide-react";

export default function About({ about2 }) {
  return (
    <section
      id="about"
      className="bg-[#F2EFE7] py-20"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16 
      grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Image with badges */}
<div className="flex justify-center">
  <div className="relative w-[380px]">

    {/* Main bordered container */}
    <div className="overflow-hidden rounded-[28px] border border-[#432f2e] bg-white">

      {/* Image */}
      <img
        src={about2}
        alt="About Jarifa"
        className="w-full h-[460px] object-cover"
      />

      {/* Profile information */}
      <div className="bg-white px-5 py-4">
        <div className="flex felx-col items-center gap-2">
            <p className="font-bold text-[#432f2e] text-2xl">
          Jarifa Tasnim{" "}
          </p>
          <p className="text-gray-400 text-lg">
            · she/her
          </p>
        </div>
        

        <p className="flex items-center gap-1 text-gray-500 text-md mt-1">
          <MapPin className="w-3.5 h-3.5" />
          Bangladesh
        </p>
      </div>

    </div>

    {/* Floating badges */}
    <div className="absolute -top-5 -right-8 bg-[#feefb8] rounded-full px-8 py-2 shadow-lg">
      <span className="font-semibold text-[#432f2e] text-md">
        Cat Mom
      </span>
    </div>

    <div className="absolute top-[30%] -left-18 bg-[#feefb8] rounded-full px-8 py-2 shadow-lg">
      <span className="font-semibold text-[#432f2e] text-md">
        Bug Hunter
      </span>
    </div>

   

  </div>
</div>

        {/* Text */}
        <div>
          <h2 className="text-5xl font-bold mb-10 text-[#432f2e]">
            About Me
          </h2>

          <p className="leading-7 mb-3 text-md text-gray-800">
           I enjoy building applications 
           that are not only visually appealing but also reliable and user friendly. 
           I look beyond
             how an application looks and focus on how it behaves.
          </p>

          <p className="leading-7 text-md mb-3 text-gray-800">
            In my free time, you'll probably find me crocheting something
            that started as{" "}
            <span className="font-semibold text-ink">
              "just a small project,"
            </span>{" "}
            spoiling my cat or learning a technology just because it looked
            interesting.
          </p>

          <p className="leading-7 text-md mb-3 text-gray-800">
            I like to build things that work well, look great and behave the
            way users expect them to.
          </p>
        </div>

      </div>
      
    </section>
  );
}
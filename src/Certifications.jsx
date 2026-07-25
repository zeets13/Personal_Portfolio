import { FaTrophy, FaCertificate } from "react-icons/fa";

const achievements = [
  {
    title: "Finalist, Case Competition",
    subtitle: "Techathon Nationals & Rover Summit",
    year: "2026",
  },
  {
    title: "Finalist, 3 Minute Thesis",
    subtitle: "Sciblitz 2.0",
    year: "2026",
  },
  {
    title: "Winner, Idea Pitch",
    subtitle: "WIE Day Celebration",
    year: "2024",
  },
];

const certifications = [
  {
    title: "Business Analytics with Power BI",
    subtitle: "Unbolt Academy",
    year: "2026",
  },
  {
    title: "Software Testing & Training Program",
    subtitle: "EDGE Program",
    year: "2025",
  },
];

function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-[#f6fafd]">
      <div className="max-w-6xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center mb-20">
          
          <h2 className="text-5xl font-bold mt-4 text-[#4a7fa7]">
            Milestones & Growth
          </h2>
        
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Achievements */}
          <div>
            <div className="flex items-center gap-5 mb-6">
              <span className="flex items-center text-[#2b558a]">
                <FaTrophy size={25}/>
              </span>
              <h3 className="font-bold text-lg text-gray-800 tracking-wide">
                Achievements
              </h3>
            </div>

            <div className="space-y-5">
              {achievements.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start justify-between gap-4 rounded-2xl bg-[#E8F1F5]/50 px-6 py-5 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">
                      {item.subtitle}
                    </p>
                  </div>

                  <span className="shrink-0 text-xs font-medium text-blue-500 bg-white rounded-full px-3 py-1">
                    {item.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-5 mb-6">
              <span className="flex items-center  text-[#2b558a]">
                <FaCertificate size={25}/>
              </span>
              <h3 className="font-bold text-lg text-gray-800 tracking-wide">
                Certifications
              </h3>
            </div>

            <div className="space-y-5">
              {certifications.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start justify-between gap-4 rounded-2xl bg-[#E8F1F5]/50 px-6 py-5 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">
                      {item.subtitle}
                    </p>
                  </div>

                  <span className="shrink-0 text-xs font-medium text-blue-500 bg-white rounded-full px-3 py-1">
                    {item.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Certifications;
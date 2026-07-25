function SkillCard({ icon, title, description, skills }) {
  return (
    <div className="bg-ivory rounded-2xl p-7 border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
      <div className="flex items-center gap-4 mb-5">
        <div className="w-12 h-12 rounded-xl bg-dust-light flex items-center justify-center group-hover:bg-dust-mid/30 transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-ink">{title}</h3>
      </div>

      <p className="text-ink-muted text-sm leading-7 mb-5">{description}</p>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-dust-light text-dust-dark px-3 py-1 rounded-full text-xs font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;

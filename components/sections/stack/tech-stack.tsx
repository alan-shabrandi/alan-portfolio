const technologies = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Go",
  "PostgreSQL",
  "Docker",
  "AWS",
  "AI Engineering",
];

export function TechStack() {
  return (
    <section className="py-24">
      <div
        className="
        mx-auto
        max-w-7xl
        px-6
        "
      >
        <div className="max-w-2xl">
          <p
            className="
            text-sm
            text-blue-400
            "
          >
            Technology Stack
          </p>

          <h2
            className="
            mt-3
            text-3xl
            font-bold
            text-white
            "
          >
            Tools I build with
          </h2>

          <p
            className="
            mt-4
            text-neutral-400
            "
          >
            A modern engineering stack focused on scalability, reliability and
            performance.
          </p>
        </div>

        <div
          className="
          mt-10
          flex
          flex-wrap
          gap-3
          "
        >
          {technologies.map((tech) => (
            <div
              key={tech}
              className="
              rounded-full
              border
              border-white/10
              bg-white/5
              px-5
              py-2
              text-sm
              text-neutral-300
              transition
              hover:border-blue-400/40
              hover:text-white
              "
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

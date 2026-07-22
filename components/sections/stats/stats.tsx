const stats = [
  {
    value: "8+",
    label: "Years Experience",
  },
  {
    value: "30+",
    label: "Projects Delivered",
  },
  {
    value: "10+",
    label: "Technologies",
  },
  {
    value: "24/7",
    label: "Engineering Mindset",
  },
];

export function Stats() {
  return (
    <section className="border-y border-white/10">
      <div
        className="
        mx-auto
        grid
        max-w-7xl
        grid-cols-2
        gap-6
        px-6
        py-12
        md:grid-cols-4
        "
      >
        {stats.map((item) => (
          <div
            key={item.label}
            className="
            text-center
            "
          >
            <div
              className="
              text-3xl
              font-bold
              text-white
              "
            >
              {item.value}
            </div>

            <div
              className="
              mt-2
              text-sm
              text-neutral-500
              "
            >
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function CommunityMetrics() {
  const metrics = [
    {
      title: "ACTIVE ACCOUNTS",
      metric: "10.2M+",
    },
    {
      title: "PROJECTS",
      metric: "300+",
    },
    {
      title: "TOPICS",
      metric: "1000+",
    },
  ];

  return (
    <div className="flex items-start justify-evenly gap-3 "
    style={{
        backgroundImage: "url('/communitybg.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-6xl">
        Join a community <span className="block">of millions.</span>
      </h2>
      <div>
        {metrics.map((metric) => (
          <div key={metric.title}>
            <h2 className="bg-gradient-to-r from-[#6843EC] to-[#D2FF3A] bg-clip-text text-transparent text-9xl font-semibold">
              {metric.metric}
            </h2>
            <p className="text-[#C4C4C4] text-2xl font-normal">
              {metric.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

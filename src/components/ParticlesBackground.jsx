export const ParticlesBackground = () => {
  return (
    <div
      id="particles-bg"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,color-mix(in_srgb,var(--color-primary)_18%,transparent),transparent_45%),radial-gradient(circle_at_85%_75%,color-mix(in_srgb,var(--color-highlight)_12%,transparent),transparent_50%)]" />

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-primary/20 blur-[120px]" style={{ animation: "slow-drift 22s ease-in-out infinite" }} />
      <div className="absolute top-1/3 -right-32 w-[24rem] h-[24rem] rounded-full bg-highlight/15 blur-[130px]" style={{ animation: "slow-drift 28s ease-in-out infinite reverse" }} />
      <div className="absolute bottom-0 left-1/4 w-[20rem] h-[20rem] rounded-full bg-primary/10 blur-[110px]" style={{ animation: "slow-drift 25s ease-in-out infinite" }} />
    </div>
  );
};

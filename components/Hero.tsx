export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="grid items-center gap-16 md:grid-cols-2">
        {/* Hero Content */}
        <div>
          <p className="mb-5 font-mono text-sm text-accent">
            SOFTWARE ENGINEER
          </p>

          <p className="mb-3 text-base font-medium text-text-secondary">
            I&apos;m Shaik Khadar Ahamad.
          </p>

          <h1 className="text-5xl font-semibold tracking-tight text-text-primary md:text-7xl">
            Backend
            <br />
            Full-Stack
            <br />
            <span className="text-accent">AI</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-text-secondary">
            I build reliable backend systems, full-stack applications,
            and AI-powered solutions.
          </p>

          {/* Availability */}
          <div className="mt-7 flex items-center gap-3">
            <span
              className="h-2.5 w-2.5 rounded-full bg-emerald-400"
              aria-hidden="true"
            />

            <p className="text-sm text-text-secondary">
              <span className="font-medium text-text-primary">
                Open to Work
              </span>

              <span className="mx-2 text-text-muted">·</span>

              Any location in India
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="border border-accent bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              View Work
            </a>

            <a
              href="#contact"
              className="border border-border px-5 py-3 text-sm font-medium text-text-primary transition-colors hover:border-text-secondary"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Engineering Visual */}
        <div className="hidden md:block">
          <div className="border border-border bg-surface p-6">
            <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
              <div>
                <span className="font-mono text-xs text-text-muted">
                  ENGINEERING_STACK
                </span>

                <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-text-muted">
                  BUILD · DEPLOY · ITERATE
                </p>
              </div>

              <span className="font-mono text-xs text-accent">
                01
              </span>
            </div>

            <div className="space-y-5">
              <div className="flex items-center justify-between gap-6">
                <span className="font-mono text-sm text-text-secondary">
                  Backend
                </span>

                <span className="font-mono text-sm text-text-primary">
                  Java / Spring Boot
                </span>
              </div>

              <div className="h-px bg-border" />

              <div className="flex items-center justify-between gap-6">
                <span className="font-mono text-sm text-text-secondary">
                  Full-Stack
                </span>

                <span className="font-mono text-sm text-text-primary">
                  TypeScript / React
                </span>
              </div>

              <div className="h-px bg-border" />

              <div className="flex items-center justify-between gap-6">
                <span className="font-mono text-sm text-text-secondary">
                  Cloud
                </span>

                <span className="font-mono text-sm text-text-primary">
                  AWS
                </span>
              </div>

              <div className="h-px bg-border" />

              <div className="flex items-center justify-between gap-6">
                <span className="font-mono text-sm text-text-secondary">
                  AI
                </span>

                <span className="font-mono text-sm text-text-primary">
                  Python / GenAI
                </span>
              </div>
            </div>

            {/* Technical Status */}
            <div className="mt-6 border-t border-border pt-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                  STATUS
                </span>

                <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-400">
                  AVAILABLE
                </span>
              </div>

              <div className="mt-2 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                  LOCATION
                </span>

                <span className="font-mono text-[10px] uppercase tracking-wider text-text-secondary">
                  INDIA · ANY LOCATION
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
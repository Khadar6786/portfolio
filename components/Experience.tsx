export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-6 py-24 md:py-32"
    >
      <div className="grid gap-12 md:grid-cols-3">
        <div>
          <p className="font-mono text-sm text-accent">
            04 / EXPERIENCE
          </p>

          <p className="mt-4 max-w-xs text-sm leading-6 text-text-muted">
            Professional experience and opportunities that contribute to my
            software engineering journey.
          </p>
        </div>

        <div className="md:col-span-2">
          <article className="border-t border-border pt-6">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="font-mono text-xs tracking-wide text-accent">
                  INTERNSHIP · ONGOING
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-text-primary md:text-3xl">
                  Intern — Technology
                </h3>

                <p className="mt-2 text-text-secondary">
                  Virtusa Consulting Services Pvt Ltd
                </p>
              </div>

              <span className="whitespace-nowrap font-mono text-xs text-text-muted">
                2026 — 2027
              </span>
            </div>

            <p className="mt-5 max-w-2xl text-base leading-7 text-text-secondary">
              Technology internship in the Core Tech Java track within the
              Delivery department, focused on gaining hands-on exposure to
              Java-based software development and professional engineering
              workflows.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              <span className="font-mono text-xs text-text-muted">
                Core Tech Java
              </span>

              <span className="font-mono text-xs text-text-muted">
                Delivery
              </span>

              <span className="font-mono text-xs text-text-muted">
                Jun 2026 — Apr 2027
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
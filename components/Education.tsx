export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-3">
        <div>
          <p className="font-mono text-sm text-accent">05 / EDUCATION</p>
        </div>

        <div className="md:col-span-2">
          <article className="border-t border-border pt-6">
            <div className="flex items-start justify-between gap-6">
              <div>
                <h3 className="text-2xl font-semibold text-text-primary">
                  Integrated M.Tech
                </h3>

                <p className="mt-2 text-text-secondary">
                  Computer Science and Engineering
                </p>

                <p className="mt-2 text-sm text-text-muted">
                  VIT-AP University
                </p>

                <p className="mt-2 font-mono text-xs text-text-muted">
                  CGPA: 8.67 / 10
                </p>
              </div>

              <span className="font-mono text-xs text-text-muted">
                2022 — 2027
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
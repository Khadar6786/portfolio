export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="grid gap-12 md:grid-cols-3">
        <div>
          <p className="font-mono text-sm text-accent">02 / SKILLS</p>

          <p className="mt-4 max-w-xs text-sm leading-6 text-text-muted">
            Technologies I use across backend systems, full-stack applications,
            cloud infrastructure, and AI.
          </p>
        </div>

        <div className="md:col-span-2">
          <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
            <div className="border-t border-border pt-5">
              <h3 className="text-sm font-medium text-text-primary">
                Backend
              </h3>

              <p className="mt-3 text-sm leading-7 text-text-secondary">
                Java · Spring Boot · Spring Security · REST APIs · JWT
              </p>
            </div>

            <div className="border-t border-border pt-5">
              <h3 className="text-sm font-medium text-text-primary">
                Languages
              </h3>

              <p className="mt-3 text-sm leading-7 text-text-secondary">
                Java · Python · TypeScript · JavaScript
              </p>
            </div>

            <div className="border-t border-border pt-5">
              <h3 className="text-sm font-medium text-text-primary">
                Frontend
              </h3>

              <p className="mt-3 text-sm leading-7 text-text-secondary">
                React · Next.js · Tailwind CSS
              </p>
            </div>

            <div className="border-t border-border pt-5">
              <h3 className="text-sm font-medium text-text-primary">
                Database & Cloud
              </h3>

              <p className="mt-3 text-sm leading-7 text-text-secondary">
                MySQL · MongoDB · AWS · S3 · IAM
              </p>
            </div>

            <div className="border-t border-border pt-5">
              <h3 className="text-sm font-medium text-text-primary">
                AI / ML
              </h3>

              <p className="mt-3 text-sm leading-7 text-text-secondary">
                Machine Learning · Deep Learning · GenAI
              </p>
            </div>

            <div className="border-t border-border pt-5">
              <h3 className="text-sm font-medium text-text-primary">
                Tools
              </h3>

              <p className="mt-3 text-sm leading-7 text-text-secondary">
                Git · GitHub · VS Code · Vercel
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
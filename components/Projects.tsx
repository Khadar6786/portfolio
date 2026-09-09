export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-6 py-24 md:py-32"
    >
      <div className="grid gap-12 md:grid-cols-3">
        {/* Section Label */}
        <div>
          <p className="font-mono text-sm text-accent">03 / PROJECTS</p>

          <p className="mt-4 max-w-xs text-sm leading-6 text-text-muted">
            A selection of applications and engineering projects I&apos;ve
            worked on.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-16 md:col-span-2">
          {/* Featured Project */}
          <article className="border-t border-border pt-6">
            {/* Project Preview */}
            <div className="mb-8 overflow-hidden border border-border bg-surface">
              <img
                src="/images/dkb-polymers-preview.png"
                alt="DKB POLYMERS website homepage"
                className="h-auto w-full object-cover"
              />
            </div>

            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="font-mono text-xs tracking-wide text-accent">
                  FEATURED · FULL-STACK
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-text-primary">
                  DKB POLYMERS
                </h3>
              </div>

              <span className="font-mono text-xs text-text-muted">
                01
              </span>
            </div>

            <p className="mt-5 max-w-2xl text-base leading-7 text-text-secondary">
              A B2B web application for recyclable material sourcing,
              processing, trading, and supply, designed to provide a
              professional digital presence for the business.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
              {[
                "Next.js",
                "TypeScript",
                "React",
                "Tailwind CSS",
                "Resend",
                "Vercel",
              ].map((technology) => (
                <span
                  key={technology}
                  className="font-mono text-xs text-text-muted"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://dkb-polymers.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex border border-accent bg-accent px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
              >
                Live Website →
              </a>

              <a
                href="https://github.com/Khadar6786/dkb-polymers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex border border-border px-4 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-text-secondary"
              >
                GitHub →
              </a>
            </div>
          </article>

          {/* Authentication System */}
          <article className="border-t border-border pt-6">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="font-mono text-xs tracking-wide text-text-muted">
                  MINI PROJECT · BACKEND
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-text-primary">
                  Secure Authentication System
                </h3>
              </div>

              <span className="font-mono text-xs text-text-muted">
                02
              </span>
            </div>

            <p className="mt-5 max-w-2xl text-base leading-7 text-text-secondary">
              A backend-focused application exploring user authentication,
              authorization, REST APIs, JWT-based security, and
              role-based access control.
            </p>

            <p className="mt-5 font-mono text-xs leading-6 text-text-muted">
              Java · Spring Boot · Spring Security · JWT · MySQL
            </p>

            <div className="mt-7">
              <a
                href="https://github.com/Khadar6786/authsystem"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex border border-border px-4 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-text-secondary"
              >
                GitHub →
              </a>
            </div>
          </article>

          {/* Cloud File Storage */}
          <article className="border-t border-border pt-6">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="font-mono text-xs tracking-wide text-text-muted">
                  MINI PROJECT · CLOUD
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-text-primary">
                  Cloud File Storage
                </h3>
              </div>

              <span className="font-mono text-xs text-text-muted">
                03
              </span>
            </div>

            <p className="mt-5 max-w-2xl text-base leading-7 text-text-secondary">
              A cloud-based file storage application focused on
              authentication, file management, and object storage using
              Amazon S3.
            </p>

            <p className="mt-5 font-mono text-xs leading-6 text-text-muted">
              React · Node.js · Express · AWS S3 · IAM · JWT
            </p>

            <div className="mt-7">
              <a
                href="https://github.com/Khadar6786/cloudstorage"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex border border-border px-4 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-text-secondary"
              >
                GitHub →
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
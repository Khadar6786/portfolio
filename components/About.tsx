export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="grid gap-12 md:grid-cols-3">
        <div>
          <p className="font-mono text-sm text-accent">01 / ABOUT</p>

          <p className="mt-4 max-w-xs text-sm leading-6 text-text-muted">
            Focused on building software that is reliable, maintainable, and
            useful.
          </p>
        </div>

        <div className="md:col-span-2">
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
            Building software with a backend-first mindset.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-text-secondary">
            I&apos;m an Integrated M.Tech Computer Science and Engineering
            student at VIT-AP University, focused on backend development,
            full-stack applications, and AI-powered solutions.
          </p>

          <p className="mt-5 max-w-2xl text-base leading-8 text-text-secondary">
            I enjoy working with Java and Spring Boot to build REST APIs,
            database-driven applications, authentication systems, and
            cloud-integrated software, while also using modern frontend
            technologies when the product requires a full-stack approach.
          </p>

          <div className="mt-12 grid gap-8 border-t border-border pt-8 sm:grid-cols-2">
            <div>
              <p className="font-mono text-xs text-text-muted">PRIMARY FOCUS</p>

              <p className="mt-2 text-sm text-text-primary">
                Backend · Full-Stack · AI
              </p>
            </div>

            <div>
              <p className="font-mono text-xs text-text-muted">CURRENT STACK</p>

              <p className="mt-2 text-sm text-text-primary">
                Java · Spring Boot · React · Next.js
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
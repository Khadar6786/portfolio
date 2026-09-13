export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-3">
        <div>
          <p className="font-mono text-sm text-accent">06 / CONTACT</p>
        </div>

        <div className="md:col-span-2">
          <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-text-primary md:text-5xl">
            Let&apos;s build something useful.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-text-secondary">
            I&apos;m open to software engineering opportunities, internships,
            and interesting projects involving backend and full-stack
            development.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:khadarahamad1234@gmail.com"
              className="border border-accent bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              Email Me
            </a>

            <a
              href="https://github.com/Khadar6786"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border px-5 py-3 text-sm font-medium text-text-primary transition-colors hover:border-text-secondary"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/shaik-khadar-ahamad/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border px-5 py-3 text-sm font-medium text-text-primary transition-colors hover:border-text-secondary"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
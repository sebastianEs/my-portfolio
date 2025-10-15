export default function Summary() {
  return (
    <section id="summary" className="section flex flex-col justify-center items-center text-center min-h-screen">
      <h1 className="text-5xl font-heading font-bold mb-4">
        Fullstack Developer
      </h1>
      <p className="text-lg text-gray max-w-2xl leading-relaxed">
        Hi, I’m <span className="text-accent font-semibold">Sebastian Estrada</span> — a developer
        who loves combining elegant design with clean code using React, TypeScript, and .NET.
      </p>
      <a
        href="#work"
        className="mt-8 px-6 py-3 bg-light rounded-lg font-semibold shadow hover:bg-accent-dark transition inline-block"
        role="button"
        tabIndex={0}
      >
        View My Work
      </a>
    </section>
  )
}

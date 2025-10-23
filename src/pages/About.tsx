import SectionTitle from "../components/SectionTitle"
import KnowledgeMap from "../components/KnowledgeMap"

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
      <SectionTitle title="About Me" />
      <p className="text-gray-300 leading-relaxed">
        My journey as a developer started with a fascination for how technology could make
        everyday life simpler. Over the years, I’ve evolved into a fullstack developer who thrives
        in building modern, scalable, and maintainable systems across both frontend and backend.
      </p>
      <p className="text-gray-300 mt-4 leading-relaxed">
        I’ve delivered projects in industries like automotive, medtech, and proptech — always focusing
        on usability, performance, and seamless integration. From modernizing legacy systems to
        implementing component-driven design systems and data-rich applications, I aim to combine
        <span className="text-accent"> technology, UX, and AI</span> to create smarter digital products.
      </p>
      <p className="text-gray-300 mt-4 leading-relaxed">
        My long-term goal is to continue growing as a developer who bridges design thinking with
        solid engineering — building solutions that are both technically strong and genuinely
        helpful for users.
      </p>

      <hr className="my-16 border-gray-800" />

      <SectionTitle title="Knowledge Map" />
      <KnowledgeMap />
    </section>
  )
}

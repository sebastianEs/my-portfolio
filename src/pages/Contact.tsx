import SectionTitle from "../components/SectionTitle"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <SectionTitle title="Contact Me" />
      <p className="text-gray-300 mb-6">
        Let’s connect! I’m open to collaborations, freelance projects, or just a good tech conversation.
      </p>
      <div className="space-y-2 text-gray-400">
        <p>📧 estradasebastian917@gmail.com</p>
        <p>
          🔗 <a href="https://linkedin.com/in/sebastian-estrada-861025132" target="_blank" className="text-accent hover:underline">LinkedIn</a>
        </p>
      </div>
    </section>
  )
}

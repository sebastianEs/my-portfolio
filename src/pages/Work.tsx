import { motion } from "framer-motion"
import SectionTitle from "../components/SectionTitle"
import { projects } from "../data/projects"

export default function Work() {

  return (
    <section id="work" className="py-20 px-6 max-w-5xl mx-auto">
      <SectionTitle title="My Work" />
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(56,189,248,0.1)" }}
            className="border border-gray-800 p-6 rounded-xl bg-gray-900/40 backdrop-blur-sm transition-transform"
          >
            <h3 className="text-xl font-semibold text-white mb-2">{p.title}</h3>
            <p className="text-sm text-gray-400 mb-2">{p.year}</p>
            <p className="text-gray-300 mb-3">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="bg-gray-800 text-gray-200 text-xs px-2 py-1 rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

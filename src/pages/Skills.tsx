import { motion } from "framer-motion"
import SectionTitle from "../components/SectionTitle"

const frontend = ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "Vite"]
const backend = [".NET (C#)", "Node.js", "SQL Server", "GraphQL", "Entity Framework", "MongoDB"]
const devops = ["Azure DevOps", "Docker", "Kubernetes", "CI/CD Pipelines", "GitHub Actions"]

export default function Skills() {
  const renderList = (title: string, skills: string[]) => (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="border border-gray-800 rounded-xl p-6 bg-gray-900/40 backdrop-blur-sm"
    >
      <h3 className="text-xl font-semibold text-accent mb-3">{title}</h3>
      <ul className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <motion.li
            key={s}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 text-gray-200 text-xs px-3 py-1 rounded-lg shadow-sm"
          >
            {s}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )

  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
      <SectionTitle title="Skills & Tech Stack" />
      <div className="grid gap-6 md:grid-cols-3">
        {renderList("Frontend", frontend)}
        {renderList("Backend & Data", backend)}
        {renderList("DevOps & Cloud", devops)}
      </div>
    </section>
  )
}

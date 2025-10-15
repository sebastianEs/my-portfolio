import { motion } from "framer-motion"

export default function SectionTitle({ title }: { title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-10"
    >
      <h2 className="text-3xl font-semibold text-white inline-block relative">
        {title}
        <motion.span
          className="absolute bottom-0 left-0 h-[2px] bg-accent"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </h2>
    </motion.div>
  )
}

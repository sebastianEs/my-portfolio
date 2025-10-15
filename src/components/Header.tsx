import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { name: "Home", href: "#summary" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 w-full bg-dark/80 backdrop-blur-md border-b border-gray-800 z-50">
      <nav className="max-w-5xl mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-xl font-bold text-light tracking-wide">
          Sebastian Estrada
        </h1>

        <ul className="hidden md:flex gap-6 text-sm text-gray items-center">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-accent transition">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-light focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-dark border-t border-gray-800"
          >
            <ul className="flex flex-col items-center py-4 space-y-4 text-gray">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-accent transition text-lg"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

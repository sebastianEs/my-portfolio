export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-slate-900 backdrop-blur-sm z-50 border-b border-gray-800">
      <nav className="max-w-5xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-bold text-white">Sebastian Estrada</h1>
        <ul className="flex gap-6 text-sm text-gray-300">
          <li><a href="#summary" className="hover:text-accent">Home</a></li>
          <li><a href="#about" className="hover:text-accent">About</a></li>
          <li><a href="#work" className="hover:text-accent">Work</a></li>
          <li><a href="#contact" className="hover:text-accent">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

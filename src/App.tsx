import Header from "./components/Header"
import Footer from "./components/Footer"
import Summary from "./pages/Summary"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Work from "./pages/Work"
import Contact from "./pages/Contact"
import "./styles/App.css"

export default function App() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Summary />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

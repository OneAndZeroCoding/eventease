import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Services from "../components/Services"
import About from "../components/About"
import ProviderCTA from "../components/ProviderCTA"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

function Home(){
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <About />
            <ProviderCTA />
            <Contact />
            <Footer />
        </>
    )
}

export default Home;
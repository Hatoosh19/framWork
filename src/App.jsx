import About from "./componts/About/About";
import Contact from "./componts/Contact/Contact";
import Navbar from "./componts/Navbar/Navbar";
import Footer from "./componts/footer/Footer";
import Portfolio from "./componts/portfolio/Portfolio";
import Last from "./componts/Last/Last";
import Home from "./componts/portfolio/Portfolio";


export function App()
{
  return <>
   <Navbar />
   <About />
  <Portfolio />
  <Contact />
  <Footer />
  <Last />
  </>
}


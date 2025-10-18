import './App.css'
import BenefitSection from './assets/Components/BenefitSection/BenefitSection'
import FaqSection from './assets/Components/FaqSection/FaqSection'
import Footer from './assets/Components/Footer/Footer'
import HeroSection from './assets/Components/Heroection/HeroSection'
import Navbar from './assets/Components/Navbar/Navbar'
import NavigateSection from './assets/Components/NavigateSection/NavigateSection'
import NotificationBar from './assets/Components/NotificationBar/NotificationBar'
import SliderSection from './assets/Components/SliderSection/SliderSection'

function App() {

  return (
    <>
      <NotificationBar />
      <Navbar logo={"/assets/images/Logo.png"} items={[{ link: "#", content: "Home" }, { link: "#about", content: "About Us" }, { link: "#academics", content: "Academics" }, { link: "#admissions", content: "Admissions" }, { link: "#student", content: "Student Life" }, { link: "#contact", content: "Contact" }]} />
      <HeroSection />
      <BenefitSection />
      <SliderSection />
      <FaqSection />
      <NavigateSection />
      <Footer />
    </>
  )
}

export default App

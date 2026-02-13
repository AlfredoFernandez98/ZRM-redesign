
import Hero from '../components/Hero'
import Navbar from '../components/Navbar/Navbar'
import CRMSoftwares from '../components/CRM-softwares/CRMSoftwares'
import SoftwareInfo from '../components/SoftwareInfo/SoftwareInfo'
import Footer from '../components/Footer/Footer'
import FAQ from '../components/FAQ'
function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CRMSoftwares />
      <SoftwareInfo />
      <FAQ />
      <Footer />
      
    </div>
  )
}

export default Home
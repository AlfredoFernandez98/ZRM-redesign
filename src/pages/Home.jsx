
import Hero from '../components/Hero'
import Navbar from '../components/Navbar/Navbar'
import CRMSoftwares from '../components/CRM-softwares/CRMSoftwares'
import SoftwareInfo from '../components/SoftwareInfo/SoftwareInfo'
function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CRMSoftwares />
      <SoftwareInfo />

    </div>
  )
}

export default Home
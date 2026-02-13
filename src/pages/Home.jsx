
import Hero from '../components/Hero'
import Navbar from '../components/Navbar/Navbar'

import CRMSoftwares from '../components/CRM-softwares/CRMSoftwares'
import SoftwareInfo from '../components/SoftwareInfo/SoftwareInfo'
import DigitalPlatform from '../components/Digital-platform/DigitalPlatform'
import Timeline from '../components/Timeline'
import SolutionsGrid from '../components/SolutionsGrid/SolutionsGrid'
import Testimonial from '../components/Testimonial/Testimonial'

import Footer from '../components/Footer/Footer'
import FAQ from '../components/FAQ'
function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CRMSoftwares />
      <SoftwareInfo />
      <DigitalPlatform />
      <Timeline />
      <SolutionsGrid />
      <Testimonial />
      
      <FAQ />
      <Footer />
      
    </div>
  )
}

export default Home
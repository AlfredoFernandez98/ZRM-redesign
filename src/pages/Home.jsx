
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero'
import CRMSoftwares from '../components/CRM-softwares/CRMSoftwares'
import SoftwareInfo from '../components/SoftwareInfo/SoftwareInfo'
import DigitalPlatform from '../components/Digital-platform/DigitalPlatform'
import Timeline from '../components/Timeline'
import SolutionsGrid from '../components/SolutionsGrid/SolutionsGrid'
import Testimonial from '../components/Testimonial/Testimonial'
import CTASection from '../components/CTASection/CTASection'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer/Footer'

function Home() {

  return (
    <div>
    <Navbar />
    <Hero />
    <CRMSoftwares />
    <Timeline />
    <SoftwareInfo />
    <DigitalPlatform />
    <SolutionsGrid />
    <Testimonial />
    <CTASection />
    <FAQ />
    <Footer />
    </div>
  )
}

export default Home
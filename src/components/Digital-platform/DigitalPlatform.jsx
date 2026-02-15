import { useState, useEffect, useRef } from 'react'
import digiplat from '../../assets/digiplat.png'
import {
  Section, Card, TwoCol, ImageCol, TextCol,
  SectionLabel, SectionTitle, SectionText,
  BenefitList, BenefitItem, BenefitDot, BenefitText
} from './DigitalPlatform.styles'

const benefits = [
  {
    title: 'Centraliseret datahåndtering',
    desc: 'Al information samlet ét sted for bedre konvertering'
  },
  {
    title: 'Automatisering af processer',
    desc: 'Mindre manuelt arbejde, større effektivitet'
  },
  {
    title: 'Skalerbare løsninger',
    desc: 'Platforme der vokser i takt med din virksomhed'
  },
  {
    title: 'Forbedret brugeroplevelse',
    desc: 'Intuitive interfaces der skaber værdi for kunder og medarbejdere'
  },
]

function DigitalPlatform() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <Section ref={sectionRef}>
      <Card $visible={isVisible}>
        <TwoCol>
          <ImageCol>
            <img src={digiplat} alt="Digitale platforme hos ZRM" />
          </ImageCol>
          <TextCol>
            <SectionLabel>Digitale platforme</SectionLabel>
            <SectionTitle>
              Hvad er digitale platforme, og hvorfor er de vigtige?
            </SectionTitle>
            <SectionText>
              Digitale platforme er cloud-baserede systemer, der forbinder brugere, data og funktioner på en intelligent måde.
            </SectionText>
            <BenefitList>
              {benefits.map((benefit) => (
                <BenefitItem key={benefit.title}>
                  <BenefitDot />
                  <BenefitText>
                    <strong>{benefit.title}</strong>
                    <span>{benefit.desc}</span>
                  </BenefitText>
                </BenefitItem>
              ))}
            </BenefitList>
          </TextCol>
        </TwoCol>
      </Card>
    </Section>
  )
}

export default DigitalPlatform
import { useState, useEffect, useRef } from 'react'
import {
    Section, SectionLabel, SectionTitle,
    SectionText, ButtonGroup, BtnPrimary, BtnSecondary
  } from './CTASection.styles'
  
  function CTASection() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        },
        { threshold: 0.3 }
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
      <Section ref={sectionRef} $visible={isVisible}>
        <SectionLabel>Tag det næste skridt</SectionLabel>
        <SectionTitle>
          Klar til at transformere din virksomhed?
        </SectionTitle>
        <SectionText>
          Kontakt os i dag for en uforpligtende samtale om, hvordan vi kan skabe den rette løsning til dig.
        </SectionText>
        <ButtonGroup>
          <BtnPrimary href="#">Book en gratis demo →</BtnPrimary>
          <BtnSecondary href="#">Kontakt os</BtnSecondary>
        </ButtonGroup>
      </Section>
    )
  }
  
  export default CTASection
import { useState, useEffect, useRef } from 'react'
import mathias from '../../assets/mathias.png'
import grod from '../../assets/grod.png'
import {
  Section, Card, QuoteSection, QuoteMark,QuoteMarkEnd,
  QuoteText, AuthorRow, AuthorLogo, AuthorInfo, ImageWrapper
} from './Testimonial.styles'

function Testimonial() {
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
        <QuoteSection>
          <QuoteMark>"</QuoteMark>
          <QuoteText>
            ZRM har været dygtige til at forstå vores behov for rapporteringer og ønsker til et system. ZRM tog udgangspunkt i de rapporter, vi allerede havde lavet i regneark, og opbyggede systemet derefter. Det gjorde processen gnidningsfri for os. Derudover er prisen jo også et plus.
          </QuoteText>
          <QuoteMarkEnd>"</QuoteMarkEnd>
          <AuthorRow>
            <img src={grod} alt="GRØD" style={{ height: '40px', objectFit: 'contain' }} />
            <AuthorInfo>
              <strong>Mathias L. Nielsen</strong>
              <span>Tidl. direktør for GRØD Products</span>
            </AuthorInfo>
          </AuthorRow>
        </QuoteSection>
        <ImageWrapper>
          <img src={mathias} alt="Mathias L. Nielsen" />
        </ImageWrapper>
      </Card>
    </Section>
  )
}

export default Testimonial
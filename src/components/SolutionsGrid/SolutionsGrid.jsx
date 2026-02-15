import { useState, useEffect, useRef } from 'react'
import {
    Section, TwoCol, Grid, GridCard, TextCol,
    SectionLabel, SectionTitle, Divider,
    BenefitList, BenefitItem, SectionText, CtaButton
  } from './SolutionsGrid.styles'
  
  const solutions = [
    'Custom CRM', 'Chatsystem', 'Rekrutteringssystem',
    'Værktøj til e-mail markedsføring', 'HR Management system', 'Dokumenthåndtering',
    'Ticketing-system', 'Budget-planlægning', 'Abonnementsstyring',
    'Digital læring', 'Kalenderbooking-system', 'Business Intelligence-software',
    'Online mødeplatform', 'Marketing Automation-software', 'AI til markedsføring',
  ]
  
  const benefits = [
    'Udvidet CRM – Automatisér kundehåndtering og salgsprocesser',
    'Chatsystem & chatbots – Optimer kundeservice og interaktion',
    'Rekrutteringsplatform – Strømlin ansættelsesprocessen',
    'HR Management system – Effektiv administration af medarbejderdata',
    'Marketing automation – Automatisér og optimer dine marketingkampagner',
    'AI & dataanalyse – Brug kunstig intelligens til at træffe bedre beslutninger',
  ]
  
  function SolutionsGrid() {
    const [visibleCards, setVisibleCards] = useState([])
    const cardRefs = useRef([])

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = cardRefs.current.indexOf(entry.target)
              if (index !== -1 && !visibleCards.includes(index)) {
                setVisibleCards((prev) => [...prev, index])
              }
            }
          })
        },
        { threshold: 0.1 }
      )

      cardRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref)
      })

      return () => {
        cardRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref)
        })
      }
    }, [visibleCards])

    return (
      <Section>
        <TwoCol>
          <Grid>
            {solutions.map((solution, index) => (
              <GridCard 
                key={solution}
                $visible={visibleCards.includes(index)}
                $delay={index * 0.05}
                ref={(el) => (cardRefs.current[index] = el)}
              >
                {solution}
              </GridCard>
            ))}
          </Grid>
          <TextCol>
            <SectionLabel>Vores platforme</SectionLabel>
            <SectionTitle>
              Effektive softwareløsninger: Eksempler på vores <br />
              platforme
            </SectionTitle>
            <Divider />
            <SectionText>
              Hos ZRM udvikler vi digitale platforme og softwareløsninger, der dækker en bred vifte af forretningsbehov:
            </SectionText>
            <BenefitList>
              {benefits.map((benefit) => (
                <BenefitItem key={benefit}>{benefit}</BenefitItem>
              ))}
            </BenefitList>
            <SectionText>
              Uanset hvilken software løsning du har brug for, skaber vi en skræddersyet digital platform, der forbedrer din forretning.
            </SectionText>
            <CtaButton href="#">Kontakt os →</CtaButton>
          </TextCol>
        </TwoCol>
      </Section>
    )
  }
  
  export default SolutionsGrid
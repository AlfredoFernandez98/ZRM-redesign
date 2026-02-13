import {
    Section, SectionLabel, SectionTitle,
    SectionText, ButtonGroup, BtnPrimary, BtnSecondary
  } from './CTASection.styles'
  
  function CTASection() {
    return (
      <Section>
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
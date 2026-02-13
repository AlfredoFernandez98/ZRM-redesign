import tavlen from '../../assets/tavlen.png'
import {
  Section, Card, TwoCol, TextCol, ImageCol,
  SectionLabel, SectionTitle, SectionText,
  BenefitList, BenefitItem, BenefitDot, BenefitText
} from './SoftwareInfo.styles'

const benefits = [
  {
    title: 'Forbedret workflow',
    desc: 'Automatisér manuelle opgaver og frigør tid til det der skaber værdi'
  },
  {
    title: 'Effektiv databehandling',
    desc: 'Saml og strukturér data på tværs af systemer ét centralt sted'
  },
  {
    title: 'AI og automatisering',
    desc: 'Integrér avancerede teknologier der løfter hele organisationen'
  },
]

function SoftwareInfo() {
  return (
    <Section>
      <Card>
        <TwoCol>
          <TextCol>
            <SectionLabel>Software-udvikling</SectionLabel>
            <SectionTitle>
              Hvad er en softwareløsning, og hvordan kan den hjælpe din virksomhed?
            </SectionTitle>
            <SectionText>
              Softwareløsninger dækker over programmer og applikationer, der optimerer og automatiserer forretningsprocesser. Hos ZRM udvikler vi løsninger skræddersyet præcist til din virksomheds behov.
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
          <ImageCol>
            <img src={tavlen} alt="Software udvikling hos ZRM" />
          </ImageCol>
        </TwoCol>
      </Card>
    </Section>
  )
}

export default SoftwareInfo
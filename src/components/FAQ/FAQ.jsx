import { useState } from 'react'
import {
  Section, SectionLabel, SectionTitle,
  Grid, FaqItem, FaqQuestion, FaqChevron, FaqAnswer
} from './FAQ.styles'

const faqs = [
  {
    question: 'Hvad er en softwareløsning?',
    answer: 'En softwareløsning er et program eller en applikation designet til at optimere og automatisere specifikke forretningsprocesser. Det kan være alt fra et CRM-system til en komplet digital platform.'
  },
  {
    question: 'Hvordan udvikles en softwareløsning?',
    answer: 'Hos ZRM følger vi en struktureret 6-trins proces fra analyse og specifikation til lancering og løbende support. Vi sikrer tæt dialog og gennemsigtighed i hele forløbet.'
  },
  {
    question: 'Hvad er digitale platforme?',
    answer: 'Digitale platforme er cloud-baserede systemer, der forbinder brugere, data og funktioner intelligent. De giver centraliseret overblik og mulighed for at automatisere processer på tværs af din organisation.'
  },
  {
    question: 'Hvilke typer løsninger tilbyder ZRM?',
    answer: 'Vi tilbyder custom CRM, HR-systemer, rekrutteringsplatforme, chatbots, marketing automation, BI-software og meget mere – altid skræddersyet til din virksomheds specifikke behov.'
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Section>
      <SectionLabel>Ofte stillede spørgsmål</SectionLabel>
      <SectionTitle>FAQ om software-udvikling</SectionTitle>
      <Grid>
        {faqs.map((faq, index) => (
          <FaqItem key={index} $open={openIndex === index}>
            <FaqQuestion onClick={() => toggle(index)}>
              {faq.question}
              <FaqChevron $open={openIndex === index}>▾</FaqChevron>
            </FaqQuestion>
            <FaqAnswer $open={openIndex === index}>
              {faq.answer}
            </FaqAnswer>
          </FaqItem>
        ))}
      </Grid>
    </Section>
  )
}

export default FAQ
import { useState, useEffect, useRef } from 'react'
import {
  Section, Container, SectionLabel, SectionTitle, SectionIntro,
  TimelineScroll, TimelineWrapper, TimelineItem, TimelineIcon,
  TimelineContent, TimelineStepTitle, TimelineStepDesc, TimelineLine,
  ScrollIndicator, TimelineScrollWrapper, CustomScrollbar, CustomScrollbarThumb
} from './Timeline.styles'

const timelineSteps = [
  {
    icon: '🔍',
    title: 'Idé og konceptudvikling',
    desc: 'Vi starter med at forstå dine behov og definere projektets omfang'
  },
  {
    icon: '✓',
    title: 'Planlægning og design',
    desc: 'Detaljeret planlægning af arkitektur og brugergrænseflader'
  },
  {
    icon: '</>', 
    title: 'Udvikling',
    desc: 'Agil udvikling med løbende feedback og iterationer'
  },
  {
    icon: '📋',
    title: 'Test og kvalitetssikring',
    desc: 'Grundig testning for at sikre høj kvalitet og performance'
  },
  {
    icon: '🔄',
    title: 'Lancering',
    desc: 'Deployment og go-live med fuld support'
  },
  {
    icon: '💡',
    title: 'Vedligeholdelse og optimering',
    desc: 'Kontinuerlig support og forbedringer efter lancering'
  }
]

function Timeline() {
  const [visibleItems, setVisibleItems] = useState([])
  const [scrollPosition, setScrollPosition] = useState('start') // 'start', 'middle', 'end'
  const [scrollProgress, setScrollProgress] = useState(0)
  const [thumbWidth, setThumbWidth] = useState(20)
  const itemRefs = useRef([])
  const scrollRef = useRef(null)
  const customScrollbarRef = useRef(null)

  const handleCustomScrollbarClick = (e) => {
    if (!scrollRef.current || !customScrollbarRef.current) return
    
    const rect = customScrollbarRef.current.getBoundingClientRect()
    const clickPosition = (e.clientX - rect.left) / rect.width
    const { scrollWidth, clientWidth } = scrollRef.current
    const maxScroll = scrollWidth - clientWidth
    
    scrollRef.current.scrollLeft = clickPosition * maxScroll
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(entry.target)
            if (index !== -1 && !visibleItems.includes(index)) {
              setVisibleItems((prev) => [...prev, index])
            }
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: '0px'
      }
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [visibleItems])

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return
      
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      const scrollThreshold = 50 // pixels

      // Calculate scroll position for indicators
      if (scrollLeft < scrollThreshold) {
        setScrollPosition('start')
      } else if (scrollLeft + clientWidth >= scrollWidth - scrollThreshold) {
        setScrollPosition('end')
      } else {
        setScrollPosition('middle')
      }

      // Calculate custom scrollbar position and size
      const maxScroll = scrollWidth - clientWidth
      const scrollPercentage = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0
      const thumbWidthPercentage = (clientWidth / scrollWidth) * 100
      
      setScrollProgress(scrollPercentage * (1 - thumbWidthPercentage / 100))
      setThumbWidth(Math.max(thumbWidthPercentage, 10)) // minimum 10% width
    }

    const scrollElement = scrollRef.current
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll)
      // Check initial position
      handleScroll()
      
      // Recalculate on window resize
      window.addEventListener('resize', handleScroll)
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener('scroll', handleScroll)
        window.removeEventListener('resize', handleScroll)
      }
    }
  }, [])

  return (
    <Section>
      <Container>
        <SectionLabel>Vores proces</SectionLabel>
        <SectionTitle>
          Software-udvikling<br />
          Fra idé til færdig løsning
        </SectionTitle>
        <SectionIntro>
          ZRM tilbyder komplet software udvikling, hvor vi håndterer hele processen – fra konceptudvikling til lancering og optimering. Vores softwareløsninger er designet til at effektivisere, optimere og fremtidssikre din virksomhed.
        </SectionIntro>
        <SectionIntro>
          Vi tror på en struktureret og gennemsigtlig proces, der sikrer, at du som kunde føler dig tryg fra start til slut. Vores tilgang er baseret på tæt dialog, præcis planlægning og en målrettet eksekvering, der leverer resultater af højeste kvalitet.
        </SectionIntro>
        <SectionIntro>
          Hele processen gennemføres i <strong style={{color: '#F5850A'}}>6 klare trin</strong>, der sikrer en problemfri og effektiv implementering.
        </SectionIntro>

        <TimelineScrollWrapper>
          <TimelineScroll ref={scrollRef}>
            <TimelineWrapper>
              <TimelineLine />
              {timelineSteps.map((step, index) => (
                <TimelineItem 
                  key={index}
                  ref={(el) => (itemRefs.current[index] = el)}
                  $visible={visibleItems.includes(index)}
                  $delay={index * 0.1}
                >
                  <TimelineIcon $visible={visibleItems.includes(index)}>
                    {step.icon}
                  </TimelineIcon>
                  <TimelineContent>
                    <TimelineStepTitle>{step.title}</TimelineStepTitle>
                    <TimelineStepDesc>{step.desc}</TimelineStepDesc>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </TimelineWrapper>
          </TimelineScroll>

          <CustomScrollbar 
            ref={customScrollbarRef}
            onClick={handleCustomScrollbarClick}
          >
            <CustomScrollbarThumb 
              $scrollProgress={scrollProgress}
              $thumbWidth={thumbWidth}
            />
          </CustomScrollbar>

          {scrollPosition === 'start' && (
            <ScrollIndicator $position="right">
               →
            </ScrollIndicator>
          )}

          {scrollPosition === 'middle' && (
            <ScrollIndicator $position="left">
              ← 
            </ScrollIndicator>
          )}
        </TimelineScrollWrapper>
      </Container>
    </Section>
  )
}

export default Timeline

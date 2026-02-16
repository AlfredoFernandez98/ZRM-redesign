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
    // Show all items immediately to prevent shake during scroll
    setVisibleItems(timelineSteps.map((_, index) => index))
  }, [])

  useEffect(() => {
    let ticking = false
    let lastScrollLeft = 0
    let lastUpdateTime = 0

    const handleScroll = () => {
      if (!scrollRef.current || ticking) return
      
      const { scrollLeft } = scrollRef.current
      const now = Date.now()
      
      // Only update if scroll changed significantly AND enough time passed (reduces updates drastically)
      if (Math.abs(scrollLeft - lastScrollLeft) < 10 || now - lastUpdateTime < 100) return
      
      lastScrollLeft = scrollLeft
      lastUpdateTime = now
      ticking = true
      
      window.requestAnimationFrame(() => {
        if (!scrollRef.current) {
          ticking = false
          return
        }

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
        
        // Batch state updates to reduce re-renders
        const newProgress = scrollPercentage * (1 - thumbWidthPercentage / 100)
        const newThumbWidth = Math.max(thumbWidthPercentage, 10)
        
        // Only update if values changed significantly
        if (Math.abs(newProgress - scrollProgress) > 1) {
          setScrollProgress(newProgress)
        }
        if (Math.abs(newThumbWidth - thumbWidth) > 1) {
          setThumbWidth(newThumbWidth)
        }
        
        ticking = false
      })
    }

    const scrollElement = scrollRef.current
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll, { passive: true })
      // Check initial position
      handleScroll()
      
      // Recalculate on window resize
      window.addEventListener('resize', handleScroll, { passive: true })
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
          Vi tror på en gennemarbejdet og professionel proces, der sikrer, at du som kunde føler dig tryg fra start til slut. Vores tilgang er simpel og baseret på tæt dialog, præcis planlægning og en målrettet eksekvering, der leverer resultater af højeste kvalitet.
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

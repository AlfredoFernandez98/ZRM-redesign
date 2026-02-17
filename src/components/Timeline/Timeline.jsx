import { useState, useEffect, useRef } from 'react'
import {
  Section, Container, SectionLabel, SectionTitle, SectionIntro,
  TimelineScroll, TimelineWrapper, TimelineItem, TimelineIcon,
  TimelineContent, TimelineStepTitle, TimelineStepDesc, TimelineLine,
  ScrollIndicator, TimelineScrollWrapper, CustomScrollbar, CustomScrollbarThumb
} from './Timeline.styles'
import searchIcon from '../../assets/vectors/magnifying-glass-svgrepo-com (1).svg'
import checkIcon from '../../assets/vectors/check-svgrepo-com.svg'
import notesIcon from '../../assets/vectors/notes-outlined-pen-and-paper-svgrepo-com.svg'
import resetIcon from '../../assets/vectors/reset-reload-refresh-sync-arrow-update-svgrepo-com.svg'
import ideaIcon from '../../assets/vectors/idea-bulb-glow-svgrepo-com.svg'

const timelineSteps = [
  {
    icon: <img src={searchIcon} alt="Search" style={{ width: '28px', height: '28px' }} />,
    title: 'Idé og konceptudvikling',
    desc: 'Vi starter med at forstå dine behov og definere projektets omfang'
  },
  {
    icon: <img src={checkIcon} alt="Check" style={{ width: '28px', height: '28px' }} />,
    title: 'Planlægning og design',
    desc: 'Detaljeret planlægning af arkitektur og brugergrænseflader'
  },
  {
    icon: '</>', 
    title: 'Udvikling',
    desc: 'Agil udvikling med løbende feedback og iterationer'
  },
  {
    icon: <img src={notesIcon} alt="Notes" style={{ width: '28px', height: '28px' }} />,
    title: 'Test og kvalitetssikring',
    desc: 'Grundig testning for at sikre høj kvalitet og performance'
  },
  {
    icon: <img src={resetIcon} alt="Reset" style={{ width: '28px', height: '28px' }} />,
    title: 'Lancering',
    desc: 'Deployment og go-live med fuld support'
  },
  {
    icon: <img src={ideaIcon} alt="Idea" style={{ width: '28px', height: '28px' }} />,
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
    const updateScrollbar = () => {
      if (!scrollRef.current) return

      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      const scrollThreshold = 50

      // Update scroll position indicators
      if (scrollLeft < scrollThreshold) {
        setScrollPosition('start')
      } else if (scrollLeft + clientWidth >= scrollWidth - scrollThreshold) {
        setScrollPosition('end')
      } else {
        setScrollPosition('middle')
      }

      // Calculate scrollbar thumb
      const maxScroll = scrollWidth - clientWidth
      
      if (maxScroll <= 0) {
        // No scrolling needed
        setScrollProgress(0)
        setThumbWidth(100)
        return
      }

      // Base thumb width as percentage of scrollbar
      const baseThumbWidth = (clientWidth / scrollWidth) * 100
      
      // Scroll progress (0 to 1)
      const progress = scrollLeft / maxScroll
      
      // Calculate base thumb position
      const baseThumbPosition = progress * (100 - baseThumbWidth)
      
      // Calculate how much the thumb needs to extend to reach 100%
      // At position X with width W, the thumb covers X to X+W
      // We want it to cover X to 100%, so we need width = 100 - X
      const currentEnd = baseThumbPosition + baseThumbWidth
      const gap = 100 - currentEnd
      
      // Adjust width to fill the gap (smooth transition)
      // Only adjust if gap is small (< 5%) to avoid visual jumps
      let adjustedWidth = baseThumbWidth
      let adjustedPosition = baseThumbPosition
      
      if (gap > 0 && gap < 5) {
        // Smoothly extend width to fill the remaining space
        adjustedWidth = baseThumbWidth + gap
      } else if (gap < 0 && gap > -5) {
        // Smoothly reduce position if we're slightly over
        adjustedPosition = Math.max(0, baseThumbPosition + gap)
      }
      
      setScrollProgress(adjustedPosition)
      setThumbWidth(Math.max(adjustedWidth, 10))
    }

    const scrollElement = scrollRef.current
    if (!scrollElement) return

    // Set initial scroll to 0
    scrollElement.scrollLeft = 0
    
    // Initial update
    updateScrollbar()

    // Listen to scroll events
    scrollElement.addEventListener('scroll', updateScrollbar, { passive: true })
    window.addEventListener('resize', updateScrollbar, { passive: true })

    return () => {
      scrollElement.removeEventListener('scroll', updateScrollbar)
      window.removeEventListener('resize', updateScrollbar)
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

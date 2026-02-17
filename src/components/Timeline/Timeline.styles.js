import styled from 'styled-components'

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.cream};
  padding: 5rem 5%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3rem 5%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 2rem 4%;
  }
`

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export const SectionLabel = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.orange};
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.75rem;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.85rem;
  }
`

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.dark};
  line-height: 1.15;
  margin-bottom: 1.5rem;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`

export const SectionIntro = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.7;
  margin-bottom: 1rem;
  text-align: center;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  &:last-of-type {
    margin-bottom: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.9rem;
  }
`

export const TimelineScrollWrapper = styled.div`
  position: relative;
  margin-top: 2rem;
  padding-bottom: 20px;
`

export const CustomScrollbar = styled.div`
  position: absolute;
  bottom: 0;
  left: 5%;
  right: 5%;
  height: 12px;
  background: #e8e5e0;
  border-radius: 6px;
  overflow: hidden;
  z-index: 5;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    left: 4%;
    right: 4%;
    height: 10px;
  }
`

export const CustomScrollbarThumb = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${({ $thumbWidth }) => $thumbWidth}%;
  background: ${({ theme }) => theme.colors.orange};
  border-radius: 6px;
  cursor: pointer;
  transform: translateX(${({ $scrollProgress }) => $scrollProgress}%) translateZ(0);
  transform-origin: left center;
  will-change: transform, width;
  backface-visibility: hidden;
  transition: width 0.15s ease-out;

  &:hover {
    background: #d97308;
  }
`

export const ScrollIndicator = styled.div`
  position: absolute;
  top: 40%;
  ${({ $position }) => $position === 'right' ? 'right: -70px;' : 'left: -90px;'}
  transform: translateY(-50%);
  background: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 10;
  pointer-events: none;
  animation: ${({ $position }) => $position === 'right' ? 'pulseRight' : 'pulseLeft'} 2s ease-in-out infinite;
  white-space: nowrap;

  @keyframes pulseRight {
    0%, 100% {
      transform: translateY(-50%) translateX(0);
      opacity: 1;
    }
    50% {
      transform: translateY(-50%) translateX(5px);
      opacity: 0.85;
    }
  }

  @keyframes pulseLeft {
    0%, 100% {
      transform: translateY(-50%) translateX(0);
      opacity: 1;
    }
    50% {
      transform: translateY(-50%) translateX(-5px);
      opacity: 0.85;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    ${({ $position }) => $position === 'right' ? 'right: -60px;' : 'left: -75px;'}
    font-size: 0.75rem;
    padding: 0.45rem 0.9rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`

export const TimelineScroll = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  padding: 2rem 0;
  margin: 0 -5%;
  padding-left: 5%;
  padding-right: 5%;
  
  /* Completely hide native scrollbar - we only use custom one */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */

  &::-webkit-scrollbar {
    display: none !important; /* Chrome, Safari, Opera */
    width: 0 !important;
    height: 0 !important;
    background: transparent !important;
    -webkit-appearance: none !important;
  }

  &::-webkit-scrollbar-track,
  &::-webkit-scrollbar-thumb {
    display: none !important;
    background: transparent !important;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0 -4%;
    padding-left: 4%;
    padding-right: 4%;
  }
`

export const TimelineWrapper = styled.div`
  display: flex;
  gap: 3rem;
  position: relative;
  padding: 3rem 0;
  min-width: max-content;
  will-change: scroll-position;
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 2rem;
  }
`

export const TimelineLine = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 3px;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.orange},
    ${({ theme }) => theme.colors.orange} 80%,
    rgba(245, 133, 10, 0.3)
  );
  transform: translateY(-50%) translateZ(0);
  z-index: 0;
  backface-visibility: hidden;
`

export const TimelineItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  position: relative;
  opacity: ${({ $visible }) => $visible ? '1' : '0'};
  transform: translateY(${({ $visible }) => $visible ? '0' : '20px'}) translateZ(0);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  transition-delay: ${({ $delay }) => $delay}s;
  will-change: opacity, transform;
  backface-visibility: hidden;
`

export const TimelineIcon = styled.div`
  width: 60px;
  height: 60px;
  background: ${({ theme }) => theme.colors.orange};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  z-index: 2;
  transform: scale(${({ $visible }) => $visible ? '1' : '0'}) translateZ(0);
  transition: transform 0.5s ease-out;
  flex-shrink: 0;
  will-change: transform;
  backface-visibility: hidden;

  /* Style SVG icons */
  img {
    width: 28px;
    height: 28px;
  }

  &:hover {
    transform: scale(1.1) translateZ(0);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 50px;
    height: 50px;
    font-size: 1.3rem;
    
    img {
      width: 24px;
      height: 24px;
    }
  }
`

export const TimelineContent = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 12px;
  padding: 1.5rem;
  width: 280px;
  transition: all 0.3s ease;
  backface-visibility: hidden;

  &:hover {
    transform: translateY(-5px) translateZ(0);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 240px;
    padding: 1.25rem;
  }
`

export const TimelineStepTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 0.5rem;
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`

export const TimelineStepDesc = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.85rem;
  }
`

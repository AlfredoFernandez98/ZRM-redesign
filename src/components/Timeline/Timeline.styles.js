import styled from 'styled-components'

export const Section = styled.section`
  background: ${({ theme }) => {
    return theme.colors.cream
  }};
  padding: 5rem 5%;

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.tablet
  }}) {
    padding: 3rem 5%;
  }

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.mobile
  }}) {
    padding: 2rem 4%;
  }
`

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export const SectionLabel = styled.span`
  display: block;
  color: ${({ theme }) => {
    return theme.colors.orange
  }};
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.75rem;
  text-align: center;

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.mobile
  }}) {
    font-size: 0.85rem;
  }
`

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => {
    return theme.fonts.heading
  }};
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 800;
  color: ${({ theme }) => {
    return theme.colors.dark
  }};
  line-height: 1.15;
  margin-bottom: 1.5rem;
  text-align: center;

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.mobile
  }}) {
    font-size: 1.5rem;
  }
`

export const SectionIntro = styled.p`
  color: ${({ theme }) => {
    return theme.colors.muted
  }};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.7;
  margin-bottom: 1rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  &:last-of-type {
    margin-bottom: 2rem;
  }

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.mobile
  }}) {
    font-size: 0.9rem;
  }
`

export const SwipeIndicator = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => {
    return theme.colors.orange
  }};
  color: ${({ theme }) => {
    return theme.colors.white
  }};
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-size: 0.95rem;
  font-weight: 600;
  margin: 0 auto 2rem;
  display: flex;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(245, 133, 10, 0.3);
  animation: pulse 2s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% {
      transform: translateX(0);
      opacity: 1;
    }
    50% {
      transform: translateX(5px);
      opacity: 0.8;
    }
  }

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.mobile
  }}) {
    font-size: 0.875rem;
    padding: 0.65rem 1.25rem;
  }
`

export const TimelineScroll = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => {
    return theme.colors.orange
  }} ${({ theme }) => {
    return theme.colors.lightBg
  }};
  padding: 2rem 0;
  margin: 0 -5%;
  padding-left: 5%;
  padding-right: 5%;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => {
      return theme.colors.lightBg
    }};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => {
      return theme.colors.orange
    }};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #d97308;
  }

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.mobile
  }}) {
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

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.mobile
  }}) {
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
    ${({ theme }) => {
      return theme.colors.orange
    }},
    ${({ theme }) => {
      return theme.colors.orange
    }} 80%,
    rgba(245, 133, 10, 0.3)
  );
  transform: translateY(-50%);
  z-index: 0;
`

export const TimelineItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  position: relative;
  opacity: ${({ $visible }) => {
    return $visible ? '1' : '0'
  }};
  transform: translateY(${({ $visible }) => {
    return $visible ? '0' : '20px'
  }});
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  transition-delay: ${({ $delay }) => {
    return $delay
  }}s;
`

export const TimelineIcon = styled.div`
  width: 60px;
  height: 60px;
  background: ${({ theme }) => {
    return theme.colors.white
  }};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  z-index: 2;
  border: 4px solid ${({ theme }) => {
    return theme.colors.orange
  }};
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transform: scale(${({ $visible }) => {
    return $visible ? '1' : '0'
  }});
  transition: transform 0.5s ease-out;
  flex-shrink: 0;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(245, 133, 10, 0.3);
  }

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.mobile
  }}) {
    width: 50px;
    height: 50px;
    font-size: 1.3rem;
  }
`

export const TimelineContent = styled.div`
  background: ${({ theme }) => {
    return theme.colors.white
  }};
  border: 1px solid ${({ theme }) => {
    return theme.colors.border
  }};
  border-radius: 12px;
  padding: 1.5rem;
  width: 280px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  }

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.mobile
  }}) {
    width: 240px;
    padding: 1.25rem;
  }
`

export const TimelineStepTitle = styled.h3`
  font-family: ${({ theme }) => {
    return theme.fonts.heading
  }};
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => {
    return theme.colors.dark
  }};
  margin-bottom: 0.5rem;
  line-height: 1.3;

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.mobile
  }}) {
    font-size: 1rem;
  }
`

export const TimelineStepDesc = styled.p`
  color: ${({ theme }) => {
    return theme.colors.muted
  }};
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.mobile
  }}) {
    font-size: 0.85rem;
  }
`

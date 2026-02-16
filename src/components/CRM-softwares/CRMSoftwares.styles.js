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

export const SectionLabel = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.orange};
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.75rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 0.9rem;
  }

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
  margin-bottom: 1rem;
  max-width: 600px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.75rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`

export const SectionIntro = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 1rem;
  max-width: 580px;
  margin-bottom: 3rem;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 0.95rem;
    margin-bottom: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: ${({ $featured, theme }) => $featured ? `2px solid ${theme.colors.orange}` : 'none'};
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: box-shadow 0.2s, transform 0.2s;
  position: relative;
  opacity: ${({ $visible }) => $visible ? '1' : '0'};
  transform: translateY(${({ $visible }) => $visible ? '0' : '30px'});
  transition: opacity 0.6s ease-out, transform 0.6s ease-out, box-shadow 0.2s;
  transition-delay: ${({ $delay }) => $delay}s;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);

  &:hover {
    box-shadow: 0 8px 32px rgba(0,0,0,0.08);
    transform: translateY(-3px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 1.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1.25rem;
  }
`

export const CardLogoWrapper = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
`

export const CardName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 0.5rem;
  font-size: 1rem;
`

export const CardDesc = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.85rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`

export const CardButton = styled.a`
  display: inline-block;
  border: 1px solid ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.dark};
  padding: 0.5rem 1.25rem;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 600;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.orange};
    outline-offset: 2px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0.45rem 1rem;
    font-size: 0.8rem;
  }
`
export const FeaturedBadge = styled.span`
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.colors.orange};
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.85rem;
  border-radius: 20px;
  white-space: nowrap;
`

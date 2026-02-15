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

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.mid};
  border-radius: 20px;
  padding: 3rem;
  overflow: hidden;
  opacity: ${({ $visible }) => {
    return $visible ? '1' : '0'
  }};
  transform: translateY(${({ $visible }) => {
    return $visible ? '0' : '30px'
  }});
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 2rem 1.5rem;
    border-radius: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1.5rem 1rem;
    border-radius: 12px;
  }
`

export const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

export const ImageCol = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 16px 48px rgba(0,0,0,0.3);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    border-radius: 8px;
    max-height: 250px;
  }
`

export const TextCol = styled.div`
  display: flex;
  flex-direction: column;
`

export const SectionLabel = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.orange};
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.75rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.75rem;
  }
`

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.15;
  margin-bottom: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.75rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.5rem;
    line-height: 1.2;
  }
`

export const SectionText = styled.p`
  color: rgba(255,255,255,0.65);
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.8;
  margin-bottom: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.9rem;
    line-height: 1.7;
  }
`

export const BenefitList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0;
  padding: 0;
`

export const BenefitItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`

export const BenefitDot = styled.span`
  width: 8px;
  height: 8px;
  background: ${({ theme }) => theme.colors.orange};
  border-radius: 50%;
  margin-top: 8px;
  flex-shrink: 0;
`

export const BenefitText = styled.div`
  strong {
    display: block;
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.95rem;
    font-weight: 500;
    margin-bottom: 0.2rem;
  }

  span {
    color: rgba(255,255,255,0.6);
    font-size: 0.875rem;
    line-height: 1.6;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    strong {
      font-size: 0.9rem;
    }
    span {
      font-size: 0.85rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    strong {
      font-size: 0.875rem;
    }
    span {
      font-size: 0.8rem;
    }
  }
`
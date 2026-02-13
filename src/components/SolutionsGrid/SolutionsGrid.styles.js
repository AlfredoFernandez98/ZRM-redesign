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

export const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.tablet
  }}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.mobile
  }}) {
    gap: 2rem;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.tablet
  }}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.875rem;
  }

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.mobile
  }}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }
`

export const GridCard = styled.div`
  background: ${({ theme }) => {
    return theme.colors.white
  }};
  border: 1px solid ${({ theme }) => {
    return theme.colors.border
  }};
  border-radius: 10px;
  padding: 1.25rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => {
    return theme.colors.dark
  }};
  text-align: center;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.15s;
  cursor: default;

  &:hover {
    border-color: ${({ theme }) => {
      return theme.colors.orange
    }};
    box-shadow: 0 4px 16px rgba(245,133,10,0.1);
    transform: translateY(-2px);
  }

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.tablet
  }}) {
    padding: 1rem;
    font-size: 0.85rem;
  }

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.mobile
  }}) {
    padding: 0.875rem 0.75rem;
    font-size: 0.8rem;
    border-radius: 8px;
  }
`

export const TextCol = styled.div`
  display: flex;
  flex-direction: column;
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
  font-weight: 700;
  color: ${({ theme }) => {
    return theme.colors.dark
  }};
  line-height: 1.15;
  margin-bottom: 1rem;

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.mobile
  }}) {
    font-size: 1.5rem;
    line-height: 1.2;
  }
`

export const Divider = styled.span`
  display: block;
  width: 230px;
  height: 3px;
  background: ${({ theme }) => {
    return theme.colors.orange
  }};
  margin-bottom: 1.25rem;
  border-radius: 2px;

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.mobile
  }}) {
    width: 150px;
    height: 2px;
  }
`

export const BenefitList = styled.ul`
  list-style: none;
  margin: 0 0 2rem 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const BenefitItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  color: ${({ theme }) => {
    return theme.colors.muted
  }};
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.5;

  &::before {
    content: '•';
    color: ${({ theme }) => {
      return theme.colors.orange
    }};
    font-size: 1.1rem;
    flex-shrink: 0;
    line-height: 1.4;
  }

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.mobile
  }}) {
    font-size: 0.85rem;
  }
`

export const SectionText = styled.p`
  color: ${({ theme }) => {
    return theme.colors.muted
  }};
  font-size: 0.9rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  font-weight: 400;

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.mobile
  }}) {
    font-size: 0.85rem;
    margin-bottom: 1.5rem;
  }
`

export const CtaButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => {
    return theme.colors.orange
  }};
  color: ${({ theme }) => {
    return theme.colors.white
  }};
  padding: 0.85rem 1.8rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: background 0.2s, transform 0.15s;
  align-self: flex-start;

  &:hover {
    background: #d97308;
    transform: translateY(-1px);
  }

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.mobile
  }}) {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
    width: 100%;
    justify-content: center;
  }
`
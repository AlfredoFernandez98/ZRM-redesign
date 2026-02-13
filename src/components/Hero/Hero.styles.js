import styled from 'styled-components'

export const HeroSection = styled.section`
  background: ${({ theme }) => {
    return theme.colors.dark
  }};
  padding: 6rem 5% 5rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -80px;
    right: -80px;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(245,133,10,0.15) 0%, transparent 70%);
    pointer-events: none;
  }

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.tablet
  }}) {
    padding: 4rem 5% 3rem;
  }

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.mobile
  }}) {
    padding: 3rem 4% 2.5rem;

    &::before {
      width: 300px;
      height: 300px;
      top: -50px;
      right: -50px;
    }
  }
`

export const HeroLabel = styled.span`
  display: inline-block;
  background: rgba(245,133,10,0.15);
  color: ${({ theme }) => {
    return theme.colors.orange
  }};
  border: 1px solid rgba(245,133,10,0.3);
  padding: 0.3rem 0.9rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.tablet
  }}) {
    font-size: 0.75rem;
  }

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.mobile
  }}) {
    font-size: 0.7rem;
    padding: 0.25rem 0.75rem;
  }
`

export const HeroTitle = styled.h1`
  font-family: ${({ theme }) => {
    return theme.fonts.heading
  }};
  font-size: clamp(2.4rem, 5vw, 3.8rem);
  font-weight: 800;
  color: ${({ theme }) => {
    return theme.colors.white
  }};
  line-height: 1.1;
  max-width: 700px;
  margin-bottom: 1.5rem;

  em {
    font-style: normal;
    color: ${({ theme }) => {
      return theme.colors.orange
    }};
  }

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.mobile
  }}) {
    font-size: 2rem;
    line-height: 1.15;
    margin-bottom: 1rem;
  }
`

export const HeroText = styled.p`
  color: rgba(255,255,255,0.75);
  font-size: 1.1rem;
  max-width: 540px;
  margin-bottom: 2.5rem;
  font-weight: 400;

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.tablet
  }}) {
    font-size: 1rem;
  }

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.mobile
  }}) {
    font-size: 0.95rem;
    margin-bottom: 2rem;
  }
`

export const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.tablet
  }}) {
    flex-direction: column;
    width: 100%;
  }
`

export const BtnPrimary = styled.a`
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
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: #d97308;
    transform: translateY(-1px);
  }

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.tablet
  }}) {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
    width: 100%;
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.mobile
  }}) {
    padding: 0.7rem 1.3rem;
    font-size: 0.875rem;
  }
`

export const BtnSecondary = styled.a`
  background: transparent;
  color: rgba(255,255,255,0.9);
  padding: 0.85rem 1.8rem;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.3);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: border-color 0.2s, color 0.2s;
  display: inline-block;

  &:hover {
    border-color: rgba(255,255,255,0.5);
    color: ${({ theme }) => {
      return theme.colors.white
    }};
  }

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.tablet
  }}) {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
    width: 100%;
    justify-content: center;
    text-align: center;
  }

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.mobile
  }}) {
    padding: 0.7rem 1.3rem;
    font-size: 0.875rem;
  }
`

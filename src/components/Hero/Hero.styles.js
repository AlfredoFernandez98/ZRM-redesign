import styled from 'styled-components'

export const HeroSection = styled.section`
  background: ${({ theme }) => theme.colors.dark};
  padding: 5rem 5%;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -80px;
    right: -80px;
    width: 500px;
    height: 500px;
    background: radial-gradient(
      circle, 
      rgba(245,133,10,0.20) 0%, 
      rgba(245,133,10,0.08) 50%,
      transparent 70%
    );
    pointer-events: none;
    animation: gradientPulse 8s ease-in-out infinite;
  }

  @keyframes gradientPulse {
    0%, 100% {
      transform: scale(1) translate(0, 0);
      opacity: 1;
    }
    50% {
      transform: scale(1.1) translate(-10px, 10px);
      opacity: 0.8;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3rem 5%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 2rem 4%;

    &::before {
      width: 250px;
      height: 250px;
      top: -40px;
      right: -40px;
    }
  }
`

export const HeroLabel = styled.span`
  display: inline-block;
  background: rgba(245,133,10,0.15);
  color: ${({ theme }) => theme.colors.orange};
  border: 1px solid rgba(245,133,10,0.3);
  padding: 0.3rem 0.9rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  animation: fadeInUp 0.6s ease-out 0.2s backwards;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 0.75rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.7rem;
    padding: 0.25rem 0.75rem;
  }
`

export const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 800;
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.1;
  max-width: 900px;
  margin-bottom: 2rem;
  animation: fadeInUp 0.6s ease-out 0.4s backwards;

  em {
    font-style: normal;
    color: ${({ theme }) => theme.colors.orange};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.5rem;
    line-height: 1.15;
    margin-bottom: 1.5rem;
  }
`

export const HeroText = styled.p`
  color: rgba(255,255,255,0.75);
  font-size: 1.3rem;
  max-width: 700px;
  margin-bottom: 2rem;
  font-weight: 400;
  line-height: 1.7;
  animation: fadeInUp 0.6s ease-out 0.6s backwards;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.15rem;
    margin-bottom: 1.75rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`

export const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  animation: fadeInUp 0.6s ease-out 0.9s backwards;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    width: 100%;
  }
`

export const BtnPrimary = styled.a`
  background: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.85rem 1.8rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: background 0.2s ease, transform 0.15s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  animation: breathe 3s ease-in-out infinite;

  @keyframes breathe {
    0%, 100% {
      transform: scale(1);
      box-shadow: 0 4px 12px rgba(245, 133, 10, 0.3);
    }
    50% {
      transform: scale(1.02);
      box-shadow: 0 6px 20px rgba(245, 133, 10, 0.5);
    }
  }

  &:hover {
    background: #d97308;
    transform: translateY(-2px) scale(1);
    animation: none;
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => {
      return theme.colors.orange
    }};
    outline-offset: 2px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
    width: 100%;
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0.75rem 1.3rem;
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
  transition: border-color 0.2s ease, color 0.2s ease;
  display: inline-block;

  &:hover {
    border-color: rgba(255,255,255,0.5);
    color: ${({ theme }) => theme.colors.white};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.orange};
    outline-offset: 2px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
    width: 100%;
    justify-content: center;
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0.75rem 1.3rem;
    font-size: 0.875rem;
  }
`

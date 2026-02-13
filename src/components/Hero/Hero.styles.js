import styled from 'styled-components'

export const HeroSection = styled.section`
  background: ${({ theme }) => theme.colors.dark};
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

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 4rem 5% 3rem;
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
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`

export const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2.4rem, 5vw, 3.8rem);
  font-weight: 800;
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.1;
  max-width: 700px;
  margin-bottom: 1.5rem;

  em {
    font-style: normal;
    color: ${({ theme }) => theme.colors.orange};
  }
`

export const HeroText = styled.p`
  color: rgba(255,255,255,0.65);
  font-size: 1.1rem;
  max-width: 540px;
  margin-bottom: 2.5rem;
  font-weight: 300;
`

export const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`

export const BtnPrimary = styled.a`
  background: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.85rem 1.8rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: background 0.2s, transform 0.15s;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: #d97308;
    transform: translateY(-1px);
  }
`

export const BtnSecondary = styled.a`
  background: transparent;
  color: rgba(255,255,255,0.8);
  padding: 0.85rem 1.8rem;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.2);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: border-color 0.2s, color 0.2s;

  &:hover {
    border-color: rgba(255,255,255,0.5);
    color: ${({ theme }) => theme.colors.white};
  }
`
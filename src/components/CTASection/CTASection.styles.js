import styled from 'styled-components'

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.dark};
  padding: 7rem 5%;
  text-align: center;
  position: relative;
  overflow: hidden;
  opacity: ${({ $visible }) => $visible ? '1' : '0'};
  transform: translateY(${({ $visible }) => $visible ? '0' : '40px'});
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;

  &::before {
    content: '';
    position: absolute;
    bottom: -100px;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    height: 300px;
    background: radial-gradient(ellipse, rgba(245,133,10,0.25) 0%, transparent 70%);
    pointer-events: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 5rem 5%;

    &::before {
      width: 400px;
      height: 200px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 3.5rem 4%;

    &::before {
      width: 300px;
      height: 150px;
    }
  }
`

export const SectionLabel = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.orange};
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.75rem;
  }
`

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.15;
  max-width: 600px;
  margin: 0 auto 1.25rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.75rem;
    line-height: 1.2;
  }
`

export const SectionText = styled.p`
  color: rgba(255,255,255,0.55);
  font-size: 1rem;
  max-width: 480px;
  margin: 0 auto 2.5rem;
  font-weight: 300;
  line-height: 1.7;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 0.95rem;
    margin-bottom: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.9rem;
    margin-bottom: 1.75rem;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
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

  &:hover {
    background: #d97308;
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.orange};
    outline-offset: 2px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
`

export const BtnSecondary = styled.a`
  background: rgba(255,255,255,0.1);
  color: ${({ theme }) => theme.colors.white};
  padding: 0.85rem 1.8rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: rgba(255,255,255,0.2);
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.orange};
    outline-offset: 2px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
`
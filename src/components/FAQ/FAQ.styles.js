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
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.75rem;

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
  margin-bottom: 2.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const FaqItem = styled.div`
  border: 1px solid ${({ $open, theme }) => $open ? theme.colors.orange : theme.colors.white};
  border-radius: 10px;
  overflow: hidden;
  background: white;
  opacity: ${({ $visible }) => $visible ? '1' : '0'};
  transform: translateY(${({ $visible }) => $visible ? '0' : '20px'});
  
  /* Separate transitions - delay only for initial visibility animation */
  transition: 
    border-color 0.3s ease 0s,
    opacity 0.6s ease-out ${({ $delay, $visible }) => $visible ? `${$delay}s` : '0s'},
    transform 0.6s ease-out ${({ $delay, $visible }) => $visible ? `${$delay}s` : '0s'};
`

export const FaqQuestion = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  background: white;
  border: none;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.dark};
  text-align: left;
  transition: background 0.2s, color 0.2s;
  font-family: ${({ theme }) => theme.fonts.body};

  &:hover {
    background: ${({ theme }) => theme.colors.orange};
    color: white;
  }

  &:hover span {
    color: white;
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.orange};
    outline-offset: -3px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 1rem 1.25rem;
    font-size: 0.9rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0.875rem 1rem;
    font-size: 0.85rem;
  }
`

export const FaqChevron = styled.span`
  color: ${({ theme }) => theme.colors.orange};
  font-size: 1.1rem;
  transition: transform 0.2s;
  flex-shrink: 0;

  ${({ $open }) => $open && `
    transform: rotate(180deg);
  `}
`

export const FaqAnswer = styled.div`
  max-height: ${({ $open }) => $open ? '500px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;

  > div {
    padding: 1rem;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 0.875rem;
    line-height: 1.7;
    font-weight: 400;
    opacity: ${({ $open }) => $open ? '1' : '0'};
    transition: opacity 0.2s ease-in-out ${({ $open }) => $open ? '0.15s' : '0s'};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    > div {
      padding: 0 1.25rem 1rem 1.25rem;
      font-size: 0.85rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    > div {
      padding: 0 1rem 0.875rem 1rem;
      font-size: 0.8rem;
    }
  }
`
import styled from 'styled-components'

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.cream};
  padding: 5rem 5%;
`

export const SectionLabel = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.orange};
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.75rem;
`

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.dark};
  line-height: 1.15;
  margin-bottom: 2.5rem;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const FaqItem = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  overflow: hidden;
  transition: border-color 0.2s;

  ${({ $open, theme }) => $open && `
    border-color: ${theme.colors.orange};
  `}
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
  font-weight: 500;
  color: ${({ theme }) => theme.colors.dark};
  text-align: left;
  transition: background 0.2s;
  font-family: ${({ theme }) => theme.fonts.body};

  &:hover {
    background: ${({ theme }) => theme.colors.orange};
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
  padding: ${({ $open }) => $open ? '0 1.5rem 1.25rem' : '0 1.5rem'};
  max-height: ${({ $open }) => $open ? '200px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.875rem;
  line-height: 1.7;
`
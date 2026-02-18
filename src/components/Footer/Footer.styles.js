import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.dark};
  padding: 4rem 5% 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3rem 5% 1.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 2.5rem 4% 1.5rem;
  }
`

export const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(255,255,255,0.1);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding-bottom: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

export const BrandCol = styled.div``

export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  img {
    height: 40px;
    width: auto;
    object-fit: contain;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    img {
      height: 35px;
    }
  }
`

export const BrandText = styled.p`
  color: rgba(255,255,255,0.45);
  font-size: 0.85rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.8rem;
  }
`

export const ContactInfo = styled.div`
  color: rgba(255,255,255,0.45);
  font-size: 0.83rem;
  line-height: 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.8rem;
  }
`

export const FooterCol = styled.div``

export const ColTitle = styled.h4`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 0.85rem;
  margin-bottom: 1.25rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }
`

export const ColList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const ColLink = styled.a`
  color: rgba(255,255,255,0.45);
  text-decoration: none;
  font-size: 0.85rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.orange};
    outline-offset: 2px;
    border-radius: 2px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.8rem;
  }
`

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;
  color: rgba(255,255,255,0.3);
  font-size: 0.8rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.75rem;
    padding-top: 1.25rem;
  }
`
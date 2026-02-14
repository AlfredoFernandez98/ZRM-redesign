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

export const Card = styled.div`
  background: ${({ theme }) => {
    return theme.colors.white
  }};
  border-radius: 20px;
  overflow: hidden;
  max-width: 1300px;
  margin: 0 auto;
  box-shadow: 0 4px 24px rgba(0,0,0,0.06);

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.mobile
  }}) {
    border-radius: 16px;
  }
`

export const QuoteSection = styled.div`
  padding: 2rem;

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.tablet
  }}) {
    padding: 1.5rem 1.25rem;
  }

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.mobile
  }}) {
    padding: 1.25rem 1rem;
  }
`

export const QuoteMark = styled.span`
  font-family: ${({ theme }) => {
    return theme.fonts.heading
  }};
  font-size: 4rem;
  color: ${({ theme }) => {
    return theme.colors.orange
  }};
  line-height: 0.5;
  display: block;
  margin-bottom: 1rem;
  opacity: 1;

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.tablet
  }}) {
    font-size: 3.5rem;
    margin-bottom: 0.75rem;
  }

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.mobile
  }}) {
    font-size: 3rem;
  }
`
export const QuoteMarkEnd = styled.span`
  font-family: ${({ theme }) => {
    return theme.fonts.heading
  }};
  font-size: 4rem;
  color: ${({ theme }) => {
    return theme.colors.orange
  }};
  line-height: 0.5;
  display: block;
  text-align: right;
  opacity: 1;
  margin-top: 0.75rem;
  margin-bottom: 1rem;

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.tablet
  }}) {
    font-size: 3.5rem;
    margin-bottom: 0.75rem;
  }

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.mobile
  }}) {
    font-size: 3rem;
  }
`
export const QuoteText = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => {
    return theme.colors.dark
  }};
  line-height: 1.6;
  font-style: italic;
  font-weight: 400;
  margin-bottom: 1.5rem;
  text-align: center;

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.tablet
  }}) {
    font-size: 1.25rem;
    margin-bottom: 1.25rem;
  }

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.mobile
  }}) {
    font-size: 1.1rem;
    line-height: 1.5;
  }
`

export const AuthorRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;

  img {
    @media (max-width: ${({ theme }) => {
      return theme.breakpoints.mobile
    }}) {
      height: 32px !important;
    }
  }
`

export const AuthorLogo = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.7rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.dark};
  letter-spacing: 2px;
`

export const AuthorInfo = styled.div`
  strong {
    display: block;
    font-size: 1.5rem;
    color: ${({ theme }) => {
      return theme.colors.dark
    }};
    font-weight: 700;
  }

  span {
    font-size: 1.5rem;
    color: ${({ theme }) => {
      return theme.colors.muted
    }};
    font-weight: 400;
  }

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.tablet
  }}) {
    strong {
      font-size: 1.25rem;
    }
    span {
      font-size: 1.25rem;
    }
  }

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.mobile
  }}) {
    strong {
      font-size: 1.1rem;
    }
    span {
      font-size: 1.1rem;
    }
  }
`

export const ImageWrapper = styled.div`
  width: 100%;
  height: 450px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    display: block;
  }

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.tablet
  }}) {
    height: 300px;
  }

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.mobile
  }}) {
    height: 250px;
  }
`

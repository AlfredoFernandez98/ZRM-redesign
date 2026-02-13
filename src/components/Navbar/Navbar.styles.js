import styled from 'styled-components'

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: ${({ theme }) => {
    return theme.colors.dark
  }};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  height: 72px;
  min-height: 72px;

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.mobile
  }}) {
    padding: 0 4%;
    height: 64px;
    min-height: 64px;
  }
`

export const Logo = styled.span`
  font-family: ${({ theme }) => {
    return theme.fonts.heading
  }};
  font-weight: 800;
  font-size: 1.5rem;
  color: ${({ theme }) => {
    return theme.colors.white
  }};

  span {
    color: ${({ theme }) => {
      return theme.colors.orange
    }};
  }

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.mobile
  }}) {
    font-size: 1.3rem;
  }
`

export const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.tablet
  }}) {
    display: none;
  }
`

export const NavLink = styled.a`
  color: rgba(255,255,255,0.8);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => {
      return theme.colors.white
    }};
  }
`

export const NavCta = styled.a`
  background: ${({ theme }) => {
    return theme.colors.orange
  }};
  color: ${({ theme }) => {
    return theme.colors.white
  }};
  padding: 0.6rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.2s;

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.tablet
  }}) {
    display: none;
  }

  &:hover {
    background: #E67700;
    transform: translateY(-2px);
  }
`

export const BurgerButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
  }

  span {
    display: block;
    width: 100%;
    height: 3px;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 2px;
    transition: all 0.3s;

    &:nth-child(1) {
      transform: ${({ $open }) => {
        return $open ? 'translateY(8.5px) rotate(45deg)' : 'none'
      }};
    }

    &:nth-child(2) {
      opacity: ${({ $open }) => {
        return $open ? '0' : '1'
      }};
    }

    &:nth-child(3) {
      transform: ${({ $open }) => {
        return $open ? 'translateY(-8.5px) rotate(-45deg)' : 'none'
      }};
    }
  }
`

export const MobileMenu = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: ${({ $open }) => {
      return $open ? 'flex' : 'none'
    }};
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background: ${({ theme }) => theme.colors.white};
    z-index: 1002;
    padding: 0;
    overflow-y: auto;
    animation: ${({ $open }) => {
      return $open ? 'slideIn 0.3s ease-out' : 'none'
    }};
  }

  @media (min-width: calc(${({ theme }) => theme.breakpoints.tablet} + 1px)) {
    display: none;
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export const CloseButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  position: relative;

  span {
    display: block;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.dark};
    border-radius: 2px;
    position: absolute;
    transition: all 0.3s;

    &:nth-child(1) {
      transform: rotate(45deg);
    }

    &:nth-child(2) {
      transform: rotate(-45deg);
    }
  }
`

export const MobileMenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 5%;
  min-height: 72px;
  height: 72px;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  background: ${({ theme }) => {
    return theme.colors.white
  }};

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.mobile
  }}) {
    padding: 1rem 4%;
    min-height: 64px;
    height: 64px;
  }
`

export const MobileMenuLogo = styled.span`
  font-family: ${({ theme }) => {
    return theme.fonts.heading
  }};
  font-weight: 800;
  font-size: 1.5rem;
  color: ${({ theme }) => {
    return theme.colors.dark
  }};

  span {
    color: ${({ theme }) => {
      return theme.colors.orange
    }};
  }

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.mobile
  }}) {
    font-size: 1.3rem;
  }
`

export const MobileMenuNav = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 1rem 5%;
  gap: 0;
  flex: 1;

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.mobile
  }}) {
    padding: 0.75rem 4%;
  }
`

export const MobileMenuItem = styled.a`
  color: ${({ theme }) => {
    return theme.colors.dark
  }};
  text-decoration: none;
  font-size: 1.125rem;
  font-weight: 500;
  padding: 1.25rem 0;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  position: relative;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    color: ${({ theme }) => {
      return theme.colors.orange
    }};
  }

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.mobile
  }}) {
    font-size: 1rem;
    padding: 1rem 0;
  }

  ${({ $hasDropdown }) => {
    if ($hasDropdown) {
      return `
        &::after {
          content: '›';
          font-size: 1.5rem;
          font-weight: 300;
          transform: rotate(90deg);
          line-height: 1;
        }
      `
    }
  }}
`

export const MobileMenuFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 5% 3rem;
  border-top: 1px solid rgba(0,0,0,0.1);

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.mobile
  }}) {
    padding: 1.5rem 4% 2rem;
  }
`

export const MobileMenuCta = styled.a`
  background: ${({ $variant, theme }) => {
    return $variant === 'outline' ? 'transparent' : theme.colors.dark
  }};
  color: ${({ $variant, theme }) => {
    return $variant === 'outline' ? theme.colors.dark : theme.colors.white
  }};
  border: ${({ $variant, theme }) => {
    return $variant === 'outline' ? `2px solid ${theme.colors.dark}` : 'none'
  }};
  padding: 0.875rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  transition: all 0.2s;

  &:hover {
    background: ${({ $variant, theme }) => {
      return $variant === 'outline' ? theme.colors.dark : '#1a1a1a'
    }};
    color: ${({ theme }) => {
      return theme.colors.white
    }};
  }

  @media (max-width: ${({ theme }) => {
    return theme.breakpoints.mobile
  }}) {
    padding: 0.75rem 1.25rem;
    font-size: 0.95rem;
  }
`

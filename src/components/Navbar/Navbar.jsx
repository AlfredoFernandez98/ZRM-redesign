import {
    Nav, Logo, NavLinks, NavLink, NavCta,
    BurgerButton, MobileMenu, MobileMenuHeader, MobileMenuLogo,
    MobileMenuNav, MobileMenuItem, MobileMenuFooter, MobileMenuCta,
    CloseButton
  } from './Navbar.styles'
  import { useState, useEffect } from 'react'


function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden'
        console.log('Mobile menu opened')
      } else {
        document.body.style.overflow = 'unset'
        console.log('Mobile menu closed')
      }
      return () => {
        document.body.style.overflow = 'unset'
      }
    }, [isOpen])

  return (
    <>
      <Nav>
        <Logo>ZRM<span>.</span></Logo>
        <NavLinks>
          <li><NavLink href="#">Services</NavLink></li>
          <li><NavLink href="#">Løsninger</NavLink></li>
          <li><NavLink href="#">Priser</NavLink></li>
          <li><NavLink href="#">Om ZRM</NavLink></li>
          <li><NavCta href="#">Kontakt os →</NavCta></li>
        </NavLinks>

        <BurgerButton 
          $open={isOpen} 
          onClick={() => {
            console.log('Burger clicked, current state:', isOpen)
            setIsOpen(!isOpen)
          }}
        >
          <span /><span /><span />
        </BurgerButton>
      </Nav>

      <MobileMenu $open={isOpen}>
        <MobileMenuHeader>
          <MobileMenuLogo>ZRM<span>.</span></MobileMenuLogo>
          <CloseButton onClick={() => setIsOpen(false)}>
            <span /><span />
          </CloseButton>
        </MobileMenuHeader>

        <MobileMenuNav>
          <MobileMenuItem $hasDropdown href="#" onClick={() => setIsOpen(false)}>
            Services
          </MobileMenuItem>
          <MobileMenuItem href="#" onClick={() => setIsOpen(false)}>
            Priser
          </MobileMenuItem>
          <MobileMenuItem $hasDropdown href="#" onClick={() => setIsOpen(false)}>
            Ressourcer
          </MobileMenuItem>
          <MobileMenuItem $hasDropdown href="#" onClick={() => setIsOpen(false)}>
            Industrier
          </MobileMenuItem>
          <MobileMenuItem href="#" onClick={() => setIsOpen(false)}>
            Om ZRM
          </MobileMenuItem>
          <MobileMenuItem href="#" onClick={() => setIsOpen(false)}>
            🇩🇰
          </MobileMenuItem>
        </MobileMenuNav>

        <MobileMenuFooter>
          <MobileMenuCta $variant="outline" href="#" onClick={() => setIsOpen(false)}>
            Kontakt salg
          </MobileMenuCta>
          <MobileMenuCta href="#" onClick={() => setIsOpen(false)}>
            Kontakt os
          </MobileMenuCta>
        </MobileMenuFooter>
      </MobileMenu>
    </>
  )
}

export default Navbar
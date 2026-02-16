import {
    Nav, Logo, NavLinks, NavLink, NavCta,
    BurgerButton, MobileMenu, MobileMenuHeader, MobileMenuLogo,
    MobileMenuNav, MobileMenuItem, MobileMenuFooter, MobileMenuCta,
    CloseButton, ProgressBar
  } from './Navbar.styles'
  import { useState, useEffect } from 'react'
  import logoImg from '../../assets/Logo.png'


function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrollProgress, setScrollProgress] = useState(0)
    
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden'
        
      } else {
        document.body.style.overflow = 'unset'
        
      }
      return () => {
        document.body.style.overflow = 'unset'
      }
    }, [isOpen])

    useEffect(() => {
      let ticking = false
      let lastUpdate = 0

      const handleScroll = () => {
        const now = Date.now()
        
        if (!ticking && now - lastUpdate > 50) {
          window.requestAnimationFrame(() => {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
            const scrolled = (window.scrollY / windowHeight) * 100
            const rounded = Math.round(scrolled * 10) / 10
            setScrollProgress(rounded)
            lastUpdate = Date.now()
            ticking = false
          })
          ticking = true
        }
      }

      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [])

  return (
    <>
      <Nav>
        <Logo>
          <img src={logoImg} alt="ZRM Logo" />
        </Logo>
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
            setIsOpen(!isOpen)
          }}
        >
          <span /><span /><span />
        </BurgerButton>

        <ProgressBar $progress={scrollProgress} />
      </Nav>

      <MobileMenu $open={isOpen}>
        <MobileMenuHeader>
          <MobileMenuLogo>
            <img src={logoImg} alt="ZRM Logo" />
          </MobileMenuLogo>
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
            🇩Dansk
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
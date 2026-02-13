import {
    HeroSection, HeroLabel, HeroTitle,
    HeroText, HeroButtons, BtnPrimary, BtnSecondary
  } from './Hero.styles'
  
  function Hero() {
    return (
      <HeroSection>
        <HeroLabel>Udvikling af platforme og software</HeroLabel>
        <HeroTitle>
          Fra <em>idé</em> til<br />færdig løsning
        </HeroTitle>
        <HeroText>
        I en digital verden er effektive softwareløsninger og digitale platforme afgørende 
        for at skabe vækst og konkurrencefordel. Hos ZRM tilbyder vi software udvikling, 
        der er tilpasset din virksomheds unikke behov, så du får en løsning, der optimerer 
        dine arbejdsgange og understøtter din strategi.
        </HeroText>
        <HeroButtons>
          <BtnPrimary href="#">Book en gratis demo →</BtnPrimary>
          <BtnSecondary href="#">Se vores løsninger</BtnSecondary>
        </HeroButtons>
      </HeroSection>
    )
  }
  
  export default Hero
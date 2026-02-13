import {
    FooterWrapper, FooterTop, FooterBottom,
    BrandCol, FooterLogo, BrandText, ContactInfo,
    FooterCol, ColTitle, ColList, ColLink
  } from './Footer.styles'
  
  function Footer() {
    return (
      <FooterWrapper>
        <FooterTop>
          <BrandCol>
            <FooterLogo>ZRM<span>.</span></FooterLogo>
            <BrandText>
              Vi er specialister i optimering og automatisering af arbejdsgange og processer. Etableret i 2022 i hjertet af København.
            </BrandText>
            <ContactInfo>
              Brolæggerstræde 6, 1211 København K<br />
              +45 4290 6317<br />
              info@zrm.dk
            </ContactInfo>
          </BrandCol>
  
          <FooterCol>
            <ColTitle>Services</ColTitle>
            <ColList>
              <li><ColLink href="#">Custom CRM</ColLink></li>
              <li><ColLink href="#">Digital rådgivning</ColLink></li>
              <li><ColLink href="#">Hjemmesider</ColLink></li>
              <li><ColLink href="#">Software-udvikling</ColLink></li>
            </ColList>
          </FooterCol>
  
          <FooterCol>
            <ColTitle>Find rundt</ColTitle>
            <ColList>
              <li><ColLink href="#">Udforsk alle services</ColLink></li>
              <li><ColLink href="#">Træning</ColLink></li>
              <li><ColLink href="#">Kunstig intelligens</ColLink></li>
              <li><ColLink href="#">Samarbejdspartnere</ColLink></li>
            </ColList>
          </FooterCol>
  
          <FooterCol>
            <ColTitle>Information</ColTitle>
            <ColList>
              <li><ColLink href="#">Priser</ColLink></li>
              <li><ColLink href="#">Support</ColLink></li>
              <li><ColLink href="#">Om ZRM</ColLink></li>
              <li><ColLink href="#">Kontakt</ColLink></li>
            </ColList>
          </FooterCol>
        </FooterTop>
  
        <FooterBottom>
          <span>© 2025 ZRM.DK · CVR: 43 69 43 67</span>
          <span>Autoriseret Zoho-partner</span>
        </FooterBottom>
      </FooterWrapper>
    )
  }
  
  export default Footer
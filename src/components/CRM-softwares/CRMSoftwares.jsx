import {
    Section, SectionLabel, SectionTitle, SectionIntro,
    Grid, Card, CardLogoWrapper, CardName, CardDesc, CardButton,FeaturedBadge
  } from './CRMSoftwares.styles'
  
  const platforms = [
    {
      name: 'Microsoft Dynamics 365',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Microsoft_Dynamics_365_Logo_%282021%E2%80%93present%29.svg',
      desc: 'Komplet ERP & CRM platform til større organisationer.',
      featured: false,
    },
    {
      name: 'Zoho',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/ZOHO_New.png',
      desc: 'Autoriseret Zoho-partner med dyb platform-ekspertise.',
      featured: true,
    },
    {
      name: 'HubSpot',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/HubSpot_Logo.svg/320px-HubSpot_Logo.svg.png',
      desc: 'Marketing, sales og service i én integreret CRM-platform.',
      featured: false,
    },
  ]
  
  function CRMSoftwares() {
    return (
      <Section>
        <SectionLabel>Integrationer</SectionLabel>
        <SectionTitle>Mest populære CRM-softwares</SectionTitle>
        <SectionIntro>
          Vi arbejder med markedets bedste platforme og er autoriseret Zoho-partner.
        </SectionIntro>
        <Grid>
          {platforms.map((platform) => (
            <Card key={platform.name} $featured={platform.featured}>
            {platform.featured && <FeaturedBadge>⭐ Anbefalet partner</FeaturedBadge>}
            <CardLogoWrapper>
              <img 
                src={platform.logoUrl} 
                alt={platform.name}
                style={{ maxHeight: '48px', maxWidth: '140px', objectFit: 'contain' }}
              />
              </CardLogoWrapper>
              <CardName>{platform.name}</CardName>
              <CardDesc>{platform.desc}</CardDesc>
              <CardButton href="#">Læs mere →</CardButton>
            </Card>
          ))}
        </Grid>
        </Section>
    )
}

export default CRMSoftwares
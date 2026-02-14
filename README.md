# ZRM Software-udvikling – Redesign

## Om projektet

Dette er mit redesign af ZRM's software-udvikling side som en del af deres frontend opgave. Jeg har valgt at bygge det som en fungerende React applikation frem for en statisk prototype, fordi jeg gerne ville vise hvordan jeg strukturerer og bygger et rigtigt projekt.
---
## Sådan kører du projektet
```bash
git clone https://github.com/AlfredoFernandez98/ZRM-redesign.git
cd ZRM-redesign
npm install
npm run dev
```

Åbn http://localhost:5173 i din browser.

---
## Teknologier

- React (Vite)
- Styled-components
- Komponent-baseret arkitektur
---

## Projektstruktur
```
src/
  components/
    Navbar/
    Hero/
    CRMSoftwares/
    SoftwareInfo/
    DigitalPlatform/
    SolutionsGrid/
    Testimonial/
    CTASection/
    Timeline/
    FAQ/
    Footer/
  pages/
    Home.jsx
  styles/
    GlobalStyles.js
    theme.js
```

---
## Før/efter

**Original side:** https://zrm.dk/services-alle-losninger/software-udvikling/

Den originale side er opbygget som en lang teksttung side uden tydelige visuelle sektioner. Mit redesign opdeler indholdet i klare blokke med skiftende baggrunde, stærkere overskrifter og tydeligere knapper – så brugeren hurtigere kan orientere sig.

---


## Hvad jeg har ændret

Jeg tog udgangspunkt i den originale side og forsøgte at gøre den mere overskuelig og lettere at navigere i. Jeg har omstruktureret indholdet så det følger en mere naturlig rækkefølge – fra hvad ZRM tilbyder, til hvordan de arbejder, og til sidst en tydelig opfordring til at tage kontakt. Sektionerne skifter bevidst mellem mørke og lyse baggrunde for at give siden luft og gøre det nemmere at skimme.

## Hvorfor

Jeg oplevede at den originale side havde meget tekst samlet på en gang, hvilket kan gøre det svært at finde det vigtigste hurtigt. Mit mål var at bryde indholdet op i mindre bidder, så brugeren ikke bliver overvældet. Jeg har forsøgt at gøre call-to-actions (knapper der opfordrer brugeren til handling) tydeligere og mere konsistente, så det altid er klart hvad næste skridt er.

## Hvordan det forbedrer brugeroplevelsen

Jeg tror at siden nu er lettere at orientere sig på – især på mobil. Ved at samle relateret indhold i klare sektioner og tilføje visuelle pauser, håber jeg at brugeren hurtigere kan finde det de leder efter og føle sig tryg ved at tage kontakt til ZRM.

---

## Farvevalg

Valget af mørkeblå som primær baggrund og orange som accent-farve er ikke tilfældigt. Forskning inden for farvepsykologi viser at farver påvirker os mere end vi tror - de styrer vores opmærksomhed og adfærd.

Orange bruges strategisk som det forskerne kalder en "kontrasteffekt" – en varm, stærk farve der fremhæver det vigtigste og guider brugerens øje mod de vigtige knapper. Forskningen viser at varme farver generelt opfattes positivt, hvilket understøtter brugen af orange til at skabe energi og handling på siden.

Den mørkeblå baggrund fungerer som en rolig, neutral base der styrker koncentrationen og lader indholdet tale. Ved at undgå flere stærke farver på samme tid sikrer vi at siden ikke distraherer, men i stedet guider brugeren naturligt gennem indholdet.

**Kilde:** [Kinnarps – Farver påvirker, hvordan vi har det og fungerer som mennesker](https://www.kinnarps.dk/viden/forskellige-farver-pavirker-os-pa-forskellige-mader/)

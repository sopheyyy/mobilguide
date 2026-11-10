import type { MaterialIcons } from "@expo/vector-icons";

import { ADDITIONAL_GUIDES } from "./additional-guides";

export type PhoneType = "unknown" | "iphone" | "android";
export type GuideCategoryId =
  | "opkald"
  | "beskeder"
  | "billeder"
  | "internet"
  | "apps"
  | "sikkerhed"
  | "indstillinger";
export type IllustrationKind =
  | "contacts"
  | "dial"
  | "messages"
  | "camera"
  | "photos"
  | "wifi"
  | "browser"
  | "store"
  | "shield"
  | "text"
  | "volume";
export type MaterialIconName = React.ComponentProps<typeof MaterialIcons>["name"];

export interface GuideStep {
  title: string;
  description: string;
  illustration: IllustrationKind;
  focus?: string;
}

export interface MobileGuide {
  id: string;
  title: string;
  summary: string;
  category: GuideCategoryId;
  icon: MaterialIconName;
  minutes: number;
  keywords: string[];
  steps: Record<"iphone" | "android", GuideStep[]>;
}

export const CATEGORIES: {
  id: GuideCategoryId;
  title: string;
  icon: MaterialIconName;
  description: string;
}[] = [
  { id: "opkald", title: "Opkald", icon: "call", description: "Ring og tag telefonen" },
  { id: "beskeder", title: "Beskeder", icon: "chat-bubble-outline", description: "Skriv og send" },
  { id: "billeder", title: "Billeder", icon: "photo-camera", description: "Tag og find fotos" },
  { id: "internet", title: "Internet", icon: "language", description: "Wi-Fi og søgning" },
  { id: "apps", title: "Apps", icon: "apps", description: "Hent nye apps" },
  { id: "sikkerhed", title: "Sikkerhed", icon: "shield", description: "Pas på svindel" },
  { id: "indstillinger", title: "Indstillinger", icon: "tune", description: "Tilpas din mobil" },
];

const step = (
  title: string,
  description: string,
  illustration: IllustrationKind,
  focus?: string,
): GuideStep => ({ title, description, illustration, focus });

const CORE_GUIDES: MobileGuide[] = [
  {
    id: "ring-kontakt",
    title: "Ring til en person",
    summary: "Find en kontakt, og ring med et enkelt tryk.",
    category: "opkald",
    icon: "call",
    minutes: 2,
    keywords: ["telefon", "ringe", "kontakt", "opkald"],
    steps: {
      iphone: [
        step("Åbn Telefon", "Find den grønne app med et telefonrør, og tryk på den.", "dial", "Telefon"),
        step("Find personen", "Tryk på Kontakter nederst, og find navnet på den person, du vil ringe til.", "contacts", "Kontakter"),
        step("Tryk på navnet", "Vælg den rigtige person på listen. Du kan se personens telefonnummer.", "contacts", "Navn"),
        step("Ring op", "Tryk på det grønne telefonrør ud for nummeret. Vent, til personen svarer.", "dial", "Ring op"),
      ],
      android: [
        step("Åbn Telefon", "Find appen Telefon. Den har som regel et grønt telefonrør.", "dial", "Telefon"),
        step("Åbn Kontakter", "Tryk på fanen Kontakter eller person-ikonet i Telefon-appen.", "contacts", "Kontakter"),
        step("Vælg en person", "Rul til navnet, eller tryk på søgefeltet og skriv de første bogstaver.", "contacts", "Søg"),
        step("Ring op", "Tryk på personens navn og derefter på det grønne telefonrør.", "dial", "Ring op"),
      ],
    },
  },
  {
    id: "besvar-opkald",
    title: "Tag telefonen",
    summary: "Sådan svarer du, når mobilen ringer.",
    category: "opkald",
    icon: "phone-in-talk",
    minutes: 1,
    keywords: ["svare", "besvare", "ringe", "opkald"],
    steps: {
      iphone: [
        step("Se hvem der ringer", "Når skærmen lyser, står personens navn eller nummer her.", "dial", "Indgående opkald"),
        step("Svar på opkaldet", "Tryk på den grønne knap med et telefonrør. Hvis mobilen er låst, træk den grønne skyder mod højre.", "dial", "Svar"),
        step("Læg på igen", "Når samtalen er færdig, tryk på den røde knap med et telefonrør.", "dial", "Afslut"),
      ],
      android: [
        step("Se hvem der ringer", "Når mobilen ringer, vises navnet eller nummeret på skærmen.", "dial", "Indgående opkald"),
        step("Svar på opkaldet", "Tryk på det grønne telefonrør, eller træk den grønne knap op, hvis skærmen beder om det.", "dial", "Svar"),
        step("Læg på igen", "Tryk på den røde knap med et telefonrør, når du vil afslutte samtalen.", "dial", "Afslut"),
      ],
    },
  },
  {
    id: "send-besked",
    title: "Send en besked",
    summary: "Skriv en kort besked til familie eller venner.",
    category: "beskeder",
    icon: "chat-bubble-outline",
    minutes: 3,
    keywords: ["sms", "tekst", "skrive", "besked", "chat"],
    steps: {
      iphone: [
        step("Åbn Beskeder", "Tryk på den grønne app, der hedder Beskeder.", "messages", "Beskeder"),
        step("Start en besked", "Tryk på blyanten eller firkanten øverst til højre.", "messages", "Ny besked"),
        step("Vælg en modtager", "Tryk på Til-feltet, og skriv personens navn eller telefonnummer.", "messages", "Til"),
        step("Skriv og send", "Tryk i feltet nederst, skriv din besked, og tryk på den blå pil.", "messages", "Send"),
      ],
      android: [
        step("Åbn Beskeder", "Tryk på appen Beskeder. Ikonet ligner ofte en taleboble.", "messages", "Beskeder"),
        step("Start en besked", "Tryk på plusset eller knappen Start chat nederst.", "messages", "Ny besked"),
        step("Vælg en modtager", "Skriv personens navn eller telefonnummer i feltet Til.", "messages", "Til"),
        step("Skriv og send", "Tryk på feltet nederst, skriv din besked, og tryk på pilen Send.", "messages", "Send"),
      ],
    },
  },
  {
    id: "send-billede",
    title: "Send et billede",
    summary: "Del et foto i en besked.",
    category: "beskeder",
    icon: "image",
    minutes: 3,
    keywords: ["foto", "billede", "dele", "vedhæfte", "besked"],
    steps: {
      iphone: [
        step("Åbn samtalen", "Gå ind i Beskeder, og tryk på samtalen med den person, der skal have billedet.", "messages", "Samtale"),
        step("Vælg et billede", "Tryk på plusset ved siden af skrivefeltet, og vælg Fotos.", "photos", "Fotos"),
        step("Find fotoet", "Tryk på det billede, du vil sende. Du kan vælge mere end ét.", "photos", "Vælg foto"),
        step("Send billedet", "Tryk på den blå pil. Vent et øjeblik, mens billedet bliver sendt.", "messages", "Send"),
      ],
      android: [
        step("Åbn samtalen", "Åbn Beskeder, og vælg den samtale, hvor billedet skal sendes.", "messages", "Samtale"),
        step("Tryk på billedet", "Tryk på papirclipsen eller billed-ikonet ved skrivefeltet.", "photos", "Vedhæft"),
        step("Vælg fotoet", "Vælg Galleri eller Fotos, og tryk på billedet, du vil sende.", "photos", "Galleri"),
        step("Send billedet", "Tryk på Send-pilen. Billedet vises nu i samtalen.", "messages", "Send"),
      ],
    },
  },
  {
    id: "tag-billede",
    title: "Tag et billede",
    summary: "Brug kameraet til at tage et nyt foto.",
    category: "billeder",
    icon: "photo-camera",
    minutes: 2,
    keywords: ["kamera", "foto", "billede", "tage"],
    steps: {
      iphone: [
        step("Åbn Kamera", "Tryk på appen Kamera. Hold mobilen med begge hænder.", "camera", "Kamera"),
        step("Find det, du vil tage billede af", "Hold motivet midt på skærmen. Rør ikke ved linsen foran på mobilen.", "camera", "Motiv"),
        step("Tag billedet", "Tryk én gang på den store hvide cirkel nederst på skærmen.", "camera", "Udløser"),
        step("Se billedet", "Tryk på det lille billede nederst til venstre for at se dit foto.", "photos", "Seneste foto"),
      ],
      android: [
        step("Åbn Kamera", "Tryk på appen Kamera. Ikonet viser som regel et lille kamera.", "camera", "Kamera"),
        step("Find motivet", "Hold mobilen stille, og peg kameraet mod det, du vil fotografere.", "camera", "Motiv"),
        step("Tag billedet", "Tryk på den store runde udløserknap nederst på skærmen.", "camera", "Udløser"),
        step("Se billedet", "Tryk på det lille runde billede i hjørnet for at se fotoet.", "photos", "Seneste foto"),
      ],
    },
  },
  {
    id: "find-billede",
    title: "Find dine billeder",
    summary: "Se billeder, du allerede har taget.",
    category: "billeder",
    icon: "photo-library",
    minutes: 2,
    keywords: ["foto", "billeder", "galleri", "album"],
    steps: {
      iphone: [
        step("Åbn Fotos", "Find appen Fotos med den farvede blomst, og tryk på den.", "photos", "Fotos"),
        step("Åbn dit bibliotek", "Tryk på Bibliotek nederst for at se alle dine billeder.", "photos", "Bibliotek"),
        step("Vælg et billede", "Rul gennem billederne, og tryk på det, du vil se større.", "photos", "Dine billeder"),
      ],
      android: [
        step("Åbn Fotos eller Galleri", "Find appen Google Fotos eller Galleri på din startskærm.", "photos", "Fotos"),
        step("Åbn dine billeder", "Tryk på Bibliotek, Samlinger eller Billeder nederst.", "photos", "Bibliotek"),
        step("Vælg et billede", "Rul gennem billederne, og tryk på et foto for at se det større.", "photos", "Dine billeder"),
      ],
    },
  },
  {
    id: "tilslut-wifi",
    title: "Tilslut til Wi-Fi",
    summary: "Kom på internettet via dit trådløse netværk.",
    category: "internet",
    icon: "wifi",
    minutes: 3,
    keywords: ["wi-fi", "wifi", "internet", "kode", "netværk"],
    steps: {
      iphone: [
        step("Åbn Indstillinger", "Tryk på den grå app med tandhjulet.", "wifi", "Indstillinger"),
        step("Åbn Wi-Fi", "Tryk på Wi-Fi i listen. Sørg for, at kontakten er grøn.", "wifi", "Wi-Fi"),
        step("Vælg dit netværk", "Tryk på navnet på dit hjemme-netværk. Spørg eventuelt en pårørende om navnet.", "wifi", "Netværk"),
        step("Skriv koden", "Skriv Wi-Fi-koden, og tryk på Tilslut. Koden står ofte på routeren.", "wifi", "Adgangskode"),
      ],
      android: [
        step("Åbn hurtigindstillinger", "Stryg ned fra toppen af skærmen. Tryk og hold på Wi-Fi-ikonet.", "wifi", "Wi-Fi"),
        step("Vælg dit netværk", "Tryk på navnet på dit hjemme-netværk på listen.", "wifi", "Netværk"),
        step("Skriv koden", "Skriv Wi-Fi-koden. Spørg eventuelt en pårørende, hvis du ikke kan finde den.", "wifi", "Adgangskode"),
        step("Tryk på Tilslut", "Tryk på Tilslut. Et lille Wi-Fi-symbol øverst viser, at du er på nettet.", "wifi", "Tilslut"),
      ],
    },
  },
  {
    id: "soeg-internet",
    title: "Søg på internettet",
    summary: "Find en hjemmeside eller få svar på et spørgsmål.",
    category: "internet",
    icon: "language",
    minutes: 2,
    keywords: ["browser", "google", "søge", "hjemmeside", "internet"],
    steps: {
      iphone: [
        step("Åbn Safari", "Find appen Safari med et blåt kompas, og tryk på den.", "browser", "Safari"),
        step("Tryk i søgefeltet", "Tryk på feltet øverst eller nederst på skærmen.", "browser", "Søg eller skriv"),
        step("Skriv det, du søger", "Skriv for eksempel en hjemmesides navn, og tryk på Gå på tastaturet.", "browser", "Søg"),
      ],
      android: [
        step("Åbn Chrome", "Find appen Chrome, som ligner en rund farvet cirkel.", "browser", "Chrome"),
        step("Tryk i søgefeltet", "Tryk i det lange felt øverst på skærmen.", "browser", "Søg eller skriv"),
        step("Skriv og søg", "Skriv et spørgsmål eller navnet på en hjemmeside, og tryk på pilen på tastaturet.", "browser", "Søg"),
      ],
    },
  },
  {
    id: "hent-app",
    title: "Hent en ny app",
    summary: "Installer en app fra mobilens officielle butik.",
    category: "apps",
    icon: "get-app",
    minutes: 4,
    keywords: ["installere", "downloade", "app store", "play butik", "hente"],
    steps: {
      iphone: [
        step("Åbn App Store", "Tryk på det blå App Store-ikon. Brug kun den officielle butik.", "store", "App Store"),
        step("Søg efter appen", "Tryk på Søg nederst, skriv appens navn, og tryk på Søg.", "store", "Søg"),
        step("Tjek appen", "Læs navnet og hvem der har lavet appen, før du henter den.", "store", "Appens navn"),
        step("Hent appen", "Tryk på Hent. Du kan blive bedt om at godkende med Face ID eller din kode.", "store", "Hent"),
      ],
      android: [
        step("Åbn Play Butik", "Tryk på Google Play Butik. Den har en farvet trekant.", "store", "Play Butik"),
        step("Søg efter appen", "Tryk i søgefeltet øverst, skriv appens navn, og tryk på forstørrelsesglasset.", "store", "Søg"),
        step("Tjek appen", "Læs navnet og hvem der har lavet appen, før du henter den.", "store", "Appens navn"),
        step("Installer appen", "Tryk på Installer. Når appen er færdig, kan du trykke på Åbn.", "store", "Installer"),
      ],
    },
  },
  {
    id: "undgaa-svindel",
    title: "Undgå falske beskeder",
    summary: "Se tegn på svindel, før du trykker på et link.",
    category: "sikkerhed",
    icon: "security",
    minutes: 2,
    keywords: ["svindel", "falsk", "sikkerhed", "link", "kode", "bank"],
    steps: {
      iphone: [
        step("Stop op", "En besked, der haster eller skræmmer dig, kan være falsk. Tag dig god tid.", "shield", "Tag dig tid"),
        step("Tryk ikke på linket", "Tryk ikke på links, og hent ikke filer fra en uventet besked.", "shield", "Ukendt link"),
        step("Del aldrig koder", "Giv aldrig din adgangskode eller engangskode til nogen i en besked eller et opkald.", "shield", "Hold koden hemmelig"),
        step("Spørg en, du stoler på", "Ring selv til banken eller afsenderen på et nummer, du allerede kender.", "shield", "Få hjælp"),
      ],
      android: [
        step("Stop op", "En besked, der haster eller skræmmer dig, kan være falsk. Tag dig god tid.", "shield", "Tag dig tid"),
        step("Tryk ikke på linket", "Tryk ikke på links, og hent ikke filer fra en uventet besked.", "shield", "Ukendt link"),
        step("Del aldrig koder", "Giv aldrig din adgangskode eller engangskode til nogen i en besked eller et opkald.", "shield", "Hold koden hemmelig"),
        step("Spørg en, du stoler på", "Ring selv til banken eller afsenderen på et nummer, du allerede kender.", "shield", "Få hjælp"),
      ],
    },
  },
  {
    id: "stoerre-tekst",
    title: "Gør teksten større",
    summary: "Tilpas tekststørrelsen på din iPhone eller Android.",
    category: "indstillinger",
    icon: "text-fields",
    minutes: 3,
    keywords: ["skrift", "tekst", "størrelse", "læse", "syn"],
    steps: {
      iphone: [
        step("Åbn Indstillinger", "Tryk på den grå app med tandhjulet.", "text", "Indstillinger"),
        step("Åbn Skærm & lysstyrke", "Rul lidt ned, og tryk på Skærm & lysstyrke.", "text", "Skærm"),
        step("Vælg tekststørrelse", "Tryk på Tekststørrelse, og flyt skyderen mod højre for større tekst.", "text", "Tekststørrelse"),
      ],
      android: [
        step("Åbn Indstillinger", "Stryg ned fra toppen, og tryk på tandhjulet. Eller find appen Indstillinger.", "text", "Indstillinger"),
        step("Åbn Skærm", "Rul i listen, og tryk på Skærm eller Skærm og tekst.", "text", "Skærm"),
        step("Gør skriften større", "Tryk på Skriftstørrelse, og flyt skyderen mod højre.", "text", "Skriftstørrelse"),
      ],
    },
  },
  {
    id: "skru-op-lyd",
    title: "Skru op for lyden",
    summary: "Find lydknapperne på siden af mobilen.",
    category: "indstillinger",
    icon: "volume-up",
    minutes: 1,
    keywords: ["lyd", "volumen", "højere", "lydstyrke"],
    steps: {
      iphone: [
        step("Find lydknapperne", "Se på venstre side af mobilen. De to aflange knapper styrer lyden.", "volume", "Lydknapper"),
        step("Skru op", "Tryk på den øverste knap flere gange. Lydstyrken vises på skærmen.", "volume", "Lydstyrke"),
        step("Skru ned igen", "Tryk på den nederste knap, hvis lyden bliver for høj.", "volume", "Lydstyrke"),
      ],
      android: [
        step("Find lydknappen", "Se på højre side af mobilen. Den lange knap styrer lydstyrken.", "volume", "Lydknap"),
        step("Skru op", "Tryk på den øverste del af knappen flere gange.", "volume", "Lydstyrke"),
        step("Skru ned igen", "Tryk på den nederste del, hvis lyden bliver for høj.", "volume", "Lydstyrke"),
      ],
    },
  },
  {
    id: "gem-kontakt",
    title: "Gem en ny kontakt",
    summary: "Skriv navn og telefonnummer, så du nemt kan ringe senere.",
    category: "opkald",
    icon: "person-add",
    minutes: 3,
    keywords: ["ny kontakt", "gem nummer", "telefonbog", "person"],
    steps: {
      iphone: [
        step("Åbn Kontakter", "Find appen Kontakter, eller åbn Telefon og tryk på Kontakter nederst.", "contacts", "Kontakter"),
        step("Tryk på plusset", "Tryk på plusset øverst til højre for at lave en ny kontakt.", "contacts", "Tilføj kontakt"),
        step("Skriv navnet", "Tryk på feltet Fornavn, og skriv personens navn.", "contacts", "Fornavn"),
        step("Skriv telefonnummeret", "Tryk på Tilføj telefon, skriv nummeret, og tryk på OK eller Færdig.", "contacts", "Telefonnummer"),
      ],
      android: [
        step("Åbn Kontakter", "Tryk på appen Kontakter med person-ikonet.", "contacts", "Kontakter"),
        step("Tryk på plusset", "Tryk på plusset eller Opret kontakt nederst på skærmen.", "contacts", "Tilføj kontakt"),
        step("Skriv navn og nummer", "Tryk på Navn og Telefon, og skriv oplysningerne.", "contacts", "Telefonnummer"),
        step("Gem kontakten", "Tryk på Gem. Du kan nu finde personen på kontaktlisten.", "contacts", "Gem"),
      ],
    },
  },
  {
    id: "hoejttaler-opkald",
    title: "Brug højttaler under et opkald",
    summary: "Hør samtalen højt, så du ikke behøver holde mobilen ved øret.",
    category: "opkald",
    icon: "volume-up",
    minutes: 1,
    keywords: ["højttaler", "håndfri", "speaker", "opkald", "lyd"],
    steps: {
      iphone: [
        step("Ring op eller svar", "Start et opkald, eller tag telefonen, når den ringer.", "dial", "Ring op"),
        step("Find Højttaler", "Se på skærmen under samtalen efter knappen Højttaler.", "dial", "Højttaler"),
        step("Slå højttaleren til", "Tryk én gang på Højttaler. Lyden kommer nu ud af mobilens højttaler.", "dial", "Højttaler"),
        step("Slå den fra igen", "Tryk på Højttaler igen, hvis du vil lytte normalt ved øret.", "dial", "Slå fra"),
      ],
      android: [
        step("Ring op eller svar", "Start et opkald, eller tag telefonen, når den ringer.", "dial", "Ring op"),
        step("Find Højttaler", "Under samtalen vises knappen Højttaler eller et højttaler-ikon.", "dial", "Højttaler"),
        step("Slå højttaleren til", "Tryk én gang på Højttaler for at høre lyden højt.", "dial", "Højttaler"),
        step("Slå den fra igen", "Tryk på Højttaler igen for at slå den håndfri lyd fra.", "dial", "Slå fra"),
      ],
    },
  },
  {
    id: "slet-foto",
    title: "Slet et billede",
    summary: "Fjern et foto, du ikke længere vil gemme.",
    category: "billeder",
    icon: "delete-outline",
    minutes: 2,
    keywords: ["slet", "fjerne", "foto", "billede", "papirkurv"],
    steps: {
      iphone: [
        step("Åbn Fotos", "Tryk på appen Fotos med den farvede blomst.", "photos", "Fotos"),
        step("Find billedet", "Rul gennem biblioteket, og tryk på det billede, du vil fjerne.", "photos", "Dine billeder"),
        step("Tryk på papirkurven", "Tryk på papirkurvsikonet nederst på skærmen.", "photos", "Slet"),
        step("Bekræft sletning", "Læs beskeden, og tryk på Slet foto. Billedet flyttes til Slettet for nylig.", "photos", "Bekræft"),
      ],
      android: [
        step("Åbn Fotos eller Galleri", "Find appen Google Fotos eller Galleri på startskærmen.", "photos", "Fotos"),
        step("Find billedet", "Tryk på det foto, du gerne vil fjerne.", "photos", "Dine billeder"),
        step("Tryk på papirkurven", "Tryk på Slet eller papirkurvsikonet. Det kan være under menuen med tre prikker.", "photos", "Slet"),
        step("Bekræft sletning", "Tryk på Flyt til papirkurv eller Slet, hvis du er sikker.", "photos", "Bekræft"),
      ],
    },
  },
  {
    id: "gem-hjemmeside",
    title: "Gem en hjemmeside som bogmærke",
    summary: "Gem en side, så du hurtigt kan finde den igen.",
    category: "internet",
    icon: "bookmark-border",
    minutes: 2,
    keywords: ["bogmærke", "favorit", "gem side", "hjemmeside", "internet"],
    steps: {
      iphone: [
        step("Åbn Safari", "Find Safari med det blå kompas, og åbn hjemmesiden.", "browser", "Safari"),
        step("Tryk på Del", "Tryk på deleknappen, som ligner en firkant med en pil op.", "browser", "Del"),
        step("Vælg Bogmærke", "Rul i menuen, og tryk på Tilføj bogmærke.", "browser", "Bogmærke"),
        step("Gem siden", "Kontrollér sidens navn, og tryk på Gem øverst.", "browser", "Gem"),
      ],
      android: [
        step("Åbn Chrome", "Find Chrome med det runde, farvede ikon, og åbn hjemmesiden.", "browser", "Chrome"),
        step("Åbn menuen", "Tryk på de tre prikker øverst til højre.", "browser", "Menu"),
        step("Tryk på stjernen", "Tryk på stjernen øverst i menuen for at gemme siden som bogmærke.", "browser", "Bogmærke"),
        step("Find siden igen", "Åbn menuen med tre prikker, og vælg Bogmærker.", "browser", "Bogmærker"),
      ],
    },
  },
  {
    id: "batterisparetilstand",
    title: "Spar på batteriet",
    summary: "Slå batterisparetilstand til, når mobilen snart løber tør.",
    category: "indstillinger",
    icon: "battery-alert",
    minutes: 2,
    keywords: ["batteri", "strøm", "spare", "lavt batteri", "energi"],
    steps: {
      iphone: [
        step("Åbn Indstillinger", "Tryk på den grå app med tandhjulet.", "text", "Indstillinger"),
        step("Find Batteri", "Rul ned i listen, og tryk på Batteri.", "text", "Batteri"),
        step("Slå sparetilstand til", "Tryk på knappen ved Strømsparefunktion, så den bliver grøn.", "text", "Strømsparefunktion"),
        step("Se batteriet", "Et gult batterisymbol viser, at strømsparefunktionen er slået til.", "text", "Batteri"),
      ],
      android: [
        step("Åbn Indstillinger", "Stryg ned fra toppen, og tryk på tandhjulet.", "text", "Indstillinger"),
        step("Find Batteri", "Rul i listen, og tryk på Batteri eller Batteri og enhedspleje.", "text", "Batteri"),
        step("Åbn Batterisparetilstand", "Tryk på Batterisparetilstand eller Strømbesparelse.", "text", "Batterisparetilstand"),
        step("Slå funktionen til", "Tryk på kontakten. Mobilen bruger nu mindre strøm.", "text", "Batterisparetilstand"),
      ],
    },
  },
];

export const GUIDES: MobileGuide[] = [...CORE_GUIDES, ...ADDITIONAL_GUIDES];

export function searchGuides(query: string): MobileGuide[] {
  const normalized = query.trim().toLocaleLowerCase("da-DK");
  if (!normalized) return GUIDES;
  return GUIDES.filter((guide) =>
    [
      guide.title,
      guide.summary,
      ...guide.keywords,
      ...Object.values(guide.steps).flatMap((steps) =>
        steps.flatMap((item) => [item.title, item.description, item.focus ?? ""]),
      ),
    ]
      .join(" ")
      .toLocaleLowerCase("da-DK")
      .includes(normalized),
  );
}

export function getGuide(id: string): MobileGuide | undefined {
  return GUIDES.find((guide) => guide.id === id);
}

export function getGuideStepsWithPractice(
  guide: MobileGuide,
  platform: "iphone" | "android",
): GuideStep[] {
  return [
    ...guide.steps[platform],
    {
      title: "Prøv selv uden hjælp",
      description: `Gentag “${guide.title}” én gang til. Brug kun trinoverskrifterne som stikord i stedet for de længere forklaringer. Hvis du går i stå, kan du gå tilbage og læse dem.`,
      illustration: "text",
      focus: "Prøv selv",
    },
  ];
}

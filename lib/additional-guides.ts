import type { MobileGuide } from "./mobile-guides";

export const ADDITIONAL_GUIDES: MobileGuide[] = [
  {
    "id": "extra-brug-taltaster-i-en-telefonmenu",
    "title": "Brug taltaster i en telefonmenu",
    "summary": "Vælg et menupunkt med et tal under et igangværende opkald.",
    "category": "opkald",
    "icon": "call",
    "minutes": 1,
    "keywords": [
      "taltaster",
      "telefonmenu",
      "tastatur"
    ],
    "steps": {
      "iphone": [
        {
          "title": "Hør valgmuligheden",
          "description": "Lyt til telefonmenuen, indtil du hører det ønskede tal.",
          "illustration": "dial",
          "focus": "Telefonmenu"
        },
        {
          "title": "Åbn taltasterne",
          "description": "Tryk på Tastatur på opkaldsskærmen for at vise taltasterne.",
          "illustration": "dial",
          "focus": "Tastatur"
        },
        {
          "title": "Vælg med tallet",
          "description": "Tryk én gang på tallet for det ønskede menupunkt.",
          "illustration": "dial",
          "focus": "Taltast"
        }
      ],
      "android": [
        {
          "title": "Hør valgmuligheden",
          "description": "Lyt til telefonmenuen, indtil du hører det ønskede tal.",
          "illustration": "dial",
          "focus": "Telefonmenu"
        },
        {
          "title": "Åbn taltasterne",
          "description": "Tryk på Tastatur eller Taltaster på den aktive opkaldsskærm.",
          "illustration": "dial",
          "focus": "Taltaster"
        },
        {
          "title": "Vælg med tallet",
          "description": "Tryk én gang på tallet for det ønskede menupunkt.",
          "illustration": "dial",
          "focus": "Taltast"
        }
      ]
    }
  },
  {
    "id": "extra-find-listen-med-ubesvarede-opkald",
    "title": "Find listen med ubesvarede opkald",
    "summary": "Se, hvem der har ringet, uden at starte et tilbagekald.",
    "category": "opkald",
    "icon": "call",
    "minutes": 2,
    "keywords": [
      "ubesvarede",
      "seneste",
      "opkaldsliste"
    ],
    "steps": {
      "iphone": [
        {
          "title": "Åbn Telefon",
          "description": "Åbn appen Telefon ved at trykke på det grønne telefonikon.",
          "illustration": "dial",
          "focus": "Telefon"
        },
        {
          "title": "Find opkaldslisten",
          "description": "Vælg Seneste eller opkaldslisten, afhængigt af din version af iOS.",
          "illustration": "dial",
          "focus": "Seneste"
        },
        {
          "title": "Vis ubesvarede",
          "description": "Vælg Ubesvarede, eventuelt gennem filterknappen, uden at trykke på opkaldsposter.",
          "illustration": "dial",
          "focus": "Ubesvarede"
        }
      ],
      "android": [
        {
          "title": "Åbn Telefon",
          "description": "Åbn appen Telefon ved at trykke på telefonikonet på hjemmeskærmen.",
          "illustration": "dial",
          "focus": "Telefon"
        },
        {
          "title": "Find opkaldslisten",
          "description": "Vælg Seneste eller Opkaldshistorik nederst eller øverst i Telefon.",
          "illustration": "dial",
          "focus": "Seneste"
        },
        {
          "title": "Find ubesvarede",
          "description": "Vælg filteret Ubesvarede, hvis tilgængeligt, ellers læs listens markeringer uden tryk.",
          "illustration": "dial",
          "focus": "Ubesvarede"
        }
      ]
    }
  },
  {
    "id": "extra-aabn-oplysninger-om-et-ukendt-opkald",
    "title": "Åbn oplysninger om et ukendt opkald",
    "summary": "Undersøg en opkaldspost uden at ringe til nummeret.",
    "category": "opkald",
    "icon": "call",
    "minutes": 2,
    "keywords": [
      "ukendt nummer",
      "oplysninger",
      "opkaldshistorik"
    ],
    "steps": {
      "iphone": [
        {
          "title": "Åbn historikken",
          "description": "Åbn Telefon på listen Seneste eller den viste opkaldsliste.",
          "illustration": "dial",
          "focus": "Seneste"
        },
        {
          "title": "Find posten",
          "description": "Find det ukendte opkald ved at rulle uden at vælge posten.",
          "illustration": "dial",
          "focus": "Opkaldsliste"
        },
        {
          "title": "Åbn oplysningerne",
          "description": "Tryk på informationsknappen ved opkaldet, ikke på nummeret eller telefonikonet.",
          "illustration": "dial",
          "focus": "Information"
        }
      ],
      "android": [
        {
          "title": "Åbn historikken",
          "description": "Åbn Telefon på listen Seneste eller menuen med Opkaldshistorik.",
          "illustration": "dial",
          "focus": "Opkaldshistorik"
        },
        {
          "title": "Find posten",
          "description": "Find det ukendte opkald ved at rulle uden at vælge posten.",
          "illustration": "dial",
          "focus": "Opkaldsliste"
        },
        {
          "title": "Åbn oplysningerne",
          "description": "Vælg postens informationsknap eller hold posten nede og vælg Opkaldsoplysninger.",
          "illustration": "dial",
          "focus": "Opkaldsoplysninger"
        }
      ]
    }
  },
  {
    "id": "extra-afvis-et-indgaaende-opkald",
    "title": "Afvis et indgående opkald",
    "summary": "Stop et indgående opkald, når du ikke ønsker at tale.",
    "category": "opkald",
    "icon": "call",
    "minutes": 1,
    "keywords": [
      "afvis",
      "indgående opkald",
      "rød telefon"
    ],
    "steps": {
      "iphone": [
        {
          "title": "Kontrollér opkaldet",
          "description": "Læs navnet eller nummeret på skærmen, mens telefonen ringer.",
          "illustration": "dial",
          "focus": "Opkalder"
        },
        {
          "title": "Find afvisningen",
          "description": "Find den røde afvisningsknap, eller sideknappen hvis telefonen er låst.",
          "illustration": "dial",
          "focus": "Afvis"
        },
        {
          "title": "Afvis opkaldet",
          "description": "Tryk på Afvis, eller tryk hurtigt to gange på sideknappen.",
          "illustration": "dial",
          "focus": "Afvis"
        }
      ],
      "android": [
        {
          "title": "Kontrollér opkaldet",
          "description": "Læs navnet eller nummeret på skærmen, mens telefonen ringer.",
          "illustration": "dial",
          "focus": "Opkalder"
        },
        {
          "title": "Find afvisningen",
          "description": "Find den røde telefonknap eller knappen Afvis på opkaldsskærmen.",
          "illustration": "dial",
          "focus": "Afvis"
        },
        {
          "title": "Afvis opkaldet",
          "description": "Tryk på Afvis, eller stryg den røde knap som skærmen viser.",
          "illustration": "dial",
          "focus": "Afvis"
        }
      ]
    }
  },
  {
    "id": "extra-find-en-besked-med-et-soegeord",
    "title": "Find en besked med et søgeord",
    "summary": "Find en tidligere besked ved hjælp af et ord, du husker.",
    "category": "beskeder",
    "icon": "chat-bubble-outline",
    "minutes": 2,
    "keywords": [
      "søgeord",
      "søg",
      "find besked"
    ],
    "steps": {
      "iphone": [
        {
          "title": "Vis søgefeltet",
          "description": "Træk ned i samtalelisten i Beskeder for at vise søgefeltet.",
          "illustration": "messages",
          "focus": "Samtaleliste"
        },
        {
          "title": "Søg efter ordet",
          "description": "Skriv et genkendeligt ord fra beskeden i søgefeltet.",
          "illustration": "text",
          "focus": "Søg"
        },
        {
          "title": "Åbn resultatet",
          "description": "Tryk på det relevante søgeresultat for at se beskeden.",
          "illustration": "messages",
          "focus": "Søgeresultat"
        }
      ],
      "android": [
        {
          "title": "Åbn søgning",
          "description": "Tryk på søgefeltet eller forstørrelsesglasset øverst i beskedappen.",
          "illustration": "messages",
          "focus": "Søg"
        },
        {
          "title": "Søg efter ordet",
          "description": "Skriv et genkendeligt ord fra beskeden i søgefeltet.",
          "illustration": "text",
          "focus": "Søgefelt"
        },
        {
          "title": "Åbn resultatet",
          "description": "Tryk på det relevante søgeresultat for at se beskeden.",
          "illustration": "messages",
          "focus": "Søgeresultat"
        }
      ]
    }
  },
  {
    "id": "extra-find-en-samtale-med-en-person",
    "title": "Find en samtale med en person",
    "summary": "Søg efter et navn eller telefonnummer i beskedappen.",
    "category": "beskeder",
    "icon": "chat-bubble-outline",
    "minutes": 2,
    "keywords": [
      "navn",
      "telefonnummer",
      "find samtale"
    ],
    "steps": {
      "iphone": [
        {
          "title": "Vis søgning",
          "description": "Træk ned i samtalelisten i Beskeder for at vise søgefeltet.",
          "illustration": "messages",
          "focus": "Samtaleliste"
        },
        {
          "title": "Skriv personens navn",
          "description": "Skriv personens navn eller telefonnummer i søgefeltet øverst.",
          "illustration": "text",
          "focus": "Søgefelt"
        },
        {
          "title": "Vælg personen",
          "description": "Tryk på samtalen med det navn eller nummer, du søgte.",
          "illustration": "messages",
          "focus": "Samtale"
        }
      ],
      "android": [
        {
          "title": "Åbn søgning",
          "description": "Tryk på søgefeltet eller forstørrelsesglasset øverst i beskedappen.",
          "illustration": "messages",
          "focus": "Søg"
        },
        {
          "title": "Skriv personens navn",
          "description": "Skriv personens navn eller telefonnummer i søgefeltet øverst.",
          "illustration": "text",
          "focus": "Søgefelt"
        },
        {
          "title": "Vælg personen",
          "description": "Tryk på samtalen med det navn eller nummer, du søgte.",
          "illustration": "messages",
          "focus": "Samtale"
        }
      ]
    }
  },
  {
    "id": "extra-lyt-til-en-modtaget-lydbesked",
    "title": "Lyt til en modtaget lydbesked",
    "summary": "Afspil en lydoptagelse direkte fra samtalen, hvor funktionen understøttes.",
    "category": "beskeder",
    "icon": "chat-bubble-outline",
    "minutes": 2,
    "keywords": [
      "lydbesked",
      "lydoptagelse",
      "lyt"
    ],
    "steps": {
      "iphone": [
        {
          "title": "Find lydbeskeden",
          "description": "Åbn samtalen med den modtagne lydoptagelse i appen Beskeder.",
          "illustration": "messages",
          "focus": "Samtale"
        },
        {
          "title": "Afspil optagelsen",
          "description": "Tryk på afspilningstrekanten ved lydbeskeden for at høre optagelsen.",
          "illustration": "volume",
          "focus": "Afspil"
        },
        {
          "title": "Tilpas lydstyrken",
          "description": "Tryk på telefonens lydstyrkeknap under afspilningen for at tilpasse lyden.",
          "illustration": "volume",
          "focus": "Lydstyrke"
        }
      ],
      "android": [
        {
          "title": "Find lydbeskeden",
          "description": "Åbn samtalen med den modtagne lydoptagelse i din beskedapp.",
          "illustration": "messages",
          "focus": "Samtale"
        },
        {
          "title": "Afspil optagelsen",
          "description": "Tryk på afspilningstrekanten ved lydoptagelsen, hvis appen understøtter direkte afspilning.",
          "illustration": "volume",
          "focus": "Afspil"
        },
        {
          "title": "Tilpas lydstyrken",
          "description": "Tryk på telefonens lydstyrkeknap under afspilningen for at tilpasse lyden.",
          "illustration": "volume",
          "focus": "Lydstyrke"
        }
      ]
    }
  },
  {
    "id": "extra-marker-en-samtale-som-ulaest",
    "title": "Markér en samtale som ulæst",
    "summary": "Lav en synlig påmindelse om at vende tilbage til samtalen.",
    "category": "beskeder",
    "icon": "chat-bubble-outline",
    "minutes": 2,
    "keywords": [
      "ulæst",
      "påmindelse",
      "markér"
    ],
    "steps": {
      "iphone": [
        {
          "title": "Find samtalen",
          "description": "Find den læste samtale i samtalelisten i appen Beskeder.",
          "illustration": "messages",
          "focus": "Samtaleliste"
        },
        {
          "title": "Vis samtalemenuen",
          "description": "Hold fingeren på samtalen for at vise menuen med handlinger.",
          "illustration": "messages",
          "focus": "Samtale"
        },
        {
          "title": "Markér som ulæst",
          "description": "Tryk på Marker som ulæst for at tilføje en synlig markering.",
          "illustration": "messages",
          "focus": "Marker som ulæst"
        }
      ],
      "android": [
        {
          "title": "Find samtalen",
          "description": "Find den læste samtale i samtalelisten i din beskedapp.",
          "illustration": "messages",
          "focus": "Samtaleliste"
        },
        {
          "title": "Vis samtalehandlinger",
          "description": "Hold fingeren på samtalen for at vise de tilgængelige handlinger.",
          "illustration": "messages",
          "focus": "Samtale"
        },
        {
          "title": "Markér som ulæst",
          "description": "Vælg Markér som ulæst, eventuelt i menuen med tre prikker.",
          "illustration": "messages",
          "focus": "Markér som ulæst"
        }
      ]
    }
  },
  {
    "id": "extra-brug-timer-til-et-foto",
    "title": "Brug timer til et foto",
    "summary": "Giv dig selv nogle sekunder, før kameraet tager billedet.",
    "category": "billeder",
    "icon": "photo-camera",
    "minutes": 3,
    "keywords": [
      "timer",
      "selvudløser",
      "nedtælling"
    ],
    "steps": {
      "iphone": [
        {
          "title": "Find timeren",
          "description": "Åbn timerens ursymbol i Kamera under Foto via pilen eller kontrolmenuen.",
          "illustration": "camera",
          "focus": "Timer"
        },
        {
          "title": "Vælg ventetid",
          "description": "Vælg en af de viste ventetider til kameraets nedtælling.",
          "illustration": "camera",
          "focus": "Ventetid"
        },
        {
          "title": "Start nedtællingen",
          "description": "Tryk på udløserknappen med telefonen støttet sikkert under hele nedtællingen.",
          "illustration": "camera",
          "focus": "Udløser"
        }
      ],
      "android": [
        {
          "title": "Find timeren",
          "description": "Åbn timeren i Kamera under Foto via ursymbolet eller kameraindstillingerne.",
          "illustration": "camera",
          "focus": "Timer"
        },
        {
          "title": "Vælg ventetid",
          "description": "Vælg en af de viste ventetider til kameraets nedtælling.",
          "illustration": "camera",
          "focus": "Ventetid"
        },
        {
          "title": "Start nedtællingen",
          "description": "Tryk på udløserknappen med telefonen støttet sikkert under hele nedtællingen.",
          "illustration": "camera",
          "focus": "Udløser"
        }
      ]
    }
  },
  {
    "id": "extra-opret-et-album-med-et-navn",
    "title": "Opret et album med et navn",
    "summary": "Lav et tomt album, som du senere kan samle fotos i.",
    "category": "billeder",
    "icon": "photo-camera",
    "minutes": 2,
    "keywords": [
      "album",
      "nyt album",
      "organisering"
    ],
    "steps": {
      "iphone": [
        {
          "title": "Åbn albumområdet",
          "description": "Åbn Fotos, og gå til Album blandt dine samlinger.",
          "illustration": "photos",
          "focus": "Album"
        },
        {
          "title": "Opret albummet",
          "description": "Tryk på plus eller Opret, og vælg Nyt album.",
          "illustration": "photos",
          "focus": "Nyt album"
        },
        {
          "title": "Giv albummet navn",
          "description": "Skriv et tydeligt albumnavn, og bekræft med Gem eller Opret.",
          "illustration": "text",
          "focus": "Albumnavn"
        }
      ],
      "android": [
        {
          "title": "Åbn albumområdet",
          "description": "Åbn Google Fotos eller Galleri, og vælg Samlinger eller Album.",
          "illustration": "photos",
          "focus": "Album"
        },
        {
          "title": "Opret albummet",
          "description": "Tryk på plus eller Opret, og vælg et almindeligt Album.",
          "illustration": "photos",
          "focus": "Opret"
        },
        {
          "title": "Giv albummet navn",
          "description": "Skriv et tydeligt albumnavn, og bekræft med fluebenet eller Gem.",
          "illustration": "text",
          "focus": "Albumnavn"
        }
      ]
    }
  },
  {
    "id": "extra-forstoer-en-detalje-i-et-foto",
    "title": "Forstør en detalje i et foto",
    "summary": "Se en lille detalje tydeligere uden at ændre selve fotoet.",
    "category": "billeder",
    "icon": "photo-camera",
    "minutes": 1,
    "keywords": [
      "zoom",
      "forstør",
      "detalje"
    ],
    "steps": {
      "iphone": [
        {
          "title": "Åbn fotoet",
          "description": "Åbn Fotos, og vælg det foto, du vil undersøge nærmere.",
          "illustration": "photos",
          "focus": "Foto"
        },
        {
          "title": "Forstør detaljen",
          "description": "Sæt to fingre på detaljen, og før dem fra hinanden.",
          "illustration": "photos",
          "focus": "Zoom"
        },
        {
          "title": "Vis hele fotoet",
          "description": "Før to fingre sammen igen for at vise hele billedet.",
          "illustration": "photos",
          "focus": "Zoom"
        }
      ],
      "android": [
        {
          "title": "Åbn fotoet",
          "description": "Åbn Galleri eller Google Fotos, og vælg det ønskede foto.",
          "illustration": "photos",
          "focus": "Foto"
        },
        {
          "title": "Forstør detaljen",
          "description": "Sæt to fingre på detaljen, og før dem fra hinanden.",
          "illustration": "photos",
          "focus": "Zoom"
        },
        {
          "title": "Vis hele fotoet",
          "description": "Før to fingre sammen igen for at vise hele billedet.",
          "illustration": "photos",
          "focus": "Zoom"
        }
      ]
    }
  },
  {
    "id": "extra-del-flere-udvalgte-fotos-i-en-besked",
    "title": "Del flere udvalgte fotos i én besked",
    "summary": "Vedhæft en lille gruppe fotos, og kontrollér både billeder og modtager før afsendelse.",
    "category": "billeder",
    "icon": "photo-camera",
    "minutes": 3,
    "keywords": [
      "deling",
      "flere fotos",
      "besked",
      "modtager"
    ],
    "steps": {
      "iphone": [
        {
          "title": "Markér billederne",
          "description": "Åbn Fotos, tryk på Vælg, og markér de ønskede billeder.",
          "illustration": "photos",
          "focus": "Vælg"
        },
        {
          "title": "Opret beskeden",
          "description": "Tryk på delingsknappen, vælg Beskeder, og angiv den ønskede modtager.",
          "illustration": "messages",
          "focus": "Beskeder"
        },
        {
          "title": "Kontrollér og send",
          "description": "Kontrollér alle vedhæftede fotos og modtagerens navn, før du trykker Send.",
          "illustration": "messages",
          "focus": "Send"
        }
      ],
      "android": [
        {
          "title": "Markér billederne",
          "description": "Åbn fotoappen, hold ét foto nede, og markér de øvrige billeder.",
          "illustration": "photos",
          "focus": "Fotomarkering"
        },
        {
          "title": "Opret beskeden",
          "description": "Tryk på Del, vælg Beskeder, og angiv den ønskede modtager.",
          "illustration": "messages",
          "focus": "Beskeder"
        },
        {
          "title": "Kontrollér og send",
          "description": "Kontrollér alle vedhæftede fotos og modtagerens navn, før du trykker Send.",
          "illustration": "messages",
          "focus": "Send"
        }
      ]
    }
  },
  {
    "id": "extra-se-navnet-paa-dit-aktuelle-wi-fi",
    "title": "Se navnet på dit aktuelle Wi-Fi",
    "summary": "Find ud af, hvilket trådløst netværk telefonen bruger lige nu.",
    "category": "internet",
    "icon": "language",
    "minutes": 1,
    "keywords": [
      "wifi",
      "netværksnavn",
      "forbindelse"
    ],
    "steps": {
      "iphone": [
        {
          "title": "Åbn indstillinger",
          "description": "Åbn appen Indstillinger fra hjemmeskærmen eller telefonens appbibliotek.",
          "illustration": "wifi",
          "focus": "Indstillinger"
        },
        {
          "title": "Åbn Wi-Fi",
          "description": "Tryk på Wi-Fi for at se telefonens trådløse netværk.",
          "illustration": "wifi",
          "focus": "Wi-Fi"
        },
        {
          "title": "Find det aktuelle netværk",
          "description": "Find netværksnavnet med fluebenet, som viser din aktuelle forbindelse.",
          "illustration": "wifi",
          "focus": "Flueben"
        }
      ],
      "android": [
        {
          "title": "Åbn indstillinger",
          "description": "Åbn appen Indstillinger fra hjemmeskærmen eller telefonens appoversigt.",
          "illustration": "wifi",
          "focus": "Indstillinger"
        },
        {
          "title": "Åbn netværkslisten",
          "description": "Åbn Wi-Fi under Forbindelser eller Netværk og internet.",
          "illustration": "wifi",
          "focus": "Wi-Fi"
        },
        {
          "title": "Find det aktuelle netværk",
          "description": "Find netværket med teksten Tilsluttet, som viser din aktuelle forbindelse.",
          "illustration": "wifi",
          "focus": "Tilsluttet"
        }
      ]
    }
  },
  {
    "id": "extra-skift-til-et-andet-kendt-netvaerk",
    "title": "Skift til et andet kendt netværk",
    "summary": "Vælg et andet netværk, som du tidligere har brugt og stoler på.",
    "category": "internet",
    "icon": "language",
    "minutes": 2,
    "keywords": [
      "wifi",
      "skift netværk",
      "kendt netværk"
    ],
    "steps": {
      "iphone": [
        {
          "title": "Åbn Wi-Fi-listen",
          "description": "Åbn Indstillinger og derefter Wi-Fi for at se netværkslisten.",
          "illustration": "wifi",
          "focus": "Wi-Fi"
        },
        {
          "title": "Vælg det kendte netværk",
          "description": "Tryk på navnet på det andet netværk, du allerede kender.",
          "illustration": "wifi",
          "focus": "Netværksnavn"
        },
        {
          "title": "Kontrollér skiftet",
          "description": "Kontrollér, at fluebenet nu står ved det valgte netværksnavn.",
          "illustration": "wifi",
          "focus": "Flueben"
        }
      ],
      "android": [
        {
          "title": "Åbn Wi-Fi-listen",
          "description": "Åbn Indstillinger og derefter Wi-Fi under Forbindelser eller Netværk og internet.",
          "illustration": "wifi",
          "focus": "Wi-Fi"
        },
        {
          "title": "Vælg det kendte netværk",
          "description": "Tryk på navnet på det andet netværk, du tidligere har brugt.",
          "illustration": "wifi",
          "focus": "Netværksnavn"
        },
        {
          "title": "Kontrollér skiftet",
          "description": "Kontrollér, at det valgte netværk nu har teksten Tilsluttet.",
          "illustration": "wifi",
          "focus": "Tilsluttet"
        }
      ]
    }
  },
  {
    "id": "extra-kontroller-styrken-paa-wi-fi-signalet",
    "title": "Kontrollér styrken på Wi-Fi-signalet",
    "summary": "Se signalets styrke, når telefonen er tilsluttet Wi-Fi.",
    "category": "internet",
    "icon": "language",
    "minutes": 1,
    "keywords": [
      "wifi",
      "signalstyrke",
      "dækning"
    ],
    "steps": {
      "iphone": [
        {
          "title": "Åbn Kontrolcenter",
          "description": "Åbn Kontrolcenter med et strøg fra øverste højre hjørne eller nederste kant.",
          "illustration": "wifi",
          "focus": "Kontrolcenter"
        },
        {
          "title": "Find Wi-Fi-symbolet",
          "description": "Find Wi-Fi-symbolet i statusområdet øverst, uden at trykke på Wi-Fi-knappen.",
          "illustration": "wifi",
          "focus": "Wi-Fi-symbol"
        },
        {
          "title": "Aflæs signalet",
          "description": "Kontrollér de udfyldte buer i symbolet; flere buer betyder stærkere signal.",
          "illustration": "wifi",
          "focus": "Signalbuer"
        }
      ],
      "android": [
        {
          "title": "Åbn Wi-Fi-listen",
          "description": "Åbn Indstillinger og derefter Wi-Fi under telefonens netværksmenu.",
          "illustration": "wifi",
          "focus": "Wi-Fi"
        },
        {
          "title": "Find forbindelsen",
          "description": "Find rækken med dit tilsluttede netværk i listen.",
          "illustration": "wifi",
          "focus": "Tilsluttet netværk"
        },
        {
          "title": "Aflæs signalet",
          "description": "Kontrollér de udfyldte dele af Wi-Fi-symbolet ud for netværket.",
          "illustration": "wifi",
          "focus": "Signalsymbol"
        }
      ]
    }
  },
  {
    "id": "extra-test-om-internetforbindelsen-virker",
    "title": "Test om internetforbindelsen virker",
    "summary": "Åbn en kendt hjemmeside for at afprøve forbindelsen uden at søge.",
    "category": "internet",
    "icon": "language",
    "minutes": 1,
    "keywords": [
      "internet",
      "forbindelsestest",
      "hjemmeside",
      "netværksstatus"
    ],
    "steps": {
      "iphone": [
        {
          "title": "Åbn browseren",
          "description": "Åbn Safari fra hjemmeskærmen eller appbiblioteket for at teste forbindelsen.",
          "illustration": "browser",
          "focus": "Safari"
        },
        {
          "title": "Åbn en kendt side",
          "description": "Indtast dr.dk i adressefeltet og tryk på Gå på tastaturet.",
          "illustration": "browser",
          "focus": "Adressefelt"
        },
        {
          "title": "Kontrollér resultatet",
          "description": "Kontrollér, om siden indlæses, eller browseren viser en forbindelsesfejl.",
          "illustration": "browser",
          "focus": "Sidevisning"
        }
      ],
      "android": [
        {
          "title": "Åbn browseren",
          "description": "Åbn Chrome eller telefonens anden browser fra appoversigten på telefonen.",
          "illustration": "browser",
          "focus": "Browser"
        },
        {
          "title": "Åbn en kendt side",
          "description": "Indtast dr.dk i adressefeltet og tryk på Gå eller pilen.",
          "illustration": "browser",
          "focus": "Adressefelt"
        },
        {
          "title": "Kontrollér resultatet",
          "description": "Kontrollér, om siden indlæses, eller browseren viser en forbindelsesfejl.",
          "illustration": "browser",
          "focus": "Sidevisning"
        }
      ]
    }
  },
  {
    "id": "extra-se-hvilke-apps-der-kan-opdateres",
    "title": "Se hvilke apps der kan opdateres",
    "summary": "Find oversigten over tilgængelige appopdateringer uden at starte dem.",
    "category": "apps",
    "icon": "apps",
    "minutes": 2,
    "keywords": [
      "opdateringer",
      "apps",
      "oversigt"
    ],
    "steps": {
      "iphone": [
        {
          "title": "Åbn App Store",
          "description": "Åbn App Store via det blå ikon på startskærmen.",
          "illustration": "store",
          "focus": "App Store"
        },
        {
          "title": "Åbn din profil",
          "description": "Tryk på dit profilbillede øverst på App Stores skærm.",
          "illustration": "store",
          "focus": "Profilbillede"
        },
        {
          "title": "Find opdateringerne",
          "description": "Rul ned til listen med tilgængelige opdateringer til dine apps.",
          "illustration": "store",
          "focus": "Opdateringer"
        }
      ],
      "android": [
        {
          "title": "Åbn Play Butik",
          "description": "Åbn Play Butik via butikkens ikon på din startskærm.",
          "illustration": "store",
          "focus": "Play Butik"
        },
        {
          "title": "Åbn profilmenuen",
          "description": "Tryk på dit profilbillede øverst til højre i butikken.",
          "illustration": "store",
          "focus": "Profilbillede"
        },
        {
          "title": "Find opdateringerne",
          "description": "Vælg Administrer apps og enhed for at se tilgængelige opdateringer.",
          "illustration": "store",
          "focus": "Administrer apps og enhed"
        }
      ]
    }
  },
  {
    "id": "extra-opdater-en-bestemt-app",
    "title": "Opdater én bestemt app",
    "summary": "Opdater en app, du allerede har på telefonen.",
    "category": "apps",
    "icon": "apps",
    "minutes": 3,
    "keywords": [
      "opdater",
      "app",
      "søg"
    ],
    "steps": {
      "iphone": [
        {
          "title": "Find søgefeltet",
          "description": "Åbn fanen Søg i App Store på din telefon.",
          "illustration": "store",
          "focus": "Søg"
        },
        {
          "title": "Find den rigtige app",
          "description": "Skriv navnet på den installerede app i butikkens søgefelt.",
          "illustration": "text",
          "focus": "Søgefelt"
        },
        {
          "title": "Start opdateringen",
          "description": "Tryk på Opdater ved den rigtige app, hvis knappen vises.",
          "illustration": "store",
          "focus": "Opdater"
        }
      ],
      "android": [
        {
          "title": "Find søgefeltet",
          "description": "Åbn søgefeltet i Play Butik øverst eller under Søg.",
          "illustration": "store",
          "focus": "Søg"
        },
        {
          "title": "Find den rigtige app",
          "description": "Skriv navnet på den installerede app i butikkens søgefelt.",
          "illustration": "text",
          "focus": "Søgefelt"
        },
        {
          "title": "Start opdateringen",
          "description": "Tryk på Opdater ved den rigtige app, hvis knappen vises.",
          "illustration": "store",
          "focus": "Opdater"
        }
      ]
    }
  },
  {
    "id": "extra-find-en-installeret-app-med-soegning",
    "title": "Find en installeret app med søgning",
    "summary": "Åbn en app uden at lede gennem alle hjemmeskærmene.",
    "category": "apps",
    "icon": "apps",
    "minutes": 1,
    "keywords": [
      "find app",
      "søgning",
      "åbn app"
    ],
    "steps": {
      "iphone": [
        {
          "title": "Åbn søgningen",
          "description": "Stryg ned midt på hjemmeskærmen for at åbne søgningen.",
          "illustration": "text",
          "focus": "Søg"
        },
        {
          "title": "Skriv appens navn",
          "description": "Skriv navnet på den ønskede app i søgefeltet.",
          "illustration": "text",
          "focus": "Søgefelt"
        },
        {
          "title": "Åbn søgeresultatet",
          "description": "Tryk på appens ikon blandt resultaterne under Apps.",
          "illustration": "store",
          "focus": "Appikon"
        }
      ],
      "android": [
        {
          "title": "Åbn appoversigten",
          "description": "Stryg op fra hjemmeskærmen, eller tryk på knappen Apps.",
          "illustration": "store",
          "focus": "Apps"
        },
        {
          "title": "Søg efter appen",
          "description": "Skriv appens navn i appoversigtens søgefelt, hvis det findes.",
          "illustration": "text",
          "focus": "Søgefelt"
        },
        {
          "title": "Åbn den fundne app",
          "description": "Tryk på det matchende appikon i oversigten eller søgeresultaterne.",
          "illustration": "store",
          "focus": "Appikon"
        }
      ]
    }
  },
  {
    "id": "extra-foej-en-app-til-hjemmeskaermen-fra-appoversigten",
    "title": "Føj en app til hjemmeskærmen fra appoversigten",
    "summary": "Gør en installeret app lettere at finde ved at lægge dens ikon på hjemmeskærmen.",
    "category": "apps",
    "icon": "apps",
    "minutes": 2,
    "keywords": [
      "appoversigt",
      "hjemmeskærm",
      "appikon",
      "apps"
    ],
    "steps": {
      "iphone": [
        {
          "title": "Åbn Appbiblioteket",
          "description": "Stryg mod venstre over hjemmeskærmene, indtil Appbiblioteket med dine apps vises.",
          "illustration": "store",
          "focus": "Appbiblioteket"
        },
        {
          "title": "Find appen",
          "description": "Hold fingeren på den ønskede app, indtil menuen med flere valg vises.",
          "illustration": "store",
          "focus": "Appikon"
        },
        {
          "title": "Føj den til hjemmeskærmen",
          "description": "Vælg Føj til hjemmeskærm, hvis dette valg vises i appens menu.",
          "illustration": "store",
          "focus": "Føj til hjemmeskærm"
        }
      ],
      "android": [
        {
          "title": "Åbn appoversigten",
          "description": "Stryg op fra hjemmeskærmen eller tryk på Apps for at se installerede apps.",
          "illustration": "store",
          "focus": "Apps"
        },
        {
          "title": "Find appen",
          "description": "Find appikonet i listen, eller skriv appens navn i søgefeltet.",
          "illustration": "store",
          "focus": "Appikon"
        },
        {
          "title": "Placér appikonet",
          "description": "Hold fingeren på appikonet, og træk det til en ledig plads på hjemmeskærmen.",
          "illustration": "store",
          "focus": "Hjemmeskærm"
        }
      ]
    }
  },
  {
    "id": "extra-slaa-skaermzoom-til",
    "title": "Slå skærmzoom til",
    "summary": "Forstør skærmens indhold uden at ændre den almindelige tekststørrelse.",
    "category": "indstillinger",
    "icon": "tune",
    "minutes": 3,
    "keywords": [
      "skærmzoom",
      "forstørrelse",
      "tilgængelighed"
    ],
    "steps": {
      "iphone": [
        {
          "title": "Find tilgængelighed",
          "description": "Åbn Tilgængelighed i Indstillinger for at finde telefonens zoomfunktion.",
          "illustration": "text",
          "focus": "Tilgængelighed"
        },
        {
          "title": "Åbn zoom",
          "description": "Tryk på Zoom for at se indstillingerne til skærmforstørrelse.",
          "illustration": "text",
          "focus": "Zoom"
        },
        {
          "title": "Aktivér funktionen",
          "description": "Slå Zoom til; dobbelttryk med tre fingre skifter mellem forstørret og almindelig visning.",
          "illustration": "text",
          "focus": "Zoom"
        }
      ],
      "android": [
        {
          "title": "Find tilgængelighed",
          "description": "Åbn Tilgængelighed i Indstillinger, eventuelt under menuen Yderligere indstillinger.",
          "illustration": "text",
          "focus": "Tilgængelighed"
        },
        {
          "title": "Find forstørrelse",
          "description": "Vælg Forstørrelse, eventuelt under Synsforbedringer, for at åbne zoomindstillingerne.",
          "illustration": "text",
          "focus": "Forstørrelse"
        },
        {
          "title": "Vælg genvejen",
          "description": "Aktivér den tilbudte forstørrelsesgenvej; samme genvej kan afslutte forstørrelsen igen.",
          "illustration": "text",
          "focus": "Forstørrelsesgenvej"
        }
      ]
    }
  },
  {
    "id": "extra-forstaerk-kontrasten-paa-skaermen",
    "title": "Forstærk kontrasten på skærmen",
    "summary": "Gør tekst eller skærmelementer lettere at skelne fra baggrunden.",
    "category": "indstillinger",
    "icon": "tune",
    "minutes": 3,
    "keywords": [
      "kontrast",
      "tydelig tekst",
      "syn"
    ],
    "steps": {
      "iphone": [
        {
          "title": "Find skærmindstillinger",
          "description": "Åbn Indstillinger, Tilgængelighed og Skærm og tekststørrelse for at finde kontrastvalg.",
          "illustration": "text",
          "focus": "Skærm og tekststørrelse"
        },
        {
          "title": "Find kontrast",
          "description": "Find kontakten Forøg kontrast blandt indstillingerne på den åbne side.",
          "illustration": "text",
          "focus": "Forøg kontrast"
        },
        {
          "title": "Aktivér kontrasten",
          "description": "Slå Forøg kontrast til for at fremhæve forskellen mellem skærmelementer.",
          "illustration": "text",
          "focus": "Forøg kontrast"
        }
      ],
      "android": [
        {
          "title": "Søg efter kontrast",
          "description": "Søg efter Kontrast i Indstillinger for at finde telefonens tilgængelige kontrastfunktioner.",
          "illustration": "text",
          "focus": "Søg"
        },
        {
          "title": "Vælg tekstkontrast",
          "description": "Åbn Tekst med høj kontrast eller Konturtekst, hvis funktionen tilbydes.",
          "illustration": "text",
          "focus": "Tekstkontrast"
        },
        {
          "title": "Aktivér funktionen",
          "description": "Slå den fundne kontrastfunktion til for at fremhæve understøttet tekst.",
          "illustration": "text",
          "focus": "Kontrast"
        }
      ]
    }
  },
  {
    "id": "extra-find-apps-med-placeringsadgang",
    "title": "Find apps med placeringsadgang",
    "summary": "Få overblik over, hvilke apps der kan bruge din placering.",
    "category": "sikkerhed",
    "icon": "shield",
    "minutes": 3,
    "keywords": [
      "placering",
      "lokalitet",
      "apptilladelser",
      "overblik"
    ],
    "steps": {
      "iphone": [
        {
          "title": "Åbn indstillinger",
          "description": "Åbn appen Indstillinger for at finde oversigten over placeringsadgang.",
          "illustration": "shield",
          "focus": "Indstillinger"
        },
        {
          "title": "Åbn lokalitetstjenester",
          "description": "Åbn Lokalitetstjenester under menuen Anonymitet og sikkerhed i Indstillinger.",
          "illustration": "shield",
          "focus": "Lokalitetstjenester"
        },
        {
          "title": "Gennemgå oversigten",
          "description": "Gennemgå applisten og de placeringsvalg, der står ved navnene.",
          "illustration": "shield",
          "focus": "Appliste"
        }
      ],
      "android": [
        {
          "title": "Åbn indstillinger",
          "description": "Åbn appen Indstillinger for at finde oversigten over placeringsadgang.",
          "illustration": "shield",
          "focus": "Indstillinger"
        },
        {
          "title": "Find placeringstilladelser",
          "description": "Åbn Apptilladelser eller Appplaceringstilladelser under menuen Placering i Indstillinger.",
          "illustration": "shield",
          "focus": "Appplaceringstilladelser"
        },
        {
          "title": "Gennemgå grupperne",
          "description": "Gennemgå grupperne med tilladt placeringsadgang uden at ændre tilladelser.",
          "illustration": "shield",
          "focus": "Tilladelsesgrupper"
        }
      ]
    }
  },
  {
    "id": "extra-identificer-aktiv-kamera-eller-mikrofonbrug",
    "title": "Identificér aktiv kamera- eller mikrofonbrug",
    "summary": "Se, hvilken app en synlig privatlivsindikator henviser til.",
    "category": "sikkerhed",
    "icon": "shield",
    "minutes": 2,
    "keywords": [
      "grøn prik",
      "orange prik",
      "kamera",
      "mikrofon",
      "indikator"
    ],
    "steps": {
      "iphone": [
        {
          "title": "Se efter indikatoren",
          "description": "Kontrollér toppen af skærmen for en grøn eller orange prik.",
          "illustration": "shield",
          "focus": "Privatlivsindikator"
        },
        {
          "title": "Åbn kontrolcenter",
          "description": "Åbn Kontrolcenter med stryg ned fra øverste højre hjørne eller op fra bunden.",
          "illustration": "shield",
          "focus": "Kontrolcenter"
        },
        {
          "title": "Læs appnavnet",
          "description": "Læs appnavnet øverst, hvis kamera- eller mikrofonbrug er angivet.",
          "illustration": "shield",
          "focus": "Appnavn"
        }
      ],
      "android": [
        {
          "title": "Se efter indikatoren",
          "description": "Kontrollér toppen af skærmen for en grøn privatlivsindikator, hvis funktionen findes.",
          "illustration": "shield",
          "focus": "Privatlivsindikator"
        },
        {
          "title": "Åbn hurtigpanelet",
          "description": "Stryg ned fra skærmens top, mens indikatoren er synlig.",
          "illustration": "shield",
          "focus": "Hurtigpanel"
        },
        {
          "title": "Se den aktive app",
          "description": "Tryk på kamera- eller mikrofonindikatoren for at se den tilknyttede app.",
          "illustration": "shield",
          "focus": "Kamera og mikrofon"
        }
      ]
    }
  },
  {
    "id": "extra-se-afsenderoplysninger-i-en-sms",
    "title": "Se afsenderoplysninger i en sms",
    "summary": "Undersøg afsenderens oplysninger uden at åbne beskedens links.",
    "category": "sikkerhed",
    "icon": "shield",
    "minutes": 2,
    "keywords": [
      "sms",
      "afsender",
      "telefonnummer"
    ],
    "steps": {
      "iphone": [
        {
          "title": "Åbn samtalen",
          "description": "Åbn Beskeder og vælg samtalen med den afsender, du vil undersøge.",
          "illustration": "messages",
          "focus": "Samtale"
        },
        {
          "title": "Åbn afsenderen",
          "description": "Tryk på afsenderfeltet øverst for at vise samtalens kontaktmuligheder.",
          "illustration": "contacts",
          "focus": "Afsender"
        },
        {
          "title": "Se oplysningerne",
          "description": "Åbn Info og læs afsenderoplysningerne uden at vælge opkald eller links.",
          "illustration": "contacts",
          "focus": "Info"
        }
      ],
      "android": [
        {
          "title": "Åbn samtalen",
          "description": "Åbn din beskedapp og vælg samtalen med den afsender, du undersøger.",
          "illustration": "messages",
          "focus": "Samtale"
        },
        {
          "title": "Find detaljemenuen",
          "description": "Tryk på afsenderfeltet eller samtalens tre prikker for at finde oplysninger.",
          "illustration": "messages",
          "focus": "Samtalemenu"
        },
        {
          "title": "Se oplysningerne",
          "description": "Vælg Detaljer eller Kontaktoplysninger og læs nummeret uden at ringe.",
          "illustration": "contacts",
          "focus": "Kontaktoplysninger"
        }
      ]
    }
  },
  {
    "id": "extra-aabn-en-kendt-hjemmeside-uden-beskedens-link",
    "title": "Åbn en kendt hjemmeside uden beskedens link",
    "summary": "Brug en webadresse, du allerede kender fra en uafhængig kilde.",
    "category": "sikkerhed",
    "icon": "shield",
    "minutes": 2,
    "keywords": [
      "sikkert besøg",
      "webadresse",
      "link",
      "hjemmeside"
    ],
    "steps": {
      "iphone": [
        {
          "title": "Åbn browseren",
          "description": "Åbn Safari fra hjemmeskærmen i stedet for at bruge beskedens link.",
          "illustration": "browser",
          "focus": "Safari"
        },
        {
          "title": "Skriv den kendte adresse",
          "description": "Indtast hjemmesidens adresse i adressefeltet fra en uafhængig kilde, du stoler på.",
          "illustration": "text",
          "focus": "Adressefelt"
        },
        {
          "title": "Åbn hjemmesiden",
          "description": "Tryk på Gå efter at have kontrolleret hele den indtastede webadresse.",
          "illustration": "browser",
          "focus": "Gå"
        }
      ],
      "android": [
        {
          "title": "Åbn browseren",
          "description": "Åbn Chrome fra appoversigten i stedet for at bruge beskedens link.",
          "illustration": "browser",
          "focus": "Chrome"
        },
        {
          "title": "Skriv den kendte adresse",
          "description": "Indtast hjemmesidens adresse i adressefeltet fra en uafhængig kilde, du stoler på.",
          "illustration": "text",
          "focus": "Adressefelt"
        },
        {
          "title": "Åbn hjemmesiden",
          "description": "Tryk på Gå eller pilen efter at have kontrolleret hele webadressen.",
          "illustration": "browser",
          "focus": "Gå"
        }
      ]
    }
  },
  {
    "id": "extra-kontroller-en-paastaaet-systemopdatering",
    "title": "Kontrollér en påstået systemopdatering",
    "summary": "Se telefonens rigtige opdateringsside i stedet for at følge en popup.",
    "category": "sikkerhed",
    "icon": "shield",
    "minutes": 3,
    "keywords": [
      "systemopdatering",
      "falsk popup",
      "software",
      "indstillinger"
    ],
    "steps": {
      "iphone": [
        {
          "title": "Åbn rigtige indstillinger",
          "description": "Åbn Indstillinger fra hjemmeskærmen uden at bruge knapper i advarslen.",
          "illustration": "shield",
          "focus": "Indstillinger"
        },
        {
          "title": "Find opdateringssiden",
          "description": "Vælg Generelt og derefter Softwareopdatering for at se telefonens officielle opdateringsside.",
          "illustration": "shield",
          "focus": "Softwareopdatering"
        },
        {
          "title": "Læs resultatet",
          "description": "Læs den viste opdateringsstatus uden at starte download eller installation.",
          "illustration": "text",
          "focus": "Opdateringsstatus"
        }
      ],
      "android": [
        {
          "title": "Åbn rigtige indstillinger",
          "description": "Åbn Indstillinger fra appoversigten uden at bruge knapper i advarslen.",
          "illustration": "shield",
          "focus": "Indstillinger"
        },
        {
          "title": "Find opdateringssiden",
          "description": "Søg efter Softwareopdatering eller Systemopdatering i Indstillinger og åbn det relevante resultat.",
          "illustration": "shield",
          "focus": "Systemopdatering"
        },
        {
          "title": "Læs resultatet",
          "description": "Læs den viste opdateringsstatus uden at starte download eller installation.",
          "illustration": "text",
          "focus": "Opdateringsstatus"
        }
      ]
    }
  },
  {
    "id": "extra-kontroller-udgiveren-af-en-foreslaaet-app",
    "title": "Kontrollér udgiveren af en foreslået app",
    "summary": "Se appens udgiver i den officielle butik uden at installere noget.",
    "category": "sikkerhed",
    "icon": "shield",
    "minutes": 3,
    "keywords": [
      "app",
      "udgiver",
      "udvikler",
      "falsk app"
    ],
    "steps": {
      "iphone": [
        {
          "title": "Søg i butikken",
          "description": "Åbn App Store og søg efter appens navn uden at bruge popup-linket.",
          "illustration": "store",
          "focus": "Søg"
        },
        {
          "title": "Åbn appoplysninger",
          "description": "Tryk på appens navn eller billede i resultaterne, ikke på Hent.",
          "illustration": "store",
          "focus": "Appoplysninger"
        },
        {
          "title": "Læs udgiveren",
          "description": "Kontrollér udviklernavnet under appnavnet eller udbyderen i sidens afsnit Oplysninger.",
          "illustration": "text",
          "focus": "Udvikler"
        }
      ],
      "android": [
        {
          "title": "Søg i butikken",
          "description": "Åbn Play Butik og søg efter appens navn uden at bruge popup-linket.",
          "illustration": "store",
          "focus": "Søg"
        },
        {
          "title": "Åbn appoplysninger",
          "description": "Tryk på appens navn eller billede i resultaterne, ikke på Installer.",
          "illustration": "store",
          "focus": "Appoplysninger"
        },
        {
          "title": "Læs udgiveren",
          "description": "Kontrollér udviklernavnet under appens titel og oplysningerne under Appsupport eller Udviklerkontakt.",
          "illustration": "text",
          "focus": "Udvikler"
        }
      ]
    }
  },
  {
    "id": "extra-laes-batteriets-udvikling-over-tid",
    "title": "Læs batteriets udvikling over tid",
    "summary": "Se, hvornår batteriniveauet er faldet eller steget.",
    "category": "indstillinger",
    "icon": "tune",
    "minutes": 3,
    "keywords": [
      "batterigraf",
      "batteriniveau",
      "strømforbrug"
    ],
    "steps": {
      "iphone": [
        {
          "title": "Åbn Indstillinger",
          "description": "Åbn appen Indstillinger fra hjemmeskærmen eller telefonens appbibliotek.",
          "illustration": "text",
          "focus": "Indstillinger"
        },
        {
          "title": "Åbn Batteri",
          "description": "Tryk på Batteri for at åbne oversigten over strømforbrug.",
          "illustration": "text",
          "focus": "Batteri"
        },
        {
          "title": "Læs grafen",
          "description": "Læs batterigrafen, hvor fald viser forbrug og stigninger viser opladning.",
          "illustration": "text",
          "focus": "Batterigraf"
        }
      ],
      "android": [
        {
          "title": "Åbn Indstillinger",
          "description": "Åbn appen Indstillinger fra hjemmeskærmen eller listen med apps.",
          "illustration": "text",
          "focus": "Indstillinger"
        },
        {
          "title": "Åbn Batteri",
          "description": "Tryk på Batteri, eventuelt under menuen Enhedspleje eller Enhedsvedligeholdelse.",
          "illustration": "text",
          "focus": "Batteri"
        },
        {
          "title": "Find grafen",
          "description": "Åbn Batteriforbrug eller batterigrafen for at se niveauets udvikling.",
          "illustration": "text",
          "focus": "Batteriforbrug"
        }
      ]
    }
  },
  {
    "id": "extra-opret-en-alarm",
    "title": "Opret en alarm",
    "summary": "Indstil en alarm til et bestemt tidspunkt.",
    "category": "indstillinger",
    "icon": "tune",
    "minutes": 2,
    "keywords": [
      "ur",
      "alarm",
      "vækketur"
    ],
    "steps": {
      "iphone": [
        {
          "title": "Find alarmerne",
          "description": "Åbn fanen Alarm i appen Ur på din iPhone.",
          "illustration": "text",
          "focus": "Alarm"
        },
        {
          "title": "Tilføj en alarm",
          "description": "Tryk på plusknappen øverst for at oprette en alarm.",
          "illustration": "text",
          "focus": "Plus"
        },
        {
          "title": "Gem tidspunktet",
          "description": "Gem det ønskede klokkeslæt med knappen Gem øverst.",
          "illustration": "text",
          "focus": "Gem"
        }
      ],
      "android": [
        {
          "title": "Find alarmerne",
          "description": "Åbn fanen Alarm i telefonens app Ur eller Klokke.",
          "illustration": "text",
          "focus": "Alarm"
        },
        {
          "title": "Tilføj en alarm",
          "description": "Tryk på plusknappen for at oprette en ny alarm.",
          "illustration": "text",
          "focus": "Plus"
        },
        {
          "title": "Gem tidspunktet",
          "description": "Bekræft det ønskede klokkeslæt med Gem, OK eller fluebenet.",
          "illustration": "text",
          "focus": "Gem"
        }
      ]
    }
  },
  {
    "id": "extra-start-en-nedtaelling",
    "title": "Start en nedtælling",
    "summary": "Brug timeren til at få besked efter et bestemt tidsrum.",
    "category": "indstillinger",
    "icon": "tune",
    "minutes": 2,
    "keywords": [
      "timer",
      "nedtælling",
      "minutter"
    ],
    "steps": {
      "iphone": [
        {
          "title": "Find timeren",
          "description": "Åbn fanen Timere eller Timer i appen Ur.",
          "illustration": "text",
          "focus": "Timer"
        },
        {
          "title": "Vælg varigheden",
          "description": "Indstil den ønskede varighed med felterne timer, minutter og sekunder.",
          "illustration": "text",
          "focus": "Varighed"
        },
        {
          "title": "Start nedtællingen",
          "description": "Tryk på Start for at begynde den valgte nedtælling.",
          "illustration": "text",
          "focus": "Start"
        }
      ],
      "android": [
        {
          "title": "Find timeren",
          "description": "Åbn fanen Timer i telefonens app Ur eller Klokke.",
          "illustration": "text",
          "focus": "Timer"
        },
        {
          "title": "Vælg varigheden",
          "description": "Indtast den ønskede varighed i felterne timer, minutter og sekunder.",
          "illustration": "text",
          "focus": "Varighed"
        },
        {
          "title": "Start nedtællingen",
          "description": "Tryk på Start eller trekantknappen for at begynde nedtællingen.",
          "illustration": "text",
          "focus": "Start"
        }
      ]
    }
  },
  {
    "id": "extra-brug-lommelygten-fra-hurtigindstillinger",
    "title": "Brug lommelygten fra hurtigindstillinger",
    "summary": "Tænd telefonens lys kortvarigt, og sluk det igen bagefter.",
    "category": "indstillinger",
    "icon": "tune",
    "minutes": 1,
    "keywords": [
      "lommelygte",
      "lys",
      "kontrolcenter",
      "hurtigindstillinger"
    ],
    "steps": {
      "iphone": [
        {
          "title": "Åbn Kontrolcenter",
          "description": "Åbn Kontrolcenter med et strøg ned fra øverste højre hjørne eller op fra bunden på iPhones med hjemknap.",
          "illustration": "text",
          "focus": "Kontrolcenter"
        },
        {
          "title": "Tænd lyset",
          "description": "Tryk på lommelygteknappen i Kontrolcenter for at tænde lyset.",
          "illustration": "camera",
          "focus": "Lommelygte"
        },
        {
          "title": "Sluk lyset",
          "description": "Tryk på lommelygteknappen igen, når du er færdig med lyset.",
          "illustration": "camera",
          "focus": "Lommelygte"
        }
      ],
      "android": [
        {
          "title": "Åbn hurtigindstillinger",
          "description": "Stryg ned fra skærmens top to gange for at vise hurtigindstillinger.",
          "illustration": "text",
          "focus": "Hurtigindstillinger"
        },
        {
          "title": "Tænd lyset",
          "description": "Tryk på Lommelygte eller Lygte, eventuelt på næste side af knapperne.",
          "illustration": "camera",
          "focus": "Lommelygte"
        },
        {
          "title": "Sluk lyset",
          "description": "Tryk på lommelygteknappen igen, når du er færdig med lyset.",
          "illustration": "camera",
          "focus": "Lommelygte"
        }
      ]
    }
  },
  {
    "id": "extra-tillad-skaermen-at-dreje",
    "title": "Tillad skærmen at dreje",
    "summary": "Slå automatisk rotation til, og afprøv den i browseren.",
    "category": "indstillinger",
    "icon": "tune",
    "minutes": 2,
    "keywords": [
      "skærmrotation",
      "liggende",
      "rotation",
      "orientering"
    ],
    "steps": {
      "iphone": [
        {
          "title": "Åbn Kontrolcenter",
          "description": "Åbn Kontrolcenter med et strøg ned fra øverste højre hjørne eller op fra bunden på iPhones med hjemknap.",
          "illustration": "text",
          "focus": "Kontrolcenter"
        },
        {
          "title": "Fjern rotationslåsen",
          "description": "Slå den aktive rotationslås fra med knappen med hængelås og cirkelpil.",
          "illustration": "text",
          "focus": "Rotationslås"
        },
        {
          "title": "Afprøv rotationen",
          "description": "Drej telefonen på siden med Safari åben for at afprøve rotationen.",
          "illustration": "browser",
          "focus": "Safari"
        }
      ],
      "android": [
        {
          "title": "Åbn hurtigindstillinger",
          "description": "Stryg ned fra skærmens top to gange for at vise hurtigindstillinger.",
          "illustration": "text",
          "focus": "Hurtigindstillinger"
        },
        {
          "title": "Tillad rotation",
          "description": "Aktivér Automatisk rotation med knappen, som også kan hedde Portræt.",
          "illustration": "text",
          "focus": "Automatisk rotation"
        },
        {
          "title": "Afprøv rotationen",
          "description": "Drej telefonen på siden med browseren åben for at afprøve rotationen.",
          "illustration": "browser",
          "focus": "Browser"
        }
      ]
    }
  }
];

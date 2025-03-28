// Section data based on the current website
export const sections = [
  {
    id: "over-ons",
    title: "Over ons",
    subtitle: "Onze Visie & Missie",
    content:
      "Wij zijn IAM STUDIOS, een toonaangevend creatief geluidsstudio gespecialiseerd in hoogwaardige audio-oplossingen voor film, televisie, games en reclame.",
    useCustomImage: true,
  },
  {
    id: "portfolio",
    title: "Portfolio",
    subtitle: "Werk waar we trots op zijn",
    content: "Bekijk onze recente projecten voor toonaangevende merken en producties in de entertainment industrie.",
    image: "https://images.unsplash.com/photo-1610041321420-a596dd14ebc9?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "divisies",
    title: "Divisies",
    subtitle: "Onze Specialisaties",
    content:
      "IAM STUDIOS ontwierp in 2023 haar eigen spreekcel genaamd The Sabine 1. Een ruime spreekcel met sublieme akoestiek.",
    image: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "contact",
    title: "Contact",
    subtitle: "Neem Contact Op",
    content: "Neem contact met ons op voor meer informatie over onze diensten of om een project te bespreken.",
    noImage: true,
  },
]

// Featured works with services
export const featuredWorks = [
  {
    title: "Voice-overs & Dubbing",
    category: "Diensten",
    description: "Professionele stemacteurs en opnamestudio's voor voice-overs en dubbing in meerdere talen.",
    serviceType: "voice-over",
  },
  {
    title: "Sound Design",
    category: "Diensten",
    description: "Creatieve geluidseffecten en atmosferen die uw visuele content tot leven brengen.",
    serviceType: "sound-design",
  },
  {
    title: "Muziekcompositie",
    category: "Diensten",
    description: "Op maat gemaakte muziek die perfect aansluit bij de emotie en het verhaal van uw project.",
    serviceType: "muziek",
  },
  {
    title: "Geluidsnabewerking",
    category: "Diensten",
    description: "Professionele audio post-productie om uw project de perfecte geluidskwaliteit te geven.",
    serviceType: "nabewerking",
  },
]

// Portfolio projects from the current website with local image paths
export const portfolioProjects = [
  {
    title: "Uber",
    description:
      "U kent ze wel. Van die chique taxi's die je met je iPhone kunt bestellen. Die wilden opeens ook op TV. En snel een beetje. Dus namen wij de voice-over voor ze op. En verzorgden we de TV mix. 's Ochtends gebeld, 's middags klaar. Dus worden wij nu voor altijd gratis door Uber rondgereden.",
    fallbackColor: "bg-gray-900",
    accentColor: "bg-gray-500",
    pattern: "grid",
    services: ["Geluidsnabewerking", "Voice-over"],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Uber%20Portfolio.jpg-Vp5DhT7aFJgj0mpcaphNHwwKSRz94k.jpeg",
    alt: "Uber logo met IAM STUDIOS geluidsstudio project",
  },
  {
    title: "48 HOUR: Family Wars",
    description:
      "Voor het 48 HOUR Amsterdam Festival en voor Team TucTuv verzorgden wij het sound design en de geluidsnabewerking van de inzending Family Wars. Een korte film over een fan van de Star Wars saga, die fantasie en werkelijkheid niet meer helemaal uit elkaar kan houden. De film werd genomineerd voor beste sound design.",
    fallbackColor: "bg-blue-950",
    accentColor: "bg-blue-600",
    pattern: "noise",
    services: ["Dubbing", "Geluidsnabewerking", "Sound design"],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Family%20Wars%20Portfolio.jpg-NrzHimZ8VWOQTW3kmJVmyrb6sLdgLr.jpeg",
    alt: "Family Wars filmscène met IAM STUDIOS sound design",
  },
  {
    title: "Skylanders Superchargers",
    description:
      "Of we even 70.000 inzetten konden opnemen voor een van de meest succesvolle en leukste games ooit. Ja, dat konden we. Met meer dan 40 stemacteurs die samen, onder regie, zo'n 70 rollen spelen. En dan geen enkele inzet vergeten. Zo zijn wij. En we zijn behoorlijk trots op het resultaat.",
    fallbackColor: "bg-indigo-900",
    accentColor: "bg-indigo-500",
    pattern: "circles",
    services: ["Dubbing", "Geluidsnabewerking", "Voice-over"],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Skylanders%20Portfolio-abJZSWvNv2pHgINqijlmmT8rqhKETg.png",
    alt: "Skylanders Superchargers game personages met IAM STUDIOS voice-over",
  },
  {
    title: "Nike Mercurial Superfly",
    description:
      '"Hallo, met Nike." En toen bleef aan onze zijde het even stil. Maar niet voor lang, want sound design en muziek mogen maken voor een Nike commercial is de droom van elke sound designer. Dus zijn we meteen het voetbalveld opgegaan om het geluid van nat-gras-onder-een-Nike-Mercurial-Superfly-voetbalschoen op te nemen. En dat klinkt best vet.',
    fallbackColor: "bg-red-900",
    accentColor: "bg-red-500",
    pattern: "lines",
    services: ["Geluidsnabewerking", "Muziekcompositie", "Sound design"],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nike%20Mercurial-JDkG2pUpEfnAYFidUDQNzIzL1VR1Qp.png",
    alt: "Nike Mercurial Superfly voetbalschoen met IAM STUDIOS sound design",
  },
  {
    title: "Penny's: Liefde in de Lucht",
    description:
      "Maak voor ons gedurende anderhalf jaar élke dag een soort soap-aflevering voor onze lezertjes.\" Dat was de opdracht van paardenblad Penny. En daarom verzonnen we de 'luisterstrip', een geanimeerde strip voor tablets die door ons werd voorzien van stemmen, muziek en geluid. Met elke aflevering weer 15 minuten nieuw materiaal.",
    fallbackColor: "bg-pink-800",
    accentColor: "bg-pink-400",
    pattern: "waves",
    services: ["Dubbing", "Geluidsnabewerking", "Muziekcompositie", "Sound design"],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Penny%20Liefde-j0vELgIUIWfGfJwvLWYZbzxjaWHepE.png",
    alt: "Penny's Liefde in de Lucht animatie met IAM STUDIOS audio",
  },
  {
    title: "De Nieuwe Bibliotheek",
    description:
      "Een korte animatiefilm van Frank Siebelink over de avonturen die je kunt beleven in de bibliotheek. Wij mochten de muziek, het sound design en de voice-over verzorgen.",
    fallbackColor: "bg-blue-900",
    accentColor: "bg-blue-500",
    pattern: "grid",
    services: ["Geluidsnabewerking", "Muziekcompositie", "Sound design", "Voice-over"],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nieuwebibliotheek%20%281%29-vVglUHqhUP63iRjqZ2emrXdyH5C4rV.png",
    alt: "De Nieuwe Bibliotheek animatie met IAM STUDIOS muziek en voice-over",
  },
  {
    title: "My Brother is an Ostrich",
    description:
      "Voor deze korte animatiefilm over een jongen en zijn niet-zo-normale broer mochten wij met veel plezier de muziek en het sound design verzorgen.",
    fallbackColor: "bg-amber-800",
    accentColor: "bg-amber-500",
    pattern: "waves",
    services: ["Geluidsnabewerking", "Muziekcompositie", "Sound design"],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Brother%20Ostrich-2OZnPioj6ZMzK8VqG3b2xFNWSQyAQq.jpeg",
    alt: "My Brother is an Ostrich animatiefilm met IAM STUDIOS muziek",
  },
  {
    title: "Scrap",
    description:
      "Scrap is een korte studentenfilm over een man die gevangen zit in zijn treurige leven op de autosloop. Een bijzonder projects waarbij wij o.a. de muziek voor verzorgden.",
    fallbackColor: "bg-gray-800",
    accentColor: "bg-gray-500",
    pattern: "noise",
    services: ["Geluidsnabewerking", "Muziekcompositie", "Sound design"],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Portfolio%20Scrap-Bgm9VhqYKwTN20ZeJAlLcp2dlKqDD0.jpeg",
    alt: "Scrap studentenfilm met IAM STUDIOS muziekcompositie",
  },
  {
    title: "BLG Beleggen (SNS)",
    description:
      "Wel eens van een 'explanimation' gehoord? Dat is een filmpje dat een bepaald proces of een bepaalde handeling uitlegt aan de hand van een geanimeerde film.",
    fallbackColor: "bg-blue-800",
    accentColor: "bg-blue-400",
    pattern: "dots",
    services: ["Sound design"],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLG%20Beleggen%20SNS-6ww2Z4YRBuU660ZCVhszOLC3XRUgay.jpeg",
    alt: "BLG Beleggen SNS explanimation met IAM STUDIOS sound design",
  },
  {
    title: "Storm & Skye Secret of the Car Wash",
    description:
      "We wonnen er de belangrijkste prijs voor apps in de Verenigde Staten mee: de Tabby Award. Storm & Skye and the Secret of the Car Wash is de eerste aflevering van een serie spannende verhalen voor kinderen van vijf tot tien jaar oud. Inmiddels kijken en luisteren dagelijks meer dan 100.000 kinderen naar. En wij hadden de eer om de dubbing, het sound design en de muziek te mogen verzorgen.",
    fallbackColor: "bg-cyan-900",
    accentColor: "bg-cyan-500",
    pattern: "waves",
    services: ["Dubbing", "Geluidsnabewerking", "Muziekcompositie", "Sound design"],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Storm%20and%20Sky-ZX6GmoAEHI3sMDwa6rhT6qtANoV7fY.png",
    alt: "Storm & Skye Secret of the Car Wash app met IAM STUDIOS audio",
  },
  {
    title: "Moeders voor Moeders",
    description:
      "Het klinkt wat vreemd, plassen in een can. Vonden wij ook! Totdat we hoorden dat daarmee vele vrouwen met vruchtbaarheidsproblemen geholpen worden. En dat mochten we middels muziek, sound design en voice-over uitleggen in dit filmpje van Moeders voor Moeders.",
    fallbackColor: "bg-pink-900",
    accentColor: "bg-pink-500",
    pattern: "dots",
    services: ["Geluidsnabewerking", "Muziekcompositie", "Sound design", "Voice-over"],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Moeders%20voor%20Moeders-dKl2cv3avgCbeiNofovfHhMqyxiarl.png",
    alt: "Moeders voor Moeders campagne met IAM STUDIOS voice-over",
  },
  {
    title: "Cevo",
    description:
      'Onze opdrachtgever kwam met een heel ingewikkeld verhaal over kunstmatige intelligentie. Nu zijn we best intelligent, maar hoe ze computers precies laten nadenken konden we toch niet helemaal volgen. "Geef ons jullie film nou maar. Wij maken er wel iets moois van." En zo geschiedde. CEVO, platform voor Artificial Intelligence, kreeg een prachtige film, door ons voorzien van muziek en sound design.',
    fallbackColor: "bg-violet-900",
    accentColor: "bg-violet-500",
    pattern: "grid",
    services: ["Geluidsnabewerking", "Muziekcompositie", "Sound design"],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cevo%20Portfolio-VWXvFzaYDz8R5kw22dne4y1piLAqTe.png",
    alt: "Cevo AI platform film met IAM STUDIOS muziek en sound design",
  },
  {
    title: "Dodaq",
    description:
      "Psst! Diamant kopen? Van een oud omaatje geweest! Nou ja, niet helemaal. Gewoon online gekocht. Soort van. Voor de online diamantenbeurs DODAQ voorzagen we deze commercial van sound design, muziek en voice-over.",
    fallbackColor: "bg-gray-800",
    accentColor: "bg-gray-400",
    pattern: "circles",
    services: ["Geluidsnabewerking", "Muziekcompositie", "Sound design"],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dodaq%20Portfolio-icOP4LXoiAvwu5oOEzMDpMkS3UBwsM.png",
    alt: "Dodaq diamantenbeurs commercial met IAM STUDIOS audio",
  },
  {
    title: "La Paradoja de Arrow",
    description:
      "Wat zou er gebeuren als het leven keuzes voor jou maakt? Als alles wat je doet voorbestemd is en je geen vrijheid meer hebt om zélf te kiezen? In deze korte film, waarvoor wij de muziek en het sound design maakten, wordt die vraag beantwoord. Muziek geïnspireerd op de fabuleuze sounds die in de jaren vijftig uit het NatLab van Philips kwamen.",
    fallbackColor: "bg-amber-900",
    accentColor: "bg-amber-600",
    pattern: "lines",
    services: ["Geluidsnabewerking", "Muziekcompositie"],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Laparadoja%20Portfolio-HAKmU8D9BYQg97ADvMlNySczyFkVLF.png",
    alt: "La Paradoja de Arrow film met IAM STUDIOS muziekcompositie",
  },
]

export const portfolioProjectsEN = [
  {
    title: "Uber",
    description:
      "You know them. Those fancy taxis that you can order with your iPhone. They suddenly wanted to be on TV too. And quickly. So we recorded the voice-over for them. And we took care of the TV mix. Called in the morning, ready in the afternoon. So we will be driven around for free by Uber forever.",
    fallbackColor: "bg-gray-900",
    accentColor: "bg-gray-500",
    pattern: "grid",
    services: ["Sound Post-Production", "Voice-over"],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Uber%20Portfolio.jpg-Vp5DhT7aFJgj0mpcaphNHwwKSRz94k.jpeg",
    alt: "Uber logo with IAM STUDIOS sound studio project",
  },
  {
    title: "48 HOUR: Family Wars",
    description:
      "For the 48 HOUR Amsterdam Festival and for Team TucTuv, we provided the sound design and sound post-production of the Family Wars entry. A short film about a fan of the Star Wars saga, who can no longer completely distinguish fantasy and reality. The film was nominated for best sound design.",
    fallbackColor: "bg-blue-950",
    accentColor: "bg-blue-600",
    pattern: "noise",
    services: ["Dubbing", "Sound Post-Production", "Sound design"],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Family%20Wars%20Portfolio.jpg-NrzHimZ8VWOQTW3kmJVmyrb6sLdgLr.jpeg",
    alt: "Family Wars film scene with IAM STUDIOS sound design",
  },
  {
    title: "Skylanders Superchargers",
    description:
      "Whether we could record 70,000 takes for one of the most successful and fun games ever. Yes, we could. With more than 40 voice actors who together, under direction, play about 70 roles. And don't forget a single bet. That's who we are. And we are quite proud of the result.",
    fallbackColor: "bg-indigo-900",
    accentColor: "bg-indigo-500",
    pattern: "circles",
    services: ["Dubbing", "Sound Post-Production", "Voice-over"],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Skylanders%20Portfolio-abJZSWvNv2pHgINqijlmmT8rqhKETg.png",
    alt: "Skylanders Superchargers game characters with IAM STUDIOS voice-over",
  },
  {
    title: "Nike Mercurial Superfly",
    description:
      '"Hello, Nike here." And then it was quiet on our side for a while. But not for long, because making sound design and music for a Nike commercial is the dream of every sound designer. So we immediately went to the football field to record the sound of wet-grass-under-a-Nike-Mercurial-Superfly-football shoe. And that sounds pretty cool.',
    fallbackColor: "bg-red-900",
    accentColor: "bg-red-500",
    pattern: "lines",
    services: ["Sound Post-Production", "Music Composition", "Sound design"],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nike%20Mercurial-JDkG2pUpEfnAYFidUDQNzIzL1VR1Qp.png",
    alt: "Nike Mercurial Superfly football shoe with IAM STUDIOS sound design",
  },
  {
    title: "Penny's: Love in the Air",
    description:
      "Make a kind of soap episode for our readers every day for a year and a half.\" That was the assignment from horse magazine Penny. That's why we came up with the 'listening strip', an animated strip for tablets that was provided by us with voices, music and sound. With 15 minutes of new material every episode.",
    fallbackColor: "bg-pink-800",
    accentColor: "bg-pink-400",
    pattern: "waves",
    services: ["Dubbing", "Sound Post-Production", "Music Composition", "Sound design"],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Penny%20Liefde-j0vELgIUIWfGfJwvLWYZbzxjaWHepE.png",
    alt: "Penny's Love in the Air animation with IAM STUDIOS audio",
  },
  {
    title: "The New Library",
    description:
      "A short animated film by Frank Siebelink about the adventures you can experience in the library. We were allowed to take care of the music, sound design and voice-over.",
    fallbackColor: "bg-blue-900",
    accentColor: "bg-blue-500",
    pattern: "grid",
    services: ["Sound Post-Production", "Music Composition", "Sound design", "Voice-over"],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nieuwebibliotheek%20%281%29-vVglUHqhUP63iRjqZ2emrXdyH5C4rV.png",
    alt: "The New Library animation with IAM STUDIOS music and voice-over",
  },
  {
    title: "My Brother is an Ostrich",
    description:
      "For this short animated film about a boy and his not-so-normal brother, we were happy to provide the music and sound design.",
    fallbackColor: "bg-amber-800",
    accentColor: "bg-amber-500",
    pattern: "waves",
    services: ["Sound Post-Production", "Music Composition", "Sound design"],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Brother%20Ostrich-2OZnPioj6ZMzK8VqG3b2xFNWSQyAQq.jpeg",
    alt: "My Brother is an Ostrich animated film with IAM STUDIOS music",
  },
  {
    title: "Scrap",
    description:
      "Scrap is a short student film about a man trapped in his sad life at the car graveyard. A special project for which we provided the music, among other things.",
    fallbackColor: "bg-gray-800",
    accentColor: "bg-gray-500",
    pattern: "noise",
    services: ["Sound Post-Production", "Music Composition", "Sound design"],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Portfolio%20Scrap-Bgm9VhqYKwTN20ZeJAlLcp2dlKqDD0.jpeg",
    alt: "Scrap student film with IAM STUDIOS music composition",
  },
  {
    title: "BLG Investing (SNS)",
    description:
      "Ever heard of an 'explanimation'? That is a film that explains a certain process or action using an animated film.",
    fallbackColor: "bg-blue-800",
    accentColor: "bg-blue-400",
    pattern: "dots",
    services: ["Sound design"],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLG%20Beleggen%20SNS-6ww2Z4YRBuU660ZCVhszOLC3XRUgay.jpeg",
    alt: "BLG Investing SNS explanimation with IAM STUDIOS sound design",
  },
  {
    title: "Storm & Skye Secret of the Car Wash",
    description:
      "We won the most important prize for apps in the United States with it: the Tabby Award. Storm & Skye and the Secret of the Car Wash is the first episode of a series of exciting stories for children aged five to ten. More than 100,000 children now watch and listen to it every day. And we had the honor of providing the dubbing, sound design and music.",
    fallbackColor: "bg-cyan-900",
    accentColor: "bg-cyan-500",
    pattern: "waves",
    services: ["Dubbing", "Sound Post-Production", "Music Composition", "Sound design"],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Storm%20and%20Sky-ZX6GmoAEHI3sMDwa6rhT6qtANoV7fY.png",
    alt: "Storm & Skye Secret of the Car Wash app with IAM STUDIOS audio",
  },
  {
    title: "Mothers for Mothers",
    description:
      "It sounds a bit strange, peeing in a can. We thought so too! Until we heard that many women with fertility problems are helped with this. And we were allowed to explain this in this film by Moeders voor Moeders through music, sound design and voice-over.",
    fallbackColor: "bg-pink-900",
    accentColor: "bg-pink-500",
    pattern: "dots",
    services: ["Sound Post-Production", "Music Composition", "Sound design", "Voice-over"],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Moeders%20voor%20Moeders-dKl2cv3avgCbeiNofovfHhMqyxiarl.png",
    alt: "Mothers for Mothers campaign with IAM STUDIOS voice-over",
  },
  {
    title: "Cevo",
    description:
      'Our client came up with a very complicated story about artificial intelligence. Now we are quite intelligent, but we could not quite follow how they make computers think exactly. "Just give us your film. We\'ll make something beautiful out of it." And so it happened. CEVO, platform for Artificial Intelligence, got a beautiful film, provided by us with music and sound design.',
    fallbackColor: "bg-violet-900",
    accentColor: "bg-violet-500",
    pattern: "grid",
    services: ["Sound Post-Production", "Music Composition", "Sound design"],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cevo%20Portfolio-VWXvFzaYDz8R5kw22dne4y1piLAqTe.png",
    alt: "Cevo AI platform film with IAM STUDIOS music and sound design",
  },
  {
    title: "Dodaq",
    description:
      "Psst! Buy a diamond? Been an old grandma! Well, not quite. Just bought online. Sort of. For the online diamond exchange DODAQ, we provided this commercial with sound design, music and voice-over.",
    fallbackColor: "bg-gray-800",
    accentColor: "bg-gray-400",
    pattern: "circles",
    services: ["Sound Post-Production", "Music Composition", "Sound design"],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dodaq%20Portfolio-icOP4LXoiAvwu5oOEzMDpMkS3UBwsM.png",
    alt: "Dodaq diamond exchange commercial with IAM STUDIOS audio",
  },
  {
    title: "La Paradoja de Arrow",
    description:
      "What would happen if life made choices for you? If everything you do is predetermined and you no longer have the freedom to choose for yourself? In this short film, for which we made the music and sound design, that question is answered. Music inspired by the fabulous sounds that came out of Philips' NatLab in the 1950s.",
    fallbackColor: "bg-amber-900",
    accentColor: "bg-amber-600",
    pattern: "lines",
    services: ["Sound Post-Production", "Music Composition"],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Laparadoja%20Portfolio-HAKmU8D9BYQg97ADvMlNySczyFkVLF.png",
    alt: "La Paradoja de Arrow film with IAM STUDIOS music composition",
  },
]

// Translations for all text content
export const translations = {
  en: {
    seo: {
      title: "IAM STUDIOS | Professional Sound Studio Amsterdam",
      description:
        "Studios for voice-overs & dubbing • Sound post-production • Sound design • Music composition in Amsterdam",
      keywords: [
        "sound studio",
        "voice-over",
        "dubbing",
        "sound design",
        "music composition",
        "amsterdam",
        "audio post-production",
      ],
    },
    nav: {
      home: "Home",
      services: "Services",
      aboutUs: "About Us",
      portfolio: "Portfolio",
      divisions: "Divisions",
      contact: "Contact",
    },
    hero: {
      services: "Voice-overs & dubbing • Sound post-production • Sound design • Music composition",
      tellMore: "Tell me more",
      scroll: "SCROLL",
    },
    services: {
      title: "What we offer",
      scrollForMore: "Scroll for more services",
      swipeForMore: "Swipe for more services",
    },
    aboutUs: {
      subtitle: "Our Vision & Mission",
      content:
        "We are IAM STUDIOS, a leading creative sound studio specializing in high-quality audio solutions for film, television, games and advertising.",
      viewOurWork: "VIEW OUR WORK",
    },
    portfolio: {
      subtitle: "Work we're proud of",
      content: "View our recent projects for leading brands and productions in the entertainment industry.",
      scrollForMoreProjects: "Scroll for more projects",
      swipeForMoreProjects: "Swipe for more projects",
    },
    divisions: {
      subtitle: "Our Specializations",
      content:
        "IAM STUDIOS designed its own speaking cell called The Sabine 1 in 2023. A spacious speaking cell with sublime acoustics. Click the button below to read more about our speaking cell.",
      button: "THE SABINE 1",
    },
    contact: {
      subtitle: "Get In Touch",
      content: "Contact us for more information about our services or to discuss a project.",
      message:
        "Because we're often in the studio, email is the best way to reach us. If you call and we can't answer, we'll call you back as soon as possible!",
      email: "EMAIL",
      phone: "PHONE",
      sendMessage: "SEND A MESSAGE",
    },
    footer: {
      services: "Voice-overs & dubbing • Sound post-production • Sound design • Music composition",
      contact: "CONTACT",
      rights: "All rights reserved.",
    },
    featuredWorks: [
      {
        title: "Voice-overs & Dubbing",
        category: "Services",
        description:
          "Professional voice actors and recording studios for voice-overs and dubbing in multiple languages.",
      },
      {
        title: "Sound Design",
        category: "Services",
        description: "Creative sound effects and atmospheres that bring your visual content to life.",
      },
      {
        title: "Music Composition",
        category: "Services",
        description: "Custom music that perfectly matches the emotion and story of your project.",
      },
      {
        title: "Sound Post-Production",
        category: "Services",
        description: "Professional audio post-production to give your project the perfect sound quality.",
      },
    ],
    otherProjects: "OTHER PROJECTS",
    nextProject: "NEXT PROJECT",
    viewProject: "VIEW PROJECT",
  },
  nl: {
    seo: {
      title: "IAM STUDIOS | Professionele Geluidsstudio Amsterdam",
      description:
        "Geluidsstudio's voor voice-overs & dubbing • Geluidsnabewerking • Sound design • Muziekcompositie in Amsterdam",
      keywords: [
        "geluidsstudio",
        "voice-over",
        "dubbing",
        "sound design",
        "muziekcompositie",
        "amsterdam",
        "audio post-productie",
      ],
    },
    nav: {
      home: "Home",
      services: "Diensten",
      aboutUs: "Over ons",
      portfolio: "Portfolio",
      divisions: "Divisies",
      contact: "Contact",
    },
    hero: {
      services: "Voice-overs & dubbing • Geluidsnabewerking • Sound design • Muziekcompositie",
      tellMore: "Vertel meer",
      scroll: "SCROLL",
    },
    services: {
      title: "Wat wij bieden",
      scrollForMore: "Scroll voor meer diensten",
      swipeForMore: "Swipe voor meer diensten",
    },
    aboutUs: {
      subtitle: "Onze Visie & Missie",
      content:
        "Wij zijn IAM STUDIOS, een toonaangevend creatief geluidsstudio gespecialiseerd in hoogwaardige audio-oplossingen film, televisie, games en reclame.",
      viewOurWork: "BEKIJK ONS WERK",
    },
    portfolio: {
      subtitle: "Werk waar we trots op zijn",
      content: "Bekijk onze recente projecten voor toonaangevende merken en producties in de entertainment industrie.",
      scrollForMoreProjects: "Scroll voor meer projecten",
      swipeForMoreProjects: "Swipe voor meer projecten",
    },
    divisions: {
      subtitle: "Onze Specialisaties",
      content:
        "IAM STUDIOS ontwierp in 2023 haar eigen spreekcel genaamd The Sabine 1. Een ruime spreekcel met sublieme akoestiek. Klik op de knop hieronder om meer te lezen over onze spreekcel.",
      button: "THE SABINE 1",
    },
    contact: {
      subtitle: "Neem Contact Op",
      content: "Neem contact met ons op voor meer informatie over onze diensten of om een project te bespreken.",
      message:
        "Omdat we vaak in de studio zitten, kun je ons het best mailen. Indien je belt en we niet kunnen opnemen, bellen we je z.s.m. terug!",
      email: "EMAIL",
      phone: "TELEFOON",
      sendMessage: "STUUR EEN BERICHT",
    },
    footer: {
      services: "Voice-overs & dubbing • Geluidsnabewerking • Sound design • Muziekcompositie",
      contact: "CONTACT",
      rights: "Alle rechten voorbehouden.",
    },
    featuredWorks: [
      {
        title: "Voice-overs & Dubbing",
        category: "Diensten",
        description: "Professionele stemacteurs en opnamestudio's voor voice-overs en dubbing in meerdere talen.",
      },
      {
        title: "Sound Design",
        category: "Diensten",
        description: "Creatieve geluidseffecten en atmosferen die uw visuele content tot leven brengen.",
      },
      {
        title: "Muziekcompositie",
        category: "Diensten",
        description: "Op maat gemaakte muziek die perfect aansluit bij de emotie en het verhaal van uw project.",
      },
      {
        title: "Geluidsnabewerking",
        category: "Diensten",
        description: "Professionele audio post-productie om uw project de perfecte geluidskwaliteit te geven.",
      },
    ],
    otherProjects: "ANDERE PROJECTEN",
    nextProject: "VOLGENDE PROJECT",
    viewProject: "BEKIJK PROJECT",
  },
}


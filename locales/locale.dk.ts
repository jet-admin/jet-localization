import { Locale } from './locale';

export const locale: Locale = {
  name: 'danish',
  language: 'dk',
  items: [
    // General
    { source: 'Gem', target: '' },
    { source: 'Opret', target: '' },
    { source: 'Duplkering', target: '' },
    { source: 'Dupliker', target: '' },
    { source: 'Masse Rediger', target: '' },
    { source: 'Eksporter', target: '' },
    { source: 'Importer', target: '' },
    { source: 'Slet', target: '' },

    // Fields
    { source: 'valgfrit', target: '' },
    { source: 'vælg', target: '' },
    { source: 'Klar værdi', target: '' },
    { source: 'loader...', target: '' },
    { source: 'Intet fundet', target: '' },
    { source: 'Søg...', target: '' },
    { source: 'Indtast mindst {0} karakterer', target: '' },

    // List components
    { source: 'Filter', target: '' },
    { source: 'Filter ud fra felt', target: '' },
    { source: 'Filter ud fra...', target: '' },
    { source: 'Tilbage', target: '' },
    { source: 'Tilbage til {0} felter', target: '' },
    { source: 'Vælg {0} fra liste', target: '' },
    { source: '{0} felter', target: '' },
    { source: '{0} relationer', target: '' },
    { source: 'Samlet {0}', target: '' },
    { source: 'Ingen felter at vælge', target: '' },
    { source: 'Indtast værdi...', target: '' },
    { source: 'Ekskluder', target: '' },
    { source: 'Handlinger', target: '' },
    { source: 'Søg', target: '' },
    { source: 'Sorter 1 → 9', target: '' },
    { source: 'Sorter 9 → 1', target: '' },
    { source: 'Sorter A → Z', target: '' },
    { source: 'Sorter Z → A', target: '' },
    { source: 'Opdater automatisk', target: '' },
    { source: 'Alle', target: '' },
    { source: 'Valgt', target: '' },
    {
      source: 'Desværre, fandt vi{0} matchende forespørgelser fundet',
      target: ''
    },
    { source: 'Vi henter {0}, vent venligst...', target: '' },
    { source: 'Tilføj filter', target: '' },
    { source: 'Slet dette filter', target: '' },
    { source: 'Skift sortering', target: '' },
    { source: 'Indlæsning mislykkedes', target: '' },
    { source: 'Ikke konfigureret', target: '' },
    {
      source: 'Desværre, er denne komponent ikke konfigureret endnu',
      target: ''
    },
    { source: 'Optegnelser', target: '' },
    { source: '{0} ting', target: '' },

    // Menu
    { source: 'Brugere og Hold', target: '' },
    { source: 'Fakturering', target: '' },
    { source: 'Fakturering og Planer', target: '' },
    { source: 'API nøgler', target: '' },
    { source: 'Mørk Tilstand', target: '' },
    { source: 'Lys Tilstand', target: '' },
    { source: 'Deaktiver Personal', target: '' },
    { source: 'Aktiver Personale', target: '' },
    { source: 'Administrere Skabeloner', target: '' },
    { source: 'Log ud', target: '' },
    { source: 'Aktivitets log', target: '' },
    { source: 'Samarbejder', target: '' },
    { source: 'Åben Visuel Builder', target: '' },

    // Filters
    { source: 'Lige med', target: '' },
    { source: 'Er ikke lige med', target: '' },
    { source: '{0} lige med {1}', target: '' },
    { source: '{0} er ikke lige med {1}', target: '' },

    { source: 'Indeholder', target: '' },
    { source: 'Indeholder ikke', target: '' },
    { source: '{0} indeholder {1}', target: '' },
    { source: '{0} indeholder ikke {1}', target: '' },

    { source: 'starter med', target: '' },
    { source: 'starter ikke med', target: '' },
    { source: '{0} starter med {1}', target: '' },
    { source: '{0} start ikke med {1}', target: '' },

    { source: 'ender med', target: '' },
    { source: 'ender ikke med', target: '' },
    { source: '{0} ender med {1}', target: '' },
    { source: '{0} ender ikke med {1}', target: '' },

    { source: 'større end', target: '' },
    { source: 'er ikke større end', target: '' },
    { source: '{0} er større end {1}', target: '' },
    { source: '{0} ikke større end {1}', target: '' },

    { source: 'større end eller lige med', target: '' },
    { source: 'er ikke større end eller lige med', target: '' },
    { source: '{0} er større end eller lige med {1}', target: '' },
    { source: '{0} er ikke større end eller lige med {1}', target: '' },

    { source: 'mindre end', target: '' },
    { source: 'er ikke mindre end', target: '' },
    { source: '{0} er mindre end {1}', target: '' },
    { source: '{0} er ikke mindre end {1}', target: '' },

    { source: 'mindre end eller lige med', target: '' },
    { source: 'er ikke mindre end eller lige med', target: '' },
    { source: '{0} er mindre end eller lige med {1}', target: '' },
    { source: '{0} er ikke mindre end eller lige med {1}', target: '' },

    { source: 'en af', target: '' },
    { source: 'er en af', target: '' },
    { source: 'er ikke en af', target: '' },
    { source: '{0} er en af {1}', target: '' },
    { source: '{0} er ikke en af {1}', target: '' },

    { source: 'er null', target: '' },
    { source: 'er ikke null', target: '' },
    { source: '{0} er null', target: '' },
    { source: '{0} er ikke null', target: '' },

    { source: 'er fremtid', target: '' },
    { source: 'er i fremtiden', target: '' },
    { source: 'er ikke i fremtiden', target: '' },
    { source: '{0} er i fremtiden', target: '' },
    { source: '{0} er ikke i fremtiden', target: '' },

    { source: 'er fortid ', target: '' },
    { source: 'er i fortiden', target: '' },
    { source: 'er ikke i fortiden', target: '' },
    { source: '{0} er fra fortiden', target: '' },
    { source: '{0} er ikke fra fortiden', target: '' },

    { source: 'er i dag', target: '' },
    { source: 'i dag', target: '' },
    { source: 'er ikke i dag', target: '' },
    { source: '{0} er i dag', target: '' },
    { source: '{0} er ikke i dag', target: '' },

    { source: 'er i går', target: '' },
    { source: 'i går', target: '' },
    { source: 'er ikke i går', target: '' },
    { source: '{0} fra i går', target: '' },
    { source: '{0} ikke fra i går', target: '' },

    { source: 'er sidste uge', target: '' },
    { source: 'sidste uge', target: '' },
    { source: 'ikke fra i sidste uge', target: '' },
    { source: '{0} fra i sidste uge', target: '' },
    { source: '{0} ikke fra i sidste uge', target: '' },

    { source: 'er sidste måned', target: '' },
    { source: 'sidste måned', target: '' },
    { source: 'ikke fra sidste måned', target: '' },
    { source: '{0} fra sidste måned', target: '' },
    { source: '{0} ikke fra sidste måned', target: '' },

    { source: 'er seneste kvartal', target: '' },
    { source: 'seneste kvartal', target: '' },
    { source: 'ikke fra seneste kvartal', target: '' },
    { source: '{0} fra seneste kvartal', target: '' },
    { source: '{0} ikke fra seneste kvartal', target: '' },

    { source: 'fra sidste år, target: '' },
    { source: 'sidste år', target: '' },
    { source: 'er ikke fra sidste år', target: '' },
    { source: '{0} sidste år', target: '' },
    { source: '{0} er ikke fra sidste år', target: '' },

    { source: 'fra de sidste X dage', target: '' },
    { source: 'sidste X dage', target: '' },
    { source: 'er ikke fra sidste X dage', target: '' },
    { source: '{0} er fra de sidste {1} dage', target: '' },
    { source: '{0} er ikke fra de sidste {1} dage', target: '' },

    { source: 'fra indeværende uge', target: '' },
    { source: 'indeværende uge', target: '' },
    { source: 'er ikke fra indeværende uge', target: '' },
    { source: '{0} fra indeværende uge', target: '' },
    { source: '{0} er ikke fra indeværende uge', target: '' },

    { source: 'fra indeværende måned', target: '' },
    { source: 'indeværende måned', target: '' },
    { source: 'er ikke fra indeværende måned', target: '' },
    { source: '{0} fra indeværende måned', target: '' },
    { source: '{0} er ikke fra indeværende måned', target: '' },

    { source: 'fra indeværende kvartal', target: '' },
    { source: 'indeværende kvartal', target: '' },
    { source: 'ikke fra indeværende kvartal', target: '' },
    { source: '{0} indeværende kvartal', target: '' },
    { source: '{0} er ikke fra indeværende kvartal', target: '' },

    { source: 'fra indeværende år', target: '' },
    { source: 'indeværende år', target: '' },
    { source: 'er ikke fra indeværende år', target: '' },
    { source: '{0} fra indeværende år', target: '' },
    { source: '{0} er ikke fra indeværende år', target: '' },

    { source: 'er sidste uge', target: '' },
    { source: 'sidste uge', target: '' },
    { source: 'er ikke sidste uge', target: '' },
    { source: '{0} er sidste uge', target: '' },
    { source: '{0} er ikke sidste uge', target: '' },

    { source: 'er sidste måned', target: '' },
    { source: 'sidste måned', target: '' },
    { source: 'er ikke sidste måned', target: '' },
    { source: '{0} er sidste måned', target: '' },
    { source: '{0} er ikke sidste måned', target: '' },

    { source: 'er sidste kvartal', target: '' },
    { source: 'sidste kvartal', target: '' },
    { source: 'er ikke sidste kvartal', target: '' },
    { source: '{0} er sidste kvartal', target: '' },
    { source: '{0} er ikke sidste kvartal', target: '' },

    { source: 'er sidste år', target: '' },
    { source: 'sidste år', target: '' },
    { source: 'er ikke sidste år', target: '' },
    { source: '{0} er sidste år', target: '' },
    { source: '{0} er ikke sidste år', target: '' },

    { source: 'er sidste X dage', target: '' },
    { source: 'sidste X dage', target: '' },
    { source: 'er ikke sidste X dage', target: '' },
    { source: '{0} er sidste {1} dage', target: '' },
    { source: '{0} er ikke sidste {1} dage', target: '' },

    { source: 'er tom', target: '' },
    { source: 'er ikke tom', target: '' },
    { source: '{0} er tom', target: '' },
    { source: '{0} er ikke tom', target: '' },

    { source: 'dækket af', target: '' },
    { source: 'er ikke dækket af', target: '' },
    { source: '{0} dækket af {1}', target: '' },
    { source: '{0} er ikke dækket af {1}', target: '' },

    // Activity log
    { source: 'Ingen aktiviteter fundet', target: '' },
    {
      source: 'Start med at arbejde med data for at logge aktiviteter.',
      target: ''
    },
    { source: 'Alt aktivitet', target: '' },
    { source: 'Opret registrering', target: '' },
    { source: 'Opdater registrering', target: '' },
    { source: 'Slet registrering', target: '' },
    { source: 'Alle medlemmer', target: '' },

    // Collaboration
    { source: 'Tidslinje', target: '' },
    { source: 'Beskeder', target: '' },
    { source: 'Aktivitet', target: '' },
    { source: 'Start med at chatte med dit team.', target: '' },
    {
      source: 'Tag en besked om den nuværende side, for at holde styr på vigtig information.',
      target: ''
    },
    { source: 'Din besked', target: '' },
    { source: 'Send', target: '' },

    // Share
    { source: 'Inviter medlemmer', target: '' },
    { source: 'Offentlig deling', target: '' },
    { source: 'Opret', target: '' },
    { source: 'Medlemmer', target: '' },
    { source: 'Inviter med email', target: '' },
    { source: 'Inviter en ven...', target: '' },
    { source: 'Send invitation', target: '' },
    {
      source: 'Begræns adgang til dine data via brugeregenskaber.',
      target: ''
    },
    {
      source: 'Til en email på den bruger du gerne vil indgå samarbejde med.',
      target: ''
    },
    { source: 'Kopier', target: '' },
    { source: 'Inviter med link', target: '' },
    { source: 'Slet link', target: '' },
    { source: 'Tilføj invitationslink', target: '' },
    {
      source: 'Alle med internet og dette link kan tilkoble sige dette team.',
      target: ''
    },
    { source: 'Afventende invitationer', target: '' },
    { source: 'Annuller invitation', target: '' },
    { source: 'Aktive medlemmer', target: '' },
    { source: 'Slet medlem', target: '' },
    {
      source: 'Du indstiller deling for den nuværende side.',
      target: ''
    },
    {
      source: 'Du indstiller deling for alle sider af din app.',
      target: ''
    },
    { source: 'Offentlig delings link', target: '' },
    { source: 'Opdater offentlig deling...', target: '' },
    {
      source:
        'Alle med dette link kan se den nuværende side. På denne måde kan du også integrere denne side til en anden hjemmeside.',
      target:
        'Cualquier persona con este enlace podrá ver la página actual. De esta manera, también puede incrustar la página actual en otro sitio web.'
    },
    { source: 'Integrer kode (IFRAME)', target: '' },
    {
      source: 'Indsæt denne kode i din HTML kode på din hjemmeside der hvor du ønsker den vist.',
      target: ''
    },
    { source: 'link', target: '' },
    { source: 'inviteret', target: '' },
    { source: 'Vælg team', target: '' },
    { source: 'App Teams', target: '' },
    { source: 'Indbyggede Teams', target: '' },
    { source: 'Ryd Team', target: '' },
    { source: 'Kan bygge applikation og modificere data', target: '' },
    { source: 'Kan modificere data i applikationen', target: '' },
    { source: 'Kan kun se data uden at modificere', target: '' },
    { source: 'Tilføj Team', target: '' },
    { source: 'Rediger Team', target: '' },
    { source: 'Tilføjelse af Team', target: '' },
    {
      source: 'Hold kontrol over hvem der har adgang til din nuværende App',
      target: ''
    },
    { source: 'Tilføj Team Navn', target: '' },
    {
      source: 'Indtast team navnet, eks: Support, Salg, Marketing, osv.',
      target: ''
    },
    { source: 'Tilføj et nyt medlem til dette Team.', target: '' },
    { source: 'Inviter nyt medlem', target: '' },
    { source: 'Bruger', target: '' },
    { source: 'Dato Tilføjet', target: '' },
    { source: 'Dig', target: '' },
    { source: 'Rediger', target: '' },
    { source: 'Ingen brugere på dette team', target: '' },
    { source: 'Side tilladelser', target: '' },
    { source: 'App tilladelser', target: '' },
    { source: 'Egenskaber', target: '' },
    { source: 'Side navn', target: '' },
    { source: 'Adgang', target: '' },
    { source: 'Fuldt Adgang', target: '' },
    { source: 'Kun Visning', target: '' },
    { source: 'Ingen Adgang', target: '' },
    { source: 'Visning', target: '' },
    { source: 'Opdater', target: '' },
    { source: 'Skrive', target: '' },
    { source: { label: 'Slet', context: 'tilladelser' }, target: '' },
    { source: 'Tilpassede tilladelser', target: '' },
    { source: 'Læs, opret, opdater og slet data', target: '' },
    { source: 'Vælg tilladte operationer granuleret', target: '' },
    { source: 'Uden adgang til data', target: '' },
    { source: 'Navn', target: '' },
    { source: 'Aktiv', target: '' },
    { source: 'Indstillinger', target: '' },
    { source: 'Medlemmer and Teams', target: '' },
    { source: 'App Builder', target: '' },
    { source: 'Samling tilladelser', target: '' },
    { source: "Tillad adgang til app samlingen", target: '' },
    { source: 'Samling', target: '' },
    {
      source: 'Begræns adgangen til dine data efter teamegenskaber',
      target: ''
    },
    { source: 'Ophæv', target: '' },
    { source: 'Gem Team', target: '' },
    { source: 'Opret Team', target: '' },
    { source: 'Værdi', target: '' },
    { source: 'Ingen egenskaber angivet', target: '' },

    // Navigation
    { source: 'Nuværende App', target: '' },
    { source: 'Hjem', target: '' },

    // Profile
    { source: 'Indlæser', target: '' },
    {
      source: 'Vi henter brugerdata, vent venligst...',
      target: ''
    },
    { source: 'Profil Indstillinger', target: '' },
    { source: 'Grundlæggende oplysninger om din konto.', target: '' },
    { source: 'Foto', target: '' },
    { source: 'dit foto', target: '' },
    { source: 'Skift', target: '' },
    { source: 'Upload', target: '' },
    { source: 'Fornavn', target: '' },
    { source: 'Efternavn', target: '' },
    { source: 'Din Email', target: '' },
    { source: 'Ændre password', target: '' },
    {
      source: 'En adgangskode skal være stærk nok til at beskytte din konto, så sørg for at den er på mindst 12 tegn.',
      target:
        'Una contraseña debe ser lo suficientemente fuerte para proteger su cuenta, así que hágala de al menos 12 caracteres.'
    },
    { source: 'Nuværende Password', target: '' },
    { source: 'Ny Password', target: '' },
    { source: 'Bekæft nyt Password', target: '' },
    { source: 'Ændre Password', target: '' },
    { source: 'Personlige Indstillinger', target: '' },
    { source: 'Sprog', target: '' },
    {
      source: 'Tilpas yderligere præferencer for din konto.',
      target: ''
    },
    { source: 'Nyheder og forslag', target: '' },
    {
      source: 'Abonner på vores opdateringer og forslag.',
      target: ''
    },
    { source: 'Gem ændringer', target: '' },

    // My Apps
    { source: 'Skriv for at søge...', target: '' },
    { source: 'Mine Apps', target: '' },
    { source: 'Ny App', target: '' },
    { source: 'Builder', target: '' },
    { source: 'App', target: '' },
    { source: 'fortsæt installation', target: '' },
    { source: 'Åben builder', target: '' },
    { source: 'Se udgivede', target: '' },
    { source: 'Slet App', target: '' },
    { source: 'Start fra en skabelon', target: '' },
    { source: 'Forhåndsvisning', target: '' },
    { source: 'Kontakt Support', target: '' },
    { source: 'Dokumentation', target: '' },
    { source: 'Funktionsanmodninger', target: '' },
    { source: 'Se hvad der er nyt', target: '' },
    { source: 'Søg skabeloner...', target: '' },
    { source: 'alle', target: '' },
    { source: 'mere', target: '' },
    { source: 'Vælg Datakilde', target: '' },
    { source: 'fungerer med 30+ datakilder', target: '' },
    { source: 'Brug denne skabelon', target: '' },
    { source: 'gemmer data i Jet Tables', target: '' },
    { source: 'Ny Data', target: '' },
    { source: 'bruger {0}', target: '' },
    { source: "Kan du ikke finde den ressource, du leder efter?", target: '' },
    { source: 'Admin Panel', target: '' },
    {
      source: 'Vis, opret og opdater (CRUD) operationer oven på dine data',
      target: ''
    },
    {
      source: 'Byg et brugerdefineret administrationspanel baseret på alle databaser, apps og API'er som Stripe, Twilio og GraphQL.',
      target:
        'Cree un panel de administración personalizado basado en cualquier base de datos, aplicaciones y API como Stripe, Twilio y GraphQL.'
    },
    { source: 'Alle integrationer', target: '' },
    { source: 'Databaser', target: '' },
    { source: 'APIer', target: '' },
    { source: 'Frameworks', target: '' },
    { source: 'Opbevaringer', target: '' },

    // Sign In
    { source: 'Vent venligst...', target: '' },
    { source: 'Godmorgen', target: '' },
    { source: 'God eftermiddag', target: '' },
    { source: 'Godaften', target: '' },
    { source: 'Log in', target: '' },
    { source: 'Velkommen tilbage.', target: '' },
    { source: 'Log in med {0}', target: '' },
    { source: 'eller log in med', target: '' },
    { source: 'Indtast Email', target: '' },
    { source: 'Indstast Password', target: '' },
    { source: 'Login', target: '' },
    { source: 'Opret ny konto', target: '' },
    { source: 'Glemt password', target: '' },
    { source: 'påkrævet', target: '' },
    { source: 'forkert Email', target: '' },
    { source: 'Minimum password længde {0}', target: '' },
    { source: 'Kan ikke logge ind', target: '' },

    // Sign Up
    {
      source: 'Kom igang <span class="auth-form__accent">Gratis i dag</span>',
      target: ''
    },
    {
      source: "Intet kort påkrævet. Du får al den avancerede funktionalitet gratis i løbet af 14 dages PRO-prøveversion.",
      target: ''
    },
    { source: 'eller', target: '' },
    { source: 'Indstast Fornavn', target: '' },
    { source: 'Indtast Efternavn (valgfrit)', target: '' },
    { source: 'Indtast Email', target: '' },
    { source: 'Password', target: '' },
    { source: 'Gentag Password', target: '' },
    {
      source: 'Ved at logge ind er du okay med vores',
      target: ''
    },
    {
      source: 'Oprettelse af en konto betyder, at du er okay med vores',
      target: ''
    },
    { source: 'Servicevilkår', target: '' },
    { source: 'Privatlivspolitik', target: '' },
    { source: 'og', target: '' },
    { source: 'Opret en gratis konto', target: '' },
    { source: 'Har du allerede en bruger', target: '' },
    { source: 'Kan ikke tilmelde dig', target: '' },

    // Restore password
    { source: 'Nulstil dit password', target: '' },
    { source: 'Email Adresser', target: '' },
    { source: 'Nulstil Password', target: '' },
    { source: 'Vend tilbage til Log ind', target: '' },
    {
      source:
        'Tjek venligst din email – <strong>{0}</strong>. Vi har sendt det valideringslink, du skal følge for at ændre din adgangskode.',
      target: ''
    },
    {
      source: 'Næsten færdig, skal du blot indtaste din nye adgangskode nedenfor. <br>Skal bestå af mindst 8 tegn.',
      target: ''
    },
    { source: 'Nulstil adgangskode og log ind', target: '' },
    { source: 'Kan ikke sende kode', target: '' },
    { source: 'Kan ikke ændre Password', target: '' },

    // Users & Teams
    { source: 'Medlem af {0}', target: '' },
    { source: 'Sådan kommer du i gang', target: '' },
    { source: 'Brugerens API', target: '' },
    { source: 'Holdets API', target: '' },
    { source: 'Inviter medlem', target: '' },
    { source: 'Tilføj brugeregenskab', target: '' },
    { source: 'Tilføj holdegenskab', target: '' },
    { source: 'Tilføj', target: '' },
    { source: 'Rediger egenskaber', target: '' },
    { source: 'Slet egenskaber', target: '' },
    { source: 'Brugere', target: '' },
    { source: 'Hold', target: '' },
    { source: 'Søg medlemmer', target: '' },
    { source: 'Søg hold', target: '' },
    { source: '{0} sider', target: '' },
    { source: 'Ingen medlemmer', target: '' }
  ]
};

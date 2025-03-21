import { Locale } from './locale';

export const locale: Locale = {
  name: 'norwegian (Bokmål)',
  language: 'nb',
  items: [
    // General
    { source: 'Save', target: 'Lagre' },
    { source: 'Create', target: 'Opprett' },
    { source: 'Duplicating', target: 'Dupliserer' },
    { source: 'Duplicate', target: 'Duplikat' },
    { source: 'Mass Edit', target: 'Masseendring' },
    { source: 'Export', target: 'Eksporter' },
    { source: 'Import', target: 'Importer' },
    { source: 'Delete', target: 'Slett' },
    { source: 'Continue', target: 'Fortsett' },
    { source: 'Submit', target: 'Send inn' },
    { source: 'Cancel', target: 'Avbryt' },
    { source: 'Loading', target: 'Laster' },
    { source: 'Please wait...', target: 'Vennligst vent...' },
    { source: 'Loading failed', target: 'Laster mislyktes' },
    { source: 'Unknown error', target: 'Ukjent feil' },
    { source: 'Add', target: 'Legg til' },
    { source: 'or', target: 'eller' },
    { source: 'Hours', target: 'Timer' },
    { source: 'Minutes', target: 'Minutter' },
    { source: 'Seconds', target: 'Sekunder' },
    { source: 'Saved', target: 'Lagret' },
    { source: 'Error', target: 'Feil' },
    { source: 'Page not found', target: 'Siden ble ikke funnet' },
    {
      source: 'The specified address is incorrect, or the page does not exist',
      target: 'Den angitte adressen er feil, eller siden eksisterer ikke'
    },
    { source: 'Not allowed', target: 'Ikke tillatt' },
    {
      source: "You don't have permissions to access this page",
      target: 'Du har ikke tillatelse til å få tilgang til denne siden'
    },
    { source: 'Are you sure want to close?', target: 'Er du sikker på at du vil lukke?' },
    { source: 'Close', target: 'Lukk' },

    // Actions
    { source: 'Action executed', target: 'Handling utført' },
    { source: 'Action executed successfully', target: 'Handling utført vellykket' },
    { source: 'Action failed', target: 'Handling mislyktes' },
    {
      source: "You don't have permission for run this operation",
      target: 'Du har ikke tillatelse til å kjøre denne operasjonen'
    },
    { source: 'Specify parameters', target: 'Spesifiser parametere' },
    { source: 'Executing action', target: 'Utfører handling' },
    { source: 'You are executing <strong>{0}</strong>', target: 'Du utfører <strong>{0}</strong>' },
    { source: 'Please fill in the parameters below.', target: 'Fyll inn parameterne nedenfor.' },
    { source: 'Execute', target: 'Utfør' },
    { source: 'Executing', target: 'Utfører' },
    { source: 'Finished', target: 'Fullført' },
    { source: 'Done', target: 'Ferdig' },

    // Export
    { source: 'Records Export', target: 'Eksporter poster' },
    { source: 'Downloading records data as a file', target: 'Laster ned postdata som en fil' },
    { source: 'Choose format', target: 'Velg format' },
    { source: 'Number of exporting records', target: 'Antall eksporterte poster' },
    { source: { label: 'Export', context: 'submit' }, target: 'Eksporter' },
    { source: 'Exporting', target: 'Eksporterer' },
    { source: 'Export completed', target: 'Eksport fullført' },
    { source: 'Failed to export', target: 'Kunne ikke eksportere' },

    // Components
    { source: 'optional', target: 'valgfritt' },
    { source: 'choose', target: 'velg' },
    { source: 'Clear value', target: 'Fjern verdi' },
    { source: 'loading...', target: 'laster...' },
    { source: 'Nothing found', target: 'Ingenting funnet' },
    { source: 'Search...', target: 'Søk...' },
    { source: 'Enter at least {0} characters', target: 'Skriv inn minst {0} tegn' },
    { source: 'No options', target: 'Ingen alternativer' },
    { source: 'Drop files here or', target: 'Slipp filer her eller' },
    { source: 'Upload new', target: 'Last opp ny' },
    { source: 'Clear', target: 'Fjern' },
    { source: 'Download', target: 'Last ned' },
    { source: 'Choose file', target: 'Velg fil' },
    { source: 'Choose files', target: 'Velg filer' },
    { source: 'Scan with Camera', target: 'Skann med kamera' },
    { source: 'Scan Image file', target: 'Skann bildefil' },
    { source: 'Choose camera', target: 'Velg kamera' },
    { source: 'Stop scanning', target: 'Stopp skanning' },
    { source: 'Scan again', target: 'Skann igjen' },
    { source: 'Use this scan', target: 'Bruk denne skanningen' },
    { source: 'Failed to scan', target: 'Kunne ikke skanne' },
    {
      source: 'Code failed to scan, please try another image',
      target: 'Koden kunne ikke skannes, vennligst prøv et annet bilde'
    },
    { source: 'current', target: 'nåværende' },
    { source: 'Day', target: 'Dag' },
    { source: 'Week', target: 'Uke' },
    { source: 'Month', target: 'Måned' },
    { source: 'Year', target: 'År' },
    { source: 'Today', target: 'I dag' },
    { source: 'Daily', target: 'Daglig' },
    { source: 'Weekly', target: 'Ukentlig' },
    { source: 'Monthly', target: 'Månedlig' },
    { source: 'Quarterly', target: 'Kvartalsvis' },
    { source: 'Yearly', target: 'Årlig' },
    { source: 'Hourly', target: 'Hver time' },
    { source: 'Minutely', target: 'Hvert minutt' },
    { source: 'Since', target: 'Siden' },
    { source: 'Before', target: 'Før' },
    { source: 'Between', target: 'Mellom' },
    { source: 'From date', target: 'Fra dato' },
    { source: 'To date', target: 'Til dato' },
    { source: 'Coordinates', target: 'Koordinater' },
    { source: 'Latitude', target: 'Breddegrad' },
    { source: 'Longitude', target: 'Lengdegrad' },
    { source: 'Default color', target: 'Standardfarge' },
    { source: 'not specified', target: 'ikke spesifisert' },
    { source: 'Sign using your finger or pointer', target: 'Signer med finger eller peker' },

    // List components
    { source: 'Filter', target: 'Filter' },
    { source: 'Filter by field', target: 'Filtrer etter felt' },
    { source: 'Filter by...', target: 'Filtrer etter...' },
    { source: 'Back', target: 'Tilbake' },
    { source: 'Back to {0} fields', target: 'Tilbake til {0} felt' },
    { source: 'Choose {0} from list', target: 'Velg {0} fra listen' },
    { source: '{0} fields', target: '{0} felt' },
    { source: '{0} relationships', target: '{0} relasjoner' },
    { source: 'Aggregate {0}', target: 'Samle {0}' },
    { source: 'No fields to select', target: 'Ingen felt å velge' },
    { source: 'Enter value...', target: 'Skriv inn verdi...' },
    { source: 'Exclude', target: 'Utelat' },
    { source: 'Actions', target: 'Handlinger' },
    { source: 'Search', target: 'Søk' },
    { source: 'Sort 1 → 9', target: 'Sorter 1 → 9' },
    { source: 'Sort 9 → 1', target: 'Sorter 9 → 1' },
    { source: 'Sort A → Z', target: 'Sorter A → Z' },
    { source: 'Sort Z → A', target: 'Sorter Z → A' },
    { source: 'Refresh automatically', target: 'Oppdater automatisk' },
    { source: 'All', target: 'Alle' },
    { source: 'Selected', target: 'Valgt' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'Dessverre, ingen {0} som samsvarer med forespørselen ble funnet'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'Vi henter {0}, vennligst vent...' },
    { source: 'Add filter', target: 'Legg til filter' },
    { source: 'Delete this filter', target: 'Slett dette filteret' },
    { source: 'Toggle ordering', target: 'Bytt rekkefølge' },
    { source: 'Not configured', target: 'Ikke konfigurert' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'Dessverre, denne komponenten er ikke konfigurert ennå'
    },
    { source: 'records', target: 'poster' },
    { source: '{0} items', target: '{0} varer' },

    // Menu
    { source: 'Users & Teams', target: 'Brukere og team' },
    { source: 'Billing', target: 'Fakturering' },
    { source: 'Billing & Plans', target: 'Fakturering og planer' },
    { source: 'API keys', target: 'API-nøkler' },
    { source: 'Dark Mode', target: 'Mørk modus' },
    { source: 'Light Mode', target: 'Lys modus' },
    { source: 'Disable Staff', target: 'Deaktiver medarbeidere' },
    { source: 'Enable Staff', target: 'Aktiver medarbeidere' },
    { source: 'Manage Templates', target: 'Administrer maler' },
    { source: 'Logout', target: 'Logg ut' },
    { source: 'Activity Log', target: 'Aktivitetslogg' },
    { source: 'Collaborations', target: 'Samarbeid' },
    { source: 'Open Visual Builder', target: 'Åpne visuell bygger' },

    // Filters
    { source: 'equals', target: 'liker' },
    { source: 'does not equal', target: 'liker ikke' },
    { source: '{0} equals {1}', target: '{0} er lik {1}' },
    { source: '{0} does not equal {1}', target: '{0} er ikke lik {1}' },

    { source: 'contains', target: 'inneholder' },
    { source: 'does not contain', target: 'inneholder ikke' },
    { source: '{0} contains {1}', target: '{0} inneholder {1}' },
    { source: '{0} not contains {1}', target: '{0} inneholder ikke {1}' },

    { source: 'starts with', target: 'starter med' },
    { source: 'does not start with', target: 'starter ikke med' },
    { source: '{0} starts with {1}', target: '{0} starter med {1}' },
    { source: '{0} does not start with {1}', target: '{0} starter ikke med {1}' },

    { source: 'ends with', target: 'slutter med' },
    { source: 'does not end with', target: 'slutter ikke med' },
    { source: '{0} ends with {1}', target: '{0} slutter med {1}' },
    { source: '{0} does not end with {1}', target: '{0} slutter ikke med {1}' },

    { source: 'greater than', target: 'større enn' },
    { source: 'is not greater than', target: 'er ikke større enn' },
    { source: '{0} is greater than {1}', target: '{0} er større enn {1}' },
    { source: '{0} not greater than {1}', target: '{0} er ikke større enn {1}' },

    { source: 'greater than or equals', target: 'større enn eller lik' },
    { source: 'is not greater than or equals', target: 'er ikke større enn eller lik' },
    { source: '{0} is greater than or equals {1}', target: '{0} er større enn eller lik {1}' },
    { source: '{0} is not greater than or equals {1}', target: '{0} er ikke større enn eller lik {1}' },

    { source: 'less than', target: 'mindre enn' },
    { source: 'is not less than', target: 'er ikke mindre enn' },
    { source: '{0} is less than {1}', target: '{0} er mindre enn {1}' },
    { source: '{0} is not less than {1}', target: '{0} er ikke mindre enn {1}' },

    { source: 'less than or equals', target: 'mindre enn eller lik' },
    { source: 'is not less than or equals', target: 'er ikke mindre enn eller lik' },
    { source: '{0} is less than or equals {1}', target: '{0} er mindre enn eller lik {1}' },
    { source: '{0} is not less than or equals {1}', target: '{0} er ikke mindre enn eller lik {1}' },

    { source: 'one of', target: 'en av' },
    { source: 'is one of', target: 'er en av' },
    { source: 'is not one of', target: 'er ikke en av' },
    { source: '{0} is one of {1}', target: '{0} er en av {1}' },
    { source: '{0} is not one of {1}', target: '{0} er ikke en av {1}' },

    { source: 'is null', target: 'er null' },
    { source: 'is not null', target: 'er ikke null' },
    { source: '{0} is null', target: '{0} er null' },
    { source: '{0} is not null', target: '{0} er ikke null' },

    { source: 'is future', target: 'er i fremtiden' },
    { source: 'in the future', target: 'i fremtiden' },
    { source: 'is not in the future', target: 'er ikke i fremtiden' },
    { source: '{0} is in the future', target: '{0} er i fremtiden' },
    { source: '{0} is not in the future', target: '{0} er ikke i fremtiden' },

    { source: 'is past', target: 'er tidligere' },
    { source: 'in the past', target: 'i fortiden' },
    { source: 'is not in the past', target: 'er ikke i fortiden' },
    { source: '{0} is in the past', target: '{0} er i fortiden' },
    { source: '{0} is not in the past', target: '{0} er ikke i fortiden' },

    { source: 'is Today', target: 'er i dag' },
    { source: 'today', target: 'i dag' },
    { source: 'is not today', target: 'er ikke i dag' },
    { source: '{0} is today', target: '{0} er i dag' },
    { source: '{0} is not today', target: '{0} er ikke i dag' },

    { source: 'is Yesterday', target: 'er i går' },
    { source: 'yesterday', target: 'i går' },
    { source: 'is not yesterday', target: 'er ikke i går' },
    { source: '{0} is yesterday', target: '{0} er i går' },
    { source: '{0} is not yesterday', target: '{0} er ikke i går' },

    { source: 'is Last Week', target: 'er siste uke' },
    { source: 'last week', target: 'siste uke' },
    { source: 'is not last week', target: 'er ikke siste uke' },
    { source: '{0} is last week', target: '{0} er siste uke' },
    { source: '{0} is not last week', target: '{0} er ikke siste uke' },

    { source: 'is Last Month', target: 'er sist måned' },
    { source: 'last month', target: 'sist måned' },
    { source: 'is not last month', target: 'er ikke sist måned' },
    { source: '{0} is last month', target: '{0} er sist måned' },
    { source: '{0} is not last month', target: '{0} er ikke sist måned' },

    { source: 'is Last Quarter', target: 'er sist kvartal' },
    { source: 'last quarter', target: 'sist kvartal' },
    { source: 'is not last quarter', target: 'er ikke sist kvartal' },
    { source: '{0} is last quarter', target: '{0} er sist kvartal' },
    { source: '{0} is not last quarter', target: '{0} er ikke sist kvartal' },

    { source: 'is Last Year', target: 'er sist år' },
    { source: 'last year', target: 'sist år' },
    { source: 'is not last year', target: 'er ikke sist år' },
    { source: '{0} is last year', target: '{0} er sist år' },
    { source: '{0} is not last year', target: '{0} er ikke sist år' },

    { source: 'is Last X Days', target: 'er sist X dager' },
    { source: 'last X days', target: 'sist X dager' },
    { source: 'is not last X days', target: 'er ikke sist X dager' },
    { source: '{0} is last {1} days', target: '{0} er sist {1} dager' },
    { source: '{0} is not last {1} days', target: '{0} er ikke sist {1} dager' },

    { source: 'is Current Week', target: 'er denne uken' },
    { source: 'current week', target: 'denne uken' },
    { source: 'is not current week', target: 'er ikke denne uken' },
    { source: '{0} is current week', target: '{0} er denne uken' },
    { source: '{0} is not current week', target: '{0} er ikke denne uken' },

    { source: 'is Current Month', target: 'er denne måned' },
    { source: 'current month', target: 'denne måned' },
    { source: 'is not current month', target: 'er ikke denne måned' },
    { source: '{0} is current month', target: '{0} er denne måned' },
    { source: '{0} is not current month', target: '{0} er ikke denne måned' },

    { source: 'is Current Quarter', target: 'er dette kvartal' },
    { source: 'current quarter', target: 'dette kvartal' },
    { source: 'is not current quarter', target: 'er ikke dette kvartal' },
    { source: '{0} is current quarter', target: '{0} er dette kvartal' },
    { source: '{0} is not current quarter', target: '{0} er ikke dette kvartal' },

    { source: 'is Current Year', target: 'er dette år' },
    { source: 'current year', target: 'dette år' },
    { source: 'is not current year', target: 'er ikke dette år' },
    { source: '{0} is current year', target: '{0} er dette år' },
    { source: '{0} is not current year', target: '{0} er ikke dette år' },

    { source: 'is Previous Week', target: 'er forrige uke' },
    { source: 'previous week', target: 'forrige uke' },
    { source: 'is not previous week', target: 'er ikke forrige uke' },
    { source: '{0} is previous week', target: '{0} er forrige uke' },
    { source: '{0} is not previous week', target: '{0} er ikke forrige uke' },

    { source: 'is Previous Month', target: 'er forrige måned' },
    { source: 'previous month', target: 'forrige måned' },
    { source: 'is not previous month', target: 'er ikke forrige måned' },
    { source: '{0} is previous month', target: '{0} er forrige måned' },
    { source: '{0} is not previous month', target: '{0} er ikke forrige måned' },

    { source: 'is Previous Quarter', target: 'er forrige kvartal' },
    { source: 'previous quarter', target: 'forrige kvartal' },
    { source: 'is not previous quarter', target: 'er ikke forrige kvartal' },
    { source: '{0} is previous quarter', target: '{0} er forrige kvartal' },
    { source: '{0} is not previous quarter', target: '{0} er ikke forrige kvartal' },

    { source: 'is Previous Year', target: 'er forrige år' },
    { source: 'previous year', target: 'forrige år' },
    { source: 'is not previous year', target: 'er ikke forrige år' },
    { source: '{0} is previous year', target: '{0} er forrige år' },
    { source: '{0} is not previous year', target: '{0} er ikke forrige år' },

    { source: 'is Previous X Days', target: 'er forrige X dager' },
    { source: 'previous X days', target: 'forrige X dager' },
    { source: 'is not previous X days', target: 'er ikke forrige X dager' },
    { source: '{0} is previous {1} days', target: '{0} er forrige {1} dager' },
    { source: '{0} is not previous {1} days', target: '{0} er ikke forrige {1} dager' },

    { source: 'is empty', target: 'er tom' },
    { source: 'is not empty', target: 'er ikke tom' },
    { source: '{0} is empty', target: '{0} er tom' },
    { source: '{0} is not empty', target: '{0} er ikke tom' },

    { source: 'covered by', target: 'dekket av' },
    { source: 'is not covered by', target: 'er ikke dekket av' },
    { source: '{0} covered by {1}', target: '{0} dekket av {1}' },
    { source: '{0} is not covered by {1}', target: '{0} er ikke dekket av {1}' },

    // Activity log
    { source: 'No activities found', target: 'Ingen aktiviteter funnet' },
    {
      source: 'Start to working with data to log activities.',
      target: 'Start å jobbe med data for å logge aktiviteter.'
    },
    { source: 'All Activity', target: 'All aktivitet' },
    { source: 'Create Record', target: 'Opprett post' },
    { source: 'Update Record', target: 'Oppdater post' },
    { source: 'Delete Record', target: 'Slett post' },
    { source: 'All Members', target: 'Alle medlemmer' },

    // Collaboration
    { source: 'Timeline', target: 'Tidslinje' },
    { source: 'Messages', target: 'Meldinger' },
    { source: 'Activity', target: 'Aktivitet' },
    { source: 'Start chatting with your team', target: 'Begynn å chatte med teamet ditt' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'Ta en melding om gjeldende side for å holde oversikt over viktig info.'
    },
    { source: 'Your Message', target: 'Din melding' },
    { source: 'Send', target: 'Send' },

    // Share
    { source: 'Invite members', target: 'Inviter medlemmer' },
    { source: 'Public share', target: 'Offentlig deling' },
    { source: 'Sign Up', target: 'Registrer deg' },
    { source: 'Members', target: 'Medlemmer' },
    { source: 'Invite with Email', target: 'Inviter med e-post' },
    { source: 'Invite someone...', target: 'Inviter noen...' },
    { source: 'Send Invite', target: 'Send invitasjon' },
    {
      source: 'Limit access to your data by user properties',
      target: 'Begrens tilgang til dataene dine ved hjelp av brukeregenskaper'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: 'Skriv inn e-posten til brukeren du vil invitere til samarbeid.'
    },
    { source: 'Copy', target: 'Kopier' },
    { source: 'Invite with Link', target: 'Inviter med link' },
    { source: 'Remove link', target: 'Fjern link' },
    { source: 'Add Invite Link', target: 'Legg til invitasjonslink' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'Alle på internett med denne linken kan bli med på det valgte teamet.'
    },
    { source: 'Pending Invites', target: 'Ventende invitasjoner' },
    { source: 'Cancel invite', target: 'Avbryt invitasjon' },
    { source: 'Active Members', target: 'Aktive medlemmer' },
    { source: 'Remove member', target: 'Fjern medlem' },
    { source: 'You are setting sharing for the current page', target: 'Du setter deling for gjeldende side' },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'Du setter deling for alle sider i appen din.'
    },
    { source: 'Public access link', target: 'Offentlig tilgangslenke' },
    { source: 'Updating public access...', target: 'Oppdaterer offentlig tilgang...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'Alle med denne linken kan se gjeldende side. På denne måten kan du også innebygge gjeldende side på et annet nettsted.'
    },
    { source: 'Embed code (IFRAME)', target: 'Innebygg kode (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: 'Lim inn denne koden i HTML-koden på nettstedet ditt der du vil at gjeldende side skal vises.'
    },
    { source: 'link', target: 'lenke' },
    { source: 'invited', target: 'invitert' },
    { source: 'Choose Team', target: 'Velg team' },
    { source: 'App Teams', target: 'App-team' },
    { source: 'Built-In Teams', target: 'Innebygde team' },
    { source: 'Clear Team', target: 'Fjern team' },
    { source: 'Can build application and modify data', target: 'Kan bygge applikasjon og endre data' },
    { source: 'Can modify data in application', target: 'Kan endre data i applikasjon' },
    { source: 'Can only view data without modification', target: 'Kan bare se data uten endring' },
    { source: 'Add Team', target: 'Legg til team' },
    { source: 'Edit Team', target: 'Rediger team' },
    { source: 'Adding Team', target: 'Legger til team' },
    {
      source: 'Keep control over who has access to current App',
      target: 'Hold kontroll over hvem som har tilgang til gjeldende app'
    },
    { source: 'Enter Team Name', target: 'Skriv inn teamnavn' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'Skriv inn teamnavnet, for eksempel: Support, Salg, Markedsføring osv.'
    },
    { source: 'Add a new member to this team.', target: 'Legg til et nytt medlem i dette teamet.' },
    { source: 'Invite new member', target: 'Inviter nytt medlem' },
    { source: 'User', target: 'Bruker' },
    { source: 'Date Added', target: 'Dato lagt til' },
    { source: 'You', target: 'Du' },
    { source: 'Edit', target: 'Rediger' },
    { source: 'No users in this team', target: 'Ingen brukere i dette teamet' },
    { source: 'Page Permissions', target: 'Side tillatelser' },
    { source: 'App Permissions', target: 'App tillatelser' },
    { source: 'Properties', target: 'Egenskaper' },
    { source: 'Page name', target: 'Sidenavn' },
    { source: 'Access', target: 'Tilgang' },
    { source: 'Full Access', target: 'Full tilgang' },
    { source: 'Read Only', target: 'Skrivebeskyttet' },
    { source: 'No Access', target: 'Ingen tilgang' },
    { source: 'Read', target: 'Les' },
    { source: 'Update', target: 'Oppdater' },
    { source: 'Write', target: 'Skriv' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'Slett' },
    { source: 'Custom Access', target: 'Tilpasset tilgang' },
    { source: 'Read, create, update and delete data', target: 'Les, opprett, oppdater og slett data' },
    { source: 'Choose allowed operations granularly', target: 'Velg tillatte operasjoner detaljert' },
    { source: 'Without any access to data', target: 'Uten tilgang til noen data' },
    { source: 'Name', target: 'Navn' },
    { source: 'Active', target: 'Aktiv' },
    { source: 'Settings', target: 'Innstillinger' },
    { source: 'Members and Teams', target: 'Medlemmer og team' },
    { source: 'App Builder', target: 'App bygger' },
    { source: 'Collection Permissions', target: 'Samlingstillatelser' },
    { source: "Grant permissions to app's collection", target: 'Gi tillatelser til appens samling' },
    { source: 'Collection', target: 'Samling' },
    {
      source: 'Limit access to your data by team properties',
      target: 'Begrens tilgang til dataene dine ved hjelp av teamegenskaper'
    },
    { source: 'Save Team', target: 'Lagre team' },
    { source: 'Create Team', target: 'Opprett team' },
    { source: 'Value', target: 'Verdi' },
    { source: 'No properties specified', target: 'Ingen egenskaper spesifisert' },

    // Navigation
    { source: 'Current App', target: 'Nåværende app' },
    { source: 'Home', target: 'Hjem' },

    // Profile
    {
      source: 'We are fetching user data, please, wait...',
      target: 'Vi henter brukerdata, vennligst vent...'
    },
    { source: 'Profile Settings', target: 'Profilinnstillinger' },
    { source: 'Basic information about your account.', target: 'Grunnleggende informasjon om kontoen din.' },
    { source: 'Photo', target: 'Bilde' },
    { source: 'your photo', target: 'ditt bilde' },
    { source: 'Change', target: 'Endre' },
    { source: 'Upload', target: 'Last opp' },
    { source: 'Photo was successfully updated', target: 'Bilde ble vellykket oppdatert' },
    { source: 'Photo was successfully deleted', target: 'Bilde ble vellykket slettet' },
    { source: 'First Name', target: 'Fornavn' },
    { source: 'Last Name', target: 'Etternavn' },
    { source: 'Your Email', target: 'Din e-post' },
    { source: 'Email Change', target: 'Endre e-post' },
    { source: 'New Email', target: 'Ny e-post' },
    { source: 'Change Email', target: 'Endre e-post' },
    { source: 'Check your inbox', target: 'Sjekk innboksen din' },
    { source: 'Confirmation Email was sent to {0}', target: 'Bekreftelses-e-post ble sendt til {0}' },
    { source: 'Changing Email failed', target: 'Endre e-post mislyktes' },
    { source: 'Password Change', target: 'Endre passord' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target: 'Et passord bør være sterkt nok til å beskytte kontoen din, så gjør det minst 12 tegn langt.'
    },
    { source: 'Current Password', target: 'Nåværende passord' },
    { source: 'New Password', target: 'Nytt passord' },
    { source: 'Confirm New Password', target: 'Bekreft nytt passord' },
    { source: 'Change Password', target: 'Endre passord' },
    {
      source: 'Current password was successfully updated, all other sessions will be logged out shortly',
      target: 'Nåværende passord ble oppdatert, alle andre økter logges ut snart'
    },
    { source: 'Saving current password failed', target: 'Lagring av nåværende passord mislyktes' },
    { source: 'Short password', target: 'Kort passord' },
    { source: "Passwords don't match", target: 'Passordene stemmer ikke overens' },
    { source: 'Personal Preferences', target: 'Personlige preferanser' },
    { source: 'Language', target: 'Språk' },
    { source: 'Timezone', target: 'Tidssone' },
    { source: 'Current time in {0} is', target: 'Nåværende tid i {0} er' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'Tilpass ekstra preferanser for kontoen din.'
    },
    { source: 'News & Proposals', target: 'Nyheter og forslag' },
    {
      source: 'Subscribe to our updates and proposals.',
      target: 'Abonner på våre oppdateringer og forslag.'
    },
    { source: 'Save changes', target: 'Lagre endringer' },
    { source: 'Current user was successfully updated', target: 'Nåværende bruker ble vellykket oppdatert' },
    { source: 'Saving current user failed', target: 'Lagring av nåværende bruker mislyktes' },

    // My Apps
    { source: 'Type to search...', target: 'Skriv for å søke...' },
    { source: 'My Apps', target: 'Mine apper' },
    { source: 'New App', target: 'Ny app' },
    { source: 'Builder', target: 'Bygger' },
    { source: 'App', target: 'App' },
    { source: 'continue install', target: 'fortsett installasjon' },
    { source: 'Open builder', target: 'Åpne bygger' },
    { source: 'View published', target: 'Vis publisert' },
    { source: 'Delete App', target: 'Slett app' },
    { source: 'Start from a template', target: 'Start fra en mal' },
    { source: 'Preview', target: 'Forhåndsvisning' },
    { source: 'Contact Support', target: 'Kontakt støtte' },
    { source: 'Documentation', target: 'Dokumentasjon' },
    { source: 'Feature Requests', target: 'Funksjonsforespørsler' },
    { source: 'See What’s New', target: 'Se hva som er nytt' },

    // Templates
    { source: 'Search templates...', target: 'Søk maler...' },
    { source: 'any', target: 'enhver' },
    { source: 'more', target: 'mer' },
    { source: 'Choose Data Source', target: 'Velg datakilde' },
    { source: 'works with 30+ data sources', target: 'fungerer med 30+ datakilder' },
    { source: 'Use this template', target: 'Bruk denne malen' },
    { source: 'stores data in Jet Tables', target: 'lagrer data i Jet Tables' },
    { source: 'New Data', target: 'Nye data' },
    { source: 'using {0}', target: 'ved bruk av {0}' },
    { source: "Can't find resource you're looking for?", target: 'Kan ikke finne ressursen du leter etter?' },

    { source: 'Admin Panel', target: 'Admin panel' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'List, opprett og oppdater (CRUD) operasjoner på dine data'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target: 'Bygg et tilpasset admin panel basert på enhver database, app og API som Stripe, Twilio og GraphQL.'
    },
    { source: 'All Integrations', target: 'Alle integrasjoner' },
    { source: 'Databases', target: 'Databaser' },
    { source: 'APIs', target: 'API-er' },
    { source: 'Frameworks', target: 'Rammeverk' },
    { source: 'Storages', target: 'Lagringer' },

    // Sign In
    { source: 'Good morning', target: 'God morgen' },
    { source: 'Good afternoon', target: 'God ettermiddag' },
    { source: 'Good evening', target: 'God kveld' },
    { source: 'Sign In', target: 'Logg inn' },
    { source: 'Welcome Back.', target: 'Velkommen tilbake.' },
    { source: 'Sign in with {0}', target: 'Logg inn med {0}' },
    { source: 'or login with', target: 'eller logg inn med' },
    { source: 'Enter E-mail', target: 'Skriv inn e-post' },
    { source: 'Enter password', target: 'Skriv inn passord' },
    { source: 'Login', target: 'Logg inn' },
    { source: 'Create new account', target: 'Opprett ny konto' },
    { source: 'Forgot my password', target: 'Glemt passord' },
    { source: 'required', target: 'påkrevd' },
    { source: 'incorrect Email', target: 'feil e-post' },
    { source: 'Minimum password length {0}', target: 'Minimum passordlengde {0}' },
    { source: 'Unable to Sign In', target: 'Kan ikke logge inn' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'Kom i gang <span class="auth-form__accent">gratis i dag</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target: 'Ingen kort kreves. Du får all avansert funksjonalitet gratis i løpet av den 14-dagers PRO-prøven.'
    },
    { source: 'Enter First Name', target: 'Skriv inn fornavn' },
    { source: 'Enter Last Name (optional)', target: 'Skriv inn etternavn (valgfritt)' },
    { source: 'Enter Email', target: 'Skriv inn e-post' },
    { source: 'Password', target: 'Passord' },
    { source: 'Repeat Password', target: 'Gjenta passord' },
    { source: 'By signing in you’re okay with our', target: 'Ved å logge inn godtar du vår' },
    { source: 'Creating an account means you’re okay with our', target: 'Å opprette en konto betyr at du godtar vår' },
    { source: 'Terms of Service', target: 'Tjenestevilkår' },
    { source: 'Privacy Policy', target: 'Personvernregler' },
    { source: 'and', target: 'og' },
    { source: 'Create your free account', target: 'Opprett din gratis konto' },
    { source: 'Already have an account', target: 'Har du allerede en konto' },
    { source: 'Unable to Sign Up', target: 'Kan ikke registrere' },

    // Restore password
    { source: 'Reset your password', target: 'Tilbakestill passordet ditt' },
    { source: 'Email Address', target: 'E-postadresse' },
    { source: 'Reset password', target: 'Tilbakestill passord' },
    { source: 'Return to Sign In', target: 'Gå tilbake til innlogging' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'Vennligst sjekk e-posten din – <strong>{0}</strong>. Vi har sendt valideringslinken du skal følge for å endre passordet ditt.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be at least 8 characters.',
      target: 'Nesten ferdig, skriv bare inn det nye passordet ditt nedenfor. <br>Må ha minst 8 tegn.'
    },
    { source: 'Reset password & Sign In', target: 'Tilbakestill passord og logg inn' },
    { source: 'Unable to Send Code', target: 'Kan ikke sende kode' },
    { source: 'Unable to Change Password', target: 'Kan ikke endre passord' },

    // Email Verification
    { source: 'Email Verification', target: 'E-postverifisering' },
    { source: 'Resend verification code', target: 'Send verifiseringskode igjen' },
    { source: 'Verification email sent', target: 'Verifiserings-e-post sendt' },
    { source: 'Your Email is now verified', target: 'E-posten din er nå verifisert' },
    { source: 'Request is incorrect', target: 'Forespørselen er feil' },

    // Invites
    {
      source: 'Join <span class="auth-form__accent">{0}</span>',
      target: 'Bli med <span class="auth-form__accent">{0}</span>'
    },
    {
      source: '<strong>{0}</strong> has invited you to join <strong>{1}</strong>',
      target: '<strong>{0}</strong> har invitert deg til å bli med <strong>{1}</strong>'
    },
    {
      source: 'Someone has invited you to join <strong>{0}</strong>',
      target: 'Noen har invitert deg til å bli med <strong>{0}</strong>'
    },
    {
      source: 'You are joining <strong>{0}</strong> using invite link',
      target: 'Du blir med i <strong>{0}</strong> ved å bruke invitasjonslink'
    },
    { source: 'Join', target: 'Bli med' },
    { source: 'Go to home page', target: 'Gå til startside' },
    { source: 'Invite link is wrong', target: 'Invitasjonslinken er feil' },
    {
      source:
        'Looks like your invitation link has expired or maybe you have followed the wrong link. Please try to ask to invite your again.',
      target:
        'Det ser ut som om invitasjonslinken din er utløpt, eller kanskje du har fulgt feil link. Vennligst prøv å be om å bli invitert igjen.'
    },
    {
      source: 'Unfortunately we failed to load information about this invitation',
      target: 'Dessverre klarte vi ikke å laste inn informasjon om denne invitasjonen'
    },

    // Users & Teams
    { source: 'Members of {0}', target: 'Medlemmer av {0}' },
    { source: 'How to get started', target: 'Hvordan komme i gang' },
    { source: 'Users API', target: 'Bruker API' },
    { source: 'Teams API', target: 'Team API' },
    { source: 'Invite Member', target: 'Inviter medlem' },
    { source: 'Add User property', target: 'Legg til brukeregenskap' },
    { source: 'Add Team property', target: 'Legg til teamegenskap' },
    { source: 'Edit property', target: 'Rediger egenskap' },
    { source: 'Delete property', target: 'Slett egenskap' },
    { source: 'Users', target: 'Brukere' },
    { source: 'Teams', target: 'Team' },
    { source: 'Search members', target: 'Søk medlemmer' },
    { source: 'Search teams', target: 'Søk team' },
    { source: '{0} pages', target: '{0} sider' },
    { source: 'No members', target: 'Ingen medlemmer' }
  ]
};

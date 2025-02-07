import { Locale } from './locale';

export const locale: Locale = {
  name: 'danish',
  language: 'da',
  items: [
    // General
    { source: 'Save', target: 'Gem' },
    { source: 'Create', target: 'Opret' },
    { source: 'Duplicating', target: 'Duplkering' },
    { source: 'Duplicate', target: 'Dupliker' },
    { source: 'Mass Edit', target: 'Masse Rediger' },
    { source: 'Export', target: 'Eksporter' },
    { source: 'Import', target: 'Importer' },
    { source: 'Delete', target: 'Slet' },
    { source: 'Continue', target: 'Fortsæt' },
    { source: 'Cancel', target: 'Ophæv' },
    { source: 'Loading', target: 'Indlæser' },
    { source: 'Please wait...', target: 'Vent venligst...' },
    { source: 'Loading failed', target: 'Indlæsning mislykkedes' },
    { source: 'Unknown error', target: 'Ukendt fejl' },
    { source: 'Add', target: 'Tilføj' },
    { source: 'or', target: 'eller' },
    { source: 'Hours', target: 'Timer' },
    { source: 'Minutes', target: 'Minutter' },
    { source: 'Seconds', target: 'Sekunder' },
    { source: 'Saved', target: 'Gemt' },
    { source: 'Error', target: 'Fejl' },
    { source: 'Page not found', target: 'Siden kunne ikke findes' },
    {
      source: 'The specified address is incorrect, or the page does not exist',
      target: 'Den angivne adresse er forkert, eller siden eksisterer ikke'
    },
    { source: 'Not allowed', target: 'Ikke tilladt' },
    {
      source: "You don't have permissions to access this page",
      target: 'Du har ikke tilladelse til at få adgang til denne side'
    },

    // Actions
    { source: 'Action executed', target: 'Handling udført' },
    { source: 'Action executed successfully', target: 'Handling udført succesfuldt' },
    { source: 'Action failed', target: 'Handling mislykkedes' },
    {
      source: "You don't have permission for run this operation",
      target: 'Du har ikke tilladelse til at udføre denne operation'
    },
    { source: 'Specify parameters', target: 'Angiv parametre' },
    { source: 'Executing action', target: 'Udfører handling' },
    { source: 'You are executing <strong>{0}</strong>', target: 'Du udfører <strong>{0}</strong>' },
    { source: 'Please fill in the parameters below.', target: 'Udfyld venligst parametrene nedenfor.' },
    { source: 'Execute', target: 'Udfør' },
    { source: 'Executing', target: 'Udfører' },
    { source: 'Finished', target: 'Afsluttet' },
    { source: 'Done', target: 'Færdig' },

    // Export
    { source: 'Records Export', target: 'Eksport af optegnelser' },
    { source: 'Downloading records data as a file', target: 'Downloader optegnelsesdata som en fil' },
    { source: 'Choose format', target: 'Vælg format' },
    { source: 'Number of exporting records', target: 'Antal optegnelser der eksporteres' },
    { source: { label: 'Export', context: 'submit' }, target: 'Eksporter' },
    { source: 'Exporting', target: 'Eksporterer' },
    { source: 'Export completed', target: 'Eksport fuldført' },
    { source: 'Failed to export', target: 'Kunne ikke eksportere' },

    // Components
    { source: 'optional', target: 'valgfrit' },
    { source: 'choose', target: 'vælg' },
    { source: 'Clear value', target: 'Klar værdi' },
    { source: 'loading...', target: 'loader...' },
    { source: 'Nothing found', target: 'Intet fundet' },
    { source: 'Search...', target: 'Søg...' },
    { source: 'Enter at least {0} characters', target: 'Indtast mindst {0} karakterer' },
    { source: 'No options', target: 'Ingen muligheder' },
    { source: 'Drop files here or', target: 'Slip filerne her eller' },
    { source: 'Upload new', target: 'Upload ny' },
    { source: 'Clear', target: 'Ryd' },
    { source: 'Download', target: 'Hent' },
    { source: 'Choose file', target: 'Vælg fil' },
    { source: 'Choose files', target: 'Vælg filer' },
    { source: 'Scan with Camera', target: 'Scan med kamera' },
    { source: 'Scan Image file', target: 'Scan billede' },
    { source: 'Choose camera', target: 'Vælg kamera' },
    { source: 'Stop scanning', target: 'Stop scanning' },
    { source: 'Scan again', target: 'Scan igen' },
    { source: 'Use this scan', target: 'Brug denne scanning' },
    { source: 'Failed to scan', target: 'Scanning mislykkedes' },
    {
      source: 'Code failed to scan, please try another image',
      target: 'Koden kunne ikke scannes, prøv venligst et andet billede'
    },
    { source: 'current', target: 'nuværende' },
    { source: 'Day', target: 'Dag' },
    { source: 'Week', target: 'Uge' },
    { source: 'Month', target: 'Måned' },
    { source: 'Year', target: 'År' },
    { source: 'Today', target: 'I dag' },
    { source: 'Daily', target: 'Dagligt' },
    { source: 'Weekly', target: 'Ugentligt' },
    { source: 'Monthly', target: 'Månedligt' },
    { source: 'Quarterly', target: 'Kvartalsvist' },
    { source: 'Yearly', target: 'Årligt' },
    { source: 'Hourly', target: 'Hver time' },
    { source: 'Minutely', target: 'Hvert minut' },
    { source: 'Since', target: 'Siden' },
    { source: 'Before', target: 'Før' },
    { source: 'Between', target: 'Mellem' },
    { source: 'From date', target: 'Fra dato' },
    { source: 'To date', target: 'Til dato' },
    { source: 'Coordinates', target: 'Koordinater' },
    { source: 'Latitude', target: 'Breddegrad' },
    { source: 'Longitude', target: 'Længdegrad' },
    { source: 'Default color', target: 'Standardfarve' },
    { source: 'not specified', target: 'ikke angivet' },
    { source: 'Sign using your finger or pointer', target: 'Signér med din finger eller markør' },

    // List components
    { source: 'Filter', target: 'Filter' },
    { source: 'Filter by field', target: 'Filter ud fra felt' },
    { source: 'Filter by...', target: 'Filter ud fra...' },
    { source: 'Back', target: 'Tilbage' },
    { source: 'Back to {0} fields', target: 'Tilbage til {0} felter' },
    { source: 'Choose {0} from list', target: 'Vælg {0} fra liste' },
    { source: '{0} fields', target: '{0} felter' },
    { source: '{0} relationships', target: '{0} relationer' },
    { source: 'Aggregate {0}', target: 'Samlet {0}' },
    { source: 'No fields to select', target: 'Ingen felter at vælge' },
    { source: 'Enter value...', target: 'Indtast værdi...' },
    { source: 'Exclude', target: 'Ekskluder' },
    { source: 'Actions', target: 'Handlinger' },
    { source: 'Search', target: 'Søg' },
    { source: 'Sort 1 → 9', target: 'Sorter 1 → 9' },
    { source: 'Sort 9 → 1', target: 'Sorter 9 → 1' },
    { source: 'Sort A → Z', target: 'Sorter A → Z' },
    { source: 'Sort Z → A', target: 'Sorter Z → A' },
    { source: 'Refresh automatically', target: 'Opdater automatisk' },
    { source: 'All', target: 'Alle' },
    { source: 'Selected', target: 'Valgt' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'Desværre, fandt vi{0} matchende forespørgelser fundet'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'Vi henter {0}, vent venligst...' },
    { source: 'Add filter', target: 'Tilføj filter' },
    { source: 'Delete this filter', target: 'Slet dette filter' },
    { source: 'Toggle ordering', target: 'Skift sortering' },
    { source: 'Not configured', target: 'Ikke konfigureret' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'Desværre, er denne komponent ikke konfigureret endnu'
    },
    { source: 'records', target: 'Optegnelser' },
    { source: '{0} items', target: '{0} ting' },

    // Menu
    { source: 'Users & Teams', target: 'Brugere og Hold' },
    { source: 'Billing', target: 'Fakturering' },
    { source: 'Billing & Plans', target: 'Fakturering og Planer' },
    { source: 'API keys', target: 'API nøgler' },
    { source: 'Dark Mode', target: 'Mørk Tilstand' },
    { source: 'Light Mode', target: 'Lys Tilstand' },
    { source: 'Disable Staff', target: 'Deaktiver Personal' },
    { source: 'Enable Staff', target: 'Aktiver Personale' },
    { source: 'Manage Templates', target: 'Administrere Skabeloner' },
    { source: 'Logout', target: 'Log ud' },
    { source: 'Activity Log', target: 'Aktivitets log' },
    { source: 'Collaborations', target: 'Samarbejder' },
    { source: 'Open Visual Builder', target: 'Åben Visuel Builder' },

    // Filters
    { source: 'equals', target: 'Lige med' },
    { source: 'does not equal', target: 'Er ikke lige med' },
    { source: '{0} equals {1}', target: '{0} lige med {1}' },
    { source: '{0} does not equal {1}', target: '{0} er ikke lige med {1}' },

    { source: 'contains', target: 'Indeholder' },
    { source: 'does not contain', target: 'Indeholder ikke' },
    { source: '{0} contains {1}', target: '{0} indeholder {1}' },
    { source: '{0} not contains {1}', target: '{0} indeholder ikke {1}' },

    { source: 'starts with', target: 'starter med' },
    { source: 'does not start with', target: 'starter ikke med' },
    { source: '{0} starts with {1}', target: '{0} starter med {1}' },
    { source: '{0} does not start with {1}', target: '{0} start ikke med {1}' },

    { source: 'ends with', target: 'ender med' },
    { source: 'does not end with', target: 'ender ikke med' },
    { source: '{0} ends with {1}', target: '{0} ender med {1}' },
    { source: '{0} does not end with {1}', target: '{0} ender ikke med {1}' },

    { source: 'greater than', target: 'større end' },
    { source: 'is not greater than', target: 'er ikke større end' },
    { source: '{0} is greater than {1}', target: '{0} er større end {1}' },
    { source: '{0} not greater than {1}', target: '{0} ikke større end {1}' },

    { source: 'greater than or equals', target: 'større end eller lige med' },
    { source: 'is not greater than or equals', target: 'er ikke større end eller lige med' },
    { source: '{0} is greater than or equals {1}', target: '{0} er større end eller lige med {1}' },
    { source: '{0} is not greater than or equals {1}', target: '{0} er ikke større end eller lige med {1}' },

    { source: 'less than', target: 'mindre end' },
    { source: 'is not less than', target: 'er ikke mindre end' },
    { source: '{0} is less than {1}', target: '{0} er mindre end {1}' },
    { source: '{0} is not less than {1}', target: '{0} er ikke mindre end {1}' },

    { source: 'less than or equals', target: 'mindre end eller lige med' },
    { source: 'is not less than or equals', target: 'er ikke mindre end eller lige med' },
    { source: '{0} is less than or equals {1}', target: '{0} er mindre end eller lige med {1}' },
    { source: '{0} is not less than or equals {1}', target: '{0} er ikke mindre end eller lige med {1}' },

    { source: 'one of', target: 'en af' },
    { source: 'is one of', target: 'er en af' },
    { source: 'is not one of', target: 'er ikke en af' },
    { source: '{0} is one of {1}', target: '{0} er en af {1}' },
    { source: '{0} is not one of {1}', target: '{0} er ikke en af {1}' },

    { source: 'is null', target: 'er null' },
    { source: 'is not null', target: 'er ikke null' },
    { source: '{0} is null', target: '{0} er null' },
    { source: '{0} is not null', target: '{0} er ikke null' },

    { source: 'is future', target: 'er fremtid' },
    { source: 'in the future', target: 'er i fremtiden' },
    { source: 'is not in the future', target: 'er ikke i fremtiden' },
    { source: '{0} is in the future', target: '{0} er i fremtiden' },
    { source: '{0} is not in the future', target: '{0} er ikke i fremtiden' },

    { source: 'is past', target: 'er fortid ' },
    { source: 'in the past', target: 'er i fortiden' },
    { source: 'is not in the past', target: 'er ikke i fortiden' },
    { source: '{0} is in the past', target: '{0} er fra fortiden' },
    { source: '{0} is not in the past', target: '{0} er ikke fra fortiden' },

    { source: 'is Today', target: 'er i dag' },
    { source: 'today', target: 'i dag' },
    { source: 'is not today', target: 'er ikke i dag' },
    { source: '{0} is today', target: '{0} er i dag' },
    { source: '{0} is not today', target: '{0} er ikke i dag' },

    { source: 'is Yesterday', target: 'er i går' },
    { source: 'yesterday', target: 'i går' },
    { source: 'is not yesterday', target: 'er ikke i går' },
    { source: '{0} is yesterday', target: '{0} fra i går' },
    { source: '{0} is not yesterday', target: '{0} ikke fra i går' },

    { source: 'is Last Week', target: 'er sidste uge' },
    { source: 'last week', target: 'sidste uge' },
    { source: 'is not last week', target: 'ikke fra i sidste uge' },
    { source: '{0} is last week', target: '{0} fra i sidste uge' },
    { source: '{0} is not last week', target: '{0} ikke fra i sidste uge' },

    { source: 'is Last Month', target: 'er sidste måned' },
    { source: 'last month', target: 'sidste måned' },
    { source: 'is not last month', target: 'ikke fra sidste måned' },
    { source: '{0} is last month', target: '{0} fra sidste måned' },
    { source: '{0} is not last month', target: '{0} ikke fra sidste måned' },

    { source: 'is Last Quarter', target: 'er seneste kvartal' },
    { source: 'last quarter', target: 'seneste kvartal' },
    { source: 'is not last quarter', target: 'ikke fra seneste kvartal' },
    { source: '{0} is last quarter', target: '{0} fra seneste kvartal' },
    { source: '{0} is not last quarter', target: '{0} ikke fra seneste kvartal' },

    { source: 'is Last Year', target: 'fra sidste år' },
    { source: 'last year', target: 'sidste år' },
    { source: 'is not last year', target: 'er ikke fra sidste år' },
    { source: '{0} is last year', target: '{0} sidste år' },
    { source: '{0} is not last year', target: '{0} er ikke fra sidste år' },

    { source: 'is Last X Days', target: 'fra de sidste X dage' },
    { source: 'last X days', target: 'sidste X dage' },
    { source: 'is not last X days', target: 'er ikke fra sidste X dage' },
    { source: '{0} is last {1} days', target: '{0} er fra de sidste {1} dage' },
    { source: '{0} is not last {1} days', target: '{0} er ikke fra de sidste {1} dage' },

    { source: 'is Current Week', target: 'fra indeværende uge' },
    { source: 'current week', target: 'indeværende uge' },
    { source: 'is not current week', target: 'er ikke fra indeværende uge' },
    { source: '{0} is current week', target: '{0} fra indeværende uge' },
    { source: '{0} is not current week', target: '{0} er ikke fra indeværende uge' },

    { source: 'is Current Month', target: 'fra indeværende måned' },
    { source: 'current month', target: 'indeværende måned' },
    { source: 'is not current month', target: 'er ikke fra indeværende måned' },
    { source: '{0} is current month', target: '{0} fra indeværende måned' },
    { source: '{0} is not current month', target: '{0} er ikke fra indeværende måned' },

    { source: 'is Current Quarter', target: 'fra indeværende kvartal' },
    { source: 'current quarter', target: 'indeværende kvartal' },
    { source: 'is not current quarter', target: 'ikke fra indeværende kvartal' },
    { source: '{0} is current quarter', target: '{0} indeværende kvartal' },
    { source: '{0} is not current quarter', target: '{0} er ikke fra indeværende kvartal' },

    { source: 'is Current Year', target: 'fra indeværende år' },
    { source: 'current year', target: 'indeværende år' },
    { source: 'is not current year', target: 'er ikke fra indeværende år' },
    { source: '{0} is current year', target: '{0} fra indeværende år' },
    { source: '{0} is not current year', target: '{0} er ikke fra indeværende år' },

    { source: 'is Previous Week', target: 'er sidste uge' },
    { source: 'previous week', target: 'sidste uge' },
    { source: 'is not previous week', target: 'er ikke sidste uge' },
    { source: '{0} is previous week', target: '{0} er sidste uge' },
    { source: '{0} is not previous week', target: '{0} er ikke sidste uge' },

    { source: 'is Previous Month', target: 'er sidste måned' },
    { source: 'previous month', target: 'sidste måned' },
    { source: 'is not previous month', target: 'er ikke sidste måned' },
    { source: '{0} is previous month', target: '{0} er sidste måned' },
    { source: '{0} is not previous month', target: '{0} er ikke sidste måned' },

    { source: 'is Previous Quarter', target: 'er sidste kvartal' },
    { source: 'previous quarter', target: 'sidste kvartal' },
    { source: 'is not previous quarter', target: 'er ikke sidste kvartal' },
    { source: '{0} is previous quarter', target: '{0} er sidste kvartal' },
    { source: '{0} is not previous quarter', target: '{0} er ikke sidste kvartal' },

    { source: 'is Previous Year', target: 'er sidste år' },
    { source: 'previous year', target: 'sidste år' },
    { source: 'is not previous year', target: 'er ikke sidste år' },
    { source: '{0} is previous year', target: '{0} er sidste år' },
    { source: '{0} is not previous year', target: '{0} er ikke sidste år' },

    { source: 'is Previous X Days', target: 'er sidste X dage' },
    { source: 'previous X days', target: 'sidste X dage' },
    { source: 'is not previous X days', target: 'er ikke sidste X dage' },
    { source: '{0} is previous {1} days', target: '{0} er sidste {1} dage' },
    { source: '{0} is not previous {1} days', target: '{0} er ikke sidste {1} dage' },

    { source: 'is empty', target: 'er tom' },
    { source: 'is not empty', target: 'er ikke tom' },
    { source: '{0} is empty', target: '{0} er tom' },
    { source: '{0} is not empty', target: '{0} er ikke tom' },

    { source: 'covered by', target: 'dækket af' },
    { source: 'is not covered by', target: 'er ikke dækket af' },
    { source: '{0} covered by {1}', target: '{0} dækket af {1}' },
    { source: '{0} is not covered by {1}', target: '{0} er ikke dækket af {1}' },

    // Activity log
    { source: 'No activities found', target: 'Ingen aktiviteter fundet' },
    {
      source: 'Start to working with data to log activities.',
      target: 'Start med at arbejde med data for at logge aktiviteter.'
    },
    { source: 'All Activity', target: 'Alt aktivitet' },
    { source: 'Create Record', target: 'Opret registrering' },
    { source: 'Update Record', target: 'Opdater registrering' },
    { source: 'Delete Record', target: 'Slet registrering' },
    { source: 'All Members', target: 'Alle medlemmer' },

    // Collaboration
    { source: 'Timeline', target: 'Tidslinje' },
    { source: 'Messages', target: 'Beskeder' },
    { source: 'Activity', target: 'Aktivitet' },
    { source: 'Start chatting with your team', target: 'Start med at chatte med dit team.' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'Tag en besked om den nuværende side, for at holde styr på vigtig information.'
    },
    { source: 'Your Message', target: 'Din besked' },
    { source: 'Send', target: 'Send' },

    // Share
    { source: 'Invite members', target: 'Inviter medlemmer' },
    { source: 'Public share', target: 'Offentlig deling' },
    { source: 'Sign Up', target: 'Opret' },
    { source: 'Members', target: 'Medlemmer' },
    { source: 'Invite with Email', target: 'Inviter med email' },
    { source: 'Invite someone...', target: 'Inviter en ven...' },
    { source: 'Send Invite', target: 'Send invitation' },
    {
      source: 'Limit access to your data by user properties',
      target: 'Begræns adgang til dine data via brugeregenskaber.'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: 'Til en email på den bruger du gerne vil indgå samarbejde med.'
    },
    { source: 'Copy', target: 'Kopier' },
    { source: 'Invite with Link', target: 'Inviter med link' },
    { source: 'Remove link', target: 'Slet link' },
    { source: 'Add Invite Link', target: 'Tilføj invitationslink' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'Alle med internet og dette link kan tilkoble sige dette team.'
    },
    { source: 'Pending Invites', target: 'Afventende invitationer' },
    { source: 'Cancel invite', target: 'Annuller invitation' },
    { source: 'Active Members', target: 'Aktive medlemmer' },
    { source: 'Remove member', target: 'Slet medlem' },
    {
      source: 'You are setting sharing for the current page',
      target: 'Du indstiller deling for den nuværende side.'
    },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'Du indstiller deling for alle sider af din app.'
    },
    { source: 'Public access link', target: 'Offentlig delings link' },
    { source: 'Updating public access...', target: 'Opdater offentlig deling...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'Alle med dette link kan se den nuværende side. På denne måde kan du også integrere denne side til en anden hjemmeside.'
    },
    { source: 'Embed code (IFRAME)', target: 'Integrer kode (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: 'Indsæt denne kode i din HTML kode på din hjemmeside der hvor du ønsker den vist.'
    },
    { source: 'link', target: 'link' },
    { source: 'invited', target: 'inviteret' },
    { source: 'Choose Team', target: 'Vælg team' },
    { source: 'App Teams', target: 'App Teams' },
    { source: 'Built-In Teams', target: 'Indbyggede Teams' },
    { source: 'Clear Team', target: 'Ryd Team' },
    { source: 'Can build application and modify data', target: 'Kan bygge applikation og modificere data' },
    { source: 'Can modify data in application', target: 'Kan modificere data i applikationen' },
    { source: 'Can only view data without modification', target: 'Kan kun se data uden at modificere' },
    { source: 'Add Team', target: 'Tilføj Team' },
    { source: 'Edit Team', target: 'Rediger Team' },
    { source: 'Adding Team', target: 'Tilføjelse af Team' },
    {
      source: 'Keep control over who has access to current App',
      target: 'Hold kontrol over hvem der har adgang til din nuværende App'
    },
    { source: 'Enter Team Name', target: 'Tilføj Team Navn' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'Indtast team navnet, eks: Support, Salg, Marketing, osv.'
    },
    { source: 'Add a new member to this team.', target: 'Tilføj et nyt medlem til dette Team.' },
    { source: 'Invite new member', target: 'Inviter nyt medlem' },
    { source: 'User', target: 'Bruger' },
    { source: 'Date Added', target: 'Dato Tilføjet' },
    { source: 'You', target: 'Dig' },
    { source: 'Edit', target: 'Rediger' },
    { source: 'No users in this team', target: 'Ingen brugere på dette team' },
    { source: 'Page Permissions', target: 'Side tilladelser' },
    { source: 'App Permissions', target: 'App tilladelser' },
    { source: 'Properties', target: 'Egenskaber' },
    { source: 'Page name', target: 'Side navn' },
    { source: 'Access', target: 'Adgang' },
    { source: 'Full Access', target: 'Fuldt Adgang' },
    { source: 'Read Only', target: 'Kun Visning' },
    { source: 'No Access', target: 'Ingen Adgang' },
    { source: 'Read', target: 'Visning' },
    { source: 'Update', target: 'Opdater' },
    { source: 'Write', target: 'Skrive' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'Slet' },
    { source: 'Custom Access', target: 'Tilpassede tilladelser' },
    { source: 'Read, create, update and delete data', target: 'Læs, opret, opdater og slet data' },
    { source: 'Choose allowed operations granularly', target: 'Vælg tilladte operationer granuleret' },
    { source: 'Without any access to data', target: 'Uden adgang til data' },
    { source: 'Name', target: 'Navn' },
    { source: 'Active', target: 'Aktiv' },
    { source: 'Settings', target: 'Indstillinger' },
    { source: 'Members and Teams', target: 'Medlemmer and Teams' },
    { source: 'App Builder', target: 'App Builder' },
    { source: 'Collection Permissions', target: 'Samling tilladelser' },
    { source: "Grant permissions to app's collection", target: 'Tillad adgang til app samlingen' },
    { source: 'Collection', target: 'Samling' },
    {
      source: 'Limit access to your data by team properties',
      target: 'Begræns adgangen til dine data efter teamegenskaber'
    },
    { source: 'Save Team', target: 'Gem Team' },
    { source: 'Create Team', target: 'Opret Team' },
    { source: 'Value', target: 'Værdi' },
    { source: 'No properties specified', target: 'Ingen egenskaber angivet' },

    // Navigation
    { source: 'Current App', target: 'Nuværende App' },
    { source: 'Home', target: 'Hjem' },

    // Profile
    {
      source: 'We are fetching user data, please, wait...',
      target: 'Vi henter brugerdata, vent venligst...'
    },
    { source: 'Profile Settings', target: 'Profil Indstillinger' },
    { source: 'Basic information about your account.', target: 'Grundlæggende oplysninger om din konto.' },
    { source: 'Photo', target: 'Foto' },
    { source: 'your photo', target: 'dit foto' },
    { source: 'Change', target: 'Skift' },
    { source: 'Upload', target: 'Upload' },
    { source: 'Photo was successfully updated', target: 'Foto blev opdateret' },
    { source: 'Photo was successfully deleted', target: 'Foto blev slettet' },
    { source: 'First Name', target: 'Fornavn' },
    { source: 'Last Name', target: 'Efternavn' },
    { source: 'Your Email', target: 'Din Email' },
    { source: 'Email Change', target: 'Email ændring' },
    { source: 'New Email', target: 'Ny Email' },
    { source: 'Change Email', target: 'Ændre Email' },
    { source: 'Check your inbox', target: 'Tjek din indbakke' },
    { source: 'Confirmation Email was sent to {0}', target: 'Bekræftelse Email blev sendt til {0}' },
    { source: 'Changing Email failed', target: 'Ændring af Email mislykkedes' },
    { source: 'Password Change', target: 'Ændre password' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target: 'En adgangskode skal være stærk nok til at beskytte din konto, så sørg for at den er på mindst 12 tegn.'
    },
    { source: 'Current Password', target: 'Nuværende Password' },
    { source: 'New Password', target: 'Ny Password' },
    { source: 'Confirm New Password', target: 'Bekæft nyt Password' },
    { source: 'Change Password', target: 'Ændre Password' },
    {
      source: 'Current password was successfully updated, all other sessions will be logged out shortly',
      target: 'Den nuværende adgangskode blev opdateret med succes, og alle andre sessioner vil snart blive logget ud'
    },
    { source: 'Saving current password failed', target: 'Opdatering af nuværende password mislykkedes' },
    { source: 'Short password', target: 'Kort password' },
    { source: "Passwords don't match", target: 'Password stemmer ikke overens' },
    { source: 'Personal Preferences', target: 'Personlige Indstillinger' },
    { source: 'Language', target: 'Sprog' },
    { source: 'Timezone', target: 'Tidszone' },
    { source: 'Current time in {0} is', target: 'Aktuel tid i {0} er' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'Tilpas yderligere præferencer for din konto.'
    },
    { source: 'News & Proposals', target: 'Nyheder og forslag' },
    {
      source: 'Subscribe to our updates and proposals.',
      target: 'Abonner på vores opdateringer og forslag.'
    },
    { source: 'Save changes', target: 'Gem ændringer' },
    { source: 'Current user was successfully updated', target: 'Nuværende bruger blev opdateret' },
    { source: 'Saving current user failed', target: 'Gem nuværende bruger mislykkedes' },

    // My Apps
    { source: 'Type to search...', target: 'Skriv for at søge...' },
    { source: 'My Apps', target: 'Mine Apps' },
    { source: 'New App', target: 'Ny App' },
    { source: 'Builder', target: 'Builder' },
    { source: 'App', target: 'App' },
    { source: 'continue install', target: 'fortsæt installation' },
    { source: 'Open builder', target: 'Åben builder' },
    { source: 'View published', target: 'Se udgivede' },
    { source: 'Delete App', target: 'Slet App' },
    { source: 'Start from a template', target: 'Start fra en skabelon' },
    { source: 'Preview', target: 'Forhåndsvisning' },
    { source: 'Contact Support', target: 'Kontakt Support' },
    { source: 'Documentation', target: 'Dokumentation' },
    { source: 'Feature Requests', target: 'Funktionsanmodninger' },
    { source: 'See What’s New', target: 'Se hvad der er nyt' },
    { source: 'Search templates...', target: 'Søg skabeloner...' },
    { source: 'any', target: 'alle' },
    { source: 'more', target: 'mere' },
    { source: 'Choose Data Source', target: 'Vælg Datakilde' },
    { source: 'works with 30+ data sources', target: 'fungerer med 30+ datakilder' },
    { source: 'Use this template', target: 'Brug denne skabelon' },
    { source: 'stores data in Jet Tables', target: 'gemmer data i Jet Tables' },
    { source: 'New Data', target: 'Ny Data' },
    { source: 'using {0}', target: 'bruger {0}' },
    { source: "Can't find resource you're looking for?", target: 'Kan du ikke finde den ressource, du leder efter?' },
    { source: 'Admin Panel', target: 'Admin Panel' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'Vis, opret og opdater (CRUD) operationer oven på dine data'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target:
        "Byg et brugerdefineret administrationspanel baseret på alle databaser, apps og API'er som Stripe, Twilio og GraphQL."
    },
    { source: 'All Integrations', target: 'Alle integrationer' },
    { source: 'Databases', target: 'Databaser' },
    { source: 'APIs', target: 'APIer' },
    { source: 'Frameworks', target: 'Frameworks' },
    { source: 'Storages', target: 'Opbevaringer' },

    // Sign In
    { source: 'Good morning', target: 'Godmorgen' },
    { source: 'Good afternoon', target: 'God eftermiddag' },
    { source: 'Good evening', target: 'Godaften' },
    { source: 'Sign In', target: 'Log in' },
    { source: 'Welcome Back.', target: 'Velkommen tilbage.' },
    { source: 'Sign in with {0}', target: 'Log in med {0}' },
    { source: 'or login with', target: 'eller log in med' },
    { source: 'Enter E-mail', target: 'Indtast Email' },
    { source: 'Enter password', target: 'Indstast Password' },
    { source: 'Login', target: 'Login' },
    { source: 'Create new account', target: 'Opret ny konto' },
    { source: 'Forgot my password', target: 'Glemt password' },
    { source: 'required', target: 'påkrævet' },
    { source: 'incorrect Email', target: 'forkert Email' },
    { source: 'Minimum password length {0}', target: 'Minimum password længde {0}' },
    { source: 'Unable to Sign In', target: 'Kan ikke logge ind' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'Kom igang <span class="auth-form__accent">Gratis i dag</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target:
        'Intet kort påkrævet. Du får al den avancerede funktionalitet gratis i løbet af 14 dages PRO-prøveversion.'
    },
    { source: 'Enter First Name', target: 'Indstast Fornavn' },
    { source: 'Enter Last Name (optional)', target: 'Indtast Efternavn (valgfrit)' },
    { source: 'Enter Email', target: 'Indtast Email' },
    { source: 'Password', target: 'Password' },
    { source: 'Repeat Password', target: 'Gentag Password' },
    {
      source: 'By signing in you’re okay with our',
      target: 'Ved at logge ind er du okay med vores'
    },
    {
      source: 'Creating an account means you’re okay with our',
      target: 'Oprettelse af en konto betyder, at du er okay med vores'
    },
    { source: 'Terms of Service', target: 'Servicevilkår' },
    { source: 'Privacy Policy', target: 'Privatlivspolitik' },
    { source: 'and', target: 'og' },
    { source: 'Create your free account', target: 'Opret en gratis konto' },
    { source: 'Already have an account', target: 'Har du allerede en bruger' },
    { source: 'Unable to Sign Up', target: 'Kan ikke tilmelde dig' },

    // Restore password
    { source: 'Reset your password', target: 'Nulstil dit password' },
    { source: 'Email Address', target: 'Email Adresser' },
    { source: 'Reset password', target: 'Nulstil Password' },
    { source: 'Return to Sign In', target: 'Vend tilbage til Log ind' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'Tjek venligst din email – <strong>{0}</strong>. Vi har sendt det valideringslink, du skal følge for at ændre din adgangskode.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be al least 8 characters.',
      target: 'Næsten færdig, skal du blot indtaste din nye adgangskode nedenfor. <br>Skal bestå af mindst 8 tegn.'
    },
    { source: 'Reset password & Sign In', target: 'Nulstil adgangskode og log ind' },
    { source: 'Unable to Send Code', target: 'Kan ikke sende kode' },
    { source: 'Unable to Change Password', target: 'Kan ikke ændre Password' },

    // Email Verification
    { source: 'Email Verification', target: 'Emailbekræftelse' },
    { source: 'Resend verification code', target: 'Gensend bekræftelseskode' },
    { source: 'Verification email sent', target: 'Bekræftelsesemail sendt' },
    { source: 'Your Email is now verified', target: 'Din email er nu bekræftet' },
    { source: 'Request is incorrect', target: 'Forespørgsel er forkert' },

    // Invites
    {
      source: 'Join <span class="auth-form__accent">{0}</span>',
      target: 'Deltag <span class="auth-form__accent">{0}</span>'
    },
    {
      source: '<strong>{0}</strong> has invited you to join <strong>{1}</strong>',
      target: '<strong>{0}</strong> har inviteret dig til at deltage i <strong>{1}</strong>'
    },
    {
      source: 'Someone has invited you to join <strong>{0}</strong>',
      target: 'Nogen har inviteret dig til at deltage i <strong>{0}</strong>'
    },
    {
      source: 'You are joining <strong>{0}</strong> using invite link',
      target: 'Du deltager i <strong>{0}</strong> ved at bruge invitationslink'
    },
    { source: 'Join', target: 'Deltag' },
    { source: 'Go to home page', target: 'Gå til startside' },
    { source: 'Invite link is wrong', target: 'Invitationslinket er forkert' },
    {
      source:
        'Looks like your invitation link has expired or maybe you have followed the wrong link. Please try to ask to invite your again.',
      target:
        'Ser ud til, at dit invitationslink er udløbet, eller måske har du fulgt det forkerte link. Prøv venligst at bede om invitation igen.'
    },
    {
      source: 'Unfortunately we failed to load information about this invitation',
      target: 'Desværre kunne vi ikke indlæse information om denne invitation'
    },

    // Users & Teams
    { source: 'Members of {0}', target: 'Medlem af {0}' },
    { source: 'How to get started', target: 'Sådan kommer du i gang' },
    { source: 'Users API', target: 'Brugerens API' },
    { source: 'Teams API', target: 'Holdets API' },
    { source: 'Invite Member', target: 'Inviter medlem' },
    { source: 'Add User property', target: 'Tilføj brugeregenskab' },
    { source: 'Add Team property', target: 'Tilføj holdegenskab' },
    { source: 'Edit property', target: 'Rediger egenskaber' },
    { source: 'Delete property', target: 'Slet egenskaber' },
    { source: 'Users', target: 'Brugere' },
    { source: 'Teams', target: 'Hold' },
    { source: 'Search members', target: 'Søg medlemmer' },
    { source: 'Search teams', target: 'Søg hold' },
    { source: '{0} pages', target: '{0} sider' },
    { source: 'No members', target: 'Ingen medlemmer' }
  ]
};

import { Locale } from './locale';

export const locale: Locale = {
  name: 'swedish',
  language: 'sv',
  items: [
    // General
    { source: 'Save', target: 'Spara' },
    { source: 'Create', target: 'Skapa' },
    { source: 'Duplicating', target: 'Duplicera' },
    { source: 'Duplicate', target: 'Dubblera' },
    { source: 'Mass Edit', target: 'Massändring' },
    { source: 'Export', target: 'Exportera' },
    { source: 'Import', target: 'Importera' },
    { source: 'Delete', target: 'Radera' },
    { source: 'Continue', target: 'Fortsätt' },
    { source: 'Cancel', target: 'Avbryt' },
    { source: 'Loading', target: 'Laddar' },
    { source: 'Please wait...', target: 'Vänligen vänta...' },
    { source: 'Loading failed', target: 'Laddning misslyckades' },
    { source: 'Unknown error', target: 'Okänt fel' },
    { source: 'Add', target: 'Lägg till' },
    { source: 'or', target: 'eller' },
    { source: 'Hours', target: 'Timmar' },
    { source: 'Minutes', target: 'Minuter' },
    { source: 'Seconds', target: 'Sekunder' },
    { source: 'Saved', target: 'Sparad' },
    { source: 'Error', target: 'Fel' },
    { source: 'Page not found', target: 'Sidan hittades inte' },
    {
      source: 'The specified address is incorrect, or the page does not exist',
      target: 'Den angivna adressen är felaktig eller sidan finns inte'
    },
    { source: 'Not allowed', target: 'Inte tillåtet' },
    {
      source: "You don't have permissions to access this page",
      target: 'Du har inte behörighet att komma åt den här sidan'
    },

    // Actions
    { source: 'Action executed', target: 'Åtgärd utförd' },
    { source: 'Action executed successfully', target: 'Åtgärd utförd framgångsrikt' },
    { source: 'Action failed', target: 'Åtgärd misslyckades' },
    {
      source: "You don't have permission for run this operation",
      target: 'Du har inte behörighet att utföra denna operation'
    },
    { source: 'Specify parameters', target: 'Ange parametrar' },
    { source: 'Executing action', target: 'Utför åtgärd' },
    { source: 'You are executing <strong>{0}</strong>', target: 'Du utför <strong>{0}</strong>' },
    { source: 'Please fill in the parameters below.', target: 'Fyll i parametrarna nedan.' },
    { source: 'Execute', target: 'Verkställ' },
    { source: 'Executing', target: 'Verkställande' },
    { source: 'Finished', target: 'Avslutad' },
    { source: 'Done', target: 'Klar' },

    // Export
    { source: 'Records Export', target: 'Exportera poster' },
    { source: 'Downloading records data as a file', target: 'Ladda ner poster som en fil' },
    { source: 'Choose format', target: 'Välj format' },
    { source: 'Number of exporting records', target: 'Antal poster att exportera' },
    { source: { label: 'Export', context: 'submit' }, target: 'Exportera' },
    { source: 'Exporting', target: 'Exportera' },
    { source: 'Export completed', target: 'Exportering slutförd' },
    { source: 'Failed to export', target: 'Misslyckades med att exportera' },

    // Components
    { source: 'optional', target: 'valfritt' },
    { source: 'choose', target: 'välja' },
    { source: 'Clear value', target: 'Ta bort värde' },
    { source: 'loading...', target: 'laddar...' },
    { source: 'Nothing found', target: 'Inget hittades' },
    { source: 'Search...', target: 'Sök...' },
    { source: 'Enter at least {0} characters', target: 'Ange minst {0} tecken' },
    { source: 'No options', target: 'Inga alternativ' },
    { source: 'Drop files here or', target: 'Släpp filer här eller' },
    { source: 'Upload new', target: 'Ladda upp ny' },
    { source: 'Clear', target: 'Rensa' },
    { source: 'Download', target: 'Ladda ner' },
    { source: 'Choose file', target: 'Välj fil' },
    { source: 'Choose files', target: 'Välj filer' },
    { source: 'Scan with Camera', target: 'Skanna med kamera' },
    { source: 'Scan Image file', target: 'Skanna bildfil' },
    { source: 'Choose camera', target: 'Välj kamera' },
    { source: 'Stop scanning', target: 'Stoppa skanning' },
    { source: 'Scan again', target: 'Skanna igen' },
    { source: 'Use this scan', target: 'Använd denna skanning' },
    { source: 'Failed to scan', target: 'Misslyckades med att skanna' },
    {
      source: 'Code failed to scan, please try another image',
      target: 'Koden kunde inte skannas, försök med en annan bild'
    },
    { source: 'current', target: 'nuvarande' },
    { source: 'Day', target: 'Dag' },
    { source: 'Week', target: 'Vecka' },
    { source: 'Month', target: 'Månad' },
    { source: 'Year', target: 'År' },
    { source: 'Today', target: 'Idag' },
    { source: 'Daily', target: 'Dagligen' },
    { source: 'Weekly', target: 'Veckovis' },
    { source: 'Monthly', target: 'Månatlig' },
    { source: 'Quarterly', target: 'Kvartalsvis' },
    { source: 'Yearly', target: 'Årligen' },
    { source: 'Hourly', target: 'Per timme' },
    { source: 'Minutely', target: 'Per minut' },
    { source: 'Since', target: 'Sedan' },
    { source: 'Before', target: 'Innan' },
    { source: 'Between', target: 'Mellan' },
    { source: 'From date', target: 'Från datum' },
    { source: 'To date', target: 'Till datum' },
    { source: 'Coordinates', target: 'Koordinater' },
    { source: 'Latitude', target: 'Latitud' },
    { source: 'Longitude', target: 'Longitud' },
    { source: 'Default color', target: 'Standardfärg' },
    { source: 'not specified', target: 'inte specificerad' },
    { source: 'Sign using your finger or pointer', target: 'Signera med din finger eller pekare' },

    // List components
    { source: 'Filter', target: 'Filter' },
    { source: 'Filter by field', target: 'Filtrera efter fält' },
    { source: 'Filter by...', target: 'Filtrera efter...' },
    { source: 'Back', target: 'Tillbaka' },
    { source: 'Back to {0} fields', target: 'Tillbaka till {0} fält' },
    { source: 'Choose {0} from list', target: 'Välj {0} från listan' },
    { source: '{0} fields', target: '{0} fält' },
    { source: '{0} relationships', target: '{0} relationer' },
    { source: 'Aggregate {0}', target: 'Sammanställ {0}' },
    { source: 'No fields to select', target: 'Inga fält att välja' },
    { source: 'Enter value...', target: 'Ange värde...' },
    { source: 'Exclude', target: 'Uteslut' },
    { source: 'Actions', target: 'Åtgärder' },
    { source: 'Search', target: 'Sök' },
    { source: 'Sort 1 → 9', target: 'Sortera 1 → 9' },
    { source: 'Sort 9 → 1', target: 'Sortera 9 → 1' },
    { source: 'Sort A → Z', target: 'Sortera A → Ö' },
    { source: 'Sort Z → A', target: 'Sortera Ö → A' },
    { source: 'Refresh automatically', target: 'Uppdatera automatiskt' },
    { source: 'All', target: 'Alla' },
    { source: 'Selected', target: 'Valda' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'Tyvärr hittades inga {0} som matchar din fråga'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'Vi hämtar {0}, vänligen vänta...' },
    { source: 'Add filter', target: 'Lägg till filter' },
    { source: 'Delete this filter', target: 'Ta bort detta filter' },
    { source: 'Toggle ordering', target: 'Växla sortering' },
    { source: 'Not configured', target: 'Inte konfigurerad' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'Tyvärr är denna komponent inte konfigurerad ännu'
    },
    { source: 'records', target: 'poster' },
    { source: '{0} items', target: '{0} objekt' },

    // Menu
    { source: 'Users & Teams', target: 'Användare & Team' },
    { source: 'Billing', target: 'Fakturering' },
    { source: 'Billing & Plans', target: 'Fakturering & Planer' },
    { source: 'API keys', target: 'API nycklar' },
    { source: 'Dark Mode', target: 'Mörkt läge' },
    { source: 'Light Mode', target: 'Ljust läge' },
    { source: 'Disable Staff', target: 'Inaktivera personal' },
    { source: 'Enable Staff', target: 'Aktivera personal' },
    { source: 'Manage Templates', target: 'Hantera mallar' },
    { source: 'Logout', target: 'Logga ut' },
    { source: 'Activity Log', target: 'Aktivitetslogg' },
    { source: 'Collaborations', target: 'Samarbeten' },
    { source: 'Open Visual Builder', target: 'Öppna Visuell byggare' },

    // Filters
    { source: 'equals', target: 'lika med' },
    { source: 'does not equal', target: 'inte lika med' },
    { source: '{0} equals {1}', target: '{0} är lika med {1}' },
    { source: '{0} does not equal {1}', target: '{0} är inte lika med {1}' },

    { source: 'contains', target: 'innehåller' },
    { source: 'does not contain', target: 'innehåller inte' },
    { source: '{0} contains {1}', target: '{0} innehåller {1}' },
    { source: '{0} not contains {1}', target: '{0} innehåller inte {1}' },

    { source: 'starts with', target: 'börjar med' },
    { source: 'does not start with', target: 'börjar inte med' },
    { source: '{0} starts with {1}', target: '{0} börjar med {1}' },
    { source: '{0} does not start with {1}', target: '{0} börjar inte med {1}' },

    { source: 'ends with', target: 'slutar med' },
    { source: 'does not end with', target: 'slutar inte med' },
    { source: '{0} ends with {1}', target: '{0} slutar med {1}' },
    { source: '{0} does not end with {1}', target: '{0} slutar inte med {1}' },

    { source: 'greater than', target: 'större än' },
    { source: 'is not greater than', target: 'är inte större än' },
    { source: '{0} is greater than {1}', target: '{0} är större än {1}' },
    { source: '{0} not greater than {1}', target: '{0} är inte större än {1}' },

    { source: 'greater than or equals', target: 'större än eller lika med' },
    { source: 'is not greater than or equals', target: 'är inte större än eller lika med' },
    { source: '{0} is greater than or equals {1}', target: '{0} är större än eller lika med {1}' },
    { source: '{0} is not greater than or equals {1}', target: '{0} är inte större än eller lika med {1}' },

    { source: 'less than', target: 'mindre än' },
    { source: 'is not less than', target: 'är inte mindre än' },
    { source: '{0} is less than {1}', target: '{0} är mindre än {1}' },
    { source: '{0} is not less than {1}', target: '{0} är inte mindre än {1}' },

    { source: 'less than or equals', target: 'mindre än eller lika med' },
    { source: 'is not less than or equals', target: 'är inte mindre än eller lika med' },
    { source: '{0} is less than or equals {1}', target: '{0} är mindre än eller lika med {1}' },
    { source: '{0} is not less than or equals {1}', target: '{0} är inte mindre än eller lika med {1}' },

    { source: 'one of', target: 'ett av' },
    { source: 'is one of', target: 'är ett av' },
    { source: 'is not one of', target: 'är inte ett av' },
    { source: '{0} is one of {1}', target: '{0} är ett av {1}' },
    { source: '{0} is not one of {1}', target: '{0} är inte ett av {1}' },

    { source: 'is null', target: 'är null' },
    { source: 'is not null', target: 'är inte null' },
    { source: '{0} is null', target: '{0} är null' },
    { source: '{0} is not null', target: '{0} är inte null' },

    { source: 'is future', target: 'är i framtiden' },
    { source: 'in the future', target: 'i framtiden' },
    { source: 'is not in the future', target: 'är inte i framtiden' },
    { source: '{0} is in the future', target: '{0} är i framtiden' },
    { source: '{0} is not in the future', target: '{0} är inte i framtiden' },

    { source: 'is past', target: 'är i det förflutna' },
    { source: 'in the past', target: 'i det förflutna' },
    { source: 'is not in the past', target: 'är inte i det förflutna' },
    { source: '{0} is in the past', target: '{0} är i det förflutna' },
    { source: '{0} is not in the past', target: '{0} är inte i det förflutna' },

    { source: 'is Today', target: 'är idag' },
    { source: 'today', target: 'idag' },
    { source: 'is not today', target: 'är inte idag' },
    { source: '{0} is today', target: '{0} är idag' },
    { source: '{0} is not today', target: '{0} är inte idag' },

    { source: 'is Yesterday', target: 'är igår' },
    { source: 'yesterday', target: 'igår' },
    { source: 'is not yesterday', target: 'är inte igår' },
    { source: '{0} is yesterday', target: '{0} är igår' },
    { source: '{0} is not yesterday', target: '{0} är inte igår' },

    { source: 'is Last Week', target: 'är förra veckan' },
    { source: 'last week', target: 'förra veckan' },
    { source: 'is not last week', target: 'är inte förra veckan' },
    { source: '{0} is last week', target: '{0} är förra veckan' },
    { source: '{0} is not last week', target: '{0} är inte förra veckan' },

    { source: 'is Last Month', target: 'är förra månaden' },
    { source: 'last month', target: 'förra månaden' },
    { source: 'is not last month', target: 'är inte förra månaden' },
    { source: '{0} is last month', target: '{0} är förra månaden' },
    { source: '{0} is not last month', target: '{0} är inte förra månaden' },

    { source: 'is Last Quarter', target: 'är förra kvartalet' },
    { source: 'last quarter', target: 'förra kvartalet' },
    { source: 'is not last quarter', target: 'är inte förra kvartalet' },
    { source: '{0} is last quarter', target: '{0} är förra kvartalet' },
    { source: '{0} is not last quarter', target: '{0} är inte förra kvartalet' },

    { source: 'is Last Year', target: 'är förra året' },
    { source: 'last year', target: 'förra året' },
    { source: 'is not last year', target: 'är inte förra året' },
    { source: '{0} is last year', target: '{0} är förra året' },
    { source: '{0} is not last year', target: '{0} är inte förra året' },

    { source: 'is Last X Days', target: 'är senaste X dagarna' },
    { source: 'last X days', target: 'senaste X dagarna' },
    { source: 'is not last X days', target: 'är inte senaste X dagarna' },
    { source: '{0} is last {1} days', target: '{0} är senaste {1} dagarna' },
    { source: '{0} is not last {1} days', target: '{0} är inte senaste {1} dagarna' },

    { source: 'is Current Week', target: 'är nuvarande vecka' },
    { source: 'current week', target: 'nuvarande vecka' },
    { source: 'is not current week', target: 'är inte nuvarande vecka' },
    { source: '{0} is current week', target: '{0} är nuvarande vecka' },
    { source: '{0} is not current week', target: '{0} är inte nuvarande vecka' },

    { source: 'is Current Month', target: 'är nuvarande månad' },
    { source: 'current month', target: 'nuvarande månad' },
    { source: 'is not current month', target: 'är inte nuvarande månad' },
    { source: '{0} is current month', target: '{0} är nuvarande månad' },
    { source: '{0} is not current month', target: '{0} är inte nuvarande månad' },

    { source: 'is Current Quarter', target: 'är nuvarande kvartal' },
    { source: 'current quarter', target: 'nuvarande kvartal' },
    { source: 'is not current quarter', target: 'är inte nuvarande kvartal' },
    { source: '{0} is current quarter', target: '{0} är nuvarande kvartal' },
    { source: '{0} is not current quarter', target: '{0} är inte nuvarande kvartal' },

    { source: 'is Current Year', target: 'är nuvarande år' },
    { source: 'current year', target: 'nuvarande år' },
    { source: 'is not current year', target: 'är inte nuvarande år' },
    { source: '{0} is current year', target: '{0} är nuvarande år' },
    { source: '{0} is not current year', target: '{0} är inte nuvarande år' },

    { source: 'is Previous Week', target: 'är föregående vecka' },
    { source: 'previous week', target: 'föregående vecka' },
    { source: 'is not previous week', target: 'är inte föregående vecka' },
    { source: '{0} is previous week', target: '{0} är föregående vecka' },
    { source: '{0} is not previous week', target: '{0} är inte föregående vecka' },

    { source: 'is Previous Month', target: 'är föregående månad' },
    { source: 'previous month', target: 'föregående månad' },
    { source: 'is not previous month', target: 'är inte föregående månad' },
    { source: '{0} is previous month', target: '{0} är föregående månad' },
    { source: '{0} is not previous month', target: '{0} är inte föregående månad' },

    { source: 'is Previous Quarter', target: 'är föregående kvartal' },
    { source: 'previous quarter', target: 'föregående kvartal' },
    { source: 'is not previous quarter', target: 'är inte föregående kvartal' },
    { source: '{0} is previous quarter', target: '{0} är föregående kvartal' },
    { source: '{0} is not previous quarter', target: '{0} är inte föregående kvartal' },

    { source: 'is Previous Year', target: 'är föregående år' },
    { source: 'previous year', target: 'föregående år' },
    { source: 'is not previous year', target: 'är inte föregående år' },
    { source: '{0} is previous year', target: '{0} är föregående år' },
    { source: '{0} is not previous year', target: '{0} är inte föregående år' },

    { source: 'is Previous X Days', target: 'är föregående X dagar' },
    { source: 'previous X days', target: 'föregående X dagar' },
    { source: 'is not previous X days', target: 'är inte föregående X dagar' },
    { source: '{0} is previous {1} days', target: '{0} är föregående {1} dagar' },
    { source: '{0} is not previous {1} days', target: '{0} är inte föregående {1} dagar' },

    { source: 'is empty', target: 'är tom' },
    { source: 'is not empty', target: 'är inte tom' },
    { source: '{0} is empty', target: '{0} är tom' },
    { source: '{0} is not empty', target: '{0} är inte tom' },

    { source: 'covered by', target: 'täckta av' },
    { source: 'is not covered by', target: 'är inte täckta av' },
    { source: '{0} covered by {1}', target: '{0} täckta av {1}' },
    { source: '{0} is not covered by {1}', target: '{0} är inte täckta av {1}' },

    // Activity log
    { source: 'No activities found', target: 'Inga aktiviteter hittades' },
    {
      source: 'Start to working with data to log activities.',
      target: 'Börja arbeta med data för att logga aktiviteter.'
    },
    { source: 'All Activity', target: 'All aktivitet' },
    { source: 'Create Record', target: 'Skapa post' },
    { source: 'Update Record', target: 'Uppdatera post' },
    { source: 'Delete Record', target: 'Ta bort post' },
    { source: 'All Members', target: 'Alla medlemmar' },

    // Collaboration
    { source: 'Timeline', target: 'Tidslinje' },
    { source: 'Messages', target: 'Meddelanden' },
    { source: 'Activity', target: 'Aktivitet' },
    { source: 'Start chatting with your team', target: 'Börja chatta med ditt team' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'Skicka ett meddelande om aktuell sida för att hålla koll på viktig information.'
    },
    { source: 'Your Message', target: 'Ditt meddelande' },
    { source: 'Send', target: 'Skicka' },

    // Share
    { source: 'Invite members', target: 'Bjud in medlemmar' },
    { source: 'Public share', target: 'Offentlig delning' },
    { source: 'Sign Up', target: 'Registrera' },
    { source: 'Members', target: 'Medlemmar' },
    { source: 'Invite with Email', target: 'Bjud in med e-post' },
    { source: 'Invite someone...', target: 'Bjud in någon...' },
    { source: 'Send Invite', target: 'Skicka inbjudan' },
    {
      source: 'Limit access to your data by user properties',
      target: 'Begränsa åtkomst till dina data enligt användaregenskaper'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: 'Ange e-postadressen till den användare du vill bjuda in för att samarbeta.'
    },
    { source: 'Copy', target: 'Kopiera' },
    { source: 'Invite with Link', target: 'Bjud in med länk' },
    { source: 'Remove link', target: 'Ta bort länk' },
    { source: 'Add Invite Link', target: 'Lägg till inbjudningslänk' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'Alla på nätet med denna länk kan gå med i det valda teamet.'
    },
    { source: 'Pending Invites', target: 'Väntande inbjudningar' },
    { source: 'Cancel invite', target: 'Avbryt inbjudan' },
    { source: 'Active Members', target: 'Aktiva medlemmar' },
    { source: 'Remove member', target: 'Ta bort medlem' },
    {
      source: 'You are setting sharing for the current page',
      target: 'Du ställer in delning för den aktuella sidan'
    },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'Du ställer in delning för alla sidor i din App.'
    },
    { source: 'Public access link', target: 'Länk för offentlig åtkomst' },
    { source: 'Updating public access...', target: 'Uppdaterar offentlig åtkomst...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'Alla med denna länk kommer att kunna se aktuell sida. På så sätt kan du även bädda in aktuell sida i en annan webbplats.'
    },
    { source: 'Embed code (IFRAME)', target: 'Inbäddningskod (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: 'Klistra in denna kod i HTML-koden på din webbplats där du vill att den aktuella sidan ska visas.'
    },
    { source: 'link', target: 'länk' },
    { source: 'invited', target: 'inbjuden' },
    { source: 'Choose Team', target: 'Välj team' },
    { source: 'App Teams', target: 'Appteam' },
    { source: 'Built-In Teams', target: 'Inbyggda team' },
    { source: 'Clear Team', target: 'Klara teamet' },
    { source: 'Can build application and modify data', target: 'Kan bygga applikation och ändra data' },
    { source: 'Can modify data in application', target: 'Kan ändra data i applikation' },
    { source: 'Can only view data without modification', target: 'Kan endast se data utan ändring' },
    { source: 'Add Team', target: 'Lägg till team' },
    { source: 'Edit Team', target: 'Redigera team' },
    { source: 'Adding Team', target: 'Lägger till team' },
    {
      source: 'Keep control over who has access to current App',
      target: 'Behåll kontroll över vem som har tillgång till aktuell App'
    },
    { source: 'Enter Team Name', target: 'Ange teamnamn' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'Skriv in teamnamn, t.ex.: Support, Försäljning, Marknadsföring, etc.'
    },
    { source: 'Add a new member to this team.', target: 'Lägg till en ny medlem i detta team.' },
    { source: 'Invite new member', target: 'Bjud in ny medlem' },
    { source: 'User', target: 'Användare' },
    { source: 'Date Added', target: 'Datum tillagt' },
    { source: 'You', target: 'Du' },
    { source: 'Edit', target: 'Redigera' },
    { source: 'No users in this team', target: 'Inga användare i detta team' },
    { source: 'Page Permissions', target: 'Sidåtkomsträttigheter' },
    { source: 'App Permissions', target: 'Appåtkomsträttigheter' },
    { source: 'Properties', target: 'Egenskaper' },
    { source: 'Page name', target: 'Sidnamn' },
    { source: 'Access', target: 'Åtkomst' },
    { source: 'Full Access', target: 'Full åtkomst' },
    { source: 'Read Only', target: 'Endast läsning' },
    { source: 'No Access', target: 'Ingen åtkomst' },
    { source: 'Read', target: 'Läs' },
    { source: 'Update', target: 'Uppdatera' },
    { source: 'Write', target: 'Skriv' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'Radera' },
    { source: 'Custom Access', target: 'Anpassad åtkomst' },
    { source: 'Read, create, update and delete data', target: 'Läsa, skapa, uppdatera och radera data' },
    { source: 'Choose allowed operations granularly', target: 'Välj tillåtna operationer detaljerat' },
    { source: 'Without any access to data', target: 'Utan någon åtkomst till data' },
    { source: 'Name', target: 'Namn' },
    { source: 'Active', target: 'Aktiv' },
    { source: 'Settings', target: 'Inställningar' },
    { source: 'Members and Teams', target: 'Medlemmar och Team' },
    { source: 'App Builder', target: 'App Builder' },
    { source: 'Collection Permissions', target: 'Behörigheter för samlingar' },
    { source: "Grant permissions to app's collection", target: 'Bevilja behörigheter till apps samling' },
    { source: 'Collection', target: 'Samling' },
    {
      source: 'Limit access to your data by team properties',
      target: 'Begränsa åtkomst till dina data via teamets egenskaper'
    },
    { source: 'Save Team', target: 'Spara team' },
    { source: 'Create Team', target: 'Skapa team' },
    { source: 'Value', target: 'Värde' },
    { source: 'No properties specified', target: 'Inga egenskaper angivna' },

    // Navigation
    { source: 'Current App', target: 'Aktuell app' },
    { source: 'Home', target: 'Hem' },

    // Profile
    {
      source: 'We are fetching user data, please, wait...',
      target: 'Vi hämtar användardata, vänta lite...'
    },
    { source: 'Profile Settings', target: 'Profilinställningar' },
    { source: 'Basic information about your account.', target: 'Grundläggande information om ditt konto.' },
    { source: 'Photo', target: 'Foto' },
    { source: 'your photo', target: 'ditt foto' },
    { source: 'Change', target: 'Ändra' },
    { source: 'Upload', target: 'Ladda upp' },
    { source: 'Photo was successfully updated', target: 'Foto uppdaterades framgångsrikt' },
    { source: 'Photo was successfully deleted', target: 'Foto raderades framgångsrikt' },
    { source: 'First Name', target: 'Förnamn' },
    { source: 'Last Name', target: 'Efternamn' },
    { source: 'Your Email', target: 'Din e-post' },
    { source: 'Email Change', target: 'Ändra e-post' },
    { source: 'New Email', target: 'Ny e-post' },
    { source: 'Change Email', target: 'Ändra e-post' },
    { source: 'Check your inbox', target: 'Kontrollera din inkorg' },
    { source: 'Confirmation Email was sent to {0}', target: 'Bekräftelse-e-post skickades till {0}' },
    { source: 'Changing Email failed', target: 'Ändra e-post misslyckades' },
    { source: 'Password Change', target: 'Ändra lösenord' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target: 'Ett lösenord bör vara tillräckligt starkt för att skydda ditt konto, så gör det minst 12 tecken långt.'
    },
    { source: 'Current Password', target: 'Nuvarande lösenord' },
    { source: 'New Password', target: 'Nytt lösenord' },
    { source: 'Confirm New Password', target: 'Bekräfta nytt lösenord' },
    { source: 'Change Password', target: 'Byt lösenord' },
    {
      source: 'Current password was successfully updated, all other sessions will be logged out shortly',
      target: 'Det aktuella lösenordet har uppdaterats framgångsrikt, alla andra sessioner loggas ut snart'
    },
    { source: 'Saving current password failed', target: 'Spara aktuellt lösenord misslyckades' },
    { source: 'Short password', target: 'Kort lösenord' },
    { source: "Passwords don't match", target: 'Lösenorden matchar inte' },
    { source: 'Personal Preferences', target: 'Personliga inställningar' },
    { source: 'Language', target: 'Språk' },
    { source: 'Timezone', target: 'Tidszon' },
    { source: 'Current time in {0} is', target: 'Aktuell tid i {0} är' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'Anpassa ytterligare inställningar för ditt konto.'
    },
    { source: 'News & Proposals', target: 'Nyheter & förslag' },
    {
      source: 'Subscribe to our updates and proposals.',
      target: 'Prenumerera på våra uppdateringar och förslag.'
    },
    { source: 'Save changes', target: 'Spara ändringar' },
    {
      source: 'Current user was successfully updated',
      target: 'Den aktuella användaren har uppdaterats framgångsrikt'
    },
    { source: 'Saving current user failed', target: 'Spara aktuell användare misslyckades' },

    // My Apps
    { source: 'Type to search...', target: 'Skriv för att söka...' },
    { source: 'My Apps', target: 'Mina appar' },
    { source: 'New App', target: 'Ny app' },
    { source: 'Builder', target: 'Byggare' },
    { source: 'App', target: 'App' },
    { source: 'continue install', target: 'fortsätt installation' },
    { source: 'Open builder', target: 'Öppna byggare' },
    { source: 'View published', target: 'Visa publicerad' },
    { source: 'Delete App', target: 'Radera app' },
    { source: 'Start from a template', target: 'Starta från en mall' },
    { source: 'Preview', target: 'Förhandsvisning' },
    { source: 'Contact Support', target: 'Kontakta support' },
    { source: 'Documentation', target: 'Dokumentation' },
    { source: 'Feature Requests', target: 'Funktionsförfrågningar' },
    { source: 'See What’s New', target: 'Se vad som är nytt' },
    { source: 'Search templates...', target: 'Sök mallar...' },
    { source: 'any', target: 'någon' },
    { source: 'more', target: 'mer' },
    { source: 'Choose Data Source', target: 'Välj datakälla' },
    { source: 'works with 30+ data sources', target: 'fungerar med 30+ datakällor' },
    { source: 'Use this template', target: 'Använd denna mall' },
    { source: 'stores data in Jet Tables', target: 'lagrar data i Jet Tables' },
    { source: 'New Data', target: 'Nya data' },
    { source: 'using {0}', target: 'använder {0}' },
    { source: "Can't find resource you're looking for?", target: 'Hittar du inte resursen du letar efter?' },
    { source: 'Admin Panel', target: 'Adminpanel' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'Lista, skapa och uppdatera (CRUD) operationer över dina data'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target: 'Bygg en anpassad adminpanel baserad på databaser, appar och API:er som Stripe, Twilio och GraphQL.'
    },
    { source: 'All Integrations', target: 'Alla integrationer' },
    { source: 'Databases', target: 'Databaser' },
    { source: 'APIs', target: 'API:er' },
    { source: 'Frameworks', target: 'Ramverk' },
    { source: 'Storages', target: 'Lagringar' },

    // Sign In
    { source: 'Good morning', target: 'God morgon' },
    { source: 'Good afternoon', target: 'God eftermiddag' },
    { source: 'Good evening', target: 'God kväll' },
    { source: 'Sign In', target: 'Logga in' },
    { source: 'Welcome Back.', target: 'Välkommen tillbaka.' },
    { source: 'Sign in with {0}', target: 'Logga in med {0}' },
    { source: 'or login with', target: 'eller logga in med' },
    { source: 'Enter E-mail', target: 'Ange e-post' },
    { source: 'Enter password', target: 'Ange lösenord' },
    { source: 'Login', target: 'Logga in' },
    { source: 'Create new account', target: 'Skapa nytt konto' },
    { source: 'Forgot my password', target: 'Glömt mitt lösenord' },
    { source: 'required', target: 'krävs' },
    { source: 'incorrect Email', target: 'felaktig e-post' },
    { source: 'Minimum password length {0}', target: 'Minsta lösenordslängd {0}' },
    { source: 'Unable to Sign In', target: 'Kan inte logga in' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'Kom igång <span class="auth-form__accent">Gratis idag</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target: 'Inget kort krävs. Du får alla avancerade funktioner gratis under 14-dagars PRO-provperioden.'
    },
    { source: 'Enter First Name', target: 'Ange förnamn' },
    { source: 'Enter Last Name (optional)', target: 'Ange efternamn (valfritt)' },
    { source: 'Enter Email', target: 'Ange e-postadress' },
    { source: 'Password', target: 'Lösenord' },
    { source: 'Repeat Password', target: 'Upprepa lösenord' },
    {
      source: 'By signing in you’re okay with our',
      target: 'Genom att logga in godkänner du våra'
    },
    {
      source: 'Creating an account means you’re okay with our',
      target: 'Att skapa ett konto innebär att du godkänner våra'
    },
    { source: 'Terms of Service', target: 'Användarvillkor' },
    { source: 'Privacy Policy', target: 'Integritetspolicy' },
    { source: 'and', target: 'och' },
    { source: 'Create your free account', target: 'Skapa ditt gratis konto' },
    { source: 'Already have an account', target: 'Har du redan ett konto' },
    { source: 'Unable to Sign Up', target: 'Kan inte registrera mig' },

    // Restore password
    { source: 'Reset your password', target: 'Återställ ditt lösenord' },
    { source: 'Email Address', target: 'E-postadress' },
    { source: 'Reset password', target: 'Återställ lösenord' },
    { source: 'Return to Sign In', target: 'Återvänd till inloggning' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'Kontrollera din e-post – <strong>{0}</strong>. Vi har skickat valideringslänken du ska följa för att byta ditt lösenord.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be al least 8 characters.',
      target: 'Nästan klart, ange bara ditt nya lösenord nedan. <br> Måste vara minst 8 tecken.'
    },
    { source: 'Reset password & Sign In', target: 'Återställ lösenord och logga in' },
    { source: 'Unable to Send Code', target: 'Kan inte skicka kod' },
    { source: 'Unable to Change Password', target: 'Kan inte ändra lösenord' },

    // Email Verification
    { source: 'Email Verification', target: 'E-postverifiering' },
    { source: 'Resend verification code', target: 'Skicka verifieringskod igen' },
    { source: 'Verification email sent', target: 'Verifierings-e-post skickad' },
    { source: 'Your Email is now verified', target: 'Din e-post är nu verifierad' },
    { source: 'Request is incorrect', target: 'Begäran är felaktig' },

    // Invites
    {
      source: 'Join <span class="auth-form__accent">{0}</span>',
      target: 'Gå med i <span class="auth-form__accent">{0}</span>'
    },
    {
      source: '<strong>{0}</strong> has invited you to join <strong>{1}</strong>',
      target: '<strong>{0}</strong> har bjudit in dig att gå med i <strong>{1}</strong>'
    },
    {
      source: 'Someone has invited you to join <strong>{0}</strong>',
      target: 'Någon har bjudit in dig att gå med i <strong>{0}</strong>'
    },
    {
      source: 'You are joining <strong>{0}</strong> using invite link',
      target: 'Du går med i <strong>{0}</strong> med hjälp av inbjudningslänken'
    },
    { source: 'Join', target: 'Gå med' },
    { source: 'Go to home page', target: 'Gå till förstasidan' },
    { source: 'Invite link is wrong', target: 'Inbjudningslänken är felaktig' },
    {
      source:
        'Looks like your invitation link has expired or maybe you have followed the wrong link. Please try to ask to invite your again.',
      target:
        'Det verkar som att din inbjudningslänk har gått ut eller så har du kanske följt fel länk. Försök att fråga om inbjudan igen.'
    },
    {
      source: 'Unfortunately we failed to load information about this invitation',
      target: 'Tyvärr lyckades vi inte ladda information om denna inbjudan'
    },

    // Users & Teams
    { source: 'Members of {0}', target: 'Medlemmar i {0}' },
    { source: 'How to get started', target: 'Hur man börjar' },
    { source: 'Users API', target: 'Användar-API' },
    { source: 'Teams API', target: 'Team-API' },
    { source: 'Invite Member', target: 'Bjud in medlem' },
    { source: 'Add User property', target: 'Lägg till användaregenskap' },
    { source: 'Add Team property', target: 'Lägg till teemegenskap' },
    { source: 'Edit property', target: 'Redigera egenskap' },
    { source: 'Delete property', target: 'Radera egenskap' },
    { source: 'Users', target: 'Användare' },
    { source: 'Teams', target: 'Team' },
    { source: 'Search members', target: 'Sök medlemmar' },
    { source: 'Search teams', target: 'Sök team' },
    { source: '{0} pages', target: '{0} sidor' },
    { source: 'No members', target: 'Inga medlemmar' }
  ]
};

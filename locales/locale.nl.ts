import { Locale } from './locale';

export const locale: Locale = {
  name: 'dutch',
  language: 'nl',
  items: [
    // General
    { source: 'Save', target: 'Opslaan' },
    { source: 'Create', target: 'Aanmaken' },
    { source: 'Duplicating', target: 'Dupliceren' },
    { source: 'Duplicate', target: 'Dupliceer' },
    { source: 'Mass Edit', target: 'Massabewerking' },
    { source: 'Export', target: 'Exporteren' },
    { source: 'Import', target: 'Importeren' },
    { source: 'Delete', target: 'Verwijderen' },
    { source: 'Continue', target: 'Doorgaan' },
    { source: 'Submit', target: 'Indienen' },
    { source: 'Cancel', target: 'Annuleren' },
    { source: 'Loading', target: 'Laden' },
    { source: 'Please wait...', target: 'Even geduld aub...' },
    { source: 'Loading failed', target: 'Laden mislukt' },
    { source: 'Unknown error', target: 'Onbekende fout' },
    { source: 'Add', target: 'Toevoegen' },
    { source: 'or', target: 'of' },
    { source: 'Hours', target: 'Uren' },
    { source: 'Minutes', target: 'Minuten' },
    { source: 'Seconds', target: 'Seconden' },
    { source: 'Saved', target: 'Opgeslagen' },
    { source: 'Error', target: 'Fout' },
    { source: 'Page not found', target: 'Pagina niet gevonden' },
    {
      source: 'The specified address is incorrect, or the page does not exist',
      target: 'Het opgegeven adres is onjuist, of de pagina bestaat niet'
    },
    { source: 'Not allowed', target: 'Niet toegestaan' },
    {
      source: "You don't have permissions to access this page",
      target: 'U heeft geen toestemming om deze pagina te bekijken'
    },
    { source: 'Are you sure want to close?', target: 'Weet u zeker dat u wilt afsluiten?' },
    { source: 'Close', target: 'Sluiten' },

    // Actions
    { source: 'Action executed', target: 'Actie uitgevoerd' },
    { source: 'Action executed successfully', target: 'Actie succesvol uitgevoerd' },
    { source: 'Action failed', target: 'Actie mislukt' },
    {
      source: "You don't have permission for run this operation",
      target: 'U heeft geen toestemming om deze operatie uit te voeren'
    },
    { source: 'Specify parameters', target: 'Specificeer parameters' },
    { source: 'Executing action', target: 'Actie wordt uitgevoerd' },
    { source: 'You are executing <strong>{0}</strong>', target: 'U voert <strong>{0}</strong> uit' },
    { source: 'Please fill in the parameters below.', target: 'Vul a.u.b. de onderstaande parameters in.' },
    { source: 'Execute', target: 'Uitvoeren' },
    { source: 'Executing', target: 'Uitvoeren' },
    { source: 'Finished', target: 'Voltooid' },
    { source: 'Done', target: 'Klaar' },

    // Export
    { source: 'Records Export', target: 'Gegevens exporteren' },
    { source: 'Downloading records data as a file', target: 'Gegevens worden gedownload als bestand' },
    { source: 'Choose format', target: 'Kies formaat' },
    { source: 'Number of exporting records', target: 'Aantal te exporteren gegevens' },
    { source: { label: 'Export', context: 'submit' }, target: 'Exporteren' },
    { source: 'Exporting', target: 'Exporteren' },
    { source: 'Export completed', target: 'Export voltooid' },
    { source: 'Failed to export', target: 'Exporteren mislukt' },

    // Components
    { source: 'optional', target: 'optioneel' },
    { source: 'choose', target: 'kiezen' },
    { source: 'Clear value', target: 'Waarde wissen' },
    { source: 'loading...', target: 'laden...' },
    { source: 'Nothing found', target: 'Niets gevonden' },
    { source: 'Search...', target: 'Zoeken...' },
    { source: 'Enter at least {0} characters', target: 'Voer minimaal {0} tekens in' },
    { source: 'No options', target: 'Geen opties' },
    { source: 'Drop files here or', target: 'Sleep hier bestanden heen of' },
    { source: 'Upload new', target: 'Nieuw uploaden' },
    { source: 'Clear', target: 'Wissen' },
    { source: 'Download', target: 'Downloaden' },
    { source: 'Choose file', target: 'Kies bestand' },
    { source: 'Choose files', target: 'Kies bestanden' },
    { source: 'Scan with Camera', target: 'Scannen met camera' },
    { source: 'Scan Image file', target: 'Scannen beeldbestand' },
    { source: 'Choose camera', target: 'Kies camera' },
    { source: 'Stop scanning', target: 'Stop scannen' },
    { source: 'Scan again', target: 'Opnieuw scannen' },
    { source: 'Use this scan', target: 'Gebruik deze scan' },
    { source: 'Failed to scan', target: 'Scannen mislukt' },
    {
      source: 'Code failed to scan, please try another image',
      target: 'Code kon niet gescand worden, probeer een andere afbeelding'
    },
    { source: 'current', target: 'huidig' },
    { source: 'Day', target: 'Dag' },
    { source: 'Week', target: 'Week' },
    { source: 'Month', target: 'Maand' },
    { source: 'Year', target: 'Jaar' },
    { source: 'Today', target: 'Vandaag' },
    { source: 'Daily', target: 'Dagelijks' },
    { source: 'Weekly', target: 'Wekelijks' },
    { source: 'Monthly', target: 'Maandelijks' },
    { source: 'Quarterly', target: 'Per kwartaal' },
    { source: 'Yearly', target: 'Jaarlijks' },
    { source: 'Hourly', target: 'Per uur' },
    { source: 'Minutely', target: 'Per minuut' },
    { source: 'Since', target: 'Sinds' },
    { source: 'Before', target: 'Voor' },
    { source: 'Between', target: 'Tussen' },
    { source: 'From date', target: 'Vanaf datum' },
    { source: 'To date', target: 'Tot datum' },
    { source: 'Coordinates', target: 'Coördinaten' },
    { source: 'Latitude', target: 'Breedtegraad' },
    { source: 'Longitude', target: 'Lengtegraad' },
    { source: 'Default color', target: 'Standaardkleur' },
    { source: 'not specified', target: 'niet gespecificeerd' },
    { source: 'Sign using your finger or pointer', target: 'Onderteken met uw vinger of pointer' },

    // List components
    { source: 'Filter', target: 'Filter' },
    { source: 'Filter by field', target: 'Filteren op veld' },
    { source: 'Filter by...', target: 'Filteren op...' },
    { source: 'Back', target: 'Terug' },
    { source: 'Back to {0} fields', target: 'Terug naar {0} velden' },
    { source: 'Choose {0} from list', target: 'Kies {0} uit lijst' },
    { source: '{0} fields', target: '{0} velden' },
    { source: '{0} relationships', target: '{0} relaties' },
    { source: 'Aggregate {0}', target: 'Aggregeer {0}' },
    { source: 'No fields to select', target: 'Geen velden om te selecteren' },
    { source: 'Enter value...', target: 'Voer waarde in...' },
    { source: 'Exclude', target: 'Uitsluiten' },
    { source: 'Actions', target: 'Acties' },
    { source: 'Search', target: 'Zoeken' },
    { source: 'Sort 1 → 9', target: 'Sorteren 1 → 9' },
    { source: 'Sort 9 → 1', target: 'Sorteren 9 → 1' },
    { source: 'Sort A → Z', target: 'Sorteren A → Z' },
    { source: 'Sort Z → A', target: 'Sorteren Z → A' },
    { source: 'Refresh automatically', target: 'Automatisch vernieuwen' },
    { source: 'All', target: 'Alles' },
    { source: 'Selected', target: 'Geselecteerd' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'Helaas, geen {0} gevonden die aan uw query voldoen'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'We halen {0} op, even geduld aub...' },
    { source: 'Add filter', target: 'Filter toevoegen' },
    { source: 'Delete this filter', target: 'Verwijder dit filter' },
    { source: 'Toggle ordering', target: 'Volgorde wisselen' },
    { source: 'Not configured', target: 'Niet geconfigureerd' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'Helaas, deze component is nog niet geconfigureerd'
    },
    { source: 'records', target: 'gegevens' },
    { source: '{0} items', target: '{0} items' },

    // Menu
    { source: 'Users & Teams', target: 'Gebruikers & Teams' },
    { source: 'Billing', target: 'Facturatie' },
    { source: 'Billing & Plans', target: 'Facturatie & Abonnementen' },
    { source: 'API keys', target: 'API-sleutels' },
    { source: 'Dark Mode', target: 'Donkere modus' },
    { source: 'Light Mode', target: 'Lichte modus' },
    { source: 'Disable Staff', target: 'Schakel personeel uit' },
    { source: 'Enable Staff', target: 'Schakel personeel in' },
    { source: 'Manage Templates', target: 'Beheer sjablonen' },
    { source: 'Logout', target: 'Uitloggen' },
    { source: 'Activity Log', target: 'Activiteitenlog' },
    { source: 'Collaborations', target: 'Samenwerkingen' },
    { source: 'Open Visual Builder', target: 'Open Visuele Bouwer' },

    // Filters
    { source: 'equals', target: 'gelijk aan' },
    { source: 'does not equal', target: 'niet gelijk aan' },
    { source: '{0} equals {1}', target: '{0} gelijk aan {1}' },
    { source: '{0} does not equal {1}', target: '{0} niet gelijk aan {1}' },

    { source: 'contains', target: 'bevat' },
    { source: 'does not contain', target: 'bevat niet' },
    { source: '{0} contains {1}', target: '{0} bevat {1}' },
    { source: '{0} not contains {1}', target: '{0} bevat niet {1}' },

    { source: 'starts with', target: 'begint met' },
    { source: 'does not start with', target: 'begint niet met' },
    { source: '{0} starts with {1}', target: '{0} begint met {1}' },
    { source: '{0} does not start with {1}', target: '{0} begint niet met {1}' },

    { source: 'ends with', target: 'eindigt met' },
    { source: 'does not end with', target: 'eindigt niet met' },
    { source: '{0} ends with {1}', target: '{0} eindigt met {1}' },
    { source: '{0} does not end with {1}', target: '{0} eindigt niet met {1}' },

    { source: 'greater than', target: 'groter dan' },
    { source: 'is not greater than', target: 'is niet groter dan' },
    { source: '{0} is greater than {1}', target: '{0} is groter dan {1}' },
    { source: '{0} not greater than {1}', target: '{0} niet groter dan {1}' },

    { source: 'greater than or equals', target: 'groter dan of gelijk aan' },
    { source: 'is not greater than or equals', target: 'is niet groter dan of gelijk aan' },
    { source: '{0} is greater than or equals {1}', target: '{0} is groter dan of gelijk aan {1}' },
    { source: '{0} is not greater than or equals {1}', target: '{0} niet groter dan of gelijk aan {1}' },

    { source: 'less than', target: 'minder dan' },
    { source: 'is not less than', target: 'is niet minder dan' },
    { source: '{0} is less than {1}', target: '{0} is minder dan {1}' },
    { source: '{0} is not less than {1}', target: '{0} is niet minder dan {1}' },

    { source: 'less than or equals', target: 'minder dan of gelijk aan' },
    { source: 'is not less than or equals', target: 'is niet minder dan of gelijk aan' },
    { source: '{0} is less than or equals {1}', target: '{0} minder dan of gelijk aan {1}' },
    { source: '{0} is not less than or equals {1}', target: '{0} niet minder dan of gelijk aan {1}' },

    { source: 'one of', target: 'een van' },
    { source: 'is one of', target: 'is een van' },
    { source: 'is not one of', target: 'is niet een van' },
    { source: '{0} is one of {1}', target: '{0} is een van {1}' },
    { source: '{0} is not one of {1}', target: '{0} is niet een van {1}' },

    { source: 'is null', target: 'is null' },
    { source: 'is not null', target: 'is niet null' },
    { source: '{0} is null', target: '{0} is null' },
    { source: '{0} is not null', target: '{0} is niet null' },

    { source: 'is future', target: 'is in de toekomst' },
    { source: 'in the future', target: 'in de toekomst' },
    { source: 'is not in the future', target: 'is niet in de toekomst' },
    { source: '{0} is in the future', target: '{0} is in de toekomst' },
    { source: '{0} is not in the future', target: '{0} is niet in de toekomst' },

    { source: 'is past', target: 'is in het verleden' },
    { source: 'in the past', target: 'in het verleden' },
    { source: 'is not in the past', target: 'is niet in het verleden' },
    { source: '{0} is in the past', target: '{0} is in het verleden' },
    { source: '{0} is not in the past', target: '{0} is niet in het verleden' },

    { source: 'is Today', target: 'is vandaag' },
    { source: 'today', target: 'vandaag' },
    { source: 'is not today', target: 'is niet vandaag' },
    { source: '{0} is today', target: '{0} is vandaag' },
    { source: '{0} is not today', target: '{0} is niet vandaag' },

    { source: 'is Yesterday', target: 'was gisteren' },
    { source: 'yesterday', target: 'gisteren' },
    { source: 'is not yesterday', target: 'is niet gisteren' },
    { source: '{0} is yesterday', target: '{0} was gisteren' },
    { source: '{0} is not yesterday', target: '{0} is niet gisteren' },

    { source: 'is Last Week', target: 'was vorige week' },
    { source: 'last week', target: 'vorige week' },
    { source: 'is not last week', target: 'is niet vorige week' },
    { source: '{0} is last week', target: '{0} was vorige week' },
    { source: '{0} is not last week', target: '{0} is niet vorige week' },

    { source: 'is Last Month', target: 'was vorige maand' },
    { source: 'last month', target: 'vorige maand' },
    { source: 'is not last month', target: 'is niet vorige maand' },
    { source: '{0} is last month', target: '{0} was vorige maand' },
    { source: '{0} is not last month', target: '{0} is niet vorige maand' },

    { source: 'is Last Quarter', target: 'was vorig kwartaal' },
    { source: 'last quarter', target: 'vorig kwartaal' },
    { source: 'is not last quarter', target: 'is niet vorig kwartaal' },
    { source: '{0} is last quarter', target: '{0} was vorig kwartaal' },
    { source: '{0} is not last quarter', target: '{0} is niet vorig kwartaal' },

    { source: 'is Last Year', target: 'was vorig jaar' },
    { source: 'last year', target: 'vorig jaar' },
    { source: 'is not last year', target: 'is niet vorig jaar' },
    { source: '{0} is last year', target: '{0} was vorig jaar' },
    { source: '{0} is not last year', target: '{0} is niet vorig jaar' },

    { source: 'is Last X Days', target: 'was afgelopen X dagen' },
    { source: 'last X days', target: 'afgelopen X dagen' },
    { source: 'is not last X days', target: 'is niet afgelopen X dagen' },
    { source: '{0} is last {1} days', target: '{0} was afgelopen {1} dagen' },
    { source: '{0} is not last {1} days', target: '{0} is niet afgelopen {1} dagen' },

    { source: 'is Current Week', target: 'is deze week' },
    { source: 'current week', target: 'deze week' },
    { source: 'is not current week', target: 'is niet deze week' },
    { source: '{0} is current week', target: '{0} is deze week' },
    { source: '{0} is not current week', target: '{0} is niet deze week' },

    { source: 'is Current Month', target: 'is deze maand' },
    { source: 'current month', target: 'deze maand' },
    { source: 'is not current month', target: 'is niet deze maand' },
    { source: '{0} is current month', target: '{0} is deze maand' },
    { source: '{0} is not current month', target: '{0} is niet deze maand' },

    { source: 'is Current Quarter', target: 'is dit kwartaal' },
    { source: 'current quarter', target: 'dit kwartaal' },
    { source: 'is not current quarter', target: 'is niet dit kwartaal' },
    { source: '{0} is current quarter', target: '{0} is dit kwartaal' },
    { source: '{0} is not current quarter', target: '{0} is niet dit kwartaal' },

    { source: 'is Current Year', target: 'is dit jaar' },
    { source: 'current year', target: 'dit jaar' },
    { source: 'is not current year', target: 'is niet dit jaar' },
    { source: '{0} is current year', target: '{0} is dit jaar' },
    { source: '{0} is not current year', target: '{0} is niet dit jaar' },

    { source: 'is Previous Week', target: 'was vorige week' },
    { source: 'previous week', target: 'vorige week' },
    { source: 'is not previous week', target: 'is niet vorige week' },
    { source: '{0} is previous week', target: '{0} was vorige week' },
    { source: '{0} is not previous week', target: '{0} is niet vorige week' },

    { source: 'is Previous Month', target: 'was vorige maand' },
    { source: 'previous month', target: 'vorige maand' },
    { source: 'is not previous month', target: 'is niet vorige maand' },
    { source: '{0} is previous month', target: '{0} was vorige maand' },
    { source: '{0} is not previous month', target: '{0} is niet vorige maand' },

    { source: 'is Previous Quarter', target: 'was vorig kwartaal' },
    { source: 'previous quarter', target: 'vorig kwartaal' },
    { source: 'is not previous quarter', target: 'is niet vorig kwartaal' },
    { source: '{0} is previous quarter', target: '{0} was vorig kwartaal' },
    { source: '{0} is not previous quarter', target: '{0} is niet vorig kwartaal' },

    { source: 'is Previous Year', target: 'was vorig jaar' },
    { source: 'previous year', target: 'vorig jaar' },
    { source: 'is not previous year', target: 'is niet vorig jaar' },
    { source: '{0} is previous year', target: '{0} was vorig jaar' },
    { source: '{0} is not previous year', target: '{0} is niet vorig jaar' },

    { source: 'is Previous X Days', target: 'was de afgelopen X dagen' },
    { source: 'previous X days', target: 'de afgelopen X dagen' },
    { source: 'is not previous X days', target: 'is niet de afgelopen X dagen' },
    { source: '{0} is previous {1} days', target: '{0} was de afgelopen {1} dagen' },
    { source: '{0} is not previous {1} days', target: '{0} is niet de afgelopen {1} dagen' },

    { source: 'is empty', target: 'is leeg' },
    { source: 'is not empty', target: 'is niet leeg' },
    { source: '{0} is empty', target: '{0} is leeg' },
    { source: '{0} is not empty', target: '{0} is niet leeg' },

    { source: 'covered by', target: 'gedekt door' },
    { source: 'is not covered by', target: 'is niet gedekt door' },
    { source: '{0} covered by {1}', target: '{0} gedekt door {1}' },
    { source: '{0} is not covered by {1}', target: '{0} is niet gedekt door {1}' },

    // Activity log
    { source: 'No activities found', target: 'Geen activiteiten gevonden' },
    {
      source: 'Start to working with data to log activities.',
      target: 'Begin met werken met gegevens om activiteiten bij te houden.'
    },
    { source: 'All Activity', target: 'Alle activiteit' },
    { source: 'Create Record', target: 'Record aanmaken' },
    { source: 'Update Record', target: 'Record bijwerken' },
    { source: 'Delete Record', target: 'Record verwijderen' },
    { source: 'All Members', target: 'Alle leden' },

    // Collaboration
    { source: 'Timeline', target: 'Tijdlijn' },
    { source: 'Messages', target: 'Berichten' },
    { source: 'Activity', target: 'Activiteit' },
    { source: 'Start chatting with your team', target: 'Begin met chatten met uw team' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'Neem een bericht over de huidige pagina om belangrijke info bij te houden.'
    },
    { source: 'Your Message', target: 'Uw bericht' },
    { source: 'Send', target: 'Versturen' },

    // Share
    { source: 'Invite members', target: 'Leden uitnodigen' },
    { source: 'Public share', target: 'Publiek delen' },
    { source: 'Sign Up', target: 'Aanmelden' },
    { source: 'Members', target: 'Leden' },
    { source: 'Invite with Email', target: 'Uitnodigen met e-mail' },
    { source: 'Invite someone...', target: 'Iemand uitnodigen...' },
    { source: 'Send Invite', target: 'Uitnodiging versturen' },
    {
      source: 'Limit access to your data by user properties',
      target: 'Beperk toegang tot uw gegevens via gebruikerskenmerken'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: 'Voer de e-mail in van de gebruiker die u wenst uit te nodigen voor samenwerking.'
    },
    { source: 'Copy', target: 'Kopiëren' },
    { source: 'Invite with Link', target: 'Uitnodigen met link' },
    { source: 'Remove link', target: 'Link verwijderen' },
    { source: 'Add Invite Link', target: 'Uitnodigingslink toevoegen' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'Iedereen op het internet met deze link kan zich bij het geselecteerde team aansluiten.'
    },
    { source: 'Pending Invites', target: 'In afwachting van uitnodigingen' },
    { source: 'Cancel invite', target: 'Uitnodiging annuleren' },
    { source: 'Active Members', target: 'Actieve leden' },
    { source: 'Remove member', target: 'Lid verwijderen' },
    { source: 'You are setting sharing for the current page', target: 'U stelt het delen in voor de huidige pagina' },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: "U stelt het delen in voor alle pagina's van uw app."
    },
    { source: 'Public access link', target: 'Link voor openbare toegang' },
    { source: 'Updating public access...', target: 'Openbare toegang bijwerken...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'Iedereen met deze link kan de huidige pagina bekijken. Op deze manier kunt u de huidige pagina ook in een andere website opnemen.'
    },
    { source: 'Embed code (IFRAME)', target: 'Insluitcode (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: 'Plak deze code in de HTML-code van uw website waar u de huidige pagina wilt laten verschijnen.'
    },
    { source: 'link', target: 'link' },
    { source: 'invited', target: 'uitgenodigd' },
    { source: 'Choose Team', target: 'Kies team' },
    { source: 'App Teams', target: 'App Teams' },
    { source: 'Built-In Teams', target: 'Ingebouwde teams' },
    { source: 'Clear Team', target: 'Team wissen' },
    { source: 'Can build application and modify data', target: 'Kan applicaties bouwen en gegevens wijzigen' },
    { source: 'Can modify data in application', target: 'Kan gegevens in de applicatie wijzigen' },
    { source: 'Can only view data without modification', target: 'Kan alleen gegevens bekijken zonder te wijzigen' },
    { source: 'Add Team', target: 'Team toevoegen' },
    { source: 'Edit Team', target: 'Team bewerken' },
    { source: 'Adding Team', target: 'Team toevoegen' },
    {
      source: 'Keep control over who has access to current App',
      target: 'Houd controle over wie toegang heeft tot de huidige app'
    },
    { source: 'Enter Team Name', target: 'Voer teamnaam in' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'Typ de teamnaam, bijvoorbeeld: Support, Verkoop, Marketing, etc.'
    },
    { source: 'Add a new member to this team.', target: 'Voeg een nieuw lid toe aan dit team.' },
    { source: 'Invite new member', target: 'Nieuw lid uitnodigen' },
    { source: 'User', target: 'Gebruiker' },
    { source: 'Date Added', target: 'Datum toegevoegd' },
    { source: 'You', target: 'Jij' },
    { source: 'Edit', target: 'Bewerken' },
    { source: 'No users in this team', target: 'Geen gebruikers in dit team' },
    { source: 'Page Permissions', target: 'Paginapermissies' },
    { source: 'App Permissions', target: 'App-permissies' },
    { source: 'Properties', target: 'Eigenschappen' },
    { source: 'Page name', target: 'Paginanaam' },
    { source: 'Access', target: 'Toegang' },
    { source: 'Full Access', target: 'Volledige toegang' },
    { source: 'Read Only', target: 'Alleen lezen' },
    { source: 'No Access', target: 'Geen toegang' },
    { source: 'Read', target: 'Lezen' },
    { source: 'Update', target: 'Bijwerken' },
    { source: 'Write', target: 'Schrijven' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'Verwijderen' },
    { source: 'Custom Access', target: 'Aangepaste toegang' },
    { source: 'Read, create, update and delete data', target: 'Gegevens lezen, aanmaken, bijwerken en verwijderen' },
    { source: 'Choose allowed operations granularly', target: 'Kies toegestane bewerkingen gedetailleerd' },
    { source: 'Without any access to data', target: 'Zonder toegang tot gegevens' },
    { source: 'Name', target: 'Naam' },
    { source: 'Active', target: 'Actief' },
    { source: 'Settings', target: 'Instellingen' },
    { source: 'Members and Teams', target: 'Leden en Teams' },
    { source: 'App Builder', target: 'App Bouwer' },
    { source: 'Collection Permissions', target: 'Verzamelingsmachtigingen' },
    { source: "Grant permissions to app's collection", target: 'Verleen machtigingen aan de verzameling van de app' },
    { source: 'Collection', target: 'Verzameling' },
    {
      source: 'Limit access to your data by team properties',
      target: 'Beperk toegang tot uw gegevens via teameigenschappen'
    },
    { source: 'Save Team', target: 'Team opslaan' },
    { source: 'Create Team', target: 'Team aanmaken' },
    { source: 'Value', target: 'Waarde' },
    { source: 'No properties specified', target: 'Geen eigenschappen gespecificeerd' },

    // Navigation
    { source: 'Current App', target: 'Huidige App' },
    { source: 'Home', target: 'Home' },

    // Profile
    {
      source: 'We are fetching user data, please, wait...',
      target: 'We halen gebruikersgegevens op, even geduld aub...'
    },
    { source: 'Profile Settings', target: 'Profielinstellingen' },
    { source: 'Basic information about your account.', target: 'Basisinformatie over uw account.' },
    { source: 'Photo', target: 'Foto' },
    { source: 'your photo', target: 'uw foto' },
    { source: 'Change', target: 'Wijzigen' },
    { source: 'Upload', target: 'Uploaden' },
    { source: 'Photo was successfully updated', target: 'Foto is succesvol bijgewerkt' },
    { source: 'Photo was successfully deleted', target: 'Foto is succesvol verwijderd' },
    { source: 'First Name', target: 'Voornaam' },
    { source: 'Last Name', target: 'Achternaam' },
    { source: 'Your Email', target: 'Uw e-mail' },
    { source: 'Email Change', target: 'E-mail wijzigen' },
    { source: 'New Email', target: 'Nieuwe e-mail' },
    { source: 'Change Email', target: 'E-mail wijzigen' },
    { source: 'Check your inbox', target: 'Controleer uw inbox' },
    { source: 'Confirmation Email was sent to {0}', target: 'Bevestigings-e-mail is verzonden naar {0}' },
    { source: 'Changing Email failed', target: 'E-mail wijzigen mislukt' },
    { source: 'Password Change', target: 'Wachtwoord wijzigen' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target: 'Een wachtwoord moet sterk genoeg zijn om uw account te beschermen, dus maak het minstens 12 tekens lang.'
    },
    { source: 'Current Password', target: 'Huidig wachtwoord' },
    { source: 'New Password', target: 'Nieuw wachtwoord' },
    { source: 'Confirm New Password', target: 'Bevestig nieuw wachtwoord' },
    { source: 'Change Password', target: 'Wachtwoord wijzigen' },
    {
      source: 'Current password was successfully updated, all other sessions will be logged out shortly',
      target: 'Het huidige wachtwoord is succesvol bijgewerkt, alle andere sessies worden binnenkort afgemeld'
    },
    { source: 'Saving current password failed', target: 'Huidig wachtwoord opslaan mislukt' },
    { source: 'Short password', target: 'Kort wachtwoord' },
    { source: "Passwords don't match", target: 'Wachtwoorden komen niet overeen' },
    { source: 'Personal Preferences', target: 'Persoonlijke voorkeuren' },
    { source: 'Language', target: 'Taal' },
    { source: 'Timezone', target: 'Tijdzone' },
    { source: 'Current time in {0} is', target: 'Huidige tijd in {0} is' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'Pas extra voorkeuren voor uw account aan.'
    },
    { source: 'News & Proposals', target: 'Nieuws & Voorstellen' },
    {
      source: 'Subscribe to our updates and proposals.',
      target: 'Schrijf u in voor onze updates en voorstellen.'
    },
    { source: 'Save changes', target: 'Wijzigingen opslaan' },
    { source: 'Current user was successfully updated', target: 'Huidige gebruiker is succesvol bijgewerkt' },
    { source: 'Saving current user failed', target: 'Huidige gebruiker opslaan mislukt' },

    // My Apps
    { source: 'Type to search...', target: 'Typ om te zoeken...' },
    { source: 'My Apps', target: 'Mijn Apps' },
    { source: 'New App', target: 'Nieuwe App' },
    { source: 'Builder', target: 'Bouwer' },
    { source: 'App', target: 'App' },
    { source: 'continue install', target: 'installatie voortzetten' },
    { source: 'Open builder', target: 'Open bouwer' },
    { source: 'View published', target: 'Bekijk gepubliceerde' },
    { source: 'Delete App', target: 'App verwijderen' },
    { source: 'Start from a template', target: 'Start vanuit een sjabloon' },
    { source: 'Preview', target: 'Voorbeeld' },
    { source: 'Contact Support', target: 'Contact opnemen met support' },
    { source: 'Documentation', target: 'Documentatie' },
    { source: 'Feature Requests', target: 'Functieaanvragen' },
    { source: 'See What’s New', target: 'Bekijk wat is nieuw' },
    { source: 'Search templates...', target: 'Sjablonen doorzoeken...' },
    { source: 'any', target: 'elk' },
    { source: 'more', target: 'meer' },
    { source: 'Choose Data Source', target: 'Kies gegevensbron' },
    { source: 'works with 30+ data sources', target: 'werkt met meer dan 30 gegevensbronnen' },
    { source: 'Use this template', target: 'Gebruik deze sjabloon' },
    { source: 'stores data in Jet Tables', target: 'slaat gegevens op in Jet Tables' },
    { source: 'New Data', target: 'Nieuwe gegevens' },
    { source: 'using {0}', target: 'met {0}' },
    { source: "Can't find resource you're looking for?", target: 'Kan de bron die u zoekt niet vinden?' },
    { source: 'Admin Panel', target: 'Beheerderspaneel' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'Lijst, maak aan en werk (CRUD) bewerkingen bij bovenop uw gegevens'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target:
        "Bouw een aangepast beheerderspaneel op basis van alle databases, apps en API's zoals Stripe, Twilio en GraphQL."
    },
    { source: 'All Integrations', target: 'Alle integraties' },
    { source: 'Databases', target: 'Databases' },
    { source: 'APIs', target: "API's" },
    { source: 'Frameworks', target: 'Frameworks' },
    { source: 'Storages', target: 'Opslagruimtes' },

    // Sign In
    { source: 'Good morning', target: 'Goedemorgen' },
    { source: 'Good afternoon', target: 'Goedemiddag' },
    { source: 'Good evening', target: 'Goedenavond' },
    { source: 'Sign In', target: 'Inloggen' },
    { source: 'Welcome Back.', target: 'Welkom terug.' },
    { source: 'Sign in with {0}', target: 'Inloggen met {0}' },
    { source: 'or login with', target: 'of log in met' },
    { source: 'Enter E-mail', target: 'Voer e-mail in' },
    { source: 'Enter password', target: 'Voer wachtwoord in' },
    { source: 'Login', target: 'Inloggen' },
    { source: 'Create new account', target: 'Nieuw account aanmaken' },
    { source: 'Forgot my password', target: 'Wachtwoord vergeten' },
    { source: 'required', target: 'vereist' },
    { source: 'incorrect Email', target: 'onjuist e-mail' },
    { source: 'Minimum password length {0}', target: 'Minimale wachtwoordlengte {0}' },
    { source: 'Unable to Sign In', target: 'Niet mogelijk om in te loggen' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'Begin <span class="auth-form__accent">vandaag gratis</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target: 'Geen kaart vereist. U krijgt alle geavanceerde functies gratis tijdens de 14-daagse PRO proefperiode.'
    },
    { source: 'Enter First Name', target: 'Voer voornaam in' },
    { source: 'Enter Last Name (optional)', target: 'Voer achternaam in (optioneel)' },
    { source: 'Enter Email', target: 'Voer e-mail in' },
    { source: 'Password', target: 'Wachtwoord' },
    { source: 'Repeat Password', target: 'Herhaal wachtwoord' },
    { source: 'By signing in you’re okay with our', target: 'Door in te loggen gaat u akkoord met onze' },
    {
      source: 'Creating an account means you’re okay with our',
      target: 'Een account aanmaken betekent dat u akkoord gaat met onze'
    },
    { source: 'Terms of Service', target: 'Servicevoorwaarden' },
    { source: 'Privacy Policy', target: 'Privacybeleid' },
    { source: 'and', target: 'en' },
    { source: 'Create account', target: 'Account aanmaken' },
    { source: 'Already have an account', target: 'Heeft u al een account' },
    { source: 'Unable to Sign Up', target: 'Niet mogelijk om aan te melden' },

    // Restore password
    { source: 'Reset your password', target: 'Reset uw wachtwoord' },
    { source: 'Email Address', target: 'E-mailadres' },
    { source: 'Reset password', target: 'Wachtwoord opnieuw instellen' },
    { source: 'Return to Sign In', target: 'Terug naar inloggen' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'Controleer alstublieft uw e-mail – <strong>{0}</strong>. We hebben de validatielink verzonden die u moet volgen om uw wachtwoord te wijzigen.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be at least 8 characters.',
      target: 'Bijna klaar, voer hieronder uw nieuwe wachtwoord in. <br>Moet minstens 8 tekens bevatten.'
    },
    { source: 'Reset password & Sign In', target: 'Wachtwoord resetten & Inloggen' },
    { source: 'Unable to Send Code', target: 'Niet mogelijk om code te verzenden' },
    { source: 'Unable to Change Password', target: 'Niet mogelijk om wachtwoord te wijzigen' },

    // Email Verification
    { source: 'Email Verification', target: 'E-mailverificatie' },
    { source: 'Resend verification code', target: 'Verificatiecode opnieuw verzenden' },
    { source: 'Verification email sent', target: 'Verificatie-e-mail verzonden' },
    { source: 'Your Email is now verified', target: 'Uw e-mail is nu geverifieerd' },
    { source: 'Request is incorrect', target: 'Aanvraag is onjuist' },

    // Invites
    {
      source: 'Join <span class="auth-form__accent">{0}</span>',
      target: 'Deelnemen aan <span class="auth-form__accent">{0}</span>'
    },
    {
      source: '<strong>{0}</strong> has invited you to join <strong>{1}</strong>',
      target: '<strong>{0}</strong> heeft u uitgenodigd om deel te nemen aan <strong>{1}</strong>'
    },
    {
      source: 'Someone has invited you to join <strong>{0}</strong>',
      target: 'Iemand heeft u uitgenodigd om deel te nemen aan <strong>{0}</strong>'
    },
    {
      source: 'You are joining <strong>{0}</strong> using invite link',
      target: 'U treedt toe tot <strong>{0}</strong> met behulp van een uitnodigingslink'
    },
    { source: 'Join', target: 'Deelnemen' },
    { source: 'Go to home page', target: 'Ga naar homepagina' },
    { source: 'Invite link is wrong', target: 'Uitnodigingslink is onjuist' },
    {
      source:
        'Looks like your invitation link has expired or maybe you have followed the wrong link. Please try to ask to invite your again.',
      target:
        'Het lijkt erop dat uw uitnodigingslink is verlopen of misschien hebt u de verkeerde link gevolgd. Probeer opnieuw een uitnodiging te vragen.'
    },
    {
      source: 'Unfortunately we failed to load information about this invitation',
      target: 'Helaas is het ons niet gelukt om informatie over deze uitnodiging te laden'
    },

    // Users & Teams
    { source: 'Members of {0}', target: 'Leden van {0}' },
    { source: 'How to get started', target: 'Hoe te beginnen' },
    { source: 'Users API', target: 'API van gebruikers' },
    { source: 'Teams API', target: 'API van teams' },
    { source: 'Invite Member', target: 'Lid uitnodigen' },
    { source: 'Add User property', target: 'Gebruikerskenmerk toevoegen' },
    { source: 'Add Team property', target: 'Teamkenmerk toevoegen' },
    { source: 'Edit property', target: 'Kenmerk bewerken' },
    { source: 'Delete property', target: 'Kenmerk verwijderen' },
    { source: 'Users', target: 'Gebruikers' },
    { source: 'Teams', target: 'Teams' },
    { source: 'Search members', target: 'Leden zoeken' },
    { source: 'Search teams', target: 'Teams zoeken' },
    { source: '{0} pages', target: "{0} pagina's" },
    { source: 'No members', target: 'Geen leden' }
  ]
};

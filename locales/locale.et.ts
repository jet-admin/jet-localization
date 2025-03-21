import { Locale } from './locale';

export const locale: Locale = {
  name: 'estonian',
  language: 'et',
  items: [
    // General
    { source: 'Save', target: 'Salvesta' },
    { source: 'Create', target: 'Loo' },
    { source: 'Duplicating', target: 'Duplikaat' },
    { source: 'Duplicate', target: 'Dubleeri' },
    { source: 'Mass Edit', target: 'Massmuutmine' },
    { source: 'Export', target: 'Ekspordi' },
    { source: 'Import', target: 'Impordi' },
    { source: 'Delete', target: 'Kustuta' },
    { source: 'Continue', target: 'Jätka' },
    { source: 'Submit', target: 'Esita' },
    { source: 'Cancel', target: 'Tühista' },
    { source: 'Loading', target: 'Laadimine' },
    { source: 'Please wait...', target: 'Palun oodake...' },
    { source: 'Loading failed', target: 'Laadimine ebaõnnestus' },
    { source: 'Unknown error', target: 'Tundmatu viga' },
    { source: 'Add', target: 'Lisa' },
    { source: 'or', target: 'või' },
    { source: 'Hours', target: 'Tundi' },
    { source: 'Minutes', target: 'Minutit' },
    { source: 'Seconds', target: 'Sekundit' },
    { source: 'Saved', target: 'Salvestatud' },
    { source: 'Error', target: 'Viga' },
    { source: 'Page not found', target: 'Lehte ei leitud' },
    {
      source: 'The specified address is incorrect, or the page does not exist',
      target: 'Määratud aadress on vale või lehte ei eksisteeri'
    },
    { source: 'Not allowed', target: 'Pole lubatud' },
    {
      source: "You don't have permissions to access this page",
      target: 'Teil puuduvad õigused sellele lehele juurdepääsuks'
    },
    { source: 'Are you sure want to close?', target: 'Kas olete kindel, et soovite sulgeda?' },
    { source: 'Close', target: 'Sulge' },

    // Actions
    { source: 'Action executed', target: 'Tegevus sooritatud' },
    { source: 'Action executed successfully', target: 'Tegevus sooritatud edukalt' },
    { source: 'Action failed', target: 'Tegevus ebaõnnestus' },
    {
      source: "You don't have permission for run this operation",
      target: 'Teil puuduvad õigused selle toimingu läbiviimiseks'
    },
    { source: 'Specify parameters', target: 'Määrake parameetrid' },
    { source: 'Executing action', target: 'Tegevuse sooritamine' },
    { source: 'You are executing <strong>{0}</strong>', target: 'Te sooritate <strong>{0}</strong>' },
    { source: 'Please fill in the parameters below.', target: 'Palun täitke alltoodud parameetrid.' },
    { source: 'Execute', target: 'Soorita' },
    { source: 'Executing', target: 'Sooritamine' },
    { source: 'Finished', target: 'Lõpetatud' },
    { source: 'Done', target: 'Valmis' },

    // Export
    { source: 'Records Export', target: 'Andmete eksport' },
    { source: 'Downloading records data as a file', target: 'Andmete allalaadimine failina' },
    { source: 'Choose format', target: 'Valige formaat' },
    { source: 'Number of exporting records', target: 'Eksportivate andmete arv' },
    { source: { label: 'Export', context: 'submit' }, target: 'Ekspordi' },
    { source: 'Exporting', target: 'Eksportimine' },
    { source: 'Export completed', target: 'Eksport lõpetatud' },
    { source: 'Failed to export', target: 'Eksportimine ebaõnnestus' },

    // Components
    { source: 'optional', target: 'valikuline' },
    { source: 'choose', target: 'vali' },
    { source: 'Clear value', target: 'Puhasta väärtus' },
    { source: 'loading...', target: 'laen...' },
    { source: 'Nothing found', target: 'Midagi ei leitud' },
    { source: 'Search...', target: 'Otsing...' },
    { source: 'Enter at least {0} characters', target: 'Sisestage vähemalt {0} tähemärki' },
    { source: 'No options', target: 'Valikuid pole' },
    { source: 'Drop files here or', target: 'Lohistage failid siia või' },
    { source: 'Upload new', target: 'Laadi üles uus' },
    { source: 'Clear', target: 'Puhasta' },
    { source: 'Download', target: 'Laadi alla' },
    { source: 'Choose file', target: 'Valige fail' },
    { source: 'Choose files', target: 'Valige failid' },
    { source: 'Scan with Camera', target: 'Skanni kaameraga' },
    { source: 'Scan Image file', target: 'Skanni pildifail' },
    { source: 'Choose camera', target: 'Valige kaamera' },
    { source: 'Stop scanning', target: 'Peata skannimine' },
    { source: 'Scan again', target: 'Skanni uuesti' },
    { source: 'Use this scan', target: 'Kasuta seda skanni' },
    { source: 'Failed to scan', target: 'Skannimine ebaõnnestus' },
    {
      source: 'Code failed to scan, please try another image',
      target: 'Koodi skannimine ebaõnnestus, proovige teist pilti'
    },
    { source: 'current', target: 'praegune' },
    { source: 'Day', target: 'Päev' },
    { source: 'Week', target: 'Nädal' },
    { source: 'Month', target: 'Kuu' },
    { source: 'Year', target: 'Aasta' },
    { source: 'Today', target: 'Täna' },
    { source: 'Daily', target: 'Päevane' },
    { source: 'Weekly', target: 'Nädalane' },
    { source: 'Monthly', target: 'Kuine' },
    { source: 'Quarterly', target: 'Kvartaalne' },
    { source: 'Yearly', target: 'Aastane' },
    { source: 'Hourly', target: 'Tunnine' },
    { source: 'Minutely', target: 'Minutiline' },
    { source: 'Since', target: 'Alates' },
    { source: 'Before', target: 'Enne' },
    { source: 'Between', target: 'Vahel' },
    { source: 'From date', target: 'Kuupäevast' },
    { source: 'To date', target: 'Kuupäevani' },
    { source: 'Coordinates', target: 'Koordinaadid' },
    { source: 'Latitude', target: 'Laiuskraad' },
    { source: 'Longitude', target: 'Pikkuskraad' },
    { source: 'Default color', target: 'Vaikimisi värv' },
    { source: 'not specified', target: 'pole määratud' },
    { source: 'Sign using your finger or pointer', target: 'Allkirjastage sõrme või osutiga' },

    // List components
    { source: 'Filter', target: 'Filter' },
    { source: 'Filter by field', target: 'Filtreeri välja järgi' },
    { source: 'Filter by...', target: 'Filtreeri...' },
    { source: 'Back', target: 'Tagasi' },
    { source: 'Back to {0} fields', target: 'Tagasi {0} väljadele' },
    { source: 'Choose {0} from list', target: 'Valige {0} loendist' },
    { source: '{0} fields', target: '{0} väljad' },
    { source: '{0} relationships', target: '{0} seosed' },
    { source: 'Aggregate {0}', target: 'Koguda {0}' },
    { source: 'No fields to select', target: 'Pole valitavaid välju' },
    { source: 'Enter value...', target: 'Sisestage väärtus...' },
    { source: 'Exclude', target: 'Välista' },
    { source: 'Actions', target: 'Toimingud' },
    { source: 'Search', target: 'Otsi' },
    { source: 'Sort 1 → 9', target: 'Sort 1 → 9' },
    { source: 'Sort 9 → 1', target: 'Sort 9 → 1' },
    { source: 'Sort A → Z', target: 'Sort A → Z' },
    { source: 'Sort Z → A', target: 'Sort Z → A' },
    { source: 'Refresh automatically', target: 'Värskenda automaatselt' },
    { source: 'All', target: 'Kõik' },
    { source: 'Selected', target: 'Valikud' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'Kahjuks ei leitud teie päringule vastavaid {0}'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'Laadime {0}, palun oodake...' },
    { source: 'Add filter', target: 'Lisa filter' },
    { source: 'Delete this filter', target: 'Kustuta see filter' },
    { source: 'Toggle ordering', target: 'Vaheta järjestust' },
    { source: 'Not configured', target: 'Pole seadistatud' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'Kahjuks pole see komponent veel seadistatud'
    },
    { source: 'records', target: 'kirjed' },
    { source: '{0} items', target: '{0} esemed' },

    // Menu
    { source: 'Users & Teams', target: 'Kasutajad ja meeskonnad' },
    { source: 'Billing', target: 'Arveldus' },
    { source: 'Billing & Plans', target: 'Arveldus ja plaanid' },
    { source: 'API keys', target: 'API võtmed' },
    { source: 'Dark Mode', target: 'Tume režiim' },
    { source: 'Light Mode', target: 'Hele režiim' },
    { source: 'Disable Staff', target: 'Keela töötajad' },
    { source: 'Enable Staff', target: 'Luba töötajad' },
    { source: 'Manage Templates', target: 'Halda malle' },
    { source: 'Logout', target: 'Logi välja' },
    { source: 'Activity Log', target: 'Tegevuste logi' },
    { source: 'Collaborations', target: 'Koostööd' },
    { source: 'Open Visual Builder', target: 'Ava Visual Builder' },

    // Filters
    { source: 'equals', target: 'võrdub' },
    { source: 'does not equal', target: 'ei võrdu' },
    { source: '{0} equals {1}', target: '{0} võrdub {1}' },
    { source: '{0} does not equal {1}', target: '{0} ei võrdu {1}' },

    { source: 'contains', target: 'sisaldab' },
    { source: 'does not contain', target: 'ei sisalda' },
    { source: '{0} contains {1}', target: '{0} sisaldab {1}' },
    { source: '{0} not contains {1}', target: '{0} ei sisalda {1}' },

    { source: 'starts with', target: 'algab' },
    { source: 'does not start with', target: 'ei alga' },
    { source: '{0} starts with {1}', target: '{0} algab {1}' },
    { source: '{0} does not start with {1}', target: '{0} ei alga {1}' },

    { source: 'ends with', target: 'lõppeb' },
    { source: 'does not end with', target: 'ei lõppe' },
    { source: '{0} ends with {1}', target: '{0} lõppeb {1}' },
    { source: '{0} does not end with {1}', target: '{0} ei lõppe {1}' },

    { source: 'greater than', target: 'suurem kui' },
    { source: 'is not greater than', target: 'ei ole suurem kui' },
    { source: '{0} is greater than {1}', target: '{0} on suurem kui {1}' },
    { source: '{0} not greater than {1}', target: '{0} ei ole suurem kui {1}' },

    { source: 'greater than or equals', target: 'suurem kui või võrdne' },
    { source: 'is not greater than or equals', target: 'ei ole suurem kui või võrdne' },
    { source: '{0} is greater than or equals {1}', target: '{0} on suurem kui või võrdne {1}' },
    { source: '{0} is not greater than or equals {1}', target: '{0} ei ole suurem kui või võrdne {1}' },

    { source: 'less than', target: 'väiksem kui' },
    { source: 'is not less than', target: 'ei ole väiksem kui' },
    { source: '{0} is less than {1}', target: '{0} on väiksem kui {1}' },
    { source: '{0} is not less than {1}', target: '{0} ei ole väiksem kui {1}' },

    { source: 'less than or equals', target: 'väiksem kui või võrdne' },
    { source: 'is not less than or equals', target: 'ei ole väiksem kui või võrdne' },
    { source: '{0} is less than or equals {1}', target: '{0} on väiksem kui või võrdne {1}' },
    { source: '{0} is not less than or equals {1}', target: '{0} ei ole väiksem kui või võrdne {1}' },

    { source: 'one of', target: 'üks of' },
    { source: 'is one of', target: 'on üks' },
    { source: 'is not one of', target: 'ei ole üks' },
    { source: '{0} is one of {1}', target: '{0} on üks {1}' },
    { source: '{0} is not one of {1}', target: '{0} ei ole üks {1}' },

    { source: 'is null', target: 'null' },
    { source: 'is not null', target: 'ei ole null' },
    { source: '{0} is null', target: '{0} on null' },
    { source: '{0} is not null', target: '{0} ei ole null' },

    { source: 'is future', target: 'on tulevik' },
    { source: 'in the future', target: 'tulevikus' },
    { source: 'is not in the future', target: 'ei ole tulevikus' },
    { source: '{0} is in the future', target: '{0} on tulevikus' },
    { source: '{0} is not in the future', target: '{0} ei ole tulevikus' },

    { source: 'is past', target: 'on minevik' },
    { source: 'in the past', target: 'minevikus' },
    { source: 'is not in the past', target: 'ei ole minevikus' },
    { source: '{0} is in the past', target: '{0} on minevikus' },
    { source: '{0} is not in the past', target: '{0} ei ole minevikus' },

    { source: 'is Today', target: 'täna' },
    { source: 'today', target: 'täna' },
    { source: 'is not today', target: 'ei ole täna' },
    { source: '{0} is today', target: '{0} on täna' },
    { source: '{0} is not today', target: '{0} ei ole täna' },

    { source: 'is Yesterday', target: 'eile' },
    { source: 'yesterday', target: 'eile' },
    { source: 'is not yesterday', target: 'ei ole eile' },
    { source: '{0} is yesterday', target: '{0} on eile' },
    { source: '{0} is not yesterday', target: '{0} ei ole eile' },

    { source: 'is Last Week', target: 'eelmisel nädalal' },
    { source: 'last week', target: 'eelmisel nädalal' },
    { source: 'is not last week', target: 'ei ole eelmisel nädalal' },
    { source: '{0} is last week', target: '{0} on eelmisel nädalal' },
    { source: '{0} is not last week', target: '{0} ei ole eelmisel nädalal' },

    { source: 'is Last Month', target: 'eelmisel kuul' },
    { source: 'last month', target: 'eelmisel kuul' },
    { source: 'is not last month', target: 'ei ole eelmisel kuul' },
    { source: '{0} is last month', target: '{0} on eelmisel kuul' },
    { source: '{0} is not last month', target: '{0} ei ole eelmisel kuul' },

    { source: 'is Last Quarter', target: 'eelmisel kvartal' },
    { source: 'last quarter', target: 'eelmisel kvartal' },
    { source: 'is not last quarter', target: 'ei ole eelmisel kvartal' },
    { source: '{0} is last quarter', target: '{0} on eelmisel kvartal' },
    { source: '{0} is not last quarter', target: '{0} ei ole eelmisel kvartal' },

    { source: 'is Last Year', target: 'eelmisel aastal' },
    { source: 'last year', target: 'eelmisel aastal' },
    { source: 'is not last year', target: 'ei ole eelmisel aastal' },
    { source: '{0} is last year', target: '{0} on eelmisel aastal' },
    { source: '{0} is not last year', target: '{0} ei ole eelmisel aastal' },

    { source: 'is Last X Days', target: 'viimasel X päeval' },
    { source: 'last X days', target: 'viimasel X päeval' },
    { source: 'is not last X days', target: 'ei ole viimasel X päeval' },
    { source: '{0} is last {1} days', target: '{0} on viimasel {1} päeval' },
    { source: '{0} is not last {1} days', target: '{0} ei ole viimasel {1} päeval' },

    { source: 'is Current Week', target: 'praegune nädal' },
    { source: 'current week', target: 'praegune nädal' },
    { source: 'is not current week', target: 'ei ole praegune nädal' },
    { source: '{0} is current week', target: '{0} on praegune nädal' },
    { source: '{0} is not current week', target: '{0} ei ole praegune nädal' },

    { source: 'is Current Month', target: 'praegune kuu' },
    { source: 'current month', target: 'praegune kuu' },
    { source: 'is not current month', target: 'ei ole praegune kuu' },
    { source: '{0} is current month', target: '{0} on praegune kuu' },
    { source: '{0} is not current month', target: '{0} ei ole praegune kuu' },

    { source: 'is Current Quarter', target: 'praegune kvartal' },
    { source: 'current quarter', target: 'praegune kvartal' },
    { source: 'is not current quarter', target: 'ei ole praegune kvartal' },
    { source: '{0} is current quarter', target: '{0} on praegune kvartal' },
    { source: '{0} is not current quarter', target: '{0} ei ole praegune kvartal' },

    { source: 'is Current Year', target: 'praegune aasta' },
    { source: 'current year', target: 'praegune aasta' },
    { source: 'is not current year', target: 'ei ole praegune aasta' },
    { source: '{0} is current year', target: '{0} on praegune aasta' },
    { source: '{0} is not current year', target: '{0} ei ole praegune aasta' },

    { source: 'is Previous Week', target: 'eelmisel nädalal' },
    { source: 'previous week', target: 'eelmisel nädalal' },
    { source: 'is not previous week', target: 'ei ole eelmisel nädalal' },
    { source: '{0} is previous week', target: '{0} on eelmisel nädalal' },
    { source: '{0} is not previous week', target: '{0} ei ole eelmisel nädalal' },

    { source: 'is Previous Month', target: 'eelmisel kuul' },
    { source: 'previous month', target: 'eelmisel kuul' },
    { source: 'is not previous month', target: 'ei ole eelmisel kuul' },
    { source: '{0} is previous month', target: '{0} on eelmisel kuul' },
    { source: '{0} is not previous month', target: '{0} ei ole eelmisel kuul' },

    { source: 'is Previous Quarter', target: 'eelmine kvartal' },
    { source: 'previous quarter', target: 'eelmine kvartal' },
    { source: 'is not previous quarter', target: 'ei ole eelmine kvartal' },
    { source: '{0} is previous quarter', target: '{0} on eelmine kvartal' },
    { source: '{0} is not previous quarter', target: '{0} ei ole eelmine kvartal' },

    { source: 'is Previous Year', target: 'eelmisel aastal' },
    { source: 'previous year', target: 'eelmisel aastal' },
    { source: 'is not previous year', target: 'ei ole eelmisel aastal' },
    { source: '{0} is previous year', target: '{0} on eelmisel aastal' },
    { source: '{0} is not previous year', target: '{0} ei ole eelmisel aastal' },

    { source: 'is Previous X Days', target: 'eelmised X päeva' },
    { source: 'previous X days', target: 'eelmised X päeva' },
    { source: 'is not previous X days', target: 'ei ole eelmised X päeva' },
    { source: '{0} is previous {1} days', target: '{0} on eelmised {1} päeva' },
    { source: '{0} is not previous {1} days', target: '{0} ei ole eelmised {1} päeva' },

    { source: 'is empty', target: 'on tühi' },
    { source: 'is not empty', target: 'ei ole tühi' },
    { source: '{0} is empty', target: '{0} on tühi' },
    { source: '{0} is not empty', target: '{0} ei ole tühi' },

    { source: 'covered by', target: 'kaetud' },
    { source: 'is not covered by', target: 'ei ole kaetud' },
    { source: '{0} covered by {1}', target: '{0} on kaetud {1}' },
    { source: '{0} is not covered by {1}', target: '{0} ei ole kaetud {1}' },

    // Activity log
    { source: 'No activities found', target: 'Tegevusi ei leitud' },
    {
      source: 'Start to working with data to log activities.',
      target: 'Alustage tegevustega andmete logimiseks.'
    },
    { source: 'All Activity', target: 'Kõik tegevused' },
    { source: 'Create Record', target: 'Loo kirje' },
    { source: 'Update Record', target: 'Uuenda kirje' },
    { source: 'Delete Record', target: 'Kustuta kirje' },
    { source: 'All Members', target: 'Kõik liikmed' },

    // Collaboration
    { source: 'Timeline', target: 'Ajajoon' },
    { source: 'Messages', target: 'Sõnumid' },
    { source: 'Activity', target: 'Tegevus' },
    { source: 'Start chatting with your team', target: 'Alustage vestlust oma meeskonnaga' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'Jätke sõnum käesoleva lehe kohta, et olulist teavet jälgida.'
    },
    { source: 'Your Message', target: 'Sinu sõnum' },
    { source: 'Send', target: 'Saada' },

    // Share
    { source: 'Invite members', target: 'Kutsu liikmeid' },
    { source: 'Public share', target: 'Avalik jagamine' },
    { source: 'Sign Up', target: 'Registreeru' },
    { source: 'Members', target: 'Liikmed' },
    { source: 'Invite with Email', target: 'Kutsu e-postiga' },
    { source: 'Invite someone...', target: 'Kutsu kedagi...' },
    { source: 'Send Invite', target: 'Saada kutse' },
    {
      source: 'Limit access to your data by user properties',
      target: 'Piirake juurdepääsu oma andmetele kasutaja omaduste järgi'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: 'Sisestage koostööks kutsutava kasutaja meiliaadress.'
    },
    { source: 'Copy', target: 'Kopeeri' },
    { source: 'Invite with Link', target: 'Kutsu lingiga' },
    { source: 'Remove link', target: 'Eemalda link' },
    { source: 'Add Invite Link', target: 'Lisa kutselink' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'Kellelgi internetis, kellel on see link, on võimalik liituda valitud meeskonnaga.'
    },
    { source: 'Pending Invites', target: 'Ootel kutsed' },
    { source: 'Cancel invite', target: 'Tühista kutse' },
    { source: 'Active Members', target: 'Aktiivsed liikmed' },
    { source: 'Remove member', target: 'Eemalda liige' },
    {
      source: 'You are setting sharing for the current page',
      target: 'Seadistate käesoleva lehe jagamist'
    },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'Seadistasite oma rakenduse kõikide lehtede jagamist.'
    },
    { source: 'Public access link', target: 'Avaliku ligipääsu link' },
    { source: 'Updating public access...', target: 'Avaliku ligipääsu uuendamine...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'Igaüks, kellel on see link, saab vaadata käesolevat lehte. Sellele lisaks saab käesolevat lehte kasutada ka teisele veebisaidile sisseehitatult.'
    },
    { source: 'Embed code (IFRAME)', target: 'Sisesta kood (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: 'Kleebi see kood oma veebilehe HTML-koodi sinna, kuhu soovite käesolevat lehte kuvada.'
    },
    { source: 'link', target: 'link' },
    { source: 'invited', target: 'kutsutud' },
    { source: 'Choose Team', target: 'Valige meeskond' },
    { source: 'App Teams', target: 'Rakenduse meeskonnad' },
    { source: 'Built-In Teams', target: 'Sissejuhatatud meeskonnad' },
    { source: 'Clear Team', target: 'Tühjenda meeskond' },
    { source: 'Can build application and modify data', target: 'Võib rakendust ehitada ja andmeid muuta' },
    { source: 'Can modify data in application', target: 'Võib rakenduses andmeid muuta' },
    { source: 'Can only view data without modification', target: 'Või ainult andmeid vaadata, ilma muutmiseta' },
    { source: 'Add Team', target: 'Lisa meeskond' },
    { source: 'Edit Team', target: 'Muuda meeskond' },
    { source: 'Adding Team', target: 'Meeskonna lisamine' },
    {
      source: 'Keep control over who has access to current App',
      target: 'Hoia kontrolli selle üle, kellel on ligipääs käselevale rakendusele'
    },
    { source: 'Enter Team Name', target: 'Sisesta meeskonna nimi' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'Sisesta meeskonna nimi, nt toe-, müügi-, turundusosakond jne'
    },
    { source: 'Add a new member to this team.', target: 'Lisa sellele meeskonnale uus liige.' },
    { source: 'Invite new member', target: 'Kutsu uus liige' },
    { source: 'User', target: 'Kasutaja' },
    { source: 'Date Added', target: 'Lisamise kuupäev' },
    { source: 'You', target: 'Sina' },
    { source: 'Edit', target: 'Muuda' },
    { source: 'No users in this team', target: 'Selles meeskonnas pole kasutajaid' },
    { source: 'Page Permissions', target: 'Lehe õigused' },
    { source: 'App Permissions', target: 'Rakenduse õigused' },
    { source: 'Properties', target: 'Omadused' },
    { source: 'Page name', target: 'Lehe nimi' },
    { source: 'Access', target: 'Ligipääs' },
    { source: 'Full Access', target: 'Täielik ligipääs' },
    { source: 'Read Only', target: 'Ainult lugemine' },
    { source: 'No Access', target: 'Ligipääs puudub' },
    { source: 'Read', target: 'Lugemine' },
    { source: 'Update', target: 'Uuendamine' },
    { source: 'Write', target: 'Kirjutamine' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'Kustutamine' },
    { source: 'Custom Access', target: 'Kohandatud ligipääs' },
    { source: 'Read, create, update and delete data', target: 'Lugege, looge, uuendage ja kustutage andmeid' },
    { source: 'Choose allowed operations granularly', target: 'Valige lubatud toimingud täpselt' },
    { source: 'Without any access to data', target: 'Ilma andmetele ligipääsuta' },
    { source: 'Name', target: 'Nimi' },
    { source: 'Active', target: 'Aktiivne' },
    { source: 'Settings', target: 'Seaded' },
    { source: 'Members and Teams', target: 'Liikmed ja meeskonnad' },
    { source: 'App Builder', target: 'Rakenduste koostaja' },
    { source: 'Collection Permissions', target: 'Kollektsiooni õigused' },
    { source: "Grant permissions to app's collection", target: 'Anda luba rakenduse kogumile' },
    { source: 'Collection', target: 'Kogumik' },
    {
      source: 'Limit access to your data by team properties',
      target: 'Piirake ligipääs oma andmetele meeskonna omaduste järgi'
    },
    { source: 'Save Team', target: 'Salvesta meeskond' },
    { source: 'Create Team', target: 'Loo meeskonn' },
    { source: 'Value', target: 'Väärtus' },
    { source: 'No properties specified', target: 'Omadusi pole määratud' },

    // Navigation
    { source: 'Current App', target: 'Praegune rakendus' },
    { source: 'Home', target: 'Kodu' },

    // Profile
    {
      source: 'We are fetching user data, please, wait...',
      target: 'Laadime kasutaja andmeid, palun oodake...'
    },
    { source: 'Profile Settings', target: 'Profili seaded' },
    { source: 'Basic information about your account.', target: 'Põhiteave teie konto kohta.' },
    { source: 'Photo', target: 'Foto' },
    { source: 'your photo', target: 'sinu foto' },
    { source: 'Change', target: 'Muuda' },
    { source: 'Upload', target: 'Laadi üles' },
    { source: 'Photo was successfully updated', target: 'Foto uuendati edukalt' },
    { source: 'Photo was successfully deleted', target: 'Foto kustutati edukalt' },
    { source: 'First Name', target: 'Eesnimi' },
    { source: 'Last Name', target: 'Perekonnanimi' },
    { source: 'Your Email', target: 'Teie e-post' },
    { source: 'Email Change', target: 'E-posti vahetus' },
    { source: 'New Email', target: 'Uus e-post' },
    { source: 'Change Email', target: 'Muuda e-posti' },
    { source: 'Check your inbox', target: 'Kontrollige oma postkasti' },
    { source: 'Confirmation Email was sent to {0}', target: 'Kinnitus e-kiri saadeti aadressile {0}' },
    { source: 'Changing Email failed', target: 'E-posti muutmine ebaõnnestus' },
    { source: 'Password Change', target: 'Parooli vahetus' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target: 'Parool peaks olema piisavalt tugev teie konto kaitseks, seega tehke see vähemalt 12 tähemärki pikk.'
    },
    { source: 'Current Password', target: 'Praegune salasõna' },
    { source: 'New Password', target: 'Uus salasõna' },
    { source: 'Confirm New Password', target: 'Kinnita uus salasõna' },
    { source: 'Change Password', target: 'Muuda salasõna' },
    {
      source: 'Current password was successfully updated, all other sessions will be logged out shortly',
      target: 'Praegune parool on edukalt uuendatud, kõik muud sessioonid logitakse varsti välja'
    },
    { source: 'Saving current password failed', target: 'Praeguse salasõna salvestamine ebaõnnestus' },
    { source: 'Short password', target: 'Lühike salasõna' },
    { source: "Passwords don't match", target: 'Salasõnad ei ühti' },
    { source: 'Personal Preferences', target: 'Isiklikud eelistused' },
    { source: 'Language', target: 'Keel' },
    { source: 'Timezone', target: 'Ajavöönd' },
    { source: 'Current time in {0} is', target: 'Praegune aeg {0} on' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'Kohandage oma konto täiendavaid eelistusi.'
    },
    { source: 'News & Proposals', target: 'Uudised ja ettepanekud' },
    {
      source: 'Subscribe to our updates and proposals.',
      target: 'Tellige meie uuendused ja ettepanekud.'
    },
    { source: 'Save changes', target: 'Salvesta muudatused' },
    { source: 'Current user was successfully updated', target: 'Praegune kasutaja uuendati edukalt' },
    { source: 'Saving current user failed', target: 'Praeguse kasutaja salvestamine ebaõnnestus' },

    // My Apps
    { source: 'Type to search...', target: 'Tippige otsinguks...' },
    { source: 'My Apps', target: 'Minu rakendused' },
    { source: 'New App', target: 'Uus rakendus' },
    { source: 'Builder', target: 'Koostaja' },
    { source: 'App', target: 'Rakendus' },
    { source: 'continue install', target: 'jätkake installimist' },
    { source: 'Open builder', target: 'Ava koostaja' },
    { source: 'View published', target: 'Vaata avaldatut' },
    { source: 'Delete App', target: 'Kustuta rakendus' },
    { source: 'Start from a template', target: 'Alusta mallist' },
    { source: 'Preview', target: 'Eelvaade' },
    { source: 'Contact Support', target: 'Võtke ühendust toega' },
    { source: 'Documentation', target: 'Dokumentatsioon' },
    { source: 'Feature Requests', target: 'Funktsiooni taotlused' },
    { source: 'See What’s New', target: 'Vaata, mis on uut' },
    { source: 'Search templates...', target: 'Otsige malle...' },
    { source: 'any', target: 'ükskõik' },
    { source: 'more', target: 'veel' },
    { source: 'Choose Data Source', target: 'Valige andmeallikas' },
    { source: 'works with 30+ data sources', target: 'töötab koos 30+ andmeallikaga' },
    { source: 'Use this template', target: 'Kasuta seda malli' },
    { source: 'stores data in Jet Tables', target: 'salvestab andmeid Jet tabelites' },
    { source: 'New Data', target: 'Uued andmed' },
    { source: 'using {0}', target: 'kasutades {0}' },
    { source: "Can't find resource you're looking for?", target: 'Ei leia soovitud ressurssi?' },
    { source: 'Admin Panel', target: 'Admin paneel' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'Loendi, loomise ja uuendamise (CRUD) toimingud teie andmete peal'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target:
        'Ehitage kohandatud admin paneel ükskõik milliste andmebaaside, rakenduste ja API-de, nagu Stripe, Twilio ja GraphQL, abil.'
    },
    { source: 'All Integrations', target: 'Kõik integreeringud' },
    { source: 'Databases', target: 'Andmebaasid' },
    { source: 'APIs', target: 'API-d' },
    { source: 'Frameworks', target: 'Raamistikud' },
    { source: 'Storages', target: 'Salvestused' },

    // Sign In
    { source: 'Good morning', target: 'Tere hommikust' },
    { source: 'Good afternoon', target: 'Tere päevast' },
    { source: 'Good evening', target: 'Tere õhtust' },
    { source: 'Sign In', target: 'Logi sisse' },
    { source: 'Welcome Back.', target: 'Tere tulemast tagasi.' },
    { source: 'Sign in with {0}', target: 'Logi sisse {0} abil' },
    { source: 'or login with', target: 'või logige sisse' },
    { source: 'Enter E-mail', target: 'Sisestage e-post' },
    { source: 'Enter password', target: 'Sisestage parool' },
    { source: 'Login', target: 'Logi sisse' },
    { source: 'Create new account', target: 'Loo uus konto' },
    { source: 'Forgot my password', target: 'Unustasin oma parooli' },
    { source: 'required', target: 'nõutud' },
    { source: 'incorrect Email', target: 'vale e-posti aadress' },
    { source: 'Minimum password length {0}', target: 'Parooli minimaalne pikkus {0}' },
    { source: 'Unable to Sign In', target: 'Sisselogimine pole võimalik' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'Alusta <span class="auth-form__accent">täna tasuta</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target: 'Krediitkaarti pole vaja. Saate kogu täiustatud funktsionaalsuse 14-päevase PRO-katsena tasuta.'
    },
    { source: 'Enter First Name', target: 'Sisestage eesnimi' },
    { source: 'Enter Last Name (optional)', target: 'Sisestage perekonnanimi (valikuline)' },
    { source: 'Enter Email', target: 'Sisestage e-post' },
    { source: 'Password', target: 'Parool' },
    { source: 'Repeat Password', target: 'Korrake salasõna' },
    {
      source: 'By signing in you’re okay with our',
      target: 'Sisselogimisega aktsepteerite meie'
    },
    {
      source: 'Creating an account means you’re okay with our',
      target: 'Konto loomine tähendab, et aktsepteerite meie'
    },
    { source: 'Terms of Service', target: 'Teenuse tingimused' },
    { source: 'Privacy Policy', target: 'Privaatsuspoliitika' },
    { source: 'and', target: 'ja' },
    { source: 'Create your free account', target: 'Loo oma tasuta konto' },
    { source: 'Already have an account', target: 'Teil on juba konto' },
    { source: 'Unable to Sign Up', target: 'Registreerimine pole võimalik' },

    // Restore password
    { source: 'Reset your password', target: 'Lähtesta oma parool' },
    { source: 'Email Address', target: 'E-posti aadress' },
    { source: 'Reset password', target: 'Lähtestage salasõna' },
    { source: 'Return to Sign In', target: 'Naaske sisselogimise juurde' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'Palun kontrollige oma e-posti aadressi – <strong>{0}</strong>. Saatsime kinnituslingi, mille abil peaksite oma salasõna muutma.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be at least 8 characters.',
      target: 'Peaaegu valmis, lihtsalt sisestage allpool oma uus salasõna. <br>Peab olema vähemalt 8 tähemärki.'
    },
    { source: 'Reset password & Sign In', target: 'Lähtesta salasõna ja logige sisse' },
    { source: 'Unable to Send Code', target: 'Koodi saatmine ebaõnnestus' },
    { source: 'Unable to Change Password', target: 'Salasõna muutmine ebaõnnestus' },

    // Email Verification
    { source: 'Email Verification', target: 'E-posti valideerimine' },
    { source: 'Resend verification code', target: 'Saada kinnitusmeil uuesti' },
    { source: 'Verification email sent', target: 'Kinnituskiri saadetud' },
    { source: 'Your Email is now verified', target: 'Teie e-posti aadress on nüüd kinnitatud' },
    { source: 'Request is incorrect', target: 'Päring on vale' },

    // Invites
    {
      source: 'Join <span class="auth-form__accent">{0}</span>',
      target: 'Liitu <span class="auth-form__accent">{0}</span>'
    },
    {
      source: '<strong>{0}</strong> has invited you to join <strong>{1}</strong>',
      target: '<strong>{0}</strong> kutsus teid liituma <strong>{1}</strong>'
    },
    {
      source: 'Someone has invited you to join <strong>{0}</strong>',
      target: 'Keegi on teid kutsunud liituma <strong>{0}</strong>'
    },
    {
      source: 'You are joining <strong>{0}</strong> using invite link',
      target: 'Ühinesite <strong>{0}</strong>, kasutades kutset'
    },
    { source: 'Join', target: 'Liitu' },
    { source: 'Go to home page', target: 'Mine avalehele' },
    { source: 'Invite link is wrong', target: 'Kutse lingil on viga' },
    {
      source:
        'Looks like your invitation link has expired or maybe you have followed the wrong link. Please try to ask to invite your again.',
      target:
        'Näib, et teie kutse link on aegunud või võib-olla olete jälginud valet linki. Palun proovige uuesti kutset küsida.'
    },
    {
      source: 'Unfortunately we failed to load information about this invitation',
      target: 'Kahjuks ei õnnestunud meil laadida selle kutse teavet'
    },

    // Users & Teams
    { source: 'Members of {0}', target: '{0} liikmed' },
    { source: 'How to get started', target: 'Kuidas alustada' },
    { source: 'Users API', target: 'Kasutajate API' },
    { source: 'Teams API', target: 'Meeskonnad API' },
    { source: 'Invite Member', target: 'Kutsu liige' },
    { source: 'Add User property', target: 'Lisa kasutaja omadus' },
    { source: 'Add Team property', target: 'Lisa meeskonna omadus' },
    { source: 'Edit property', target: 'Muuda omadust' },
    { source: 'Delete property', target: 'Kustuta omadus' },
    { source: 'Users', target: 'Kasutajad' },
    { source: 'Teams', target: 'Meeskonnad' },
    { source: 'Search members', target: 'Otsi liikmeid' },
    { source: 'Search teams', target: 'Otsi meeskondasid' },
    { source: '{0} pages', target: '{0} lehte' },
    { source: 'No members', target: 'Puuduvad liikmed' }
  ]
};

import { Locale } from './locale';

export const locale: Locale = {
  name: 'slovenian',
  language: 'sl',
  items: [
    // General
    { source: 'Save', target: 'Shrani' },
    { source: 'Create', target: 'Ustvari' },
    { source: 'Duplicating', target: 'Podvajanje' },
    { source: 'Duplicate', target: 'Podvoji' },
    { source: 'Mass Edit', target: 'Masovno urejanje' },
    { source: 'Export', target: 'Izvozi' },
    { source: 'Import', target: 'Uvozi' },
    { source: 'Delete', target: 'Izbriši' },
    { source: 'Continue', target: 'Nadaljuj' },
    { source: 'Submit', target: 'Pošlji' },
    { source: 'Cancel', target: 'Prekliči' },
    { source: 'Loading', target: 'Nalaganje' },
    { source: 'Please wait...', target: 'Prosimo počakajte...' },
    { source: 'Loading failed', target: 'Nalaganje neuspešno' },
    { source: 'Unknown error', target: 'Neznana napaka' },
    { source: 'Add', target: 'Dodaj' },
    { source: 'or', target: 'ali' },
    { source: 'Hours', target: 'Ure' },
    { source: 'Minutes', target: 'Minute' },
    { source: 'Seconds', target: 'Sekunde' },
    { source: 'Saved', target: 'Shranjeno' },
    { source: 'Error', target: 'Napaka' },
    { source: 'Page not found', target: 'Stran ni najdena' },
    {
      source: 'The specified address is incorrect, or the page does not exist',
      target: 'Navedeni naslov je napačen ali stran ne obstaja'
    },
    { source: 'Not allowed', target: 'Ni dovoljeno' },
    {
      source: "You don't have permissions to access this page",
      target: 'Nimate dovoljenja za dostop do te strani'
    },
    { source: 'Are you sure want to close?', target: 'Ali ste prepričani, da želite zapreti?' },
    { source: 'Close', target: 'Zapri' },

    // Actions
    { source: 'Action executed', target: 'Dejanje izvedeno' },
    { source: 'Action executed successfully', target: 'Dejanje uspešno izvedeno' },
    { source: 'Action failed', target: 'Dejanje ni uspelo' },
    {
      source: "You don't have permission for run this operation",
      target: 'Nimate dovoljenja za izvajanje te operacije'
    },
    { source: 'Specify parameters', target: 'Določite parametre' },
    { source: 'Executing action', target: 'Izvajanje dejanja' },
    { source: 'You are executing <strong>{0}</strong>', target: 'Izvajate <strong>{0}</strong>' },
    { source: 'Please fill in the parameters below.', target: 'Prosimo, izpolnite parametre spodaj.' },
    { source: 'Execute', target: 'Izvedi' },
    { source: 'Executing', target: 'Izvajanje' },
    { source: 'Finished', target: 'Končano' },
    { source: 'Done', target: 'Končano' },

    // Export
    { source: 'Records Export', target: 'Izvoz zapisov' },
    { source: 'Downloading records data as a file', target: 'Prenašanje podatkov zapisov kot datoteka' },
    { source: 'Choose format', target: 'Izberite format' },
    { source: 'Number of exporting records', target: 'Število izvoznih zapisov' },
    { source: { label: 'Export', context: 'submit' }, target: 'Izvozi' },
    { source: 'Exporting', target: 'Izvažanje' },
    { source: 'Export completed', target: 'Izvoz zaključen' },
    { source: 'Failed to export', target: 'Izvoz neuspešen' },

    // Components
    { source: 'optional', target: 'neobvezno' },
    { source: 'choose', target: 'izberite' },
    { source: 'Clear value', target: 'Počisti vrednost' },
    { source: 'loading...', target: 'nalaganje...' },
    { source: 'Nothing found', target: 'Nič ni najdeno' },
    { source: 'Search...', target: 'Iskanje...' },
    { source: 'Enter at least {0} characters', target: 'Vnesite vsaj {0} znakov' },
    { source: 'No options', target: 'Ni možnosti' },
    { source: 'Drop files here or', target: 'Spustite datoteke tukaj ali' },
    { source: 'Upload new', target: 'Naloži nove' },
    { source: 'Clear', target: 'Počisti' },
    { source: 'Download', target: 'Prenesi' },
    { source: 'Choose file', target: 'Izberite datoteko' },
    { source: 'Choose files', target: 'Izberite datoteke' },
    { source: 'Scan with Camera', target: 'Skeniraj s kamero' },
    { source: 'Scan Image file', target: 'Skeniraj slikovno datoteko' },
    { source: 'Choose camera', target: 'Izberite kamero' },
    { source: 'Stop scanning', target: 'Ustavi skeniranje' },
    { source: 'Scan again', target: 'Skeniraj znova' },
    { source: 'Use this scan', target: 'Uporabi ta sken' },
    { source: 'Failed to scan', target: 'Skeniranje ni uspelo' },
    {
      source: 'Code failed to scan, please try another image',
      target: 'Koda ni bila prebrana, prosimo poskusite drugo sliko'
    },
    { source: 'current', target: 'trenutna' },
    { source: 'Day', target: 'Dan' },
    { source: 'Week', target: 'Teden' },
    { source: 'Month', target: 'Mesec' },
    { source: 'Year', target: 'Leto' },
    { source: 'Today', target: 'Danes' },
    { source: 'Daily', target: 'Dnevno' },
    { source: 'Weekly', target: 'Tedensko' },
    { source: 'Monthly', target: 'Mesečno' },
    { source: 'Quarterly', target: 'Četrtletno' },
    { source: 'Yearly', target: 'Letno' },
    { source: 'Hourly', target: 'Urno' },
    { source: 'Minutely', target: 'Minutno' },
    { source: 'Since', target: 'Od' },
    { source: 'Before', target: 'Pred' },
    { source: 'Between', target: 'Med' },
    { source: 'From date', target: 'Od datuma' },
    { source: 'To date', target: 'Do datuma' },
    { source: 'Coordinates', target: 'Koordinate' },
    { source: 'Latitude', target: 'Zemljepisna širina' },
    { source: 'Longitude', target: 'Zemljepisna dolžina' },
    { source: 'Default color', target: 'Privzeta barva' },
    { source: 'not specified', target: 'ni navedeno' },
    { source: 'Sign using your finger or pointer', target: 'Podpis s prstom ali kazalcem' },

    // List components
    { source: 'Filter', target: 'Filter' },
    { source: 'Filter by field', target: 'Filtriraj po polju' },
    { source: 'Filter by...', target: 'Filtriraj po...' },
    { source: 'Back', target: 'Nazaj' },
    { source: 'Back to {0} fields', target: 'Nazaj k poljem {0}' },
    { source: 'Choose {0} from list', target: 'Izberite {0} s seznama' },
    { source: '{0} fields', target: 'polja {0}' },
    { source: '{0} relationships', target: 'razmerja {0}' },
    { source: 'Aggregate {0}', target: 'Združi {0}' },
    { source: 'No fields to select', target: 'Ni polj za izbiro' },
    { source: 'Enter value...', target: 'Vnesite vrednost...' },
    { source: 'Exclude', target: 'Izključi' },
    { source: 'Actions', target: 'Dejanja' },
    { source: 'Search', target: 'Iskanje' },
    { source: 'Sort 1 → 9', target: 'Razvrsti 1 → 9' },
    { source: 'Sort 9 → 1', target: 'Razvrsti 9 → 1' },
    { source: 'Sort A → Z', target: 'Razvrsti A → Ž' },
    { source: 'Sort Z → A', target: 'Razvrsti Ž → A' },
    { source: 'Refresh automatically', target: 'Samodejno osveževanje' },
    { source: 'All', target: 'Vse' },
    { source: 'Selected', target: 'Izbrano' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'Na žalost ni najdenih {0}, ki ustrezajo vašemu poizvedbi'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'Pridobivamo {0}, prosimo počakajte...' },
    { source: 'Add filter', target: 'Dodaj filter' },
    { source: 'Delete this filter', target: 'Izbriši ta filter' },
    { source: 'Toggle ordering', target: 'Preklopi razvrščanje' },
    { source: 'Not configured', target: 'Ni konfigurirano' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'Na žalost ta komponenta še ni konfigurirana'
    },
    { source: 'records', target: 'zapisi' },
    { source: '{0} items', target: '{0} predmeti' },

    // Menu
    { source: 'Users & Teams', target: 'Uporabniki in ekipe' },
    { source: 'Billing', target: 'Obračunavanje' },
    { source: 'Billing & Plans', target: 'Obračunavanje in načrti' },
    { source: 'API keys', target: 'API ključi' },
    { source: 'Dark Mode', target: 'Temni način' },
    { source: 'Light Mode', target: 'Svetli način' },
    { source: 'Disable Staff', target: 'Onemogoči osebje' },
    { source: 'Enable Staff', target: 'Omogoči osebje' },
    { source: 'Manage Templates', target: 'Upravljaj predloge' },
    { source: 'Logout', target: 'Odjava' },
    { source: 'Activity Log', target: 'Dnevnik aktivnosti' },
    { source: 'Collaborations', target: 'Sodelovanja' },
    { source: 'Open Visual Builder', target: 'Odpri vizualni izdelovalec' },

    // Filters
    { source: 'equals', target: 'je enako' },
    { source: 'does not equal', target: 'ni enako' },
    { source: '{0} equals {1}', target: '{0} je enako {1}' },
    { source: '{0} does not equal {1}', target: '{0} ni enako {1}' },

    { source: 'contains', target: 'vsebuje' },
    { source: 'does not contain', target: 'ne vsebuje' },
    { source: '{0} contains {1}', target: '{0} vsebuje {1}' },
    { source: '{0} not contains {1}', target: '{0} ne vsebuje {1}' },

    { source: 'starts with', target: 'se začne z' },
    { source: 'does not start with', target: 'se ne začne z' },
    { source: '{0} starts with {1}', target: '{0} se začne z {1}' },
    { source: '{0} does not start with {1}', target: '{0} se ne začne z {1}' },

    { source: 'ends with', target: 'se konča z' },
    { source: 'does not end with', target: 'se ne konča z' },
    { source: '{0} ends with {1}', target: '{0} se konča z {1}' },
    { source: '{0} does not end with {1}', target: '{0} se ne konča z {1}' },

    { source: 'greater than', target: 'večje od' },
    { source: 'is not greater than', target: 'ni večje od' },
    { source: '{0} is greater than {1}', target: '{0} je večje od {1}' },
    { source: '{0} not greater than {1}', target: '{0} ni večje od {1}' },

    { source: 'greater than or equals', target: 'večje ali enako' },
    { source: 'is not greater than or equals', target: 'ni večje ali enako' },
    { source: '{0} is greater than or equals {1}', target: '{0} je večje ali enako {1}' },
    { source: '{0} is not greater than or equals {1}', target: '{0} ni večje ali enako {1}' },

    { source: 'less than', target: 'manjše od' },
    { source: 'is not less than', target: 'ni manjše od' },
    { source: '{0} is less than {1}', target: '{0} je manjše od {1}' },
    { source: '{0} is not less than {1}', target: '{0} ni manjše od {1}' },

    { source: 'less than or equals', target: 'manjše ali enako' },
    { source: 'is not less than or equals', target: 'ni manjše ali enako' },
    { source: '{0} is less than or equals {1}', target: '{0} je manjše ali enako {1}' },
    { source: '{0} is not less than or equals {1}', target: '{0} ni manjše ali enako {1}' },

    { source: 'one of', target: 'eno od' },
    { source: 'is one of', target: 'je eno od' },
    { source: 'is not one of', target: 'ni eno od' },
    { source: '{0} is one of {1}', target: '{0} je eno od {1}' },
    { source: '{0} is not one of {1}', target: '{0} ni eno od {1}' },

    { source: 'is null', target: 'je null' },
    { source: 'is not null', target: 'ni null' },
    { source: '{0} is null', target: '{0} je null' },
    { source: '{0} is not null', target: '{0} ni null' },

    { source: 'is future', target: 'je v prihodnosti' },
    { source: 'in the future', target: 'v prihodnosti' },
    { source: 'is not in the future', target: 'ni v prihodnosti' },
    { source: '{0} is in the future', target: '{0} je v prihodnosti' },
    { source: '{0} is not in the future', target: '{0} ni v prihodnosti' },

    { source: 'is past', target: 'je v preteklosti' },
    { source: 'in the past', target: 'v preteklosti' },
    { source: 'is not in the past', target: 'ni v preteklosti' },
    { source: '{0} is in the past', target: '{0} je v preteklosti' },
    { source: '{0} is not in the past', target: '{0} ni v preteklosti' },

    { source: 'is Today', target: 'je danes' },
    { source: 'today', target: 'danes' },
    { source: 'is not today', target: 'ni danes' },
    { source: '{0} is today', target: '{0} je danes' },
    { source: '{0} is not today', target: '{0} ni danes' },

    { source: 'is Yesterday', target: 'je včeraj' },
    { source: 'yesterday', target: 'včeraj' },
    { source: 'is not yesterday', target: 'ni včeraj' },
    { source: '{0} is yesterday', target: '{0} je včeraj' },
    { source: '{0} is not yesterday', target: '{0} ni včeraj' },

    { source: 'is Last Week', target: 'je prejšnji teden' },
    { source: 'last week', target: 'prejšnji teden' },
    { source: 'is not last week', target: 'ni prejšnji teden' },
    { source: '{0} is last week', target: '{0} je prejšnji teden' },
    { source: '{0} is not last week', target: '{0} ni prejšnji teden' },

    { source: 'is Last Month', target: 'je prejšnji mesec' },
    { source: 'last month', target: 'prejšnji mesec' },
    { source: 'is not last month', target: 'ni prejšnji mesec' },
    { source: '{0} is last month', target: '{0} je prejšnji mesec' },
    { source: '{0} is not last month', target: '{0} ni prejšnji mesec' },

    { source: 'is Last Quarter', target: 'je prejšnje četrtletje' },
    { source: 'last quarter', target: 'prejšnje četrtletje' },
    { source: 'is not last quarter', target: 'ni prejšnje četrtletje' },
    { source: '{0} is last quarter', target: '{0} je prejšnje četrtletje' },
    { source: '{0} is not last quarter', target: '{0} ni prejšnje četrtletje' },

    { source: 'is Last Year', target: 'je lansko leto' },
    { source: 'last year', target: 'lansko leto' },
    { source: 'is not last year', target: 'ni lansko leto' },
    { source: '{0} is last year', target: '{0} je lansko leto' },
    { source: '{0} is not last year', target: '{0} ni lansko leto' },

    { source: 'is Last X Days', target: 'je zadnjih X dni' },
    { source: 'last X days', target: 'zadnjih X dni' },
    { source: 'is not last X days', target: 'ni zadnjih X dni' },
    { source: '{0} is last {1} days', target: '{0} je zadnjih {1} dni' },
    { source: '{0} is not last {1} days', target: '{0} ni zadnjih {1} dni' },

    { source: 'is Current Week', target: 'je ta teden' },
    { source: 'current week', target: 'ta teden' },
    { source: 'is not current week', target: 'ni ta teden' },
    { source: '{0} is current week', target: '{0} je ta teden' },
    { source: '{0} is not current week', target: '{0} ni ta teden' },

    { source: 'is Current Month', target: 'je ta mesec' },
    { source: 'current month', target: 'ta mesec' },
    { source: 'is not current month', target: 'ni ta mesec' },
    { source: '{0} is current month', target: '{0} je ta mesec' },
    { source: '{0} is not current month', target: '{0} ni ta mesec' },

    { source: 'is Current Quarter', target: 'je to četrtletje' },
    { source: 'current quarter', target: 'to četrtletje' },
    { source: 'is not current quarter', target: 'ni to četrtletje' },
    { source: '{0} is current quarter', target: '{0} je to četrtletje' },
    { source: '{0} is not current quarter', target: '{0} ni to četrtletje' },

    { source: 'is Current Year', target: 'je to leto' },
    { source: 'current year', target: 'to leto' },
    { source: 'is not current year', target: 'ni to leto' },
    { source: '{0} is current year', target: '{0} je to leto' },
    { source: '{0} is not current year', target: '{0} ni to leto' },

    { source: 'is Previous Week', target: 'je prejšnji teden' },
    { source: 'previous week', target: 'prejšnji teden' },
    { source: 'is not previous week', target: 'ni prejšnji teden' },
    { source: '{0} is previous week', target: '{0} je prejšnji teden' },
    { source: '{0} is not previous week', target: '{0} ni prejšnji teden' },

    { source: 'is Previous Month', target: 'je prejšnji mesec' },
    { source: 'previous month', target: 'prejšnji mesec' },
    { source: 'is not previous month', target: 'ni prejšnji mesec' },
    { source: '{0} is previous month', target: '{0} je prejšnji mesec' },
    { source: '{0} is not previous month', target: '{0} ni prejšnji mesec' },

    { source: 'is Previous Quarter', target: 'je prejšnje četrtletje' },
    { source: 'previous quarter', target: 'prejšnje četrtletje' },
    { source: 'is not previous quarter', target: 'ni prejšnje četrtletje' },
    { source: '{0} is previous quarter', target: '{0} je prejšnje četrtletje' },
    { source: '{0} is not previous quarter', target: '{0} ni prejšnje četrtletje' },

    { source: 'is Previous Year', target: 'je lansko leto' },
    { source: 'previous year', target: 'lansko leto' },
    { source: 'is not previous year', target: 'ni lansko leto' },
    { source: '{0} is previous year', target: '{0} je lansko leto' },
    { source: '{0} is not previous year', target: '{0} ni lansko leto' },

    { source: 'is Previous X Days', target: 'je prejšnjih X dni' },
    { source: 'previous X days', target: 'prejšnjih X dni' },
    { source: 'is not previous X days', target: 'ni prejšnjih X dni' },
    { source: '{0} is previous {1} days', target: '{0} je prejšnjih {1} dni' },
    { source: '{0} is not previous {1} days', target: '{0} ni prejšnjih {1} dni' },

    { source: 'is empty', target: 'je prazno' },
    { source: 'is not empty', target: 'ni prazno' },
    { source: '{0} is empty', target: '{0} je prazno' },
    { source: '{0} is not empty', target: '{0} ni prazno' },

    { source: 'covered by', target: 'pokrito z' },
    { source: 'is not covered by', target: 'ni pokrito z' },
    { source: '{0} covered by {1}', target: '{0} pokrito z {1}' },
    { source: '{0} is not covered by {1}', target: '{0} ni pokrito z {1}' },

    // Activity log
    { source: 'No activities found', target: 'Ni najdenih aktivnosti' },
    {
      source: 'Start to working with data to log activities.',
      target: 'Začnite delo s podatki za beleženje aktivnosti.'
    },
    { source: 'All Activity', target: 'Vse aktivnosti' },
    { source: 'Create Record', target: 'Ustvari zapis' },
    { source: 'Update Record', target: 'Posodobi zapis' },
    { source: 'Delete Record', target: 'Izbriši zapis' },
    { source: 'All Members', target: 'Vsi člani' },

    // Collaboration
    { source: 'Timeline', target: 'Časovnica' },
    { source: 'Messages', target: 'Sporočila' },
    { source: 'Activity', target: 'Aktivnost' },
    { source: 'Start chatting with your team', target: 'Začnite klepetati s svojo ekipo' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'Pošljite sporočilo o trenutni strani za spremljanje pomembnih informacij.'
    },
    { source: 'Your Message', target: 'Vaše sporočilo' },
    { source: 'Send', target: 'Pošlji' },

    // Share
    { source: 'Invite members', target: 'Povabi člane' },
    { source: 'Public share', target: 'Javno deljenje' },
    { source: 'Sign Up', target: 'Prijavite se' },
    { source: 'Members', target: 'Člani' },
    { source: 'Invite with Email', target: 'Povabi z e-pošto' },
    { source: 'Invite someone...', target: 'Povabi nekoga...' },
    { source: 'Send Invite', target: 'Pošlji povabilo' },
    {
      source: 'Limit access to your data by user properties',
      target: 'Omejite dostop do svojih podatkov s lastnostmi uporabnika'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: 'Vnesite e-poštni naslov uporabnika, ki ga želite povabiti'
    },
    { source: 'Copy', target: 'Kopiraj' },
    { source: 'Invite with Link', target: 'Povabi s povezavo' },
    { source: 'Remove link', target: 'Odstrani povezavo' },
    { source: 'Add Invite Link', target: 'Dodaj povabilno povezavo' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'Kdor koli na internetu s to povezavo bo lahko pridružil izbrani ekipi.'
    },
    { source: 'Pending Invites', target: 'Čakajoče povabila' },
    { source: 'Cancel invite', target: 'Prekliči povabilo' },
    { source: 'Active Members', target: 'Aktivni člani' },
    { source: 'Remove member', target: 'Odstrani člana' },
    {
      source: 'You are setting sharing for the current page',
      target: 'Nastavljate deljenje trenutne strani'
    },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'Nastavljate deljenje za vse strani svojega Ap'
    },
    { source: 'Public access link', target: 'Javna dostopna povezava' },
    { source: 'Updating public access...', target: 'Posodabljanje javnega dostopa...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'Kdor koli s to povezavo bo lahko videl trenutno stran. Na ta način lahko tudi vdelate trenutno stran v drug spletni stran.'
    },
    { source: 'Embed code (IFRAME)', target: 'Vdelaj kodo (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: 'Prilepite to kodo v HTML kodo spletnega mesta, kjer želite, da se prikaže trenutna stran.'
    },
    { source: 'link', target: 'povezava' },
    { source: 'invited', target: 'povabljen' },
    { source: 'Choose Team', target: 'Izberite ekipo' },
    { source: 'App Teams', target: 'Ekipe aplikacij' },
    { source: 'Built-In Teams', target: 'Vgrajene ekipe' },
    { source: 'Clear Team', target: 'Počisti ekipo' },
    { source: 'Can build application and modify data', target: 'Lahko gradi aplikacijo in spremeni podatke' },
    { source: 'Can modify data in application', target: 'Lahko spremeni podatke v aplikaciji' },
    { source: 'Can only view data without modification', target: 'Lahko samo pogleda podatke brez spreminjanja' },
    { source: 'Add Team', target: 'Dodaj ekipo' },
    { source: 'Edit Team', target: 'Uredi ekipo' },
    { source: 'Adding Team', target: 'Dodajanje ekipe' },
    {
      source: 'Keep control over who has access to current App',
      target: 'Ohranite nadzor nad tem, kdo ima dostop do trenutne aplikacije'
    },
    { source: 'Enter Team Name', target: 'Vnesite ime ekipe' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'Vnesite ime ekipe, npr.: Podpora, Prodaja, Marketing itd.'
    },
    { source: 'Add a new member to this team.', target: 'Dodajte novega člana v to ekipo.' },
    { source: 'Invite new member', target: 'Povabi novega člana' },
    { source: 'User', target: 'Uporabnik' },
    { source: 'Date Added', target: 'Datum dodani' },
    { source: 'You', target: 'Vi' },
    { source: 'Edit', target: 'Uredi' },
    { source: 'No users in this team', target: 'Ni uporabnikov v tej ekipi' },
    { source: 'Page Permissions', target: 'Dovoljenja strani' },
    { source: 'App Permissions', target: 'Dovoljenja za aplikacijo' },
    { source: 'Properties', target: 'Lastnosti' },
    { source: 'Page name', target: 'Ime strani' },
    { source: 'Access', target: 'Dostop' },
    { source: 'Full Access', target: 'Poln dostop' },
    { source: 'Read Only', target: 'Samo branje' },
    { source: 'No Access', target: 'Ni dostopa' },
    { source: 'Read', target: 'Branje' },
    { source: 'Update', target: 'Posodobi' },
    { source: 'Write', target: 'Pisanje' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'Izbriši' },
    { source: 'Custom Access', target: 'Prilagojen dostop' },
    {
      source: 'Read, create, update and delete data',
      target: 'Branje, ustvarjanje, posodabljanje in brisanje podatkov'
    },
    { source: 'Choose allowed operations granularly', target: 'Natančno izberite dovoljene operacije' },
    { source: 'Without any access to data', target: 'Brez dostopa do podatkov' },
    { source: 'Name', target: 'Ime' },
    { source: 'Active', target: 'Aktivno' },
    { source: 'Settings', target: 'Nastavitve' },
    { source: 'Members and Teams', target: 'Člani in ekipe' },
    { source: 'App Builder', target: 'Izdelovalec aplikacij' },
    { source: 'Collection Permissions', target: 'Dovoljenja za zbirko' },
    { source: "Grant permissions to app's collection", target: 'Dodelite dovoljenja zbirki aplikacije' },
    { source: 'Collection', target: 'Zbirka' },
    {
      source: 'Limit access to your data by team properties',
      target: 'Omejite dostop do vaših podatkov s lastnostmi ekipe'
    },
    { source: 'Save Team', target: 'Shrani ekipo' },
    { source: 'Create Team', target: 'Ustvari ekipo' },
    { source: 'Value', target: 'Vrednost' },
    { source: 'No properties specified', target: 'Ni določenih lastnosti' },

    // Navigation
    { source: 'Current App', target: 'Trenutna aplikacija' },
    { source: 'Home', target: 'Domov' },

    // Profile
    {
      source: 'We are fetching user data, please, wait...',
      target: 'Pridobivamo uporabniške podatke, prosimo, počakajte...'
    },
    { source: 'Profile Settings', target: 'Nastavitve profila' },
    { source: 'Basic information about your account.', target: 'Osnovne informacije o vašem računu.' },
    { source: 'Photo', target: 'Fotografija' },
    { source: 'your photo', target: 'vaša fotografija' },
    { source: 'Change', target: 'Spremeni' },
    { source: 'Upload', target: 'Naloži' },
    { source: 'Photo was successfully updated', target: 'Fotografija je bila uspešno posodobljena' },
    { source: 'Photo was successfully deleted', target: 'Fotografija je bila uspešno izbrisana' },
    { source: 'First Name', target: 'Ime' },
    { source: 'Last Name', target: 'Priimek' },
    { source: 'Your Email', target: 'Vaš e-poštni naslov' },
    { source: 'Email Change', target: 'Sprememba e-pošte' },
    { source: 'New Email', target: 'Nova e-pošta' },
    { source: 'Change Email', target: 'Spremeni e-pošto' },
    { source: 'Check your inbox', target: 'Preverite svoj poštni predal' },
    { source: 'Confirmation Email was sent to {0}', target: 'Potrditveno e-poštno sporočilo je bilo poslano na {0}' },
    { source: 'Changing Email failed', target: 'Sprememba e-pošte ni uspela' },
    { source: 'Password Change', target: 'Sprememba gesla' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target: 'Geslo mora biti dovolj močno, da zaščiti vaš račun, zato naj bo dolgo vsaj 12 znakov.'
    },
    { source: 'Current Password', target: 'Trenutno geslo' },
    { source: 'New Password', target: 'Novo geslo' },
    { source: 'Confirm New Password', target: 'Potrdite novo geslo' },
    { source: 'Change Password', target: 'Spremeni geslo' },
    {
      source: 'Current password was successfully updated, all other sessions will be logged out shortly',
      target: 'Trenutno geslo je bilo uspešno posodobljeno, vse druge seje bodo kmalu odjavljene'
    },
    { source: 'Saving current password failed', target: 'Shranjevanje trenutnega gesla ni uspelo' },
    { source: 'Short password', target: 'Prekratko geslo' },
    { source: "Passwords don't match", target: 'Gesli se ne ujemata' },
    { source: 'Personal Preferences', target: 'Osebne nastavitve' },
    { source: 'Language', target: 'Jezik' },
    { source: 'Timezone', target: 'Časovni pas' },
    { source: 'Current time in {0} is', target: 'Trenutni čas v {0} je' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'Prilagodite dodatne nastavitve za svoj račun.'
    },
    { source: 'News & Proposals', target: 'Novice in predlogi' },
    {
      source: 'Subscribe to our updates and proposals.',
      target: 'Naročite se na naše posodobitve in predloge.'
    },
    { source: 'Save changes', target: 'Shrani spremembe' },
    { source: 'Current user was successfully updated', target: 'Trenutni uporabnik je bil uspešno posodobljen' },
    { source: 'Saving current user failed', target: 'Shranjevanje trenutnega uporabnika ni uspelo' },

    // My Apps
    { source: 'Type to search...', target: 'Vnesite za iskanje...' },
    { source: 'My Apps', target: 'Moje aplikacije' },
    { source: 'New App', target: 'Nova aplikacija' },
    { source: 'Builder', target: 'Izdelovalec' },
    { source: 'App', target: 'Aplikacija' },
    { source: 'continue install', target: 'nadaljuj z namestitvijo' },
    { source: 'Open builder', target: 'Odpri izdelovalec' },
    { source: 'View published', target: 'Ogled objavljenega' },
    { source: 'Delete App', target: 'Izbriši aplikacijo' },
    { source: 'Start from a template', target: 'Začnite s predlogo' },
    { source: 'Preview', target: 'Predogled' },
    { source: 'Contact Support', target: 'Kontaktirajte podporo' },
    { source: 'Documentation', target: 'Dokumentacija' },
    { source: 'Feature Requests', target: 'Zahteve za funkcije' },
    { source: 'See What’s New', target: 'Poglejte, kaj je novega' },
    { source: 'Search templates...', target: 'Iskanje predlog...' },
    { source: 'any', target: 'katerikoli' },
    { source: 'more', target: 'več' },
    { source: 'Choose Data Source', target: 'Izberite vir podatkov' },
    { source: 'works with 30+ data sources', target: 'deluje z več kot 30 podatkovnimi viri' },
    { source: 'Use this template', target: 'Uporabite to predlogo' },
    { source: 'stores data in Jet Tables', target: 'shranjuje podatke v Jet Tables' },
    { source: 'New Data', target: 'Novi podatki' },
    { source: 'using {0}', target: 'uporaba {0}' },
    { source: "Can't find resource you're looking for?", target: 'Ne najdete vira, ki ga iščete?' },
    { source: 'Admin Panel', target: 'Admin panel' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'Seznam, ustvarjanje in posodabljanje (CRUD) operacij na vaših podatkih'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target:
        'Izdelajte prilagojen administrativni panel na podlagi vseh podatkovnih baz, aplikacij in API-jev, kot je Stripe, Twilio in GraphQL.'
    },
    { source: 'All Integrations', target: 'Vse integracije' },
    { source: 'Databases', target: 'Podatkovne baze' },
    { source: 'APIs', target: 'API-ji' },
    { source: 'Frameworks', target: 'Ogrodja' },
    { source: 'Storages', target: 'Shranjevanja' },

    // Sign In
    { source: 'Good morning', target: 'Dobro jutro' },
    { source: 'Good afternoon', target: 'Dober dan' },
    { source: 'Good evening', target: 'Dober večer' },
    { source: 'Sign In', target: 'Prijavite se' },
    { source: 'Welcome Back.', target: 'Dobrodošli nazaj.' },
    { source: 'Sign in with {0}', target: 'Prijavite se z {0}' },
    { source: 'or login with', target: 'ali prijavo s' },
    { source: 'Enter E-mail', target: 'Vnesite e-mail' },
    { source: 'Enter password', target: 'Vnesite geslo' },
    { source: 'Login', target: 'Prijava' },
    { source: 'Create new account', target: 'Ustvari nov račun' },
    { source: 'Forgot my password', target: 'Pozabil sem geslo' },
    { source: 'required', target: 'obvezno' },
    { source: 'incorrect Email', target: 'napačen e-mail' },
    { source: 'Minimum password length {0}', target: 'Minimalna dolžina gesla {0}' },
    { source: 'Unable to Sign In', target: 'Nemogoče je prijaviti se' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'Začnite danes <span class="auth-form__accent">brezplačno</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target: 'Kartica ni potrebna. Vse napredne funkcije dobite brezplačno med 14-dnevnim PRO poskusnim obdobjem.'
    },
    { source: 'Enter First Name', target: 'Vnesite ime' },
    { source: 'Enter Last Name (optional)', target: 'Vnesite priimek (neobvezno)' },
    { source: 'Enter Email', target: 'Vnesite e-mail' },
    { source: 'Password', target: 'Geslo' },
    { source: 'Repeat Password', target: 'Ponovite geslo' },
    { source: 'By signing in you’re okay with our', target: 'Z prijavo se strinjate z našimi' },
    {
      source: 'Creating an account means you’re okay with our',
      target: 'Ustvarjanje računa pomeni, da se strinjate z našimi'
    },
    { source: 'Terms of Service', target: 'Pogoji storitve' },
    { source: 'Privacy Policy', target: 'Politika zasebnosti' },
    { source: 'and', target: 'in' },
    { source: 'Create your free account', target: 'Ustvarite svoj brezplačni račun' },
    { source: 'Already have an account', target: 'Že imate račun' },
    { source: 'Unable to Sign Up', target: 'Nemogoče je registrirati se' },

    // Restore password
    { source: 'Reset your password', target: 'Ponastavite geslo' },
    { source: 'Email Address', target: 'E-mail naslov' },
    { source: 'Reset password', target: 'Ponastavi geslo' },
    { source: 'Return to Sign In', target: 'Vrnite se na prijavo' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'Prosimo, preverite svoj e-mail – <strong>{0}</strong>. Poslali smo validacijsko povezavo, ki ji morate slediti, da spremenite geslo.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be al least 8 characters.',
      target: 'Skoraj končano, samo vnesite svoje novo geslo spodaj. <br>Mora biti dolgo vsaj 8 znakov.'
    },
    { source: 'Reset password & Sign In', target: 'Ponastavi geslo & Prijavi se' },
    { source: 'Unable to Send Code', target: 'Nemogoče poslati kodo' },
    { source: 'Unable to Change Password', target: 'Nemogoče spremeniti geslo' },

    // Email Verification
    { source: 'Email Verification', target: 'Preverjanje e-pošte' },
    { source: 'Resend verification code', target: 'Ponovno pošlji kodo za preverjanje' },
    { source: 'Verification email sent', target: 'Preverjanje e-pošte poslano' },
    { source: 'Your Email is now verified', target: 'Vaša e-pošta je zdaj preverjena' },
    { source: 'Request is incorrect', target: 'Povpraševanje je napačno' },

    // Invites
    {
      source: 'Join <span class="auth-form__accent">{0}</span>',
      target: 'Pridruži se <span class="auth-form__accent">{0}</span>'
    },
    {
      source: '<strong>{0}</strong> has invited you to join <strong>{1}</strong>',
      target: '<strong>{0}</strong> vas je povabil, da se pridružite <strong>{1}</strong>'
    },
    {
      source: 'Someone has invited you to join <strong>{0}</strong>',
      target: 'Nekdo vas je povabil, da se pridružite <strong>{0}</strong>'
    },
    {
      source: 'You are joining <strong>{0}</strong> using invite link',
      target: 'Pridružujete se <strong>{0}</strong> z uporabo povabila'
    },
    { source: 'Join', target: 'Pridruži se' },
    { source: 'Go to home page', target: 'Pojdi na domačo stran' },
    { source: 'Invite link is wrong', target: 'Povezava za povabilo je napačna' },
    {
      source:
        'Looks like your invitation link has expired or maybe you have followed the wrong link. Please try to ask to invite your again.',
      target:
        'Zdi se, da je vaša vabilna povezava potekla ali pa ste morda sledili napačni povezavi. Prosimo, poskusite zahtevati povabilo znova.'
    },
    {
      source: 'Unfortunately we failed to load information about this invitation',
      target: 'Na žalost nismo uspeli naložiti informacij o tem povabilu'
    },

    // Users & Teams
    { source: 'Members of {0}', target: 'Člani {0}' },
    { source: 'How to get started', target: 'Kako začeti' },
    { source: 'Users API', target: 'API uporabnikov' },
    { source: 'Teams API', target: 'API ekip' },
    { source: 'Invite Member', target: 'Povabi člana' },
    { source: 'Add User property', target: 'Dodaj lastnost uporabnika' },
    { source: 'Add Team property', target: 'Dodaj lastnost ekipe' },
    { source: 'Edit property', target: 'Uredi lastnost' },
    { source: 'Delete property', target: 'Izbriši lastnost' },
    { source: 'Users', target: 'Uporabniki' },
    { source: 'Teams', target: 'Ekipe' },
    { source: 'Search members', target: 'Iskanje članov' },
    { source: 'Search teams', target: 'Iskanje ekip' },
    { source: '{0} pages', target: '{0} strani' },
    { source: 'No members', target: 'Brez članov' }
  ]
};

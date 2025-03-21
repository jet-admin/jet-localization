import { Locale } from './locale';

export const locale: Locale = {
  name: 'croatian',
  language: 'hr',
  items: [
    // General
    { source: 'Save', target: 'Spremi' },
    { source: 'Create', target: 'Kreiraj' },
    { source: 'Duplicating', target: 'Dupliciranje' },
    { source: 'Duplicate', target: 'Duplikat' },
    { source: 'Mass Edit', target: 'Masovno uređivanje' },
    { source: 'Export', target: 'Izvoz' },
    { source: 'Import', target: 'Uvoz' },
    { source: 'Delete', target: 'Izbriši' },
    { source: 'Continue', target: 'Nastaviti' },
    { source: 'Submit', target: 'Podnesi' },
    { source: 'Cancel', target: 'Otkaži' },
    { source: 'Loading', target: 'Učitavanje' },
    { source: 'Please wait...', target: 'Molimo pričekajte...' },
    { source: 'Loading failed', target: 'Učitavanje nije uspjelo' },
    { source: 'Unknown error', target: 'Nepoznata greška' },
    { source: 'Add', target: 'Dodaj' },
    { source: 'or', target: 'ili' },
    { source: 'Hours', target: 'Sati' },
    { source: 'Minutes', target: 'Minute' },
    { source: 'Seconds', target: 'Sekunde' },
    { source: 'Saved', target: 'Spremljeno' },
    { source: 'Error', target: 'Greška' },
    { source: 'Page not found', target: 'Stranica nije pronađena' },
    {
      source: 'The specified address is incorrect, or the page does not exist',
      target: 'Navedena adresa je netočna, ili stranica ne postoji'
    },
    { source: 'Not allowed', target: 'Nije dopušteno' },
    {
      source: "You don't have permissions to access this page",
      target: 'Nemate dozvolu za pristup ovoj stranici'
    },
    { source: 'Are you sure want to close?', target: 'Jeste li sigurni da želite zatvoriti?' },
    { source: 'Close', target: 'Zatvoriti' },

    // Actions
    { source: 'Action executed', target: 'Radnja izvršena' },
    { source: 'Action executed successfully', target: 'Radnja uspješno izvršena' },
    { source: 'Action failed', target: 'Radnja nije uspjela' },
    {
      source: "You don't have permission for run this operation",
      target: 'Nemate dozvolu za izvođenje ove operacije'
    },
    { source: 'Specify parameters', target: 'Odredite parametre' },
    { source: 'Executing action', target: 'Izvršavanje radnje' },
    { source: 'You are executing <strong>{0}</strong>', target: 'Izvršavate <strong>{0}</strong>' },
    { source: 'Please fill in the parameters below.', target: 'Molimo ispunite dolje navedene parametre.' },
    { source: 'Execute', target: 'Izvrši' },
    { source: 'Executing', target: 'Izvršava se' },
    { source: 'Finished', target: 'Završeno' },
    { source: 'Done', target: 'Gotovo' },

    // Export
    { source: 'Records Export', target: 'Izvoz zapisa' },
    { source: 'Downloading records data as a file', target: 'Preuzimanje podataka zapisa kao datoteke' },
    { source: 'Choose format', target: 'Odaberite format' },
    { source: 'Number of exporting records', target: 'Broj zapisa za izvoz' },
    { source: { label: 'Export', context: 'submit' }, target: 'Izvoz' },
    { source: 'Exporting', target: 'Izvozi se' },
    { source: 'Export completed', target: 'Izvoz završen' },
    { source: 'Failed to export', target: 'Izvoz nije uspio' },

    // Components
    { source: 'optional', target: 'neobavezno' },
    { source: 'choose', target: 'odaberi' },
    { source: 'Clear value', target: 'Očisti vrijednost' },
    { source: 'loading...', target: 'učitavam...' },
    { source: 'Nothing found', target: 'Ništa nije pronađeno' },
    { source: 'Search...', target: 'Pretraži...' },
    { source: 'Enter at least {0} characters', target: 'Unesite barem {0} znakova' },
    { source: 'No options', target: 'Nema opcija' },
    { source: 'Drop files here or', target: 'Otpustite datoteke ovdje ili' },
    { source: 'Upload new', target: 'Učitaj novo' },
    { source: 'Clear', target: 'Očisti' },
    { source: 'Download', target: 'Preuzmi' },
    { source: 'Choose file', target: 'Odaberite datoteku' },
    { source: 'Choose files', target: 'Odaberite datoteke' },
    { source: 'Scan with Camera', target: 'Skeniraj s kamerom' },
    { source: 'Scan Image file', target: 'Skeniraj slikovnu datoteku' },
    { source: 'Choose camera', target: 'Odaberite kameru' },
    { source: 'Stop scanning', target: 'Zaustavi skeniranje' },
    { source: 'Scan again', target: 'Ponovno skeniraj' },
    { source: 'Use this scan', target: 'Koristite ovo skeniranje' },
    { source: 'Failed to scan', target: 'Skeniranje nije uspjelo' },
    {
      source: 'Code failed to scan, please try another image',
      target: 'Kod nije skeniran, pokušajte drugu sliku'
    },
    { source: 'current', target: 'trenutni' },
    { source: 'Day', target: 'Dan' },
    { source: 'Week', target: 'Tjedan' },
    { source: 'Month', target: 'Mjesec' },
    { source: 'Year', target: 'Godina' },
    { source: 'Today', target: 'Danas' },
    { source: 'Daily', target: 'Dnevni' },
    { source: 'Weekly', target: 'Tjedni' },
    { source: 'Monthly', target: 'Mjesečni' },
    { source: 'Quarterly', target: 'Kvartalni' },
    { source: 'Yearly', target: 'Godišnji' },
    { source: 'Hourly', target: 'Sati' },
    { source: 'Minutely', target: 'Minutni' },
    { source: 'Since', target: 'Od' },
    { source: 'Before', target: 'Prije' },
    { source: 'Between', target: 'Između' },
    { source: 'From date', target: 'Od datuma' },
    { source: 'To date', target: 'Do datuma' },
    { source: 'Coordinates', target: 'Koordinate' },
    { source: 'Latitude', target: 'Zemljopisna širina' },
    { source: 'Longitude', target: 'Zemljopisna dužina' },
    { source: 'Default color', target: 'Zadana boja' },
    { source: 'not specified', target: 'nije specificirano' },
    { source: 'Sign using your finger or pointer', target: 'Potpišite se koristeći prst ili pokazivač' },

    // List components
    { source: 'Filter', target: 'Filtriraj' },
    { source: 'Filter by field', target: 'Filtriraj po polju' },
    { source: 'Filter by...', target: 'Filtriraj po...' },
    { source: 'Back', target: 'Natrag' },
    { source: 'Back to {0} fields', target: 'Natrag na {0} polja' },
    { source: 'Choose {0} from list', target: 'Odaberi {0} iz popisa' },
    { source: '{0} fields', target: '{0} polja' },
    { source: '{0} relationships', target: '{0} odnosi' },
    { source: 'Aggregate {0}', target: 'Agregiraj {0}' },
    { source: 'No fields to select', target: 'Nema polja za odabir' },
    { source: 'Enter value...', target: 'Unesite vrijednost...' },
    { source: 'Exclude', target: 'Isključi' },
    { source: 'Actions', target: 'Akcije' },
    { source: 'Search', target: 'Traži' },
    { source: 'Sort 1 → 9', target: 'Sortiraj 1 → 9' },
    { source: 'Sort 9 → 1', target: 'Sortiraj 9 → 1' },
    { source: 'Sort A → Z', target: 'Sortiraj A → Z' },
    { source: 'Sort Z → A', target: 'Sortiraj Z → A' },
    { source: 'Refresh automatically', target: 'Automatski osvježavanje' },
    { source: 'All', target: 'Sve' },
    { source: 'Selected', target: 'Odabrano' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'Nažalost, nije pronađen nijedan {0} koji odgovara vašem upitu'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'Prikupljamo {0}, molimo pričekajte...' },
    { source: 'Add filter', target: 'Dodaj filtar' },
    { source: 'Delete this filter', target: 'Izbriši ovaj filtar' },
    { source: 'Toggle ordering', target: 'Promijeni redoslijed' },
    { source: 'Not configured', target: 'Nije konfigurirano' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'Nažalost, ovaj komponent još nije konfiguriran'
    },
    { source: 'records', target: 'zapisi' },
    { source: '{0} items', target: '{0} stavke' },

    // Menu
    { source: 'Users & Teams', target: 'Korisnici i timovi' },
    { source: 'Billing', target: 'Naplata' },
    { source: 'Billing & Plans', target: 'Naplata i planovi' },
    { source: 'API keys', target: 'API ključevi' },
    { source: 'Dark Mode', target: 'Tamni način' },
    { source: 'Light Mode', target: 'Svijetli način' },
    { source: 'Disable Staff', target: 'Onemogući osoblje' },
    { source: 'Enable Staff', target: 'Omogući osoblje' },
    { source: 'Manage Templates', target: 'Upravljanje predlošcima' },
    { source: 'Logout', target: 'Odjava' },
    { source: 'Activity Log', target: 'Dnevnik aktivnosti' },
    { source: 'Collaborations', target: 'Suradnje' },
    { source: 'Open Visual Builder', target: 'Otvorite Visual Builder' },

    // Filters
    { source: 'equals', target: 'jednako' },
    { source: 'does not equal', target: 'nije jednako' },
    { source: '{0} equals {1}', target: '{0} jednako {1}' },
    { source: '{0} does not equal {1}', target: '{0} nije jednako {1}' },

    { source: 'contains', target: 'sadrži' },
    { source: 'does not contain', target: 'ne sadrži' },
    { source: '{0} contains {1}', target: '{0} sadrži {1}' },
    { source: '{0} not contains {1}', target: '{0} ne sadrži {1}' },

    { source: 'starts with', target: 'počinje s' },
    { source: 'does not start with', target: 'ne počinje s' },
    { source: '{0} starts with {1}', target: '{0} počinje s {1}' },
    { source: '{0} does not start with {1}', target: '{0} ne počinje s {1}' },

    { source: 'ends with', target: 'završava s' },
    { source: 'does not end with', target: 'ne završava s' },
    { source: '{0} ends with {1}', target: '{0} završava s {1}' },
    { source: '{0} does not end with {1}', target: '{0} ne završava s {1}' },

    { source: 'greater than', target: 'veće od' },
    { source: 'is not greater than', target: 'nije veće od' },
    { source: '{0} is greater than {1}', target: '{0} je veće od {1}' },
    { source: '{0} not greater than {1}', target: '{0} nije veće od {1}' },

    { source: 'greater than or equals', target: 'veće ili jednako' },
    { source: 'is not greater than or equals', target: 'nije veće niti jednako' },
    { source: '{0} is greater than or equals {1}', target: '{0} je veće ili jednako {1}' },
    { source: '{0} is not greater than or equals {1}', target: '{0} nije veće niti jednako {1}' },

    { source: 'less than', target: 'manje od' },
    { source: 'is not less than', target: 'nije manje od' },
    { source: '{0} is less than {1}', target: '{0} je manje od {1}' },
    { source: '{0} is not less than {1}', target: '{0} nije manje od {1}' },

    { source: 'less than or equals', target: 'manje ili jednako' },
    { source: 'is not less than or equals', target: 'nije manje niti jednako' },
    { source: '{0} is less than or equals {1}', target: '{0} je manje ili jednako {1}' },
    { source: '{0} is not less than or equals {1}', target: '{0} nije manje niti jednako {1}' },

    { source: 'one of', target: 'jedan od' },
    { source: 'is one of', target: 'je jedan od' },
    { source: 'is not one of', target: 'nije jedan od' },
    { source: '{0} is one of {1}', target: '{0} je jedan od {1}' },
    { source: '{0} is not one of {1}', target: '{0} nije jedan od {1}' },

    { source: 'is null', target: 'je null' },
    { source: 'is not null', target: 'nije null' },
    { source: '{0} is null', target: '{0} je null' },
    { source: '{0} is not null', target: '{0} nije null' },

    { source: 'is future', target: 'je u budućnosti' },
    { source: 'in the future', target: 'u budućnosti' },
    { source: 'is not in the future', target: 'nije u budućnosti' },
    { source: '{0} is in the future', target: '{0} je u budućnosti' },
    { source: '{0} is not in the future', target: '{0} nije u budućnosti' },

    { source: 'is past', target: 'je u prošlosti' },
    { source: 'in the past', target: 'u prošlosti' },
    { source: 'is not in the past', target: 'nije u prošlosti' },
    { source: '{0} is in the past', target: '{0} je u prošlosti' },
    { source: '{0} is not in the past', target: '{0} nije u prošlosti' },

    { source: 'is Today', target: 'je danas' },
    { source: 'today', target: 'danas' },
    { source: 'is not today', target: 'nije danas' },
    { source: '{0} is today', target: '{0} je danas' },
    { source: '{0} is not today', target: '{0} nije danas' },

    { source: 'is Yesterday', target: 'je jučer' },
    { source: 'yesterday', target: 'jučer' },
    { source: 'is not yesterday', target: 'nije jučer' },
    { source: '{0} is yesterday', target: '{0} je jučer' },
    { source: '{0} is not yesterday', target: '{0} nije jučer' },

    { source: 'is Last Week', target: 'je prošli tjedan' },
    { source: 'last week', target: 'prošli tjedan' },
    { source: 'is not last week', target: 'nije prošli tjedan' },
    { source: '{0} is last week', target: '{0} je prošli tjedan' },
    { source: '{0} is not last week', target: '{0} nije prošli tjedan' },

    { source: 'is Last Month', target: 'je prošli mjesec' },
    { source: 'last month', target: 'prošli mjesec' },
    { source: 'is not last month', target: 'nije prošli mjesec' },
    { source: '{0} is last month', target: '{0} je prošli mjesec' },
    { source: '{0} is not last month', target: '{0} nije prošli mjesec' },

    { source: 'is Last Quarter', target: 'je prošli kvartal' },
    { source: 'last quarter', target: 'prošli kvartal' },
    { source: 'is not last quarter', target: 'nije prošli kvartal' },
    { source: '{0} is last quarter', target: '{0} je prošli kvartal' },
    { source: '{0} is not last quarter', target: '{0} nije prošli kvartal' },

    { source: 'is Last Year', target: 'je prošle godine' },
    { source: 'last year', target: 'prošle godine' },
    { source: 'is not last year', target: 'nije prošle godine' },
    { source: '{0} is last year', target: '{0} je prošle godine' },
    { source: '{0} is not last year', target: '{0} nije prošle godine' },

    { source: 'is Last X Days', target: 'je posljednjih X dana' },
    { source: 'last X days', target: 'posljednjih X dana' },
    { source: 'is not last X days', target: 'nije posljednjih X dana' },
    { source: '{0} is last {1} days', target: '{0} je posljednjih {1} dana' },
    { source: '{0} is not last {1} days', target: '{0} nije posljednjih {1} dana' },

    { source: 'is Current Week', target: 'je ovaj tjedan' },
    { source: 'current week', target: 'ovaj tjedan' },
    { source: 'is not current week', target: 'nije ovaj tjedan' },
    { source: '{0} is current week', target: '{0} je ovaj tjedan' },
    { source: '{0} is not current week', target: '{0} nije ovaj tjedan' },

    { source: 'is Current Month', target: 'je ovaj mjesec' },
    { source: 'current month', target: 'ovaj mjesec' },
    { source: 'is not current month', target: 'nije ovaj mjesec' },
    { source: '{0} is current month', target: '{0} je ovaj mjesec' },
    { source: '{0} is not current month', target: '{0} nije ovaj mjesec' },

    { source: 'is Current Quarter', target: 'je ovaj kvartal' },
    { source: 'current quarter', target: 'ovaj kvartal' },
    { source: 'is not current quarter', target: 'nije ovaj kvartal' },
    { source: '{0} is current quarter', target: '{0} je ovaj kvartal' },
    { source: '{0} is not current quarter', target: '{0} nije ovaj kvartal' },

    { source: 'is Current Year', target: 'je ove godine' },
    { source: 'current year', target: 'ove godine' },
    { source: 'is not current year', target: 'nije ove godine' },
    { source: '{0} is current year', target: '{0} je ove godine' },
    { source: '{0} is not current year', target: '{0} nije ove godine' },

    { source: 'is Previous Week', target: 'je prethodni tjedan' },
    { source: 'previous week', target: 'prethodni tjedan' },
    { source: 'is not previous week', target: 'nije prethodni tjedan' },
    { source: '{0} is previous week', target: '{0} je prethodni tjedan' },
    { source: '{0} is not previous week', target: '{0} nije prethodni tjedan' },

    { source: 'is Previous Month', target: 'je prethodni mjesec' },
    { source: 'previous month', target: 'prethodni mjesec' },
    { source: 'is not previous month', target: 'nije prethodni mjesec' },
    { source: '{0} is previous month', target: '{0} je prethodni mjesec' },
    { source: '{0} is not previous month', target: '{0} nije prethodni mjesec' },

    { source: 'is Previous Quarter', target: 'je prethodni kvartal' },
    { source: 'previous quarter', target: 'prethodni kvartal' },
    { source: 'is not previous quarter', target: 'nije prethodni kvartal' },
    { source: '{0} is previous quarter', target: '{0} je prethodni kvartal' },
    { source: '{0} is not previous quarter', target: '{0} nije prethodni kvartal' },

    { source: 'is Previous Year', target: 'je prethodne godine' },
    { source: 'previous year', target: 'prethodne godine' },
    { source: 'is not previous year', target: 'nije prethodne godine' },
    { source: '{0} is previous year', target: '{0} je prethodne godine' },
    { source: '{0} is not previous year', target: '{0} nije prethodne godine' },

    { source: 'is Previous X Days', target: 'je prethodnih X dana' },
    { source: 'previous X days', target: 'prethodnih X dana' },
    { source: 'is not previous X days', target: 'nije prethodnih X dana' },
    { source: '{0} is previous {1} days', target: '{0} je prethodnih {1} dana' },
    { source: '{0} is not previous {1} days', target: '{0} nije prethodnih {1} dana' },

    { source: 'is empty', target: 'je prazno' },
    { source: 'is not empty', target: 'nije prazno' },
    { source: '{0} is empty', target: '{0} je prazno' },
    { source: '{0} is not empty', target: '{0} nije prazno' },

    { source: 'covered by', target: 'pokriveno s' },
    { source: 'is not covered by', target: 'nije pokriveno s' },
    { source: '{0} covered by {1}', target: '{0} pokriveno s {1}' },
    { source: '{0} is not covered by {1}', target: '{0} nije pokriveno s {1}' },

    // Activity log
    { source: 'No activities found', target: 'Nema pronađenih aktivnosti' },
    {
      source: 'Start to working with data to log activities.',
      target: 'Započnite rad s podacima za bilježenje aktivnosti.'
    },
    { source: 'All Activity', target: 'Sve aktivnosti' },
    { source: 'Create Record', target: 'Napravi zapis' },
    { source: 'Update Record', target: 'Ažuriraj zapis' },
    { source: 'Delete Record', target: 'Izbriši zapis' },
    { source: 'All Members', target: 'Svi članovi' },

    // Collaboration
    { source: 'Timeline', target: 'Vremenska crta' },
    { source: 'Messages', target: 'Poruke' },
    { source: 'Activity', target: 'Aktivnost' },
    { source: 'Start chatting with your team', target: 'Započnite razgovor s timom' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'Donesite poruku o trenutnoj stranici kako biste pratili važne informacije.'
    },
    { source: 'Your Message', target: 'Vaša poruka' },
    { source: 'Send', target: 'Pošalji' },

    // Share
    { source: 'Invite members', target: 'Pozovi članove' },
    { source: 'Public share', target: 'Javno dijeljenje' },
    { source: 'Sign Up', target: 'Prijavi se' },
    { source: 'Members', target: 'Članovi' },
    { source: 'Invite with Email', target: 'Pozovi putem e-pošte' },
    { source: 'Invite someone...', target: 'Pozovi nekoga...' },
    { source: 'Send Invite', target: 'Pošalji pozivnicu' },
    {
      source: 'Limit access to your data by user properties',
      target: 'Ograničite pristup svojim podacima pomoću svojstava korisnika'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: 'Unesite email korisnika kojeg želite pozvati na suradnju.'
    },
    { source: 'Copy', target: 'Kopiraj' },
    { source: 'Invite with Link', target: 'Pozovi putem poveznice' },
    { source: 'Remove link', target: 'Ukloni poveznicu' },
    { source: 'Add Invite Link', target: 'Dodaj poveznicu za poziv' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'Svaka osoba na internetu s ovom poveznicom moći će se pridružiti odabranom timu.'
    },
    { source: 'Pending Invites', target: 'Pozivnice na čekanju' },
    { source: 'Cancel invite', target: 'Otkaži poziv' },
    { source: 'Active Members', target: 'Aktivni članovi' },
    { source: 'Remove member', target: 'Ukloni člana' },
    {
      source: 'You are setting sharing for the current page',
      target: 'Postavljate dijeljenje za trenutnu stranicu'
    },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'Postavljate dijeljenje za sve stranice svoje aplikacije.'
    },
    { source: 'Public access link', target: 'Poveznica za javni pristup' },
    { source: 'Updating public access...', target: 'Ažuriranje javnog pristupa...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'Svatko s ovom poveznicom moći će vidjeti trenutnu stranicu. Na taj način možete trenutnu stranicu uključiti i na drugu web stranicu.'
    },
    { source: 'Embed code (IFRAME)', target: 'Ugradi kod (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: 'Zalijepite ovaj kod u HTML kôd svoje web stranice gdje biste željeli da se pojavi trenutna stranica.'
    },
    { source: 'link', target: 'poveznica' },
    { source: 'invited', target: 'pozvan' },
    { source: 'Choose Team', target: 'Odaberite tim' },
    { source: 'App Teams', target: 'Timovi aplikacije' },
    { source: 'Built-In Teams', target: 'Ugrađeni timovi' },
    { source: 'Clear Team', target: 'Očisti tim' },
    { source: 'Can build application and modify data', target: 'Može izgraditi aplikaciju i mijenjati podatke' },
    { source: 'Can modify data in application', target: 'Može mijenjati podatke u aplikaciji' },
    { source: 'Can only view data without modification', target: 'Može samo gledati podatke bez izmjena' },
    { source: 'Add Team', target: 'Dodaj tim' },
    { source: 'Edit Team', target: 'Uredi tim' },
    { source: 'Adding Team', target: 'Dodavanje tima' },
    {
      source: 'Keep control over who has access to current App',
      target: 'Zadržite kontrolu nad onime tko ima pristup trenutnoj aplikaciji'
    },
    { source: 'Enter Team Name', target: 'Unesite ime tima' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'Upišite ime tima, npr: Podrška, Prodaja, Marketing, itd.'
    },
    { source: 'Add a new member to this team.', target: 'Dodaj novog člana u ovaj tim.' },
    { source: 'Invite new member', target: 'Pozovi novog člana' },
    { source: 'User', target: 'Korisnik' },
    { source: 'Date Added', target: 'Datum dodavanja' },
    { source: 'You', target: 'Vi' },
    { source: 'Edit', target: 'Uredi' },
    { source: 'No users in this team', target: 'Nema korisnika u ovom timu' },
    { source: 'Page Permissions', target: 'Dozvole za stranicu' },
    { source: 'App Permissions', target: 'Dozvole za aplikaciju' },
    { source: 'Properties', target: 'Svojstva' },
    { source: 'Page name', target: 'Naziv stranice' },
    { source: 'Access', target: 'Pristup' },
    { source: 'Full Access', target: 'Puni pristup' },
    { source: 'Read Only', target: 'Samo za čitanje' },
    { source: 'No Access', target: 'Bez pristupa' },
    { source: 'Read', target: 'Čitanje' },
    { source: 'Update', target: 'Ažuriraj' },
    { source: 'Write', target: 'Pisanje' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'Brisanje' },
    { source: 'Custom Access', target: 'Prilagođeni pristup' },
    { source: 'Read, create, update and delete data', target: 'Čitaj, kreiraj, ažuriraj i briši podatke' },
    { source: 'Choose allowed operations granularly', target: 'Granularno odaberite dopuštene operacije' },
    { source: 'Without any access to data', target: 'Bez pristupa podacima' },
    { source: 'Name', target: 'Ime' },
    { source: 'Active', target: 'Aktivan' },
    { source: 'Settings', target: 'Postavke' },
    { source: 'Members and Teams', target: 'Članovi i timovi' },
    { source: 'App Builder', target: 'Graditelj aplikacija' },
    { source: 'Collection Permissions', target: 'Dozvole za kolekciju' },
    { source: "Grant permissions to app's collection", target: 'Dodijeli dozvole za kolekciju aplikacije' },
    { source: 'Collection', target: 'Kolekcija' },
    {
      source: 'Limit access to your data by team properties',
      target: 'Ograničite pristup vašim podacima prema svojstvima tima'
    },
    { source: 'Save Team', target: 'Spremi tim' },
    { source: 'Create Team', target: 'Kreiraj tim' },
    { source: 'Value', target: 'Vrijednost' },
    { source: 'No properties specified', target: 'Nema specificiranih svojstava' },

    // Navigation
    { source: 'Current App', target: 'Trenutna aplikacija' },
    { source: 'Home', target: 'Početna' },

    // Profile
    {
      source: 'We are fetching user data, please, wait...',
      target: 'Dohvaćamo korisničke podatke, molimo pričekajte...'
    },
    { source: 'Profile Settings', target: 'Postavke profila' },
    { source: 'Basic information about your account.', target: 'Osnovne informacije o vašem računu.' },
    { source: 'Photo', target: 'Fotografija' },
    { source: 'your photo', target: 'vaša fotografija' },
    { source: 'Change', target: 'Promijeni' },
    { source: 'Upload', target: 'Učitaj' },
    { source: 'Photo was successfully updated', target: 'Fotografija je uspješno ažurirana' },
    { source: 'Photo was successfully deleted', target: 'Fotografija je uspješno izbrisana' },
    { source: 'First Name', target: 'Ime' },
    { source: 'Last Name', target: 'Prezime' },
    { source: 'Your Email', target: 'Vaš Email' },
    { source: 'Email Change', target: 'Promjena Email adrese' },
    { source: 'New Email', target: 'Novi Email' },
    { source: 'Change Email', target: 'Promijeni Email' },
    { source: 'Check your inbox', target: 'Provjerite svoju pristiglu poštu' },
    { source: 'Confirmation Email was sent to {0}', target: 'Potvrdna Email poruka poslana je na {0}' },
    { source: 'Changing Email failed', target: 'Promjena Email adrese nije uspjela' },
    { source: 'Password Change', target: 'Promjena lozinke' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target: 'Lozinka treba biti dovoljno jaka za zaštitu vašeg računa, pa neka bude najmanje 12 znakova dugačka.'
    },
    { source: 'Current Password', target: 'Trenutna lozinka' },
    { source: 'New Password', target: 'Nova lozinka' },
    { source: 'Confirm New Password', target: 'Potvrdi novu lozinku' },
    { source: 'Change Password', target: 'Promijeni lozinku' },
    {
      source: 'Current password was successfully updated, all other sessions will be logged out shortly',
      target: 'Trenutna lozinka je uspješno ažurirana, sve druge sesije će uskoro biti odjavljene'
    },
    { source: 'Saving current password failed', target: 'Spremanje trenutne lozinke nije uspjelo' },
    { source: 'Short password', target: 'Prekratka lozinka' },
    { source: "Passwords don't match", target: 'Lozinke se ne podudaraju' },
    { source: 'Personal Preferences', target: 'Osobne postavke' },
    { source: 'Language', target: 'Jezik' },
    { source: 'Timezone', target: 'Vremenska zona' },
    { source: 'Current time in {0} is', target: 'Trenutno vrijeme u {0} je' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'Prilagodite dodatne postavke za svoj račun.'
    },
    { source: 'News & Proposals', target: 'Novosti i prijedlozi' },
    {
      source: 'Subscribe to our updates and proposals.',
      target: 'Pretplatite se na naša ažuriranja i prijedloge.'
    },
    { source: 'Save changes', target: 'Spremi promjene' },
    { source: 'Current user was successfully updated', target: 'Trenutni korisnik je uspješno ažuriran' },
    { source: 'Saving current user failed', target: 'Spremanje trenutnog korisnika nije uspjelo' },

    // My Apps
    { source: 'Type to search...', target: 'Upišite za pretragu...' },
    { source: 'My Apps', target: 'Moje aplikacije' },
    { source: 'New App', target: 'Nova aplikacija' },
    { source: 'Builder', target: 'Graditelj' },
    { source: 'App', target: 'Aplikacija' },
    { source: 'continue install', target: 'nastavi instalaciju' },
    { source: 'Open builder', target: 'Otvori graditelj' },
    { source: 'View published', target: 'Pogledaj objavljene' },
    { source: 'Delete App', target: 'Izbriši aplikaciju' },
    { source: 'Start from a template', target: 'Počni od predloška' },
    { source: 'Preview', target: 'Pregled' },
    { source: 'Contact Support', target: 'Kontaktiraj podršku' },
    { source: 'Documentation', target: 'Dokumentacija' },
    { source: 'Feature Requests', target: 'Zahtjevi za značajke' },
    { source: 'See What’s New', target: 'Pogledaj što je novo' },
    { source: 'Search templates...', target: 'Pretraži predloške...' },
    { source: 'any', target: 'bilo koji' },
    { source: 'more', target: 'više' },
    { source: 'Choose Data Source', target: 'Odaberi izvor podataka' },
    { source: 'works with 30+ data sources', target: 'radi s više od 30 izvora podataka' },
    { source: 'Use this template', target: 'Koristi ovaj predložak' },
    { source: 'stores data in Jet Tables', target: 'pohranjuje podatke u Jet tablice' },
    { source: 'New Data', target: 'Novi podaci' },
    { source: 'using {0}', target: 'koristi {0}' },
    { source: "Can't find resource you're looking for?", target: 'Ne možete pronaći resurs koji tražite?' },
    { source: 'Admin Panel', target: 'Administrativna ploča' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'Popis, kreiranje i ažuriranje (CRUD) operacija na vašim podacima'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target:
        'Izradite prilagođenu administrativnu ploču temeljenu na bilo kojoj bazi podataka, aplikacijama i API-jima poput Stripe, Twilio i GraphQL.'
    },
    { source: 'All Integrations', target: 'Sve integracije' },
    { source: 'Databases', target: 'Baze podataka' },
    { source: 'APIs', target: 'API-ji' },
    { source: 'Frameworks', target: 'Okviri' },
    { source: 'Storages', target: 'Skladišta' },

    // Sign In
    { source: 'Good morning', target: 'Dobro jutro' },
    { source: 'Good afternoon', target: 'Dobar dan' },
    { source: 'Good evening', target: 'Dobra večer' },
    { source: 'Sign In', target: 'Prijava' },
    { source: 'Welcome Back.', target: 'Dobrodošli natrag.' },
    { source: 'Sign in with {0}', target: 'Prijavite se pomoću {0}' },
    { source: 'or login with', target: 'ili prijava s' },
    { source: 'Enter E-mail', target: 'Unesite e-mail' },
    { source: 'Enter password', target: 'Unesite lozinku' },
    { source: 'Login', target: 'Prijava' },
    { source: 'Create new account', target: 'Kreirajte novi račun' },
    { source: 'Forgot my password', target: 'Zaboravio/la sam lozinku' },
    { source: 'required', target: 'obavezno' },
    { source: 'incorrect Email', target: 'neispravan e-mail' },
    { source: 'Minimum password length {0}', target: 'Minimalna duljina lozinke {0}' },
    { source: 'Unable to Sign In', target: 'Nije moguće prijaviti se' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'Započnite <span class="auth-form__accent">besplatno danas</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target: 'Nije potrebna kartica. Dobit ćete svu naprednu funkcionalnost besplatno tijekom 14-dnevne PRO probe.'
    },
    { source: 'Enter First Name', target: 'Unesite ime' },
    { source: 'Enter Last Name (optional)', target: 'Unesite prezime (neobavezno)' },
    { source: 'Enter Email', target: 'Unesite e-mail' },
    { source: 'Password', target: 'Lozinka' },
    { source: 'Repeat Password', target: 'Ponovite lozinku' },
    {
      source: 'By signing in you’re okay with our',
      target: 'Prijavom se slažete s našim'
    },
    {
      source: 'Creating an account means you’re okay with our',
      target: 'Izrada računa znači da ste u redu s našim'
    },
    { source: 'Terms of Service', target: 'Uvjetima usluge' },
    { source: 'Privacy Policy', target: 'Politikom privatnosti' },
    { source: 'and', target: 'i' },
    { source: 'Create your free account', target: 'Kreirajte svoj besplatni račun' },
    { source: 'Already have an account', target: 'Već imate račun' },
    { source: 'Unable to Sign Up', target: 'Nije moguće prijaviti se' },

    // Restore password
    { source: 'Reset your password', target: 'Resetirajte lozinku' },
    { source: 'Email Address', target: 'Email adresa' },
    { source: 'Reset password', target: 'Resetirajte lozinku' },
    { source: 'Return to Sign In', target: 'Povratak na prijavu' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'Molimo provjerite svoj e-mail – <strong>{0}</strong>. Poslali smo vam poveznicu za potvrdu koju trebate slijediti kako biste promijenili lozinku.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be at least 8 characters.',
      target: 'Skoro gotovo, samo unesite svoju novu lozinku ispod. <br>Mora imati najmanje 8 znakova.'
    },
    { source: 'Reset password & Sign In', target: 'Resetirajte lozinku i prijavite se' },
    { source: 'Unable to Send Code', target: 'Nije moguće poslati kod' },
    { source: 'Unable to Change Password', target: 'Nije moguće promijeniti lozinku' },

    // Email Verification
    { source: 'Email Verification', target: 'Provjera e-maila' },
    { source: 'Resend verification code', target: 'Ponovno pošalji kod za provjeru' },
    { source: 'Verification email sent', target: 'E-mail za provjeru poslan' },
    { source: 'Your Email is now verified', target: 'Vaš e-mail je sada provjeren' },
    { source: 'Request is incorrect', target: 'Zahtjev je netočan' },

    // Invites
    {
      source: 'Join <span class="auth-form__accent">{0}</span>',
      target: 'Pridružite se <span class="auth-form__accent">{0}</span>'
    },
    {
      source: '<strong>{0}</strong> has invited you to join <strong>{1}</strong>',
      target: '<strong>{0}</strong> vas je pozvao u <strong>{1}</strong>'
    },
    {
      source: 'Someone has invited you to join <strong>{0}</strong>',
      target: 'Netko vas je pozvao u <strong>{0}</strong>'
    },
    {
      source: 'You are joining <strong>{0}</strong> using invite link',
      target: 'Pridružujete se <strong>{0}</strong> koristeći pozivnu poveznicu'
    },
    { source: 'Join', target: 'Pridruži se' },
    { source: 'Go to home page', target: 'Idi na početnu stranicu' },
    { source: 'Invite link is wrong', target: 'Pozivna poveznica je netočna' },
    {
      source:
        'Looks like your invitation link has expired or maybe you have followed the wrong link. Please try to ask to invite your again.',
      target:
        'Čini se da je vaša pozivna poveznica istekla ili ste možda slijedili pogrešnu poveznicu. Molimo pokušajte zatražiti pozivnicu ponovno.'
    },
    {
      source: 'Unfortunately we failed to load information about this invitation',
      target: 'Nažalost, nismo uspjeli učitati podatke o ovom pozivu'
    },

    // Users & Teams
    { source: 'Members of {0}', target: 'Članovi {0}' },
    { source: 'How to get started', target: 'Kako započeti' },
    { source: 'Users API', target: 'API korisinici' },
    { source: 'Teams API', target: 'API timovi' },
    { source: 'Invite Member', target: 'Pozovi člana' },
    { source: 'Add User property', target: 'Dodaj svojstvo korisnika' },
    { source: 'Add Team property', target: 'Dodaj svojstvo tima' },
    { source: 'Edit property', target: 'Uredi svojstvo' },
    { source: 'Delete property', target: 'Izbriši svojstvo' },
    { source: 'Users', target: 'Korisnici' },
    { source: 'Teams', target: 'Timovi' },
    { source: 'Search members', target: 'Traži članove' },
    { source: 'Search teams', target: 'Traži timove' },
    { source: '{0} pages', target: '{0} stranice' },
    { source: 'No members', target: 'Nema članova' }
  ]
};

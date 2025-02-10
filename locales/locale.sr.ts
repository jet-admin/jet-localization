import { Locale } from './locale';

export const locale: Locale = {
  name: 'serbian',
  language: 'sr',
  items: [
    // General
    { source: 'Save', target: 'Sačuvaj' },
    { source: 'Create', target: 'Napravi' },
    { source: 'Duplicating', target: 'Dupliranje' },
    { source: 'Duplicate', target: 'Dupliciraj' },
    { source: 'Mass Edit', target: 'Masovno uredjivanje' },
    { source: 'Export', target: 'Izvezi' },
    { source: 'Import', target: 'Uvezi' },
    { source: 'Delete', target: 'Obriši' },
    { source: 'Continue', target: 'Nastavi' },
    { source: 'Submit', target: 'Pošalji' },
    { source: 'Cancel', target: 'Otkaži' },
    { source: 'Loading', target: 'Učitavanje' },
    { source: 'Please wait...', target: 'Molimo sačekajte...' },
    { source: 'Loading failed', target: 'Učitavanje nije uspelo' },
    { source: 'Unknown error', target: 'Nepoznata greška' },
    { source: 'Add', target: 'Dodaj' },
    { source: 'or', target: 'ili' },
    { source: 'Hours', target: 'Sati' },
    { source: 'Minutes', target: 'Minuti' },
    { source: 'Seconds', target: 'Sekunde' },
    { source: 'Saved', target: 'Sačuvano' },
    { source: 'Error', target: 'Greška' },
    { source: 'Page not found', target: 'Stranica nije pronađena' },
    {
      source: 'The specified address is incorrect, or the page does not exist',
      target: 'Unesena adresa je netačna, ili stranica ne postoji'
    },
    { source: 'Not allowed', target: 'Nije dozvoljeno' },
    {
      source: "You don't have permissions to access this page",
      target: 'Nemate dozvolu za pristup ovoj stranici'
    },
    { source: 'Are you sure want to close?', target: 'Da li ste sigurni da želite da zatvorite?' },
    { source: 'Close', target: 'Zatvori' },

    // Actions
    { source: 'Action executed', target: 'Akcija izvršena' },
    { source: 'Action executed successfully', target: 'Akcija uspešno izvršena' },
    { source: 'Action failed', target: 'Akcija nije uspela' },
    {
      source: "You don't have permission for run this operation",
      target: 'Nemate dozvolu za izvršavanje ove operacije'
    },
    { source: 'Specify parameters', target: 'Navedite parametre' },
    { source: 'Executing action', target: 'Izvršavanje akcije' },
    { source: 'You are executing <strong>{0}</strong>', target: 'Izvršavate <strong>{0}</strong>' },
    { source: 'Please fill in the parameters below.', target: 'Molimo unesite parametre ispod.' },
    { source: 'Execute', target: 'Izvrši' },
    { source: 'Executing', target: 'Izvršavanje' },
    { source: 'Finished', target: 'Završeno' },
    { source: 'Done', target: 'Gotovo' },

    // Export
    { source: 'Records Export', target: 'Izvoz zapisa' },
    { source: 'Downloading records data as a file', target: 'Preuzimanje podataka zapisa kao datoteke' },
    { source: 'Choose format', target: 'Izaberi format' },
    { source: 'Number of exporting records', target: 'Broj zapisa za izvoz' },
    { source: { label: 'Export', context: 'submit' }, target: 'Izvoz' },
    { source: 'Exporting', target: 'Izvoz u toku' },
    { source: 'Export completed', target: 'Izvoz završen' },
    { source: 'Failed to export', target: 'Izvoz nije uspeo' },

    // Components
    { source: 'optional', target: 'opciono' },
    { source: 'choose', target: 'izaberite' },
    { source: 'Clear value', target: 'Obriši vrednost' },
    { source: 'loading...', target: 'učitavanje...' },
    { source: 'Nothing found', target: 'Ništa nije pronađeno' },
    { source: 'Search...', target: 'Pretraži...' },
    { source: 'Enter at least {0} characters', target: 'Unesite najmanje {0} znakova' },
    { source: 'No options', target: 'Nema opcija' },
    { source: 'Drop files here or', target: 'Otpustite datoteke ovde ili' },
    { source: 'Upload new', target: 'Otpremi novi' },
    { source: 'Clear', target: 'Obriši' },
    { source: 'Download', target: 'Preuzmi' },
    { source: 'Choose file', target: 'Izaberi datoteku' },
    { source: 'Choose files', target: 'Izaberi datoteke' },
    { source: 'Scan with Camera', target: 'Skeniraj kamerom' },
    { source: 'Scan Image file', target: 'Skeniraj datoteku slike' },
    { source: 'Choose camera', target: 'Izaberi kameru' },
    { source: 'Stop scanning', target: 'Zaustavi skeniranje' },
    { source: 'Scan again', target: 'Skeniraj ponovo' },
    { source: 'Use this scan', target: 'Koristi ovaj sken' },
    { source: 'Failed to scan', target: 'Skeniranje nije uspelo' },
    {
      source: 'Code failed to scan, please try another image',
      target: 'Kod nije moguće skenirati, pokušajte drugu sliku'
    },
    { source: 'current', target: 'trenutni' },
    { source: 'Day', target: 'Dan' },
    { source: 'Week', target: 'Nedelja' },
    { source: 'Month', target: 'Mesec' },
    { source: 'Year', target: 'Godina' },
    { source: 'Today', target: 'Danas' },
    { source: 'Daily', target: 'Dnevno' },
    { source: 'Weekly', target: 'Nedeljno' },
    { source: 'Monthly', target: 'Mesečno' },
    { source: 'Quarterly', target: 'Kvartalno' },
    { source: 'Yearly', target: 'Godišnje' },
    { source: 'Hourly', target: 'Po satu' },
    { source: 'Minutely', target: 'Po minutu' },
    { source: 'Since', target: 'Od' },
    { source: 'Before', target: 'Pre' },
    { source: 'Between', target: 'Između' },
    { source: 'From date', target: 'Od datuma' },
    { source: 'To date', target: 'Do datuma' },
    { source: 'Coordinates', target: 'Koordinate' },
    { source: 'Latitude', target: 'Geografska širina' },
    { source: 'Longitude', target: 'Geografska dužina' },
    { source: 'Default color', target: 'Podrazumevana boja' },
    { source: 'not specified', target: 'nije navedeno' },
    { source: 'Sign using your finger or pointer', target: 'Potpišite se koristeći prst ili pokazivač' },

    // List components
    { source: 'Filter', target: 'Filter' },
    { source: 'Filter by field', target: 'Filtriraj po polju' },
    { source: 'Filter by...', target: 'Filtriraj po...' },
    { source: 'Back', target: 'Nazad' },
    { source: 'Back to {0} fields', target: 'Nazad na {0} polja' },
    { source: 'Choose {0} from list', target: 'Izaberite {0} sa liste' },
    { source: '{0} fields', target: '{0} polja' },
    { source: '{0} relationships', target: '{0} odnosa' },
    { source: 'Aggregate {0}', target: 'Agreguj {0}' },
    { source: 'No fields to select', target: 'Nema polja za izbor' },
    { source: 'Enter value...', target: 'Unesite vrednost...' },
    { source: 'Exclude', target: 'Isključi' },
    { source: 'Actions', target: 'Akcije' },
    { source: 'Search', target: 'Pretraga' },
    { source: 'Sort 1 → 9', target: 'Sortiraj 1 → 9' },
    { source: 'Sort 9 → 1', target: 'Sortiraj 9 → 1' },
    { source: 'Sort A → Z', target: 'Sortiraj A → Z' },
    { source: 'Sort Z → A', target: 'Sortiraj Z → A' },
    { source: 'Refresh automatically', target: 'Osveži automatski' },
    { source: 'All', target: 'Svi' },
    { source: 'Selected', target: 'Izabrani' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'Nažalost, nije pronađen {0} koji odgovara vašem upitu'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'Učitavamo {0}, molimo sačekajte...' },
    { source: 'Add filter', target: 'Dodaj filter' },
    { source: 'Delete this filter', target: 'Obriši ovaj filter' },
    { source: 'Toggle ordering', target: 'Prebaci redosled' },
    { source: 'Not configured', target: 'Nije konfigurisan' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'Nažalost, ova komponenta još nije konfigurisana'
    },
    { source: 'records', target: 'zapisi' },
    { source: '{0} items', target: '{0} stavki' },

    // Menu
    { source: 'Users & Teams', target: 'Korisnici i timovi' },
    { source: 'Billing', target: 'Plaćanje' },
    { source: 'Billing & Plans', target: 'Plaćanje i planovi' },
    { source: 'API keys', target: 'API ključevi' },
    { source: 'Dark Mode', target: 'Tamni režim' },
    { source: 'Light Mode', target: 'Svetli režim' },
    { source: 'Disable Staff', target: 'Onemogući osoblje' },
    { source: 'Enable Staff', target: 'Omogući osoblje' },
    { source: 'Manage Templates', target: 'Uredi predloške' },
    { source: 'Logout', target: 'Odjava' },
    { source: 'Activity Log', target: 'Log aktivnosti' },
    { source: 'Collaborations', target: 'Saradnje' },
    { source: 'Open Visual Builder', target: 'Otvori vizuelni graditelj' },

    // Filters
    { source: 'equals', target: 'jednako' },
    { source: 'does not equal', target: 'nije jednako' },
    { source: '{0} equals {1}', target: '{0} jednako {1}' },
    { source: '{0} does not equal {1}', target: '{0} nije jednako {1}' },

    { source: 'contains', target: 'sadrži' },
    { source: 'does not contain', target: 'ne sadrži' },
    { source: '{0} contains {1}', target: '{0} sadrži {1}' },
    { source: '{0} not contains {1}', target: '{0} ne sadrži {1}' },

    { source: 'starts with', target: 'počinje sa' },
    { source: 'does not start with', target: 'ne počinje sa' },
    { source: '{0} starts with {1}', target: '{0} počinje sa {1}' },
    { source: '{0} does not start with {1}', target: '{0} ne počinje sa {1}' },

    { source: 'ends with', target: 'završava na' },
    { source: 'does not end with', target: 'ne završava na' },
    { source: '{0} ends with {1}', target: '{0} završava na {1}' },
    { source: '{0} does not end with {1}', target: '{0} ne završava na {1}' },

    { source: 'greater than', target: 'veće od' },
    { source: 'is not greater than', target: 'nije veće od' },
    { source: '{0} is greater than {1}', target: '{0} je veće od {1}' },
    { source: '{0} not greater than {1}', target: '{0} nije veće od {1}' },

    { source: 'greater than or equals', target: 'veće ili jednako' },
    { source: 'is not greater than or equals', target: 'nije veće ili jednako' },
    { source: '{0} is greater than or equals {1}', target: '{0} je veće ili jednako {1}' },
    { source: '{0} is not greater than or equals {1}', target: '{0} nije veće ili jednako {1}' },

    { source: 'less than', target: 'manje od' },
    { source: 'is not less than', target: 'nije manje od' },
    { source: '{0} is less than {1}', target: '{0} je manje od {1}' },
    { source: '{0} is not less than {1}', target: '{0} nije manje od {1}' },

    { source: 'less than or equals', target: 'manje ili jednako' },
    { source: 'is not less than or equals', target: 'nije manje ili jednako' },
    { source: '{0} is less than or equals {1}', target: '{0} je manje ili jednako {1}' },
    { source: '{0} is not less than or equals {1}', target: '{0} nije manje ili jednako {1}' },

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

    { source: 'is Yesterday', target: 'je juče' },
    { source: 'yesterday', target: 'juče' },
    { source: 'is not yesterday', target: 'nije juče' },
    { source: '{0} is yesterday', target: '{0} je juče' },
    { source: '{0} is not yesterday', target: '{0} nije juče' },

    { source: 'is Last Week', target: 'je prošle nedelje' },
    { source: 'last week', target: 'prošla nedelja' },
    { source: 'is not last week', target: 'nije prošle nedelje' },
    { source: '{0} is last week', target: '{0} je prošle nedelje' },
    { source: '{0} is not last week', target: '{0} nije prošle nedelje' },

    { source: 'is Last Month', target: 'je prošlog meseca' },
    { source: 'last month', target: 'prošli mesec' },
    { source: 'is not last month', target: 'nije prošlog meseca' },
    { source: '{0} is last month', target: '{0} je prošlog meseca' },
    { source: '{0} is not last month', target: '{0} nije prošlog meseca' },

    { source: 'is Last Quarter', target: 'je prošlog kvartala' },
    { source: 'last quarter', target: 'prošli kvartal' },
    { source: 'is not last quarter', target: 'nije prošlog kvartala' },
    { source: '{0} is last quarter', target: '{0} je prošlog kvartala' },
    { source: '{0} is not last quarter', target: '{0} nije prošlog kvartala' },

    { source: 'is Last Year', target: 'je prošle godine' },
    { source: 'last year', target: 'prošle godine' },
    { source: 'is not last year', target: 'nije prošle godine' },
    { source: '{0} is last year', target: '{0} je prošle godine' },
    { source: '{0} is not last year', target: '{0} nije prošle godine' },

    { source: 'is Last X Days', target: 'je proteklih X dana' },
    { source: 'last X days', target: 'proteklih X dana' },
    { source: 'is not last X days', target: 'nije proteklih X dana' },
    { source: '{0} is last {1} days', target: '{0} je proteklih {1} dana' },
    { source: '{0} is not last {1} days', target: '{0} nije proteklih {1} dana' },

    { source: 'is Current Week', target: 'je ove nedelje' },
    { source: 'current week', target: 'ovaj nedelja' },
    { source: 'is not current week', target: 'nije ove nedelje' },
    { source: '{0} is current week', target: '{0} je ove nedelje' },
    { source: '{0} is not current week', target: '{0} nije ove nedelje' },

    { source: 'is Current Month', target: 'je ovog meseca' },
    { source: 'current month', target: 'ovaj mesec' },
    { source: 'is not current month', target: 'nije ovog meseca' },
    { source: '{0} is current month', target: '{0} je ovog meseca' },
    { source: '{0} is not current month', target: '{0} nije ovog meseca' },

    { source: 'is Current Quarter', target: 'je ovog kvartala' },
    { source: 'current quarter', target: 'ovaj kvartal' },
    { source: 'is not current quarter', target: 'nije ovog kvartala' },
    { source: '{0} is current quarter', target: '{0} je ovog kvartala' },
    { source: '{0} is not current quarter', target: '{0} nije ovog kvartala' },

    { source: 'is Current Year', target: 'je ove godine' },
    { source: 'current year', target: 'ove godine' },
    { source: 'is not current year', target: 'nije ove godine' },
    { source: '{0} is current year', target: '{0} je ove godine' },
    { source: '{0} is not current year', target: '{0} nije ove godine' },

    { source: 'is Previous Week', target: 'je prethodne nedelje' },
    { source: 'previous week', target: 'prethodna nedelja' },
    { source: 'is not previous week', target: 'nije prethodne nedelje' },
    { source: '{0} is previous week', target: '{0} je prethodne nedelje' },
    { source: '{0} is not previous week', target: '{0} nije prethodne nedelje' },

    { source: 'is Previous Month', target: 'je prethodnog meseca' },
    { source: 'previous month', target: 'prethodni mesec' },
    { source: 'is not previous month', target: 'nije prethodnog meseca' },
    { source: '{0} is previous month', target: '{0} je prethodnog meseca' },
    { source: '{0} is not previous month', target: '{0} nije prethodnog meseca' },

    { source: 'is Previous Quarter', target: 'je prethodnog kvartala' },
    { source: 'previous quarter', target: 'prethodni kvartal' },
    { source: 'is not previous quarter', target: 'nije prethodnog kvartala' },
    { source: '{0} is previous quarter', target: '{0} je prethodnog kvartala' },
    { source: '{0} is not previous quarter', target: '{0} nije prethodnog kvartala' },

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

    { source: 'covered by', target: 'pokriveno' },
    { source: 'is not covered by', target: 'nije pokriveno' },
    { source: '{0} covered by {1}', target: '{0} pokriveno sa {1}' },
    { source: '{0} is not covered by {1}', target: '{0} nije pokriveno sa {1}' },

    // Activity log
    { source: 'No activities found', target: 'Nema pronađenih aktivnosti' },
    {
      source: 'Start to working with data to log activities.',
      target: 'Počnite da radite sa podacima kako biste pratili aktivnosti.'
    },
    { source: 'All Activity', target: 'Sve aktivnosti' },
    { source: 'Create Record', target: 'Kreiraj zapis' },
    { source: 'Update Record', target: 'Ažuriraj zapis' },
    { source: 'Delete Record', target: 'Obriši zapis' },
    { source: 'All Members', target: 'Svi članovi' },

    // Collaboration
    { source: 'Timeline', target: 'Vremenska linija' },
    { source: 'Messages', target: 'Poruke' },
    { source: 'Activity', target: 'Aktivnost' },
    { source: 'Start chatting with your team', target: 'Počnite da četujete sa svojim timom' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'Uzmite poruku o trenutnoj stranici da biste pratili važne informacije.'
    },
    { source: 'Your Message', target: 'Vaša poruka' },
    { source: 'Send', target: 'Pošalji' },

    // Share
    { source: 'Invite members', target: 'Pozovi članove' },
    { source: 'Public share', target: 'Javna deljenja' },
    { source: 'Sign Up', target: 'Prijavi se' },
    { source: 'Members', target: 'Članovi' },
    { source: 'Invite with Email', target: 'Pozovi putem email-a' },
    { source: 'Invite someone...', target: 'Pozovite nekoga...' },
    { source: 'Send Invite', target: 'Pošalji poziv' },
    {
      source: 'Limit access to your data by user properties',
      target: 'Ograničite pristup vašim podacima putem svojstava korisnika'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: 'Unesite email korisnika kojeg želite da pozovete na saradnju.'
    },
    { source: 'Copy', target: 'Kopiraj' },
    { source: 'Invite with Link', target: 'Pozovi putem linka' },
    { source: 'Remove link', target: 'Obriši link' },
    { source: 'Add Invite Link', target: 'Dodaj link za poziv' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'Bilo ko na internetu sa ovim linkom moći će da se pridruži izabranom timu.'
    },
    { source: 'Pending Invites', target: 'Pozivi na čekanju' },
    { source: 'Cancel invite', target: 'Otkaži poziv' },
    { source: 'Active Members', target: 'Aktivni članovi' },
    { source: 'Remove member', target: 'Ukloni člana' },
    { source: 'You are setting sharing for the current page', target: 'Postavljate deljenje za trenutnu stranicu' },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'Postavljate deljenje za sve stranice vašeg App-a.'
    },
    { source: 'Public access link', target: 'Link za javni pristup' },
    { source: 'Updating public access...', target: 'Ažuriranje javnog pristupa...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'Svako sa ovim linkom će moći da pregleda trenutnu stranicu. Ovim načinom možete takođe ugnezditi trenutnu stranicu na drugi sajt.'
    },
    { source: 'Embed code (IFRAME)', target: 'Kod za ugnežđivanje (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: 'Zalepite ovaj kod u HTML kod vašeg sajta gde želite da se trenutna stranica pojavljuje.'
    },
    { source: 'link', target: 'link' },
    { source: 'invited', target: 'pozvan' },
    { source: 'Choose Team', target: 'Izaberi tim' },
    { source: 'App Teams', target: 'Timovi aplikacije' },
    { source: 'Built-In Teams', target: 'Ugrađeni timovi' },
    { source: 'Clear Team', target: 'Obriši tim' },
    { source: 'Can build application and modify data', target: 'Može praviti aplikaciju i izmeniti podatke' },
    { source: 'Can modify data in application', target: 'Može izmeniti podatke u aplikaciji' },
    { source: 'Can only view data without modification', target: 'Može samo pregledati podatke bez izmena' },
    { source: 'Add Team', target: 'Dodaj tim' },
    { source: 'Edit Team', target: 'Izmeni tim' },
    { source: 'Adding Team', target: 'Dodavanje tima' },
    {
      source: 'Keep control over who has access to current App',
      target: 'Zadržite kontrolu nad tim ko ima pristup trenutnom App-u'
    },
    { source: 'Enter Team Name', target: 'Unesite ime tima' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'Unesite ime tima, npr. Podrška, Prodaja, Marketing, itd.'
    },
    { source: 'Add a new member to this team.', target: 'Dodajte novog člana ovom timu.' },
    { source: 'Invite new member', target: 'Pozovi novog člana' },
    { source: 'User', target: 'Korisnik' },
    { source: 'Date Added', target: 'Datum dodavanja' },
    { source: 'You', target: 'Vi' },
    { source: 'Edit', target: 'Edituj' },
    { source: 'No users in this team', target: 'Nema korisnika u ovom timu' },
    { source: 'Page Permissions', target: 'Odobrenje stranice' },
    { source: 'App Permissions', target: 'Odobrenje aplikacije' },
    { source: 'Properties', target: 'Svojstva' },
    { source: 'Page name', target: 'Ime stranice' },
    { source: 'Access', target: 'Pristup' },
    { source: 'Full Access', target: 'Pun pristup' },
    { source: 'Read Only', target: 'Samo čitanje' },
    { source: 'No Access', target: 'Bez pristupa' },
    { source: 'Read', target: 'Čitanje' },
    { source: 'Update', target: 'Ažuriranje' },
    { source: 'Write', target: 'Pisanje' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'Brisanje' },
    { source: 'Custom Access', target: 'Prilagođeni pristup' },
    { source: 'Read, create, update and delete data', target: 'Čitaj, kreiraj, ažuriraj i briši podatke' },
    { source: 'Choose allowed operations granularly', target: 'Izaberite dopuštene operacije detaljno' },
    { source: 'Without any access to data', target: 'Bez bilo kakvog pristupa podacima' },
    { source: 'Name', target: 'Ime' },
    { source: 'Active', target: 'Aktivan' },
    { source: 'Settings', target: 'Postavke' },
    { source: 'Members and Teams', target: 'Članovi i timovi' },
    { source: 'App Builder', target: 'Graditelj aplikacija' },
    { source: 'Collection Permissions', target: 'Dozvole za kolekciju' },
    { source: "Grant permissions to app's collection", target: 'Dodelite dozvole kolekciji aplikacije' },
    { source: 'Collection', target: 'Kolekcija' },
    {
      source: 'Limit access to your data by team properties',
      target: 'Ograničite pristup svojim podacima preko svojstava tima'
    },
    { source: 'Save Team', target: 'Sačuvaj tim' },
    { source: 'Create Team', target: 'Napravi tim' },
    { source: 'Value', target: 'Vrednost' },
    { source: 'No properties specified', target: 'Svojstva nisu navedena' },

    // Navigation
    { source: 'Current App', target: 'Trenutna aplikacija' },
    { source: 'Home', target: 'Početna' },

    // Profile
    {
      source: 'We are fetching user data, please, wait...',
      target: 'Dohvatamo korisničke podatke, molimo sačekajte...'
    },
    { source: 'Profile Settings', target: 'Postavke profila' },
    { source: 'Basic information about your account.', target: 'Osnovne informacije o vašem nalogu.' },
    { source: 'Photo', target: 'Fotografija' },
    { source: 'your photo', target: 'vaša fotografija' },
    { source: 'Change', target: 'Promeni' },
    { source: 'Upload', target: 'Otpremi' },
    { source: 'Photo was successfully updated', target: 'Fotografija je uspešno ažurirana' },
    { source: 'Photo was successfully deleted', target: 'Fotografija je uspešno obrisana' },
    { source: 'First Name', target: 'Ime' },
    { source: 'Last Name', target: 'Prezime' },
    { source: 'Your Email', target: 'Vaš email' },
    { source: 'Email Change', target: 'Promena emaila' },
    { source: 'New Email', target: 'Novi email' },
    { source: 'Change Email', target: 'Promeni email' },
    { source: 'Check your inbox', target: 'Proverite vaš inbox' },
    { source: 'Confirmation Email was sent to {0}', target: 'Potvrda email-a je poslata na {0}' },
    { source: 'Changing Email failed', target: 'Promena email-a nije uspela' },
    { source: 'Password Change', target: 'Promena lozinke' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target: 'Lozinka treba da bude dovoljno jaka da zaštiti vaš nalog, zato neka bude najmanje 12 karaktera duga.'
    },
    { source: 'Current Password', target: 'Trenutna lozinka' },
    { source: 'New Password', target: 'Nova lozinka' },
    { source: 'Confirm New Password', target: 'Potvrdite novu lozinku' },
    { source: 'Change Password', target: 'Promeni lozinku' },
    {
      source: 'Current password was successfully updated, all other sessions will be logged out shortly',
      target: 'Trenutna lozinka je uspešno ažurirana, sve ostale sesije će uskoro biti odjavljene'
    },
    { source: 'Saving current password failed', target: 'Čuvanje trenutne lozinke nije uspelo' },
    { source: 'Short password', target: 'Kratka lozinka' },
    { source: "Passwords don't match", target: 'Lozinke se ne poklapaju' },
    { source: 'Personal Preferences', target: 'Lični izbori' },
    { source: 'Language', target: 'Jezik' },
    { source: 'Timezone', target: 'Vremenska zona' },
    { source: 'Current time in {0} is', target: 'Trenutno vreme u {0} je' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'Prilagodite dodatne postavke za vaš nalog.'
    },
    { source: 'News & Proposals', target: 'Vesti i predlozi' },
    {
      source: 'Subscribe to our updates and proposals.',
      target: 'Pretplatite se na naša ažuriranja i predloge.'
    },
    { source: 'Save changes', target: 'Sačuvaj promene' },
    { source: 'Current user was successfully updated', target: 'Trenutni korisnik je uspešno ažuriran' },
    { source: 'Saving current user failed', target: 'Čuvanje trenutnog korisnika nije uspelo' },

    // My Apps
    { source: 'Type to search...', target: 'Upišite za pretragu...' },
    { source: 'My Apps', target: 'Moje aplikacije' },
    { source: 'New App', target: 'Nova aplikacija' },
    { source: 'Builder', target: 'Graditelj' },
    { source: 'App', target: 'Aplikacija' },
    { source: 'continue install', target: 'nastavite instalaciju' },
    { source: 'Open builder', target: 'Otvori graditelj' },
    { source: 'View published', target: 'Pogledajte objavljeno' },
    { source: 'Delete App', target: 'Obriši aplikaciju' },
    { source: 'Start from a template', target: 'Počni od predloška' },
    { source: 'Preview', target: 'Pregled' },
    { source: 'Contact Support', target: 'Kontaktirajte podršku' },
    { source: 'Documentation', target: 'Dokumentacija' },
    { source: 'Feature Requests', target: 'Zahtevi za funkcije' },
    { source: 'See What’s New', target: 'Pogledajte šta je novo' },
    { source: 'Search templates...', target: 'Pretraži predloške...' },
    { source: 'any', target: 'bilo koji' },
    { source: 'more', target: 'više' },
    { source: 'Choose Data Source', target: 'Izaberi podatkovni izvor' },
    { source: 'works with 30+ data sources', target: 'radi sa 30+ podatkovnih izvora' },
    { source: 'Use this template', target: 'Koristi ovaj predložak' },
    { source: 'stores data in Jet Tables', target: 'čuva podatke u Jet tabelama' },
    { source: 'New Data', target: 'Novi podaci' },
    { source: 'using {0}', target: 'koristeći {0}' },
    { source: "Can't find resource you're looking for?", target: 'Ne možete pronaći resurs koji tražite?' },
    { source: 'Admin Panel', target: 'Admin Panel' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'Lista, kreiraj i ažuriraj (CRUD) operacije na vašim podacima'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target:
        'Napravi prilagođeni admin panel baziran na bilo kojim bazama podataka, aplikacijama i API-jevima kao što su Stripe, Twilio i GraphQL.'
    },
    { source: 'All Integrations', target: 'Sve integracije' },
    { source: 'Databases', target: 'Baze podataka' },
    { source: 'APIs', target: 'API-jevi' },
    { source: 'Frameworks', target: 'Okviri' },
    { source: 'Storages', target: 'Skladišta' },

    // Sign In
    { source: 'Good morning', target: 'Dobro jutro' },
    { source: 'Good afternoon', target: 'Dobar dan' },
    { source: 'Good evening', target: 'Dobro veče' },
    { source: 'Sign In', target: 'Prijava' },
    { source: 'Welcome Back.', target: 'Dobrodošli nazad.' },
    { source: 'Sign in with {0}', target: 'Prijavite se sa {0}' },
    { source: 'or login with', target: 'ili se prijavite sa' },
    { source: 'Enter E-mail', target: 'Unesite E-mail' },
    { source: 'Enter password', target: 'Unesite lozinku' },
    { source: 'Login', target: 'Uloguj se' },
    { source: 'Create new account', target: 'Kreiraj novi nalog' },
    { source: 'Forgot my password', target: 'Zaboravio sam lozinku' },
    { source: 'required', target: 'obavezno' },
    { source: 'incorrect Email', target: 'neispravan Email' },
    { source: 'Minimum password length {0}', target: 'Minimalna dužina lozinke {0}' },
    { source: 'Unable to Sign In', target: 'Nije moguće prijaviti se' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'Počnite <span class="auth-form__accent">besplatno danas</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target:
        'Nije potrebna kartica. Dobijate sve napredne funkcionalnosti besplatno tokom 14 dana probnog PRO perioda.'
    },
    { source: 'Enter First Name', target: 'Unesite ime' },
    { source: 'Enter Last Name (optional)', target: 'Unesite prezime (opciono)' },
    { source: 'Enter Email', target: 'Unesite Email' },
    { source: 'Password', target: 'Lozinka' },
    { source: 'Repeat Password', target: 'Ponovite lozinku' },
    {
      source: 'By signing in you’re okay with our',
      target: 'Prijavljivanjem prihvatate naše'
    },
    {
      source: 'Creating an account means you’re okay with our',
      target: 'Kreiranjem naloga prihvatate naše'
    },
    { source: 'Terms of Service', target: 'Uslove korišćenja' },
    { source: 'Privacy Policy', target: 'Politiku privatnosti' },
    { source: 'and', target: 'i' },
    { source: 'Create your free account', target: 'Napravite besplatan nalog' },
    { source: 'Already have an account', target: 'Već imate nalog' },
    { source: 'Unable to Sign Up', target: 'Nije moguće registrovati se' },

    // Restore password
    { source: 'Reset your password', target: 'Resetujte lozinku' },
    { source: 'Email Address', target: 'Email adresa' },
    { source: 'Reset password', target: 'Reset lozinke' },
    { source: 'Return to Sign In', target: 'Povratak na Prijavu' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'Molimo proverite vaš Email – <strong>{0}</strong>. Poslali smo vam link za validaciju koji treba da pratite da biste promenili lozinku.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be al least 8 characters.',
      target: 'Skoro gotovo, samo unesite vašu novu lozinku ispod. <br>Mora biti najmanje 8 znakova.'
    },
    { source: 'Reset password & Sign In', target: 'Resetujte lozinku i Prijavite se' },
    { source: 'Unable to Send Code', target: 'Nije moguće poslati kod' },
    { source: 'Unable to Change Password', target: 'Nije moguće promeniti lozinku' },

    // Email Verification
    { source: 'Email Verification', target: 'Provera email-a' },
    { source: 'Resend verification code', target: 'Ponovo pošalji verifikacioni kod' },
    { source: 'Verification email sent', target: 'Email za verifikaciju poslat' },
    { source: 'Your Email is now verified', target: 'Vaš email je sada verifikovan' },
    { source: 'Request is incorrect', target: 'Zahtev je neispravan' },

    // Invites
    {
      source: 'Join <span class="auth-form__accent">{0}</span>',
      target: 'Pridružite se <span class="auth-form__accent">{0}</span>'
    },
    {
      source: '<strong>{0}</strong> has invited you to join <strong>{1}</strong>',
      target: '<strong>{0}</strong> vas je pozvao da se pridružite <strong>{1}</strong>'
    },
    {
      source: 'Someone has invited you to join <strong>{0}</strong>',
      target: 'Neko vas je pozvao da se pridružite <strong>{0}</strong>'
    },
    {
      source: 'You are joining <strong>{0}</strong> using invite link',
      target: 'Pridružujete se <strong>{0}</strong> koristeći pozivni link'
    },
    { source: 'Join', target: 'Pridruži se' },
    { source: 'Go to home page', target: 'Idite na početnu stranicu' },
    { source: 'Invite link is wrong', target: 'Pozivni link je pogrešan' },
    {
      source:
        'Looks like your invitation link has expired or maybe you have followed the wrong link. Please try to ask to invite your again.',
      target:
        'Izgleda da je vaš pozivni link istekao ili ste možda pratili pogrešan link. Molimo pokušajte da zatražite poziv ponovo.'
    },
    {
      source: 'Unfortunately we failed to load information about this invitation',
      target: 'Nažalost, nismo uspeli da učitamo informacije o ovom pozivu'
    },

    // Users & Teams
    { source: 'Members of {0}', target: 'Članovi {0}' },
    { source: 'How to get started', target: 'Kako početi' },
    { source: 'Users API', target: 'API korisnika' },
    { source: 'Teams API', target: 'API timova' },
    { source: 'Invite Member', target: 'Pozovi člana' },
    { source: 'Add User property', target: 'Dodaj svojstvo korisnika' },
    { source: 'Add Team property', target: 'Dodaj svojstvo tima' },
    { source: 'Edit property', target: 'Izmeni svojstvo' },
    { source: 'Delete property', target: 'Obriši svojstvo' },
    { source: 'Users', target: 'Korisnici' },
    { source: 'Teams', target: 'Timovi' },
    { source: 'Search members', target: 'Pretraži članove' },
    { source: 'Search teams', target: 'Pretraži timove' },
    { source: '{0} pages', target: '{0} stranica' },
    { source: 'No members', target: 'Nema članova' }
  ]
};

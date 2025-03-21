import { Locale } from './locale';

export const locale: Locale = {
  name: 'bosnian',
  language: 'bs',
  items: [
    // General
    { source: 'Save', target: 'Spremi' },
    { source: 'Create', target: 'Kreiraj' },
    { source: 'Duplicating', target: 'Dupliciranje' },
    { source: 'Duplicate', target: 'Dupliraj' },
    { source: 'Mass Edit', target: 'Masovno uređivanje' },
    { source: 'Export', target: 'Izvoz' },
    { source: 'Import', target: 'Uvoz' },
    { source: 'Delete', target: 'Obriši' },
    { source: 'Continue', target: 'Nastavi' },
    { source: 'Submit', target: 'Pošalji' },
    { source: 'Cancel', target: 'Otkaži' },
    { source: 'Loading', target: 'Učitavanje' },
    { source: 'Please wait...', target: 'Molimo sačekajte...' },
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
      target: 'Navedena adresa je netačna ili stranica ne postoji'
    },
    { source: 'Not allowed', target: 'Nije dozvoljeno' },
    {
      source: "You don't have permissions to access this page",
      target: 'Nemate dozvolu za pristup ovoj stranici'
    },
    { source: 'Are you sure want to close?', target: 'Jeste li sigurni da želite zatvoriti?' },
    { source: 'Close', target: 'Zatvori' },

    // Actions
    { source: 'Action executed', target: 'Akcija izvršena' },
    { source: 'Action executed successfully', target: 'Akcija uspješno izvršena' },
    { source: 'Action failed', target: 'Akcija nije uspjela' },
    {
      source: "You don't have permission for run this operation",
      target: 'Nemate dozvolu za pokretanje ove operacije'
    },
    { source: 'Specify parameters', target: 'Specificiraj parametre' },
    { source: 'Executing action', target: 'Izvršavanje akcije' },
    { source: 'You are executing <strong>{0}</strong>', target: 'Izvršavate <strong>{0}</strong>' },
    { source: 'Please fill in the parameters below.', target: 'Molimo popunite parametre ispod.' },
    { source: 'Execute', target: 'Izvrši' },
    { source: 'Executing', target: 'Izvršavanje' },
    { source: 'Finished', target: 'Završeno' },
    { source: 'Done', target: 'Gotovo' },

    // Export
    { source: 'Records Export', target: 'Izvoz zapisa' },
    { source: 'Downloading records data as a file', target: 'Preuzimanje podataka zapisa kao datoteke' },
    { source: 'Choose format', target: 'Izaberite format' },
    { source: 'Number of exporting records', target: 'Broj izvoznih zapisa' },
    { source: { label: 'Export', context: 'submit' }, target: 'Izvezite' },
    { source: 'Exporting', target: 'Izvoz' },
    { source: 'Export completed', target: 'Izvoz završen' },
    { source: 'Failed to export', target: 'Izvoz nije uspio' },

    // Components
    { source: 'optional', target: 'opcionalno' },
    { source: 'choose', target: 'izaberite' },
    { source: 'Clear value', target: 'Obriši vrijednost' },
    { source: 'loading...', target: 'učitavanje...' },
    { source: 'Nothing found', target: 'Ništa nije pronađeno' },
    { source: 'Search...', target: 'Pretraži...' },
    { source: 'Enter at least {0} characters', target: 'Unesite najmanje {0} karaktera' },
    { source: 'No options', target: 'Nema opcija' },
    { source: 'Drop files here or', target: 'Ispustite datoteke ovdje ili' },
    { source: 'Upload new', target: 'Otpremite novu' },
    { source: 'Clear', target: 'Obriši' },
    { source: 'Download', target: 'Preuzmi' },
    { source: 'Choose file', target: 'Izaberite datoteku' },
    { source: 'Choose files', target: 'Izaberite datoteke' },
    { source: 'Scan with Camera', target: 'Skeniraj kamerom' },
    { source: 'Scan Image file', target: 'Skeniraj sliku' },
    { source: 'Choose camera', target: 'Izaberite kameru' },
    { source: 'Stop scanning', target: 'Zaustavi skeniranje' },
    { source: 'Scan again', target: 'Skeniraj ponovo' },
    { source: 'Use this scan', target: 'Iskoristite ovaj sken' },
    { source: 'Failed to scan', target: 'Skeniranje nije uspjelo' },
    {
      source: 'Code failed to scan, please try another image',
      target: 'Kod nije prepoznat, pokušajte sa drugom slikom'
    },
    { source: 'current', target: 'trenutno' },
    { source: 'Day', target: 'Dan' },
    { source: 'Week', target: 'Sedmica' },
    { source: 'Month', target: 'Mjesec' },
    { source: 'Year', target: 'Godina' },
    { source: 'Today', target: 'Danas' },
    { source: 'Daily', target: 'Dnevno' },
    { source: 'Weekly', target: 'Sedmično' },
    { source: 'Monthly', target: 'Mjesečno' },
    { source: 'Quarterly', target: 'Kvartalno' },
    { source: 'Yearly', target: 'Godišnje' },
    { source: 'Hourly', target: 'Na sat' },
    { source: 'Minutely', target: 'Na minut' },
    { source: 'Since', target: 'Od' },
    { source: 'Before', target: 'Prije' },
    { source: 'Between', target: 'Između' },
    { source: 'From date', target: 'Od datuma' },
    { source: 'To date', target: 'Do datuma' },
    { source: 'Coordinates', target: 'Koordinate' },
    { source: 'Latitude', target: 'Geografska širina' },
    { source: 'Longitude', target: 'Geografska dužina' },
    { source: 'Default color', target: 'Podrazumijevana boja' },
    { source: 'not specified', target: 'nije specificirano' },
    { source: 'Sign using your finger or pointer', target: 'Potpišite se koristeći prst ili pokazivač' },

    // List components
    { source: 'Filter', target: 'Filter' },
    { source: 'Filter by field', target: 'Filteriraj po polju' },
    { source: 'Filter by...', target: 'Filteriraj po...' },
    { source: 'Back', target: 'Nazad' },
    { source: 'Back to {0} fields', target: 'Nazad na {0} polja' },
    { source: 'Choose {0} from list', target: 'Izaberite {0} iz liste' },
    { source: '{0} fields', target: '{0} polja' },
    { source: '{0} relationships', target: '{0} odnosa' },
    { source: 'Aggregate {0}', target: 'Agregiraj {0}' },
    { source: 'No fields to select', target: 'Nema polja za izbor' },
    { source: 'Enter value...', target: 'Unesite vrijednost...' },
    { source: 'Exclude', target: 'Isključi' },
    { source: 'Actions', target: 'Akcije' },
    { source: 'Search', target: 'Pretraga' },
    { source: 'Sort 1 → 9', target: 'Sortiraj 1 → 9' },
    { source: 'Sort 9 → 1', target: 'Sortiraj 9 → 1' },
    { source: 'Sort A → Z', target: 'Sortiraj A → Z' },
    { source: 'Sort Z → A', target: 'Sortiraj Z → A' },
    { source: 'Refresh automatically', target: 'Osveži automatski' },
    { source: 'All', target: 'Sve' },
    { source: 'Selected', target: 'Izabrano' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'Nažalost, nijedan {0} koji odgovara vašem upitu nije pronađen'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'Dohvatamo {0}, molimo sačekajte...' },
    { source: 'Add filter', target: 'Dodaj filter' },
    { source: 'Delete this filter', target: 'Obriši ovaj filter' },
    { source: 'Toggle ordering', target: 'Promijeni redoslijed' },
    { source: 'Not configured', target: 'Nije konfigurirano' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'Nažalost, ova komponenta još nije konfigurirana'
    },
    { source: 'records', target: 'zapisa' },
    { source: '{0} items', target: '{0} stavki' },

    // Menu
    { source: 'Users & Teams', target: 'Korisnici i timovi' },
    { source: 'Billing', target: 'Naplate' },
    { source: 'Billing & Plans', target: 'Naplate i planovi' },
    { source: 'API keys', target: 'API ključevi' },
    { source: 'Dark Mode', target: 'Tamni režim' },
    { source: 'Light Mode', target: 'Svijetli režim' },
    { source: 'Disable Staff', target: 'Onemogući osoblje' },
    { source: 'Enable Staff', target: 'Omogući osoblje' },
    { source: 'Manage Templates', target: 'Upravljanje šablonama' },
    { source: 'Logout', target: 'Odjavi se' },
    { source: 'Activity Log', target: 'Dnevnik aktivnosti' },
    { source: 'Collaborations', target: 'Saradnje' },
    { source: 'Open Visual Builder', target: 'Otvorite vizualni graditelj' },

    // Filters
    { source: 'equals', target: 'jednako' },
    { source: 'does not equal', target: 'nije jednako' },
    { source: '{0} equals {1}', target: '{0} je jednako {1}' },
    { source: '{0} does not equal {1}', target: '{0} nije jednako {1}' },

    { source: 'contains', target: 'sadrži' },
    { source: 'does not contain', target: 'ne sadrži' },
    { source: '{0} contains {1}', target: '{0} sadrži {1}' },
    { source: '{0} not contains {1}', target: '{0} ne sadrži {1}' },

    { source: 'starts with', target: 'počinje sa' },
    { source: 'does not start with', target: 'ne počinje sa' },
    { source: '{0} starts with {1}', target: '{0} počinje sa {1}' },
    { source: '{0} does not start with {1}', target: '{0} ne počinje sa {1}' },

    { source: 'ends with', target: 'završava sa' },
    { source: 'does not end with', target: 'ne završava sa' },
    { source: '{0} ends with {1}', target: '{0} završava sa {1}' },
    { source: '{0} does not end with {1}', target: '{0} ne završava sa {1}' },

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

    { source: 'is Last Week', target: 'je prošle sedmice' },
    { source: 'last week', target: 'prošle sedmice' },
    { source: 'is not last week', target: 'nije prošle sedmice' },
    { source: '{0} is last week', target: '{0} je prošle sedmice' },
    { source: '{0} is not last week', target: '{0} nije prošle sedmice' },

    { source: 'is Last Month', target: 'je prošlog mjeseca' },
    { source: 'last month', target: 'prošlog mjeseca' },
    { source: 'is not last month', target: 'nije prošlog mjeseca' },
    { source: '{0} is last month', target: '{0} je prošlog mjeseca' },
    { source: '{0} is not last month', target: '{0} nije prošlog mjeseca' },

    { source: 'is Last Quarter', target: 'je prošlog kvartala' },
    { source: 'last quarter', target: 'prošlog kvartala' },
    { source: 'is not last quarter', target: 'nije prošlog kvartala' },
    { source: '{0} is last quarter', target: '{0} je prošlog kvartala' },
    { source: '{0} is not last quarter', target: '{0} nije prošlog kvartala' },

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

    { source: 'is Current Week', target: 'je u ovoj sedmici' },
    { source: 'current week', target: 'ova sedmica' },
    { source: 'is not current week', target: 'nije u ovoj sedmici' },
    { source: '{0} is current week', target: '{0} je u ovoj sedmici' },
    { source: '{0} is not current week', target: '{0} nije u ovoj sedmici' },

    { source: 'is Current Month', target: 'je u ovom mjesecu' },
    { source: 'current month', target: 'ovaj mjesec' },
    { source: 'is not current month', target: 'nije u ovom mjesecu' },
    { source: '{0} is current month', target: '{0} je u ovom mjesecu' },
    { source: '{0} is not current month', target: '{0} nije u ovom mjesecu' },

    { source: 'is Current Quarter', target: 'je u ovom kvartalu' },
    { source: 'current quarter', target: 'ovaj kvartal' },
    { source: 'is not current quarter', target: 'nije u ovom kvartalu' },
    { source: '{0} is current quarter', target: '{0} je u ovom kvartalu' },
    { source: '{0} is not current quarter', target: '{0} nije u ovom kvartalu' },

    { source: 'is Current Year', target: 'je ove godine' },
    { source: 'current year', target: 'ova godina' },
    { source: 'is not current year', target: 'nije ove godine' },
    { source: '{0} is current year', target: '{0} je ove godine' },
    { source: '{0} is not current year', target: '{0} nije ove godine' },

    { source: 'is Previous Week', target: 'je prethodne sedmice' },
    { source: 'previous week', target: 'prethodna sedmica' },
    { source: 'is not previous week', target: 'nije prethodne sedmice' },
    { source: '{0} is previous week', target: '{0} je prethodne sedmice' },
    { source: '{0} is not previous week', target: '{0} nije prethodne sedmice' },

    { source: 'is Previous Month', target: 'je prethodnog mjeseca' },
    { source: 'previous month', target: 'prethodni mjesec' },
    { source: 'is not previous month', target: 'nije prethodnog mjeseca' },
    { source: '{0} is previous month', target: '{0} je prethodnog mjeseca' },
    { source: '{0} is not previous month', target: '{0} nije prethodnog mjeseca' },

    { source: 'is Previous Quarter', target: 'je prethodnog kvartala' },
    { source: 'previous quarter', target: 'prethodni kvartal' },
    { source: 'is not previous quarter', target: 'nije prethodnog kvartala' },
    { source: '{0} is previous quarter', target: '{0} je prethodnog kvartala' },
    { source: '{0} is not previous quarter', target: '{0} nije prethodnog kvartala' },

    { source: 'is Previous Year', target: 'je prošle godine' },
    { source: 'previous year', target: 'prošle godine' },
    { source: 'is not previous year', target: 'nije prošle godine' },
    { source: '{0} is previous year', target: '{0} je prošle godine' },
    { source: '{0} is not previous year', target: '{0} nije prošle godine' },

    { source: 'is Previous X Days', target: 'je prethodnih X dana' },
    { source: 'previous X days', target: 'prethodnih X dana' },
    { source: 'is not previous X days', target: 'nije prethodnih X dana' },
    { source: '{0} is previous {1} days', target: '{0} je prethodnih {1} dana' },
    { source: '{0} is not previous {1} days', target: '{0} nije prethodnih {1} dana' },

    { source: 'is empty', target: 'je prazno' },
    { source: 'is not empty', target: 'nije prazno' },
    { source: '{0} is empty', target: '{0} je prazno' },
    { source: '{0} is not empty', target: '{0} nije prazno' },

    { source: 'covered by', target: 'pokriveno sa' },
    { source: 'is not covered by', target: 'nije pokriveno sa' },
    { source: '{0} covered by {1}', target: '{0} pokriveno sa {1}' },
    { source: '{0} is not covered by {1}', target: '{0} nije pokriveno sa {1}' },

    // Activity log
    { source: 'No activities found', target: 'Nema aktivnosti' },
    {
      source: 'Start to working with data to log activities.',
      target: 'Počnite raditi sa podacima da biste zabilježili aktivnosti.'
    },
    { source: 'All Activity', target: 'Sve aktivnosti' },
    { source: 'Create Record', target: 'Kreiraj zapis' },
    { source: 'Update Record', target: 'Ažuriraj zapis' },
    { source: 'Delete Record', target: 'Izbriši zapis' },
    { source: 'All Members', target: 'Svi članovi' },

    // Collaboration
    { source: 'Timeline', target: 'Vremenska linija' },
    { source: 'Messages', target: 'Poruke' },
    { source: 'Activity', target: 'Aktivnost' },
    { source: 'Start chatting with your team', target: 'Započnite razgovor sa svojim timom' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'Pošaljite poruku o trenutnoj stranici da pratite važne informacije.'
    },
    { source: 'Your Message', target: 'Vaša poruka' },
    { source: 'Send', target: 'Pošalji' },

    // Share
    { source: 'Invite members', target: 'Pozovi članove' },
    { source: 'Public share', target: 'Javno dijeljenje' },
    { source: 'Sign Up', target: 'Registriraj se' },
    { source: 'Members', target: 'Članovi' },
    { source: 'Invite with Email', target: 'Pozovi preko Emaila' },
    { source: 'Invite someone...', target: 'Pozovi nekoga...' },
    { source: 'Send Invite', target: 'Pošalji poziv' },
    {
      source: 'Limit access to your data by user properties',
      target: 'Ograničite pristup podacima prema svojstvima korisnika'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: 'Unesite email korisnika kojeg želite pozvati da sudjeluje.'
    },
    { source: 'Copy', target: 'Kopiraj' },
    { source: 'Invite with Link', target: 'Pozovi sa linkom' },
    { source: 'Remove link', target: 'Ukloni link' },
    { source: 'Add Invite Link', target: 'Dodaj link za poziv' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'Svako ko ima ovaj link moći će se pridružiti odabranom timu.'
    },
    { source: 'Pending Invites', target: 'Pozivi na čekanju' },
    { source: 'Cancel invite', target: 'Otkaži poziv' },
    { source: 'Active Members', target: 'Aktivni članovi' },
    { source: 'Remove member', target: 'Ukloni člana' },
    {
      source: 'You are setting sharing for the current page',
      target: 'Postavljate dijeljenje za trenutnu stranicu'
    },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'Postavljate dijeljenje za sve stranice vaše aplikacije.'
    },
    { source: 'Public access link', target: 'Javni pristupni link' },
    { source: 'Updating public access...', target: 'Ažuriranje javnog pristupa...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'Svako ko ima ovaj link moći će pregledati trenutnu stranicu. Na ovaj način možete ugraditi trenutnu stranicu u drugi web sajt.'
    },
    { source: 'Embed code (IFRAME)', target: 'Ugradbeni kod (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: 'Zalijepite ovaj kod u HTML kod vašeg sajta gdje želite da se pojavi trenutna stranica.'
    },
    { source: 'link', target: 'link' },
    { source: 'invited', target: 'pozvan' },
    { source: 'Choose Team', target: 'Izaberite tim' },
    { source: 'App Teams', target: 'Timovi aplikacije' },
    { source: 'Built-In Teams', target: 'Ugrađeni timovi' },
    { source: 'Clear Team', target: 'Ukloni tim' },
    { source: 'Can build application and modify data', target: 'Može kreirati aplikaciju i mijenjati podatke' },
    { source: 'Can modify data in application', target: 'Može mijenjati podatke u aplikaciji' },
    { source: 'Can only view data without modification', target: 'Može samo pregledati podatke bez izmjena' },
    { source: 'Add Team', target: 'Dodaj tim' },
    { source: 'Edit Team', target: 'Uredi tim' },
    { source: 'Adding Team', target: 'Dodavanje tima' },
    {
      source: 'Keep control over who has access to current App',
      target: 'Zadržite kontrolu nad time ko ima pristup trenutnoj aplikaciji'
    },
    { source: 'Enter Team Name', target: 'Unesite ime tima' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'Upišite ime tima, npr: Podrška, Prodaja, Marketing, itd.'
    },
    { source: 'Add a new member to this team.', target: 'Dodajte novog člana ovom timu.' },
    { source: 'Invite new member', target: 'Pozovi novog člana' },
    { source: 'User', target: 'Korisnik' },
    { source: 'Date Added', target: 'Datum dodavanja' },
    { source: 'You', target: 'Vi' },
    { source: 'Edit', target: 'Uredi' },
    { source: 'No users in this team', target: 'Nema korisnika u ovom timu' },
    { source: 'Page Permissions', target: 'Dozvole stranice' },
    { source: 'App Permissions', target: 'Dozvole aplikacije' },
    { source: 'Properties', target: 'Svojstva' },
    { source: 'Page name', target: 'Naziv stranice' },
    { source: 'Access', target: 'Pristup' },
    { source: 'Full Access', target: 'Potpuni pristup' },
    { source: 'Read Only', target: 'Samo čitanje' },
    { source: 'No Access', target: 'Nema pristupa' },
    { source: 'Read', target: 'Čitanje' },
    { source: 'Update', target: 'Ažuriranje' },
    { source: 'Write', target: 'Pisanje' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'Brisanje' },
    { source: 'Custom Access', target: 'Prilagođeni pristup' },
    { source: 'Read, create, update and delete data', target: 'Čitaj, kreiraj, ažuriraj i obriši podatke' },
    { source: 'Choose allowed operations granularly', target: 'Izaberite dozvoljene operacije detaljno' },
    { source: 'Without any access to data', target: 'Bez ikakvog pristupa podacima' },
    { source: 'Name', target: 'Naziv' },
    { source: 'Active', target: 'Aktivan' },
    { source: 'Settings', target: 'Postavke' },
    { source: 'Members and Teams', target: 'Članovi i Timovi' },
    { source: 'App Builder', target: 'Izgraditelj aplikacija' },
    { source: 'Collection Permissions', target: 'Dozvole kolekcije' },
    { source: "Grant permissions to app's collection", target: 'Dodijelite dozvole kolekciji aplikacije' },
    { source: 'Collection', target: 'Kolekcija' },
    {
      source: 'Limit access to your data by team properties',
      target: 'Ograničite pristup podacima prema svojstvima tima'
    },
    { source: 'Save Team', target: 'Spremi tim' },
    { source: 'Create Team', target: 'Kreiraj tim' },
    { source: 'Value', target: 'Vrijednost' },
    { source: 'No properties specified', target: 'Svojstva nisu specificirana' },

    // Navigation
    { source: 'Current App', target: 'Trenutna aplikacija' },
    { source: 'Home', target: 'Naslovna' },

    // Profile
    {
      source: 'We are fetching user data, please, wait...',
      target: 'Dohvaćamo korisničke podatke, molimo pričekajte...'
    },
    { source: 'Profile Settings', target: 'Postavke profila' },
    { source: 'Basic information about your account.', target: 'Osnovne informacije o vašem računu.' },
    { source: 'Photo', target: 'Slika' },
    { source: 'your photo', target: 'vaša fotografija' },
    { source: 'Change', target: 'Promijeni' },
    { source: 'Upload', target: 'Otpremi' },
    { source: 'Photo was successfully updated', target: 'Slika je uspješno ažurirana' },
    { source: 'Photo was successfully deleted', target: 'Slika je uspješno izbrisana' },
    { source: 'First Name', target: 'Ime' },
    { source: 'Last Name', target: 'Prezime' },
    { source: 'Your Email', target: 'Vaš Email' },
    { source: 'Email Change', target: 'Promjena Emaila' },
    { source: 'New Email', target: 'Novi Email' },
    { source: 'Change Email', target: 'Promijeni Email' },
    { source: 'Check your inbox', target: 'Provjerite svoju pristiglu poštu' },
    { source: 'Confirmation Email was sent to {0}', target: 'Potvrda Emaila je poslana na {0}' },
    { source: 'Changing Email failed', target: 'Promjena Emaila nije uspjela' },
    { source: 'Password Change', target: 'Promjena lozinke' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target: 'Lozinka treba biti dovoljno jaka da zaštiti vaš račun, pa neka bude barem 12 znakova duga.'
    },
    { source: 'Current Password', target: 'Trenutna lozinka' },
    { source: 'New Password', target: 'Nova lozinka' },
    { source: 'Confirm New Password', target: 'Potvrdite novu lozinku' },
    { source: 'Change Password', target: 'Promijeni lozinku' },
    {
      source: 'Current password was successfully updated, all other sessions will be logged out shortly',
      target: 'Trenutna lozinka je uspješno ažurirana, sve ostale sesije će uskoro biti odjavljene'
    },
    { source: 'Saving current password failed', target: 'Spremanje trenutne lozinke nije uspjelo' },
    { source: 'Short password', target: 'Kratka lozinka' },
    { source: "Passwords don't match", target: 'Lozinke se ne podudaraju' },
    { source: 'Personal Preferences', target: 'Personalne preferencije' },
    { source: 'Language', target: 'Jezik' },
    { source: 'Timezone', target: 'Vremenska zona' },
    { source: 'Current time in {0} is', target: 'Trenutno vrijeme u {0} je' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'Prilagodite dodatne postavke za vaš račun.'
    },
    { source: 'News & Proposals', target: 'Vijesti i prijedlozi' },
    {
      source: 'Subscribe to our updates and proposals.',
      target: 'Pretplatite se na naša ažuriranja i prijedloge.'
    },
    { source: 'Save changes', target: 'Spremi promjene' },
    { source: 'Current user was successfully updated', target: 'Trenutni korisnik uspješno ažuriran' },
    { source: 'Saving current user failed', target: 'Spremanje trenutnog korisnika nije uspjelo' },

    // My Apps
    { source: 'Type to search...', target: 'Upišite za pretragu...' },
    { source: 'My Apps', target: 'Moje aplikacije' },
    { source: 'New App', target: 'Nova aplikacija' },
    { source: 'Builder', target: 'Izgraditelj' },
    { source: 'App', target: 'Aplikacija' },
    { source: 'continue install', target: 'nastavi instalaciju' },
    { source: 'Open builder', target: 'Otvori izgraditelja' },
    { source: 'View published', target: 'Pogledaj objavljeno' },
    { source: 'Delete App', target: 'Obriši aplikaciju' },
    { source: 'Start from a template', target: 'Započni iz šablona' },
    { source: 'Preview', target: 'Pregled' },
    { source: 'Contact Support', target: 'Kontakt podrška' },
    { source: 'Documentation', target: 'Dokumentacija' },
    { source: 'Feature Requests', target: 'Zahtjevi za funkcije' },
    { source: 'See What’s New', target: 'Pogledajte šta je novo' },
    { source: 'Search templates...', target: 'Pretraži predloške...' },
    { source: 'any', target: 'bilo što' },
    { source: 'more', target: 'više' },
    { source: 'Choose Data Source', target: 'Izaberite izvor podataka' },
    { source: 'works with 30+ data sources', target: 'radi sa 30+ izvora podataka' },
    { source: 'Use this template', target: 'Koristite ovaj predložak' },
    { source: 'stores data in Jet Tables', target: 'pohranjuje podatke u Jet Tables' },
    { source: 'New Data', target: 'Novi podaci' },
    { source: 'using {0}', target: 'koristi {0}' },
    { source: "Can't find resource you're looking for?", target: 'Ne možete pronaći resurs koji tražite?' },
    { source: 'Admin Panel', target: 'Adminsitratorska tabla' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'Liste, kreiranje i ažuriranje (CRUD) operacije na vašim podacima'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target:
        'Izgradite prilagođeni administratorski panel zasnovan na bilo kojoj bazi podatka, aplikaciji i API-ima poput Stripe-a, Twilio-a i GraphQL-a.'
    },
    { source: 'All Integrations', target: 'Sve integracije' },
    { source: 'Databases', target: 'Baze podataka' },
    { source: 'APIs', target: 'API-i' },
    { source: 'Frameworks', target: 'Okviri' },
    { source: 'Storages', target: 'Pohrane' },

    // Sign In
    { source: 'Good morning', target: 'Dobro jutro' },
    { source: 'Good afternoon', target: 'Dobar dan' },
    { source: 'Good evening', target: 'Dobro veče' },
    { source: 'Sign In', target: 'Prijavite se' },
    { source: 'Welcome Back.', target: 'Dobrodošli nazad.' },
    { source: 'Sign in with {0}', target: 'Prijavite se sa {0}' },
    { source: 'or login with', target: 'ili prijavite se s' },
    { source: 'Enter E-mail', target: 'Unesite E-mail' },
    { source: 'Enter password', target: 'Unesite lozinku' },
    { source: 'Login', target: 'Prijava' },
    { source: 'Create new account', target: 'Kreirajte novi račun' },
    { source: 'Forgot my password', target: 'Zaboravio sam lozinku' },
    { source: 'required', target: 'obavezno' },
    { source: 'incorrect Email', target: 'neispravan E-mail' },
    { source: 'Minimum password length {0}', target: 'Minimalna dužina lozinke {0}' },
    { source: 'Unable to Sign In', target: 'Prijava nije moguća' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'Započnite <span class="auth-form__accent">besplatno danas</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target: 'Kartica nije potrebna. Dobit ćete sve napredne funkcije besplatno tokom 14 dnevnog PRO probnog perioda.'
    },
    { source: 'Enter First Name', target: 'Unesite ime' },
    { source: 'Enter Last Name (optional)', target: 'Unesite prezime (opcionalno)' },
    { source: 'Enter Email', target: 'Unesite Email' },
    { source: 'Password', target: 'Lozinka' },
    { source: 'Repeat Password', target: 'Ponovite lozinku' },
    {
      source: 'By signing in you’re okay with our',
      target: 'Prijavom se slažete sa našim'
    },
    {
      source: 'Creating an account means you’re okay with our',
      target: 'Kreiranjem računa slažete se sa našim'
    },
    { source: 'Terms of Service', target: 'Uslovima servisa' },
    { source: 'Privacy Policy', target: 'Pravilima privatnosti' },
    { source: 'and', target: 'i' },
    { source: 'Create your free account', target: 'Kreirajte svoj besplatni račun' },
    { source: 'Already have an account', target: 'Već imate račun' },
    { source: 'Unable to Sign Up', target: 'Registracija nije moguća' },

    // Restore password
    { source: 'Reset your password', target: 'Resetirajte lozinku' },
    { source: 'Email Address', target: 'Email adresa' },
    { source: 'Reset password', target: 'Resetiraj lozinku' },
    { source: 'Return to Sign In', target: 'Povratak na prijavu' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'Provjerite svoj E-mail – <strong>{0}</strong>. Poslali smo vam link za potvrdu koji trebate pratiti da biste promijenili lozinku.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be at least 8 characters.',
      target: 'Gotovo ste, samo unesite svoju novu lozinku ispod. <br>Mora imati najmanje 8 znakova.'
    },
    { source: 'Reset password & Sign In', target: 'Resetiraj lozinku i prijavi se' },
    { source: 'Unable to Send Code', target: 'Slanje koda nije moguće' },
    { source: 'Unable to Change Password', target: 'Promjena lozinke nije moguća' },

    // Email Verification
    { source: 'Email Verification', target: 'Verifikacija emaila' },
    { source: 'Resend verification code', target: 'Ponovno pošaljite kod za verifikaciju' },
    { source: 'Verification email sent', target: 'Verifikacija emaila je poslana' },
    { source: 'Your Email is now verified', target: 'Vaš email je sada verifikovan' },
    { source: 'Request is incorrect', target: 'Zahtjev je pogrešan' },

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
        'Izgleda da je vaš pozivni link istekao ili ste možda slijedili pogrešan link. Molimo pokušajte zamoliti da vas pozovu ponovo.'
    },
    {
      source: 'Unfortunately we failed to load information about this invitation',
      target: 'Nažalost, nismo uspjeli učitati informacije o ovom pozivu'
    },

    // Users & Teams
    { source: 'Members of {0}', target: 'Članovi {0}' },
    { source: 'How to get started', target: 'Kako početi' },
    { source: 'Users API', target: 'Korisnički API' },
    { source: 'Teams API', target: 'Timovi API' },
    { source: 'Invite Member', target: 'Pozovi člana' },
    { source: 'Add User property', target: 'Dodaj korisničko svojstvo' },
    { source: 'Add Team property', target: 'Dodaj svojstvo timu' },
    { source: 'Edit property', target: 'Uredi svojstvo' },
    { source: 'Delete property', target: 'Obriši svojstvo' },
    { source: 'Users', target: 'Korisnici' },
    { source: 'Teams', target: 'Timovi' },
    { source: 'Search members', target: 'Pretraga članova' },
    { source: 'Search teams', target: 'Pretraga timova' },
    { source: '{0} pages', target: '{0} stranica' },
    { source: 'No members', target: 'Nema članova' }
  ]
};

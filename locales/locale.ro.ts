import { Locale } from './locale';

export const locale: Locale = {
  name: 'romanian',
  language: 'ro',
  items: [
    // General
    { source: 'Save', target: 'Salvare' },
    { source: 'Create', target: 'Creare' },
    { source: 'Duplicating', target: 'Duplicare' },
    { source: 'Duplicate', target: 'Duplicați' },
    { source: 'Mass Edit', target: 'Editare în masă' },
    { source: 'Export', target: 'Export' },
    { source: 'Import', target: 'Import' },
    { source: 'Delete', target: 'Ștergere' },
    { source: 'Continue', target: 'Continuare' },
    { source: 'Submit', target: 'Trimite' },
    { source: 'Cancel', target: 'Anulare' },
    { source: 'Loading', target: 'Se încarcă' },
    { source: 'Please wait...', target: 'Vă rugăm așteptați...' },
    { source: 'Loading failed', target: 'Încărcarea a eșuat' },
    { source: 'Unknown error', target: 'Eroare necunoscută' },
    { source: 'Add', target: 'Adăugați' },
    { source: 'or', target: 'sau' },
    { source: 'Hours', target: 'Ore' },
    { source: 'Minutes', target: 'Minute' },
    { source: 'Seconds', target: 'Secunde' },
    { source: 'Saved', target: 'Salvat' },
    { source: 'Error', target: 'Eroare' },
    { source: 'Page not found', target: 'Pagina nu a fost găsită' },
    {
      source: 'The specified address is incorrect, or the page does not exist',
      target: 'Adresa specificată este incorectă sau pagina nu există'
    },
    { source: 'Not allowed', target: 'Nepermis' },
    {
      source: "You don't have permissions to access this page",
      target: 'Nu aveți permisiunea de a accesa această pagină'
    },
    { source: 'Are you sure want to close?', target: 'Sigur doriți să închideți?' },
    { source: 'Close', target: 'Închide' },

    // Actions
    { source: 'Action executed', target: 'Acțiunea a fost executată' },
    { source: 'Action executed successfully', target: 'Acțiunea a fost executată cu succes' },
    { source: 'Action failed', target: 'Acțiunea a eșuat' },
    {
      source: "You don't have permission for run this operation",
      target: 'Nu aveți permisiunea de a executa această operațiune'
    },
    { source: 'Specify parameters', target: 'Specificați parametrii' },
    { source: 'Executing action', target: 'Se execută acțiunea' },
    { source: 'You are executing <strong>{0}</strong>', target: 'Se execută <strong>{0}</strong>' },
    { source: 'Please fill in the parameters below.', target: 'Vă rugăm să completați parametrii de mai jos.' },
    { source: 'Execute', target: 'Executați' },
    { source: 'Executing', target: 'Se execută' },
    { source: 'Finished', target: 'Terminat' },
    { source: 'Done', target: 'Finalizat' },

    // Export
    { source: 'Records Export', target: 'Export înregistrări' },
    { source: 'Downloading records data as a file', target: 'Descărcarea datelor de înregistrare ca fișier' },
    { source: 'Choose format', target: 'Alege formatul' },
    { source: 'Number of exporting records', target: 'Numărul de înregistrări de exportat' },
    { source: { label: 'Export', context: 'submit' }, target: 'Exportați' },
    { source: 'Exporting', target: 'Se exportă' },
    { source: 'Export completed', target: 'Export completat' },
    { source: 'Failed to export', target: 'Export eșuat' },

    // Components
    { source: 'optional', target: 'opțional' },
    { source: 'choose', target: 'alege' },
    { source: 'Clear value', target: 'Șterge valoarea' },
    { source: 'loading...', target: 'se încarcă...' },
    { source: 'Nothing found', target: 'Nimic găsit' },
    { source: 'Search...', target: 'Căutați...' },
    { source: 'Enter at least {0} characters', target: 'Introduceți cel puțin {0} caractere' },
    { source: 'No options', target: 'Fără opțiuni' },
    { source: 'Drop files here or', target: 'Poți să le tragi aici sau' },
    { source: 'Upload new', target: 'Încarcă nou' },
    { source: 'Clear', target: 'Curăță' },
    { source: 'Download', target: 'Descarcă' },
    { source: 'Choose file', target: 'Alege fișierul' },
    { source: 'Choose files', target: 'Alege fișierele' },
    { source: 'Scan with Camera', target: 'Scanează cu camera' },
    { source: 'Scan Image file', target: 'Scanează fișier imagine' },
    { source: 'Choose camera', target: 'Alege camera' },
    { source: 'Stop scanning', target: 'Oprește scanarea' },
    { source: 'Scan again', target: 'Scanează din nou' },
    { source: 'Use this scan', target: 'Folosește această scanare' },
    { source: 'Failed to scan', target: 'Scanare eșuată' },
    {
      source: 'Code failed to scan, please try another image',
      target: 'Codul nu a putut fi scanat, vă rugăm să încercați o altă imagine'
    },
    { source: 'current', target: 'curent' },
    { source: 'Day', target: 'Zi' },
    { source: 'Week', target: 'Săptămână' },
    { source: 'Month', target: 'Lună' },
    { source: 'Year', target: 'An' },
    { source: 'Today', target: 'Astăzi' },
    { source: 'Daily', target: 'Zilnic' },
    { source: 'Weekly', target: 'Săptămânal' },
    { source: 'Monthly', target: 'Lunar' },
    { source: 'Quarterly', target: 'Trimestrial' },
    { source: 'Yearly', target: 'Anual' },
    { source: 'Hourly', target: 'Pe oră' },
    { source: 'Minutely', target: 'Pe minut' },
    { source: 'Since', target: 'De la' },
    { source: 'Before', target: 'Înainte de' },
    { source: 'Between', target: 'Între' },
    { source: 'From date', target: 'Din data' },
    { source: 'To date', target: 'Până la data' },
    { source: 'Coordinates', target: 'Coordonate' },
    { source: 'Latitude', target: 'Latitudine' },
    { source: 'Longitude', target: 'Longitudine' },
    { source: 'Default color', target: 'Culoare implicită' },
    { source: 'not specified', target: 'nespecificat' },
    { source: 'Sign using your finger or pointer', target: 'Semnează utilizând degetul sau pointer-ul' },

    // List components
    { source: 'Filter', target: 'Filtrează' },
    { source: 'Filter by field', target: 'Filtrează după câmp' },
    { source: 'Filter by...', target: 'Filtrează după...' },
    { source: 'Back', target: 'Înapoi' },
    { source: 'Back to {0} fields', target: 'Înapoi la câmpurile {0}' },
    { source: 'Choose {0} from list', target: 'Alege {0} din listă' },
    { source: '{0} fields', target: 'câmpuri {0}' },
    { source: '{0} relationships', target: 'relații {0}' },
    { source: 'Aggregate {0}', target: 'Agregare {0}' },
    { source: 'No fields to select', target: 'Nu sunt câmpuri de selectat' },
    { source: 'Enter value...', target: 'Introduceți valoarea...' },
    { source: 'Exclude', target: 'Exclude' },
    { source: 'Actions', target: 'Acțiuni' },
    { source: 'Search', target: 'Caută' },
    { source: 'Sort 1 → 9', target: 'Sortează 1 → 9' },
    { source: 'Sort 9 → 1', target: 'Sortează 9 → 1' },
    { source: 'Sort A → Z', target: 'Sortează A → Z' },
    { source: 'Sort Z → A', target: 'Sortează Z → A' },
    { source: 'Refresh automatically', target: 'Reimprospătare automată' },
    { source: 'All', target: 'Toate' },
    { source: 'Selected', target: 'Selectate' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'Din păcate, nu s-a găsit niciun {0} corespunzător cererii dvs.'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'Se preiau {0}, vă rugăm așteptați...' },
    { source: 'Add filter', target: 'Adaugă filtru' },
    { source: 'Delete this filter', target: 'Șterge acest filtru' },
    { source: 'Toggle ordering', target: 'Comută ordonarea' },
    { source: 'Not configured', target: 'Nefuncțiune' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'Din păcate, acest component nu este încă configurat'
    },
    { source: 'records', target: 'înregistrări' },
    { source: '{0} items', target: 'elemente {0}' },

    // Menu
    { source: 'Users & Teams', target: 'Utilizatori & Echipe' },
    { source: 'Billing', target: 'Facturare' },
    { source: 'Billing & Plans', target: 'Facturare & Planuri' },
    { source: 'API keys', target: 'Chei API' },
    { source: 'Dark Mode', target: 'Mod Întunecat' },
    { source: 'Light Mode', target: 'Mod Luminos' },
    { source: 'Disable Staff', target: 'Dezactivează Personalul' },
    { source: 'Enable Staff', target: 'Activează Personalul' },
    { source: 'Manage Templates', target: 'Gestionați Șabloanele' },
    { source: 'Logout', target: 'Deconectare' },
    { source: 'Activity Log', target: 'Jurnal de activitate' },
    { source: 'Collaborations', target: 'Colaborări' },
    { source: 'Open Visual Builder', target: 'Deschideți Constructorul Vizual' },

    // Filters
    { source: 'equals', target: 'egal cu' },
    { source: 'does not equal', target: 'nu este egal cu' },
    { source: '{0} equals {1}', target: '{0} este egal cu {1}' },
    { source: '{0} does not equal {1}', target: '{0} nu este egal cu {1}' },

    { source: 'contains', target: 'conține' },
    { source: 'does not contain', target: 'nu conține' },
    { source: '{0} contains {1}', target: '{0} conține {1}' },
    { source: '{0} not contains {1}', target: '{0} nu conține {1}' },

    { source: 'starts with', target: 'începe cu' },
    { source: 'does not start with', target: 'nu începe cu' },
    { source: '{0} starts with {1}', target: '{0} începe cu {1}' },
    { source: '{0} does not start with {1}', target: '{0} nu începe cu {1}' },

    { source: 'ends with', target: 'se termină cu' },
    { source: 'does not end with', target: 'nu se termină cu' },
    { source: '{0} ends with {1}', target: '{0} se termină cu {1}' },
    { source: '{0} does not end with {1}', target: '{0} nu se termină cu {1}' },

    { source: 'greater than', target: 'mai mare decât' },
    { source: 'is not greater than', target: 'nu este mai mare decât' },
    { source: '{0} is greater than {1}', target: '{0} este mai mare decât {1}' },
    { source: '{0} not greater than {1}', target: '{0} nu este mai mare decât {1}' },

    { source: 'greater than or equals', target: 'mai mare sau egal cu' },
    { source: 'is not greater than or equals', target: 'nu este mai mare sau egal cu' },
    { source: '{0} is greater than or equals {1}', target: '{0} este mai mare sau egal cu {1}' },
    { source: '{0} is not greater than or equals {1}', target: '{0} nu este mai mare sau egal cu {1}' },

    { source: 'less than', target: 'mai mic decât' },
    { source: 'is not less than', target: 'nu este mai mic decât' },
    { source: '{0} is less than {1}', target: '{0} este mai mic decât {1}' },
    { source: '{0} is not less than {1}', target: '{0} nu este mai mic decât {1}' },

    { source: 'less than or equals', target: 'mai mic sau egal cu' },
    { source: 'is not less than or equals', target: 'nu este mai mic sau egal cu' },
    { source: '{0} is less than or equals {1}', target: '{0} este mai mic sau egal cu {1}' },
    { source: '{0} is not less than or equals {1}', target: '{0} nu este mai mic sau egal cu {1}' },

    { source: 'one of', target: 'unul dintre' },
    { source: 'is one of', target: 'este unul dintre' },
    { source: 'is not one of', target: 'nu este unul dintre' },
    { source: '{0} is one of {1}', target: '{0} este unul dintre {1}' },
    { source: '{0} is not one of {1}', target: '{0} nu este unul dintre {1}' },

    { source: 'is null', target: 'este nul' },
    { source: 'is not null', target: 'nu este nul' },
    { source: '{0} is null', target: '{0} este nul' },
    { source: '{0} is not null', target: '{0} nu este nul' },

    { source: 'is future', target: 'este în viitor' },
    { source: 'in the future', target: 'în viitor' },
    { source: 'is not in the future', target: 'nu este în viitor' },
    { source: '{0} is in the future', target: '{0} este în viitor' },
    { source: '{0} is not in the future', target: '{0} nu este în viitor' },

    { source: 'is past', target: 'este în trecut' },
    { source: 'in the past', target: 'în trecut' },
    { source: 'is not in the past', target: 'nu este în trecut' },
    { source: '{0} is in the past', target: '{0} este în trecut' },
    { source: '{0} is not in the past', target: '{0} nu este în trecut' },

    { source: 'is Today', target: 'este astăzi' },
    { source: 'today', target: 'astăzi' },
    { source: 'is not today', target: 'nu este astăzi' },
    { source: '{0} is today', target: '{0} este astăzi' },
    { source: '{0} is not today', target: '{0} nu este astăzi' },

    { source: 'is Yesterday', target: 'este ieri' },
    { source: 'yesterday', target: 'ieri' },
    { source: 'is not yesterday', target: 'nu este ieri' },
    { source: '{0} is yesterday', target: '{0} este ieri' },
    { source: '{0} is not yesterday', target: '{0} nu este ieri' },

    { source: 'is Last Week', target: 'este săptămâna trecută' },
    { source: 'last week', target: 'săptămâna trecută' },
    { source: 'is not last week', target: 'nu este săptămâna trecută' },
    { source: '{0} is last week', target: '{0} este săptămâna trecută' },
    { source: '{0} is not last week', target: '{0} nu este săptămâna trecută' },

    { source: 'is Last Month', target: 'este luna trecută' },
    { source: 'last month', target: 'luna trecută' },
    { source: 'is not last month', target: 'nu este luna trecută' },
    { source: '{0} is last month', target: '{0} este luna trecută' },
    { source: '{0} is not last month', target: '{0} nu este luna trecută' },

    { source: 'is Last Quarter', target: 'este ultimul trimestru' },
    { source: 'last quarter', target: 'ultimul trimestru' },
    { source: 'is not last quarter', target: 'nu este ultimul trimestru' },
    { source: '{0} is last quarter', target: '{0} este ultimul trimestru' },
    { source: '{0} is not last quarter', target: '{0} nu este ultimul trimestru' },

    { source: 'is Last Year', target: 'este anul trecut' },
    { source: 'last year', target: 'anul trecut' },
    { source: 'is not last year', target: 'nu este anul trecut' },
    { source: '{0} is last year', target: '{0} este anul trecut' },
    { source: '{0} is not last year', target: '{0} nu este anul trecut' },

    { source: 'is Last X Days', target: 'este în ultimele X zile' },
    { source: 'last X days', target: 'în ultimele X zile' },
    { source: 'is not last X days', target: 'nu este în ultimele X zile' },
    { source: '{0} is last {1} days', target: '{0} este în ultimele {1} zile' },
    { source: '{0} is not last {1} days', target: '{0} nu este în ultimele {1} zile' },

    { source: 'is Current Week', target: 'este săptămâna curentă' },
    { source: 'current week', target: 'săptămâna curentă' },
    { source: 'is not current week', target: 'nu este săptămâna curentă' },
    { source: '{0} is current week', target: '{0} este săptămâna curentă' },
    { source: '{0} is not current week', target: '{0} nu este săptămâna curentă' },

    { source: 'is Current Month', target: 'este luna curentă' },
    { source: 'current month', target: 'luna curentă' },
    { source: 'is not current month', target: 'nu este luna curentă' },
    { source: '{0} is current month', target: '{0} este luna curentă' },
    { source: '{0} is not current month', target: '{0} nu este luna curentă' },

    { source: 'is Current Quarter', target: 'este trimestrul curent' },
    { source: 'current quarter', target: 'trimestrul curent' },
    { source: 'is not current quarter', target: 'nu este trimestrul curent' },
    { source: '{0} is current quarter', target: '{0} este trimestrul curent' },
    { source: '{0} is not current quarter', target: '{0} nu este trimestrul curent' },

    { source: 'is Current Year', target: 'este anul curent' },
    { source: 'current year', target: 'anul curent' },
    { source: 'is not current year', target: 'nu este anul curent' },
    { source: '{0} is current year', target: '{0} este anul curent' },
    { source: '{0} is not current year', target: '{0} nu este anul curent' },

    { source: 'is Previous Week', target: 'este săptămâna precedentă' },
    { source: 'previous week', target: 'săptămâna precedentă' },
    { source: 'is not previous week', target: 'nu este săptămâna precedentă' },
    { source: '{0} is previous week', target: '{0} este săptămâna precedentă' },
    { source: '{0} is not previous week', target: '{0} nu este săptămâna precedentă' },

    { source: 'is Previous Month', target: 'este luna precedentă' },
    { source: 'previous month', target: 'luna precedentă' },
    { source: 'is not previous month', target: 'nu este luna precedentă' },
    { source: '{0} is previous month', target: '{0} este luna precedentă' },
    { source: '{0} is not previous month', target: '{0} nu este luna precedentă' },

    { source: 'is Previous Quarter', target: 'este trimestrul precedent' },
    { source: 'previous quarter', target: 'trimestrul precedent' },
    { source: 'is not previous quarter', target: 'nu este trimestrul precedent' },
    { source: '{0} is previous quarter', target: '{0} este trimestrul precedent' },
    { source: '{0} is not previous quarter', target: '{0} nu este trimestrul precedent' },

    { source: 'is Previous Year', target: 'este anul precedent' },
    { source: 'previous year', target: 'anul precedent' },
    { source: 'is not previous year', target: 'nu este anul precedent' },
    { source: '{0} is previous year', target: '{0} este anul precedent' },
    { source: '{0} is not previous year', target: '{0} nu este anul precedent' },

    { source: 'is Previous X Days', target: 'este în ultimele X zile' },
    { source: 'previous X days', target: 'ultimele X zile' },
    { source: 'is not previous X days', target: 'nu este în ultimele X zile' },
    { source: '{0} is previous {1} days', target: '{0} este în ultimele {1} zile' },
    { source: '{0} is not previous {1} days', target: '{0} nu este în ultimele {1} zile' },

    { source: 'is empty', target: 'este gol' },
    { source: 'is not empty', target: 'nu este gol' },
    { source: '{0} is empty', target: '{0} este gol' },
    { source: '{0} is not empty', target: '{0} nu este gol' },

    { source: 'covered by', target: 'acoperit de' },
    { source: 'is not covered by', target: 'nu este acoperit de' },
    { source: '{0} covered by {1}', target: '{0} acoperit de {1}' },
    { source: '{0} is not covered by {1}', target: '{0} nu este acoperit de {1}' },

    // Activity log
    { source: 'No activities found', target: 'Nu au fost găsite activități' },
    {
      source: 'Start to working with data to log activities.',
      target: 'Începeți să lucrați cu datele pentru a înregistra activitățile.'
    },
    { source: 'All Activity', target: 'Toată activitatea' },
    { source: 'Create Record', target: 'Creare înregistrare' },
    { source: 'Update Record', target: 'Actualizare înregistrare' },
    { source: 'Delete Record', target: 'Șterge înregistrare' },
    { source: 'All Members', target: 'Toți membrii' },

    // Collaboration
    { source: 'Timeline', target: 'Cronologie' },
    { source: 'Messages', target: 'Mesaje' },
    { source: 'Activity', target: 'Activitate' },
    { source: 'Start chatting with your team', target: 'Începeți să discutați cu echipa dvs.' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'Lăsați un mesaj despre pagina curentă pentru a urmări informațiile importante.'
    },
    { source: 'Your Message', target: 'Mesajul dumneavoastră' },
    { source: 'Send', target: 'Trimite' },

    // Share
    { source: 'Invite members', target: 'Invită membri' },
    { source: 'Public share', target: 'Distribuire publică' },
    { source: 'Sign Up', target: 'Înregistrare' },
    { source: 'Members', target: 'Membri' },
    { source: 'Invite with Email', target: 'Invită prin Email' },
    { source: 'Invite someone...', target: 'Invită pe cineva...' },
    { source: 'Send Invite', target: 'Trimite invitație' },
    {
      source: 'Limit access to your data by user properties',
      target: 'Limitați accesul la datele dvs. prin proprietăți utilizator'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: 'Introduceți emailul utilizatorului pe care doriți să-l invitați să colaboreze.'
    },
    { source: 'Copy', target: 'Copiere' },
    { source: 'Invite with Link', target: 'Invită cu link' },
    { source: 'Remove link', target: 'Elimină link' },
    { source: 'Add Invite Link', target: 'Adaugă link de invitație' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'Oricine de pe internet cu acest link va putea să se alăture echipei selectate.'
    },
    { source: 'Pending Invites', target: 'Invitații în așteptare' },
    { source: 'Cancel invite', target: 'Anulează invitația' },
    { source: 'Active Members', target: 'Membri activi' },
    { source: 'Remove member', target: 'Elimină membru' },
    {
      source: 'You are setting sharing for the current page',
      target: 'Setați distribuirea pentru pagina curentă'
    },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'Setați distribuirea pentru toate paginile aplicației dvs.'
    },
    { source: 'Public access link', target: 'Link de acces public' },
    { source: 'Updating public access...', target: 'Actualizarea accesului public...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'Oricine cu acest link va putea să vadă pagina curentă. În acest fel, puteți încorpora pagina curentă într-un alt site web.'
    },
    { source: 'Embed code (IFRAME)', target: 'Cod de încorporare (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: 'Lipiți acest cod în codul HTML al site-ului dvs. unde doriți să apară pagina curentă.'
    },
    { source: 'link', target: 'link' },
    { source: 'invited', target: 'invitat' },
    { source: 'Choose Team', target: 'Alege echipa' },
    { source: 'App Teams', target: 'Echipe aplicație' },
    { source: 'Built-In Teams', target: 'Echipe încorporate' },
    { source: 'Clear Team', target: 'Curăță echipa' },
    { source: 'Can build application and modify data', target: 'Poate construi aplicație și modifica datele' },
    { source: 'Can modify data in application', target: 'Poate modifica datele în aplicație' },
    { source: 'Can only view data without modification', target: 'Poate doar să vizualizeze datele fără modificare' },
    { source: 'Add Team', target: 'Adaugă echipa' },
    { source: 'Edit Team', target: 'Editează echipa' },
    { source: 'Adding Team', target: 'Adăugarea echipei' },
    {
      source: 'Keep control over who has access to current App',
      target: 'Mențineți controlul asupra accesului la aplicația curentă'
    },
    { source: 'Enter Team Name', target: 'Introduceți numele echipei' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'Introduceți numele echipei, ex: Suport, Vânzări, Marketing, etc.'
    },
    { source: 'Add a new member to this team.', target: 'Adaugă un nou membru în această echipă.' },
    { source: 'Invite new member', target: 'Invită membru nou' },
    { source: 'User', target: 'Utilizator' },
    { source: 'Date Added', target: 'Data adăugării' },
    { source: 'You', target: 'Tu' },
    { source: 'Edit', target: 'Editează' },
    { source: 'No users in this team', target: 'Nu există utilizatori în această echipă' },
    { source: 'Page Permissions', target: 'Permisiuni pagină' },
    { source: 'App Permissions', target: 'Permisiuni aplicație' },
    { source: 'Properties', target: 'Proprietăți' },
    { source: 'Page name', target: 'Numele paginii' },
    { source: 'Access', target: 'Acces' },
    { source: 'Full Access', target: 'Acces complet' },
    { source: 'Read Only', target: 'Doar citire' },
    { source: 'No Access', target: 'Fără acces' },
    { source: 'Read', target: 'Citire' },
    { source: 'Update', target: 'Actualizare' },
    { source: 'Write', target: 'Scriere' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'Ștergere' },
    { source: 'Custom Access', target: 'Acces personalizat' },
    { source: 'Read, create, update and delete data', target: 'Citire, creare, actualizare și ștergere date' },
    { source: 'Choose allowed operations granularly', target: 'Alegeți operațiunile permise granular' },
    { source: 'Without any access to data', target: 'Fără acces la date' },
    { source: 'Name', target: 'Nume' },
    { source: 'Active', target: 'Activ' },
    { source: 'Settings', target: 'Setări' },
    { source: 'Members and Teams', target: 'Membri și Echipe' },
    { source: 'App Builder', target: 'Constructor Aplicație' },
    { source: 'Collection Permissions', target: 'Permisiuni Colecție' },
    { source: "Grant permissions to app's collection", target: 'Acordați permisiuni colecției aplicației' },
    { source: 'Collection', target: 'Colecție' },
    {
      source: 'Limit access to your data by team properties',
      target: 'Limitați accesul la datele dvs. prin proprietăți de echipă'
    },
    { source: 'Save Team', target: 'Salvează echipa' },
    { source: 'Create Team', target: 'Creează echipă' },
    { source: 'Value', target: 'Valoare' },
    { source: 'No properties specified', target: 'Nicio proprietate specificată' },

    // Navigation
    { source: 'Current App', target: 'Aplicația curentă' },
    { source: 'Home', target: 'Pagina principală' },

    // Profile
    {
      source: 'We are fetching user data, please, wait...',
      target: 'Se preiau datele utilizatorului, vă rugăm așteptați...'
    },
    { source: 'Profile Settings', target: 'Setări profil' },
    { source: 'Basic information about your account.', target: 'Informații de bază despre contul dvs.' },
    { source: 'Photo', target: 'Fotografie' },
    { source: 'your photo', target: 'fotografia dvs.' },
    { source: 'Change', target: 'Schimbare' },
    { source: 'Upload', target: 'Încărcare' },
    { source: 'Photo was successfully updated', target: 'Fotografia a fost actualizată cu succes' },
    { source: 'Photo was successfully deleted', target: 'Fotografia a fost ștearsă cu succes' },
    { source: 'First Name', target: 'Prenume' },
    { source: 'Last Name', target: 'Nume' },
    { source: 'Your Email', target: 'Email-ul dvs.' },
    { source: 'Email Change', target: 'Schimbare Email' },
    { source: 'New Email', target: 'Email nou' },
    { source: 'Change Email', target: 'Schimbare Email' },
    { source: 'Check your inbox', target: 'Verificați-vă căsuța de email' },
    { source: 'Confirmation Email was sent to {0}', target: 'Emailul de confirmare a fost trimis la {0}' },
    { source: 'Changing Email failed', target: 'Schimbarea Email-ului a eșuat' },
    { source: 'Password Change', target: 'Schimbare Parolă' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target:
        'O parolă ar trebui să fie suficient de puternică pentru a proteja contul dvs., așa că faceți-o lungă de cel puțin 12 caractere.'
    },
    { source: 'Current Password', target: 'Parola curentă' },
    { source: 'New Password', target: 'Parolă nouă' },
    { source: 'Confirm New Password', target: 'Confirmați noua parolă' },
    { source: 'Change Password', target: 'Schimbare Parolă' },
    {
      source: 'Current password was successfully updated, all other sessions will be logged out shortly',
      target: 'Parola actuală a fost actualizată cu succes, toate celelalte sesiuni vor fi deconectate în curând'
    },
    { source: 'Saving current password failed', target: 'Salvarea parolei curente a eșuat' },
    { source: 'Short password', target: 'Parolă scurtă' },
    { source: "Passwords don't match", target: 'Parolele nu se potrivesc' },
    { source: 'Personal Preferences', target: 'Preferințe personale' },
    { source: 'Language', target: 'Limbă' },
    { source: 'Timezone', target: 'Fus orar' },
    { source: 'Current time in {0} is', target: 'Ora curentă în {0} este' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'Personalizați preferințe suplimentare pentru contul dvs.'
    },
    { source: 'News & Proposals', target: 'Știri și propuneri' },
    {
      source: 'Subscribe to our updates and proposals.',
      target: 'Abonați-vă la actualizările și propunerile noastre.'
    },
    { source: 'Save changes', target: 'Salvează modificările' },
    { source: 'Current user was successfully updated', target: 'Utilizatorul curent a fost actualizat cu succes' },
    { source: 'Saving current user failed', target: 'Salvarea utilizatorului curent a eșuat' },

    // My Apps
    { source: 'Type to search...', target: 'Tastați pentru a căuta...' },
    { source: 'My Apps', target: 'Aplicațiile mele' },
    { source: 'New App', target: 'Aplicație nouă' },
    { source: 'Builder', target: 'Constructor' },
    { source: 'App', target: 'Aplicație' },
    { source: 'continue install', target: 'continuați instalarea' },
    { source: 'Open builder', target: 'Deschideți constructorul' },
    { source: 'View published', target: 'Vedeți publicat' },
    { source: 'Delete App', target: 'Șterge Aplicație' },
    { source: 'Start from a template', target: 'Porniți de la un șablon' },
    { source: 'Preview', target: 'Previzualizare' },
    { source: 'Contact Support', target: 'Contact Suport' },
    { source: 'Documentation', target: 'Documentație' },
    { source: 'Feature Requests', target: 'Solicitări de funcții' },
    { source: 'See What’s New', target: 'Vezi ce e nou' },
    { source: 'Search templates...', target: 'Căutare șabloane...' },
    { source: 'any', target: 'orice' },
    { source: 'more', target: 'mai mult' },
    { source: 'Choose Data Source', target: 'Alegeți Sursa de date' },
    { source: 'works with 30+ data sources', target: 'funcționează cu peste 30 surse de date' },
    { source: 'Use this template', target: 'Folosiți acest șablon' },
    { source: 'stores data in Jet Tables', target: 'stochează datele în Jet Tables' },
    { source: 'New Data', target: 'Date noi' },
    { source: 'using {0}', target: 'folosind {0}' },
    { source: "Can't find resource you're looking for?", target: 'Nu găsiți resursa pe care o căutați?' },
    { source: 'Admin Panel', target: 'Panou Admin' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'Enumerați, creați și actualizați operațiunile (CRUD) deasupra datelor dvs.'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target:
        'Construiți un panou de administrare personalizat bazat pe orice baze de date, aplicații și API-uri precum Stripe, Twilio și GraphQL.'
    },
    { source: 'All Integrations', target: 'Toate Integrările' },
    { source: 'Databases', target: 'Baze de date' },
    { source: 'APIs', target: 'API-uri' },
    { source: 'Frameworks', target: 'Framework-uri' },
    { source: 'Storages', target: 'Depozite' },

    // Sign In
    { source: 'Good morning', target: 'Bună dimineața' },
    { source: 'Good afternoon', target: 'Bună ziua' },
    { source: 'Good evening', target: 'Bună seara' },
    { source: 'Sign In', target: 'Accesați' },
    { source: 'Welcome Back.', target: 'Bine ați revenit.' },
    { source: 'Sign in with {0}', target: 'Accesați cu {0}' },
    { source: 'or login with', target: 'sau autentificați-vă cu' },
    { source: 'Enter E-mail', target: 'Introduceți E-mail' },
    { source: 'Enter password', target: 'Introduceți parola' },
    { source: 'Login', target: 'Autentificați-vă' },
    { source: 'Create new account', target: 'Creați un cont nou' },
    { source: 'Forgot my password', target: 'Am uitat parola' },
    { source: 'required', target: 'obligatoriu' },
    { source: 'incorrect Email', target: 'Email incorect' },
    { source: 'Minimum password length {0}', target: 'Lungimea minimă a parolei {0}' },
    { source: 'Unable to Sign In', target: 'Nu se poate accesa' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'Începeți <span class="auth-form__accent">gratuit astăzi</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target:
        'Nu este necesar un card. Veți primi toate funcționalitățile avansate gratuit în timpul perioadei de încercare PRO de 14 zile.'
    },
    { source: 'Enter First Name', target: 'Introduceți Prenumele' },
    { source: 'Enter Last Name (optional)', target: 'Introduceți Numele (opțional)' },
    { source: 'Enter Email', target: 'Introduceți Email' },
    { source: 'Password', target: 'Parola' },
    { source: 'Repeat Password', target: 'Repetați Parola' },
    {
      source: 'By signing in you’re okay with our',
      target: 'Prin accesare sunteți de acord cu'
    },
    {
      source: 'Creating an account means you’re okay with our',
      target: 'Creând un cont, sunteți de acord cu'
    },
    { source: 'Terms of Service', target: 'Termenii Serviciului' },
    { source: 'Privacy Policy', target: 'Politica de Confidențialitate' },
    { source: 'and', target: 'și' },
    { source: 'Create your free account', target: 'Creați-vă contul gratuit' },
    { source: 'Already have an account', target: 'Aveți deja un cont' },
    { source: 'Unable to Sign Up', target: 'Nu se poate înregistra' },

    // Restore password
    { source: 'Reset your password', target: 'Resetați-vă parola' },
    { source: 'Email Address', target: 'Adresă de Email' },
    { source: 'Reset password', target: 'Resetați parola' },
    { source: 'Return to Sign In', target: 'Întoarceți-vă la Accesare' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'Vă rugăm să verificați email-ul dvs. – <strong>{0}</strong>. Am trimis linkul de validare pe care trebuie să-l urmați pentru a vă schimba parola.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be al least 8 characters.',
      target: 'Aproape gata, introduceți noua parolă mai jos. <br>Trebuie să aibă cel puțin 8 caractere.'
    },
    { source: 'Reset password & Sign In', target: 'Resetați parola & Accesați' },
    { source: 'Unable to Send Code', target: 'Nu se poate trimite codul' },
    { source: 'Unable to Change Password', target: 'Nu se poate schimba parola' },

    // Email Verification
    { source: 'Email Verification', target: 'Verificare Email' },
    { source: 'Resend verification code', target: 'Retrimiteți codul de verificare' },
    { source: 'Verification email sent', target: 'Email de verificare trimis' },
    { source: 'Your Email is now verified', target: 'Email-ul dvs. este acum verificat' },
    { source: 'Request is incorrect', target: 'Cererea este incorectă' },

    // Invites
    {
      source: 'Join <span class="auth-form__accent">{0}</span>',
      target: 'Alătură-te <span class="auth-form__accent">{0}</span>'
    },
    {
      source: '<strong>{0}</strong> has invited you to join <strong>{1}</strong>',
      target: '<strong>{0}</strong> te-a invitat să te alături <strong>{1}</strong>'
    },
    {
      source: 'Someone has invited you to join <strong>{0}</strong>',
      target: 'Cineva te-a invitat să te alături <strong>{0}</strong>'
    },
    {
      source: 'You are joining <strong>{0}</strong> using invite link',
      target: 'Te alături la <strong>{0}</strong> folosind linkul de invitație'
    },
    { source: 'Join', target: 'Alătură-te' },
    { source: 'Go to home page', target: 'Mergi la pagina principală' },
    { source: 'Invite link is wrong', target: 'Linkul de invitație este greșit' },
    {
      source:
        'Looks like your invitation link has expired or maybe you have followed the wrong link. Please try to ask to invite your again.',
      target:
        'Se pare că linkul de invitație a expirat sau poate că ați urmat un link greșit. Vă rugăm să încercați să cereți să fiți invitat din nou.'
    },
    {
      source: 'Unfortunately we failed to load information about this invitation',
      target: 'Din păcate, nu am reușit să încărcăm informații despre această invitație'
    },

    // Users & Teams
    { source: 'Members of {0}', target: 'Membri ai {0}' },
    { source: 'How to get started', target: 'Cum să începeți' },
    { source: 'Users API', target: 'API utilizatori' },
    { source: 'Teams API', target: 'API echipe' },
    { source: 'Invite Member', target: 'Invită membru' },
    { source: 'Add User property', target: 'Adaugă proprietate utilizator' },
    { source: 'Add Team property', target: 'Adaugă proprietate echipă' },
    { source: 'Edit property', target: 'Editează proprietate' },
    { source: 'Delete property', target: 'Șterge proprietate' },
    { source: 'Users', target: 'Utilizatori' },
    { source: 'Teams', target: 'Echipe' },
    { source: 'Search members', target: 'Caută membri' },
    { source: 'Search teams', target: 'Caută echipe' },
    { source: '{0} pages', target: 'pagini {0}' },
    { source: 'No members', target: 'Fără membri' }
  ]
};

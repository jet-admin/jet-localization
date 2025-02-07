import { Locale } from './locale';

export const locale: Locale = {
  name: 'hungarian',
  language: 'hu',
  items: [
    // General
    { source: 'Save', target: 'Ment' },
    { source: 'Create', target: 'Létrehoz' },
    { source: 'Duplicating', target: 'Másol' },
    { source: 'Duplicate', target: 'Duplikál' },
    { source: 'Mass Edit', target: 'Csoportos szerkesztés' },
    { source: 'Export', target: 'Export' },
    { source: 'Import', target: 'Import' },
    { source: 'Delete', target: 'Töröl' },
    { source: 'Continue', target: 'Folytat' },
    { source: 'Submit', target: 'Beküld' },
    { source: 'Cancel', target: 'Mégse' },
    { source: 'Loading', target: 'Betöltés' },
    { source: 'Please wait...', target: 'Kérem, várjon...' },
    { source: 'Loading failed', target: 'A betöltés nem sikerült' },
    { source: 'Unknown error', target: 'Ismeretlen hiba' },
    { source: 'Add', target: 'Hozzáadás' },
    { source: 'or', target: 'vagy' },
    { source: 'Hours', target: 'Órák' },
    { source: 'Minutes', target: 'Percek' },
    { source: 'Seconds', target: 'Másodpercek' },
    { source: 'Saved', target: 'Mentve' },
    { source: 'Error', target: 'Hiba' },
    { source: 'Page not found', target: 'Az oldal nem található' },
    {
      source: 'The specified address is incorrect, or the page does not exist',
      target: 'A megadott cím helytelen, vagy az oldal nem létezik'
    },
    { source: 'Not allowed', target: 'Nem engedélyezett' },
    {
      source: "You don't have permissions to access this page",
      target: 'Önnek nincs jogosultsága az oldal megtekintéséhez'
    },
    { source: 'Are you sure want to close?', target: 'Biztosan be akarja zárni?' },
    { source: 'Close', target: 'Bezárás' },

    // Actions
    { source: 'Action executed', target: 'Művelet végrehajtva' },
    { source: 'Action executed successfully', target: 'Művelet sikeresen végrehajtva' },
    { source: 'Action failed', target: 'A művelet sikertelen' },
    {
      source: "You don't have permission for run this operation",
      target: 'Nincs jogosultsága a művelet végrehajtásához'
    },
    { source: 'Specify parameters', target: 'Paraméterek megadása' },
    { source: 'Executing action', target: 'Művelet végrehajtása' },
    { source: 'You are executing <strong>{0}</strong>', target: 'Ön végrehajtja a(z) <strong>{0}</strong>' },
    { source: 'Please fill in the parameters below.', target: 'Kérem, töltse ki az alábbi paramétereket.' },
    { source: 'Execute', target: 'Végrehajt' },
    { source: 'Executing', target: 'Végrehajtás' },
    { source: 'Finished', target: 'Befejezve' },
    { source: 'Done', target: 'Kész' },

    // Export
    { source: 'Records Export', target: 'Rekordok exportálása' },
    { source: 'Downloading records data as a file', target: 'Rekordadatok letöltése fájlként' },
    { source: 'Choose format', target: 'Formátum kiválasztása' },
    { source: 'Number of exporting records', target: 'Exportálandó rekordok száma' },
    { source: { label: 'Export', context: 'submit' }, target: 'Export' },
    { source: 'Exporting', target: 'Exportálás' },
    { source: 'Export completed', target: 'Exportálás befejezve' },
    { source: 'Failed to export', target: 'Exportálás sikertelen' },

    // Components
    { source: 'optional', target: 'választható' },
    { source: 'choose', target: 'válasszon' },
    { source: 'Clear value', target: 'Érték törlése' },
    { source: 'loading...', target: 'Betöltés...' },
    { source: 'Nothing found', target: 'Nincs találat' },
    { source: 'Search...', target: 'Keresés...' },
    { source: 'Enter at least {0} characters', target: 'Írjon be legalább {0} karaktert!' },
    { source: 'No options', target: 'Nincsenek lehetőségek' },
    { source: 'Drop files here or', target: 'Húzza ide a fájlokat, vagy' },
    { source: 'Upload new', target: 'Új feltöltése' },
    { source: 'Clear', target: 'Törlés' },
    { source: 'Download', target: 'Letöltés' },
    { source: 'Choose file', target: 'Fájl kiválasztása' },
    { source: 'Choose files', target: 'Fájlok kiválasztása' },
    { source: 'Scan with Camera', target: 'Szkennelés kamerával' },
    { source: 'Scan Image file', target: 'Kép fájl szkennelése' },
    { source: 'Choose camera', target: 'Kamera kiválasztása' },
    { source: 'Stop scanning', target: 'Szkennelés leállítása' },
    { source: 'Scan again', target: 'Újra szkennelés' },
    { source: 'Use this scan', target: 'Ezt a szkennelést használja' },
    { source: 'Failed to scan', target: 'Szkennelés nem sikerült' },
    {
      source: 'Code failed to scan, please try another image',
      target: 'A kód szkennelése nem sikerült, próbáljon meg egy másik képet'
    },
    { source: 'current', target: 'jelenlegi' },
    { source: 'Day', target: 'Nap' },
    { source: 'Week', target: 'Hét' },
    { source: 'Month', target: 'Hónap' },
    { source: 'Year', target: 'Év' },
    { source: 'Today', target: 'Ma' },
    { source: 'Daily', target: 'Napi' },
    { source: 'Weekly', target: 'Heti' },
    { source: 'Monthly', target: 'Havi' },
    { source: 'Quarterly', target: 'Negyedéves' },
    { source: 'Yearly', target: 'Éves' },
    { source: 'Hourly', target: 'Óránkénti' },
    { source: 'Minutely', target: 'Percenkénti' },
    { source: 'Since', target: 'Óta' },
    { source: 'Before', target: 'Előtt' },
    { source: 'Between', target: 'Között' },
    { source: 'From date', target: 'Dátumtól' },
    { source: 'To date', target: 'Dátumig' },
    { source: 'Coordinates', target: 'Koordináták' },
    { source: 'Latitude', target: 'Szélesség' },
    { source: 'Longitude', target: 'Hosszúság' },
    { source: 'Default color', target: 'Alapértelmezett szín' },
    { source: 'not specified', target: 'nincs megadva' },
    { source: 'Sign using your finger or pointer', target: 'Írjon alá az ujjával vagy a mutatóval' },

    // List components
    { source: 'Filter', target: 'Szűrés' },
    { source: 'Filter by field', target: 'Szűrés mező alapján' },
    { source: 'Filter by...', target: 'Szűrés valami alapján...' },
    { source: 'Back', target: 'Vissza' },
    { source: 'Back to {0} fields', target: 'Vissza a {0} mezőhöz' },
    { source: 'Choose {0} from list', target: 'Válasszon {0} lehetőséget a listából' },
    { source: '{0} fields', target: '{0} mező' },
    { source: '{0} relationships', target: '{0} kapcsolat' },
    { source: 'Aggregate {0}', target: 'Összesített {0}' },
    { source: 'No fields to select', target: 'Nincsenek kiválasztandó mezők' },
    { source: 'Enter value...', target: 'Írja be az értéket ...' },
    { source: 'Exclude', target: 'Kivétel' },
    { source: 'Actions', target: 'Akciók' },
    { source: 'Search', target: 'Keresés' },
    { source: 'Sort 1 → 9', target: 'Rendezés 1 → 9' },
    { source: 'Sort 9 → 1', target: 'Rendezés 9 → 1' },
    { source: 'Sort A → Z', target: 'Rendezés A → Z' },
    { source: 'Sort Z → A', target: 'Rendezés Z → A' },
    { source: 'Refresh automatically', target: 'Automatikus frissítés' },
    { source: 'All', target: 'Összes' },
    { source: 'Selected', target: 'Kiválasztott' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'Sajnos nem található a lekérdezésének megfelelő {0}.'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'A(z) {0} lekérése folyamatban van, kérem, várjon...' },
    { source: 'Add filter', target: 'Szűrő hozzáadása' },
    { source: 'Delete this filter', target: 'Törölje ezt a szűrőt' },
    { source: 'Toggle ordering', target: 'Rendezés megváltoztatása' },
    { source: 'Not configured', target: 'Nincs beállítva' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'Sajnos ez a komponens még nincs konfigurálva'
    },
    { source: 'records', target: 'rekord' },
    { source: '{0} items', target: '{0} elem' },

    // Menu
    { source: 'Users & Teams', target: 'Felhasználók és csoportok' },
    { source: 'Billing', target: 'Számlázás' },
    { source: 'Billing & Plans', target: 'Számlázás' },
    { source: 'API keys', target: 'API kulcsok' },
    { source: 'Dark Mode', target: 'Sötét mód' },
    { source: 'Light Mode', target: 'Világos mód' },
    { source: 'Disable Staff', target: 'A személyzet letiltása' },
    { source: 'Enable Staff', target: 'Személyzet engedélyezése' },
    { source: 'Manage Templates', target: 'Sablonok kezelése' },
    { source: 'Logout', target: 'Kijelentkezés' },
    { source: 'Activity Log', target: 'Napló' },
    { source: 'Collaborations', target: 'Együttműködés' },
    { source: 'Open Visual Builder', target: 'Nyissa meg a Vizuális Szerkesztő alkalmazást' },

    // Filters
    { source: 'equals', target: 'egyenlő' },
    { source: 'does not equal', target: 'nem egyenlő' },
    { source: '{0} equals {1}', target: '{0} megegyezik {1}' },
    { source: '{0} does not equal {1}', target: '{0} nem egyenlő {1}' },

    { source: 'contains', target: 'tartalmazza' },
    { source: 'does not contain', target: 'nem tartalmazza' },
    { source: '{0} contains {1}', target: '{0} tartalmazza {1}' },
    { source: '{0} not contains {1}', target: '{0} nem tartalmazza {1}' },

    { source: 'starts with', target: '-vel kezdődik' },
    { source: 'does not start with', target: 'nem kezdődik' },
    { source: '{0} starts with {1}', target: '{0} a {1} -el kezdődik' },
    { source: '{0} does not start with {1}', target: '{0} nem kezdődik a {1}' },

    { source: 'ends with', target: 'végződik' },
    { source: 'does not end with', target: 'nem végződik' },
    { source: '{0} ends with {1}', target: '{0} a {1} -ra végződik' },
    { source: '{0} does not end with {1}', target: '{0} nem ér véget {1}' },

    { source: 'greater than', target: 'nagyobb, mint' },
    { source: 'is not greater than', target: 'nem nagyobb, mint' },
    { source: '{0} is greater than {1}', target: '{0} nagyobb, mint {1}' },
    { source: '{0} not greater than {1}', target: '{0} nem nagyobb, mint {1}' },

    { source: 'greater than or equals', target: 'nagyobb vagy egyenlő' },
    { source: 'is not greater than or equals', target: 'nem nagyobb, mint vagy egyenlő' },
    { source: '{0} is greater than or equals {1}', target: '{0} nagyobb, mint vagy egyenlő {1}' },
    { source: '{0} is not greater than or equals {1}', target: '{0} nem nagyobb vagy egyenlő {1}' },

    { source: 'less than', target: 'kevesebb, mint' },
    { source: 'is not less than', target: 'nem kevesebb, mint' },
    { source: '{0} is less than {1}', target: '{0} kevesebb, mint {1}' },
    { source: '{0} is not less than {1}', target: '{0} nem kevesebb, mint {1}' },

    { source: 'less than or equals', target: 'kisebb vagy egyenlő' },
    { source: 'is not less than or equals', target: 'nem kevesebb, mint vagy egyenlő' },
    { source: '{0} is less than or equals {1}', target: '{0} kevesebb vagy egyenlő {1}' },
    { source: '{0} is not less than or equals {1}', target: '{0} nem kevesebb, vagy egyenlő {1}' },

    { source: 'one of', target: 'az egyik' },
    { source: 'is one of', target: 'egyike a' },
    { source: 'is not one of', target: 'egyike sem' },
    { source: '{0} is one of {1}', target: '{0} a {1} egyike' },
    { source: '{0} is not one of {1}', target: '{0} nem egy a {1}' },

    { source: 'is null', target: 'nulla' },
    { source: 'is not null', target: 'nem nulla' },
    { source: '{0} is null', target: '{0} null' },
    { source: '{0} is not null', target: '{0} nem nulla' },

    { source: 'is future', target: 'a jövő' },
    { source: 'in the future', target: 'a jövőben' },
    { source: 'is not in the future', target: 'nincs a jövőben' },
    { source: '{0} is in the future', target: '{0} a jövőben van' },
    { source: '{0} is not in the future', target: '{0} a jövőben nincs' },

    { source: 'is past', target: 'elmúlt' },
    { source: 'in the past', target: 'a múltban' },
    { source: 'is not in the past', target: 'nincs a múltban' },
    { source: '{0} is in the past', target: '{0} a múltban van' },
    { source: '{0} is not in the past', target: '{0} nincs a múltban' },

    { source: 'is Today', target: 'ma van' },
    { source: 'today', target: 'Ma' },
    { source: 'is not today', target: 'ma nincs' },
    { source: '{0} is today', target: '{0} ma van' },
    { source: '{0} is not today', target: '{0} ma nincs' },

    { source: 'is Yesterday', target: 'tegnap van' },
    { source: 'yesterday', target: 'tegnap' },
    { source: 'is not yesterday', target: 'nincs tegnap' },
    { source: '{0} is yesterday', target: '{0} tegnap van' },
    { source: '{0} is not yesterday', target: '{0} nem tegnap van' },

    { source: 'is Last Week', target: 'múlt hét' },
    { source: 'last week', target: 'múlt hét' },
    { source: 'is not last week', target: 'nem a múlt héten' },
    { source: '{0} is last week', target: '{0} a múlt héten' },
    { source: '{0} is not last week', target: '{0} nem a múlt héten' },

    { source: 'is Last Month', target: 'az utolsó hónap' },
    { source: 'last month', target: 'múlt hónap' },
    { source: 'is not last month', target: 'nem a múlt hónapban' },
    { source: '{0} is last month', target: '{0} a múlt hónapban van' },
    { source: '{0} is not last month', target: '{0} a múlt hónapban' },

    { source: 'is Last Quarter', target: 'az utolsó negyed' },
    { source: 'last quarter', target: 'utolsó negyed' },
    { source: 'is not last quarter', target: 'nem az utolsó negyedév' },
    { source: '{0} is last quarter', target: '{0} az utolsó negyedév' },
    { source: '{0} is not last quarter', target: '{0} nem az utolsó negyedév' },

    { source: 'is Last Year', target: 'tavaly van' },
    { source: 'last year', target: 'tavaly' },
    { source: 'is not last year', target: 'nem tavaly' },
    { source: '{0} is last year', target: '{0} tavaly van' },
    { source: '{0} is not last year', target: '{0} nem tavaly van' },

    { source: 'is Last X Days', target: 'az utolsó X nap' },
    { source: 'last X days', target: 'utolsó x nap' },
    { source: 'is not last X days', target: 'nem tart x napig' },
    { source: '{0} is last {1} days', target: '{0} az utolsó {1} nap' },
    { source: '{0} is not last {1} days', target: '{0} nem az utóbbi {1} nap' },

    { source: 'is Current Week', target: 'az aktuális hét' },
    { source: 'current week', target: 'aktuális hét' },
    { source: 'is not current week', target: 'nem az aktuális hét' },
    { source: '{0} is current week', target: '{0} az aktuális hét' },
    { source: '{0} is not current week', target: '{0} nem az aktuális hét' },

    { source: 'is Current Month', target: 'az aktuális hónap' },
    { source: 'current month', target: 'aktuális hónap' },
    { source: 'is not current month', target: 'nem az aktuális hónap' },
    { source: '{0} is current month', target: '{0} az aktuális hónap' },
    { source: '{0} is not current month', target: '{0} nem az aktuális hónap' },

    { source: 'is Current Quarter', target: 'az aktuális negyedév' },
    { source: 'current quarter', target: 'aktuális negyedév' },
    { source: 'is not current quarter', target: 'nem az aktuális negyedév' },
    { source: '{0} is current quarter', target: '{0} az aktuális negyedév' },
    { source: '{0} is not current quarter', target: '{0} nem az aktuális negyedév' },

    { source: 'is Current Year', target: 'az aktuális év' },
    { source: 'current year', target: 'aktuális év' },
    { source: 'is not current year', target: 'nem aktuális év' },
    { source: '{0} is current year', target: '{0} az aktuális évben' },
    { source: '{0} is not current year', target: '{0} nem az aktuális év' },

    { source: 'is Previous Week', target: 'az előző hét' },
    { source: 'previous week', target: 'előző hét' },
    { source: 'is not previous week', target: 'nem az előző hét' },
    { source: '{0} is previous week', target: '{0} az előző hét' },
    { source: '{0} is not previous week', target: '{0} nem az előző hét' },

    { source: 'is Previous Month', target: 'az előző hónap' },
    { source: 'previous month', target: 'előző hónap' },
    { source: 'is not previous month', target: 'nem az előző hónap' },
    { source: '{0} is previous month', target: '{0} az előző hónap' },
    { source: '{0} is not previous month', target: '{0} nem az előző hónap' },

    { source: 'is Previous Quarter', target: 'az előző negyedév' },
    { source: 'previous quarter', target: 'előző negyedév' },
    { source: 'is not previous quarter', target: 'nem az előző negyedév' },
    { source: '{0} is previous quarter', target: '{0} az előző negyedév' },
    { source: '{0} is not previous quarter', target: '{0} nem az előző negyedév' },

    { source: 'is Previous Year', target: 'az előző év' },
    { source: 'previous year', target: 'előző év' },
    { source: 'is not previous year', target: 'nem az előző év' },
    { source: '{0} is previous year', target: '{0} az előző évben' },
    { source: '{0} is not previous year', target: '{0} nem az előző év' },

    { source: 'is Previous X Days', target: 'az Előző X nap' },
    { source: 'previous X days', target: 'Az előző x nap' },
    { source: 'is not previous X days', target: 'nem az előző x napok' },
    { source: '{0} is previous {1} days', target: '{0} az előző {1} nap' },
    { source: '{0} is not previous {1} days', target: '{0} nem előző {1} nap' },

    { source: 'is empty', target: 'üres' },
    { source: 'is not empty', target: 'nem üres' },
    { source: '{0} is empty', target: '{0} üres' },
    { source: '{0} is not empty', target: '{0} nem üres' },

    { source: 'covered by', target: 'fedezve van' },
    { source: 'is not covered by', target: 'nincs fedezve' },
    { source: '{0} covered by {1}', target: '{0} fedezi a(z) {1}' },
    { source: '{0} is not covered by {1}', target: '{0} nem fedezi a {1}' },

    // Activity log
    { source: 'No activities found', target: 'Nem található tevékenység' },
    {
      source: 'Start to working with data to log activities.',
      target: 'Kezdje el az adatokkal való munkát a tevékenységek naplózásához.'
    },
    { source: 'All Activity', target: 'Minden tevékenység' },
    { source: 'Create Record', target: 'Rekord létrehozása' },
    { source: 'Update Record', target: 'Rekord frissítése' },
    { source: 'Delete Record', target: 'Rekord törlése' },
    { source: 'All Members', target: 'Minden tag' },

    // Collaboration
    { source: 'Timeline', target: 'Idővonal' },
    { source: 'Messages', target: 'Üzenetek' },
    { source: 'Activity', target: 'Tevékenység' },
    { source: 'Start chatting with your team', target: 'Csevegés a csoportommal' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'Üzenet küldése az aktuális oldalról a fontos információk nyomon követéséhez.'
    },
    { source: 'Your Message', target: 'Üzeneted' },
    { source: 'Send', target: 'Küld' },

    // Share
    { source: 'Invite members', target: 'Tagok meghívása' },
    { source: 'Public share', target: 'Nyilvános megosztás' },
    { source: 'Sign Up', target: 'Regisztrálj' },
    { source: 'Members', target: 'tagok' },
    { source: 'Invite with Email', target: 'Meghívás e-mailben' },
    { source: 'Invite someone...', target: 'Hívjon meg valakit...' },
    { source: 'Send Invite', target: 'Meghívó küldése' },
    {
      source: 'Limit access to your data by user properties',
      target: 'Korlátozza az adatokhoz való hozzáférést a felhasználói tulajdonságok szerint'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: 'Adja meg annak a felhasználónak az e-mail címét, akit szeretne meghívni az együttműködésre.'
    },
    { source: 'Copy', target: 'Másolat' },
    { source: 'Invite with Link', target: 'Meghívás linkkel' },
    { source: 'Remove link', target: 'Link eltávolítása' },
    { source: 'Add Invite Link', target: 'Meghívó link hozzáadása' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'A link birtokában bárki csatlakozhat a kiválasztott csoporthoz.'
    },
    { source: 'Pending Invites', target: 'Függőben lévő meghívók' },
    { source: 'Cancel invite', target: 'Meghívás visszavonása' },
    { source: 'Active Members', target: 'Aktív tagok' },
    { source: 'Remove member', target: 'Tag eltávolítása' },
    {
      source: 'You are setting sharing for the current page',
      target: 'Az aktuális oldal megosztását állítja be'
    },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'Megosztást állít be az alkalmazás összes oldalára.'
    },
    { source: 'Public access link', target: 'Nyilvános hozzáférési hivatkozás' },
    { source: 'Updating public access...', target: 'Nyilvános hozzáférés frissítése...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'A link birtokában bárki megtekintheti az aktuális oldalt. Így az aktuális oldalt egy másik webhelybe is beágyazhatja.'
    },
    { source: 'Embed code (IFRAME)', target: 'Beágyazási kód (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: 'Illessze be ezt a kódot webhelye HTML-kódjába, ahol meg szeretné jeleníteni az aktuális oldalt.'
    },
    { source: 'link', target: 'link' },
    { source: 'invited', target: 'meghívott' },
    { source: 'Choose Team', target: 'Válasszon csoportot' },
    { source: 'App Teams', target: 'Alkalmazási csoportok' },
    { source: 'Built-In Teams', target: 'Beépített csoportok' },
    { source: 'Clear Team', target: 'Csoport törlése' },
    { source: 'Can build application and modify data', target: 'Alkalmazást készíthet és adatokat módosíthat' },
    { source: 'Can modify data in application', target: 'Módosíthatja az adatokat az alkalmazásban' },
    { source: 'Can only view data without modification', target: 'Csak az adatok megtekintése, módosítás nélkül' },
    { source: 'Add Team', target: 'Csoport hozzáadása' },
    { source: 'Edit Team', target: 'Csoport szerkesztése' },
    { source: 'Adding Team', target: 'Csoport hozzáadása' },
    {
      source: 'Keep control over who has access to current App',
      target: 'Tartsa kézben, hogy ki férhet hozzá az aktuális alkalmazáshoz'
    },
    { source: 'Enter Team Name', target: 'Írja be a csoport nevét' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'Írja be a csoport nevét, pl.: Támogatás, Értékesítés, Marketing stb.'
    },
    { source: 'Add a new member to this team.', target: 'Új tag hozzáadása ehhez a csoporthoz.' },
    { source: 'Invite new member', target: 'Új tag meghívása' },
    { source: 'User', target: 'Felhasználó' },
    { source: 'Date Added', target: 'dátum hozzáadva' },
    { source: 'You', target: 'Ön' },
    { source: 'Edit', target: 'Szerkeszt' },
    { source: 'No users in this team', target: 'Nincsenek felhasználók ebben a csoportban' },
    { source: 'Page Permissions', target: 'Oldaljogosultságok' },
    { source: 'App Permissions', target: 'Alkalmazásjogosultságok' },
    { source: 'Properties', target: 'Tulajdonságok' },
    { source: 'Page name', target: 'Az oldal neve' },
    { source: 'Access', target: 'Hozzáférés' },
    { source: 'Full Access', target: 'Teljes hozzáférés' },
    { source: 'Read Only', target: 'Csak olvasható' },
    { source: 'No Access', target: 'Nincs hozzáférés' },
    { source: 'Read', target: 'Olvas' },
    { source: 'Update', target: 'Frissít' },
    { source: 'Write', target: 'Ír' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'Töröl' },
    { source: 'Custom Access', target: 'Egyéni hozzáférés' },
    { source: 'Read, create, update and delete data', target: 'Adatok olvasása, létrehozása, frissítése és törlése' },
    { source: 'Choose allowed operations granularly', target: 'Válassza ki az egyes engedélyezett műveleteket' },
    { source: 'Without any access to data', target: 'Adatokhoz való hozzáférés nélkül' },
    { source: 'Name', target: 'Név' },
    { source: 'Active', target: 'Aktív' },
    { source: 'Settings', target: 'Beállítások' },
    { source: 'Members and Teams', target: 'Tagok és csoportok' },
    { source: 'App Builder', target: 'Alkalamzás szerkesztő' },
    { source: 'Collection Permissions', target: 'Gyűjtemény engedélyei' },
    { source: "Grant permissions to app's collection", target: 'Engedélyek megadása az alkalmazás gyűjteményéhez' },
    { source: 'Collection', target: 'Gyűjtemény' },
    {
      source: 'Limit access to your data by team properties',
      target: 'Korlátozza az adatokhoz való hozzáférést a csoport tulajdonságai szerint'
    },
    { source: 'Save Team', target: 'Csoport mentése' },
    { source: 'Create Team', target: 'Csoport létrehozása' },
    { source: 'Value', target: 'Érték' },
    { source: 'No properties specified', target: 'Nincsenek megadva tulajdonságok' },

    // Navigation
    { source: 'Current App', target: 'Jelenlegi alkalmazás' },
    { source: 'Home', target: 'Kezdőlap' },

    // Profile
    {
      source: 'We are fetching user data, please, wait...',
      target: 'Felhasználói adatok beolvasása folyamatban van, kérem, várjon...'
    },
    { source: 'Profile Settings', target: 'Profilbeállítások' },
    { source: 'Basic information about your account.', target: 'Fiókinformációk' },
    { source: 'Photo', target: 'Fénykép' },
    { source: 'your photo', target: 'képem' },
    { source: 'Change', target: 'Megváltoztatás' },
    { source: 'Upload', target: 'Feltöltés' },
    { source: 'Photo was successfully updated', target: 'A fénykép sikeresen frissült' },
    { source: 'Photo was successfully deleted', target: 'A fénykép törölve lett' },
    { source: 'First Name', target: 'Keresztnév' },
    { source: 'Last Name', target: 'Vezetéknév' },
    { source: 'Your Email', target: 'E-mail cím' },
    { source: 'Email Change', target: 'E-mail cím megváltoztatása' },
    { source: 'New Email', target: 'Új e-mail cím' },
    { source: 'Change Email', target: 'E-mail cím módosítása' },
    { source: 'Check your inbox', target: 'Ellenőrizze a postafiókját' },
    { source: 'Confirmation Email was sent to {0}', target: 'A megerősítő e-mail el lett küldve: {0}' },
    { source: 'Changing Email failed', target: 'Az e-mail cím megváltoztatása nem sikerült' },
    { source: 'Password Change', target: 'Jelszó változtatás' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target:
        'A jelszónak elég erősnek kell lennie ahhoz, hogy megvédje fiókját, ezért legyen legalább 12 karakter hosszú.'
    },
    { source: 'Current Password', target: 'jelenlegi jelszó' },
    { source: 'New Password', target: 'új jelszó' },
    { source: 'Confirm New Password', target: 'Erősítse meg az új jelszót' },
    { source: 'Change Password', target: 'Jelszó módosítása' },
    {
      source: 'Current password was successfully updated, all other sessions will be logged out shortly',
      target: 'A jelenlegi jelszó sikeresen frissült, minden más munkamenet hamarosan kijelentkeztethető lesz'
    },
    { source: 'Saving current password failed', target: 'A jelenlegi jelszó mentése sikertelen' },
    { source: 'Short password', target: 'Rövid jelszó' },
    { source: "Passwords don't match", target: 'A jelszavak nem egyeznek' },
    { source: 'Personal Preferences', target: 'Személyes preferenciák' },
    { source: 'Language', target: 'Nyelv' },
    { source: 'Timezone', target: 'Időzóna' },
    { source: 'Current time in {0} is', target: 'Jelenlegi idő {0} időzónában' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'Személyre szabhatja fiókja további beállításait.'
    },
    { source: 'News & Proposals', target: 'hírek' },
    { source: 'Subscribe to our updates and proposals.', target: 'Iratkozzon fel frissítéseinkre és ajánlatainkra.' },
    { source: 'Save changes', target: 'Változtatások mentése' },
    { source: 'Current user was successfully updated', target: 'A felhasználó sikeresen frissült' },
    { source: 'Saving current user failed', target: 'A felhasználó mentése sikertelen' },

    // My Apps
    { source: 'Type to search...', target: 'Gépeljen a kereséshez...' },
    { source: 'My Apps', target: 'Alkalmazásaim' },
    { source: 'New App', target: 'Új alkalmazás' },
    { source: 'Builder', target: 'Szerkesztő' },
    { source: 'App', target: 'App' },
    { source: 'continue install', target: 'folytassa a telepítést' },
    { source: 'Open builder', target: 'Szerkesztő megnyitása' },
    { source: 'View published', target: 'Megtekintés közzétéve' },
    { source: 'Delete App', target: 'Alkalmazás törlése' },
    { source: 'Start from a template', target: 'Kezdje sablonból' },
    { source: 'Preview', target: 'Előnézet' },
    { source: 'Contact Support', target: 'Lépjen kapcsolatba az ügyfélszolgálattal!' },
    { source: 'Documentation', target: 'Dokumentáció' },
    { source: 'Feature Requests', target: 'Funkció kérése' },
    { source: 'See What’s New', target: 'Tekintse meg az újdonságokat' },
    { source: 'Search templates...', target: 'Keresés a sablonok között...' },
    { source: 'any', target: 'bármi' },
    { source: 'more', target: 'több' },
    { source: 'Choose Data Source', target: 'Válasszon adatforrást' },
    { source: 'works with 30+ data sources', target: '30+ adatforrással működik' },
    { source: 'Use this template', target: 'Használja ezt a sablont' },
    { source: 'stores data in Jet Tables', target: 'Jet Tables-ben tárolja az adatokat' },
    { source: 'New Data', target: 'Új adat' },
    { source: 'using {0}', target: '{0} használatával' },
    { source: "Can't find resource you're looking for?", target: 'Nem találja a keresett forrást?' },
    { source: 'Admin Panel', target: 'Adminisztrációs Panel' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'Listázzon, hozzon létre és frissítsen (CRUD) műveleteket az adatokon'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target:
        'Hozzon létre egyéni adminisztrációs panelt bármilyen adatbázis, alkalmazás és API (például a Stripe, Twilio és GraphQL) alapján.'
    },
    { source: 'All Integrations', target: 'Minden integráció' },
    { source: 'Databases', target: 'Adatbázisok' },
    { source: 'APIs', target: 'API-k' },
    { source: 'Frameworks', target: 'Keretrendszerek' },
    { source: 'Storages', target: 'Tárhelyek' },

    // Sign In
    { source: 'Good morning', target: 'Jó reggelt!' },
    { source: 'Good afternoon', target: 'Jó napot!' },
    { source: 'Good evening', target: 'Jó estét!' },
    { source: 'Sign In', target: 'Bejelentkezés' },
    { source: 'Welcome Back.', target: 'Üdv újra!' },
    { source: 'Sign in with {0}', target: 'Bejelentkezés a következővel: {0}' },
    { source: 'or login with', target: 'vagy jelentkezzen be' },
    { source: 'Enter E-mail', target: 'Írja be az e-mail címet' },
    { source: 'Enter password', target: 'Írja be a jelszót' },
    { source: 'Login', target: 'Belépés' },
    { source: 'Create new account', target: 'Új fiók létrehozása' },
    { source: 'Forgot my password', target: 'Elfelejtettem a jelszavam' },
    { source: 'required', target: 'elvárt' },
    { source: 'incorrect Email', target: 'helytelen e-mail cím' },
    { source: 'Minimum password length {0}', target: 'A jelszó minimális hossza: {0}' },
    { source: 'Unable to Sign In', target: 'Nem lehet bejelentkezni' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'Kezdje el <span class="auth-form__accent">ingyenesen még ma</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target: 'Nem szükséges bankkártya. A 14 napos PRO-próbaidőszak alatt az összes fejlett funkciót ingyen megkapja.'
    },
    { source: 'Enter First Name', target: 'Írja be a keresztnevet' },
    { source: 'Enter Last Name (optional)', target: 'Írja be a vezetéknevet (nem kötelező)' },
    { source: 'Enter Email', target: 'Írja be az e-mail címet' },
    { source: 'Password', target: 'Jelszó' },
    { source: 'Repeat Password', target: 'Jelszó újra' },
    {
      source: 'By signing in you’re okay with our',
      target: 'A bejelentkezéssel elfogadja'
    },
    {
      source: 'Creating an account means you’re okay with our',
      target: 'A fiók létrehozása azt jelenti, hogy elfogadja:'
    },
    { source: 'Terms of Service', target: 'Szolgáltatási feltételek' },
    { source: 'Privacy Policy', target: 'Adatvédelmi irányelvek' },
    { source: 'and', target: 'és' },
    { source: 'Create your free account', target: 'Fiók létrehozása' },
    { source: 'Already have an account', target: 'Már van fiókom' },
    { source: 'Unable to Sign Up', target: 'Nem lehet regisztrálni' },

    // Restore password
    { source: 'Reset your password', target: 'Jelszavam visszaállítása' },
    { source: 'Email Address', target: 'E-mail cím' },
    { source: 'Reset password', target: 'Jelszó visszaállítása' },
    { source: 'Return to Sign In', target: 'Vissza a Bejelentkezéshez' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'Kérjük, ellenőrizze e-mailjét – <strong>{0}</strong> . Elküldtük az érvényesítési linket a jelszó megváltoztatásához szükséges lépésekkel.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be al least 8 characters.',
      target: 'Majdnem kész, csak írja be alább az új jelszavát.<br> Legalább 8 karakterből kell állnia.'
    },
    { source: 'Reset password & Sign In', target: 'Jelszóvisszaállítás és bejelentkezés' },
    { source: 'Unable to Send Code', target: 'A kód elküldése nem sikerült' },
    { source: 'Unable to Change Password', target: 'A jelszóváltoztatás nem sikerült' },

    // Email Verification
    { source: 'Email Verification', target: 'E-mail megerősítés' },
    { source: 'Resend verification code', target: 'Ellenőrző kód újraküldése' },
    { source: 'Verification email sent', target: 'Ellenőrző e-mail elküldve' },
    { source: 'Your Email is now verified', target: 'Az e-mail címe most már ellenőrizve lett' },
    { source: 'Request is incorrect', target: 'A kérés hibás' },

    // Invites
    {
      source: 'Join <span class="auth-form__accent">{0}</span>',
      target: 'Csatlakozzon ide: <span class="auth-form__accent">{0}</span>'
    },
    {
      source: '<strong>{0}</strong> has invited you to join <strong>{1}</strong>',
      target: '<strong>{0}</strong> meghívta Önt a következőhöz: <strong>{1}</strong>'
    },
    {
      source: 'Someone has invited you to join <strong>{0}</strong>',
      target: 'Valaki meghívta Önt, hogy csatlakozzon: <strong>{0}</strong>'
    },
    {
      source: 'You are joining <strong>{0}</strong> using invite link',
      target: 'Ön csatlakozik a következőhöz: <strong>{0}</strong> a meghívólink használatával'
    },
    { source: 'Join', target: 'Csatlakozás' },
    { source: 'Go to home page', target: 'Menjen a kezdőlapra' },
    { source: 'Invite link is wrong', target: 'A meghívólink hibás' },
    {
      source:
        'Looks like your invitation link has expired or maybe you have followed the wrong link. Please try to ask to invite your again.',
      target:
        'Úgy tűnik, hogy meghívó linkje lejárt, vagy lehet, hogy rossz linket követett. Kérjük, próbálkozzon újra a meghívással.'
    },
    {
      source: 'Unfortunately we failed to load information about this invitation',
      target: 'Sajnáljuk, nem sikerült betölteni a meghívás adatait'
    },

    // Users & Teams
    { source: 'Members of {0}', target: 'A(z) {0} tagjai' },
    { source: 'How to get started', target: 'Hogyan kezdje:' },
    { source: 'Users API', target: 'Felhasználók API' },
    { source: 'Teams API', target: 'Teams API' },
    { source: 'Invite Member', target: 'Tag meghívása' },
    { source: 'Add User property', target: 'Felhasználói tulajdonság hozzáadása' },
    { source: 'Add Team property', target: 'Csoporttulajdonság hozzáadása' },
    { source: 'Edit property', target: 'Tulajdonság szerkesztése' },
    { source: 'Delete property', target: 'Tulajdonság törlése' },
    { source: 'Users', target: 'Felhasználók' },
    { source: 'Teams', target: 'Csoportok' },
    { source: 'Search members', target: 'Tagok keresése' },
    { source: 'Search teams', target: 'Csoportok keresése' },
    { source: '{0} pages', target: '{0} oldal' },
    { source: 'No members', target: 'Nincsenek tagok' }
  ]
};

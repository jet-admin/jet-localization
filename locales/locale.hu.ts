import { Locale } from './locale';

export const locale: Locale = {
  name: 'hungarian',
  language: 'hu',
  items: [
    // General
    { source: 'Save', target: 'Megment' },
    { source: 'Create', target: 'Teremt' },
    { source: 'Duplicating', target: 'Másolás' },
    { source: 'Duplicate', target: 'Másolat' },
    { source: 'Mass Edit', target: 'Mass Edit' },
    { source: 'Export', target: 'Export' },
    { source: 'Import', target: 'Importálás' },
    { source: 'Delete', target: 'Töröl' },

    // Fields
    { source: 'optional', target: 'választható' },
    { source: 'Choose', target: 'Választ' },
    { source: 'Clear value', target: 'Tiszta érték' },
    { source: 'loading...', target: 'Betöltés...' },
    { source: 'Nothing found', target: 'Nincs találat' },
    { source: 'Search...', target: 'Keresés...' },
    { source: 'Enter at least {0} characters', target: 'Írjon be legalább {0} karaktert' },

    // List components
    { source: 'Filter', target: 'Szűrő' },
    { source: 'Exclude', target: 'Kizárás' },
    { source: 'Actions', target: 'Akciók' },
    { source: 'Search', target: 'Keresés' },
    { source: 'Refresh automatically', target: 'Automatikus frissítés' },
    { source: 'All', target: 'Összes' },
    { source: 'Selected', target: 'Kiválasztott' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'Sajnos nem található a lekérdezésének megfelelő {0}'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'A(z) {0} lekérése folyamatban van, kérem, várjon...' },
    { source: 'Add filter', target: 'Szűrő hozzáadása' },
    { source: 'Toggle ordering', target: 'Váltsd át a rendelést' },
    { source: 'Loading failed', target: 'A betöltés nem sikerült' },
    { source: 'Not configured', target: 'Nincs beállítva' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'Sajnos ez az összetevő még nincs konfigurálva'
    },
    { source: 'records', target: 'rekordokat' },
    { source: '{0} items', target: '{0} elem' },

    // Menu
    { source: 'Users & Teams', target: 'Felhasználók' },
    { source: 'Billing', target: 'Számlázás' },
    { source: 'Billing & Plans', target: 'Számlázás' },
    { source: 'API keys', target: 'API kulcsok' },
    { source: 'Dark Mode', target: 'Sötét mód' },
    { source: 'Light Mode', target: 'Fény mód' },
    { source: 'Disable Staff', target: 'A személyzet letiltása' },
    { source: 'Enable Staff', target: 'Személyzet engedélyezése' },
    { source: 'Manage Templates', target: 'Sablonok kezelése' },
    { source: 'Logout', target: 'Kijelentkezés' },
    { source: 'Activity Log', target: 'Naplót' },
    { source: 'Collaborations', target: 'Együttműködések' },
    { source: 'Open Visual Builder', target: 'Nyissa meg a Visual Builder alkalmazást' },

    // Filters
    { source: 'equals', target: 'egyenlő' },
    { source: 'contains', target: 'tartalmaz' },
    { source: 'starts with', target: '-vel kezdődik' },
    { source: 'ends with', target: 'végződik' },
    { source: 'greater than', target: 'nagyobb, mint' },
    { source: 'greater than or equals', target: 'nagyobb vagy egyenlő' },
    { source: 'less than', target: 'kevesebb, mint' },
    { source: 'less than or equals', target: 'kisebb vagy egyenlő' },
    { source: 'one of', target: 'az egyik' },
    { source: 'is null', target: 'nulla' },
    { source: 'is future', target: 'a jövő' },
    { source: 'is past', target: 'elmúlt' },
    { source: 'is Today', target: 'ma van' },
    { source: 'is Yesterday', target: 'tegnap van' },
    { source: 'is Last Week', target: 'a múlt hét' },
    { source: 'is Last Month', target: 'az utolsó hónap' },
    { source: 'is Last Quarter', target: 'az utolsó negyed' },
    { source: 'is Last Year', target: 'tavaly van' },
    { source: 'is Last X Days', target: 'az Utolsó X nap' },
    { source: 'is Previous Week', target: 'az előző hét' },
    { source: 'is Previous Month', target: 'az előző hónap' },
    { source: 'is Previous Quarter', target: 'az előző negyedév' },
    { source: 'is Previous Year', target: 'az Előző év' },
    { source: 'is Previous X Days', target: 'az Előző X nap' },

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
    { source: 'Messages', target: 'üzenetek' },
    { source: 'Activity', target: 'Tevékenység' },
    { source: 'Start chatting with your team', target: 'Kezdj el csevegni a csapatoddal' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'Üzenet küldése az aktuális oldalról a fontos információk nyomon követéséhez.'
    },
    { source: 'Your Message', target: 'Az üzeneted' },
    { source: 'Send', target: 'Küld' },

    // Share
    { source: 'Invite members', target: 'Tagok meghívása' },
    { source: 'Public share', target: 'Nyilvános megosztás' },
    { source: 'Sign Up', target: 'Regisztrálj' },
    { source: 'Members', target: 'tagok' },
    { source: 'Invite with Email', target: 'Meghívás e-mailben' },
    { source: 'Invite someone...', target: 'Hívj meg valakit...' },
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
      target: 'A link birtokában bárki csatlakozhat a kiválasztott csapathoz.'
    },
    { source: 'Pending Invites', target: 'Függőben lévő meghívók' },
    { source: 'Cancel invite', target: 'Meghívás visszavonása' },
    { source: 'Active Members', target: 'Aktív tagok' },
    { source: 'Remove member', target: 'Tag eltávolítása' },
    { source: 'You are setting sharing for the current page', target: 'Az aktuális oldal megosztását állítja be' },
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
    { source: 'Choose Team', target: 'Válassza a Csapat lehetőséget' },
    { source: 'App Teams', target: 'App Teams' },
    { source: 'Built-In Teams', target: 'Beépített csapatok' },
    { source: 'Clear Team', target: 'Tiszta csapat' },
    { source: 'Can build application and modify data', target: 'Alkalmazást készíthet és adatokat módosíthat' },
    { source: 'Can modify data in application', target: 'Módosíthatja az adatokat az alkalmazásban' },
    { source: 'Can only view data without modification', target: 'Csak az adatok megtekintése módosítás nélkül' },
    { source: 'Add Team', target: 'Csapat hozzáadása' },
    { source: 'Edit Team', target: 'Csapat szerkesztése' },
    { source: 'Adding Team', target: 'Csapat hozzáadása' },
    {
      source: 'Keep control over who has access to current App',
      target: 'Tartsa kézben, hogy ki férhet hozzá az aktuális alkalmazáshoz'
    },
    { source: 'Enter Team Name', target: 'Írja be a csapat nevét' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'Írja be a csapat nevét, azaz: Támogatás, Értékesítés, Marketing stb.'
    },
    { source: 'Add a new member to this team.', target: 'Új tag hozzáadása ehhez a csapathoz.' },
    { source: 'Invite new member', target: 'Új tag meghívása' },
    { source: 'User', target: 'Felhasználó' },
    { source: 'Date Added', target: 'dátum hozzáadva' },
    { source: 'You', target: 'Ön' },
    { source: 'Edit', target: 'Szerkesztés' },
    { source: 'No users in this team', target: 'Nincsenek felhasználók ebben a csapatban' },
    { source: 'Page Permissions', target: 'Oldalengedélyek' },
    { source: 'App Permissions', target: 'Alkalmazásengedélyek' },
    { source: 'Properties', target: 'Tulajdonságok' },
    { source: 'Page name', target: 'Az oldal neve' },
    { source: 'Access', target: 'Hozzáférés' },
    { source: 'Full Access', target: 'Teljes hozzáférés' },
    { source: 'Read Only', target: 'Csak olvasható' },
    { source: 'No Access', target: 'Nincs hozzáférés' },
    { source: 'Read', target: 'Olvas' },
    { source: 'Update', target: 'Frissítés' },
    { source: 'Write', target: 'Ír' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'Töröl' },
    { source: 'Custom Access', target: 'Egyéni hozzáférés' },
    { source: 'Read, create, update and delete data', target: 'Adatok olvasása, létrehozása, frissítése és törlése' },
    { source: 'Choose allowed operations granularly', target: 'Válassza ki az engedélyezett műveleteket részletesen' },
    { source: 'Without any access to data', target: 'Adatokhoz való hozzáférés nélkül' },
    { source: 'Name', target: 'Név' },
    { source: 'Active', target: 'Aktív' },
    { source: 'Settings', target: 'Beállítások' },
    { source: 'Members and Teams', target: 'Tagok és csapatok' },
    { source: 'App Builder', target: 'App Builder' },
    { source: 'Collection Permissions', target: 'Gyűjtemény engedélyei' },
    { source: "Grant permissions to app's collection", target: 'Engedélyek megadása az alkalmazás gyűjteményéhez' },
    { source: 'Collection', target: 'Gyűjtemény' },
    {
      source: 'Limit access to your data by team properties',
      target: 'Korlátozza az adatokhoz való hozzáférést a csapat tulajdonságai szerint'
    },
    { source: 'Cancel', target: 'Megszünteti' },
    { source: 'Save Team', target: 'Csapat mentése' },
    { source: 'Create Team', target: 'Csapat létrehozása' },
    { source: 'Value', target: 'Érték' },
    { source: 'No properties specified', target: 'Nincsenek megadva tulajdonságok' },

    // Navigation
    { source: 'Current App', target: 'Jelenlegi alkalmazás' },
    { source: 'Home', target: 'itthon' },

    // Profile
    { source: 'Loading', target: 'Betöltés' },
    {
      source: 'We are fetching user data, please, wait...',
      target: 'Felhasználói adatok beolvasása folyamatban van, kérem, várjon...'
    },
    { source: 'Back', target: 'Vissza' },
    { source: 'Profile Settings', target: 'Profilbeállítások' },
    { source: 'Basic information about your account.', target: 'Alapvető információk a fiókjáról.' },
    { source: 'Photo', target: 'Fénykép' },
    { source: 'your photo', target: 'a te képed' },
    { source: 'Change', target: 'változás' },
    { source: 'Upload', target: 'Feltöltés' },
    { source: 'First Name', target: 'Keresztnév' },
    { source: 'Last Name', target: 'Vezetéknév' },
    { source: 'Your Email', target: 'Az email címed' },
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
    { source: 'Personal Preferences', target: 'Személyes preferenciák' },
    { source: 'Language', target: 'Nyelv' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'Személyre szabhatja fiókja további beállításait.'
    },
    { source: 'News & Proposals', target: 'hírek' },
    { source: 'Subscribe to our updates and proposals.', target: 'Iratkozzon fel frissítéseinkre és ajánlatainkra.' },
    { source: 'Save changes', target: 'Változtatások mentése' },

    // My Apps
    { source: 'Type to search...', target: 'Gépeljen a kereséshez...' },
    { source: 'My Apps', target: 'Alkalmazásaim' },
    { source: 'New App', target: 'Új alkalmazás' },
    { source: 'Builder', target: 'Építész' },
    { source: 'App', target: 'App' },
    { source: 'continue install', target: 'folytassa a telepítést' },
    { source: 'Open builder', target: 'Nyissa meg az építőt' },
    { source: 'View published', target: 'Megtekintés közzétéve' },
    { source: 'Delete App', target: 'Alkalmazás törlése' },
    { source: 'Start from a template', target: 'Kezdje sablonból' },
    { source: 'Preview', target: 'Előnézet' },
    { source: 'Contact Support', target: 'Lépjen kapcsolatba az ügyfélszolgálattal' },
    { source: 'Documentation', target: 'Dokumentáció' },
    { source: 'Feature Requests', target: 'Funkciókérés' },
    { source: 'See What’s New', target: 'Tekintse meg az Újdonságokat' },
    { source: 'Search templates...', target: 'Keresési sablonok...' },
    { source: 'any', target: 'Bármi' },
    { source: 'more', target: 'több' },
    { source: 'Choose Data Source', target: 'Válassza az Adatforrás lehetőséget' },
    { source: 'works with 30+ data sources', target: '30 adatforrással működik' },
    { source: 'Use this template', target: 'Használja ezt a sablont' },
    { source: 'stores data in Jet Tables', target: 'Jet Tables-ben tárolja az adatokat' },
    { source: 'New Data', target: 'Új adatok' },
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
        'Hozzon létre egyéni adminisztrációs panelt bármilyen adatbázis, alkalmazás és API, például a Stripe, Twilio és GraphQL alapján.'
    },
    { source: 'All Integrations', target: 'Minden integráció' },
    { source: 'Databases', target: 'Adatbázisok' },
    { source: 'APIs', target: 'API-k' },
    { source: 'Frameworks', target: 'Keretrendszerek' },
    { source: 'Storages', target: 'Tárolók' },

    // Sign In
    { source: 'Please wait...', target: 'Kérlek várj...' },
    { source: 'Good morning', target: 'Jó reggelt kívánok' },
    { source: 'Good afternoon', target: 'Jó napot' },
    { source: 'Good evening', target: 'Jó estét' },
    { source: 'Sign In', target: 'Bejelentkezés' },
    { source: 'Welcome Back.', target: 'Üdv újra.' },
    { source: 'Sign in with {0}', target: 'Bejelentkezés a következővel: {0}' },
    { source: 'or login with', target: 'vagy jelentkezzen be' },
    { source: 'Enter E-mail', target: 'Írja be az E-mail címet' },
    { source: 'Enter password', target: 'Írd be a jelszót' },
    { source: 'Login', target: 'Belépés' },
    { source: 'Create new account', target: 'Új fiók létrehozása' },
    { source: 'Forgot my password', target: 'Elfelejtettem a jelszavam' },
    { source: 'required', target: 'kívánt' },
    { source: 'incorrect Email', target: 'helytelen e-mail' },
    { source: 'Minimum password length {0}', target: 'A jelszó minimális hossza: {0}' },
    { source: 'Unable to Sign In', target: 'Képtelen bejelentkezni' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'Kezdje el <span class="auth-form__accent">ingyenesen még ma</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target: 'Nem szükséges kártya. A 14 napos PRO-próbaidőszak alatt az összes fejlett funkciót ingyen megkapja.'
    },
    { source: 'or', target: 'vagy' },
    { source: 'Enter First Name', target: 'Írja be a keresztnevet' },
    { source: 'Enter Last Name (optional)', target: 'Írja be a vezetéknevet (nem kötelező)' },
    { source: 'Enter Email', target: 'Írja be az e-mail címet' },
    { source: 'Password', target: 'Jelszó' },
    { source: 'Repeat Password', target: 'Jelszó újra' },
    {
      source: 'Creating an account means you’re okay with our',
      target: 'A fiók létrehozása azt jelenti, hogy minden rendben van velünk'
    },
    { source: 'Terms of Service', target: 'Szolgáltatási feltételek' },
    { source: 'Privacy Policy', target: 'Adatvédelmi irányelvek' },
    { source: 'and', target: 'és' },
    { source: 'Create your free account', target: 'Készítsd el az ingyenes fiókodat' },
    { source: 'Already have an account', target: 'Már van fiókja' },
    { source: 'Unable to Sign Up', target: 'Nem lehet regisztrálni' },

    // Restore password
    { source: 'Reset your password', target: 'Állítsd vissza a jelszavad' },
    { source: 'Email Address', target: 'Email cím' },
    { source: 'Reset password', target: 'Jelszó visszaállítása' },
    { source: 'Return to Sign In', target: 'Vissza a Bejelentkezéshez' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'Kérjük, ellenőrizze e-mailjét – <strong>{0}</strong> . Elküldtük az érvényesítési linket, amelyet a jelszó megváltoztatásához kell követnie.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be al least 8 characters.',
      target: 'Majdnem kész, csak írja be alább az új jelszavát.<br> Legalább 8 karakterből kell állnia.'
    },
    { source: 'Reset password & Sign In', target: 'Jelszó visszaállítása' },
    { source: 'Unable to Send Code', target: 'Nem lehet kódot küldeni' },
    { source: 'Unable to Change Password', target: 'Nem lehet jelszót módosítani' },

    // Users & Teams
    { source: 'Members of {0}', target: 'A(z) {0} tagjai' },
    { source: 'How to get started', target: 'Hogy kezdjed' },
    { source: 'Users API', target: 'Felhasználók API' },
    { source: 'Teams API', target: 'Teams API' },
    { source: 'Invite Member', target: 'Tag meghívása' },
    { source: 'Add User property', target: 'Felhasználói tulajdonság hozzáadása' },
    { source: 'Add Team property', target: 'Csapattulajdon hozzáadása' },
    { source: 'Add', target: 'Hozzáadás' },
    { source: 'Edit property', target: 'Tulajdonság szerkesztése' },
    { source: 'Delete property', target: 'Tulajdonság törlése' },
    { source: 'Users', target: 'Felhasználók' },
    { source: 'Teams', target: 'Csapatok' },
    { source: 'Search members', target: 'Tagok keresése' },
    { source: 'Search teams', target: 'Csapatok keresése' },
    { source: '{0} pages', target: '{0} oldal' },
    { source: 'No members', target: 'Nincsenek tagok' }
  ]
};

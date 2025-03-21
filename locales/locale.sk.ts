import { Locale } from './locale';

export const locale: Locale = {
  name: 'slovak',
  language: 'sk',
  items: [
    // General
    { source: 'Save', target: 'Uložiť' },
    { source: 'Create', target: 'Vytvoriť' },
    { source: 'Duplicating', target: 'Duplikovanie' },
    { source: 'Duplicate', target: 'Duplikát' },
    { source: 'Mass Edit', target: 'Hromadná úprava' },
    { source: 'Export', target: 'Export' },
    { source: 'Import', target: 'Import' },
    { source: 'Delete', target: 'Odstrániť' },
    { source: 'Continue', target: 'Pokračovať' },
    { source: 'Submit', target: 'Odoslať' },
    { source: 'Cancel', target: 'Zrušiť' },
    { source: 'Loading', target: 'Načítavanie' },
    { source: 'Please wait...', target: 'Prosím čakajte...' },
    { source: 'Loading failed', target: 'Načítavanie zlyhalo' },
    { source: 'Unknown error', target: 'Neznáma chyba' },
    { source: 'Add', target: 'Pridať' },
    { source: 'or', target: 'alebo' },
    { source: 'Hours', target: 'Hodiny' },
    { source: 'Minutes', target: 'Minúty' },
    { source: 'Seconds', target: 'Sekundy' },
    { source: 'Saved', target: 'Uložené' },
    { source: 'Error', target: 'Chyba' },
    { source: 'Page not found', target: 'Stránka nenájdená' },
    {
      source: 'The specified address is incorrect, or the page does not exist',
      target: 'Zadaná adresa je nesprávna alebo stránka neexistuje'
    },
    { source: 'Not allowed', target: 'Nepovolené' },
    {
      source: "You don't have permissions to access this page",
      target: 'Nemáte povolenia na prístup na túto stránku'
    },
    { source: 'Are you sure want to close?', target: 'Ste si istý, že chcete zavrieť?' },
    { source: 'Close', target: 'Zavrieť' },

    // Actions
    { source: 'Action executed', target: 'Akcia vykonaná' },
    { source: 'Action executed successfully', target: 'Akcia bola úspešne vykonaná' },
    { source: 'Action failed', target: 'Akcia zlyhala' },
    {
      source: "You don't have permission for run this operation",
      target: 'Nemáte povolenie na spustenie tejto operácie'
    },
    { source: 'Specify parameters', target: 'Zadajte parametre' },
    { source: 'Executing action', target: 'Vykonanie akcie' },
    { source: 'You are executing <strong>{0}</strong>', target: 'Vykonávate <strong>{0}</strong>' },
    { source: 'Please fill in the parameters below.', target: 'Vyplňte nasledujúce parametre.' },
    { source: 'Execute', target: 'Spustiť' },
    { source: 'Executing', target: 'Vykonávanie' },
    { source: 'Finished', target: 'Dokončené' },
    { source: 'Done', target: 'Hotovo' },

    // Export
    { source: 'Records Export', target: 'Export záznamov' },
    { source: 'Downloading records data as a file', target: 'Sťahovanie dát záznamov ako súboru' },
    { source: 'Choose format', target: 'Vyberte formát' },
    { source: 'Number of exporting records', target: 'Počet exportovaných záznamov' },
    { source: { label: 'Export', context: 'submit' }, target: 'Exportovať' },
    { source: 'Exporting', target: 'Exportovanie' },
    { source: 'Export completed', target: 'Export dokončený' },
    { source: 'Failed to export', target: 'Export zlyhal' },

    // Components
    { source: 'optional', target: 'voliteľné' },
    { source: 'choose', target: 'vybrať' },
    { source: 'Clear value', target: 'Vyčistiť' },
    { source: 'loading...', target: 'načítavanie...' },
    { source: 'Nothing found', target: 'Nenašlo sa nič' },
    { source: 'Search...', target: 'Hľadať...' },
    { source: 'Enter at least {0} characters', target: 'Zadajte minimálne {0} znakov' },
    { source: 'No options', target: 'Žiadne možnosti' },
    { source: 'Drop files here or', target: 'Pretiahnite sem súbory alebo' },
    { source: 'Upload new', target: 'Nahrať nové' },
    { source: 'Clear', target: 'Vyčistiť' },
    { source: 'Download', target: 'Stiahnuť' },
    { source: 'Choose file', target: 'Vybrať súbor' },
    { source: 'Choose files', target: 'Vybrať súbory' },
    { source: 'Scan with Camera', target: 'Skenovať kamerou' },
    { source: 'Scan Image file', target: 'Skenovať obrázok' },
    { source: 'Choose camera', target: 'Vybrať kameru' },
    { source: 'Stop scanning', target: 'Zastaviť skenovanie' },
    { source: 'Scan again', target: 'Skenovať znova' },
    { source: 'Use this scan', target: 'Použiť tento sken' },
    { source: 'Failed to scan', target: 'Skenovanie zlyhalo' },
    {
      source: 'Code failed to scan, please try another image',
      target: 'Nepodarilo sa naskenovať kód, vyskúšajte iný obrázok'
    },
    { source: 'current', target: 'aktuálna' },
    { source: 'Day', target: 'Deň' },
    { source: 'Week', target: 'Týždeň' },
    { source: 'Month', target: 'Mesiac' },
    { source: 'Year', target: 'Rok' },
    { source: 'Today', target: 'Dnes' },
    { source: 'Daily', target: 'Denne' },
    { source: 'Weekly', target: 'Týždenne' },
    { source: 'Monthly', target: 'Mesačne' },
    { source: 'Quarterly', target: 'Štvrťročne' },
    { source: 'Yearly', target: 'Ročne' },
    { source: 'Hourly', target: 'Hodinové' },
    { source: 'Minutely', target: 'Minútové' },
    { source: 'Since', target: 'Od' },
    { source: 'Before', target: 'Pred' },
    { source: 'Between', target: 'Medzi' },
    { source: 'From date', target: 'Od dátumu' },
    { source: 'To date', target: 'Do dátumu' },
    { source: 'Coordinates', target: 'Súradnice' },
    { source: 'Latitude', target: 'Zemepisná šírka' },
    { source: 'Longitude', target: 'Zemepisná dĺžka' },
    { source: 'Default color', target: 'Predvolená farba' },
    { source: 'not specified', target: 'nešpecifikované' },
    { source: 'Sign using your finger or pointer', target: 'Podpíšte sa prstom alebo perom' },

    // List components
    { source: 'Filter', target: 'Filter' },
    { source: 'Filter by field', target: 'Filter podľa poľa' },
    { source: 'Filter by...', target: 'Filter podľa...' },
    { source: 'Back', target: 'Naspäť' },
    { source: 'Back to {0} fields', target: 'Naspäť k {0} poliam' },
    { source: 'Choose {0} from list', target: 'Vyberte {0} zo zoznamu' },
    { source: '{0} fields', target: '{0} polí' },
    { source: '{0} relationships', target: '{0} vzťahov' },
    { source: 'Aggregate {0}', target: 'Agregovať {0}' },
    { source: 'No fields to select', target: 'Žiadne polia na výber' },
    { source: 'Enter value...', target: 'Zadajte hodnotu...' },
    { source: 'Exclude', target: 'Vylúčiť' },
    { source: 'Actions', target: 'Akcie' },
    { source: 'Search', target: 'Hľadať' },
    { source: 'Sort 1 → 9', target: 'Zoradiť 1 → 9' },
    { source: 'Sort 9 → 1', target: 'Zoradiť 9 → 1' },
    { source: 'Sort A → Z', target: 'Zoradiť A → Z' },
    { source: 'Sort Z → A', target: 'Zoradiť Z → A' },
    { source: 'Refresh automatically', target: 'Automaticky obnovovať' },
    { source: 'All', target: 'Všetko' },
    { source: 'Selected', target: 'Vybrané' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'Nenašiel sa žiadny {0} zodpovedajúci vášmu dotazu'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'Prebieha načítavanie {0}, prosím čakajte...' },
    { source: 'Add filter', target: 'Pridať filter' },
    { source: 'Delete this filter', target: 'Odstrániť tento filter' },
    { source: 'Toggle ordering', target: 'Prepnúť zoradenie' },
    { source: 'Not configured', target: 'Nenastavené' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'Bohužiaľ, táto súčasť ešte nie je nakonfigurovaná'
    },
    { source: 'records', target: 'záznamov' },
    { source: '{0} items', target: '{0} položiek' },

    // Menu
    { source: 'Users & Teams', target: 'Používatelia a tímy' },
    { source: 'Billing', target: 'Fakturácia' },
    { source: 'Billing & Plans', target: 'Fakturácia a plány' },
    { source: 'API keys', target: 'API kľúče' },
    { source: 'Dark Mode', target: 'Tmavý režim' },
    { source: 'Light Mode', target: 'Svetlý režim' },
    { source: 'Disable Staff', target: 'Deaktivovať zamestnancov' },
    { source: 'Enable Staff', target: 'Aktivovať zamestnancov' },
    { source: 'Manage Templates', target: 'Spravovať šablóny' },
    { source: 'Logout', target: 'Odhlásiť sa' },
    { source: 'Activity Log', target: 'Záznam aktivít' },
    { source: 'Collaborations', target: 'Kooperácie' },
    { source: 'Open Visual Builder', target: 'Otvoriť vizuálny editor' },

    // Filters
    { source: 'equals', target: 'rovná sa' },
    { source: 'does not equal', target: 'nerovná sa' },
    { source: '{0} equals {1}', target: '{0} sa rovná {1}' },
    { source: '{0} does not equal {1}', target: '{0} sa nerovná {1}' },

    { source: 'contains', target: 'obsahuje' },
    { source: 'does not contain', target: 'neobsahuje' },
    { source: '{0} contains {1}', target: '{0} obsahuje {1}' },
    { source: '{0} not contains {1}', target: '{0} neobsahuje {1}' },

    { source: 'starts with', target: 'začína na' },
    { source: 'does not start with', target: 'nezačína na' },
    { source: '{0} starts with {1}', target: '{0} začína na {1}' },
    { source: '{0} does not start with {1}', target: '{0} nezačína na {1}' },

    { source: 'ends with', target: 'končí na' },
    { source: 'does not end with', target: 'nekončí na' },
    { source: '{0} ends with {1}', target: '{0} končí na {1}' },
    { source: '{0} does not end with {1}', target: '{0} nekončí na {1}' },

    { source: 'greater than', target: 'väčší ako' },
    { source: 'is not greater than', target: 'nie je väčší ako' },
    { source: '{0} is greater than {1}', target: '{0} je väčší ako {1}' },
    { source: '{0} not greater than {1}', target: '{0} nie je väčší ako {1}' },

    { source: 'greater than or equals', target: 'väčší alebo rovný' },
    { source: 'is not greater than or equals', target: 'nie je väčší alebo rovný' },
    { source: '{0} is greater than or equals {1}', target: '{0} je väčší alebo rovný {1}' },
    { source: '{0} is not greater than or equals {1}', target: '{0} nie je väčší alebo rovný {1}' },

    { source: 'less than', target: 'menší ako' },
    { source: 'is not less than', target: 'nie je menší ako' },
    { source: '{0} is less than {1}', target: '{0} je menší ako {1}' },
    { source: '{0} is not less than {1}', target: '{0} nie je menší ako {1}' },

    { source: 'less than or equals', target: 'menší alebo rovný' },
    { source: 'is not less than or equals', target: 'nie je menší alebo rovný' },
    { source: '{0} is less than or equals {1}', target: '{0} je menší alebo rovný {1}' },
    { source: '{0} is not less than or equals {1}', target: '{0} nie je menší alebo rovný {1}' },

    { source: 'one of', target: 'jedna z' },
    { source: 'is one of', target: 'je jedna z' },
    { source: 'is not one of', target: 'nie je jednou z' },
    { source: '{0} is one of {1}', target: '{0} je jedna z {1}' },
    { source: '{0} is not one of {1}', target: '{0} nie je jednou z {1}' },

    { source: 'is null', target: 'je null' },
    { source: 'is not null', target: 'nie je null' },
    { source: '{0} is null', target: '{0} je null' },
    { source: '{0} is not null', target: '{0} nie je null' },

    { source: 'is future', target: 'je v budúcnosti' },
    { source: 'in the future', target: 'v budúcnosti' },
    { source: 'is not in the future', target: 'nie je v budúcnosti' },
    { source: '{0} is in the future', target: '{0} je v budúcnosti' },
    { source: '{0} is not in the future', target: '{0} nie je v budúcnosti' },

    { source: 'is past', target: 'je v minulosti' },
    { source: 'in the past', target: 'v minulosti' },
    { source: 'is not in the past', target: 'nie je v minulosti' },
    { source: '{0} is in the past', target: '{0} je v minulosti' },
    { source: '{0} is not in the past', target: '{0} nie je v minulosti' },

    { source: 'is Today', target: 'je dnes' },
    { source: 'today', target: 'dnes' },
    { source: 'is not today', target: 'nie je dnes' },
    { source: '{0} is today', target: '{0} je dnes' },
    { source: '{0} is not today', target: '{0} nie je dnes' },

    { source: 'is Yesterday', target: 'bol včera' },
    { source: 'yesterday', target: 'včera' },
    { source: 'is not yesterday', target: 'nebol včera' },
    { source: '{0} is yesterday', target: '{0} bol včera' },
    { source: '{0} is not yesterday', target: '{0} nebol včera' },

    { source: 'is Last Week', target: 'bol minulý týždeň' },
    { source: 'last week', target: 'minulý týždeň' },
    { source: 'is not last week', target: 'nebol minulý týždeň' },
    { source: '{0} is last week', target: '{0} bol minulý týždeň' },
    { source: '{0} is not last week', target: '{0} nebol minulý týždeň' },

    { source: 'is Last Month', target: 'bol minulý mesiac' },
    { source: 'last month', target: 'minulý mesiac' },
    { source: 'is not last month', target: 'nebol minulý mesiac' },
    { source: '{0} is last month', target: '{0} bol minulý mesiac' },
    { source: '{0} is not last month', target: '{0} nebol minulý mesiac' },

    { source: 'is Last Quarter', target: 'bol posledný štvrtok' },
    { source: 'last quarter', target: 'posledný štvrtok' },
    { source: 'is not last quarter', target: 'nebol posledný štvrtok' },
    { source: '{0} is last quarter', target: '{0} bol posledný štvrtok' },
    { source: '{0} is not last quarter', target: '{0} nebol posledný štvrtok' },

    { source: 'is Last Year', target: 'bol minulý rok' },
    { source: 'last year', target: 'minulý rok' },
    { source: 'is not last year', target: 'nebol minulý rok' },
    { source: '{0} is last year', target: '{0} bol minulý rok' },
    { source: '{0} is not last year', target: '{0} nebol minulý rok' },

    { source: 'is Last X Days', target: 'bol posledné X dní' },
    { source: 'last X days', target: 'posledné X dní' },
    { source: 'is not last X days', target: 'nebol posledné X dní' },
    { source: '{0} is last {1} days', target: '{0} bol posledné {1} dní' },
    { source: '{0} is not last {1} days', target: '{0} nebol posledné {1} dní' },

    { source: 'is Current Week', target: 'je tento týždeň' },
    { source: 'current week', target: 'tento týždeň' },
    { source: 'is not current week', target: 'nie je tento týždeň' },
    { source: '{0} is current week', target: '{0} je tento týždeň' },
    { source: '{0} is not current week', target: '{0} nie je tento týždeň' },

    { source: 'is Current Month', target: 'je tento mesiac' },
    { source: 'current month', target: 'tento mesiac' },
    { source: 'is not current month', target: 'nie je tento mesiac' },
    { source: '{0} is current month', target: '{0} je tento mesiac' },
    { source: '{0} is not current month', target: '{0} nie je tento mesiac' },

    { source: 'is Current Quarter', target: 'je tento štvrtok' },
    { source: 'current quarter', target: 'tento štvrtok' },
    { source: 'is not current quarter', target: 'nie je tento štvrtok' },
    { source: '{0} is current quarter', target: '{0} je tento štvrtok' },
    { source: '{0} is not current quarter', target: '{0} nie je tento štvrtok' },

    { source: 'is Current Year', target: 'je tento rok' },
    { source: 'current year', target: 'tento rok' },
    { source: 'is not current year', target: 'nie je tento rok' },
    { source: '{0} is current year', target: '{0} je tento rok' },
    { source: '{0} is not current year', target: '{0} nie je tento rok' },

    { source: 'is Previous Week', target: 'bol predchádzajúci týždeň' },
    { source: 'previous week', target: 'predchádzajúci týždeň' },
    { source: 'is not previous week', target: 'nebol predchádzajúci týždeň' },
    { source: '{0} is previous week', target: '{0} bol predchádzajúci týždeň' },
    { source: '{0} is not previous week', target: '{0} nebol predchádzajúci týždeň' },

    { source: 'is Previous Month', target: 'bol predchádzajúci mesiac' },
    { source: 'previous month', target: 'predchádzajúci mesiac' },
    { source: 'is not previous month', target: 'nebol predchádzajúci mesiac' },
    { source: '{0} is previous month', target: '{0} bol predchádzajúci mesiac' },
    { source: '{0} is not previous month', target: '{0} nebol predchádzajúci mesiac' },

    { source: 'is Previous Quarter', target: 'bol predchádzajúci štvrtok' },
    { source: 'previous quarter', target: 'predchádzajúci štvrtok' },
    { source: 'is not previous quarter', target: 'nebol predchádzajúci štvrtok' },
    { source: '{0} is previous quarter', target: '{0} bol predchádzajúci štvrtok' },
    { source: '{0} is not previous quarter', target: '{0} nebol predchádzajúci štvrtok' },

    { source: 'is Previous Year', target: 'bol predchádzajúci rok' },
    { source: 'previous year', target: 'predchádzajúci rok' },
    { source: 'is not previous year', target: 'nebol predchádzajúci rok' },
    { source: '{0} is previous year', target: '{0} bol predchádzajúci rok' },
    { source: '{0} is not previous year', target: '{0} nebol predchádzajúci rok' },

    { source: 'is Previous X Days', target: 'bol predchádzajúcich X dní' },
    { source: 'previous X days', target: 'predchádzajúcich X dní' },
    { source: 'is not previous X days', target: 'nebol predchádzajúcich X dní' },
    { source: '{0} is previous {1} days', target: '{0} bol predchádzajúcich {1} dní' },
    { source: '{0} is not previous {1} days', target: '{0} nebol predchádzajúcich {1} dní' },

    { source: 'is empty', target: 'je prázdny' },
    { source: 'is not empty', target: 'nie je prázdny' },
    { source: '{0} is empty', target: '{0} je prázdny' },
    { source: '{0} is not empty', target: '{0} nie je prázdny' },

    { source: 'covered by', target: 'pokrytý' },
    { source: 'is not covered by', target: 'nie je pokrytý' },
    { source: '{0} covered by {1}', target: '{0} pokrytý {1}' },
    { source: '{0} is not covered by {1}', target: '{0} nie je pokrytý {1}' },

    // Activity log
    { source: 'No activities found', target: 'Nenašli sa žiadne aktivity' },
    {
      source: 'Start to working with data to log activities.',
      target: 'Spustite prácu s dátami na zaznamenávanie aktivít.'
    },
    { source: 'All Activity', target: 'Všetka aktivita' },
    { source: 'Create Record', target: 'Vytvoriť záznam' },
    { source: 'Update Record', target: 'Aktualizovať záznam' },
    { source: 'Delete Record', target: 'Vymazať záznam' },
    { source: 'All Members', target: 'Všetci členovia' },

    // Collaboration
    { source: 'Timeline', target: 'Časová os' },
    { source: 'Messages', target: 'Správy' },
    { source: 'Activity', target: 'Aktivita' },
    { source: 'Start chatting with your team', target: 'Začnite chatovať s vaším tímom' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'Napíšte správu o aktuálnej stránke, aby ste mali prehľad o dôležitých informáciách.'
    },
    { source: 'Your Message', target: 'Vaša správa' },
    { source: 'Send', target: 'Odoslať' },

    // Share
    { source: 'Invite members', target: 'Pozvať členov' },
    { source: 'Public share', target: 'Zdieľať verejne' },
    { source: 'Sign Up', target: 'Prihlásiť sa' },
    { source: 'Members', target: 'Členovia' },
    { source: 'Invite with Email', target: 'Pozvať cez email' },
    { source: 'Invite someone...', target: 'Pozvať niekoho...' },
    { source: 'Send Invite', target: 'Odoslať pozvanie' },
    {
      source: 'Limit access to your data by user properties',
      target: 'Obmedzte prístup k vašim dátam podľa vlastností používateľov'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: 'Zadajte email používateľa, ktorého chcete pozvať na spoluprácu.'
    },
    { source: 'Copy', target: 'Kopírovať' },
    { source: 'Invite with Link', target: 'Pozvať s odkazom' },
    { source: 'Remove link', target: 'Odstrániť odkaz' },
    { source: 'Add Invite Link', target: 'Pridať pozývací odkaz' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'Každý na internete s týmto odkazom sa môže pripojiť k vybranému tímu.'
    },
    { source: 'Pending Invites', target: 'Čakajúce pozvánky' },
    { source: 'Cancel invite', target: 'Zrušiť pozvanie' },
    { source: 'Active Members', target: 'Aktívni členovia' },
    { source: 'Remove member', target: 'Odstrániť člena' },
    { source: 'You are setting sharing for the current page', target: 'Nastavujete zdieľanie pre aktuálnu stránku' },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'Nastavujete zdieľanie pre všetky stránky aplikácie.'
    },
    { source: 'Public access link', target: 'Verejný prístupový odkaz' },
    { source: 'Updating public access...', target: 'Aktualizácia verejného prístupu...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'Každý s týmto odkazom bude môcť zobraziť aktuálnu stránku. Týmto spôsobom môžete tiež vložiť aktuálnu stránku do inej webstránky.'
    },
    { source: 'Embed code (IFRAME)', target: 'Vložiť kód (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: 'Vložte tento kód do HTML kódu vašej webstránky, kde chcete aby sa aktuálna stránka zobrazila.'
    },
    { source: 'link', target: 'odkaz' },
    { source: 'invited', target: 'pozvaný' },
    { source: 'Choose Team', target: 'Vybrať tím' },
    { source: 'App Teams', target: 'Tímy aplikácie' },
    { source: 'Built-In Teams', target: 'Vstavané tímy' },
    { source: 'Clear Team', target: 'Vymazať tím' },
    { source: 'Can build application and modify data', target: 'Môže vytvárať aplikáciu a upravovať dáta' },
    { source: 'Can modify data in application', target: 'Môže upravovať dáta v aplikácii' },
    { source: 'Can only view data without modification', target: 'Môže len zobraziť dáta bez úprav' },
    { source: 'Add Team', target: 'Pridať tím' },
    { source: 'Edit Team', target: 'Upraviť tím' },
    { source: 'Adding Team', target: 'Pridávanie tímu' },
    {
      source: 'Keep control over who has access to current App',
      target: 'Majte kontrolu nad tým, kto má prístup k aktuálnej aplikácii'
    },
    { source: 'Enter Team Name', target: 'Zadajte názov tímu' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'Zadajte názov tímu, napr.: Podpora, Predaj, Marketing, atď.'
    },
    { source: 'Add a new member to this team.', target: 'Pridať nového člena do tohto tímu.' },
    { source: 'Invite new member', target: 'Pozvať nového člena' },
    { source: 'User', target: 'Používateľ' },
    { source: 'Date Added', target: 'Dátum pridania' },
    { source: 'You', target: 'Vy' },
    { source: 'Edit', target: 'Upraviť' },
    { source: 'No users in this team', target: 'V tomto tíme nie sú žiadni používatelia' },
    { source: 'Page Permissions', target: 'Oprávnenia stránky' },
    { source: 'App Permissions', target: 'Oprávnenia aplikácie' },
    { source: 'Properties', target: 'Vlastnosti' },
    { source: 'Page name', target: 'Názov stránky' },
    { source: 'Access', target: 'Prístup' },
    { source: 'Full Access', target: 'Plný prístup' },
    { source: 'Read Only', target: 'Len na čítanie' },
    { source: 'No Access', target: 'Žiadny prístup' },
    { source: 'Read', target: 'Čítať' },
    { source: 'Update', target: 'Aktualizovať' },
    { source: 'Write', target: 'Zapísať' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'Vymazať' },
    { source: 'Custom Access', target: 'Vlastný prístup' },
    { source: 'Read, create, update and delete data', target: 'Čítať, vytvárať, aktualizovať a mazať dáta' },
    { source: 'Choose allowed operations granularly', target: 'Vyberte povolené operácie detailne' },
    { source: 'Without any access to data', target: 'Bez akéhokoľvek prístupu k dátam' },
    { source: 'Name', target: 'Meno' },
    { source: 'Active', target: 'Aktívny' },
    { source: 'Settings', target: 'Nastavenia' },
    { source: 'Members and Teams', target: 'Členovia a tímy' },
    { source: 'App Builder', target: 'Tvorca aplikácie' },
    { source: 'Collection Permissions', target: 'Oprávnenia kolekcie' },
    { source: "Grant permissions to app's collection", target: 'Udeľte oprávnenia kolekcii aplikácie' },
    { source: 'Collection', target: 'Kolekcia' },
    {
      source: 'Limit access to your data by team properties',
      target: 'Obmedzte prístup k vašim dátam podľa vlastností tímu'
    },
    { source: 'Save Team', target: 'Uložiť tím' },
    { source: 'Create Team', target: 'Vytvoriť tím' },
    { source: 'Value', target: 'Hodnota' },
    { source: 'No properties specified', target: 'Nie sú špecifikované žiadne vlastnosti' },

    // Navigation
    { source: 'Current App', target: 'Aktuálna aplikácia' },
    { source: 'Home', target: 'Domov' },

    // Profile
    {
      source: 'We are fetching user data, please, wait...',
      target: 'Načítavame údaje používateľa, prosím čakajte...'
    },
    { source: 'Profile Settings', target: 'Nastavenia profilu' },
    { source: 'Basic information about your account.', target: 'Základné informácie o vašom účte.' },
    { source: 'Photo', target: 'Fotka' },
    { source: 'your photo', target: 'vaša fotka' },
    { source: 'Change', target: 'Zmeniť' },
    { source: 'Upload', target: 'Nahrať' },
    { source: 'Photo was successfully updated', target: 'Fotka bola úspešne aktualizovaná' },
    { source: 'Photo was successfully deleted', target: 'Fotka bola úspešne odstránená' },
    { source: 'First Name', target: 'Krstné meno' },
    { source: 'Last Name', target: 'Priezvisko' },
    { source: 'Your Email', target: 'Váš email' },
    { source: 'Email Change', target: 'Zmena emailu' },
    { source: 'New Email', target: 'Nový email' },
    { source: 'Change Email', target: 'Zmeniť email' },
    { source: 'Check your inbox', target: 'Skontrolujte si schránku' },
    { source: 'Confirmation Email was sent to {0}', target: 'Potvrdzovací email bol odoslaný na {0}' },
    { source: 'Changing Email failed', target: 'Zmena emailu zlyhala' },
    { source: 'Password Change', target: 'Zmena hesla' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target: 'Heslo by malo byť dostatočne silné, aby chránilo váš účet. Malo by mať aspoň 12 znakov.'
    },
    { source: 'Current Password', target: 'Aktuálne heslo' },
    { source: 'New Password', target: 'Nové heslo' },
    { source: 'Confirm New Password', target: 'Potvrďte nové heslo' },
    { source: 'Change Password', target: 'Zmeniť heslo' },
    {
      source: 'Current password was successfully updated, all other sessions will be logged out shortly',
      target: 'Aktuálne heslo bolo úspešne aktualizované, všetky ostatné relácie budú čoskoro odhlásené'
    },
    { source: 'Saving current password failed', target: 'Uloženie aktuálneho hesla zlyhalo' },
    { source: 'Short password', target: 'Krátke heslo' },
    { source: "Passwords don't match", target: 'Heslá sa nezhodujú' },
    { source: 'Personal Preferences', target: 'Osobné nastavenia' },
    { source: 'Language', target: 'Jazyk' },
    { source: 'Timezone', target: 'Časové pásmo' },
    { source: 'Current time in {0} is', target: 'Aktuálny čas v {0} je' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'Prispôsobte si dodatočné nastavenia pre váš účet.'
    },
    { source: 'News & Proposals', target: 'Novinky a návrhy' },
    {
      source: 'Subscribe to our updates and proposals.',
      target: 'Prihláste sa na odber našich aktualizácií a návrhov.'
    },
    { source: 'Save changes', target: 'Uložiť zmeny' },
    { source: 'Current user was successfully updated', target: 'Aktuálny používateľ bol úspešne aktualizovaný' },
    { source: 'Saving current user failed', target: 'Uloženie aktuálneho používateľa zlyhalo' },

    // My Apps
    { source: 'Type to search...', target: 'Napíšte pre hľadanie...' },
    { source: 'My Apps', target: 'Moje aplikácie' },
    { source: 'New App', target: 'Nová aplikácia' },
    { source: 'Builder', target: 'Staviteľ' },
    { source: 'App', target: 'Aplikácia' },
    { source: 'continue install', target: 'pokračovať v inštalácii' },
    { source: 'Open builder', target: 'Otvoriť staviteľa' },
    { source: 'View published', target: 'Zobraziť publikované' },
    { source: 'Delete App', target: 'Vymazať aplikáciu' },
    { source: 'Start from a template', target: 'Začať zo šablóny' },
    { source: 'Preview', target: 'Ukážka' },
    { source: 'Contact Support', target: 'Kontaktujte podporu' },
    { source: 'Documentation', target: 'Dokumentácia' },
    { source: 'Feature Requests', target: 'Požiadavky na funkcie' },
    { source: 'See What’s New', target: 'Zobraziť čo je nové' },
    { source: 'Search templates...', target: 'Hľadať šablóny...' },
    { source: 'any', target: 'akýkoľvek' },
    { source: 'more', target: 'viac' },
    { source: 'Choose Data Source', target: 'Vybrať zdroj dát' },
    { source: 'works with 30+ data sources', target: 'funguje s viac ako 30 zdrojmi dát' },
    { source: 'Use this template', target: 'Použiť túto šablónu' },
    { source: 'stores data in Jet Tables', target: 'ukladá dáta v Jet Tables' },
    { source: 'New Data', target: 'Nové dáta' },
    { source: 'using {0}', target: 'používajúci {0}' },
    { source: "Can't find resource you're looking for?", target: 'Nemôžete nájsť zdroj, ktorý hľadáte?' },
    { source: 'Admin Panel', target: 'Admin Panel' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'Zobrazenie, vytváranie a aktualizácia (CRUD) operácií nad vašimi dátami'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target:
        'Vytvorte si vlastný administratívny panel na báze ľubovoľných databáz, aplikácií a API ako Stripe, Twilio a GraphQL.'
    },
    { source: 'All Integrations', target: 'Všetky integrácie' },
    { source: 'Databases', target: 'Databázy' },
    { source: 'APIs', target: 'API' },
    { source: 'Frameworks', target: 'Framekorky' },
    { source: 'Storages', target: 'Úložiská' },

    // Sign In
    { source: 'Good morning', target: 'Dobré ráno' },
    { source: 'Good afternoon', target: 'Dobré popoludnie' },
    { source: 'Good evening', target: 'Dobrý večer' },
    { source: 'Sign In', target: 'Prihlásiť sa' },
    { source: 'Welcome Back.', target: 'Vitajte späť.' },
    { source: 'Sign in with {0}', target: 'Prihlásiť sa pomocou {0}' },
    { source: 'or login with', target: 'alebo sa prihláste pomocou' },
    { source: 'Enter E-mail', target: 'Zadajte email' },
    { source: 'Enter password', target: 'Zadajte heslo' },
    { source: 'Login', target: 'Prihlásiť sa' },
    { source: 'Create new account', target: 'Vytvoriť nový účet' },
    { source: 'Forgot my password', target: 'Zabudol som heslo' },
    { source: 'required', target: 'povinné' },
    { source: 'incorrect Email', target: 'nesprávny email' },
    { source: 'Minimum password length {0}', target: 'Minimálna dĺžka hesla {0}' },
    { source: 'Unable to Sign In', target: 'Nie je možné sa prihlásiť' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'Začnite <span class="auth-form__accent">dnes zadarmo</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target: 'Nie je vyžadovaná karta. Získate všetky pokročilé funkcie zadarmo počas 14 dňovej PRO skúšky.'
    },
    { source: 'Enter First Name', target: 'Zadajte krstné meno' },
    { source: 'Enter Last Name (optional)', target: 'Zadajte priezvisko (voliteľné)' },
    { source: 'Enter Email', target: 'Zadajte email' },
    { source: 'Password', target: 'Heslo' },
    { source: 'Repeat Password', target: 'Zopakujte heslo' },
    { source: 'By signing in you’re okay with our', target: 'Prihlásením sa súhlasíte s našimi' },
    { source: 'Creating an account means you’re okay with our', target: 'Vytvorením účtu súhlasíte s našimi' },
    { source: 'Terms of Service', target: 'Podmienkami služby' },
    { source: 'Privacy Policy', target: 'Zásadami ochrany osobných údajov' },
    { source: 'and', target: 'a' },
    { source: 'Create your free account', target: 'Vytvorte si bezplatný účet' },
    { source: 'Already have an account', target: 'Už máte účet' },
    { source: 'Unable to Sign Up', target: 'Nie je možné sa zaregistrovať' },

    // Restore password
    { source: 'Reset your password', target: 'Obnoviť heslo' },
    { source: 'Email Address', target: 'Emailová adresa' },
    { source: 'Reset password', target: 'Obnoviť heslo' },
    { source: 'Return to Sign In', target: 'Návrat k prihláseniu' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'Skontrolujte svoj email – <strong>{0}</strong>. Odoslali sme vám validačný odkaz, ktorý by ste mali nasledovať na zmenu hesla.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be at least 8 characters.',
      target: 'Skoro hotovo, len zadajte nové heslo nižšie. <br>Malo by mať aspoň 8 znakov.'
    },
    { source: 'Reset password & Sign In', target: 'Obnoviť heslo a prihlásiť sa' },
    { source: 'Unable to Send Code', target: 'Nie je možné odoslať kód' },
    { source: 'Unable to Change Password', target: 'Nie je možné zmeniť heslo' },

    // Email Verification
    { source: 'Email Verification', target: 'Overenie emailu' },
    { source: 'Resend verification code', target: 'Znovu odoslať overovací kód' },
    { source: 'Verification email sent', target: 'Overovací email bol odoslaný' },
    { source: 'Your Email is now verified', target: 'Váš email je teraz overený' },
    { source: 'Request is incorrect', target: 'Požiadavka je nesprávna' },

    // Invites
    {
      source: 'Join <span class="auth-form__accent">{0}</span>',
      target: 'Pripojte sa k <span class="auth-form__accent">{0}</span>'
    },
    {
      source: '<strong>{0}</strong> has invited you to join <strong>{1}</strong>',
      target: '<strong>{0}</strong> vás pozval aby ste sa pripojili k <strong>{1}</strong>'
    },
    {
      source: 'Someone has invited you to join <strong>{0}</strong>',
      target: 'Niekto vás pozval, aby ste sa pripojili k <strong>{0}</strong>'
    },
    {
      source: 'You are joining <strong>{0}</strong> using invite link',
      target: 'Pripájate sa k <strong>{0}</strong> pomocou pozývacieho odkazu'
    },
    { source: 'Join', target: 'Pripojiť sa' },
    { source: 'Go to home page', target: 'Prejsť na domovskú stránku' },
    { source: 'Invite link is wrong', target: 'Pozývací odkaz je nesprávny' },
    {
      source:
        'Looks like your invitation link has expired or maybe you have followed the wrong link. Please try to ask to invite your again.',
      target:
        'Zdá sa, že váš pozývací odkaz už vypršal alebo ste sa možno dostali k nesprávnemu odkazu. Skúste znovu požiadať o pozvánku.'
    },
    {
      source: 'Unfortunately we failed to load information about this invitation',
      target: 'Bohužiaľ, nepodarilo sa nám načítať informácie o tejto pozvánke'
    },

    // Users & Teams
    { source: 'Members of {0}', target: 'Členovia {0}' },
    { source: 'How to get started', target: 'Ako začať' },
    { source: 'Users API', target: 'API používateľov' },
    { source: 'Teams API', target: 'API tímov' },
    { source: 'Invite Member', target: 'Pozvať člena' },
    { source: 'Add User property', target: 'Pridať vlastnosť používateľa' },
    { source: 'Add Team property', target: 'Pridať vlastnosť tímu' },
    { source: 'Edit property', target: 'Upraviť vlastnosť' },
    { source: 'Delete property', target: 'Vymazať vlastnosť' },
    { source: 'Users', target: 'Používatelia' },
    { source: 'Teams', target: 'Tímy' },
    { source: 'Search members', target: 'Hľadať členov' },
    { source: 'Search teams', target: 'Hľadať tímy' },
    { source: '{0} pages', target: '{0} stránok' },
    { source: 'No members', target: 'Žiadni členovia' }
  ]
};

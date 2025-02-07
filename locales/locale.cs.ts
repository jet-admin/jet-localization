import { Locale } from './locale';

export const locale: Locale = {
  name: 'czech',
  language: 'cs',
  items: [
    // General
    { source: 'Save', target: 'Uložit' },
    { source: 'Create', target: 'Vytvořit' },
    { source: 'Duplicating', target: 'Kopírování' },
    { source: 'Duplicate', target: 'Kopírovat' },
    { source: 'Mass Edit', target: 'Hromadná úprava' },
    { source: 'Export', target: 'Exportovat' },
    { source: 'Import', target: 'Importovat' },
    { source: 'Delete', target: 'Smazat' },
    { source: 'Continue', target: 'Pokračovat' },
    { source: 'Submit', target: 'Odeslat' },
    { source: 'Cancel', target: 'Zrušit' },
    { source: 'Loading', target: 'Načítání' },
    { source: 'Please wait...', target: 'Prosím, čekejte...' },
    { source: 'Loading failed', target: 'Načítání se nezdařilo' },
    { source: 'Unknown error', target: 'Neznámá chyba' },
    { source: 'Add', target: 'Přidat' },
    { source: 'or', target: 'nebo' },
    { source: 'Hours', target: 'Hodiny' },
    { source: 'Minutes', target: 'Minuty' },
    { source: 'Seconds', target: 'Sekundy' },
    { source: 'Saved', target: 'Uloženo' },
    { source: 'Error', target: 'Chyba' },
    { source: 'Page not found', target: 'Stránka nenalezena' },
    {
      source: 'The specified address is incorrect, or the page does not exist',
      target: 'Zadaná adresa je nesprávná nebo stránka neexistuje'
    },
    { source: 'Not allowed', target: 'Není povoleno' },
    {
      source: "You don't have permissions to access this page",
      target: 'Nemáte oprávnění k přístupu na tuto stránku'
    },
    { source: 'Are you sure want to close?', target: 'Opravdu chcete zavřít?' },
    { source: 'Close', target: 'Zavřít' },

    // Actions
    { source: 'Action executed', target: 'Akce provedena' },
    { source: 'Action executed successfully', target: 'Akce byla úspěšně provedena' },
    { source: 'Action failed', target: 'Akce selhala' },
    {
      source: "You don't have permission for run this operation",
      target: 'Nemáte oprávnění k provedení této operace'
    },
    { source: 'Specify parameters', target: 'Určete parametry' },
    { source: 'Executing action', target: 'Provádění akce' },
    { source: 'You are executing <strong>{0}</strong>', target: 'Provádíte <strong>{0}</strong>' },
    { source: 'Please fill in the parameters below.', target: 'Vyplňte prosím parametry níže.' },
    { source: 'Execute', target: 'Provést' },
    { source: 'Executing', target: 'Probíhá' },
    { source: 'Finished', target: 'Dokončeno' },
    { source: 'Done', target: 'Hotovo' },

    // Export
    { source: 'Records Export', target: 'Export záznamů' },
    { source: 'Downloading records data as a file', target: 'Stahování dat záznamů jako souboru' },
    { source: 'Choose format', target: 'Vyberte formát' },
    { source: 'Number of exporting records', target: 'Počet exportovaných záznamů' },
    { source: { label: 'Export', context: 'submit' }, target: 'Exportovat' },
    { source: 'Exporting', target: 'Exportování' },
    { source: 'Export completed', target: 'Export dokončen' },
    { source: 'Failed to export', target: 'Export se nezdařil' },

    // Components
    { source: 'optional', target: 'nepovinné' },
    { source: 'choose', target: 'vybrat' },
    { source: 'Clear value', target: 'Vymazat hodnotu' },
    { source: 'loading...', target: 'načítání...' },
    { source: 'Nothing found', target: 'Nic nenalezeno' },
    { source: 'Search...', target: 'Hledat...' },
    { source: 'Enter at least {0} characters', target: 'Zadejte alespoň {0} znaků' },
    { source: 'No options', target: 'Žádné možnosti' },
    { source: 'Drop files here or', target: 'Přetáhněte soubory sem nebo' },
    { source: 'Upload new', target: 'Nahrát nový' },
    { source: 'Clear', target: 'Vymazat' },
    { source: 'Download', target: 'Stáhnout' },
    { source: 'Choose file', target: 'Vyberte soubor' },
    { source: 'Choose files', target: 'Vyberte soubory' },
    { source: 'Scan with Camera', target: 'Skenovat kamerou' },
    { source: 'Scan Image file', target: 'Skenovat image soubor' },
    { source: 'Choose camera', target: 'Vyberte kameru' },
    { source: 'Stop scanning', target: 'Zastavit skenování' },
    { source: 'Scan again', target: 'Skenovat znovu' },
    { source: 'Use this scan', target: 'Použít tento sken' },
    { source: 'Failed to scan', target: 'Skenování se nezdařilo' },
    {
      source: 'Code failed to scan, please try another image',
      target: 'Selhalo skenování kódu, zkuste jiný obrázek'
    },
    { source: 'current', target: 'aktuální' },
    { source: 'Day', target: 'Den' },
    { source: 'Week', target: 'Týden' },
    { source: 'Month', target: 'Měsíc' },
    { source: 'Year', target: 'Rok' },
    { source: 'Today', target: 'Dnes' },
    { source: 'Daily', target: 'Denně' },
    { source: 'Weekly', target: 'Týdně' },
    { source: 'Monthly', target: 'Měsíčně' },
    { source: 'Quarterly', target: 'Čtvrtletně' },
    { source: 'Yearly', target: 'Ročně' },
    { source: 'Hourly', target: 'Po hodinách' },
    { source: 'Minutely', target: 'Po minutách' },
    { source: 'Since', target: 'Od' },
    { source: 'Before', target: 'Před' },
    { source: 'Between', target: 'Mezi' },
    { source: 'From date', target: 'Od data' },
    { source: 'To date', target: 'Do data' },
    { source: 'Coordinates', target: 'Souřadnice' },
    { source: 'Latitude', target: 'Zeměpisná šířka' },
    { source: 'Longitude', target: 'Zeměpisná délka' },
    { source: 'Default color', target: 'Výchozí barva' },
    { source: 'not specified', target: 'nespecifikováno' },
    { source: 'Sign using your finger or pointer', target: 'Podepište se prstem nebo ukazovátkem' },

    // List components
    { source: 'Filter', target: 'Filtr' },
    { source: 'Filter by field', target: 'Filtr podle pole' },
    { source: 'Filter by...', target: 'Filtrovat podle...' },
    { source: 'Back', target: 'Zpět' },
    { source: 'Back to {0} fields', target: 'Zpět k polím {0}' },
    { source: 'Choose {0} from list', target: 'Vyberte {0} ze seznamu' },
    { source: '{0} fields', target: 'pole {0}' },
    { source: '{0} relationships', target: 'vztahy {0}' },
    { source: 'Aggregate {0}', target: 'Agregovat {0}' },
    { source: 'No fields to select', target: 'Žádná pole k výběru' },
    { source: 'Enter value...', target: 'Zadejte hodnotu...' },
    { source: 'Exclude', target: 'Vyloučit' },
    { source: 'Actions', target: 'Akce' },
    { source: 'Search', target: 'Hledat' },
    { source: 'Sort 1 → 9', target: 'Řadit 1 → 9' },
    { source: 'Sort 9 → 1', target: 'Řadit 9 → 1' },
    { source: 'Sort A → Z', target: 'Řadit A → Z' },
    { source: 'Sort Z → A', target: 'Řadit Z → A' },
    { source: 'Refresh automatically', target: 'Automaticky obnovovat' },
    { source: 'All', target: 'Vše' },
    { source: 'Selected', target: 'Vybrané' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'Bohužel nebyl nalezen žádný {0}, který by vyhovoval vašemu dotazu'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'Načítáním {0}, prosím čekejte...' },
    { source: 'Add filter', target: 'Přidat filtr' },
    { source: 'Delete this filter', target: 'Odstranit tento filtr' },
    { source: 'Toggle ordering', target: 'Přepnout řazení' },
    { source: 'Not configured', target: 'Nenakonfigurováno' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'Bohužel tento komponent ještě není nakonfigurován'
    },
    { source: 'records', target: 'záznamy' },
    { source: '{0} items', target: '{0} položek' },

    // Menu
    { source: 'Users & Teams', target: 'Uživatelé a týmy' },
    { source: 'Billing', target: 'Fakturace' },
    { source: 'Billing & Plans', target: 'Fakturace a plány' },
    { source: 'API keys', target: 'API klíče' },
    { source: 'Dark Mode', target: 'Tmavý režim' },
    { source: 'Light Mode', target: 'Světlý režim' },
    { source: 'Disable Staff', target: 'Zrušit personál' },
    { source: 'Enable Staff', target: 'Povolit personál' },
    { source: 'Manage Templates', target: 'Správa šablon' },
    { source: 'Logout', target: 'Odhlásit se' },
    { source: 'Activity Log', target: 'Záznam činnosti' },
    { source: 'Collaborations', target: 'Spolupráce' },
    { source: 'Open Visual Builder', target: 'Otevřít vizuální editor' },

    // Filters
    { source: 'equals', target: 'rovná se' },
    { source: 'does not equal', target: 'nerovná se' },
    { source: '{0} equals {1}', target: '{0} se rovná {1}' },
    { source: '{0} does not equal {1}', target: '{0} se nerovná {1}' },

    { source: 'contains', target: 'obsahuje' },
    { source: 'does not contain', target: 'neobsahuje' },
    { source: '{0} contains {1}', target: '{0} obsahuje {1}' },
    { source: '{0} not contains {1}', target: '{0} neobsahuje {1}' },

    { source: 'starts with', target: 'začíná s' },
    { source: 'does not start with', target: 'nezačíná s' },
    { source: '{0} starts with {1}', target: '{0} začíná s {1}' },
    { source: '{0} does not start with {1}', target: '{0} nezačíná s {1}' },

    { source: 'ends with', target: 'končí s' },
    { source: 'does not end with', target: 'nekončí s' },
    { source: '{0} ends with {1}', target: '{0} končí s {1}' },
    { source: '{0} does not end with {1}', target: '{0} nekončí s {1}' },

    { source: 'greater than', target: 'větší než' },
    { source: 'is not greater than', target: 'není větší než' },
    { source: '{0} is greater than {1}', target: '{0} je větší než {1}' },
    { source: '{0} not greater than {1}', target: '{0} není větší než {1}' },

    { source: 'greater than or equals', target: 'větší než nebo rovná se' },
    { source: 'is not greater than or equals', target: 'není větší než nebo rovná se' },
    { source: '{0} is greater than or equals {1}', target: '{0} je větší než nebo rovná se {1}' },
    { source: '{0} is not greater than or equals {1}', target: '{0} není větší než nebo rovná se {1}' },

    { source: 'less than', target: 'menší než' },
    { source: 'is not less than', target: 'není menší než' },
    { source: '{0} is less than {1}', target: '{0} je menší než {1}' },
    { source: '{0} is not less than {1}', target: '{0} není menší než {1}' },

    { source: 'less than or equals', target: 'menší než nebo rovná se' },
    { source: 'is not less than or equals', target: 'není menší než nebo rovná se' },
    { source: '{0} is less than or equals {1}', target: '{0} je menší než nebo rovná se {1}' },
    { source: '{0} is not less than or equals {1}', target: '{0} není menší než nebo rovná se {1}' },

    { source: 'one of', target: 'jeden z' },
    { source: 'is one of', target: 'je jeden z' },
    { source: 'is not one of', target: 'není jeden z' },
    { source: '{0} is one of {1}', target: '{0} je jeden z {1}' },
    { source: '{0} is not one of {1}', target: '{0} není jeden z {1}' },

    { source: 'is null', target: 'je null' },
    { source: 'is not null', target: 'není null' },
    { source: '{0} is null', target: '{0} je null' },
    { source: '{0} is not null', target: '{0} není null' },

    { source: 'is future', target: 'je v budoucnosti' },
    { source: 'in the future', target: 'v budoucnosti' },
    { source: 'is not in the future', target: 'není v budoucnosti' },
    { source: '{0} is in the future', target: '{0} je v budoucnosti' },
    { source: '{0} is not in the future', target: '{0} není v budoucnosti' },

    { source: 'is past', target: 'je v minulosti' },
    { source: 'in the past', target: 'v minulosti' },
    { source: 'is not in the past', target: 'není v minulosti' },
    { source: '{0} is in the past', target: '{0} je v minulosti' },
    { source: '{0} is not in the past', target: '{0} není v minulosti' },

    { source: 'is Today', target: 'je dnes' },
    { source: 'today', target: 'dnes' },
    { source: 'is not today', target: 'není dnes' },
    { source: '{0} is today', target: '{0} je dnes' },
    { source: '{0} is not today', target: '{0} není dnes' },

    { source: 'is Yesterday', target: 'bylo včera' },
    { source: 'yesterday', target: 'včera' },
    { source: 'is not yesterday', target: 'nebylo včera' },
    { source: '{0} is yesterday', target: '{0} bylo včera' },
    { source: '{0} is not yesterday', target: '{0} nebylo včera' },

    { source: 'is Last Week', target: 'bylo minulý týden' },
    { source: 'last week', target: 'minulý týden' },
    { source: 'is not last week', target: 'nebylo minulý týden' },
    { source: '{0} is last week', target: '{0} bylo minulý týden' },
    { source: '{0} is not last week', target: '{0} nebylo minulý týden' },

    { source: 'is Last Month', target: 'bylo minulý měsíc' },
    { source: 'last month', target: 'minulý měsíc' },
    { source: 'is not last month', target: 'nebylo minulý měsíc' },
    { source: '{0} is last month', target: '{0} bylo minulý měsíc' },
    { source: '{0} is not last month', target: '{0} nebylo minulý měsíc' },

    { source: 'is Last Quarter', target: 'bylo minulý čtvrtletí' },
    { source: 'last quarter', target: 'minulý čtvrtletí' },
    { source: 'is not last quarter', target: 'nebylo minulý čtvrtletí' },
    { source: '{0} is last quarter', target: '{0} bylo minulý čtvrtletí' },
    { source: '{0} is not last quarter', target: '{0} nebylo minulý čtvrtletí' },

    { source: 'is Last Year', target: 'bylo minulý rok' },
    { source: 'last year', target: 'minulý rok' },
    { source: 'is not last year', target: 'nebylo minulý rok' },
    { source: '{0} is last year', target: '{0} bylo minulý rok' },
    { source: '{0} is not last year', target: '{0} nebylo minulý rok' },

    { source: 'is Last X Days', target: 'bylo poslední X dní' },
    { source: 'last X days', target: 'poslední X dní' },
    { source: 'is not last X days', target: 'nebylo poslední X dní' },
    { source: '{0} is last {1} days', target: '{0} bylo poslední {1} dní' },
    { source: '{0} is not last {1} days', target: '{0} nebylo poslední {1} dní' },

    { source: 'is Current Week', target: 'je tento týden' },
    { source: 'current week', target: 'tento týden' },
    { source: 'is not current week', target: 'není tento týden' },
    { source: '{0} is current week', target: '{0} je tento týden' },
    { source: '{0} is not current week', target: '{0} není tento týden' },

    { source: 'is Current Month', target: 'je tento měsíc' },
    { source: 'current month', target: 'tento měsíc' },
    { source: 'is not current month', target: 'není tento měsíc' },
    { source: '{0} is current month', target: '{0} je tento měsíc' },
    { source: '{0} is not current month', target: '{0} není tento měsíc' },

    { source: 'is Current Quarter', target: 'je tento čtvrtletí' },
    { source: 'current quarter', target: 'tento čtvrtletí' },
    { source: 'is not current quarter', target: 'není tento čtvrtletí' },
    { source: '{0} is current quarter', target: '{0} je tento čtvrtletí' },
    { source: '{0} is not current quarter', target: '{0} není tento čtvrtletí' },

    { source: 'is Current Year', target: 'je tento rok' },
    { source: 'current year', target: 'tento rok' },
    { source: 'is not current year', target: 'není tento rok' },
    { source: '{0} is current year', target: '{0} je tento rok' },
    { source: '{0} is not current year', target: '{0} není tento rok' },

    { source: 'is Previous Week', target: 'bylo předchozí týden' },
    { source: 'previous week', target: 'předchozí týden' },
    { source: 'is not previous week', target: 'nebylo předchozí týden' },
    { source: '{0} is previous week', target: '{0} bylo předchozí týden' },
    { source: '{0} is not previous week', target: '{0} nebylo předchozí týden' },

    { source: 'is Previous Month', target: 'bylo předchozí měsíc' },
    { source: 'previous month', target: 'předchozí měsíc' },
    { source: 'is not previous month', target: 'nebylo předchozí měsíc' },
    { source: '{0} is previous month', target: '{0} bylo předchozí měsíc' },
    { source: '{0} is not previous month', target: '{0} nebylo předchozí měsíc' },

    { source: 'is Previous Quarter', target: 'bylo předchozí čtvrtletí' },
    { source: 'previous quarter', target: 'předchozí čtvrtletí' },
    { source: 'is not previous quarter', target: 'nebylo předchozí čtvrtletí' },
    { source: '{0} is previous quarter', target: '{0} bylo předchozí čtvrtletí' },
    { source: '{0} is not previous quarter', target: '{0} nebylo předchozí čtvrtletí' },

    { source: 'is Previous Year', target: 'bylo předchozí rok' },
    { source: 'previous year', target: 'předchozí rok' },
    { source: 'is not previous year', target: 'nebylo předchozí rok' },
    { source: '{0} is previous year', target: '{0} bylo předchozí rok' },
    { source: '{0} is not previous year', target: '{0} nebylo předchozí rok' },

    { source: 'is Previous X Days', target: 'bylo předchozí X dní' },
    { source: 'previous X days', target: 'předchozí X dní' },
    { source: 'is not previous X days', target: 'nebylo předchozí X dní' },
    { source: '{0} is previous {1} days', target: '{0} bylo předchozí {1} dní' },
    { source: '{0} is not previous {1} days', target: '{0} nebylo předchozí {1} dní' },

    { source: 'is empty', target: 'je prázdný' },
    { source: 'is not empty', target: 'není prázdný' },
    { source: '{0} is empty', target: '{0} je prázdný' },
    { source: '{0} is not empty', target: '{0} není prázdný' },

    { source: 'covered by', target: 'pokryto' },
    { source: 'is not covered by', target: 'není pokryto' },
    { source: '{0} covered by {1}', target: '{0} pokryto {1}' },
    { source: '{0} is not covered by {1}', target: '{0} není pokryto {1}' },

    // Activity log
    { source: 'No activities found', target: 'Žádné aktivity nenalezeny' },
    {
      source: 'Start to working with data to log activities.',
      target: 'Začněte pracovat s daty pro záznam aktivit.'
    },
    { source: 'All Activity', target: 'Všechny aktivity' },
    { source: 'Create Record', target: 'Vytvořit záznam' },
    { source: 'Update Record', target: 'Aktualizovat záznam' },
    { source: 'Delete Record', target: 'Smazat záznam' },
    { source: 'All Members', target: 'Všichni členové' },

    // Collaboration
    { source: 'Timeline', target: 'Časová osa' },
    { source: 'Messages', target: 'Zprávy' },
    { source: 'Activity', target: 'Činnost' },
    { source: 'Start chatting with your team', target: 'Začněte chatovat s týmem' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'Odešlete zprávu o aktuální stránce pro sledování důležitých informací.'
    },
    { source: 'Your Message', target: 'Vaše zpráva' },
    { source: 'Send', target: 'Odeslat' },

    // Share
    { source: 'Invite members', target: 'Pozvat členy' },
    { source: 'Public share', target: 'Veřejné sdílení' },
    { source: 'Sign Up', target: 'Zaregistrujte se' },
    { source: 'Members', target: 'Členové' },
    { source: 'Invite with Email', target: 'Pozvat e-mailem' },
    { source: 'Invite someone...', target: 'Pozvat někoho...' },
    { source: 'Send Invite', target: 'Odeslat pozvánku' },
    {
      source: 'Limit access to your data by user properties',
      target: 'Omezte přístup k vašim datům podle vlastností uživatele'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: 'Zadejte e-mail uživatele, kterého chcete pozvat ke spolupráci.'
    },
    { source: 'Copy', target: 'Kopírovat' },
    { source: 'Invite with Link', target: 'Pozvat pomocí odkazu' },
    { source: 'Remove link', target: 'Odstranit odkaz' },
    { source: 'Add Invite Link', target: 'Přidat odkaz na pozvání' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'Kdokoli na internetu s tímto odkazem se bude moci připojit k vybranému týmu.'
    },
    { source: 'Pending Invites', target: 'Nevyřízené pozvánky' },
    { source: 'Cancel invite', target: 'Zrušit pozvání' },
    { source: 'Active Members', target: 'Aktivní členové' },
    { source: 'Remove member', target: 'Odstranit člena' },
    { source: 'You are setting sharing for the current page', target: 'Nastavujete sdílení pro aktuální stránku' },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'Nastavujete sdílení pro všechny stránky aplikace.'
    },
    { source: 'Public access link', target: 'Odkaz pro veřejný přístup' },
    { source: 'Updating public access...', target: 'Aktualizace veřejného přístupu...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'Kdokoli s tímto odkazem si bude moci prohlédnout aktuální stránku. Tímto způsobem můžete aktuální stránku také vložit na jinou webovou stránku.'
    },
    { source: 'Embed code (IFRAME)', target: 'Vložit kód (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: 'Vložte tento kód do HTML kódu vaší webové stránky tam, kde by se měla aktuální stránka objevit.'
    },
    { source: 'link', target: 'odkaz' },
    { source: 'invited', target: 'pozván' },
    { source: 'Choose Team', target: 'Vyberte tým' },
    { source: 'App Teams', target: 'Týmy aplikace' },
    { source: 'Built-In Teams', target: 'Vestavěné týmy' },
    { source: 'Clear Team', target: 'Vymazat tým' },
    { source: 'Can build application and modify data', target: 'Může vytvářet aplikaci a upravovat data' },
    { source: 'Can modify data in application', target: 'Může upravovat data v aplikaci' },
    { source: 'Can only view data without modification', target: 'Může pouze prohlížet data bez úprav' },
    { source: 'Add Team', target: 'Přidat tým' },
    { source: 'Edit Team', target: 'Upravit tým' },
    { source: 'Adding Team', target: 'Přidání týmu' },
    {
      source: 'Keep control over who has access to current App',
      target: 'Mějte kontrolu nad tím, kdo má přístup k aktuální aplikaci'
    },
    { source: 'Enter Team Name', target: 'Zadejte název týmu' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'Zadejte název týmu, např: Podpora, Prodej, Marketing, atd.'
    },
    { source: 'Add a new member to this team.', target: 'Přidejte do týmu nového člena.' },
    { source: 'Invite new member', target: 'Pozvat nového člena' },
    { source: 'User', target: 'Uživatel' },
    { source: 'Date Added', target: 'Datum přidání' },
    { source: 'You', target: 'Vy' },
    { source: 'Edit', target: 'Upravit' },
    { source: 'No users in this team', target: 'V tomto týmu nejsou žádní uživatelé' },
    { source: 'Page Permissions', target: 'Oprávnění stránky' },
    { source: 'App Permissions', target: 'Oprávnění aplikace' },
    { source: 'Properties', target: 'Vlastnosti' },
    { source: 'Page name', target: 'Název stránky' },
    { source: 'Access', target: 'Přístup' },
    { source: 'Full Access', target: 'Úplný přístup' },
    { source: 'Read Only', target: 'Pouze čtení' },
    { source: 'No Access', target: 'Žádný přístup' },
    { source: 'Read', target: 'Číst' },
    { source: 'Update', target: 'Aktualizovat' },
    { source: 'Write', target: 'Zapsat' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'Smazat' },
    { source: 'Custom Access', target: 'Vlastní přístup' },
    { source: 'Read, create, update and delete data', target: 'Čtení, vytváření, aktualizace a mazání dat' },
    { source: 'Choose allowed operations granularly', target: 'Vyberte povolené operace podrobně' },
    { source: 'Without any access to data', target: 'Bez přístupu k datům' },
    { source: 'Name', target: 'Název' },
    { source: 'Active', target: 'Aktivní' },
    { source: 'Settings', target: 'Nastavení' },
    { source: 'Members and Teams', target: 'Členové a týmy' },
    { source: 'App Builder', target: 'Tvůrce aplikací' },
    { source: 'Collection Permissions', target: 'Oprávnění ke sbírkám' },
    { source: "Grant permissions to app's collection", target: 'Udělte oprávnění k sbírce aplikací' },
    { source: 'Collection', target: 'Sbírka' },
    {
      source: 'Limit access to your data by team properties',
      target: 'Omezte přístup k vašim datům podle vlastností týmu'
    },
    { source: 'Save Team', target: 'Uložit tým' },
    { source: 'Create Team', target: 'Vytvořit tým' },
    { source: 'Value', target: 'Hodnota' },
    { source: 'No properties specified', target: 'Žádné vlastnosti nejsou specifikovány' },

    // Navigation
    { source: 'Current App', target: 'Aktuální aplikace' },
    { source: 'Home', target: 'Domů' },

    // Profile
    {
      source: 'We are fetching user data, please, wait...',
      target: 'Načítáme údaje o uživateli, prosím, čekejte...'
    },
    { source: 'Profile Settings', target: 'Nastavení profilu' },
    { source: 'Basic information about your account.', target: 'Základní informace o vašem účtu.' },
    { source: 'Photo', target: 'Fotografie' },
    { source: 'your photo', target: 'vaše fotografie' },
    { source: 'Change', target: 'Změnit' },
    { source: 'Upload', target: 'Nahrát' },
    { source: 'Photo was successfully updated', target: 'Fotografie byla úspěšně aktualizována' },
    { source: 'Photo was successfully deleted', target: 'Fotografie byla úspěšně smazána' },
    { source: 'First Name', target: 'Jméno' },
    { source: 'Last Name', target: 'Příjmení' },
    { source: 'Your Email', target: 'Váš email' },
    { source: 'Email Change', target: 'Změna emailu' },
    { source: 'New Email', target: 'Nový email' },
    { source: 'Change Email', target: 'Změnit email' },
    { source: 'Check your inbox', target: 'Zkontrolujte vaši schránku' },
    { source: 'Confirmation Email was sent to {0}', target: 'Potvrzovací email byl odeslán na {0}' },
    { source: 'Changing Email failed', target: 'Změna emailu se nezdařila' },
    { source: 'Password Change', target: 'Změna hesla' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target: 'Heslo by mělo být dostatečně silné, aby chránilo váš účet, proto jej udělejte alespoň 12 znaků dlouhé.'
    },
    { source: 'Current Password', target: 'Aktuální heslo' },
    { source: 'New Password', target: 'Nové heslo' },
    { source: 'Confirm New Password', target: 'Potvrdit nové heslo' },
    { source: 'Change Password', target: 'Změnit heslo' },
    {
      source: 'Current password was successfully updated, all other sessions will be logged out shortly',
      target: 'Aktuální heslo bylo úspěšně aktualizováno, všechny ostatní relace budou brzy odhlášeny'
    },
    { source: 'Saving current password failed', target: 'Uložení aktuálního hesla se nezdařilo' },
    { source: 'Short password', target: 'Krátké heslo' },
    { source: "Passwords don't match", target: 'Hesla se neshodují' },
    { source: 'Personal Preferences', target: 'Osobní předvolby' },
    { source: 'Language', target: 'Jazyk' },
    { source: 'Timezone', target: 'Časové pásmo' },
    { source: 'Current time in {0} is', target: 'Aktuální čas v {0} je' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'Přizpůsobte si další preference pro váš účet.'
    },
    { source: 'News & Proposals', target: 'Novinky a návrhy' },
    {
      source: 'Subscribe to our updates and proposals.',
      target: 'Přihlaste se k odběru našich aktualizací a návrhů.'
    },
    { source: 'Save changes', target: 'Uložit změny' },
    { source: 'Current user was successfully updated', target: 'Aktuální uživatel byl úspěšně aktualizován' },
    { source: 'Saving current user failed', target: 'Uložení aktuálního uživatele se nezdařilo' },

    // My Apps
    { source: 'Type to search...', target: 'Napište pro hledání...' },
    { source: 'My Apps', target: 'Moje aplikace' },
    { source: 'New App', target: 'Nová aplikace' },
    { source: 'Builder', target: 'Tvůrce' },
    { source: 'App', target: 'Aplikace' },
    { source: 'continue install', target: 'pokračovat v instalaci' },
    { source: 'Open builder', target: 'Otevřít tvůrce' },
    { source: 'View published', target: 'Zobrazit publikované' },
    { source: 'Delete App', target: 'Smazat aplikaci' },
    { source: 'Start from a template', target: 'Začít ze šablony' },
    { source: 'Preview', target: 'Náhled' },
    { source: 'Contact Support', target: 'Kontaktovat podporu' },
    { source: 'Documentation', target: 'Dokumentace' },
    { source: 'Feature Requests', target: 'Požadavky na funkce' },
    { source: 'See What’s New', target: 'Podívejte se, co je nového' },
    { source: 'Search templates...', target: 'Hledat šablony...' },
    { source: 'any', target: 'žádný' },
    { source: 'more', target: 'více' },
    { source: 'Choose Data Source', target: 'Vyberte zdroj dat' },
    { source: 'works with 30+ data sources', target: 'spolupracuje s více než 30 zdroji dat' },
    { source: 'Use this template', target: 'Použijte tuto šablonu' },
    { source: 'stores data in Jet Tables', target: 'ukládá data do Jet tabulek' },
    { source: 'New Data', target: 'Nová data' },
    { source: 'using {0}', target: 'používající {0}' },
    { source: "Can't find resource you're looking for?", target: 'Nemůžete najít zdroj, který hledáte?' },
    { source: 'Admin Panel', target: 'Administrační panel' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'Seznam, tvorba a aktualizace (CRUD) operací nad vašimi daty'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target:
        'Vytvořte vlastní administrační panel na základě libovolných databází, aplikací a API jako Stripe, Twilio a GraphQL.'
    },
    { source: 'All Integrations', target: 'Všechny integrace' },
    { source: 'Databases', target: 'Databáze' },
    { source: 'APIs', target: 'API' },
    { source: 'Frameworks', target: 'Frameworky' },
    { source: 'Storages', target: 'Úložiště' },

    // Sign In
    { source: 'Good morning', target: 'Dobré ráno' },
    { source: 'Good afternoon', target: 'Dobrý den' },
    { source: 'Good evening', target: 'Dobrý večer' },
    { source: 'Sign In', target: 'Přihlášení' },
    { source: 'Welcome Back.', target: 'Vítejte zpět.' },
    { source: 'Sign in with {0}', target: 'Přihlaste se pomocí {0}' },
    { source: 'or login with', target: 'nebo přihlášení pomocí' },
    { source: 'Enter E-mail', target: 'Zadejte e-mail' },
    { source: 'Enter password', target: 'Zadejte heslo' },
    { source: 'Login', target: 'Přihlášení' },
    { source: 'Create new account', target: 'Vytvořit nový účet' },
    { source: 'Forgot my password', target: 'Zapomněl jsem heslo' },
    { source: 'required', target: 'požadovaný' },
    { source: 'incorrect Email', target: 'nesprávný e-mail' },
    { source: 'Minimum password length {0}', target: 'Minimální délka hesla {0}' },
    { source: 'Unable to Sign In', target: 'Nelze se přihlásit' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'Začněte <span class="auth-form__accent">dnes zdarma</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target: 'Není vyžadována žádná karta. Získáte všechny pokročilé funkce zdarma během 14denní PRO zkušební doby.'
    },
    { source: 'Enter First Name', target: 'Zadejte křestní jméno' },
    { source: 'Enter Last Name (optional)', target: 'Zadejte příjmení (nepovinné)' },
    { source: 'Enter Email', target: 'Zadejte e-mail' },
    { source: 'Password', target: 'Heslo' },
    { source: 'Repeat Password', target: 'Zopakujte heslo' },
    {
      source: 'By signing in you’re okay with our',
      target: 'Přihlášením souhlasíte s našimi'
    },
    {
      source: 'Creating an account means you’re okay with our',
      target: 'Vytvoření účtu znamená, že souhlasíte s našimi'
    },
    { source: 'Terms of Service', target: 'Podmínkami služby' },
    { source: 'Privacy Policy', target: 'Zásady ochrany osobních údajů' },
    { source: 'and', target: 'a' },
    { source: 'Create your free account', target: 'Vytvořte si zdarma účet' },
    { source: 'Already have an account', target: 'Již máte účet' },
    { source: 'Unable to Sign Up', target: 'Nelze se zaregistrovat' },

    // Restore password
    { source: 'Reset your password', target: 'Obnovte své heslo' },
    { source: 'Email Address', target: 'E-mailová adresa' },
    { source: 'Reset password', target: 'Obnovit heslo' },
    { source: 'Return to Sign In', target: 'Zpět k přihlášení' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'Zkontrolujte prosím svůj e-mail – <strong>{0}</strong>. Odeslali jsme validační odkaz, který byste měli následovat, abyste mohli změnit své heslo.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be al least 8 characters.',
      target: 'Ještě chvíli, zadejte nové heslo níže. <br>Musí mít alespoň 8 znaků.'
    },
    { source: 'Reset password & Sign In', target: 'Obnovte heslo a přihlaste se' },
    { source: 'Unable to Send Code', target: 'Nelze odeslat kód' },
    { source: 'Unable to Change Password', target: 'Nelze změnit heslo' },

    // Email Verification
    { source: 'Email Verification', target: 'Ověření e-mailu' },
    { source: 'Resend verification code', target: 'Znovu odeslat ověřovací kód' },
    { source: 'Verification email sent', target: 'Ověřovací e-mail odeslán' },
    { source: 'Your Email is now verified', target: 'Váš e-mail je nyní ověřen' },
    { source: 'Request is incorrect', target: 'Požadavek je nesprávný' },

    // Invites
    {
      source: 'Join <span class="auth-form__accent">{0}</span>',
      target: 'Připojte se k <span class="auth-form__accent">{0}</span>'
    },
    {
      source: '<strong>{0}</strong> has invited you to join <strong>{1}</strong>',
      target: '<strong>{0}</strong> vás pozval k připojení k <strong>{1}</strong>'
    },
    {
      source: 'Someone has invited you to join <strong>{0}</strong>',
      target: 'Někdo vás pozval k připojení ke <strong>{0}</strong>'
    },
    {
      source: 'You are joining <strong>{0}</strong> using invite link',
      target: 'Připojujete se k <strong>{0}</strong> pomocí odkazu na pozvání'
    },
    { source: 'Join', target: 'Připojit se' },
    { source: 'Go to home page', target: 'Přejít na domovskou stránku' },
    { source: 'Invite link is wrong', target: 'Odkaz na pozvánku je nesprávný' },
    {
      source:
        'Looks like your invitation link has expired or maybe you have followed the wrong link. Please try to ask to invite your again.',
      target:
        'Vypadá to, že váš odkaz na pozvánku vypršel nebo jste možná sledovali nesprávný odkaz. Zkuste požádat o pozvání znovu.'
    },
    {
      source: 'Unfortunately we failed to load information about this invitation',
      target: 'Bohužel se nám nepodařilo načíst informace o tomto pozvání'
    },

    // Users & Teams
    { source: 'Members of {0}', target: 'Členové {0}' },
    { source: 'How to get started', target: 'Jak začít' },
    { source: 'Users API', target: 'Uživatelské API' },
    { source: 'Teams API', target: 'API týmů' },
    { source: 'Invite Member', target: 'Pozvat člena' },
    { source: 'Add User property', target: 'Přidat vlastnost uživatele' },
    { source: 'Add Team property', target: 'Přidat vlastnost týmu' },
    { source: 'Edit property', target: 'Upravit vlastnost' },
    { source: 'Delete property', target: 'Smazat vlastnost' },
    { source: 'Users', target: 'Uživatelé' },
    { source: 'Teams', target: 'Týmy' },
    { source: 'Search members', target: 'Vyhledávání členů' },
    { source: 'Search teams', target: 'Vyhledávání týmů' },
    { source: '{0} pages', target: '{0} stránek' },
    { source: 'No members', target: 'Žádní členové' }
  ]
};

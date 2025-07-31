import { Locale } from './locale';

export const locale: Locale = {
  name: 'albanian',
  language: 'sq',
  items: [
    // General
    { source: 'Save', target: 'Ruaj' },
    { source: 'Create', target: 'Krijo' },
    { source: 'Duplicating', target: 'Duke kopjuar' },
    { source: 'Duplicate', target: 'Kopjo' },
    { source: 'Mass Edit', target: 'Ndryshim masiv' },
    { source: 'Export', target: 'Eksporto' },
    { source: 'Import', target: 'Importo' },
    { source: 'Delete', target: 'Fshi' },
    { source: 'Continue', target: 'Vazhdo' },
    { source: 'Submit', target: 'Dorëzo' },
    { source: 'Cancel', target: 'Anulo' },
    { source: 'Loading', target: 'Duke ngarkuar' },
    { source: 'Please wait...', target: 'Ju lutem prisni...' },
    { source: 'Loading failed', target: 'Ngarkimi dështoi' },
    { source: 'Unknown error', target: 'Gabim i panjohur' },
    { source: 'Add', target: 'Shto' },
    { source: 'or', target: 'ose' },
    { source: 'Hours', target: 'Orë' },
    { source: 'Minutes', target: 'Minuta' },
    { source: 'Seconds', target: 'Sekonda' },
    { source: 'Saved', target: 'Ruajtur' },
    { source: 'Error', target: 'Gabim' },
    { source: 'Page not found', target: 'Faqja nuk u gjet' },
    {
      source: 'The specified address is incorrect, or the page does not exist',
      target: 'Adresa e specifikuar është e pasaktë, ose faqja nuk ekziston'
    },
    { source: 'Not allowed', target: 'Nuk lejohet' },
    {
      source: "You don't have permissions to access this page",
      target: 'Nuk keni leje për të hyrë në këtë faqe'
    },
    { source: 'Are you sure want to close?', target: 'A jeni të sigurt që doni të mbyllni?' },
    { source: 'Close', target: 'Mbyll' },

    // Actions
    { source: 'Action executed', target: 'Veprimi u ekzekutua' },
    { source: 'Action executed successfully', target: 'Veprimi u ekzekutua me sukses' },
    { source: 'Action failed', target: 'Veprimi dështoi' },
    {
      source: "You don't have permission for run this operation",
      target: 'Nuk keni leje për të kryer këtë operacion'
    },
    { source: 'Specify parameters', target: 'Specifikoni parametrat' },
    { source: 'Executing action', target: 'Duke ekzekutuar veprimin' },
    { source: 'You are executing <strong>{0}</strong>', target: 'Ju po ekzekutoni <strong>{0}</strong>' },
    { source: 'Please fill in the parameters below.', target: 'Ju lutemi plotësoni parametrat më poshtë.' },
    { source: 'Execute', target: 'Ekzekuto' },
    { source: 'Executing', target: 'Duke ekzekutuar' },
    { source: 'Finished', target: 'Përfunduar' },
    { source: 'Done', target: 'Kryer' },

    // Export
    { source: 'Records Export', target: 'Eksporti i Regjistrimeve' },
    { source: 'Downloading records data as a file', target: 'Shkarkimi i të dhënave të regjistrimeve si një skedar' },
    { source: 'Choose format', target: 'Zgjidh formatin' },
    { source: 'Number of exporting records', target: 'Numri i regjistrimeve për eksport' },
    { source: { label: 'Export', context: 'submit' }, target: 'Eksporto' },
    { source: 'Exporting', target: 'Duke eksportuar' },
    { source: 'Export completed', target: 'Eksporti përfundoi' },
    { source: 'Failed to export', target: 'Eksporti dështoi' },

    // Components
    { source: 'optional', target: 'opsional' },
    { source: 'choose', target: 'zgjidhni' },
    { source: 'Clear value', target: 'Pastro vlerën' },
    { source: 'loading...', target: 'duke ngarkuar...' },
    { source: 'Nothing found', target: 'Asgjë nuk u gjet' },
    { source: 'Search...', target: 'Kërko...' },
    { source: 'Enter at least {0} characters', target: 'Shkruani të paktën {0} karaktere' },
    { source: 'No options', target: 'Pa mundësi' },
    { source: 'Drop files here or', target: 'Hidhni skedarët këtu ose' },
    { source: 'Upload new', target: 'Ngarko të ri' },
    { source: 'Clear', target: 'Pastro' },
    { source: 'Download', target: 'Shkarko' },
    { source: 'Choose file', target: 'Zgjidh skedarin' },
    { source: 'Choose files', target: 'Zgjidhni skedarët' },
    { source: 'Scan with Camera', target: 'Skanoni me Kamera' },
    { source: 'Scan Image file', target: 'Skanoni Skedarin e Imazhit' },
    { source: 'Choose camera', target: 'Zgjidh kamerën' },
    { source: 'Stop scanning', target: 'Ndaloni skanimin' },
    { source: 'Scan again', target: 'Skanoni përsëri' },
    { source: 'Use this scan', target: 'Përdorni këtë skanim' },
    { source: 'Failed to scan', target: 'Skanimi dështoi' },
    {
      source: 'Code failed to scan, please try another image',
      target: 'Kodi nuk skanohet, ju lutem provoni një imazh tjetër'
    },
    { source: 'current', target: 'aktual' },
    { source: 'Day', target: 'Ditë' },
    { source: 'Week', target: 'Javë' },
    { source: 'Month', target: 'Muaj' },
    { source: 'Year', target: 'Vit' },
    { source: 'Today', target: 'Sot' },
    { source: 'Daily', target: 'Çdo ditë' },
    { source: 'Weekly', target: 'Çdo javë' },
    { source: 'Monthly', target: 'Çdo muaj' },
    { source: 'Quarterly', target: 'Çdo tremujor' },
    { source: 'Yearly', target: 'Çdo vit' },
    { source: 'Hourly', target: 'Çdo orë' },
    { source: 'Minutely', target: 'Çdo minutë' },
    { source: 'Since', target: 'Që nga' },
    { source: 'Before', target: 'Para' },
    { source: 'Between', target: 'Ndërmjet' },
    { source: 'From date', target: 'Nga data' },
    { source: 'To date', target: 'Deri më' },
    { source: 'Coordinates', target: 'Koordinatat' },
    { source: 'Latitude', target: 'Gjerësia gjeografike' },
    { source: 'Longitude', target: 'Gjatësia gjeografike' },
    { source: 'Default color', target: 'Ngjyra e paracaktuar' },
    { source: 'not specified', target: 'nuk është përcaktuar' },
    { source: 'Sign using your finger or pointer', target: 'Nënshkruani duke përdorur gishtin ose shënuesin' },

    // List components
    { source: 'Filter', target: 'Filtro' },
    { source: 'Filter by field', target: 'Filtro sipas fushës' },
    { source: 'Filter by...', target: 'Filtro sipas...' },
    { source: 'Back', target: 'Kthehu' },
    { source: 'Back to {0} fields', target: 'Kthehu te fushat {0}' },
    { source: 'Choose {0} from list', target: 'Zgjidhni {0} nga lista' },
    { source: '{0} fields', target: 'fushat {0}' },
    { source: '{0} relationships', target: '{0} marrëdhëniet' },
    { source: 'Aggregate {0}', target: 'Agregati {0}' },
    { source: 'No fields to select', target: 'Nuk ka fusha për të zgjedhur' },
    { source: 'Enter value...', target: 'Vendosni vlerën...' },
    { source: 'Exclude', target: 'Përjashto' },
    { source: 'Actions', target: 'Veprimet' },
    { source: 'Search', target: 'Kërko' },
    { source: 'Sort 1 → 9', target: 'Rendit 1 → 9' },
    { source: 'Sort 9 → 1', target: 'Rendit 9 → 1' },
    { source: 'Sort A → Z', target: 'Rendit A → Z' },
    { source: 'Sort Z → A', target: 'Rendit Z → A' },
    { source: 'Refresh automatically', target: 'Rifresko automatikisht' },
    { source: 'All', target: 'Të gjitha' },
    { source: 'Selected', target: 'Të zgjedhura' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'Për fat të keq, asnjë {0} që përputhet me kërkesën tuaj nuk u gjet'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'Po marrim {0}, ju lutem prisni...' },
    { source: 'Add filter', target: 'Shto filtër' },
    { source: 'Delete this filter', target: 'Fshi këtë filtër' },
    { source: 'Toggle ordering', target: 'Ndërro renditjen' },
    { source: 'Not configured', target: 'Nuk është konfiguruar' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'Për fat të keq, ky komponent nuk është konfiguruar ende'
    },
    { source: 'records', target: 'regjistrime' },
    { source: '{0} items', target: '{0} artikuj' },

    // Menu
    { source: 'Users & Teams', target: 'Përdoruesit & Ekipet' },
    { source: 'Billing', target: 'Faturimi' },
    { source: 'Billing & Plans', target: 'Faturimi & Planet' },
    { source: 'API keys', target: 'Çelësat API' },
    { source: 'Dark Mode', target: 'Modaliteti i errët' },
    { source: 'Light Mode', target: 'Modaliteti i ndriçuar' },
    { source: 'Disable Staff', target: 'Çaktivizo Stafin' },
    { source: 'Enable Staff', target: 'Aktivizo Stafin' },
    { source: 'Manage Templates', target: 'Menaxho Shabllonet' },
    { source: 'Logout', target: 'Dil' },
    { source: 'Activity Log', target: 'Regjistrimi i Aktivitetit' },
    { source: 'Collaborations', target: 'Bashkëpunimet' },
    { source: 'Open Visual Builder', target: 'Hap Ndërtuesin Vizual' },

    // Filters
    { source: 'equals', target: 'barabartë me' },
    { source: 'does not equal', target: 'nuk është barabartë me' },
    { source: '{0} equals {1}', target: '{0} barabartë me {1}' },
    { source: '{0} does not equal {1}', target: '{0} nuk është barabartë me {1}' },

    { source: 'contains', target: 'përmban' },
    { source: 'does not contain', target: 'nuk përmban' },
    { source: '{0} contains {1}', target: '{0} përmban {1}' },
    { source: '{0} not contains {1}', target: '{0} nuk përmban {1}' },

    { source: 'starts with', target: 'fillon me' },
    { source: 'does not start with', target: 'nuk fillon me' },
    { source: '{0} starts with {1}', target: '{0} fillon me {1}' },
    { source: '{0} does not start with {1}', target: '{0} nuk fillon me {1}' },

    { source: 'ends with', target: 'përfundon me' },
    { source: 'does not end with', target: 'nuk përfundon me' },
    { source: '{0} ends with {1}', target: '{0} përfundon me {1}' },
    { source: '{0} does not end with {1}', target: '{0} nuk përfundon me {1}' },

    { source: 'greater than', target: 'më i madh se' },
    { source: 'is not greater than', target: 'nuk është më i madh se' },
    { source: '{0} is greater than {1}', target: '{0} është më i madh se {1}' },
    { source: '{0} not greater than {1}', target: '{0} nuk është më i madh se {1}' },

    { source: 'greater than or equals', target: 'më i madh ose barabartë me' },
    { source: 'is not greater than or equals', target: 'nuk është më i madh ose barabartë me' },
    { source: '{0} is greater than or equals {1}', target: '{0} është më i madh ose barabartë me {1}' },
    { source: '{0} is not greater than or equals {1}', target: '{0} nuk është më i madh ose barabartë me {1}' },

    { source: 'less than', target: 'më i vogël se' },
    { source: 'is not less than', target: 'nuk është më i vogël se' },
    { source: '{0} is less than {1}', target: '{0} është më i vogël se {1}' },
    { source: '{0} is not less than {1}', target: '{0} nuk është më i vogël se {1}' },

    { source: 'less than or equals', target: 'më i vogël ose barabartë me' },
    { source: 'is not less than or equals', target: 'nuk është më i vogël ose barabartë me' },
    { source: '{0} is less than or equals {1}', target: '{0} është më i vogël ose barabartë me {1}' },
    { source: '{0} is not less than or equals {1}', target: '{0} nuk është më i vogël ose barabartë me {1}' },

    { source: 'one of', target: 'një nga' },
    { source: 'is one of', target: 'është një nga' },
    { source: 'is not one of', target: 'nuk është një nga' },
    { source: '{0} is one of {1}', target: '{0} është një nga {1}' },
    { source: '{0} is not one of {1}', target: '{0} nuk është një nga {1}' },

    { source: 'is null', target: 'është null' },
    { source: 'is not null', target: 'nuk është null' },
    { source: '{0} is null', target: '{0} është null' },
    { source: '{0} is not null', target: '{0} nuk është null' },

    { source: 'is future', target: 'është në të ardhmen' },
    { source: 'in the future', target: 'në të ardhmen' },
    { source: 'is not in the future', target: 'nuk është në të ardhmen' },
    { source: '{0} is in the future', target: '{0} është në të ardhmen' },
    { source: '{0} is not in the future', target: '{0} nuk është në të ardhmen' },

    { source: 'is past', target: 'është në të kaluarën' },
    { source: 'in the past', target: 'në të kaluarën' },
    { source: 'is not in the past', target: 'nuk është në të kaluarën' },
    { source: '{0} is in the past', target: '{0} është në të kaluarën' },
    { source: '{0} is not in the past', target: '{0} nuk është në të kaluarën' },

    { source: 'is Today', target: 'është sot' },
    { source: 'today', target: 'sot' },
    { source: 'is not today', target: 'nuk është sot' },
    { source: '{0} is today', target: '{0} është sot' },
    { source: '{0} is not today', target: '{0} nuk është sot' },

    { source: 'is Yesterday', target: 'është dje' },
    { source: 'yesterday', target: 'dje' },
    { source: 'is not yesterday', target: 'nuk është dje' },
    { source: '{0} is yesterday', target: '{0} është dje' },
    { source: '{0} is not yesterday', target: '{0} nuk është dje' },

    { source: 'is Last Week', target: 'është Javën e Kaluar' },
    { source: 'last week', target: 'javën e kaluar' },
    { source: 'is not last week', target: 'nuk është javën e kaluar' },
    { source: '{0} is last week', target: '{0} është javën e kaluar' },
    { source: '{0} is not last week', target: '{0} nuk është javën e kaluar' },

    { source: 'is Last Month', target: 'është Muajin e Kaluar' },
    { source: 'last month', target: 'muajin e kaluar' },
    { source: 'is not last month', target: 'nuk është muajin e kaluar' },
    { source: '{0} is last month', target: '{0} është muajin e kaluar' },
    { source: '{0} is not last month', target: '{0} nuk është muajin e kaluar' },

    { source: 'is Last Quarter', target: 'është Tremujorin e Kaluar' },
    { source: 'last quarter', target: 'tremujorin e kaluar' },
    { source: 'is not last quarter', target: 'nuk është tremujorin e kaluar' },
    { source: '{0} is last quarter', target: '{0} është tremujorin e kaluar' },
    { source: '{0} is not last quarter', target: '{0} nuk është tremujorin e kaluar' },

    { source: 'is Last Year', target: 'është Vitin e Kaluar' },
    { source: 'last year', target: 'vitin e kaluar' },
    { source: 'is not last year', target: 'nuk është vitin e kaluar' },
    { source: '{0} is last year', target: '{0} është vitin e kaluar' },
    { source: '{0} is not last year', target: '{0} nuk është vitin e kaluar' },

    { source: 'is Last X Days', target: 'është në {X} Ditët e Kalura' },
    { source: 'last X days', target: 'në {X} ditët e kalura' },
    { source: 'is not last X days', target: 'nuk është në {X} ditët e kalura' },
    { source: '{0} is last {1} days', target: '{0} është në {1} ditët e kalura' },
    { source: '{0} is not last {1} days', target: '{0} nuk është në {1} ditët e kalura' },

    { source: 'is Current Week', target: 'është Java Aktuale' },
    { source: 'current week', target: 'java aktuale' },
    { source: 'is not current week', target: 'nuk është java aktuale' },
    { source: '{0} is current week', target: '{0} është java aktuale' },
    { source: '{0} is not current week', target: '{0} nuk është java aktuale' },

    { source: 'is Current Month', target: 'është Muaji Aktual' },
    { source: 'current month', target: 'muaji aktual' },
    { source: 'is not current month', target: 'nuk është muaji aktual' },
    { source: '{0} is current month', target: '{0} është muaji aktual' },
    { source: '{0} is not current month', target: '{0} nuk është muaji aktual' },

    { source: 'is Current Quarter', target: 'është Tremujori Aktual' },
    { source: 'current quarter', target: 'tremujori aktual' },
    { source: 'is not current quarter', target: 'nuk është tremujori aktual' },
    { source: '{0} is current quarter', target: '{0} është tremujori aktual' },
    { source: '{0} is not current quarter', target: '{0} nuk është tremujori aktual' },

    { source: 'is Current Year', target: 'është Viti Aktual' },
    { source: 'current year', target: 'viti aktual' },
    { source: 'is not current year', target: 'nuk është viti aktual' },
    { source: '{0} is current year', target: '{0} është viti aktual' },
    { source: '{0} is not current year', target: '{0} nuk është viti aktual' },

    { source: 'is Previous Week', target: 'është Java e Kaluar' },
    { source: 'previous week', target: 'java e kaluar' },
    { source: 'is not previous week', target: 'nuk është java e kaluar' },
    { source: '{0} is previous week', target: '{0} është java e kaluar' },
    { source: '{0} is not previous week', target: '{0} nuk është java e kaluar' },

    { source: 'is Previous Month', target: 'është Muaji i Kaluar' },
    { source: 'previous month', target: 'muaji i kaluar' },
    { source: 'is not previous month', target: 'nuk është muaji i kaluar' },
    { source: '{0} is previous month', target: '{0} është muaji i kaluar' },
    { source: '{0} is not previous month', target: '{0} nuk është muaji i kaluar' },

    { source: 'is Previous Quarter', target: 'është Tremujori i Kaluar' },
    { source: 'previous quarter', target: 'tremujori i kaluar' },
    { source: 'is not previous quarter', target: 'nuk është tremujori i kaluar' },
    { source: '{0} is previous quarter', target: '{0} është tremujori i kaluar' },
    { source: '{0} is not previous quarter', target: '{0} nuk është tremujori i kaluar' },

    { source: 'is Previous Year', target: 'është Viti i Kaluar' },
    { source: 'previous year', target: 'viti i kaluar' },
    { source: 'is not previous year', target: 'nuk është viti i kaluar' },
    { source: '{0} is previous year', target: '{0} është viti i kaluar' },
    { source: '{0} is not previous year', target: '{0} nuk është viti i kaluar' },

    { source: 'is Previous X Days', target: 'është në {X} Ditët e Pashkuara' },
    { source: 'previous X days', target: 'në {X} ditët e pashkuara' },
    { source: 'is not previous X days', target: 'nuk është në {X} ditët e pashkuara' },
    { source: '{0} is previous {1} days', target: '{0} është në {1} ditët e pashkuara' },
    { source: '{0} is not previous {1} days', target: '{0} nuk është në {1} ditët e pashkuara' },

    { source: 'is empty', target: 'është bosh' },
    { source: 'is not empty', target: 'nuk është bosh' },
    { source: '{0} is empty', target: '{0} është bosh' },
    { source: '{0} is not empty', target: '{0} nuk është bosh' },

    { source: 'covered by', target: 'mbuluar nga' },
    { source: 'is not covered by', target: 'nuk mbulohet nga' },
    { source: '{0} covered by {1}', target: '{0} mbuluar nga {1}' },
    { source: '{0} is not covered by {1}', target: '{0} nuk mbulohet nga {1}' },

    // Activity log
    { source: 'No activities found', target: 'Nuk u gjetën veprime' },
    {
      source: 'Start to working with data to log activities.',
      target: 'Filloni të punoni me të dhënat për të regjistruar veprimet.'
    },
    { source: 'All Activity', target: 'Të gjitha veprimet' },
    { source: 'Create Record', target: 'Krijo Regjistrimin' },
    { source: 'Update Record', target: 'Përditëso Regjistrimin' },
    { source: 'Delete Record', target: 'Fshi Regjistrimin' },
    { source: 'All Members', target: 'Të gjithë anëtarët' },

    // Collaboration
    { source: 'Timeline', target: 'Vija kohore' },
    { source: 'Messages', target: 'Mesazhet' },
    { source: 'Activity', target: 'Aktiviteti' },
    { source: 'Start chatting with your team', target: 'Filloni të bisedoni me ekipin tuaj' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'Merrni një mesazh për faqen aktuale për të ndjekur informacionin e rëndësishëm.'
    },
    { source: 'Your Message', target: 'Mesazhi juaj' },
    { source: 'Send', target: 'Dërgo' },

    // Share
    { source: 'Invite members', target: 'Fto anëtarët' },
    { source: 'Public share', target: 'Ndaje publikisht' },
    { source: 'Sign Up', target: 'Regjistrohu' },
    { source: 'Members', target: 'Anëtarët' },
    { source: 'Invite with Email', target: 'Fto me Email' },
    { source: 'Invite someone...', target: 'Ftoni dikë...' },
    { source: 'Send Invite', target: 'Dërgo Ftesë' },
    {
      source: 'Limit access to your data by user properties',
      target: 'Kufizo qasjen te të dhënat tuaja nëpërmjet pronave të përdoruesit'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: 'Shkruani emailin e përdoruesit që dëshironi të ftoni për të bashkëpunuar.'
    },
    { source: 'Copy', target: 'Kopjo' },
    { source: 'Invite with Link', target: 'Fto me Lidhje' },
    { source: 'Remove link', target: 'Hiq lidhjen' },
    { source: 'Add Invite Link', target: 'Shto Lidhjen e Ftesës' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'Çdokush në internet me këtë lidhje do të jetë në gjendje të bashkohet me ekipin e zgjedhur.'
    },
    { source: 'Pending Invites', target: 'Ftesat në Pritje' },
    { source: 'Cancel invite', target: 'Anulo ftesën' },
    { source: 'Active Members', target: 'Anëtarët Aktiv' },
    { source: 'Remove member', target: 'Hiq anëtarin' },
    { source: 'You are setting sharing for the current page', target: 'Po vendosni ndarjen për faqen aktuale' },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'Po vendosni ndarjen për të gjitha faqet e Aplikacionit tuaj.'
    },
    { source: 'Public access link', target: 'Lidhja e aksesit publik' },
    { source: 'Updating public access...', target: 'Duke azhurnuar hyrjen publike...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'Çdokush me këtë lidhje do të jetë në gjendje të shohë faqen aktuale. Në këtë mënyrë, mund të integroni faqen aktuale në një faqe tjetër interneti.'
    },
    { source: 'Embed code (IFRAME)', target: 'Integroni kodin (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: 'Ngjisni këtë kod në kodin HTML të faqes tuaj ku dëshironi që faqja aktuale të shfaqet.'
    },
    { source: 'link', target: 'lidhje' },
    { source: 'invited', target: 'ftuar' },
    { source: 'Choose Team', target: 'Zgjidhni Ekipin' },
    { source: 'App Teams', target: 'Ekipet në Aplikacion' },
    { source: 'Built-In Teams', target: 'Ekipet e Integruara' },
    { source: 'Clear Team', target: 'Pastro Ekipin' },
    {
      source: 'Can build application and modify data',
      target: 'Mund të ndërtojë aplikacionin dhe të modifikojë të dhënat'
    },
    { source: 'Can modify data in application', target: 'Mund të modifikojë të dhënat në aplikacion' },
    { source: 'Can only view data without modification', target: 'Mund të shikojë vetëm të dhënat pa modifikime' },
    { source: 'Add Team', target: 'Shto Ekip' },
    { source: 'Edit Team', target: 'Ndrysho Ekipin' },
    { source: 'Adding Team', target: 'Duke shtuar Ekip' },
    {
      source: 'Keep control over who has access to current App',
      target: 'Merrni kontroll mbi atë që ka akses në Aplikacionin aktual'
    },
    { source: 'Enter Team Name', target: 'Shkruani Emrin e Ekipit' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'Shkruani emrin e ekipit, p.sh: Mbështetje, Shitje, Marketing, etj.'
    },
    { source: 'Add a new member to this team.', target: 'Shtoni një anëtar të ri në këtë ekip.' },
    { source: 'Invite new member', target: 'Fto anëtar të ri' },
    { source: 'User', target: 'Përdorues' },
    { source: 'Date Added', target: 'Data e Shtimit' },
    { source: 'You', target: 'Ju' },
    { source: 'Edit', target: 'Ndrysho' },
    { source: 'No users in this team', target: 'Nuk ka përdorues në këtë ekip' },
    { source: 'Page Permissions', target: 'Lejet e Faqes' },
    { source: 'App Permissions', target: 'Lejet e Aplikacionit' },
    { source: 'Properties', target: 'Pronat' },
    { source: 'Page name', target: 'Emri i Faqes' },
    { source: 'Access', target: 'Aksesi' },
    { source: 'Full Access', target: 'Akses i Plotë' },
    { source: 'Read Only', target: 'Vetëm Lexim' },
    { source: 'No Access', target: 'Pa Akses' },
    { source: 'Read', target: 'Lexim' },
    { source: 'Update', target: 'Përditëso' },
    { source: 'Write', target: 'Shkruaj' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'Fshi' },
    { source: 'Custom Access', target: 'Akses i Përshtatur' },
    { source: 'Read, create, update and delete data', target: 'Lexo, krijo, përditëso dhe fshi të dhëna' },
    {
      source: 'Choose allowed operations granularly',
      target: 'Zgjidhni operacionet e lejuara në mënyrë të hollësishme'
    },
    { source: 'Without any access to data', target: 'Pa asnjë akses në të dhëna' },
    { source: 'Name', target: 'Emri' },
    { source: 'Active', target: 'Aktiv' },
    { source: 'Settings', target: 'Cilësimet' },
    { source: 'Members and Teams', target: 'Anëtarët dhe Ekipet' },
    { source: 'App Builder', target: 'Ndërtuesi i Aplikacioneve' },
    { source: 'Collection Permissions', target: 'Lejet e Koleksioneve' },
    { source: "Grant permissions to app's collection", target: 'Jepni leje për koleksionin e aplikacionit' },
    { source: 'Collection', target: 'Koleksioni' },
    {
      source: 'Limit access to your data by team properties',
      target: 'Kufizo qasjen te të dhënat tuaja nëpërmjet pronave të ekipit'
    },
    { source: 'Save Team', target: 'Ruaj Ekipin' },
    { source: 'Create Team', target: 'Krijo Ekipin' },
    { source: 'Value', target: 'Vlera' },
    { source: 'No properties specified', target: 'Pa prona të specifikuara' },

    // Navigation
    { source: 'Current App', target: 'Aplikacioni Aktual' },
    { source: 'Home', target: 'Kryefaqja' },

    // Profile
    {
      source: 'We are fetching user data, please, wait...',
      target: 'Po shikojmë të dhënat e përdoruesit, ju lutem prisni...'
    },
    { source: 'Profile Settings', target: 'Konfigurimet e Profilit' },
    { source: 'Basic information about your account.', target: 'Informacioni themelor për llogarinë tuaj.' },
    { source: 'Photo', target: 'Foto' },
    { source: 'your photo', target: 'fotoja juaj' },
    { source: 'Change', target: 'Ndrysho' },
    { source: 'Upload', target: 'Ngarko' },
    { source: 'Photo was successfully updated', target: 'Fotoja u azhurnua me sukses' },
    { source: 'Photo was successfully deleted', target: 'Fotoja u fshi me sukses' },
    { source: 'First Name', target: 'Emri' },
    { source: 'Last Name', target: 'Mbiemri' },
    { source: 'Your Email', target: 'Emaili juaj' },
    { source: 'Email Change', target: 'Ndryshimi i Emailit' },
    { source: 'New Email', target: 'Email i Ri' },
    { source: 'Change Email', target: 'Ndrysho Email' },
    { source: 'Check your inbox', target: 'Kontrolloni kutinë tuaj të postës' },
    { source: 'Confirmation Email was sent to {0}', target: 'Emaili i Konfirmimit u dërgua tek {0}' },
    { source: 'Changing Email failed', target: 'Ndryshimi i Emailit dështoi' },
    { source: 'Password Change', target: 'Ndryshimi i Fjalëkalimit' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target:
        'Një fjalëkalim duhet të jetë mjaftueshëm i fortë për të mbrojtur llogarinë tuaj, prandaj bëjeni atë të paktën 12 karaktere të gjatë.'
    },
    { source: 'Current Password', target: 'Fjalëkalimi Aktual' },
    { source: 'New Password', target: 'Fjalëkalimi i Ri' },
    { source: 'Confirm New Password', target: 'Konfirmo Fjalëkalimin e Ri' },
    { source: 'Change Password', target: 'Ndrysho Fjalëkalimin' },
    {
      source: 'Current password was successfully updated, all other sessions will be logged out shortly',
      target: 'Fjalëkalimi aktual u përditësua me sukses, të gjitha sesionet e tjera do të dalin së shpejti'
    },
    { source: 'Saving current password failed', target: 'Ruajtja e fjalëkalimit aktual dështoi' },
    { source: 'Short password', target: 'Fjalëkalim i shkurtër' },
    { source: "Passwords don't match", target: 'Fjalëkalimet nuk përputhen' },
    { source: 'Personal Preferences', target: 'Preferencat Personale' },
    { source: 'Language', target: 'Gjuha' },
    { source: 'Timezone', target: 'Zona Kohore' },
    { source: 'Current time in {0} is', target: 'Koha aktuale në {0} është' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'Personalizoni preferencat shtesë për llogarinë tuaj.'
    },
    { source: 'News & Proposals', target: 'Lajme dhe Propozime' },
    {
      source: 'Subscribe to our updates and proposals.',
      target: 'Abonohuni në përditësimet dhe propozimet tona.'
    },
    { source: 'Save changes', target: 'Ruaj ndryshimet' },
    { source: 'Current user was successfully updated', target: 'Përdoruesi aktual u azhurnua me sukses' },
    { source: 'Saving current user failed', target: 'Ruajtja e përdoruesit aktual dështoi' },

    // My Apps
    { source: 'Type to search...', target: 'Shkruani për të kërkuar...' },
    { source: 'My Apps', target: 'Aplikacionet e Mia' },
    { source: 'New App', target: 'Aplikacion i Ri' },
    { source: 'Builder', target: 'Ndërtuesi' },
    { source: 'App', target: 'Aplikacion' },
    { source: 'continue install', target: 'vazhdo instalimin' },
    { source: 'Open builder', target: 'Hap Ndërtuesin' },
    { source: 'View published', target: 'Shiko të publikuarat' },
    { source: 'Delete App', target: 'Fshi Aplikacionin' },
    { source: 'Start from a template', target: 'Fillo nga një shabllon' },
    { source: 'Preview', target: 'Parapamje' },
    { source: 'Contact Support', target: 'Kontakto Mbështetjen' },
    { source: 'Documentation', target: 'Dokumentacioni' },
    { source: 'Feature Requests', target: 'Kërkesat për Karakteristika' },
    { source: 'See What’s New', target: 'Shiko Çfarë është e Re' },
    { source: 'Search templates...', target: 'Kërko shabllonet...' },
    { source: 'any', target: 'çdo' },
    { source: 'more', target: 'më shumë' },
    { source: 'Choose Data Source', target: 'Zgjidh Burimin e të Dhënave' },
    { source: 'works with 30+ data sources', target: 'punon me mbi 30 burime të dhënash' },
    { source: 'Use this template', target: 'Përdor këtë shabllon' },
    { source: 'stores data in Jet Tables', target: 'ruan të dhëna në Jet Tables' },
    { source: 'New Data', target: 'Të Dhëna të Reja' },
    { source: 'using {0}', target: 'duke përdorur {0}' },
    { source: "Can't find resource you're looking for?", target: 'A nuk mund të gjeni burimin që po kërkoni?' },
    { source: 'Admin Panel', target: 'Paneli i Administratorit' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'Lista, krijimi dhe përditësimi (CRUD) i operacioneve mbi të dhënat tuaja'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target:
        'Ndërto një panel administrimi të personalizuar bazuar në çdo bazë të dhënash, aplikacione dhe API si Stripe, Twilio dhe GraphQL.'
    },
    { source: 'All Integrations', target: 'Të gjitha Integrimet' },
    { source: 'Databases', target: 'Bazat e të Dhënave' },
    { source: 'APIs', target: 'APIs' },
    { source: 'Frameworks', target: 'Kornizat' },
    { source: 'Storages', target: 'Ruajtjet' },

    // Sign In
    { source: 'Good morning', target: 'Mirëmëngjes' },
    { source: 'Good afternoon', target: 'Mirëdita' },
    { source: 'Good evening', target: 'Mirëmbrëma' },
    { source: 'Sign In', target: 'Hyr' },
    { source: 'Welcome Back.', target: 'Mirë se vini përsëri.' },
    { source: 'Sign in with {0}', target: 'Hyr me {0}' },
    { source: 'or login with', target: 'ose hyr me' },
    { source: 'Enter E-mail', target: 'Futni E-mail' },
    { source: 'Enter password', target: 'Futni fjalëkalimin' },
    { source: 'Login', target: 'Hyr' },
    { source: 'Create new account', target: 'Krijo llogari të re' },
    { source: 'Forgot my password', target: 'Harrova fjalëkalimin' },
    { source: 'required', target: 'e kërkuar' },
    { source: 'incorrect Email', target: 'Email i pasaktë' },
    { source: 'Minimum password length {0}', target: 'Gjatësia minimale e fjalëkalimit {0}' },
    { source: 'Unable to Sign In', target: 'Nuk mund të hyni' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'Filloni <span class="auth-form__accent">Falas sot</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target: 'Nuk kërkohet kartë. Do të merrni të gjitha funksionet e avancuara falas gjatë provës 14-ditore PRO.'
    },
    { source: 'Enter First Name', target: 'Shkruani Emrin' },
    { source: 'Enter Last Name (optional)', target: 'Shkruani Mbiemrin (opsional)' },
    { source: 'Enter Email', target: 'Shkruani Email' },
    { source: 'Password', target: 'Fjalëkalimi' },
    { source: 'Repeat Password', target: 'Përsërit fjalëkalimin' },
    {
      source: 'By signing in you’re okay with our',
      target: 'Duke hyrë ju pajtoheni me tonën'
    },
    {
      source: 'Creating an account means you’re okay with our',
      target: 'Krijimi i një llogarie nënkupton që ju pranoni tonën'
    },
    { source: 'Terms of Service', target: 'Kushtet e Shërbimit' },
    { source: 'Privacy Policy', target: 'Politika e Privatësisë' },
    { source: 'and', target: 'dhe' },
    { source: 'Create account', target: 'Krijo llogari' },
    { source: 'Already have an account', target: 'Keni tashmë një llogari' },
    { source: 'Unable to Sign Up', target: 'Nuk mund të regjistroheni' },

    // Restore password
    { source: 'Reset your password', target: 'Rivendosni fjalëkalimin tuaj' },
    { source: 'Email Address', target: 'Adresa e Emailit' },
    { source: 'Reset password', target: 'Rivendos fjalëkalimin' },
    { source: 'Return to Sign In', target: 'Kthehu te Hyrja' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'Ju lutemi kontrolloni Emailin tuaj – <strong>{0}</strong>. Ne kemi dërguar lidhjen e vlerësimit që duhet të ndiqni për të ndryshuar fjalëkalimin tuaj.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be at least 8 characters.',
      target:
        'Pothuajse gati, thjesht shtypni fjalëkalimin tuaj të ri më poshtë. <br>Duhet të jetë së paku 8 karaktere.'
    },
    { source: 'Reset password & Sign In', target: 'Rivendos fjalëkalimin & Hyr' },
    { source: 'Unable to Send Code', target: 'Nuk mund të dërgohet kodi' },
    { source: 'Unable to Change Password', target: 'Nuk mund të ndryshohet fjalëkalimi' },

    // Email Verification
    { source: 'Email Verification', target: 'Verifikimi i Emailit' },
    { source: 'Resend verification code', target: 'Ridërgo kodin e verifikimit' },
    { source: 'Verification email sent', target: 'Emaili i verifikimit u dërgua' },
    { source: 'Your Email is now verified', target: 'Emaili juaj tani është i verifikuar' },
    { source: 'Request is incorrect', target: 'Kërkesa është e pasaktë' },

    // Invites
    {
      source: 'Join <span class="auth-form__accent">{0}</span>',
      target: 'Bashkohu <span class="auth-form__accent">{0}</span>'
    },
    {
      source: '<strong>{0}</strong> has invited you to join <strong>{1}</strong>',
      target: '<strong>{0}</strong> ju ka ftuar të bashkoheni me <strong>{1}</strong>'
    },
    {
      source: 'Someone has invited you to join <strong>{0}</strong>',
      target: 'Dikush ju ka ftuar të bashkoheni me <strong>{0}</strong>'
    },
    {
      source: 'You are joining <strong>{0}</strong> using invite link',
      target: 'Ju po bashkoheni me <strong>{0}</strong> duke përdorur lidhjen e ftesës'
    },
    { source: 'Join', target: 'Bashkohu' },
    { source: 'Go to home page', target: 'Shko te faqja kryesore' },
    { source: 'Invite link is wrong', target: 'Lidhja e ftesës është e gabuar' },
    {
      source:
        'Looks like your invitation link has expired or maybe you have followed the wrong link. Please try to ask to invite your again.',
      target:
        'Duket se lidhja juaj e ftesës ka skaduar ose ndoshta keni ndjekur lidhjen e gabuar. Ju lutemi, përpiquni të kërkoni të ftoheni përsëri.'
    },
    {
      source: 'Unfortunately we failed to load information about this invitation',
      target: 'Për fat të keq nuk arritëm të ngarkojmë informacionin rreth kësaj ftese'
    },

    // Users & Teams
    { source: 'Members of {0}', target: 'Anëtarët e {0}' },
    { source: 'How to get started', target: 'Si të filloni' },
    { source: 'Users API', target: 'API për përdoruesit' },
    { source: 'Teams API', target: 'API për ekipët' },
    { source: 'Invite Member', target: 'Fto Anëtarin' },
    { source: 'Add User property', target: 'Shto pronën e përdoruesit' },
    { source: 'Add Team property', target: 'Shto pronën e ekipit' },
    { source: 'Edit property', target: 'Ndrysho pronën' },
    { source: 'Delete property', target: 'Fshi pronën' },
    { source: 'Users', target: 'Përdoruesit' },
    { source: 'Teams', target: 'Ekipët' },
    { source: 'Search members', target: 'Kërko përdoruesit' },
    { source: 'Search teams', target: 'Kërko ekipët' },
    { source: '{0} pages', target: '{0} faqe' },
    { source: 'No members', target: 'Pa anëtarë' }
  ]
};

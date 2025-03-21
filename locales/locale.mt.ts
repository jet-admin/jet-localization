import { Locale } from './locale';

export const locale: Locale = {
  name: 'maltese',
  language: 'mt',
  items: [
    // General
    { source: 'Save', target: 'Ħlief' },
    { source: 'Create', target: 'Oħloq' },
    { source: 'Duplicating', target: 'Duplikazzjoni' },
    { source: 'Duplicate', target: 'Duplika' },
    { source: 'Mass Edit', target: 'Editjar tal-Massa' },
    { source: 'Export', target: 'Esporta' },
    { source: 'Import', target: 'Importa' },
    { source: 'Delete', target: 'Ħassar' },
    { source: 'Continue', target: 'Kompli' },
    { source: 'Submit', target: 'Ibgħat' },
    { source: 'Cancel', target: 'Ikkanċella' },
    { source: 'Loading', target: 'Tagħbija' },
    { source: 'Please wait...', target: 'Jekk jogħġbok stenna...' },
    { source: 'Loading failed', target: 'It-Tagħbija Fallela' },
    { source: 'Unknown error', target: 'Żball Mhux Magħruf' },
    { source: 'Add', target: 'Żid' },
    { source: 'or', target: 'jew' },
    { source: 'Hours', target: 'Sigħat' },
    { source: 'Minutes', target: 'Minuti' },
    { source: 'Seconds', target: 'Sekondi' },
    { source: 'Saved', target: 'Iffrankat' },
    { source: 'Error', target: 'Żball' },
    { source: 'Page not found', target: 'Il-Paġna Mhux Misjuba' },
    {
      source: 'The specified address is incorrect, or the page does not exist',
      target: 'L-indirizz speċifikat huwa żbaljat, jew il-paġna ma teżistix'
    },
    { source: 'Not allowed', target: 'Mhux Permess' },
    {
      source: "You don't have permissions to access this page",
      target: 'M’għandekx permessi biex taċċessa din il-paġna'
    },
    { source: 'Are you sure want to close?', target: 'Żgur li trid tagħlaq?' },
    { source: 'Close', target: 'Agħlaq' },

    // Actions
    { source: 'Action executed', target: 'Azzjoni Esegwita' },
    { source: 'Action executed successfully', target: 'Azzjoni Esegwita b’Suċċess' },
    { source: 'Action failed', target: 'Azzjoni Fallela' },
    {
      source: "You don't have permission for run this operation",
      target: 'M’għandekx permess biex tmexxi din l-operazzjoni'
    },
    { source: 'Specify parameters', target: 'Speċifika l-parametri' },
    { source: 'Executing action', target: 'Eżekuzzjoni ta’ Azzjoni' },
    { source: 'You are executing <strong>{0}</strong>', target: 'Inti qed teżegwixxi <strong>{0}</strong>' },
    { source: 'Please fill in the parameters below.', target: 'Jekk jogħġbok imla l-parametri hawn taħt.' },
    { source: 'Execute', target: 'Esegwixxi' },
    { source: 'Executing', target: 'Teżegwixxi' },
    { source: 'Finished', target: 'Finit' },
    { source: 'Done', target: 'Sar' },

    // Export
    { source: 'Records Export', target: 'Esportazzjoni ta’ Reġistrazzjonijiet' },
    { source: 'Downloading records data as a file', target: 'Niżżel id-dejta ta’ reġistrazzjonijiet bħala fajl' },
    { source: 'Choose format', target: 'Agħżel il-format' },
    { source: 'Number of exporting records', target: 'Numru ta’ reġistrazzjonijiet esportati' },
    { source: { label: 'Export', context: 'submit' }, target: 'Esporta' },
    { source: 'Exporting', target: 'Esportazzjoni' },
    { source: 'Export completed', target: 'Esportazzjoni lesta' },
    { source: 'Failed to export', target: 'Naqas milli jesporta' },

    // Components
    { source: 'optional', target: 'mhux obbligatorju' },
    { source: 'choose', target: 'agħżel' },
    { source: 'Clear value', target: 'Iċċara il-valur' },
    { source: 'loading...', target: 'tagħbija...' },
    { source: 'Nothing found', target: 'Xejn Mhux Misjub' },
    { source: 'Search...', target: 'Fittex...' },
    { source: 'Enter at least {0} characters', target: 'Daħħal mill-inqas {0} karattri' },
    { source: 'No options', target: 'L-ebda għażla' },
    { source: 'Drop files here or', target: 'Qiegħed il-fajls hawn jew' },
    { source: 'Upload new', target: 'Tella’ ġdid' },
    { source: 'Clear', target: 'Ċar' },
    { source: 'Download', target: 'Niżżel' },
    { source: 'Choose file', target: 'Agħżel il-fajl' },
    { source: 'Choose files', target: 'Agħżel il-fajls' },
    { source: 'Scan with Camera', target: 'Skennja bil-Kamera' },
    { source: 'Scan Image file', target: 'Skennja l-Immaġni' },
    { source: 'Choose camera', target: 'Agħżel il-kamera' },
    { source: 'Stop scanning', target: 'Waqqaf l-iskannjar' },
    { source: 'Scan again', target: 'Skennja mill-ġdid' },
    { source: 'Use this scan', target: 'Uża din l-iskannjar' },
    { source: 'Failed to scan', target: 'Naqas milli jiskennja' },
    {
      source: 'Code failed to scan, please try another image',
      target: 'Il-kodiċi fallela biex jiskennja, jekk jogħġbok ipprova immaġni oħra'
    },
    { source: 'current', target: 'attwali' },
    { source: 'Day', target: 'Jum' },
    { source: 'Week', target: 'Ġimgħa' },
    { source: 'Month', target: 'Xahar' },
    { source: 'Year', target: 'Sena' },
    { source: 'Today', target: 'Illum' },
    { source: 'Daily', target: 'Kuljum' },
    { source: 'Weekly', target: 'Ġimgħatejn' },
    { source: 'Monthly', target: 'Kull xahar' },
    { source: 'Quarterly', target: 'Kull tliet xhur' },
    { source: 'Yearly', target: 'Annwali' },
    { source: 'Hourly', target: 'Kull siegħa' },
    { source: 'Minutely', target: 'Kull minuta' },
    { source: 'Since', target: 'Minn' },
    { source: 'Before', target: 'Qabel' },
    { source: 'Between', target: 'Bejn' },
    { source: 'From date', target: 'Mid-data' },
    { source: 'To date', target: 'Sad-data' },
    { source: 'Coordinates', target: 'Koordinati' },
    { source: 'Latitude', target: 'Latitudni' },
    { source: 'Longitude', target: 'Longitudni' },
    { source: 'Default color', target: 'Kulur Default' },
    { source: 'not specified', target: 'mhux speċifikat' },
    { source: 'Sign using your finger or pointer', target: 'Iffirma billi tuża subgħajk jew pointer' },

    // List components
    { source: 'Filter', target: 'Filtru' },
    { source: 'Filter by field', target: 'Filtru bil-qasam' },
    { source: 'Filter by...', target: 'Filtra bil...' },
    { source: 'Back', target: 'Lura' },
    { source: 'Back to {0} fields', target: 'Lura għal {0} oqsma' },
    { source: 'Choose {0} from list', target: 'Agħżel {0} mill-lista' },
    { source: '{0} fields', target: 'oqsma {0}' },
    { source: '{0} relationships', target: 'relazzjonijiet {0}' },
    { source: 'Aggregate {0}', target: 'Aggregazzjoni {0}' },
    { source: 'No fields to select', target: 'L-ebda oqsma biex tagħżel' },
    { source: 'Enter value...', target: 'Daħħal il-valur...' },
    { source: 'Exclude', target: 'Escludi' },
    { source: 'Actions', target: 'Azzjonijiet' },
    { source: 'Search', target: 'Fittex' },
    { source: 'Sort 1 → 9', target: 'Isortja 1 → 9' },
    { source: 'Sort 9 → 1', target: 'Isortja 9 → 1' },
    { source: 'Sort A → Z', target: 'Isortja A → Z' },
    { source: 'Sort Z → A', target: 'Isortja Z → A' },
    { source: 'Refresh automatically', target: 'Aġġorna awtomatikament' },
    { source: 'All', target: 'Kollha' },
    { source: 'Selected', target: 'Magħżul' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'Sfortunatament, l-ebda {0} jaqbel mal-mistoqsija tiegħek ma nstabet'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'Qegħdin nirkupraw {0}, jekk jogħġbok stenna...' },
    { source: 'Add filter', target: 'Żid filtru' },
    { source: 'Delete this filter', target: 'Ħassar dan il-filtru' },
    { source: 'Toggle ordering', target: 'Biddel l-ordni' },
    { source: 'Not configured', target: 'Mhux kkonfigurat' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'Sfortunatament, dan il-komponent għadu mhux kkonfigurat'
    },
    { source: 'records', target: 'rekords' },
    { source: '{0} items', target: 'oġġetti {0}' },

    // Menu
    { source: 'Users & Teams', target: 'Utenti & Timijiet' },
    { source: 'Billing', target: 'Fatturazzjoni' },
    { source: 'Billing & Plans', target: 'Fatturazzjoni & Pjanijiet' },
    { source: 'API keys', target: 'Apache API ċwievet' },
    { source: 'Dark Mode', target: 'Modalità Mudlama' },
    { source: 'Light Mode', target: 'Modalità Ħafifa' },
    { source: 'Disable Staff', target: 'Diżabilitazzjoni tal-Persuna' },
    { source: 'Enable Staff', target: 'Tħaddem il-Persuna' },
    { source: 'Manage Templates', target: 'Immaniġġja t-Templates' },
    { source: 'Logout', target: 'Oħroġ' },
    { source: 'Activity Log', target: 'Reġistru tal-Attività' },
    { source: 'Collaborations', target: 'Kollaborazzjonijiet' },
    { source: 'Open Visual Builder', target: 'Iftaħ il-Kostruttur Viżiv' },

    // Filters
    { source: 'equals', target: 'jewqilhiex' },
    { source: 'does not equal', target: 'ma joddiħx' },
    { source: '{0} equals {1}', target: '{0} jowqilhiex {1}' },
    { source: '{0} does not equal {1}', target: '{0} ma jowqilhiex {1}' },

    { source: 'contains', target: 'fiha' },
    { source: 'does not contain', target: 'ma fiha' },
    { source: '{0} contains {1}', target: '{0} fiha {1}' },
    { source: '{0} not contains {1}', target: '{0} ma fiha {1}' },

    { source: 'starts with', target: 'jibda b’' },
    { source: 'does not start with', target: 'ma jibdiex b’' },
    { source: '{0} starts with {1}', target: '{0} jibda b’ {1}' },
    { source: '{0} does not start with {1}', target: '{0} ma jibdiex b’ {1}' },

    { source: 'ends with', target: 'jgħaddi b’' },
    { source: 'does not end with', target: 'ma jgħaddiex b’' },
    { source: '{0} ends with {1}', target: '{0} jgħaddi b’ {1}' },
    { source: '{0} does not end with {1}', target: '{0} ma jgħaddiex b’ {1}' },

    { source: 'greater than', target: 'ikbar minn' },
    { source: 'is not greater than', target: 'mhux ikbar minn' },
    { source: '{0} is greater than {1}', target: '{0} huwa ikbar minn {1}' },
    { source: '{0} not greater than {1}', target: '{0} mhux ikbar minn {1}' },

    { source: 'greater than or equals', target: 'ikbar jew ugwali għal' },
    { source: 'is not greater than or equals', target: 'mhux ikbar jew ugwali għal' },
    { source: '{0} is greater than or equals {1}', target: '{0} huwa ikbar jew ugwali għal {1}' },
    { source: '{0} is not greater than or equals {1}', target: '{0} mhux ikbar jew ugwali għal {1}' },

    { source: 'less than', target: 'inqas minn' },
    { source: 'is not less than', target: 'mhux inqas minn' },
    { source: '{0} is less than {1}', target: '{0} huwa inqas minn {1}' },
    { source: '{0} is not less than {1}', target: '{0} mhux inqas minn {1}' },

    { source: 'less than or equals', target: 'inqas jew ugwali għal' },
    { source: 'is not less than or equals', target: 'mhux inqas jew ugwali għal' },
    { source: '{0} is less than or equals {1}', target: '{0} huwa inqas jew ugwali għal {1}' },
    { source: '{0} is not less than or equals {1}', target: '{0} mhux inqas jew ugwali għal {1}' },

    { source: 'one of', target: 'wieħed minn' },
    { source: 'is one of', target: 'huwa wieħed minn' },
    { source: 'is not one of', target: 'mhux wieħed minn' },
    { source: '{0} is one of {1}', target: '{0} huwa wieħed minn {1}' },
    { source: '{0} is not one of {1}', target: '{0} mhux wieħed minn {1}' },

    { source: 'is null', target: 'huwa null' },
    { source: 'is not null', target: 'mhux null' },
    { source: '{0} is null', target: '{0} huwa null' },
    { source: '{0} is not null', target: '{0} mhux null' },

    { source: 'is future', target: 'huwa fil-futur' },
    { source: 'in the future', target: 'fil-futur' },
    { source: 'is not in the future', target: 'mhux fil-futur' },
    { source: '{0} is in the future', target: '{0} huwa fil-futur' },
    { source: '{0} is not in the future', target: '{0} mhux fil-futur' },

    { source: 'is past', target: 'huwa fil-passat' },
    { source: 'in the past', target: 'fil-passat' },
    { source: 'is not in the past', target: 'mhux fil-passat' },
    { source: '{0} is in the past', target: '{0} huwa fil-passat' },
    { source: '{0} is not in the past', target: '{0} mhux fil-passat' },

    { source: 'is Today', target: 'huwa Illum' },
    { source: 'today', target: 'illum' },
    { source: 'is not today', target: 'mhux illum' },
    { source: '{0} is today', target: '{0} huwa illum' },
    { source: '{0} is not today', target: '{0} mhux illum' },

    { source: 'is Yesterday', target: 'huwa Il-bierah' },
    { source: 'yesterday', target: 'il-bieraħ' },
    { source: 'is not yesterday', target: 'mhux il-bieraħ' },
    { source: '{0} is yesterday', target: '{0} huwa il-bieraħ' },
    { source: '{0} is not yesterday', target: '{0} mhux il-bieraħ' },

    { source: 'is Last Week', target: 'huwa l-Ġimgħa li għaddiet' },
    { source: 'last week', target: 'il-ġimgħa li għaddiet' },
    { source: 'is not last week', target: 'mhux l-ġimgħa li għaddiet' },
    { source: '{0} is last week', target: '{0} huwa l-ġimgħa li għaddiet' },
    { source: '{0} is not last week', target: '{0} mhux l-ġimgħa li għaddiet' },

    { source: 'is Last Month', target: 'huwa l-Xahar li għadda' },
    { source: 'last month', target: 'il-xahar li għadda' },
    { source: 'is not last month', target: 'mhux l-xahar li għadda' },
    { source: '{0} is last month', target: '{0} huwa l-xahar li għadda' },
    { source: '{0} is not last month', target: '{0} mhux l-xahar li għadda' },

    { source: 'is Last Quarter', target: 'huwa l-Kwart li għadda' },
    { source: 'last quarter', target: 'l-kwart li għadda' },
    { source: 'is not last quarter', target: 'mhux l-kwart li għadda' },
    { source: '{0} is last quarter', target: '{0} huwa l-kwart li għadda' },
    { source: '{0} is not last quarter', target: '{0} mhux l-kwart li għadda' },

    { source: 'is Last Year', target: 'huwa s-Sena li għaddiet' },
    { source: 'last year', target: 'is-sena li għaddiet' },
    { source: 'is not last year', target: 'mhux s-sena li għaddiet' },
    { source: '{0} is last year', target: '{0} huwa s-sena li għaddiet' },
    { source: '{0} is not last year', target: '{0} mhux s-sena li għaddiet' },

    { source: 'is Last X Days', target: 'huwa l-Aħħar X Jiem' },
    { source: 'last X days', target: 'l-aħħar X jiem' },
    { source: 'is not last X days', target: 'mhux l-Aħħar X Jiem' },
    { source: '{0} is last {1} days', target: '{0} huwa l-Aħħar {1} Jiem' },
    { source: '{0} is not last {1} days', target: '{0} mhux l-Aħħar {1} Jiem' },

    { source: 'is Current Week', target: 'huwa l-Ġimgħa Kurrenti' },
    { source: 'current week', target: 'il-ġimgħa kurrenti' },
    { source: 'is not current week', target: 'mhux l-ġimgħa kurrenti' },
    { source: '{0} is current week', target: '{0} huwa l-ġimgħa kurrenti' },
    { source: '{0} is not current week', target: '{0} mhux l-ġimgħa kurrenti' },

    { source: 'is Current Month', target: 'huwa l-Xahar Kurrenti' },
    { source: 'current month', target: 'ix-xahar kurrenti' },
    { source: 'is not current month', target: 'mhux l-xahar kurrenti' },
    { source: '{0} is current month', target: '{0} huwa l-xahar kurrenti' },
    { source: '{0} is not current month', target: '{0} mhux l-xahar kurrenti' },

    { source: 'is Current Quarter', target: 'huwa l-Kwart Kurrenti' },
    { source: 'current quarter', target: 'il-kwart kurrenti' },
    { source: 'is not current quarter', target: 'mhux l-kwart kurrenti' },
    { source: '{0} is current quarter', target: '{0} huwa l-kwart kurrenti' },
    { source: '{0} is not current quarter', target: '{0} mhux l-kwart kurrenti' },

    { source: 'is Current Year', target: 'huwa s-Sena Kurrenti' },
    { source: 'current year', target: 'is-sena kurrenti' },
    { source: 'is not current year', target: 'mhux s-sena kurrenti' },
    { source: '{0} is current year', target: '{0} huwa s-sena kurrenti' },
    { source: '{0} is not current year', target: '{0} mhux s-sena kurrenti' },

    { source: 'is Previous Week', target: 'huwa l-Ġimgħa Preċedenti' },
    { source: 'previous week', target: 'il-ġimgħa preċedenti' },
    { source: 'is not previous week', target: 'mhux l-ġimgħa preċedenti' },
    { source: '{0} is previous week', target: '{0} huwa l-ġimgħa preċedenti' },
    { source: '{0} is not previous week', target: '{0} mhux l-ġimgħa preċedenti' },

    { source: 'is Previous Month', target: 'huwa l-Xahar Preċedenti' },
    { source: 'previous month', target: 'ix-xahar preċedenti' },
    { source: 'is not previous month', target: 'mhux l-xahar preċedenti' },
    { source: '{0} is previous month', target: '{0} huwa l-xahar preċedenti' },
    { source: '{0} is not previous month', target: '{0} mhux l-xahar preċedenti' },

    { source: 'is Previous Quarter', target: 'huwa l-Kwart Preċedenti' },
    { source: 'previous quarter', target: 'il-kwart preċedenti' },
    { source: 'is not previous quarter', target: 'mhux il-kwart preċedenti' },
    { source: '{0} is previous quarter', target: '{0} huwa l-kwart preċedenti' },
    { source: '{0} is not previous quarter', target: '{0} mhux l-kwart preċedenti' },

    { source: 'is Previous Year', target: 'huwa s-Sena Preċedenti' },
    { source: 'previous year', target: 'is-sena preċedenti' },
    { source: 'is not previous year', target: 'mhux is-sena preċedenti' },
    { source: '{0} is previous year', target: '{0} huwa s-sena preċedenti' },
    { source: '{0} is not previous year', target: '{0} mhux is-sena preċedenti' },

    { source: 'is Previous X Days', target: 'huwa l-Aħħar X Jiem Preċedenti' },
    { source: 'previous X days', target: 'l-aħħar X jiem preċedenti' },
    { source: 'is not previous X days', target: 'mhux l-aħħar X jiem preċedenti' },
    { source: '{0} is previous {1} days', target: '{0} huwa l-aħħar {1} jiem preċedenti' },
    { source: '{0} is not previous {1} days', target: '{0} mhux l-aħħar {1} jiem preċedenti' },

    { source: 'is empty', target: 'huwa vojt' },
    { source: 'is not empty', target: 'mhux vojt' },
    { source: '{0} is empty', target: '{0} huwa vojt' },
    { source: '{0} is not empty', target: '{0} mhux vojt' },

    { source: 'covered by', target: 'kopert minn' },
    { source: 'is not covered by', target: 'mhux kopert minn' },
    { source: '{0} covered by {1}', target: '{0} kopert minn {1}' },
    { source: '{0} is not covered by {1}', target: '{0} mhux kopert minn {1}' },

    // Activity log
    { source: 'No activities found', target: 'L-ebda attività mhix misjuba' },
    {
      source: 'Start to working with data to log activities.',
      target: 'Ibda taħdem mad-dejta biex tirreġistra l-attivitajiet.'
    },
    { source: 'All Activity', target: 'Kollha Attività' },
    { source: 'Create Record', target: 'Oħloq Rekord' },
    { source: 'Update Record', target: 'Aġġorna Rekord' },
    { source: 'Delete Record', target: 'Ħassar Rekord' },
    { source: 'All Members', target: 'Kollha Membri' },

    // Collaboration
    { source: 'Timeline', target: 'Timeline' },
    { source: 'Messages', target: 'Messaġġi' },
    { source: 'Activity', target: 'Attività' },
    { source: 'Start chatting with your team', target: 'Ibda chat mat-tim tiegħek' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'Ħu messaġġ dwar il-paġna attwali biex iżżomm rekord ta’ informazzjoni importanti.'
    },
    { source: 'Your Message', target: 'Il-Messaġġ Tiegħek' },
    { source: 'Send', target: 'Ibgħat' },

    // Share
    { source: 'Invite members', target: 'Stieden Membri' },
    { source: 'Public share', target: 'Kondiviżjoni Pubblika' },
    { source: 'Sign Up', target: 'Irreġistra' },
    { source: 'Members', target: 'Membri' },
    { source: 'Invite with Email', target: 'Stieden bil-Email' },
    { source: 'Invite someone...', target: 'Stieden lil xi ħadd...' },
    { source: 'Send Invite', target: 'Ibgħat Stiedenija' },
    {
      source: 'Limit access to your data by user properties',
      target: 'Limita l-aċċess għad-dejta tiegħek skont il-proprjetajiet tal-utent'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: 'Daħħal l-email tal-utent li tixtieq tistieden biex jikkollabora.'
    },
    { source: 'Copy', target: 'Kopja' },
    { source: 'Invite with Link', target: 'Stieden bil-Link' },
    { source: 'Remove link', target: 'Neħħi l-link' },
    { source: 'Add Invite Link', target: 'Żid il-link ta’ l-Istiedenija' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'Kull min fuq l-internet b’din il-link ikun jista’ jingħaqad mat-tim magħżul.'
    },
    { source: 'Pending Invites', target: 'Stiedenijiet Pendenti' },
    { source: 'Cancel invite', target: 'Ikkanċella l-Istiedenija' },
    { source: 'Active Members', target: 'Membri Attivi' },
    { source: 'Remove member', target: 'Neħħi l-Membru' },
    {
      source: 'You are setting sharing for the current page',
      target: 'Inti qed tattex il-kondiviżjoni għall-paġna attwali'
    },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'Inti qed tattex il-kondiviżjoni għall-paġni kollha tal-App tiegħek.'
    },
    { source: 'Public access link', target: 'Link ta’ Aċċess Pubbliku' },
    { source: 'Updating public access...', target: 'Taġġorna l-aċċess pubbliku...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'Kull min għandu din il-link jista’ jara l-paġna attwali. B’dan il-mod tista’ wkoll tiddaħħal il-paġna attwali f’websajt oħra.'
    },
    { source: 'Embed code (IFRAME)', target: 'Kif teddaħħal kodiċi (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target:
        'Ikkopja u pjegża dan il-kodiċi fil-kodiċi HTML tal-websajt tiegħek fejn tixtieq li tiddaħħal il-paġna attwali.'
    },
    { source: 'link', target: 'link' },
    { source: 'invited', target: 'mistieden' },
    { source: 'Choose Team', target: 'Agħżel Tim' },
    { source: 'App Teams', target: 'Timijiet tal-App' },
    { source: 'Built-In Teams', target: 'Timijiet Inkorprati' },
    { source: 'Clear Team', target: 'Iċara t-Tim' },
    { source: 'Can build application and modify data', target: 'Jista’ jibni applikazzjoni u jimmodifika d-dejta' },
    { source: 'Can modify data in application', target: 'Jista’ jimmodifika d-dejta fl-applikazzjoni' },
    { source: 'Can only view data without modification', target: 'Jista’ jara biss id-dejta mingħajr modifikazzjoni' },
    { source: 'Add Team', target: 'Żid Tim' },
    { source: 'Edit Team', target: 'Editja t-Tim' },
    { source: 'Adding Team', target: 'Żżid Tim' },
    {
      source: 'Keep control over who has access to current App',
      target: 'Żżomm kontroll fuq min għandu aċċess għall-App attwali'
    },
    { source: 'Enter Team Name', target: 'Daħħal l-Isem tat-Tim' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'Indika l-isem tat-tim, eż: Appoġġ, Bejgħ, Marketing, eċċ.'
    },
    { source: 'Add a new member to this team.', target: 'Żid membru ġdid ma’ dan it-tim.' },
    { source: 'Invite new member', target: 'Stieden membru ġdid' },
    { source: 'User', target: 'Utent' },
    { source: 'Date Added', target: 'Data miżjuda' },
    { source: 'You', target: 'Inti' },
    { source: 'Edit', target: 'Editja' },
    { source: 'No users in this team', target: 'L-ebda utenti f’din it-tim' },
    { source: 'Page Permissions', target: 'Permessi tal-Paġna' },
    { source: 'App Permissions', target: 'Permessi tal-App' },
    { source: 'Properties', target: 'Proprjetajiet' },
    { source: 'Page name', target: 'Isem tal-Paġna' },
    { source: 'Access', target: 'Aċċess' },
    { source: 'Full Access', target: 'Aċċess Sħiħ' },
    { source: 'Read Only', target: 'Biss Aqra' },
    { source: 'No Access', target: 'L-ebda Aċċess' },
    { source: 'Read', target: 'Aqra' },
    { source: 'Update', target: 'Aġġorna' },
    { source: 'Write', target: 'Ikteb' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'Ħassar' },
    { source: 'Custom Access', target: 'Aċċess Personalizzat' },
    { source: 'Read, create, update and delete data', target: 'Aqra, oħloq, aġġorna u ħassar id-dejta' },
    { source: 'Choose allowed operations granularly', target: 'Agħżel l-operazzjonijiet permessi b’mod granulari' },
    { source: 'Without any access to data', target: 'Bla aċċess għall-ebda dejta' },
    { source: 'Name', target: 'Isem' },
    { source: 'Active', target: 'Attiv' },
    { source: 'Settings', target: 'Settings' },
    { source: 'Members and Teams', target: 'Membri u Timijiet' },
    { source: 'App Builder', target: 'Kostruttur tal-App' },
    { source: 'Collection Permissions', target: 'Permessi tal-Kollezzjoni' },
    { source: "Grant permissions to app's collection", target: 'Agħti permessi lill-kollezzjoni ta’ l-app' },
    { source: 'Collection', target: 'Kollezzjoni' },
    {
      source: 'Limit access to your data by team properties',
      target: 'Limita l-aċċess għad-dejta tiegħek skont il-proprjetajiet tat-tim'
    },
    { source: 'Save Team', target: 'Żomm Tim' },
    { source: 'Create Team', target: 'Oħloq Tim' },
    { source: 'Value', target: 'Valur' },
    { source: 'No properties specified', target: 'L-ebda proprjetajiet speċifikati' },

    // Navigation
    { source: 'Current App', target: 'App Kurrenti' },
    { source: 'Home', target: 'Dar' },

    // Profile
    {
      source: 'We are fetching user data, please, wait...',
      target: 'Aħna qed nirkupraw id-dejta tal-utent, jekk jogħġbok stenna...'
    },
    { source: 'Profile Settings', target: 'Settings tal-Profil' },
    { source: 'Basic information about your account.', target: 'Informazzjoni bażika dwar il-kont tiegħek.' },
    { source: 'Photo', target: 'Ritratt' },
    { source: 'your photo', target: 'ir-ritratt tiegħek' },
    { source: 'Change', target: 'Ibdel' },
    { source: 'Upload', target: 'Itella’' },
    { source: 'Photo was successfully updated', target: 'Ir-ritratt ġie aġġornat b’suċċess' },
    { source: 'Photo was successfully deleted', target: 'Ir-ritratt ġie mħassar b’suċċess' },
    { source: 'First Name', target: 'Isem' },
    { source: 'Last Name', target: 'Kunjom' },
    { source: 'Your Email', target: 'L-Email Tiegħek' },
    { source: 'Email Change', target: 'Uri l-Email' },
    { source: 'New Email', target: 'Email Ġdid' },
    { source: 'Change Email', target: 'Ibdel l-Email' },
    { source: 'Check your inbox', target: 'Iċċekkja l-Inbox tiegħek' },
    { source: 'Confirmation Email was sent to {0}', target: 'Email ta’ konferma ntbagħtet lil {0}' },
    { source: 'Changing Email failed', target: 'Bidla fl-email naqset' },
    { source: 'Password Change', target: 'Bidla fil-Password' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target:
        'Password għandha tkun qawwija biżżejjed biex tipproteġi l-kont tiegħek, għalhekk tagħmilha tal-inqas 12-il karattru twila.'
    },
    { source: 'Current Password', target: 'Password Attwali' },
    { source: 'New Password', target: 'Password Ġdid' },
    { source: 'Confirm New Password', target: 'Ikkonferma l-Password Ġdid' },
    { source: 'Change Password', target: 'Ibdel il-Password' },
    {
      source: 'Current password was successfully updated, all other sessions will be logged out shortly',
      target: 'Il-password kurrenti ġiet aġġornata b’suċċess, is-sessjonijiet l-oħra kollha se jiġu logout dalwaqt'
    },
    { source: 'Saving current password failed', target: 'Il-ħażna tal-password attwali naqset' },
    { source: 'Short password', target: "Password' qosra" },
    { source: "Passwords don't match", target: 'Il-passwords ma qbilx' },
    { source: 'Personal Preferences', target: 'Preferenzi Personali' },
    { source: 'Language', target: 'Lingwa' },
    { source: 'Timezone', target: 'Żona tal-Ħin' },
    { source: 'Current time in {0} is', target: 'Il-ħin attwali f’{0} huwa' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'Ippersonalizza preferenzi addizzjonali għall-kont tiegħek.'
    },
    { source: 'News & Proposals', target: 'Aħbarijiet & Proposti' },
    {
      source: 'Subscribe to our updates and proposals.',
      target: 'Abbona għall-aġġornamenti u l-proposti tagħna.'
    },
    { source: 'Save changes', target: 'Iffrankar il-bidliet' },
    { source: 'Current user was successfully updated', target: 'L-utent attwali ġie aġġornat b’suċċess' },
    { source: 'Saving current user failed', target: 'L-iffrankar tal-utent attwali naqset' },

    // My Apps
    { source: 'Type to search...', target: 'Ittajpja biex ifittex...' },
    { source: 'My Apps', target: 'L-Apps Tiegħi' },
    { source: 'New App', target: 'App Ġdida' },
    { source: 'Builder', target: 'Kostruttur' },
    { source: 'App', target: 'App' },
    { source: 'continue install', target: 'kompli l-installazzjoni' },
    { source: 'Open builder', target: 'Iftaħ il-kostruttur' },
    { source: 'View published', target: 'Ara l-pubblikazzjonijiet' },
    { source: 'Delete App', target: 'Ħassar l-App' },
    { source: 'Start from a template', target: 'Ibda minn mudell' },
    { source: 'Preview', target: 'Qabbad' },
    { source: 'Contact Support', target: 'Kuntatt Ma’ l-Appoġġ' },
    { source: 'Documentation', target: 'Dokumentazzjoni' },
    { source: 'Feature Requests', target: 'Talbiet tal-Karatteristiċi' },
    { source: 'See What’s New', target: 'Ara x’hemm Ġdid' },
    { source: 'Search templates...', target: 'Mudelli tat-tfittxija...' },
    { source: 'any', target: 'kwalunkwe' },
    { source: 'more', target: 'aktar' },
    { source: 'Choose Data Source', target: 'Agħżel il-Bażi tad-Dejta' },
    { source: 'works with 30+ data sources', target: 'jamri mal-30+ sorsi ta’ dejta' },
    { source: 'Use this template', target: 'Uża dan l-mudell' },
    { source: 'stores data in Jet Tables', target: 'jaħżen id-dejta fit-Tabelli Jet' },
    { source: 'New Data', target: 'Dejta Ġdida' },
    { source: 'using {0}', target: 'tintuża {0}' },
    { source: "Can't find resource you're looking for?", target: 'Ma tistax issib il-riżorsa li qed tfittex?' },
    { source: 'Admin Panel', target: 'Pannell ta’ Amministrazzjoni' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'Elenca, oħloq u aġġorna (CRUD) operazzjonijiet fuq il-quċċata tad-dejta tiegħek'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target:
        'Ibni pannell ta’ amministrazzjoni apposta bbażata fuq kwalunkwe bażijiet tad-dejta, apps u APIs bħal Stripe, Twilio u GraphQL.'
    },
    { source: 'All Integrations', target: 'L-Integrazzjonijiet Kollha' },
    { source: 'Databases', target: 'Bażijiet tad-dejta' },
    { source: 'APIs', target: 'APIs' },
    { source: 'Frameworks', target: 'Qafas' },
    { source: 'Storages', target: 'Ħażnijiet' },

    // Sign In
    { source: 'Good morning', target: 'Bonġu' },
    { source: 'Good afternoon', target: 'Wara nofsinhar it-tajjeb' },
    { source: 'Good evening', target: 'Tipjip it-tajjeb' },
    { source: 'Sign In', target: 'Jiffirma ġewwa' },
    { source: 'Welcome Back.', target: 'Merħba lura.' },
    { source: 'Sign in with {0}', target: 'Jiffirma ġewwa ma’ {0}' },
    { source: 'or login with', target: 'jew illogja ma’' },
    { source: 'Enter E-mail', target: 'Daħħal E-mail' },
    { source: 'Enter password', target: 'Daħħal il-password' },
    { source: 'Login', target: 'Illogja ġewwa' },
    { source: 'Create new account', target: 'Oħloq kont ġdid' },
    { source: 'Forgot my password', target: 'Insejt il-password tiegħi' },
    { source: 'required', target: 'meħtieġa' },
    { source: 'incorrect Email', target: 'Email inkorretta' },
    { source: 'Minimum password length {0}', target: 'Tul minimu tal-password huwa {0}' },
    { source: 'Unable to Sign In', target: 'Mhemmx ħila li tiffirma ġewwa' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'Ibda <span class="auth-form__accent">Bla Ħlas illum</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target:
        'Mhemmx bżonn tal-karta. Ikollok il-funzjonalita’ kollha avvanzata b’xejn matul it-traj elf tahditiet tal-PRO ta’ 14-il jum.'
    },
    { source: 'Enter First Name', target: 'Daħħal l-Isem' },
    { source: 'Enter Last Name (optional)', target: 'Daħħal il-Kunjom (mhux obbligatorju)' },
    { source: 'Enter Email', target: 'Daħħal l-Email' },
    { source: 'Password', target: 'Password' },
    { source: 'Repeat Password', target: 'Irrepeti l-Password' },
    { source: 'By signing in you’re okay with our', target: 'Billi tiffirma ġewwa int qiegħed jiffirma tkun tagħna' },
    { source: 'Creating an account means you’re okay with our', target: 'Li Oħloq kont bl-logħob inkuni tagħna' },
    { source: 'Terms of Service', target: 'Termini tas-Servizz' },
    { source: 'Privacy Policy', target: 'Politika tal-Privatezza' },
    { source: 'and', target: 'u' },
    { source: 'Create your free account', target: 'Oħloq il-kont b’xejn tiegħek' },
    { source: 'Already have an account', target: 'Diġà għandek kont?' },
    { source: 'Unable to Sign Up', target: 'Mhux ħila li tiffirma' },

    // Restore password
    { source: 'Reset your password', target: 'Irrisettja l-Password tiegħek' },
    { source: 'Email Address', target: 'Indirizz tal-Email' },
    { source: 'Reset password', target: 'Irrisettja l-Password' },
    { source: 'Return to Sign In', target: 'Irriżu lejn il-logħob signé' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'Iċċekkja l-email tiegħek – <strong>{0}</strong>. Aħna bgħatna rabta ta’ validazzjoni li għandek issegwi biex tbiddel il-password tiegħek.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be at least 8 characters.',
      target:
        'Kważi lest, sempliċement daħħal il-password ġdida tiegħek hawn taħt. <br>Għandu jkollu mill-inqas 8 karattri.'
    },
    { source: 'Reset password & Sign In', target: 'Irrisettja l-Password & Il-logħob Sign In' },
    { source: 'Unable to Send Code', target: 'Mhux ħila li tibgħat kodiċi' },
    { source: 'Unable to Change Password', target: 'Mhux ħila li tibiddil-kodiċi' },

    // Email Verification
    { source: 'Email Verification', target: 'Verifika tal-Email' },
    { source: 'Resend verification code', target: 'Stieden il-verifika tal-kodiċi' },
    { source: 'Verification email sent', target: 'Il-verifika tal-email intbagħtet' },
    { source: 'Your Email is now verified', target: 'L-Email tiegħek issa huwa vvalidat' },
    { source: 'Request is incorrect', target: 'It-talba huwa siewbi' },

    // Invites
    {
      source: 'Join <span class="auth-form__accent">{0}</span>',
      target: 'Ingħaqqad <span class="auth-form__accent">{0}</span>'
    },
    {
      source: '<strong>{0}</strong> has invited you to join <strong>{1}</strong>',
      target: '<strong>{0}</strong> stiednek biex tingħaqad ma’ <strong>{1}</strong>'
    },
    {
      source: 'Someone has invited you to join <strong>{0}</strong>',
      target: 'Xi ħadd stiednek biex tingħaqad ma’ <strong>{0}</strong>'
    },
    {
      source: 'You are joining <strong>{0}</strong> using invite link',
      target: 'Inti qed tingħaqad ma’ <strong>{0}</strong> billi juża rabta ta’ stiedenija'
    },
    { source: 'Join', target: 'Ingħaqqad' },
    { source: 'Go to home page', target: 'Mur fil-paġna tad-dar' },
    { source: 'Invite link is wrong', target: 'Ir-rabta ta’ stiedenija hija żbaljata' },
    {
      source:
        'Looks like your invitation link has expired or maybe you have followed the wrong link. Please try to ask to invite your again.',
      target:
        'Jidher li l-link ta’ stiedenija tiegħek tkun skadat jew forsi segwejt il-link żbaljata. Jekk jogħġbok ipprova staqsi biex stiednik mill-ġdid.'
    },
    {
      source: 'Unfortunately we failed to load information about this invitation',
      target: 'Sfortunatament ma rnexxilniex nilludu informazzjoni dwar din l-stiedenInsertuction.'
    },

    // Users & Teams
    { source: 'Members of {0}', target: 'Membri ta’ {0}' },
    { source: 'How to get started', target: 'Kif tibda' },
    { source: 'Users API', target: 'L-Utent tal-API' },
    { source: 'Teams API', target: 'It-Timijiet tal-API' },
    { source: 'Invite Member', target: 'Stieden Membru' },
    { source: 'Add User property', target: 'Add propraиelf ta’ l-utent' },
    { source: 'Add Team property', target: 'Add proprjetà ta’ Team' },
    { source: 'Edit property', target: 'Editja l-proprjetà' },
    { source: 'Delete property', target: 'Ħassar il-proprjetà' },
    { source: 'Users', target: 'Utenti' },
    { source: 'Teams', target: 'Timijiet' },
    { source: 'Search members', target: 'Fittex membri' },
    { source: 'Search teams', target: 'Fittex timijiet' },
    { source: '{0} pages', target: '{0} paġni' },
    { source: 'No members', target: 'L-ebda membru' }
  ]
};

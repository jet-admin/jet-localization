import { Locale } from './locale';

export const locale: Locale = {
  name: 'latvian',
  language: 'lv',
  items: [
    // General
    { source: 'Save', target: 'Saglabāt' },
    { source: 'Create', target: 'Izveidot' },
    { source: 'Duplicating', target: 'Dublēšana' },
    { source: 'Duplicate', target: 'Dublēt' },
    { source: 'Mass Edit', target: 'Masveida rediģēšana' },
    { source: 'Export', target: 'Eksportēt' },
    { source: 'Import', target: 'Importēt' },
    { source: 'Delete', target: 'Dzēst' },
    { source: 'Continue', target: 'Turpināt' },
    { source: 'Submit', target: 'Iesniegt' },
    { source: 'Cancel', target: 'Atcelt' },
    { source: 'Loading', target: 'Ielādē' },
    { source: 'Please wait...', target: 'Lūdzu, uzgaidiet...' },
    { source: 'Loading failed', target: 'Ielāde neizdevās' },
    { source: 'Unknown error', target: 'Nezināma kļūda' },
    { source: 'Add', target: 'Pievienot' },
    { source: 'or', target: 'vai' },
    { source: 'Hours', target: 'Stundas' },
    { source: 'Minutes', target: 'Minūtes' },
    { source: 'Seconds', target: 'Sekundes' },
    { source: 'Saved', target: 'Saglabāts' },
    { source: 'Error', target: 'Kļūda' },
    { source: 'Page not found', target: 'Lapa nav atrasta' },
    {
      source: 'The specified address is incorrect, or the page does not exist',
      target: 'Norādītā adrese ir nepareiza vai lapa nepastāv'
    },
    { source: 'Not allowed', target: 'Nav atļauts' },
    {
      source: "You don't have permissions to access this page",
      target: 'Jums nav tiesību piekļūt šai lapai'
    },
    { source: 'Are you sure want to close?', target: 'Vai tiešām vēlaties aizvērt?' },
    { source: 'Close', target: 'Aizvērt' },

    // Actions
    { source: 'Action executed', target: 'Darbība izpildīta' },
    { source: 'Action executed successfully', target: 'Darbība veiksmīgi izpildīta' },
    { source: 'Action failed', target: 'Darbība neizdevās' },
    {
      source: "You don't have permission for run this operation",
      target: 'Jums nav atļaujas veikt šo darbību'
    },
    { source: 'Specify parameters', target: 'Norādiet parametrus' },
    { source: 'Executing action', target: 'Izpilda darbību' },
    { source: 'You are executing <strong>{0}</strong>', target: 'Jūs izpildāt <strong>{0}</strong>' },
    { source: 'Please fill in the parameters below.', target: 'Lūdzu, ievadiet parametrus zemāk.' },
    { source: 'Execute', target: 'Izpildīt' },
    { source: 'Executing', target: 'Izpilda' },
    { source: 'Finished', target: 'Pabeigts' },
    { source: 'Done', target: 'Gatavs' },

    // Export
    { source: 'Records Export', target: 'Zapisu eksports' },
    { source: 'Downloading records data as a file', target: 'Datu ierakstu lejupielāde failā' },
    { source: 'Choose format', target: 'Izvēlieties formātu' },
    { source: 'Number of exporting records', target: 'Eksportēto ierakstu skaits' },
    { source: { label: 'Export', context: 'submit' }, target: 'Eksportēt' },
    { source: 'Exporting', target: 'Eksportē' },
    { source: 'Export completed', target: 'Eksports pabeigts' },
    { source: 'Failed to export', target: 'Eksportēšana neizdevās' },

    // Components
    { source: 'optional', target: 'pēc izvēles' },
    { source: 'choose', target: 'izvēlēties' },
    { source: 'Clear value', target: 'Notīrīt vērtību' },
    { source: 'loading...', target: 'ielādē...' },
    { source: 'Nothing found', target: 'Nekas nav atrasts' },
    { source: 'Search...', target: 'Meklēt...' },
    { source: 'Enter at least {0} characters', target: 'Ievadiet vismaz {0} rakstzīmes' },
    { source: 'No options', target: 'Nav iespēju' },
    { source: 'Drop files here or', target: 'Ievelciet failus šeit vai' },
    { source: 'Upload new', target: 'Augšupielādēt no jauna' },
    { source: 'Clear', target: 'Notīrīt' },
    { source: 'Download', target: 'Lejupielādēt' },
    { source: 'Choose file', target: 'Izvēlieties failu' },
    { source: 'Choose files', target: 'Izvēlieties failus' },
    { source: 'Scan with Camera', target: 'Skenēt ar kameru' },
    { source: 'Scan Image file', target: 'Skenēt attēlu failu' },
    { source: 'Choose camera', target: 'Izvēlēties kameru' },
    { source: 'Stop scanning', target: 'Pārtraukt skenēšanu' },
    { source: 'Scan again', target: 'Skenēt vēlreiz' },
    { source: 'Use this scan', target: 'Izmantot šo skenējumu' },
    { source: 'Failed to scan', target: 'Skenēšana neizdevās' },
    {
      source: 'Code failed to scan, please try another image',
      target: 'Kodu neizdevās skenēt, lūdzu, izmēģiniet citu attēlu'
    },
    { source: 'current', target: 'pašreizējā' },
    { source: 'Day', target: 'Diena' },
    { source: 'Week', target: 'Nedēļa' },
    { source: 'Month', target: 'Mēnesis' },
    { source: 'Year', target: 'Gads' },
    { source: 'Today', target: 'Šodien' },
    { source: 'Daily', target: 'Katru dienu' },
    { source: 'Weekly', target: 'Katru nedēļu' },
    { source: 'Monthly', target: 'Katru mēnesi' },
    { source: 'Quarterly', target: 'Reizi ceturksnī' },
    { source: 'Yearly', target: 'Katru gadu' },
    { source: 'Hourly', target: 'Ik pēc stundas' },
    { source: 'Minutely', target: 'Ik pēc minūtes' },
    { source: 'Since', target: 'Kopš' },
    { source: 'Before', target: 'Pirms' },
    { source: 'Between', target: 'Starp' },
    { source: 'From date', target: 'No datuma' },
    { source: 'To date', target: 'Līdz datumam' },
    { source: 'Coordinates', target: 'Koordinātes' },
    { source: 'Latitude', target: 'Platuma grādi' },
    { source: 'Longitude', target: 'Garuma grādi' },
    { source: 'Default color', target: 'Noklusējuma krāsa' },
    { source: 'not specified', target: 'nav norādīts' },
    { source: 'Sign using your finger or pointer', target: 'Parakstieties ar pirkstu vai rādītāju' },

    // List components
    { source: 'Filter', target: 'Filtrs' },
    { source: 'Filter by field', target: 'Filtrēt pēc lauka' },
    { source: 'Filter by...', target: 'Filtrēt pēc...' },
    { source: 'Back', target: 'Atpakaļ' },
    { source: 'Back to {0} fields', target: 'Atpakaļ uz {0} laukiem' },
    { source: 'Choose {0} from list', target: 'Izvēlieties {0} no saraksta' },
    { source: '{0} fields', target: '{0} lauki' },
    { source: '{0} relationships', target: '{0} attiecības' },
    { source: 'Aggregate {0}', target: 'Apkopot {0}' },
    { source: 'No fields to select', target: 'Nav lauku, ko izvēlēties' },
    { source: 'Enter value...', target: 'Ievadiet vērtību...' },
    { source: 'Exclude', target: 'Izslēgt' },
    { source: 'Actions', target: 'Darbības' },
    { source: 'Search', target: 'Meklēt' },
    { source: 'Sort 1 → 9', target: 'Kārtot 1 → 9' },
    { source: 'Sort 9 → 1', target: 'Kārtot 9 → 1' },
    { source: 'Sort A → Z', target: 'Kārtot A → Z' },
    { source: 'Sort Z → A', target: 'Kārtot Z → A' },
    { source: 'Refresh automatically', target: 'Atjaunināt automātiski' },
    { source: 'All', target: 'Visi' },
    { source: 'Selected', target: 'Izvēlētie' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'Diemžēl jūsu vaicājumam atbilstošu {0} nav atrasts'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'Mēs saņemam {0}, lūdzu, uzgaidiet...' },
    { source: 'Add filter', target: 'Pievienot filtru' },
    { source: 'Delete this filter', target: 'Dzēst šo filtru' },
    { source: 'Toggle ordering', target: 'Pārslēgt kārtošanu' },
    { source: 'Not configured', target: 'Nav konfigurēts' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'Diemžēl šī komponente vēl nav konfigurēta'
    },
    { source: 'records', target: 'ieraksti' },
    { source: '{0} items', target: '{0} vienības' },

    // Menu
    { source: 'Users & Teams', target: 'Lietotāji un komandas' },
    { source: 'Billing', target: 'Norēķini' },
    { source: 'Billing & Plans', target: 'Norēķini un plāni' },
    { source: 'API keys', target: 'API atslēgas' },
    { source: 'Dark Mode', target: 'Tumšais režīms' },
    { source: 'Light Mode', target: 'Gaišais režīms' },
    { source: 'Disable Staff', target: 'Atspējot personālu' },
    { source: 'Enable Staff', target: 'Iespējot personālu' },
    { source: 'Manage Templates', target: 'Pārvaldīt veidnes' },
    { source: 'Logout', target: 'Iziet' },
    { source: 'Activity Log', target: 'Darbību žurnāls' },
    { source: 'Collaborations', target: 'Sadarbība' },
    { source: 'Open Visual Builder', target: 'Atvērt vizuālo veidotāju' },

    // Filters
    { source: 'equals', target: 'ir vienāds' },
    { source: 'does not equal', target: 'nav vienāds' },
    { source: '{0} equals {1}', target: '{0} ir vienāds ar {1}' },
    { source: '{0} does not equal {1}', target: '{0} nav vienāds ar {1}' },

    { source: 'contains', target: 'satur' },
    { source: 'does not contain', target: 'nesatur' },
    { source: '{0} contains {1}', target: '{0} satur {1}' },
    { source: '{0} not contains {1}', target: '{0} nesatur {1}' },

    { source: 'starts with', target: 'sākas ar' },
    { source: 'does not start with', target: 'nesākas ar' },
    { source: '{0} starts with {1}', target: '{0} sākas ar {1}' },
    { source: '{0} does not start with {1}', target: '{0} nesākas ar {1}' },

    { source: 'ends with', target: 'beidzas ar' },
    { source: 'does not end with', target: 'nebeidzas ar' },
    { source: '{0} ends with {1}', target: '{0} beidzas ar {1}' },
    { source: '{0} does not end with {1}', target: '{0} nebeidzas ar {1}' },

    { source: 'greater than', target: 'vairāk par' },
    { source: 'is not greater than', target: 'nav vairāk par' },
    { source: '{0} is greater than {1}', target: '{0} ir vairāk par {1}' },
    { source: '{0} not greater than {1}', target: '{0} nav vairāk par {1}' },

    { source: 'greater than or equals', target: 'vairāk vai vienāds ar' },
    { source: 'is not greater than or equals', target: 'nav vairāk vai vienāds ar' },
    { source: '{0} is greater than or equals {1}', target: '{0} ir vairāk vai vienāds ar {1}' },
    { source: '{0} is not greater than or equals {1}', target: '{0} nav vairāk vai vienāds ar {1}' },

    { source: 'less than', target: 'mazāk par' },
    { source: 'is not less than', target: 'nav mazāk par' },
    { source: '{0} is less than {1}', target: '{0} ir mazāk par {1}' },
    { source: '{0} is not less than {1}', target: '{0} nav mazāk par {1}' },

    { source: 'less than or equals', target: 'mazāk vai vienāds ar' },
    { source: 'is not less than or equals', target: 'nav mazāk vai vienāds ar' },
    { source: '{0} is less than or equals {1}', target: '{0} ir mazāk vai vienāds ar {1}' },
    { source: '{0} is not less than or equals {1}', target: '{0} nav mazāk vai vienāds ar {1}' },

    { source: 'one of', target: 'viens no' },
    { source: 'is one of', target: 'ir viens no' },
    { source: 'is not one of', target: 'nav viens no' },
    { source: '{0} is one of {1}', target: '{0} ir viens no {1}' },
    { source: '{0} is not one of {1}', target: '{0} nav viens no {1}' },

    { source: 'is null', target: 'ir null' },
    { source: 'is not null', target: 'nav null' },
    { source: '{0} is null', target: '{0} ir null' },
    { source: '{0} is not null', target: '{0} nav null' },

    { source: 'is future', target: 'ir nākotnē' },
    { source: 'in the future', target: 'nākotnē' },
    { source: 'is not in the future', target: 'nav nākotnē' },
    { source: '{0} is in the future', target: '{0} ir nākotnē' },
    { source: '{0} is not in the future', target: '{0} nav nākotnē' },

    { source: 'is past', target: 'ir pagātnē' },
    { source: 'in the past', target: 'pagātnē' },
    { source: 'is not in the past', target: 'nav pagātnē' },
    { source: '{0} is in the past', target: '{0} ir pagātnē' },
    { source: '{0} is not in the past', target: '{0} nav pagātnē' },

    { source: 'is Today', target: 'ir šodien' },
    { source: 'today', target: 'šodien' },
    { source: 'is not today', target: 'nav šodien' },
    { source: '{0} is today', target: '{0} ir šodien' },
    { source: '{0} is not today', target: '{0} nav šodien' },

    { source: 'is Yesterday', target: 'bija vakar' },
    { source: 'yesterday', target: 'vakar' },
    { source: 'is not yesterday', target: 'nebija vakar' },
    { source: '{0} is yesterday', target: '{0} bija vakar' },
    { source: '{0} is not yesterday', target: '{0} nebija vakar' },

    { source: 'is Last Week', target: 'bija pagājušajā nedēļā' },
    { source: 'last week', target: 'pagājušajā nedēļā' },
    { source: 'is not last week', target: 'nebija pagājušajā nedēļā' },
    { source: '{0} is last week', target: '{0} bija pagājušajā nedēļā' },
    { source: '{0} is not last week', target: '{0} nebija pagājušajā nedēļā' },

    { source: 'is Last Month', target: 'bija pagājušajā mēnesī' },
    { source: 'last month', target: 'pagājušajā mēnesī' },
    { source: 'is not last month', target: 'nebija pagājušajā mēnesī' },
    { source: '{0} is last month', target: '{0} bija pagājušajā mēnesī' },
    { source: '{0} is not last month', target: '{0} nebija pagājušajā mēnesī' },

    { source: 'is Last Quarter', target: 'bija pagājušajā ceturksnī' },
    { source: 'last quarter', target: 'pagājušajā ceturksnī' },
    { source: 'is not last quarter', target: 'nebija pagājušajā ceturksnī' },
    { source: '{0} is last quarter', target: '{0} bija pagājušajā ceturksnī' },
    { source: '{0} is not last quarter', target: '{0} nebija pagājušajā ceturksnī' },

    { source: 'is Last Year', target: 'bija pagājušajā gadā' },
    { source: 'last year', target: 'pagājušajā gadā' },
    { source: 'is not last year', target: 'nebija pagājušajā gadā' },
    { source: '{0} is last year', target: '{0} bija pagājušajā gadā' },
    { source: '{0} is not last year', target: '{0} nebija pagājušajā gadā' },

    { source: 'is Last X Days', target: 'bija pēdējās X dienas' },
    { source: 'last X days', target: 'pēdējās X dienas' },
    { source: 'is not last X days', target: 'nebija pēdējās X dienas' },
    { source: '{0} is last {1} days', target: '{0} bija pēdējās {1} dienas' },
    { source: '{0} is not last {1} days', target: '{0} nebija pēdējās {1} dienas' },

    { source: 'is Current Week', target: 'ir šo nedēļu' },
    { source: 'current week', target: 'šo nedēļu' },
    { source: 'is not current week', target: 'nav šo nedēļu' },
    { source: '{0} is current week', target: '{0} ir šo nedēļu' },
    { source: '{0} is not current week', target: '{0} nav šo nedēļu' },

    { source: 'is Current Month', target: 'ir šis mēnesis' },
    { source: 'current month', target: 'šis mēnesis' },
    { source: 'is not current month', target: 'nav šis mēnesis' },
    { source: '{0} is current month', target: '{0} ir šis mēnesis' },
    { source: '{0} is not current month', target: '{0} nav šis mēnesis' },

    { source: 'is Current Quarter', target: 'ir šis ceturksnis' },
    { source: 'current quarter', target: 'šis ceturksnis' },
    { source: 'is not current quarter', target: 'nav šis ceturksnis' },
    { source: '{0} is current quarter', target: '{0} ir šis ceturksnis' },
    { source: '{0} is not current quarter', target: '{0} nav šis ceturksnis' },

    { source: 'is Current Year', target: 'ir šis gads' },
    { source: 'current year', target: 'šis gads' },
    { source: 'is not current year', target: 'nav šis gads' },
    { source: '{0} is current year', target: '{0} ir šis gads' },
    { source: '{0} is not current year', target: '{0} nav šis gads' },

    { source: 'is Previous Week', target: 'bija iepriekšējā nedēļā' },
    { source: 'previous week', target: 'iepriekšējā nedēļā' },
    { source: 'is not previous week', target: 'nebija iepriekšējā nedēļā' },
    { source: '{0} is previous week', target: '{0} bija iepriekšējā nedēļā' },
    { source: '{0} is not previous week', target: '{0} nebija iepriekšējā nedēļā' },

    { source: 'is Previous Month', target: 'bija iepriekšējā mēnesī' },
    { source: 'previous month', target: 'iepriekšējā mēnesī' },
    { source: 'is not previous month', target: 'nebija iepriekšējā mēnesī' },
    { source: '{0} is previous month', target: '{0} bija iepriekšējā mēnesī' },
    { source: '{0} is not previous month', target: '{0} nebija iepriekšējā mēnesī' },

    { source: 'is Previous Quarter', target: 'bija iepriekšējā ceturksnī' },
    { source: 'previous quarter', target: 'iepriekšējā ceturksnī' },
    { source: 'is not previous quarter', target: 'nebija iepriekšējā ceturksnī' },
    { source: '{0} is previous quarter', target: '{0} bija iepriekšējā ceturksnī' },
    { source: '{0} is not previous quarter', target: '{0} nebija iepriekšējā ceturksnī' },

    { source: 'is Previous Year', target: 'bija iepriekšējā gadā' },
    { source: 'previous year', target: 'iepriekšējā gadā' },
    { source: 'is not previous year', target: 'nebija iepriekšējā gadā' },
    { source: '{0} is previous year', target: '{0} bija iepriekšējā gadā' },
    { source: '{0} is not previous year', target: '{0} nebija iepriekšējā gadā' },

    { source: 'is Previous X Days', target: 'bija iepriekšējās X dienas' },
    { source: 'previous X days', target: 'iepriekšējās X dienas' },
    { source: 'is not previous X days', target: 'nebija iepriekšējās X dienas' },
    { source: '{0} is previous {1} days', target: '{0} bija iepriekšējās {1} dienas' },
    { source: '{0} is not previous {1} days', target: '{0} nebija iepriekšējās {1} dienas' },

    { source: 'is empty', target: 'ir tukšs' },
    { source: 'is not empty', target: 'nav tukšs' },
    { source: '{0} is empty', target: '{0} ir tukšs' },
    { source: '{0} is not empty', target: '{0} nav tukšs' },

    { source: 'covered by', target: 'aptverts' },
    { source: 'is not covered by', target: 'nav aptverts' },
    { source: '{0} covered by {1}', target: '{0} aptverts ar {1}' },
    { source: '{0} is not covered by {1}', target: '{0} nav aptverts ar {1}' },

    // Activity log
    { source: 'No activities found', target: 'Nav atrasta neviena aktivitāte' },
    {
      source: 'Start to working with data to log activities.',
      target: 'Sāciet strādāt ar datiem, lai reģistrētu aktivitātes.'
    },
    { source: 'All Activity', target: 'Visa aktivitāte' },
    { source: 'Create Record', target: 'Izveidot ierakstu' },
    { source: 'Update Record', target: 'Atjaunināt ierakstu' },
    { source: 'Delete Record', target: 'Dzēst ierakstu' },
    { source: 'All Members', target: 'Visi dalībnieki' },

    // Collaboration
    { source: 'Timeline', target: 'Laika skala' },
    { source: 'Messages', target: 'Ziņojumi' },
    { source: 'Activity', target: 'Aktivitāte' },
    { source: 'Start chatting with your team', target: 'Sāciet čatot ar savu komandu' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'Ņemiet ziņojumu par pašreizējo lapu, lai sekotu svarīgai informācijai.'
    },
    { source: 'Your Message', target: 'Jūsu ziņojums' },
    { source: 'Send', target: 'Sūtīt' },

    // Share
    { source: 'Invite members', target: 'Aicināt dalībniekus' },
    { source: 'Public share', target: 'Publiska koplietošana' },
    { source: 'Sign Up', target: 'Reģistrēties' },
    { source: 'Members', target: 'Dalībnieki' },
    { source: 'Invite with Email', target: 'Aicināt ar e-pastu' },
    { source: 'Invite someone...', target: 'Aicināt kādu...' },
    { source: 'Send Invite', target: 'Sūtīt aicinājumu' },
    {
      source: 'Limit access to your data by user properties',
      target: 'Ierobežojiet piekļuvi jūsu datiem pēc lietotāja īpašībām'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: 'Ievadiet lietotāja e-pastu, ko vēlaties aicināt sadarbībā.'
    },
    { source: 'Copy', target: 'Kopēt' },
    { source: 'Invite with Link', target: 'Aicināt ar saiti' },
    { source: 'Remove link', target: 'Noņemt saiti' },
    { source: 'Add Invite Link', target: 'Pievienot ielūguma saiti' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'Ikviens internetā ar šo saiti varēs pievienoties izvēlētajai komandai.'
    },
    { source: 'Pending Invites', target: 'Neizvestie ielūgumi' },
    { source: 'Cancel invite', target: 'Atcelt ielūgumu' },
    { source: 'Active Members', target: 'Aktīvie dalībnieki' },
    { source: 'Remove member', target: 'Noņemt dalībnieku' },
    {
      source: 'You are setting sharing for the current page',
      target: 'Jūs iestatāt koplietošanu pašreizējai lapai'
    },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'Jūs iestatāt koplietošanu visām sava lietojumprogrammas lapām.'
    },
    { source: 'Public access link', target: 'Publiska piekļuves saite' },
    { source: 'Updating public access...', target: 'Atjaunina publisko piekļuvi...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'Ikviens ar šo saiti varēs skatīt pašreizējo lapu. Šādā veidā jūs varat arī iegult pašreizējo lapu citā tīmekļa vietnē.'
    },
    { source: 'Embed code (IFRAME)', target: 'Iegult kodu (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: 'Ielīmējiet šo kodu sava tīmekļa vietnes HTML kodā, kur vēlaties, lai pašreizējā lapa parādās.'
    },
    { source: 'link', target: 'saite' },
    { source: 'invited', target: 'ierinvēts' },
    { source: 'Choose Team', target: 'Izvēlēties komandu' },
    { source: 'App Teams', target: 'Lietojumprogrammas komandas' },
    { source: 'Built-In Teams', target: 'Iebūvētās komandas' },
    { source: 'Clear Team', target: 'Notīrīt komandu' },
    { source: 'Can build application and modify data', target: 'Var veidot lietojumprogrammu un modificēt datus' },
    { source: 'Can modify data in application', target: 'Var modificēt datus lietojumprogrammā' },
    { source: 'Can only view data without modification', target: 'Var tikai skatīt datus bez modifikācijām' },
    { source: 'Add Team', target: 'Pievienot komandu' },
    { source: 'Edit Team', target: 'Rediģēt komandu' },
    { source: 'Adding Team', target: 'Pievieno komandu' },
    {
      source: 'Keep control over who has access to current App',
      target: 'Saglabājiet kontroli pār to, kam ir piekļuve pašreizējai lietojumprogrammai'
    },
    { source: 'Enter Team Name', target: 'Ievadiet komandas nosaukumu' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'Ievadiet komandas nosaukumu, piemēram,: Atbalsts, Pārdošanas, Mārketings, utt.'
    },
    { source: 'Add a new member to this team.', target: 'Pievienojiet jaunus dalībniekus šai komandai.' },
    { source: 'Invite new member', target: 'Aicināt jaunu dalībnieku' },
    { source: 'User', target: 'Lietotājs' },
    { source: 'Date Added', target: 'Pievienošanas datums' },
    { source: 'You', target: 'Jūs' },
    { source: 'Edit', target: 'Rediģēt' },
    { source: 'No users in this team', target: 'Šajā komandā nav lietotāju' },
    { source: 'Page Permissions', target: 'Lapas atļaujas' },
    { source: 'App Permissions', target: 'Lietojumprogrammu atļaujas' },
    { source: 'Properties', target: 'Īpašības' },
    { source: 'Page name', target: 'Lapas nosaukums' },
    { source: 'Access', target: 'Piekļuve' },
    { source: 'Full Access', target: 'Pilna piekļuve' },
    { source: 'Read Only', target: 'Tikai lasīšana' },
    { source: 'No Access', target: 'Nav piekļuves' },
    { source: 'Read', target: 'Lasīt' },
    { source: 'Update', target: 'Atjaunināt' },
    { source: 'Write', target: 'Rakstīt' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'Dzēst' },
    { source: 'Custom Access', target: 'Pielāgota piekļuve' },
    { source: 'Read, create, update and delete data', target: 'Datu lasīšana, izveidošana, atjaunināšana un dzēšana' },
    { source: 'Choose allowed operations granularly', target: 'Granulēti izvēlieties atļautās operācijas' },
    { source: 'Without any access to data', target: 'Bez piekļuves datiem' },
    { source: 'Name', target: 'Nosaukums' },
    { source: 'Active', target: 'Aktīvs' },
    { source: 'Settings', target: 'Iestatījumi' },
    { source: 'Members and Teams', target: 'Dalībnieki un komandas' },
    { source: 'App Builder', target: 'Lietojumprogrammu veidotājs' },
    { source: 'Collection Permissions', target: 'Kolekciju atļaujas' },
    { source: "Grant permissions to app's collection", target: 'Piešķirt atļaujas lietojumprogrammas kolekcijai' },
    { source: 'Collection', target: 'Kolekcija' },
    {
      source: 'Limit access to your data by team properties',
      target: 'Ierobežojiet piekļuvi saviem datiem, izmantojot komandas īpašības'
    },
    { source: 'Save Team', target: 'Saglabāt komandu' },
    { source: 'Create Team', target: 'Izveidot komandu' },
    { source: 'Value', target: 'Vērtība' },
    { source: 'No properties specified', target: 'Īpašības nav norādītas' },

    // Navigation
    { source: 'Current App', target: 'Pašreizējā lietojumprogramma' },
    { source: 'Home', target: 'Mājas' },

    // Profile
    {
      source: 'We are fetching user data, please, wait...',
      target: 'Mēs pārbaudām lietotāja datus, lūdzu, uzgaidiet...'
    },
    { source: 'Profile Settings', target: 'Profila iestatījumi' },
    { source: 'Basic information about your account.', target: 'Pamatinformācija par jūsu kontu.' },
    { source: 'Photo', target: 'Foto' },
    { source: 'your photo', target: 'jūsu foto' },
    { source: 'Change', target: 'Mainīt' },
    { source: 'Upload', target: 'Augšupielādēt' },
    { source: 'Photo was successfully updated', target: 'Fotoattēls veiksmīgi atjaunināts' },
    { source: 'Photo was successfully deleted', target: 'Fotoattēls veiksmīgi dzēsts' },
    { source: 'First Name', target: 'Vārds' },
    { source: 'Last Name', target: 'Uzvārds' },
    { source: 'Your Email', target: 'Jūsu e-pasts' },
    { source: 'Email Change', target: 'E-pasta maiņa' },
    { source: 'New Email', target: 'Jauns E-pasts' },
    { source: 'Change Email', target: 'Mainīt E-pastu' },
    { source: 'Check your inbox', target: 'Pārbaudiet savu pastkasti' },
    { source: 'Confirmation Email was sent to {0}', target: 'Apstiprinājuma e-pasts tika nosūtīts uz {0}' },
    { source: 'Changing Email failed', target: 'Neizdevās mainīt e-pastu' },
    { source: 'Password Change', target: 'Paroles maiņa' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target:
        'Parolei jābūt pietiekami stiprai, lai aizsargātu jūsu kontu, tāpēc izveidojiet to vismaz 12 rakstzīmes garu.'
    },
    { source: 'Current Password', target: 'Pašreizējā parole' },
    { source: 'New Password', target: 'Jaunā parole' },
    { source: 'Confirm New Password', target: 'Apstiprināt jauno paroli' },
    { source: 'Change Password', target: 'Mainīt paroli' },
    {
      source: 'Current password was successfully updated, all other sessions will be logged out shortly',
      target: 'Pašreizējā parole ir veiksmīgi atjaunināta, visas pārējās sesijas drīzumā tiks izrakstītas'
    },
    { source: 'Saving current password failed', target: 'Neizdevās saglabāt pašreizējo paroli' },
    { source: 'Short password', target: 'Īsa parole' },
    { source: "Passwords don't match", target: 'Paroles nesakrīt' },
    { source: 'Personal Preferences', target: 'Personīgās izvēles' },
    { source: 'Language', target: 'Valoda' },
    { source: 'Timezone', target: 'Laika josla' },
    { source: 'Current time in {0} is', target: 'Pašreizējais laiks {0} ir' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'Pielāgojiet papildu izvēles savam kontam.'
    },
    { source: 'News & Proposals', target: 'Ziņas un priekšlikumi' },
    {
      source: 'Subscribe to our updates and proposals.',
      target: 'Abonējiet mūsu atjauninājumus un priekšlikumus.'
    },
    { source: 'Save changes', target: 'Saglabāt izmaiņas' },
    { source: 'Current user was successfully updated', target: 'Pašreizējais lietotājs veiksmīgi atjaunināts' },
    { source: 'Saving current user failed', target: 'Neizdevās saglabāt pašreizējo lietotāju' },

    // My Apps
    { source: 'Type to search...', target: 'Rakstiet, lai meklētu...' },
    { source: 'My Apps', target: 'Manas lietojumprogrammas' },
    { source: 'New App', target: 'Jauna lietojumprogramma' },
    { source: 'Builder', target: 'Veidotājs' },
    { source: 'App', target: 'Lietojumprogramma' },
    { source: 'continue install', target: 'turpināt instalēšanu' },
    { source: 'Open builder', target: 'Atvērt veidotāju' },
    { source: 'View published', target: 'Skatīt publicēto' },
    { source: 'Delete App', target: 'Dzēst lietojumprogrammu' },
    { source: 'Start from a template', target: 'Sākt no veidnes' },
    { source: 'Preview', target: 'Priekšskatījums' },
    { source: 'Contact Support', target: 'Sazinieties ar atbalsta dienestu' },
    { source: 'Documentation', target: 'Dokumentācija' },
    { source: 'Feature Requests', target: 'Funkciju pieprasījumi' },
    { source: 'See What’s New', target: 'Skatiet, kas jauns' },
    { source: 'Search templates...', target: 'Meklēt veidnes...' },
    { source: 'any', target: 'jebkurš' },
    { source: 'more', target: 'vairāk' },
    { source: 'Choose Data Source', target: 'Izvēlieties datu avotu' },
    { source: 'works with 30+ data sources', target: 'darbojas ar 30+ datu avotiem' },
    { source: 'Use this template', target: 'Izmantot šo veidni' },
    { source: 'stores data in Jet Tables', target: 'glabā datus Jet Tabulās' },
    { source: 'New Data', target: 'Jauni dati' },
    { source: 'using {0}', target: 'izmantojot {0}' },
    { source: "Can't find resource you're looking for?", target: 'Nevar atrast resursu, kuru meklējat?' },
    { source: 'Admin Panel', target: 'Administrācijas panelis' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'Datu saraksts, izveidošana un atjaunināšana (CRUD)'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target:
        'Izveidojiet pielāgotu administrācijas paneli, kas balstīts uz jebkādām datubāzēm, lietotnēm un API, piemēram, Stripe, Twilio un GraphQL.'
    },
    { source: 'All Integrations', target: 'Visas integrācijas' },
    { source: 'Databases', target: 'Datubāzes' },
    { source: 'APIs', target: 'API' },
    { source: 'Frameworks', target: 'Sistēmas ietvari' },
    { source: 'Storages', target: 'Glabāšanas telpas' },

    // Sign In
    { source: 'Good morning', target: 'Labrīt' },
    { source: 'Good afternoon', target: 'Labdien' },
    { source: 'Good evening', target: 'Labvakar' },
    { source: 'Sign In', target: 'Pieteikties' },
    { source: 'Welcome Back.', target: 'Laipni lūdzam atpakaļ.' },
    { source: 'Sign in with {0}', target: 'Pieteikties ar {0}' },
    { source: 'or login with', target: 'vai pieteikties ar' },
    { source: 'Enter E-mail', target: 'Ievadiet e-pastu' },
    { source: 'Enter password', target: 'Ievadiet paroli' },
    { source: 'Login', target: 'Pieslēgties' },
    { source: 'Create new account', target: 'Izveidot jaunu kontu' },
    { source: 'Forgot my password', target: 'Aizmirsu paroli' },
    { source: 'required', target: 'nepieciešams' },
    { source: 'incorrect Email', target: 'nepareizs e-pasts' },
    { source: 'Minimum password length {0}', target: 'Minimālais paroles garums {0}' },
    { source: 'Unable to Sign In', target: 'Nevar pieteikties' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'Sākt <span class="auth-form__accent">bez maksas šodien</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target:
        'Nav nepieciešama kredītkarte. Jūs saņemsit visas uzlabotās funkcijas bez maksas 14 dienas pēc PRO izmēģinājuma.'
    },
    { source: 'Enter First Name', target: 'Ievadiet vārdu' },
    { source: 'Enter Last Name (optional)', target: 'Ievadiet uzvārdu (neobligāti)' },
    { source: 'Enter Email', target: 'Ievadiet e-pastu' },
    { source: 'Password', target: 'Parole' },
    { source: 'Repeat Password', target: 'Atkārtot paroli' },
    { source: 'By signing in you’re okay with our', target: 'Piesakoties, jūs piekrītat mūsu' },
    { source: 'Creating an account means you’re okay with our', target: 'Veidojot kontu, jūs piekrītat mūsu' },
    { source: 'Terms of Service', target: 'Pakalpojuma noteikumi' },
    { source: 'Privacy Policy', target: 'Privātuma politika' },
    { source: 'and', target: 'un' },
    { source: 'Create your free account', target: 'Izveidojiet savu bezmaksas kontu' },
    { source: 'Already have an account', target: 'Jau ir konts' },
    { source: 'Unable to Sign Up', target: 'Nevar reģistrēties' },

    // Restore password
    { source: 'Reset your password', target: 'Atiestatīt paroli' },
    { source: 'Email Address', target: 'E-pasta adrese' },
    { source: 'Reset password', target: 'Atiestatīt paroli' },
    { source: 'Return to Sign In', target: 'Atgriezties pie pieteikšanās' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'Lūdzu, pārbaudiet savu e-pastu – <strong>{0}</strong>. Mēs esam nosūtījuši validācijas saiti, kurai jāseko, lai mainītu paroli.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be at least 8 characters.',
      target: 'Gandrīz pabeigts, vienkārši ievadiet jauno paroli zemāk. <br>Jābūt vismaz 8 rakstzīmēm.'
    },
    { source: 'Reset password & Sign In', target: 'Atiestatīt paroli un pieteikties' },
    { source: 'Unable to Send Code', target: 'Nevar nosūtīt kodu' },
    { source: 'Unable to Change Password', target: 'Nevar mainīt paroli' },

    // Email Verification
    { source: 'Email Verification', target: 'E-pasta apstiprināšana' },
    { source: 'Resend verification code', target: 'Atkārtoti nosūtīt apstiprināšanas kodu' },
    { source: 'Verification email sent', target: 'Apstiprināšanas e-pasts nosūtīts' },
    { source: 'Your Email is now verified', target: 'Jūsu e-pasts ir apstiprināts' },
    { source: 'Request is incorrect', target: 'Pieprasījums ir nepareizs' },

    // Invites
    {
      source: 'Join <span class="auth-form__accent">{0}</span>',
      target: 'Pievienoties <span class="auth-form__accent">{0}</span>'
    },
    {
      source: '<strong>{0}</strong> has invited you to join <strong>{1}</strong>',
      target: '<strong>{0}</strong> ir aicinājis jūs pievienoties <strong>{1}</strong>'
    },
    {
      source: 'Someone has invited you to join <strong>{0}</strong>',
      target: 'Kāds ir aicinājis jūs pievienoties <strong>{0}</strong>'
    },
    {
      source: 'You are joining <strong>{0}</strong> using invite link',
      target: 'Jūs pievienojaties <strong>{0}</strong>, izmantojot ielūguma saiti'
    },
    { source: 'Join', target: 'Pievienoties' },
    { source: 'Go to home page', target: 'Doties uz sākumlapu' },
    { source: 'Invite link is wrong', target: 'Ielūguma saite ir nepareiza' },
    {
      source:
        'Looks like your invitation link has expired or maybe you have followed the wrong link. Please try to ask to invite your again.',
      target:
        'Izskatās, ka jūsu ielūguma saite ir beigusies vai varbūt jūs esat sekojis nepareizai saitei. Lūdzu, mēģiniet lūgt ielūgumu vēlreiz.'
    },
    {
      source: 'Unfortunately we failed to load information about this invitation',
      target: 'Diemžēl mums neizdevās ielādēt informāciju par šo ielūgumu'
    },

    // Users & Teams
    { source: 'Members of {0}', target: '{0} dalībnieki' },
    { source: 'How to get started', target: 'Kā sākt' },
    { source: 'Users API', target: 'Lietotaju API' },
    { source: 'Teams API', target: 'Komandu API' },
    { source: 'Invite Member', target: 'Ielūgt dalībnieku' },
    { source: 'Add User property', target: 'Pievienot lietotāja īpašību' },
    { source: 'Add Team property', target: 'Pievienot komandas īpašību' },
    { source: 'Edit property', target: 'Rediģēt īpašību' },
    { source: 'Delete property', target: 'Dzēst īpašību' },
    { source: 'Users', target: 'Lietotāji' },
    { source: 'Teams', target: 'Komandas' },
    { source: 'Search members', target: 'Meklēt dalībniekus' },
    { source: 'Search teams', target: 'Meklēt komandas' },
    { source: '{0} pages', target: '{0} lapas' },
    { source: 'No members', target: 'Nav dalībnieku' }
  ]
};

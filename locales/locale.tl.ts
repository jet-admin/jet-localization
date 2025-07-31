import { Locale } from './locale';

export const locale: Locale = {
  name: 'tagalog',
  language: 'tl',
  items: [
    // General
    { source: 'Save', target: 'I-save' },
    { source: 'Create', target: 'Lumikha' },
    { source: 'Duplicating', target: 'Kinokopya' },
    { source: 'Duplicate', target: 'Kopyahin' },
    { source: 'Mass Edit', target: 'Maramihang Pag-edit' },
    { source: 'Export', target: 'I-export' },
    { source: 'Import', target: 'I-import' },
    { source: 'Delete', target: 'Tanggalin' },
    { source: 'Continue', target: 'Magpatuloy' },
    { source: 'Submit', target: 'Ipasa' },
    { source: 'Cancel', target: 'Kanselahin' },
    { source: 'Loading', target: 'Naglo-load' },
    { source: 'Please wait...', target: 'Mangyaring maghintay...' },
    { source: 'Loading failed', target: 'Nabigo ang paglo-load' },
    { source: 'Unknown error', target: 'Hindi kilalang error' },
    { source: 'Add', target: 'Magdagdag' },
    { source: 'or', target: 'o' },
    { source: 'Hours', target: 'Oras' },
    { source: 'Minutes', target: 'Minuto' },
    { source: 'Seconds', target: 'Segundo' },
    { source: 'Saved', target: 'Nai-save' },
    { source: 'Error', target: 'Error' },
    { source: 'Page not found', target: 'Hindi nahanap ang pahina' },
    {
      source: 'The specified address is incorrect, or the page does not exist',
      target: 'Ang tinukoy na address ay hindi tama, o ang pahina ay hindi umiiral'
    },
    { source: 'Not allowed', target: 'Hindi pinapayagan' },
    {
      source: "You don't have permissions to access this page",
      target: 'Wala kang pahintulot na i-access ang pahinang ito'
    },
    { source: 'Are you sure want to close?', target: 'Sigurado ka bang nais mong isara?' },
    { source: 'Close', target: 'Isara' },

    // Actions
    { source: 'Action executed', target: 'Naipatupad ang aksyon' },
    { source: 'Action executed successfully', target: 'Matagumpay na naipatupad ang aksyon' },
    { source: 'Action failed', target: 'Nabigo ang aksyon' },
    {
      source: "You don't have permission for run this operation",
      target: 'Wala kang pahintulot na patakbuhin ang operasyong ito'
    },
    { source: 'Specify parameters', target: 'Tukuyin ang mga parameter' },
    { source: 'Executing action', target: 'Isinasagawa ang aksyon' },
    { source: 'You are executing <strong>{0}</strong>', target: 'Isinasagawa mo ang <strong>{0}</strong>' },
    { source: 'Please fill in the parameters below.', target: 'Mangyaring punan ang mga parameter sa ibaba.' },
    { source: 'Execute', target: 'Isagawa' },
    { source: 'Executing', target: 'Isinasagawa' },
    { source: 'Finished', target: 'Tapos na' },
    { source: 'Done', target: 'Tapos' },

    // Export
    { source: 'Records Export', target: 'I-export ang mga Rekord' },
    { source: 'Downloading records data as a file', target: 'Nagda-download ng data ng mga rekord bilang file' },
    { source: 'Choose format', target: 'Pumili ng format' },
    { source: 'Number of exporting records', target: 'Bilang ng mga ie-export na rekord' },
    { source: { label: 'Export', context: 'submit' }, target: 'I-export' },
    { source: 'Exporting', target: 'Nag-e-export' },
    { source: 'Export completed', target: 'Natapos ang Pag-export' },
    { source: 'Failed to export', target: 'Nabigo ang pag-export' },

    // Components
    { source: 'optional', target: 'opsyonal' },
    { source: 'choose', target: 'pumili' },
    { source: 'Clear value', target: 'I-clear ang halaga' },
    { source: 'loading...', target: 'naglo-load...' },
    { source: 'Nothing found', target: 'Walang nahanap' },
    { source: 'Search...', target: 'Maghanap...' },
    { source: 'Enter at least {0} characters', target: 'Maglagay ng hindi bababa sa {0} na mga character' },
    { source: 'No options', target: 'Walang mga opsyon' },
    { source: 'Drop files here or', target: 'I-drop ang mga file dito o' },
    { source: 'Upload new', target: 'Mag-upload ng bago' },
    { source: 'Clear', target: 'I-clear' },
    { source: 'Download', target: 'I-download' },
    { source: 'Choose file', target: 'Pumili ng file' },
    { source: 'Choose files', target: 'Pumili ng mga file' },
    { source: 'Scan with Camera', target: 'I-scan gamit ang Camera' },
    { source: 'Scan Image file', target: 'I-scan ang file ng Imahen' },
    { source: 'Choose camera', target: 'Pumili ng camera' },
    { source: 'Stop scanning', target: 'Itigil ang pag-scan' },
    { source: 'Scan again', target: 'I-scan muli' },
    { source: 'Use this scan', target: 'Gamitin ang scan na ito' },
    { source: 'Failed to scan', target: 'Nabigo ang pag-scan' },
    {
      source: 'Code failed to scan, please try another image',
      target: 'Nabigo ang pag-scan ng code, mangyaring subukan ang ibang larawan'
    },
    { source: 'current', target: 'kasalukuyan' },
    { source: 'Day', target: 'Araw' },
    { source: 'Week', target: 'Linggo' },
    { source: 'Month', target: 'Buwan' },
    { source: 'Year', target: 'Taon' },
    { source: 'Today', target: 'Ngayon' },
    { source: 'Daily', target: 'Araw-araw' },
    { source: 'Weekly', target: 'Lingguhan' },
    { source: 'Monthly', target: 'Buwan-buwan' },
    { source: 'Quarterly', target: 'Kwartuhan' },
    { source: 'Yearly', target: 'Taon-taon' },
    { source: 'Hourly', target: 'Oras-oras' },
    { source: 'Minutely', target: 'Minuto-minuto' },
    { source: 'Since', target: 'Mula' },
    { source: 'Before', target: 'Bago' },
    { source: 'Between', target: 'Sa pagitan' },
    { source: 'From date', target: 'Mula sa petsa' },
    { source: 'To date', target: 'Sa petsa' },
    { source: 'Coordinates', target: 'Mga koordinato' },
    { source: 'Latitude', target: 'Latitud' },
    { source: 'Longitude', target: 'Longhitud' },
    { source: 'Default color', target: 'Kulay na default' },
    { source: 'not specified', target: 'hindi tinukoy' },
    { source: 'Sign using your finger or pointer', target: 'Pumirma gamit ang iyong daliri o pointer' },

    // List components
    { source: 'Filter', target: 'I-filter' },
    { source: 'Filter by field', target: 'I-filter ayon sa field' },
    { source: 'Filter by...', target: 'I-filter ayon sa...' },
    { source: 'Back', target: 'Bumalik' },
    { source: 'Back to {0} fields', target: 'Bumalik sa {0} na mga field' },
    { source: 'Choose {0} from list', target: 'Pumili ng {0} mula sa listahan' },
    { source: '{0} fields', target: '{0} na mga field' },
    { source: '{0} relationships', target: '{0} na mga relasyon' },
    { source: 'Aggregate {0}', target: 'Pinagsama-sama na {0}' },
    { source: 'No fields to select', target: 'Walang mga field na mapipili' },
    { source: 'Enter value...', target: 'Maglagay ng halaga...' },
    { source: 'Exclude', target: 'Itangi' },
    { source: 'Actions', target: 'Mga Aksyon' },
    { source: 'Search', target: 'Maghanap' },
    { source: 'Sort 1 → 9', target: 'Ayusin mula 1 → 9' },
    { source: 'Sort 9 → 1', target: 'Ayusin mula 9 → 1' },
    { source: 'Sort A → Z', target: 'Ayusin mula A → Z' },
    { source: 'Sort Z → A', target: 'Ayusin mula Z → A' },
    { source: 'Refresh automatically', target: 'I-refresh nang awtomatiko' },
    { source: 'All', target: 'Lahat' },
    { source: 'Selected', target: 'Napili' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'Sa kasamaang-palad, walang {0} na tumutugma sa iyong katanungan ang natagpuan'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'Kinukuha namin ang {0}, mangyaring maghintay...' },
    { source: 'Add filter', target: 'Magdagdag ng filter' },
    { source: 'Delete this filter', target: 'Tanggalin ang filter na ito' },
    { source: 'Toggle ordering', target: 'I-toggle ang pag-aayos' },
    { source: 'Not configured', target: 'Hindi nakakonfigura' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'Sa kasamaang palad, hindi pa nakakonfigura ang sangkap na ito'
    },
    { source: 'records', target: 'mga talaan' },
    { source: '{0} items', target: '{0} na mga item' },

    // Menu
    { source: 'Users & Teams', target: 'Mga Gumagamit at Mga Koponan' },
    { source: 'Billing', target: 'Pagsingil' },
    { source: 'Billing & Plans', target: 'Pagsingil at Mga Plano' },
    { source: 'API keys', target: 'Mga susi ng API' },
    { source: 'Dark Mode', target: 'Madilim na Mode' },
    { source: 'Light Mode', target: 'Maliwanag na Mode' },
    { source: 'Disable Staff', target: 'Huwag Paganahin ang Staff' },
    { source: 'Enable Staff', target: 'Paganahin ang Staff' },
    { source: 'Manage Templates', target: 'Pamahalaan ang Mga Template' },
    { source: 'Logout', target: 'Mag-logout' },
    { source: 'Activity Log', target: 'Log ng Aktibidad' },
    { source: 'Collaborations', target: 'Pakikipagtulungan' },
    { source: 'Open Visual Builder', target: 'Buksan ang Visual Builder' },

    // Filters
    { source: 'equals', target: 'katumbas' },
    { source: 'does not equal', target: 'hindi katumbas' },
    { source: '{0} equals {1}', target: '{0} ay katumbas ng {1}' },
    { source: '{0} does not equal {1}', target: '{0} ay hindi katumbas ng {1}' },

    { source: 'contains', target: 'naglalaman' },
    { source: 'does not contain', target: 'hindi naglalaman' },
    { source: '{0} contains {1}', target: '{0} ay naglalaman ng {1}' },
    { source: '{0} not contains {1}', target: '{0} ay hindi naglalaman ng {1}' },

    { source: 'starts with', target: 'nagsisimula sa' },
    { source: 'does not start with', target: 'hindi nagsisimula sa' },
    { source: '{0} starts with {1}', target: '{0} ay nagsisimula sa {1}' },
    { source: '{0} does not start with {1}', target: '{0} ay hindi nagsisimula sa {1}' },

    { source: 'ends with', target: 'nagtatapos sa' },
    { source: 'does not end with', target: 'hindi nagtatapos sa' },
    { source: '{0} ends with {1}', target: '{0} ay nagtatapos sa {1}' },
    { source: '{0} does not end with {1}', target: '{0} ay hindi nagtatapos sa {1}' },

    { source: 'greater than', target: 'mas malaki kaysa' },
    { source: 'is not greater than', target: 'hindi mas malaki kaysa' },
    { source: '{0} is greater than {1}', target: '{0} ay mas malaki kaysa sa {1}' },
    { source: '{0} not greater than {1}', target: '{0} ay hindi mas malaki kaysa sa {1}' },

    { source: 'greater than or equals', target: 'mas malaki kaysa o katumbas' },
    { source: 'is not greater than or equals', target: 'hindi mas malaki kaysa o katumbas' },
    { source: '{0} is greater than or equals {1}', target: '{0} ay mas malaki kaysa o katumbas {1}' },
    { source: '{0} is not greater than or equals {1}', target: '{0} ay hindi mas malaki kaysa o katumbas {1}' },

    { source: 'less than', target: 'mas mababa kaysa' },
    { source: 'is not less than', target: 'hindi mas mababa kaysa' },
    { source: '{0} is less than {1}', target: '{0} ay mas mababa kaysa sa {1}' },
    { source: '{0} is not less than {1}', target: '{0} ay hindi mas mababa kaysa sa {1}' },

    { source: 'less than or equals', target: 'mas mababa kaysa o katumbas' },
    { source: 'is not less than or equals', target: 'hindi mas mababa kaysa o katumbas' },
    { source: '{0} is less than or equals {1}', target: '{0} ay mas mababa kaysa o katumbas {1}' },
    { source: '{0} is not less than or equals {1}', target: '{0} ay hindi mas mababa kaysa o katumbas {1}' },

    { source: 'one of', target: 'isa sa' },
    { source: 'is one of', target: 'isa sa' },
    { source: 'is not one of', target: 'hindi isa sa' },
    { source: '{0} is one of {1}', target: '{0} ay isa sa {1}' },
    { source: '{0} is not one of {1}', target: '{0} ay hindi isa sa {1}' },

    { source: 'is null', target: 'ay null' },
    { source: 'is not null', target: 'ay hindi null' },
    { source: '{0} is null', target: '{0} ay null' },
    { source: '{0} is not null', target: '{0} ay hindi null' },

    { source: 'is future', target: 'ay nasa hinaharap' },
    { source: 'in the future', target: 'sa hinaharap' },
    { source: 'is not in the future', target: 'ay hindi sa hinaharap' },
    { source: '{0} is in the future', target: '{0} ay nasa hinaharap' },
    { source: '{0} is not in the future', target: '{0} ay hindi sa hinaharap' },

    { source: 'is past', target: 'ay nasa nakaraan' },
    { source: 'in the past', target: 'sa nakaraan' },
    { source: 'is not in the past', target: 'ay hindi sa nakaraan' },
    { source: '{0} is in the past', target: '{0} ay nasa nakaraan' },
    { source: '{0} is not in the past', target: '{0} ay hindi sa nakaraan' },

    { source: 'is Today', target: 'ay Ngayon' },
    { source: 'today', target: 'ngayon' },
    { source: 'is not today', target: 'ay hindi ngayon' },
    { source: '{0} is today', target: '{0} ay Ngayon' },
    { source: '{0} is not today', target: '{0} ay hindi Ngayon' },

    { source: 'is Yesterday', target: 'ay Kahapon' },
    { source: 'yesterday', target: 'kahapon' },
    { source: 'is not yesterday', target: 'ay hindi kahapon' },
    { source: '{0} is yesterday', target: '{0} ay Kahapon' },
    { source: '{0} is not yesterday', target: '{0} ay hindi Kahapon' },

    { source: 'is Last Week', target: 'ay noong Nakaraang Linggo' },
    { source: 'last week', target: 'noong nakaraang linggo' },
    { source: 'is not last week', target: 'ay hindi noong nakaraang linggo' },
    { source: '{0} is last week', target: '{0} ay noong Nakaraang Linggo' },
    { source: '{0} is not last week', target: '{0} ay hindi noong Nakaraang Linggo' },

    { source: 'is Last Month', target: 'ay noong Nakaraang Buwan' },
    { source: 'last month', target: 'noong nakaraang buwan' },
    { source: 'is not last month', target: 'ay hindi noong nakaraang buwan' },
    { source: '{0} is last month', target: '{0} ay noong Nakaraang Buwan' },
    { source: '{0} is not last month', target: '{0} ay hindi noong Nakaraang Buwan' },

    { source: 'is Last Quarter', target: 'ay noong Nakaraang Kwarter' },
    { source: 'last quarter', target: 'noong nakaraang kwarter' },
    { source: 'is not last quarter', target: 'ay hindi noong nakaraang kwarter' },
    { source: '{0} is last quarter', target: '{0} ay noong Nakaraang Kwarter' },
    { source: '{0} is not last quarter', target: '{0} ay hindi noong Nakaraang Kwarter' },

    { source: 'is Last Year', target: 'ay noong nakaraang Taon' },
    { source: 'last year', target: 'noong nakaraang taon' },
    { source: 'is not last year', target: 'ay hindi noong nakaraang taon' },
    { source: '{0} is last year', target: '{0} ay noong nakaraang Taon' },
    { source: '{0} is not last year', target: '{0} ay hindi noong nakaraang Taon' },

    { source: 'is Last X Days', target: 'ay noong Huling X na Araw' },
    { source: 'last X days', target: 'huling X na araw' },
    { source: 'is not last X days', target: 'ay hindi noong huling X na araw' },
    { source: '{0} is last {1} days', target: '{0} ay huling {1} na araw' },
    { source: '{0} is not last {1} days', target: '{0} ay hindi huling {1} na araw' },

    { source: 'is Current Week', target: 'ay Kasalukuyang Linggo' },
    { source: 'current week', target: 'kasalukuyang linggo' },
    { source: 'is not current week', target: 'ay hindi kasalukuyang linggo' },
    { source: '{0} is current week', target: '{0} ay Kasalukuyang Linggo' },
    { source: '{0} is not current week', target: '{0} ay hindi Kasalukuyang Linggo' },

    { source: 'is Current Month', target: 'ay Kasalukuyang Buwan' },
    { source: 'current month', target: 'kasalukuyang buwan' },
    { source: 'is not current month', target: 'ay hindi kasalukuyang buwan' },
    { source: '{0} is current month', target: '{0} ay Kasalukuyang Buwan' },
    { source: '{0} is not current month', target: '{0} ay hindi Kasalukuyang Buwan' },

    { source: 'is Current Quarter', target: 'ay Kasalukuyang Kwarter' },
    { source: 'current quarter', target: 'kasalukuyang kwarter' },
    { source: 'is not current quarter', target: 'ay hindi kasalukuyang kwarter' },
    { source: '{0} is current quarter', target: '{0} ay Kasalukuyang Kwarter' },
    { source: '{0} is not current quarter', target: '{0} ay hindi Kasalukuyang Kwarter' },

    { source: 'is Current Year', target: 'ay Kasalukuyang Taon' },
    { source: 'current year', target: 'kasalukuyang taon' },
    { source: 'is not current year', target: 'ay hindi kasalukuyang taon' },
    { source: '{0} is current year', target: '{0} ay Kasalukuyang Taon' },
    { source: '{0} is not current year', target: '{0} ay hindi Kasalukuyang Taon' },

    { source: 'is Previous Week', target: 'ay Nakaraang Linggo' },
    { source: 'previous week', target: 'nakaraang linggo' },
    { source: 'is not previous week', target: 'ay hindi Nakaraang linggo' },
    { source: '{0} is previous week', target: '{0} ay Nakaraang Linggo' },
    { source: '{0} is not previous week', target: '{0} ay hindi Nakaraang Linggo' },

    { source: 'is Previous Month', target: 'ay Nakaraang Buwan' },
    { source: 'previous month', target: 'nakaraang buwan' },
    { source: 'is not previous month', target: 'ay hindi Nakaraang Buwan' },
    { source: '{0} is previous month', target: '{0} ay Nakaraang Buwan' },
    { source: '{0} is not previous month', target: '{0} ay hindi Nakaraang Buwan' },

    { source: 'is Previous Quarter', target: 'ay Nakaraang Kwarter' },
    { source: 'previous quarter', target: 'nakaraang kwarter' },
    { source: 'is not previous quarter', target: 'ay hindi Nakaraang Kwarter' },
    { source: '{0} is previous quarter', target: '{0} ay Nakaraang Kwarter' },
    { source: '{0} is not previous quarter', target: '{0} ay hindi Nakaraang Kwarter' },

    { source: 'is Previous Year', target: 'ay Nakaraang Taon' },
    { source: 'previous year', target: 'nakaraang taon' },
    { source: 'is not previous year', target: 'ay hindi Nakaraang Taon' },
    { source: '{0} is previous year', target: '{0} ay Nakaraang Taon' },
    { source: '{0} is not previous year', target: '{0} ay hindi Nakaraang Taon' },

    { source: 'is Previous X Days', target: 'ay Nakaraang X na mga Araw' },
    { source: 'previous X days', target: 'nakaraang X na mga araw' },
    { source: 'is not previous X days', target: 'ay hindi Nakaraang X na mga araw' },
    { source: '{0} is previous {1} days', target: '{0} ay Nakaraang {1} na mga araw' },
    { source: '{0} is not previous {1} days', target: '{0} ay hindi Nakaraang {1} na mga araw' },

    { source: 'is empty', target: 'walang laman' },
    { source: 'is not empty', target: 'ay hindi walang laman' },
    { source: '{0} is empty', target: '{0} ay walang laman' },
    { source: '{0} is not empty', target: '{0} ay hindi walang laman' },

    { source: 'covered by', target: 'saklaw ng' },
    { source: 'is not covered by', target: 'ay hindi saklaw ng' },
    { source: '{0} covered by {1}', target: '{0} ay saklaw ng {1}' },
    { source: '{0} is not covered by {1}', target: '{0} ay hindi saklaw ng {1}' },

    // Activity log
    { source: 'No activities found', target: 'Walang aktibidad na natagpuan' },
    {
      source: 'Start to working with data to log activities.',
      target: 'Simulang magtrabaho gamit ang data upang i-log ang mga aktibidad.'
    },
    { source: 'All Activity', target: 'Lahat ng Aktibidad' },
    { source: 'Create Record', target: 'Lumikha ng Rekord' },
    { source: 'Update Record', target: 'I-update ang Rekord' },
    { source: 'Delete Record', target: 'Tanggalin ang Rekord' },
    { source: 'All Members', target: 'Lahat ng Miyembro' },

    // Collaboration
    { source: 'Timeline', target: 'Timeline' },
    { source: 'Messages', target: 'Mga Mensahe' },
    { source: 'Activity', target: 'Aktibidad' },
    { source: 'Start chatting with your team', target: 'Simulan ang pakikipag-chat sa iyong koponan' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'Magpadala ng mensahe tungkol sa kasalukuyang pahina upang masubaybayan ang mahalagang impormasyon.'
    },
    { source: 'Your Message', target: 'Iyong Mensahe' },
    { source: 'Send', target: 'Ipadala' },

    // Share
    { source: 'Invite members', target: 'Mag-imbita ng mga miyembro' },
    { source: 'Public share', target: 'Pampublikong pagbabahagi' },
    { source: 'Sign Up', target: 'Mag-sign Up' },
    { source: 'Members', target: 'Mga Miyembro' },
    { source: 'Invite with Email', target: 'Mag-imbita gamit ang Email' },
    { source: 'Invite someone...', target: 'Mag-imbita ng iba...' },
    { source: 'Send Invite', target: 'Ipadala ang Imbitasyon' },
    {
      source: 'Limit access to your data by user properties',
      target: 'Limitahan ang pag-access sa iyong data sa pamamagitan ng mga katangian ng user'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: 'Ilagay ang email ng taong nais mong imbitahan upang makipagtulungan.'
    },
    { source: 'Copy', target: 'Kopyahin' },
    { source: 'Invite with Link', target: 'Mag-imbita gamit ang Link' },
    { source: 'Remove link', target: 'Alisin ang link' },
    { source: 'Add Invite Link', target: 'Magdagdag ng Imbitasyon na Link' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'Kahit sino sa internet na may link na ito ay makakasali sa napiling koponan.'
    },
    { source: 'Pending Invites', target: 'Mga Nakabinbing Imbitasyon' },
    { source: 'Cancel invite', target: 'Kanselahin ang imbitasyon' },
    { source: 'Active Members', target: 'Mga Aktibong Miyembro' },
    { source: 'Remove member', target: 'Tanggalin ang miyembro' },
    {
      source: 'You are setting sharing for the current page',
      target: 'Itinatakda mo ang pagbabahagi para sa kasalukuyang pahina'
    },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'Itinatakda mo ang pagbabahagi para sa lahat ng pahina ng iyong App.'
    },
    { source: 'Public access link', target: 'Pampublikong link ng pag-access' },
    { source: 'Updating public access...', target: 'Ina-update ang pampublikong pag-access...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'Sino man ang may link na ito ay makikita ang kasalukuyang pahina. Sa ganitong paraan maaari mo ring i-embed ang kasalukuyang pahina sa ibang website.'
    },
    { source: 'Embed code (IFRAME)', target: 'I-embed ang code (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target:
        'I-paste ang code na ito sa HTML code ng iyong website kung saan mo gustong lumitaw ang kasalukuyang pahina.'
    },
    { source: 'link', target: 'link' },
    { source: 'invited', target: 'inanyayahan' },
    { source: 'Choose Team', target: 'Pumili ng Koponan' },
    { source: 'App Teams', target: 'Mga Koponan ng App' },
    { source: 'Built-In Teams', target: 'Mga Nakapaloob na Koponan' },
    { source: 'Clear Team', target: 'I-clear ang Koponan' },
    { source: 'Can build application and modify data', target: 'Maaaring bumuo ng application at baguhin ang data' },
    { source: 'Can modify data in application', target: 'Maaaring baguhin ang data sa application' },
    {
      source: 'Can only view data without modification',
      target: 'Maaari lamang tingnan ang data nang walang pagbabago'
    },
    { source: 'Add Team', target: 'Magdagdag ng Koponan' },
    { source: 'Edit Team', target: 'I-edit ang Koponan' },
    { source: 'Adding Team', target: 'Nagdaragdag ng Koponan' },
    {
      source: 'Keep control over who has access to current App',
      target: 'Panatilihin ang kontrol kung sino ang may access sa kasalukuyang App'
    },
    { source: 'Enter Team Name', target: 'Ilagay ang Pangalan ng Koponan' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'I-type ang pangalan ng koponan, i.e: Suporta, Benta, Marketing, etc.'
    },
    { source: 'Add a new member to this team.', target: 'Magdagdag ng bagong miyembro sa koponang ito.' },
    { source: 'Invite new member', target: 'Mag-imbita ng bagong miyembro' },
    { source: 'User', target: 'Gumagamit' },
    { source: 'Date Added', target: 'Petsa ng Pagdagdag' },
    { source: 'You', target: 'Ikaw' },
    { source: 'Edit', target: 'I-edit' },
    { source: 'No users in this team', target: 'Walang gumagamit sa koponang ito' },
    { source: 'Page Permissions', target: 'Mga Pahintulot ng Pahina' },
    { source: 'App Permissions', target: 'Mga Pahintulot ng App' },
    { source: 'Properties', target: 'Mga Katangian' },
    { source: 'Page name', target: 'Pangalan ng Pahina' },
    { source: 'Access', target: 'Pag-access' },
    { source: 'Full Access', target: 'Buong Pag-access' },
    { source: 'Read Only', target: 'Basahin Lamang' },
    { source: 'No Access', target: 'Walang Pag-access' },
    { source: 'Read', target: 'Basahin' },
    { source: 'Update', target: 'I-update' },
    { source: 'Write', target: 'Isulat' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'Tanggalin' },
    { source: 'Custom Access', target: 'Pasadyang Pag-access' },
    { source: 'Read, create, update and delete data', target: 'Basahin, lumikha, i-update at tanggalin ang data' },
    { source: 'Choose allowed operations granularly', target: 'Pumili ng pinahihintulutang operasyon nang detalyado' },
    { source: 'Without any access to data', target: 'Walang kahit anong pag-access sa data' },
    { source: 'Name', target: 'Pangalan' },
    { source: 'Active', target: 'Aktibo' },
    { source: 'Settings', target: 'Mga Setting' },
    { source: 'Members and Teams', target: 'Mga Miyembro at Koponan' },
    { source: 'App Builder', target: 'App Builder' },
    { source: 'Collection Permissions', target: 'Mga Pahintulot ng Koleksyon' },
    { source: "Grant permissions to app's collection", target: 'Bigyan ng mga pahintulot ang koleksyon ng app' },
    { source: 'Collection', target: 'Koleksyon' },
    {
      source: 'Limit access to your data by team properties',
      target: 'Limitahan ang pag-access sa iyong data sa pamamagitan ng mga katangian ng koponan'
    },
    { source: 'Save Team', target: 'I-save ang Koponan' },
    { source: 'Create Team', target: 'Lumikha ng Koponan' },
    { source: 'Value', target: 'Halaga' },
    { source: 'No properties specified', target: 'Walang tinukoy na mga katangian' },

    // Navigation
    { source: 'Current App', target: 'Kasalukuyang App' },
    { source: 'Home', target: 'Home' },

    // Profile
    {
      source: 'We are fetching user data, please, wait...',
      target: 'Kinukuha namin ang data ng user, mangyaring maghintay...'
    },
    { source: 'Profile Settings', target: 'Mga Setting ng Profile' },
    { source: 'Basic information about your account.', target: 'Pangunahing impormasyon tungkol sa iyong account.' },
    { source: 'Photo', target: 'Larawan' },
    { source: 'your photo', target: 'iyong larawan' },
    { source: 'Change', target: 'Palitan' },
    { source: 'Upload', target: 'Mag-upload' },
    { source: 'Photo was successfully updated', target: 'Matagumpay na na-update ang larawan' },
    { source: 'Photo was successfully deleted', target: 'Matagumpay na natanggal ang larawan' },
    { source: 'First Name', target: 'Unang Pangalan' },
    { source: 'Last Name', target: 'Huling Pangalan' },
    { source: 'Your Email', target: 'Iyong Email' },
    { source: 'Email Change', target: 'Pagbabago ng Email' },
    { source: 'New Email', target: 'Bagong Email' },
    { source: 'Change Email', target: 'Palitan ang Email' },
    { source: 'Check your inbox', target: 'Suriin ang iyong inbox' },
    { source: 'Confirmation Email was sent to {0}', target: 'Ipinadala ang Pagkumpirma ng Email sa {0}' },
    { source: 'Changing Email failed', target: 'Nabigo ang Pagbabago ng Email' },
    { source: 'Password Change', target: 'Palitan ang Password' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target:
        'Dapat sapat na matatag ang password upang maprotektahan ang iyong account, kaya gawing hindi bababa sa 12 character ang haba.'
    },
    { source: 'Current Password', target: 'Kasalukuyang Password' },
    { source: 'New Password', target: 'Bagong Password' },
    { source: 'Confirm New Password', target: 'Kumpirmahin ang Bagong Password' },
    { source: 'Change Password', target: 'Palitan ang Password' },
    {
      source: 'Current password was successfully updated, all other sessions will be logged out shortly',
      target:
        'Matagumpay na na-update ang kasalukuyang password, ang lahat ng iba pang session ay malapit nang ma-log out'
    },
    { source: 'Saving current password failed', target: 'Nabigo ang pag-save ng kasalukuyang password' },
    { source: 'Short password', target: 'Maikling password' },
    { source: "Passwords don't match", target: 'Ang mga password ay hindi magkatugma' },
    { source: 'Personal Preferences', target: 'Mga Personal na Kagustuhan' },
    { source: 'Language', target: 'Wika' },
    { source: 'Timezone', target: 'Sona ng Oras' },
    { source: 'Current time in {0} is', target: 'Kasalukuyang oras sa {0} ay' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'Isaayos ang karagdagang mga kagustuhan para sa iyong account.'
    },
    { source: 'News & Proposals', target: 'Mga Balita at Panukala' },
    {
      source: 'Subscribe to our updates and proposals.',
      target: 'Mag-subscribe sa aming mga update at panukala.'
    },
    { source: 'Save changes', target: 'I-save ang mga pagbabago' },
    { source: 'Current user was successfully updated', target: 'Matagumpay na na-update ang kasalukuyang user' },
    { source: 'Saving current user failed', target: 'Nabigo ang pag-save ng kasalukuyang user' },

    // My Apps
    { source: 'Type to search...', target: 'Mag-type upang maghanap...' },
    { source: 'My Apps', target: 'Aking mga App' },
    { source: 'New App', target: 'Bagong App' },
    { source: 'Builder', target: 'Builder' },
    { source: 'App', target: 'App' },
    { source: 'continue install', target: 'ipagpatuloy ang pag-install' },
    { source: 'Open builder', target: 'Buksan ang builder' },
    { source: 'View published', target: 'Tingnan ang nai-publish' },
    { source: 'Delete App', target: 'Tanggalin ang App' },
    { source: 'Start from a template', target: 'Magsimula mula sa isang template' },
    { source: 'Preview', target: 'I-preview' },
    { source: 'Contact Support', target: 'Makipag-ugnay sa Suporta' },
    { source: 'Documentation', target: 'Dokumentasyon' },
    { source: 'Feature Requests', target: 'Kahilingan para sa Mga Tampok' },
    { source: 'See What’s New', target: 'Tingnan ang Bago' },
    { source: 'Search templates...', target: 'Maghanap ng mga template...' },
    { source: 'any', target: 'anumang' },
    { source: 'more', target: 'higit pa' },
    { source: 'Choose Data Source', target: 'Pumili ng Source ng Data' },
    { source: 'works with 30+ data sources', target: 'gumagana sa 30+ mga source ng data' },
    { source: 'Use this template', target: 'Gamitin ang template na ito' },
    { source: 'stores data in Jet Tables', target: 'nag-iimbak ng data sa Jet Tables' },
    { source: 'New Data', target: 'Bagong Data' },
    { source: 'using {0}', target: 'gamit ang {0}' },
    { source: "Can't find resource you're looking for?", target: 'Hindi makita ang resource na hinahanap mo?' },
    { source: 'Admin Panel', target: 'Admin Panel' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'Ilista, lumikha at i-update (CRUD) ang mga operasyon sa ibabaw ng iyong data'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target:
        'Bumuo ng pasadyang admin panel batay sa anumang databases, apps at APIs tulad ng Stripe, Twilio at GraphQL.'
    },
    { source: 'All Integrations', target: 'Lahat ng Integrasyon' },
    { source: 'Databases', target: 'Mga Database' },
    { source: 'APIs', target: 'APIs' },
    { source: 'Frameworks', target: 'Mga Framework' },
    { source: 'Storages', target: 'Mga Storage' },

    // Sign In
    { source: 'Good morning', target: 'Magandang umaga' },
    { source: 'Good afternoon', target: 'Magandang hapon' },
    { source: 'Good evening', target: 'Magandang gabi' },
    { source: 'Sign In', target: 'Mag-sign In' },
    { source: 'Welcome Back.', target: 'Welcome back.' },
    { source: 'Sign in with {0}', target: 'Mag-sign in gamit ang {0}' },
    { source: 'or login with', target: 'o mag-login gamit ang' },
    { source: 'Enter E-mail', target: 'Ilagay ang E-mail' },
    { source: 'Enter password', target: 'Ilagay ang password' },
    { source: 'Login', target: 'Mag-login' },
    { source: 'Create new account', target: 'Lumikha ng bagong account' },
    { source: 'Forgot my password', target: 'Nakalimutan ang aking password' },
    { source: 'required', target: 'kailangan' },
    { source: 'incorrect Email', target: 'maling Email' },
    { source: 'Minimum password length {0}', target: 'Pinakamababang haba ng password {0}' },
    { source: 'Unable to Sign In', target: 'Hindi makapag-sign In' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'Magsimula <span class="auth-form__accent">Libreng ngayon</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target:
        'Walang kinakailangang card. Makukuha mo ang lahat ng advanced functionality nang libre sa loob ng 14 na araw ng PRO trial.'
    },
    { source: 'Enter First Name', target: 'Ilagay ang Unang Pangalan' },
    { source: 'Enter Last Name (optional)', target: 'Ilagay ang Huling Pangalan (opsyonal)' },
    { source: 'Enter Email', target: 'Ilagay ang Email' },
    { source: 'Password', target: 'Password' },
    { source: 'Repeat Password', target: 'Ulitin ang Password' },
    {
      source: 'By signing in you’re okay with our',
      target: 'Sa pag-sign in mo ay okay ka sa aming'
    },
    {
      source: 'Creating an account means you’re okay with our',
      target: 'Ang paglikha ng account ay nangangahulugan na okay ka sa aming'
    },
    { source: 'Terms of Service', target: 'Mga Tuntunin ng Serbisyo' },
    { source: 'Privacy Policy', target: 'Patakaran sa Privacy' },
    { source: 'and', target: 'at' },
    { source: 'Create account', target: 'Gumawa ng account' },
    { source: 'Already have an account', target: 'Mayroon nang account' },
    { source: 'Unable to Sign Up', target: 'Hindi makapag-sign Up' },

    // Restore password
    { source: 'Reset your password', target: 'I-reset ang iyong password' },
    { source: 'Email Address', target: 'Email Address' },
    { source: 'Reset password', target: 'I-reset ang password' },
    { source: 'Return to Sign In', target: 'Bumalik sa Sign In' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'Mangyaring suriin ang iyong Email – <strong>{0}</strong>. Nagpadala kami ng validation link na dapat mong sundan upang mabago ang iyong password.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be at least 8 characters.',
      target:
        'Halos tapos na, ilagay lamang ang iyong bagong password sa ibaba. <br>Dapat ay hindi bababa sa 8 character.'
    },
    { source: 'Reset password & Sign In', target: 'I-reset ang password at Mag-sign In' },
    { source: 'Unable to Send Code', target: 'Hindi mapadala ang Code' },
    { source: 'Unable to Change Password', target: 'Hindi mabago ang Password' },

    // Email Verification
    { source: 'Email Verification', target: 'Pagpapatunay ng Email' },
    { source: 'Resend verification code', target: 'Muling ipadala ang code ng pagpapatunay' },
    { source: 'Verification email sent', target: 'Naipadala na ang email ng pagpapatunay' },
    { source: 'Your Email is now verified', target: 'Na-verify na ang iyong Email' },
    { source: 'Request is incorrect', target: 'Mali ang kahilingan' },

    // Invites
    {
      source: 'Join <span class="auth-form__accent">{0}</span>',
      target: 'Sumali sa <span class="auth-form__accent">{0}</span>'
    },
    {
      source: '<strong>{0}</strong> has invited you to join <strong>{1}</strong>',
      target: 'Inanyayahan ka ni <strong>{0}</strong> na sumali sa <strong>{1}</strong>'
    },
    {
      source: 'Someone has invited you to join <strong>{0}</strong>',
      target: 'May nag-anyaya sa iyo na sumali sa <strong>{0}</strong>'
    },
    {
      source: 'You are joining <strong>{0}</strong> using invite link',
      target: 'Sumasali ka sa <strong>{0}</strong> gamit ang link ng imbitasyon'
    },
    { source: 'Join', target: 'Sumali' },
    { source: 'Go to home page', target: 'Pumunta sa home page' },
    { source: 'Invite link is wrong', target: 'Mali ang link ng imbitasyon' },
    {
      source:
        'Looks like your invitation link has expired or maybe you have followed the wrong link. Please try to ask to invite your again.',
      target:
        'Mukhang nag-expire na ang iyong link ng imbitasyon o maaaring sinundan mo ang maling link. Mangyaring subukan na tanungin na imbitahan kang muli.'
    },
    {
      source: 'Unfortunately we failed to load information about this invitation',
      target: 'Sa kasamaang-palad nabigo kaming i-load ang impormasyon tungkol sa imbitasyong ito'
    },

    // Users & Teams
    { source: 'Members of {0}', target: 'Mga Miyembro ng {0}' },
    { source: 'How to get started', target: 'Paano magsimula' },
    { source: 'Users API', target: 'Users API' },
    { source: 'Teams API', target: 'Teams API' },
    { source: 'Invite Member', target: 'Mag-imbita ng Miyembro' },
    { source: 'Add User property', target: 'Magdagdag ng Katangian ng User' },
    { source: 'Add Team property', target: 'Magdagdag ng Katangian ng Koponan' },
    { source: 'Edit property', target: 'I-edit ang katangian' },
    { source: 'Delete property', target: 'Tanggalin ang katangian' },
    { source: 'Users', target: 'Mga Gumagamit' },
    { source: 'Teams', target: 'Mga Koponan' },
    { source: 'Search members', target: 'Maghanap ng mga miyembro' },
    { source: 'Search teams', target: 'Maghanap ng mga koponan' },
    { source: '{0} pages', target: '{0} na mga pahina' },
    { source: 'No members', target: 'Walang miyembro' }
  ]
};

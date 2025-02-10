import { Locale } from './locale';

export const locale: Locale = {
  name: 'kazakh',
  language: 'kk',
  items: [
    // General
    { source: 'Save', target: 'Сақтау' },
    { source: 'Create', target: 'Құру' },
    { source: 'Duplicating', target: 'Көшіру' },
    { source: 'Duplicate', target: 'Көшіру' },
    { source: 'Mass Edit', target: 'Жаппай редакциялау' },
    { source: 'Export', target: 'Экспорт' },
    { source: 'Import', target: 'Импорт' },
    { source: 'Delete', target: 'Жою' },
    { source: 'Continue', target: 'Жалғастыру' },
    { source: 'Submit', target: 'Жіберу' },
    { source: 'Cancel', target: 'Бас тарту' },
    { source: 'Loading', target: 'Жүктелуде' },
    { source: 'Please wait...', target: 'Күте тұрыңыз...' },
    { source: 'Loading failed', target: 'Жүктеу қатесі' },
    { source: 'Unknown error', target: 'Белгісіз қате' },
    { source: 'Add', target: 'Қосу' },
    { source: 'or', target: 'немесе' },
    { source: 'Hours', target: 'Сағат' },
    { source: 'Minutes', target: 'Минут' },
    { source: 'Seconds', target: 'Секунд' },
    { source: 'Saved', target: 'Сақталды' },
    { source: 'Error', target: 'Қате' },
    { source: 'Page not found', target: 'Бет табылмады' },
    {
      source: 'The specified address is incorrect, or the page does not exist',
      target: 'Көрсетілген мекенжай қате, немесе бет жоқ'
    },
    { source: 'Not allowed', target: 'Рұқсат етілмеген' },
    {
      source: "You don't have permissions to access this page",
      target: 'Бұл бетке кіруге рұқсатыңыз жоқ'
    },
    { source: 'Are you sure want to close?', target: 'Жабуды қалайсыз ба?' },
    { source: 'Close', target: 'Жабу' },

    // Actions
    { source: 'Action executed', target: 'Әрекет орындалды' },
    { source: 'Action executed successfully', target: 'Әрекет сәтті аяқталды' },
    { source: 'Action failed', target: 'Әрекет орындалмады' },
    {
      source: "You don't have permission for run this operation",
      target: 'Бұл операцияны орындауға рұқсатыңыз жоқ'
    },
    { source: 'Specify parameters', target: 'Параметрлерді көрсетіңіз' },
    { source: 'Executing action', target: 'Әрекетті орындау' },
    { source: 'You are executing <strong>{0}</strong>', target: 'Сіз <strong>{0}</strong> орындаудасыз' },
    { source: 'Please fill in the parameters below.', target: 'Төмендегі параметрлерді толтырыңыз.' },
    { source: 'Execute', target: 'Орындау' },
    { source: 'Executing', target: 'Орындау' },
    { source: 'Finished', target: 'Аяқталды' },
    { source: 'Done', target: 'Дайын' },

    // Export
    { source: 'Records Export', target: 'Деректерді экспорттау' },
    { source: 'Downloading records data as a file', target: 'Деректер файл түрінде жүктелуде' },
    { source: 'Choose format', target: 'Форматты таңдау' },
    { source: 'Number of exporting records', target: 'Экспортталатын жазбалардың саны' },
    { source: { label: 'Export', context: 'submit' }, target: 'Экспорттау' },
    { source: 'Exporting', target: 'Экспорттау' },
    { source: 'Export completed', target: 'Экспорт аяқталды' },
    { source: 'Failed to export', target: 'Экспортталмады' },

    // Components
    { source: 'optional', target: 'міндетті емес' },
    { source: 'choose', target: 'таңдау' },
    { source: 'Clear value', target: 'Мәнді тазалау' },
    { source: 'loading...', target: 'жүктелуде...' },
    { source: 'Nothing found', target: 'Ештеңе табылмады' },
    { source: 'Search...', target: 'Іздеу...' },
    { source: 'Enter at least {0} characters', target: 'Кемінде {0} таңбадан енгізіңіз' },
    { source: 'No options', target: 'Таңдау жоқ' },
    { source: 'Drop files here or', target: 'Файлдарды мұнда тастаңыз немесе' },
    { source: 'Upload new', target: 'Жаңа жүктеу' },
    { source: 'Clear', target: 'Тазалау' },
    { source: 'Download', target: 'Жүктеу' },
    { source: 'Choose file', target: 'Файлды таңдау' },
    { source: 'Choose files', target: 'Файлдарды таңдау' },
    { source: 'Scan with Camera', target: 'Камерамен сканерлеу' },
    { source: 'Scan Image file', target: 'Сурет файлын сканерлеу' },
    { source: 'Choose camera', target: 'Камераны таңдау' },
    { source: 'Stop scanning', target: 'Сканерлеуді тоқтату' },
    { source: 'Scan again', target: 'Қайта сканерлеу' },
    { source: 'Use this scan', target: 'Бұл сканерлеуді қолдану' },
    { source: 'Failed to scan', target: 'Сканерленбеді' },
    {
      source: 'Code failed to scan, please try another image',
      target: 'Код сканерленбеді, басқа суретті қолданып көріңіз'
    },
    { source: 'current', target: 'ағымдағы' },
    { source: 'Day', target: 'Күн' },
    { source: 'Week', target: 'Апта' },
    { source: 'Month', target: 'Ай' },
    { source: 'Year', target: 'Жыл' },
    { source: 'Today', target: 'Бүгін' },
    { source: 'Daily', target: 'Күнделікті' },
    { source: 'Weekly', target: 'Апталық' },
    { source: 'Monthly', target: 'Айлық' },
    { source: 'Quarterly', target: 'Тоқсандық' },
    { source: 'Yearly', target: 'Жылдық' },
    { source: 'Hourly', target: 'Сағаттық' },
    { source: 'Minutely', target: 'Минуттық' },
    { source: 'Since', target: 'Өткен уақыттан бері' },
    { source: 'Before', target: 'Бұрын' },
    { source: 'Between', target: 'Аралығында' },
    { source: 'From date', target: 'Күннен бастап' },
    { source: 'To date', target: 'Күнге дейін' },
    { source: 'Coordinates', target: 'Координаттар' },
    { source: 'Latitude', target: 'Ендік' },
    { source: 'Longitude', target: 'Бойлық' },
    { source: 'Default color', target: 'Әдепкі түс' },
    { source: 'not specified', target: 'көрсетілмеген' },
    { source: 'Sign using your finger or pointer', target: 'Қолмен немесе көрсеткішпен қол қою' },

    // List components
    { source: 'Filter', target: 'Сүзгі' },
    { source: 'Filter by field', target: 'Өріс бойынша сүзу' },
    { source: 'Filter by...', target: 'Сүзу түрлері...' },
    { source: 'Back', target: 'Артқа' },
    { source: 'Back to {0} fields', target: '{0} өрістеріне оралу' },
    { source: 'Choose {0} from list', target: 'Тізімнен {0} таңдау' },
    { source: '{0} fields', target: '{0} өрістері' },
    { source: '{0} relationships', target: '{0} байланыстар' },
    { source: 'Aggregate {0}', target: 'Агрегаттау {0}' },
    { source: 'No fields to select', target: 'Таңдау үшін өрістер жоқ' },
    { source: 'Enter value...', target: 'Мәнді енгізіңіз...' },
    { source: 'Exclude', target: 'Қоспау' },
    { source: 'Actions', target: 'Әрекеттер' },
    { source: 'Search', target: 'Іздеу' },
    { source: 'Sort 1 → 9', target: 'Сұрыптау 1 → 9' },
    { source: 'Sort 9 → 1', target: 'Сұрыптау 9 → 1' },
    { source: 'Sort A → Z', target: 'Сұрыптау A → Z' },
    { source: 'Sort Z → A', target: 'Сұрыптау Z → A' },
    { source: 'Refresh automatically', target: 'Автоматты түрде жаңарту' },
    { source: 'All', target: 'Барлығы' },
    { source: 'Selected', target: 'Таңдалған' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'Өкінішке орай, сұрауыңызға сәйкес {0} табылмады'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'Біз {0} жүктеудеміз, күте тұрыңыз...' },
    { source: 'Add filter', target: 'Сүзгі қосу' },
    { source: 'Delete this filter', target: 'Бұл сүзгіні жою' },
    { source: 'Toggle ordering', target: 'Тапсырысты ауыстыру' },
    { source: 'Not configured', target: 'Бапталмаған' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'Өкінішке орай, бұл компонент әлі бапталмаған'
    },
    { source: 'records', target: 'жазбалар' },
    { source: '{0} items', target: '{0} элементтер' },

    // Menu
    { source: 'Users & Teams', target: 'Пайдаланушылар мен топтар' },
    { source: 'Billing', target: 'Шот' },
    { source: 'Billing & Plans', target: 'Шоттар мен жоспарлар' },
    { source: 'API keys', target: 'API кілттер' },
    { source: 'Dark Mode', target: 'Қараңғы режим' },
    { source: 'Light Mode', target: 'Жарық режим' },
    { source: 'Disable Staff', target: 'Қызметкерлерді өшіру' },
    { source: 'Enable Staff', target: 'Қызметкерлерді қосу' },
    { source: 'Manage Templates', target: 'Шаблондарды басқару' },
    { source: 'Logout', target: 'Шығу' },
    { source: 'Activity Log', target: 'Белсенділік журналы' },
    { source: 'Collaborations', target: 'Ынтымақтастықтар' },
    { source: 'Open Visual Builder', target: 'Көрнекі конструкторды ашу' },

    // Filters
    { source: 'equals', target: 'тең' },
    { source: 'does not equal', target: 'тең емес' },
    { source: '{0} equals {1}', target: '{0} тең {1}' },
    { source: '{0} does not equal {1}', target: '{0} тең емес {1}' },

    { source: 'contains', target: 'құрамында' },
    { source: 'does not contain', target: 'қамтымайды' },
    { source: '{0} contains {1}', target: '{0} құрамында {1}' },
    { source: '{0} not contains {1}', target: '{0} қамтымайды {1}' },

    { source: 'starts with', target: 'басталады' },
    { source: 'does not start with', target: 'басталмайды' },
    { source: '{0} starts with {1}', target: '{0} басталады {1}' },
    { source: '{0} does not start with {1}', target: '{0} басталмайды {1}' },

    { source: 'ends with', target: 'аяқталады' },
    { source: 'does not end with', target: 'аяқталмайды' },
    { source: '{0} ends with {1}', target: '{0} аяқталады {1}' },
    { source: '{0} does not end with {1}', target: '{0} аяқталмайды {1}' },

    { source: 'greater than', target: 'үлкен' },
    { source: 'is not greater than', target: 'үлкен емес' },
    { source: '{0} is greater than {1}', target: '{0} үлкен {1}' },
    { source: '{0} not greater than {1}', target: '{0} үлкен емес {1}' },

    { source: 'greater than or equals', target: 'үлкен немесе тең' },
    { source: 'is not greater than or equals', target: 'үлкен немесе тең емес' },
    { source: '{0} is greater than or equals {1}', target: '{0} үлкен немесе тең {1}' },
    { source: '{0} is not greater than or equals {1}', target: '{0} үлкен немесе тең емес {1}' },

    { source: 'less than', target: 'кіші' },
    { source: 'is not less than', target: 'кіші емес' },
    { source: '{0} is less than {1}', target: '{0} кіші {1}' },
    { source: '{0} is not less than {1}', target: '{0} кіші емес {1}' },

    { source: 'less than or equals', target: 'кіші немесе тең' },
    { source: 'is not less than or equals', target: 'кіші немесе тең емес' },
    { source: '{0} is less than or equals {1}', target: '{0} кіші немесе тең {1}' },
    { source: '{0} is not less than or equals {1}', target: '{0} кіші немесе тең емес {1}' },

    { source: 'one of', target: 'бірі' },
    { source: 'is one of', target: 'бірі' },
    { source: 'is not one of', target: 'бірі емес' },
    { source: '{0} is one of {1}', target: '{0} бірі {1}' },
    { source: '{0} is not one of {1}', target: '{0} бірі емес {1}' },

    { source: 'is null', target: 'null' },
    { source: 'is not null', target: 'null емес' },
    { source: '{0} is null', target: '{0} null' },
    { source: '{0} is not null', target: '{0} null емес' },

    { source: 'is future', target: 'болашақ' },
    { source: 'in the future', target: 'болашақта' },
    { source: 'is not in the future', target: 'болашақта емес' },
    { source: '{0} is in the future', target: '{0} болашақта' },
    { source: '{0} is not in the future', target: '{0} болашақта емес' },

    { source: 'is past', target: 'өткен' },
    { source: 'in the past', target: 'өткенде' },
    { source: 'is not in the past', target: 'өткенде емес' },
    { source: '{0} is in the past', target: '{0} өткенде' },
    { source: '{0} is not in the past', target: '{0} өткенде емес' },

    { source: 'is Today', target: 'бүгін' },
    { source: 'today', target: 'бүгін' },
    { source: 'is not today', target: 'бүгін емес' },
    { source: '{0} is today', target: '{0} бүгін' },
    { source: '{0} is not today', target: '{0} бүгін емес' },

    { source: 'is Yesterday', target: 'кеше' },
    { source: 'yesterday', target: 'кеше' },
    { source: 'is not yesterday', target: 'кеше емес' },
    { source: '{0} is yesterday', target: '{0} кеше' },
    { source: '{0} is not yesterday', target: '{0} кеше емес' },

    { source: 'is Last Week', target: 'өткен аптада' },
    { source: 'last week', target: 'өткен апта' },
    { source: 'is not last week', target: 'өткен аптада емес' },
    { source: '{0} is last week', target: '{0} өткен аптада' },
    { source: '{0} is not last week', target: '{0} өткен аптада емес' },

    { source: 'is Last Month', target: 'өткен айда' },
    { source: 'last month', target: 'өткен ай' },
    { source: 'is not last month', target: 'өткен айда емес' },
    { source: '{0} is last month', target: '{0} өткен айда' },
    { source: '{0} is not last month', target: '{0} өткен айда емес' },

    { source: 'is Last Quarter', target: 'өткен тоқсанда' },
    { source: 'last quarter', target: 'өткен тоқсан' },
    { source: 'is not last quarter', target: 'өткен тоқсанда емес' },
    { source: '{0} is last quarter', target: '{0} өткен тоқсанда' },
    { source: '{0} is not last quarter', target: '{0} өткен тоқсанда емес' },

    { source: 'is Last Year', target: 'өткен жылы' },
    { source: 'last year', target: 'өткен жыл' },
    { source: 'is not last year', target: 'өткен жылы емес' },
    { source: '{0} is last year', target: '{0} өткен жылы' },
    { source: '{0} is not last year', target: '{0} өткен жылы емес' },

    { source: 'is Last X Days', target: 'өткен X күндерде' },
    { source: 'last X days', target: 'өткен X күндер' },
    { source: 'is not last X days', target: 'өткен X күндерде емес' },
    { source: '{0} is last {1} days', target: '{0} өткен {1} күндерде' },
    { source: '{0} is not last {1} days', target: '{0} өткен {1} күндерде емес' },

    { source: 'is Current Week', target: 'ағымдағы аптада' },
    { source: 'current week', target: 'ағымдағы апта' },
    { source: 'is not current week', target: 'ағымдағы аптада емес' },
    { source: '{0} is current week', target: '{0} ағымдағы аптада' },
    { source: '{0} is not current week', target: '{0} ағымдағы аптада емес' },

    { source: 'is Current Month', target: 'ағымдағы айда' },
    { source: 'current month', target: 'ағымдағы ай' },
    { source: 'is not current month', target: 'ағымдағы айда емес' },
    { source: '{0} is current month', target: '{0} ағымдағы айда' },
    { source: '{0} is not current month', target: '{0} ағымдағы айда емес' },

    { source: 'is Current Quarter', target: 'ағымдағы тоқсанда' },
    { source: 'current quarter', target: 'ағымдағы тоқсан' },
    { source: 'is not current quarter', target: 'ағымдағы тоқсанда емес' },
    { source: '{0} is current quarter', target: '{0} ағымдағы тоқсанда' },
    { source: '{0} is not current quarter', target: '{0} ағымдағы тоқсанда емес' },

    { source: 'is Current Year', target: 'биылғы жылы' },
    { source: 'current year', target: 'биылғы жыл' },
    { source: 'is not current year', target: 'биылғы жылы емес' },
    { source: '{0} is current year', target: '{0} биылғы жылы' },
    { source: '{0} is not current year', target: '{0} биылғы жылы емес' },

    { source: 'is Previous Week', target: 'алдыңғы аптада' },
    { source: 'previous week', target: 'алдыңғы апта' },
    { source: 'is not previous week', target: 'алдыңғы аптада емес' },
    { source: '{0} is previous week', target: '{0} алдыңғы аптада' },
    { source: '{0} is not previous week', target: '{0} алдыңғы аптада емес' },

    { source: 'is Previous Month', target: 'алдыңғы айда' },
    { source: 'previous month', target: 'алдыңғы ай' },
    { source: 'is not previous month', target: 'алдыңғы айда емес' },
    { source: '{0} is previous month', target: '{0} алдыңғы айда' },
    { source: '{0} is not previous month', target: '{0} алдыңғы айда емес' },

    { source: 'is Previous Quarter', target: 'алдыңғы тоқсанда' },
    { source: 'previous quarter', target: 'алдыңғы тоқсан' },
    { source: 'is not previous quarter', target: 'алдыңғы тоқсанда емес' },
    { source: '{0} is previous quarter', target: '{0} алдыңғы тоқсанда' },
    { source: '{0} is not previous quarter', target: '{0} алдыңғы тоқсанда емес' },

    { source: 'is Previous Year', target: 'алдыңғы жылы' },
    { source: 'previous year', target: 'алдыңғы жыл' },
    { source: 'is not previous year', target: 'алдыңғы жылы емес' },
    { source: '{0} is previous year', target: '{0} алдыңғы жылы' },
    { source: '{0} is not previous year', target: '{0} алдыңғы жылы емес' },

    { source: 'is Previous X Days', target: 'алдыңғы X күндерде' },
    { source: 'previous X days', target: 'алдыңғы X күндер' },
    { source: 'is not previous X days', target: 'алдыңғы X күндерде емес' },
    { source: '{0} is previous {1} days', target: '{0} алдыңғы {1} күндерде' },
    { source: '{0} is not previous {1} days', target: '{0} алдыңғы {1} күндерде емес' },

    { source: 'is empty', target: 'бос' },
    { source: 'is not empty', target: 'бос емес' },
    { source: '{0} is empty', target: '{0} бос' },
    { source: '{0} is not empty', target: '{0} бос емес' },

    { source: 'covered by', target: 'қамтылған' },
    { source: 'is not covered by', target: 'қамтылмаған' },
    { source: '{0} covered by {1}', target: '{0} қамтылған {1}' },
    { source: '{0} is not covered by {1}', target: '{0} қамтылмаған {1}' },

    // Activity log
    { source: 'No activities found', target: 'Белсенділік табылмады' },
    {
      source: 'Start to working with data to log activities.',
      target: 'Белсенділіктерді тіркеу үшін деректермен жұмыс жасаңыз.'
    },
    { source: 'All Activity', target: 'Барлық белсенділік' },
    { source: 'Create Record', target: 'Жазба жасау' },
    { source: 'Update Record', target: 'Жазбаны жаңарту' },
    { source: 'Delete Record', target: 'Жазбаны жою' },
    { source: 'All Members', target: 'Барлық мүшелер' },

    // Collaboration
    { source: 'Timeline', target: 'Хронология' },
    { source: 'Messages', target: 'Хабарламалар' },
    { source: 'Activity', target: 'Белсенділік' },
    { source: 'Start chatting with your team', target: 'Тобыңызбен чат бастаңыз' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'Маңызды ақпаратты бақылау үшін ағымдағы бет туралы хабарлама жіберіңіз.'
    },
    { source: 'Your Message', target: 'Сіздің хабарламаңыз' },
    { source: 'Send', target: 'Жіберу' },

    // Share
    { source: 'Invite members', target: 'Мүшелерді шақыру' },
    { source: 'Public share', target: 'Қоғамдық бөлісу' },
    { source: 'Sign Up', target: 'Тіркелу' },
    { source: 'Members', target: 'Мұшеф' },
    { source: 'Invite with Email', target: 'Email арқылы шақыру' },
    { source: 'Invite someone...', target: 'Біреуді шақырыңыз...' },
    { source: 'Send Invite', target: 'Шақыру жіберу' },
    {
      source: 'Limit access to your data by user properties',
      target: 'Пайдаланушы қасиеттері арқылы деректерге қолжетімділікті шектеу'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: 'Ынтымақтастыққа шақырғыңыз келетін пайдаланушының электрондық пошта мекенжайын енгізіңіз.'
    },
    { source: 'Copy', target: 'Көшіру' },
    { source: 'Invite with Link', target: 'Сілтеме бойынша шақыру' },
    { source: 'Remove link', target: 'Сілтемені жою' },
    { source: 'Add Invite Link', target: 'Сілтеме қосу' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'Интернеттегі кез келген адам бұл сілтемені қолданып, таңдалған топқа қосыла алады.'
    },
    { source: 'Pending Invites', target: 'Күтілетін шақырулар' },
    { source: 'Cancel invite', target: 'Шақыруды болдырмау' },
    { source: 'Active Members', target: 'Белсенді мүшелер' },
    { source: 'Remove member', target: 'Мүшені жою' },
    { source: 'You are setting sharing for the current page', target: 'Сіз ағымдағы бет үшін бөлісуді орнатудасыз' },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'Сіз Қолданбаңыздың барлық беттерін бөлісуді орнатасыз.'
    },
    { source: 'Public access link', target: 'Қоғамдық қол жетімділік сілтемесі' },
    { source: 'Updating public access...', target: 'Жалпы қолжетімділікті жаңарту...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'Бұл сілтемені кез келген адам ағымдағы бетті көре алады. Осылайша сіз ағымдағы бетті басқа веб-сайтқа кірістіруге болады.'
    },
    { source: 'Embed code (IFRAME)', target: 'Кодты кірістіру (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: 'Қазіргі бетті көрсетуді қалайтын веб-сайтыңыздың HTML кодының ішіне осы кодты қойыңыз.'
    },
    { source: 'link', target: 'сілтеме' },
    { source: 'invited', target: 'шақырылды' },
    { source: 'Choose Team', target: 'Топты таңдау' },
    { source: 'App Teams', target: 'Қолданба топтары' },
    { source: 'Built-In Teams', target: 'Орнатылған топтар' },
    { source: 'Clear Team', target: 'Топты тазалау' },
    { source: 'Can build application and modify data', target: 'Қолданбаны құрастыру және деректерді өзгерту' },
    { source: 'Can modify data in application', target: 'Қолданбадағы деректерді өзгерте алады' },
    { source: 'Can only view data without modification', target: 'Деректерді тек өзгеріссіз көре алады' },
    { source: 'Add Team', target: 'Топ қосу' },
    { source: 'Edit Team', target: 'Топты өңдеу' },
    { source: 'Adding Team', target: 'Топты қосу' },
    {
      source: 'Keep control over who has access to current App',
      target: 'Қолданбаның кімге қолжетімді екенін бақылаңыз'
    },
    { source: 'Enter Team Name', target: 'Топ атауын енгізіңіз' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'Топ атауын теріңіз, мысалы: Қолдау, Сату, Маркетинг және т.б.'
    },
    { source: 'Add a new member to this team.', target: 'Бұл топқа жаңа мүшені қосу.' },
    { source: 'Invite new member', target: 'Жаңа мүшені шақыру' },
    { source: 'User', target: 'Пайдаланушы' },
    { source: 'Date Added', target: 'Қосылған күні' },
    { source: 'You', target: 'Сіз' },
    { source: 'Edit', target: 'Өңдеу' },
    { source: 'No users in this team', target: 'Бұл топта пайдаланушылар жоқ' },
    { source: 'Page Permissions', target: 'Бет рұқсаттары' },
    { source: 'App Permissions', target: 'Қолданба рұқсаттары' },
    { source: 'Properties', target: 'Қасиеттер' },
    { source: 'Page name', target: 'Бет атауы' },
    { source: 'Access', target: 'Қол жеткізу' },
    { source: 'Full Access', target: 'Толық қолжетімділік' },
    { source: 'Read Only', target: 'Тек оқу' },
    { source: 'No Access', target: 'Қол жетімсіз' },
    { source: 'Read', target: 'Оқу' },
    { source: 'Update', target: 'Жаңарту' },
    { source: 'Write', target: 'Жазу' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'Жою' },
    { source: 'Custom Access', target: 'Баптап алған рұқсат' },
    { source: 'Read, create, update and delete data', target: 'Деректерді оқу, жасау, жаңарту және жою' },
    { source: 'Choose allowed operations granularly', target: 'Рұқсат етілген операцияларды таңдау' },
    { source: 'Without any access to data', target: 'Деректерге қолжетімділіксіз' },
    { source: 'Name', target: 'Атау' },
    { source: 'Active', target: 'Белсенді' },
    { source: 'Settings', target: 'Параметрлер' },
    { source: 'Members and Teams', target: 'Мүшелер мен топтар' },
    { source: 'App Builder', target: 'Қолданба құрастырушысы' },
    { source: 'Collection Permissions', target: 'Мәліметтер жинағы рұқсаттары' },
    { source: "Grant permissions to app's collection", target: 'Қолданбаның жиынтығына рұқсат беру' },
    { source: 'Collection', target: 'Коллекция' },
    {
      source: 'Limit access to your data by team properties',
      target: 'Топ қасиеттері бойынша деректерге қолжетімділікті шектеу'
    },
    { source: 'Save Team', target: 'Топты сақтау' },
    { source: 'Create Team', target: 'Топ құру' },
    { source: 'Value', target: 'Мән' },
    { source: 'No properties specified', target: 'Қасиеттер көрсетілмеген' },

    // Navigation
    { source: 'Current App', target: 'Ағымдағы қолданба' },
    { source: 'Home', target: 'Үй' },

    // Profile
    {
      source: 'We are fetching user data, please, wait...',
      target: 'Біз пайдаланушы деректерін жүктеп жатырмыз, күте тұрыңыз...'
    },
    { source: 'Profile Settings', target: 'Профиль параметрлері' },
    { source: 'Basic information about your account.', target: 'Сіздің есептік жазбаңыз туралы негізгі ақпарат.' },
    { source: 'Photo', target: 'Фото' },
    { source: 'your photo', target: 'сіздің фотоңыз' },
    { source: 'Change', target: 'Өзгерту' },
    { source: 'Upload', target: 'Жүктеу' },
    { source: 'Photo was successfully updated', target: 'Фото сәтті жаңартылды' },
    { source: 'Photo was successfully deleted', target: 'Фото сәтті жойылды' },
    { source: 'First Name', target: 'Атыңыз' },
    { source: 'Last Name', target: 'Тегіңіз' },
    { source: 'Your Email', target: 'Сіздің электрондық поштаңыз' },
    { source: 'Email Change', target: 'Электрондық поштаны өзгерту' },
    { source: 'New Email', target: 'Жаңа электрондық пошта' },
    { source: 'Change Email', target: 'Электрондық поштаны өзгерту' },
    { source: 'Check your inbox', target: 'Кіріс жәшігін тексеріңіз' },
    { source: 'Confirmation Email was sent to {0}', target: 'Растау электрондық поштасы {0} мекенжайына жіберілді' },
    { source: 'Changing Email failed', target: 'Электрондық поштаны өзгерту сәтсіз аяқталды' },
    { source: 'Password Change', target: 'Парольді өзгерту' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target:
        'Құпия сөз есептік жазбаңызды қорғауға жеткілікті күшті болуы керек, сондықтан оны кемінде 12 таңба етіңіз.'
    },
    { source: 'Current Password', target: 'Ағымдағы құпия сөз' },
    { source: 'New Password', target: 'Жаңа құпия сөз' },
    { source: 'Confirm New Password', target: 'Жаңа құпия сөзді растаңыз' },
    { source: 'Change Password', target: 'Құпия сөзді өзгерту' },
    {
      source: 'Current password was successfully updated, all other sessions will be logged out shortly',
      target: 'Қазіргі құпия сөз сәтті жаңартылды, барлық басқа сеанстар жақында жүйеден шығарылады'
    },
    { source: 'Saving current password failed', target: 'Ағымдағы құпия сөзді сақтау сәтсіз аяқталды' },
    { source: 'Short password', target: 'Қысқа құпия сөз' },
    { source: "Passwords don't match", target: 'Құпия сөздер сәйкес келмейді' },
    { source: 'Personal Preferences', target: 'Жеке параметрлер' },
    { source: 'Language', target: 'Тіл' },
    { source: 'Timezone', target: 'Уақыт белдеуі' },
    { source: 'Current time in {0} is', target: 'Ағымдағы уақыт {0}' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'Есептік жазбаңыз үшін қосымша параметрлерді орнату.'
    },
    { source: 'News & Proposals', target: 'Жаңалықтар мен ұсыныстар' },
    {
      source: 'Subscribe to our updates and proposals.',
      target: 'Біздің жаңартулар мен ұсыныстарға жазылыңыз.'
    },
    { source: 'Save changes', target: 'Өзгерістерді сақтау' },
    { source: 'Current user was successfully updated', target: 'Ағымдағы пайдаланушы сәтті жаңартылды' },
    { source: 'Saving current user failed', target: 'Ағымдағы пайдаланушыны сақтау сәтсіз аяқталды' },

    // My Apps
    { source: 'Type to search...', target: 'Іздеу үшін теріңіз...' },
    { source: 'My Apps', target: 'Менің қолданбаларым' },
    { source: 'New App', target: 'Жаңа қолданба' },
    { source: 'Builder', target: 'Құрастырушы' },
    { source: 'App', target: 'Қолданба' },
    { source: 'continue install', target: 'орнатуды жалғастыру' },
    { source: 'Open builder', target: 'Құрастырушыны ашу' },
    { source: 'View published', target: 'Жарияланғанды көру' },
    { source: 'Delete App', target: 'Қолданбаны жою' },
    { source: 'Start from a template', target: 'Шаблоннан бастау' },
    { source: 'Preview', target: 'Алдын ала көру' },
    { source: 'Contact Support', target: 'Қолдау қызметіне хабарласыңыз' },
    { source: 'Documentation', target: 'Құжаттама' },
    { source: 'Feature Requests', target: 'Мүмкіндіктерге сұраныстар' },
    { source: 'See What’s New', target: 'Жаңа нәрселерді көру' },
    { source: 'Search templates...', target: 'Шаблондарды іздеу...' },
    { source: 'any', target: 'кез келген' },
    { source: 'more', target: 'тағы' },
    { source: 'Choose Data Source', target: 'Дереккөзді таңдаңыз' },
    { source: 'works with 30+ data sources', target: '30+-ден астам дереккөздермен жұмыс істейді' },
    { source: 'Use this template', target: 'Бұл шаблонды пайдаланыңыз' },
    { source: 'stores data in Jet Tables', target: 'Jet Tables-де деректерді сақтайды' },
    { source: 'New Data', target: 'Жаңа деректер' },
    { source: 'using {0}', target: '{0} қолдану арқылы' },
    { source: "Can't find resource you're looking for?", target: 'Іздеген ресурсыңызды таба алмадыңыз ба?' },
    { source: 'Admin Panel', target: 'Әкімші тақтасы' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'Деректеріңізбен бірге тізімдеу, жасау және жаңарту (CRUD) операциялары'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target:
        'Stripe, Twilio және GraphQL сияқты кез келген дерекқорлар, қолданбалар және API негізінде тапсырыс әкімші тақтасын жасаңыз.'
    },
    { source: 'All Integrations', target: 'Барлық интеграциялар' },
    { source: 'Databases', target: 'Дерекқорлар' },
    { source: 'APIs', target: 'API-лер' },
    { source: 'Frameworks', target: 'Фреймворктер' },
    { source: 'Storages', target: 'Сақтаулар' },

    // Sign In
    { source: 'Good morning', target: 'Қайырлы таң' },
    { source: 'Good afternoon', target: 'Қайырлы күн' },
    { source: 'Good evening', target: 'Қайырлы кеш' },
    { source: 'Sign In', target: 'Жүйеге кіру' },
    { source: 'Welcome Back.', target: 'Қайта оралғаныңызға қуаныштымыз.' },
    { source: 'Sign in with {0}', target: '{0} арқылы кіру' },
    { source: 'or login with', target: 'немесе кіру' },
    { source: 'Enter E-mail', target: 'Е-мейл енгізіңіз' },
    { source: 'Enter password', target: 'Құпиясөз енгізіңіз' },
    { source: 'Login', target: 'Кіру' },
    { source: 'Create new account', target: 'Жаңа есептік жазба жасау' },
    { source: 'Forgot my password', target: 'Құпиясөзімді ұмыттым' },
    { source: 'required', target: 'қажетті' },
    { source: 'incorrect Email', target: 'қате Е-мейл' },
    { source: 'Minimum password length {0}', target: 'Құпиясөздің ең аз ұзындығы {0}' },
    { source: 'Unable to Sign In', target: 'Жүйеге кіру мүмкін емес' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'Бүгін тегін бастаңыз <span class="auth-form__accent">Тегін бүгін</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target: 'Карта қажет емес. 14 күндік PRO сынақ кезеңінде барлық озық функцияларды тегін аласыз.'
    },
    { source: 'Enter First Name', target: 'Атыңызды енгізіңіз' },
    { source: 'Enter Last Name (optional)', target: 'Тегіңізді енгізіңіз (міндетті емес)' },
    { source: 'Enter Email', target: 'Е-мейл енгізіңіз' },
    { source: 'Password', target: 'Құпия сөз' },
    { source: 'Repeat Password', target: 'Құпиясөзді растаңыз' },
    { source: 'By signing in you’re okay with our', target: 'Жүйеге кіру арқылы сіз бізбен келісесіз' },
    {
      source: 'Creating an account means you’re okay with our',
      target: 'Есептік жазба жасау сіздің бізбен келісетініңізді білдіреді'
    },
    { source: 'Terms of Service', target: 'Қызмет көрсету шарттары' },
    { source: 'Privacy Policy', target: 'Құпиялық саясаты' },
    { source: 'and', target: 'және' },
    { source: 'Create your free account', target: 'Тегін есептік жазбаңызды жасаңыз' },
    { source: 'Already have an account', target: 'Есептік жазбаңыз бар ма' },
    { source: 'Unable to Sign Up', target: 'Тіркелу мүмкін емес' },

    // Restore password
    { source: 'Reset your password', target: 'Құпия сөзіңізді қалпына келтіріңіз' },
    { source: 'Email Address', target: 'Электрондық пошта мекенжайы' },
    { source: 'Reset password', target: 'Құпиясөзді қалпына келтіру' },
    { source: 'Return to Sign In', target: 'Жүйеге кіруге оралу' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'Электрондық поштаңызды тексеріңіз – <strong>{0}</strong>. Біз жіберген парольді өзгерту үшін сілтемені растауды орындаңыз.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be al least 8 characters.',
      target: 'Дайын болуға жақын, төмендегідей жаңа құпия сөзіңізді енгізіңіз. <br>Кемінде 8 таңба болуы керек.'
    },
    { source: 'Reset password & Sign In', target: 'Құпиясөзді қалпына келтіру және кіру' },
    { source: 'Unable to Send Code', target: 'Код жіберу мүмкін емес' },
    { source: 'Unable to Change Password', target: 'Құпиясөзді өзгерту мүмкін емес' },

    // Email Verification
    { source: 'Email Verification', target: 'Электрондық поштаны растау' },
    { source: 'Resend verification code', target: 'Растау кодын қайта жіберу' },
    { source: 'Verification email sent', target: 'Растау электрондық поштасы жіберілді' },
    { source: 'Your Email is now verified', target: 'Сіздің электрондық поштаңыз енді расталды' },
    { source: 'Request is incorrect', target: 'Сұраным дұрыс емес' },

    // Invites
    {
      source: 'Join <span class="auth-form__accent">{0}</span>',
      target: 'Қосылу <span class="auth-form__accent">{0}</span>'
    },
    {
      source: '<strong>{0}</strong> has invited you to join <strong>{1}</strong>',
      target: '<strong>{0}</strong> сізді <strong>{1}</strong> қатарына шақырды'
    },
    {
      source: 'Someone has invited you to join <strong>{0}</strong>',
      target: 'Біреу сізді <strong>{0}</strong> қатарына шақырды'
    },
    {
      source: 'You are joining <strong>{0}</strong> using invite link',
      target: 'Сіз шақыру сілтемесін пайдаланып, <strong>{0}</strong> қатарына қосылудасыз'
    },
    { source: 'Join', target: 'Қосылу' },
    { source: 'Go to home page', target: 'Басты бетке өту' },
    { source: 'Invite link is wrong', target: 'Шақыру сілтемесі қате' },
    {
      source:
        'Looks like your invitation link has expired or maybe you have followed the wrong link. Please try to ask to invite your again.',
      target:
        'Сіздің шақыру сілтемеңіздің мерзімі өтіп кетті немесе мүмкін сіз қате сілтемені пайдаландыңыз. Сұрауыңызды тағы да сұрап көріңіз.'
    },
    {
      source: 'Unfortunately we failed to load information about this invitation',
      target: 'Өкінішке орай, біз осы шақыру туралы ақпаратты жүктей алмай қалдық'
    },

    // Users & Teams
    { source: 'Members of {0}', target: '{0} мүшелері' },
    { source: 'How to get started', target: 'Қалай бастау керек' },
    { source: 'Users API', target: 'Пайдаланушы API-лары' },
    { source: 'Teams API', target: 'Топ API-лары' },
    { source: 'Invite Member', target: 'Мүшені шақыру' },
    { source: 'Add User property', target: 'Пайдаланушы қасиетін қосу' },
    { source: 'Add Team property', target: 'Топ қасиетін қосу' },
    { source: 'Edit property', target: 'Қасиетті өңдеу' },
    { source: 'Delete property', target: 'Қасиетті жою' },
    { source: 'Users', target: 'Пайдаланушылар' },
    { source: 'Teams', target: 'Топтар' },
    { source: 'Search members', target: 'Мүшелерді іздеу' },
    { source: 'Search teams', target: 'Топтарды іздеу' },
    { source: '{0} pages', target: '{0} беттер' },
    { source: 'No members', target: 'Мүшелер жоқ' }
  ]
};

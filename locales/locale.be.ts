import { Locale } from './locale';

export const locale: Locale = {
  name: 'belarusian',
  language: 'be',
  items: [
    // General
    { source: 'Save', target: 'Захаваць' },
    { source: 'Create', target: 'Стварыць' },
    { source: 'Duplicating', target: 'Стварэнне копіі' },
    { source: 'Duplicate', target: 'Стварыць копію' },
    { source: 'Mass Edit', target: 'Групавое рэдагаванне' },
    { source: 'Export', target: 'Экспарт' },
    { source: 'Import', target: 'Імпарт' },
    { source: 'Delete', target: 'Выдаліць' },
    { source: 'Continue', target: 'Працягнуць' },
    { source: 'Submit', target: 'Прадставіць' },
    { source: 'Cancel', target: 'Адмяніць' },
    { source: 'Loading', target: 'Ідзе загрузка' },
    { source: 'Please wait...', target: 'Калі ласка, чакайце...' },
    { source: 'Loading failed', target: 'Памылка загрузкі даных' },
    { source: 'Unknown error', target: 'Невядомая памылка' },
    { source: 'Add', target: 'Дадаць' },
    { source: 'or', target: 'ці' },
    { source: 'Hours', target: 'Гадзіны' },
    { source: 'Minutes', target: 'Хвіліны' },
    { source: 'Seconds', target: 'Секунды' },
    { source: 'Saved', target: 'Захавана' },
    { source: 'Error', target: 'Памылка' },
    { source: 'Page not found', target: 'Старонка не знойдзена' },
    {
      source: 'The specified address is incorrect, or the page does not exist',
      target: 'Няправільны адрас альбо старонка не існуе'
    },
    { source: 'Not allowed', target: 'Не дазволена' },
    {
      source: "You don't have permissions to access this page",
      target: 'У вас няма дазволу для доступу да гэтай старонкі'
    },
    { source: 'Are you sure want to close?', target: 'Ці ўпэўнены, што жадаеце зачыніць?' },
    { source: 'Close', target: 'Зачыніць' },

    // Actions
    { source: 'Action executed', target: 'Дзеянне выканана' },
    { source: 'Action executed successfully', target: 'Дзеянне паспяхова выканана' },
    { source: 'Action failed', target: 'Дзеянне не ўдалося' },
    {
      source: "You don't have permission for run this operation",
      target: 'У вас няма правоў для выканання гэтай аперацыі'
    },
    { source: 'Specify parameters', target: 'Укажыце параметры' },
    { source: 'Executing action', target: 'Выконваецца дзеянне' },
    { source: 'You are executing <strong>{0}</strong>', target: 'Вы выконваеце дзеянне <strong>{0}</strong>' },
    { source: 'Please fill in the parameters below.', target: 'Калі ласка, запоўніце параметры ніжэй.' },
    { source: 'Execute', target: 'Выканаць' },
    { source: 'Executing', target: 'Выконваецца' },
    { source: 'Finished', target: 'Завершана' },
    { source: 'Done', target: 'Гатова' },

    // Export
    { source: 'Records Export', target: 'Экспарт даных' },
    { source: 'Downloading records data as a file', target: 'Спампоўка даных у файл' },
    { source: 'Choose format', target: 'Выбраць фармат' },
    { source: 'Number of exporting records', target: 'Колькасць экспартуемых запісаў' },
    { source: { label: 'Export', context: 'submit' }, target: 'Экспартаваць' },
    { source: 'Exporting', target: 'Экспартуецца' },
    { source: 'Export completed', target: 'Экспарт завершаны' },
    { source: 'Failed to export', target: 'Экспарт не ўдалося' },

    // Components
    { source: 'optional', target: 'неабавязкова' },
    { source: 'choose', target: 'выбраць' },
    { source: 'Clear value', target: 'Ачысціць значэнне' },
    { source: 'loading...', target: 'загрузка...' },
    { source: 'Nothing found', target: 'Нічога не знойдзена' },
    { source: 'Search...', target: 'Пошук...' },
    { source: 'Enter at least {0} characters', target: 'Увядзіце не меней {0} знакаў' },
    { source: 'No options', target: 'Няма варыянтаў' },
    { source: 'Drop files here or', target: 'Перацягніце файлы сюды або' },
    { source: 'Upload new', target: 'Загрузіць новыя' },
    { source: 'Clear', target: 'Ачысціць' },
    { source: 'Download', target: 'Спампаваць' },
    { source: 'Choose file', target: 'Выбраць файл' },
    { source: 'Choose files', target: 'Выбраць файлы' },
    { source: 'Scan with Camera', target: 'Сканаваць з дапамогай камеры' },
    { source: 'Scan Image file', target: 'Сканаваць выяву' },
    { source: 'Choose camera', target: 'Выбраць камеру' },
    { source: 'Stop scanning', target: 'Спыніць сканаванне' },
    { source: 'Scan again', target: 'Сканаваць зноў' },
    { source: 'Use this scan', target: 'Выкарыстаць гэты скан' },
    { source: 'Failed to scan', target: 'Немагчыма адсканаваць' },
    {
      source: 'Code failed to scan, please try another image',
      target: 'Не ўдалося адсканаваць код, паспрабуйце іншую выяву'
    },
    { source: 'current', target: 'цяперашні' },
    { source: 'Day', target: 'Дзень' },
    { source: 'Week', target: 'Тыдзень' },
    { source: 'Month', target: 'Месяц' },
    { source: 'Year', target: 'Год' },
    { source: 'Today', target: 'Сёння' },
    { source: 'Daily', target: 'Штодня' },
    { source: 'Weekly', target: 'Штотыднёва' },
    { source: 'Monthly', target: 'Штомесяц' },
    { source: 'Quarterly', target: 'Штоквартальна' },
    { source: 'Yearly', target: 'Штогод' },
    { source: 'Hourly', target: 'Кожную гадзіну' },
    { source: 'Minutely', target: 'Кожную хвіліну' },
    { source: 'Since', target: 'З' },
    { source: 'Before', target: 'Да' },
    { source: 'Between', target: 'Між' },
    { source: 'From date', target: 'З даты' },
    { source: 'To date', target: 'Да даты' },
    { source: 'Coordinates', target: 'Каардынаты' },
    { source: 'Latitude', target: 'Шырата' },
    { source: 'Longitude', target: 'Даўгата' },
    { source: 'Default color', target: 'Колер па змаўчанні' },
    { source: 'not specified', target: 'не пазначана' },
    { source: 'Sign using your finger or pointer', target: 'Падпішыцеся пальцам або мышшу' },

    // List components
    { source: 'Filter', target: 'Фільтр' },
    { source: 'Filter by field', target: 'Фільтраваць па полі' },
    { source: 'Filter by...', target: 'Фільтраваць па...' },
    { source: 'Back', target: 'Назад' },
    { source: 'Back to {0} fields', target: 'Назад да поля {0}' },
    { source: 'Choose {0} from list', target: 'Выбраць {0} са спісу' },
    { source: '{0} fields', target: 'поля {0}' },
    { source: '{0} relationships', target: 'адносіны {0}' },
    { source: 'Aggregate {0}', target: 'Агрэгаваць {0}' },
    { source: 'No fields to select', target: 'Няма палёў для выбару' },
    { source: 'Enter value...', target: 'Увядзіце значэнне...' },
    { source: 'Exclude', target: 'Выключыць' },
    { source: 'Actions', target: 'Дзеянні' },
    { source: 'Search', target: 'Пошук' },
    { source: 'Sort 1 → 9', target: 'Сартаваць 1 → 9' },
    { source: 'Sort 9 → 1', target: 'Сартаваць 9 → 1' },
    { source: 'Sort A → Z', target: 'Сартаваць A → Z' },
    { source: 'Sort Z → A', target: 'Сартаваць Z → A' },
    { source: 'Refresh automatically', target: 'Аднаўляць аўтаматычна' },
    { source: 'All', target: 'Усё' },
    { source: 'Selected', target: 'Выбрана' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'На жаль, не знойдзена {0}, які адпавядае вашаму запыту'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'Мы атрымаем {0}, калі ласка, чакайце...' },
    { source: 'Add filter', target: 'Дадаць фільтр' },
    { source: 'Delete this filter', target: 'Выдаліць гэты фільтр' },
    { source: 'Toggle ordering', target: 'Змяніць парадак' },
    { source: 'Not configured', target: 'Не наладжана' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'На жаль, гэты кампанент яшчэ не наладжаны'
    },
    { source: 'records', target: 'запісы' },
    { source: '{0} items', target: 'запісы {0}' },

    // Menu
    { source: 'Users & Teams', target: 'Карыстальнікі і каманды' },
    { source: 'Billing', target: 'Выстаўленне рахункаў' },
    { source: 'Billing & Plans', target: 'Выстаўленне рахункаў і планы' },
    { source: 'API keys', target: 'API ключы' },
    { source: 'Dark Mode', target: 'Цёмны рэжым' },
    { source: 'Light Mode', target: 'Светлы рэжым' },
    { source: 'Disable Staff', target: 'Адключыць персанал' },
    { source: 'Enable Staff', target: 'Уключыць персанал' },
    { source: 'Manage Templates', target: 'Кіраваць шаблонамі' },
    { source: 'Logout', target: 'Выйсці' },
    { source: 'Activity Log', target: 'Часопіс актыўнасці' },
    { source: 'Collaborations', target: 'Супрацоўніцтва' },
    { source: 'Open Visual Builder', target: 'Адкрыць візуальны рэдактар' },

    // Filters
    { source: 'equals', target: 'роўна' },
    { source: 'does not equal', target: 'не роўна' },
    { source: '{0} equals {1}', target: '{0} роўна {1}' },
    { source: '{0} does not equal {1}', target: '{0} не роўна {1}' },

    { source: 'contains', target: 'утрымлівае' },
    { source: 'does not contain', target: 'не ўтрымлівае' },
    { source: '{0} contains {1}', target: '{0} утрымлівае {1}' },
    { source: '{0} not contains {1}', target: '{0} не ўтрымлівае {1}' },

    { source: 'starts with', target: 'пачынаецца з' },
    { source: 'does not start with', target: 'не пачынаецца з' },
    { source: '{0} starts with {1}', target: '{0} пачынаецца з {1}' },
    { source: '{0} does not start with {1}', target: '{0} не пачынаецца з {1}' },

    { source: 'ends with', target: 'заканчваецца на' },
    { source: 'does not end with', target: 'не заканчваецца на' },
    { source: '{0} ends with {1}', target: '{0} заканчваецца на {1}' },
    { source: '{0} does not end with {1}', target: '{0} не заканчваецца на {1}' },

    { source: 'greater than', target: 'больш чым' },
    { source: 'is not greater than', target: 'не больш чым' },
    { source: '{0} is greater than {1}', target: '{0} больш чым {1}' },
    { source: '{0} not greater than {1}', target: '{0} не больш чым {1}' },

    { source: 'greater than or equals', target: 'больш або раўно' },
    { source: 'is not greater than or equals', target: 'не больш або раўно' },
    { source: '{0} is greater than or equals {1}', target: '{0} больш або роўна {1}' },
    { source: '{0} is not greater than or equals {1}', target: '{0} не больш або роўна {1}' },

    { source: 'less than', target: 'менш за' },
    { source: 'is not less than', target: 'не менш за' },
    { source: '{0} is less than {1}', target: '{0} менш за {1}' },
    { source: '{0} is not less than {1}', target: '{0} не менш за {1}' },

    { source: 'less than or equals', target: 'менш або роўна' },
    { source: 'is not less than or equals', target: 'не менш або роўна' },
    { source: '{0} is less than or equals {1}', target: '{0} менш або роўна {1}' },
    { source: '{0} is not less than or equals {1}', target: '{0} не менш або роўна {1}' },

    { source: 'one of', target: 'адзін з' },
    { source: 'is one of', target: 'адзін з' },
    { source: 'is not one of', target: 'не адзін з' },
    { source: '{0} is one of {1}', target: '{0} адзін з {1}' },
    { source: '{0} is not one of {1}', target: '{0} не адзін з {1}' },

    { source: 'is null', target: 'null' },
    { source: 'is not null', target: 'не null' },
    { source: '{0} is null', target: '{0} null' },
    { source: '{0} is not null', target: '{0} не null' },

    { source: 'is future', target: 'у будучыні' },
    { source: 'in the future', target: 'у будучыні' },
    { source: 'is not in the future', target: 'не ў будучыні' },
    { source: '{0} is in the future', target: '{0} у будучыні' },
    { source: '{0} is not in the future', target: '{0} не ў будучыні' },

    { source: 'is past', target: 'у мінулым' },
    { source: 'in the past', target: 'у мінулым' },
    { source: 'is not in the past', target: 'не ў мінулым' },
    { source: '{0} is in the past', target: '{0} у мінулым' },
    { source: '{0} is not in the past', target: '{0} не ў мінулым' },

    { source: 'is Today', target: 'сёння' },
    { source: 'today', target: 'сёння' },
    { source: 'is not today', target: 'не сёння' },
    { source: '{0} is today', target: '{0} сёння' },
    { source: '{0} is not today', target: '{0} не сёння' },

    { source: 'is Yesterday', target: 'учора' },
    { source: 'yesterday', target: 'учора' },
    { source: 'is not yesterday', target: 'не ўчора' },
    { source: '{0} is yesterday', target: '{0} учора' },
    { source: '{0} is not yesterday', target: '{0} не ўчора' },

    { source: 'is Last Week', target: 'на мінулым тыдні' },
    { source: 'last week', target: 'на мінулым тыдні' },
    { source: 'is not last week', target: 'не на мінулым тыдні' },
    { source: '{0} is last week', target: '{0} на мінулым тыдні' },
    { source: '{0} is not last week', target: '{0} не на мінулым тыдні' },

    { source: 'is Last Month', target: 'за мінулы месяц' },
    { source: 'last month', target: 'за мінулы месяц' },
    { source: 'is not last month', target: 'не за мінулы месяц' },
    { source: '{0} is last month', target: '{0} за мінулы месяц' },
    { source: '{0} is not last month', target: '{0} не за мінулы месяц' },

    { source: 'is Last Quarter', target: 'за мінулы квартал' },
    { source: 'last quarter', target: 'за мінулы квартал' },
    { source: 'is not last quarter', target: 'не за мінулы квартал' },
    { source: '{0} is last quarter', target: '{0} за мінулы квартал' },
    { source: '{0} is not last quarter', target: '{0} не за мінулы квартал' },

    { source: 'is Last Year', target: 'за мінулы год' },
    { source: 'last year', target: 'за мінулы год' },
    { source: 'is not last year', target: 'не за мінулы год' },
    { source: '{0} is last year', target: '{0} за мінулы год' },
    { source: '{0} is not last year', target: '{0} не за мінулы год' },

    { source: 'is Last X Days', target: 'за апошнія X дзён' },
    { source: 'last X days', target: 'за апошнія X дзён' },
    { source: 'is not last X days', target: 'не за апошнія X дзён' },
    { source: '{0} is last {1} days', target: '{0} за апошнія {1} дзён' },
    { source: '{0} is not last {1} days', target: '{0} не за апошнія {1} дзён' },

    { source: 'is Current Week', target: 'на гэтым тыдні' },
    { source: 'current week', target: 'на гэтым тыдні' },
    { source: 'is not current week', target: 'не на гэтым тыдні' },
    { source: '{0} is current week', target: '{0} на гэтым тыдні' },
    { source: '{0} is not current week', target: '{0} не на гэтым тыдні' },

    { source: 'is Current Month', target: 'у гэтым месяцы' },
    { source: 'current month', target: 'у гэтым месяцы' },
    { source: 'is not current month', target: 'не ў гэтым месяцы' },
    { source: '{0} is current month', target: '{0} у гэтым месяцы' },
    { source: '{0} is not current month', target: '{0} не ў гэтым месяцы' },

    { source: 'is Current Quarter', target: 'у гэтым квартале' },
    { source: 'current quarter', target: 'у гэтым квартале' },
    { source: 'is not current quarter', target: 'не ў гэтым квартале' },
    { source: '{0} is current quarter', target: '{0} у гэтым квартале' },
    { source: '{0} is not current quarter', target: '{0} не ў гэтым квартале' },

    { source: 'is Current Year', target: 'у гэтым годзе' },
    { source: 'current year', target: 'у гэтым годзе' },
    { source: 'is not current year', target: 'не ў гэтым годзе' },
    { source: '{0} is current year', target: '{0} у гэтым годзе' },
    { source: '{0} is not current year', target: '{0} не ў гэтым годзе' },

    { source: 'is Previous Week', target: 'на мінулым тыдні' },
    { source: 'previous week', target: 'на мінулым тыдні' },
    { source: 'is not previous week', target: 'не на мінулым тыдні' },
    { source: '{0} is previous week', target: '{0} на мінулым тыдні' },
    { source: '{0} is not previous week', target: '{0} не на мінулым тыдні' },

    { source: 'is Previous Month', target: 'у мінулым месяцы' },
    { source: 'previous month', target: 'у мінулым месяцы' },
    { source: 'is not previous month', target: 'не ў мінулым месяцы' },
    { source: '{0} is previous month', target: '{0} у мінулым месяцы' },
    { source: '{0} is not previous month', target: '{0} не ў мінулым месяцы' },

    { source: 'is Previous Quarter', target: 'у мінулым квартале' },
    { source: 'previous quarter', target: 'у мінулым квартале' },
    { source: 'is not previous quarter', target: 'не ў мінулым квартале' },
    { source: '{0} is previous quarter', target: '{0} у мінулым квартале' },
    { source: '{0} is not previous quarter', target: '{0} не ў мінулым квартале' },

    { source: 'is Previous Year', target: 'у мінулым годзе' },
    { source: 'previous year', target: 'у мінулым годзе' },
    { source: 'is not previous year', target: 'не ў мінулым годзе' },
    { source: '{0} is previous year', target: '{0} у мінулым годзе' },
    { source: '{0} is not previous year', target: '{0} не ў мінулым годзе' },

    { source: 'is Previous X Days', target: 'за апошнія X дзён' },
    { source: 'previous X days', target: 'за апошнія X дзён' },
    { source: 'is not previous X days', target: 'не за апошнія X дзён' },
    { source: '{0} is previous {1} days', target: '{0} за апошнія {1} дзён' },
    { source: '{0} is not previous {1} days', target: '{0} не за апошнія {1} дзён' },

    { source: 'is empty', target: 'пуста' },
    { source: 'is not empty', target: 'не пуста' },
    { source: '{0} is empty', target: '{0} пуста' },
    { source: '{0} is not empty', target: '{0} не пуста' },

    { source: 'covered by', target: 'пакрыта' },
    { source: 'is not covered by', target: 'не пакрыта' },
    { source: '{0} covered by {1}', target: '{0} пакрыта {1}' },
    { source: '{0} is not covered by {1}', target: '{0} не пакрыта {1}' },

    // Activity log
    { source: 'No activities found', target: 'Не знойдзена актыўнасці' },
    {
      source: 'Start to working with data to log activities.',
      target: 'Пачніце працу з дадзенымі для рэзервовага копіравання актыўнасці.'
    },
    { source: 'All Activity', target: 'Уся актыўнасць' },
    { source: 'Create Record', target: 'Стварыць запіс' },
    { source: 'Update Record', target: 'Абнавіць запіс' },
    { source: 'Delete Record', target: 'Выдаліць запіс' },
    { source: 'All Members', target: 'Усе ўдзельнікі' },

    // Collaboration
    { source: 'Timeline', target: 'Летапіс' },
    { source: 'Messages', target: 'Паведамленні' },
    { source: 'Activity', target: 'Актыўнасць' },
    { source: 'Start chatting with your team', target: 'Пачніце абмяркоўваць са сваёй камандай' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'Адпраўце паведамленне пра бягучую старонку, каб сачыць за важнай інфармацыяй.'
    },
    { source: 'Your Message', target: 'Ваша паведамленне' },
    { source: 'Send', target: 'Адправіць' },

    // Share
    { source: 'Invite members', target: 'Запрасіць удзельнікаў' },
    { source: 'Public share', target: 'Публічны доступ' },
    { source: 'Sign Up', target: 'Рэгістрацыя' },
    { source: 'Members', target: 'Удзельнікі' },
    { source: 'Invite with Email', target: 'Запрасіць па Email' },
    { source: 'Invite someone...', target: 'Запрасіць кагосьці...' },
    { source: 'Send Invite', target: 'Адправіць запрашэнне' },
    {
      source: 'Limit access to your data by user properties',
      target: 'Абмежаваць доступ да вашых даных па ўласцівасцях карыстальніка'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: 'Увядзіце email карыстальніка, якога вы хочаце запрасіць.'
    },
    { source: 'Copy', target: 'Капіяваць' },
    { source: 'Invite with Link', target: 'Запрасіць па спасылцы' },
    { source: 'Remove link', target: 'Выдаліць спасылку' },
    { source: 'Add Invite Link', target: 'Дадаць спасылку-запрашэнне' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'Любая асоба ў Інтэрнэце з гэтай спасылкай зможа далучыцца да абранай каманды.'
    },
    { source: 'Pending Invites', target: 'Прыходныя запрашэнні' },
    { source: 'Cancel invite', target: 'Адмяніць запрашэнне' },
    { source: 'Active Members', target: 'Актыўныя ўдзельнікі' },
    { source: 'Remove member', target: 'Выдаліць удзельніка' },
    { source: 'You are setting sharing for the current page', target: 'Вы наладжваеце доступ для бягучай старонкі' },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'Вы наладжваеце доступ для ўсіх старонак вашага прыкладання.'
    },
    { source: 'Public access link', target: 'Публічная спасылка' },
    { source: 'Updating public access...', target: 'Абнаўленне публічнага доступу...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'Любая асоба з гэтай спасылкай зможа праглядзець бягучую старонку. Такім чынам вы таксама можаце ўбудаваць бягучую старонку на іншы вэбсайт.'
    },
    { source: 'Embed code (IFRAME)', target: 'Убудаваць код (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: "Устаўце гэты код у HTML-код вашага сайта, дзе вы хочаце, каб з'явілася бягучая старонка."
    },
    { source: 'link', target: 'спасылка' },
    { source: 'invited', target: 'запрошаны' },
    { source: 'Choose Team', target: 'Выбраць каманду' },
    { source: 'App Teams', target: 'Каманды прыкладання' },
    { source: 'Built-In Teams', target: 'Убудаваныя каманды' },
    { source: 'Clear Team', target: 'Ачысціць каманду' },
    { source: 'Can build application and modify data', target: 'Можа ствараць прыкладанне і рэдагаваць данныя' },
    { source: 'Can modify data in application', target: 'Можа рэдагаваць данныя ў прыкладзенні' },
    { source: 'Can only view data without modification', target: 'Можа толькі праглядаць данныя без рэдагавання' },
    { source: 'Add Team', target: 'Даданне каманды' },
    { source: 'Edit Team', target: 'Рэдагаванне каманды' },
    { source: 'Adding Team', target: 'Даданне каманды' },
    {
      source: 'Keep control over who has access to current App',
      target: 'Захавайце кантроль над тым, хто мае доступ да бягучага прыкладання'
    },
    { source: 'Enter Team Name', target: 'Увядзіце назву каманды' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'Увядзіце назву каманды, напрыклад: Падтрымка, Продажы, Маркетынг і г.д.'
    },
    { source: 'Add a new member to this team.', target: 'Дадаць новага ўдзельніка да гэтай каманды.' },
    { source: 'Invite new member', target: 'Запрасіць новага ўдзельніка' },
    { source: 'User', target: 'Карыстальнік' },
    { source: 'Date Added', target: 'Дата дадання' },
    { source: 'You', target: 'Вы' },
    { source: 'Edit', target: 'Рэдагаваць' },
    { source: 'No users in this team', target: 'У гэтай камандзе няма карыстальнікаў' },
    { source: 'Page Permissions', target: 'Дазволы старонкі' },
    { source: 'App Permissions', target: 'Дазволы прыкладання' },
    { source: 'Properties', target: 'Уласцівасці' },
    { source: 'Page name', target: 'Назва старонкі' },
    { source: 'Access', target: 'Доступ' },
    { source: 'Full Access', target: 'Поўны доступ' },
    { source: 'Read Only', target: 'Толькі чытанне' },
    { source: 'No Access', target: 'Няма доступу' },
    { source: 'Read', target: 'Чытанне' },
    { source: 'Update', target: 'Абнаўленне' },
    { source: 'Write', target: 'Запіс' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'Выдаліць' },
    { source: 'Custom Access', target: 'Індывідуальны доступ' },
    { source: 'Read, create, update and delete data', target: 'Чытанне, стварэнне, абнаўленне і выдаленне даных' },
    { source: 'Choose allowed operations granularly', target: 'Выберыце дазволеныя аперацыі паасобку' },
    { source: 'Without any access to data', target: 'Без доступу да даных' },
    { source: 'Name', target: 'Імя' },
    { source: 'Active', target: 'Актыўны' },
    { source: 'Settings', target: 'Налады' },
    { source: 'Members and Teams', target: 'Удзельнікі і каманды' },
    { source: 'App Builder', target: 'Будаўнік прыкладанняў' },
    { source: 'Collection Permissions', target: 'Дазволы калекцыі' },
    { source: "Grant permissions to app's collection", target: 'Надаць дазволы на калекцыі прыкладанняў' },
    { source: 'Collection', target: 'Калекцыя' },
    {
      source: 'Limit access to your data by team properties',
      target: 'Абмяжуйце доступ да вашых даных уласцівасцямі каманды'
    },
    { source: 'Save Team', target: 'Захаваць каманду' },
    { source: 'Create Team', target: 'Стварыць каманду' },
    { source: 'Value', target: 'Значэнне' },
    { source: 'No properties specified', target: 'Уласцівасці не ўказаны' },

    // Navigation
    { source: 'Current App', target: 'Бягучае прыкладанне' },
    { source: 'Home', target: 'Галоўная' },

    // Profile
    {
      source: 'We are fetching user data, please, wait...',
      target: 'Мы атрымліваем карыстальніцкія дадзеныя, калі ласка, чакайце...'
    },
    { source: 'Profile Settings', target: 'Налады профілю' },
    { source: 'Basic information about your account.', target: 'Асноўная інфармацыя аб вашым акаўнце.' },
    { source: 'Photo', target: 'Фота' },
    { source: 'your photo', target: 'ваша фота' },
    { source: 'Change', target: 'Змяніць' },
    { source: 'Upload', target: 'Загрузіць' },
    { source: 'Photo was successfully updated', target: 'Фота было паспяхова абноўлена' },
    { source: 'Photo was successfully deleted', target: 'Фота было паспяхова выдалена' },
    { source: 'First Name', target: 'Імя' },
    { source: 'Last Name', target: 'Прозвішча' },
    { source: 'Your Email', target: 'Ваш Email' },
    { source: 'Email Change', target: 'Змена Email' },
    { source: 'New Email', target: 'Новы Email' },
    { source: 'Change Email', target: 'Змяніць Email' },
    { source: 'Check your inbox', target: 'Праверце вашу паштую скрыню' },
    { source: 'Confirmation Email was sent to {0}', target: 'Email для пацверджання быў адпраўлены на {0}' },
    { source: 'Changing Email failed', target: 'Змена Email не ўдалася' },
    { source: 'Password Change', target: 'Змена паролю' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target: 'Пароль павінен быць дастаткова моцным, каб абараніць ваш акаўнт, таму зрабіце яго не менш 12 сімвалаў.'
    },
    { source: 'Current Password', target: 'Цяперашні пароль' },
    { source: 'New Password', target: 'Новы пароль' },
    { source: 'Confirm New Password', target: 'Пацвердзіць новы пароль' },
    { source: 'Change Password', target: 'Змяніць пароль' },
    {
      source: 'Current password was successfully updated, all other sessions will be logged out shortly',
      target: 'Цяперашні пароль быў паспяхова абноўлены, усе іншыя сеансы будуць неўзабаве завершаны'
    },
    { source: 'Saving current password failed', target: 'Захаванне цяперашняга пароля не ўдалося' },
    { source: 'Short password', target: 'Кароткі пароль' },
    { source: "Passwords don't match", target: 'Паролі не супадаюць' },
    { source: 'Personal Preferences', target: 'Асабістыя настаўлення' },
    { source: 'Language', target: 'Мова' },
    { source: 'Timezone', target: 'Часавы пояс' },
    { source: 'Current time in {0} is', target: 'Бягучы час у {0} гэта' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'Наладзьце дадатковыя перавагі вашага акаўнта.'
    },
    { source: 'News & Proposals', target: 'Навіны і прапановы' },
    {
      source: 'Subscribe to our updates and proposals.',
      target: 'Падпішыцеся на нашы абнаўленні і прапановы.'
    },
    { source: 'Save changes', target: 'Захаваць змены' },
    { source: 'Current user was successfully updated', target: 'Бягучы карыстальнік быў паспяхова абноўлены' },
    { source: 'Saving current user failed', target: 'Захаванне бягучага карыстальніка не ўдалося' },

    // My Apps
    { source: 'Type to search...', target: 'Увядзіце для пошуку...' },
    { source: 'My Apps', target: 'Мае прыкладанні' },
    { source: 'New App', target: 'Новае прыкладанне' },
    { source: 'Builder', target: 'Будыннік' },
    { source: 'App', target: 'Прыкладанне' },
    { source: 'continue install', target: 'працягнуць усталяванне' },
    { source: 'Open builder', target: 'Адкрыць будынак' },
    { source: 'View published', target: 'Праглядзець апублікаванае' },
    { source: 'Delete App', target: 'Выдаліць прыкладанне' },
    { source: 'Start from a template', target: 'Пачаць з шаблону' },
    { source: 'Preview', target: 'Папярэдні прагляд' },
    { source: 'Contact Support', target: 'Служба падтрымкі кантактаў' },
    { source: 'Documentation', target: 'Дакументацыя' },
    { source: 'Feature Requests', target: 'Запыты на функцыі' },
    { source: 'See What’s New', target: 'Паглядзіце, што новага' },
    { source: 'Search templates...', target: 'Пошук шаблонаў...' },
    { source: 'any', target: 'любое' },
    { source: 'more', target: 'больш' },
    { source: 'Choose Data Source', target: 'Выбраць крыніцу даных' },
    { source: 'works with 30+ data sources', target: 'працуе з 30+ крыніцамі даных' },
    { source: 'Use this template', target: 'Выкарыстаць гэты шаблон' },
    { source: 'stores data in Jet Tables', target: 'захоўвае даныя ў Jet Tables' },
    { source: 'New Data', target: 'Новыя даныя' },
    { source: 'using {0}', target: 'выкарыстоўваючы {0}' },
    { source: "Can't find resource you're looking for?", target: 'Не можаце знайсці рэсурс, які шукаеце?' },
    { source: 'Admin Panel', target: 'Адміністрацыйная панэль' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'Спіс, стварэнне і абнаўленне (CRUD) аперацый на вашых даных'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target:
        'Стварыце спецыяльную адміністрацыйную панэль на аснове любых баз даных, прыкладанняў і API, такіх як Stripe, Twilio і GraphQL.'
    },
    { source: 'All Integrations', target: 'Усе інтэграцыі' },
    { source: 'Databases', target: 'Базы даных' },
    { source: 'APIs', target: 'API' },
    { source: 'Frameworks', target: 'Фреймворкі' },
    { source: 'Storages', target: 'Сховішчы' },

    // Sign In
    { source: 'Good morning', target: 'Дабра раніцы' },
    { source: 'Good afternoon', target: 'Добры дзень' },
    { source: 'Good evening', target: 'Добры вечар' },
    { source: 'Sign In', target: 'Увайсці' },
    { source: 'Welcome Back.', target: 'Вітаем зноў.' },
    { source: 'Sign in with {0}', target: 'Увайсці з {0}' },
    { source: 'or login with', target: 'ці ўвайсці з дапамогай' },
    { source: 'Enter E-mail', target: 'Увядзіце E-mail' },
    { source: 'Enter password', target: 'Увядзіце пароль' },
    { source: 'Login', target: 'Уваход' },
    { source: 'Create new account', target: 'Стварыць новы акаўнт' },
    { source: 'Forgot my password', target: 'Забылі пароль' },
    { source: 'required', target: 'абавязковы' },
    { source: 'incorrect Email', target: 'няправільны Email' },
    { source: 'Minimum password length {0}', target: 'Мінімальная даўжыня пароля {0}' },
    { source: 'Unable to Sign In', target: 'Немагчыма ўвайсці' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'Пачніце <span class="auth-form__accent">бясплатна сёння</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target:
        'Карта не патрабуецца. Вы атрымаеце ўсю пашыраную функцыянальнасць бясплатна падчас 14-дзённага прабнага перыяду PRO.'
    },
    { source: 'Enter First Name', target: 'Увядзіце Імя' },
    { source: 'Enter Last Name (optional)', target: 'Увядзіце Прозвішча (неабавязкова)' },
    { source: 'Enter Email', target: 'Увядзіце Email' },
    { source: 'Password', target: 'Пароль' },
    { source: 'Repeat Password', target: 'Паўтарыце пароль' },
    { source: 'By signing in you’re okay with our', target: 'Выконваючы ўваход, вы згодны з нашымі' },
    {
      source: 'Creating an account means you’re okay with our',
      target: 'Стварэнне акаўнта азначае, што вы згодны з нашымі'
    },
    { source: 'Terms of Service', target: 'Умовамі карыстання' },
    { source: 'Privacy Policy', target: 'Палітыка прыватнасці' },
    { source: 'and', target: 'і' },
    { source: 'Create your free account', target: 'Стварыце ваш бясплатны акаўнт' },
    { source: 'Already have an account', target: 'Ужо ёсць акаўнт' },
    { source: 'Unable to Sign Up', target: 'Немагчыма зарэгістравацца' },

    // Restore password
    { source: 'Reset your password', target: 'Скідванне пароля' },
    { source: 'Email Address', target: 'Адрас Email' },
    { source: 'Reset password', target: 'Скідванне пароля' },
    { source: 'Return to Sign In', target: 'Вярнуцца да ўваходу' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'Калі ласка, праверце ваш Email – <strong>{0}</strong>. Мы адправілі спасылку для валідацыі, якую вам трэба перайсці для змянення пароля.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be al least 8 characters.',
      target: 'Амаль гатова, проста увядзіце ваш новы пароль ніжэй. <br>Мінімум 8 сімвалаў.'
    },
    { source: 'Reset password & Sign In', target: 'Скідванне пароля і ўваход' },
    { source: 'Unable to Send Code', target: 'Немагчыма адправіць код' },
    { source: 'Unable to Change Password', target: 'Немагчыма змяніць пароль' },

    // Email Verification
    { source: 'Email Verification', target: 'Пацверджанне Email' },
    { source: 'Resend verification code', target: 'Паўторна адправіць код пацверджання' },
    { source: 'Verification email sent', target: 'Ліст для пацверджання адпраўлены' },
    { source: 'Your Email is now verified', target: 'Ваш Email цяпер пацверджаны' },
    { source: 'Request is incorrect', target: 'Некарэктны запыт' },

    // Invites
    {
      source: 'Join <span class="auth-form__accent">{0}</span>',
      target: 'Далучыцца да <span class="auth-form__accent">{0}</span>'
    },
    {
      source: '<strong>{0}</strong> has invited you to join <strong>{1}</strong>',
      target: '<strong>{0}</strong> запрасіў вас далучыцца да <strong>{1}</strong>'
    },
    {
      source: 'Someone has invited you to join <strong>{0}</strong>',
      target: 'Кто-то запрасіў вас далучыцца да <strong>{0}</strong>'
    },
    {
      source: 'You are joining <strong>{0}</strong> using invite link',
      target: 'Вы далучацеся да <strong>{0}</strong> з дапамогай спасылкі-запрашэння'
    },
    { source: 'Join', target: 'Далучыцца' },
    { source: 'Go to home page', target: 'Перайсці на галоўную старонку' },
    { source: 'Invite link is wrong', target: 'Спасылка-запрашэнне няправільная' },
    {
      source:
        'Looks like your invitation link has expired or maybe you have followed the wrong link. Please try to ask to invite your again.',
      target:
        'Падобна, што ваша спасылка-запрашэнне састарэла або, магчыма, вы прайшлі па некарэктнай спасылцы. Калі ласка, паспрабуйце запрасіць вас зноў.'
    },
    {
      source: 'Unfortunately we failed to load information about this invitation',
      target: 'На жаль, нам не ўдалося загрузіць інфармацыю аб гэтым запрашэнні'
    },

    // Users & Teams
    { source: 'Members of {0}', target: 'Удзельнікі {0}' },
    { source: 'How to get started', target: 'Як пачаць' },
    { source: 'Users API', target: 'API Карыстальнікаў' },
    { source: 'Teams API', target: 'API Каманд' },
    { source: 'Invite Member', target: 'Запрасіць удзельніка' },
    { source: 'Add User property', target: 'Дадаць уласцівасць карыстальніка' },
    { source: 'Add Team property', target: 'Дадаць уласцівасць каманды' },
    { source: 'Edit property', target: 'Рэдагаваць уласцівасць' },
    { source: 'Delete property', target: 'Выдаліць уласцівасць' },
    { source: 'Users', target: 'Карыстальнікі' },
    { source: 'Teams', target: 'Каманды' },
    { source: 'Search members', target: 'Пошук удзельнікаў' },
    { source: 'Search teams', target: 'Пошук каманд' },
    { source: '{0} pages', target: '{0} старонак' },
    { source: 'No members', target: 'Няма ўдзельнікаў' }
  ]
};

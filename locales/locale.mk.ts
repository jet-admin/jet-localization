import { Locale } from './locale';

export const locale: Locale = {
  name: 'macedonian',
  language: 'mk',
  items: [
    // General
    { source: 'Save', target: 'Зачувај' },
    { source: 'Create', target: 'Креирај' },
    { source: 'Duplicating', target: 'Дуплирање' },
    { source: 'Duplicate', target: 'Дуплирај' },
    { source: 'Mass Edit', target: 'Масовна промена' },
    { source: 'Export', target: 'Извези' },
    { source: 'Import', target: 'Внеси' },
    { source: 'Delete', target: 'Избриши' },
    { source: 'Continue', target: 'Продолжи' },
    { source: 'Submit', target: 'Поднеси' },
    { source: 'Cancel', target: 'Откажи' },
    { source: 'Loading', target: 'Вчитување' },
    { source: 'Please wait...', target: 'Ве молиме почекајте...' },
    { source: 'Loading failed', target: 'Вчитувањето не успеа' },
    { source: 'Unknown error', target: 'Непозната грешка' },
    { source: 'Add', target: 'Додај' },
    { source: 'or', target: 'или' },
    { source: 'Hours', target: 'Часови' },
    { source: 'Minutes', target: 'Минути' },
    { source: 'Seconds', target: 'Секунди' },
    { source: 'Saved', target: 'Зачувано' },
    { source: 'Error', target: 'Грешка' },
    { source: 'Page not found', target: 'Страницата не е пронајдена' },
    {
      source: 'The specified address is incorrect, or the page does not exist',
      target: 'Наведената адреса е неточна или страницата не постои'
    },
    { source: 'Not allowed', target: 'Не дозволено' },
    {
      source: "You don't have permissions to access this page",
      target: 'Немате дозвола за пристап на оваа страница'
    },
    { source: 'Are you sure want to close?', target: 'Дали сте сигурни дека сакате да затворите?' },
    { source: 'Close', target: 'Затвори' },

    // Actions
    { source: 'Action executed', target: 'Акцијата е извршена' },
    { source: 'Action executed successfully', target: 'Акцијата е успешно извршена' },
    { source: 'Action failed', target: 'Акцијата не успеа' },
    {
      source: "You don't have permission for run this operation",
      target: 'Немате дозвола за извршување на оваа операција'
    },
    { source: 'Specify parameters', target: 'Одредете параметри' },
    { source: 'Executing action', target: 'Акцијата се извршува' },
    { source: 'You are executing <strong>{0}</strong>', target: 'Вие ја извршувате <strong>{0}</strong>' },
    { source: 'Please fill in the parameters below.', target: 'Ве молиме внесете ги параметрите подолу.' },
    { source: 'Execute', target: 'Изврши' },
    { source: 'Executing', target: 'Се извршува' },
    { source: 'Finished', target: 'Завршено' },
    { source: 'Done', target: 'Завршено' },

    // Export
    { source: 'Records Export', target: 'Извоз на записи' },
    { source: 'Downloading records data as a file', target: 'Сe преземаат податоци за записи како датотека' },
    { source: 'Choose format', target: 'Изберете формат' },
    { source: 'Number of exporting records', target: 'Број на записи за извоз' },
    { source: { label: 'Export', context: 'submit' }, target: 'Извези' },
    { source: 'Exporting', target: 'Извезува' },
    { source: 'Export completed', target: 'Извозот е завршен' },
    { source: 'Failed to export', target: 'Извозот не успеа' },

    // Components
    { source: 'optional', target: 'не е задолжително' },
    { source: 'choose', target: 'изберете' },
    { source: 'Clear value', target: 'Избриши вредност' },
    { source: 'loading...', target: 'се вчитува...' },
    { source: 'Nothing found', target: 'Ништо не е пронајдено' },
    { source: 'Search...', target: 'Пребарувај...' },
    { source: 'Enter at least {0} characters', target: 'Внесете најмалку {0} карактери' },
    { source: 'No options', target: 'Нема опции' },
    { source: 'Drop files here or', target: 'Повлечете датотеки овде или' },
    { source: 'Upload new', target: 'Поставете ново' },
    { source: 'Clear', target: 'Исчисти' },
    { source: 'Download', target: 'Преземи' },
    { source: 'Choose file', target: 'Изберете датотека' },
    { source: 'Choose files', target: 'Изберете датотеки' },
    { source: 'Scan with Camera', target: 'Скенирај со камера' },
    { source: 'Scan Image file', target: 'Скенирај слика' },
    { source: 'Choose camera', target: 'Изберете камера' },
    { source: 'Stop scanning', target: 'Запри со скенирање' },
    { source: 'Scan again', target: 'Повторно скенирај' },
    { source: 'Use this scan', target: 'Користи го ова скенирање' },
    { source: 'Failed to scan', target: 'Скенирањето не успеа' },
    {
      source: 'Code failed to scan, please try another image',
      target: 'Кодот не успеа да се скенира, ве молиме пробајте со друга слика'
    },
    { source: 'current', target: 'тековен' },
    { source: 'Day', target: 'Ден' },
    { source: 'Week', target: 'Недела' },
    { source: 'Month', target: 'Месец' },
    { source: 'Year', target: 'Година' },
    { source: 'Today', target: 'Денеска' },
    { source: 'Daily', target: 'Дневно' },
    { source: 'Weekly', target: 'Неделно' },
    { source: 'Monthly', target: 'Месечно' },
    { source: 'Quarterly', target: 'Тромесечно' },
    { source: 'Yearly', target: 'Годишно' },
    { source: 'Hourly', target: 'По часови' },
    { source: 'Minutely', target: 'По минути' },
    { source: 'Since', target: 'Од' },
    { source: 'Before', target: 'Пред' },
    { source: 'Between', target: 'Помеѓу' },
    { source: 'From date', target: 'Од датум' },
    { source: 'To date', target: 'До датум' },
    { source: 'Coordinates', target: 'Координати' },
    { source: 'Latitude', target: 'Ширина' },
    { source: 'Longitude', target: 'Должина' },
    { source: 'Default color', target: 'Стандардна боја' },
    { source: 'not specified', target: 'не е означено' },
    { source: 'Sign using your finger or pointer', target: 'Потпишете се со прст или покажувач' },

    // List components
    { source: 'Filter', target: 'Филтер' },
    { source: 'Filter by field', target: 'Филтер по поле' },
    { source: 'Filter by...', target: 'Филтер по...' },
    { source: 'Back', target: 'Назад' },
    { source: 'Back to {0} fields', target: 'Назад на полиња {0}' },
    { source: 'Choose {0} from list', target: 'Изберете {0} од листа' },
    { source: '{0} fields', target: '{0} полиња' },
    { source: '{0} relationships', target: '{0} релации' },
    { source: 'Aggregate {0}', target: 'Агрегирај {0}' },
    { source: 'No fields to select', target: 'Нема полиња за избор' },
    { source: 'Enter value...', target: 'Внеси вредност...' },
    { source: 'Exclude', target: 'Исклучи' },
    { source: 'Actions', target: 'Акции' },
    { source: 'Search', target: 'Пребарај' },
    { source: 'Sort 1 → 9', target: 'Подреди 1 → 9' },
    { source: 'Sort 9 → 1', target: 'Подреди 9 → 1' },
    { source: 'Sort A → Z', target: 'Подреди А → З' },
    { source: 'Sort Z → A', target: 'Подреди З → А' },
    { source: 'Refresh automatically', target: 'Освежи автоматски' },
    { source: 'All', target: 'Сите' },
    { source: 'Selected', target: 'Избрани' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'За жал, не е пронајдено {0} кое одговара на вашата пребарување'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'Ја преземаме {0}, ве молиме почекајте...' },
    { source: 'Add filter', target: 'Додај филтер' },
    { source: 'Delete this filter', target: 'Избриши го овој филтер' },
    { source: 'Toggle ordering', target: 'Промени редослед' },
    { source: 'Not configured', target: 'Не е конфигурирано' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'За жал, овој компонент сè уште не е конфигуриран'
    },
    { source: 'records', target: 'записи' },
    { source: '{0} items', target: '{0} ставки' },

    // Menu
    { source: 'Users & Teams', target: 'Корисници и Тимови' },
    { source: 'Billing', target: 'Наплата' },
    { source: 'Billing & Plans', target: 'Наплата и Планови' },
    { source: 'API keys', target: 'АPI клучеви' },
    { source: 'Dark Mode', target: 'Темна тема' },
    { source: 'Light Mode', target: 'Светла тема' },
    { source: 'Disable Staff', target: 'Оневозможи Персонал' },
    { source: 'Enable Staff', target: 'Овозможи Персонал' },
    { source: 'Manage Templates', target: 'Управувај Шаблони' },
    { source: 'Logout', target: 'Одјави се' },
    { source: 'Activity Log', target: 'Лог на Активности' },
    { source: 'Collaborations', target: 'Соработки' },
    { source: 'Open Visual Builder', target: 'Отвори Визуелен Градител' },

    // Filters
    { source: 'equals', target: 'е еднакво' },
    { source: 'does not equal', target: 'не е еднакво' },
    { source: '{0} equals {1}', target: '{0} е еднакво на {1}' },
    { source: '{0} does not equal {1}', target: '{0} не е еднакво на {1}' },

    { source: 'contains', target: 'содржи' },
    { source: 'does not contain', target: 'не содржи' },
    { source: '{0} contains {1}', target: '{0} содржи {1}' },
    { source: '{0} not contains {1}', target: '{0} не содржи {1}' },

    { source: 'starts with', target: 'почнува со' },
    { source: 'does not start with', target: 'не почнува со' },
    { source: '{0} starts with {1}', target: '{0} почнува со {1}' },
    { source: '{0} does not start with {1}', target: '{0} не почнува со {1}' },

    { source: 'ends with', target: 'завршува со' },
    { source: 'does not end with', target: 'не завршува со' },
    { source: '{0} ends with {1}', target: '{0} завршува со {1}' },
    { source: '{0} does not end with {1}', target: '{0} не завршува со {1}' },

    { source: 'greater than', target: 'поголемо од' },
    { source: 'is not greater than', target: 'не е поголемо од' },
    { source: '{0} is greater than {1}', target: '{0} е поголемо од {1}' },
    { source: '{0} not greater than {1}', target: '{0} не е поголемо од {1}' },

    { source: 'greater than or equals', target: 'поголемо или еднакво на' },
    { source: 'is not greater than or equals', target: 'не е поголемо или еднакво на' },
    { source: '{0} is greater than or equals {1}', target: '{0} е поголемо или еднакво на {1}' },
    { source: '{0} is not greater than or equals {1}', target: '{0} не е поголемо или еднакво на {1}' },

    { source: 'less than', target: 'помало од' },
    { source: 'is not less than', target: 'не е помало од' },
    { source: '{0} is less than {1}', target: '{0} е помало од {1}' },
    { source: '{0} is not less than {1}', target: '{0} не е помало од {1}' },

    { source: 'less than or equals', target: 'помало или еднакво на' },
    { source: 'is not less than or equals', target: 'не е помало или еднакво на' },
    { source: '{0} is less than or equals {1}', target: '{0} е помало или еднакво на {1}' },
    { source: '{0} is not less than or equals {1}', target: '{0} не е помало или еднакво на {1}' },

    { source: 'one of', target: 'едно од' },
    { source: 'is one of', target: 'е едно од' },
    { source: 'is not one of', target: 'не е едно од' },
    { source: '{0} is one of {1}', target: '{0} е едно од {1}' },
    { source: '{0} is not one of {1}', target: '{0} не е едно од {1}' },

    { source: 'is null', target: 'е null' },
    { source: 'is not null', target: 'не е null' },
    { source: '{0} is null', target: '{0} е null' },
    { source: '{0} is not null', target: '{0} не е null' },

    { source: 'is future', target: 'е во иднината' },
    { source: 'in the future', target: 'во иднината' },
    { source: 'is not in the future', target: 'не е во иднината' },
    { source: '{0} is in the future', target: '{0} е во иднината' },
    { source: '{0} is not in the future', target: '{0} не е во иднината' },

    { source: 'is past', target: 'е во минатото' },
    { source: 'in the past', target: 'во минатото' },
    { source: 'is not in the past', target: 'не е во минатото' },
    { source: '{0} is in the past', target: '{0} е во минатото' },
    { source: '{0} is not in the past', target: '{0} не е во минатото' },

    { source: 'is Today', target: 'е денес' },
    { source: 'today', target: 'денес' },
    { source: 'is not today', target: 'не е денес' },
    { source: '{0} is today', target: '{0} е денес' },
    { source: '{0} is not today', target: '{0} не е денес' },

    { source: 'is Yesterday', target: 'е вчера' },
    { source: 'yesterday', target: 'вчера' },
    { source: 'is not yesterday', target: 'не е вчера' },
    { source: '{0} is yesterday', target: '{0} е вчера' },
    { source: '{0} is not yesterday', target: '{0} не е вчера' },

    { source: 'is Last Week', target: 'е последната недела' },
    { source: 'last week', target: 'последната недела' },
    { source: 'is not last week', target: 'не е последната недела' },
    { source: '{0} is last week', target: '{0} е последната недела' },
    { source: '{0} is not last week', target: '{0} не е последната недела' },

    { source: 'is Last Month', target: 'е последниот месец' },
    { source: 'last month', target: 'последниот месец' },
    { source: 'is not last month', target: 'не е последниот месец' },
    { source: '{0} is last month', target: '{0} е последниот месец' },
    { source: '{0} is not last month', target: '{0} не е последниот месец' },

    { source: 'is Last Quarter', target: 'е последниот квартал' },
    { source: 'last quarter', target: 'последниот квартал' },
    { source: 'is not last quarter', target: 'не е последниот квартал' },
    { source: '{0} is last quarter', target: '{0} е последниот квартал' },
    { source: '{0} is not last quarter', target: '{0} не е последниот квартал' },

    { source: 'is Last Year', target: 'е последната година' },
    { source: 'last year', target: 'последната година' },
    { source: 'is not last year', target: 'не е последната година' },
    { source: '{0} is last year', target: '{0} е последната година' },
    { source: '{0} is not last year', target: '{0} не е последната година' },

    { source: 'is Last X Days', target: 'е последниот X денови' },
    { source: 'last X days', target: 'последниот X денови' },
    { source: 'is not last X days', target: 'не е последниот X денови' },
    { source: '{0} is last {1} days', target: '{0} е последниот {1} денови' },
    { source: '{0} is not last {1} days', target: '{0} не е последниот {1} денови' },

    { source: 'is Current Week', target: 'е тековната недела' },
    { source: 'current week', target: 'тековната недела' },
    { source: 'is not current week', target: 'не е тековната недела' },
    { source: '{0} is current week', target: '{0} е тековната недела' },
    { source: '{0} is not current week', target: '{0} не е тековната недела' },

    { source: 'is Current Month', target: 'е тековниот месец' },
    { source: 'current month', target: 'тековниот месец' },
    { source: 'is not current month', target: 'не е тековниот месец' },
    { source: '{0} is current month', target: '{0} е тековниот месец' },
    { source: '{0} is not current month', target: '{0} не е тековниот месец' },

    { source: 'is Current Quarter', target: 'е тековниот квартал' },
    { source: 'current quarter', target: 'тековниот квартал' },
    { source: 'is not current quarter', target: 'не е тековниот квартал' },
    { source: '{0} is current quarter', target: '{0} е тековниот квартал' },
    { source: '{0} is not current quarter', target: '{0} не е тековниот квартал' },

    { source: 'is Current Year', target: 'е тековната година' },
    { source: 'current year', target: 'тековната година' },
    { source: 'is not current year', target: 'не е тековната година' },
    { source: '{0} is current year', target: '{0} е тековната година' },
    { source: '{0} is not current year', target: '{0} не е тековната година' },

    { source: 'is Previous Week', target: 'е претходната недела' },
    { source: 'previous week', target: 'претходната недела' },
    { source: 'is not previous week', target: 'не е претходната недела' },
    { source: '{0} is previous week', target: '{0} е претходната недела' },
    { source: '{0} is not previous week', target: '{0} не е претходната недела' },

    { source: 'is Previous Month', target: 'е претходниот месец' },
    { source: 'previous month', target: 'претходниот месец' },
    { source: 'is not previous month', target: 'не е претходниот месец' },
    { source: '{0} is previous month', target: '{0} е претходниот месец' },
    { source: '{0} is not previous month', target: '{0} не е претходниот месец' },

    { source: 'is Previous Quarter', target: 'е претходниот квартал' },
    { source: 'previous quarter', target: 'претходниот квартал' },
    { source: 'is not previous quarter', target: 'не е претходниот квартал' },
    { source: '{0} is previous quarter', target: '{0} е претходниот квартал' },
    { source: '{0} is not previous quarter', target: '{0} не е претходниот квартал' },

    { source: 'is Previous Year', target: 'е претходната година' },
    { source: 'previous year', target: 'претходната година' },
    { source: 'is not previous year', target: 'не е претходната година' },
    { source: '{0} is previous year', target: '{0} е претходната година' },
    { source: '{0} is not previous year', target: '{0} не е претходната година' },

    { source: 'is Previous X Days', target: 'е претходниот X денови' },
    { source: 'previous X days', target: 'претходниот X денови' },
    { source: 'is not previous X days', target: 'не е претходниот X денови' },
    { source: '{0} is previous {1} days', target: '{0} е претходниот {1} денови' },
    { source: '{0} is not previous {1} days', target: '{0} не е претходниот {1} денови' },

    { source: 'is empty', target: 'е празен' },
    { source: 'is not empty', target: 'не е празен' },
    { source: '{0} is empty', target: '{0} е празен' },
    { source: '{0} is not empty', target: '{0} не е празен' },

    { source: 'covered by', target: 'покриен од' },
    { source: 'is not covered by', target: 'не е покриен од' },
    { source: '{0} covered by {1}', target: '{0} покриен од {1}' },
    { source: '{0} is not covered by {1}', target: '{0} не е покриен од {1}' },

    // Activity log
    { source: 'No activities found', target: 'Нема пронајдени активности' },
    {
      source: 'Start to working with data to log activities.',
      target: 'Започнете со работа со податоци за да ги пријавите активностите.'
    },
    { source: 'All Activity', target: 'Сите активности' },
    { source: 'Create Record', target: 'Креирај запис' },
    { source: 'Update Record', target: 'Ажурирај запис' },
    { source: 'Delete Record', target: 'Избриши запис' },
    { source: 'All Members', target: 'Сите членови' },

    // Collaboration
    { source: 'Timeline', target: 'Временска линија' },
    { source: 'Messages', target: 'Пораки' },
    { source: 'Activity', target: 'Активност' },
    { source: 'Start chatting with your team', target: 'Започнете разговор со вашиот тим' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'Земете порачка за тековната страница за да следите важни информации.'
    },
    { source: 'Your Message', target: 'Вашата порака' },
    { source: 'Send', target: 'Испрати' },

    // Share
    { source: 'Invite members', target: 'Покани членови' },
    { source: 'Public share', target: 'Јавна споделба' },
    { source: 'Sign Up', target: 'Регистрирај се' },
    { source: 'Members', target: 'Членови' },
    { source: 'Invite with Email', target: 'Покани со Email' },
    { source: 'Invite someone...', target: 'Покани некого...' },
    { source: 'Send Invite', target: 'Испрати покана' },
    {
      source: 'Limit access to your data by user properties',
      target: 'Ограничете пристап до вашите податоци според својствата на корисникот'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: 'Внесете го email на корисникот кој сакате да го поканите за соработка.'
    },
    { source: 'Copy', target: 'Копирај' },
    { source: 'Invite with Link', target: 'Прати покана со врска' },
    { source: 'Remove link', target: 'Отстрани врска' },
    { source: 'Add Invite Link', target: 'Додади поканувачка врска' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'Секој на интернет со оваа врска ќе може да се приклучи на избраниот тим.'
    },
    { source: 'Pending Invites', target: 'Неодговорени покани' },
    { source: 'Cancel invite', target: 'Откажи покана' },
    { source: 'Active Members', target: 'Активни членови' },
    { source: 'Remove member', target: 'Отстрани член' },
    {
      source: 'You are setting sharing for the current page',
      target: 'Ја поставувате споделбата за тековната страница'
    },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'Ја поставувате споделбата за сите страници на вашата апликација.'
    },
    { source: 'Public access link', target: 'Јавна пристапна врска' },
    { source: 'Updating public access...', target: 'Ажурирање на јавниот пристап...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'Секој со оваа врска ќе може да ја види тековната страница. На овој начин исто така можете да ја вметнете тековната страница во друга веб-страница.'
    },
    { source: 'Embed code (IFRAME)', target: 'Вгради код (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target:
        'Залепете го овој код во HTML кодот на вашата веб-страница каде што сакате да се појави тековната страница.'
    },
    { source: 'link', target: 'врска' },
    { source: 'invited', target: 'поканет' },
    { source: 'Choose Team', target: 'Избери тим' },
    { source: 'App Teams', target: 'Тимови на апликација' },
    { source: 'Built-In Teams', target: 'Вообичаени тимови' },
    { source: 'Clear Team', target: 'Исчисти тим' },
    { source: 'Can build application and modify data', target: 'Може да гради апликација и да ги изменува податоците' },
    { source: 'Can modify data in application', target: 'Може да ги изменува податоците во апликацијата' },
    { source: 'Can only view data without modification', target: 'Може само да ги прегледа податоците без измена' },
    { source: 'Add Team', target: 'Додади тим' },
    { source: 'Edit Team', target: 'Изменете тим' },
    { source: 'Adding Team', target: 'Додавање тим' },
    {
      source: 'Keep control over who has access to current App',
      target: 'Одржувајте контрола врз тоа кој има пристап до тековната апликација'
    },
    { source: 'Enter Team Name', target: 'Внеси име на тимот' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'Внесете го името на тимот, напр. Поддршка, Продажба, Маркетинг, итн.'
    },
    { source: 'Add a new member to this team.', target: 'Додајте нов член на овој тим.' },
    { source: 'Invite new member', target: 'Поканете нов член' },
    { source: 'User', target: 'Корисник' },
    { source: 'Date Added', target: 'Датум на додавање' },
    { source: 'You', target: 'Вие' },
    { source: 'Edit', target: 'Уреди' },
    { source: 'No users in this team', target: 'Нема корисници во овој тим' },
    { source: 'Page Permissions', target: 'Дозволи за страницата' },
    { source: 'App Permissions', target: 'Дозволи за апликацијата' },
    { source: 'Properties', target: 'Својства' },
    { source: 'Page name', target: 'Име на страница' },
    { source: 'Access', target: 'Пристап' },
    { source: 'Full Access', target: 'Целосен пристап' },
    { source: 'Read Only', target: 'Само за читање' },
    { source: 'No Access', target: 'Без пристап' },
    { source: 'Read', target: 'Читање' },
    { source: 'Update', target: 'Ажурирање' },
    { source: 'Write', target: 'Пишување' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'Избриши' },
    { source: 'Custom Access', target: 'Прилагоден пристап' },
    { source: 'Read, create, update and delete data', target: 'Читање, создавање, ажурирање и бришење податоци' },
    { source: 'Choose allowed operations granularly', target: 'Изберете дозволени операции детално' },
    { source: 'Without any access to data', target: 'Без никаков пристап до податоци' },
    { source: 'Name', target: 'Име' },
    { source: 'Active', target: 'Активен' },
    { source: 'Settings', target: 'Поставки' },
    { source: 'Members and Teams', target: 'Членови и Тимови' },
    { source: 'App Builder', target: 'Градител на апликации' },
    { source: 'Collection Permissions', target: 'Дозволи за колекција' },
    { source: "Grant permissions to app's collection", target: 'Доделете дозволи на колекцијата на апликацијата' },
    { source: 'Collection', target: 'Колекција' },
    {
      source: 'Limit access to your data by team properties',
      target: 'Ограничете го пристапот до вашите податоци според својствата на тимот'
    },
    { source: 'Save Team', target: 'Зачувај тим' },
    { source: 'Create Team', target: 'Креирај тим' },
    { source: 'Value', target: 'Вредност' },
    { source: 'No properties specified', target: 'Не се специфицирани својства' },

    // Navigation
    { source: 'Current App', target: 'Тековна апликација' },
    { source: 'Home', target: 'Дома' },

    // Profile
    {
      source: 'We are fetching user data, please, wait...',
      target: 'Преземаме кориснички податоци, ве молиме почекајте...'
    },
    { source: 'Profile Settings', target: 'Поставки за профил' },
    { source: 'Basic information about your account.', target: 'Bазични информации за вашиот профил.' },
    { source: 'Photo', target: 'Слика' },
    { source: 'your photo', target: 'вашата слика' },
    { source: 'Change', target: 'Промени' },
    { source: 'Upload', target: 'Поставете' },
    { source: 'Photo was successfully updated', target: 'Сликата е успешно ажурирана' },
    { source: 'Photo was successfully deleted', target: 'Сликата е успешно избришана' },
    { source: 'First Name', target: 'Име' },
    { source: 'Last Name', target: 'Презиме' },
    { source: 'Your Email', target: 'Вашиот Email' },
    { source: 'Email Change', target: 'Измени Email' },
    { source: 'New Email', target: 'Нов Email' },
    { source: 'Change Email', target: 'Промени Email' },
    { source: 'Check your inbox', target: 'Проверете го вашиот email инбокс' },
    { source: 'Confirmation Email was sent to {0}', target: 'Потврден Email е испратен до {0}' },
    { source: 'Changing Email failed', target: 'Измената на Email не успеа' },
    { source: 'Password Change', target: 'Измени лозинка' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target: 'Лозинката треба да биде доволно јака за да го заштити вашиот профил. Направете ја најмалку 12 карактери.'
    },
    { source: 'Current Password', target: 'Тековна лозинка' },
    { source: 'New Password', target: 'Нова лозинка' },
    { source: 'Confirm New Password', target: 'Потврдете нова лозинка' },
    { source: 'Change Password', target: 'Промени лозинка' },
    {
      source: 'Current password was successfully updated, all other sessions will be logged out shortly',
      target: 'Тековната лозинка е успешно ажурирана, сите други сесии наскоро ќе бидат одјавени'
    },
    { source: 'Saving current password failed', target: 'Ажурирањето на тековната лозинка не успеа' },
    { source: 'Short password', target: 'Кратка лозинка' },
    { source: "Passwords don't match", target: 'Лозинките не се совпаѓаат' },
    { source: 'Personal Preferences', target: 'Пpеференции' },
    { source: 'Language', target: 'Јазик' },
    { source: 'Timezone', target: 'Временска зона' },
    { source: 'Current time in {0} is', target: 'Тековното време во {0} е' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'Прилагодете дополнителни преференции за вашиот профил.'
    },
    { source: 'News & Proposals', target: 'Вести & Предлози' },
    {
      source: 'Subscribe to our updates and proposals.',
      target: 'Претплатете се на нашите новости и предлози.'
    },
    { source: 'Save changes', target: 'Зачувај ги промените' },
    { source: 'Current user was successfully updated', target: 'Тековниот профил е успешно ажуриран' },
    { source: 'Saving current user failed', target: 'Ажурирањето на тековниот профил не успеа' },

    // My Apps
    { source: 'Type to search...', target: 'Внесете за пребарување...' },
    { source: 'My Apps', target: 'Мои Апликации' },
    { source: 'New App', target: 'Нова Апликација' },
    { source: 'Builder', target: 'Градител' },
    { source: 'App', target: 'Апликација' },
    { source: 'continue install', target: 'продолжи инсталација' },
    { source: 'Open builder', target: 'Отвори градител' },
    { source: 'View published', target: 'Прикажи објавено' },
    { source: 'Delete App', target: 'Избриши Апликација' },
    { source: 'Start from a template', target: 'Започни со шаблон' },
    { source: 'Preview', target: 'Преглед' },
    { source: 'Contact Support', target: 'Контакт Поддршка' },
    { source: 'Documentation', target: 'Документација' },
    { source: 'Feature Requests', target: 'Барања за Функционалност' },
    { source: 'See What’s New', target: 'Види Што е Ново' },
    { source: 'Search templates...', target: 'Пребарајте шаблони...' },
    { source: 'any', target: 'било кој' },
    { source: 'more', target: 'повеќе' },
    { source: 'Choose Data Source', target: 'Изберете Извор на Податоци' },
    { source: 'works with 30+ data sources', target: 'работи со 30+ извори на податоци' },
    { source: 'Use this template', target: 'Користи го овој шаблон' },
    { source: 'stores data in Jet Tables', target: 'чува податоци во Jet Tables' },
    { source: 'New Data', target: 'Нови Податоци' },
    { source: 'using {0}', target: 'користи {0}' },
    { source: "Can't find resource you're looking for?", target: 'Не можете да го најдете ресурсот што го барате?' },
    { source: 'Admin Panel', target: 'Админ Панел' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'Листа, креирај и ажурирај (CRUD) операции на вашите податоци'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target:
        'Изградете прилагоден админ панел заснован на било која база на податоци, апликации и API како Stripe, Twilio и GraphQL.'
    },
    { source: 'All Integrations', target: 'Сите интеграции' },
    { source: 'Databases', target: 'Бази на податоци' },
    { source: 'APIs', target: 'API' },
    { source: 'Frameworks', target: 'Фрејмворкови' },
    { source: 'Storages', target: 'Складишта' },

    // Sign In
    { source: 'Good morning', target: 'Добро утро' },
    { source: 'Good afternoon', target: 'Добар ден' },
    { source: 'Good evening', target: 'Добра вечер' },
    { source: 'Sign In', target: 'Најави се' },
    { source: 'Welcome Back.', target: 'Добре дојдовте.' },
    { source: 'Sign in with {0}', target: 'Најави се со {0}' },
    { source: 'or login with', target: 'или најави се со' },
    { source: 'Enter E-mail', target: 'Внесете E-mail' },
    { source: 'Enter password', target: 'Внесете Лозинка' },
    { source: 'Login', target: 'Најави се' },
    { source: 'Create new account', target: 'Креирај нов профил' },
    { source: 'Forgot my password', target: 'Ја заборавив лозинката' },
    { source: 'required', target: 'потребно' },
    { source: 'incorrect Email', target: 'неточен Email' },
    { source: 'Minimum password length {0}', target: 'Минимална должина на лозинка {0}' },
    { source: 'Unable to Sign In', target: 'Не е можно да се најавите' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'Започни <span class="auth-form__accent">бесплатно денес</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target:
        'Не е потребна картичка. Ќе добиете напреден функционалитет бесплатно за време на 14 дневниот PRO пробен период.'
    },
    { source: 'Enter First Name', target: 'Внесете Име' },
    { source: 'Enter Last Name (optional)', target: 'Внесете Презиме (опционално)' },
    { source: 'Enter Email', target: 'Внесете Email' },
    { source: 'Password', target: 'Лозинка' },
    { source: 'Repeat Password', target: 'Повторете Лозинка' },
    {
      source: 'By signing in you’re okay with our',
      target: 'Со најавување се согласувате со нашето'
    },
    {
      source: 'Creating an account means you’re okay with our',
      target: 'Креирањето профил значи дека се согласувате со нашето'
    },
    { source: 'Terms of Service', target: 'Услови на користење' },
    { source: 'Privacy Policy', target: 'Политика на приватност' },
    { source: 'and', target: 'и' },
    { source: 'Create your free account', target: 'Креирајте бесплатен профил' },
    { source: 'Already have an account', target: 'Веќе имате профил' },
    { source: 'Unable to Sign Up', target: 'Не е можно да се регистрирате' },

    // Restore password
    { source: 'Reset your password', target: 'Ресетирајте ја вашата лозинка' },
    { source: 'Email Address', target: 'Email Адреса' },
    { source: 'Reset password', target: 'Ресетирајте лозинка' },
    { source: 'Return to Sign In', target: 'Врати се на Најавување' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'Проверете го вашиот Email – <strong>{0}</strong>. Ви испративме линк за валидација што треба да го следите за да ја промените вашата лозинка.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be at least 8 characters.',
      target: 'Почти готово, само внесете нова лозинка подолу. <br>Мора да биде најмалку 8 карактери.'
    },
    { source: 'Reset password & Sign In', target: 'Ресетирајте лозинка и Најавете се' },
    { source: 'Unable to Send Code', target: 'Не може да се испрати код' },
    { source: 'Unable to Change Password', target: 'Не може да се промени лозинката' },

    // Email Verification
    { source: 'Email Verification', target: 'Верификација на Email' },
    { source: 'Resend verification code', target: 'Повтори испраќање на верификационен код' },
    { source: 'Verification email sent', target: 'Верификациониот Email е испратен' },
    { source: 'Your Email is now verified', target: 'Вашиот Email е сега верифициран' },
    { source: 'Request is incorrect', target: 'Барањето е неточно' },

    // Invites
    {
      source: 'Join <span class="auth-form__accent">{0}</span>',
      target: 'Придружи се на <span class="auth-form__accent">{0}</span>'
    },
    {
      source: '<strong>{0}</strong> has invited you to join <strong>{1}</strong>',
      target: '<strong>{0}</strong> ве покани да се придружите на <strong>{1}</strong>'
    },
    {
      source: 'Someone has invited you to join <strong>{0}</strong>',
      target: 'Некој ве покани да се придружите на <strong>{0}</strong>'
    },
    {
      source: 'You are joining <strong>{0}</strong> using invite link',
      target: 'Се приклучувате на <strong>{0}</strong> користејќи поканувачки линк'
    },
    { source: 'Join', target: 'Приклучи се' },
    { source: 'Go to home page', target: 'Одете на домашната страница' },
    { source: 'Invite link is wrong', target: 'Поканувачкиот линк е неточен' },
    {
      source:
        'Looks like your invitation link has expired or maybe you have followed the wrong link. Please try to ask to invite your again.',
      target:
        'Изгледа дека вашиот поканувачки линк истекол или можеби сте го следеле погрешниот линк. Обидете се да побарате да ве поканат повторно.'
    },
    {
      source: 'Unfortunately we failed to load information about this invitation',
      target: 'За жал, не успеавме да ги вчитаме информациите за оваа покана'
    },

    // Users & Teams
    { source: 'Members of {0}', target: 'Членови на {0}' },
    { source: 'How to get started', target: 'Како да започнете' },
    { source: 'Users API', target: 'Корисници API' },
    { source: 'Teams API', target: 'Тимови API' },
    { source: 'Invite Member', target: 'Покани член' },
    { source: 'Add User property', target: 'Додади својство на корисник' },
    { source: 'Add Team property', target: 'Додади својство на тим' },
    { source: 'Edit property', target: 'Измени својство' },
    { source: 'Delete property', target: 'Избриши својство' },
    { source: 'Users', target: 'Корисници' },
    { source: 'Teams', target: 'Тимови' },
    { source: 'Search members', target: 'Пребарувај членови' },
    { source: 'Search teams', target: 'Пребарувај тимови' },
    { source: '{0} pages', target: '{0} страници' },
    { source: 'No members', target: 'Нема членови' }
  ]
};

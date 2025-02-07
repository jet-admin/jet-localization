import { Locale } from './locale';

export const locale: Locale = {
  name: 'bulgarian',
  language: 'bg',
  items: [
    // General
    { source: 'Save', target: 'Запази' },
    { source: 'Create', target: 'Създай' },
    { source: 'Duplicating', target: 'Дублиране' },
    { source: 'Duplicate', target: 'Дублирай' },
    { source: 'Mass Edit', target: 'Масово редактиране' },
    { source: 'Export', target: 'Експорт' },
    { source: 'Import', target: 'Импорт' },
    { source: 'Delete', target: 'Изтрий' },
    { source: 'Continue', target: 'Продължи' },
    { source: 'Submit', target: 'Изпрати' },
    { source: 'Cancel', target: 'Отмени' },
    { source: 'Loading', target: 'Зареждане' },
    { source: 'Please wait...', target: 'Моля, изчакайте...' },
    { source: 'Loading failed', target: 'Зареждането не бе успешно' },
    { source: 'Unknown error', target: 'Неизвестна грешка' },
    { source: 'Add', target: 'Добави' },
    { source: 'or', target: 'или' },
    { source: 'Hours', target: 'Часове' },
    { source: 'Minutes', target: 'Минути' },
    { source: 'Seconds', target: 'Секунди' },
    { source: 'Saved', target: 'Запазено' },
    { source: 'Error', target: 'Грешка' },
    { source: 'Page not found', target: 'Страницата не бе намерена' },
    {
      source: 'The specified address is incorrect, or the page does not exist',
      target: 'Указаният адрес е неправилен или страницата не съществува'
    },
    { source: 'Not allowed', target: 'Не е разрешено' },
    {
      source: "You don't have permissions to access this page",
      target: 'Нямате разрешение да достъпите тази страница'
    },
    { source: 'Are you sure want to close?', target: 'Сигурни ли сте, че искате да затворите?' },
    { source: 'Close', target: 'Затвори' },

    // Actions
    { source: 'Action executed', target: 'Действието е изпълнено' },
    { source: 'Action executed successfully', target: 'Действието е изпълнено успешно' },
    { source: 'Action failed', target: 'Действието не бе успешно' },
    {
      source: "You don't have permission for run this operation",
      target: 'Нямате разрешение да изпълните тази операция'
    },
    { source: 'Specify parameters', target: 'Посочете параметрите' },
    { source: 'Executing action', target: 'Изпълнение на действието' },
    { source: 'You are executing <strong>{0}</strong>', target: 'Изпълнявате <strong>{0}</strong>' },
    { source: 'Please fill in the parameters below.', target: 'Моля, попълнете параметрите по-долу.' },
    { source: 'Execute', target: 'Изпълни' },
    { source: 'Executing', target: 'Изпълнение' },
    { source: 'Finished', target: 'Завършено' },
    { source: 'Done', target: 'Готово' },

    // Export
    { source: 'Records Export', target: 'Експорт на записи' },
    { source: 'Downloading records data as a file', target: 'Изтегляне на данните от записите като файл' },
    { source: 'Choose format', target: 'Изберете формат' },
    { source: 'Number of exporting records', target: 'Брой записи за експортиране' },
    { source: { label: 'Export', context: 'submit' }, target: 'Експорт' },
    { source: 'Exporting', target: 'Експортиране' },
    { source: 'Export completed', target: 'Експортът завърши' },
    { source: 'Failed to export', target: 'Неуспешен експорт' },

    // Components
    { source: 'optional', target: 'по желание' },
    { source: 'choose', target: 'изберете' },
    { source: 'Clear value', target: 'Изчисти стойността' },
    { source: 'loading...', target: 'зарежда се...' },
    { source: 'Nothing found', target: 'Нищо не бе намерено' },
    { source: 'Search...', target: 'Търсене...' },
    { source: 'Enter at least {0} characters', target: 'Въведете поне {0} знака' },
    { source: 'No options', target: 'Няма опции' },
    { source: 'Drop files here or', target: 'Пуснете файлове тук или' },
    { source: 'Upload new', target: 'Качете нов' },
    { source: 'Clear', target: 'Изчисти' },
    { source: 'Download', target: 'Свали' },
    { source: 'Choose file', target: 'Изберете файл' },
    { source: 'Choose files', target: 'Изберете файлове' },
    { source: 'Scan with Camera', target: 'Сканирай с камера' },
    { source: 'Scan Image file', target: 'Сканирай изображения файл' },
    { source: 'Choose camera', target: 'Изберете камера' },
    { source: 'Stop scanning', target: 'Спрете сканирането' },
    { source: 'Scan again', target: 'Сканирайте отново' },
    { source: 'Use this scan', target: 'Използвайте това сканиране' },
    { source: 'Failed to scan', target: 'Сканирането не бе успешно' },
    {
      source: 'Code failed to scan, please try another image',
      target: 'Кодът не бе сканиран, моля опитайте друга снимка'
    },
    { source: 'current', target: 'текущ' },
    { source: 'Day', target: 'Ден' },
    { source: 'Week', target: 'Седмица' },
    { source: 'Month', target: 'Месец' },
    { source: 'Year', target: 'Година' },
    { source: 'Today', target: 'Днес' },
    { source: 'Daily', target: 'Дневно' },
    { source: 'Weekly', target: 'Седмично' },
    { source: 'Monthly', target: 'Месечно' },
    { source: 'Quarterly', target: 'Тримесечие' },
    { source: 'Yearly', target: 'Годишно' },
    { source: 'Hourly', target: 'На всеки час' },
    { source: 'Minutely', target: 'На всяка минута' },
    { source: 'Since', target: 'От' },
    { source: 'Before', target: 'Преди' },
    { source: 'Between', target: 'Между' },
    { source: 'From date', target: 'От дата' },
    { source: 'To date', target: 'До дата' },
    { source: 'Coordinates', target: 'Координати' },
    { source: 'Latitude', target: 'Ширина' },
    { source: 'Longitude', target: 'Дължина' },
    { source: 'Default color', target: 'Цвят по подразбиране' },
    { source: 'not specified', target: 'не е указано' },
    { source: 'Sign using your finger or pointer', target: 'Подпишете се с пръст или мишка' },

    // List components
    { source: 'Filter', target: 'Филтър' },
    { source: 'Filter by field', target: 'Филтрирай по поле' },
    { source: 'Filter by...', target: 'Филтрирай по...' },
    { source: 'Back', target: 'Назад' },
    { source: 'Back to {0} fields', target: 'Назад към {0} полета' },
    { source: 'Choose {0} from list', target: 'Изберете {0} от списъка' },
    { source: '{0} fields', target: '{0} полета' },
    { source: '{0} relationships', target: '{0} взаимоотношения' },
    { source: 'Aggregate {0}', target: 'Агрегирай {0}' },
    { source: 'No fields to select', target: 'Няма налични полета за избор' },
    { source: 'Enter value...', target: 'Въведете стойност...' },
    { source: 'Exclude', target: 'Изключи' },
    { source: 'Actions', target: 'Действия' },
    { source: 'Search', target: 'Търси' },
    { source: 'Sort 1 → 9', target: 'Сортирай 1 → 9' },
    { source: 'Sort 9 → 1', target: 'Сортирай 9 → 1' },
    { source: 'Sort A → Z', target: 'Сортирай A → Z' },
    { source: 'Sort Z → A', target: 'Сортирай Z → A' },
    { source: 'Refresh automatically', target: 'Автоматично обновяване' },
    { source: 'All', target: 'Всичко' },
    { source: 'Selected', target: 'Избрано' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'За съжаление, не бяха намерени {0}, съответстващи на вашето търсене'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'Зареждаме {0}, моля изчакайте...' },
    { source: 'Add filter', target: 'Добави филтър' },
    { source: 'Delete this filter', target: 'Изтрий този филтър' },
    { source: 'Toggle ordering', target: 'Промяна на подреждането' },
    { source: 'Not configured', target: 'Не е конфигуриран' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'За съжаление, този компонент все още не е конфигуриран'
    },
    { source: 'records', target: 'записи' },
    { source: '{0} items', target: '{0} обекта' },

    // Menu
    { source: 'Users & Teams', target: 'Потребители и екипи' },
    { source: 'Billing', target: 'Фактуриране' },
    { source: 'Billing & Plans', target: 'Планове за фактуриране' },
    { source: 'API keys', target: 'API ключове' },
    { source: 'Dark Mode', target: 'Тъмен режим' },
    { source: 'Light Mode', target: 'Светъл режим' },
    { source: 'Disable Staff', target: 'Деактивиране на персонала' },
    { source: 'Enable Staff', target: 'Активиране на персонала' },
    { source: 'Manage Templates', target: 'Управление на шаблони' },
    { source: 'Logout', target: 'Изход' },
    { source: 'Activity Log', target: 'Дневник на дейностите' },
    { source: 'Collaborations', target: 'Сътрудничество' },
    { source: 'Open Visual Builder', target: 'Отворете визуалния редактор' },

    // Filters
    { source: 'equals', target: 'равно на' },
    { source: 'does not equal', target: 'не е равно на' },
    { source: '{0} equals {1}', target: '{0} е равно на {1}' },
    { source: '{0} does not equal {1}', target: '{0} не е равно на {1}' },

    { source: 'contains', target: 'съдържа' },
    { source: 'does not contain', target: 'не съдържа' },
    { source: '{0} contains {1}', target: '{0} съдържа {1}' },
    { source: '{0} not contains {1}', target: '{0} не съдържа {1}' },

    { source: 'starts with', target: 'започва с' },
    { source: 'does not start with', target: 'не започва с' },
    { source: '{0} starts with {1}', target: '{0} започва с {1}' },
    { source: '{0} does not start with {1}', target: '{0} не започва с {1}' },

    { source: 'ends with', target: 'завършва с' },
    { source: 'does not end with', target: 'не завършва с' },
    { source: '{0} ends with {1}', target: '{0} завършва с {1}' },
    { source: '{0} does not end with {1}', target: '{0} не завършва с {1}' },

    { source: 'greater than', target: 'по-голямо от' },
    { source: 'is not greater than', target: 'не е по-голямо от' },
    { source: '{0} is greater than {1}', target: '{0} е по-голямо от {1}' },
    { source: '{0} not greater than {1}', target: '{0} не е по-голямо от {1}' },

    { source: 'greater than or equals', target: 'по-голямо или равно на' },
    { source: 'is not greater than or equals', target: 'не е по-голямо или равно на' },
    { source: '{0} is greater than or equals {1}', target: '{0} е по-голямо или равно на {1}' },
    { source: '{0} is not greater than or equals {1}', target: '{0} не е по-голямо или равно на {1}' },

    { source: 'less than', target: 'по-малко от' },
    { source: 'is not less than', target: 'не е по-малко от' },
    { source: '{0} is less than {1}', target: '{0} е по-малко от {1}' },
    { source: '{0} is not less than {1}', target: '{0} не е по-малко от {1}' },

    { source: 'less than or equals', target: 'по-малко или равно на' },
    { source: 'is not less than or equals', target: 'не е по-малко или равно на' },
    { source: '{0} is less than or equals {1}', target: '{0} е по-малко или равно на {1}' },
    { source: '{0} is not less than or equals {1}', target: '{0} не е по-малко или равно на {1}' },

    { source: 'one of', target: 'един от' },
    { source: 'is one of', target: 'е един от' },
    { source: 'is not one of', target: 'не е един от' },
    { source: '{0} is one of {1}', target: '{0} е един от {1}' },
    { source: '{0} is not one of {1}', target: '{0} не е един от {1}' },

    { source: 'is null', target: 'е null' },
    { source: 'is not null', target: 'не е null' },
    { source: '{0} is null', target: '{0} е null' },
    { source: '{0} is not null', target: '{0} не е null' },

    { source: 'is future', target: 'в бъдещето' },
    { source: 'in the future', target: 'в бъдещето' },
    { source: 'is not in the future', target: 'не е в бъдещето' },
    { source: '{0} is in the future', target: '{0} е в бъдещето' },
    { source: '{0} is not in the future', target: '{0} не е в бъдещето' },

    { source: 'is past', target: 'в миналото' },
    { source: 'in the past', target: 'в миналото' },
    { source: 'is not in the past', target: 'не е в миналото' },
    { source: '{0} is in the past', target: '{0} е в миналото' },
    { source: '{0} is not in the past', target: '{0} не е в миналото' },

    { source: 'is Today', target: 'днес' },
    { source: 'today', target: 'днес' },
    { source: 'is not today', target: 'не е днес' },
    { source: '{0} is today', target: '{0} е днес' },
    { source: '{0} is not today', target: '{0} не е днес' },

    { source: 'is Yesterday', target: 'вчера' },
    { source: 'yesterday', target: 'вчера' },
    { source: 'is not yesterday', target: 'не е вчера' },
    { source: '{0} is yesterday', target: '{0} е вчера' },
    { source: '{0} is not yesterday', target: '{0} не е вчера' },

    { source: 'is Last Week', target: 'предишната седмица' },
    { source: 'last week', target: 'предишната седмица' },
    { source: 'is not last week', target: 'не е предишната седмица' },
    { source: '{0} is last week', target: '{0} е предишната седмица' },
    { source: '{0} is not last week', target: '{0} не е предишната седмица' },

    { source: 'is Last Month', target: 'миналия месец' },
    { source: 'last month', target: 'миналия месец' },
    { source: 'is not last month', target: 'не е миналия месец' },
    { source: '{0} is last month', target: '{0} е миналия месец' },
    { source: '{0} is not last month', target: '{0} не е миналия месец' },

    { source: 'is Last Quarter', target: 'миналото тримесечие' },
    { source: 'last quarter', target: 'миналото тримесечие' },
    { source: 'is not last quarter', target: 'не е миналото тримесечие' },
    { source: '{0} is last quarter', target: '{0} е миналото тримесечие' },
    { source: '{0} is not last quarter', target: '{0} не е миналото тримесечие' },

    { source: 'is Last Year', target: 'миналата година' },
    { source: 'last year', target: 'миналата година' },
    { source: 'is not last year', target: 'не е миналата година' },
    { source: '{0} is last year', target: '{0} е миналата година' },
    { source: '{0} is not last year', target: '{0} не е миналата година' },

    { source: 'is Last X Days', target: 'последните X дни' },
    { source: 'last X days', target: 'последните X дни' },
    { source: 'is not last X days', target: 'не е последните X дни' },
    { source: '{0} is last {1} days', target: '{0} е последните {1} дни' },
    { source: '{0} is not last {1} days', target: '{0} не е последните {1} дни' },

    { source: 'is Current Week', target: 'тази седмица' },
    { source: 'current week', target: 'тази седмица' },
    { source: 'is not current week', target: 'не е тази седмица' },
    { source: '{0} is current week', target: '{0} е тази седмица' },
    { source: '{0} is not current week', target: '{0} не е тази седмица' },

    { source: 'is Current Month', target: 'този месец' },
    { source: 'current month', target: 'този месец' },
    { source: 'is not current month', target: 'не е този месец' },
    { source: '{0} is current month', target: '{0} е този месец' },
    { source: '{0} is not current month', target: '{0} не е този месец' },

    { source: 'is Current Quarter', target: 'това тримесечие' },
    { source: 'current quarter', target: 'това тримесечие' },
    { source: 'is not current quarter', target: 'не е това тримесечие' },
    { source: '{0} is current quarter', target: '{0} е това тримесечие' },
    { source: '{0} is not current quarter', target: '{0} не е това тримесечие' },

    { source: 'is Current Year', target: 'тази година' },
    { source: 'current year', target: 'тази година' },
    { source: 'is not current year', target: 'не е тази година' },
    { source: '{0} is current year', target: '{0} е тази година' },
    { source: '{0} is not current year', target: '{0} не е тази година' },

    { source: 'is Previous Week', target: 'предната седмица' },
    { source: 'previous week', target: 'предната седмица' },
    { source: 'is not previous week', target: 'не е предната седмица' },
    { source: '{0} is previous week', target: '{0} е предната седмица' },
    { source: '{0} is not previous week', target: '{0} не е предната седмица' },

    { source: 'is Previous Month', target: 'предния месец' },
    { source: 'previous month', target: 'предния месец' },
    { source: 'is not previous month', target: 'не е предния месец' },
    { source: '{0} is previous month', target: '{0} е предния месец' },
    { source: '{0} is not previous month', target: '{0} не е предния месец' },

    { source: 'is Previous Quarter', target: 'предишното тримесечие' },
    { source: 'previous quarter', target: 'предишното тримесечие' },
    { source: 'is not previous quarter', target: 'не е предишното тримесечие' },
    { source: '{0} is previous quarter', target: '{0} е предишното тримесечие' },
    { source: '{0} is not previous quarter', target: '{0} не е предишното тримесечие' },

    { source: 'is Previous Year', target: 'предната година' },
    { source: 'previous year', target: 'предната година' },
    { source: 'is not previous year', target: 'не е предната година' },
    { source: '{0} is previous year', target: '{0} е предната година' },
    { source: '{0} is not previous year', target: '{0} не е предната година' },

    { source: 'is Previous X Days', target: 'предишните X дни' },
    { source: 'previous X days', target: 'предишните X дни' },
    { source: 'is not previous X days', target: 'не е предишните X дни' },
    { source: '{0} is previous {1} days', target: '{0} е предишните {1} дни' },
    { source: '{0} is not previous {1} days', target: '{0} не е предишните {1} дни' },

    { source: 'is empty', target: 'е празно' },
    { source: 'is not empty', target: 'не е празно' },
    { source: '{0} is empty', target: '{0} е празно' },
    { source: '{0} is not empty', target: '{0} не е празно' },

    { source: 'covered by', target: 'покрито от' },
    { source: 'is not covered by', target: 'не е покрито от' },
    { source: '{0} covered by {1}', target: '{0} е покрито от {1}' },
    { source: '{0} is not covered by {1}', target: '{0} не е покрито от {1}' },

    // Activity log
    { source: 'No activities found', target: 'Няма намерени дейности' },
    {
      source: 'Start to working with data to log activities.',
      target: 'Започнете работа с данни за запис на дейности.'
    },
    { source: 'All Activity', target: 'Всички дейности' },
    { source: 'Create Record', target: 'Създаване на запис' },
    { source: 'Update Record', target: 'Актуализация на запис' },
    { source: 'Delete Record', target: 'Изтриване на запис' },
    { source: 'All Members', target: 'Всички членове' },

    // Collaboration
    { source: 'Timeline', target: 'Хронология' },
    { source: 'Messages', target: 'Съобщения' },
    { source: 'Activity', target: 'Активност' },
    { source: 'Start chatting with your team', target: 'Започнете чат с вашия екип' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'Изпратете съобщение за текущата страница за да следите за важна информация.'
    },
    { source: 'Your Message', target: 'Вашето съобщение' },
    { source: 'Send', target: 'Изпрати' },

    // Share
    { source: 'Invite members', target: 'Поканете членове' },
    { source: 'Public share', target: 'Публично споделяне' },
    { source: 'Sign Up', target: 'Регистрирайте се' },
    { source: 'Members', target: 'Членове' },
    { source: 'Invite with Email', target: 'Покани по електронна поща' },
    { source: 'Invite someone...', target: 'Поканете някого...' },
    { source: 'Send Invite', target: 'Изпрати покана' },
    {
      source: 'Limit access to your data by user properties',
      target: 'Ограничавайте достъпа до данните си по свойства на потребителя'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: 'Въведете емайла на потребителя, когото искате да поканите за сътрудничество.'
    },
    { source: 'Copy', target: 'Копиране' },
    { source: 'Invite with Link', target: 'Покани със връзка' },
    { source: 'Remove link', target: 'Премахване на връзка' },
    { source: 'Add Invite Link', target: 'Добавяне на връзка за покана' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'Всеки в интернет с тази връзка ще може да се присъедини към избрания екип.'
    },
    { source: 'Pending Invites', target: 'Изчакващи покани' },
    { source: 'Cancel invite', target: 'Отказ от покана' },
    { source: 'Active Members', target: 'Активни членове' },
    { source: 'Remove member', target: 'Премахване на член' },
    { source: 'You are setting sharing for the current page', target: 'Настройвате споделянето на текущата страница' },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'Настройвате споделянето на всички страници на вашето приложение.'
    },
    { source: 'Public access link', target: 'Връзка за публичен достъп' },
    { source: 'Updating public access...', target: 'Актуализиране на публичния достъп...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'Всеки с тази връзка ще може да види текущата страница. Така можете също да вградите текущата страница в друг уебсайт.'
    },
    { source: 'Embed code (IFRAME)', target: 'Вграден код (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: 'Поставете този код в HTML кода на вашия уебсайт, където искате да се появи текущата страница.'
    },
    { source: 'link', target: 'връзка' },
    { source: 'invited', target: 'поканен' },
    { source: 'Choose Team', target: 'Изберете екип' },
    { source: 'App Teams', target: 'Екипи на приложението' },
    { source: 'Built-In Teams', target: 'Вградени екипи' },
    { source: 'Clear Team', target: 'Изчистване на екип' },
    { source: 'Can build application and modify data', target: 'Може да създава приложение и да модифицира данни' },
    { source: 'Can modify data in application', target: 'Може да промяна на данни в приложението' },
    { source: 'Can only view data without modification', target: 'Може само да гледа данни без промяна' },
    { source: 'Add Team', target: 'Добавяне на екип' },
    { source: 'Edit Team', target: 'Редактиране на екип' },
    { source: 'Adding Team', target: 'Добавяне на екип' },
    {
      source: 'Keep control over who has access to current App',
      target: 'Поддържайте контрол върху това, кой има достъп до текущото приложение'
    },
    { source: 'Enter Team Name', target: 'Въведете име на екип' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'Въведете име на екипа, например: Поддръжка, Продажби, Маркетинг и др.'
    },
    { source: 'Add a new member to this team.', target: 'Добавете нов член към този екип.' },
    { source: 'Invite new member', target: 'Поканете нов член' },
    { source: 'User', target: 'Потребител' },
    { source: 'Date Added', target: 'Дата на добавяне' },
    { source: 'You', target: 'Вие' },
    { source: 'Edit', target: 'Редактиране' },
    { source: 'No users in this team', target: 'Няма потребители в този екип' },
    { source: 'Page Permissions', target: 'Разрешения за страница' },
    { source: 'App Permissions', target: 'Разрешения за приложението' },
    { source: 'Properties', target: 'Свойства' },
    { source: 'Page name', target: 'Име на страницата' },
    { source: 'Access', target: 'Достъп' },
    { source: 'Full Access', target: 'Пълен достъп' },
    { source: 'Read Only', target: 'Само за четене' },
    { source: 'No Access', target: 'Няма достъп' },
    { source: 'Read', target: 'Четене' },
    { source: 'Update', target: 'Обновяване' },
    { source: 'Write', target: 'Записване' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'Изтриване' },
    { source: 'Custom Access', target: 'Персонализиран достъп' },
    { source: 'Read, create, update and delete data', target: 'Четене, създаване, обновяване и изтриване на данни' },
    { source: 'Choose allowed operations granularly', target: 'Изберете разрешените операции подробно' },
    { source: 'Without any access to data', target: 'Без достъп до данни' },
    { source: 'Name', target: 'Име' },
    { source: 'Active', target: 'Активен' },
    { source: 'Settings', target: 'Настройки' },
    { source: 'Members and Teams', target: 'Членове и отбори' },
    { source: 'App Builder', target: 'Създател на приложението' },
    { source: 'Collection Permissions', target: 'Разрешения за сбирка' },
    { source: "Grant permissions to app's collection", target: 'Дайте разрешения за колекцията на приложението' },
    { source: 'Collection', target: 'Колекция' },
    {
      source: 'Limit access to your data by team properties',
      target: 'Ограничавайте достъпа до вашите данни чрез свойствата на екипа'
    },
    { source: 'Save Team', target: 'Запазете отбора' },
    { source: 'Create Team', target: 'Създайте отбор' },
    { source: 'Value', target: 'Стойност' },
    { source: 'No properties specified', target: 'Не са посочени свойства' },

    // Navigation
    { source: 'Current App', target: 'Текущо приложение' },
    { source: 'Home', target: 'Начало' },

    // Profile
    {
      source: 'We are fetching user data, please, wait...',
      target: 'Получаваме данни на потребителя, моля, изчакайте...'
    },
    { source: 'Profile Settings', target: 'Настройки на профила' },
    { source: 'Basic information about your account.', target: 'Основна информация за вашия акаунт.' },
    { source: 'Photo', target: 'Снимка' },
    { source: 'your photo', target: 'вашата снимка' },
    { source: 'Change', target: 'Промяна' },
    { source: 'Upload', target: 'Качи' },
    { source: 'Photo was successfully updated', target: 'Снимката беше успешно актуализирана' },
    { source: 'Photo was successfully deleted', target: 'Снимката беше успешно изтрита' },
    { source: 'First Name', target: 'Първо име' },
    { source: 'Last Name', target: 'Фамилия' },
    { source: 'Your Email', target: 'Вашият имейл' },
    { source: 'Email Change', target: 'Промяна на имейл' },
    { source: 'New Email', target: 'Нов имейл' },
    { source: 'Change Email', target: 'Промяна на имейл' },
    { source: 'Check your inbox', target: 'Проверете вашата пощенска кутия' },
    { source: 'Confirmation Email was sent to {0}', target: 'Имейлът за потвърждение беше изпратен на {0}' },
    { source: 'Changing Email failed', target: 'Промяната на имейла не беше успешна' },
    { source: 'Password Change', target: 'Промяна на парола' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target:
        'Паролата трябва да бъде достатъчно силна, за да защити вашия акаунт, така че трябва да е поне 12 символа дълга.'
    },
    { source: 'Current Password', target: 'Текуща парола' },
    { source: 'New Password', target: 'Нова парола' },
    { source: 'Confirm New Password', target: 'Потвърдете новата паролa' },
    { source: 'Change Password', target: 'Промени парола' },
    {
      source: 'Current password was successfully updated, all other sessions will be logged out shortly',
      target: 'Текущата парола беше успешно актуализирана, всички останали сесии ще бъдат излезли скоро'
    },
    { source: 'Saving current password failed', target: 'Запазването на текущата парола не беше успешно' },
    { source: 'Short password', target: 'Кратка парола' },
    { source: "Passwords don't match", target: 'Паролите не съвпадат' },
    { source: 'Personal Preferences', target: 'Лични предпочитания' },
    { source: 'Language', target: 'Език' },
    { source: 'Timezone', target: 'Часова зона' },
    { source: 'Current time in {0} is', target: 'Текущото време в {0} е' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'Персонализирайте допълнителните предпочитания за вашия акаунт.'
    },
    { source: 'News & Proposals', target: 'Новини и предложения' },
    {
      source: 'Subscribe to our updates and proposals.',
      target: 'Абонирайте се за нашите актуализации и предложения.'
    },
    { source: 'Save changes', target: 'Запази промените' },
    { source: 'Current user was successfully updated', target: 'Текущият потребител беше успешно актуализиран' },
    { source: 'Saving current user failed', target: 'Запазването на текущия потребител не беше успешно' },

    // My Apps
    { source: 'Type to search...', target: 'Въведете за търсене...' },
    { source: 'My Apps', target: 'Моите приложения' },
    { source: 'New App', target: 'Ново приложение' },
    { source: 'Builder', target: 'Строител' },
    { source: 'App', target: 'Приложение' },
    { source: 'continue install', target: 'продължете с инсталацията' },
    { source: 'Open builder', target: 'Отворете строителя' },
    { source: 'View published', target: 'Вижте публикуваните' },
    { source: 'Delete App', target: 'Изтрийте приложението' },
    { source: 'Start from a template', target: 'Започнете от шаблон' },
    { source: 'Preview', target: 'Преглед' },
    { source: 'Contact Support', target: 'Свържете се с поддръжката' },
    { source: 'Documentation', target: 'Документация' },
    { source: 'Feature Requests', target: 'Заявки за функции' },
    { source: 'See What’s New', target: 'Вижте какво е ново' },
    { source: 'Search templates...', target: 'Търсене на шаблони...' },
    { source: 'any', target: 'всеки' },
    { source: 'more', target: 'повече' },
    { source: 'Choose Data Source', target: 'Изберете източник на данни' },
    { source: 'works with 30+ data sources', target: 'работи с 30+ източника на данни' },
    { source: 'Use this template', target: 'Използвайте този шаблон' },
    { source: 'stores data in Jet Tables', target: 'съхранява данни в Jet Tables' },
    { source: 'New Data', target: 'Нови данни' },
    { source: 'using {0}', target: 'използвайки {0}' },
    { source: "Can't find resource you're looking for?", target: 'Не можете да намерите ресурсът, който търсите?' },
    { source: 'Admin Panel', target: 'Административен панел' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'Списък, създаване и актуализиране (CRUD) операции върху вашите данни'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target:
        'Създайте персонализиран административен панел, базиран на всякакви бази данни, приложения и APIs като Stripe, Twilio и GraphQL.'
    },
    { source: 'All Integrations', target: 'Всички интеграции' },
    { source: 'Databases', target: 'Бази данни' },
    { source: 'APIs', target: 'APIs' },
    { source: 'Frameworks', target: 'Фреймуърци' },
    { source: 'Storages', target: 'Съхранения' },

    // Sign In
    { source: 'Good morning', target: 'Добро утро' },
    { source: 'Good afternoon', target: 'Добър ден' },
    { source: 'Good evening', target: 'Добър вечер' },
    { source: 'Sign In', target: 'Вход' },
    { source: 'Welcome Back.', target: 'Добре дошли отново.' },
    { source: 'Sign in with {0}', target: 'Вход чрез {0}' },
    { source: 'or login with', target: 'или влезте чрез' },
    { source: 'Enter E-mail', target: 'Въведете имейл' },
    { source: 'Enter password', target: 'Въведете парола' },
    { source: 'Login', target: 'Вход' },
    { source: 'Create new account', target: 'Създайте нов акаунт' },
    { source: 'Forgot my password', target: 'Забравена парола' },
    { source: 'required', target: 'задължително' },
    { source: 'incorrect Email', target: 'неправилен имейл' },
    { source: 'Minimum password length {0}', target: 'Минимална дължина на паролата {0}' },
    { source: 'Unable to Sign In', target: 'Влизането неуспешно' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'Започнете <span class="auth-form__accent">безплатно днес</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target:
        'Не се изисква карта. Ще получите цялата разширена функционалност безплатно по време на 14-дневния ПРО пробен период.'
    },
    { source: 'Enter First Name', target: 'Въведете първо име' },
    { source: 'Enter Last Name (optional)', target: 'Въведете фамилия (по желание)' },
    { source: 'Enter Email', target: 'Въведете имейл' },
    { source: 'Password', target: 'Парола' },
    { source: 'Repeat Password', target: 'Повторете паролата' },
    {
      source: 'By signing in you’re okay with our',
      target: 'С влизането вие се съгласявате с нашата'
    },
    {
      source: 'Creating an account means you’re okay with our',
      target: 'Създаването на акаунт означава, че се съгласявате с нашата'
    },
    { source: 'Terms of Service', target: 'Условия за ползване' },
    { source: 'Privacy Policy', target: 'Политика за поверителност' },
    { source: 'and', target: 'и' },
    { source: 'Create your free account', target: 'Създайте своя безплатен акаунт' },
    { source: 'Already have an account', target: 'Вече имате акаунт' },
    { source: 'Unable to Sign Up', target: 'Неуспешна регистрация' },

    // Restore password
    { source: 'Reset your password', target: 'Нулиране на парола' },
    { source: 'Email Address', target: 'Имейл адрес' },
    { source: 'Reset password', target: 'Нулиране на парола' },
    { source: 'Return to Sign In', target: 'Връщане към Вход' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'Моля, проверете вашия имейл – <strong>{0}</strong>. Изпратили сме връзка за валидация, която трябва да следвате, за да промените паролата си.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be al least 8 characters.',
      target: 'Почти готово, просто въведете новата си парола по-долу. <br>Трябва да е поне 8 символа.'
    },
    { source: 'Reset password & Sign In', target: 'Нулирай парола и влез' },
    { source: 'Unable to Send Code', target: 'Неуспешно изпращане на код' },
    { source: 'Unable to Change Password', target: 'Неуспешна промяна на парола' },

    // Email Verification
    { source: 'Email Verification', target: 'Верификация на имейл' },
    { source: 'Resend verification code', target: 'Повторно изпращане на кода за верификация' },
    { source: 'Verification email sent', target: 'Имейлът за верификация е изпратен' },
    { source: 'Your Email is now verified', target: 'Вашият имейл е вече верифициран' },
    { source: 'Request is incorrect', target: 'Неправилна заявка' },

    // Invites
    {
      source: 'Join <span class="auth-form__accent">{0}</span>',
      target: 'Присъединете се към <span class="auth-form__accent">{0}</span>'
    },
    {
      source: '<strong>{0}</strong> has invited you to join <strong>{1}</strong>',
      target: '<strong>{0}</strong> ви е поканил да се присъедините към <strong>{1}</strong>'
    },
    {
      source: 'Someone has invited you to join <strong>{0}</strong>',
      target: 'Някой ви е поканил да се присъедините към <strong>{0}</strong>'
    },
    {
      source: 'You are joining <strong>{0}</strong> using invite link',
      target: 'Вие се присъединявате към <strong>{0}</strong>, използвайки връзка за покана'
    },
    { source: 'Join', target: 'Присъединяване' },
    { source: 'Go to home page', target: 'Отидете на началната страница' },
    { source: 'Invite link is wrong', target: 'Връзката за покана е грешна' },
    {
      source:
        'Looks like your invitation link has expired or maybe you have followed the wrong link. Please try to ask to invite your again.',
      target:
        'Изглежда, че връзката ви за покана е изтекла или сте следвали грешна връзка. Моля, опитайте да се помолите да ви поканят отново.'
    },
    {
      source: 'Unfortunately we failed to load information about this invitation',
      target: 'За съжаление не успяхме да заредим информация за тази покана'
    },

    // Users & Teams
    { source: 'Members of {0}', target: 'Членове на {0}' },
    { source: 'How to get started', target: 'Как да започнем' },
    { source: 'Users API', target: 'Потребителски API' },
    { source: 'Teams API', target: 'Екипни API' },
    { source: 'Invite Member', target: 'Покани член' },
    { source: 'Add User property', target: 'Добавяне на потребителско свойство' },
    { source: 'Add Team property', target: 'Добавяне на екипно свойство' },
    { source: 'Edit property', target: 'Редактиране на свойство' },
    { source: 'Delete property', target: 'Изтриване на свойство' },
    { source: 'Users', target: 'Потребители' },
    { source: 'Teams', target: 'Екипи' },
    { source: 'Search members', target: 'Търсене на членове' },
    { source: 'Search teams', target: 'Търсене на екипи' },
    { source: '{0} pages', target: '{0} страници' },
    { source: 'No members', target: 'Няма членове' }
  ]
};

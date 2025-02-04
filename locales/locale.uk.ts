import { Locale } from './locale';

export const locale: Locale = {
  name: 'ukrainian',
  language: 'uk',
  items: [
    // General
    { source: 'Save', target: 'Зберегти' },
    { source: 'Create', target: 'Створити' },
    { source: 'Duplicating', target: 'Дублювання' },
    { source: 'Duplicate', target: 'Дублювати' },
    { source: 'Mass Edit', target: 'Масове редагування' },
    { source: 'Export', target: 'Експорт' },
    { source: 'Import', target: 'Імпорт' },
    { source: 'Delete', target: 'Видалити' },
    { source: 'Continue', target: 'Продовжити' },
    { source: 'Cancel', target: 'Скасувати' },
    { source: 'Loading', target: 'Завантаження' },
    { source: 'Please wait...', target: 'Будь ласка, зачекайте...' },
    { source: 'Loading failed', target: 'Не вдалося завантажити' },
    { source: 'Unknown error', target: 'Невідома помилка' },
    { source: 'Add', target: 'Додати' },
    { source: 'or', target: 'або' },
    { source: 'Hours', target: 'Години' },
    { source: 'Minutes', target: 'Хвилини' },
    { source: 'Seconds', target: 'Секунди' },
    { source: 'Saved', target: 'Збережено' },
    { source: 'Error', target: 'Помилка' },
    { source: 'Page not found', target: 'Сторінку не знайдено' },
    {
      source: 'The specified address is incorrect, or the page does not exist',
      target: 'Зазначено неправильну адресу або сторінка не існує'
    },
    { source: 'Not allowed', target: 'Не дозволено' },
    {
      source: "You don't have permissions to access this page",
      target: 'У вас немає дозволу на доступ до цієї сторінки'
    },

    // Actions
    { source: 'Action executed', target: 'Дію виконано' },
    { source: 'Action executed successfully', target: 'Дію успішно виконано' },
    { source: 'Action failed', target: 'Не вдалося виконати дію' },
    {
      source: "You don't have permission for run this operation",
      target: 'У вас немає дозволу на виконання цієї операції'
    },
    { source: 'Specify parameters', target: 'Вкажіть параметри' },
    { source: 'Executing action', target: 'Виконання дії' },
    { source: 'You are executing <strong>{0}</strong>', target: 'Ви виконуєте <strong>{0}</strong>' },
    { source: 'Please fill in the parameters below.', target: 'Будь ласка, заповніть параметри нижче.' },
    { source: 'Execute', target: 'Виконати' },
    { source: 'Executing', target: 'Виконується' },
    { source: 'Finished', target: 'Завершено' },
    { source: 'Done', target: 'Готово' },

    // Export
    { source: 'Records Export', target: 'Експорт записів' },
    { source: 'Downloading records data as a file', target: 'Завантаження даних записів у файл' },
    { source: 'Choose format', target: 'Оберіть формат' },
    { source: 'Number of exporting records', target: 'Кількість експортованих записів' },
    { source: { label: 'Export', context: 'submit' }, target: 'Експорт' },
    { source: 'Exporting', target: 'Експортування' },
    { source: 'Export completed', target: 'Експорт завершено' },
    { source: 'Failed to export', target: 'Не вдалося експортувати' },

    // Components
    { source: 'optional', target: 'необов’язково' },
    { source: 'choose', target: 'вибрати' },
    { source: 'Clear value', target: 'Очистити значення' },
    { source: 'loading...', target: 'завантаження...' },
    { source: 'Nothing found', target: 'Нічого не знайдено' },
    { source: 'Search...', target: 'Пошук...' },
    { source: 'Enter at least {0} characters', target: 'Введіть щонайменше {0} символів' },
    { source: 'No options', target: 'Немає варіантів' },
    { source: 'Drop files here or', target: 'Киньте файли сюди або' },
    { source: 'Upload new', target: 'Завантажте новий' },
    { source: 'Clear', target: 'Очистити' },
    { source: 'Download', target: 'Завантажити' },
    { source: 'Choose file', target: 'Вибрати файл' },
    { source: 'Choose files', target: 'Вибрати файли' },
    { source: 'Scan with Camera', target: 'Сканувати за допомогою камери' },
    { source: 'Scan Image file', target: 'Сканувати файл зображення' },
    { source: 'Choose camera', target: 'Виберіть камеру' },
    { source: 'Stop scanning', target: 'Зупинити сканування' },
    { source: 'Scan again', target: 'Сканувати знову' },
    { source: 'Use this scan', target: 'Використовувати цей скан' },
    { source: 'Failed to scan', target: 'Не вдалося сканувати' },
    {
      source: 'Code failed to scan, please try another image',
      target: 'Не вдалося сканувати код, спробуйте інше зображення'
    },
    { source: 'current', target: 'поточний' },
    { source: 'Day', target: 'День' },
    { source: 'Week', target: 'Тиждень' },
    { source: 'Month', target: 'Місяць' },
    { source: 'Year', target: 'Рік' },
    { source: 'Today', target: 'Сьогодні' },
    { source: 'Daily', target: 'Щоденно' },
    { source: 'Weekly', target: 'Щотижнево' },
    { source: 'Monthly', target: 'Щомісячно' },
    { source: 'Quarterly', target: 'Щоквартально' },
    { source: 'Yearly', target: 'Щорічно' },
    { source: 'Hourly', target: 'Погодинно' },
    { source: 'Minutely', target: 'Щохвилинно' },
    { source: 'Since', target: 'З' },
    { source: 'Before', target: 'До' },
    { source: 'Between', target: 'Між' },
    { source: 'From date', target: 'З дати' },
    { source: 'To date', target: 'До дати' },
    { source: 'Coordinates', target: 'Координати' },
    { source: 'Latitude', target: 'Широта' },
    { source: 'Longitude', target: 'Довгота' },
    { source: 'Default color', target: 'Колір за замовчуванням' },
    { source: 'not specified', target: 'не вказано' },
    { source: 'Sign using your finger or pointer', target: 'Підпишіться за допомогою пальця або вказівника' },

    // List components
    { source: 'Filter', target: 'Фільтр' },
    { source: 'Filter by field', target: 'Фільтр за полем' },
    { source: 'Filter by...', target: 'Фільтрувати за...' },
    { source: 'Back', target: 'Назад' },
    { source: 'Back to {0} fields', target: 'Назад до полів {0}' },
    { source: 'Choose {0} from list', target: 'Виберіть {0} зі списку' },
    { source: '{0} fields', target: 'Поля {0}' },
    { source: '{0} relationships', target: 'Відносини {0}' },
    { source: 'Aggregate {0}', target: 'Агрегувати {0}' },
    { source: 'No fields to select', target: 'Немає полів для вибору' },
    { source: 'Enter value...', target: 'Введіть значення...' },
    { source: 'Exclude', target: 'Виключити' },
    { source: 'Actions', target: 'Дії' },
    { source: 'Search', target: 'Пошук' },
    { source: 'Sort 1 → 9', target: 'Сортувати 1 → 9' },
    { source: 'Sort 9 → 1', target: 'Сортувати 9 → 1' },
    { source: 'Sort A → Z', target: 'Сортувати A → Z' },
    { source: 'Sort Z → A', target: 'Сортувати Z → A' },
    { source: 'Refresh automatically', target: 'Оновлювати автоматично' },
    { source: 'All', target: 'Всі' },
    { source: 'Selected', target: 'Вибрані' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'На жаль, не знайдено {0}, що задовольняють ваш запит'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'Ми завантажуємо {0}, будь ласка, зачекайте...' },
    { source: 'Add filter', target: 'Додати фільтр' },
    { source: 'Delete this filter', target: 'Видалити цей фільтр' },
    { source: 'Toggle ordering', target: 'Змінити упорядкування' },
    { source: 'Not configured', target: 'Не налаштовано' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'На жаль, цей компонент ще не налаштовано'
    },
    { source: 'records', target: 'записи' },
    { source: '{0} items', target: '{0} елементи' },

    // Menu
    { source: 'Users & Teams', target: 'Користувачі та команди' },
    { source: 'Billing', target: 'Виставлення рахунків' },
    { source: 'Billing & Plans', target: 'Білінг та плани' },
    { source: 'API keys', target: 'API ключі' },
    { source: 'Dark Mode', target: 'Темний режим' },
    { source: 'Light Mode', target: 'Легкий режим' },
    { source: 'Disable Staff', target: 'Вимкнути персонал' },
    { source: 'Enable Staff', target: 'Увімкнути персонал' },
    { source: 'Manage Templates', target: 'Керувати шаблонами' },
    { source: 'Logout', target: 'Вийти' },
    { source: 'Activity Log', target: 'Журнал активності' },
    { source: 'Collaborations', target: 'Співпраця' },
    { source: 'Open Visual Builder', target: 'Відкрити візуальний редактор' },

    // Filters
    { source: 'equals', target: 'дорівнює' },
    { source: 'does not equal', target: 'не дорівнює' },
    { source: '{0} equals {1}', target: '{0} дорівнює {1}' },
    { source: '{0} does not equal {1}', target: '{0} не дорівнює {1}' },

    { source: 'contains', target: 'містить' },
    { source: 'does not contain', target: 'не містить' },
    { source: '{0} contains {1}', target: '{0} містить {1}' },
    { source: '{0} not contains {1}', target: '{0} не містить {1}' },

    { source: 'starts with', target: 'починається з' },
    { source: 'does not start with', target: 'не починається з' },
    { source: '{0} starts with {1}', target: '{0} починається з {1}' },
    { source: '{0} does not start with {1}', target: '{0} не починається з {1}' },

    { source: 'ends with', target: 'закінчується на' },
    { source: 'does not end with', target: 'не закінчується на' },
    { source: '{0} ends with {1}', target: '{0} закінчується на {1}' },
    { source: '{0} does not end with {1}', target: '{0} не закінчується на {1}' },

    { source: 'greater than', target: 'більше ніж' },
    { source: 'is not greater than', target: 'не більше ніж' },
    { source: '{0} is greater than {1}', target: '{0} більше ніж {1}' },
    { source: '{0} not greater than {1}', target: '{0} не більше ніж {1}' },

    { source: 'greater than or equals', target: 'більше або дорівнює' },
    { source: 'is not greater than or equals', target: 'не більше або не дорівнює' },
    { source: '{0} is greater than or equals {1}', target: '{0} більше або дорівнює {1}' },
    { source: '{0} is not greater than or equals {1}', target: '{0} не більше або не дорівнює {1}' },

    { source: 'less than', target: 'менше ніж' },
    { source: 'is not less than', target: 'не менше ніж' },
    { source: '{0} is less than {1}', target: '{0} менше ніж {1}' },
    { source: '{0} is not less than {1}', target: '{0} не менше ніж {1}' },

    { source: 'less than or equals', target: 'менше або дорівнює' },
    { source: 'is not less than or equals', target: 'не менше або не дорівнює' },
    { source: '{0} is less than or equals {1}', target: '{0} менше або дорівнює {1}' },
    { source: '{0} is not less than or equals {1}', target: '{0} не менше або не дорівнює {1}' },

    { source: 'one of', target: 'один із' },
    { source: 'is one of', target: 'є один із' },
    { source: 'is not one of', target: 'не є один із' },
    { source: '{0} is one of {1}', target: '{0} є один із {1}' },
    { source: '{0} is not one of {1}', target: '{0} не є один із {1}' },

    { source: 'is null', target: 'є null' },
    { source: 'is not null', target: 'не є null' },
    { source: '{0} is null', target: '{0} є null' },
    { source: '{0} is not null', target: '{0} не є null' },

    { source: 'is future', target: 'у майбутньому' },
    { source: 'in the future', target: 'у майбутньому' },
    { source: 'is not in the future', target: 'не у майбутньому' },
    { source: '{0} is in the future', target: '{0} у майбутньому' },
    { source: '{0} is not in the future', target: '{0} не у майбутньому' },

    { source: 'is past', target: 'у минулому' },
    { source: 'in the past', target: 'у минулому' },
    { source: 'is not in the past', target: 'не у минулому' },
    { source: '{0} is in the past', target: '{0} у минулому' },
    { source: '{0} is not in the past', target: '{0} не у минулому' },

    { source: 'is Today', target: 'сьогодні' },
    { source: 'today', target: 'сьогодні' },
    { source: 'is not today', target: 'не сьогодні' },
    { source: '{0} is today', target: '{0} сьогодні' },
    { source: '{0} is not today', target: '{0} не сьогодні' },

    { source: 'is Yesterday', target: 'вчора' },
    { source: 'yesterday', target: 'вчора' },
    { source: 'is not yesterday', target: 'не вчора' },
    { source: '{0} is yesterday', target: '{0} вчора' },
    { source: '{0} is not yesterday', target: '{0} не вчора' },

    { source: 'is Last Week', target: 'на минулому тижні' },
    { source: 'last week', target: 'минулого тижня' },
    { source: 'is not last week', target: 'не минулого тижня' },
    { source: '{0} is last week', target: '{0} минулого тижня' },
    { source: '{0} is not last week', target: '{0} не минулого тижня' },

    { source: 'is Last Month', target: 'минулого місяця' },
    { source: 'last month', target: 'минулого місяця' },
    { source: 'is not last month', target: 'не минулого місяця' },
    { source: '{0} is last month', target: '{0} минулого місяця' },
    { source: '{0} is not last month', target: '{0} не минулого місяця' },

    { source: 'is Last Quarter', target: 'минулого кварталу' },
    { source: 'last quarter', target: 'минулого кварталу' },
    { source: 'is not last quarter', target: 'не минулого кварталу' },
    { source: '{0} is last quarter', target: '{0} минулого кварталу' },
    { source: '{0} is not last quarter', target: '{0} не минулого кварталу' },

    { source: 'is Last Year', target: 'минулого року' },
    { source: 'last year', target: 'минулого року' },
    { source: 'is not last year', target: 'не минулого року' },
    { source: '{0} is last year', target: '{0} минулого року' },
    { source: '{0} is not last year', target: '{0} не минулого року' },

    { source: 'is Last X Days', target: 'за останні X днів' },
    { source: 'last X days', target: 'за останні X днів' },
    { source: 'is not last X days', target: 'не за останні X днів' },
    { source: '{0} is last {1} days', target: '{0} за останні {1} днів' },
    { source: '{0} is not last {1} days', target: '{0} не за останні {1} днів' },

    { source: 'is Current Week', target: 'цього тижня' },
    { source: 'current week', target: 'цього тижня' },
    { source: 'is not current week', target: 'не цього тижня' },
    { source: '{0} is current week', target: '{0} цього тижня' },
    { source: '{0} is not current week', target: '{0} не цього тижня' },

    { source: 'is Current Month', target: 'цього місяця' },
    { source: 'current month', target: 'цього місяця' },
    { source: 'is not current month', target: 'не цього місяця' },
    { source: '{0} is current month', target: '{0} цього місяця' },
    { source: '{0} is not current month', target: '{0} не цього місяця' },

    { source: 'is Current Quarter', target: 'цього кварталу' },
    { source: 'current quarter', target: 'цього кварталу' },
    { source: 'is not current quarter', target: 'не цього кварталу' },
    { source: '{0} is current quarter', target: '{0} цього кварталу' },
    { source: '{0} is not current quarter', target: '{0} не цього кварталу' },

    { source: 'is Current Year', target: 'цього року' },
    { source: 'current year', target: 'цього року' },
    { source: 'is not current year', target: 'не цього року' },
    { source: '{0} is current year', target: '{0} цього року' },
    { source: '{0} is not current year', target: '{0} не цього року' },

    { source: 'is Previous Week', target: 'попереднього тижня' },
    { source: 'previous week', target: 'попереднього тижня' },
    { source: 'is not previous week', target: 'не попереднього тижня' },
    { source: '{0} is previous week', target: '{0} попереднього тижня' },
    { source: '{0} is not previous week', target: '{0} не попереднього тижня' },

    { source: 'is Previous Month', target: 'попереднього місяця' },
    { source: 'previous month', target: 'попереднього місяця' },
    { source: 'is not previous month', target: 'не попереднього місяця' },
    { source: '{0} is previous month', target: '{0} попереднього місяця' },
    { source: '{0} is not previous month', target: '{0} не попереднього місяця' },

    { source: 'is Previous Quarter', target: 'попереднього кварталу' },
    { source: 'previous quarter', target: 'попереднього кварталу' },
    { source: 'is not previous quarter', target: 'не попереднього кварталу' },
    { source: '{0} is previous quarter', target: '{0} попереднього кварталу' },
    { source: '{0} is not previous quarter', target: '{0} не попереднього кварталу' },

    { source: 'is Previous Year', target: 'попереднього року' },
    { source: 'previous year', target: 'попереднього року' },
    { source: 'is not previous year', target: 'не попереднього року' },
    { source: '{0} is previous year', target: '{0} попереднього року' },
    { source: '{0} is not previous year', target: '{0} не попереднього року' },

    { source: 'is Previous X Days', target: 'за попередні X днів' },
    { source: 'previous X days', target: 'за попередні X днів' },
    { source: 'is not previous X days', target: 'не за попередні X днів' },
    { source: '{0} is previous {1} days', target: '{0} за попередні {1} днів' },
    { source: '{0} is not previous {1} days', target: '{0} не за попередні {1} днів' },

    { source: 'is empty', target: 'порожньо' },
    { source: 'is not empty', target: 'не порожньо' },
    { source: '{0} is empty', target: '{0} порожньо' },
    { source: '{0} is not empty', target: '{0} не порожньо' },

    { source: 'covered by', target: 'покрито' },
    { source: 'is not covered by', target: 'не покрито' },
    { source: '{0} covered by {1}', target: '{0} покрито {1}' },
    { source: '{0} is not covered by {1}', target: '{0} не покрито {1}' },

    // Activity log
    { source: 'No activities found', target: 'Жодної активності не знайдено' },
    {
      source: 'Start to working with data to log activities.',
      target: 'Почніть працювати з даними, щоб відслідковувати активність.'
    },
    { source: 'All Activity', target: 'Вся активність' },
    { source: 'Create Record', target: 'Створити запис' },
    { source: 'Update Record', target: 'Оновити запис' },
    { source: 'Delete Record', target: 'Видалити запис' },
    { source: 'All Members', target: 'Усі учасники' },

    // Collaboration
    { source: 'Timeline', target: 'Хронологія' },
    { source: 'Messages', target: 'Повідомлення' },
    { source: 'Activity', target: 'Активність' },
    { source: 'Start chatting with your team', target: 'Почніть спілкування з вашою командою' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'Залиште повідомлення про поточну сторінку, щоб стежити за важливою інформацією.'
    },
    { source: 'Your Message', target: 'Ваше повідомлення' },
    { source: 'Send', target: 'Надіслати' },

    // Share
    { source: 'Invite members', target: 'Запросити учасників' },
    { source: 'Public share', target: 'Публічний доступ' },
    { source: 'Sign Up', target: 'Зареєструватися' },
    { source: 'Members', target: 'Учасники' },
    { source: 'Invite with Email', target: 'Запросити через Email' },
    { source: 'Invite someone...', target: 'Запросити когось...' },
    { source: 'Send Invite', target: 'Надіслати запрошення' },
    {
      source: 'Limit access to your data by user properties',
      target: 'Обмежте доступ до ваших даних за допомогою властивостей користувача'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: 'Введіть електронну адресу користувача, якого ви хочете запросити до співпраці.'
    },
    { source: 'Copy', target: 'Копіювати' },
    { source: 'Invite with Link', target: 'Запросити за посиланням' },
    { source: 'Remove link', target: 'Видалити посилання' },
    { source: 'Add Invite Link', target: 'Додати посилання для запрошення' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'Будь-хто в інтернеті з цим посиланням зможе приєднатися до обраної команди.'
    },
    { source: 'Pending Invites', target: 'Очікувані запрошення' },
    { source: 'Cancel invite', target: 'Скасувати запрошення' },
    { source: 'Active Members', target: 'Активні учасники' },
    { source: 'Remove member', target: 'Видалити учасника' },
    {
      source: 'You are setting sharing for the current page',
      target: 'Ви встановлюєте спільний доступ для поточної сторінки'
    },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'Ви встановлюєте спільний доступ для всіх сторінок вашого додатка.'
    },
    { source: 'Public access link', target: 'Посилання на публічний доступ' },
    { source: 'Updating public access...', target: 'Оновлення публічного доступу...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'Будь-хто з цим посиланням зможе переглядати поточну сторінку. Таким чином, ви також можете вбудувати поточну сторінку на інший веб-сайт.'
    },
    { source: 'Embed code (IFRAME)', target: 'Вбудувати код (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: 'Вставте цей код у HTML-код вашого веб-сайту, де ви хочете, щоб відображалася поточна сторінка.'
    },
    { source: 'link', target: 'посилання' },
    { source: 'invited', target: 'запрошено' },
    { source: 'Choose Team', target: 'Виберіть команду' },
    { source: 'App Teams', target: 'Команди додатка' },
    { source: 'Built-In Teams', target: 'Вбудовані команди' },
    { source: 'Clear Team', target: 'Очистити команду' },
    { source: 'Can build application and modify data', target: 'Може створювати додатки та змінювати дані' },
    { source: 'Can modify data in application', target: 'Може змінювати дані в додатку' },
    { source: 'Can only view data without modification', target: 'Може лише переглядати дані без зміни' },
    { source: 'Add Team', target: 'Додати команду' },
    { source: 'Edit Team', target: 'Редагувати команду' },
    { source: 'Adding Team', target: 'Додавання команди' },
    {
      source: 'Keep control over who has access to current App',
      target: 'Контролюйте, хто має доступ до поточного додатка'
    },
    { source: 'Enter Team Name', target: 'Введіть назву команди' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'Введіть назву команди, напр.: Підтримка, Продажі, Маркетинг тощо'
    },
    { source: 'Add a new member to this team.', target: 'Додайте нового учасника до цієї команди.' },
    { source: 'Invite new member', target: 'Запросити нового учасника' },
    { source: 'User', target: 'Користувач' },
    { source: 'Date Added', target: 'Дата додавання' },
    { source: 'You', target: 'Ви' },
    { source: 'Edit', target: 'Редагувати' },
    { source: 'No users in this team', target: 'У цій команді немає користувачів' },
    { source: 'Page Permissions', target: 'Дозволи сторінки' },
    { source: 'App Permissions', target: 'Дозволи додатка' },
    { source: 'Properties', target: 'Властивості' },
    { source: 'Page name', target: 'Назва сторінки' },
    { source: 'Access', target: 'Доступ' },
    { source: 'Full Access', target: 'Повний доступ' },
    { source: 'Read Only', target: 'Лише читання' },
    { source: 'No Access', target: 'Немає доступу' },
    { source: 'Read', target: 'Читати' },
    { source: 'Update', target: 'Оновити' },
    { source: 'Write', target: 'Записати' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'Видалити' },
    { source: 'Custom Access', target: 'Користувацький доступ' },
    { source: 'Read, create, update and delete data', target: 'Читати, створювати, оновлювати та видаляти дані' },
    { source: 'Choose allowed operations granularly', target: 'Виберіть дозволені операції детально' },
    { source: 'Without any access to data', target: 'Без будь-якого доступу до даних' },
    { source: 'Name', target: "Ім'я" },
    { source: 'Active', target: 'Активний' },
    { source: 'Settings', target: 'Налаштування' },
    { source: 'Members and Teams', target: 'Учасники та команди' },
    { source: 'App Builder', target: 'Конструктор додатків' },
    { source: 'Collection Permissions', target: 'Дозволи на колекції' },
    { source: "Grant permissions to app's collection", target: 'Надати дозволи на колекцію додатка' },
    { source: 'Collection', target: 'Колекція' },
    {
      source: 'Limit access to your data by team properties',
      target: 'Обмежте доступ до ваших даних за властивостями команди'
    },
    { source: 'Save Team', target: 'Зберегти команду' },
    { source: 'Create Team', target: 'Створити команду' },
    { source: 'Value', target: 'Значення' },
    { source: 'No properties specified', target: 'Властивості не вказані' },

    // Navigation
    { source: 'Current App', target: 'Поточний додаток' },
    { source: 'Home', target: 'Головна' },

    // Profile
    {
      source: 'We are fetching user data, please, wait...',
      target: 'Ми завантажуємо дані користувача, будь ласка, зачекайте...'
    },
    { source: 'Profile Settings', target: 'Налаштування профілю' },
    { source: 'Basic information about your account.', target: 'Основна інформація про ваш обліковий запис.' },
    { source: 'Photo', target: 'Фото' },
    { source: 'your photo', target: 'ваше фото' },
    { source: 'Change', target: 'Змінити' },
    { source: 'Upload', target: 'Завантажити' },
    { source: 'Photo was successfully updated', target: 'Фото успішно оновлено' },
    { source: 'Photo was successfully deleted', target: 'Фото успішно видалено' },
    { source: 'First Name', target: "Ім'я" },
    { source: 'Last Name', target: 'Прізвище' },
    { source: 'Your Email', target: 'Ваш Email' },
    { source: 'Email Change', target: 'Зміна Email' },
    { source: 'New Email', target: 'Новий Email' },
    { source: 'Change Email', target: 'Змінити Email' },
    { source: 'Check your inbox', target: 'Перевірте вашу поштову скриньку' },
    { source: 'Confirmation Email was sent to {0}', target: 'Лист підтвердження було надіслано на {0}' },
    { source: 'Changing Email failed', target: 'Не вдалося змінити Email' },
    { source: 'Password Change', target: 'Зміна пароля' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target:
        'Пароль повинен бути досить надійним, щоб захистити ваш обліковий запис, тому зробіть його не менше 12 символів.'
    },
    { source: 'Current Password', target: 'Поточний пароль' },
    { source: 'New Password', target: 'Новий пароль' },
    { source: 'Confirm New Password', target: 'Підтвердьте новий пароль' },
    { source: 'Change Password', target: 'Змінити пароль' },
    { source: 'Current password was successfully updated', target: 'Поточний пароль був успішно оновлений' },
    { source: 'Saving current password failed', target: 'Не вдалося зберегти поточний пароль' },
    { source: 'Short password', target: 'Короткий пароль' },
    { source: "Passwords don't match", target: 'Паролі не співпадають' },
    { source: 'Personal Preferences', target: 'Особисті налаштування' },
    { source: 'Language', target: 'Мова' },
    { source: 'Timezone', target: 'Часовий пояс' },
    { source: 'Current time in {0} is', target: 'Поточний час у {0} є' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'Налаштуйте додаткові параметри для вашого облікового запису.'
    },
    { source: 'News & Proposals', target: 'Новини та пропозиції' },
    {
      source: 'Subscribe to our updates and proposals.',
      target: 'Підписатися на наші оновлення та пропозиції.'
    },
    { source: 'Save changes', target: 'Зберегти зміни' },
    { source: 'Current user was successfully updated', target: 'Поточний користувач був успішно оновлений' },
    { source: 'Saving current user failed', target: 'Не вдалося зберегти поточного користувача' },

    // My Apps
    { source: 'Type to search...', target: 'Почніть набір для пошуку...' },
    { source: 'My Apps', target: 'Мої додатки' },
    { source: 'New App', target: 'Новий додаток' },
    { source: 'Builder', target: 'Конструктор' },
    { source: 'App', target: 'Додаток' },
    { source: 'continue install', target: 'продовжити встановлення' },
    { source: 'Open builder', target: 'Відкрити конструктор' },
    { source: 'View published', target: 'Переглянути опубліковане' },
    { source: 'Delete App', target: 'Видалити додаток' },
    { source: 'Start from a template', target: 'Розпочати з шаблону' },
    { source: 'Preview', target: 'Попередній перегляд' },
    { source: 'Contact Support', target: 'Звернутися в службу підтримки' },
    { source: 'Documentation', target: 'Документація' },
    { source: 'Feature Requests', target: 'Запити на функції' },
    { source: 'See What’s New', target: 'Дивіться, що нового' },
    { source: 'Search templates...', target: 'Пошук шаблонів...' },
    { source: 'any', target: 'будь-який' },
    { source: 'more', target: 'більше' },
    { source: 'Choose Data Source', target: 'Оберіть джерело даних' },
    { source: 'works with 30+ data sources', target: 'працює з 30+ джерелами даних' },
    { source: 'Use this template', target: 'Використати цей шаблон' },
    { source: 'stores data in Jet Tables', target: 'зберігає дані у Jet Tables' },
    { source: 'New Data', target: 'Нові дані' },
    { source: 'using {0}', target: 'використовуючи {0}' },
    { source: "Can't find resource you're looking for?", target: 'Не можете знайти потрібний ресурс?' },
    { source: 'Admin Panel', target: 'Адмін-панель' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'Список, створення та оновлення (CRUD) операцій на основі ваших даних'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target:
        'Створіть власну адмін-панель на основі будь-якої бази даних, програм і API, таких як Stripe, Twilio і GraphQL.'
    },
    { source: 'All Integrations', target: 'Всі інтеграції' },
    { source: 'Databases', target: 'Бази даних' },
    { source: 'APIs', target: 'API' },
    { source: 'Frameworks', target: 'Фреймворки' },
    { source: 'Storages', target: 'Сховища' },

    // Sign In
    { source: 'Good morning', target: 'Доброго ранку' },
    { source: 'Good afternoon', target: 'Доброго дня' },
    { source: 'Good evening', target: 'Доброго вечора' },
    { source: 'Sign In', target: 'Увійти' },
    { source: 'Welcome Back.', target: 'Ласкаво просимо назад.' },
    { source: 'Sign in with {0}', target: 'Увійти за допомогою {0}' },
    { source: 'or login with', target: 'або увійдіть за допомогою' },
    { source: 'Enter E-mail', target: 'Введіть E-mail' },
    { source: 'Enter password', target: 'Введіть пароль' },
    { source: 'Login', target: 'Увійти' },
    { source: 'Create new account', target: 'Створити новий обліковий запис' },
    { source: 'Forgot my password', target: 'Забув пароль' },
    { source: 'required', target: "обов'язково" },
    { source: 'incorrect Email', target: 'невірний Email' },
    { source: 'Minimum password length {0}', target: 'Мінімальна довжина пароля {0}' },
    { source: 'Unable to Sign In', target: 'Не вдалося увійти' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'Почніть <span class="auth-form__accent">безкоштовно сьогодні</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target: 'Картка не потрібна. Ви отримаєте всі розширені функції безкоштовно протягом 14 днів PRO-тріалу.'
    },
    { source: 'Enter First Name', target: "Введіть ім'я" },
    { source: 'Enter Last Name (optional)', target: "Введіть прізвище (необов'язково)" },
    { source: 'Enter Email', target: 'Введіть Email' },
    { source: 'Password', target: 'Пароль' },
    { source: 'Repeat Password', target: 'Повторіть Пароль' },
    {
      source: 'By signing in you’re okay with our',
      target: 'Входячи в систему, ви погоджуєтеся з нашими'
    },
    {
      source: 'Creating an account means you’re okay with our',
      target: 'Створення облікового запису ознайомлює вас з нашими'
    },
    { source: 'Terms of Service', target: 'Умовами надання послуг' },
    { source: 'Privacy Policy', target: 'Політикою конфіденційності' },
    { source: 'and', target: 'та' },
    { source: 'Create your free account', target: 'Створіть свій безкоштовний обліковий запис' },
    { source: 'Already have an account', target: 'Вже є обліковий запис' },
    { source: 'Unable to Sign Up', target: 'Не вдалося зареєструватися' },

    // Restore password
    { source: 'Reset your password', target: 'Скидання пароля' },
    { source: 'Email Address', target: 'Електронна адреса' },
    { source: 'Reset password', target: 'Скидання пароля' },
    { source: 'Return to Sign In', target: 'Повернутися до Входу' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'Будь ласка, перевірте ваш Email – <strong>{0}</strong>. Ми надіслали вам посилання для підтвердження, яке ви повинні виконати, щоб змінити свій пароль.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be al least 8 characters.',
      target: 'Майже готово, просто введіть ваш новий пароль нижче. <br> Можливо не менше 8 символів.'
    },
    { source: 'Reset password & Sign In', target: 'Скинути пароль та Увійти' },
    { source: 'Unable to Send Code', target: 'Не вдалося надіслати код' },
    { source: 'Unable to Change Password', target: 'Не вдалося змінити пароль' },

    // Email Verification
    { source: 'Email Verification', target: 'Підтвердження електронної пошти' },
    { source: 'Resend verification code', target: 'Відправити код підтвердження ще раз' },
    { source: 'Verification email sent', target: 'Лист підтвердження надіслано' },
    { source: 'Your Email is now verified', target: 'Ваш Email тепер підтверджено' },
    { source: 'Request is incorrect', target: 'Запит невірний' },

    // Invites
    {
      source: 'Join <span class="auth-form__accent">{0}</span>',
      target: 'Приєднатися <span class="auth-form__accent">{0}</span>'
    },
    {
      source: '<strong>{0}</strong> has invited you to join <strong>{1}</strong>',
      target: '<strong>{0}</strong> запросив вас приєднатися до <strong>{1}</strong>'
    },
    {
      source: 'Someone has invited you to join <strong>{0}</strong>',
      target: 'Хтось запросив вас приєднатися до <strong>{0}</strong>'
    },
    {
      source: 'You are joining <strong>{0}</strong> using invite link',
      target: 'Ви приєднуєтеся до <strong>{0}</strong> за допомогою запрошення'
    },
    { source: 'Join', target: 'Приєднатися' },
    { source: 'Go to home page', target: 'Перейти на головну сторінку' },
    { source: 'Invite link is wrong', target: 'Посилання запрошення помилкове' },
    {
      source:
        'Looks like your invitation link has expired or maybe you have followed the wrong link. Please try to ask to invite your again.',
      target:
        'Схоже, що ваше запрошення застаріло або ви пішли за неправильним посиланням. Спробуйте попросити повторно запросити вас.'
    },
    {
      source: 'Unfortunately we failed to load information about this invitation',
      target: 'На жаль, ми не змогли завантажити інформацію про це запрошення'
    },

    // Users & Teams
    { source: 'Members of {0}', target: 'Учасники {0}' },
    { source: 'How to get started', target: 'Як почати' },
    { source: 'Users API', target: 'API Користувачів' },
    { source: 'Teams API', target: 'API Команд' },
    { source: 'Invite Member', target: 'Запросити учасника' },
    { source: 'Add User property', target: 'Додати властивість користувача' },
    { source: 'Add Team property', target: 'Додати властивість команди' },
    { source: 'Edit property', target: 'Редагувати властивість' },
    { source: 'Delete property', target: 'Видалити властивість' },
    { source: 'Users', target: 'Користувачі' },
    { source: 'Teams', target: 'Команди' },
    { source: 'Search members', target: 'Пошук учасників' },
    { source: 'Search teams', target: 'Пошук команд' },
    { source: '{0} pages', target: '{0} сторінки' },
    { source: 'No members', target: 'Немає учасників' }
  ]
};

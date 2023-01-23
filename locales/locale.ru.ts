import { Locale } from './locale';

export const locale: Locale = {
  name: 'russian',
  language: 'ru',
  items: [
    // General
    { source: 'Save', target: 'Сохранить' },
    { source: 'Create', target: 'Создать' },
    { source: 'Duplicating', target: 'Копирование' },
    { source: 'Duplicate', target: 'Копировать' },
    { source: 'Mass Edit', target: 'Массовое изменение' },
    { source: 'Export', target: 'Экспорт' },
    { source: 'Import', target: 'Импорт' },
    { source: 'Delete', target: 'Удалить' },

    // Fields
    { source: 'optional', target: 'необязательно' },
    { source: 'choose', target: 'выберите' },
    { source: 'Clear value', target: 'Очистить' },
    { source: 'loading...', target: 'загрузка...' },
    { source: 'Nothing found', target: 'Ничего не найдено' },
    { source: 'Search...', target: 'Поиск...' },
    { source: 'Enter at least {0} characters', target: 'Ввведите минимум {0} символа' },

    // List components
    { source: 'Filter', target: 'Фильтр' },
    { source: 'Filter by field', target: 'Фильтр по полю' },
    { source: 'Filter by...', target: 'Фильтр по...' },
    { source: 'Back', target: 'Назад' },
    { source: 'Back to {0} fields', target: 'Назад к полям {0}' },
    { source: 'Choose {0} from list', target: 'Выбрать {0} из списка' },
    { source: '{0} fields', target: 'поля {0}' },
    { source: '{0} relationships', target: 'связи {0}' },
    { source: 'Aggregate {0}', target: 'Аггрегировать {0}' },
    { source: 'No fields to select', target: 'Нет полей для выбора' },
    { source: 'Enter value...', target: 'Введите...' },
    { source: 'Exclude', target: 'Исключить' },
    { source: 'Actions', target: 'Действия' },
    { source: 'Search', target: 'Поиск' },
    { source: 'Sort 1 → 9', target: 'Сортировать 1 → 9' },
    { source: 'Sort 9 → 1', target: 'Сортировать 9 → 1' },
    { source: 'Sort A → Z', target: 'Сортировать A → Z' },
    { source: 'Sort Z → A', target: 'Сортировать Z → A' },
    { source: 'Refresh automatically', target: 'Обновлять автоматически' },
    { source: 'All', target: 'Всё' },
    { source: 'Selected', target: 'Выделено' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'К сожалению, {0} по вашему запросы не найдены'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'Загружаются {0}, пожалуйста, подождите...' },
    { source: 'Add filter', target: 'Фильтр' },
    { source: 'Delete this filter', target: 'Удалить фильтр' },
    { source: 'Toggle ordering', target: 'Сортировать' },
    { source: 'Loading failed', target: 'Ошибка загрузки' },
    { source: 'Not configured', target: 'Не настроено' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'К сожалению этот компонент ещё не настроен'
    },
    { source: 'records', target: 'записи' },
    { source: '{0} items', target: '{0} записей' },

    // Menu
    { source: 'Users & Teams', target: 'Настройки доступа' },
    { source: 'Billing', target: 'Оплата' },
    { source: 'Billing & Plans', target: 'Оплата' },
    { source: 'API keys', target: 'API ключи' },
    { source: 'Dark Mode', target: 'Темная тема' },
    { source: 'Light Mode', target: 'Светлая тема' },
    { source: 'Disable Staff', target: 'Выключить Staff' },
    { source: 'Enable Staff', target: 'Включить Staff' },
    { source: 'Manage Templates', target: 'Настройки шаблонов' },
    { source: 'Logout', target: 'Выйти' },
    { source: 'Activity Log', target: 'История действий' },
    { source: 'Collaborations', target: 'Совместная работа' },
    { source: 'Open Visual Builder', target: 'Визуальны редактор' },

    // Filters
    { source: 'equals', target: 'равно' },
    { source: 'does not equal', target: 'не равно' },
    { source: '{0} equals {1}', target: '{0} равно {1}' },
    { source: '{0} does not equal {1}', target: '{0} не равно {1}' },

    { source: 'contains', target: 'содержит' },
    { source: 'does not contain', target: 'не содержит' },
    { source: '{0} contains {1}', target: '{0} содержит {1}' },
    { source: '{0} not contains {1}', target: '{0} не содержит {1}' },

    { source: 'starts with', target: 'начинается с' },
    { source: 'does not start with', target: 'не начинается с' },
    { source: '{0} starts with {1}', target: '{0} начинается с {1}' },
    { source: '{0} does not start with {1}', target: '{0} не начинается с {1}' },

    { source: 'ends with', target: 'заканчивается на' },
    { source: 'does not end with', target: 'не заканчивается на' },
    { source: '{0} ends with {1}', target: '{0} заканчивается на {1}' },
    { source: '{0} does not end with {1}', target: '{0} не заканчивается на {1}' },

    { source: 'greater than', target: 'больше' },
    { source: 'is not greater than', target: 'не больше' },
    { source: '{0} is greater than {1}', target: '{0} больше чем {1}' },
    { source: '{0} not greater than {1}', target: '{0} не больше чем {1}' },

    { source: 'greater than or equals', target: 'больше или равно' },
    { source: 'is not greater than or equals', target: 'не больше или равно' },
    { source: '{0} is greater than or equals {1}', target: '{0} больше или равно {1}' },
    { source: '{0} is not greater than or equals {1}', target: '{0} не больше или равно {1}' },

    { source: 'less than', target: 'меньше' },
    { source: 'is not less than', target: 'не меньше' },
    { source: '{0} is less than {1}', target: '{0} меньше {1}' },
    { source: '{0} is not less than {1}', target: '{0} не меньше {1}' },

    { source: 'less than or equals', target: 'меньше или равно' },
    { source: 'is not less than or equals', target: 'не меньше или равно' },
    { source: '{0} is less than or equals {1}', target: '{0} меньше или равно {1}' },
    { source: '{0} is not less than or equals {1}', target: '{0} не меньше или равно {1}' },

    { source: 'one of', target: 'одно из' },
    { source: 'is one of', target: 'одно из' },
    { source: 'is not one of', target: 'не одно из' },
    { source: '{0} is one of {1}', target: '{0} одно из {1}' },
    { source: '{0} is not one of {1}', target: '{0} не одно из {1}' },

    { source: 'is null', target: 'null' },
    { source: 'is not null', target: 'не null' },
    { source: '{0} is null', target: '{0} null' },
    { source: '{0} is not null', target: '{0} не null' },

    { source: 'is future', target: 'в будующем' },
    { source: 'in the future', target: 'в будующем' },
    { source: 'is not in the future', target: 'не в будующем' },
    { source: '{0} is in the future', target: '{0} в будующем' },
    { source: '{0} is not in the future', target: '{0} не в будующем' },

    { source: 'is past', target: 'в прошлом' },
    { source: 'in the past', target: 'в прошлом' },
    { source: 'is not in the past', target: 'не в прошлом' },
    { source: '{0} is in the past', target: '{0} в прошлом' },
    { source: '{0} is not in the past', target: '{0} не в прошлом' },

    { source: 'is Today', target: 'сегодня' },
    { source: 'today', target: 'сегодня' },
    { source: 'is not today', target: 'не сегодня' },
    { source: '{0} is today', target: '{0} сегодня' },
    { source: '{0} is not today', target: '{0} не сегодня' },

    { source: 'is Yesterday', target: 'вчера' },
    { source: 'yesterday', target: 'вчера' },
    { source: 'is not yesterday', target: 'не вчера' },
    { source: '{0} is yesterday', target: '{0} вчера' },
    { source: '{0} is not yesterday', target: '{0} не вчера' },

    { source: 'is Last Week', target: 'за последнюю неделю' },
    { source: 'last week', target: 'за последнюю неделю' },
    { source: 'is not last week', target: 'не за последнюю неделю' },
    { source: '{0} is last week', target: '{0} за последнюю неделю' },
    { source: '{0} is not last week', target: '{0} не за последнюю неделю' },

    { source: 'is Last Month', target: 'за последний месяц' },
    { source: 'last month', target: 'за последний месяц' },
    { source: 'is not last month', target: 'не за последний месяц' },
    { source: '{0} is last month', target: '{0} за последний месяц' },
    { source: '{0} is not last month', target: '{0} не за последний месяц' },

    { source: 'is Last Quarter', target: 'за последних квартал' },
    { source: 'last quarter', target: 'за последних квартал' },
    { source: 'is not last quarter', target: 'не за последних квартал' },
    { source: '{0} is last quarter', target: '{0} за последних квартал' },
    { source: '{0} is not last quarter', target: '{0} не за последних квартал' },

    { source: 'is Last Year', target: 'за последний год' },
    { source: 'last year', target: 'за последний год' },
    { source: 'is not last year', target: 'не за последний год' },
    { source: '{0} is last year', target: '{0} за последний год' },
    { source: '{0} is not last year', target: '{0} не за последний год' },

    { source: 'is Last X Days', target: 'за последние X дней' },
    { source: 'last X days', target: 'за последние X дней' },
    { source: 'is not last X days', target: 'не за последние X дней' },
    { source: '{0} is last {1} days', target: '{0} за последние {1} дней' },
    { source: '{0} is not last {1} days', target: '{0} не за последние {1} дней' },

    { source: 'is Current Week', target: 'на этой неделе' },
    { source: 'current week', target: 'на этой неделе' },
    { source: 'is not current week', target: 'не на этой неделе' },
    { source: '{0} is current week', target: '{0} на этой неделе' },
    { source: '{0} is not current week', target: '{0} не на этой неделе' },

    { source: 'is Current Month', target: 'в этом месяце' },
    { source: 'current month', target: 'в этом месяце' },
    { source: 'is not current month', target: 'не в этом месяце' },
    { source: '{0} is current month', target: '{0} в этом месяце' },
    { source: '{0} is not current month', target: '{0} не в этом месяце' },

    { source: 'is Current Quarter', target: 'в этом квартале' },
    { source: 'current quarter', target: 'в этом квартале' },
    { source: 'is not current quarter', target: 'не в этом квартале' },
    { source: '{0} is current quarter', target: '{0} в этом квартале' },
    { source: '{0} is not current quarter', target: '{0} не в этом квартале' },

    { source: 'is Current Year', target: 'в этом году' },
    { source: 'current year', target: 'в этом году' },
    { source: 'is not current year', target: 'не в этом году' },
    { source: '{0} is current year', target: '{0} в этом году' },
    { source: '{0} is not current year', target: '{0} не в этом году' },

    { source: 'is Previous Week', target: 'на прошлой неделе' },
    { source: 'previous week', target: 'на прошлой неделе' },
    { source: 'is not previous week', target: 'не на прошлой неделе' },
    { source: '{0} is previous week', target: '{0} на прошлой неделе' },
    { source: '{0} is not previous week', target: '{0} не на прошлой неделе' },

    { source: 'is Previous Month', target: 'в прошлом месяце' },
    { source: 'previous month', target: 'в прошлом месяце' },
    { source: 'is not previous month', target: 'не в прошлом месяце' },
    { source: '{0} is previous month', target: '{0} в прошлом месяце' },
    { source: '{0} is not previous month', target: '{0} не в прошлом месяце' },

    { source: 'is Previous Quarter', target: 'в прошлом квартале' },
    { source: 'previous quarter', target: 'в прошлом квартале' },
    { source: 'is not previous quarter', target: 'не в прошлом квартале' },
    { source: '{0} is previous quarter', target: '{0} в прошлом квартале' },
    { source: '{0} is not previous quarter', target: '{0} не в прошлом квартале' },

    { source: 'is Previous Year', target: 'в прошлом году' },
    { source: 'previous year', target: 'в прошлом году' },
    { source: 'is not previous year', target: 'не в прошлом году' },
    { source: '{0} is previous year', target: '{0} в прошлом году' },
    { source: '{0} is not previous year', target: '{0} не в прошлом году' },

    { source: 'is Previous X Days', target: 'в предыдущие X дней' },
    { source: 'previous X days', target: 'в предыдущие X дней' },
    { source: 'is not previous X days', target: 'не в предыдущие X дней' },
    { source: '{0} is previous {1} days', target: '{0} в предыдущие {1} дней' },
    { source: '{0} is not previous {1} days', target: '{0} не в предыдущие {1} дней' },

    { source: 'is empty', target: 'пусто' },
    { source: 'is not empty', target: 'не пусто' },
    { source: '{0} is empty', target: '{0} пусто' },
    { source: '{0} is not empty', target: '{0} не пусто' },

    { source: 'covered by', target: 'покрыто' },
    { source: 'is not covered by', target: 'не покрыто' },
    { source: '{0} covered by {1}', target: '{0} покрыто {1}' },
    { source: '{0} is not covered by {1}', target: '{0} не покрыто {1}' },

    // Activity log
    { source: 'No activities found', target: 'Активность не найдена' },
    {
      source: 'Start to working with data to log activities.',
      target: 'Начините работать с данными, чтобы увидеть историю активности.'
    },
    { source: 'All Activity', target: 'Вся активность' },
    { source: 'Create Record', target: 'Создание данных' },
    { source: 'Update Record', target: 'Изменение данных' },
    { source: 'Delete Record', target: 'Удаление данных' },
    { source: 'All Members', target: 'Все участники' },

    // Collaboration
    { source: 'Timeline', target: 'Лента' },
    { source: 'Messages', target: 'Сообщения' },
    { source: 'Activity', target: 'Активность' },
    { source: 'Start chatting with your team', target: 'Начните обсуждение со своей командой' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'Отправьте сообщение о текущей странице, чтобы привязать полезную информацию.'
    },
    { source: 'Your Message', target: 'Сообщение' },
    { source: 'Send', target: 'Отправить' },

    // Share
    { source: 'Invite members', target: 'Пригласить' },
    { source: 'Public share', target: 'Публичный доступ' },
    { source: 'Sign Up', target: 'Регистрация' },
    { source: 'Members', target: 'Участники' },
    { source: 'Invite with Email', target: 'Пригласить по Email' },
    { source: 'Invite someone...', target: 'Пригласите участника...' },
    { source: 'Send Invite', target: 'Отправить' },
    {
      source: 'Limit access to your data by user properties',
      target: 'Ограничивайте доступ к данным с помощью свойств пользователей'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: 'Укажите email пользователя, которого вы хотите пригласить'
    },
    { source: 'Copy', target: 'Копировать' },
    { source: 'Invite with Link', target: 'Пригласить с помощью ссылки' },
    { source: 'Remove link', target: 'Удалить ссылку' },
    { source: 'Add Invite Link', target: 'Добавить ссылку' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'Любой в интернете сможет присоединиться к выбранной команде по этой ссылке'
    },
    { source: 'Pending Invites', target: 'Отправленные приглашения' },
    { source: 'Cancel invite', target: 'Отменить приглашение' },
    { source: 'Active Members', target: 'Активные участники' },
    { source: 'Remove member', target: 'Удалить участника' },
    { source: 'You are setting sharing for the current page', target: 'Вы делитесь текущей страницей ' },
    { source: 'You are setting sharing for all pages of your App.', target: 'Вы делитесь всеми страницами приложения' },
    { source: 'Public access link', target: 'Публичная ссылка' },
    { source: 'Updating public access...', target: 'Обновление пбуличного доступа...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'Любой сможет открыть текущую странциу по этой ссылке. С помощью публчного доступа вы также можете встроить эту страницу в другой сайт.'
    },
    { source: 'Embed code (IFRAME)', target: 'Встроить (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: 'Вставьте этот код в HTML код другого сайта, чтобы отобразить на нём эту страницу'
    },
    { source: 'link', target: 'ссылка' },
    { source: 'invited', target: 'приглашен' },

    { source: 'Choose Team', target: 'Выберите Команду' },
    { source: 'App Teams', target: 'Добавленные команды' },
    { source: 'Built-In Teams', target: 'Стандартные команды' },
    { source: 'Clear Team', target: 'Очистить' },
    {
      source: 'Can build application and modify data',
      target: 'Могут конфигурировать приложение и редактировать данные'
    },
    { source: 'Can modify data in application', target: 'Могут редактировать данные приложения' },
    {
      source: 'Can only view data without modification',
      target: 'Могут только просматривать данные без редактирования'
    },
    { source: 'Add Team', target: 'Добавить Команду' },
    { source: 'Edit Team', target: 'Редактировать Команду' },

    { source: 'Adding Team', target: 'Добавить Команду' },
    { source: 'Keep control over who has access to current App', target: 'Управляйте доступом к текущему Приложению' },
    { source: 'Enter Team Name', target: 'Введите Название команды' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'Укажите название команды, напр. Поддержка, Продажи, Маркетинг и т.д.'
    },
    { source: 'Add a new member to this team.', target: 'Добавите нового участника к этой команде.' },
    { source: 'Invite new member', target: 'Пригласить нового участника' },
    { source: 'User', target: 'Пользователь' },
    { source: 'Date Added', target: 'Дата добавления' },
    { source: 'You', target: 'Вы' },
    { source: 'Edit', target: 'Редактировать' },
    { source: 'No users in this team', target: 'В этой команде нет пользователей' },
    { source: 'Page Permissions', target: 'Доступ к страницам' },
    { source: 'App Permissions', target: 'Доступ к приложению' },
    { source: 'Properties', target: 'Свойства' },
    { source: 'Page name', target: 'Страница' },
    { source: 'Access', target: 'Доступ' },
    { source: 'Full Access', target: 'Полный' },
    { source: 'Read Only', target: 'Только чтение' },
    { source: 'No Access', target: 'Нет доступа' },
    { source: 'Read', target: 'Чтение' },
    { source: 'Update', target: 'Редактирование' },
    { source: 'Write', target: 'Редактирование' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'Удаление' },
    { source: 'Custom Access', target: 'Другой' },
    { source: 'Read, create, update and delete data', target: 'Чтение, создание, редактирование и удаление данных' },
    { source: 'Choose allowed operations granularly', target: 'Выберите разрешенные операции' },
    { source: 'Without any access to data', target: 'Без доступа к данным' },
    { source: 'Name', target: 'Имя' },
    { source: 'Active', target: 'Активен' },
    { source: 'Settings', target: 'Настройки' },
    { source: 'Members and Teams', target: 'Настройки доступа' },
    { source: 'App Builder', target: 'Управление приложением' },
    { source: 'Collection Permissions', target: 'Доступ к коллекциям' },
    { source: "Grant permissions to app's collection", target: 'Задавайте доступ к коллекциям' },
    { source: 'Collection', target: 'Коллекция' },
    {
      source: 'Limit access to your data by team properties',
      target: 'Ограничивайте доступ к данным с помощью свойств команды'
    },
    { source: 'Cancel', target: 'Отменить' },
    { source: 'Save Team', target: 'Сохранить Команду' },
    { source: 'Create Team', target: 'Создать Команду' },
    { source: 'Value', target: 'Значение' },
    { source: 'No properties specified', target: 'Свойства не заданы' },

    // Navigation
    { source: 'Current App', target: 'Текущий App' },
    { source: 'Home', target: 'Главная' },

    // Profile
    { source: 'Loading', target: 'Загрузка' },
    {
      source: 'We are fetching user data, please, wait...',
      target: 'Мы загружаем пользовательские данные, пожалуйста, подождите...'
    },
    { source: 'Profile Settings', target: 'Настройки профиля' },
    { source: 'Basic information about your account.', target: 'Общая информация о вашем аккаунте.' },
    { source: 'Photo', target: 'Фото' },
    { source: 'your photo', target: 'ваше фото' },
    { source: 'Change', target: 'Изменить' },
    { source: 'Upload', target: 'Загрузить' },
    { source: 'First Name', target: 'Имя' },
    { source: 'Last Name', target: 'Фамилия' },
    { source: 'Your Email', target: 'Ваш Email' },
    { source: 'Password Change', target: 'Смена пароля' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target:
        'Пароль должен быть достаточно надежным, чтобы защитить ваш аккаунт. Для этого используйте пароль длиной не менее 12 символов.'
    },
    { source: 'Current Password', target: 'Текущий пароль' },
    { source: 'New Password', target: 'Новый пароль' },
    { source: 'Confirm New Password', target: 'Подтвердите новый пароль' },
    { source: 'Change Password', target: 'Поменять пароль' },
    { source: 'Personal Preferences', target: 'Личные настройки' },
    { source: 'Language', target: 'Язык' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'Задайте дополнительные параметры вашего аккаунта.'
    },
    { source: 'News & Proposals', target: 'Новости и спецпредложения' },
    {
      source: 'Subscribe to our updates and proposals.',
      target: 'Подпишитесь на наши обновления и специальные предложения.'
    },
    { source: 'Save changes', target: 'Сохранить изменения' },

    // My Apps
    { source: 'Type to search...', target: 'Поиск...' },
    { source: 'My Apps', target: 'Мои Apps' },
    { source: 'New App', target: 'Новый App' },
    { source: 'Builder', target: 'Builder' },
    { source: 'App', target: 'App' },
    { source: 'continue install', target: 'настроить' },
    { source: 'Open builder', target: 'Открыть Builder' },
    { source: 'View published', target: 'Открыть опубликованное' },
    { source: 'Delete App', target: 'Удалить App' },
    { source: 'Start from a template', target: 'Использовать шаблон' },
    { source: 'Preview', target: 'Превью' },
    { source: 'Contact Support', target: 'Поддержка' },
    { source: 'Documentation', target: 'Документация' },
    { source: 'Feature Requests', target: 'Запрос функционала' },
    { source: 'See What’s New', target: 'Что нового?' },

    // Templates
    { source: 'Search templates...', target: 'Поиск...' },
    { source: 'any', target: 'любой' },
    { source: 'more', target: 'еще' },
    { source: 'Choose Data Source', target: 'Выберите ресурс' },
    { source: 'works with 30+ data sources', target: 'интеграция с 30+ ресурсами' },
    { source: 'Use this template', target: 'Использовать шаблон' },
    { source: 'stores data in Jet Tables', target: 'хранит данные в Jet Tables' },
    { source: 'New Data', target: 'Новые данные' },
    { source: 'using {0}', target: 'используя {0}' },
    { source: "Can't find resource you're looking for?", target: 'Не можете найти нужный ресурс?' },

    { source: 'Admin Panel', target: 'Admin Panel' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'Просмотр, создание и редактирование (CRUD) ваших данных'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target:
        'Создайте свою панель администрирования на основе любой базы данных, приложения или API, такие как Stripe, Twilio and GraphQL'
    },
    { source: 'All Integrations', target: 'Все интеграции' },
    { source: 'Databases', target: 'Базы данных' },
    { source: 'APIs', target: 'API' },
    { source: 'Frameworks', target: 'Фреймворки' },
    { source: 'Storages', target: 'Хранение данных' },

    // Sign In
    { source: 'Please wait...', target: 'Пожалуйста, подождите...' },
    { source: 'Good morning', target: 'Доброе утро' },
    { source: 'Good afternoon', target: 'Добрый день' },
    { source: 'Good evening', target: 'Добрый вечер' },
    { source: 'Sign In', target: 'Вход' },
    { source: 'Welcome Back.', target: 'Добро пожаловать.' },
    { source: 'Sign in with {0}', target: 'Войти через {0}' },
    { source: 'or login with', target: 'или' },
    { source: 'Enter E-mail', target: 'Введите E-mail' },
    { source: 'Enter password', target: 'Введите пароль' },
    { source: 'Login', target: 'Войти' },
    { source: 'Create new account', target: 'Создать аккаунт' },
    { source: 'Forgot my password', target: 'Восстановить пароль' },
    { source: 'required', target: 'обязательно' },
    { source: 'incorrect Email', target: 'некорректный Email' },
    { source: 'Minimum password length {0}', target: 'Мин. длина пароля {0}' },
    { source: 'Unable to Sign In', target: 'Невозможно войти' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'Начать <span class="auth-form__accent">бесплатно сегодня</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target: 'Карта не требуется. Бесплатный доступ к всему функционалу в течение 14 дневного PRO триала.'
    },
    { source: 'or', target: 'или' },
    { source: 'Enter First Name', target: 'Введите имя' },
    { source: 'Enter Last Name (optional)', target: 'Введите фамилию (необязательно)' },
    { source: 'Enter Email', target: 'Введите Email' },
    { source: 'Password', target: 'Пароль' },
    { source: 'Repeat Password', target: 'Повторите' },
    { source: 'Creating an account means you’re okay with our', target: 'Создавая аккаунт вы соглашаетесь с' },
    { source: 'Terms of Service', target: 'Пользовательским соглашением' },
    { source: 'Privacy Policy', target: 'Политикой конфиденциальности' },
    { source: 'and', target: 'и' },
    { source: 'Create your free account', target: 'Создать бесплатный аккаунт' },
    { source: 'Already have an account', target: 'Уже есть аккаунт' },
    { source: 'Unable to Sign Up', target: 'Невозможно зарегистрироваться' },

    // Restore password
    { source: 'Reset your password', target: 'Восстановить пароль' },
    { source: 'Email Address', target: 'Email адрес' },
    { source: 'Reset password', target: 'Восстановить пароль' },
    { source: 'Return to Sign In', target: 'Назад к логину' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'Пожалуйста, проверьте ваш email – <strong>{0}</strong>. Перейдите по ссылке, которую мы отправили, чтобы поменять пароль.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be al least 8 characters.',
      target: 'Почти закончили, укажите новый пароль ниже. <br>Пароль должен быть не короче 8 символов.'
    },
    { source: 'Reset password & Sign In', target: 'Восстановить пароль и войти' },
    { source: 'Unable to Send Code', target: 'Невозможно отправить код' },
    { source: 'Unable to Change Password', target: 'Невозможно изменить пароль' },

    // Users & Teams
    { source: 'Members of {0}', target: 'Участники {0}' },
    { source: 'How to get started', target: 'Как пользоваться' },
    { source: 'Users API', target: 'API участников' },
    { source: 'Teams API', target: 'API команд' },
    { source: 'Invite Member', target: 'Пригласить' },
    { source: 'Add User property', target: 'Добавить свойство пользователя' },
    { source: 'Add Team property', target: 'Добавить свойство команды' },
    { source: 'Add', target: 'Добавить' },
    { source: 'Edit property', target: 'Редактировать свойство' },
    { source: 'Delete property', target: 'Удалить свойство' },
    { source: 'Users', target: 'Участники' },
    { source: 'Teams', target: 'Команды' },
    { source: 'Search members', target: 'Искать участников' },
    { source: 'Search teams', target: 'Искать команды' },
    { source: '{0} pages', target: '{0} страниц' },
    { source: 'No members', target: 'Нет участников' }
  ]
};

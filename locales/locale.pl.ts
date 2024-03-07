import { Locale } from './locale';

export const locale: Locale = {
  name: 'polish',
  language: 'pl',
  items: [
    // General
    { source: 'Save', target: 'Zapisz' },
    { source: 'Create', target: 'Utwórz' },
    { source: 'Duplicating', target: 'Duplikowanie' },
    { source: 'Duplicate', target: 'Duplikuj' },
    { source: 'Mass Edit', target: 'Edycja masowa' },
    { source: 'Export', target: 'Eksport' },
    { source: 'Import', target: 'Import' },
    { source: 'Delete', target: 'Usuń' },

    // Fields
    { source: 'optional', target: 'opcjonalne' },
    { source: 'choose', target: 'wybierz' },
    { source: 'Clear value', target: 'Wyczyść wartość' },
    { source: 'loading...', target: 'ładowanie...' },
    { source: 'Nothing found', target: 'Nic nie znaleziono' },
    { source: 'Search...', target: 'Szukaj...' },
    { source: 'Enter at least {0} characters', target: 'Wprowadź co najmniej {0} znaków' },

    // List components
    { source: 'Filter', target: 'Filtr' },
    { source: 'Filter by field', target: 'Filtruj według pola' },
    { source: 'Filter by...', target: 'Filtruj według...' },
    { source: 'Back', target: 'Wstecz' },
    { source: 'Back to {0} fields', target: 'Powrót do {0} pól' },
    { source: 'Choose {0} from list', target: 'Wybierz {0} z listy' },
    { source: '{0} fields', target: '{0} pola' },
    { source: '{0} relationships', target: '{0} relacje' },
    { source: 'Aggregate {0}', target: 'Agreguj {0}' },
    { source: 'No fields to select', target: 'Brak pól do wyboru' },
    { source: 'Enter value...', target: 'Wprowadź wartość...' },
    { source: 'Exclude', target: 'Wyklucz' },
    { source: 'Actions', target: 'Akcje' },
    { source: 'Search', target: 'Szukaj' },
    { source: 'Sort 1 → 9', target: 'Sortuj 1 → 9' },
    { source: 'Sort 9 → 1', target: 'Sortuj 9 → 1' },
    { source: 'Sort A → Z', target: 'Sortuj A → Z' },
    { source: 'Sort Z → A', target: 'Sortuj Z → A' },
    { source: 'Refresh automatically', target: 'Odświeżaj automatycznie' },
    { source: 'All', target: 'Wszystko' },
    { source: 'Selected', target: 'Wybrane' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'Niestety, nie znaleziono {0} pasujących do zapytania'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'Pobieramy {0}, proszę czekać...' },
    { source: 'Add filter', target: 'Dodaj filtr' },
    { source: 'Delete this filter', target: 'Usuń ten filtr' },
    { source: 'Toggle ordering', target: 'Przełącz sortowanie' },
    { source: 'Loading failed', target: 'Nie udało się załadować' },
    { source: 'Not configured', target: 'Nie skonfigurowano' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'Niestety, ten komponent nie jest jeszcze skonfigurowany'
    },
    { source: 'records', target: 'rekordy' },
    { source: '{0} items', target: '{0} elementy' },

    // Menu
    { source: 'Users & Teams', target: 'Użytkownicy i zespoły' },
    { source: 'Billing', target: 'Rozliczenia' },
    { source: 'Billing & Plans', target: 'Rozliczenia i plany' },
    { source: 'API keys', target: 'Klucze API' },
    { source: 'Dark Mode', target: 'Tryb ciemny' },
    { source: 'Light Mode', target: 'Tryb jasny' },
    { source: 'Disable Staff', target: 'Wyłącz personel' },
    { source: 'Enable Staff', target: 'Włącz personel' },
    { source: 'Manage Templates', target: 'Zarządzaj szablonami' },
    { source: 'Logout', target: 'Wyloguj' },
    { source: 'Activity Log', target: 'Dziennik aktywności' },
    { source: 'Collaborations', target: 'Współprace' },
    { source: 'Open Visual Builder', target: 'Otwórz kreator wizualny' },

    // Filters
    { source: 'equals', target: 'równa się' },
    { source: 'does not equal', target: 'nie równa się' },
    { source: '{0} equals {1}', target: '{0} równa się {1}' },
    { source: '{0} does not equal {1}', target: '{0} nie równa się {1}' },

    { source: 'contains', target: 'zawiera' },
    { source: 'does not contain', target: 'nie zawiera' },
    { source: '{0} contains {1}', target: '{0} zawiera {1}' },
    { source: '{0} not contains {1}', target: '{0} nie zawiera {1}' },

    { source: 'starts with', target: 'zaczyna się od' },
    { source: 'does not start with', target: 'nie zaczyna się od' },
    { source: '{0} starts with {1}', target: '{0} zaczyna się od {1}' },
    { source: '{0} does not start with {1}', target: '{0} nie zaczyna się od {1}' },

    { source: 'ends with', target: 'kończy się na' },
    { source: 'does not end with', target: 'nie kończy się na' },
    { source: '{0} ends with {1}', target: '{0} kończy się na {1}' },
    { source: '{0} does not end with {1}', target: '{0} nie kończy się na {1}' },

    { source: 'greater than', target: 'większe niż' },
    { source: 'is not greater than', target: 'nie jest większe niż' },
    { source: '{0} is greater than {1}', target: '{0} jest większe niż {1}' },
    { source: '{0} not greater than {1}', target: '{0} nie jest większe niż {1}' },

    { source: 'greater than or equals', target: 'większe lub równe' },
    { source: 'is not greater than or equals', target: 'nie jest większe lub równe' },
    { source: '{0} is greater than or equals {1}', target: '{0} jest większe lub równe {1}' },
    { source: '{0} is not greater than or equals {1}', target: '{0} nie jest większe lub równe {1}' },

    { source: 'less than', target: 'mniejsze niż' },
    { source: 'is not less than', target: 'nie jest mniejsze niż' },
    { source: '{0} is less than {1}', target: '{0} jest mniejsze niż {1}' },
    { source: '{0} is not less than {1}', target: '{0} nie jest mniejsze niż {1}' },

    { source: 'less than or equals', target: 'mniejsze lub równe' },
    { source: 'is not less than or equals', target: 'nie jest mniejsze lub równe' },
    { source: '{0} is less than or equals {1}', target: '{0} jest mniejsze lub równe {1}' },
    { source: '{0} is not less than or equals {1}', target: '{0} nie jest mniejsze lub równe {1}' },

    { source: 'one of', target: 'jeden z' },
    { source: 'is one of', target: 'jest jednym z' },
    { source: 'is not one of', target: 'nie jest jednym z' },
    { source: '{0} is one of {1}', target: '{0} jest jednym z {1}' },
    { source: '{0} is not one of {1}', target: '{0} nie jest jednym z {1}' },

    { source: 'is null', target: 'jest puste' },
    { source: 'is not null', target: 'nie jest puste' },
    { source: '{0} is null', target: '{0} jest puste' },
    { source: '{0} is not null', target: '{0} nie jest puste' },

    { source: 'is future', target: 'jest w przyszłości' },
    { source: 'in the future', target: 'w przyszłości' },
    { source: 'is not in the future', target: 'nie jest w przyszłości' },
    { source: '{0} is in the future', target: '{0} jest w przyszłości' },
    { source: '{0} is not in the future', target: '{0} nie jest w przyszłości' },

    { source: 'is past', target: 'jest w przeszłości' },
    { source: 'in the past', target: 'w przeszłości' },
    { source: 'is not in the past', target: 'nie jest w przeszłości' },
    { source: '{0} is in the past', target: '{0} jest w przeszłości' },
    { source: '{0} is not in the past', target: '{0} nie jest w przeszłości' },

    { source: 'is Today', target: 'jest dzisiaj' },
    { source: 'today', target: 'dzisiaj' },
    { source: 'is not today', target: 'nie jest dzisiaj' },
    { source: '{0} is today', target: '{0} jest dzisiaj' },
    { source: '{0} is not today', target: '{0} nie jest dzisiaj' },

    { source: 'is Yesterday', target: 'jest wczoraj' },
    { source: 'yesterday', target: 'wczoraj' },
    { source: 'is not yesterday', target: 'nie jest wczoraj' },
    { source: '{0} is yesterday', target: '{0} jest wczoraj' },
    { source: '{0} is not yesterday', target: '{0} nie jest wczoraj' },

    { source: 'is Last Week', target: 'jest w zeszłym tygodniu' },
    { source: 'last week', target: 'zeszły tydzień' },
    { source: 'is not last week', target: 'nie jest w zeszłym tygodniu' },
    { source: '{0} is last week', target: '{0} jest w zeszłym tygodniu' },
    { source: '{0} is not last week', target: '{0} nie jest w zeszłym tygodniu' },

    { source: 'is Last Month', target: 'jest w zeszłym miesiącu' },
    { source: 'last month', target: 'zeszły miesiąc' },
    { source: 'is not last month', target: 'nie jest w zeszłym miesiącu' },
    { source: '{0} is last month', target: '{0} jest w zeszłym miesiącu' },
    { source: '{0} is not last month', target: '{0} nie jest w zeszłym miesiącu' },

    { source: 'is Last Quarter', target: 'jest w ostatnim kwartale' },
    { source: 'last quarter', target: 'ostatni kwartał' },
    { source: 'is not last quarter', target: 'nie jest w ostatnim kwartale' },
    { source: '{0} is last quarter', target: '{0} jest w ostatnim kwartale' },
    { source: '{0} is not last quarter', target: '{0} nie jest w ostatnim kwartale' },

    { source: 'is Last Year', target: 'jest w zeszłym roku' },
    { source: 'last year', target: 'zeszły rok' },
    { source: 'is not last year', target: 'nie jest w zeszłym roku' },
    { source: '{0} is last year', target: '{0} jest w zeszłym roku' },
    { source: '{0} is not last year', target: '{0} nie jest w zeszłym roku' },

    { source: 'is Last X Days', target: 'jest w ostatnich {1} dniach' },
    { source: 'last X days', target: 'ostatnie {1} dni' },
    { source: 'is not last X days', target: 'nie jest w ostatnich {1} dniach' },
    { source: '{0} is last {1} days', target: '{0} jest w ostatnich {1} dniach' },
    { source: '{0} is not last {1} days', target: '{0} nie jest w ostatnich {1} dniach' },

    { source: 'is Current Week', target: 'jest w bieżącym tygodniu' },
    { source: 'current week', target: 'bieżący tydzień' },
    { source: 'is not current week', target: 'nie jest w bieżącym tygodniu' },
    { source: '{0} is current week', target: '{0} jest w bieżącym tygodniu' },
    { source: '{0} is not current week', target: '{0} nie jest w bieżącym tygodniu' },

    { source: 'is Current Month', target: 'jest w bieżącym miesiącu' },
    { source: 'current month', target: 'bieżący miesiąc' },
    { source: 'is not current month', target: 'nie jest w bieżącym miesiącu' },
    { source: '{0} is current month', target: '{0} jest w bieżącym miesiącu' },
    { source: '{0} is not current month', target: '{0} nie jest w bieżącym miesiącu' },

    { source: 'is Current Quarter', target: 'jest w bieżącym kwartale' },
    { source: 'current quarter', target: 'bieżący kwartał' },
    { source: 'is not current quarter', target: 'nie jest w bieżącym kwartale' },
    { source: '{0} is current quarter', target: '{0} jest w bieżącym kwartale' },
    { source: '{0} is not current quarter', target: '{0} nie jest w bieżącym kwartale' },

    { source: 'is Current Year', target: 'jest w bieżącym roku' },
    { source: 'current year', target: 'bieżący rok' },
    { source: 'is not current year', target: 'nie jest w bieżącym roku' },
    { source: '{0} is current year', target: '{0} jest w bieżącym roku' },
    { source: '{0} is not current year', target: '{0} nie jest w bieżącym roku' },

    { source: 'is Previous Week', target: 'jest w poprzednim tygodniu' },
    { source: 'previous week', target: 'poprzedni tydzień' },
    { source: 'is not previous week', target: 'nie jest w poprzednim tygodniu' },
    { source: '{0} is previous week', target: '{0} jest w poprzednim tygodniu' },
    { source: '{0} is not previous week', target: '{0} nie jest w poprzednim tygodniu' },

    { source: 'is Previous Month', target: 'jest w poprzednim miesiącu' },
    { source: 'previous month', target: 'poprzedni miesiąc' },
    { source: 'is not previous month', target: 'nie jest w poprzednim miesiącu' },
    { source: '{0} is previous month', target: '{0} jest w poprzednim miesiącu' },
    { source: '{0} is not previous month', target: '{0} nie jest w poprzednim miesiącu' },

    { source: 'is Previous Quarter', target: 'jest w poprzednim kwartale' },
    { source: 'previous quarter', target: 'poprzedni kwartał' },
    { source: 'is not previous quarter', target: 'nie jest w poprzednim kwartale' },
    { source: '{0} is previous quarter', target: '{0} jest w poprzednim kwartale' },
    { source: '{0} is not previous quarter', target: '{0} nie jest w poprzednim kwartale' },

    { source: 'is Previous Year', target: 'jest w poprzednim roku' },
    { source: 'previous year', target: 'poprzedni rok' },
    { source: 'is not previous year', target: 'nie jest w poprzednim roku' },
    { source: '{0} is previous year', target: '{0} jest w poprzednim roku' },
    { source: '{0} is not previous year', target: '{0} nie jest w poprzednim roku' },

    { source: 'is Previous X Days', target: 'jest w poprzednich {1} dniach' },
    { source: 'previous X days', target: 'poprzednie {1} dni' },
    { source: 'is not previous X days', target: 'nie jest w poprzednich {1} dniach' },
    { source: '{0} is previous {1} days', target: '{0} jest w poprzednich {1} dniach' },
    { source: '{0} is not previous {1} days', target: '{0} nie jest w poprzednich {1} dniach' },

    { source: 'is empty', target: 'jest puste' },
    { source: 'is not empty', target: 'nie jest puste' },
    { source: '{0} is empty', target: '{0} jest puste' },
    { source: '{0} is not empty', target: '{0} nie jest puste' },

    { source: 'covered by', target: 'zakryte przez' },
    { source: 'is not covered by', target: 'nie jest zakryte przez' },
    { source: '{0} covered by {1}', target: '{0} zakryte przez {1}' },
    { source: '{0} is not covered by {1}', target: '{0} nie jest zakryte przez {1}' },

    // Activity log
    { source: 'No activities found', target: 'Brak znalezionych aktywności' },
    {
      source: 'Start to working with data to log activities.',
      target: 'Zacznij pracować z danymi, aby rejestrować aktywności.'
    },
    { source: 'All Activity', target: 'Wszystkie aktywności' },
    { source: 'Create Record', target: 'Utwórz rekord' },
    { source: 'Update Record', target: 'Zaktualizuj rekord' },
    { source: 'Delete Record', target: 'Usuń rekord' },
    { source: 'All Members', target: 'Wszyscy członkowie' },

    // Collaboration
    { source: 'Timeline', target: 'Oś czasu' },
    { source: 'Messages', target: 'Wiadomości' },
    { source: 'Activity', target: 'Aktywność' },
    { source: 'Start chatting with your team', target: 'Rozpocznij rozmowę z zespołem' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'Zapisz wiadomość o bieżącej stronie, aby śledzić ważne informacje.'
    },
    { source: 'Your Message', target: 'Twoja wiadomość' },
    { source: 'Send', target: 'Wyślij' },

    // Share
    { source: 'Invite members', target: 'Zaproś członków' },
    { source: 'Public share', target: 'Udostępnianie publiczne' },
    { source: 'Sign Up', target: 'Zarejestruj się' },
    { source: 'Members', target: 'Członkowie' },
    { source: 'Invite with Email', target: 'Zaproś za pomocą e-maila' },
    { source: 'Invite someone...', target: 'Zaproś kogoś...' },
    { source: 'Send Invite', target: 'Wyślij zaproszenie' },
    {
      source: 'Limit access to your data by user properties',
      target: 'Ogranicz dostęp do swoich danych za pomocą właściwości użytkownika'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: 'Wprowadź adres e-mail użytkownika, którego chcesz zaprosić do współpracy.'
    },
    { source: 'Copy', target: 'Kopiuj' },
    { source: 'Invite with Link', target: 'Zaproś za pomocą linku' },
    { source: 'Remove link', target: 'Usuń link' },
    { source: 'Add Invite Link', target: 'Dodaj link zaproszenia' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'Każdy w internecie, kto posiada ten link, będzie mógł dołączyć do wybranego zespołu.'
    },
    { source: 'Pending Invites', target: 'Oczekujące zaproszenia' },
    { source: 'Cancel invite', target: 'Anuluj zaproszenie' },
    { source: 'Active Members', target: 'Aktywni członkowie' },
    { source: 'Remove member', target: 'Usuń członka' },
    {
      source: 'You are setting sharing for the current page',
      target: 'Ustawiasz udostępnianie dla bieżącej strony'
    },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'Ustawiasz udostępnianie dla wszystkich stron Twojej aplikacji.'
    },
    { source: 'Public access link', target: 'Link publicznego dostępu' },
    { source: 'Updating public access...', target: 'Aktualizowanie publicznego dostępu...' },
    {
      source:
      'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
      'Każdy, kto posiada ten link, będzie mógł zobaczyć bieżącą stronę. W ten sposób możesz również osadzić bieżącą stronę w innej witrynie.'
    },
    { source: 'Embed code (IFRAME)', target: 'Kod osadzania (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: 'Wklej ten kod do kodu HTML swojej witryny, gdzie chcesz, aby pojawiła się bieżąca strona.'
    },
    { source: 'link', target: 'link' },
    { source: 'invited', target: 'zaproszony' },
    { source: 'Choose Team', target: 'Wybierz zespół' },
    { source: 'App Teams', target: 'Zespoły aplikacji' },
    { source: 'Built-In Teams', target: 'Wbudowane zespoły' },
    { source: 'Clear Team', target: 'Wyczyść zespół' },
    { source: 'Can build application and modify data', target: 'Może tworzyć aplikacje i modyfikować dane' },
    { source: 'Can modify data in application', target: 'Może modyfikować dane w aplikacji' },
    { source: 'Can only view data without modification', target: 'Może tylko przeglądać dane bez modyfikacji' },
    { source: 'Add Team', target: 'Dodaj zespół' },
    { source: 'Edit Team', target: 'Edytuj zespół' },
    { source: 'Adding Team', target: 'Dodawanie zespołu' },
    {
      source: 'Keep control over who has access to current App',
      target: 'Zachowaj kontrolę nad tym, kto ma dostęp do bieżącej aplikacji'
    },
    { source: 'Enter Team Name', target: 'Wprowadź nazwę zespołu' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'Wpisz nazwę zespołu, np. Support, Sprzedaż, Marketing, itp.'
    },
    { source: 'Add a new member to this team.', target: 'Dodaj nowego członka do tego zespołu.' },
    { source: 'Invite new member', target: 'Zaproś nowego członka' },
    { source: 'User', target: 'Użytkownik' },
    { source: 'Date Added', target: 'Data dodania' },
    { source: 'You', target: 'Ty' },
    { source: 'Edit', target: 'Edytuj' },
    { source: 'No users in this team', target: 'Brak użytkowników w tym zespole' },
    { source: 'Page Permissions', target: 'Uprawnienia strony' },
    { source: 'App Permissions', target: 'Uprawnienia aplikacji' },
    { source: 'Properties', target: 'Właściwości' },
    { source: 'Page name', target: 'Nazwa strony' },
    { source: 'Access', target: 'Dostęp' },
    { source: 'Full Access', target: 'Pełny dostęp' },
    { source: 'Read Only', target: 'Tylko do odczytu' },
    { source: 'No Access', target: 'Brak dostępu' },
    { source: 'Read', target: 'Odczyt' },
    { source: 'Update', target: 'Aktualizacja' },
    { source: 'Write', target: 'Zapis' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'Usuń' },
    { source: 'Custom Access', target: 'Dostęp niestandardowy' },
    { source: 'Read, create, update and delete data', target: 'Odczytuj, twórz, aktualizuj i usuwaj dane' },
    { source: 'Choose allowed operations granularly', target: 'Wybierz dozwolone operacje szczegółowo' },
    { source: 'Without any access to data', target: 'Bez dostępu do danych' },
    { source: 'Name', target: 'Nazwa' },
    { source: 'Active', target: 'Aktywny' },
    { source: 'Settings', target: 'Ustawienia' },
    { source: 'Members and Teams', target: 'Członkowie i zespoły' },
    { source: 'App Builder', target: 'Kreator aplikacji' },
    { source: 'Collection Permissions', target: 'Uprawnienia kolekcji' },
    { source: "Grant permissions to app's collection", target: 'Przyznaj uprawnienia do kolekcji aplikacji' },
    { source: 'Collection', target: 'Kolekcja' },
    {
      source: 'Limit access to your data by team properties',
      target: 'Ogranicz dostęp do swoich danych za pomocą właściwości zespołu'
    },
    { source: 'Cancel', target: 'Anuluj' },
    { source: 'Save Team', target: 'Zapisz zespół' },
    { source: 'Create Team', target: 'Utwórz zespół' },
    { source: 'Value', target: 'Wartość' },
    { source: 'No properties specified', target: 'Nie określono właściwości' },

    // Navigation
    { source: 'Current App', target: 'Bieżąca aplikacja' },
    { source: 'Home', target: 'Strona główna' },

    // Profile
    { source: 'Loading', target: 'Ładowanie' },
    {
      source: 'We are fetching user data, please, wait...',
      target: 'Pobieramy dane użytkownika, proszę czekać...'
    },
    { source: 'Profile Settings', target: 'Ustawienia profilu' },
    { source: 'Basic information about your account.', target: 'Podstawowe informacje o Twoim koncie.' },
    { source: 'Photo', target: 'Zdjęcie' },
    { source: 'your photo', target: 'twoje zdjęcie' },
    { source: 'Change', target: 'Zmień' },
    { source: 'Upload', target: 'Prześlij' },
    { source: 'First Name', target: 'Imię' },
    { source: 'Last Name', target: 'Nazwisko' },
    { source: 'Your Email', target: 'Twój adres e-mail' },
    { source: 'Password Change', target: 'Zmiana hasła' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target: 'Hasło powinno być wystarczająco silne, aby chronić Twoje konto, dlatego niech będzie co najmniej 12 znaków.'
    },
    { source: 'Current Password', target: 'Obecne hasło' },
    { source: 'New Password', target: 'Nowe hasło' },
    { source: 'Confirm New Password', target: 'Potwierdź nowe hasło' },
    { source: 'Change Password', target: 'Zmień hasło' },
    { source: 'Personal Preferences', target: 'Preferencje osobiste' },
    { source: 'Language', target: 'Język' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'Dostosuj dodatkowe preferencje dla swojego konta.'
    },
    { source: 'News & Proposals', target: 'Wiadomości i propozycje' },
    {
      source: 'Subscribe to our updates and proposals.',
      target: 'Zapisz się na nasze aktualizacje i propozycje.'
    },
    { source: 'Save changes', target: 'Zapisz zmiany' },

    // My Apps
    { source: 'Type to search...', target: 'Wpisz, aby wyszukać...' },
    { source: 'My Apps', target: 'Moje aplikacje' },
    { source: 'New App', target: 'Nowa aplikacja' },
    { source: 'Builder', target: 'Kreator' },
    { source: 'App', target: 'Aplikacja' },
    { source: 'continue install', target: 'kontynuuj instalację' },
    { source: 'Open builder', target: 'Otwórz kreator' },
    { source: 'View published', target: 'Wyświetl opublikowane' },
    { source: 'Delete App', target: 'Usuń aplikację' },
    { source: 'Start from a template', target: 'Rozpocznij od szablonu' },
    { source: 'Preview', target: 'Podgląd' },
    { source: 'Contact Support', target: 'Skontaktuj się z pomocą techniczną' },
    { source: 'Documentation', target: 'Dokumentacja' },
    { source: 'Feature Requests', target: 'Prośby o funkcje' },
    { source: 'See What’s New', target: 'Zobacz co nowego' },
    { source: 'Search templates...', target: 'Szukaj szablonów...' },
    { source: 'any', target: 'dowolny' },
    { source: 'more', target: 'więcej' },
    { source: 'Choose Data Source', target: 'Wybierz źródło danych' },
    { source: 'works with 30+ data sources', target: 'działa z ponad 30 źródłami danych' },
    { source: 'Use this template', target: 'Użyj tego szablonu' },
    { source: 'stores data in Jet Tables', target: 'przechowuje dane w tabelach Jet' },
    { source: 'New Data', target: 'Nowe dane' },
    { source: 'using {0}', target: 'korzystając z {0}' },
    { source: "Can't find resource you're looking for?", target: 'Nie możesz znaleźć szukanego zasobu?' },
    { source: 'Admin Panel', target: 'Panel administracyjny' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'Operacje listowania, tworzenia i aktualizacji (CRUD) na Twoich danych'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target:
      'Zbuduj niestandardowy panel administracyjny oparty na dowolnych bazach danych, aplikacjach i interfejsach API, takich jak Stripe, Twilio i GraphQL.'
    },
    { source: 'All Integrations', target: 'Wszystkie integracje' },
    { source: 'Databases', target: 'Bazy danych' },
    { source: 'APIs', target: 'Interfejsy API' },
    { source: 'Frameworks', target: 'Frameworki' },
    { source: 'Storages', target: 'Magazyny' },

    // Sign In
    { source: 'Please wait...', target: 'Proszę czekać...' },
    { source: 'Good morning', target: 'Dzień dobry' },
    { source: 'Good afternoon', target: 'Dzień dobry' },
    { source: 'Good evening', target: 'Dobry wieczór' },
    { source: 'Sign In', target: 'Zaloguj się' },
    { source: 'Welcome Back.', target: 'Witaj ponownie.' },
    { source: 'Sign in with {0}', target: 'Zaloguj się za pomocą {0}' },
    { source: 'or login with', target: 'lub zaloguj się za pomocą' },
    { source: 'Enter E-mail', target: 'Wprowadź adres e-mail' },
    { source: 'Enter password', target: 'Wprowadź hasło' },
    { source: 'Login', target: 'Zaloguj się' },
    { source: 'Create new account', target: 'Utwórz nowe konto' },
    { source: 'Forgot my password', target: 'Zapomniałem hasła' },
    { source: 'required', target: 'wymagane' },
    { source: 'incorrect Email', target: 'nieprawidłowy adres e-mail' },
    { source: 'Minimum password length {0}', target: 'Minimalna długość hasła {0}' },
    { source: 'Unable to Sign In', target: 'Nie można się zalogować' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'Zacznij <span class="auth-form__accent">za darmo</span> już dziś'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target: 'Nie wymagana karta. Otrzymasz wszystkie zaawansowane funkcje za darmo podczas 14-dniowego okresu próbnego PRO.'
    },
    { source: 'or', target: 'lub' },
    { source: 'Enter First Name', target: 'Wprowadź imię' },
    { source: 'Enter Last Name (optional)', target: 'Wprowadź nazwisko (opcjonalne)' },
    { source: 'Enter Email', target: 'Wprowadź adres e-mail' },
    { source: 'Password', target: 'Hasło' },
    { source: 'Repeat Password', target: 'Powtórz hasło' },
    {
      source: 'By signing in you’re okay with our',
      target: 'Logując się, zgadzasz się na nasze'
    },
    {
      source: 'Creating an account means you’re okay with our',
      target: 'Tworząc konto, zgadzasz się na nasze'
    },
    { source: 'Terms of Service', target: 'Warunki korzystania z usługi' },
    { source: 'Privacy Policy', target: 'Polityka prywatności' },
    { source: 'and', target: 'i' },
    { source: 'Create your free account', target: 'Utwórz darmowe konto' },
    { source: 'Already have an account', target: 'Masz już konto' },
    { source: 'Unable to Sign Up', target: 'Nie można się zarejestrować' },

    // Restore password
    { source: 'Reset your password', target: 'Zresetuj hasło' },
    { source: 'Email Address', target: 'Adres e-mail' },
    { source: 'Reset password', target: 'Zresetuj hasło' },
    { source: 'Return to Sign In', target: 'Powrót do logowania' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'Sprawdź swoją skrzynkę e-mailową – <strong>{0}</strong>. Wysłaliśmy Ci link weryfikacyjny, który powinieneś kliknąć, aby zmienić hasło.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be al least 8 characters.',
      target: 'Prawie gotowe, wprowadź swoje nowe hasło poniżej. <br>Musi mieć co najmniej 8 znaków.'
    },
    { source: 'Reset password & Sign In', target: 'Zresetuj hasło i zaloguj się' },
    { source: 'Unable to Send Code', target: 'Nie można wysłać kodu' },
    { source: 'Unable to Change Password', target: 'Nie można zmienić hasła' },

    // Users & Teams
    { source: 'Members of {0}', target: 'Członkowie {0}' },
    { source: 'How to get started', target: 'Jak zacząć' },
    { source: 'Users API', target: 'API użytkowników' },
    { source: 'Teams API', target: 'API zespołów' },
    { source: 'Invite Member', target: 'Zaproś członka' },
    { source: 'Add User property', target: 'Dodaj właściwość użytkownika' },
    { source: 'Add Team property', target: 'Dodaj właściwość zespołu' },
    { source: 'Add', target: 'Dodaj' },
    { source: 'Edit property', target: 'Edytuj właściwość' },
    { source: 'Delete property', target: 'Usuń właściwość' },
    { source: 'Users', target: 'Użytkownicy' },
    { source: 'Teams', target: 'Zespoły' },
    { source: 'Search members', target: 'Szukaj członków' },
    { source: 'Search teams', target: 'Szukaj zespołów' },
    { source: '{0} pages', target: '{0} strony' },
    { source: 'No members', target: 'Brak członków' },
  ]
};
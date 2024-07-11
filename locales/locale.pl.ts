import { Locale } from './locale';

export const locale: Locale = {
  name: 'polski',
  language: 'pl',
  items: [
    // General
    { source: 'Save', target: 'Zapisz' },
    { source: 'Create', target: 'Utwórz' },
    { source: 'Duplicating', target: 'Duplikowanie' },
    { source: 'Duplicate', target: 'Duplikuj' },
    { source: 'Mass Edit', target: 'Masowa edycja' },
    { source: 'Export', target: 'Eksportuj' },
    { source: 'Import', target: 'Importuj' },
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
    { source: 'Filter', target: 'Filtruj' },
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
    { source: 'Refresh automatically', target: 'Odśwież automatycznie' },
    { source: 'All', target: 'Wszystkie' },
    { source: 'Selected', target: 'Wybrane' },
    { source: 'Unfortunately, no {0} matching your query found', target: 'Niestety, nie znaleziono {0} pasujących do zapytania' },
    { source: 'We are fetching {0}, please, wait...', target: 'Pobieramy {0}, proszę czekać...' },
    { source: 'Add filter', target: 'Dodaj filtr' },
    { source: 'Delete this filter', target: 'Usuń ten filtr' },
    { source: 'Toggle ordering', target: 'Przełącz kolejność' },
    { source: 'Loading failed', target: 'Ładowanie nie powiodło się' },
    { source: 'Not configured', target: 'Nieskonfigurowane' },
    { source: 'Unfortunately, this component is not configured yet', target: 'Niestety, ten komponent nie jest jeszcze skonfigurowany' },
    { source: 'records', target: 'rekordy' },
    { source: '{0} items', target: '{0} elementów' },

    // Menu
    { source: 'Users & Teams', target: 'Użytkownicy i Zespoły' },
    { source: 'Billing', target: 'Rozliczenia' },
    { source: 'Billing & Plans', target: 'Rozliczenia i Plany' },
    { source: 'API keys', target: 'Klucze API' },
    { source: 'Dark Mode', target: 'Tryb ciemny' },
    { source: 'Light Mode', target: 'Tryb jasny' },
    { source: 'Disable Staff', target: 'Wyłącz personel' },
    { source: 'Enable Staff', target: 'Włącz personel' },
    { source: 'Manage Templates', target: 'Zarządzaj szablonami' },
    { source: 'Logout', target: 'Wyloguj' },
    { source: 'Activity Log', target: 'Dziennik aktywności' },
    { source: 'Collaborations', target: 'Współpraca' },
    { source: 'Open Visual Builder', target: 'Otwórz Visual Builder' },

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

    { source: 'greater than', target: 'większy niż' },
    { source: 'is not greater than', target: 'nie jest większy niż' },
    { source: '{0} is greater than {1}', target: '{0} jest większy niż {1}' },
    { source: '{0} not greater than {1}', target: '{0} nie jest większy niż {1}' },

    { source: 'greater than or equals', target: 'większy lub równy' },
    { source: 'is not greater than or equals', target: 'nie jest większy lub równy' },
    { source: '{0} is greater than or equals {1}', target: '{0} jest większy lub równy {1}' },
    { source: '{0} is not greater than or equals {1}', target: '{0} nie jest większy lub równy {1}' },

    { source: 'less than', target: 'mniejszy niż' },
    { source: 'is not less than', target: 'nie jest mniejszy niż' },
    { source: '{0} is less than {1}', target: '{0} jest mniejszy niż {1}' },
    { source: '{0} is not less than {1}', target: '{0} nie jest mniejszy niż {1}' },

    { source: 'less than or equals', target: 'mniejszy lub równy' },
    { source: 'is not less than or equals', target: 'nie jest mniejszy lub równy' },
    { source: '{0} is less than or equals {1}', target: '{0} jest mniejszy lub równy {1}' },
    { source: '{0} is not less than or equals {1}', target: '{0} nie jest mniejszy lub równy {1}' },

    { source: 'one of', target: 'jeden z' },
    { source: 'is one of', target: 'jest jednym z' },
    { source: 'is not one of', target: 'nie jest jednym z' },
    { source: '{0} is one of {1}', target: '{0} jest jednym z {1}' },
    { source: '{0} is not one of {1}', target: '{0} nie jest jednym z {1}' },

    { source: 'is null', target: 'jest pusty' },
    { source: 'is not null', target: 'nie jest pusty' },
    { source: '{0} is null', target: '{0} jest pusty' },
    { source: '{0} is not null', target: '{0} nie jest pusty' },

    { source: 'is future', target: 'jest w przyszłości' },
    { source: 'in the past', target: 'jest w przeszłości' },
    { source: 'is not in the past', target: 'nie jest w przeszłości' },
    { source: '{0} is in the past', target: '{0} jest w przeszłości' },
    { source: '{0} is not in the past', target: '{0} nie jest w przeszłości' },

    { source: 'is in the past or today', target: 'jest w przeszłości lub dzisiaj' },
    { source: 'is not in the past or today', target: 'nie jest w przeszłości lub dzisiaj' },
    { source: '{0} is in the past or today', target: '{0} jest w przeszłości lub dzisiaj' },
    { source: '{0} is not in the past or today', target: '{0} nie jest w przeszłości lub dzisiaj' },

    { source: 'is today', target: 'jest dzisiaj' },
    { source: 'is not today', target: 'nie jest dzisiaj' },
    { source: '{0} is today', target: '{0} jest dzisiaj' },
    { source: '{0} is not today', target: '{0} nie jest dzisiaj' },

    { source: 'is tomorrow', target: 'jest jutro' },
    { source: 'is not tomorrow', target: 'nie jest jutro' },
    { source: '{0} is tomorrow', target: '{0} jest jutro' },
    { source: '{0} is not tomorrow', target: '{0} nie jest jutro' },

    { source: 'is yesterday', target: 'był wczoraj' },
    { source: 'is not yesterday', target: 'nie był wczoraj' },
    { source: '{0} is yesterday', target: '{0} był wczoraj' },
    { source: '{0} is not yesterday', target: '{0} nie był wczoraj' },

    { source: 'is before', target: 'jest przed' },
    { source: 'is after', target: 'jest po' },
    { source: '{0} is after {1}', target: '{0} jest po {1}' },
    { source: '{0} is before {1}', target: '{0} jest przed {1}' },

    { source: 'is on or after', target: 'jest w dniu lub po' },
    { source: 'is not on or after', target: 'nie jest w dniu lub po' },
    { source: '{0} is on or after {1}', target: '{0} jest w dniu lub po {1}' },
    { source: '{0} is not on or after {1}', target: '{0} nie jest w dniu lub po {1}' },

    { source: 'is on or before', target: 'jest w dniu lub przed' },
    { source: 'is not on or before', target: 'nie jest w dniu lub przed' },
    { source: '{0} is on or before {1}', target: '{0} jest w dniu lub przed {1}' },
    { source: '{0} is not on or before {1}', target: '{0} nie jest w dniu lub przed {1}' },

    { source: 'is on', target: 'jest w dniu' },
    { source: 'is not on', target: 'nie jest w dniu' },
    { source: '{0} is on {1}', target: '{0} jest w dniu {1}' },
    { source: '{0} is not on {1}', target: '{0} nie jest w dniu {1}' },

    // Field names
    { source: 'Value', target: 'Wartość' },
    { source: 'Values', target: 'Wartości' },
    { source: 'of', target: 'z' },
    { source: 'No items found', target: 'Nie znaleziono elementów' },

    // Validation
    { source: 'Field is required', target: 'Pole jest wymagane' },
    { source: 'Field must not be empty', target: 'Pole nie może być puste' },
    { source: 'Field must be set', target: 'Pole musi być ustawione' },
    { source: 'Must be a valid URL', target: 'Musi być prawidłowym URL' },
    { source: 'Must be a valid email', target: 'Musi być prawidłowy email' },
    { source: 'Must be a valid number', target: 'Musi być prawidłowa liczba' },

    // Bulk actions
    { source: 'Bulk Actions', target: 'Operacje masowe' },
    { source: 'Perform bulk action', target: 'Wykonaj operację masową' },

    // Export
    { source: 'Export as CSV', target: 'Eksportuj jako CSV' },
    { source: 'Export as Excel', target: 'Eksportuj jako Excel' },

    // User account
    { source: 'Sign in', target: 'Zaloguj się' },
    { source: 'Sign out', target: 'Wyloguj się' },
    { source: 'Register', target: 'Zarejestruj się' },

    // Common phrases
    { source: 'Yes', target: 'Tak' },
    { source: 'No', target: 'Nie' },
    { source: 'Ok', target: 'Ok' },
    { source: 'Cancel', target: 'Anuluj' },
    { source: 'Confirm', target: 'Potwierdź' },

    // Date and time
    { source: 'Date', target: 'Data' },
    { source: 'Time', target: 'Czas' },
    { source: 'Date and Time', target: 'Data i czas' },
    { source: 'Select date', target: 'Wybierz datę' },
    { source: 'Select time', target: 'Wybierz czas' },
    { source: 'Today', target: 'Dzisiaj' },
    { source: 'Tomorrow', target: 'Jutro' },
    { source: 'Yesterday', target: 'Wczoraj' },

    // Error messages
    { source: 'An error occurred', target: 'Wystąpił błąd' },
    { source: 'Something went wrong', target: 'Coś poszło nie tak' },
    { source: 'Failed to load data', target: 'Nie udało się załadować danych' },
    { source: 'Network error', target: 'Błąd sieci' },
    { source: 'Server error', target: 'Błąd serwera' },
    { source: 'Client error', target: 'Błąd klienta' },

    // Notifications
    { source: 'Notification', target: 'Powiadomienie' },
    { source: 'Notifications', target: 'Powiadomienia' },
    { source: 'New notification', target: 'Nowe powiadomienie' },
    { source: 'No new notifications', target: 'Brak nowych powiadomień' },

    // Pagination
    { source: 'Page', target: 'Strona' },
    { source: 'of', target: 'z' },
    { source: 'First', target: 'Pierwsza' },
    { source: 'Last', target: 'Ostatnia' },
    { source: 'Next', target: 'Następna' },
    { source: 'Previous', target: 'Poprzednia' },

    // Miscellaneous
    { source: 'Loading', target: 'Ładowanie' },
    { source: 'No results found', target: 'Nie znaleziono wyników' },
    { source: 'Results', target: 'Wyniki' },
    { source: 'Settings', target: 'Ustawienia' },
    { source: 'Profile', target: 'Profil' },
    { source: 'Account', target: 'Konto' },
    { source: 'Help', target: 'Pomoc' },
    { source: 'Documentation', target: 'Dokumentacja' },
  ],
};

import { Locale } from './locale';

export const locale: Locale = {
  name: 'german',
  language: 'de',
  items: [
    // General
    { source: 'Save', target: 'Speichern' },
    { source: 'Create', target: 'Erstellen' },
    { source: 'Duplicating', target: 'Duplizieren' },
    { source: 'Duplicate', target: 'Duplikat' },
    { source: 'Mass Edit', target: 'Massenbearbeitung' },
    { source: 'Export', target: 'Exportieren' },
    { source: 'Import', target: 'Importieren' },
    { source: 'Delete', target: 'Löschen' },
    { source: 'Continue', target: 'Fortfahren' },
    { source: 'Cancel', target: 'Abbrechen' },
    { source: 'Loading', target: 'Laden' },
    { source: 'Please wait...', target: 'Bitte warten...' },
    { source: 'Loading failed', target: 'Laden fehlgeschlagen' },
    { source: 'Unknown error', target: 'Unbekannter Fehler' },
    { source: 'Add', target: 'Hinzufügen' },
    { source: 'or', target: 'oder' },
    { source: 'Hours', target: 'Stunden' },
    { source: 'Minutes', target: 'Minuten' },
    { source: 'Seconds', target: 'Sekunden' },
    { source: 'Saved', target: 'Gespeichert' },
    { source: 'Error', target: 'Fehler' },
    { source: 'Page not found', target: 'Seite nicht gefunden' },
    {
      source: 'The specified address is incorrect, or the page does not exist',
      target: 'Die angegebene Adresse ist falsch oder die Seite existiert nicht'
    },
    { source: 'Not allowed', target: 'Nicht erlaubt' },
    {
      source: "You don't have permissions to access this page",
      target: 'Sie haben keine Berechtigung, auf diese Seite zuzugreifen'
    },

    // Actions
    { source: 'Action executed', target: 'Aktion ausgeführt' },
    { source: 'Action executed successfully', target: 'Aktion erfolgreich ausgeführt' },
    { source: 'Action failed', target: 'Aktion fehlgeschlagen' },
    {
      source: "You don't have permission for run this operation",
      target: 'Sie haben keine Berechtigung, diese Operation durchzuführen'
    },
    { source: 'Specify parameters', target: 'Parameter festlegen' },
    { source: 'Executing action', target: 'Aktion wird ausgeführt' },
    { source: 'You are executing <strong>{0}</strong>', target: 'Sie führen <strong>{0}</strong> aus' },
    { source: 'Please fill in the parameters below.', target: 'Bitte füllen Sie die untenstehenden Parameter aus.' },
    { source: 'Execute', target: 'Ausführen' },
    { source: 'Executing', target: 'Ausführung' },
    { source: 'Finished', target: 'Fertig' },
    { source: 'Done', target: 'Erledigt' },

    // Export
    { source: 'Records Export', target: 'Datensatz-Export' },
    { source: 'Downloading records data as a file', target: 'Datensätze werden als Datei heruntergeladen' },
    { source: 'Choose format', target: 'Format wählen' },
    { source: 'Number of exporting records', target: 'Anzahl der zu exportierenden Datensätze' },
    { source: { label: 'Export', context: 'submit' }, target: 'Exportieren' },
    { source: 'Exporting', target: 'Exportieren' },
    { source: 'Export completed', target: 'Export abgeschlossen' },
    { source: 'Failed to export', target: 'Export fehlgeschlagen' },

    // Components
    { source: 'optional', target: 'optional' },
    { source: 'choose', target: 'wählen' },
    { source: 'Clear value', target: 'Wert löschen' },
    { source: 'loading...', target: 'lädt...' },
    { source: 'Nothing found', target: 'Nichts gefunden' },
    { source: 'Search...', target: 'Suche...' },
    { source: 'Enter at least {0} characters', target: 'Geben Sie mindestens {0} Zeichen ein' },
    { source: 'No options', target: 'Keine Optionen' },
    { source: 'Drop files here or', target: 'Dateien hier ablegen oder' },
    { source: 'Upload new', target: 'Neu hochladen' },
    { source: 'Clear', target: 'Löschen' },
    { source: 'Download', target: 'Herunterladen' },
    { source: 'Choose file', target: 'Datei wählen' },
    { source: 'Choose files', target: 'Dateien wählen' },
    { source: 'Scan with Camera', target: 'Mit Kamera scannen' },
    { source: 'Scan Image file', target: 'Bilddatei scannen' },
    { source: 'Choose camera', target: 'Kamera wählen' },
    { source: 'Stop scanning', target: 'Scannen stoppen' },
    { source: 'Scan again', target: 'Erneut scannen' },
    { source: 'Use this scan', target: 'Diesen Scan verwenden' },
    { source: 'Failed to scan', target: 'Scannen fehlgeschlagen' },
    {
      source: 'Code failed to scan, please try another image',
      target: 'Code konnte nicht gescannt werden, bitte versuchen Sie ein anderes Bild'
    },
    { source: 'current', target: 'aktuell' },
    { source: 'Day', target: 'Tag' },
    { source: 'Week', target: 'Woche' },
    { source: 'Month', target: 'Monat' },
    { source: 'Year', target: 'Jahr' },
    { source: 'Today', target: 'Heute' },
    { source: 'Daily', target: 'Täglich' },
    { source: 'Weekly', target: 'Wöchentlich' },
    { source: 'Monthly', target: 'Monatlich' },
    { source: 'Quarterly', target: 'Vierteljährlich' },
    { source: 'Yearly', target: 'Jährlich' },
    { source: 'Hourly', target: 'Stündlich' },
    { source: 'Minutely', target: 'Minütlich' },
    { source: 'Since', target: 'Seit' },
    { source: 'Before', target: 'Vor' },
    { source: 'Between', target: 'Zwischen' },
    { source: 'From date', target: 'Ab Datum' },
    { source: 'To date', target: 'Bis Datum' },
    { source: 'Coordinates', target: 'Koordinaten' },
    { source: 'Latitude', target: 'Breitengrad' },
    { source: 'Longitude', target: 'Längengrad' },
    { source: 'Default color', target: 'Standardfarbe' },
    { source: 'not specified', target: 'nicht angegeben' },
    { source: 'Sign using your finger or pointer', target: 'Unterschreiben Sie mit Ihrem Finger oder Zeiger' },

    // List components
    { source: 'Filter', target: 'Filter' },
    { source: 'Filter by field', target: 'Nach Feld filtern' },
    { source: 'Filter by...', target: 'Filtern nach...' },
    { source: 'Back', target: 'Zurück' },
    { source: 'Back to {0} fields', target: 'Zurück zu {0} Feldern' },
    { source: 'Choose {0} from list', target: 'Wählen Sie {0} aus der Liste' },
    { source: '{0} fields', target: '{0} Felder' },
    { source: '{0} relationships', target: '{0} Beziehungen' },
    { source: 'Aggregate {0}', target: '{0} aggregieren' },
    { source: 'No fields to select', target: 'Keine Felder zur Auswahl' },
    { source: 'Enter value...', target: 'Wert eingeben...' },
    { source: 'Exclude', target: 'Ausschließen' },
    { source: 'Actions', target: 'Aktionen' },
    { source: 'Search', target: 'Suche' },
    { source: 'Sort 1 → 9', target: 'Sortieren 1 → 9' },
    { source: 'Sort 9 → 1', target: 'Sortieren 9 → 1' },
    { source: 'Sort A → Z', target: 'Sortieren A → Z' },
    { source: 'Sort Z → A', target: 'Sortieren Z → A' },
    { source: 'Refresh automatically', target: 'Automatisch neu laden' },
    { source: 'All', target: 'Alle' },
    { source: 'Selected', target: 'Ausgewählt' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'Leider wurde kein {0} gefunden, das Ihrer Anfrage entspricht'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'Wir laden {0}, bitte warten...' },
    { source: 'Add filter', target: 'Filter hinzufügen' },
    { source: 'Delete this filter', target: 'Diesen Filter löschen' },
    { source: 'Toggle ordering', target: 'Reihenfolge umschalten' },
    { source: 'Not configured', target: 'Nicht konfiguriert' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'Leider ist diese Komponente noch nicht konfiguriert'
    },
    { source: 'records', target: 'Datensätze' },
    { source: '{0} items', target: '{0} Elemente' },

    // Menu
    { source: 'Users & Teams', target: 'Benutzer & Teams' },
    { source: 'Billing', target: 'Abrechnung' },
    { source: 'Billing & Plans', target: 'Abrechnung & Pläne' },
    { source: 'API keys', target: 'API-Schlüssel' },
    { source: 'Dark Mode', target: 'Dunkler Modus' },
    { source: 'Light Mode', target: 'Heller Modus' },
    { source: 'Disable Staff', target: 'Mitarbeiter deaktivieren' },
    { source: 'Enable Staff', target: 'Mitarbeiter aktivieren' },
    { source: 'Manage Templates', target: 'Vorlagen verwalten' },
    { source: 'Logout', target: 'Abmelden' },
    { source: 'Activity Log', target: 'Aktivitätsprotokoll' },
    { source: 'Collaborations', target: 'Zusammenarbeit' },
    { source: 'Open Visual Builder', target: 'Visuellen Builder öffnen' },

    // Filters
    { source: 'equals', target: 'gleich' },
    { source: 'does not equal', target: 'ungleich' },
    { source: '{0} equals {1}', target: '{0} gleich {1}' },
    { source: '{0} does not equal {1}', target: '{0} ungleich {1}' },

    { source: 'contains', target: 'enthält' },
    { source: 'does not contain', target: 'enthält nicht' },
    { source: '{0} contains {1}', target: '{0} enthält {1}' },
    { source: '{0} not contains {1}', target: '{0} enthält nicht {1}' },

    { source: 'starts with', target: 'beginnt mit' },
    { source: 'does not start with', target: 'beginnt nicht mit' },
    { source: '{0} starts with {1}', target: '{0} beginnt mit {1}' },
    { source: '{0} does not start with {1}', target: '{0} beginnt nicht mit {1}' },

    { source: 'ends with', target: 'endet mit' },
    { source: 'does not end with', target: 'endet nicht mit' },
    { source: '{0} ends with {1}', target: '{0} endet mit {1}' },
    { source: '{0} does not end with {1}', target: '{0} endet nicht mit {1}' },

    { source: 'greater than', target: 'größer als' },
    { source: 'is not greater than', target: 'ist nicht größer als' },
    { source: '{0} is greater than {1}', target: '{0} ist größer als {1}' },
    { source: '{0} not greater than {1}', target: '{0} nicht größer als {1}' },

    { source: 'greater than or equals', target: 'größer als oder gleich' },
    { source: 'is not greater than or equals', target: 'ist nicht größer als oder gleich' },
    { source: '{0} is greater than or equals {1}', target: '{0} ist größer als oder gleich {1}' },
    { source: '{0} is not greater than or equals {1}', target: '{0} ist nicht größer als oder gleich {1}' },

    { source: 'less than', target: 'weniger als' },
    { source: 'is not less than', target: 'ist nicht weniger als' },
    { source: '{0} is less than {1}', target: '{0} ist weniger als {1}' },
    { source: '{0} is not less than {1}', target: '{0} ist nicht weniger als {1}' },

    { source: 'less than or equals', target: 'weniger als oder gleich' },
    { source: 'is not less than or equals', target: 'ist nicht weniger als oder gleich' },
    { source: '{0} is less than or equals {1}', target: '{0} ist weniger als oder gleich {1}' },
    { source: '{0} is not less than or equals {1}', target: '{0} ist nicht weniger als oder gleich {1}' },

    { source: 'one of', target: 'eines von' },
    { source: 'is one of', target: 'ist eines von' },
    { source: 'is not one of', target: 'ist keines von' },
    { source: '{0} is one of {1}', target: '{0} ist eines von {1}' },
    { source: '{0} is not one of {1}', target: '{0} ist keines von {1}' },

    { source: 'is null', target: 'ist null' },
    { source: 'is not null', target: 'ist nicht null' },
    { source: '{0} is null', target: '{0} ist null' },
    { source: '{0} is not null', target: '{0} ist nicht null' },

    { source: 'is future', target: 'ist Zukunft' },
    { source: 'in the future', target: 'in der Zukunft' },
    { source: 'is not in the future', target: 'ist nicht in der Zukunft' },
    { source: '{0} is in the future', target: '{0} ist in der Zukunft' },
    { source: '{0} is not in the future', target: '{0} ist nicht in der Zukunft' },

    { source: 'is past', target: 'ist Vergangenheit' },
    { source: 'in the past', target: 'in der Vergangenheit' },
    { source: 'is not in the past', target: 'ist nicht in der Vergangenheit' },
    { source: '{0} is in the past', target: '{0} ist in der Vergangenheit' },
    { source: '{0} is not in the past', target: '{0} ist nicht in der Vergangenheit' },

    { source: 'is Today', target: 'ist Heute' },
    { source: 'today', target: 'heute' },
    { source: 'is not today', target: 'ist nicht heute' },
    { source: '{0} is today', target: '{0} ist heute' },
    { source: '{0} is not today', target: '{0} ist nicht heute' },

    { source: 'is Yesterday', target: 'ist Gestern' },
    { source: 'yesterday', target: 'gestern' },
    { source: 'is not yesterday', target: 'ist nicht gestern' },
    { source: '{0} is yesterday', target: '{0} ist gestern' },
    { source: '{0} is not yesterday', target: '{0} ist nicht gestern' },

    { source: 'is Last Week', target: 'ist letzte Woche' },
    { source: 'last week', target: 'letzte Woche' },
    { source: 'is not last week', target: 'ist nicht letzte Woche' },
    { source: '{0} is last week', target: '{0} ist letzte Woche' },
    { source: '{0} is not last week', target: '{0} ist nicht letzte Woche' },

    { source: 'is Last Month', target: 'ist letzter Monat' },
    { source: 'last month', target: 'letzter Monat' },
    { source: 'is not last month', target: 'ist nicht letzter Monat' },
    { source: '{0} is last month', target: '{0} ist letzter Monat' },
    { source: '{0} is not last month', target: '{0} ist nicht letzter Monat' },

    { source: 'is Last Quarter', target: 'ist letztes Quartal' },
    { source: 'last quarter', target: 'letztes Quartal' },
    { source: 'is not last quarter', target: 'ist nicht letztes Quartal' },
    { source: '{0} is last quarter', target: '{0} ist letztes Quartal' },
    { source: '{0} is not last quarter', target: '{0} ist nicht letztes Quartal' },

    { source: 'is Last Year', target: 'ist letztes Jahr' },
    { source: 'last year', target: 'letztes Jahr' },
    { source: 'is not last year', target: 'ist nicht letztes Jahr' },
    { source: '{0} is last year', target: '{0} ist letztes Jahr' },
    { source: '{0} is not last year', target: '{0} ist nicht letztes Jahr' },

    { source: 'is Last X Days', target: 'ist letzte X Tage' },
    { source: 'last X days', target: 'letzte X Tage' },
    { source: 'is not last X days', target: 'ist nicht letzte X Tage' },
    { source: '{0} is last {1} days', target: '{0} ist letzte {1} Tage' },
    { source: '{0} is not last {1} days', target: '{0} ist nicht letzte {1} Tage' },

    { source: 'is Current Week', target: 'ist aktuelle Woche' },
    { source: 'current week', target: 'aktuelle Woche' },
    { source: 'is not current week', target: 'ist nicht aktuelle Woche' },
    { source: '{0} is current week', target: '{0} ist aktuelle Woche' },
    { source: '{0} is not current week', target: '{0} ist nicht aktuelle Woche' },

    { source: 'is Current Month', target: 'ist aktueller Monat' },
    { source: 'current month', target: 'aktueller Monat' },
    { source: 'is not current month', target: 'ist nicht aktueller Monat' },
    { source: '{0} is current month', target: '{0} ist aktueller Monat' },
    { source: '{0} is not current month', target: '{0} ist nicht aktueller Monat' },

    { source: 'is Current Quarter', target: 'ist aktuelles Quartal' },
    { source: 'current quarter', target: 'aktuelles Quartal' },
    { source: 'is not current quarter', target: 'ist nicht aktuelles Quartal' },
    { source: '{0} is current quarter', target: '{0} ist aktuelles Quartal' },
    { source: '{0} is not current quarter', target: '{0} ist nicht aktuelles Quartal' },

    { source: 'is Current Year', target: 'ist aktuelles Jahr' },
    { source: 'current year', target: 'aktuelles Jahr' },
    { source: 'is not current year', target: 'ist nicht aktuelles Jahr' },
    { source: '{0} is current year', target: '{0} ist aktuelles Jahr' },
    { source: '{0} is not current year', target: '{0} ist nicht aktuelles Jahr' },

    { source: 'is Previous Week', target: 'ist vorherige Woche' },
    { source: 'previous week', target: 'vorherige Woche' },
    { source: 'is not previous week', target: 'ist nicht vorherige Woche' },
    { source: '{0} is previous week', target: '{0} ist vorherige Woche' },
    { source: '{0} is not previous week', target: '{0} ist nicht vorherige Woche' },

    { source: 'is Previous Month', target: 'ist vorheriger Monat' },
    { source: 'previous month', target: 'vorheriger Monat' },
    { source: 'is not previous month', target: 'ist nicht vorheriger Monat' },
    { source: '{0} is previous month', target: '{0} ist vorheriger Monat' },
    { source: '{0} is not previous month', target: '{0} ist nicht vorheriger Monat' },

    { source: 'is Previous Quarter', target: 'ist vorheriges Quartal' },
    { source: 'previous quarter', target: 'vorheriges Quartal' },
    { source: 'is not previous quarter', target: 'ist nicht vorheriges Quartal' },
    { source: '{0} is previous quarter', target: '{0} ist vorheriges Quartal' },
    { source: '{0} is not previous quarter', target: '{0} ist nicht vorheriges Quartal' },

    { source: 'is Previous Year', target: 'ist vorheriges Jahr' },
    { source: 'previous year', target: 'vorheriges Jahr' },
    { source: 'is not previous year', target: 'ist nicht vorheriges Jahr' },
    { source: '{0} is previous year', target: '{0} ist vorheriges Jahr' },
    { source: '{0} is not previous year', target: '{0} ist nicht vorheriges Jahr' },

    { source: 'is Previous X Days', target: 'ist vorherige X Tage' },
    { source: 'previous X days', target: 'vorherige X Tage' },
    { source: 'is not previous X days', target: 'ist nicht vorherige X Tage' },
    { source: '{0} is previous {1} days', target: '{0} ist vorherige {1} Tage' },
    { source: '{0} is not previous {1} days', target: '{0} ist nicht vorherige {1} Tage' },

    { source: 'is empty', target: 'ist leer' },
    { source: 'is not empty', target: 'ist nicht leer' },
    { source: '{0} is empty', target: '{0} ist leer' },
    { source: '{0} is not empty', target: '{0} ist nicht leer' },

    { source: 'covered by', target: 'abgedeckt durch' },
    { source: 'is not covered by', target: 'ist nicht abgedeckt durch' },
    { source: '{0} covered by {1}', target: '{0} abgedeckt durch {1}' },
    { source: '{0} is not covered by {1}', target: '{0} ist nicht abgedeckt durch {1}' },

    // Activity log
    { source: 'No activities found', target: 'Keine Aktivitäten gefunden' },
    {
      source: 'Start to working with data to log activities.',
      target: 'Beginnen Sie mit dem Arbeiten mit Daten, um Aktivitäten zu protokollieren.'
    },
    { source: 'All Activity', target: 'Alle Aktivitäten' },
    { source: 'Create Record', target: 'Datensatz erstellen' },
    { source: 'Update Record', target: 'Datensatz aktualisieren' },
    { source: 'Delete Record', target: 'Datensatz löschen' },
    { source: 'All Members', target: 'Alle Mitglieder' },

    // Collaboration
    { source: 'Timeline', target: 'Zeitleiste' },
    { source: 'Messages', target: 'Nachrichten' },
    { source: 'Activity', target: 'Aktivität' },
    { source: 'Start chatting with your team', target: 'Beginnen Sie mit Ihrem Team zu chatten' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'Machen Sie eine Nachricht über die aktuelle Seite, um wichtige Informationen zu verfolgen.'
    },
    { source: 'Your Message', target: 'Ihre Nachricht' },
    { source: 'Send', target: 'Senden' },

    // Share
    { source: 'Invite members', target: 'Mitglieder einladen' },
    { source: 'Public share', target: 'Öffentliches Teilen' },
    { source: 'Sign Up', target: 'Anmelden' },
    { source: 'Members', target: 'Mitglieder' },
    { source: 'Invite with Email', target: 'Per E-Mail einladen' },
    { source: 'Invite someone...', target: 'Jemanden einladen...' },
    { source: 'Send Invite', target: 'Einladung senden' },
    {
      source: 'Limit access to your data by user properties',
      target: 'Beschränken Sie den Zugriff auf Ihre Daten durch Benutzereigenschaften'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: 'Geben Sie die E-Mail-Adresse des Benutzers ein, den Sie zur Zusammenarbeit einladen möchten.'
    },
    { source: 'Copy', target: 'Kopieren' },
    { source: 'Invite with Link', target: 'Mit Link einladen' },
    { source: 'Remove link', target: 'Link entfernen' },
    { source: 'Add Invite Link', target: 'Einladungslink hinzufügen' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'Jeder im Internet mit diesem Link kann dem ausgewählten Team beitreten.'
    },
    { source: 'Pending Invites', target: 'Ausstehende Einladungen' },
    { source: 'Cancel invite', target: 'Einladung abbrechen' },
    { source: 'Active Members', target: 'Aktive Mitglieder' },
    { source: 'Remove member', target: 'Mitglied entfernen' },
    {
      source: 'You are setting sharing for the current page',
      target: 'Sie stellen die Freigabe für die aktuelle Seite ein'
    },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'Sie stellen die Freigabe für alle Seiten Ihrer App ein.'
    },
    { source: 'Public access link', target: 'Öffentlicher Zugangslink' },
    { source: 'Updating public access...', target: 'Aktualisiere öffentlichen Zugang...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'Jeder mit diesem Link kann die aktuelle Seite anzeigen. Auf diese Weise können Sie die aktuelle Seite auch in eine andere Website einbetten.'
    },
    { source: 'Embed code (IFRAME)', target: 'Einbettungscode (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target:
        'Fügen Sie diesen Code in den HTML-Code Ihrer Website ein, an der Stelle, an der die aktuelle Seite erscheinen soll.'
    },
    { source: 'link', target: 'Link' },
    { source: 'invited', target: 'eingeladen' },
    { source: 'Choose Team', target: 'Team wählen' },
    { source: 'App Teams', target: 'App-Teams' },
    { source: 'Built-In Teams', target: 'Integrierte Teams' },
    { source: 'Clear Team', target: 'Team löschen' },
    { source: 'Can build application and modify data', target: 'Kann Anwendungen erstellen und Daten ändern' },
    { source: 'Can modify data in application', target: 'Kann Daten in der Anwendung ändern' },
    { source: 'Can only view data without modification', target: 'Kann Daten nur anzeigen, nicht ändern' },
    { source: 'Add Team', target: 'Team hinzufügen' },
    { source: 'Edit Team', target: 'Team bearbeiten' },
    { source: 'Adding Team', target: 'Team wird hinzugefügt' },
    {
      source: 'Keep control over who has access to current App',
      target: 'Behalten Sie die Kontrolle darüber, wer Zugriff auf die aktuelle App hat'
    },
    { source: 'Enter Team Name', target: 'Teamname eingeben' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'Geben Sie den Teamnamen ein, z.B.: Support, Vertrieb, Marketing, etc.'
    },
    { source: 'Add a new member to this team.', target: 'Fügen Sie diesem Team ein neues Mitglied hinzu.' },
    { source: 'Invite new member', target: 'Neues Mitglied einladen' },
    { source: 'User', target: 'Benutzer' },
    { source: 'Date Added', target: 'Hinzugefügt am' },
    { source: 'You', target: 'Sie' },
    { source: 'Edit', target: 'Bearbeiten' },
    { source: 'No users in this team', target: 'Keine Benutzer in diesem Team' },
    { source: 'Page Permissions', target: 'Seitengenehmigungen' },
    { source: 'App Permissions', target: 'App-Genehmigungen' },
    { source: 'Properties', target: 'Eigenschaften' },
    { source: 'Page name', target: 'Seitenname' },
    { source: 'Access', target: 'Zugriff' },
    { source: 'Full Access', target: 'Voller Zugriff' },
    { source: 'Read Only', target: 'Nur lesen' },
    { source: 'No Access', target: 'Kein Zugriff' },
    { source: 'Read', target: 'Lesen' },
    { source: 'Update', target: 'Aktualisieren' },
    { source: 'Write', target: 'Schreiben' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'Löschen' },
    { source: 'Custom Access', target: 'Benutzerdefinierter Zugriff' },
    { source: 'Read, create, update and delete data', target: 'Lesen, erstellen, aktualisieren und löschen von Daten' },
    { source: 'Choose allowed operations granularly', target: 'Erlaubte Operationen granuliert auswählen' },
    { source: 'Without any access to data', target: 'Ohne jeden Zugriff auf Daten' },
    { source: 'Name', target: 'Name' },
    { source: 'Active', target: 'Aktiv' },
    { source: 'Settings', target: 'Einstellungen' },
    { source: 'Members and Teams', target: 'Mitglieder und Teams' },
    { source: 'App Builder', target: 'App-Builder' },
    { source: 'Collection Permissions', target: 'Sammlungsgenehmigungen' },
    { source: "Grant permissions to app's collection", target: 'Gewähren Sie Berechtigungen für die Sammlung der App' },
    { source: 'Collection', target: 'Sammlung' },
    {
      source: 'Limit access to your data by team properties',
      target: 'Beschränken Sie den Zugriff auf Ihre Daten durch Teameigenschaften'
    },
    { source: 'Save Team', target: 'Team speichern' },
    { source: 'Create Team', target: 'Team erstellen' },
    { source: 'Value', target: 'Wert' },
    { source: 'No properties specified', target: 'Keine Eigenschaften angegeben' },

    // Navigation
    { source: 'Current App', target: 'Aktuelle App' },
    { source: 'Home', target: 'Startseite' },

    // Profile
    {
      source: 'We are fetching user data, please, wait...',
      target: 'Wir holen Benutzerdaten ein, bitte warten...'
    },
    { source: 'Profile Settings', target: 'Profileinstellungen' },
    { source: 'Basic information about your account.', target: 'Grundinformationen zu Ihrem Konto.' },
    { source: 'Photo', target: 'Foto' },
    { source: 'your photo', target: 'Ihr Foto' },
    { source: 'Change', target: 'Ändern' },
    { source: 'Upload', target: 'Hochladen' },
    { source: 'Photo was successfully updated', target: 'Foto wurde erfolgreich aktualisiert' },
    { source: 'Photo was successfully deleted', target: 'Foto wurde erfolgreich gelöscht' },
    { source: 'First Name', target: 'Vorname' },
    { source: 'Last Name', target: 'Nachname' },
    { source: 'Your Email', target: 'Ihre E-Mail' },
    { source: 'Email Change', target: 'E-Mail ändern' },
    { source: 'New Email', target: 'Neue E-Mail' },
    { source: 'Change Email', target: 'E-Mail ändern' },
    { source: 'Check your inbox', target: 'Überprüfen Sie Ihren Posteingang' },
    { source: 'Confirmation Email was sent to {0}', target: 'Bestätigungs-E-Mail wurde an {0} gesendet' },
    { source: 'Changing Email failed', target: 'Änderung der E-Mail fehlgeschlagen' },
    { source: 'Password Change', target: 'Passwort ändern' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target:
        'Ein Passwort sollte stark genug sein, um Ihr Konto zu schützen, also machen Sie es mindestens 12 Zeichen lang.'
    },
    { source: 'Current Password', target: 'Aktuelles Passwort' },
    { source: 'New Password', target: 'Neues Passwort' },
    { source: 'Confirm New Password', target: 'Neues Passwort bestätigen' },
    { source: 'Change Password', target: 'Passwort ändern' },
    {
      source: 'Current password was successfully updated',
      target: 'Aktuelles Passwort wurde erfolgreich aktualisiert'
    },
    { source: 'Saving current password failed', target: 'Speichern des aktuellen Passworts fehlgeschlagen' },
    { source: 'Short password', target: 'Kurzes Passwort' },
    { source: "Passwords don't match", target: 'Passwörter stimmen nicht überein' },
    { source: 'Personal Preferences', target: 'Persönliche Einstellungen' },
    { source: 'Language', target: 'Sprache' },
    { source: 'Timezone', target: 'Zeitzone' },
    { source: 'Current time in {0} is', target: 'Aktuelle Uhrzeit in {0} ist' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'Passen Sie zusätzliche Einstellungen für Ihr Konto an.'
    },
    { source: 'News & Proposals', target: 'Nachrichten & Vorschläge' },
    {
      source: 'Subscribe to our updates and proposals.',
      target: 'Abonnieren Sie unsere Updates und Vorschläge.'
    },
    { source: 'Save changes', target: 'Änderungen speichern' },
    { source: 'Current user was successfully updated', target: 'Aktueller Benutzer wurde erfolgreich aktualisiert' },
    { source: 'Saving current user failed', target: 'Speichern des aktuellen Benutzers fehlgeschlagen' },

    // My Apps
    { source: 'Type to search...', target: 'Zum Suchen tippen...' },
    { source: 'My Apps', target: 'Meine Apps' },
    { source: 'New App', target: 'Neue App' },
    { source: 'Builder', target: 'Builder' },
    { source: 'App', target: 'App' },
    { source: 'continue install', target: 'Installation fortsetzen' },
    { source: 'Open builder', target: 'Builder öffnen' },
    { source: 'View published', target: 'Veröffentlicht anzeigen' },
    { source: 'Delete App', target: 'App löschen' },
    { source: 'Start from a template', target: 'Mit einer Vorlage beginnen' },
    { source: 'Preview', target: 'Vorschau' },
    { source: 'Contact Support', target: 'Support kontaktieren' },
    { source: 'Documentation', target: 'Dokumentation' },
    { source: 'Feature Requests', target: 'Funktionsanfragen' },
    { source: 'See What’s New', target: 'Neuigkeiten ansehen' },
    { source: 'Search templates...', target: 'Vorlagen durchsuchen...' },
    { source: 'any', target: 'beliebig' },
    { source: 'more', target: 'mehr' },
    { source: 'Choose Data Source', target: 'Datenquelle wählen' },
    { source: 'works with 30+ data sources', target: 'funktioniert mit über 30 Datenquellen' },
    { source: 'Use this template', target: 'Diese Vorlage verwenden' },
    { source: 'stores data in Jet Tables', target: 'speichert Daten in Jet-Tabellen' },
    { source: 'New Data', target: 'Neue Daten' },
    { source: 'using {0}', target: 'verwendet {0}' },
    { source: "Can't find resource you're looking for?", target: 'Ressource nicht gefunden?' },
    { source: 'Admin Panel', target: 'Admin-Panel' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'Listen, erstellen und aktualisieren (CRUD) von Operationen auf Basis Ihrer Daten'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target:
        'Erstellen Sie ein benutzerdefiniertes Admin-Panel auf Basis beliebiger Datenbanken, Apps und APIs wie Stripe, Twilio und GraphQL.'
    },
    { source: 'All Integrations', target: 'Alle Integrationen' },
    { source: 'Databases', target: 'Datenbanken' },
    { source: 'APIs', target: 'APIs' },
    { source: 'Frameworks', target: 'Frameworks' },
    { source: 'Storages', target: 'Speicher' },

    // Sign In
    { source: 'Good morning', target: 'Guten Morgen' },
    { source: 'Good afternoon', target: 'Guten Tag' },
    { source: 'Good evening', target: 'Guten Abend' },
    { source: 'Sign In', target: 'Anmelden' },
    { source: 'Welcome Back.', target: 'Willkommen zurück.' },
    { source: 'Sign in with {0}', target: 'Anmelden mit {0}' },
    { source: 'or login with', target: 'oder anmelden mit' },
    { source: 'Enter E-mail', target: 'E-Mail eingeben' },
    { source: 'Enter password', target: 'Passwort eingeben' },
    { source: 'Login', target: 'Einloggen' },
    { source: 'Create new account', target: 'Neues Konto erstellen' },
    { source: 'Forgot my password', target: 'Passwort vergessen' },
    { source: 'required', target: 'erforderlich' },
    { source: 'incorrect Email', target: 'falsche E-Mail' },
    { source: 'Minimum password length {0}', target: 'Minimale Passwortlänge {0}' },
    { source: 'Unable to Sign In', target: 'Anmelden nicht möglich' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'Jetzt anfangen <span class="auth-form__accent">Heute kostenlos</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target:
        'Keine Karte erforderlich. Sie erhalten alle erweiterten Funktionen kostenlos während der 14-tägigen PRO-Testphase.'
    },
    { source: 'Enter First Name', target: 'Vorname eingeben' },
    { source: 'Enter Last Name (optional)', target: 'Nachname eingeben (optional)' },
    { source: 'Enter Email', target: 'E-Mail eingeben' },
    { source: 'Password', target: 'Passwort' },
    { source: 'Repeat Password', target: 'Passwort wiederholen' },
    {
      source: 'By signing in you’re okay with our',
      target: 'Mit Ihrer Anmeldung akzeptieren Sie unsere'
    },
    {
      source: 'Creating an account means you’re okay with our',
      target: 'Ein Konto zu erstellen bedeutet, dass Sie unsere'
    },
    { source: 'Terms of Service', target: 'Nutzungsbedingungen' },
    { source: 'Privacy Policy', target: 'Datenschutzerklärung' },
    { source: 'and', target: 'und' },
    { source: 'Create your free account', target: 'Erstellen Sie Ihr kostenloses Konto' },
    { source: 'Already have an account', target: 'Bereits ein Konto' },
    { source: 'Unable to Sign Up', target: 'Anmeldung nicht möglich' },

    // Restore password
    { source: 'Reset your password', target: 'Passwort zurücksetzen' },
    { source: 'Email Address', target: 'E-Mail-Adresse' },
    { source: 'Reset password', target: 'Passwort zurücksetzen' },
    { source: 'Return to Sign In', target: 'Zurück zur Anmeldung' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'Bitte prüfen Sie Ihre E-Mail – <strong>{0}</strong>. Wir haben den Bestätigungslink gesendet, dem Sie folgen sollten, um Ihr Passwort zu ändern.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be al least 8 characters.',
      target: 'Fast fertig, geben Sie unten Ihr neues Passwort ein. <br>Muss mindestens 8 Zeichen lang sein.'
    },
    { source: 'Reset password & Sign In', target: 'Passwort zurücksetzen & Anmelden' },
    { source: 'Unable to Send Code', target: 'Code kann nicht gesendet werden' },
    { source: 'Unable to Change Password', target: 'Passwortänderung nicht möglich' },

    // Email Verification
    { source: 'Email Verification', target: 'E-Mail-Verifizierung' },
    { source: 'Resend verification code', target: 'Bestätigungscode erneut senden' },
    { source: 'Verification email sent', target: 'Bestätigungs-E-Mail gesendet' },
    { source: 'Your Email is now verified', target: 'Ihre E-Mail ist jetzt verifiziert' },
    { source: 'Request is incorrect', target: 'Anforderung ist falsch' },

    // Invites
    {
      source: 'Join <span class="auth-form__accent">{0}</span>',
      target: 'Beitreten <span class="auth-form__accent">{0}</span>'
    },
    {
      source: '<strong>{0}</strong> has invited you to join <strong>{1}</strong>',
      target: '<strong>{0}</strong> hat Sie eingeladen, <strong>{1}</strong> beizutreten'
    },
    {
      source: 'Someone has invited you to join <strong>{0}</strong>',
      target: 'Jemand hat Sie eingeladen, <strong>{0}</strong> beizutreten'
    },
    {
      source: 'You are joining <strong>{0}</strong> using invite link',
      target: 'Sie treten <strong>{0}</strong> mit einem Einladungslink bei'
    },
    { source: 'Join', target: 'Beitreten' },
    { source: 'Go to home page', target: 'Zur Startseite gehen' },
    { source: 'Invite link is wrong', target: 'Einladungslink ist falsch' },
    {
      source:
        'Looks like your invitation link has expired or maybe you have followed the wrong link. Please try to ask to invite your again.',
      target:
        'Es scheint, dass Ihr Einladungslink abgelaufen ist oder dass Sie dem falschen Link gefolgt sind. Bitte versuchen Sie, Ihre Einladung erneut anzufordern.'
    },
    {
      source: 'Unfortunately we failed to load information about this invitation',
      target: 'Leider ist es uns nicht gelungen, Informationen zu dieser Einladung zu laden'
    },

    // Users & Teams
    { source: 'Members of {0}', target: 'Mitglieder von {0}' },
    { source: 'How to get started', target: 'Wie man anfängt' },
    { source: 'Users API', target: 'Benutzer-API' },
    { source: 'Teams API', target: 'Teams-API' },
    { source: 'Invite Member', target: 'Mitglied einladen' },
    { source: 'Add User property', target: 'Benutzereigenschaft hinzufügen' },
    { source: 'Add Team property', target: 'Teameigenschaft hinzufügen' },
    { source: 'Edit property', target: 'Eigenschaft bearbeiten' },
    { source: 'Delete property', target: 'Eigenschaft löschen' },
    { source: 'Users', target: 'Benutzer' },
    { source: 'Teams', target: 'Teams' },
    { source: 'Search members', target: 'Mitglieder suchen' },
    { source: 'Search teams', target: 'Teams suchen' },
    { source: '{0} pages', target: '{0} Seiten' },
    { source: 'No members', target: 'Keine Mitglieder' }
  ]
};

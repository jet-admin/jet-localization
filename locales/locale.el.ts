import { Locale } from './locale';

export const locale: Locale = {
  name: 'greek',
  language: 'el',
  items: [
    // General
    { source: 'Save', target: 'Αποθήκευση' },
    { source: 'Create', target: 'Δημιουργία' },
    { source: 'Duplicating', target: 'Αντιγραφή' },
    { source: 'Duplicate', target: 'Διπλότυπο' },
    { source: 'Mass Edit', target: 'Μαζική επεξεργασία' },
    { source: 'Export', target: 'Εξαγωγή' },
    { source: 'Import', target: 'Εισαγωγή' },
    { source: 'Delete', target: 'Διαγραφή' },
    { source: 'Continue', target: 'Συνέχεια' },
    { source: 'Submit', target: 'Υποβολή' },
    { source: 'Cancel', target: 'Ακύρωση' },
    { source: 'Loading', target: 'Φόρτωση' },
    { source: 'Please wait...', target: 'Παρακαλώ περιμένετε...' },
    { source: 'Loading failed', target: 'Η φόρτωση απέτυχε' },
    { source: 'Unknown error', target: 'Άγνωστο σφάλμα' },
    { source: 'Add', target: 'Προσθήκη' },
    { source: 'or', target: 'ή' },
    { source: 'Hours', target: 'Ώρες' },
    { source: 'Minutes', target: 'Λεπτά' },
    { source: 'Seconds', target: 'Δευτερόλεπτα' },
    { source: 'Saved', target: 'Αποθηκεύτηκε' },
    { source: 'Error', target: 'Σφάλμα' },
    { source: 'Page not found', target: 'Η σελίδα δεν βρέθηκε' },
    {
      source: 'The specified address is incorrect, or the page does not exist',
      target: 'Η διεύθυνση που καθορίσατε είναι λανθασμένη ή η σελίδα δεν υπάρχει'
    },
    { source: 'Not allowed', target: 'Δεν επιτρέπεται' },
    {
      source: "You don't have permissions to access this page",
      target: 'Δεν έχετε άδεια για να εισέλθετε σε αυτή τη σελίδα'
    },
    { source: 'Are you sure want to close?', target: 'Είστε βέβαιοι ότι θέλετε να κλείσετε;' },
    { source: 'Close', target: 'Κλείσιμο' },

    // Actions
    { source: 'Action executed', target: 'Η ενέργεια εκτελέστηκε' },
    { source: 'Action executed successfully', target: 'Η ενέργεια εκτελέστηκε επιτυχώς' },
    { source: 'Action failed', target: 'Η ενέργεια απέτυχε' },
    {
      source: "You don't have permission for run this operation",
      target: 'Δεν έχετε άδεια να εκτελέσετε αυτή την ενέργεια'
    },
    { source: 'Specify parameters', target: 'Καθορίστε παραμέτρους' },
    { source: 'Executing action', target: 'Εκτέλεση ενέργειας' },
    { source: 'You are executing <strong>{0}</strong>', target: 'Εκτελείτε <strong>{0}</strong>' },
    { source: 'Please fill in the parameters below.', target: 'Παρακαλώ συμπληρώστε τις παρακάτω παραμέτρους.' },
    { source: 'Execute', target: 'Εκτέλεση' },
    { source: 'Executing', target: 'Εκτελείται' },
    { source: 'Finished', target: 'Ολοκληρώθηκε' },
    { source: 'Done', target: 'Ολοκλήρωση' },

    // Export
    { source: 'Records Export', target: 'Εξαγωγή εγγραφών' },
    { source: 'Downloading records data as a file', target: 'Λήψη δεδομένων εγγραφών ως αρχείο' },
    { source: 'Choose format', target: 'Επιλέξτε μορφή' },
    { source: 'Number of exporting records', target: 'Αριθμός εξαγόμενων εγγραφών' },
    { source: { label: 'Export', context: 'submit' }, target: 'Εξαγωγή' },
    { source: 'Exporting', target: 'Εξάγεται' },
    { source: 'Export completed', target: 'Η εξαγωγή ολοκληρώθηκε' },
    { source: 'Failed to export', target: 'Η εξαγωγή απέτυχε' },

    // Components
    { source: 'optional', target: 'προαιρετικό' },
    { source: 'choose', target: 'επιλέξτε' },
    { source: 'Clear value', target: 'Καθαρισμός τιμής' },
    { source: 'loading...', target: 'φορτώνει...' },
    { source: 'Nothing found', target: 'Δεν βρέθηκε τίποτα' },
    { source: 'Search...', target: 'Αναζήτηση...' },
    { source: 'Enter at least {0} characters', target: 'Εισάγετε τουλάχιστον {0} χαρακτήρες' },
    { source: 'No options', target: 'Χωρίς επιλογές' },
    { source: 'Drop files here or', target: 'Σύρετε αρχεία εδώ ή' },
    { source: 'Upload new', target: 'Ανεβάστε νέο' },
    { source: 'Clear', target: 'Καθαρισμός' },
    { source: 'Download', target: 'Λήψη' },
    { source: 'Choose file', target: 'Επιλέξτε αρχείο' },
    { source: 'Choose files', target: 'Επιλέξτε αρχεία' },
    { source: 'Scan with Camera', target: 'Σάρωση με κάμερα' },
    { source: 'Scan Image file', target: 'Σάρωση αρχείου εικόνας' },
    { source: 'Choose camera', target: 'Επιλέξτε κάμερα' },
    { source: 'Stop scanning', target: 'Διακοπή σάρωσης' },
    { source: 'Scan again', target: 'Σάρωση ξανά' },
    { source: 'Use this scan', target: 'Χρησιμοποιήστε αυτή τη σάρωση' },
    { source: 'Failed to scan', target: 'Η σάρωση απέτυχε' },
    {
      source: 'Code failed to scan, please try another image',
      target: 'Η σάρωση του κώδικα απέτυχε, παρακαλώ δοκιμάστε άλλη εικόνα'
    },
    { source: 'current', target: 'τρέχουσα' },
    { source: 'Day', target: 'Ημέρα' },
    { source: 'Week', target: 'Εβδομάδα' },
    { source: 'Month', target: 'Μήνας' },
    { source: 'Year', target: 'Έτος' },
    { source: 'Today', target: 'Σήμερα' },
    { source: 'Daily', target: 'Καθημερινά' },
    { source: 'Weekly', target: 'Εβδομαδιαία' },
    { source: 'Monthly', target: 'Μηνιαία' },
    { source: 'Quarterly', target: 'Τριμηνιαία' },
    { source: 'Yearly', target: 'Ετησίως' },
    { source: 'Hourly', target: 'Ανά ώρα' },
    { source: 'Minutely', target: 'Ανά λεπτό' },
    { source: 'Since', target: 'Από' },
    { source: 'Before', target: 'Πριν' },
    { source: 'Between', target: 'Μεταξύ' },
    { source: 'From date', target: 'Από ημερομηνία' },
    { source: 'To date', target: 'Μέχρι ημερομηνία' },
    { source: 'Coordinates', target: 'Συντεταγμένες' },
    { source: 'Latitude', target: 'Γεωγραφικό πλάτος' },
    { source: 'Longitude', target: 'Γεωγραφικό μήκος' },
    { source: 'Default color', target: 'Προεπιλεγμένο χρώμα' },
    { source: 'not specified', target: 'δεν καθορίζεται' },
    { source: 'Sign using your finger or pointer', target: 'Υπογράψτε χρησιμοποιώντας το δάχτυλό σας ή τον δείκτη' },

    // List components
    { source: 'Filter', target: 'Φίλτρο' },
    { source: 'Filter by field', target: 'Φίλτρο ανά πεδίο' },
    { source: 'Filter by...', target: 'Φίλτρο ανά...' },
    { source: 'Back', target: 'Πίσω' },
    { source: 'Back to {0} fields', target: 'Επιστροφή στα πεδία {0}' },
    { source: 'Choose {0} from list', target: 'Επιλέξτε {0} από τη λίστα' },
    { source: '{0} fields', target: 'πεδία {0}' },
    { source: '{0} relationships', target: 'σχέσεις {0}' },
    { source: 'Aggregate {0}', target: 'Συγκεντρώστε {0}' },
    { source: 'No fields to select', target: 'Δεν υπάρχουν πεδία για επιλογή' },
    { source: 'Enter value...', target: 'Εισάγετε τιμή...' },
    { source: 'Exclude', target: 'Εξαίρεση' },
    { source: 'Actions', target: 'Ενέργειες' },
    { source: 'Search', target: 'Αναζήτηση' },
    { source: 'Sort 1 → 9', target: 'Ταξινόμηση 1 → 9' },
    { source: 'Sort 9 → 1', target: 'Ταξινόμηση 9 → 1' },
    { source: 'Sort A → Z', target: 'Ταξινόμηση Α → Ζ' },
    { source: 'Sort Z → A', target: 'Ταξινόμηση Ζ → Α' },
    { source: 'Refresh automatically', target: 'Ανανέωση αυτόματα' },
    { source: 'All', target: 'Όλα' },
    { source: 'Selected', target: 'Επιλεγμένα' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'Δυστυχώς, δεν βρέθηκαν {0} που να ταιριάζουν με το ερώτημά σας'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'Φορτώνουμε {0}, παρακαλώ περιμένετε...' },
    { source: 'Add filter', target: 'Προσθήκη φίλτρου' },
    { source: 'Delete this filter', target: 'Διαγραφή αυτού του φίλτρου' },
    { source: 'Toggle ordering', target: 'Εναλλαγή ταξινόμησης' },
    { source: 'Not configured', target: 'Δεν έχει ρυθμιστεί' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'Δυστυχώς, αυτό το στοιχείο δεν έχει ακόμη ρυθμιστεί'
    },
    { source: 'records', target: 'εγγραφές' },
    { source: '{0} items', target: '{0} στοιχεία' },

    // Menu
    { source: 'Users & Teams', target: 'Χρήστες & Ομάδες' },
    { source: 'Billing', target: 'Χρέωση' },
    { source: 'Billing & Plans', target: 'Χρέωση & Σχέδια' },
    { source: 'API keys', target: 'Κλειδιά API' },
    { source: 'Dark Mode', target: 'Σκούρη λειτουργία' },
    { source: 'Light Mode', target: 'Φωτεινή λειτουργία' },
    { source: 'Disable Staff', target: 'Απενεργοποίηση Προσωπικού' },
    { source: 'Enable Staff', target: 'Ενεργοποίηση Προσωπικού' },
    { source: 'Manage Templates', target: 'Διαχείριση Προτύπων' },
    { source: 'Logout', target: 'Αποσύνδεση' },
    { source: 'Activity Log', target: 'Καταγραφή Δραστηριότητας' },
    { source: 'Collaborations', target: 'Συνεργασίες' },
    { source: 'Open Visual Builder', target: 'Άνοιγμα Οπτικού Κατασκευαστή' },

    // Filters
    { source: 'equals', target: 'ισούται' },
    { source: 'does not equal', target: 'δεν ισούται' },
    { source: '{0} equals {1}', target: '{0} ισούται με {1}' },
    { source: '{0} does not equal {1}', target: '{0} δεν ισούται με {1}' },

    { source: 'contains', target: 'περιέχει' },
    { source: 'does not contain', target: 'δεν περιέχει' },
    { source: '{0} contains {1}', target: '{0} περιέχει {1}' },
    { source: '{0} not contains {1}', target: '{0} δεν περιέχει {1}' },

    { source: 'starts with', target: 'ξεκινάει με' },
    { source: 'does not start with', target: 'δεν ξεκινάει με' },
    { source: '{0} starts with {1}', target: '{0} ξεκινάει με {1}' },
    { source: '{0} does not start with {1}', target: '{0} δεν ξεκινάει με {1}' },

    { source: 'ends with', target: 'τελειώνει με' },
    { source: 'does not end with', target: 'δεν τελειώνει με' },
    { source: '{0} ends with {1}', target: '{0} τελειώνει με {1}' },
    { source: '{0} does not end with {1}', target: '{0} δεν τελειώνει με {1}' },

    { source: 'greater than', target: 'μεγαλύτερο από' },
    { source: 'is not greater than', target: 'δεν είναι μεγαλύτερο από' },
    { source: '{0} is greater than {1}', target: '{0} είναι μεγαλύτερο από {1}' },
    { source: '{0} not greater than {1}', target: '{0} δεν είναι μεγαλύτερο από {1}' },

    { source: 'greater than or equals', target: 'μεγαλύτερο ή ίσο' },
    { source: 'is not greater than or equals', target: 'δεν είναι μεγαλύτερο ή ίσο' },
    { source: '{0} is greater than or equals {1}', target: '{0} είναι μεγαλύτερο ή ίσο με {1}' },
    { source: '{0} is not greater than or equals {1}', target: '{0} δεν είναι μεγαλύτερο ή ίσο με {1}' },

    { source: 'less than', target: 'λιγότερο από' },
    { source: 'is not less than', target: 'δεν είναι λιγότερο από' },
    { source: '{0} is less than {1}', target: '{0} είναι λιγότερο από {1}' },
    { source: '{0} is not less than {1}', target: '{0} δεν είναι λιγότερο από {1}' },

    { source: 'less than or equals', target: 'λιγότερο ή ίσο' },
    { source: 'is not less than or equals', target: 'δεν είναι λιγότερο ή ίσο' },
    { source: '{0} is less than or equals {1}', target: '{0} είναι λιγότερο ή ίσο με {1}' },
    { source: '{0} is not less than or equals {1}', target: '{0} δεν είναι λιγότερο ή ίσο με {1}' },

    { source: 'one of', target: 'ένα από' },
    { source: 'is one of', target: 'είναι ένα από' },
    { source: 'is not one of', target: 'δεν είναι ένα από' },
    { source: '{0} is one of {1}', target: '{0} είναι ένα από {1}' },
    { source: '{0} is not one of {1}', target: '{0} δεν είναι ένα από {1}' },

    { source: 'is null', target: 'είναι κενό' },
    { source: 'is not null', target: 'δεν είναι κενό' },
    { source: '{0} is null', target: '{0} είναι κενό' },
    { source: '{0} is not null', target: '{0} δεν είναι κενό' },

    { source: 'is future', target: 'είναι στο μέλλον' },
    { source: 'in the future', target: 'στο μέλλον' },
    { source: 'is not in the future', target: 'δεν είναι στο μέλλον' },
    { source: '{0} is in the future', target: '{0} είναι στο μέλλον' },
    { source: '{0} is not in the future', target: '{0} δεν είναι στο μέλλον' },

    { source: 'is past', target: 'είναι στο παρελθόν' },
    { source: 'in the past', target: 'στο παρελθόν' },
    { source: 'is not in the past', target: 'δεν είναι στο παρελθόν' },
    { source: '{0} is in the past', target: '{0} είναι στο παρελθόν' },
    { source: '{0} is not in the past', target: '{0} δεν είναι στο παρελθόν' },

    { source: 'is Today', target: 'είναι σήμερα' },
    { source: 'today', target: 'σήμερα' },
    { source: 'is not today', target: 'δεν είναι σήμερα' },
    { source: '{0} is today', target: '{0} είναι σήμερα' },
    { source: '{0} is not today', target: '{0} δεν είναι σήμερα' },

    { source: 'is Yesterday', target: 'είναι χθες' },
    { source: 'yesterday', target: 'χθες' },
    { source: 'is not yesterday', target: 'δεν είναι χθες' },
    { source: '{0} is yesterday', target: '{0} είναι χθες' },
    { source: '{0} is not yesterday', target: '{0} δεν είναι χθες' },

    { source: 'is Last Week', target: 'είναι την προηγούμενη εβδομάδα' },
    { source: 'last week', target: 'την προηγούμενη εβδομάδα' },
    { source: 'is not last week', target: 'δεν είναι την προηγούμενη εβδομάδα' },
    { source: '{0} is last week', target: '{0} είναι την προηγούμενη εβδομάδα' },
    { source: '{0} is not last week', target: '{0} δεν είναι την προηγούμενη εβδομάδα' },

    { source: 'is Last Month', target: 'είναι τον προηγούμενο μήνα' },
    { source: 'last month', target: 'τον προηγούμενο μήνα' },
    { source: 'is not last month', target: 'δεν είναι τον προηγούμενο μήνα' },
    { source: '{0} is last month', target: '{0} είναι τον προηγούμενο μήνα' },
    { source: '{0} is not last month', target: '{0} δεν είναι τον προηγούμενο μήνα' },

    { source: 'is Last Quarter', target: 'είναι το τελευταίο τρίμηνο' },
    { source: 'last quarter', target: 'το τελευταίο τρίμηνο' },
    { source: 'is not last quarter', target: 'δεν είναι το τελευταίο τρίμηνο' },
    { source: '{0} is last quarter', target: '{0} είναι το τελευταίο τρίμηνο' },
    { source: '{0} is not last quarter', target: '{0} δεν είναι το τελευταίο τρίμηνο' },

    { source: 'is Last Year', target: 'είναι το προηγούμενο έτος' },
    { source: 'last year', target: 'το προηγούμενο έτος' },
    { source: 'is not last year', target: 'δεν είναι το προηγούμενο έτος' },
    { source: '{0} is last year', target: '{0} είναι το προηγούμενο έτος' },
    { source: '{0} is not last year', target: '{0} δεν είναι το προηγούμενο έτος' },

    { source: 'is Last X Days', target: 'είναι τις τελευταίες X ημέρες' },
    { source: 'last X days', target: 'τις τελευταίες X ημέρες' },
    { source: 'is not last X days', target: 'δεν είναι τις τελευταίες X ημέρες' },
    { source: '{0} is last {1} days', target: '{0} είναι τις τελευταίες {1} ημέρες' },
    { source: '{0} is not last {1} days', target: '{0} δεν είναι τις τελευταίες {1} ημέρες' },

    { source: 'is Current Week', target: 'είναι την τρέχουσα εβδομάδα' },
    { source: 'current week', target: 'την τρέχουσα εβδομάδα' },
    { source: 'is not current week', target: 'δεν είναι την τρέχουσα εβδομάδα' },
    { source: '{0} is current week', target: '{0} είναι την τρέχουσα εβδομάδα' },
    { source: '{0} is not current week', target: '{0} δεν είναι την τρέχουσα εβδομάδα' },

    { source: 'is Current Month', target: 'είναι τον τρέχοντα μήνα' },
    { source: 'current month', target: 'τον τρέχοντα μήνα' },
    { source: 'is not current month', target: 'δεν είναι τον τρέχοντα μήνα' },
    { source: '{0} is current month', target: '{0} είναι τον τρέχοντα μήνα' },
    { source: '{0} is not current month', target: '{0} δεν είναι τον τρέχοντα μήνα' },

    { source: 'is Current Quarter', target: 'είναι το τρέχον τρίμηνο' },
    { source: 'current quarter', target: 'το τρέχον τρίμηνο' },
    { source: 'is not current quarter', target: 'δεν είναι το τρέχον τρίμηνο' },
    { source: '{0} is current quarter', target: '{0} είναι το τρέχον τρίμηνο' },
    { source: '{0} is not current quarter', target: '{0} δεν είναι το τρέχον τρίμηνο' },

    { source: 'is Current Year', target: 'είναι το τρέχον έτος' },
    { source: 'current year', target: 'το τρέχον έτος' },
    { source: 'is not current year', target: 'δεν είναι το τρέχον έτος' },
    { source: '{0} is current year', target: '{0} είναι το τρέχον έτος' },
    { source: '{0} is not current year', target: '{0} δεν είναι το τρέχον έτος' },

    { source: 'is Previous Week', target: 'είναι την προηγούμενη εβδομάδα' },
    { source: 'previous week', target: 'την προηγούμενη εβδομάδα' },
    { source: 'is not previous week', target: 'δεν είναι την προηγούμενη εβδομάδα' },
    { source: '{0} is previous week', target: '{0} είναι την προηγούμενη εβδομάδα' },
    { source: '{0} is not previous week', target: '{0} δεν είναι την προηγούμενη εβδομάδα' },

    { source: 'is Previous Month', target: 'είναι τον προηγούμενο μήνα' },
    { source: 'previous month', target: 'τον προηγούμενο μήνα' },
    { source: 'is not previous month', target: 'δεν είναι τον προηγούμενο μήνα' },
    { source: '{0} is previous month', target: '{0} είναι τον προηγούμενο μήνα' },
    { source: '{0} is not previous month', target: '{0} δεν είναι τον προηγούμενο μήνα' },

    { source: 'is Previous Quarter', target: 'είναι το προηγούμενο τρίμηνο' },
    { source: 'previous quarter', target: 'το προηγούμενο τρίμηνο' },
    { source: 'is not previous quarter', target: 'δεν είναι το προηγούμενο τρίμηνο' },
    { source: '{0} is previous quarter', target: '{0} είναι το προηγούμενο τρίμηνο' },
    { source: '{0} is not previous quarter', target: '{0} δεν είναι το προηγούμενο τρίμηνο' },

    { source: 'is Previous Year', target: 'είναι το προηγούμενο έτος' },
    { source: 'previous year', target: 'το προηγούμενο έτος' },
    { source: 'is not previous year', target: 'δεν είναι το προηγούμενο έτος' },
    { source: '{0} is previous year', target: '{0} είναι το προηγούμενο έτος' },
    { source: '{0} is not previous year', target: '{0} δεν είναι το προηγούμενο έτος' },

    { source: 'is Previous X Days', target: 'είναι τις προηγούμενες X ημέρες' },
    { source: 'previous X days', target: 'τις προηγούμενες X ημέρες' },
    { source: 'is not previous X days', target: 'δεν είναι τις προηγούμενες X ημέρες' },
    { source: '{0} is previous {1} days', target: '{0} είναι τις προηγούμενες {1} ημέρες' },
    { source: '{0} is not previous {1} days', target: '{0} δεν είναι τις προηγούμενες {1} ημέρες' },

    { source: 'is empty', target: 'είναι κενό' },
    { source: 'is not empty', target: 'δεν είναι κενό' },
    { source: '{0} is empty', target: '{0} είναι κενό' },
    { source: '{0} is not empty', target: '{0} δεν είναι κενό' },

    { source: 'covered by', target: 'καλυμμένο από' },
    { source: 'is not covered by', target: 'δεν είναι καλυμμένο από' },
    { source: '{0} covered by {1}', target: '{0} καλύπτεται από {1}' },
    { source: '{0} is not covered by {1}', target: '{0} δεν καλύπτεται από {1}' },

    // Activity log
    { source: 'No activities found', target: 'Δεν βρέθηκαν δραστηριότητες' },
    {
      source: 'Start to working with data to log activities.',
      target: 'Ξεκινήστε να εργάζεστε με δεδομένα για να καταγράφετε δραστηριότητες.'
    },
    { source: 'All Activity', target: 'Όλη τη Δραστηριότητα' },
    { source: 'Create Record', target: 'Δημιουργία Εγγραφής' },
    { source: 'Update Record', target: 'Ενημέρωση Εγγραφής' },
    { source: 'Delete Record', target: 'Διαγραφή Εγγραφής' },
    { source: 'All Members', target: 'Όλα τα Μέλη' },

    // Collaboration
    { source: 'Timeline', target: 'Χρονολόγιο' },
    { source: 'Messages', target: 'Μηνύματα' },
    { source: 'Activity', target: 'Δραστηριότητα' },
    { source: 'Start chatting with your team', target: 'Ξεκινήστε να συνομιλείτε με την ομάδα σας' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'Πάρτε ένα μήνυμα σχετικά με την τρέχουσα σελίδα για να κρατήσετε σημειώσεις σημαντικών πληροφοριών.'
    },
    { source: 'Your Message', target: 'Το μήνυμά σας' },
    { source: 'Send', target: 'Αποστολή' },

    // Share
    { source: 'Invite members', target: 'Προσκαλέστε μέλη' },
    { source: 'Public share', target: 'Δημόσια κοινοποίηση' },
    { source: 'Sign Up', target: 'Εγγραφή' },
    { source: 'Members', target: 'Μέλη' },
    { source: 'Invite with Email', target: 'Πρόσκληση μέσω email' },
    { source: 'Invite someone...', target: 'Προσκαλέστε κάποιον...' },
    { source: 'Send Invite', target: 'Αποστολή πρόσκλησης' },
    {
      source: 'Limit access to your data by user properties',
      target: 'Περιορίστε την πρόσβαση στα δεδομένα σας ανά ιδιότητες χρήστη'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: 'Εισαγάγετε το email του χρήστη που θέλετε να προσκαλέσετε για να συνεργαστεί.'
    },
    { source: 'Copy', target: 'Αντιγραφή' },
    { source: 'Invite with Link', target: 'Πρόσκληση με σύνδεσμο' },
    { source: 'Remove link', target: 'Αφαίρεση συνδέσμου' },
    { source: 'Add Invite Link', target: 'Προσθήκη συνδέσμου πρόσκλησης' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'Οποιοσδήποτε στο διαδίκτυο με αυτόν το σύνδεσμο θα μπορεί να ενταχθεί στην επιλεγμένη ομάδα.'
    },
    { source: 'Pending Invites', target: 'Εκκρεμείς προσκλήσεις' },
    { source: 'Cancel invite', target: 'Ακύρωση πρόσκλησης' },
    { source: 'Active Members', target: 'Ενεργά Μέλη' },
    { source: 'Remove member', target: 'Αφαίρεση μέλους' },
    { source: 'You are setting sharing for the current page', target: 'Ορίζετε κοινοποίηση για την τρέχουσα σελίδα' },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'Ορίζετε κοινοποίηση για όλες τις σελίδες της Εφαρμογής σας.'
    },
    { source: 'Public access link', target: 'Σύνδεσμος δημόσιας πρόσβασης' },
    { source: 'Updating public access...', target: 'Ενημέρωση δημόσιας πρόσβασης...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'Οποιοσδήποτε με αυτόν το σύνδεσμο θα μπορεί να δει την τρέχουσα σελίδα. Με αυτόν τον τρόπο μπορείτε επίσης να ενσωματώσετε την τρέχουσα σελίδα σε άλλο ιστότοπο.'
    },
    { source: 'Embed code (IFRAME)', target: 'Ενσωμάτωση κώδικα (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target:
        'Επικολλήστε αυτόν τον κώδικα στον HTML κώδικα του ιστότοπού σας όπου θέλετε να εμφανίζεται η τρέχουσα σελίδα.'
    },
    { source: 'link', target: 'σύνδεσμος' },
    { source: 'invited', target: 'προσκεκλημένου' },
    { source: 'Choose Team', target: 'Επιλέξτε Ομάδα' },
    { source: 'App Teams', target: 'Ομάδες Εφαρμογής' },
    { source: 'Built-In Teams', target: 'Ενσωματωμένες Ομάδες' },
    { source: 'Clear Team', target: 'Απαλοιφή Ομάδας' },
    {
      source: 'Can build application and modify data',
      target: 'Μπορεί να κατασκευάσει εφαρμογή και να τροποποιήσει δεδομένα'
    },
    { source: 'Can modify data in application', target: 'Μπορεί να τροποποιήσει δεδομένα στην εφαρμογή' },
    { source: 'Can only view data without modification', target: 'Μπορεί να δει μόνο δεδομένα χωρίς τροποποιήσεις' },
    { source: 'Add Team', target: 'Προσθήκη Ομάδας' },
    { source: 'Edit Team', target: 'Επεξεργασία Ομάδας' },
    { source: 'Adding Team', target: 'Προσθήκη Ομάδας' },
    {
      source: 'Keep control over who has access to current App',
      target: 'Διατηρήστε τον έλεγχο για το ποιος έχει πρόσβαση στην τρέχουσα Εφαρμογή'
    },
    { source: 'Enter Team Name', target: 'Εισαγάγετε Όνομα Ομάδας' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'Πληκτρολογήστε το όνομα της ομάδας, π.χ.: Υποστήριξη, Πωλήσεις, Μάρκετινγκ κλπ.'
    },
    { source: 'Add a new member to this team.', target: 'Προσθέστε ένα νέο μέλος σε αυτή την ομάδα.' },
    { source: 'Invite new member', target: 'Πρόσκληση νέου μέλους' },
    { source: 'User', target: 'Χρήστης' },
    { source: 'Date Added', target: 'Ημερομηνία Προσθήκης' },
    { source: 'You', target: 'Εσείς' },
    { source: 'Edit', target: 'Επεξεργασία' },
    { source: 'No users in this team', target: 'Δεν υπάρχουν χρήστες σε αυτή την ομάδα' },
    { source: 'Page Permissions', target: 'Δικαιώματα Σελίδας' },
    { source: 'App Permissions', target: 'Δικαιώματα Εφαρμογής' },
    { source: 'Properties', target: 'Ιδιότητες' },
    { source: 'Page name', target: 'Όνομα Σελίδας' },
    { source: 'Access', target: 'Πρόσβαση' },
    { source: 'Full Access', target: 'Πλήρης Πρόσβαση' },
    { source: 'Read Only', target: 'Μόνο Ανάγνωση' },
    { source: 'No Access', target: 'Χωρίς Πρόσβαση' },
    { source: 'Read', target: 'Ανάγνωση' },
    { source: 'Update', target: 'Ενημέρωση' },
    { source: 'Write', target: 'Γράψιμο' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'Διαγραφή' },
    { source: 'Custom Access', target: 'Προσαρμοσμένη Πρόσβαση' },
    {
      source: 'Read, create, update and delete data',
      target: 'Ανάγνωση, δημιουργία, ενημέρωση και διαγραφή δεδομένων'
    },
    { source: 'Choose allowed operations granularly', target: 'Επιλέξτε επιτρεπόμενες λειτουργίες λεπτομερώς' },
    { source: 'Without any access to data', target: 'Χωρίς πρόσβαση σε δεδομένα' },
    { source: 'Name', target: 'Όνομα' },
    { source: 'Active', target: 'Ενεργός' },
    { source: 'Settings', target: 'Ρυθμίσεις' },
    { source: 'Members and Teams', target: 'Μέλη και Ομάδες' },
    { source: 'App Builder', target: 'Κατασκευαστής Εφαρμογής' },
    { source: 'Collection Permissions', target: 'Δικαιώματα Συλλογής' },
    { source: "Grant permissions to app's collection", target: 'Εκχώρηση δικαιωμάτων στη συλλογή της εφαρμογής' },
    { source: 'Collection', target: 'Συλλογή' },
    {
      source: 'Limit access to your data by team properties',
      target: 'Περιορίστε την πρόσβαση στα δεδομένα σας με βάση τις ιδιότητες της ομάδας'
    },
    { source: 'Save Team', target: 'Αποθήκευση Ομάδας' },
    { source: 'Create Team', target: 'Δημιουργία Ομάδας' },
    { source: 'Value', target: 'Αξία' },
    { source: 'No properties specified', target: 'Δεν ορίστηκαν ιδιότητες' },

    // Navigation
    { source: 'Current App', target: 'Τρέχουσα Εφαρμογή' },
    { source: 'Home', target: 'Αρχική Σελίδα' },

    // Profile
    {
      source: 'We are fetching user data, please, wait...',
      target: 'Φορτώνουμε δεδομένα χρήστη, παρακαλώ περιμένετε...'
    },
    { source: 'Profile Settings', target: 'Ρυθμίσεις Προφίλ' },
    { source: 'Basic information about your account.', target: 'Βασικές πληροφορίες για το λογαριασμό σας.' },
    { source: 'Photo', target: 'Φωτογραφία' },
    { source: 'your photo', target: 'η φωτογραφία σας' },
    { source: 'Change', target: 'Αλλαγή' },
    { source: 'Upload', target: 'Μεταφόρτωση' },
    { source: 'Photo was successfully updated', target: 'Η φωτογραφία ενημερώθηκε επιτυχώς' },
    { source: 'Photo was successfully deleted', target: 'Η φωτογραφία διαγράφηκε επιτυχώς' },
    { source: 'First Name', target: 'Όνομα' },
    { source: 'Last Name', target: 'Επώνυμο' },
    { source: 'Your Email', target: 'Το email σας' },
    { source: 'Email Change', target: 'Αλλαγή Email' },
    { source: 'New Email', target: 'Νέο Email' },
    { source: 'Change Email', target: 'Αλλαγή Email' },
    { source: 'Check your inbox', target: 'Ελέγξτε τα εισερχόμενά σας' },
    { source: 'Confirmation Email was sent to {0}', target: 'Ένα email επιβεβαίωσης στάλθηκε στο {0}' },
    { source: 'Changing Email failed', target: 'Η αλλαγή του email απέτυχε' },
    { source: 'Password Change', target: 'Αλλαγή Κωδικού Πρόσβασης' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target:
        "Ο κωδικός πρόσβασης πρέπει να είναι αρκετά ισχυρός για να προστατεύει το λογαριασμό σας, γι'αυτό φροντίστε να είναι τουλάχιστον 12 χαρακτήρες."
    },
    { source: 'Current Password', target: 'Τρέχων Κωδικός' },
    { source: 'New Password', target: 'Νέος Κωδικός' },
    { source: 'Confirm New Password', target: 'Επιβεβαίωση Νέου Κωδικού' },
    { source: 'Change Password', target: 'Αλλαγή Κωδικού' },
    {
      source: 'Current password was successfully updated, all other sessions will be logged out shortly',
      target: 'Ο τρέχων κωδικός πρόσβασης ενημερώθηκε με επιτυχία, όλες οι άλλες συνεδρίες θα αποσυνδεθούν σύντομα'
    },
    { source: 'Saving current password failed', target: 'Η αποθήκευση του τρέχων κωδικού απέτυχε' },
    { source: 'Short password', target: 'Σύντομος κωδικός' },
    { source: "Passwords don't match", target: 'Οι κωδικοί δεν ταιριάζουν' },
    { source: 'Personal Preferences', target: 'Προσωπικές Προτιμήσεις' },
    { source: 'Language', target: 'Γλώσσα' },
    { source: 'Timezone', target: 'Ζώνη Ώρας' },
    { source: 'Current time in {0} is', target: 'Η τρέχουσα ώρα στο {0} είναι' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'Προσαρμόστε πρόσθετες προτιμήσεις για το λογαριασμό σας.'
    },
    { source: 'News & Proposals', target: 'Νέα & Προτάσεις' },
    {
      source: 'Subscribe to our updates and proposals.',
      target: 'Εγγραφείτε για τις ενημερώσεις και τις προτάσεις μας.'
    },
    { source: 'Save changes', target: 'Αποθήκευση αλλαγών' },
    { source: 'Current user was successfully updated', target: 'Ο τρέχων χρήστης ενημερώθηκε επιτυχώς' },
    { source: 'Saving current user failed', target: 'Η αποθήκευση του τρέχων χρήστη απέτυχε' },

    // My Apps
    { source: 'Type to search...', target: 'Πληκτρολογήστε για αναζήτηση...' },
    { source: 'My Apps', target: 'Οι Εφαρμογές μου' },
    { source: 'New App', target: 'Νέα Εφαρμογή' },
    { source: 'Builder', target: 'Κατασκευαστής' },
    { source: 'App', target: 'Εφαρμογή' },
    { source: 'continue install', target: 'συνέχεια εγκατάστασης' },
    { source: 'Open builder', target: 'Άνοιγμα κατασκευαστή' },
    { source: 'View published', target: 'Προβολή δημοσιευμένων' },
    { source: 'Delete App', target: 'Διαγραφή Εφαρμογής' },
    { source: 'Start from a template', target: 'Ξεκινήστε από πρότυπο' },
    { source: 'Preview', target: 'Προεπισκόπηση' },
    { source: 'Contact Support', target: 'Υποστήριξη' },
    { source: 'Documentation', target: 'Τεκμηρίωση' },
    { source: 'Feature Requests', target: 'Αιτήματα Χαρακτηριστικών' },
    { source: 'See What’s New', target: 'Δείτε τι νέο υπάρχει' },
    { source: 'Search templates...', target: 'Αναζήτηση προτύπων...' },
    { source: 'any', target: 'οποιοδήποτε' },
    { source: 'more', target: 'περισσότερα' },
    { source: 'Choose Data Source', target: 'Επιλέξτε Πηγή Δεδομένων' },
    { source: 'works with 30+ data sources', target: 'λειτουργεί με 30+ πηγές δεδομένων' },
    { source: 'Use this template', target: 'Χρησιμοποιήστε αυτό το πρότυπο' },
    { source: 'stores data in Jet Tables', target: 'αποθηκεύει δεδομένα σε Jet Tables' },
    { source: 'New Data', target: 'Νέα Δεδομένα' },
    { source: 'using {0}', target: 'χρησιμοποιώντας {0}' },
    { source: "Can't find resource you're looking for?", target: 'Δεν μπορείτε να βρείτε τη ζητούμενη πηγή;' },
    { source: 'Admin Panel', target: 'Πίνακας Διαχείρισης' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'Λίστα, δημιουργία και ενημέρωση (CRUD) λειτουργιών πάνω από τα δεδομένα σας'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target:
        'Δημιουργήστε έναν προσαρμοσμένο πίνακα διαχείρισης βάσει οποιασδήποτε βάσης δεδομένων, εφαρμογών και APIs όπως το Stripe, το Twilio και το GraphQL.'
    },
    { source: 'All Integrations', target: 'Όλες οι Ενοποιήσεις' },
    { source: 'Databases', target: 'Βάσεις Δεδομένων' },
    { source: 'APIs', target: 'APIs' },
    { source: 'Frameworks', target: 'Πλαίσια Εργασίας' },
    { source: 'Storages', target: 'Αποθηκεύσεις' },

    // Sign In
    { source: 'Good morning', target: 'Καλημέρα' },
    { source: 'Good afternoon', target: 'Καλησπέρα' },
    { source: 'Good evening', target: 'Καλό απόγευμα' },
    { source: 'Sign In', target: 'Είσοδος' },
    { source: 'Welcome Back.', target: 'Καλώς ήρθατε ξανά.' },
    { source: 'Sign in with {0}', target: 'Σύνδεση με {0}' },
    { source: 'or login with', target: 'ή συνδέσου με' },
    { source: 'Enter E-mail', target: 'Εισάγετε E-mail' },
    { source: 'Enter password', target: 'Εισάγετε κωδικό πρόσβασης' },
    { source: 'Login', target: 'Σύνδεση' },
    { source: 'Create new account', target: 'Δημιουργία νέου λογαριασμού' },
    { source: 'Forgot my password', target: 'Ξέχασα τον κωδικό μου' },
    { source: 'required', target: 'απαιτείται' },
    { source: 'incorrect Email', target: 'λανθασμένο Email' },
    { source: 'Minimum password length {0}', target: 'Ελάχιστο μήκος κωδικού {0}' },
    { source: 'Unable to Sign In', target: 'Αδυναμία σύνδεσης' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'Ξεκινήστε <span class="auth-form__accent">δωρεάν σήμερα</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target:
        'Δεν απαιτείται κάρτα. Θα έχετε όλες τις προηγμένες λειτουργίες δωρεάν κατά τη διάρκεια της 14ήμερης δοκιμής PRO.'
    },
    { source: 'Enter First Name', target: 'Εισάγετε Όνομα' },
    { source: 'Enter Last Name (optional)', target: 'Εισάγετε Επώνυμο (προαιρετικά)' },
    { source: 'Enter Email', target: 'Εισάγετε Email' },
    { source: 'Password', target: 'Κωδικός' },
    { source: 'Repeat Password', target: 'Επαναλάβετε τον Κωδικό' },
    {
      source: 'By signing in you’re okay with our',
      target: 'Με την είσοδό σας συμφωνείτε με τους'
    },
    {
      source: 'Creating an account means you’re okay with our',
      target: 'Η δημιουργία λογαριασμού σημαίνει ότι συμφωνείτε με τους'
    },
    { source: 'Terms of Service', target: 'Όρους Χρήσης' },
    { source: 'Privacy Policy', target: 'Πολιτική Απορρήτου' },
    { source: 'and', target: 'και' },
    { source: 'Create account', target: 'Δημιουργία λογαριασμού' },
    { source: 'Already have an account', target: 'Ήδη έχετε λογαριασμό' },
    { source: 'Unable to Sign Up', target: 'Αδυναμία εγγραφής' },

    // Restore password
    { source: 'Reset your password', target: 'Επαναφορά κωδικού πρόσβασης' },
    { source: 'Email Address', target: 'Διεύθυνση Email' },
    { source: 'Reset password', target: 'Επαναφορά κωδικού πρόσβασης' },
    { source: 'Return to Sign In', target: 'Επιστροφή στην Είσοδο' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'Παρακαλώ ελέγξτε το email σας – <strong>{0}</strong>. Σας έχουμε στείλει τον σύνδεσμο επιβεβαίωσης που πρέπει να ακολουθήσετε για να αλλάξετε τον κωδικό σας.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be at least 8 characters.',
      target:
        'Σχεδόν τελειώσατε, απλώς εισάγετε τον νέο σας κωδικό πρόσβασης παρακάτω. <br>Πρέπει να είναι τουλάχιστον 8 χαρακτήρες.'
    },
    { source: 'Reset password & Sign In', target: 'Επαναφορά κωδικού & Είσοδος' },
    { source: 'Unable to Send Code', target: 'Αδυναμία Αποστολής Κωδικού' },
    { source: 'Unable to Change Password', target: 'Αδυναμία Αλλαγής Κωδικού' },

    // Email Verification
    { source: 'Email Verification', target: 'Επαλήθευση Email' },
    { source: 'Resend verification code', target: 'Επαναποστολή κωδικού επαλήθευσης' },
    { source: 'Verification email sent', target: 'Το email επαλήθευσης στάλθηκε' },
    { source: 'Your Email is now verified', target: 'Το Email σας είναι επιβεβαιωμένο τώρα' },
    { source: 'Request is incorrect', target: 'Λανθασμένο αίτημα' },

    // Invites
    {
      source: 'Join <span class="auth-form__accent">{0}</span>',
      target: 'Εγγραφείτε στο <span class="auth-form__accent">{0}</span>'
    },
    {
      source: '<strong>{0}</strong> has invited you to join <strong>{1}</strong>',
      target: 'Ο/Η <strong>{0}</strong> σας προσκάλεσε να εγγραφείτε στο <strong>{1}</strong>'
    },
    {
      source: 'Someone has invited you to join <strong>{0}</strong>',
      target: 'Κάποιος σας προσκαλεί να εγγραφείτε στο <strong>{0}</strong>'
    },
    {
      source: 'You are joining <strong>{0}</strong> using invite link',
      target: 'Εγγράφεστε στο <strong>{0}</strong> χρησιμοποιώντας σύνδεσμο πρόσκλησης'
    },
    { source: 'Join', target: 'Συμμετοχή' },
    { source: 'Go to home page', target: 'Μετάβαση στην αρχική σελίδα' },
    { source: 'Invite link is wrong', target: 'Η σύνδεση πρόσκλησης είναι λανθασμένη' },
    {
      source:
        'Looks like your invitation link has expired or maybe you have followed the wrong link. Please try to ask to invite your again.',
      target:
        'Φαίνεται ότι η σύνδεση πρόσκλησής σας έχει λήξει ή ίσως ακολουθήσατε λανθασμένη σύνδεση. Παρακαλώ προσπαθήστε να σας προσκαλέσουν ξανά.'
    },
    {
      source: 'Unfortunately we failed to load information about this invitation',
      target: 'Δυστυχώς δεν καταφέραμε να φορτώσουμε πληροφορίες σχετικά με αυτή την πρόσκληση'
    },

    // Users & Teams
    { source: 'Members of {0}', target: 'Μέλη του {0}' },
    { source: 'How to get started', target: 'Πώς να ξεκινήσετε' },
    { source: 'Users API', target: 'API Χρηστών' },
    { source: 'Teams API', target: 'API Ομάδων' },
    { source: 'Invite Member', target: 'Πρόσκληση Μέλους' },
    { source: 'Add User property', target: 'Προσθήκη Ιδιότητας Χρήστη' },
    { source: 'Add Team property', target: 'Προσθήκη Ιδιότητας Ομάδας' },
    { source: 'Edit property', target: 'Επεξεργασία Ιδιότητας' },
    { source: 'Delete property', target: 'Διαγραφή Ιδιότητας' },
    { source: 'Users', target: 'Χρήστες' },
    { source: 'Teams', target: 'Ομάδες' },
    { source: 'Search members', target: 'Αναζήτηση μελών' },
    { source: 'Search teams', target: 'Αναζήτηση ομάδων' },
    { source: '{0} pages', target: '{0} σελίδες' },
    { source: 'No members', target: 'Χωρίς μέλη' }
  ]
};

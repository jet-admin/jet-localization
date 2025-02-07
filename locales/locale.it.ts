import { Locale } from './locale';

export const locale: Locale = {
  name: 'italian',
  language: 'it',
  items: [
    // General
    { source: 'Save', target: 'Salva' },
    { source: 'Create', target: 'Crea' },
    { source: 'Duplicating', target: 'Duplicando' },
    { source: 'Duplicate', target: 'Duplica' },
    { source: 'Mass Edit', target: 'Modifica in Massa' },
    { source: 'Export', target: 'Esporta' },
    { source: 'Import', target: 'Importa' },
    { source: 'Delete', target: 'Elimina' },
    { source: 'Continue', target: 'Continua' },
    { source: 'Cancel', target: 'Annulla' },
    { source: 'Loading', target: 'Caricamento' },
    { source: 'Please wait...', target: 'Attendere prego...' },
    { source: 'Loading failed', target: 'Caricamento fallito' },
    { source: 'Unknown error', target: 'Errore sconosciuto' },
    { source: 'Add', target: 'Aggiungi' },
    { source: 'or', target: 'o' },
    { source: 'Hours', target: 'Ore' },
    { source: 'Minutes', target: 'Minuti' },
    { source: 'Seconds', target: 'Secondi' },
    { source: 'Saved', target: 'Salvato' },
    { source: 'Error', target: 'Errore' },
    { source: 'Page not found', target: 'Pagina non trovata' },
    {
      source: 'The specified address is incorrect, or the page does not exist',
      target: "L'indirizzo specificato è errato o la pagina non esiste"
    },
    { source: 'Not allowed', target: 'Non consentito' },
    {
      source: "You don't have permissions to access this page",
      target: 'Non hai i permessi per accedere a questa pagina'
    },

    // Actions
    { source: 'Action executed', target: 'Azione eseguita' },
    { source: 'Action executed successfully', target: 'Azione eseguita con successo' },
    { source: 'Action failed', target: "L'azione è fallita" },
    {
      source: "You don't have permission for run this operation",
      target: 'Non hai il permesso per eseguire questa operazione'
    },
    { source: 'Specify parameters', target: 'Specificare i parametri' },
    { source: 'Executing action', target: 'Esecuzione azione' },
    { source: 'You are executing <strong>{0}</strong>', target: 'Stai eseguendo <strong>{0}</strong>' },
    { source: 'Please fill in the parameters below.', target: 'Si prega di compilare i parametri sottostanti.' },
    { source: 'Execute', target: 'Esegui' },
    { source: 'Executing', target: 'Esecuzione' },
    { source: 'Finished', target: 'Finito' },
    { source: 'Done', target: 'Fatto' },

    // Export
    { source: 'Records Export', target: 'Esportazione di record' },
    { source: 'Downloading records data as a file', target: 'Download dei dati dei record come file' },
    { source: 'Choose format', target: 'Scegli formato' },
    { source: 'Number of exporting records', target: 'Numero di record da esportare' },
    { source: { label: 'Export', context: 'submit' }, target: 'Esporta' },
    { source: 'Exporting', target: 'Esportazione' },
    { source: 'Export completed', target: 'Esportazione completata' },
    { source: 'Failed to export', target: 'Esportazione non riuscita' },

    // Components
    { source: 'optional', target: 'opzionale' },
    { source: 'choose', target: 'scegli' },
    { source: 'Clear value', target: 'Cancella valore' },
    { source: 'loading...', target: 'caricamento...' },
    { source: 'Nothing found', target: 'Nessun risultato trovato' },
    { source: 'Search...', target: 'Cerca...' },
    { source: 'Enter at least {0} characters', target: 'Inserisci almeno {0} caratteri' },
    { source: 'No options', target: 'Nessuna opzione' },
    { source: 'Drop files here or', target: 'Rilascia i file qui o' },
    { source: 'Upload new', target: 'Carica nuovo' },
    { source: 'Clear', target: 'Cancella' },
    { source: 'Download', target: 'Scarica' },
    { source: 'Choose file', target: 'Scegli file' },
    { source: 'Choose files', target: 'Scegli file' },
    { source: 'Scan with Camera', target: 'Scansiona con la fotocamera' },
    { source: 'Scan Image file', target: 'Scansiona immagine' },
    { source: 'Choose camera', target: 'Scegli fotocamera' },
    { source: 'Stop scanning', target: 'Ferma scansione' },
    { source: 'Scan again', target: 'Scansiona di nuovo' },
    { source: 'Use this scan', target: 'Usa questa scansione' },
    { source: 'Failed to scan', target: 'Scansione non riuscita' },
    {
      source: 'Code failed to scan, please try another image',
      target: "Codice non riuscito a scansionare, prova un'altra immagine"
    },
    { source: 'current', target: 'corrente' },
    { source: 'Day', target: 'Giorno' },
    { source: 'Week', target: 'Settimana' },
    { source: 'Month', target: 'Mese' },
    { source: 'Year', target: 'Anno' },
    { source: 'Today', target: 'Oggi' },
    { source: 'Daily', target: 'Quotidiano' },
    { source: 'Weekly', target: 'Settimanale' },
    { source: 'Monthly', target: 'Mensile' },
    { source: 'Quarterly', target: 'Trimestrale' },
    { source: 'Yearly', target: 'Annuale' },
    { source: 'Hourly', target: 'Ogni ora' },
    { source: 'Minutely', target: 'Ogni minuto' },
    { source: 'Since', target: 'Da' },
    { source: 'Before', target: 'Prima' },
    { source: 'Between', target: 'Tra' },
    { source: 'From date', target: 'Dalla data' },
    { source: 'To date', target: 'Alla data' },
    { source: 'Coordinates', target: 'Coordinate' },
    { source: 'Latitude', target: 'Latitudine' },
    { source: 'Longitude', target: 'Longitudine' },
    { source: 'Default color', target: 'Colore predefinito' },
    { source: 'not specified', target: 'non specificato' },
    { source: 'Sign using your finger or pointer', target: 'Firma usando il dito o il puntatore' },

    // List components
    { source: 'Filter', target: 'Filtra' },
    { source: 'Filter by field', target: 'Filtra per campo' },
    { source: 'Filter by...', target: 'Filtra per...' },
    { source: 'Back', target: 'Indietro' },
    { source: 'Back to {0} fields', target: 'Torna ai campi {0}' },
    { source: 'Choose {0} from list', target: 'Scegli {0} dalla lista' },
    { source: '{0} fields', target: 'campi {0}' },
    { source: '{0} relationships', target: 'relazioni {0}' },
    { source: 'Aggregate {0}', target: 'Aggrega {0}' },
    { source: 'No fields to select', target: 'Nessun campo da selezionare' },
    { source: 'Enter value...', target: 'Inserisci valore...' },
    { source: 'Exclude', target: 'Escludi' },
    { source: 'Actions', target: 'Azioni' },
    { source: 'Search', target: 'Cerca' },
    { source: 'Sort 1 → 9', target: 'Ordina 1 → 9' },
    { source: 'Sort 9 → 1', target: 'Ordina 9 → 1' },
    { source: 'Sort A → Z', target: 'Ordina A → Z' },
    { source: 'Sort Z → A', target: 'Ordina Z → A' },
    { source: 'Refresh automatically', target: 'Aggiorna automaticamente' },
    { source: 'All', target: 'Tutti' },
    { source: 'Selected', target: 'Selezionati' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'Purtroppo, nessun {0} corrispondente alla tua ricerca è stato trovato'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'Stiamo recuperando {0}, attendere prego...' },
    { source: 'Add filter', target: 'Aggiungi filtro' },
    { source: 'Delete this filter', target: 'Elimina questo filtro' },
    { source: 'Toggle ordering', target: 'Cambia ordinamento' },
    { source: 'Not configured', target: 'Non configurato' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'Purtroppo, questo componente non è ancora configurato'
    },
    { source: 'records', target: 'record' },
    { source: '{0} items', target: '{0} elementi' },

    // Menu
    { source: 'Users & Teams', target: 'Utenti & Squadre' },
    { source: 'Billing', target: 'Fatturazione' },
    { source: 'Billing & Plans', target: 'Fatturazione & Piani' },
    { source: 'API keys', target: 'Chiavi API' },
    { source: 'Dark Mode', target: 'Modalità Scuro' },
    { source: 'Light Mode', target: 'Modalità Chiaro' },
    { source: 'Disable Staff', target: 'Disabilita Staff' },
    { source: 'Enable Staff', target: 'Abilita Staff' },
    { source: 'Manage Templates', target: 'Gestisci Template' },
    { source: 'Logout', target: 'Esci' },
    { source: 'Activity Log', target: 'Registro Attività' },
    { source: 'Collaborations', target: 'Collaborazioni' },
    { source: 'Open Visual Builder', target: 'Apri Costruttore Visuale' },

    // Filters
    { source: 'equals', target: 'uguale a' },
    { source: 'does not equal', target: 'non uguale a' },
    { source: '{0} equals {1}', target: '{0} uguale a {1}' },
    { source: '{0} does not equal {1}', target: '{0} non uguale a {1}' },

    { source: 'contains', target: 'contiene' },
    { source: 'does not contain', target: 'non contiene' },
    { source: '{0} contains {1}', target: '{0} contiene {1}' },
    { source: '{0} not contains {1}', target: '{0} non contiene {1}' },

    { source: 'starts with', target: 'inizia con' },
    { source: 'does not start with', target: 'non inizia con' },
    { source: '{0} starts with {1}', target: '{0} inizia con {1}' },
    { source: '{0} does not start with {1}', target: '{0} non inizia con {1}' },

    { source: 'ends with', target: 'finisce con' },
    { source: 'does not end with', target: 'non finisce con' },
    { source: '{0} ends with {1}', target: '{0} finisce con {1}' },
    { source: '{0} does not end with {1}', target: '{0} non finisce con {1}' },

    { source: 'greater than', target: 'maggiore di' },
    { source: 'is not greater than', target: 'non maggiore di' },
    { source: '{0} is greater than {1}', target: '{0} maggiore di {1}' },
    { source: '{0} not greater than {1}', target: '{0} non maggiore di {1}' },

    { source: 'greater than or equals', target: 'maggiore o uguale a' },
    { source: 'is not greater than or equals', target: 'non maggiore o uguale a' },
    { source: '{0} is greater than or equals {1}', target: '{0} maggiore o uguale a {1}' },
    { source: '{0} is not greater than or equals {1}', target: '{0} non maggiore o uguale a {1}' },

    { source: 'less than', target: 'minore di' },
    { source: 'is not less than', target: 'non minore di' },
    { source: '{0} is less than {1}', target: '{0} minore di {1}' },
    { source: '{0} is not less than {1}', target: '{0} non minore di {1}' },

    { source: 'less than or equals', target: 'minore o uguale a' },
    { source: 'is not less than or equals', target: 'non minore o uguale a' },
    { source: '{0} is less than or equals {1}', target: '{0} minore o uguale a {1}' },
    { source: '{0} is not less than or equals {1}', target: '{0} non minore o uguale a {1}' },

    { source: 'one of', target: 'uno di' },
    { source: 'is one of', target: 'è uno di' },
    { source: 'is not one of', target: 'non è uno di' },
    { source: '{0} is one of {1}', target: '{0} è uno di {1}' },
    { source: '{0} is not one of {1}', target: '{0} non è uno di {1}' },

    { source: 'is null', target: 'è nullo' },
    { source: 'is not null', target: 'non è nullo' },
    { source: '{0} is null', target: '{0} è nullo' },
    { source: '{0} is not null', target: '{0} non è nullo' },

    { source: 'is future', target: 'è futuro' },
    { source: 'in the future', target: 'nel futuro' },
    { source: 'is not in the future', target: 'non è nel futuro' },
    { source: '{0} is in the future', target: '{0} è nel futuro' },
    { source: '{0} is not in the future', target: '{0} non è nel futuro' },

    { source: 'is past', target: 'è passato' },
    { source: 'in the past', target: 'nel passato' },
    { source: 'is not in the past', target: 'non è nel passato' },
    { source: '{0} is in the past', target: '{0} è nel passato' },
    { source: '{0} is not in the past', target: '{0} non è nel passato' },

    { source: 'is Today', target: 'è Oggi' },
    { source: 'today', target: 'oggi' },
    { source: 'is not today', target: 'non è oggi' },
    { source: '{0} is today', target: '{0} è oggi' },
    { source: '{0} is not today', target: '{0} non è oggi' },

    { source: 'is Yesterday', target: 'è Ieri' },
    { source: 'yesterday', target: 'ieri' },
    { source: 'is not yesterday', target: 'non è ieri' },
    { source: '{0} is yesterday', target: '{0} è ieri' },
    { source: '{0} is not yesterday', target: '{0} non è ieri' },

    { source: 'is Last Week', target: 'è la Scorsa Settimana' },
    { source: 'last week', target: 'la scorsa settimana' },
    { source: 'is not last week', target: 'non è la scorsa settimana' },
    { source: '{0} is last week', target: '{0} è la scorsa settimana' },
    { source: '{0} is not last week', target: '{0} non è la scorsa settimana' },

    { source: 'is Last Month', target: 'è il Mese Scorso' },
    { source: 'last month', target: 'il mese scorso' },
    { source: 'is not last month', target: 'non è il mese scorso' },
    { source: '{0} is last month', target: '{0} è il mese scorso' },
    { source: '{0} is not last month', target: '{0} non è il mese scorso' },

    { source: 'is Last Quarter', target: 'è l’Ultimo Trimestre' },
    { source: 'last quarter', target: 'l’ultimo trimestre' },
    { source: 'is not last quarter', target: 'non è l’ultimo trimestre' },
    { source: '{0} is last quarter', target: '{0} è l’ultimo trimestre' },
    { source: '{0} is not last quarter', target: '{0} non è l’ultimo trimestre' },

    { source: 'is Last Year', target: 'è l’Anno Scorso' },
    { source: 'last year', target: 'l’anno scorso' },
    { source: 'is not last year', target: 'non è l’anno scorso' },
    { source: '{0} is last year', target: '{0} è l’anno scorso' },
    { source: '{0} is not last year', target: '{0} non è l’anno scorso' },

    { source: 'is Last X Days', target: 'è gli Ultimi X Giorni' },
    { source: 'last X days', target: 'gli ultimi X giorni' },
    { source: 'is not last X days', target: 'non è gli ultimi X giorni' },
    { source: '{0} is last {1} days', target: '{0} è gli ultimi {1} giorni' },
    { source: '{0} is not last {1} days', target: '{0} non è gli ultimi {1} giorni' },

    { source: 'is Current Week', target: 'è la Settimana Corrente' },
    { source: 'current week', target: 'la settimana corrente' },
    { source: 'is not current week', target: 'non è la settimana corrente' },
    { source: '{0} is current week', target: '{0} è la settimana corrente' },
    { source: '{0} is not current week', target: '{0} non è la settimana corrente' },

    { source: 'is Current Month', target: 'è il Mese Corrente' },
    { source: 'current month', target: 'il mese corrente' },
    { source: 'is not current month', target: 'non è il mese corrente' },
    { source: '{0} is current month', target: '{0} è il mese corrente' },
    { source: '{0} is not current month', target: '{0} non è il mese corrente' },

    { source: 'is Current Quarter', target: 'è il Trimestre Corrente' },
    { source: 'current quarter', target: 'il trimestre corrente' },
    { source: 'is not current quarter', target: 'non è il trimestre corrente' },
    { source: '{0} is current quarter', target: '{0} è il trimestre corrente' },
    { source: '{0} is not current quarter', target: '{0} non è il trimestre corrente' },

    { source: 'is Current Year', target: 'è l’Anno Corrente' },
    { source: 'current year', target: 'l’anno corrente' },
    { source: 'is not current year', target: 'non è l’anno corrente' },
    { source: '{0} is current year', target: '{0} è l’anno corrente' },
    { source: '{0} is not current year', target: '{0} non è l’anno corrente' },

    { source: 'is Previous Week', target: 'è la Settimana Precedente' },
    { source: 'previous week', target: 'la settimana precedente' },
    { source: 'is not previous week', target: 'non è la settimana precedente' },
    { source: '{0} is previous week', target: '{0} è la settimana precedente' },
    { source: '{0} is not previous week', target: '{0} non è la settimana precedente' },

    { source: 'is Previous Month', target: 'è il Mese Precedente' },
    { source: 'previous month', target: 'il mese precedente' },
    { source: 'is not previous month', target: 'non è il mese precedente' },
    { source: '{0} is previous month', target: '{0} è il mese precedente' },
    { source: '{0} is not previous month', target: '{0} non è il mese precedente' },

    { source: 'is Previous Quarter', target: 'è il Trimestre Precedente' },
    { source: 'previous quarter', target: 'il trimestre precedente' },
    { source: 'is not previous quarter', target: 'non è il trimestre precedente' },
    { source: '{0} is previous quarter', target: '{0} è il trimestre precedente' },
    { source: '{0} is not previous quarter', target: '{0} non è il trimestre precedente' },

    { source: 'is Previous Year', target: 'è l’Anno Precedente' },
    { source: 'previous year', target: 'l’anno precedente' },
    { source: 'is not previous year', target: 'non è l’anno precedente' },
    { source: '{0} is previous year', target: '{0} è l’anno precedente' },
    { source: '{0} is not previous year', target: '{0} non è l’anno precedente' },

    { source: 'is Previous X Days', target: 'è gli X Giorni Precedenti' },
    { source: 'previous X days', target: 'gli X giorni precedenti' },
    { source: 'is not previous X days', target: 'non è gli X giorni precedenti' },
    { source: '{0} is previous {1} days', target: '{0} è gli {1} giorni precedenti' },
    { source: '{0} is not previous {1} days', target: '{0} non è gli {1} giorni precedenti' },

    { source: 'is empty', target: 'è vuoto' },
    { source: 'is not empty', target: 'non è vuoto' },
    { source: '{0} is empty', target: '{0} è vuoto' },
    { source: '{0} is not empty', target: '{0} non è vuoto' },

    { source: 'covered by', target: 'coperto da' },
    { source: 'is not covered by', target: 'non coperto da' },
    { source: '{0} covered by {1}', target: '{0} coperto da {1}' },
    { source: '{0} is not covered by {1}', target: '{0} non coperto da {1}' },

    // Activity log
    { source: 'No activities found', target: 'Nessuna attività trovata' },
    {
      source: 'Start to working with data to log activities.',
      target: 'Inizia a lavorare con i dati per registrare le attività.'
    },
    { source: 'All Activity', target: 'Tutta l’Attività' },
    { source: 'Create Record', target: 'Crea Record' },
    { source: 'Update Record', target: 'Aggiorna Record' },
    { source: 'Delete Record', target: 'Elimina Record' },
    { source: 'All Members', target: 'Tutti i Membri' },

    // Collaboration
    { source: 'Timeline', target: 'Timeline' },
    { source: 'Messages', target: 'Messaggi' },
    { source: 'Activity', target: 'Attività' },
    { source: 'Start chatting with your team', target: 'Inizia a chattare con il tuo team' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'Prendi un messaggio sulla pagina corrente per tenere traccia delle informazioni importanti.'
    },
    { source: 'Your Message', target: 'Il Tuo Messaggio' },
    { source: 'Send', target: 'Invia' },

    // Share
    { source: 'Invite members', target: 'Invita membri' },
    { source: 'Public share', target: 'Condividi pubblicamente' },
    { source: 'Sign Up', target: 'Iscriviti' },
    { source: 'Members', target: 'Membri' },
    { source: 'Invite with Email', target: 'Invita via Email' },
    { source: 'Invite someone...', target: 'Invita qualcuno...' },
    { source: 'Send Invite', target: 'Invia invito' },
    {
      source: 'Limit access to your data by user properties',
      target: "Limita l'accesso ai tuoi dati in base alle proprietà dell'utente"
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: "Inserisci l'email dell'utente che vorresti invitare a collaborare."
    },
    { source: 'Copy', target: 'Copia' },
    { source: 'Invite with Link', target: 'Invita con Link' },
    { source: 'Remove link', target: 'Rimuovi link' },
    { source: 'Add Invite Link', target: 'Aggiungi Link di Invito' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'Chiunque su internet con questo link potrà unirsi al team selezionato.'
    },
    { source: 'Pending Invites', target: 'Inviti in attesa' },
    { source: 'Cancel invite', target: 'Annulla invito' },
    { source: 'Active Members', target: 'Membri attivi' },
    { source: 'Remove member', target: 'Rimuovi membro' },
    {
      source: 'You are setting sharing for the current page',
      target: 'Stai impostando la condivisione per la pagina corrente'
    },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'Stai impostando la condivisione per tutte le pagine della tua App.'
    },
    { source: 'Public access link', target: 'Link di accesso pubblico' },
    { source: 'Updating public access...', target: "Aggiornando l'accesso pubblico..." },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'Chiunque con questo link potrà visualizzare la pagina corrente. In questo modo puoi anche incorporare la pagina corrente in un altro sito web.'
    },
    { source: 'Embed code (IFRAME)', target: 'Codice da incorporare (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: 'Incolla questo codice nel codice HTML del tuo sito web dove desideri che appaia la pagina corrente.'
    },
    { source: 'link', target: 'link' },
    { source: 'invited', target: 'invitato' },
    { source: 'Choose Team', target: 'Scegli Team' },
    { source: 'App Teams', target: "Team dell'App" },
    { source: 'Built-In Teams', target: 'Team Integrati' },
    { source: 'Clear Team', target: 'Cancella Team' },
    { source: 'Can build application and modify data', target: 'Può costruire applicazioni e modificare i dati' },
    { source: 'Can modify data in application', target: "Può modificare i dati nell'applicazione" },
    { source: 'Can only view data without modification', target: 'Può solo visualizzare i dati senza modificarli' },
    { source: 'Add Team', target: 'Aggiungi Team' },
    { source: 'Edit Team', target: 'Modifica Team' },
    { source: 'Adding Team', target: 'Aggiungendo Team' },
    {
      source: 'Keep control over who has access to current App',
      target: "Mantieni il controllo su chi ha accesso all'App corrente"
    },
    { source: 'Enter Team Name', target: 'Inserisci il nome del Team' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'Digita il nome del team, es: Supporto, Vendite, Marketing, ecc.'
    },
    { source: 'Add a new member to this team.', target: 'Aggiungi un nuovo membro a questo team.' },
    { source: 'Invite new member', target: 'Invita nuovo membro' },
    { source: 'User', target: 'Utente' },
    { source: 'Date Added', target: 'Data Aggiunta' },
    { source: 'You', target: 'Tu' },
    { source: 'Edit', target: 'Modifica' },
    { source: 'No users in this team', target: 'Nessun utente in questo team' },
    { source: 'Page Permissions', target: 'Permessi Pagina' },
    { source: 'App Permissions', target: 'Permessi App' },
    { source: 'Properties', target: 'Proprietà' },
    { source: 'Page name', target: 'Nome Pagina' },
    { source: 'Access', target: 'Accesso' },
    { source: 'Full Access', target: 'Accesso Completo' },
    { source: 'Read Only', target: 'Solo Lettura' },
    { source: 'No Access', target: 'Nessun Accesso' },
    { source: 'Read', target: 'Leggi' },
    { source: 'Update', target: 'Aggiorna' },
    { source: 'Write', target: 'Scrivi' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'Elimina' },
    { source: 'Custom Access', target: 'Accesso Personalizzato' },
    { source: 'Read, create, update and delete data', target: 'Leggi, crea, aggiorna ed elimina dati' },
    { source: 'Choose allowed operations granularly', target: 'Scegli operazioni consentite in modo granulare' },
    { source: 'Without any access to data', target: 'Senza alcun accesso ai dati' },
    { source: 'Name', target: 'Nome' },
    { source: 'Active', target: 'Attivo' },
    { source: 'Settings', target: 'Impostazioni' },
    { source: 'Members and Teams', target: 'Membri e Team' },
    { source: 'App Builder', target: 'Costruttore App' },
    { source: 'Collection Permissions', target: 'Permessi Collezione' },
    { source: "Grant permissions to app's collection", target: "Concedi permessi alla collezione dell'app" },
    { source: 'Collection', target: 'Collezione' },
    {
      source: 'Limit access to your data by team properties',
      target: "Limita l'accesso ai tuoi dati in base alle proprietà del team"
    },
    { source: 'Save Team', target: 'Salva Team' },
    { source: 'Create Team', target: 'Crea Team' },
    { source: 'Value', target: 'Valore' },
    { source: 'No properties specified', target: 'Nessuna proprietà specificata' },

    // Navigation
    { source: 'Current App', target: 'App Corrente' },
    { source: 'Home', target: 'Home' },

    // Profile
    {
      source: 'We are fetching user data, please, wait...',
      target: "Stiamo recuperando i dati dell'utente, attendere prego..."
    },
    { source: 'Profile Settings', target: 'Impostazioni Profilo' },
    { source: 'Basic information about your account.', target: 'Informazioni di base sul tuo account.' },
    { source: 'Photo', target: 'Foto' },
    { source: 'your photo', target: 'la tua foto' },
    { source: 'Change', target: 'Cambia' },
    { source: 'Upload', target: 'Carica' },
    { source: 'Photo was successfully updated', target: 'Foto aggiornata con successo' },
    { source: 'Photo was successfully deleted', target: 'Foto eliminata con successo' },
    { source: 'First Name', target: 'Nome' },
    { source: 'Last Name', target: 'Cognome' },
    { source: 'Your Email', target: 'La Tua Email' },
    { source: 'Email Change', target: 'Cambio Email' },
    { source: 'New Email', target: 'Nuova Email' },
    { source: 'Change Email', target: 'Cambia Email' },
    { source: 'Check your inbox', target: 'Controlla la tua casella di posta' },
    { source: 'Confirmation Email was sent to {0}', target: 'Email di conferma inviata a {0}' },
    { source: 'Changing Email failed', target: 'Cambio Email fallito' },
    { source: 'Password Change', target: 'Cambio Password' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target:
        'Una password dovrebbe essere abbastanza forte per proteggere il tuo account, quindi rendila lunga almeno 12 caratteri.'
    },
    { source: 'Current Password', target: 'Password Corrente' },
    { source: 'New Password', target: 'Nuova Password' },
    { source: 'Confirm New Password', target: 'Conferma Nuova Password' },
    { source: 'Change Password', target: 'Cambia Password' },
    {
      source: 'Current password was successfully updated, all other sessions will be logged out shortly',
      target:
        'La password attuale è stata aggiornata con successo, tutte le altre sessioni verranno disconnesse a breve'
    },
    { source: 'Saving current password failed', target: 'Salvataggio della password corrente non riuscito' },
    { source: 'Short password', target: 'Password corta' },
    { source: "Passwords don't match", target: 'Le password non corrispondono' },
    { source: 'Personal Preferences', target: 'Preferenze Personali' },
    { source: 'Language', target: 'Lingua' },
    { source: 'Timezone', target: 'Fuso orario' },
    { source: 'Current time in {0} is', target: "L'ora corrente in {0} è" },
    {
      source: 'Customize additional preferences for your account.',
      target: 'Personalizza ulteriori preferenze per il tuo account.'
    },
    { source: 'News & Proposals', target: 'Novità & Proposte' },
    { source: 'Subscribe to our updates and proposals.', target: 'Iscriviti ai nostri aggiornamenti e proposte.' },
    { source: 'Save changes', target: 'Salva modifiche' },
    { source: 'Current user was successfully updated', target: 'Utente corrente aggiornato con successo' },
    { source: 'Saving current user failed', target: "Salvataggio dell'utente corrente non riuscito" },

    // My Apps
    { source: 'Type to search...', target: 'Digita per cercare...' },
    { source: 'My Apps', target: 'Le Mie App' },
    { source: 'New App', target: 'Nuova App' },
    { source: 'Builder', target: 'Costruttore' },
    { source: 'App', target: 'App' },
    { source: 'continue install', target: 'continua l’installazione' },
    { source: 'Open builder', target: 'Apri costruttore' },
    { source: 'View published', target: 'Visualizza pubblicato' },
    { source: 'Delete App', target: 'Elimina App' },
    { source: 'Start from a template', target: 'Inizia da un template' },
    { source: 'Preview', target: 'Anteprima' },
    { source: 'Contact Support', target: 'Contatta il Supporto' },
    { source: 'Documentation', target: 'Documentazione' },
    { source: 'Feature Requests', target: 'Richieste di Funzionalità' },
    { source: 'See What’s New', target: 'Vedi le Novità' },
    { source: 'Search templates...', target: 'Cerca template...' },
    { source: 'any', target: 'qualsiasi' },
    { source: 'more', target: 'altro' },
    { source: 'Choose Data Source', target: 'Scegli Fonte Dati' },
    { source: 'works with 30+ data sources', target: 'funziona con più di 30 fonti di dati' },
    { source: 'Use this template', target: 'Usa questo template' },
    { source: 'stores data in Jet Tables', target: 'archivia i dati nelle Tabelle Jet' },
    { source: 'New Data', target: 'Nuovi Dati' },
    { source: 'using {0}', target: 'usando {0}' },
    { source: "Can't find resource you're looking for?", target: 'Non riesci a trovare la risorsa che stai cercando?' },
    { source: 'Admin Panel', target: 'Pannello di Amministrazione' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'Elenca, crea e aggiorna (CRUD) operazioni sui tuoi dati'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target:
        'Crea un pannello di amministrazione personalizzato basato su qualsiasi database, app e API come Stripe, Twilio e GraphQL.'
    },
    { source: 'All Integrations', target: 'Tutte le Integrazioni' },
    { source: 'Databases', target: 'Database' },
    { source: 'APIs', target: 'API' },
    { source: 'Frameworks', target: 'Framework' },
    { source: 'Storages', target: 'Archiviazioni' },

    // Sign In
    { source: 'Good morning', target: 'Buongiorno' },
    { source: 'Good afternoon', target: 'Buon pomeriggio' },
    { source: 'Good evening', target: 'Buonasera' },
    { source: 'Sign In', target: 'Accedi' },
    { source: 'Welcome Back.', target: 'Bentornato.' },
    { source: 'Sign in with {0}', target: 'Accedi con {0}' },
    { source: 'or login with', target: 'oppure accedi con' },
    { source: 'Enter E-mail', target: 'Inserisci E-mail' },
    { source: 'Enter password', target: 'Inserisci password' },
    { source: 'Login', target: 'Login' },
    { source: 'Create new account', target: 'Crea un nuovo account' },
    { source: 'Forgot my password', target: 'Ho dimenticato la mia password' },
    { source: 'required', target: 'richiesto' },
    { source: 'incorrect Email', target: 'Email errata' },
    { source: 'Minimum password length {0}', target: 'Lunghezza minima della password {0}' },
    { source: 'Unable to Sign In', target: 'Impossibile Accedere' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'Inizia <span class="auth-form__accent">Gratis oggi</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target:
        'Nessuna carta richiesta. Otterrai tutte le funzionalità avanzate gratuitamente durante i 14 giorni di prova PRO.'
    },
    { source: 'Enter First Name', target: 'Inserisci Nome' },
    { source: 'Enter Last Name (optional)', target: 'Inserisci Cognome (opzionale)' },
    { source: 'Enter Email', target: 'Inserisci Email' },
    { source: 'Password', target: 'Password' },
    { source: 'Repeat Password', target: 'Ripeti Password' },
    {
      source: 'By signing in you’re okay with our',
      target: 'Registrandoti accetti i nostri'
    },
    {
      source: 'Creating an account means you’re okay with our',
      target: 'Creare un account significa che accetti i nostri'
    },
    { source: 'Terms of Service', target: 'Termini di Servizio' },
    { source: 'Privacy Policy', target: 'Politica sulla Privacy' },
    { source: 'and', target: 'e' },
    { source: 'Create your free account', target: 'Crea il tuo account gratuito' },
    { source: 'Already have an account', target: 'Hai già un account' },
    { source: 'Unable to Sign Up', target: 'Impossibile Registrarsi' },

    // Restore password
    { source: 'Reset your password', target: 'Reimposta la tua password' },
    { source: 'Email Address', target: 'Indirizzo Email' },
    { source: 'Reset password', target: 'Reimposta password' },
    { source: 'Return to Sign In', target: 'Torna al Login' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'Controlla la tua Email – <strong>{0}</strong>. Abbiamo inviato il link di validazione che dovresti seguire per cambiare la tua password.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be al least 8 characters.',
      target: 'Quasi fatto, inserisci qui sotto la tua nuova password. <br>Deve essere lunga almeno 8 caratteri.'
    },
    { source: 'Reset password & Sign In', target: 'Reimposta password e Accedi' },
    { source: 'Unable to Send Code', target: 'Impossibile Inviare il Codice' },
    { source: 'Unable to Change Password', target: 'Impossibile Cambiare la Password' },

    // Email Verification
    { source: 'Email Verification', target: 'Verifica Email' },
    { source: 'Resend verification code', target: 'Reinvia codice di verifica' },
    { source: 'Verification email sent', target: 'Email di verifica inviata' },
    { source: 'Your Email is now verified', target: 'La tua Email è ora verificata' },
    { source: 'Request is incorrect', target: 'La richiesta è errata' },

    // Invites
    {
      source: 'Join <span class="auth-form__accent">{0}</span>',
      target: 'Unisciti a <span class="auth-form__accent">{0}</span>'
    },
    {
      source: '<strong>{0}</strong> has invited you to join <strong>{1}</strong>',
      target: '<strong>{0}</strong> ti ha invitato a unirti a <strong>{1}</strong>'
    },
    {
      source: 'Someone has invited you to join <strong>{0}</strong>',
      target: 'Qualcuno ti ha invitato a unirti a <strong>{0}</strong>'
    },
    {
      source: 'You are joining <strong>{0}</strong> using invite link',
      target: 'Ti stai unendo a <strong>{0}</strong> utilizzando il link di invito'
    },
    { source: 'Join', target: 'Unisciti' },
    { source: 'Go to home page', target: 'Vai alla home page' },
    { source: 'Invite link is wrong', target: 'Il link di invito non è corretto' },
    {
      source:
        'Looks like your invitation link has expired or maybe you have followed the wrong link. Please try to ask to invite your again.',
      target:
        'Sembra che il link di invito sia scaduto o forse hai seguito il link sbagliato. Per favore chiedi di essere invitato di nuovo.'
    },
    {
      source: 'Unfortunately we failed to load information about this invitation',
      target: 'Purtroppo non siamo riusciti a caricare informazioni su questo invito'
    },

    // Users & Teams
    { source: 'Members of {0}', target: 'Membri di {0}' },
    { source: 'How to get started', target: 'Come iniziare' },
    { source: 'Users API', target: 'API Utenti' },
    { source: 'Teams API', target: 'API Team' },
    { source: 'Invite Member', target: 'Invita Membro' },
    { source: 'Add User property', target: 'Aggiungi proprietà Utente' },
    { source: 'Add Team property', target: 'Aggiungi proprietà Team' },
    { source: 'Edit property', target: 'Modifica proprietà' },
    { source: 'Delete property', target: 'Elimina proprietà' },
    { source: 'Users', target: 'Utenti' },
    { source: 'Teams', target: 'Team' },
    { source: 'Search members', target: 'Cerca membri' },
    { source: 'Search teams', target: 'Cerca team' },
    { source: '{0} pages', target: '{0} pagine' },
    { source: 'No members', target: 'Nessun membro' }
  ]
};

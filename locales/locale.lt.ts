import { Locale } from './locale';

export const locale: Locale = {
  name: 'lithuanian',
  language: 'lt',
  items: [
    // General
    { source: 'Save', target: 'Išsaugoti' },
    { source: 'Create', target: 'Sukurti' },
    { source: 'Duplicating', target: 'Dubliavimas' },
    { source: 'Duplicate', target: 'Dublikuoti' },
    { source: 'Mass Edit', target: 'Masinis redagavimas' },
    { source: 'Export', target: 'Eksportuoti' },
    { source: 'Import', target: 'Importuoti' },
    { source: 'Delete', target: 'Ištrinti' },
    { source: 'Continue', target: 'Tęsti' },
    { source: 'Submit', target: 'Pateikti' },
    { source: 'Cancel', target: 'Atšaukti' },
    { source: 'Loading', target: 'Įkeliama' },
    { source: 'Please wait...', target: 'Prašome palaukti...' },
    { source: 'Loading failed', target: 'Įkėlimas nepavyko' },
    { source: 'Unknown error', target: 'Nežinoma klaida' },
    { source: 'Add', target: 'Pridėti' },
    { source: 'or', target: 'arba' },
    { source: 'Hours', target: 'Valandos' },
    { source: 'Minutes', target: 'Minutės' },
    { source: 'Seconds', target: 'Sekundės' },
    { source: 'Saved', target: 'Išsaugota' },
    { source: 'Error', target: 'Klaida' },
    { source: 'Page not found', target: 'Puslapis nerastas' },
    {
      source: 'The specified address is incorrect, or the page does not exist',
      target: 'Nurodytas adresas yra neteisingas arba puslapis neegzistuoja'
    },
    { source: 'Not allowed', target: 'Negalima' },
    {
      source: "You don't have permissions to access this page",
      target: 'Neturite teisių šiam puslapiui pasiekti'
    },
    { source: 'Are you sure want to close?', target: 'Ar tikrai norite uždaryti?' },
    { source: 'Close', target: 'Uždaryti' },

    // Actions
    { source: 'Action executed', target: 'Veiksmas įvykdytas' },
    { source: 'Action executed successfully', target: 'Veiksmas sėkmingai įvykdytas' },
    { source: 'Action failed', target: 'Veiksmas nepavyko' },
    {
      source: "You don't have permission for run this operation",
      target: 'Neturite teisių šiai operacijai vykdyti'
    },
    { source: 'Specify parameters', target: 'Nurodykite parametrus' },
    { source: 'Executing action', target: 'Vykdomas veiksmas' },
    { source: 'You are executing <strong>{0}</strong>', target: 'Jūs vykdote <strong>{0}</strong>' },
    { source: 'Please fill in the parameters below.', target: 'Prašome užpildyti toliau pateiktus parametrus.' },
    { source: 'Execute', target: 'Vykdyti' },
    { source: 'Executing', target: 'Vykdoma' },
    { source: 'Finished', target: 'Baigta' },
    { source: 'Done', target: 'Atlikta' },

    // Export
    { source: 'Records Export', target: 'Įrašų eksportavimas' },
    { source: 'Downloading records data as a file', target: 'Įrašų duomenų atsisiuntimas kaip failas' },
    { source: 'Choose format', target: 'Pasirinkti formatą' },
    { source: 'Number of exporting records', target: 'Eksportuojamų įrašų skaičius' },
    { source: { label: 'Export', context: 'submit' }, target: 'Eksportuoti' },
    { source: 'Exporting', target: 'Eksportuojama' },
    { source: 'Export completed', target: 'Eksportavimas baigtas' },
    { source: 'Failed to export', target: 'Eksportuoti nepavyko' },

    // Components
    { source: 'optional', target: 'neprivaloma' },
    { source: 'choose', target: 'pasirinkti' },
    { source: 'Clear value', target: 'Pašalinti reikšmę' },
    { source: 'loading...', target: 'kraunama...' },
    { source: 'Nothing found', target: 'Nieko nerasta' },
    { source: 'Search...', target: 'Ieškoti...' },
    { source: 'Enter at least {0} characters', target: 'Įveskite bent {0} simbolius' },
    { source: 'No options', target: 'Nėra parinkčių' },
    { source: 'Drop files here or', target: 'Mesti failus čia arba' },
    { source: 'Upload new', target: 'Įkelti naują' },
    { source: 'Clear', target: 'Valyti' },
    { source: 'Download', target: 'Atsisiųsti' },
    { source: 'Choose file', target: 'Pasirinkti failą' },
    { source: 'Choose files', target: 'Pasirinkti failus' },
    { source: 'Scan with Camera', target: 'Skenuoti kamera' },
    { source: 'Scan Image file', target: 'Skenuoti vaizdo failą' },
    { source: 'Choose camera', target: 'Pasirinkti kamerą' },
    { source: 'Stop scanning', target: 'Sustabdyti skenavimą' },
    { source: 'Scan again', target: 'Skenuoti dar kartą' },
    { source: 'Use this scan', target: 'Naudoti šį skenavimą' },
    { source: 'Failed to scan', target: 'Nepavyko nuskenuoti' },
    {
      source: 'Code failed to scan, please try another image',
      target: 'Nepavyko nuskenuoti kodo, išbandykite kitą vaizdą'
    },
    { source: 'current', target: 'dabar' },
    { source: 'Day', target: 'Diena' },
    { source: 'Week', target: 'Savaitė' },
    { source: 'Month', target: 'Mėnuo' },
    { source: 'Year', target: 'Metai' },
    { source: 'Today', target: 'Šiandien' },
    { source: 'Daily', target: 'Kasdien' },
    { source: 'Weekly', target: 'Kas savaitę' },
    { source: 'Monthly', target: 'Kas mėnesį' },
    { source: 'Quarterly', target: 'Kas ketvirtį' },
    { source: 'Yearly', target: 'Kasmet' },
    { source: 'Hourly', target: 'Kas valandą' },
    { source: 'Minutely', target: 'Kas minutę' },
    { source: 'Since', target: 'Nuo' },
    { source: 'Before', target: 'Prieš' },
    { source: 'Between', target: 'Tarp' },
    { source: 'From date', target: 'Nuo datos' },
    { source: 'To date', target: 'Iki datos' },
    { source: 'Coordinates', target: 'Koordinatės' },
    { source: 'Latitude', target: 'Platuma' },
    { source: 'Longitude', target: 'Ilguma' },
    { source: 'Default color', target: 'Numatyta spalva' },
    { source: 'not specified', target: 'nenurodyta' },
    { source: 'Sign using your finger or pointer', target: 'Pasirašykite naudodami pirštą ar rodyklę' },

    // List components
    { source: 'Filter', target: 'Filtras' },
    { source: 'Filter by field', target: 'Filtruoti pagal lauką' },
    { source: 'Filter by...', target: 'Filtruoti pagal...' },
    { source: 'Back', target: 'Atgal' },
    { source: 'Back to {0} fields', target: 'Atgal į {0} laukus' },
    { source: 'Choose {0} from list', target: 'Pasirinkite {0} iš sąrašo' },
    { source: '{0} fields', target: '{0} laukų' },
    { source: '{0} relationships', target: '{0} ryšių' },
    { source: 'Aggregate {0}', target: 'Agreguoti {0}' },
    { source: 'No fields to select', target: 'Nėra laukų pasirinkti' },
    { source: 'Enter value...', target: 'Įvesti reikšmę...' },
    { source: 'Exclude', target: 'Atmesti' },
    { source: 'Actions', target: 'Veiksmai' },
    { source: 'Search', target: 'Paieška' },
    { source: 'Sort 1 → 9', target: 'Rūšiuoti 1 → 9' },
    { source: 'Sort 9 → 1', target: 'Rūšiuoti 9 → 1' },
    { source: 'Sort A → Z', target: 'Rūšiuoti A → Z' },
    { source: 'Sort Z → A', target: 'Rūšiuoti Z → A' },
    { source: 'Refresh automatically', target: 'Atnaujinti automatiškai' },
    { source: 'All', target: 'Visi' },
    { source: 'Selected', target: 'Pasirinkta' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'Deja, pagal jūsų užklausą nieko nerasta'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'Gauname {0}, prašome palaukti...' },
    { source: 'Add filter', target: 'Pridėti filtrą' },
    { source: 'Delete this filter', target: 'Ištrinti šį filtrą' },
    { source: 'Toggle ordering', target: 'Pervilgti rūšiavimą' },
    { source: 'Not configured', target: 'Nekonfigūruotas' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'Deja, šis komponentas dar nėra sukonfigūruotas'
    },
    { source: 'records', target: 'įrašai' },
    { source: '{0} items', target: '{0} elementų' },

    // Menu
    { source: 'Users & Teams', target: 'Vartotojai ir komandos' },
    { source: 'Billing', target: 'Apmokestinimas' },
    { source: 'Billing & Plans', target: 'Apmokestinimas ir planai' },
    { source: 'API keys', target: 'API raktai' },
    { source: 'Dark Mode', target: 'Tamsus režimas' },
    { source: 'Light Mode', target: 'Šviesus režimas' },
    { source: 'Disable Staff', target: 'Išjungti personalą' },
    { source: 'Enable Staff', target: 'Įjungti personalą' },
    { source: 'Manage Templates', target: 'Valdyti šablonus' },
    { source: 'Logout', target: 'Atsijungti' },
    { source: 'Activity Log', target: 'Veiklos žurnalas' },
    { source: 'Collaborations', target: 'Bendradarbiavimai' },
    { source: 'Open Visual Builder', target: 'Atidaryti vizualinį kūrėją' },

    // Filters
    { source: 'equals', target: 'lygus' },
    { source: 'does not equal', target: 'nelygus' },
    { source: '{0} equals {1}', target: '{0} lygus {1}' },
    { source: '{0} does not equal {1}', target: '{0} nelygus {1}' },

    { source: 'contains', target: 'turi' },
    { source: 'does not contain', target: 'neturi' },
    { source: '{0} contains {1}', target: '{0} turi {1}' },
    { source: '{0} not contains {1}', target: '{0} neturi {1}' },

    { source: 'starts with', target: 'prasideda su' },
    { source: 'does not start with', target: 'neprasideda su' },
    { source: '{0} starts with {1}', target: '{0} prasideda su {1}' },
    { source: '{0} does not start with {1}', target: '{0} neprasideda su {1}' },

    { source: 'ends with', target: 'baigiasi su' },
    { source: 'does not end with', target: 'nesibaigia su' },
    { source: '{0} ends with {1}', target: '{0} baigiasi su {1}' },
    { source: '{0} does not end with {1}', target: '{0} nesibaigia su {1}' },

    { source: 'greater than', target: 'didesnis nei' },
    { source: 'is not greater than', target: 'nėra didesnis nei' },
    { source: '{0} is greater than {1}', target: '{0} yra didesnis nei {1}' },
    { source: '{0} not greater than {1}', target: '{0} nėra didesnis nei {1}' },

    { source: 'greater than or equals', target: 'didesnis arba lygus' },
    { source: 'is not greater than or equals', target: 'nėra didesnis arba lygus' },
    { source: '{0} is greater than or equals {1}', target: '{0} yra didesnis arba lygus {1}' },
    { source: '{0} is not greater than or equals {1}', target: '{0} nėra didesnis arba lygus {1}' },

    { source: 'less than', target: 'mažesnis nei' },
    { source: 'is not less than', target: 'nėra mažesnis nei' },
    { source: '{0} is less than {1}', target: '{0} yra mažesnis nei {1}' },
    { source: '{0} is not less than {1}', target: '{0} nėra mažesnis nei {1}' },

    { source: 'less than or equals', target: 'mažesnis arba lygus' },
    { source: 'is not less than or equals', target: 'nėra mažesnis arba lygus' },
    { source: '{0} is less than or equals {1}', target: '{0} yra mažesnis arba lygus {1}' },
    { source: '{0} is not less than or equals {1}', target: '{0} nėra mažesnis arba lygus {1}' },

    { source: 'one of', target: 'vienas iš' },
    { source: 'is one of', target: 'yra vienas iš' },
    { source: 'is not one of', target: 'nėra vienas iš' },
    { source: '{0} is one of {1}', target: '{0} yra vienas iš {1}' },
    { source: '{0} is not one of {1}', target: '{0} nėra vienas iš {1}' },

    { source: 'is null', target: 'yra nulis' },
    { source: 'is not null', target: 'nėra nulis' },
    { source: '{0} is null', target: '{0} yra nulis' },
    { source: '{0} is not null', target: '{0} nėra nulis' },

    { source: 'is future', target: 'yra ateityje' },
    { source: 'in the future', target: 'ateityje' },
    { source: 'is not in the future', target: 'nėra ateityje' },
    { source: '{0} is in the future', target: '{0} yra ateityje' },
    { source: '{0} is not in the future', target: '{0} nėra ateityje' },

    { source: 'is past', target: 'yra praeityje' },
    { source: 'in the past', target: 'praeityje' },
    { source: 'is not in the past', target: 'nėra praeityje' },
    { source: '{0} is in the past', target: '{0} yra praeityje' },
    { source: '{0} is not in the past', target: '{0} nėra praeityje' },

    { source: 'is Today', target: 'yra šiandien' },
    { source: 'today', target: 'šiandien' },
    { source: 'is not today', target: 'nėra šiandien' },
    { source: '{0} is today', target: '{0} yra šiandien' },
    { source: '{0} is not today', target: '{0} nėra šiandien' },

    { source: 'is Yesterday', target: 'yra vakar' },
    { source: 'yesterday', target: 'vakar' },
    { source: 'is not yesterday', target: 'nėra vakar' },
    { source: '{0} is yesterday', target: '{0} yra vakar' },
    { source: '{0} is not yesterday', target: '{0} nėra vakar' },

    { source: 'is Last Week', target: 'yra praeitą savaitę' },
    { source: 'last week', target: 'praeitą savaitę' },
    { source: 'is not last week', target: 'nėra praeitą savaitę' },
    { source: '{0} is last week', target: '{0} yra praeitą savaitę' },
    { source: '{0} is not last week', target: '{0} nėra praeitą savaitę' },

    { source: 'is Last Month', target: 'yra praeitą mėnesį' },
    { source: 'last month', target: 'praeitą mėnesį' },
    { source: 'is not last month', target: 'nėra praeitą mėnesį' },
    { source: '{0} is last month', target: '{0} yra praeitą mėnesį' },
    { source: '{0} is not last month', target: '{0} nėra praeitą mėnesį' },

    { source: 'is Last Quarter', target: 'yra praeitą ketvirtį' },
    { source: 'last quarter', target: 'praeitą ketvirtį' },
    { source: 'is not last quarter', target: 'nėra praeitą ketvirtį' },
    { source: '{0} is last quarter', target: '{0} yra praeitą ketvirtį' },
    { source: '{0} is not last quarter', target: '{0} nėra praeitą ketvirtį' },

    { source: 'is Last Year', target: 'yra pernai' },
    { source: 'last year', target: 'pernai' },
    { source: 'is not last year', target: 'nėra pernai' },
    { source: '{0} is last year', target: '{0} yra pernai' },
    { source: '{0} is not last year', target: '{0} nėra pernai' },

    { source: 'is Last X Days', target: 'yra paskutinėmis X dienomis' },
    { source: 'last X days', target: 'paskutinės X dienos' },
    { source: 'is not last X days', target: 'nėra paskutinėmis X dienomis' },
    { source: '{0} is last {1} days', target: '{0} yra paskutinėmis {1} dienomis' },
    { source: '{0} is not last {1} days', target: '{0} nėra paskutinėmis {1} dienomis' },

    { source: 'is Current Week', target: 'yra šią savaitę' },
    { source: 'current week', target: 'ši savaitė' },
    { source: 'is not current week', target: 'nėra šią savaitę' },
    { source: '{0} is current week', target: '{0} yra šią savaitę' },
    { source: '{0} is not current week', target: '{0} nėra šią savaitę' },

    { source: 'is Current Month', target: 'yra šį mėnesį' },
    { source: 'current month', target: 'šį mėnesį' },
    { source: 'is not current month', target: 'nėra šį mėnesį' },
    { source: '{0} is current month', target: '{0} yra šį mėnesį' },
    { source: '{0} is not current month', target: '{0} nėra šį mėnesį' },

    { source: 'is Current Quarter', target: 'yra šį ketvirtį' },
    { source: 'current quarter', target: 'šį ketvirtį' },
    { source: 'is not current quarter', target: 'nėra šį ketvirtį' },
    { source: '{0} is current quarter', target: '{0} yra šį ketvirtį' },
    { source: '{0} is not current quarter', target: '{0} nėra šį ketvirtį' },

    { source: 'is Current Year', target: 'yra šiais metais' },
    { source: 'current year', target: 'šiemet' },
    { source: 'is not current year', target: 'nėra šiemet' },
    { source: '{0} is current year', target: '{0} yra šiemet' },
    { source: '{0} is not current year', target: '{0} nėra šiemet' },

    { source: 'is Previous Week', target: 'yra praėjusią savaitę' },
    { source: 'previous week', target: 'praėjusią savaitę' },
    { source: 'is not previous week', target: 'nėra praėjusią savaitę' },
    { source: '{0} is previous week', target: '{0} yra praėjusią savaitę' },
    { source: '{0} is not previous week', target: '{0} nėra praėjusią savaitę' },

    { source: 'is Previous Month', target: 'yra praėjusį mėnesį' },
    { source: 'previous month', target: 'praėjusį mėnesį' },
    { source: 'is not previous month', target: 'nėra praėjusį mėnesį' },
    { source: '{0} is previous month', target: '{0} yra praėjusį mėnesį' },
    { source: '{0} is not previous month', target: '{0} nėra praėjusį mėnesį' },

    { source: 'is Previous Quarter', target: 'yra praėjusį ketvirtį' },
    { source: 'previous quarter', target: 'praėjusį ketvirtį' },
    { source: 'is not previous quarter', target: 'nėra praėjusį ketvirtį' },
    { source: '{0} is previous quarter', target: '{0} yra praėjusį ketvirtį' },
    { source: '{0} is not previous quarter', target: '{0} nėra praėjusį ketvirtį' },

    { source: 'is Previous Year', target: 'yra praėjusiais metais' },
    { source: 'previous year', target: 'praėjusiais metais' },
    { source: 'is not previous year', target: 'nėra praėjusiais metais' },
    { source: '{0} is previous year', target: '{0} yra praėjusiais metais' },
    { source: '{0} is not previous year', target: '{0} nėra praėjusiais metais' },

    { source: 'is Previous X Days', target: 'yra praėjusias X dienas' },
    { source: 'previous X days', target: 'praėjusias X dienas' },
    { source: 'is not previous X days', target: 'nėra praėjusias X dienas' },
    { source: '{0} is previous {1} days', target: '{0} yra praėjusias {1} dienas' },
    { source: '{0} is not previous {1} days', target: '{0} nėra praėjusias {1} dienas' },

    { source: 'is empty', target: 'yra tuščia' },
    { source: 'is not empty', target: 'nėra tuščia' },
    { source: '{0} is empty', target: '{0} yra tuščia' },
    { source: '{0} is not empty', target: '{0} nėra tuščia' },

    { source: 'covered by', target: 'padengta' },
    { source: 'is not covered by', target: 'nėra padengta' },
    { source: '{0} covered by {1}', target: '{0} padengta {1}' },
    { source: '{0} is not covered by {1}', target: '{0} nėra padengta {1}' },

    // Activity log
    { source: 'No activities found', target: 'Veiklos nerasta' },
    {
      source: 'Start to working with data to log activities.',
      target: 'Pradėkite dirbti su duomenimis, kad įrašytumėte veiklą.'
    },
    { source: 'All Activity', target: 'Visa veikla' },
    { source: 'Create Record', target: 'Sukurti įrašą' },
    { source: 'Update Record', target: 'Atnaujinti įrašą' },
    { source: 'Delete Record', target: 'Ištrinti įrašą' },
    { source: 'All Members', target: 'Visi nariai' },

    // Collaboration
    { source: 'Timeline', target: 'Laiko juosta' },
    { source: 'Messages', target: 'Žinutės' },
    { source: 'Activity', target: 'Veikla' },
    { source: 'Start chatting with your team', target: 'Pradėkite bendrauti su savo komanda' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'Siųskite žinutę apie esamą puslapį, kad stebėtumėte svarbią informaciją.'
    },
    { source: 'Your Message', target: 'Jūsų žinutė' },
    { source: 'Send', target: 'Siųsti' },

    // Share
    { source: 'Invite members', target: 'Pakviesti narius' },
    { source: 'Public share', target: 'Viešas dalinimasis' },
    { source: 'Sign Up', target: 'Registruotis' },
    { source: 'Members', target: 'Nariai' },
    { source: 'Invite with Email', target: 'Pakviesti el. paštu' },
    { source: 'Invite someone...', target: 'Pakviesti ką nors...' },
    { source: 'Send Invite', target: 'Siųsti kvietimą' },
    {
      source: 'Limit access to your data by user properties',
      target: 'Apriboti prieigą prie jūsų duomenų pagal vartotojo savybes'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: 'Įveskite el. paštą vartotojo, kurį norėtumėte pakviesti bendradarbiauti.'
    },
    { source: 'Copy', target: 'Kopijuoti' },
    { source: 'Invite with Link', target: 'Pakviesti su nuoroda' },
    { source: 'Remove link', target: 'Pašalinti nuorodą' },
    { source: 'Add Invite Link', target: 'Pridėti kvietimo nuorodą' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'Visi, turintys šią nuorodą, galės prisijungti prie pasirinktos komandos.'
    },
    { source: 'Pending Invites', target: 'Laukiantys kvietimai' },
    { source: 'Cancel invite', target: 'Atšaukti kvietimą' },
    { source: 'Active Members', target: 'Aktyvūs nariai' },
    { source: 'Remove member', target: 'Pašalinti narį' },
    { source: 'You are setting sharing for the current page', target: 'Nustatote bendrinimą šiam puslapiui' },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'Nustatote bendrinimą visiems programos puslapiams.'
    },
    { source: 'Public access link', target: 'Viešos prieigos nuoroda' },
    { source: 'Updating public access...', target: 'Atnaujinama vieša prieiga...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'Visi, turintys šią nuorodą, galės peržiūrėti esamą puslapį. Tokiu būdu galite įterpti šį puslapį į kitą svetainę.'
    },
    { source: 'Embed code (IFRAME)', target: 'Įterpimo kodas (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: 'Įdėkite šį kodą į savo svetainės HTML kodą ten, kur norėtumėte, kad atsirastų esamas puslapis.'
    },
    { source: 'link', target: 'nuoroda' },
    { source: 'invited', target: 'pakviestas' },
    { source: 'Choose Team', target: 'Pasirinkti komandą' },
    { source: 'App Teams', target: 'Programos komandos' },
    { source: 'Built-In Teams', target: 'Įtrauktos komandos' },
    { source: 'Clear Team', target: 'Išvalyti komandą' },
    { source: 'Can build application and modify data', target: 'Gali kurti programą ir keisti duomenis' },
    { source: 'Can modify data in application', target: 'Gali keisti duomenis programoje' },
    { source: 'Can only view data without modification', target: 'Gali tik peržiūrėti duomenis be pakeitimų' },
    { source: 'Add Team', target: 'Pridėti komandą' },
    { source: 'Edit Team', target: 'Redaguoti komandą' },
    { source: 'Adding Team', target: 'Pridedama komanda' },
    {
      source: 'Keep control over who has access to current App',
      target: 'Kontroliuokite, kas turi prieigą prie esamos programos'
    },
    { source: 'Enter Team Name', target: 'Įveskite komandos pavadinimą' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'Įveskite komandos pavadinimą, pvz: Palaikymas, Pardavimai, Rinkodara ir kt.'
    },
    { source: 'Add a new member to this team.', target: 'Pridėti naują komandos narį.' },
    { source: 'Invite new member', target: 'Pakviesti naują narį' },
    { source: 'User', target: 'Vartotojas' },
    { source: 'Date Added', target: 'Pridėta data' },
    { source: 'You', target: 'Jūs' },
    { source: 'Edit', target: 'Redaguoti' },
    { source: 'No users in this team', target: 'Šioje komandoje nėra vartotojų' },
    { source: 'Page Permissions', target: 'Puslapio leidimai' },
    { source: 'App Permissions', target: 'Programos leidimai' },
    { source: 'Properties', target: 'Savybės' },
    { source: 'Page name', target: 'Puslapio pavadinimas' },
    { source: 'Access', target: 'Prieiga' },
    { source: 'Full Access', target: 'Visiška prieiga' },
    { source: 'Read Only', target: 'Tik skaityti' },
    { source: 'No Access', target: 'Nėra prieigos' },
    { source: 'Read', target: 'Skaityti' },
    { source: 'Update', target: 'Atnaujinti' },
    { source: 'Write', target: 'Rašyti' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'Ištrinti' },
    { source: 'Custom Access', target: 'Pasirinktinė prieiga' },
    { source: 'Read, create, update and delete data', target: 'Skaityti, kurti, atnaujinti ir ištrinti duomenis' },
    { source: 'Choose allowed operations granularly', target: 'Pasirinkite leistinas operacijas smulkiai' },
    { source: 'Without any access to data', target: 'Be prieigos prie duomenų' },
    { source: 'Name', target: 'Vardas' },
    { source: 'Active', target: 'Aktyvus' },
    { source: 'Settings', target: 'Nustatymai' },
    { source: 'Members and Teams', target: 'Nariai ir komandos' },
    { source: 'App Builder', target: 'Programos kūrėjas' },
    { source: 'Collection Permissions', target: 'Kolekcijos leidimai' },
    { source: "Grant permissions to app's collection", target: 'Suteikti leidimus programos kolekcijai' },
    { source: 'Collection', target: 'Kolekcija' },
    {
      source: 'Limit access to your data by team properties',
      target: 'Apriboti prieigą prie jūsų duomenų pagal komandos savybes'
    },
    { source: 'Save Team', target: 'Išsaugoti komandą' },
    { source: 'Create Team', target: 'Sukurti komandą' },
    { source: 'Value', target: 'Vertė' },
    { source: 'No properties specified', target: 'Nenurodyta jokių savybių' },

    // Navigation
    { source: 'Current App', target: 'Esama programa' },
    { source: 'Home', target: 'Pagrindinis' },

    // Profile
    {
      source: 'We are fetching user data, please, wait...',
      target: 'Gauname vartotojo duomenis, prašome palaukti...'
    },
    { source: 'Profile Settings', target: 'Profilio nustatymai' },
    { source: 'Basic information about your account.', target: 'Pagrindinė informacija apie jūsų paskyrą.' },
    { source: 'Photo', target: 'Nuotrauka' },
    { source: 'your photo', target: 'jūsų nuotrauka' },
    { source: 'Change', target: 'Keisti' },
    { source: 'Upload', target: 'Įkelti' },
    { source: 'Photo was successfully updated', target: 'Nuotrauka sėkmingai atnaujinta' },
    { source: 'Photo was successfully deleted', target: 'Nuotrauka sėkmingai ištrinta' },
    { source: 'First Name', target: 'Vardas' },
    { source: 'Last Name', target: 'Pavardė' },
    { source: 'Your Email', target: 'Jūsų el. paštas' },
    { source: 'Email Change', target: 'El. pašto keitimas' },
    { source: 'New Email', target: 'Naujas el. paštas' },
    { source: 'Change Email', target: 'Keisti el. paštą' },
    { source: 'Check your inbox', target: 'Patikrinkite savo pašto dėžutę' },
    { source: 'Confirmation Email was sent to {0}', target: 'Patvirtinimo el. laiškas išsiųstas {0}' },
    { source: 'Changing Email failed', target: 'Nepavyko pakeisti el. pašto' },
    { source: 'Password Change', target: 'Slaptažodžio keitimas' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target:
        'Slaptažodis turi būti pakankamai stiprus, kad apsaugotų jūsų paskyrą, todėl sudarykite jį iš bent 12 simbolių.'
    },
    { source: 'Current Password', target: 'Dabartinis slaptažodis' },
    { source: 'New Password', target: 'Naujas slaptažodis' },
    { source: 'Confirm New Password', target: 'Patvirtinkite naują slaptažodį' },
    { source: 'Change Password', target: 'Keisti slaptažodį' },
    {
      source: 'Current password was successfully updated, all other sessions will be logged out shortly',
      target: 'Dabartinis slaptažodis sėkmingai atnaujintas, visos kitos sesijos netrukus bus atjungtos'
    },
    { source: 'Saving current password failed', target: 'Nepavyko išsaugoti dabartinio slaptažodžio' },
    { source: 'Short password', target: 'Trumpas slaptažodis' },
    { source: "Passwords don't match", target: 'Slaptažodžiai nesutampa' },
    { source: 'Personal Preferences', target: 'Asmeniniai nustatymai' },
    { source: 'Language', target: 'Kalba' },
    { source: 'Timezone', target: 'Laiko juosta' },
    { source: 'Current time in {0} is', target: 'Dabartinis laikas {0} yra' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'Pritaikykite papildomus nustatymus savo paskyrai.'
    },
    { source: 'News & Proposals', target: 'Naujienos ir pasiūlymai' },
    {
      source: 'Subscribe to our updates and proposals.',
      target: 'Prenumeruokite mūsų atnaujinimus ir pasiūlymus.'
    },
    { source: 'Save changes', target: 'Išsaugoti pakeitimus' },
    { source: 'Current user was successfully updated', target: 'Dabartinis vartotojas sėkmingai atnaujintas' },
    { source: 'Saving current user failed', target: 'Nepavyko išsaugoti dabartinio vartotojo' },

    // My Apps
    { source: 'Type to search...', target: 'Rašykite paieškai...' },
    { source: 'My Apps', target: 'Mano programos' },
    { source: 'New App', target: 'Nauja programa' },
    { source: 'Builder', target: 'Kūrėjas' },
    { source: 'App', target: 'Programa' },
    { source: 'continue install', target: 'tęsti diegimą' },
    { source: 'Open builder', target: 'Atidaryti kūrėją' },
    { source: 'View published', target: 'Peržiūrėti publikuotą' },
    { source: 'Delete App', target: 'Ištrinti programą' },
    { source: 'Start from a template', target: 'Pradėti nuo šablono' },
    { source: 'Preview', target: 'Peržiūra' },
    { source: 'Contact Support', target: 'Susisiekti su palaikymu' },
    { source: 'Documentation', target: 'Dokumentacija' },
    { source: 'Feature Requests', target: 'Funkcijų užklausos' },
    { source: 'See What’s New', target: 'Žiūrėti naujienas' },
    { source: 'Search templates...', target: 'Ieškoti šablonų...' },
    { source: 'any', target: 'bet koks' },
    { source: 'more', target: 'daugiau' },
    { source: 'Choose Data Source', target: 'Pasirinkti duomenų šaltinį' },
    { source: 'works with 30+ data sources', target: 'veikia su daugiau nei 30 duomenų šaltinių' },
    { source: 'Use this template', target: 'Naudoti šį šabloną' },
    { source: 'stores data in Jet Tables', target: 'saugo duomenis Jet lentelėse' },
    { source: 'New Data', target: 'Nauji duomenys' },
    { source: 'using {0}', target: 'naudojant {0}' },
    { source: "Can't find resource you're looking for?", target: 'Nepavyksta rasti ieškomo šaltinio?' },
    { source: 'Admin Panel', target: 'Administratoriaus panelė' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'Sąrašas, kūrimas ir atnaujinimas (CRUD) operacijos pagal jūsų duomenis'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target:
        'Sukurti pritaikytą administratoriaus sąsają, pagrįstą bet kokiomis duomenų bazėmis, programomis ir API, kaip Stripe, Twilio ir GraphQL.'
    },
    { source: 'All Integrations', target: 'Visos integracijos' },
    { source: 'Databases', target: 'Duomenų bazės' },
    { source: 'APIs', target: 'API' },
    { source: 'Frameworks', target: 'Sistemos' },
    { source: 'Storages', target: 'Saugyklos' },

    // Sign In
    { source: 'Good morning', target: 'Labas rytas' },
    { source: 'Good afternoon', target: 'Laba diena' },
    { source: 'Good evening', target: 'Labas vakaras' },
    { source: 'Sign In', target: 'Prisijungti' },
    { source: 'Welcome Back.', target: 'Sveiki sugrįžę.' },
    { source: 'Sign in with {0}', target: 'Prisijungti su {0}' },
    { source: 'or login with', target: 'arba prisijungti su' },
    { source: 'Enter E-mail', target: 'Įveskite el. paštą' },
    { source: 'Enter password', target: 'Įvesk slaptažodį' },
    { source: 'Login', target: 'Prisijungti' },
    { source: 'Create new account', target: 'Sukurti naują paskyrą' },
    { source: 'Forgot my password', target: 'Pamiršote slaptažodį' },
    { source: 'required', target: 'privaloma' },
    { source: 'incorrect Email', target: 'neteisingas el. paštas' },
    { source: 'Minimum password length {0}', target: 'Minimali slaptažodžio ilgis {0}' },
    { source: 'Unable to Sign In', target: 'Nepavyksta prisijungti' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'Pradėkite <span class="auth-form__accent">nemokamai šiandien</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target: 'Kortelė nereikalinga. Gaunate visą pažangią funkcionalumą nemokamai 14 dienų PRO bandomuoju laikotarpiu.'
    },
    { source: 'Enter First Name', target: 'Įveskite vardą' },
    { source: 'Enter Last Name (optional)', target: 'Įveskite pavardę (neprivaloma)' },
    { source: 'Enter Email', target: 'Įveskite el. paštą' },
    { source: 'Password', target: 'Slaptažodis' },
    { source: 'Repeat Password', target: 'Pakartokite slaptažodį' },
    {
      source: 'By signing in you’re okay with our',
      target: 'Pasirašydami sutinkate su mūsų'
    },
    {
      source: 'Creating an account means you’re okay with our',
      target: 'Sukurdamas paskyrą jūs sutinkate su mūsų'
    },
    { source: 'Terms of Service', target: 'Paslaugų teikimo sąlygos' },
    { source: 'Privacy Policy', target: 'Privatumo politika' },
    { source: 'and', target: 'ir' },
    { source: 'Create your free account', target: 'Sukurti savo nemokamą paskyrą' },
    { source: 'Already have an account', target: 'Jau turite paskyrą' },
    { source: 'Unable to Sign Up', target: 'Nepavyksta užsiregistruoti' },

    // Restore password
    { source: 'Reset your password', target: 'Atkurkite savo slaptažodį' },
    { source: 'Email Address', target: 'El. pašto adresas' },
    { source: 'Reset password', target: 'Atkurkite slaptažodį' },
    { source: 'Return to Sign In', target: 'Grįžti į prisijungimą' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'Patikrinkite savo el. paštą – <strong>{0}</strong>. Mes išsiuntėme patvirtinimo nuorodą, kurią turėtumėte sekti, kad pakeistumėte savo slaptažodį.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be at least 8 characters.',
      target: 'Beveik baigta, tiesiog įveskite žemiau naują slaptažodį. <br>Turi būti bent 8 simbolių.'
    },
    { source: 'Reset password & Sign In', target: 'Atkurti slaptažodį ir prisijungti' },
    { source: 'Unable to Send Code', target: 'Nepavyksta išsiųsti kodo' },
    { source: 'Unable to Change Password', target: 'Nepavyksta pakeisti slaptažodžio' },

    // Email Verification
    { source: 'Email Verification', target: 'El. pašto patvirtinimas' },
    { source: 'Resend verification code', target: 'Išsiųsti patvirtinimo kodą dar kartą' },
    { source: 'Verification email sent', target: 'Patvirtinimo el. laiškas išsiųstas' },
    { source: 'Your Email is now verified', target: 'Jūsų el. paštas dabar patvirtintas' },
    { source: 'Request is incorrect', target: 'Užklausa neteisinga' },

    // Invites
    {
      source: 'Join <span class="auth-form__accent">{0}</span>',
      target: 'Prisijunkite prie <span class="auth-form__accent">{0}</span>'
    },
    {
      source: '<strong>{0}</strong> has invited you to join <strong>{1}</strong>',
      target: '<strong>{0}</strong> pakvietė jus prisijungti prie <strong>{1}</strong>'
    },
    {
      source: 'Someone has invited you to join <strong>{0}</strong>',
      target: 'Kažkas pakvietė jus prisijungti prie <strong>{0}</strong>'
    },
    {
      source: 'You are joining <strong>{0}</strong> using invite link',
      target: 'Prisijungiate prie <strong>{0}</strong> naudodamiesi kvietimo nuoroda'
    },
    { source: 'Join', target: 'Prisijungti' },
    { source: 'Go to home page', target: 'Eiti į pagrindinį puslapį' },
    { source: 'Invite link is wrong', target: 'Kvietimo nuoroda neteisinga' },
    {
      source:
        'Looks like your invitation link has expired or maybe you have followed the wrong link. Please try to ask to invite your again.',
      target:
        'Atrodo, kad jūsų kvietimo nuoroda baigėsi arba galbūt sekėte netinkamą nuorodą. Prašome pabandyti paprašyti pakviesti jus dar kartą.'
    },
    {
      source: 'Unfortunately we failed to load information about this invitation',
      target: 'Deja, nepavyko įkelti informacijos apie šį kvietimą'
    },

    // Users & Teams
    { source: 'Members of {0}', target: 'Nariai {0}' },
    { source: 'How to get started', target: 'Kaip pradėti' },
    { source: 'Users API', target: 'Vartotojų API' },
    { source: 'Teams API', target: 'Komandų API' },
    { source: 'Invite Member', target: 'Pakviesti narį' },
    { source: 'Add User property', target: 'Pridėti vartotojo savybę' },
    { source: 'Add Team property', target: 'Pridėti komandos savybę' },
    { source: 'Edit property', target: 'Redaguoti savybę' },
    { source: 'Delete property', target: 'Ištrinti savybę' },
    { source: 'Users', target: 'Vartotojai' },
    { source: 'Teams', target: 'Komandos' },
    { source: 'Search members', target: 'Ieškoti narių' },
    { source: 'Search teams', target: 'Ieškoti komandų' },
    { source: '{0} pages', target: '{0} puslapių' },
    { source: 'No members', target: 'Nėra narių' }
  ]
};

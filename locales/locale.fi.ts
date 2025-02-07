import { Locale } from './locale';

export const locale: Locale = {
  name: 'finnish',
  language: 'fi',
  items: [
    // General
    { source: 'Save', target: 'Tallenna' },
    { source: 'Create', target: 'Luo' },
    { source: 'Duplicating', target: 'Monistetaan' },
    { source: 'Duplicate', target: 'Monista' },
    { source: 'Mass Edit', target: 'Massamuokkaus' },
    { source: 'Export', target: 'Vie' },
    { source: 'Import', target: 'Tuo' },
    { source: 'Delete', target: 'Poista' },
    { source: 'Continue', target: 'Jatka' },
    { source: 'Cancel', target: 'Peruuta' },
    { source: 'Loading', target: 'Ladataan' },
    { source: 'Please wait...', target: 'Odota...' },
    { source: 'Loading failed', target: 'Lataus epäonnistui' },
    { source: 'Unknown error', target: 'Tuntematon virhe' },
    { source: 'Add', target: 'Lisää' },
    { source: 'or', target: 'tai' },
    { source: 'Hours', target: 'Tunnit' },
    { source: 'Minutes', target: 'Minuutit' },
    { source: 'Seconds', target: 'Sekunnit' },
    { source: 'Saved', target: 'Tallennettu' },
    { source: 'Error', target: 'Virhe' },
    { source: 'Page not found', target: 'Sivua ei löydy' },
    {
      source: 'The specified address is incorrect, or the page does not exist',
      target: 'Annettu osoite on virheellinen tai sivua ei ole olemassa'
    },
    { source: 'Not allowed', target: 'Ei sallittu' },
    {
      source: "You don't have permissions to access this page",
      target: 'Sinulla ei ole oikeuksia tälle sivulle'
    },

    // Actions
    { source: 'Action executed', target: 'Toiminto suoritettu' },
    { source: 'Action executed successfully', target: 'Toiminto suoritettu onnistuneesti' },
    { source: 'Action failed', target: 'Toiminto epäonnistui' },
    {
      source: "You don't have permission for run this operation",
      target: 'Sinulla ei ole oikeuksia suorittaa tätä toimintoa'
    },
    { source: 'Specify parameters', target: 'Määritä parametrit' },
    { source: 'Executing action', target: 'Toimintaa suoritetaan' },
    { source: 'You are executing <strong>{0}</strong>', target: 'Suoritat <strong>{0}</strong>' },
    { source: 'Please fill in the parameters below.', target: 'Täytä alla olevat parametrit.' },
    { source: 'Execute', target: 'Suorita' },
    { source: 'Executing', target: 'Suoritetaan' },
    { source: 'Finished', target: 'Valmis' },
    { source: 'Done', target: 'Tehty' },

    // Export
    { source: 'Records Export', target: 'Tietueiden vienti' },
    { source: 'Downloading records data as a file', target: 'Ladataan tietueita tiedostona' },
    { source: 'Choose format', target: 'Valitse formaatti' },
    { source: 'Number of exporting records', target: 'Vietävien tietueiden määrä' },
    { source: { label: 'Export', context: 'submit' }, target: 'Vie' },
    { source: 'Exporting', target: 'Viedään' },
    { source: 'Export completed', target: 'Vienti valmis' },
    { source: 'Failed to export', target: 'Vienti epäonnistui' },

    // Components
    { source: 'optional', target: 'valinnainen' },
    { source: 'choose', target: 'valitse' },
    { source: 'Clear value', target: 'Tyhjennä arvo' },
    { source: 'loading...', target: 'ladataan...' },
    { source: 'Nothing found', target: 'Ei tuloksia' },
    { source: 'Search...', target: 'Haku...' },
    { source: 'Enter at least {0} characters', target: 'Syötä vähintään {0} merkkiä' },
    { source: 'No options', target: 'Ei vaihtoehtoja' },
    { source: 'Drop files here or', target: 'Vedä tiedostot tähän tai' },
    { source: 'Upload new', target: 'Lataa uusi' },
    { source: 'Clear', target: 'Tyhjennä' },
    { source: 'Download', target: 'Lataa' },
    { source: 'Choose file', target: 'Valitse tiedosto' },
    { source: 'Choose files', target: 'Valitse tiedostot' },
    { source: 'Scan with Camera', target: 'Skannaa kameralla' },
    { source: 'Scan Image file', target: 'Skannaa kuvatiedosto' },
    { source: 'Choose camera', target: 'Valitse kamera' },
    { source: 'Stop scanning', target: 'Lopeta skannaus' },
    { source: 'Scan again', target: 'Skannaa uudelleen' },
    { source: 'Use this scan', target: 'Käytä tätä skannausta' },
    { source: 'Failed to scan', target: 'Skannaus epäonnistui' },
    {
      source: 'Code failed to scan, please try another image',
      target: 'Skannaus epäonnistui, yritä toista kuvaa'
    },
    { source: 'current', target: 'nykyinen' },
    { source: 'Day', target: 'Päivä' },
    { source: 'Week', target: 'Viikko' },
    { source: 'Month', target: 'Kuukausi' },
    { source: 'Year', target: 'Vuosi' },
    { source: 'Today', target: 'Tänään' },
    { source: 'Daily', target: 'Päivittäin' },
    { source: 'Weekly', target: 'Viikoittain' },
    { source: 'Monthly', target: 'Kuukausittain' },
    { source: 'Quarterly', target: 'Neljännesvuosittain' },
    { source: 'Yearly', target: 'Vuosittain' },
    { source: 'Hourly', target: 'Tunneittain' },
    { source: 'Minutely', target: 'Minuuttikohtaisesti' },
    { source: 'Since', target: 'Alkaen' },
    { source: 'Before', target: 'Ennen' },
    { source: 'Between', target: 'Välillä' },
    { source: 'From date', target: 'Päivämäärästä' },
    { source: 'To date', target: 'Päivämäärään' },
    { source: 'Coordinates', target: 'Koordinaatit' },
    { source: 'Latitude', target: 'Leveysaste' },
    { source: 'Longitude', target: 'Pituusaste' },
    { source: 'Default color', target: 'Oletusväri' },
    { source: 'not specified', target: 'ei määritelty' },
    { source: 'Sign using your finger or pointer', target: 'Kirjoita sormella tai osoittimella' },

    // List components
    { source: 'Filter', target: 'Suodatin' },
    { source: 'Filter by field', target: 'Suodata kentän mukaan' },
    { source: 'Filter by...', target: 'Suodata...' },
    { source: 'Back', target: 'Takaisin' },
    { source: 'Back to {0} fields', target: 'Takaisin {0} kenttiin' },
    { source: 'Choose {0} from list', target: 'Valitse {0} listasta' },
    { source: '{0} fields', target: '{0} kenttää' },
    { source: '{0} relationships', target: '{0} suhteet' },
    { source: 'Aggregate {0}', target: 'Yhdistä {0}' },
    { source: 'No fields to select', target: 'Ei kenttiä valittavana' },
    { source: 'Enter value...', target: 'Syötä arvo...' },
    { source: 'Exclude', target: 'Sulje pois' },
    { source: 'Actions', target: 'Toiminnot' },
    { source: 'Search', target: 'Haku' },
    { source: 'Sort 1 → 9', target: 'Lajittele 1 → 9' },
    { source: 'Sort 9 → 1', target: 'Lajittele 9 → 1' },
    { source: 'Sort A → Z', target: 'Lajittele A → Z' },
    { source: 'Sort Z → A', target: 'Lajittele Z → A' },
    { source: 'Refresh automatically', target: 'Päivitä automaattisesti' },
    { source: 'All', target: 'Kaikki' },
    { source: 'Selected', target: 'Valitut' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'Valitettavasti kyselyäsi vastaavia {0} ei löytynyt'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'Haemme {0}, odota hetki...' },
    { source: 'Add filter', target: 'Lisää suodatin' },
    { source: 'Delete this filter', target: 'Poista tämä suodatin' },
    { source: 'Toggle ordering', target: 'Vaihda järjestystä' },
    { source: 'Not configured', target: 'Ei konfiguroitu' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'Valitettavasti tämä komponentti ei ole vielä konfiguroitu'
    },
    { source: 'records', target: 'tietueet' },
    { source: '{0} items', target: '{0} kohdetta' },

    // Menu
    { source: 'Users & Teams', target: 'Käyttäjät ja tiimit' },
    { source: 'Billing', target: 'Laskutus' },
    { source: 'Billing & Plans', target: 'Laskutus ja suunnitelmat' },
    { source: 'API keys', target: 'API-avaimet' },
    { source: 'Dark Mode', target: 'Tumma tila' },
    { source: 'Light Mode', target: 'Vaalea tila' },
    { source: 'Disable Staff', target: 'Poista henkilökunta käytöstä' },
    { source: 'Enable Staff', target: 'Ota henkilökunta käyttöön' },
    { source: 'Manage Templates', target: 'Hallitse malleja' },
    { source: 'Logout', target: 'Kirjaudu ulos' },
    { source: 'Activity Log', target: 'Toimintaloki' },
    { source: 'Collaborations', target: 'Yhteistyöt' },
    { source: 'Open Visual Builder', target: 'Avaa Visual Builder' },

    // Filters
    { source: 'equals', target: 'on yhtä kuin' },
    { source: 'does not equal', target: 'ei ole yhtä kuin' },
    { source: '{0} equals {1}', target: '{0} on yhtä kuin {1}' },
    { source: '{0} does not equal {1}', target: '{0} ei ole yhtä kuin {1}' },

    { source: 'contains', target: 'sisältää' },
    { source: 'does not contain', target: 'ei sisällä' },
    { source: '{0} contains {1}', target: '{0} sisältää {1}' },
    { source: '{0} not contains {1}', target: '{0} ei sisällä {1}' },

    { source: 'starts with', target: 'alkaa' },
    { source: 'does not start with', target: 'ei ala' },
    { source: '{0} starts with {1}', target: '{0} alkaa {1}' },
    { source: '{0} does not start with {1}', target: '{0} ei ala {1}' },

    { source: 'ends with', target: 'päättyy' },
    { source: 'does not end with', target: 'ei pääty' },
    { source: '{0} ends with {1}', target: '{0} päättyy {1}' },
    { source: '{0} does not end with {1}', target: '{0} ei pääty {1}' },

    { source: 'greater than', target: 'suurempi kuin' },
    { source: 'is not greater than', target: 'ei ole suurempi kuin' },
    { source: '{0} is greater than {1}', target: '{0} on suurempi kuin {1}' },
    { source: '{0} not greater than {1}', target: '{0} ei ole suurempi kuin {1}' },

    { source: 'greater than or equals', target: 'suurempi tai yhtä suuri kuin' },
    { source: 'is not greater than or equals', target: 'ei ole suurempi tai yhtä suuri kuin' },
    { source: '{0} is greater than or equals {1}', target: '{0} on suurempi tai yhtä suuri kuin {1}' },
    { source: '{0} is not greater than or equals {1}', target: '{0} ei ole suurempi tai yhtä suuri kuin {1}' },

    { source: 'less than', target: 'pienempi kuin' },
    { source: 'is not less than', target: 'ei ole pienempi kuin' },
    { source: '{0} is less than {1}', target: '{0} on pienempi kuin {1}' },
    { source: '{0} is not less than {1}', target: '{0} ei ole pienempi kuin {1}' },

    { source: 'less than or equals', target: 'pienempi tai yhtä suuri kuin' },
    { source: 'is not less than or equals', target: 'ei ole pienempi tai yhtä suuri kuin' },
    { source: '{0} is less than or equals {1}', target: '{0} on pienempi tai yhtä suuri kuin {1}' },
    { source: '{0} is not less than or equals {1}', target: '{0} ei ole pienempi tai yhtä suuri kuin {1}' },

    { source: 'one of', target: 'yksi seuraavista' },
    { source: 'is one of', target: 'on yksi seuraavista' },
    { source: 'is not one of', target: 'ei ole yksi seuraavista' },
    { source: '{0} is one of {1}', target: '{0} on yksi seuraavista {1}' },
    { source: '{0} is not one of {1}', target: '{0} ei ole yksi seuraavista {1}' },

    { source: 'is null', target: 'on tyhjä' },
    { source: 'is not null', target: 'ei ole tyhjä' },
    { source: '{0} is null', target: '{0} on tyhjä' },
    { source: '{0} is not null', target: '{0} ei ole tyhjä' },

    { source: 'is future', target: 'tulevaisuudessa' },
    { source: 'in the future', target: 'tulevaisuudessa' },
    { source: 'is not in the future', target: 'ei ole tulevaisuudessa' },
    { source: '{0} is in the future', target: '{0} on tulevaisuudessa' },
    { source: '{0} is not in the future', target: '{0} ei ole tulevaisuudessa' },

    { source: 'is past', target: 'menneisyydessä' },
    { source: 'in the past', target: 'menneisyydessä' },
    { source: 'is not in the past', target: 'ei ole menneisyydessä' },
    { source: '{0} is in the past', target: '{0} on menneisyydessä' },
    { source: '{0} is not in the past', target: '{0} ei ole menneisyydessä' },

    { source: 'is Today', target: 'tänään' },
    { source: 'today', target: 'tänään' },
    { source: 'is not today', target: 'ei ole tänään' },
    { source: '{0} is today', target: '{0} on tänään' },
    { source: '{0} is not today', target: '{0} ei ole tänään' },

    { source: 'is Yesterday', target: 'eilen' },
    { source: 'yesterday', target: 'eilen' },
    { source: 'is not yesterday', target: 'ei ole eilen' },
    { source: '{0} is yesterday', target: '{0} on eilen' },
    { source: '{0} is not yesterday', target: '{0} ei ole eilen' },

    { source: 'is Last Week', target: 'viime viikolla' },
    { source: 'last week', target: 'viime viikolla' },
    { source: 'is not last week', target: 'ei ole viime viikolla' },
    { source: '{0} is last week', target: '{0} on viime viikolla' },
    { source: '{0} is not last week', target: '{0} ei ole viime viikolla' },

    { source: 'is Last Month', target: 'viime kuussa' },
    { source: 'last month', target: 'viime kuussa' },
    { source: 'is not last month', target: 'ei ole viime kuussa' },
    { source: '{0} is last month', target: '{0} on viime kuussa' },
    { source: '{0} is not last month', target: '{0} ei ole viime kuussa' },

    { source: 'is Last Quarter', target: 'viime neljänneksellä' },
    { source: 'last quarter', target: 'viime neljänneksellä' },
    { source: 'is not last quarter', target: 'ei ole viime neljänneksellä' },
    { source: '{0} is last quarter', target: '{0} on viime neljänneksellä' },
    { source: '{0} is not last quarter', target: '{0} ei ole viime neljänneksellä' },

    { source: 'is Last Year', target: 'viime vuonna' },
    { source: 'last year', target: 'viime vuonna' },
    { source: 'is not last year', target: 'ei ole viime vuonna' },
    { source: '{0} is last year', target: '{0} on viime vuonna' },
    { source: '{0} is not last year', target: '{0} ei ole viime vuonna' },

    { source: 'is Last X Days', target: 'viime X päivänä' },
    { source: 'last X days', target: 'viime X päivänä' },
    { source: 'is not last X days', target: 'ei ole viime X päivänä' },
    { source: '{0} is last {1} days', target: '{0} on viimeiset {1} päivää' },
    { source: '{0} is not last {1} days', target: '{0} ei ole viimeiset {1} päivää' },

    { source: 'is Current Week', target: 'tällä viikolla' },
    { source: 'current week', target: 'tällä viikolla' },
    { source: 'is not current week', target: 'ei ole tällä viikolla' },
    { source: '{0} is current week', target: '{0} on tällä viikolla' },
    { source: '{0} is not current week', target: '{0} ei ole tällä viikolla' },

    { source: 'is Current Month', target: 'tässä kuussa' },
    { source: 'current month', target: 'tässä kuussa' },
    { source: 'is not current month', target: 'ei ole tässä kuussa' },
    { source: '{0} is current month', target: '{0} on tässä kuussa' },
    { source: '{0} is not current month', target: '{0} ei ole tässä kuussa' },

    { source: 'is Current Quarter', target: 'tällä neljänneksellä' },
    { source: 'current quarter', target: 'tällä neljänneksellä' },
    { source: 'is not current quarter', target: 'ei ole tällä neljänneksellä' },
    { source: '{0} is current quarter', target: '{0} on tällä neljänneksellä' },
    { source: '{0} is not current quarter', target: '{0} ei ole tällä neljänneksellä' },

    { source: 'is Current Year', target: 'tänä vuonna' },
    { source: 'current year', target: 'tänä vuonna' },
    { source: 'is not current year', target: 'ei ole tänä vuonna' },
    { source: '{0} is current year', target: '{0} on tänä vuonna' },
    { source: '{0} is not current year', target: '{0} ei ole tänä vuonna' },

    { source: 'is Previous Week', target: 'edellisellä viikolla' },
    { source: 'previous week', target: 'edellisellä viikolla' },
    { source: 'is not previous week', target: 'ei ole edellisellä viikolla' },
    { source: '{0} is previous week', target: '{0} on edellisellä viikolla' },
    { source: '{0} is not previous week', target: '{0} ei ole edellisellä viikolla' },

    { source: 'is Previous Month', target: 'edellisessä kuussa' },
    { source: 'previous month', target: 'edellisessä kuussa' },
    { source: 'is not previous month', target: 'ei ole edellisessä kuussa' },
    { source: '{0} is previous month', target: '{0} on edellisessä kuussa' },
    { source: '{0} is not previous month', target: '{0} ei ole edellisessä kuussa' },

    { source: 'is Previous Quarter', target: 'edellisellä neljänneksellä' },
    { source: 'previous quarter', target: 'edellisellä neljänneksellä' },
    { source: 'is not previous quarter', target: 'ei ole edellisellä neljänneksellä' },
    { source: '{0} is previous quarter', target: '{0} on edellisellä neljänneksellä' },
    { source: '{0} is not previous quarter', target: '{0} ei ole edellisellä neljänneksellä' },

    { source: 'is Previous Year', target: 'edellisenä vuonna' },
    { source: 'previous year', target: 'edellisenä vuonna' },
    { source: 'is not previous year', target: 'ei ole edellisenä vuonna' },
    { source: '{0} is previous year', target: '{0} on edellisenä vuonna' },
    { source: '{0} is not previous year', target: '{0} ei ole edellisenä vuonna' },

    { source: 'is Previous X Days', target: 'edellisinä X päivänä' },
    { source: 'previous X days', target: 'edellisinä X päivänä' },
    { source: 'is not previous X days', target: 'ei ole edellisinä X päivänä' },
    { source: '{0} is previous {1} days', target: '{0} on edellisinä {1} päivänä' },
    { source: '{0} is not previous {1} days', target: '{0} ei ole edellisinä {1} päivänä' },

    { source: 'is empty', target: 'on tyhjä' },
    { source: 'is not empty', target: 'ei ole tyhjä' },
    { source: '{0} is empty', target: '{0} on tyhjä' },
    { source: '{0} is not empty', target: '{0} ei ole tyhjä' },

    { source: 'covered by', target: 'kattaa' },
    { source: 'is not covered by', target: 'ei kata' },
    { source: '{0} covered by {1}', target: '{0} kattaa {1}' },
    { source: '{0} is not covered by {1}', target: '{0} ei kata {1}' },

    // Activity log
    { source: 'No activities found', target: 'Toimintoja ei löytynyt' },
    {
      source: 'Start to working with data to log activities.',
      target: 'Aloita työskentely datan kanssa kirjataksesi toiminnot.'
    },
    { source: 'All Activity', target: 'Kaikki toiminnot' },
    { source: 'Create Record', target: 'Luo tietue' },
    { source: 'Update Record', target: 'Päivitä tietue' },
    { source: 'Delete Record', target: 'Poista tietue' },
    { source: 'All Members', target: 'Kaikki jäsenet' },

    // Collaboration
    { source: 'Timeline', target: 'Aikajana' },
    { source: 'Messages', target: 'Viestit' },
    { source: 'Activity', target: 'Toiminnot' },
    { source: 'Start chatting with your team', target: 'Aloita keskustelu tiimisi kanssa' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'Kirjaa viesti nykyiseltä sivulta tärkeiden tietojen seuraamiseksi.'
    },
    { source: 'Your Message', target: 'Viestisi' },
    { source: 'Send', target: 'Lähetä' },

    // Share
    { source: 'Invite members', target: 'Kutsu jäseniä' },
    { source: 'Public share', target: 'Julkinen jakaminen' },
    { source: 'Sign Up', target: 'Rekisteröidy' },
    { source: 'Members', target: 'Jäsenet' },
    { source: 'Invite with Email', target: 'Kutsu sähköpostilla' },
    { source: 'Invite someone...', target: 'Kutsu joku...' },
    { source: 'Send Invite', target: 'Lähetä kutsu' },
    {
      source: 'Limit access to your data by user properties',
      target: 'Rajoita pääsyä dataasi käyttäjäominaisuuksilla'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: 'Syötä käyttäjän sähköpostiosoite, jolle haluat lähettää yhteistyökutsun.'
    },
    { source: 'Copy', target: 'Kopioi' },
    { source: 'Invite with Link', target: 'Kutsu linkillä' },
    { source: 'Remove link', target: 'Poista linkki' },
    { source: 'Add Invite Link', target: 'Lisää kutsulinkki' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'Kuka tahansa internetissä tällä linkillä voi liittyä valittuun tiimiin.'
    },
    { source: 'Pending Invites', target: 'Odottaa kutsuja' },
    { source: 'Cancel invite', target: 'Peruuta kutsu' },
    { source: 'Active Members', target: 'Aktiiviset jäsenet' },
    { source: 'Remove member', target: 'Poista jäsen' },
    {
      source: 'You are setting sharing for the current page',
      target: 'Olet asettamassa jakamista tälle sivulle'
    },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'Olet asettamassa jakamista kaikille sovelluksen sivuille.'
    },
    { source: 'Public access link', target: 'Julkinen linkki' },
    { source: 'Updating public access...', target: 'Päivitetään julkista pääsyä...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'Kuka tahansa tällä linkillä voi tarkastella nykyistä sivua. Näin voit myös upottaa nykyisen sivun toiselle verkkosivustolle.'
    },
    { source: 'Embed code (IFRAME)', target: 'Upotus koodi (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: 'Liitä tämä koodi verkkosivustosi HTML-koodiin, johon haluat upottaa nykyisen sivun.'
    },
    { source: 'link', target: 'linkki' },
    { source: 'invited', target: 'kutsuttu' },
    { source: 'Choose Team', target: 'Valitse tiimi' },
    { source: 'App Teams', target: 'Sovellustiimit' },
    { source: 'Built-In Teams', target: 'Sisäänrakennetut tiimit' },
    { source: 'Clear Team', target: 'Tyhjennä tiimi' },
    { source: 'Can build application and modify data', target: 'Voi kehittää sovelluksen ja muokata tietoja' },
    { source: 'Can modify data in application', target: 'Voi muokata tietoja sovelluksessa' },
    { source: 'Can only view data without modification', target: 'Voi vain tarkastella tietoja ilman muokkausta' },
    { source: 'Add Team', target: 'Lisää tiimi' },
    { source: 'Edit Team', target: 'Muokkaa tiimiä' },
    { source: 'Adding Team', target: 'Lisätään tiimiä' },
    {
      source: 'Keep control over who has access to current App',
      target: 'Pidä hallinta siitä, kenellä on pääsy nykyiseen sovellukseen'
    },
    { source: 'Enter Team Name', target: 'Syötä tiimin nimi' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'Kirjoita tiimin nimi, esim: Tuki, Myynti, Markkinointi, jne.'
    },
    { source: 'Add a new member to this team.', target: 'Lisää uusi jäsen tähän tiimiin.' },
    { source: 'Invite new member', target: 'Kutsu uusi jäsen' },
    { source: 'User', target: 'Käyttäjä' },
    { source: 'Date Added', target: 'Lisäyspäivä' },
    { source: 'You', target: 'Sinä' },
    { source: 'Edit', target: 'Muokkaa' },
    { source: 'No users in this team', target: 'Ei käyttäjiä tässä tiimissä' },
    { source: 'Page Permissions', target: 'Sivun käyttöoikeudet' },
    { source: 'App Permissions', target: 'Sovelluskäyttöoikeudet' },
    { source: 'Properties', target: 'Ominaisuudet' },
    { source: 'Page name', target: 'Sivun nimi' },
    { source: 'Access', target: 'Pääsy' },
    { source: 'Full Access', target: 'Täysi pääsy' },
    { source: 'Read Only', target: 'Vain luku' },
    { source: 'No Access', target: 'Ei pääsyä' },
    { source: 'Read', target: 'Lue' },
    { source: 'Update', target: 'Päivitä' },
    { source: 'Write', target: 'Kirjoita' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'Poista' },
    { source: 'Custom Access', target: 'Mukautettu pääsy' },
    { source: 'Read, create, update and delete data', target: 'Lue, luo, päivitä ja poista tietoja' },
    { source: 'Choose allowed operations granularly', target: 'Valitse sallitut toiminnot tarkasti' },
    { source: 'Without any access to data', target: 'Ilman pääsyä tietoihin' },
    { source: 'Name', target: 'Nimi' },
    { source: 'Active', target: 'Aktiivinen' },
    { source: 'Settings', target: 'Asetukset' },
    { source: 'Members and Teams', target: 'Jäsenet ja tiimit' },
    { source: 'App Builder', target: 'Sovellusrakentaja' },
    { source: 'Collection Permissions', target: 'Kokoelman käyttöoikeudet' },
    { source: "Grant permissions to app's collection", target: 'Myönnä käyttöoikeuksia sovelluksen kokoelmaan' },
    { source: 'Collection', target: 'Kokoelma' },
    { source: 'Limit access to your data by team properties', target: 'Rajoita tiimipääsyn perusteella tietosi' },
    { source: 'Save Team', target: 'Tallenna tiimi' },
    { source: 'Create Team', target: 'Luo tiimi' },
    { source: 'Value', target: 'Arvo' },
    { source: 'No properties specified', target: 'Ominaisuuksia ei määritelty' },

    // Navigation
    { source: 'Current App', target: 'Nykyinen Sovellus' },
    { source: 'Home', target: 'Koti' },

    // Profile
    { source: 'We are fetching user data, please, wait...', target: 'Haemme käyttäjätietoja, odota hetkinen...' },
    { source: 'Profile Settings', target: 'Profiiliasetukset' },
    { source: 'Basic information about your account.', target: 'Perustiedot tilistäsi.' },
    { source: 'Photo', target: 'Kuva' },
    { source: 'your photo', target: 'sinun kuvasi' },
    { source: 'Change', target: 'Vaihda' },
    { source: 'Upload', target: 'Lataa' },
    { source: 'Photo was successfully updated', target: 'Kuva onnistuneesti päivitetty' },
    { source: 'Photo was successfully deleted', target: 'Kuva onnistuneesti poistettu' },
    { source: 'First Name', target: 'Etunimi' },
    { source: 'Last Name', target: 'Sukunimi' },
    { source: 'Your Email', target: 'Sähköpostisi' },
    { source: 'Email Change', target: 'Sähköpostin Vaihto' },
    { source: 'New Email', target: 'Uusi Sähköposti' },
    { source: 'Change Email', target: 'Vaihda Sähköposti' },
    { source: 'Check your inbox', target: 'Tarkista postilaatikkosi' },
    { source: 'Confirmation Email was sent to {0}', target: 'Vahvistusviesti lähetetty osoitteeseen {0}' },
    { source: 'Changing Email failed', target: 'Sähköpostin vaihto epäonnistui' },
    { source: 'Password Change', target: 'Salasanan Vaihto' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target: 'Salasanan tulisi olla tarpeeksi vahva suojatakseen tilisi, joten tee siitä vähintään 12 merkkiä pitkä.'
    },
    { source: 'Current Password', target: 'Nykyinen Salasana' },
    { source: 'New Password', target: 'Uusi Salasana' },
    { source: 'Confirm New Password', target: 'Vahvista Uusi Salasana' },
    { source: 'Change Password', target: 'Vaihda Salasana' },
    {
      source: 'Current password was successfully updated, all other sessions will be logged out shortly',
      target: 'Nykyinen salasana on päivitetty onnistuneesti, kaikki muut istunnot kirjataan pian ulos'
    },
    { source: 'Saving current password failed', target: 'Nykyisen salasanan tallennus epäonnistui' },
    { source: 'Short password', target: 'Lyhyt salasana' },
    { source: "Passwords don't match", target: 'Salasanat eivät täsmää' },
    { source: 'Personal Preferences', target: 'Henkilökohtaiset Asetukset' },
    { source: 'Language', target: 'Kieli' },
    { source: 'Timezone', target: 'Aikavyöhyke' },
    { source: 'Current time in {0} is', target: 'Nykyinen aika kohteessa {0} on' },
    { source: 'Customize additional preferences for your account.', target: 'Mukauta lisäasetuksia tilillesi.' },
    { source: 'News & Proposals', target: 'Uutiset & Ehdotukset' },
    { source: 'Subscribe to our updates and proposals.', target: 'Tilaa päivityksemme ja ehdotuksemme.' },
    { source: 'Save changes', target: 'Tallenna muutokset' },
    { source: 'Current user was successfully updated', target: 'Nykyinen käyttäjä onnistuneesti päivitetty' },
    { source: 'Saving current user failed', target: 'Nykyisen käyttäjän tallennus epäonnistui' },

    // My Apps
    { source: 'Type to search...', target: 'Kirjoita hakeaksesi...' },
    { source: 'My Apps', target: 'Omat Sovellukset' },
    { source: 'New App', target: 'Uusi Sovellus' },
    { source: 'Builder', target: 'Rakentaja' },
    { source: 'App', target: 'Sovellus' },
    { source: 'continue install', target: 'jatka asennusta' },
    { source: 'Open builder', target: 'Avaa rakentaja' },
    { source: 'View published', target: 'Näytä julkaistu' },
    { source: 'Delete App', target: 'Poista Sovellus' },
    { source: 'Start from a template', target: 'Aloita mallista' },
    { source: 'Preview', target: 'Esikatselu' },
    { source: 'Contact Support', target: 'Ota yhteyttä tukeen' },
    { source: 'Documentation', target: 'Dokumentaatio' },
    { source: 'Feature Requests', target: 'Ominaisuuspyynnöt' },
    { source: 'See What’s New', target: 'Katso mitä uutta' },
    { source: 'Search templates...', target: 'Hae malleja...' },
    { source: 'any', target: 'mikä tahansa' },
    { source: 'more', target: 'lisää' },
    { source: 'Choose Data Source', target: 'Valitse Datalähde' },
    { source: 'works with 30+ data sources', target: 'toimii 30+ datalähteen kanssa' },
    { source: 'Use this template', target: 'Käytä tätä mallia' },
    { source: 'stores data in Jet Tables', target: 'tallentaa dataa Jet-taulukoihin' },
    { source: 'New Data', target: 'Uusi Data' },
    { source: 'using {0}', target: 'käyttää {0}' },
    { source: "Can't find resource you're looking for?", target: 'Etkö löydä etsimääsi resurssia?' },
    { source: 'Admin Panel', target: 'Ylläpitäjän Paneeli' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'Listaa, luo ja päivitä (CRUD) toiminnot datasi päällä'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target:
        'Luo mukautettu ylläpitäjän paneeli perustuen mihin tahansa tietokantoihin, sovelluksiin ja APIihin kuten Stripe, Twilio ja GraphQL.'
    },
    { source: 'All Integrations', target: 'Kaikki Integraatiot' },
    { source: 'Databases', target: 'Tietokannat' },
    { source: 'APIs', target: 'API:t' },
    { source: 'Frameworks', target: 'Frameworkit' },
    { source: 'Storages', target: 'Tallennustilat' },

    // Sign In
    { source: 'Good morning', target: 'Hyvää huomenta' },
    { source: 'Good afternoon', target: 'Hyvää iltapäivää' },
    { source: 'Good evening', target: 'Hyvää iltaa' },
    { source: 'Sign In', target: 'Kirjaudu sisään' },
    { source: 'Welcome Back.', target: 'Tervetuloa takaisin.' },
    { source: 'Sign in with {0}', target: 'Kirjaudu sisään käyttäen {0}' },
    { source: 'or login with', target: 'tai kirjaudu sisään käyttäen' },
    { source: 'Enter E-mail', target: 'Syötä Sähköposti' },
    { source: 'Enter password', target: 'Syötä salasana' },
    { source: 'Login', target: 'Kirjaudu sisään' },
    { source: 'Create new account', target: 'Luo uusi tili' },
    { source: 'Forgot my password', target: 'Unohdin salasanani' },
    { source: 'required', target: 'vaadittu' },
    { source: 'incorrect Email', target: 'väärä sähköposti' },
    { source: 'Minimum password length {0}', target: 'Salasanan minimipituus {0}' },
    { source: 'Unable to Sign In', target: 'Ei voida kirjautua sisään' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'Aloita <span class="auth-form__accent">ilmaiseksi tänään</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target: 'Ei korttia vaadittu. Saat ilmaisen 14 päivän PRO-kokeilun aikana kaikki edistyneet toiminnot.'
    },
    { source: 'Enter First Name', target: 'Syötä Etunimi' },
    { source: 'Enter Last Name (optional)', target: 'Syötä Sukunimi (valinnainen)' },
    { source: 'Enter Email', target: 'Syötä Sähköposti' },
    { source: 'Password', target: 'Salasana' },
    { source: 'Repeat Password', target: 'Toista Salasana' },
    { source: 'By signing in you’re okay with our', target: 'Kirjautuessasi hyväksyt meidän' },
    {
      source: 'Creating an account means you’re okay with our',
      target: 'Tilin luominen tarkoittaa, että hyväksyt meidän'
    },
    { source: 'Terms of Service', target: 'Käyttöehdot' },
    { source: 'Privacy Policy', target: 'Tietosuojakäytäntö' },
    { source: 'and', target: 'ja' },
    { source: 'Create your free account', target: 'Luo ilmainen tilisi' },
    { source: 'Already have an account', target: 'Onko sinulla jo tili' },
    { source: 'Unable to Sign Up', target: 'Ei voida rekisteröityä' },

    // Restore password
    { source: 'Reset your password', target: 'Nollaa salasanasi' },
    { source: 'Email Address', target: 'Sähköpostiosoite' },
    { source: 'Reset password', target: 'Nollaa salasana' },
    { source: 'Return to Sign In', target: 'Palaa Kirjautumiseen' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'Tarkista sähköpostisi – <strong>{0}</strong>. Olemme lähettäneet vahvistuslinkin, jota sinun tulee seurata vaihtaaksesi salasanasi.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be al least 8 characters.',
      target: 'Melkein valmis, syötä vain uusi salasanasi alla. <br>Täytyy olla vähintään 8 merkkiä.'
    },
    { source: 'Reset password & Sign In', target: 'Nollaa salasana ja kirjaudu' },
    { source: 'Unable to Send Code', target: 'Ei voida lähettää koodia' },
    { source: 'Unable to Change Password', target: 'Ei voida muuttaa salasanaa' },

    // Email Verification
    { source: 'Email Verification', target: 'Sähköpostin vahvistus' },
    { source: 'Resend verification code', target: 'Lähetä vahvistuskoodi uudelleen' },
    { source: 'Verification email sent', target: 'Vahvistussähköposti lähetetty' },
    { source: 'Your Email is now verified', target: 'Sähköpostisi on nyt vahvistettu' },
    { source: 'Request is incorrect', target: 'Pyyntö on virheellinen' },

    // Invites
    {
      source: 'Join <span class="auth-form__accent">{0}</span>',
      target: 'Liity <span class="auth-form__accent">{0}</span>'
    },
    {
      source: '<strong>{0}</strong> has invited you to join <strong>{1}</strong>',
      target: '<strong>{0}</strong> on kutsunut sinut liittymään <strong>{1}</strong>'
    },
    {
      source: 'Someone has invited you to join <strong>{0}</strong>',
      target: 'Joku on kutsunnut sinut liittymään <strong>{0}</strong>'
    },
    {
      source: 'You are joining <strong>{0}</strong> using invite link',
      target: 'Liityt <strong>{0}</strong> kutsulinkin kautta'
    },
    { source: 'Join', target: 'Liity' },
    { source: 'Go to home page', target: 'Siirry kotisivulle' },
    { source: 'Invite link is wrong', target: 'Kutsulinkki on väärä' },
    {
      source:
        'Looks like your invitation link has expired or maybe you have followed the wrong link. Please try to ask to invite your again.',
      target:
        'Näyttää siltä, ​​että kutsulinkkisi on vanhentunut tai ehkä olet seurannut väärää linkkiä. Yritä pyytää kutsua uudelleen.'
    },
    {
      source: 'Unfortunately we failed to load information about this invitation',
      target: 'Valitettavasti tietojen lataaminen kutsusta epäonnistui'
    },

    // Users & Teams
    { source: 'Members of {0}', target: '{0} jäsenet' },
    { source: 'How to get started', target: 'Kuinka aloittaa' },
    { source: 'Users API', target: 'Käyttäjien API' },
    { source: 'Teams API', target: 'Tiimien API' },
    { source: 'Invite Member', target: 'Kutsu Jäsen' },
    { source: 'Add User property', target: 'Lisää käyttäjäominaisuus' },
    { source: 'Add Team property', target: 'Lisää tiimiominaisuus' },
    { source: 'Edit property', target: 'Muokkaa ominaisuutta' },
    { source: 'Delete property', target: 'Poista ominaisuus' },
    { source: 'Users', target: 'Käyttäjät' },
    { source: 'Teams', target: 'Tiimit' },
    { source: 'Search members', target: 'Hae jäseniä' },
    { source: 'Search teams', target: 'Hae tiimejä' },
    { source: '{0} pages', target: '{0} sivua' },
    { source: 'No members', target: 'Ei jäseniä' }
  ]
};

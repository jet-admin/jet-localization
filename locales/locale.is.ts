import { Locale } from './locale';

export const locale: Locale = {
  name: 'icelandic',
  language: 'is',
  items: [
    // General
    { source: 'Save', target: 'Vista' },
    { source: 'Create', target: 'Búa til' },
    { source: 'Duplicating', target: 'Afritun' },
    { source: 'Duplicate', target: 'Afrita' },
    { source: 'Mass Edit', target: 'Fjöldabreyt.' },
    { source: 'Export', target: 'Flytja út' },
    { source: 'Import', target: 'Flytja inn' },
    { source: 'Delete', target: 'Eyða' },
    { source: 'Continue', target: 'Halda áfram' },
    { source: 'Submit', target: 'Senda' },
    { source: 'Cancel', target: 'Hætta við' },
    { source: 'Loading', target: 'Hleð inn' },
    { source: 'Please wait...', target: 'Vinsamlegast bíðið...' },
    { source: 'Loading failed', target: 'Mistókst að hlaða inn' },
    { source: 'Unknown error', target: 'Óþekkt villa' },
    { source: 'Add', target: 'Bæta við' },
    { source: 'or', target: 'eða' },
    { source: 'Hours', target: 'Klst.' },
    { source: 'Minutes', target: 'Mínútur' },
    { source: 'Seconds', target: 'Sekúndur' },
    { source: 'Saved', target: 'Vistað' },
    { source: 'Error', target: 'Villa' },
    { source: 'Page not found', target: 'Síða fannst ekki' },
    {
      source: 'The specified address is incorrect, or the page does not exist',
      target: 'Tilgreint heimilisfang er rangt eða síðan er ekki til'
    },
    { source: 'Not allowed', target: 'Ekki leyfilegt' },
    {
      source: "You don't have permissions to access this page",
      target: 'Þú hefur ekki leyfi til að opna þessa síðu'
    },
    { source: 'Are you sure want to close?', target: 'Ertu viss um að vilja loka?' },
    { source: 'Close', target: 'Loka' },

    // Actions
    { source: 'Action executed', target: 'Aðgerð framkvæmd' },
    { source: 'Action executed successfully', target: 'Aðgerð tókst' },
    { source: 'Action failed', target: 'Aðgerð mistókst' },
    {
      source: "You don't have permission for run this operation",
      target: 'Þú hefur ekki heimild til að keyra þessa aðgerð'
    },
    { source: 'Specify parameters', target: 'Tilgreina breytur' },
    { source: 'Executing action', target: 'Aðgerð er keyrð' },
    { source: 'You are executing <strong>{0}</strong>', target: 'Þú ert að framkvæma <strong>{0}</strong>' },
    { source: 'Please fill in the parameters below.', target: 'Vinsamlegast fylltu út breytur hér að neðan.' },
    { source: 'Execute', target: 'Framkvæma' },
    { source: 'Executing', target: 'Framkvæmir' },
    { source: 'Finished', target: 'Lokið' },
    { source: 'Done', target: 'Lokið' },

    // Export
    { source: 'Records Export', target: 'Útflutningur á skrám' },
    { source: 'Downloading records data as a file', target: 'Hleð niður gögnum skráningar sem skrá' },
    { source: 'Choose format', target: 'Veldu snið' },
    { source: 'Number of exporting records', target: 'Fjöldi skráa til útflutnings' },
    { source: { label: 'Export', context: 'submit' }, target: 'Flytja út' },
    { source: 'Exporting', target: 'Flyt út' },
    { source: 'Export completed', target: 'Útflutningi lokið' },
    { source: 'Failed to export', target: 'Mistókst að flytja út' },

    // Components
    { source: 'optional', target: 'valfrjálst' },
    { source: 'choose', target: 'velja' },
    { source: 'Clear value', target: 'Hreinsa gildi' },
    { source: 'loading...', target: 'hleð inn...' },
    { source: 'Nothing found', target: 'Ekkert fannst' },
    { source: 'Search...', target: 'Leit...' },
    { source: 'Enter at least {0} characters', target: 'Sláðu inn að minnsta kosti {0} stafi' },
    { source: 'No options', target: 'Engir valkostir' },
    { source: 'Drop files here or', target: 'Slepptu skrám hér eða' },
    { source: 'Upload new', target: 'Hlaða inn nýju' },
    { source: 'Clear', target: 'Hreinsa' },
    { source: 'Download', target: 'Sækja' },
    { source: 'Choose file', target: 'Velja skrá' },
    { source: 'Choose files', target: 'Velja skrár' },
    { source: 'Scan with Camera', target: 'Skanna með myndavél' },
    { source: 'Scan Image file', target: 'Skanna myndaskrá' },
    { source: 'Choose camera', target: 'Velja myndavél' },
    { source: 'Stop scanning', target: 'Hætta að skanna' },
    { source: 'Scan again', target: 'Skanna aftur' },
    { source: 'Use this scan', target: 'Nota þessa skönnun' },
    { source: 'Failed to scan', target: 'Skönnun mistókst' },
    {
      source: 'Code failed to scan, please try another image',
      target: 'Skönnun af kóða mistókst, vinsamlegast reyndu aðra mynd'
    },
    { source: 'current', target: 'núverandi' },
    { source: 'Day', target: 'Dagur' },
    { source: 'Week', target: 'Vika' },
    { source: 'Month', target: 'Mánuður' },
    { source: 'Year', target: 'Ár' },
    { source: 'Today', target: 'Í dag' },
    { source: 'Daily', target: 'Daglega' },
    { source: 'Weekly', target: 'Vikulega' },
    { source: 'Monthly', target: 'Mánaðarlega' },
    { source: 'Quarterly', target: 'Árshlutabundið' },
    { source: 'Yearly', target: 'Árlega' },
    { source: 'Hourly', target: 'Á klukkustundar fresti' },
    { source: 'Minutely', target: 'Á mínútum' },
    { source: 'Since', target: 'Frá' },
    { source: 'Before', target: 'Áður' },
    { source: 'Between', target: 'Milli' },
    { source: 'From date', target: 'Frá degi' },
    { source: 'To date', target: 'Til dags' },
    { source: 'Coordinates', target: 'Hnit' },
    { source: 'Latitude', target: 'Breiddargráða' },
    { source: 'Longitude', target: 'Lengdargráða' },
    { source: 'Default color', target: 'Sjálfgefinn litur' },
    { source: 'not specified', target: 'ekki tilgreint' },
    { source: 'Sign using your finger or pointer', target: 'Undirritaðu með því að nota fingurinn eða bendilinn' },

    // List components
    { source: 'Filter', target: 'Sía' },
    { source: 'Filter by field', target: 'Sía eftir reit' },
    { source: 'Filter by...', target: 'Sía eftir...' },
    { source: 'Back', target: 'Til baka' },
    { source: 'Back to {0} fields', target: 'Til baka til {0} reita' },
    { source: 'Choose {0} from list', target: 'Veldu {0} úr lista' },
    { source: '{0} fields', target: '{0} reitir' },
    { source: '{0} relationships', target: '{0} tengsl' },
    { source: 'Aggregate {0}', target: 'Samanlagt {0}' },
    { source: 'No fields to select', target: 'Engir reitir til að velja' },
    { source: 'Enter value...', target: 'Sláðu inn gildi...' },
    { source: 'Exclude', target: 'Útiloka' },
    { source: 'Actions', target: 'Aðgerðir' },
    { source: 'Search', target: 'Leit' },
    { source: 'Sort 1 → 9', target: 'Raða 1 → 9' },
    { source: 'Sort 9 → 1', target: 'Raða 9 → 1' },
    { source: 'Sort A → Z', target: 'Raða A → Z' },
    { source: 'Sort Z → A', target: 'Raða Z → A' },
    { source: 'Refresh automatically', target: 'Endurnýja sjálfkrafa' },
    { source: 'All', target: 'Allt' },
    { source: 'Selected', target: 'Valið' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'Því miður fannst engin {0} sem passar við fyrirspurn þína'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'Við sótum {0}, vinsamlegast bíðið...' },
    { source: 'Add filter', target: 'Bæta við síu' },
    { source: 'Delete this filter', target: 'Eyða þessari síu' },
    { source: 'Toggle ordering', target: 'Skipta um röðun' },
    { source: 'Not configured', target: 'Ekki stillt' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'Því miður er þessi þáttur ekki enn stilltur'
    },
    { source: 'records', target: 'skrár' },
    { source: '{0} items', target: '{0} hlutir' },

    // Menu
    { source: 'Users & Teams', target: 'Notendur & Lið' },
    { source: 'Billing', target: 'Innheimta' },
    { source: 'Billing & Plans', target: 'Innheimta & Áætlanir' },
    { source: 'API keys', target: 'API lyklar' },
    { source: 'Dark Mode', target: 'Dökk hamur' },
    { source: 'Light Mode', target: 'Ljós hamur' },
    { source: 'Disable Staff', target: 'Aftengja starfsfólk' },
    { source: 'Enable Staff', target: 'Virkja starfsfólk' },
    { source: 'Manage Templates', target: 'Stjórna sniðmátum' },
    { source: 'Logout', target: 'Útskrá' },
    { source: 'Activity Log', target: 'Virkni skrá' },
    { source: 'Collaborations', target: 'Samstarf' },
    { source: 'Open Visual Builder', target: 'Opna Sjónrænt Verkfæri' },

    // Filters
    { source: 'equals', target: 'sama sem' },
    { source: 'does not equal', target: 'er ekki jafnt' },
    { source: '{0} equals {1}', target: '{0} er jafnt {1}' },
    { source: '{0} does not equal {1}', target: '{0} er ekki jafnt {1}' },

    { source: 'contains', target: 'inniheldur' },
    { source: 'does not contain', target: 'inniheldur ekki' },
    { source: '{0} contains {1}', target: '{0} inniheldur {1}' },
    { source: '{0} not contains {1}', target: '{0} inniheldur ekki {1}' },

    { source: 'starts with', target: 'byrjar á' },
    { source: 'does not start with', target: 'byrjar ekki á' },
    { source: '{0} starts with {1}', target: '{0} byrjar á {1}' },
    { source: '{0} does not start with {1}', target: '{0} byrjar ekki á {1}' },

    { source: 'ends with', target: 'endar á' },
    { source: 'does not end with', target: 'endar ekki á' },
    { source: '{0} ends with {1}', target: '{0} endar á {1}' },
    { source: '{0} does not end with {1}', target: '{0} endar ekki á {1}' },

    { source: 'greater than', target: 'stærra en' },
    { source: 'is not greater than', target: 'er ekki stærra en' },
    { source: '{0} is greater than {1}', target: '{0} er stærra en {1}' },
    { source: '{0} not greater than {1}', target: '{0} er ekki stærra en {1}' },

    { source: 'greater than or equals', target: 'stærra en eða jafnt' },
    { source: 'is not greater than or equals', target: 'er ekki stærra en né jafnt' },
    { source: '{0} is greater than or equals {1}', target: '{0} er stærra en eða jafnt {1}' },
    { source: '{0} is not greater than or equals {1}', target: '{0} er ekki stærra en né jafnt {1}' },

    { source: 'less than', target: 'minna en' },
    { source: 'is not less than', target: 'er ekki minna en' },
    { source: '{0} is less than {1}', target: '{0} er minna en {1}' },
    { source: '{0} is not less than {1}', target: '{0} er ekki minna en {1}' },

    { source: 'less than or equals', target: 'minna en eða jafnt' },
    { source: 'is not less than or equals', target: 'er ekki minna en né jafnt' },
    { source: '{0} is less than or equals {1}', target: '{0} er minna en eða jafnt {1}' },
    { source: '{0} is not less than or equals {1}', target: '{0} er ekki minna en né jafnt {1}' },

    { source: 'one of', target: 'einn af' },
    { source: 'is one of', target: 'er einn af' },
    { source: 'is not one of', target: 'er ekki einn af' },
    { source: '{0} is one of {1}', target: '{0} er einn af {1}' },
    { source: '{0} is not one of {1}', target: '{0} er ekki einn af {1}' },

    { source: 'is null', target: 'er null' },
    { source: 'is not null', target: 'er ekki null' },
    { source: '{0} is null', target: '{0} er null' },
    { source: '{0} is not null', target: '{0} er ekki null' },

    { source: 'is future', target: 'er í framtíðinni' },
    { source: 'in the future', target: 'í framtíðinni' },
    { source: 'is not in the future', target: 'er ekki í framtíðinni' },
    { source: '{0} is in the future', target: '{0} er í framtíðinni' },
    { source: '{0} is not in the future', target: '{0} er ekki í framtíðinni' },

    { source: 'is past', target: 'er í fortíðinni' },
    { source: 'in the past', target: 'í fortíðinni' },
    { source: 'is not in the past', target: 'er ekki í fortíðinni' },
    { source: '{0} is in the past', target: '{0} er í fortíðinni' },
    { source: '{0} is not in the past', target: '{0} er ekki í fortíðinni' },

    { source: 'is Today', target: 'er í dag' },
    { source: 'today', target: 'í dag' },
    { source: 'is not today', target: 'er ekki í dag' },
    { source: '{0} is today', target: '{0} er í dag' },
    { source: '{0} is not today', target: '{0} er ekki í dag' },

    { source: 'is Yesterday', target: 'var í gær' },
    { source: 'yesterday', target: 'í gær' },
    { source: 'is not yesterday', target: 'var ekki í gær' },
    { source: '{0} is yesterday', target: '{0} var í gær' },
    { source: '{0} is not yesterday', target: '{0} var ekki í gær' },

    { source: 'is Last Week', target: 'er í síðustu viku' },
    { source: 'last week', target: 'síðustu viku' },
    { source: 'is not last week', target: 'er ekki í síðustu viku' },
    { source: '{0} is last week', target: '{0} er síðustu viku' },
    { source: '{0} is not last week', target: '{0} er ekki síðustu viku' },

    { source: 'is Last Month', target: 'er í síðasta mánuði' },
    { source: 'last month', target: 'síðasta mánuði' },
    { source: 'is not last month', target: 'er ekki í síðasta mánuði' },
    { source: '{0} is last month', target: '{0} er í síðasta mánuði' },
    { source: '{0} is not last month', target: '{0} er ekki í síðasta mánuði' },

    { source: 'is Last Quarter', target: 'er í síðasta fjórðungi' },
    { source: 'last quarter', target: 'síðasta fjórðungi' },
    { source: 'is not last quarter', target: 'er ekki í síðasta fjórðungi' },
    { source: '{0} is last quarter', target: '{0} er í síðasta fjórðungi' },
    { source: '{0} is not last quarter', target: '{0} er ekki í síðasta fjórðungi' },

    { source: 'is Last Year', target: 'er á síðasta ári' },
    { source: 'last year', target: 'á síðasta ári' },
    { source: 'is not last year', target: 'er ekki á síðasta ári' },
    { source: '{0} is last year', target: '{0} er á síðasta ári' },
    { source: '{0} is not last year', target: '{0} er ekki á síðasta ári' },

    { source: 'is Last X Days', target: 'er síðustu X dagar' },
    { source: 'last X days', target: 'síðustu X dagar' },
    { source: 'is not last X days', target: 'er ekki síðustu X dagar' },
    { source: '{0} is last {1} days', target: '{0} er síðustu {1} daga' },
    { source: '{0} is not last {1} days', target: '{0} er ekki síðustu {1} daga' },

    { source: 'is Current Week', target: 'er í þessari viku' },
    { source: 'current week', target: 'þessari viku' },
    { source: 'is not current week', target: 'er ekki í þessari viku' },
    { source: '{0} is current week', target: '{0} er í þessari viku' },
    { source: '{0} is not current week', target: '{0} er ekki í þessari viku' },

    { source: 'is Current Month', target: 'er í þessum mánuði' },
    { source: 'current month', target: 'þessum mánuði' },
    { source: 'is not current month', target: 'er ekki í þessum mánuði' },
    { source: '{0} is current month', target: '{0} er í þessum mánuði' },
    { source: '{0} is not current month', target: '{0} er ekki í þessum mánuði' },

    { source: 'is Current Quarter', target: 'er í þessum fjórðungi' },
    { source: 'current quarter', target: 'þessum fjórðungi' },
    { source: 'is not current quarter', target: 'er ekki í þessum fjórðungi' },
    { source: '{0} is current quarter', target: '{0} er í þessum fjórðungi' },
    { source: '{0} is not current quarter', target: '{0} er ekki í þessum fjórðungi' },

    { source: 'is Current Year', target: 'er á þessu ári' },
    { source: 'current year', target: 'þessu ári' },
    { source: 'is not current year', target: 'er ekki á þessu ári' },
    { source: '{0} is current year', target: '{0} er á þessu ári' },
    { source: '{0} is not current year', target: '{0} er ekki á þessu ári' },

    { source: 'is Previous Week', target: 'er í síðustu viku' },
    { source: 'previous week', target: 'síðustu viku' },
    { source: 'is not previous week', target: 'er ekki í síðustu viku' },
    { source: '{0} is previous week', target: '{0} er í síðustu viku' },
    { source: '{0} is not previous week', target: '{0} er ekki í síðustu viku' },

    { source: 'is Previous Month', target: 'er í síðasta mánuði' },
    { source: 'previous month', target: 'síðasta mánuði' },
    { source: 'is not previous month', target: 'er ekki í síðasta mánuði' },
    { source: '{0} is previous month', target: '{0} er í síðasta mánuði' },
    { source: '{0} is not previous month', target: '{0} er ekki í síðasta mánuði' },

    { source: 'is Previous Quarter', target: 'er í síðasta fjórðungi' },
    { source: 'previous quarter', target: 'síðasta fjórðungi' },
    { source: 'is not previous quarter', target: 'er ekki í síðasta fjórðungi' },
    { source: '{0} is previous quarter', target: '{0} er í síðasta fjórðungi' },
    { source: '{0} is not previous quarter', target: '{0} er ekki í síðasta fjórðungi' },

    { source: 'is Previous Year', target: 'er á síðasta ári' },
    { source: 'previous year', target: 'á síðasta ári' },
    { source: 'is not previous year', target: 'er ekki á síðasta ári' },
    { source: '{0} is previous year', target: '{0} er á síðasta ári' },
    { source: '{0} is not previous year', target: '{0} er ekki á síðasta ári' },

    { source: 'is Previous X Days', target: 'er síðustu X dagar' },
    { source: 'previous X days', target: 'síðustu X dagar' },
    { source: 'is not previous X days', target: 'er ekki síðustu X dagar' },
    { source: '{0} is previous {1} days', target: '{0} er síðustu {1} daga' },
    { source: '{0} is not previous {1} days', target: '{0} er ekki síðustu {1} daga' },

    { source: 'is empty', target: 'er tómt' },
    { source: 'is not empty', target: 'er ekki tómt' },
    { source: '{0} is empty', target: '{0} er tómt' },
    { source: '{0} is not empty', target: '{0} er ekki tómt' },

    { source: 'covered by', target: 'fjallað um af' },
    { source: 'is not covered by', target: 'er ekki fjallað um af' },
    { source: '{0} covered by {1}', target: '{0} fjallað um af {1}' },
    { source: '{0} is not covered by {1}', target: '{0} er ekki fjallað um af {1}' },

    // Activity log
    { source: 'No activities found', target: 'Engin virkni fannst' },
    {
      source: 'Start to working with data to log activities.',
      target: 'Byrjaðu að vinna með gögn til að skrá virkni.'
    },
    { source: 'All Activity', target: 'Öll virkni' },
    { source: 'Create Record', target: 'Búa til skrá' },
    { source: 'Update Record', target: 'Uppfæra skrá' },
    { source: 'Delete Record', target: 'Eyða skrá' },
    { source: 'All Members', target: 'Allir meðlimir' },

    // Collaboration
    { source: 'Timeline', target: 'Tímalína' },
    { source: 'Messages', target: 'Skilaboð' },
    { source: 'Activity', target: 'Virkni' },
    { source: 'Start chatting with your team', target: 'Byrjaðu spjall við liðið þitt' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'Skráðu skilaboð um núverandi síðu til að halda utan um mikilvægar upplýsingar.'
    },
    { source: 'Your Message', target: 'Skilaboðin þín' },
    { source: 'Send', target: 'Senda' },

    // Share
    { source: 'Invite members', target: 'Bjóða meðlimum' },
    { source: 'Public share', target: 'Almenningsdeiling' },
    { source: 'Sign Up', target: 'Skrá sig' },
    { source: 'Members', target: 'Meðlimir' },
    { source: 'Invite with Email', target: 'Bjóða með tölvupósti' },
    { source: 'Invite someone...', target: 'Bjóða einhvern...' },
    { source: 'Send Invite', target: 'Senda boð' },
    {
      source: 'Limit access to your data by user properties',
      target: 'Takmarka aðgang að gögnum þínum eftir eiginleikum notenda'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: 'Sláðu inn tölvupóstfang notanda sem þú vilt bjóða í samvinnu.'
    },
    { source: 'Copy', target: 'Afrita' },
    { source: 'Invite with Link', target: 'Bjóða með tengli' },
    { source: 'Remove link', target: 'Fjarlægja tengil' },
    { source: 'Add Invite Link', target: 'Bæta við boðstengli' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'Allir á netinu með þessum tengli geta gengið til liðs við valið lið.'
    },
    { source: 'Pending Invites', target: 'Óleyst boð' },
    { source: 'Cancel invite', target: 'Hætta við boð' },
    { source: 'Active Members', target: 'Virkir meðlimir' },
    { source: 'Remove member', target: 'Fjarlægja meðlim' },
    {
      source: 'You are setting sharing for the current page',
      target: 'Þú ert að stilla deilingu fyrir núverandi síðu'
    },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'Þú ert að stilla deilingu fyrir allar síður forritsins þíns.'
    },
    { source: 'Public access link', target: 'Almenningsaðgangstengill' },
    { source: 'Updating public access...', target: 'Uppfæra almenningaaðgang...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'Allir með þennan tengil geta skoðað núverandi síðu. Þannig geturðu líka fellt núverandi síðu í aðra vefsíðu.'
    },
    { source: 'Embed code (IFRAME)', target: 'Fela kóða (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: 'Límdu þennan kóða inn í HTML kóða vefsíðunnar þinnar þar sem þú vilt að núverandi síða birtist.'
    },
    { source: 'link', target: 'tengill' },
    { source: 'invited', target: 'boðið' },
    { source: 'Choose Team', target: 'Veldu lið' },
    { source: 'App Teams', target: 'Forritateymi' },
    { source: 'Built-In Teams', target: 'Innbyggð lið' },
    { source: 'Clear Team', target: 'Hreinsa lið' },
    { source: 'Can build application and modify data', target: 'Getur byggt forrit og breytt gögnum' },
    { source: 'Can modify data in application', target: 'Getur breytt gögnum í forriti' },
    { source: 'Can only view data without modification', target: 'Getur aðeins skoðað gögn án breytinga' },
    { source: 'Add Team', target: 'Bæta við liði' },
    { source: 'Edit Team', target: 'Breyta liði' },
    { source: 'Adding Team', target: 'Bæta við liði' },
    {
      source: 'Keep control over who has access to current App',
      target: 'Haltu stjórn á því hver hefur aðgang að núverandi forriti'
    },
    { source: 'Enter Team Name', target: 'Sláðu inn liðsnafni' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'Sláðu inn nafn liðsins, t.d. Stoðdeild, Sala, Markaðssetning, osfrv.'
    },
    { source: 'Add a new member to this team.', target: 'Bæta nýjum meðlim við þetta lið.' },
    { source: 'Invite new member', target: 'Bjóða nýjum meðlim' },
    { source: 'User', target: 'Notandi' },
    { source: 'Date Added', target: 'Dagsetning bætt við' },
    { source: 'You', target: 'Þú' },
    { source: 'Edit', target: 'Breyta' },
    { source: 'No users in this team', target: 'Engir notendur í þessu liði' },
    { source: 'Page Permissions', target: 'Síðu leyfi' },
    { source: 'App Permissions', target: 'Forrit leyfi' },
    { source: 'Properties', target: 'Eiginleikar' },
    { source: 'Page name', target: 'Síðunafn' },
    { source: 'Access', target: 'Aðgangur' },
    { source: 'Full Access', target: 'Fullur aðgangur' },
    { source: 'Read Only', target: 'Aðeins lesa' },
    { source: 'No Access', target: 'Enginn aðgangur' },
    { source: 'Read', target: 'Lesa' },
    { source: 'Update', target: 'Uppfæra' },
    { source: 'Write', target: 'Skrifa' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'Eyða' },
    { source: 'Custom Access', target: 'Sérsniðinn aðgangur' },
    { source: 'Read, create, update and delete data', target: 'Lesa, búa til, uppfæra og eyða gögnum' },
    { source: 'Choose allowed operations granularly', target: 'Veldu leyfðar aðgerðir í smáatriðum' },
    { source: 'Without any access to data', target: 'Án nokkurs aðgangs að gögnum' },
    { source: 'Name', target: 'Nafn' },
    { source: 'Active', target: 'Virkur' },
    { source: 'Settings', target: 'Stillingar' },
    { source: 'Members and Teams', target: 'Meðlimir og lið' },
    { source: 'App Builder', target: 'Forritasmíðari' },
    { source: 'Collection Permissions', target: 'Safn leyfa' },
    { source: "Grant permissions to app's collection", target: 'Veita leyfi til safnaforrits' },
    { source: 'Collection', target: 'Safn' },
    {
      source: 'Limit access to your data by team properties',
      target: 'Takmarka aðgang að gögnum þínum með eiginleikum liðsins'
    },
    { source: 'Save Team', target: 'Vista lið' },
    { source: 'Create Team', target: 'Búa til lið' },
    { source: 'Value', target: 'Gildi' },
    { source: 'No properties specified', target: 'Engir eiginleikar tilgreindir' },

    // Navigation
    { source: 'Current App', target: 'Núverandi forrit' },
    { source: 'Home', target: 'Heim' },

    // Profile
    {
      source: 'We are fetching user data, please, wait...',
      target: 'Við sækjum notendagögn, vinsamlegast bíðið...'
    },
    { source: 'Profile Settings', target: 'Prófílsstillingar' },
    { source: 'Basic information about your account.', target: 'Grunnupplýsingar um reikninginn þinn.' },
    { source: 'Photo', target: 'Mynd' },
    { source: 'your photo', target: 'myndin þín' },
    { source: 'Change', target: 'Breyta' },
    { source: 'Upload', target: 'Hlaða inn' },
    { source: 'Photo was successfully updated', target: 'Myndin var uppfærð með góðum árangri' },
    { source: 'Photo was successfully deleted', target: 'Myndin var eytt með góðum árangri' },
    { source: 'First Name', target: 'Fornafn' },
    { source: 'Last Name', target: 'Eftirnafn' },
    { source: 'Your Email', target: 'Tölvupóstfangið þitt' },
    { source: 'Email Change', target: 'Tölvupóstbreyting' },
    { source: 'New Email', target: 'Nýtt tölvupóstfang' },
    { source: 'Change Email', target: 'Breyta tölvupóstfangi' },
    { source: 'Check your inbox', target: 'Athugaðu innhólfið þitt' },
    { source: 'Confirmation Email was sent to {0}', target: 'Staðfestingar tölvupóstur var sendur til {0}' },
    { source: 'Changing Email failed', target: 'Tókst ekki að breyta tölvupósti' },
    { source: 'Password Change', target: 'Aðgangsorðsbreyting' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target:
        'Aðgangsorðið ætti að vera nógu sterkt til að vernda reikninginn þinn, gerðu það að minnsta kosti 12 stafa langt.'
    },
    { source: 'Current Password', target: 'Núverandi aðgangsorð' },
    { source: 'New Password', target: 'Nýtt aðgangsorð' },
    { source: 'Confirm New Password', target: 'Staðfesta nýtt aðgangsorð' },
    { source: 'Change Password', target: 'Skipta um aðgangsorð' },
    {
      source: 'Current password was successfully updated, all other sessions will be logged out shortly',
      target: 'Núverandi lykilorð var uppfært með góðum árangri, allar aðrar setur verða skráðar út fljótlega'
    },
    { source: 'Saving current password failed', target: 'Mistókst að vista núverandi aðgangsorð' },
    { source: 'Short password', target: 'Stutt aðgangsorð' },
    { source: "Passwords don't match", target: 'Aðgangsorðin passa ekki' },
    { source: 'Personal Preferences', target: 'Eigin óskir' },
    { source: 'Language', target: 'Tungumál' },
    { source: 'Timezone', target: 'Tímabelti' },
    { source: 'Current time in {0} is', target: 'Núverandi tími í {0} er' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'Sérsníddu viðbótar valkosti fyrir reikninginn þinn.'
    },
    { source: 'News & Proposals', target: 'Fréttir og tillögur' },
    {
      source: 'Subscribe to our updates and proposals.',
      target: 'Skráðu þig á uppfærslur okkar og tillögur.'
    },
    { source: 'Save changes', target: 'Vista breytingar' },
    { source: 'Current user was successfully updated', target: 'Núverandi notandi var uppfærður með góðum árangri' },
    { source: 'Saving current user failed', target: 'Mistókst að vista núverandi notanda' },

    // My Apps
    { source: 'Type to search...', target: 'Skrifaðu til að leita...' },
    { source: 'My Apps', target: 'Forritin mín' },
    { source: 'New App', target: 'Nýtt forrit' },
    { source: 'Builder', target: 'Verkfæri' },
    { source: 'App', target: 'Forritið' },
    { source: 'continue install', target: 'halda áfram uppsetningu' },
    { source: 'Open builder', target: 'Opna smiðju' },
    { source: 'View published', target: 'Skoða útgefið' },
    { source: 'Delete App', target: 'Eyða forriti' },
    { source: 'Start from a template', target: 'Byrja frá sniðmáti' },
    { source: 'Preview', target: 'Forskoðun' },
    { source: 'Contact Support', target: 'Hafa samband við stuðning' },
    { source: 'Documentation', target: 'Skjöl' },
    { source: 'Feature Requests', target: 'Eiginleikabeiðnir' },
    { source: 'See What’s New', target: 'Sjá hvað er nýtt' },
    { source: 'Search templates...', target: 'Leitaðu að sniðmátum...' },
    { source: 'any', target: 'hvaða' },
    { source: 'more', target: 'meira' },
    { source: 'Choose Data Source', target: 'Veldu gagnagjafa' },
    { source: 'works with 30+ data sources', target: 'virkar með 30+ gagnagjafa' },
    { source: 'Use this template', target: 'Nota þetta sniðmát' },
    { source: 'stores data in Jet Tables', target: 'geymir gögn í Jet töflum' },
    { source: 'New Data', target: 'Ný gögn' },
    { source: 'using {0}', target: 'notar {0}' },
    { source: "Can't find resource you're looking for?", target: 'Geturðu ekki fundið auðlindina sem þú leitar að?' },
    { source: 'Admin Panel', target: 'Stjórnborð' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'Skrá, búa til og uppfæra (CRUD) aðgerðir ofan á gögnin þín'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target:
        'Byggðu sérsniðið stjórnborð sem byggir á hvaða gagnagrunnum, forritum og API eins og Stripe, Twilio og GraphQL.'
    },
    { source: 'All Integrations', target: 'Allar samþættingar' },
    { source: 'Databases', target: 'Gagnagrunnar' },
    { source: 'APIs', target: 'APIs' },
    { source: 'Frameworks', target: 'Uppbyggingar' },
    { source: 'Storages', target: 'Geymslur' },

    // Sign In
    { source: 'Good morning', target: 'Góðan daginn' },
    { source: 'Good afternoon', target: 'Góðan daginn' },
    { source: 'Good evening', target: 'Gott kvöld' },
    { source: 'Sign In', target: 'Skrá inn' },
    { source: 'Welcome Back.', target: 'Velkominn til baka.' },
    { source: 'Sign in with {0}', target: 'Skráðu þig inn með {0}' },
    { source: 'or login with', target: 'eða innskráning með' },
    { source: 'Enter E-mail', target: 'Sláðu inn netfang' },
    { source: 'Enter password', target: 'Sláðu inn lykilorð' },
    { source: 'Login', target: 'Skrá inn' },
    { source: 'Create new account', target: 'Búa til nýjan reikning' },
    { source: 'Forgot my password', target: 'Gleymdi aðgangsorðinu mínu' },
    { source: 'required', target: 'nauðsynlegt' },
    { source: 'incorrect Email', target: 'rangt netfang' },
    { source: 'Minimum password length {0}', target: 'Lágmark text heilur {0}' },
    { source: 'Unable to Sign In', target: 'Tókst ekki að skrá sig inn' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'Byrjaðu <span class="auth-form__accent">ókeypis í dag</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target: 'Engin kort krafist. Þú færð allan háþróaða virkni ókeypis í 14 daga PRO prufu.'
    },
    { source: 'Enter First Name', target: 'Sláðu inn fornafn' },
    { source: 'Enter Last Name (optional)', target: 'Sláðu inn eftirnafn (valfrjálst)' },
    { source: 'Enter Email', target: 'Sláðu inn netfang' },
    { source: 'Password', target: 'Lykilorð' },
    { source: 'Repeat Password', target: 'Endurtaktu lykilorð' },
    {
      source: 'By signing in you’re okay with our',
      target: 'Með því að skrá þig inn ertu samþykkur okkar'
    },
    {
      source: 'Creating an account means you’re okay with our',
      target: 'Að búa til reikning þýðir að þú samþykkir okkar'
    },
    { source: 'Terms of Service', target: 'Skilmálar þjónustu' },
    { source: 'Privacy Policy', target: 'Persónuverndarstefna' },
    { source: 'and', target: 'og' },
    { source: 'Create account', target: 'Búa til aðgang' },
    { source: 'Already have an account', target: 'Ertu þegar með reikning' },
    { source: 'Unable to Sign Up', target: 'Tókst ekki að skrá sig' },

    // Restore password
    { source: 'Reset your password', target: 'Endurstilltu lykilorðið þitt' },
    { source: 'Email Address', target: 'Netfang' },
    { source: 'Reset password', target: 'Endurstilla lykilorð' },
    { source: 'Return to Sign In', target: 'Fara til baka í innskráningu' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'Vinsamlegast skoðaðu netfangið þitt – <strong>{0}</strong>. Við höfum sent þér staðfestingartengil sem þú ættir að fylgja til að breyta lykilorðinu þínu.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be at least 8 characters.',
      target:
        'Næstum búið, sláðu bara inn nýja lykilorðið þitt hér að neðan. <br>Þarf að vera að minnsta kosti 8 stafir.'
    },
    { source: 'Reset password & Sign In', target: 'Endurstilla lykilorð og skrá inn' },
    { source: 'Unable to Send Code', target: 'Gat ekki sent kóða' },
    { source: 'Unable to Change Password', target: 'Gat ekki breytt lykilorði' },

    // Email Verification
    { source: 'Email Verification', target: 'Staðfesting tölvupósts' },
    { source: 'Resend verification code', target: 'Senda aftur staðfestingarkóða' },
    { source: 'Verification email sent', target: 'Staðfestingartölvupóstur sendur' },
    { source: 'Your Email is now verified', target: 'Netfangið þitt er nú staðfest' },
    { source: 'Request is incorrect', target: 'Beiðnin er ekki rétt' },

    // Invites
    {
      source: 'Join <span class="auth-form__accent">{0}</span>',
      target: 'Skráðu þig í <span class="auth-form__accent">{0}</span>'
    },
    {
      source: '<strong>{0}</strong> has invited you to join <strong>{1}</strong>',
      target: '<strong>{0}</strong> hefur boðið þér að taka þátt í <strong>{1}</strong>'
    },
    {
      source: 'Someone has invited you to join <strong>{0}</strong>',
      target: 'Einver hefur boðið þér að taka þátt í <strong>{0}</strong>'
    },
    {
      source: 'You are joining <strong>{0}</strong> using invite link',
      target: 'Þú ert að tengjast <strong>{0}</strong> með boðstengli'
    },
    { source: 'Join', target: 'Taka þátt' },
    { source: 'Go to home page', target: 'Fara á heimsíðu' },
    { source: 'Invite link is wrong', target: 'Boðstengill er rangur' },
    {
      source:
        'Looks like your invitation link has expired or maybe you have followed the wrong link. Please try to ask to invite your again.',
      target:
        'Það virðist vera sem boðstengillinn þinn hafi runnið út eða kannski hefurðu fylgt vitlausum tengli. Vinsamlegast reyndu að biðja um að vera boðið aftur.'
    },
    {
      source: 'Unfortunately we failed to load information about this invitation',
      target: 'Því miður tókst okkur ekki að hlaða upplýsingum um þetta boð'
    },

    // Users & Teams
    { source: 'Members of {0}', target: 'Meðlimir {0}' },
    { source: 'How to get started', target: 'Hvernig á að byrja' },
    { source: 'Users API', target: 'Notenda API' },
    { source: 'Teams API', target: 'Liða API' },
    { source: 'Invite Member', target: 'Bjóða meðlim' },
    { source: 'Add User property', target: 'Bæta við eigindum notanda' },
    { source: 'Add Team property', target: 'Bæta við eigindum liðs' },
    { source: 'Edit property', target: 'Breyta eigindum' },
    { source: 'Delete property', target: 'Eyða eigindum' },
    { source: 'Users', target: 'Notendur' },
    { source: 'Teams', target: 'Lið' },
    { source: 'Search members', target: 'Leita að meðlimum' },
    { source: 'Search teams', target: 'Leita að liðum' },
    { source: '{0} pages', target: '{0} síður' },
    { source: 'No members', target: 'Engir meðlimir' }
  ]
};

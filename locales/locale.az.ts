import { Locale } from './locale';

export const locale: Locale = {
  name: 'azerbaijani',
  language: 'az',
  items: [
    // General
    { source: 'Save', target: 'Yadda saxla' },
    { source: 'Create', target: 'Yarat' },
    { source: 'Duplicating', target: 'Kopyalanır' },
    { source: 'Duplicate', target: 'Kopyala' },
    { source: 'Mass Edit', target: 'Kütləvi redaktə' },
    { source: 'Export', target: 'İxrac et' },
    { source: 'Import', target: 'İdxal et' },
    { source: 'Delete', target: 'Sil' },
    { source: 'Continue', target: 'Davam et' },
    { source: 'Submit', target: 'Təsdiqlə' },
    { source: 'Cancel', target: 'Ləğv et' },
    { source: 'Loading', target: 'Yüklənir' },
    { source: 'Please wait...', target: 'Zəhmət olmasa gözləyin...' },
    { source: 'Loading failed', target: 'Yüklənmə uğursuz oldu' },
    { source: 'Unknown error', target: 'Naməlum səhv' },
    { source: 'Add', target: 'Əlavə et' },
    { source: 'or', target: 'və ya' },
    { source: 'Hours', target: 'Saat' },
    { source: 'Minutes', target: 'Dəqiqə' },
    { source: 'Seconds', target: 'Saniyə' },
    { source: 'Saved', target: 'Yadda saxlanıldı' },
    { source: 'Error', target: 'Səhv' },
    { source: 'Page not found', target: 'Səhifə tapılmadı' },
    {
      source: 'The specified address is incorrect, or the page does not exist',
      target: 'Göstərilən ünvan səhvdir və ya səhifə mövcud deyil'
    },
    { source: 'Not allowed', target: 'İcazə verilmir' },
    {
      source: "You don't have permissions to access this page",
      target: 'Bu səhifəyə daxil olmaq hüququnuz yoxdur'
    },
    { source: 'Are you sure want to close?', target: 'Bağlamaq istədiyinizə əminsiniz?' },
    { source: 'Close', target: 'Bağla' },

    // Actions
    { source: 'Action executed', target: 'Əməliyyat yerinə yetirildi' },
    { source: 'Action executed successfully', target: 'Əməliyyat uğurla yerinə yetirildi' },
    { source: 'Action failed', target: 'Əməliyyat uğursuz oldu' },
    {
      source: "You don't have permission for run this operation",
      target: 'Bu əməliyyatı yerinə yetirmək icazəniz yoxdur'
    },
    { source: 'Specify parameters', target: 'Parametrləri qeyd edin' },
    { source: 'Executing action', target: 'Əməliyyat icra edilir' },
    { source: 'You are executing <strong>{0}</strong>', target: '<strong>{0}</strong> icra edilir' },
    { source: 'Please fill in the parameters below.', target: 'Zəhmət olmasa, aşağıdakı parametrləri doldurun.' },
    { source: 'Execute', target: 'İcra et' },
    { source: 'Executing', target: 'İcra edilir' },
    { source: 'Finished', target: 'Bitdi' },
    { source: 'Done', target: 'Hazır' },

    // Export
    { source: 'Records Export', target: 'Qeydlərin ixracı' },
    { source: 'Downloading records data as a file', target: 'Qeydlərin məlumatı fayl kimi yüklənir' },
    { source: 'Choose format', target: 'Formatı seçin' },
    { source: 'Number of exporting records', target: 'İxrac edilən qeydlərin sayı' },
    { source: { label: 'Export', context: 'submit' }, target: 'İxrac et' },
    { source: 'Exporting', target: 'İxrac olunur' },
    { source: 'Export completed', target: 'İxrac tamamlandı' },
    { source: 'Failed to export', target: 'İxrac uğursuz oldu' },

    // Components
    { source: 'optional', target: 'istəyə bağlı' },
    { source: 'choose', target: 'seçin' },
    { source: 'Clear value', target: 'Sıfırla' },
    { source: 'loading...', target: 'yüklənir...' },
    { source: 'Nothing found', target: 'Heç nə tapılmadı' },
    { source: 'Search...', target: 'Axtarın...' },
    { source: 'Enter at least {0} characters', target: 'Ən azı {0} simvol daxil edin' },
    { source: 'No options', target: 'Seçim yoxdur' },
    { source: 'Drop files here or', target: 'Faylları bura sürüşdürün və ya' },
    { source: 'Upload new', target: 'Yenidən yükləyin' },
    { source: 'Clear', target: 'Təmizlə' },
    { source: 'Download', target: 'Yüklə' },
    { source: 'Choose file', target: 'Fayl seçin' },
    { source: 'Choose files', target: 'Fayllar seçin' },
    { source: 'Scan with Camera', target: 'Kamera ilə skan et' },
    { source: 'Scan Image file', target: 'Şəkil faylı skan et' },
    { source: 'Choose camera', target: 'Kamera seçin' },
    { source: 'Stop scanning', target: 'Skan etməni dayandır' },
    { source: 'Scan again', target: 'Yenidən skan et' },
    { source: 'Use this scan', target: 'Bu skanı istifadə et' },
    { source: 'Failed to scan', target: 'Skan etmək uğursuz oldu' },
    {
      source: 'Code failed to scan, please try another image',
      target: 'Kod skan edilə bilmədi, başqa bir şəkil sınayın'
    },
    { source: 'current', target: 'cari' },
    { source: 'Day', target: 'Gün' },
    { source: 'Week', target: 'Həftə' },
    { source: 'Month', target: 'Ay' },
    { source: 'Year', target: 'İl' },
    { source: 'Today', target: 'Bu gün' },
    { source: 'Daily', target: 'Gündəlik' },
    { source: 'Weekly', target: 'Həftəlik' },
    { source: 'Monthly', target: 'Aylıq' },
    { source: 'Quarterly', target: 'Rüblük' },
    { source: 'Yearly', target: 'İllik' },
    { source: 'Hourly', target: 'Saatlıq' },
    { source: 'Minutely', target: 'Dəqiqəlik' },
    { source: 'Since', target: 'Etibarən' },
    { source: 'Before', target: 'Əvvəl' },
    { source: 'Between', target: 'Arasında' },
    { source: 'From date', target: 'Tarixdən' },
    { source: 'To date', target: 'Tarixə' },
    { source: 'Coordinates', target: 'Koordinatlar' },
    { source: 'Latitude', target: 'Enlik' },
    { source: 'Longitude', target: 'Uzunluq' },
    { source: 'Default color', target: 'Standart rəng' },
    { source: 'not specified', target: 'müəyyən edilməmişdir' },
    { source: 'Sign using your finger or pointer', target: 'Barmaq və ya göstərici ilə imzalayın' },

    // List components
    { source: 'Filter', target: 'Filtr' },
    { source: 'Filter by field', target: 'Meyar ilə filtr' },
    { source: 'Filter by...', target: 'Filtrlə...' },
    { source: 'Back', target: 'Geri' },
    { source: 'Back to {0} fields', target: '{0} sahələrə geri qayıt' },
    { source: 'Choose {0} from list', target: 'Siyahıdan {0} seçin' },
    { source: '{0} fields', target: '{0} sahələr' },
    { source: '{0} relationships', target: '{0} əlaqələr' },
    { source: 'Aggregate {0}', target: 'Topla {0}' },
    { source: 'No fields to select', target: 'Seçmək üçün sahə yoxdur' },
    { source: 'Enter value...', target: 'Dəyər daxil et...' },
    { source: 'Exclude', target: 'Çıxart' },
    { source: 'Actions', target: 'Əməliyyatlar' },
    { source: 'Search', target: 'Axtar' },
    { source: 'Sort 1 → 9', target: '1 → 9 sırala' },
    { source: 'Sort 9 → 1', target: '9 → 1 sırala' },
    { source: 'Sort A → Z', target: 'A → Z sırala' },
    { source: 'Sort Z → A', target: 'Z → A sırala' },
    { source: 'Refresh automatically', target: 'Avtomatik yenilə' },
    { source: 'All', target: 'Hamısı' },
    { source: 'Selected', target: 'Seçilmiş' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'Təəssüf ki, sorğunuza uyğun {0} tapılmadı'
    },
    { source: 'We are fetching {0}, please, wait...', target: '{0} yüklənir, zəhmət olmasa gözləyin...' },
    { source: 'Add filter', target: 'Filtr əlavə et' },
    { source: 'Delete this filter', target: 'Bu filtri sil' },
    { source: 'Toggle ordering', target: 'Sıralamanı dəyiş' },
    { source: 'Not configured', target: 'Konfiqurasiya olunmayıb' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'Təəssüf ki, bu komponent hələ konfiqurasiya olunmayıb'
    },
    { source: 'records', target: 'qeydlər' },
    { source: '{0} items', target: '{0} maddələr' },

    // Menu
    { source: 'Users & Teams', target: 'İstifadəçilər və Komandalar' },
    { source: 'Billing', target: 'Hesablama' },
    { source: 'Billing & Plans', target: 'Hesablama və Planlar' },
    { source: 'API keys', target: 'API açarları' },
    { source: 'Dark Mode', target: 'Qaranlıq rejim' },
    { source: 'Light Mode', target: 'İşıq rejimi' },
    { source: 'Disable Staff', target: 'İşçi qrupunu söndür' },
    { source: 'Enable Staff', target: 'İşçi qrupunu aktivləşdir' },
    { source: 'Manage Templates', target: 'Şablonları idarə et' },
    { source: 'Logout', target: 'Çıxış' },
    { source: 'Activity Log', target: 'Fəaliyyət jurnalı' },
    { source: 'Collaborations', target: 'Əməkdaşlıqlar' },
    { source: 'Open Visual Builder', target: 'Vizual Redaktoru açın' },

    // Filters
    { source: 'equals', target: 'bərabərdir' },
    { source: 'does not equal', target: 'bərabər deyil' },
    { source: '{0} equals {1}', target: '{0} {1} bərabərdir' },
    { source: '{0} does not equal {1}', target: '{0} {1} bərabər deyil' },

    { source: 'contains', target: 'ehtiva edir' },
    { source: 'does not contain', target: 'ehtiva etmir' },
    { source: '{0} contains {1}', target: '{0} {1} ehtiva edir' },
    { source: '{0} not contains {1}', target: '{0} {1} ehtiva etmir' },

    { source: 'starts with', target: 'ilə başlayır' },
    { source: 'does not start with', target: 'ilə başlamır' },
    { source: '{0} starts with {1}', target: '{0} {1} ilə başlayır' },
    { source: '{0} does not start with {1}', target: '{0} {1} ilə başlamır' },

    { source: 'ends with', target: 'ilə bitir' },
    { source: 'does not end with', target: 'ilə bitmir' },
    { source: '{0} ends with {1}', target: '{0} {1} ilə bitir' },
    { source: '{0} does not end with {1}', target: '{0} {1} ilə bitmir' },

    { source: 'greater than', target: 'böyükdür' },
    { source: 'is not greater than', target: 'böyük deyil' },
    { source: '{0} is greater than {1}', target: '{0} {1}-dən böyükdür' },
    { source: '{0} not greater than {1}', target: '{0} {1}-dən böyük deyil' },

    { source: 'greater than or equals', target: 'böyük və ya bərabərdir' },
    { source: 'is not greater than or equals', target: 'böyük və ya bərabər deyil' },
    { source: '{0} is greater than or equals {1}', target: '{0} {1}-yə böyük və ya bərabərdir' },
    { source: '{0} is not greater than or equals {1}', target: '{0} {1}-yə böyük və ya bərabər deyil' },

    { source: 'less than', target: 'kiçikdir' },
    { source: 'is not less than', target: 'kiçik deyil' },
    { source: '{0} is less than {1}', target: '{0} {1}-dən kiçikdir' },
    { source: '{0} is not less than {1}', target: '{0} {1}-dən kiçik deyil' },

    { source: 'less than or equals', target: 'kiçik və ya bərabərdir' },
    { source: 'is not less than or equals', target: 'kiçik və ya bərabər deyil' },
    { source: '{0} is less than or equals {1}', target: '{0} {1}-yə kiçik və ya bərabərdir' },
    { source: '{0} is not less than or equals {1}', target: '{0} {1}-yə kiçik və ya bərabər deyil' },

    { source: 'one of', target: 'onlardan biri' },
    { source: 'is one of', target: 'onlardan biridir' },
    { source: 'is not one of', target: 'onlardan biri deyil' },
    { source: '{0} is one of {1}', target: '{0} {1}-dən biridir' },
    { source: '{0} is not one of {1}', target: '{0} {1}-dən biri deyil' },

    { source: 'is null', target: 'boşdur' },
    { source: 'is not null', target: 'boş deyil' },
    { source: '{0} is null', target: '{0} boşdur' },
    { source: '{0} is not null', target: '{0} boş deyil' },

    { source: 'is future', target: 'gələcəkdədir' },
    { source: 'in the future', target: 'gələcəkdədir' },
    { source: 'is not in the future', target: 'gələcəkdə deyil' },
    { source: '{0} is in the future', target: '{0} gələcəkdədir' },
    { source: '{0} is not in the future', target: '{0} gələcəkdə deyil' },

    { source: 'is past', target: 'keçmişdədir' },
    { source: 'in the past', target: 'keçmişdədir' },
    { source: 'is not in the past', target: 'keçmişdə deyil' },
    { source: '{0} is in the past', target: '{0} keçmişdədir' },
    { source: '{0} is not in the past', target: '{0} keçmişdə deyil' },

    { source: 'is Today', target: 'bugündür' },
    { source: 'today', target: 'bugün' },
    { source: 'is not today', target: 'bugün deyil' },
    { source: '{0} is today', target: '{0} bugündür' },
    { source: '{0} is not today', target: '{0} bugün deyil' },

    { source: 'is Yesterday', target: 'dünəndir' },
    { source: 'yesterday', target: 'dünən' },
    { source: 'is not yesterday', target: 'dünən deyil' },
    { source: '{0} is yesterday', target: '{0} dünəndir' },
    { source: '{0} is not yesterday', target: '{0} dünən deyil' },

    { source: 'is Last Week', target: 'keçən həftədir' },
    { source: 'last week', target: 'keçən həftə' },
    { source: 'is not last week', target: 'keçən həftə deyil' },
    { source: '{0} is last week', target: '{0} keçən həftədir' },
    { source: '{0} is not last week', target: '{0} keçən həftə deyil' },

    { source: 'is Last Month', target: 'keçən aydır' },
    { source: 'last month', target: 'keçən ay' },
    { source: 'is not last month', target: 'keçən ay deyil' },
    { source: '{0} is last month', target: '{0} keçən aydır' },
    { source: '{0} is not last month', target: '{0} keçən ay deyil' },

    { source: 'is Last Quarter', target: 'keçən rüb' },
    { source: 'last quarter', target: 'keçən rüb' },
    { source: 'is not last quarter', target: 'keçən rüb deyil' },
    { source: '{0} is last quarter', target: '{0} keçən rüb' },
    { source: '{0} is not last quarter', target: '{0} keçən rüb deyil' },

    { source: 'is Last Year', target: 'keçən ildir' },
    { source: 'last year', target: 'keçən il' },
    { source: 'is not last year', target: 'keçən il deyil' },
    { source: '{0} is last year', target: '{0} keçən ildir' },
    { source: '{0} is not last year', target: '{0} keçən il deyil' },

    { source: 'is Last X Days', target: 'son X gündür' },
    { source: 'last X days', target: 'son X gün' },
    { source: 'is not last X days', target: 'son X gün deyil' },
    { source: '{0} is last {1} days', target: '{0} son {1} gündür' },
    { source: '{0} is not last {1} days', target: '{0} son {1} gün deyil' },

    { source: 'is Current Week', target: 'bu həftədir' },
    { source: 'current week', target: 'bu həftə' },
    { source: 'is not current week', target: 'bu həftə deyil' },
    { source: '{0} is current week', target: '{0} bu həftədir' },
    { source: '{0} is not current week', target: '{0} bu həftə deyil' },

    { source: 'is Current Month', target: 'bu aydır' },
    { source: 'current month', target: 'bu ay' },
    { source: 'is not current month', target: 'bu ay deyil' },
    { source: '{0} is current month', target: '{0} bu aydır' },
    { source: '{0} is not current month', target: '{0} bu ay deyil' },

    { source: 'is Current Quarter', target: 'bu rübdür' },
    { source: 'current quarter', target: 'bu rüb' },
    { source: 'is not current quarter', target: 'bu rüb deyil' },
    { source: '{0} is current quarter', target: '{0} bu rübdür' },
    { source: '{0} is not current quarter', target: '{0} bu rüb deyil' },

    { source: 'is Current Year', target: 'bu ildir' },
    { source: 'current year', target: 'bu il' },
    { source: 'is not current year', target: 'bu il deyil' },
    { source: '{0} is current year', target: '{0} bu ildir' },
    { source: '{0} is not current year', target: '{0} bu il deyil' },

    { source: 'is Previous Week', target: 'keçən həftə' },
    { source: 'previous week', target: 'keçən həftə' },
    { source: 'is not previous week', target: 'keçən həftə deyil' },
    { source: '{0} is previous week', target: '{0} keçən həftədir' },
    { source: '{0} is not previous week', target: '{0} keçən həftə deyil' },

    { source: 'is Previous Month', target: 'keçən aydır' },
    { source: 'previous month', target: 'keçən ay' },
    { source: 'is not previous month', target: 'keçən ay deyil' },
    { source: '{0} is previous month', target: '{0} keçən aydır' },
    { source: '{0} is not previous month', target: '{0} keçən ay deyil' },

    { source: 'is Previous Quarter', target: 'keçən rübdür' },
    { source: 'previous quarter', target: 'keçən rüb' },
    { source: 'is not previous quarter', target: 'keçən rüb deyil' },
    { source: '{0} is previous quarter', target: '{0} keçən rübdür' },
    { source: '{0} is not previous quarter', target: '{0} keçən rüb deyil' },

    { source: 'is Previous Year', target: 'keçən ildir' },
    { source: 'previous year', target: 'keçən il' },
    { source: 'is not previous year', target: 'keçən il deyil' },
    { source: '{0} is previous year', target: '{0} keçən ildir' },
    { source: '{0} is not previous year', target: '{0} keçən il deyil' },

    { source: 'is Previous X Days', target: 'son X gün' },
    { source: 'previous X days', target: 'son X gün' },
    { source: 'is not previous X days', target: 'son X gün deyil' },
    { source: '{0} is previous {1} days', target: '{0} son {1} gündür' },
    { source: '{0} is not previous {1} days', target: '{0} son {1} gün deyil' },

    { source: 'is empty', target: 'boşdur' },
    { source: 'is not empty', target: 'boş deyil' },
    { source: '{0} is empty', target: '{0} boşdur' },
    { source: '{0} is not empty', target: '{0} boş deyil' },

    { source: 'covered by', target: 'əhatə edir' },
    { source: 'is not covered by', target: 'əhatə etmir' },
    { source: '{0} covered by {1}', target: '{0} {1} ilə əhatə olunur' },
    { source: '{0} is not covered by {1}', target: '{0} {1} ilə əhatə olunmur' },

    // Activity log
    { source: 'No activities found', target: 'Heç bir fəaliyyət tapılmadı' },
    {
      source: 'Start to working with data to log activities.',
      target: 'Fəaliyyətləri qeyd etmək üçün məlumatlarla işləməyə başlayın.'
    },
    { source: 'All Activity', target: 'Bütün Fəaliyyət' },
    { source: 'Create Record', target: 'Qeydi yaradın' },
    { source: 'Update Record', target: 'Qeydi yeniləyin' },
    { source: 'Delete Record', target: 'Qeydi silin' },
    { source: 'All Members', target: 'Bütün İstifadəçilər' },

    // Collaboration
    { source: 'Timeline', target: 'Zaman xətti' },
    { source: 'Messages', target: 'Mesajlar' },
    { source: 'Activity', target: 'Fəaliyyət' },
    { source: 'Start chatting with your team', target: 'Komandanızla söhbət etməyə başlayın' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'Vacib məlumatları izləmək üçün cari səhifə haqqında mesaj yazın.'
    },
    { source: 'Your Message', target: 'Mesajınız' },
    { source: 'Send', target: 'Göndər' },

    // Share
    { source: 'Invite members', target: 'İstifadəçiləri dəvət et' },
    { source: 'Public share', target: 'İctimai paylaş' },
    { source: 'Sign Up', target: 'Qeydiyyatdan keç' },
    { source: 'Members', target: 'İstifadəçilər' },
    { source: 'Invite with Email', target: 'Email ilə dəvət et' },
    { source: 'Invite someone...', target: 'Biri dəvət et...' },
    { source: 'Send Invite', target: 'Dəvət göndər' },
    {
      source: 'Limit access to your data by user properties',
      target: 'Məlumatlarınıza istifadəçi xüsusiyyətləri ilə giriş məhdudlaşdırın'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: 'Əməkdaşlığa dəvət etmək istədiyiniz istifadəçinin emailini daxil edin.'
    },
    { source: 'Copy', target: 'Kopyala' },
    { source: 'Invite with Link', target: 'Link ilə dəvət et' },
    { source: 'Remove link', target: 'Linki sil' },
    { source: 'Add Invite Link', target: 'Dəvət linki əlavə et' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'İnternetdə bu linkə sahib hər kəs seçilmiş komandaya qoşula bilər.'
    },
    { source: 'Pending Invites', target: 'Gözləyən dəvətlər' },
    { source: 'Cancel invite', target: 'Dəvəti ləğv et' },
    { source: 'Active Members', target: 'Aktiv istifadəçilər' },
    { source: 'Remove member', target: 'İstifadəçini sil' },
    {
      source: 'You are setting sharing for the current page',
      target: 'Cari səhifə üçün paylaşımı qurursunuz'
    },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'Proqramınızın bütün səhifələri üçün paylaşımı qurursunuz.'
    },
    { source: 'Public access link', target: 'İctimai giriş linki' },
    { source: 'Updating public access...', target: 'İctimai giriş yenilənir...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'Bu linkə sahib hər kəs cari səhifəni görə biləcək. Bu şəkildə cari səhifəni başqa bir saytınıza da yerləşdirə bilərsiniz.'
    },
    { source: 'Embed code (IFRAME)', target: 'Kodu daxil edin (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: 'Cari səhifənin görünməsini istədiyiniz saytınızın HTML koduna bu kodu yapışdırın.'
    },
    { source: 'link', target: 'link' },
    { source: 'invited', target: 'dəvət etmişdir' },
    { source: 'Choose Team', target: 'Komanda seç' },
    { source: 'App Teams', target: 'Proqram komandaları' },
    { source: 'Built-In Teams', target: 'Daxili komandalar' },
    { source: 'Clear Team', target: 'Komandanı sıfırla' },
    { source: 'Can build application and modify data', target: 'Proqram yarada və məlumatları redaktə edə bilər' },
    { source: 'Can modify data in application', target: 'Proqramdakı məlumatları redaktə edə bilər' },
    { source: 'Can only view data without modification', target: 'Məlumatları yalnız redaktəsiz görə bilər' },
    { source: 'Add Team', target: 'Komanda əlavə et' },
    { source: 'Edit Team', target: 'Komandanı redaktə et' },
    { source: 'Adding Team', target: 'Komanda əlavə edilir' },
    {
      source: 'Keep control over who has access to current App',
      target: 'Cari Proqrama kimin giriş imkanı olduğunu idarə edin'
    },
    { source: 'Enter Team Name', target: 'Komandanın adını daxil edin' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'Komandanın adını daxil edin, məsələn: Dəstək, Satış, Marketinq və s.'
    },
    { source: 'Add a new member to this team.', target: 'Bu komandaya yeni istifadəçi əlavə edin.' },
    { source: 'Invite new member', target: 'Yeni istifadəçi dəvət et' },
    { source: 'User', target: 'İstifadəçi' },
    { source: 'Date Added', target: 'Əlavə olunan tarix' },
    { source: 'You', target: 'Siz' },
    { source: 'Edit', target: 'Redaktə et' },
    { source: 'No users in this team', target: 'Bu komandada istifadəçi yoxdur' },
    { source: 'Page Permissions', target: 'Səhifə hüquqları' },
    { source: 'App Permissions', target: 'Proqram icazələri' },
    { source: 'Properties', target: 'Xüsusiyyətlər' },
    { source: 'Page name', target: 'Səhifə adı' },
    { source: 'Access', target: 'Giriş' },
    { source: 'Full Access', target: 'Tam Giriş' },
    { source: 'Read Only', target: 'Yalnız oxumaq' },
    { source: 'No Access', target: 'Giriş yoxdur' },
    { source: 'Read', target: 'Oxu' },
    { source: 'Update', target: 'Yenilə' },
    { source: 'Write', target: 'Yaz' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'Sil' },
    { source: 'Custom Access', target: 'Xüsusi Giriş' },
    { source: 'Read, create, update and delete data', target: 'Məlumatları oxumaq, yaratmaq, yeniləmək və silmək' },
    { source: 'Choose allowed operations granularly', target: 'İcazə verilən əməliyyatları ayrı-ayrılıqda seçin' },
    { source: 'Without any access to data', target: 'Məlumatlara giriş olmadan' },
    { source: 'Name', target: 'Ad' },
    { source: 'Active', target: 'Aktiv' },
    { source: 'Settings', target: 'Parametrlər' },
    { source: 'Members and Teams', target: 'İstifadəçilər və Komandalar' },
    { source: 'App Builder', target: 'Proqram qurucusu' },
    { source: 'Collection Permissions', target: 'Kolleksiya icazələri' },
    { source: "Grant permissions to app's collection", target: 'Proqramın kolleksiyasına icazələr verin' },
    { source: 'Collection', target: 'Kolleksiya' },
    {
      source: 'Limit access to your data by team properties',
      target: 'Məlumatlarınıza komanda xüsusiyyətləri ilə giriş məhdudlaşdırın'
    },
    { source: 'Save Team', target: 'Komandanı Yadda saxla' },
    { source: 'Create Team', target: 'Komanda Yaradın' },
    { source: 'Value', target: 'Dəyər' },
    { source: 'No properties specified', target: 'Xüsusiyyətlər göstərilməyib' },

    // Navigation
    { source: 'Current App', target: 'Cari Proqram' },
    { source: 'Home', target: 'Ana Səhifə' },

    // Profile
    {
      source: 'We are fetching user data, please, wait...',
      target: 'İstifadəçi məlumatları gətirilir, zəhmət olmasa gözləyin...'
    },
    { source: 'Profile Settings', target: 'Profil Tənzimləmələri' },
    { source: 'Basic information about your account.', target: 'Hesabınız haqqında əsas məlumat.' },
    { source: 'Photo', target: 'Photo' },
    { source: 'your photo', target: 'sizin fotonuz' },
    { source: 'Change', target: 'Dəyişdir' },
    { source: 'Upload', target: 'Yüklə' },
    { source: 'Photo was successfully updated', target: 'Foto uğurla yeniləndi' },
    { source: 'Photo was successfully deleted', target: 'Foto uğurla silindi' },
    { source: 'First Name', target: 'Ad' },
    { source: 'Last Name', target: 'Soyad' },
    { source: 'Your Email', target: 'Sizin Email' },
    { source: 'Email Change', target: 'Email Dəyişikliyi' },
    { source: 'New Email', target: 'Yeni Email' },
    { source: 'Change Email', target: 'Email Dəyişikliyi' },
    { source: 'Check your inbox', target: 'Gələnlər qutunuzu yoxlayın' },
    { source: 'Confirmation Email was sent to {0}', target: 'Təsdiq Emaili {0}-a göndərildi' },
    { source: 'Changing Email failed', target: 'Emailin dəyişdirilməsi uğursuz oldu' },
    { source: 'Password Change', target: 'Şifrə Dəyişikliyi' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target: 'Şifrə hesabınızı qorumaq üçün kifayət qədər güclü olmalıdır, ən az 12 simvol uzunluğunda olmalıdır.'
    },
    { source: 'Current Password', target: 'Cari Şifrə' },
    { source: 'New Password', target: 'Yeni Şifrə' },
    { source: 'Confirm New Password', target: 'Yeni Şifrəni Təsdiqlə' },
    { source: 'Change Password', target: 'Şifrəni Dəyişdir' },
    {
      source: 'Current password was successfully updated, all other sessions will be logged out shortly',
      target: 'Cari şifrə uğurla yeniləndi, bütün digər sessiyalar tezliklə çıxış edəcək'
    },
    { source: 'Saving current password failed', target: 'Cari şifrəni yadda saxlamaq uğursuz oldu' },
    { source: 'Short password', target: 'Qısa şifrə' },
    { source: "Passwords don't match", target: 'Şifrələr uyğun gəlmir' },
    { source: 'Personal Preferences', target: 'Şəxsi Tərcihlər' },
    { source: 'Language', target: 'Dil' },
    { source: 'Timezone', target: 'Saat Qurşağı' },
    { source: 'Current time in {0} is', target: '{0}-da cari vaxt' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'Hesabınız üçün əlavə tərcihlərini fərdiləşdirin.'
    },
    { source: 'News & Proposals', target: 'Xəbərlər və Təkliflər' },
    {
      source: 'Subscribe to our updates and proposals.',
      target: 'Yeniləmələrimizə və təkliflərimizə abunə olun.'
    },
    { source: 'Save changes', target: 'Dəyişikləri Yadda saxla' },
    { source: 'Current user was successfully updated', target: 'Cari istifadəçi uğurla yeniləndi' },
    { source: 'Saving current user failed', target: 'Cari istifadəçinin yadda saxlanılması uğursuz oldu' },

    // My Apps
    { source: 'Type to search...', target: 'Axtarış üçün yazın...' },
    { source: 'My Apps', target: 'Mənim Proqramlarım' },
    { source: 'New App', target: 'Yeni Proqram' },
    { source: 'Builder', target: 'Yaradıcı' },
    { source: 'App', target: 'Proqram' },
    { source: 'continue install', target: 'quraşdırmaya davam et' },
    { source: 'Open builder', target: 'Yaradıcıyı Aç' },
    { source: 'View published', target: 'Nəşr olunanı Göster' },
    { source: 'Delete App', target: 'Proqramı Sil' },
    { source: 'Start from a template', target: 'Şablondan Başla' },
    { source: 'Preview', target: 'Ön izləmə' },
    { source: 'Contact Support', target: 'Dəstək ilə Əlaqə' },
    { source: 'Documentation', target: 'Sənədlər' },
    { source: 'Feature Requests', target: 'Xüsusiyyət Tələbləri' },
    { source: 'See What’s New', target: 'Nələr Yeni Gör' },
    { source: 'Search templates...', target: 'Şablonları Axtar...' },
    { source: 'any', target: 'hər hansı' },
    { source: 'more', target: 'daha çox' },
    { source: 'Choose Data Source', target: 'Məlumat Mənbəsini Seçin' },
    { source: 'works with 30+ data sources', target: '30+ məlumat mənbəyi ilə işləyir' },
    { source: 'Use this template', target: 'Bu şablonu istifadə edin' },
    { source: 'stores data in Jet Tables', target: 'məlumatları Jet Tables-da saxlayır' },
    { source: 'New Data', target: 'Yeni Məlumat' },
    { source: 'using {0}', target: '{0} istifadə olunur' },
    { source: "Can't find resource you're looking for?", target: 'Axtardığınız resursu tapa bilmirsiniz?' },
    { source: 'Admin Panel', target: 'Admin Paneli' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'Məlumatlarınız üzərində siyahı, yarat və yenilə (CRUD) əməliyyatları'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target:
        'Stripe, Twilio və GraphQL kimi hər hansı bir bazaya, proqrama və ya API-yə əsaslanan xüsusi bir admin panel yarada bilərsiniz.'
    },
    { source: 'All Integrations', target: 'Bütün İnteqrasiyalar' },
    { source: 'Databases', target: 'Məlumat Bazaları' },
    { source: 'APIs', target: 'API-lər' },
    { source: 'Frameworks', target: 'Framework-lər' },
    { source: 'Storages', target: 'Saxlama Yeri' },

    // Sign In
    { source: 'Good morning', target: 'Sabahınız xeyir' },
    { source: 'Good afternoon', target: 'Günortanız xeyir' },
    { source: 'Good evening', target: 'Axşamınız xeyir' },
    { source: 'Sign In', target: 'Daxil Ol' },
    { source: 'Welcome Back.', target: 'Xoş gəlmisiniz.' },
    { source: 'Sign in with {0}', target: '{0} ilə daxil olun' },
    { source: 'or login with', target: 'və ya daxil olun' },
    { source: 'Enter E-mail', target: 'E-mail Daxil edin' },
    { source: 'Enter password', target: 'Şifrəni Daxil edin' },
    { source: 'Login', target: 'Giriş' },
    { source: 'Create new account', target: 'Yeni hesab yaradın' },
    { source: 'Forgot my password', target: 'Şifrəmi unutdum' },
    { source: 'required', target: 'tələb olunur' },
    { source: 'incorrect Email', target: 'düzgün olmayan E-poçt' },
    { source: 'Minimum password length {0}', target: 'Şifrə minimum {0} simvol olmalıdır' },
    { source: 'Unable to Sign In', target: 'Daxil olmaq mümkün deyil' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'Pulsuz <span class="auth-form__accent">Bu gün başladın</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target:
        'Kredit kartı tələb olunmur. 14 günlük PRO sınaq müddətində pulsuz olaraq inkişaf etmiş funksiyaları əldə edəcəksiniz.'
    },
    { source: 'Enter First Name', target: 'Adı daxil edin' },
    { source: 'Enter Last Name (optional)', target: 'Soyadı daxil edin (istəyə bağlı)' },
    { source: 'Enter Email', target: 'Email Daxil edin' },
    { source: 'Password', target: 'Şifrə' },
    { source: 'Repeat Password', target: 'Şifrəni təkrarlayın' },
    {
      source: 'By signing in you’re okay with our',
      target: 'Daxil olmaqla siz, bizimlə razısınız'
    },
    {
      source: 'Creating an account means you’re okay with our',
      target: 'Hesab yaratmaqla siz, bizimlə razısınız'
    },
    { source: 'Terms of Service', target: 'Xidmət şərtləri' },
    { source: 'Privacy Policy', target: 'Məxfilik Siyasəti' },
    { source: 'and', target: 'və' },
    { source: 'Create account', target: 'Hesab yaradın' },
    { source: 'Already have an account', target: 'Artıq bir hesabınız var' },
    { source: 'Unable to Sign Up', target: 'Qeydiyyatdan keçmək mümkün deyil' },

    // Restore password
    { source: 'Reset your password', target: 'Şifrəni yeniləyin' },
    { source: 'Email Address', target: 'Email ünvanı' },
    { source: 'Reset password', target: 'Şifrəni yeniləyin' },
    { source: 'Return to Sign In', target: 'Daxil olmağa qayıt' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'Zəhmət olmasa, Emailinizi yoxlayın – <strong>{0}</strong>. Şifrənizi dəyişmək üçün izləmeniz lazım olan doğrulama linkini göndərmişik.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be at least 8 characters.',
      target: 'Demək olar ki, bitdi, sadəcə yeni şifrənizi aşağıya daxil edin. <br>Ən azı 8 simvol olmalıdır.'
    },
    { source: 'Reset password & Sign In', target: 'Şifrəni yeniləyin və daxil olun' },
    { source: 'Unable to Send Code', target: 'Kod göndərmək mümkün deyil' },
    { source: 'Unable to Change Password', target: 'Şifrəni dəyişmək mümkün deyil' },

    // Email Verification
    { source: 'Email Verification', target: 'Email Doğrulaması' },
    { source: 'Resend verification code', target: 'Doğrulama kodunu yenidən göndər' },
    { source: 'Verification email sent', target: 'Doğrulama emaili göndərildi' },
    { source: 'Your Email is now verified', target: 'Emailiniz təsdiqləndi' },
    { source: 'Request is incorrect', target: 'Sorğu doğru deyil' },

    // Invites
    {
      source: 'Join <span class="auth-form__accent">{0}</span>',
      target: '<span class="auth-form__accent">{0}</span> qoşulun'
    },
    {
      source: '<strong>{0}</strong> has invited you to join <strong>{1}</strong>',
      target: '<strong>{0}</strong> sizi <strong>{1}</strong>-a qoşulmağa dəvət etdi'
    },
    {
      source: 'Someone has invited you to join <strong>{0}</strong>',
      target: 'Kimsə sizi <strong>{0}</strong>-a qoşulmağa dəvət etdi'
    },
    {
      source: 'You are joining <strong>{0}</strong> using invite link',
      target: 'Dəvət linki istifadə edərək <strong>{0}</strong>-a qoşulursunuz'
    },
    { source: 'Join', target: 'Qoşulun' },
    { source: 'Go to home page', target: 'Ana səhifəyə get' },
    { source: 'Invite link is wrong', target: 'Dəvət linki səhvdir' },
    {
      source:
        'Looks like your invitation link has expired or maybe you have followed the wrong link. Please try to ask to invite your again.',
      target:
        'Dəvət linkinizin müddəti bitmiş kimi görünür və ya bəlkə səhv linki izləmisiniz. Zəhmət olmasa yenidən dəvət edin.'
    },
    {
      source: 'Unfortunately we failed to load information about this invitation',
      target: 'Təəssüf ki, bu dəvət haqqındaki məlumatı yükləyə bilmədik'
    },

    // Users & Teams
    { source: 'Members of {0}', target: '{0} İstifadəçiləri' },
    { source: 'How to get started', target: 'Başlamaq üçün necə' },
    { source: 'Users API', target: 'İstifadəçilər API' },
    { source: 'Teams API', target: 'Komandalar API' },
    { source: 'Invite Member', target: 'İstifadəçini dəvət et' },
    { source: 'Add User property', target: 'İstifadəçi xüsusiyyəti əlavə et' },
    { source: 'Add Team property', target: 'Komanda xüsusiyyəti əlavə et' },
    { source: 'Edit property', target: 'Xüsusiyyəti redaktə et' },
    { source: 'Delete property', target: 'Xüsusiyyəti sil' },
    { source: 'Users', target: 'İstifadəçilər' },
    { source: 'Teams', target: 'Komandalar' },
    { source: 'Search members', target: 'İstifadəçiləri axtar' },
    { source: 'Search teams', target: 'Komandaları axtar' },
    { source: '{0} pages', target: '{0} səhifələr' },
    { source: 'No members', target: 'İstifadəçi yoxdur' }
  ]
};

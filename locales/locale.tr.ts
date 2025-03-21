import { Locale } from './locale';

export const locale: Locale = {
  name: 'turkish',
  language: 'tr',
  items: [
    // General
    { source: 'Save', target: 'Kaydet' },
    { source: 'Create', target: 'Oluştur' },
    { source: 'Duplicating', target: 'Kopyalanıyor' },
    { source: 'Duplicate', target: 'Kopyala' },
    { source: 'Mass Edit', target: 'Toplu Düzenleme' },
    { source: 'Export', target: 'Dışa Aktar' },
    { source: 'Import', target: 'İçe Aktar' },
    { source: 'Delete', target: 'Sil' },
    { source: 'Continue', target: 'Devam et' },
    { source: 'Submit', target: 'Gönder' },
    { source: 'Cancel', target: 'İptal' },
    { source: 'Loading', target: 'Yükleniyor' },
    { source: 'Please wait...', target: 'Lütfen bekleyin...' },
    { source: 'Loading failed', target: 'Yükleme başarısız' },
    { source: 'Unknown error', target: 'Bilinmeyen hata' },
    { source: 'Add', target: 'Ekle' },
    { source: 'or', target: 'veya' },
    { source: 'Hours', target: 'Saatler' },
    { source: 'Minutes', target: 'Dakikalar' },
    { source: 'Seconds', target: 'Saniyeler' },
    { source: 'Saved', target: 'Kaydedildi' },
    { source: 'Error', target: 'Hata' },
    { source: 'Page not found', target: 'Sayfa bulunamadı' },
    {
      source: 'The specified address is incorrect, or the page does not exist',
      target: 'Belirtilen adres yanlış veya sayfa mevcut değil'
    },
    { source: 'Not allowed', target: 'İzin verilmedi' },
    {
      source: "You don't have permissions to access this page",
      target: 'Bu sayfaya erişim izniniz yok'
    },
    { source: 'Are you sure want to close?', target: 'Kapatmak istediğinizden emin misiniz?' },
    { source: 'Close', target: 'Kapat' },

    // Actions
    { source: 'Action executed', target: 'Eylem yürütüldü' },
    { source: 'Action executed successfully', target: 'Eylem başarıyla yürütüldü' },
    { source: 'Action failed', target: 'Eylem başarısız oldu' },
    {
      source: "You don't have permission for run this operation",
      target: 'Bu işlemi gerçekleştirmek için izniniz yok'
    },
    { source: 'Specify parameters', target: 'Parametreleri belirtin' },
    { source: 'Executing action', target: 'Eylem yürütülüyor' },
    { source: 'You are executing <strong>{0}</strong>', target: 'Şu anda <strong>{0}</strong> işlemi yürütülüyor' },
    { source: 'Please fill in the parameters below.', target: 'Lütfen aşağıdaki parametreleri doldurun.' },
    { source: 'Execute', target: 'Yürüt' },
    { source: 'Executing', target: 'Yürütülüyor' },
    { source: 'Finished', target: 'Tamamlandı' },
    { source: 'Done', target: 'Bitti' },

    // Export
    { source: 'Records Export', target: 'Kayıtların Dışa Aktarımı' },
    { source: 'Downloading records data as a file', target: 'Kayıt verileri dosya olarak indiriliyor' },
    { source: 'Choose format', target: 'Formatı seçin' },
    { source: 'Number of exporting records', target: 'Dışa aktarılacak kayıt sayısı' },
    { source: { label: 'Export', context: 'submit' }, target: 'Dışa Aktar' },
    { source: 'Exporting', target: 'Dışa aktarılıyor' },
    { source: 'Export completed', target: 'Dışa aktarma tamamlandı' },
    { source: 'Failed to export', target: 'Dışa aktarma başarısız oldu' },

    // Components
    { source: 'optional', target: 'isteğe bağlı' },
    { source: 'choose', target: 'seç' },
    { source: 'Clear value', target: 'Değeri Temizle' },
    { source: 'loading...', target: 'yükleniyor...' },
    { source: 'Nothing found', target: 'Sonuç Bulunamadı' },
    { source: 'Search...', target: 'Ara...' },
    { source: 'Enter at least {0} characters', target: 'En az {0} karakter girin' },
    { source: 'No options', target: 'Seçenek yok' },
    { source: 'Drop files here or', target: 'Dosyaları buraya bırakın veya' },
    { source: 'Upload new', target: 'Yeni yükle' },
    { source: 'Clear', target: 'Temizle' },
    { source: 'Download', target: 'İndir' },
    { source: 'Choose file', target: 'Dosya seç' },
    { source: 'Choose files', target: 'Dosyaları seç' },
    { source: 'Scan with Camera', target: 'Kamerayla Tara' },
    { source: 'Scan Image file', target: 'Resim Dosyasını Tara' },
    { source: 'Choose camera', target: 'Kamera seç' },
    { source: 'Stop scanning', target: 'Taramayı durdur' },
    { source: 'Scan again', target: 'Yeniden tara' },
    { source: 'Use this scan', target: 'Bu taramayı kullan' },
    { source: 'Failed to scan', target: 'Tarama başarısız oldu' },
    {
      source: 'Code failed to scan, please try another image',
      target: 'Kod taranamadı, lütfen başka bir resim deneyin'
    },
    { source: 'current', target: 'mevcut' },
    { source: 'Day', target: 'Gün' },
    { source: 'Week', target: 'Hafta' },
    { source: 'Month', target: 'Ay' },
    { source: 'Year', target: 'Yıl' },
    { source: 'Today', target: 'Bugün' },
    { source: 'Daily', target: 'Günlük' },
    { source: 'Weekly', target: 'Haftalık' },
    { source: 'Monthly', target: 'Aylık' },
    { source: 'Quarterly', target: 'Üç Aylık' },
    { source: 'Yearly', target: 'Yıllık' },
    { source: 'Hourly', target: 'Saatlik' },
    { source: 'Minutely', target: 'Dakikalık' },
    { source: 'Since', target: 'Beraberinde' },
    { source: 'Before', target: 'Öncesinde' },
    { source: 'Between', target: 'Arasında' },
    { source: 'From date', target: 'Tarihinden itibaren' },
    { source: 'To date', target: 'Tarihine kadar' },
    { source: 'Coordinates', target: 'Koordinatlar' },
    { source: 'Latitude', target: 'Enlem' },
    { source: 'Longitude', target: 'Boylam' },
    { source: 'Default color', target: 'Varsayılan renk' },
    { source: 'not specified', target: 'belirtilmemiş' },
    { source: 'Sign using your finger or pointer', target: 'Parmağınızı veya işaretçinizi kullanarak imzalayın' },

    // List components
    { source: 'Filter', target: 'Filtrele' },
    { source: 'Filter by field', target: 'Alana Göre Filtrele' },
    { source: 'Filter by...', target: 'Şuna Göre Filtrele...' },
    { source: 'Back', target: 'Geri' },
    { source: 'Back to {0} fields', target: '{0} alanlarına geri dön' },
    { source: 'Choose {0} from list', target: 'Listeden {0} seç' },
    { source: '{0} fields', target: '{0} alanları' },
    { source: '{0} relationships', target: '{0} ilişkileri' },
    { source: 'Aggregate {0}', target: '{0} Toplamı' },
    { source: 'No fields to select', target: 'Seçilecek alan yok' },
    { source: 'Enter value...', target: 'Değer girin...' },
    { source: 'Exclude', target: 'Hariç Tut' },
    { source: 'Actions', target: 'İşlemler' },
    { source: 'Search', target: 'Ara' },
    { source: 'Sort 1 → 9', target: 'Sırala 1 → 9' },
    { source: 'Sort 9 → 1', target: 'Sırala 9 → 1' },
    { source: 'Sort A → Z', target: 'Sırala A → Z' },
    { source: 'Sort Z → A', target: 'Sırala Z → A' },
    { source: 'Refresh automatically', target: 'Otomatik Yenile' },
    { source: 'All', target: 'Tümü' },
    { source: 'Selected', target: 'Seçili' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'Maalesef aramanızla eşleşen {0} bulunamadı'
    },
    { source: 'We are fetching {0}, please, wait...', target: '{0} getiriliyor, lütfen bekleyin...' },
    { source: 'Add filter', target: 'Filtre Ekle' },
    { source: 'Delete this filter', target: 'Bu Filtreyi Sil' },
    { source: 'Toggle ordering', target: 'Sıralamayı Değiştir' },
    { source: 'Not configured', target: 'Yapılandırılmamış' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'Maalesef bu bileşen henüz yapılandırılmamış'
    },
    { source: 'records', target: 'kayıtlar' },
    { source: '{0} items', target: '{0} öğe' },

    // Menu
    { source: 'Users & Teams', target: 'Kullanıcılar ve Takımlar' },
    { source: 'Billing', target: 'Faturalandırma' },
    { source: 'Billing & Plans', target: 'Faturalandırma ve Planlar' },
    { source: 'API keys', target: 'API anahtarları' },
    { source: 'Dark Mode', target: 'Koyu Mod' },
    { source: 'Light Mode', target: 'Açık Mod' },
    { source: 'Disable Staff', target: 'Personeli Devre Dışı Bırak' },
    { source: 'Enable Staff', target: 'Personeli Etkinleştir' },
    { source: 'Manage Templates', target: 'Şablonları Yönet' },
    { source: 'Logout', target: 'Çıkış Yap' },
    { source: 'Activity Log', target: 'Etkinlik Günlüğü' },
    { source: 'Collaborations', target: 'İş Birlikleri' },
    { source: 'Open Visual Builder', target: 'Görsel Oluşturucuyu Aç' },

    // Filters
    { source: 'equals', target: 'eşittir' },
    { source: 'does not equal', target: 'eşit değildir' },
    { source: '{0} equals {1}', target: "{0}, {1}'e eşittir" },
    { source: '{0} does not equal {1}', target: "{0}, {1}'e eşit değildir" },

    { source: 'contains', target: 'içerir' },
    { source: 'does not contain', target: 'içermez' },
    { source: '{0} contains {1}', target: "{0}, {1}'i içerir" },
    { source: '{0} not contains {1}', target: "{0}, {1}'i içermez" },

    { source: 'starts with', target: 'ile başlar' },
    { source: 'does not start with', target: 'ile başlamaz' },
    { source: '{0} starts with {1}', target: '{0}, {1} ile başlar' },
    { source: '{0} does not start with {1}', target: '{0}, {1} ile başlamaz' },

    { source: 'ends with', target: 'ile biter' },
    { source: 'does not end with', target: 'ile bitmez' },
    { source: '{0} ends with {1}', target: '{0}, {1} ile biter' },
    { source: '{0} does not end with {1}', target: '{0}, {1} ile bitmez' },

    { source: 'greater than', target: 'büyüktür' },
    { source: 'is not greater than', target: 'büyük değildir' },
    { source: '{0} is greater than {1}', target: "{0}, {1}'den büyüktür" },
    { source: '{0} not greater than {1}', target: "{0}, {1}'den büyük değildir" },

    { source: 'greater than or equals', target: 'büyük veya eşittir' },
    { source: 'is not greater than or equals', target: 'büyük veya eşit değildir' },
    { source: '{0} is greater than or equals {1}', target: "{0}, {1}'den büyük veya eşittir" },
    { source: '{0} is not greater than or equals {1}', target: "{0}, {1}'den büyük veya eşit değildir" },

    { source: 'less than', target: 'küçüktür' },
    { source: 'is not less than', target: 'küçük değildir' },
    { source: '{0} is less than {1}', target: "{0}, {1}'den küçüktür" },
    { source: '{0} is not less than {1}', target: "{0}, {1}'den küçük değildir" },

    { source: 'less than or equals', target: 'küçük veya eşittir' },
    { source: 'is not less than or equals', target: 'küçük veya eşit değildir' },
    { source: '{0} is less than or equals {1}', target: "{0}, {1}'den küçük veya eşittir" },
    { source: '{0} is not less than or equals {1}', target: "{0}, {1}'den küçük veya eşit değildir" },

    { source: 'one of', target: 'şunlardan biri' },
    { source: 'is one of', target: 'şunlardan biridir' },
    { source: 'is not one of', target: 'şunlardan biri değildir' },
    { source: '{0} is one of {1}', target: '{0}, {1} değerlerinden biridir' },
    { source: '{0} is not one of {1}', target: '{0}, {1} değerlerinden biri değildir' },

    { source: 'is null', target: 'boştur' },
    { source: 'is not null', target: 'boş değildir' },
    { source: '{0} is null', target: '{0} boştur' },
    { source: '{0} is not null', target: '{0} boş değildir' },

    { source: 'is future', target: 'gelecektir' },
    { source: 'in the future', target: 'gelecekte' },
    { source: 'is not in the future', target: 'gelecekte değil' },
    { source: '{0} is in the future', target: '{0} gelecekte' },
    { source: '{0} is not in the future', target: '{0} gelecekte değil' },

    { source: 'is past', target: 'geçmiştir' },
    { source: 'in the past', target: 'geçmişte' },
    { source: 'is not in the past', target: 'geçmişte değil' },
    { source: '{0} is in the past', target: '{0} geçmişte' },
    { source: '{0} is not in the past', target: '{0} geçmişte değil' },

    { source: 'is Today', target: 'bugündür' },
    { source: 'today', target: 'bugün' },
    { source: 'is not today', target: 'bugün değil' },
    { source: '{0} is today', target: '{0} bugündür' },
    { source: '{0} is not today', target: '{0} bugün değildir' },

    { source: 'is Yesterday', target: 'dündür' },
    { source: 'yesterday', target: 'dün' },
    { source: 'is not yesterday', target: 'dün değil' },
    { source: '{0} is yesterday', target: '{0} dündür' },
    { source: '{0} is not yesterday', target: '{0} dün değildir' },

    { source: 'is Last Week', target: 'geçen haftadır' },
    { source: 'last week', target: 'geçen hafta' },
    { source: 'is not last week', target: 'geçen hafta değil' },
    { source: '{0} is last week', target: '{0} geçen haftadır' },
    { source: '{0} is not last week', target: '{0} geçen hafta değildir' },

    { source: 'is Last Month', target: 'geçen aydır' },
    { source: 'last month', target: 'geçen ay' },
    { source: 'is not last month', target: 'geçen ay değil' },
    { source: '{0} is last month', target: '{0} geçen aydır' },
    { source: '{0} is not last month', target: '{0} geçen ay değildir' },

    { source: 'is Last Quarter', target: 'geçen çeyrektir' },
    { source: 'last quarter', target: 'geçen çeyrek' },
    { source: 'is not last quarter', target: 'geçen çeyrek değil' },
    { source: '{0} is last quarter', target: '{0} geçen çeyrektir' },
    { source: '{0} is not last quarter', target: '{0} geçen çeyrek değildir' },

    { source: 'is Last Year', target: 'geçen yıldır' },
    { source: 'last year', target: 'geçen yıl' },
    { source: 'is not last year', target: 'geçen yıl değil' },
    { source: '{0} is last year', target: '{0} geçen yıldır' },
    { source: '{0} is not last year', target: '{0} geçen yıl değildir' },

    { source: 'is Last X Days', target: 'son X gündür' },
    { source: 'last X days', target: 'son X gün' },
    { source: 'is not last X days', target: 'son X gün değil' },
    { source: '{0} is last {1} days', target: '{0} son {1} gündür' },
    { source: '{0} is not last {1} days', target: '{0} son {1} gün değildir' },

    { source: 'is Current Week', target: 'bu haftadır' },
    { source: 'current week', target: 'bu hafta' },
    { source: 'is not current week', target: 'bu hafta değil' },
    { source: '{0} is current week', target: '{0} bu haftadır' },
    { source: '{0} is not current week', target: '{0} bu hafta değildir' },

    { source: 'is Current Month', target: 'bu aydır' },
    { source: 'current month', target: 'bu ay' },
    { source: 'is not current month', target: 'bu ay değil' },
    { source: '{0} is current month', target: '{0} bu aydır' },
    { source: '{0} is not current month', target: '{0} bu ay değildir' },

    { source: 'is Current Quarter', target: 'Mevcut Çeyrek' },
    { source: 'current quarter', target: 'mevcut çeyrek' },
    { source: 'is not current quarter', target: 'mevcut çeyrek değil' },
    { source: '{0} is current quarter', target: '{0} mevcut çeyrekte' },
    { source: '{0} is not current quarter', target: '{0} mevcut çeyrekte değil' },

    { source: 'is Current Year', target: 'Mevcut Yıl' },
    { source: 'current year', target: 'mevcut yıl' },
    { source: 'is not current year', target: 'mevcut yıl değil' },
    { source: '{0} is current year', target: '{0} mevcut yılda' },
    { source: '{0} is not current year', target: '{0} mevcut yılda değil' },

    { source: 'is Previous Week', target: 'Önceki Hafta' },
    { source: 'previous week', target: 'önceki hafta' },
    { source: 'is not previous week', target: 'önceki hafta değil' },
    { source: '{0} is previous week', target: '{0} önceki haftada' },
    { source: '{0} is not previous week', target: '{0} önceki haftada değil' },

    { source: 'is Previous Month', target: 'Önceki Ay' },
    { source: 'previous month', target: 'önceki ay' },
    { source: 'is not previous month', target: 'önceki ay değil' },
    { source: '{0} is previous month', target: '{0} önceki ayda' },
    { source: '{0} is not previous month', target: '{0} önceki ayda değil' },

    { source: 'is Previous Quarter', target: 'Önceki Çeyrek' },
    { source: 'previous quarter', target: 'önceki çeyrek' },
    { source: 'is not previous quarter', target: 'önceki çeyrek değil' },
    { source: '{0} is previous quarter', target: '{0} önceki çeyrekte' },
    { source: '{0} is not previous quarter', target: '{0} önceki çeyrekte değil' },

    { source: 'is Previous Year', target: 'Önceki Yıl' },
    { source: 'previous year', target: 'önceki yıl' },
    { source: 'is not previous year', target: 'önceki yıl değil' },
    { source: '{0} is previous year', target: '{0} önceki yılda' },
    { source: '{0} is not previous year', target: '{0} önceki yılda değil' },

    { source: 'is Previous X Days', target: 'Önceki X Gün' },
    { source: 'previous X days', target: 'önceki X gün' },
    { source: 'is not previous X days', target: 'önceki X gün değil' },
    { source: '{0} is previous {1} days', target: '{0} önceki {1} günde' },
    { source: '{0} is not previous {1} days', target: '{0} önceki {1} günde değil' },

    { source: 'is empty', target: 'boş' },
    { source: 'is not empty', target: 'boş değil' },
    { source: '{0} is empty', target: '{0} boş' },
    { source: '{0} is not empty', target: '{0} boş değil' },

    { source: 'covered by', target: 'kapsamında' },
    { source: 'is not covered by', target: 'kapsamında değil' },
    { source: '{0} covered by {1}', target: '{0} {1} kapsamında' },
    { source: '{0} is not covered by {1}', target: '{0} {1} kapsamında değil' },

    // Activity log
    { source: 'No activities found', target: 'Aktivite bulunamadı' },
    {
      source: 'Start to working with data to log activities.',
      target: 'Aktiviteleri kaydetmek için verilerle çalışmaya başlayın.'
    },
    { source: 'All Activity', target: 'Tüm Aktiviteler' },
    { source: 'Create Record', target: 'Kayıt Oluştur' },
    { source: 'Update Record', target: 'Kayıt Güncelle' },
    { source: 'Delete Record', target: 'Kayıt Sil' },
    { source: 'All Members', target: 'Tüm Üyeler' },

    // Collaboration
    { source: 'Timeline', target: 'Zaman Çizelgesi' },
    { source: 'Messages', target: 'Mesajlar' },
    { source: 'Activity', target: 'Aktivite' },
    { source: 'Start chatting with your team', target: 'Ekibinizle sohbete başlayın' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'Önemli bilgileri takip etmek için mevcut sayfa hakkında not alın.'
    },
    { source: 'Your Message', target: 'Mesajınız' },
    { source: 'Send', target: 'Gönder' },

    // Share
    { source: 'Invite members', target: 'Üye Davet Et' },
    { source: 'Public share', target: 'Herkese Açık Paylaşım' },
    { source: 'Sign Up', target: 'Kayıt Ol' },
    { source: 'Members', target: 'Üyeler' },
    { source: 'Invite with Email', target: 'E-posta ile Davet Et' },
    { source: 'Invite someone...', target: 'Birini davet et...' },
    { source: 'Send Invite', target: 'Daveti Gönder' },
    {
      source: 'Limit access to your data by user properties',
      target: 'Verilerinize erişimi kullanıcı özelliklerine göre sınırlayın'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: 'Lütfen davet etmek istediğiniz kullanıcının e-postasını girin.'
    },
    { source: 'Copy', target: 'Kopyala' },
    { source: 'Invite with Link', target: 'Bağlantı ile Davet Et' },
    { source: 'Remove link', target: 'Bağlantıyı Kaldır' },
    { source: 'Add Invite Link', target: 'Davet Bağlantısı Ekle' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'Bu bağlantıya sahip olan herkes seçili ekibe katılabilecek.'
    },
    { source: 'Pending Invites', target: 'Bekleyen Davetler' },
    { source: 'Cancel invite', target: 'Daveti İptal Et' },
    { source: 'Active Members', target: 'Aktif Üyeler' },
    { source: 'Remove member', target: 'Üyeyi Kaldır' },
    {
      source: 'You are setting sharing for the current page',
      target: 'Mevcut sayfa için paylaşım ayarlarını yapıyorsunuz'
    },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'Uygulamanızın tüm sayfaları için paylaşım ayarlarını yapıyorsunuz.'
    },
    { source: 'Public access link', target: 'Herkese açık erişim bağlantısı' },
    { source: 'Updating public access...', target: 'Herkese açık erişim güncelleniyor...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'Bu bağlantıya sahip olan herkes mevcut sayfayı görüntüleyebilecek. Bu şekilde mevcut sayfayı başka bir web sitesine de gömebilirsiniz.'
    },
    { source: 'Embed code (IFRAME)', target: 'Gömme kodu (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: 'Bu kodu, mevcut sayfanın görünmesini istediğiniz web sitenizin HTML koduna yapıştırın.'
    },
    { source: 'link', target: 'bağlantı' },
    { source: 'invited', target: 'davet edildi' },
    { source: 'Choose Team', target: 'Ekip Seç' },
    { source: 'App Teams', target: 'Uygulama Ekipleri' },
    { source: 'Built-In Teams', target: 'Yerleşik Ekipler' },
    { source: 'Clear Team', target: 'Ekibi Temizle' },
    { source: 'Can build application and modify data', target: 'Uygulama oluşturabilir ve veri düzenleyebilir' },
    { source: 'Can modify data in application', target: 'Uygulamada veri düzenleyebilir' },
    {
      source: 'Can only view data without modification',
      target: 'Verileri sadece görüntüleyebilir, değiştiremez'
    },
    { source: 'Add Team', target: 'Ekip Ekle' },
    { source: 'Edit Team', target: 'Ekibi Düzenle' },
    { source: 'Adding Team', target: 'Ekip Ekleniyor' },
    {
      source: 'Keep control over who has access to current App',
      target: 'Mevcut Uygulamaya kimlerin erişimi olduğunu kontrol edin'
    },
    { source: 'Enter Team Name', target: 'Ekip Adı Girin' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'Ekip adını girin, örn: Destek, Satış, Pazarlama, vb.'
    },
    { source: 'Add a new member to this team.', target: 'Bu ekibe yeni bir üye ekleyin.' },
    { source: 'Invite new member', target: 'Yeni üye davet et' },
    { source: 'User', target: 'Kullanıcı' },
    { source: 'Date Added', target: 'Eklenme Tarihi' },
    { source: 'You', target: 'Siz' },
    { source: 'Edit', target: 'Düzenle' },
    { source: 'No users in this team', target: 'Bu ekipte kullanıcı yok' },
    { source: 'Page Permissions', target: 'Sayfa İzinleri' },
    { source: 'App Permissions', target: 'Uygulama İzinleri' },
    { source: 'Properties', target: 'Özellikler' },
    { source: 'Page name', target: 'Sayfa adı' },
    { source: 'Access', target: 'Erişim' },
    { source: 'Full Access', target: 'Tam Erişim' },
    { source: 'Read Only', target: 'Salt Okunur' },
    { source: 'No Access', target: 'Erişim Yok' },
    { source: 'Read', target: 'Okuma' },
    { source: 'Update', target: 'Güncelleme' },
    { source: 'Write', target: 'Yazma' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'Silme' },
    { source: 'Custom Access', target: 'Özel Erişim' },
    { source: 'Read, create, update and delete data', target: 'Veri okuma, oluşturma, güncelleme ve silme' },
    { source: 'Choose allowed operations granularly', target: 'İzin verilen işlemleri ayrıntılı seçin' },
    { source: 'Without any access to data', target: 'Verilere erişim olmadan' },
    { source: 'Name', target: 'Ad' },
    { source: 'Active', target: 'Aktif' },
    { source: 'Settings', target: 'Ayarlar' },
    { source: 'Members and Teams', target: 'Üyeler ve Ekipler' },
    { source: 'App Builder', target: 'Uygulama Oluşturucu' },
    { source: 'Collection Permissions', target: 'Koleksiyon İzinleri' },
    {
      source: "Grant permissions to app's collection",
      target: 'Uygulamanın koleksiyonuna izin verin'
    },
    { source: 'Collection', target: 'Koleksiyon' },
    {
      source: 'Limit access to your data by team properties',
      target: 'Verilerinize erişimi ekip özelliklerine göre sınırlayın'
    },
    { source: 'Save Team', target: 'Ekibi Kaydet' },
    { source: 'Create Team', target: 'Ekip Oluştur' },
    { source: 'Value', target: 'Değer' },
    { source: 'No properties specified', target: 'Belirtilmiş özellik yok' },

    // Navigation
    { source: 'Current App', target: 'Mevcut Uygulama' },
    { source: 'Home', target: 'Ana Sayfa' },

    // Profile
    {
      source: 'We are fetching user data, please, wait...',
      target: 'Kullanıcı verileri alınıyor, lütfen bekleyin...'
    },
    { source: 'Profile Settings', target: 'Profil Ayarları' },
    { source: 'Basic information about your account.', target: 'Hesabınız hakkında temel bilgiler.' },
    { source: 'Photo', target: 'Fotoğraf' },
    { source: 'your photo', target: 'fotoğrafınız' },
    { source: 'Change', target: 'Değiştir' },
    { source: 'Upload', target: 'Yükle' },
    { source: 'Photo was successfully updated', target: 'Fotoğraf başarıyla güncellendi' },
    { source: 'Photo was successfully deleted', target: 'Fotoğraf başarıyla silindi' },
    { source: 'First Name', target: 'Ad' },
    { source: 'Last Name', target: 'Soyad' },
    { source: 'Your Email', target: 'E-posta Adresiniz' },
    { source: 'Email Change', target: 'E-posta Değişikliği' },
    { source: 'New Email', target: 'Yeni E-posta' },
    { source: 'Change Email', target: 'E-postayı Değiştir' },
    { source: 'Check your inbox', target: 'Gelen kutunuzu kontrol edin' },
    { source: 'Confirmation Email was sent to {0}', target: '{0} adresine onay E-postası gönderildi' },
    { source: 'Changing Email failed', target: 'E-posta değişikliği başarısız oldu' },
    { source: 'Password Change', target: 'Şifre Değiştirme' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target:
        'Şifreniz hesabınızı korumak için yeterince güçlü olmalıdır, bu nedenle en az 12 karakter uzunluğunda olmalıdır.'
    },
    { source: 'Current Password', target: 'Mevcut Şifre' },
    { source: 'New Password', target: 'Yeni Şifre' },
    { source: 'Confirm New Password', target: 'Yeni Şifreyi Onayla' },
    { source: 'Change Password', target: 'Şifreyi Değiştir' },
    {
      source: 'Current password was successfully updated, all other sessions will be logged out shortly',
      target: 'Mevcut şifre başarıyla güncellendi, diğer tüm oturumlar kısa süre içinde sonlandırılacaktır'
    },
    { source: 'Saving current password failed', target: 'Mevcut şifre kaydedilemedi' },
    { source: 'Short password', target: 'Kısa şifre' },
    { source: "Passwords don't match", target: 'Şifreler uyuşmuyor' },
    { source: 'Personal Preferences', target: 'Kişisel Tercihler' },
    { source: 'Language', target: 'Dil' },
    { source: 'Timezone', target: 'Saat Dilimi' },
    { source: 'Current time in {0} is', target: 'Şu anki saat {0} saat diliminde' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'Hesabınız için ek tercihleri özelleştirin.'
    },
    { source: 'News & Proposals', target: 'Haberler ve Öneriler' },
    { source: 'Subscribe to our updates and proposals.', target: 'Güncellemelerimize ve önerilerimize abone olun.' },
    { source: 'Save changes', target: 'Değişiklikleri Kaydet' },
    { source: 'Current user was successfully updated', target: 'Geçerli kullanıcı başarıyla güncellendi' },
    { source: 'Saving current user failed', target: 'Geçerli kullanıcı kaydedilemedi' },

    // My Apps
    { source: 'Type to search...', target: 'Aramak için yazın...' },
    { source: 'My Apps', target: 'Uygulamalarım' },
    { source: 'New App', target: 'Yeni Uygulama' },
    { source: 'Builder', target: 'Oluşturucu' },
    { source: 'App', target: 'Uygulama' },
    { source: 'continue install', target: 'kuruluma devam et' },
    { source: 'Open builder', target: 'Oluşturucuyu aç' },
    { source: 'View published', target: 'Yayınlananı görüntüle' },
    { source: 'Delete App', target: 'Uygulamayı Sil' },
    { source: 'Start from a template', target: 'Bir şablon ile başla' },
    { source: 'Preview', target: 'Önizleme' },
    { source: 'Contact Support', target: 'Destek ile İletişime Geç' },
    { source: 'Documentation', target: 'Dokümantasyon' },
    { source: 'Feature Requests', target: 'Özellik İstekleri' },
    { source: 'See What’s New', target: 'Yenilikleri Gör' },
    { source: 'Search templates...', target: 'Şablonlarda ara...' },
    { source: 'any', target: 'herhangi biri' },
    { source: 'more', target: 'daha fazla' },
    { source: 'Choose Data Source', target: 'Veri Kaynağı Seç' },
    { source: 'works with 30+ data sources', target: '30+ veri kaynağı ile çalışır' },
    { source: 'Use this template', target: 'Bu şablonu kullan' },
    { source: 'stores data in Jet Tables', target: 'verileri Jet Tablolarda saklar' },
    { source: 'New Data', target: 'Yeni Veri' },
    { source: 'using {0}', target: '{0} kullanarak' },
    {
      source: "Can't find resource you're looking for?",
      target: 'Aradığınız kaynağı bulamıyor musunuz?'
    },
    { source: 'Admin Panel', target: 'Yönetici Paneli' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'Verileriniz üzerinde listeleme, oluşturma ve güncelleme (CRUD) işlemleri'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target:
        "Stripe, Twilio ve GraphQL gibi herhangi bir veritabanı, uygulama ve API'ye dayalı özel bir yönetici paneli oluşturun."
    },
    { source: 'All Integrations', target: 'Tüm Entegrasyonlar' },
    { source: 'Databases', target: 'Veritabanları' },
    { source: 'APIs', target: "API'ler" },
    { source: 'Frameworks', target: 'Çerçeveler' },
    { source: 'Storages', target: 'Depolama Alanları' },

    // Sign In
    { source: 'Good morning', target: 'Günaydın' },
    { source: 'Good afternoon', target: 'İyi günler' },
    { source: 'Good evening', target: 'İyi akşamlar' },
    { source: 'Sign In', target: 'Giriş Yap' },
    { source: 'Welcome Back.', target: 'Tekrar Hoşgeldiniz.' },
    { source: 'Sign in with {0}', target: '{0} ile giriş yap' },
    { source: 'or login with', target: 'veya şununla giriş yapın' },
    { source: 'Enter E-mail', target: 'E-posta Girin' },
    { source: 'Enter password', target: 'Şifre Girin' },
    { source: 'Login', target: 'Giriş' },
    { source: 'Create new account', target: 'Yeni hesap oluştur' },
    { source: 'Forgot my password', target: 'Şifremi unuttum' },
    { source: 'required', target: 'gerekli' },
    { source: 'incorrect Email', target: 'geçersiz E-posta' },
    { source: 'Minimum password length {0}', target: 'Minimum şifre uzunluğu {0}' },
    { source: 'Unable to Sign In', target: 'Giriş Yapılamıyor' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: '<span class="auth-form__accent">Bugün Ücretsiz</span> Başlayın'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target: 'Kart gerekmiyor. 14 günlük PRO deneme süresi boyunca tüm gelişmiş işlevleri ücretsiz kullanacaksınız.'
    },
    { source: 'Enter First Name', target: 'Adınızı Girin' },
    { source: 'Enter Last Name (optional)', target: 'Soyadınızı Girin (isteğe bağlı)' },
    { source: 'Enter Email', target: 'E-posta Girin' },
    { source: 'Password', target: 'Şifre' },
    { source: 'Repeat Password', target: 'Şifreyi Tekrarla' },
    {
      source: 'By signing in you’re okay with our',
      target: 'Giriş yaparak aşağıdakileri kabul etmiş olursunuz'
    },
    {
      source: 'Creating an account means you’re okay with our',
      target: 'Hesap oluşturarak aşağıdakileri kabul etmiş olursunuz'
    },
    { source: 'Terms of Service', target: 'Hizmet Şartları' },
    { source: 'Privacy Policy', target: 'Gizlilik Politikası' },
    { source: 'and', target: 've' },
    { source: 'Create your free account', target: 'Ücretsiz hesabınızı oluşturun' },
    { source: 'Already have an account', target: 'Zaten bir hesabınız var mı' },
    { source: 'Unable to Sign Up', target: 'Kayıt Olunamıyor' },

    // Restore password
    { source: 'Reset your password', target: 'Şifrenizi sıfırlayın' },
    { source: 'Email Address', target: 'E-posta Adresi' },
    { source: 'Reset password', target: 'Şifreyi sıfırla' },
    { source: 'Return to Sign In', target: 'Giriş Yapmaya Dön' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'Lütfen E-postanızı kontrol edin – <strong>{0}</strong>. Şifrenizi değiştirmek için takip etmeniz gereken doğrulama bağlantısını gönderdik.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be at least 8 characters.',
      target: 'Neredeyse bitti, sadece yeni şifrenizi aşağıya girin. <br>En az 8 karakter olmalıdır.'
    },
    { source: 'Reset password & Sign In', target: 'Şifreyi Sıfırla ve Giriş Yap' },
    { source: 'Unable to Send Code', target: 'Kod Gönderilemiyor' },
    { source: 'Unable to Change Password', target: 'Şifre Değiştirilemiyor' },

    // Email Verification
    { source: 'Email Verification', target: 'E-posta Doğrulaması' },
    { source: 'Resend verification code', target: 'Doğrulama kodunu yeniden gönder' },
    { source: 'Verification email sent', target: 'Doğrulama e-postası gönderildi' },
    { source: 'Your Email is now verified', target: 'E-posta adresiniz doğrulandı' },
    { source: 'Request is incorrect', target: 'İstek yanlış' },

    // Invites
    {
      source: 'Join <span class="auth-form__accent">{0}</span>',
      target: '<span class="auth-form__accent">{0}</span> katılın'
    },
    {
      source: '<strong>{0}</strong> has invited you to join <strong>{1}</strong>',
      target: '<strong>{0}</strong> sizi <strong>{1}</strong> katılmaya davet etti'
    },
    {
      source: 'Someone has invited you to join <strong>{0}</strong>',
      target: 'Birisi sizi <strong>{0}</strong> katılmaya davet etti'
    },
    {
      source: 'You are joining <strong>{0}</strong> using invite link',
      target: 'Davet bağlantısını kullanarak <strong>{0}</strong> katılıyorsunuz'
    },
    { source: 'Join', target: 'Katıl' },
    { source: 'Go to home page', target: 'Ana sayfaya git' },
    { source: 'Invite link is wrong', target: 'Davet bağlantısı yanlış' },
    {
      source:
        'Looks like your invitation link has expired or maybe you have followed the wrong link. Please try to ask to invite your again.',
      target:
        'Görünüşe göre davet linkinizin süresi dolmuş veya yanlış linki takip etmiş olabilirsiniz. Lütfen tekrar davet etmesini isteyin.'
    },
    {
      source: 'Unfortunately we failed to load information about this invitation',
      target: 'Maalesef bu davet hakkında bilgi yüklenemedi'
    },

    // Users & Teams
    { source: 'Members of {0}', target: '{0} üyeleri' },
    { source: 'How to get started', target: 'Nasıl başlanır' },
    { source: 'Users API', target: 'Kullanıcılar API' },
    { source: 'Teams API', target: 'Takımlar API' },
    { source: 'Invite Member', target: 'Üye Davet Et' },
    { source: 'Add User property', target: 'Kullanıcı özelliği ekle' },
    { source: 'Add Team property', target: 'Takım özelliği ekle' },
    { source: 'Edit property', target: 'Özelliği düzenle' },
    { source: 'Delete property', target: 'Özelliği sil' },
    { source: 'Users', target: 'Kullanıcılar' },
    { source: 'Teams', target: 'Takımlar' },
    { source: 'Search members', target: 'Üyeleri ara' },
    { source: 'Search teams', target: 'Takımları ara' },
    { source: '{0} pages', target: '{0} sayfa' },
    { source: 'No members', target: 'Üye yok' }
  ]
};

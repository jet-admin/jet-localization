import { Locale } from './locale';

export const locale: Locale = {
  name: 'malay',
  language: 'ms',
  items: [
    // General
    { source: 'Save', target: 'Simpan' },
    { source: 'Create', target: 'Cipta' },
    { source: 'Duplicating', target: 'Menggandakan' },
    { source: 'Duplicate', target: 'Gandakan' },
    { source: 'Mass Edit', target: 'Edit Beramai-ramai' },
    { source: 'Export', target: 'Eksport' },
    { source: 'Import', target: 'Import' },
    { source: 'Delete', target: 'Padam' },
    { source: 'Continue', target: 'Teruskan' },
    { source: 'Submit', target: 'Hantar' },
    { source: 'Cancel', target: 'Batal' },
    { source: 'Loading', target: 'Memuatkan' },
    { source: 'Please wait...', target: 'Sila tunggu...' },
    { source: 'Loading failed', target: 'Memuatkan gagal' },
    { source: 'Unknown error', target: 'Ralat tidak diketahui' },
    { source: 'Add', target: 'Tambah' },
    { source: 'or', target: 'atau' },
    { source: 'Hours', target: 'Jam' },
    { source: 'Minutes', target: 'Minit' },
    { source: 'Seconds', target: 'Saat' },
    { source: 'Saved', target: 'Disimpan' },
    { source: 'Error', target: 'Ralat' },
    { source: 'Page not found', target: 'Halaman tidak ditemui' },
    {
      source: 'The specified address is incorrect, or the page does not exist',
      target: 'Alamat yang ditentukan adalah tidak betul, atau halaman tidak wujud'
    },
    { source: 'Not allowed', target: 'Tidak dibenarkan' },
    {
      source: "You don't have permissions to access this page",
      target: 'Anda tidak mempunyai kebenaran untuk mengakses halaman ini'
    },
    { source: 'Are you sure want to close?', target: 'Adakah anda pasti mahu tutup?' },
    { source: 'Close', target: 'Tutup' },

    // Actions
    { source: 'Action executed', target: 'Tindakan dilaksanakan' },
    { source: 'Action executed successfully', target: 'Tindakan berjaya dilaksanakan' },
    { source: 'Action failed', target: 'Tindakan gagal' },
    {
      source: "You don't have permission for run this operation",
      target: 'Anda tidak mempunyai kebenaran untuk menjalankan operasi ini'
    },
    { source: 'Specify parameters', target: 'Nyatakan parameter' },
    { source: 'Executing action', target: 'Melaksanakan tindakan' },
    { source: 'You are executing <strong>{0}</strong>', target: 'Anda melaksanakan <strong>{0}</strong>' },
    { source: 'Please fill in the parameters below.', target: 'Sila isi parameter di bawah.' },
    { source: 'Execute', target: 'Laksanakan' },
    { source: 'Executing', target: 'Sedang melaksanakan' },
    { source: 'Finished', target: 'Selesai' },
    { source: 'Done', target: 'Selesai' },

    // Export
    { source: 'Records Export', target: 'Eksport Rekod' },
    { source: 'Downloading records data as a file', target: 'Memuat turun data rekod sebagai fail' },
    { source: 'Choose format', target: 'Pilih format' },
    { source: 'Number of exporting records', target: 'Bilangan rekod eksport' },
    { source: { label: 'Export', context: 'submit' }, target: 'Eksport' },
    { source: 'Exporting', target: 'Sedang mengeksport' },
    { source: 'Export completed', target: 'Eksport selesai' },
    { source: 'Failed to export', target: 'Gagal mengeksport' },

    // Components
    { source: 'optional', target: 'pilihan' },
    { source: 'choose', target: 'pilih' },
    { source: 'Clear value', target: 'Kosongkan nilai' },
    { source: 'loading...', target: 'memuatkan...' },
    { source: 'Nothing found', target: 'Tiada apa-apa ditemui' },
    { source: 'Search...', target: 'Cari...' },
    { source: 'Enter at least {0} characters', target: 'Masukkan sekurang-kurangnya {0} aksara' },
    { source: 'No options', target: 'Tiada pilihan' },
    { source: 'Drop files here or', target: 'Jatuhkan fail di sini atau' },
    { source: 'Upload new', target: 'Muat naik baru' },
    { source: 'Clear', target: 'Kosongkan' },
    { source: 'Download', target: 'Muat turun' },
    { source: 'Choose file', target: 'Pilih fail' },
    { source: 'Choose files', target: 'Pilih fail-fail' },
    { source: 'Scan with Camera', target: 'Imbas dengan Kamera' },
    { source: 'Scan Image file', target: 'Imbas Fail Imej' },
    { source: 'Choose camera', target: 'Pilih kamera' },
    { source: 'Stop scanning', target: 'Hentikan imbasan' },
    { source: 'Scan again', target: 'Imbas semula' },
    { source: 'Use this scan', target: 'Gunakan imbasan ini' },
    { source: 'Failed to scan', target: 'Gagal mengimbas' },
    {
      source: 'Code failed to scan, please try another image',
      target: 'Kod gagal diimbas, sila cuba imej lain'
    },
    { source: 'current', target: 'semasa' },
    { source: 'Day', target: 'Hari' },
    { source: 'Week', target: 'Minggu' },
    { source: 'Month', target: 'Bulan' },
    { source: 'Year', target: 'Tahun' },
    { source: 'Today', target: 'Hari ini' },
    { source: 'Daily', target: 'Harian' },
    { source: 'Weekly', target: 'Mingguan' },
    { source: 'Monthly', target: 'Bulanan' },
    { source: 'Quarterly', target: 'Suku tahunan' },
    { source: 'Yearly', target: 'Tahunan' },
    { source: 'Hourly', target: 'Setiap jam' },
    { source: 'Minutely', target: 'Setiap minit' },
    { source: 'Since', target: 'Sejak' },
    { source: 'Before', target: 'Sebelum' },
    { source: 'Between', target: 'Antara' },
    { source: 'From date', target: 'Daripada tarikh' },
    { source: 'To date', target: 'Ke tarikh' },
    { source: 'Coordinates', target: 'Koordinat' },
    { source: 'Latitude', target: 'Latitud' },
    { source: 'Longitude', target: 'Longitud' },
    { source: 'Default color', target: 'Warna lalai' },
    { source: 'not specified', target: 'tidak dinyatakan' },
    { source: 'Sign using your finger or pointer', target: 'Tandatangan menggunakan jari atau penunjuk anda' },

    // List components
    { source: 'Filter', target: 'Penapis' },
    { source: 'Filter by field', target: 'Penapis mengikut medan' },
    { source: 'Filter by...', target: 'Penapis dengan...' },
    { source: 'Back', target: 'Kembali' },
    { source: 'Back to {0} fields', target: 'Kembali ke medan {0}' },
    { source: 'Choose {0} from list', target: 'Pilih {0} dari senarai' },
    { source: '{0} fields', target: 'medan {0}' },
    { source: '{0} relationships', target: 'hubungan {0}' },
    { source: 'Aggregate {0}', target: 'Gabungkan {0}' },
    { source: 'No fields to select', target: 'Tiada medan untuk dipilih' },
    { source: 'Enter value...', target: 'Masukkan nilai...' },
    { source: 'Exclude', target: 'Kecualikan' },
    { source: 'Actions', target: 'Tindakan' },
    { source: 'Search', target: 'Cari' },
    { source: 'Sort 1 → 9', target: 'Isih 1 → 9' },
    { source: 'Sort 9 → 1', target: 'Isih 9 → 1' },
    { source: 'Sort A → Z', target: 'Isih A → Z' },
    { source: 'Sort Z → A', target: 'Isih Z → A' },
    { source: 'Refresh automatically', target: 'Segar semula secara automatik' },
    { source: 'All', target: 'Semua' },
    { source: 'Selected', target: 'Dipilih' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'Malangnya, tiada {0} yang sepadan dengan pertanyaan anda ditemui'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'Kami sedang mengambil {0}, sila tunggu...' },
    { source: 'Add filter', target: 'Tambah penapis' },
    { source: 'Delete this filter', target: 'Padamkan penapis ini' },
    { source: 'Toggle ordering', target: 'Togol penjarakan' },
    { source: 'Not configured', target: 'Tidak dikonfigurasikan' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'Malangnya, komponen ini belum dikonfigurasikan'
    },
    { source: 'records', target: 'rekod' },
    { source: '{0} items', target: 'item {0}' },

    // Menu
    { source: 'Users & Teams', target: 'Pengguna & Pasukan' },
    { source: 'Billing', target: 'Pengebilan' },
    { source: 'Billing & Plans', target: 'Pengebilan & Pelan' },
    { source: 'API keys', target: 'Kunci API' },
    { source: 'Dark Mode', target: 'Mod Gelap' },
    { source: 'Light Mode', target: 'Mod Cerah' },
    { source: 'Disable Staff', target: 'Nyahdaya Kakitangan' },
    { source: 'Enable Staff', target: 'Dayakan Kakitangan' },
    { source: 'Manage Templates', target: 'Urus Templat' },
    { source: 'Logout', target: 'Log keluar' },
    { source: 'Activity Log', target: 'Log Aktiviti' },
    { source: 'Collaborations', target: 'Kerjasama' },
    { source: 'Open Visual Builder', target: 'Buka Pembina Visual' },

    // Filters
    { source: 'equals', target: 'sama dengan' },
    { source: 'does not equal', target: 'tidak sama dengan' },
    { source: '{0} equals {1}', target: '{0} sama dengan {1}' },
    { source: '{0} does not equal {1}', target: '{0} tidak sama dengan {1}' },

    { source: 'contains', target: 'mengandungi' },
    { source: 'does not contain', target: 'tidak mengandungi' },
    { source: '{0} contains {1}', target: '{0} mengandungi {1}' },
    { source: '{0} not contains {1}', target: '{0} tidak mengandungi {1}' },

    { source: 'starts with', target: 'bermula dengan' },
    { source: 'does not start with', target: 'tidak bermula dengan' },
    { source: '{0} starts with {1}', target: '{0} bermula dengan {1}' },
    { source: '{0} does not start with {1}', target: '{0} tidak bermula dengan {1}' },

    { source: 'ends with', target: 'berakhir dengan' },
    { source: 'does not end with', target: 'tidak berakhir dengan' },
    { source: '{0} ends with {1}', target: '{0} berakhir dengan {1}' },
    { source: '{0} does not end with {1}', target: '{0} tidak berakhir dengan {1}' },

    { source: 'greater than', target: 'lebih besar daripada' },
    { source: 'is not greater than', target: 'tidak lebih besar daripada' },
    { source: '{0} is greater than {1}', target: '{0} lebih besar daripada {1}' },
    { source: '{0} not greater than {1}', target: '{0} tidak lebih besar daripada {1}' },

    { source: 'greater than or equals', target: 'lebih besar atau sama dengan' },
    { source: 'is not greater than or equals', target: 'tidak lebih besar atau sama dengan' },
    { source: '{0} is greater than or equals {1}', target: '{0} lebih besar atau sama dengan {1}' },
    { source: '{0} is not greater than or equals {1}', target: '{0} tidak lebih besar atau sama dengan {1}' },

    { source: 'less than', target: 'kurang daripada' },
    { source: 'is not less than', target: 'tidak kurang daripada' },
    { source: '{0} is less than {1}', target: '{0} kurang daripada {1}' },
    { source: '{0} is not less than {1}', target: '{0} tidak kurang daripada {1}' },

    { source: 'less than or equals', target: 'kurang atau sama dengan' },
    { source: 'is not less than or equals', target: 'tidak kurang atau sama dengan' },
    { source: '{0} is less than or equals {1}', target: '{0} kurang atau sama dengan {1}' },
    { source: '{0} is not less than or equals {1}', target: '{0} tidak kurang atau sama dengan {1}' },

    { source: 'one of', target: 'salah satu' },
    { source: 'is one of', target: 'adalah salah satu' },
    { source: 'is not one of', target: 'bukan salah satu' },
    { source: '{0} is one of {1}', target: '{0} adalah salah satu {1}' },
    { source: '{0} is not one of {1}', target: '{0} bukan salah satu {1}' },

    { source: 'is null', target: 'null' },
    { source: 'is not null', target: 'bukan null' },
    { source: '{0} is null', target: '{0} null' },
    { source: '{0} is not null', target: '{0} bukan null' },

    { source: 'is future', target: 'masa hadapan' },
    { source: 'in the future', target: 'pada masa hadapan' },
    { source: 'is not in the future', target: 'bukan pada masa hadapan' },
    { source: '{0} is in the future', target: '{0} pada masa hadapan' },
    { source: '{0} is not in the future', target: '{0} bukan pada masa hadapan' },

    { source: 'is past', target: 'masa lalu' },
    { source: 'in the past', target: 'pada masa lalu' },
    { source: 'is not in the past', target: 'bukan pada masa lalu' },
    { source: '{0} is in the past', target: '{0} pada masa lalu' },
    { source: '{0} is not in the past', target: '{0} bukan pada masa lalu' },

    { source: 'is Today', target: 'hari ini' },
    { source: 'today', target: 'hari ini' },
    { source: 'is not today', target: 'bukan hari ini' },
    { source: '{0} is today', target: '{0} adalah hari ini' },
    { source: '{0} is not today', target: '{0} bukan hari ini' },

    { source: 'is Yesterday', target: 'semalam' },
    { source: 'yesterday', target: 'semalam' },
    { source: 'is not yesterday', target: 'bukan semalam' },
    { source: '{0} is yesterday', target: '{0} adalah semalam' },
    { source: '{0} is not yesterday', target: '{0} bukan semalam' },

    { source: 'is Last Week', target: 'minggu lepas' },
    { source: 'last week', target: 'minggu lepas' },
    { source: 'is not last week', target: 'bukan minggu lepas' },
    { source: '{0} is last week', target: '{0} adalah minggu lepas' },
    { source: '{0} is not last week', target: '{0} bukan minggu lepas' },

    { source: 'is Last Month', target: 'bulan lepas' },
    { source: 'last month', target: 'bulan lepas' },
    { source: 'is not last month', target: 'bukan bulan lepas' },
    { source: '{0} is last month', target: '{0} adalah bulan lepas' },
    { source: '{0} is not last month', target: '{0} bukan bulan lepas' },

    { source: 'is Last Quarter', target: 'suku tahun lepas' },
    { source: 'last quarter', target: 'suku tahun lepas' },
    { source: 'is not last quarter', target: 'bukan suku tahun lepas' },
    { source: '{0} is last quarter', target: '{0} adalah suku tahun lepas' },
    { source: '{0} is not last quarter', target: '{0} bukan suku tahun lepas' },

    { source: 'is Last Year', target: 'tahun lepas' },
    { source: 'last year', target: 'tahun lepas' },
    { source: 'is not last year', target: 'bukan tahun lepas' },
    { source: '{0} is last year', target: '{0} adalah tahun lepas' },
    { source: '{0} is not last year', target: '{0} bukan tahun lepas' },

    { source: 'is Last X Days', target: 'X hari lepas' },
    { source: 'last X days', target: 'X hari lepas' },
    { source: 'is not last X days', target: 'bukan pada X hari lepas' },
    { source: '{0} is last {1} days', target: '{0} adalah {1} hari lepas' },
    { source: '{0} is not last {1} days', target: '{0} bukan {1} hari lepas' },

    { source: 'is Current Week', target: 'minggu ini' },
    { source: 'current week', target: 'minggu ini' },
    { source: 'is not current week', target: 'bukan minggu ini' },
    { source: '{0} is current week', target: '{0} adalah minggu ini' },
    { source: '{0} is not current week', target: '{0} bukan minggu ini' },

    { source: 'is Current Month', target: 'bulan ini' },
    { source: 'current month', target: 'bulan ini' },
    { source: 'is not current month', target: 'bukan bulan ini' },
    { source: '{0} is current month', target: '{0} adalah bulan ini' },
    { source: '{0} is not current month', target: '{0} bukan bulan ini' },

    { source: 'is Current Quarter', target: 'suku tahun ini' },
    { source: 'current quarter', target: 'suku tahun ini' },
    { source: 'is not current quarter', target: 'bukan suku tahun ini' },
    { source: '{0} is current quarter', target: '{0} adalah suku tahun ini' },
    { source: '{0} is not current quarter', target: '{0} bukan suku tahun ini' },

    { source: 'is Current Year', target: 'tahun ini' },
    { source: 'current year', target: 'tahun ini' },
    { source: 'is not current year', target: 'bukan tahun ini' },
    { source: '{0} is current year', target: '{0} adalah tahun ini' },
    { source: '{0} is not current year', target: '{0} bukan tahun ini' },

    { source: 'is Previous Week', target: 'minggu sebelumnya' },
    { source: 'previous week', target: 'minggu sebelumnya' },
    { source: 'is not previous week', target: 'bukan minggu sebelumnya' },
    { source: '{0} is previous week', target: '{0} adalah minggu sebelumnya' },
    { source: '{0} is not previous week', target: '{0} bukan minggu sebelumnya' },

    { source: 'is Previous Month', target: 'bulan sebelumnya' },
    { source: 'previous month', target: 'bulan sebelumnya' },
    { source: 'is not previous month', target: 'bukan bulan sebelumnya' },
    { source: '{0} is previous month', target: '{0} adalah bulan sebelumnya' },
    { source: '{0} is not previous month', target: '{0} bukan bulan sebelumnya' },

    { source: 'is Previous Quarter', target: 'suku tahun sebelumnya' },
    { source: 'previous quarter', target: 'suku tahun sebelumnya' },
    { source: 'is not previous quarter', target: 'bukan suku tahun sebelumnya' },
    { source: '{0} is previous quarter', target: '{0} adalah suku tahun sebelumnya' },
    { source: '{0} is not previous quarter', target: '{0} bukan suku tahun sebelumnya' },

    { source: 'is Previous Year', target: 'tahun sebelumnya' },
    { source: 'previous year', target: 'tahun sebelumnya' },
    { source: 'is not previous year', target: 'bukan tahun sebelumnya' },
    { source: '{0} is previous year', target: '{0} adalah tahun sebelumnya' },
    { source: '{0} is not previous year', target: '{0} bukan tahun sebelumnya' },

    { source: 'is Previous X Days', target: 'X hari sebelumnya' },
    { source: 'previous X days', target: 'X hari sebelumnya' },
    { source: 'is not previous X days', target: 'bukan pada X hari sebelumnya' },
    { source: '{0} is previous {1} days', target: '{0} adalah pada {1} hari sebelumnya' },
    { source: '{0} is not previous {1} days', target: '{0} bukan pada {1} hari sebelumnya' },

    { source: 'is empty', target: 'kosong' },
    { source: 'is not empty', target: 'tidak kosong' },
    { source: '{0} is empty', target: '{0} kosong' },
    { source: '{0} is not empty', target: '{0} tidak kosong' },

    { source: 'covered by', target: 'di bawah' },
    { source: 'is not covered by', target: 'bukan di bawah' },
    { source: '{0} covered by {1}', target: '{0} di bawah {1}' },
    { source: '{0} is not covered by {1}', target: '{0} bukan di bawah {1}' },

    // Activity log
    { source: 'No activities found', target: 'Tiada aktiviti ditemui' },
    {
      source: 'Start to working with data to log activities.',
      target: 'Mulakan bekerja dengan data untuk log aktiviti.'
    },
    { source: 'All Activity', target: 'Semua Aktiviti' },
    { source: 'Create Record', target: 'Cipta Rekod' },
    { source: 'Update Record', target: 'Kemas Kini Rekod' },
    { source: 'Delete Record', target: 'Padam Rekod' },
    { source: 'All Members', target: 'Semua Ahli' },

    // Collaboration
    { source: 'Timeline', target: 'Garis Masa' },
    { source: 'Messages', target: 'Mesej' },
    { source: 'Activity', target: 'Aktiviti' },
    { source: 'Start chatting with your team', target: 'Mulakan perbualan dengan pasukan anda' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'Ambil mesej tentang halaman semasa untuk menyimpan maklumat penting.'
    },
    { source: 'Your Message', target: 'Mesej Anda' },
    { source: 'Send', target: 'Hantar' },

    // Share
    { source: 'Invite members', target: 'Jemput ahli' },
    { source: 'Public share', target: 'Kongsi awam' },
    { source: 'Sign Up', target: 'Daftar' },
    { source: 'Members', target: 'Ahli' },
    { source: 'Invite with Email', target: 'Jemput melalui E-mel' },
    { source: 'Invite someone...', target: 'Jemput seseorang...' },
    { source: 'Send Invite', target: 'Hantar Jemputan' },
    {
      source: 'Limit access to your data by user properties',
      target: 'Hadkan akses kepada data anda oleh sifat pengguna'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: 'Masukkan email pengguna yang ingin anda jemput untuk berkolaborasi.'
    },
    { source: 'Copy', target: 'Salin' },
    { source: 'Invite with Link', target: 'Jemput dengan Pautan' },
    { source: 'Remove link', target: 'Buang pautan' },
    { source: 'Add Invite Link', target: 'Tambah Pautan Jemputan' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'Sesiapa di internet dengan pautan ini akan dapat menyertai pasukan yang dipilih.'
    },
    { source: 'Pending Invites', target: 'Jemputan Tertangguh' },
    { source: 'Cancel invite', target: 'Batalkan jemputan' },
    { source: 'Active Members', target: 'Ahli Aktif' },
    { source: 'Remove member', target: 'Buang ahli' },
    {
      source: 'You are setting sharing for the current page',
      target: 'Anda menetapkan perkongsian untuk halaman semasa'
    },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'Anda menetapkan perkongsian untuk semua halaman dalam Aplikasi anda.'
    },
    { source: 'Public access link', target: 'Pautan akses awam' },
    { source: 'Updating public access...', target: 'Mengemas kini akses awam...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'Sesiapa dengan pautan ini akan dapat melihat halaman semasa. Anda juga boleh menyisipkan halaman semasa ke laman web lain dengan cara ini.'
    },
    { source: 'Embed code (IFRAME)', target: 'Kod sisipan (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: 'Tampalkan kod ini ke dalam kod HTML laman web anda di mana anda ingin halaman semasa muncul.'
    },
    { source: 'link', target: 'pautan' },
    { source: 'invited', target: 'dijemput' },
    { source: 'Choose Team', target: 'Pilih Pasukan' },
    { source: 'App Teams', target: 'Pasukan Aplikasi' },
    { source: 'Built-In Teams', target: 'Pasukan Binaan' },
    { source: 'Clear Team', target: 'Kosongkan Pasukan' },
    { source: 'Can build application and modify data', target: 'Boleh membina aplikasi dan mengubah data' },
    { source: 'Can modify data in application', target: 'Boleh mengubah data dalam aplikasi' },
    { source: 'Can only view data without modification', target: 'Hanya boleh melihat data tanpa ubahan' },
    { source: 'Add Team', target: 'Tambah Pasukan' },
    { source: 'Edit Team', target: 'Edit Pasukan' },
    { source: 'Adding Team', target: 'Menambah Pasukan' },
    {
      source: 'Keep control over who has access to current App',
      target: 'Kekalkan kawalan terhadap siapa yang mempunyai akses kepada Aplikasi semasa'
    },
    { source: 'Enter Team Name', target: 'Masukkan Nama Pasukan' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'Taipkan nama pasukan, cth: Sokongan, Jualan, Pemasaran, dsb.'
    },
    { source: 'Add a new member to this team.', target: 'Tambah ahli baru ke pasukan ini.' },
    { source: 'Invite new member', target: 'Jemput ahli baru' },
    { source: 'User', target: 'Pengguna' },
    { source: 'Date Added', target: 'Tarikh Ditambah' },
    { source: 'You', target: 'Anda' },
    { source: 'Edit', target: 'Edit' },
    { source: 'No users in this team', target: 'Tiada pengguna dalam pasukan ini' },
    { source: 'Page Permissions', target: 'Kebenaran Halaman' },
    { source: 'App Permissions', target: 'Kebenaran Aplikasi' },
    { source: 'Properties', target: 'Sifat' },
    { source: 'Page name', target: 'Nama Halaman' },
    { source: 'Access', target: 'Akses' },
    { source: 'Full Access', target: 'Akses penuh' },
    { source: 'Read Only', target: 'Hanya baca' },
    { source: 'No Access', target: 'Tiada akses' },
    { source: 'Read', target: 'Baca' },
    { source: 'Update', target: 'Kemaskini' },
    { source: 'Write', target: 'Tulis' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'Padam' },
    { source: 'Custom Access', target: 'Akses Tersuai' },
    { source: 'Read, create, update and delete data', target: 'Baca, cipta, kemaskini dan padam data' },
    { source: 'Choose allowed operations granularly', target: 'Pilih operasi yang dibenarkan secara terperinci' },
    { source: 'Without any access to data', target: 'Tanpa akses kepada data' },
    { source: 'Name', target: 'Nama' },
    { source: 'Active', target: 'Aktif' },
    { source: 'Settings', target: 'Tetapan' },
    { source: 'Members and Teams', target: 'Ahli dan Pasukan' },
    { source: 'App Builder', target: 'Pembina Aplikasi' },
    { source: 'Collection Permissions', target: 'Kebenaran Koleksi' },
    { source: "Grant permissions to app's collection", target: 'Berikan kebenaran kepada koleksi aplikasi' },
    { source: 'Collection', target: 'Koleksi' },
    {
      source: 'Limit access to your data by team properties',
      target: 'Hadkan akses kepada data anda mengikut sifat pasukan'
    },
    { source: 'Save Team', target: 'Simpan Pasukan' },
    { source: 'Create Team', target: 'Cipta Pasukan' },
    { source: 'Value', target: 'Nilai' },
    { source: 'No properties specified', target: 'Tiada sifat dinyatakan' },

    // Navigation
    { source: 'Current App', target: 'Aplikasi Semasa' },
    { source: 'Home', target: 'Utama' },

    // Profile
    {
      source: 'We are fetching user data, please, wait...',
      target: 'Kami sedang mengambil data pengguna, sila tunggu...'
    },
    { source: 'Profile Settings', target: 'Tetapan Profil' },
    { source: 'Basic information about your account.', target: 'Maklumat asas mengenai akaun anda.' },
    { source: 'Photo', target: 'Foto' },
    { source: 'your photo', target: 'foto anda' },
    { source: 'Change', target: 'Tukar' },
    { source: 'Upload', target: 'Muat Naik' },
    { source: 'Photo was successfully updated', target: 'Foto berjaya dikemaskini' },
    { source: 'Photo was successfully deleted', target: 'Foto berjaya dipadam' },
    { source: 'First Name', target: 'Nama Pertama' },
    { source: 'Last Name', target: 'Nama Akhir' },
    { source: 'Your Email', target: 'E-mel Anda' },
    { source: 'Email Change', target: 'Tukar E-mel' },
    { source: 'New Email', target: 'E-mel Baru' },
    { source: 'Change Email', target: 'Tukar E-mel' },
    { source: 'Check your inbox', target: 'Periksa peti masuk anda' },
    { source: 'Confirmation Email was sent to {0}', target: 'E-mel pengesahan telah dihantar kepada {0}' },
    { source: 'Changing Email failed', target: 'Pertukaran E-mel gagal' },
    { source: 'Password Change', target: 'Pertukaran Kata Laluan' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target:
        'Kata laluan sepatutnya cukup kuat untuk melindungi akaun anda, jadi buat ia sekurang-kurangnya 12 aksara panjang.'
    },
    { source: 'Current Password', target: 'Kata Laluan Semasa' },
    { source: 'New Password', target: 'Kata Laluan Baru' },
    { source: 'Confirm New Password', target: 'Sahkan Kata Laluan Baru' },
    { source: 'Change Password', target: 'Tukar Kata Laluan' },
    {
      source: 'Current password was successfully updated, all other sessions will be logged out shortly',
      target: 'Kata laluan semasa berjaya dikemas kini, semua sesi lain akan dilog keluar sebentar lagi'
    },
    { source: 'Saving current password failed', target: 'Penjimatan kata laluan semasa gagal' },
    { source: 'Short password', target: 'Kata laluan pendek' },
    { source: "Passwords don't match", target: 'Kata laluan tidak sepadan' },
    { source: 'Personal Preferences', target: 'Pilihan Peribadi' },
    { source: 'Language', target: 'Bahasa' },
    { source: 'Timezone', target: 'Zon masa' },
    { source: 'Current time in {0} is', target: 'Masa kini di {0} adalah' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'Sesuaikan pilihan tambahan untuk akaun anda.'
    },
    { source: 'News & Proposals', target: 'Berita & Cadangan' },
    {
      source: 'Subscribe to our updates and proposals.',
      target: 'Langgan kemaskini dan cadangan kami.'
    },
    { source: 'Save changes', target: 'Simpan perubahan' },
    { source: 'Current user was successfully updated', target: 'Pengguna semasa berjaya dikemaskini' },
    { source: 'Saving current user failed', target: 'Penjimatan pengguna semasa gagal' },

    // My Apps
    { source: 'Type to search...', target: 'Taip untuk mencari...' },
    { source: 'My Apps', target: 'Aplikasi Saya' },
    { source: 'New App', target: 'Aplikasi Baru' },
    { source: 'Builder', target: 'Pembina' },
    { source: 'App', target: 'Aplikasi' },
    { source: 'continue install', target: 'teruskan pemasangan' },
    { source: 'Open builder', target: 'Buka pembina' },
    { source: 'View published', target: 'Lihat diterbitkan' },
    { source: 'Delete App', target: 'Padam Aplikasi' },
    { source: 'Start from a template', target: 'Mulakan dari templat' },
    { source: 'Preview', target: 'Pratonton' },
    { source: 'Contact Support', target: 'Hubungi Sokongan' },
    { source: 'Documentation', target: 'Dokumentasi' },
    { source: 'Feature Requests', target: 'Permintaan Ciri' },
    { source: 'See What’s New', target: 'Lihat Apa Yang Baru' },
    { source: 'Search templates...', target: 'Cari templat...' },
    { source: 'any', target: 'sebarang' },
    { source: 'more', target: 'lebih banyak' },
    { source: 'Choose Data Source', target: 'Pilih Sumber Data' },
    { source: 'works with 30+ data sources', target: 'berfungsi dengan lebih 30 sumber data' },
    { source: 'Use this template', target: 'Gunakan templat ini' },
    { source: 'stores data in Jet Tables', target: 'menyimpan data dalam Jet Tables' },
    { source: 'New Data', target: 'Data Baru' },
    { source: 'using {0}', target: 'menggunakan {0}' },
    { source: "Can't find resource you're looking for?", target: 'Tidak dapat mencari sumber yang anda cari?' },
    { source: 'Admin Panel', target: 'Panel Pentadbir' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'Senaraikan, cipta dan kemaskini (CRUD) operasi di atas data anda'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target:
        'Bina panel pentadbir tersuai berdasarkan mana-mana pangkalan data, aplikasi dan API seperti Stripe, Twilio and GraphQL.'
    },
    { source: 'All Integrations', target: 'Semua Integrasi' },
    { source: 'Databases', target: 'Pangkalan Data' },
    { source: 'APIs', target: 'API' },
    { source: 'Frameworks', target: 'Rangka Kerja' },
    { source: 'Storages', target: 'Penyimpanan' },

    // Sign In
    { source: 'Good morning', target: 'Selamat pagi' },
    { source: 'Good afternoon', target: 'Selamat tengah hari' },
    { source: 'Good evening', target: 'Selamat petang' },
    { source: 'Sign In', target: 'Log masuk' },
    { source: 'Welcome Back.', target: 'Selamat kembali.' },
    { source: 'Sign in with {0}', target: 'Log masuk dengan {0}' },
    { source: 'or login with', target: 'atau log masuk dengan' },
    { source: 'Enter E-mail', target: 'Masukkan E-mel' },
    { source: 'Enter password', target: 'Masukkan kata laluan' },
    { source: 'Login', target: 'Log masuk' },
    { source: 'Create new account', target: 'Cipta akaun baru' },
    { source: 'Forgot my password', target: 'Lupa kata laluan saya' },
    { source: 'required', target: 'diperlukan' },
    { source: 'incorrect Email', target: 'E-mel tidak betul' },
    { source: 'Minimum password length {0}', target: 'Panjang kata laluan minimum {0}' },
    { source: 'Unable to Sign In', target: 'Tidak dapat Log masuk' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'Mulakan <span class="auth-form__accent">Percuma hari ini</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target:
        'Tiada kad diperlukan. Anda akan mendapatkan semua fungsi lanjutan secara percuma semasa 14 hari percubaan PRO.'
    },
    { source: 'Enter First Name', target: 'Masukkan Nama Pertama' },
    { source: 'Enter Last Name (optional)', target: 'Masukkan Nama Akhir (pilihan)' },
    { source: 'Enter Email', target: 'Masukkan E-mel' },
    { source: 'Password', target: 'Kata Laluan' },
    { source: 'Repeat Password', target: 'Ulang Kata Laluan' },
    {
      source: 'By signing in you’re okay with our',
      target: 'Dengan log masuk anda bersetuju dengan'
    },
    {
      source: 'Creating an account means you’re okay with our',
      target: 'Mencipta akaun bermakna anda bersetuju dengan'
    },
    { source: 'Terms of Service', target: 'Syarat Perkhidmatan' },
    { source: 'Privacy Policy', target: 'Dasar Privasi' },
    { source: 'and', target: 'dan' },
    { source: 'Create account', target: 'Cipta akaun' },
    { source: 'Already have an account', target: 'Sudah mempunyai akaun' },
    { source: 'Unable to Sign Up', target: 'Tidak dapat Daftar' },

    // Restore password
    { source: 'Reset your password', target: 'Tetapkan semula kata laluan anda' },
    { source: 'Email Address', target: 'Alamat E-mel' },
    { source: 'Reset password', target: 'Tetapkan semula kata laluan' },
    { source: 'Return to Sign In', target: 'Kembali ke Log masuk' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'Sila periksa E-mel anda – <strong>{0}</strong>. Kami telah menghantar pautan pengesahan yang perlu anda ikuti untuk menukar kata laluan anda.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be at least 8 characters.',
      target: 'Hampir selesai, cuma masukkan kata laluan baru anda di bawah. <br>Mesti sekurang-kurangnya 8 aksara.'
    },
    { source: 'Reset password & Sign In', target: 'Tetapkan semula kata laluan & Log masuk' },
    { source: 'Unable to Send Code', target: 'Tidak dapat menghantar Kod' },
    { source: 'Unable to Change Password', target: 'Tidak dapat Menukar Kata Laluan' },

    // Email Verification
    { source: 'Email Verification', target: 'Pengesahan E-mel' },
    { source: 'Resend verification code', target: 'Hantar semula kod pengesahan' },
    { source: 'Verification email sent', target: 'E-mel pengesahan dihantar' },
    { source: 'Your Email is now verified', target: 'E-mel anda kini telah disahkan' },
    { source: 'Request is incorrect', target: 'Permintaan tidak betul' },

    // Invites
    {
      source: 'Join <span class="auth-form__accent">{0}</span>',
      target: 'Sertai <span class="auth-form__accent">{0}</span>'
    },
    {
      source: '<strong>{0}</strong> has invited you to join <strong>{1}</strong>',
      target: '<strong>{0}</strong> telah menjemput anda untuk menyertai <strong>{1}</strong>'
    },
    {
      source: 'Someone has invited you to join <strong>{0}</strong>',
      target: 'Seseorang telah menjemput anda untuk menyertai <strong>{0}</strong>'
    },
    {
      source: 'You are joining <strong>{0}</strong> using invite link',
      target: 'Anda menyertai <strong>{0}</strong> menggunakan pautan jemputan'
    },
    { source: 'Join', target: 'Sertai' },
    { source: 'Go to home page', target: 'Pergi ke halaman utama' },
    { source: 'Invite link is wrong', target: 'Pautan jemputan salah' },
    {
      source:
        'Looks like your invitation link has expired or maybe you have followed the wrong link. Please try to ask to invite your again.',
      target:
        'Nampaknya pautan jemputan anda telah tamat tempoh atau mungkin anda telah mengikuti pautan yang salah. Sila cuba untuk meminta jemputan anda sekali lagi.'
    },
    {
      source: 'Unfortunately we failed to load information about this invitation',
      target: 'Malangnya kami gagal memuatkan maklumat mengenai jemputan ini'
    },

    // Users & Teams
    { source: 'Members of {0}', target: 'Ahli {0}' },
    { source: 'How to get started', target: 'Cara untuk bermula' },
    { source: 'Users API', target: 'API Pengguna' },
    { source: 'Teams API', target: 'API Pasukan' },
    { source: 'Invite Member', target: 'Jemput Ahli' },
    { source: 'Add User property', target: 'Tambah sifat Pengguna' },
    { source: 'Add Team property', target: 'Tambah sifat Pasukan' },
    { source: 'Edit property', target: 'Edit sifat' },
    { source: 'Delete property', target: 'Padam sifat' },
    { source: 'Users', target: 'Pengguna' },
    { source: 'Teams', target: 'Pasukan' },
    { source: 'Search members', target: 'Cari ahli' },
    { source: 'Search teams', target: 'Cari pasukan' },
    { source: '{0} pages', target: '{0} halaman' },
    { source: 'No members', target: 'Tiada ahli' }
  ]
};

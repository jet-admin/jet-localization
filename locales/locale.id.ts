import { Locale } from './locale';

export const locale: Locale = {
  name: 'indonesian',
  language: 'id',
  items: [
    // General
    { source: 'Save', target: 'Simpan' },
    { source: 'Create', target: 'Buat' },
    { source: 'Duplicating', target: 'Menggandakan' },
    { source: 'Duplicate', target: 'Gandakan' },
    { source: 'Mass Edit', target: 'Edit Massa' },
    { source: 'Export', target: 'Ekspor' },
    { source: 'Import', target: 'Impor' },
    { source: 'Delete', target: 'Hapus' },
    { source: 'Continue', target: 'Lanjutkan' },
    { source: 'Submit', target: 'Kirim' },
    { source: 'Cancel', target: 'Batal' },
    { source: 'Loading', target: 'Memuat' },
    { source: 'Please wait...', target: 'Silakan tunggu...' },
    { source: 'Loading failed', target: 'Gagal memuat' },
    { source: 'Unknown error', target: 'Kesalahan tidak diketahui' },
    { source: 'Add', target: 'Tambah' },
    { source: 'or', target: 'atau' },
    { source: 'Hours', target: 'Jam' },
    { source: 'Minutes', target: 'Menit' },
    { source: 'Seconds', target: 'Detik' },
    { source: 'Saved', target: 'Tersimpan' },
    { source: 'Error', target: 'Kesalahan' },
    { source: 'Page not found', target: 'Halaman tidak ditemukan' },
    {
      source: 'The specified address is incorrect, or the page does not exist',
      target: 'Alamat yang ditentukan salah, atau halaman tidak ada'
    },
    { source: 'Not allowed', target: 'Tidak diizinkan' },
    {
      source: "You don't have permissions to access this page",
      target: 'Anda tidak memiliki izin untuk mengakses halaman ini'
    },
    { source: 'Are you sure want to close?', target: 'Apakah Anda yakin ingin menutup?' },
    { source: 'Close', target: 'Tutup' },

    // Actions
    { source: 'Action executed', target: 'Aksi dijalankan' },
    { source: 'Action executed successfully', target: 'Aksi berhasil dijalankan' },
    { source: 'Action failed', target: 'Aksi gagal' },
    {
      source: "You don't have permission for run this operation",
      target: 'Anda tidak memiliki izin untuk menjalankan operasi ini'
    },
    { source: 'Specify parameters', target: 'Tentukan parameter' },
    { source: 'Executing action', target: 'Menjalankan aksi' },
    { source: 'You are executing <strong>{0}</strong>', target: 'Anda menjalankan <strong>{0}</strong>' },
    { source: 'Please fill in the parameters below.', target: 'Silakan isi parameter di bawah ini.' },
    { source: 'Execute', target: 'Jalankan' },
    { source: 'Executing', target: 'Menjalankan' },
    { source: 'Finished', target: 'Selesai' },
    { source: 'Done', target: 'Selesai' },

    // Export
    { source: 'Records Export', target: 'Ekspor Data' },
    { source: 'Downloading records data as a file', target: 'Mengunduh data sebagai file' },
    { source: 'Choose format', target: 'Pilih format' },
    { source: 'Number of exporting records', target: 'Jumlah data yang diekspor' },
    { source: { label: 'Export', context: 'submit' }, target: 'Ekspor' },
    { source: 'Exporting', target: 'Ekspor' },
    { source: 'Export completed', target: 'Ekspor selesai' },
    { source: 'Failed to export', target: 'Gagal mengekspor' },

    // Components
    { source: 'optional', target: 'opsional' },
    { source: 'choose', target: 'pilih' },
    { source: 'Clear value', target: 'Bersihkan nilai' },
    { source: 'loading...', target: 'memuat...' },
    { source: 'Nothing found', target: 'Tidak ditemukan' },
    { source: 'Search...', target: 'Cari...' },
    { source: 'Enter at least {0} characters', target: 'Masukkan paling sedikit {0} karakter' },
    { source: 'No options', target: 'Tidak ada opsi' },
    { source: 'Drop files here or', target: 'Jatuhkan file di sini atau' },
    { source: 'Upload new', target: 'Unggah baru' },
    { source: 'Clear', target: 'Bersihkan' },
    { source: 'Download', target: 'Unduh' },
    { source: 'Choose file', target: 'Pilih file' },
    { source: 'Choose files', target: 'Pilih file' },
    { source: 'Scan with Camera', target: 'Pindai dengan Kamera' },
    { source: 'Scan Image file', target: 'Pindai gambar' },
    { source: 'Choose camera', target: 'Pilih kamera' },
    { source: 'Stop scanning', target: 'Berhenti memindai' },
    { source: 'Scan again', target: 'Pindai lagi' },
    { source: 'Use this scan', target: 'Gunakan pemindaian ini' },
    { source: 'Failed to scan', target: 'Gagal memindai' },
    {
      source: 'Code failed to scan, please try another image',
      target: 'Kode gagal dipindai, silakan coba gambar lain'
    },
    { source: 'current', target: 'saat ini' },
    { source: 'Day', target: 'Hari' },
    { source: 'Week', target: 'Minggu' },
    { source: 'Month', target: 'Bulan' },
    { source: 'Year', target: 'Tahun' },
    { source: 'Today', target: 'Hari ini' },
    { source: 'Daily', target: 'Setiap hari' },
    { source: 'Weekly', target: 'Setiap minggu' },
    { source: 'Monthly', target: 'Setiap bulan' },
    { source: 'Quarterly', target: 'Setiap kuartal' },
    { source: 'Yearly', target: 'Setiap tahun' },
    { source: 'Hourly', target: 'Setiap jam' },
    { source: 'Minutely', target: 'Setiap menit' },
    { source: 'Since', target: 'Sejak' },
    { source: 'Before', target: 'Sebelum' },
    { source: 'Between', target: 'Antara' },
    { source: 'From date', target: 'Dari tanggal' },
    { source: 'To date', target: 'Sampai tanggal' },
    { source: 'Coordinates', target: 'Koordinat' },
    { source: 'Latitude', target: 'Lintang' },
    { source: 'Longitude', target: 'Bujur' },
    { source: 'Default color', target: 'Warna default' },
    { source: 'not specified', target: 'tidak ditentukan' },
    { source: 'Sign using your finger or pointer', target: 'Tanda tangan menggunakan jari atau penunjuk' },

    // List components
    { source: 'Filter', target: 'Filter' },
    { source: 'Filter by field', target: 'Filter berdasar bidang' },
    { source: 'Filter by...', target: 'Filter berdasar...' },
    { source: 'Back', target: 'Kembali' },
    { source: 'Back to {0} fields', target: 'Kembali ke bidang {0}' },
    { source: 'Choose {0} from list', target: 'Pilih {0} dari daftar' },
    { source: '{0} fields', target: 'bidang {0}' },
    { source: '{0} relationships', target: 'relasi {0}' },
    { source: 'Aggregate {0}', target: 'Agregat {0}' },
    { source: 'No fields to select', target: 'Tidak ada bidang yang dapat dipilih' },
    { source: 'Enter value...', target: 'Masukkan nilai...' },
    { source: 'Exclude', target: 'Kecualikan' },
    { source: 'Actions', target: 'Aksi' },
    { source: 'Search', target: 'Cari' },
    { source: 'Sort 1 → 9', target: 'Urutkan 1 → 9' },
    { source: 'Sort 9 → 1', target: 'Urutkan 9 → 1' },
    { source: 'Sort A → Z', target: 'Urutkan A → Z' },
    { source: 'Sort Z → A', target: 'Urutkan Z → A' },
    { source: 'Refresh automatically', target: 'Segarkan otomatis' },
    { source: 'All', target: 'Semua' },
    { source: 'Selected', target: 'Terpilih' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'Sayangnya, tidak ada {0} yang cocok dengan pencarian Anda ditemukan'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'Kami sedang mengambil {0}, silahkan tunggu...' },
    { source: 'Add filter', target: 'Tambah filter' },
    { source: 'Delete this filter', target: 'Hapus filter ini' },
    { source: 'Toggle ordering', target: 'Ubah urutan' },
    { source: 'Not configured', target: 'Tidak terkonfigurasi' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'Sayangnya, komponen ini belum terkonfigurasi'
    },
    { source: 'records', target: 'data' },
    { source: '{0} items', target: '{0} item' },

    // Menu
    { source: 'Users & Teams', target: 'Pengguna & Tim' },
    { source: 'Billing', target: 'Penagihan' },
    { source: 'Billing & Plans', target: 'Penagihan & Paket' },
    { source: 'API keys', target: 'Kunci API' },
    { source: 'Dark Mode', target: 'Mode Gelap' },
    { source: 'Light Mode', target: 'Mode Terang' },
    { source: 'Disable Staff', target: 'Nonaktifkan Staf' },
    { source: 'Enable Staff', target: 'Aktifkan Staf' },
    { source: 'Manage Templates', target: 'Kelola Template' },
    { source: 'Logout', target: 'Keluar' },
    { source: 'Activity Log', target: 'Log Aktivitas' },
    { source: 'Collaborations', target: 'Kolaborasi' },
    { source: 'Open Visual Builder', target: 'Buka Builder Visual' },

    // Filters
    { source: 'equals', target: 'sama dengan' },
    { source: 'does not equal', target: 'tidak sama dengan' },
    { source: '{0} equals {1}', target: '{0} sama dengan {1}' },
    { source: '{0} does not equal {1}', target: '{0} tidak sama dengan {1}' },

    { source: 'contains', target: 'mengandung' },
    { source: 'does not contain', target: 'tidak mengandung' },
    { source: '{0} contains {1}', target: '{0} mengandung {1}' },
    { source: '{0} not contains {1}', target: '{0} tidak mengandung {1}' },

    { source: 'starts with', target: 'dimulai dengan' },
    { source: 'does not start with', target: 'tidak dimulai dengan' },
    { source: '{0} starts with {1}', target: '{0} dimulai dengan {1}' },
    { source: '{0} does not start with {1}', target: '{0} tidak dimulai dengan {1}' },

    { source: 'ends with', target: 'diakhiri dengan' },
    { source: 'does not end with', target: 'tidak diakhiri dengan' },
    { source: '{0} ends with {1}', target: '{0} diakhiri dengan {1}' },
    { source: '{0} does not end with {1}', target: '{0} tidak diakhiri dengan {1}' },

    { source: 'greater than', target: 'lebih besar dari' },
    { source: 'is not greater than', target: 'tidak lebih besar dari' },
    { source: '{0} is greater than {1}', target: '{0} lebih besar dari {1}' },
    { source: '{0} not greater than {1}', target: '{0} tidak lebih besar dari {1}' },

    { source: 'greater than or equals', target: 'lebih besar atau sama dengan' },
    { source: 'is not greater than or equals', target: 'tidak lebih besar atau sama dengan' },
    { source: '{0} is greater than or equals {1}', target: '{0} lebih besar atau sama dengan {1}' },
    { source: '{0} is not greater than or equals {1}', target: '{0} tidak lebih besar atau sama dengan {1}' },

    { source: 'less than', target: 'kurang dari' },
    { source: 'is not less than', target: 'tidak kurang dari' },
    { source: '{0} is less than {1}', target: '{0} kurang dari {1}' },
    { source: '{0} is not less than {1}', target: '{0} tidak kurang dari {1}' },

    { source: 'less than or equals', target: 'kurang dari atau sama dengan' },
    { source: 'is not less than or equals', target: 'tidak kurang dari atau sama dengan' },
    { source: '{0} is less than or equals {1}', target: '{0} kurang dari atau sama dengan {1}' },
    { source: '{0} is not less than or equals {1}', target: '{0} tidak kurang dari atau sama dengan {1}' },

    { source: 'one of', target: 'satu dari' },
    { source: 'is one of', target: 'adalah salah satu dari' },
    { source: 'is not one of', target: 'bukan salah satu dari' },
    { source: '{0} is one of {1}', target: '{0} adalah salah satu dari {1}' },
    { source: '{0} is not one of {1}', target: '{0} bukan salah satu dari {1}' },

    { source: 'is null', target: 'adalah nol' },
    { source: 'is not null', target: 'bukan nol' },
    { source: '{0} is null', target: '{0} adalah nol' },
    { source: '{0} is not null', target: '{0} bukan nol' },

    { source: 'is future', target: 'adalah masa depan' },
    { source: 'in the future', target: 'di masa depan' },
    { source: 'is not in the future', target: 'tidak di masa depan' },
    { source: '{0} is in the future', target: '{0} di masa depan' },
    { source: '{0} is not in the future', target: '{0} tidak di masa depan' },

    { source: 'is past', target: 'adalah masa lalu' },
    { source: 'in the past', target: 'di masa lalu' },
    { source: 'is not in the past', target: 'tidak di masa lalu' },
    { source: '{0} is in the past', target: '{0} di masa lalu' },
    { source: '{0} is not in the past', target: '{0} tidak di masa lalu' },

    { source: 'is Today', target: 'adalah Hari ini' },
    { source: 'today', target: 'hari ini' },
    { source: 'is not today', target: 'bukan hari ini' },
    { source: '{0} is today', target: '{0} hari ini' },
    { source: '{0} is not today', target: '{0} bukan hari ini' },

    { source: 'is Yesterday', target: 'adalah Kemarin' },
    { source: 'yesterday', target: 'kemarin' },
    { source: 'is not yesterday', target: 'bukan kemarin' },
    { source: '{0} is yesterday', target: '{0} kemarin' },
    { source: '{0} is not yesterday', target: '{0} bukan kemarin' },

    { source: 'is Last Week', target: 'adalah Minggu lalu' },
    { source: 'last week', target: 'minggu lalu' },
    { source: 'is not last week', target: 'bukan minggu lalu' },
    { source: '{0} is last week', target: '{0} minggu lalu' },
    { source: '{0} is not last week', target: '{0} bukan minggu lalu' },

    { source: 'is Last Month', target: 'adalah Bulan lalu' },
    { source: 'last month', target: 'bulan lalu' },
    { source: 'is not last month', target: 'bukan bulan lalu' },
    { source: '{0} is last month', target: '{0} bulan lalu' },
    { source: '{0} is not last month', target: '{0} bukan bulan lalu' },

    { source: 'is Last Quarter', target: 'adalah Kuartal lalu' },
    { source: 'last quarter', target: 'kuartal lalu' },
    { source: 'is not last quarter', target: 'bukan kuartal lalu' },
    { source: '{0} is last quarter', target: '{0} kuartal lalu' },
    { source: '{0} is not last quarter', target: '{0} bukan kuartal lalu' },

    { source: 'is Last Year', target: 'adalah Tahun lalu' },
    { source: 'last year', target: 'tahun lalu' },
    { source: 'is not last year', target: 'bukan tahun lalu' },
    { source: '{0} is last year', target: '{0} tahun lalu' },
    { source: '{0} is not last year', target: '{0} bukan tahun lalu' },

    { source: 'is Last X Days', target: 'adalah X hari terakhir' },
    { source: 'last X days', target: 'X hari terakhir' },
    { source: 'is not last X days', target: 'bukan X hari terakhir' },
    { source: '{0} is last {1} days', target: '{0} adalah {1} hari terakhir' },
    { source: '{0} is not last {1} days', target: '{0} bukan {1} hari terakhir' },

    { source: 'is Current Week', target: 'adalah Minggu ini' },
    { source: 'current week', target: 'minggu ini' },
    { source: 'is not current week', target: 'bukan minggu ini' },
    { source: '{0} is current week', target: '{0} minggu ini' },
    { source: '{0} is not current week', target: '{0} bukan minggu ini' },

    { source: 'is Current Month', target: 'adalah Bulan ini' },
    { source: 'current month', target: 'bulan ini' },
    { source: 'is not current month', target: 'bukan bulan ini' },
    { source: '{0} is current month', target: '{0} bulan ini' },
    { source: '{0} is not current month', target: '{0} bukan bulan ini' },

    { source: 'is Current Quarter', target: 'adalah Kuartal ini' },
    { source: 'current quarter', target: 'kuartal ini' },
    { source: 'is not current quarter', target: 'bukan kuartal ini' },
    { source: '{0} is current quarter', target: '{0} kuartal ini' },
    { source: '{0} is not current quarter', target: '{0} bukan kuartal ini' },

    { source: 'is Current Year', target: 'adalah Tahun ini' },
    { source: 'current year', target: 'tahun ini' },
    { source: 'is not current year', target: 'bukan tahun ini' },
    { source: '{0} is current year', target: '{0} tahun ini' },
    { source: '{0} is not current year', target: '{0} bukan tahun ini' },

    { source: 'is Previous Week', target: 'adalah Minggu sebelumnya' },
    { source: 'previous week', target: 'minggu sebelumnya' },
    { source: 'is not previous week', target: 'bukan minggu sebelumnya' },
    { source: '{0} is previous week', target: '{0} minggu sebelumnya' },
    { source: '{0} is not previous week', target: '{0} bukan minggu sebelumnya' },

    { source: 'is Previous Month', target: 'adalah Bulan sebelumnya' },
    { source: 'previous month', target: 'bulan sebelumnya' },
    { source: 'is not previous month', target: 'bukan bulan sebelumnya' },
    { source: '{0} is previous month', target: '{0} bulan sebelumnya' },
    { source: '{0} is not previous month', target: '{0} bukan bulan sebelumnya' },

    { source: 'is Previous Quarter', target: 'adalah Kuartal sebelumnya' },
    { source: 'previous quarter', target: 'kuartal sebelumnya' },
    { source: 'is not previous quarter', target: 'bukan kuartal sebelumnya' },
    { source: '{0} is previous quarter', target: '{0} kuartal sebelumnya' },
    { source: '{0} is not previous quarter', target: '{0} bukan kuartal sebelumnya' },

    { source: 'is Previous Year', target: 'adalah Tahun sebelumnya' },
    { source: 'previous year', target: 'tahun sebelumnya' },
    { source: 'is not previous year', target: 'bukan tahun sebelumnya' },
    { source: '{0} is previous year', target: '{0} tahun sebelumnya' },
    { source: '{0} is not previous year', target: '{0} bukan tahun sebelumnya' },

    { source: 'is Previous X Days', target: 'adalah X hari sebelumnya' },
    { source: 'previous X days', target: 'X hari sebelumnya' },
    { source: 'is not previous X days', target: 'bukan X hari sebelumnya' },
    { source: '{0} is previous {1} days', target: '{0} adalah {1} hari sebelumnya' },
    { source: '{0} is not previous {1} days', target: '{0} bukan {1} hari sebelumnya' },

    { source: 'is empty', target: 'kosong' },
    { source: 'is not empty', target: 'tidak kosong' },
    { source: '{0} is empty', target: '{0} kosong' },
    { source: '{0} is not empty', target: '{0} tidak kosong' },

    { source: 'covered by', target: 'ditutupi oleh' },
    { source: 'is not covered by', target: 'tidak ditutupi oleh' },
    { source: '{0} covered by {1}', target: '{0} ditutupi oleh {1}' },
    { source: '{0} is not covered by {1}', target: '{0} tidak ditutupi oleh {1}' },

    // Activity log
    { source: 'No activities found', target: 'Tidak ada aktivitas ditemukan' },
    {
      source: 'Start to working with data to log activities.',
      target: 'Mulailah bekerja dengan data untuk merekam aktivitas.'
    },
    { source: 'All Activity', target: 'Semua Aktivitas' },
    { source: 'Create Record', target: 'Buat Catatan' },
    { source: 'Update Record', target: 'Perbarui Catatan' },
    { source: 'Delete Record', target: 'Hapus Catatan' },
    { source: 'All Members', target: 'Semua Anggota' },

    // Collaboration
    { source: 'Timeline', target: 'Linimasa' },
    { source: 'Messages', target: 'Pesan' },
    { source: 'Activity', target: 'Aktivitas' },
    { source: 'Start chatting with your team', target: 'Mulailah mengobrol dengan tim Anda' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'Ambil pesan tentang halaman saat ini untuk melacak informasi penting.'
    },
    { source: 'Your Message', target: 'Pesan Anda' },
    { source: 'Send', target: 'Kirim' },

    // Share
    { source: 'Invite members', target: 'Undang anggota' },
    { source: 'Public share', target: 'Berbagi publik' },
    { source: 'Sign Up', target: 'Daftar' },
    { source: 'Members', target: 'Anggota' },
    { source: 'Invite with Email', target: 'Undang lewat Email' },
    { source: 'Invite someone...', target: 'Undang seseorang...' },
    { source: 'Send Invite', target: 'Kirim Undangan' },
    {
      source: 'Limit access to your data by user properties',
      target: 'Batasi akses ke data Anda berdasarkan properti pengguna'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: 'Masukkan email pengguna yang ingin Anda undang untuk berkolaborasi.'
    },
    { source: 'Copy', target: 'Salin' },
    { source: 'Invite with Link', target: 'Undang dengan Tautan' },
    { source: 'Remove link', target: 'Hapus tautan' },
    { source: 'Add Invite Link', target: 'Tambah Tautan Undangan' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'Siapapun di internet dengan tautan ini dapat bergabung dengan tim yang dipilih.'
    },
    { source: 'Pending Invites', target: 'Undangan Tertunda' },
    { source: 'Cancel invite', target: 'Batalkan undangan' },
    { source: 'Active Members', target: 'Anggota Aktif' },
    { source: 'Remove member', target: 'Hapus anggota' },
    {
      source: 'You are setting sharing for the current page',
      target: 'Anda menyetel pembagian untuk halaman saat ini'
    },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'Anda menyetel pembagian untuk semua halaman aplikasi Anda.'
    },
    { source: 'Public access link', target: 'Tautan akses publik' },
    { source: 'Updating public access...', target: 'Memperbarui akses publik...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'Siapapun dengan tautan ini akan dapat melihat halaman saat ini. Dengan cara ini Anda juga dapat menyematkan halaman saat ini ke situs web lain.'
    },
    { source: 'Embed code (IFRAME)', target: 'Kode semat (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: 'Tempelkan kode ini ke kode HTML situs web Anda di mana Anda ingin halaman saat ini muncul.'
    },
    { source: 'link', target: 'tautan' },
    { source: 'invited', target: 'diundang' },
    { source: 'Choose Team', target: 'Pilih Tim' },
    { source: 'App Teams', target: 'Tim Aplikasi' },
    { source: 'Built-In Teams', target: 'Tim Bawaan' },
    { source: 'Clear Team', target: 'Bersihkan Tim' },
    { source: 'Can build application and modify data', target: 'Dapat membuat aplikasi dan memodifikasi data' },
    { source: 'Can modify data in application', target: 'Dapat memodifikasi data dalam aplikasi' },
    { source: 'Can only view data without modification', target: 'Hanya dapat melihat data tanpa modifikasi' },
    { source: 'Add Team', target: 'Tambah Tim' },
    { source: 'Edit Team', target: 'Edit Tim' },
    { source: 'Adding Team', target: 'Menambah Tim' },
    {
      source: 'Keep control over who has access to current App',
      target: 'Tetap kendalikan orang yang memiliki akses ke aplikasi saat ini'
    },
    { source: 'Enter Team Name', target: 'Masukkan Nama Tim' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'Ketikkan nama tim, misalnya: Dukungan, Penjualan, Pemasaran, dll.'
    },
    { source: 'Add a new member to this team.', target: 'Tambahkan anggota baru ke tim ini.' },
    { source: 'Invite new member', target: 'Undang anggota baru' },
    { source: 'User', target: 'Pengguna' },
    { source: 'Date Added', target: 'Tanggal Ditambahkan' },
    { source: 'You', target: 'Anda' },
    { source: 'Edit', target: 'Edit' },
    { source: 'No users in this team', target: 'Tidak ada pengguna di tim ini' },
    { source: 'Page Permissions', target: 'Izin Halaman' },
    { source: 'App Permissions', target: 'Izin Aplikasi' },
    { source: 'Properties', target: 'Properti' },
    { source: 'Page name', target: 'Nama Halaman' },
    { source: 'Access', target: 'Akses' },
    { source: 'Full Access', target: 'Akses Penuh' },
    { source: 'Read Only', target: 'Hanya Baca' },
    { source: 'No Access', target: 'Tidak Ada Akses' },
    { source: 'Read', target: 'Baca' },
    { source: 'Update', target: 'Perbarui' },
    { source: 'Write', target: 'Tulis' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'Hapus' },
    { source: 'Custom Access', target: 'Akses Kustom' },
    { source: 'Read, create, update and delete data', target: 'Baca, buat, perbarui dan hapus data' },
    { source: 'Choose allowed operations granularly', target: 'Pilih operasi yang diizinkan secara rinci' },
    { source: 'Without any access to data', target: 'Tanpa akses ke data' },
    { source: 'Name', target: 'Nama' },
    { source: 'Active', target: 'Aktif' },
    { source: 'Settings', target: 'Pengaturan' },
    { source: 'Members and Teams', target: 'Anggota dan Tim' },
    { source: 'App Builder', target: 'Pembuat Aplikasi' },
    { source: 'Collection Permissions', target: 'Izin Koleksi' },
    { source: "Grant permissions to app's collection", target: 'Beri izin pada koleksi aplikasi' },
    { source: 'Collection', target: 'Koleksi' },
    {
      source: 'Limit access to your data by team properties',
      target: 'Batasi akses ke data Anda berdasarkan properti tim'
    },
    { source: 'Save Team', target: 'Simpan Tim' },
    { source: 'Create Team', target: 'Buat Tim' },
    { source: 'Value', target: 'Nilai' },
    { source: 'No properties specified', target: 'Tidak ada properti yang ditentukan' },

    // Navigation
    { source: 'Current App', target: 'Aplikasi Saat Ini' },
    { source: 'Home', target: 'Beranda' },

    // Profile
    {
      source: 'We are fetching user data, please, wait...',
      target: 'Kami sedang mengambil data pengguna, silakan tunggu...'
    },
    { source: 'Profile Settings', target: 'Pengaturan Profil' },
    { source: 'Basic information about your account.', target: 'Informasi dasar tentang akun Anda.' },
    { source: 'Photo', target: 'Foto' },
    { source: 'your photo', target: 'foto Anda' },
    { source: 'Change', target: 'Ubah' },
    { source: 'Upload', target: 'Unggah' },
    { source: 'Photo was successfully updated', target: 'Foto berhasil diperbarui' },
    { source: 'Photo was successfully deleted', target: 'Foto berhasil dihapus' },
    { source: 'First Name', target: 'Nama Depan' },
    { source: 'Last Name', target: 'Nama Belakang' },
    { source: 'Your Email', target: 'Email Anda' },
    { source: 'Email Change', target: 'Ubah Email' },
    { source: 'New Email', target: 'Email Baru' },
    { source: 'Change Email', target: 'Ubah Email' },
    { source: 'Check your inbox', target: 'Periksa kotak masuk Anda' },
    { source: 'Confirmation Email was sent to {0}', target: 'Email konfirmasi dikirim ke {0}' },
    { source: 'Changing Email failed', target: 'Gagal mengubah Email' },
    { source: 'Password Change', target: 'Ubah Kata Sandi' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target: 'Kata sandi harus cukup kuat untuk melindungi akun Anda, jadi buatlah setidaknya sepanjang 12 karakter.'
    },
    { source: 'Current Password', target: 'Kata Sandi Saat Ini' },
    { source: 'New Password', target: 'Kata Sandi Baru' },
    { source: 'Confirm New Password', target: 'Konfirmasi Kata Sandi Baru' },
    { source: 'Change Password', target: 'Ubah Kata Sandi' },
    {
      source: 'Current password was successfully updated, all other sessions will be logged out shortly',
      target: 'Kata sandi saat ini berhasil diperbarui, semua sesi lainnya akan segera keluar'
    },
    { source: 'Saving current password failed', target: 'Menyimpan kata sandi saat ini gagal' },
    { source: 'Short password', target: 'Kata sandi pendek' },
    { source: "Passwords don't match", target: 'Kata sandi tidak cocok' },
    { source: 'Personal Preferences', target: 'Preferensi Pribadi' },
    { source: 'Language', target: 'Bahasa' },
    { source: 'Timezone', target: 'Zona Waktu' },
    { source: 'Current time in {0} is', target: 'Waktu saat ini di {0} adalah' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'Sesuaikan preferensi tambahan untuk akun Anda.'
    },
    { source: 'News & Proposals', target: 'Berita & Proposal' },
    {
      source: 'Subscribe to our updates and proposals.',
      target: 'Berlangganan ke pembaruan dan proposal kami.'
    },
    { source: 'Save changes', target: 'Simpan perubahan' },
    { source: 'Current user was successfully updated', target: 'Pengguna saat ini berhasil diperbarui' },
    { source: 'Saving current user failed', target: 'Menyimpan pengguna saat ini gagal' },

    // My Apps
    { source: 'Type to search...', target: 'Ketikan untuk mencari...' },
    { source: 'My Apps', target: 'Aplikasi Saya' },
    { source: 'New App', target: 'Aplikasi Baru' },
    { source: 'Builder', target: 'Builder' },
    { source: 'App', target: 'Aplikasi' },
    { source: 'continue install', target: 'lanjutkan instalasi' },
    { source: 'Open builder', target: 'Buka builder' },
    { source: 'View published', target: 'Lihat yang dipublikasikan' },
    { source: 'Delete App', target: 'Hapus Aplikasi' },
    { source: 'Start from a template', target: 'Mulai dari template' },
    { source: 'Preview', target: 'Pratinjau' },
    { source: 'Contact Support', target: 'Hubungi Dukungan' },
    { source: 'Documentation', target: 'Dokumentasi' },
    { source: 'Feature Requests', target: 'Permintaan Fitur' },
    { source: 'See What’s New', target: 'Lihat yang Baru' },
    { source: 'Search templates...', target: 'Cari template...' },
    { source: 'any', target: 'apa saja' },
    { source: 'more', target: 'lebih banyak' },
    { source: 'Choose Data Source', target: 'Pilih Sumber Data' },
    { source: 'works with 30+ data sources', target: 'bekerja dengan 30+ sumber data' },
    { source: 'Use this template', target: 'Gunakan template ini' },
    { source: 'stores data in Jet Tables', target: 'menyimpan data di Jet Tables' },
    { source: 'New Data', target: 'Data Baru' },
    { source: 'using {0}', target: 'menggunakan {0}' },
    { source: "Can't find resource you're looking for?", target: 'Tidak dapat menemukan sumber yang Anda cari?' },
    { source: 'Admin Panel', target: 'Panel Admin' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'Daftar, buat, dan perbarui (CRUD) operasi di atas data Anda'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target:
        'Bangun panel admin kustom berdasarkan database, aplikasi, dan API apapun seperti Stripe, Twilio, dan GraphQL.'
    },
    { source: 'All Integrations', target: 'Semua Integrasi' },
    { source: 'Databases', target: 'Basis Data' },
    { source: 'APIs', target: 'API' },
    { source: 'Frameworks', target: 'Kerangka' },
    { source: 'Storages', target: 'Penyimpanan' },

    // Sign In
    { source: 'Good morning', target: 'Selamat pagi' },
    { source: 'Good afternoon', target: 'Selamat siang' },
    { source: 'Good evening', target: 'Selamat malam' },
    { source: 'Sign In', target: 'Masuk' },
    { source: 'Welcome Back.', target: 'Selamat Datang Kembali.' },
    { source: 'Sign in with {0}', target: 'Masuk dengan {0}' },
    { source: 'or login with', target: 'atau masuk dengan' },
    { source: 'Enter E-mail', target: 'Masukkan E-mail' },
    { source: 'Enter password', target: 'Masukkan kata sandi' },
    { source: 'Login', target: 'Masuk' },
    { source: 'Create new account', target: 'Buat akun baru' },
    { source: 'Forgot my password', target: 'Lupa kata sandi saya' },
    { source: 'required', target: 'diperlukan' },
    { source: 'incorrect Email', target: 'Email tidak benar' },
    { source: 'Minimum password length {0}', target: 'Panjang kata sandi minimum {0}' },
    { source: 'Unable to Sign In', target: 'Tidak dapat Masuk' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'Mulai <span class="auth-form__accent">Gratis hari ini</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target: 'Tidak diperlukan kartu. Anda akan mendapatkan semua fungsi lanjutan gratis selama uji coba PRO 14 hari.'
    },
    { source: 'Enter First Name', target: 'Masukkan Nama Depan' },
    { source: 'Enter Last Name (optional)', target: 'Masukkan Nama Belakang (opsional)' },
    { source: 'Enter Email', target: 'Masukkan Email' },
    { source: 'Password', target: 'Kata Sandi' },
    { source: 'Repeat Password', target: 'Ulangi Kata Sandi' },
    {
      source: 'By signing in you’re okay with our',
      target: 'Dengan masuk, Anda setuju dengan'
    },
    {
      source: 'Creating an account means you’re okay with our',
      target: 'Membuat akun berarti Anda setuju dengan'
    },
    { source: 'Terms of Service', target: 'Ketentuan Layanan' },
    { source: 'Privacy Policy', target: 'Kebijakan Privasi' },
    { source: 'and', target: 'dan' },
    { source: 'Create your free account', target: 'Buat akun gratis Anda' },
    { source: 'Already have an account', target: 'Sudah memiliki akun' },
    { source: 'Unable to Sign Up', target: 'Tidak dapat Mendaftar' },

    // Restore password
    { source: 'Reset your password', target: 'Setel ulang kata sandi Anda' },
    { source: 'Email Address', target: 'Alamat Email' },
    { source: 'Reset password', target: 'Setel Ulang Kata Sandi' },
    { source: 'Return to Sign In', target: 'Kembali ke Masuk' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'Silakan periksa Email Anda – <strong>{0}</strong>. Kami telah mengirimkan tautan validasi yang harus Anda ikuti untuk mengubah kata sandi Anda.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be at least 8 characters.',
      target: 'Hampir selesai, masukkan kata sandi baru Anda di bawah ini. <br>Harus setidaknya 8 karakter.'
    },
    { source: 'Reset password & Sign In', target: 'Setel Ulang Kata Sandi & Masuk' },
    { source: 'Unable to Send Code', target: 'Tidak dapat Mengirim Kode' },
    { source: 'Unable to Change Password', target: 'Tidak dapat Mengubah Kata Sandi' },

    // Email Verification
    { source: 'Email Verification', target: 'Verifikasi Email' },
    { source: 'Resend verification code', target: 'Kirim ulang kode verifikasi' },
    { source: 'Verification email sent', target: 'Email verifikasi terkirim' },
    { source: 'Your Email is now verified', target: 'Email Anda sekarang sudah diverifikasi' },
    { source: 'Request is incorrect', target: 'Permintaan tidak benar' },

    // Invites
    {
      source: 'Join <span class="auth-form__accent">{0}</span>',
      target: 'Bergabunglah dengan <span class="auth-form__accent">{0}</span>'
    },
    {
      source: '<strong>{0}</strong> has invited you to join <strong>{1}</strong>',
      target: '<strong>{0}</strong> telah mengundang Anda untuk bergabung dengan <strong>{1}</strong>'
    },
    {
      source: 'Someone has invited you to join <strong>{0}</strong>',
      target: 'Seseorang telah mengundang Anda untuk bergabung dengan <strong>{0}</strong>'
    },
    {
      source: 'You are joining <strong>{0}</strong> using invite link',
      target: 'Anda bergabung dengan <strong>{0}</strong> menggunakan tautan undangan'
    },
    { source: 'Join', target: 'Bergabung' },
    { source: 'Go to home page', target: 'Pergi ke beranda' },
    { source: 'Invite link is wrong', target: 'Tautan undangan salah' },
    {
      source:
        'Looks like your invitation link has expired or maybe you have followed the wrong link. Please try to ask to invite your again.',
      target:
        'Sepertinya tautan undangan Anda telah kedaluwarsa atau mungkin Anda telah mengikuti tautan yang salah. Silakan coba untuk meminta undangan lagi.'
    },
    {
      source: 'Unfortunately we failed to load information about this invitation',
      target: 'Sayangnya kami gagal memuat informasi tentang undangan ini'
    },

    // Users & Teams
    { source: 'Members of {0}', target: 'Anggota dari {0}' },
    { source: 'How to get started', target: 'Cara memulai' },
    { source: 'Users API', target: 'API Pengguna' },
    { source: 'Teams API', target: 'API Tim' },
    { source: 'Invite Member', target: 'Undang Anggota' },
    { source: 'Add User property', target: 'Tambah properti Pengguna' },
    { source: 'Add Team property', target: 'Tambah properti Tim' },
    { source: 'Edit property', target: 'Edit properti' },
    { source: 'Delete property', target: 'Hapus properti' },
    { source: 'Users', target: 'Pengguna' },
    { source: 'Teams', target: 'Tim' },
    { source: 'Search members', target: 'Cari anggota' },
    { source: 'Search teams', target: 'Cari tim' },
    { source: '{0} pages', target: '{0} halaman' },
    { source: 'No members', target: 'Tidak ada anggota' }
  ]
};

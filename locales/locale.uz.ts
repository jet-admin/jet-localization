import { Locale } from './locale';

export const locale: Locale = {
  name: 'uzbek',
  language: 'uz',
  items: [
    // General
    { source: 'Save', target: 'Saqlash' },
    { source: 'Create', target: 'Yaratish' },
    { source: 'Duplicating', target: 'Nusxalash' },
    { source: 'Duplicate', target: 'Nusxa ko‘chirish' },
    { source: 'Mass Edit', target: 'Ommaviy tahrirlash' },
    { source: 'Export', target: 'Eksport' },
    { source: 'Import', target: 'Import' },
    { source: 'Delete', target: 'O‘chirish' },
    { source: 'Continue', target: 'Davom ettirish' },
    { source: 'Submit', target: 'Yuborish' },
    { source: 'Cancel', target: 'Bekor qilish' },
    { source: 'Loading', target: 'Yuklanmoqda' },
    { source: 'Please wait...', target: 'Iltimos, kuting...' },
    { source: 'Loading failed', target: 'Yuklash muvaffaqiyatsiz tugadi' },
    { source: 'Unknown error', target: 'Noma’lum xato' },
    { source: 'Add', target: 'Qo‘shish' },
    { source: 'or', target: 'yoki' },
    { source: 'Hours', target: 'Soatlar' },
    { source: 'Minutes', target: 'Daqiqalar' },
    { source: 'Seconds', target: 'Soniyalar' },
    { source: 'Saved', target: 'Saqlangan' },
    { source: 'Error', target: 'Xato' },
    { source: 'Page not found', target: 'Sahifa topilmadi' },
    {
      source: 'The specified address is incorrect, or the page does not exist',
      target: 'Ko‘rsatilgan manzil noto‘g‘ri yoki sahifa mavjud emas'
    },
    { source: 'Not allowed', target: 'Ruxsat berilmagan' },
    {
      source: "You don't have permissions to access this page",
      target: 'Ushbu sahifaga kirish uchun ruxsatingiz yo‘q'
    },
    { source: 'Are you sure want to close?', target: 'Yopmoqchiligingizga ishonchingiz komilmi?' },
    { source: 'Close', target: 'Yopish' },

    // Actions
    { source: 'Action executed', target: 'Amal bajarildi' },
    { source: 'Action executed successfully', target: 'Amal muvaffaqiyatli bajarildi' },
    { source: 'Action failed', target: 'Amal bajarilmadi' },
    {
      source: "You don't have permission for run this operation",
      target: 'Bu operatsiyani bajarishga ruxsatingiz yo‘q'
    },
    { source: 'Specify parameters', target: 'Parametrlarni ko‘rsating' },
    { source: 'Executing action', target: 'Amal bajarilmoqda' },
    { source: 'You are executing <strong>{0}</strong>', target: 'Siz <strong>{0}</strong> bajarayapsiz' },
    { source: 'Please fill in the parameters below.', target: 'Iltimos, quyidagi parametrlarni to‘ldiring.' },
    { source: 'Execute', target: 'Bajarish' },
    { source: 'Executing', target: 'Bajarilmoqda' },
    { source: 'Finished', target: 'Tugallandi' },
    { source: 'Done', target: 'Bajarildi' },

    // Export
    { source: 'Records Export', target: 'Yozuvlarni eksport qilish' },
    { source: 'Downloading records data as a file', target: 'Yozuvlar fayl sifatida yuklanmoqda' },
    { source: 'Choose format', target: 'Formatni tanlang' },
    { source: 'Number of exporting records', target: 'Yozuvlar soni' },
    { source: { label: 'Export', context: 'submit' }, target: 'Eksport qilish' },
    { source: 'Exporting', target: 'Eksport qilinmoqda' },
    { source: 'Export completed', target: 'Eksport tugadi' },
    { source: 'Failed to export', target: 'Eksport bajarilmadi' },

    // Components
    { source: 'optional', target: 'ixtiyoriy' },
    { source: 'choose', target: 'tanlash' },
    { source: 'Clear value', target: 'Qiymatni tozalash' },
    { source: 'loading...', target: 'yuklanmoqda...' },
    { source: 'Nothing found', target: 'Hech narsa topilmadi' },
    { source: 'Search...', target: 'Qidiruv...' },
    { source: 'Enter at least {0} characters', target: 'Kamida {0} ta belgi kiriting' },
    { source: 'No options', target: 'Tanlovlar yo‘q' },
    { source: 'Drop files here or', target: 'Fayllarni bu yerga tashlang yoki' },
    { source: 'Upload new', target: 'Yangi yuklash' },
    { source: 'Clear', target: 'Tozalash' },
    { source: 'Download', target: 'Yuklab olish' },
    { source: 'Choose file', target: 'Faylni tanlang' },
    { source: 'Choose files', target: 'Fayllarni tanlang' },
    { source: 'Scan with Camera', target: 'Kamera bilan skanerlash' },
    { source: 'Scan Image file', target: 'Rasm faylini skanerlash' },
    { source: 'Choose camera', target: 'Kamerani tanlang' },
    { source: 'Stop scanning', target: 'Skanerlagani to‘xtatish' },
    { source: 'Scan again', target: 'Qayta skanerlash' },
    { source: 'Use this scan', target: 'Ushbu skaner natijasini ishlatish' },
    { source: 'Failed to scan', target: 'Skanerlik muvaffaqiyatsiz tugadi' },
    {
      source: 'Code failed to scan, please try another image',
      target: 'Kodi skanerlash imkoni bo‘lmadi, boshqa rasmni sinab ko‘ring'
    },
    { source: 'current', target: 'joriy' },
    { source: 'Day', target: 'Kun' },
    { source: 'Week', target: 'Hafta' },
    { source: 'Month', target: 'Oy' },
    { source: 'Year', target: 'Yil' },
    { source: 'Today', target: 'Bugun' },
    { source: 'Daily', target: 'Har kuni' },
    { source: 'Weekly', target: 'Har hafta' },
    { source: 'Monthly', target: 'Har oy' },
    { source: 'Quarterly', target: 'Har chorak' },
    { source: 'Yearly', target: 'Har yili' },
    { source: 'Hourly', target: 'Har soat' },
    { source: 'Minutely', target: 'Har daqiqa' },
    { source: 'Since', target: 'Shundan buyon' },
    { source: 'Before', target: 'Avval' },
    { source: 'Between', target: 'Orasida' },
    { source: 'From date', target: 'Sana boshi' },
    { source: 'To date', target: 'Sanagacha' },
    { source: 'Coordinates', target: 'Koordinatalar' },
    { source: 'Latitude', target: 'Kenglik' },
    { source: 'Longitude', target: 'Uzunlik' },
    { source: 'Default color', target: 'Standart rang' },
    { source: 'not specified', target: 'ko‘rsatilmagan' },
    {
      source: 'Sign using your finger or pointer',
      target: 'Barmoqlaringiz yoki ko‘rsatkich mavjud bo‘lsa,f foydalaning'
    },

    // List components
    { source: 'Filter', target: 'Filtr' },
    { source: 'Filter by field', target: 'Maydon bo‘yicha filtr' },
    { source: 'Filter by...', target: 'Filtr bo‘yicha...' },
    { source: 'Back', target: 'Orqaga' },
    { source: 'Back to {0} fields', target: '{0} maydonlarga qaytish' },
    { source: 'Choose {0} from list', target: '{0} dan ro‘yxatni tanlang' },
    { source: '{0} fields', target: '{0} maydonlar' },
    { source: '{0} relationships', target: '{0} munosabatlar' },
    { source: 'Aggregate {0}', target: '{0} agregatlash' },
    { source: 'No fields to select', target: 'Tanlash uchun maydonlar yo‘q' },
    { source: 'Enter value...', target: 'Qiymat kiriting...' },
    { source: 'Exclude', target: 'Istisno qilish' },
    { source: 'Actions', target: 'Harakatlar' },
    { source: 'Search', target: 'Qidiruv' },
    { source: 'Sort 1 → 9', target: 'Saralash 1 → 9' },
    { source: 'Sort 9 → 1', target: 'Saralash 9 → 1' },
    { source: 'Sort A → Z', target: 'Saralash A → Z' },
    { source: 'Sort Z → A', target: 'Saralash Z → A' },
    { source: 'Refresh automatically', target: 'Avto yangilash' },
    { source: 'All', target: 'Hammasi' },
    { source: 'Selected', target: 'Tanlangan' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'Afsuski, sizning so‘rovingiz bilan mos {0} topilmadi'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'Biz {0} ni olib kelyapmiz, iltimos, kuting...' },
    { source: 'Add filter', target: 'Filtr qo‘shish' },
    { source: 'Delete this filter', target: 'Ushbu filtrni o‘chirib tashlash' },
    { source: 'Toggle ordering', target: 'Tartibni almashtirish' },
    { source: 'Not configured', target: 'Sozlanmagan' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'Afsuski, ushbu komponent hali sozlanmagan'
    },
    { source: 'records', target: 'yoritmalar' },
    { source: '{0} items', target: '{0} ob’ektlari' },

    // Menu
    { source: 'Users & Teams', target: 'Foydalanuvchilar va jamoalar' },
    { source: 'Billing', target: 'Hisobni to‘lash' },
    { source: 'Billing & Plans', target: 'To‘lov va rejalar' },
    { source: 'API keys', target: 'API kalitlari' },
    { source: 'Dark Mode', target: 'Qorong‘i rejim' },
    { source: 'Light Mode', target: 'Yorug‘ rejim' },
    { source: 'Disable Staff', target: 'Hodimlarni o‘chirib qo‘yish' },
    { source: 'Enable Staff', target: 'Hodimlarni yoqish' },
    { source: 'Manage Templates', target: 'Shablonlarni boshqarish' },
    { source: 'Logout', target: 'Chiqish' },
    { source: 'Activity Log', target: 'Faoliyat jurnali' },
    { source: 'Collaborations', target: 'Hamkorliklar' },
    { source: 'Open Visual Builder', target: 'Vizual quruvchini ochish' },

    // Filters
    { source: 'equals', target: 'teng' },
    { source: 'does not equal', target: 'teng emas' },
    { source: '{0} equals {1}', target: '{0} {1}ga teng' },
    { source: '{0} does not equal {1}', target: '{0} {1}ga teng emas' },

    { source: 'contains', target: 'o‘z ichiga oladi' },
    { source: 'does not contain', target: 'o‘z ichiga olmaydi' },
    { source: '{0} contains {1}', target: '{0} {1}ni o‘z ichiga oladi' },
    { source: '{0} not contains {1}', target: '{0} {1}ni o‘z ichiga olmaydi' },

    { source: 'starts with', target: 'bilan boshlanadi' },
    { source: 'does not start with', target: 'bilan boshlanmaydi' },
    { source: '{0} starts with {1}', target: '{0} {1} bilan boshlanadi' },
    { source: '{0} does not start with {1}', target: '{0} {1} bilan boshlanmaydi' },

    { source: 'ends with', target: 'bilan tugaydi' },
    { source: 'does not end with', target: 'bilan tugamaydi' },
    { source: '{0} ends with {1}', target: '{0} {1} bilan tugaydi' },
    { source: '{0} does not end with {1}', target: '{0} {1} bilan tugamaydi' },

    { source: 'greater than', target: 'dan katta' },
    { source: 'is not greater than', target: 'dan katta emas' },
    { source: '{0} is greater than {1}', target: '{0} {1}dan katta' },
    { source: '{0} not greater than {1}', target: '{0} {1}dan katta emas' },

    { source: 'greater than or equals', target: 'dan katta yoki teng' },
    { source: 'is not greater than or equals', target: 'dan katta yoki teng emas' },
    { source: '{0} is greater than or equals {1}', target: '{0} {1}dan katta yoki teng' },
    { source: '{0} is not greater than or equals {1}', target: '{0} {1}dan katta yoki teng emas' },

    { source: 'less than', target: 'dan kichik' },
    { source: 'is not less than', target: 'dan kichik emas' },
    { source: '{0} is less than {1}', target: '{0} {1}dan kichik' },
    { source: '{0} is not less than {1}', target: '{0} {1}dan kichik emas' },

    { source: 'less than or equals', target: 'dan kichik yoki teng' },
    { source: 'is not less than or equals', target: 'dan kichik yoki teng emas' },
    { source: '{0} is less than or equals {1}', target: '{0} {1}dan kichik yoki teng' },
    { source: '{0} is not less than or equals {1}', target: '{0} {1}dan kichik yoki teng emas' },

    { source: 'one of', target: 'oradan biri' },
    { source: 'is one of', target: 'oradan biri' },
    { source: 'is not one of', target: 'oradan biri emas' },
    { source: '{0} is one of {1}', target: '{0} {1} orasidan biri' },
    { source: '{0} is not one of {1}', target: '{0} {1} orasidan biri emas' },

    { source: 'is null', target: 'null boʻladi' },
    { source: 'is not null', target: 'null boʻlmaydi' },
    { source: '{0} is null', target: '{0} null boʻladi' },
    { source: '{0} is not null', target: '{0} null boʻlmaydi' },

    { source: 'is future', target: 'kelajakda boʻladi' },
    { source: 'in the future', target: 'kelajakda' },
    { source: 'is not in the future', target: 'kelajakda boʻlmaydi' },
    { source: '{0} is in the future', target: '{0} kelajakda boʻladi' },
    { source: '{0} is not in the future', target: '{0} kelajakda boʻlmaydi' },

    { source: 'is past', target: 'o‘tmishda boʻladi' },
    { source: 'in the past', target: 'o‘tmishda' },
    { source: 'is not in the past', target: 'o‘tmishda boʻlmaydi' },
    { source: '{0} is in the past', target: '{0} o‘tmishda boʻladi' },
    { source: '{0} is not in the past', target: '{0} o‘tmishda boʻlmaydi' },

    { source: 'is Today', target: 'bugun' },
    { source: 'today', target: 'bugun' },
    { source: 'is not today', target: 'bugun emas' },
    { source: '{0} is today', target: '{0} bugun boʻladi' },
    { source: '{0} is not today', target: '{0} bugun boʻlmaydi' },

    { source: 'is Yesterday', target: 'kecha boʻladi' },
    { source: 'yesterday', target: 'kecha' },
    { source: 'is not yesterday', target: 'kecha emas' },
    { source: '{0} is yesterday', target: '{0} kecha boʻladi' },
    { source: '{0} is not yesterday', target: '{0} kecha boʻlmaydi' },

    { source: 'is Last Week', target: "o'tgan hafta boʻladi" },
    { source: 'last week', target: "o'tgan hafta" },
    { source: 'is not last week', target: "o'tgan hafta emas" },
    { source: '{0} is last week', target: "{0} o'tgan hafta boʻladi" },
    { source: '{0} is not last week', target: "{0} o'tgan hafta boʻlmaydi" },

    { source: 'is Last Month', target: "o'tgan oy boʻladi" },
    { source: 'last month', target: "o'tgan oy" },
    { source: 'is not last month', target: "o'tgan oy emas" },
    { source: '{0} is last month', target: "{0} o'tgan oy boʻladi" },
    { source: '{0} is not last month', target: "{0} o'tgan oy boʻlmaydi" },

    { source: 'is Last Quarter', target: "o'tgan chorak boʻladi" },
    { source: 'last quarter', target: "o'tgan chorak" },
    { source: 'is not last quarter', target: "o'tgan chorak emas" },
    { source: '{0} is last quarter', target: "{0} o'tgan chorak boʻladi" },
    { source: '{0} is not last quarter', target: "{0} o'tgan chorak boʻlmaydi" },

    { source: 'is Last Year', target: "o'tgan yil boʻladi" },
    { source: 'last year', target: "o'tgan yil" },
    { source: 'is not last year', target: "o'tgan yil emas" },
    { source: '{0} is last year', target: "{0} o'tgan yil boʻladi" },
    { source: '{0} is not last year', target: "{0} o'tgan yil boʻlmaydi" },

    { source: 'is Last X Days', target: 'o‘tayotgan X kun boʻladi' },
    { source: 'last X days', target: 'o‘tgan X kun' },
    { source: 'is not last X days', target: 'o‘tgan X kun emas' },
    { source: '{0} is last {1} days', target: '{0} oʻtgan {1} kun boʻladi' },
    { source: '{0} is not last {1} days', target: '{0} oʻtgan {1} kun boʻlmaydi' },

    { source: 'is Current Week', target: 'joriy hafta boʻladi' },
    { source: 'current week', target: 'joriy hafta' },
    { source: 'is not current week', target: 'joriy hafta emas' },
    { source: '{0} is current week', target: '{0} joriy hafta boʻladi' },
    { source: '{0} is not current week', target: '{0} joriy hafta boʻlmaydi' },

    { source: 'is Current Month', target: 'joriy oy boʻladi' },
    { source: 'current month', target: 'joriy oy' },
    { source: 'is not current month', target: 'joriy oy emas' },
    { source: '{0} is current month', target: '{0} joriy oy boʻladi' },
    { source: '{0} is not current month', target: '{0} joriy oy boʻlmaydi' },

    { source: 'is Current Quarter', target: 'joriy chorak boʻladi' },
    { source: 'current quarter', target: 'joriy chorak' },
    { source: 'is not current quarter', target: 'joriy chorak emas' },
    { source: '{0} is current quarter', target: '{0} joriy chorak boʻladi' },
    { source: '{0} is not current quarter', target: '{0} joriy chorak boʻlmaydi' },

    { source: 'is Current Year', target: 'joriy yil boʻladi' },
    { source: 'current year', target: 'joriy yil' },
    { source: 'is not current year', target: 'joriy yil emas' },
    { source: '{0} is current year', target: '{0} joriy yil boʻladi' },
    { source: '{0} is not current year', target: '{0} joriy yil boʻlmaydi' },

    { source: 'is Previous Week', target: 'ilgari oʻtgan hafta boʻladi' },
    { source: 'previous week', target: 'ilgari oʻtgan hafta' },
    { source: 'is not previous week', target: 'ilgari oʻtgan hafta emas' },
    { source: '{0} is previous week', target: '{0} ilgari oʻtgan hafta boʻladi' },
    { source: '{0} is not previous week', target: '{0} ilgari oʻtgan hafta boʻlmaydi' },

    { source: 'is Previous Month', target: 'ilgari oʻtgan oy boʻladi' },
    { source: 'previous month', target: 'ilgari oʻtgan oy' },
    { source: 'is not previous month', target: 'ilgari oʻtgan oy emas' },
    { source: '{0} is previous month', target: '{0} ilgari oʻtgan oy boʻladi' },
    { source: '{0} is not previous month', target: '{0} ilgari oʻtgan oy boʻlmaydi' },

    { source: 'is Previous Quarter', target: 'ilgari oʻtgan chorak boʻladi' },
    { source: 'previous quarter', target: 'ilgari oʻtgan chorak' },
    { source: 'is not previous quarter', target: 'ilgari oʻtgan chorak emas' },
    { source: '{0} is previous quarter', target: '{0} ilgari oʻtgan chorak boʻladi' },
    { source: '{0} is not previous quarter', target: '{0} ilgari oʻtgan chorak boʻlmaydi' },

    { source: 'is Previous Year', target: 'ilgari oʻtgan yil boʻladi' },
    { source: 'previous year', target: 'ilgari oʻtgan yil' },
    { source: 'is not previous year', target: 'ilgari oʻtgan yil emas' },
    { source: '{0} is previous year', target: '{0} ilgari oʻtgan yil boʻladi' },
    { source: '{0} is not previous year', target: '{0} ilgari oʻtgan yil boʻlmaydi' },

    { source: 'is Previous X Days', target: 'ilgari oʻtayotgan X kun bo‘ldi' },
    { source: 'previous X days', target: 'ilgari oʻtgan X kun' },
    { source: 'is not previous X days', target: 'ilgari oʻtgan X kun emas' },
    { source: '{0} is previous {1} days', target: '{0} ilgari o‘tayotgan {1} kun bo‘ldi' },
    { source: '{0} is not previous {1} days', target: '{0} ilgari oʻtayotgan {1} kun bo‘lmadi' },

    { source: 'is empty', target: 'boʻsh' },
    { source: 'is not empty', target: 'boʻsh emas' },
    { source: '{0} is empty', target: '{0} boʻsh' },
    { source: '{0} is not empty', target: '{0} boʻsh emas' },

    { source: 'covered by', target: 'davomi' },
    { source: 'is not covered by', target: 'davomi emas' },
    { source: '{0} covered by {1}', target: '{0} {1} davomi' },
    { source: '{0} is not covered by {1}', target: '{0} {1} davomi emas' },

    // Activity log
    { source: 'No activities found', target: 'Faoliyat topilmadi' },
    {
      source: 'Start to working with data to log activities.',
      target: "Log faoliyatini saqlash uchun ma'lumotlar bilan ishlashni boshlang."
    },
    { source: 'All Activity', target: 'Barcha faoliyat' },
    { source: 'Create Record', target: 'Yozuv yaratish' },
    { source: 'Update Record', target: 'Yozuvni yangilash' },
    { source: 'Delete Record', target: 'Yozuvni o‘chirish' },
    { source: 'All Members', target: "Barcha a'zolar" },

    // Collaboration
    { source: 'Timeline', target: 'Vaqt jadvali' },
    { source: 'Messages', target: 'Xabarlar' },
    { source: 'Activity', target: 'Faoliyat' },
    { source: 'Start chatting with your team', target: 'Jamoangiz bilan chatingni boshlang' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: "Muhim ma'lumotlarni kuzatish uchun joriy sahifa haqida xabar oling."
    },
    { source: 'Your Message', target: 'Sizning xabaringiz' },
    { source: 'Send', target: 'Yuborish' },

    // Share
    { source: 'Invite members', target: "A'zolarni taklif qilish" },
    { source: 'Public share', target: 'Ommabop ulashish' },
    { source: 'Sign Up', target: 'Ro‘yxatdan o‘tish' },
    { source: 'Members', target: "A'zolar" },
    { source: 'Invite with Email', target: 'Email bilan taklifnoma' },
    { source: 'Invite someone...', target: 'Kimnidir taklif qiling...' },
    { source: 'Send Invite', target: 'Taklifnoma yuborish' },
    {
      source: 'Limit access to your data by user properties',
      target: "Foydalanuvchi xususiyatlari orqali ma'lumotlaringizga kirishni cheklang"
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: 'Hamkorlik qilish uchun taklif qilmoqchi bo‘lgan foydalanuvchi emailini kiriting.'
    },
    { source: 'Copy', target: 'Nusxalash' },
    { source: 'Invite with Link', target: 'Havola bilan taklif qilish' },
    { source: 'Remove link', target: 'Havolani olib tashlash' },
    { source: 'Add Invite Link', target: 'Taklifnoma havolasini qo‘shish' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'Ushbu havolaga ega bo‘lgan har qanday kishi tanlangan jamoaga qo‘shilishi mumkin.'
    },
    { source: 'Pending Invites', target: 'Kutilayotgan taklifnomalar' },
    { source: 'Cancel invite', target: 'Taklifnomani bekor qilish' },
    { source: 'Active Members', target: "Faol a'zolar" },
    { source: 'Remove member', target: "A'zoni olib tashlash" },
    { source: 'You are setting sharing for the current page', target: 'Siz joriy sahifa uchun ulashishni sozlayapsiz' },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'Siz barcha sahifalar uchun ulashishni sozlayapsiz.'
    },
    { source: 'Public access link', target: 'Ommaviy kirish havolasi' },
    { source: 'Updating public access...', target: 'Ommaviy kirishni yangilash...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'Ushbu havolaga ega bo‘lgan har qanday kishi joriy sahifani ko‘rishi mumkin. Shuningdek, ushbu sahifani boshqa veb-saytga joylashtirish mumkin.'
    },
    { source: 'Embed code (IFRAME)', target: 'Kod osibtlash (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target:
        'Joriy sahifa paydo bo‘lishini xohlagan veb-saytingiz HTML kodiga to‘g‘ri keltirilgan kodni joylashtiring.'
    },
    { source: 'link', target: 'havola' },
    { source: 'invited', target: 'taklif qilingan' },
    { source: 'Choose Team', target: 'Jamoani tanlang' },
    { source: 'App Teams', target: 'Ilova jamoalari' },
    { source: 'Built-In Teams', target: 'O‘rnatilgan jamoalar' },
    { source: 'Clear Team', target: 'Jamoani tozalash' },
    { source: 'Can build application and modify data', target: "Ilova yaratish va ma'lumotlarni o‘zgartirish mumkin" },
    { source: 'Can modify data in application', target: "Ilovada ma'lumotlarni o‘zgartirish mumkin" },
    { source: 'Can only view data without modification', target: "Faqat ma'lumotlarni o‘zgartirishsiz ko‘rish mumkin" },
    { source: 'Add Team', target: 'Jamoa qo‘shish' },
    { source: 'Edit Team', target: 'Jamoani tahrirlash' },
    { source: 'Adding Team', target: 'Jamoani qo‘shish' },
    {
      source: 'Keep control over who has access to current App',
      target: 'Hozirgi ilovaga kim kirishini nazoratda saqlang'
    },
    { source: 'Enter Team Name', target: 'Jamoa nomini kiriting' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'Jamoaning nomini kiriting, masalan: Qo‘llab-quvvatlash, Savdo, Marketing k.k.'
    },
    { source: 'Add a new member to this team.', target: "Ushbu jamoa uchun yangi a'zo qo‘shish." },
    { source: 'Invite new member', target: "Yangi a'zoni taklif qilish" },
    { source: 'User', target: 'Foydalanuvchi' },
    { source: 'Date Added', target: 'Qo‘shilgan sana' },
    { source: 'You', target: 'Siz' },
    { source: 'Edit', target: 'Tahrirlash' },
    { source: 'No users in this team', target: 'Bu jamoada foydalanuvchilar yo‘q' },
    { source: 'Page Permissions', target: 'Sahifa ruxsatlari' },
    { source: 'App Permissions', target: 'Ilova ruxsatlari' },
    { source: 'Properties', target: 'Xususiyatlar' },
    { source: 'Page name', target: 'Sahifaning nomi' },
    { source: 'Access', target: 'Kirish' },
    { source: 'Full Access', target: 'To‘liq kirish' },
    { source: 'Read Only', target: 'Faqat o‘qiladi' },
    { source: 'No Access', target: 'Kirish yo‘q' },
    { source: 'Read', target: 'O‘qish' },
    { source: 'Update', target: 'Yangilash' },
    { source: 'Write', target: 'Yozish' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'O‘chirish' },
    { source: 'Custom Access', target: 'Moslashtirilgan kirish' },
    {
      source: 'Read, create, update and delete data',
      target: "Ma'lumotlarni oʻqish, yaratish, yangilash va oʻchirish"
    },
    { source: 'Choose allowed operations granularly', target: 'Ruxsat berilgan operatsiyalarni aniqroq tanlang' },
    { source: 'Without any access to data', target: "Ma'lumotlarga kirishsiz" },
    { source: 'Name', target: 'Nomi' },
    { source: 'Active', target: 'Faol' },
    { source: 'Settings', target: 'Sozlamalar' },
    { source: 'Members and Teams', target: "A'zolar va Jamoalar" },
    { source: 'App Builder', target: 'Ilova yaratuvchi' },
    { source: 'Collection Permissions', target: 'Kolleksiya ruxsatlari' },
    { source: "Grant permissions to app's collection", target: 'Ilovaning kollektsiyasiga ruxsat bering' },
    { source: 'Collection', target: 'Kolleksiya' },
    {
      source: 'Limit access to your data by team properties',
      target: "Jamoa xususiyatlari orqali ma'lumotlaringizga kirishni cheklang"
    },
    { source: 'Save Team', target: 'Jamoani saqlash' },
    { source: 'Create Team', target: 'Jamoani yaratish' },
    { source: 'Value', target: 'Qiymati' },
    { source: 'No properties specified', target: 'Xususiyatlar kiritilmagan' },

    // Navigation
    { source: 'Current App', target: 'Joriy ilova' },
    { source: 'Home', target: 'Bosh sahifa' },

    // Profile
    {
      source: 'We are fetching user data, please, wait...',
      target: "Biz foydalanuvchi ma'lumotlarini olib kelyapmiz, iltimos, kuting..."
    },
    { source: 'Profile Settings', target: 'Profil sozlamalari' },
    { source: 'Basic information about your account.', target: "Hisobingiz haqida asosiy ma'lumotlar." },
    { source: 'Photo', target: 'Rasm' },
    { source: 'your photo', target: 'rasmingiz' },
    { source: 'Change', target: 'O‘zgartiring' },
    { source: 'Upload', target: 'Yuklang' },
    { source: 'Photo was successfully updated', target: 'Rasm muvaffaqiyatli yangilandi' },
    { source: 'Photo was successfully deleted', target: 'Rasm muvaffaqiyatli oʻchirildi' },
    { source: 'First Name', target: 'Ismi' },
    { source: 'Last Name', target: 'Familiyasi' },
    { source: 'Your Email', target: 'Sizning emailingiz' },
    { source: 'Email Change', target: 'Emailni oʻzgartirish' },
    { source: 'New Email', target: 'Yangi Email' },
    { source: 'Change Email', target: 'Emailni oʻzgartirish' },
    { source: 'Check your inbox', target: 'Qutigizni tekshiring' },
    { source: 'Confirmation Email was sent to {0}', target: 'Tasdiqlash emaili {0} ga yuborildi' },
    { source: 'Changing Email failed', target: 'Emailni o‘zgartirish muvaffaqiyatsiz tugadi' },
    { source: 'Password Change', target: 'Parolni oʻzgartirish' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target:
        'Hisobingizni himoya qilish uchun parol kuchli bo‘lishi kerak, shuning uchun uni kamida 12 belgidan iborat qiling.'
    },
    { source: 'Current Password', target: 'Joriy Parol' },
    { source: 'New Password', target: 'Yangi Parol' },
    { source: 'Confirm New Password', target: 'Yangi Parolni tasdiqlang' },
    { source: 'Change Password', target: 'Parolni oʻzgartirish' },
    {
      source: 'Current password was successfully updated, all other sessions will be logged out shortly',
      target: 'Joriy parol muvaffaqiyatli yangilandi, barcha boshqa seanslar tez orada tizimdan chiqadi'
    },
    { source: 'Saving current password failed', target: 'Joriy parolni saqlash muvaffaqiyatsiz tugadi' },
    { source: 'Short password', target: 'Qisqa parol' },
    { source: "Passwords don't match", target: 'Parollar mos kelmaydi' },
    { source: 'Personal Preferences', target: 'Shaxsiy afzal saytlar' },
    { source: 'Language', target: 'Til' },
    { source: 'Timezone', target: 'Vaqt zonasi' },
    { source: 'Current time in {0} is', target: 'Joriy vaqt {0}' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'Hisobingiz uchun qo‘shimcha afzonalarni moslashtiring.'
    },
    { source: 'News & Proposals', target: 'Yangiliklar va takliflar' },
    {
      source: 'Subscribe to our updates and proposals.',
      target: 'Yangilanishlarimizga va takliflarimizga obuna bo‘ling.'
    },
    { source: 'Save changes', target: 'O‘zgartirishlarni saqlash' },
    { source: 'Current user was successfully updated', target: 'Joriy foydalanuvchi muvaffaqiyatli yangilandi' },
    { source: 'Saving current user failed', target: 'Joriy foydalanuvchini saqlash muvaffaqiyatsiz tugadi' },

    // My Apps
    { source: 'Type to search...', target: 'Qidirish uchun yozing...' },
    { source: 'My Apps', target: 'Mening ilovalarim' },
    { source: 'New App', target: 'Yangi ilova' },
    { source: 'Builder', target: 'Quruvchi' },
    { source: 'App', target: 'Ilova' },
    { source: 'continue install', target: 'o‘rnatishni davom ettirish' },
    { source: 'Open builder', target: 'Quruvchini ochish' },
    { source: 'View published', target: 'E’lon qilinganini ko‘rish' },
    { source: 'Delete App', target: 'Ilovani oʻchirib tashlash' },
    { source: 'Start from a template', target: 'Shablondan boshlash' },
    { source: 'Preview', target: 'Ko‘zdan kechirish' },
    { source: 'Contact Support', target: 'Qo‘llab-quvvatlashga murojaat qiling' },
    { source: 'Documentation', target: 'Hujjatlar' },
    { source: 'Feature Requests', target: 'Xususiyat so‘rovlari' },
    { source: 'See What’s New', target: 'Yangiliklarni ko‘rish' },
    { source: 'Search templates...', target: 'Shablonlarni qidirish...' },
    { source: 'any', target: 'har qanday' },
    { source: 'more', target: 'ko‘proq' },
    { source: 'Choose Data Source', target: "Ma'lumot manbasini tanlang" },
    { source: 'works with 30+ data sources', target: "30 dan ortiq ma'lumot manbasi bilan ishlaydi" },
    { source: 'Use this template', target: 'Ushbu shablonni ishlating' },
    { source: 'stores data in Jet Tables', target: "ma'lumotlarni Jet jadvallarida saqlaydi" },
    { source: 'New Data', target: "Yangi ma'lumotlar" },
    { source: 'using {0}', target: '{0} dan foydalangan holda' },
    { source: "Can't find resource you're looking for?", target: 'Qidirayotgan resursingizni topa olmaysizmi?' },
    { source: 'Admin Panel', target: 'Administrator paneli' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: "Ma'lumotlaringiz asosida ro'yxat tuzish, yaratish va yangilash (CRUD) amallari"
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target:
        "Stripe, Twilio va GraphQL kabi har qanday ma'lumotlar bazalari, ilovalar va API lar asosida maxsus administrator panelini yarating."
    },
    { source: 'All Integrations', target: 'Barcha integratsiyalar' },
    { source: 'Databases', target: "Ma'lumotlar bazalari" },
    { source: 'APIs', target: 'APIlar' },
    { source: 'Frameworks', target: 'Frameworklar' },
    { source: 'Storages', target: 'Omborlar' },

    // Sign In
    { source: 'Good morning', target: 'Xayrli tong' },
    { source: 'Good afternoon', target: 'Xayrli kun' },
    { source: 'Good evening', target: 'Xayrli kech' },
    { source: 'Sign In', target: 'Kirish' },
    { source: 'Welcome Back.', target: 'Qaytganingiz uchun xush kelibsiz.' },
    { source: 'Sign in with {0}', target: '{0} orqali kirish' },
    { source: 'or login with', target: 'yoki kirish' },
    { source: 'Enter E-mail', target: 'E-mail kiriting' },
    { source: 'Enter password', target: 'Parol kiriting' },
    { source: 'Login', target: 'Kirish' },
    { source: 'Create new account', target: 'Yangi hisob yaratish' },
    { source: 'Forgot my password', target: 'Parolimni unutdim' },
    { source: 'required', target: 'talab qilinadi' },
    { source: 'incorrect Email', target: 'Noto‘g‘ri email' },
    { source: 'Minimum password length {0}', target: 'Parolning minimal uzunligi {0}' },
    { source: 'Unable to Sign In', target: 'Kira olmadi' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'Boshlash <span class="auth-form__accent">Bugun bepul</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target: 'Karta talab qilinmaydi. 14 kunlik PRO sinovi davomida barcha ilg‘or funktsiyalardan bepul foydalanasiz.'
    },
    { source: 'Enter First Name', target: 'Ismingizni kiriting' },
    { source: 'Enter Last Name (optional)', target: 'Familiyani kiriting (ixtiyoriy)' },
    { source: 'Enter Email', target: 'Emailni kiriting' },
    { source: 'Password', target: 'Parol' },
    { source: 'Repeat Password', target: 'Parolni takrorlang' },
    {
      source: 'By signing in you’re okay with our',
      target: 'Kirish orqali siz bizning qoidalarimiz bilan roziligingizni bildirgan hisoblanasiz'
    },
    {
      source: 'Creating an account means you’re okay with our',
      target: 'Hisob yaratish orqali siz bizning foydalanish shartlarimiz bilan roziligingizni bildiradi'
    },
    { source: 'Terms of Service', target: 'Xizmat shartlari' },
    { source: 'Privacy Policy', target: 'Maxfiylik siyosati' },
    { source: 'and', target: 'va' },
    { source: 'Create your free account', target: 'Bepul hisobingizni yarating' },
    { source: 'Already have an account', target: 'Hisobingiz bormi' },
    { source: 'Unable to Sign Up', target: 'Ro‘yxatdan o‘tolmadi' },

    // Restore password
    { source: 'Reset your password', target: 'Parolni tiklash' },
    { source: 'Email Address', target: 'Email manzili' },
    { source: 'Reset password', target: 'Parolni tiklash' },
    { source: 'Return to Sign In', target: 'Kirishga qaytish' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'Iltimos, emailingizni tekshiring – <strong>{0}</strong>. Parolingizni o‘zgartirish uchun amal qilish kerak bo‘lgan tekshiruv havolasini yubordik.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be at least 8 characters.',
      target: 'Deyarli tugadi, faqat quyida yangi parolingizni kiriting. <br>Kami 8 ta belgidan kam boʻlmasligi kerak.'
    },
    { source: 'Reset password & Sign In', target: 'Parolni tiklash va Kirish' },
    { source: 'Unable to Send Code', target: 'Kod yuborolmadi' },
    { source: 'Unable to Change Password', target: 'Parolni o‘zgartirolmadi' },

    // Email Verification
    { source: 'Email Verification', target: 'Emailni tasdiqlash' },
    { source: 'Resend verification code', target: 'Tasdiqlash kodini qayta yuborish' },
    { source: 'Verification email sent', target: 'Tasdiqlovchi email yuborildi' },
    { source: 'Your Email is now verified', target: 'Sizning emailingiz tasdiqlandi' },
    { source: 'Request is incorrect', target: 'Soʻrov notoʻgʻri' },

    // Invites
    {
      source: 'Join <span class="auth-form__accent">{0}</span>',
      target: 'Qo‘shiling <span class="auth-form__accent">{0}</span>'
    },
    {
      source: '<strong>{0}</strong> has invited you to join <strong>{1}</strong>',
      target: '<strong>{0}</strong>, sizni <strong>{1}</strong> -ga qo‘shilishga taklif qildi'
    },
    {
      source: 'Someone has invited you to join <strong>{0}</strong>',
      target: '<strong>{0}</strong> -ga qo‘shilishga kimdir sizni taklif qildi'
    },
    {
      source: 'You are joining <strong>{0}</strong> using invite link',
      target: 'Siz taklif havolasi orqali <strong>{0}</strong> -ga qo‘shilayapsiz'
    },
    { source: 'Join', target: 'Qo‘shilish' },
    { source: 'Go to home page', target: 'Bosh sahifaga o‘ting' },
    { source: 'Invite link is wrong', target: 'Taklif havolasi noto‘g‘ri' },
    {
      source:
        'Looks like your invitation link has expired or maybe you have followed the wrong link. Please try to ask to invite your again.',
      target:
        'Sizning taklifnoma havolangiz muddati oʻtgan yoki ehtimol siz notoʻgʻri havolani kuzatgansiz. Iltimos, yana taklif qilishni so‘rang.'
    },
    {
      source: 'Unfortunately we failed to load information about this invitation',
      target: "Afsuski, ushbu taklifnoma haqida ma'lumotni yuklab boʻlmadi"
    },

    // Users & Teams
    { source: 'Members of {0}', target: "{0} a'zolari" },
    { source: 'How to get started', target: 'Qanday boshlash kerak' },
    { source: 'Users API', target: 'Foydalanuvchilar API' },
    { source: 'Teams API', target: 'Jamoalar API' },
    { source: 'Invite Member', target: "A'zoni taklif qilish" },
    { source: 'Add User property', target: 'Foydalanuvchi xususiyatini qo‘shish' },
    { source: 'Add Team property', target: "Jamoa xususiyatini qo'shish" },
    { source: 'Edit property', target: 'Xususiyatni tahrirlash' },
    { source: 'Delete property', target: 'Xususiyatni o‘chirish' },
    { source: 'Users', target: 'Foydalanuvchilar' },
    { source: 'Teams', target: 'Jamoalar' },
    { source: 'Search members', target: 'A‘zolarni qidirish' },
    { source: 'Search teams', target: 'Jamoalarni qidirish' },
    { source: '{0} pages', target: '{0} sahifalar' },
    { source: 'No members', target: "A'zolar yo'q" }
  ]
};

import { Locale } from './locale';

export const locale: Locale = {
  name: 'english',
  language: 'en',
  items: [
    // General
    { source: 'Save', target: 'حفظ' },
    { source: 'Create', target: 'إنشاء' },
    { source: 'Duplicating', target: 'تكرار' },
    { source: 'Duplicate', target: 'تكرار' },
    { source: 'Mass Edit', target: 'تعديل مجمع' },
    { source: 'Export', target: 'تصدير' },
    { source: 'Import', target: 'استيراد' },
    { source: 'Delete', target: 'حذف' },
    { source: 'Continue', target: 'متابعة' },
    { source: 'Submit', target: 'إرسال' },
    { source: 'Cancel', target: 'إلغاء' },
    { source: 'Loading', target: 'جارٍ التحميل' },
    { source: 'Please wait...', target: 'الرجاء الانتظار...' },
    { source: 'Loading failed', target: 'فشل التحميل' },
    { source: 'Unknown error', target: 'خطأ غير معروف' },
    { source: 'Add', target: 'إضافة' },
    { source: 'or', target: 'أو' },
    { source: 'Hours', target: 'ساعات' },
    { source: 'Minutes', target: 'دقائق' },
    { source: 'Seconds', target: 'ثواني' },
    { source: 'Saved', target: 'تم الحفظ' },
    { source: 'Error', target: 'خطأ' },
    { source: 'Page not found', target: 'الصفحة غير موجودة' },
    {
      source: 'The specified address is incorrect, or the page does not exist',
      target: 'العنوان المحدد غير صحيح، أو الصفحة غير موجودة'
    },
    { source: 'Not allowed', target: 'غير مسموح' },
    {
      source: "You don't have permissions to access this page",
      target: 'ليس لديك أذونات للوصول إلى هذه الصفحة'
    },
    { source: 'Are you sure want to close?', target: 'هل أنت متأكد أنك تريد الإغلاق؟' },
    { source: 'Close', target: 'إغلاق' },

    // Actions
    { source: 'Action executed', target: 'تم تنفيذ الإجراء' },
    { source: 'Action executed successfully', target: 'تم تنفيذ الإجراء بنجاح' },
    { source: 'Action failed', target: 'فشل الإجراء' },
    {
      source: "You don't have permission for run this operation",
      target: 'ليس لديك إذن لتشغيل هذه العملية'
    },
    { source: 'Specify parameters', target: 'تحديد المعلمات' },
    { source: 'Executing action', target: 'جارٍ تنفيذ الإجراء' },
    { source: 'You are executing <strong>{0}</strong>', target: 'أنت تنفذ <strong>{0}</strong>' },
    { source: 'Please fill in the parameters below.', target: 'الرجاء ملء المعلمات أدناه.' },
    { source: 'Execute', target: 'تنفيذ' },
    { source: 'Executing', target: 'جارٍ التنفيذ' },
    { source: 'Finished', target: 'انتهى' },
    { source: 'Done', target: 'تم' },

    // Export
    { source: 'Records Export', target: 'تصدير السجلات' },
    { source: 'Downloading records data as a file', target: 'جارٍ تنزيل بيانات السجلات كملف' },
    { source: 'Choose format', target: 'اختيار التنسيق' },
    { source: 'Number of exporting records', target: 'عدد السجلات المراد تصديرها' },
    { source: { label: 'Export', context: 'submit' }, target: 'تصدير' },
    { source: 'Exporting', target: 'جارٍ التصدير' },
    { source: 'Export completed', target: 'اكتمل التصدير' },
    { source: 'Failed to export', target: 'فشل التصدير' },

    // Components
    { source: 'optional', target: 'اختياري' },
    { source: 'choose', target: 'اختيار' },
    { source: 'Clear value', target: 'مسح القيمة' },
    { source: 'loading...', target: 'جارٍ التحميل...' },
    { source: 'Nothing found', target: 'لم يتم العثور على شيء' },
    { source: 'Search...', target: 'بحث...' },
    { source: 'Enter at least {0} characters', target: 'أدخل {0} أحرف على الأقل' },
    { source: 'No options', target: 'لا توجد خيارات' },
    { source: 'Drop files here or', target: 'أسقط الملفات هنا أو' },
    { source: 'Upload new', target: 'تحميل جديد' },
    { source: 'Clear', target: 'مسح' },
    { source: 'Download', target: 'تنزيل' },
    { source: 'Choose file', target: 'اختيار ملف' },
    { source: 'Choose files', target: 'اختيار الملفات' },
    { source: 'Scan with Camera', target: 'مسح باستخدام الكاميرا' },
    { source: 'Scan Image file', target: 'مسح ملف الصورة' },
    { source: 'Choose camera', target: 'اختيار الكاميرا' },
    { source: 'Stop scanning', target: 'إيقاف المسح' },
    { source: 'Scan again', target: 'مسح مرة أخرى' },
    { source: 'Use this scan', target: 'استخدام هذا المسح' },
    { source: 'Failed to scan', target: 'فشل المسح' },
    {
      source: 'Code failed to scan, please try another image',
      target: 'فشل مسح الرمز، يرجى محاولة صورة أخرى'
    },
    { source: 'current', target: 'حالي' },
    { source: 'Day', target: 'يوم' },
    { source: 'Week', target: 'أسبوع' },
    { source: 'Month', target: 'شهر' },
    { source: 'Year', target: 'سنة' },
    { source: 'Today', target: 'اليوم' },
    { source: 'Daily', target: 'يومي' },
    { source: 'Weekly', target: 'أسبوعي' },
    { source: 'Monthly', target: 'شهري' },
    { source: 'Quarterly', target: 'ربع سنوي' },
    { source: 'Yearly', target: 'سنوي' },
    { source: 'Hourly', target: 'كل ساعة' },
    { source: 'Minutely', target: 'كل دقيقة' },
    { source: 'Since', target: 'منذ' },
    { source: 'Before', target: 'قبل' },
    { source: 'Between', target: 'بين' },
    { source: 'From date', target: 'من تاريخ' },
    { source: 'To date', target: 'إلى تاريخ' },
    { source: 'Coordinates', target: 'إحداثيات' },
    { source: 'Latitude', target: 'خط العرض' },
    { source: 'Longitude', target: 'خط الطول' },
    { source: 'Default color', target: 'اللون الافتراضي' },
    { source: 'not specified', target: 'غير محدد' },
    { source: 'Sign using your finger or pointer', target: 'التوقيع باستخدام إصبعك أو مؤشرك' },

    // List components
    { source: 'Filter', target: 'فلتر' },
    { source: 'Filter by field', target: 'تصفية حسب الحقل' },
    { source: 'Filter by...', target: 'تصفية حسب...' },
    { source: 'Back', target: 'رجوع' },
    { source: 'Back to {0} fields', target: 'العودة إلى {0} حقول' },
    { source: 'Choose {0} from list', target: 'اختر {0} من القائمة' },
    { source: '{0} fields', target: '{0} حقول' },
    { source: '{0} relationships', target: '{0} علاقات' },
    { source: 'Aggregate {0}', target: 'تجميع {0}' },
    { source: 'No fields to select', target: 'لا توجد حقول للاختيار' },
    { source: 'Enter value...', target: 'أدخل قيمة...' },
    { source: 'Exclude', target: 'استبعاد' },
    { source: 'Actions', target: 'الإجراءات' },
    { source: 'Search', target: 'بحث' },
    { source: 'Sort 1 → 9', target: 'ترتيب 1 → 9' },
    { source: 'Sort 9 → 1', target: 'ترتيب 9 → 1' },
    { source: 'Sort A → Z', target: 'ترتيب أ → ي' },
    { source: 'Sort Z → A', target: 'ترتيب ي → أ' },
    { source: 'Refresh automatically', target: 'تحديث تلقائي' },
    { source: 'All', target: 'الكل' },
    { source: 'Selected', target: 'محدد' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'للأسف، لم يتم العثور على {0} يطابق استعلامك'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'نحن نجلب {0}، الرجاء الانتظار...' },
    { source: 'Add filter', target: 'إضافة فلتر' },
    { source: 'Delete this filter', target: 'حذف هذا الفلتر' },
    { source: 'Toggle ordering', target: 'تبديل الترتيب' },
    { source: 'Not configured', target: 'غير مكوّن' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'للأسف، هذا المكون لم يتم تكوينه بعد'
    },
    { source: 'records', target: 'سجلات' },
    { source: '{0} items', target: '{0} عناصر' },

    // Menu
    { source: 'Users & Teams', target: 'المستخدمون والفرق' },
    { source: 'Billing', target: 'الفواتير' },
    { source: 'Billing & Plans', target: 'الفواتير والخطط' },
    { source: 'API keys', target: 'مفاتيح API' },
    { source: 'Dark Mode', target: 'الوضع الداكن' },
    { source: 'Light Mode', target: 'الوضع الفاتح' },
    { source: 'Disable Staff', target: 'تعطيل الموظفين' },
    { source: 'Enable Staff', target: 'تمكين الموظفين' },
    { source: 'Manage Templates', target: 'إدارة القوالب' },
    { source: 'Logout', target: 'تسجيل الخروج' },
    { source: 'Activity Log', target: 'سجل النشاط' },
    { source: 'Collaborations', target: 'التعاون' },
    { source: 'Open Visual Builder', target: 'فتح منشئ المرئيات' },

    // Filters
    { source: 'equals', target: 'يساوي' },
    { source: 'does not equal', target: 'لا يساوي' },
    { source: '{0} equals {1}', target: '{0} يساوي {1}' },
    { source: '{0} does not equal {1}', target: '{0} لا يساوي {1}' },

    { source: 'contains', target: 'يحتوي على' },
    { source: 'does not contain', target: 'لا يحتوي على' },
    { source: '{0} contains {1}', target: '{0} يحتوي على {1}' },
    { source: '{0} not contains {1}', target: '{0} لا يحتوي على {1}' },

    { source: 'starts with', target: 'يبدأ بـ' },
    { source: 'does not start with', target: 'لا يبدأ بـ' },
    { source: '{0} starts with {1}', target: '{0} يبدأ بـ {1}' },
    { source: '{0} does not start with {1}', target: '{0} لا يبدأ بـ {1}' },

    { source: 'ends with', target: 'ينتهي بـ' },
    { source: 'does not end with', target: 'لا ينتهي بـ' },
    { source: '{0} ends with {1}', target: '{0} ينتهي بـ {1}' },
    { source: '{0} does not end with {1}', target: '{0} لا ينتهي بـ {1}' },

    { source: 'greater than', target: 'أكبر من' },
    { source: 'is not greater than', target: 'ليس أكبر من' },
    { source: '{0} is greater than {1}', target: '{0} أكبر من {1}' },
    { source: '{0} not greater than {1}', target: '{0} ليس أكبر من {1}' },

    { source: 'greater than or equals', target: 'أكبر من أو يساوي' },
    { source: 'is not greater than or equals', target: 'ليس أكبر من أو يساوي' },
    { source: '{0} is greater than or equals {1}', target: '{0} أكبر من أو يساوي {1}' },
    { source: '{0} is not greater than or equals {1}', target: '{0} ليس أكبر من أو يساوي {1}' },

    { source: 'less than', target: 'أقل من' },
    { source: 'is not less than', target: 'ليس أقل من' },
    { source: '{0} is less than {1}', target: '{0} أقل من {1}' },
    { source: '{0} is not less than {1}', target: '{0} ليس أقل من {1}' },

    { source: 'less than or equals', target: 'أقل من أو يساوي' },
    { source: 'is not less than or equals', target: 'ليس أقل من أو يساوي' },
    { source: '{0} is less than or equals {1}', target: '{0} أقل من أو يساوي {1}' },
    { source: '{0} is not less than or equals {1}', target: '{0} ليس أقل من أو يساوي {1}' },

    { source: 'one of', target: 'أحد' },
    { source: 'is one of', target: 'هو أحد' },
    { source: 'is not one of', target: 'ليس أحد' },
    { source: '{0} is one of {1}', target: '{0} هو أحد {1}' },
    { source: '{0} is not one of {1}', target: '{0} ليس أحد {1}' },

    { source: 'is null', target: 'فارغ' },
    { source: 'is not null', target: 'ليس فارغاً' },
    { source: '{0} is null', target: '{0} فارغ' },
    { source: '{0} is not null', target: '{0} ليس فارغاً' },

    { source: 'is future', target: 'في المستقبل' },
    { source: 'in the future', target: 'في المستقبل' },
    { source: 'is not in the future', target: 'ليس في المستقبل' },
    { source: '{0} is in the future', target: '{0} في المستقبل' },
    { source: '{0} is not in the future', target: '{0} ليس في المستقبل' },

    { source: 'is past', target: 'في الماضي' },
    { source: 'in the past', target: 'في الماضي' },
    { source: 'is not in the past', target: 'ليس في الماضي' },
    { source: '{0} is in the past', target: '{0} في الماضي' },
    { source: '{0} is not in the past', target: '{0} ليس في الماضي' },

    { source: 'is Today', target: 'هو اليوم' },
    { source: 'today', target: 'اليوم' },
    { source: 'is not today', target: 'ليس اليوم' },
    { source: '{0} is today', target: '{0} هو اليوم' },
    { source: '{0} is not today', target: '{0} ليس اليوم' },

    { source: 'is Yesterday', target: 'هو الأمس' },
    { source: 'yesterday', target: 'الأمس' },
    { source: 'is not yesterday', target: 'ليس الأمس' },
    { source: '{0} is yesterday', target: '{0} هو الأمس' },
    { source: '{0} is not yesterday', target: '{0} ليس الأمس' },

    { source: 'is Last Week', target: 'هو الأسبوع الماضي' },
    { source: 'last week', target: 'الأسبوع الماضي' },
    { source: 'is not last week', target: 'ليس الأسبوع الماضي' },
    { source: '{0} is last week', target: '{0} هو الأسبوع الماضي' },
    { source: '{0} is not last week', target: '{0} ليس الأسبوع الماضي' },

    { source: 'is Last Month', target: 'هو الشهر الماضي' },
    { source: 'last month', target: 'الشهر الماضي' },
    { source: 'is not last month', target: 'ليس الشهر الماضي' },
    { source: '{0} is last month', target: '{0} هو الشهر الماضي' },
    { source: '{0} is not last month', target: '{0} ليس الشهر الماضي' },

    { source: 'is Last Quarter', target: 'هو الربع الأخير' },
    { source: 'last quarter', target: 'الربع الأخير' },
    { source: 'is not last quarter', target: 'ليس الربع الأخير' },
    { source: '{0} is last quarter', target: '{0} هو الربع الأخير' },
    { source: '{0} is not last quarter', target: '{0} ليس الربع الأخير' },

    { source: 'is Last Year', target: 'هو العام الماضي' },
    { source: 'last year', target: 'العام الماضي' },
    { source: 'is not last year', target: 'ليس العام الماضي' },
    { source: '{0} is last year', target: '{0} هو العام الماضي' },
    { source: '{0} is not last year', target: '{0} ليس العام الماضي' },

    { source: 'is Last X Days', target: 'هو آخر X أيام' },
    { source: 'last X days', target: 'آخر X أيام' },
    { source: 'is not last X days', target: 'ليس آخر X أيام' },
    { source: '{0} is last {1} days', target: '{0} هو آخر {1} أيام' },
    { source: '{0} is not last {1} days', target: '{0} ليس آخر {1} أيام' },

    { source: 'is Current Week', target: 'هو الأسبوع الحالي' },
    { source: 'current week', target: 'الأسبوع الحالي' },
    { source: 'is not current week', target: 'ليس الأسبوع الحالي' },
    { source: '{0} is current week', target: '{0} هو الأسبوع الحالي' },
    { source: '{0} is not current week', target: '{0} ليس الأسبوع الحالي' },

    { source: 'is Current Month', target: 'هو الشهر الحالي' },
    { source: 'current month', target: 'الشهر الحالي' },
    { source: 'is not current month', target: 'ليس الشهر الحالي' },
    { source: '{0} is current month', target: '{0} هو الشهر الحالي' },
    { source: '{0} is not current month', target: '{0} ليس الشهر الحالي' },

    { source: 'is Current Quarter', target: 'هو الربع الحالي' },
    { source: 'current quarter', target: 'الربع الحالي' },
    { source: 'is not current quarter', target: 'ليس الربع الحالي' },
    { source: '{0} is current quarter', target: '{0} هو الربع الحالي' },
    { source: '{0} is not current quarter', target: '{0} ليس الربع الحالي' },

    { source: 'is Current Year', target: 'هو العام الحالي' },
    { source: 'current year', target: 'العام الحالي' },
    { source: 'is not current year', target: 'ليس العام الحالي' },
    { source: '{0} is current year', target: '{0} هو العام الحالي' },
    { source: '{0} is not current year', target: '{0} ليس العام الحالي' },

    { source: 'is Previous Week', target: 'هو الأسبوع السابق' },
    { source: 'previous week', target: 'الأسبوع السابق' },
    { source: 'is not previous week', target: 'ليس الأسبوع السابق' },
    { source: '{0} is previous week', target: '{0} هو الأسبوع السابق' },
    { source: '{0} is not previous week', target: '{0} ليس الأسبوع السابق' },

    { source: 'is Previous Month', target: 'هو الشهر السابق' },
    { source: 'previous month', target: 'الشهر السابق' },
    { source: 'is not previous month', target: 'ليس الشهر السابق' },
    { source: '{0} is previous month', target: '{0} هو الشهر السابق' },
    { source: '{0} is not previous month', target: '{0} ليس الشهر السابق' },

    { source: 'is Previous Quarter', target: 'هو الربع السابق' },
    { source: 'previous quarter', target: 'الربع السابق' },
    { source: 'is not previous quarter', target: 'ليس الربع السابق' },
    { source: '{0} is previous quarter', target: '{0} هو الربع السابق' },
    { source: '{0} is not previous quarter', target: '{0} ليس الربع السابق' },

    { source: 'is Previous Year', target: 'هو العام السابق' },
    { source: 'previous year', target: 'العام السابق' },
    { source: 'is not previous year', target: 'ليس العام السابق' },
    { source: '{0} is previous year', target: '{0} هو العام السابق' },
    { source: '{0} is not previous year', target: '{0} ليس العام السابق' },

    { source: 'is Previous X Days', target: 'هو X أيام سابقة' },
    { source: 'previous X days', target: 'X أيام سابقة' },
    { source: 'is not previous X days', target: 'ليس X أيام سابقة' },
    { source: '{0} is previous {1} days', target: '{0} هو {1} أيام سابقة' },
    { source: '{0} is not previous {1} days', target: '{0} ليس {1} أيام سابقة' },

    { source: 'is empty', target: 'فارغ' },
    { source: 'is not empty', target: 'ليس فارغاً' },
    { source: '{0} is empty', target: '{0} فارغ' },
    { source: '{0} is not empty', target: '{0} ليس فارغاً' },

    { source: 'covered by', target: 'مشمول بـ' },
    { source: 'is not covered by', target: 'غير مشمول بـ' },
    { source: '{0} covered by {1}', target: '{0} مشمول بـ {1}' },
    { source: '{0} is not covered by {1}', target: '{0} غير مشمول بـ {1}' },

    // Activity log
    { source: 'No activities found', target: 'لم يتم العثور على أنشطة' },
    {
      source: 'Start to working with data to log activities.',
      target: 'ابدأ العمل بالبيانات لتسجيل الأنشطة.'
    },
    { source: 'All Activity', target: 'جميع الأنشطة' },
    { source: 'Create Record', target: 'إنشاء سجل' },
    { source: 'Update Record', target: 'تحديث سجل' },
    { source: 'Delete Record', target: 'حذف سجل' },
    { source: 'All Members', target: 'جميع الأعضاء' },

    // Collaboration
    { source: 'Timeline', target: 'الجدول الزمني' },
    { source: 'Messages', target: 'الرسائل' },
    { source: 'Activity', target: 'النشاط' },
    { source: 'Start chatting with your team', target: 'ابدأ الدردشة مع فريقك' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'اكتب رسالة حول الصفحة الحالية لتتبع المعلومات الهامة.'
    },
    { source: 'Your Message', target: 'رسالتك' },
    { source: 'Send', target: 'إرسال' },

    // Share
    { source: 'Invite members', target: 'دعوة أعضاء' },
    { source: 'Public share', target: 'مشاركة عامة' },
    { source: 'Sign Up', target: 'التسجيل' },
    { source: 'Members', target: 'أعضاء' },
    { source: 'Invite with Email', target: 'دعوة بالبريد الإلكتروني' },
    { source: 'Invite someone...', target: 'دعوة شخص ما...' },
    { source: 'Send Invite', target: 'إرسال دعوة' },
    {
      source: 'Limit access to your data by user properties',
      target: 'تقييد الوصول إلى بياناتك حسب خصائص المستخدم'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: 'أدخل البريد الإلكتروني للمستخدم الذي ترغب في دعوته للتعاون.'
    },
    { source: 'Copy', target: 'نسخ' },
    { source: 'Invite with Link', target: 'دعوة بالرابط' },
    { source: 'Remove link', target: 'إزالة الرابط' },
    { source: 'Add Invite Link', target: 'إضافة رابط دعوة' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'سيتمكن أي شخص على الإنترنت لديه هذا الرابط من الانضمام إلى الفريق المحدد.'
    },
    { source: 'Pending Invites', target: 'الدعوات المعلقة' },
    { source: 'Cancel invite', target: 'إلغاء الدعوة' },
    { source: 'Active Members', target: 'الأعضاء النشطون' },
    { source: 'Remove member', target: 'إزالة عضو' },
    {
      source: 'You are setting sharing for the current page',
      target: 'أنت تقوم بتعيين المشاركة للصفحة الحالية'
    },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'أنت تقوم بتعيين المشاركة لجميع صفحات تطبيقك.'
    },
    { source: 'Public access link', target: 'رابط الوصول العام' },
    { source: 'Updating public access...', target: 'جارٍ تحديث الوصول العام...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'سيتمكن أي شخص لديه هذا الرابط من عرض الصفحة الحالية. بهذه الطريقة يمكنك أيضًا تضمين الصفحة الحالية في موقع ويب آخر.'
    },
    { source: 'Embed code (IFRAME)', target: 'رمز التضمين (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: 'الصق هذا الرمز في كود HTML لموقعك حيث ترغب في ظهور الصفحة الحالية.'
    },
    { source: 'link', target: 'رابط' },
    { source: 'invited', target: 'مدعو' },
    { source: 'Choose Team', target: 'اختيار فريق' },
    { source: 'App Teams', target: 'فرق التطبيق' },
    { source: 'Built-In Teams', target: 'فرق مدمجة' },
    { source: 'Clear Team', target: 'مسح الفريق' },
    { source: 'Can build application and modify data', target: 'يمكنه بناء التطبيق وتعديل البيانات' },
    { source: 'Can modify data in application', target: 'يمكنه تعديل البيانات في التطبيق' },
    { source: 'Can only view data without modification', target: 'يمكنه عرض البيانات فقط دون تعديل' },
    { source: 'Add Team', target: 'إضافة فريق' },
    { source: 'Edit Team', target: 'تعديل الفريق' },
    { source: 'Adding Team', target: 'جارٍ إضافة فريق' },
    {
      source: 'Keep control over who has access to current App',
      target: 'حافظ على التحكم في من لديه حق الوصول إلى التطبيق الحالي'
    },
    { source: 'Enter Team Name', target: 'أدخل اسم الفريق' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'اكتب اسم الفريق، على سبيل المثال: الدعم، المبيعات، التسويق، إلخ.'
    },
    { source: 'Add a new member to this team.', target: 'أضف عضوًا جديدًا إلى هذا الفريق.' },
    { source: 'Invite new member', target: 'دعوة عضو جديد' },
    { source: 'User', target: 'مستخدم' },
    { source: 'Date Added', target: 'تاريخ الإضافة' },
    { source: 'You', target: 'أنت' },
    { source: 'Edit', target: 'تعديل' },
    { source: 'No users in this team', target: 'لا يوجد مستخدمون في هذا الفريق' },
    { source: 'Page Permissions', target: 'أذونات الصفحة' },
    { source: 'App Permissions', target: 'أذونات التطبيق' },
    { source: 'Properties', target: 'خصائص' },
    { source: 'Page name', target: 'اسم الصفحة' },
    { source: 'Access', target: 'وصول' },
    { source: 'Full Access', target: 'وصول كامل' },
    { source: 'Read Only', target: 'للقراءة فقط' },
    { source: 'No Access', target: 'لا يوجد وصول' },
    { source: 'Read', target: 'قراءة' },
    { source: 'Update', target: 'تحديث' },
    { source: 'Write', target: 'كتابة' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'حذف' },
    { source: 'Custom Access', target: 'وصول مخصص' },
    { source: 'Read, create, update and delete data', target: 'قراءة، إنشاء، تحديث وحذف البيانات' },
    { source: 'Choose allowed operations granularly', target: 'اختر العمليات المسموح بها بدقة' },
    { source: 'Without any access to data', target: 'بدون أي وصول للبيانات' },
    { source: 'Name', target: 'اسم' },
    { source: 'Active', target: 'نشط' },
    { source: 'Settings', target: 'إعدادات' },
    { source: 'Members and Teams', target: 'الأعضاء والفرق' },
    { source: 'App Builder', target: 'منشئ التطبيق' },
    { source: 'Collection Permissions', target: 'أذونات المجموعة' },
    { source: "Grant permissions to app's collection", target: 'منح أذونات لمجموعة التطبيق' },
    { source: 'Collection', target: 'مجموعة' },
    {
      source: 'Limit access to your data by team properties',
      target: 'تقييد الوصول إلى بياناتك حسب خصائص الفريق'
    },
    { source: 'Save Team', target: 'حفظ الفريق' },
    { source: 'Create Team', target: 'إنشاء فريق' },
    { source: 'Value', target: 'قيمة' },
    { source: 'No properties specified', target: 'لم يتم تحديد خصائص' },

    // Navigation
    { source: 'Current App', target: 'التطبيق الحالي' },
    { source: 'Home', target: 'الرئيسية' },

    // Profile
    {
      source: 'We are fetching user data, please, wait...',
      target: 'نحن نجلب بيانات المستخدم، الرجاء الانتظار...'
    },
    { source: 'Profile Settings', target: 'إعدادات الملف الشخصي' },
    { source: 'Basic information about your account.', target: 'معلومات أساسية عن حسابك.' },
    { source: 'Photo', target: 'صورة' },
    { source: 'your photo', target: 'صورتك' },
    { source: 'Change', target: 'تغيير' },
    { source: 'Upload', target: 'تحميل' },
    { source: 'Photo was successfully updated', target: 'تم تحديث الصورة بنجاح' },
    { source: 'Photo was successfully deleted', target: 'تم حذف الصورة بنجاح' },
    { source: 'First Name', target: 'الاسم الأول' },
    { source: 'Last Name', target: 'اسم العائلة' },
    { source: 'Your Email', target: 'بريدك الإلكتروني' },
    { source: 'Email Change', target: 'تغيير البريد الإلكتروني' },
    { source: 'New Email', target: 'بريد إلكتروني جديد' },
    { source: 'Change Email', target: 'تغيير البريد الإلكتروني' },
    { source: 'Check your inbox', target: 'تحقق من بريدك الوارد' },
    { source: 'Confirmation Email was sent to {0}', target: 'تم إرسال بريد إلكتروني للتأكيد إلى {0}' },
    { source: 'Changing Email failed', target: 'فشل تغيير البريد الإلكتروني' },
    { source: 'Password Change', target: 'تغيير كلمة المرور' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target: 'يجب أن تكون كلمة المرور قوية بما يكفي لحماية حسابك، لذا اجعلها 12 حرفًا على الأقل.'
    },
    { source: 'Current Password', target: 'كلمة المرور الحالية' },
    { source: 'New Password', target: 'كلمة مرور جديدة' },
    { source: 'Confirm New Password', target: 'تأكيد كلمة المرور الجديدة' },
    { source: 'Change Password', target: 'تغيير كلمة المرور' },
    {
      source: 'Current password was successfully updated, all other sessions will be logged out shortly',
      target: 'تم تحديث كلمة المرور الحالية بنجاح، سيتم تسجيل خروج جميع الجلسات الأخرى قريبًا'
    },
    { source: 'Saving current password failed', target: 'فشل حفظ كلمة المرور الحالية' },
    { source: 'Short password', target: 'كلمة مرور قصيرة' },
    { source: "Passwords don't match", target: 'كلمات المرور غير متطابقة' },
    { source: 'Personal Preferences', target: 'التفضيلات الشخصية' },
    { source: 'Language', target: 'اللغة' },
    { source: 'Timezone', target: 'المنطقة الزمنية' },
    { source: 'Current time in {0} is', target: 'الوقت الحالي في {0} هو' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'تخصيص تفضيلات إضافية لحسابك.'
    },
    { source: 'News & Proposals', target: 'أخبار ومقترحات' },
    {
      source: 'Subscribe to our updates and proposals.',
      target: 'اشترك في تحديثاتنا ومقترحاتنا.'
    },
    { source: 'Save changes', target: 'حفظ التغييرات' },
    { source: 'Current user was successfully updated', target: 'تم تحديث المستخدم الحالي بنجاح' },
    { source: 'Saving current user failed', target: 'فشل حفظ المستخدم الحالي' },

    // My Apps
    { source: 'Type to search...', target: 'اكتب للبحث...' },
    { source: 'My Apps', target: 'تطبيقاتي' },
    { source: 'New App', target: 'تطبيق جديد' },
    { source: 'Builder', target: 'منشئ' },
    { source: 'App', target: 'تطبيق' },
    { source: 'continue install', target: 'متابعة التثبيت' },
    { source: 'Open builder', target: 'فتح المنشئ' },
    { source: 'View published', target: 'عرض المنشور' },
    { source: 'Delete App', target: 'حذف التطبيق' },
    { source: 'Start from a template', target: 'ابدأ من قالب' },
    { source: 'Preview', target: 'معاينة' },
    { source: 'Contact Support', target: 'اتصل بالدعم' },
    { source: 'Documentation', target: 'الوثائق' },
    { source: 'Feature Requests', target: 'طلبات الميزات' },
    { source: 'See What’s New', target: 'شاهد الجديد' },
    { source: 'Search templates...', target: 'البحث عن قوالب...' },
    { source: 'any', target: 'أي' },
    { source: 'more', target: 'المزيد' },
    { source: 'Choose Data Source', target: 'اختر مصدر البيانات' },
    { source: 'works with 30+ data sources', target: 'يعمل مع أكثر من 30 مصدر بيانات' },
    { source: 'Use this template', target: 'استخدم هذا القالب' },
    { source: 'stores data in Jet Tables', target: 'يخزن البيانات في جداول جيت' },
    { source: 'New Data', target: 'بيانات جديدة' },
    { source: 'using {0}', target: 'باستخدام {0}' },
    { source: "Can't find resource you're looking for?", target: 'لا يمكنك العثور على المورد الذي تبحث عنه؟' },
    { source: 'Admin Panel', target: 'لوحة الإدارة' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'عمليات القائمة والإنشاء والتحديث (CRUD) فوق بياناتك'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target: 'قم ببناء لوحة تحكم إدارية مخصصة بناءً على أي قواعد بيانات وتطبيقات وواجهات برمجة تطبيقات مثل Stripe و Twilio و GraphQL.'
    },
    { source: 'All Integrations', target: 'جميع التكاملات' },
    { source: 'Databases', target: 'قواعد البيانات' },
    { source: 'APIs', target: 'واجهات برمجة التطبيقات' },
    { source: 'Frameworks', target: 'الأطر' },
    { source: 'Storages', target: 'وحدات التخزين' },

    // Sign In
    { source: 'Good morning', target: 'صباح الخير' },
    { source: 'Good afternoon', target: 'مساء الخير' },
    { source: 'Good evening', target: 'مساء الخير' },
    { source: 'Sign In', target: 'تسجيل الدخول' },
    { source: 'Welcome Back.', target: 'مرحبًا بعودتك.' },
    { source: 'Sign in with {0}', target: 'تسجيل الدخول باستخدام {0}' },
    { source: 'or login with', target: 'أو تسجيل الدخول باستخدام' },
    { source: 'Enter E-mail', target: 'أدخل البريد الإلكتروني' },
    { source: 'Enter password', target: 'أدخل كلمة المرور' },
    { source: 'Login', target: 'تسجيل الدخول' },
    { source: 'Create new account', target: 'إنشاء حساب جديد' },
    { source: 'Forgot my password', target: 'نسيت كلمة المرور' },
    { source: 'required', target: 'مطلوب' },
    { source: 'incorrect Email', target: 'بريد إلكتروني غير صحيح' },
    { source: 'Minimum password length {0}', target: 'الحد الأدنى لطول كلمة المرور {0}' },
    { source: 'Unable to Sign In', target: 'غير قادر على تسجيل الدخول' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'ابدأ <span class="auth-form__accent">مجاناً اليوم</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target: 'لا يلزم وجود بطاقة. ستحصل على جميع الوظائف المتقدمة مجانًا خلال فترة التجربة الاحترافية لمدة 14 يومًا.'
    },
    { source: 'Enter First Name', target: 'أدخل الاسم الأول' },
    { source: 'Enter Last Name (optional)', target: 'أدخل اسم العائلة (اختياري)' },
    { source: 'Enter Email', target: 'أدخل البريد الإلكتروني' },
    { source: 'Password', target: 'كلمة المرور' },
    { source: 'Repeat Password', target: 'تأكيد كلمة المرور' },
    {
      source: 'By signing in you’re okay with our',
      target: 'بتسجيل الدخول أنت توافق على'
    },
    {
      source: 'Creating an account means you’re okay with our',
      target: 'إنشاء حساب يعني أنك توافق على'
    },
    { source: 'Terms of Service', target: 'شروط الخدمة' },
    { source: 'Privacy Policy', target: 'سياسة الخصوصية' },
    { source: 'and', target: 'و' },
    { source: 'Create your free account', target: 'إنشاء حسابك المجاني' },
    { source: 'Already have an account', target: 'لديك حساب بالفعل' },
    { source: 'Unable to Sign Up', target: 'غير قادر على التسجيل' },

    // Restore password
    { source: 'Reset your password', target: 'إعادة تعيين كلمة المرور الخاصة بك' },
    { source: 'Email Address', target: 'عنوان البريد الإلكتروني' },
    { source: 'Reset password', target: 'إعادة تعيين كلمة المرور' },
    { source: 'Return to Sign In', target: 'العودة إلى تسجيل الدخول' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'الرجاء التحقق من بريدك الإلكتروني – <strong>{0}</strong>. لقد أرسلنا رابط التحقق الذي يجب عليك اتباعه لتغيير كلمة المرور الخاصة بك.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be at least 8 characters.',
      target: 'اكتملت تقريبًا، فقط أدخل كلمة المرور الجديدة أدناه. <br>يجب أن تكون 8 أحرف على الأقل.'
    },
    { source: 'Reset password & Sign In', target: 'إعادة تعيين كلمة المرور وتسجيل الدخول' },
    { source: 'Unable to Send Code', target: 'غير قادر على إرسال الرمز' },
    { source: 'Unable to Change Password', target: 'غير قادر على تغيير كلمة المرور' },

    // Email Verification
    { source: 'Email Verification', target: 'التحقق من البريد الإلكتروني' },
    { source: 'Resend verification code', target: 'إعادة إرسال رمز التحقق' },
    { source: 'Verification email sent', target: 'تم إرسال بريد التحقق' },
    { source: 'Your Email is now verified', target: 'تم التحقق من بريدك الإلكتروني الآن' },
    { source: 'Request is incorrect', target: 'الطلب غير صحيح' },

    // Invites
    {
      source: 'Join <span class="auth-form__accent">{0}</span>',
      target: 'انضم إلى <span class="auth-form__accent">{0}</span>'
    },
    {
      source: '<strong>{0}</strong> has invited you to join <strong>{1}</strong>',
      target: 'لقد دعاك <strong>{0}</strong> للانضمام إلى <strong>{1}</strong>'
    },
    {
      source: 'Someone has invited you to join <strong>{0}</strong>',
      target: 'لقد دعاك شخص ما للانضمام إلى <strong>{0}</strong>'
    },
    {
      source: 'You are joining <strong>{0}</strong> using invite link',
      target: 'أنت تنضم إلى <strong>{0}</strong> باستخدام رابط الدعوة'
    },
    { source: 'Join', target: 'انضمام' },
    { source: 'Go to home page', target: 'انتقال إلى الصفحة الرئيسية' },
    { source: 'Invite link is wrong', target: 'رابط الدعوة خاطئ' },
    {
      source:
        'Looks like your invitation link has expired or maybe you have followed the wrong link. Please try to ask to invite your again.',
      target:
        'يبدو أن رابط دعوتك قد انتهت صلاحيته أو ربما اتبعت الرابط الخطأ. يرجى محاولة الطلب لدعوتك مرة أخرى.'
    },
    {
      source: 'Unfortunately we failed to load information about this invitation',
      target: 'للأسف، فشلنا في تحميل معلومات حول هذه الدعوة'
    },

    // Users & Teams
    { source: 'Members of {0}', target: 'أعضاء {0}' },
    { source: 'How to get started', target: 'كيف تبدأ' },
    { source: 'Users API', target: 'واجهة برمجة تطبيقات المستخدمين' },
    { source: 'Teams API', target: 'واجهة برمجة تطبيقات الفرق' },
    { source: 'Invite Member', target: 'دعوة عضو' },
    { source: 'Add User property', target: 'إضافة خاصية مستخدم' },
    { source: 'Add Team property', target: 'إضافة خاصية فريق' },
    { source: 'Edit property', target: 'تعديل الخاصية' },
    { source: 'Delete property', target: 'حذف الخاصية' },
    { source: 'Users', target: 'المستخدمون' },
    { source: 'Teams', target: 'الفرق' },
    { source: 'Search members', target: 'البحث عن أعضاء' },
    { source: 'Search teams', target: 'البحث عن فرق' },
    { source: '{0} pages', target: '{0} صفحات' },
    { source: 'No members', target: 'لا يوجد أعضاء' }
]
};

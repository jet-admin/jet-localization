import { Locale } from './locale';

export const locale: Locale = {
  name: 'arabic',
  language: 'ar',
  items: [
    // General
    { source: 'Save', target: 'حفظ' },
    { source: 'Create', target: 'إنشاء' },
    { source: 'Duplicating', target: 'جاري التكرار' },
    { source: 'Duplicate', target: 'تكرار' },
    { source: 'Mass Edit', target: 'تعديل جماعي' },
    { source: 'Export', target: 'تصدير' },
    { source: 'Import', target: 'استيراد' },
    { source: 'Delete', target: 'حذف' },
    { source: 'Continue', target: 'متابعة' },
    { source: 'Submit', target: 'إرسال' },
    { source: 'Cancel', target: 'إلغاء' },
    { source: 'Loading', target: 'جاري التحميل' },
    { source: 'Please wait...', target: 'يرجى الانتظار...' },
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
      target: 'ليس لديك الصلاحيات الكافية للوصول إلى هذه الصفحة'
    },
    { source: 'Are you sure want to close?', target: 'هل أنت متأكد أنك تريد الإغلاق؟' },
    { source: 'Close', target: 'إغلاق' },

    // Actions
    { source: 'Action executed', target: 'تم تنفيذ الإجراء' },
    { source: 'Action executed successfully', target: 'تم تنفيذ الإجراء بنجاح' },
    { source: 'Action failed', target: 'فشل تنفيذ الإجراء' },
    {
      source: "You don't have permission for run this operation",
      target: 'ليس لديك الصلاحية لتشغيل هذه العملية'
    },
    { source: 'Specify parameters', target: 'تحديد المعايير' },
    { source: 'Executing action', target: 'جاري تنفيذ الإجراء' },
    { source: 'You are executing <strong>{0}</strong>', target: 'أنت تقوم بتنفيذ <strong>{0}</strong>' },
    { source: 'Please fill in the parameters below.', target: 'يرجى تعبئة المعايير أدناه.' },
    { source: 'Execute', target: 'تنفيذ' },
    { source: 'Executing', target: 'جاري التنفيذ' },
    { source: 'Finished', target: 'انتهى' },
    { source: 'Done', target: 'تم' },

    // Export
    { source: 'Records Export', target: 'تصدير السجلات' },
    { source: 'Downloading records data as a file', target: 'جاري تحميل بيانات السجلات كملف' },
    { source: 'Choose format', target: 'اختر الصيغة' },
    { source: 'Number of exporting records', target: 'عدد السجلات المراد تصديرها' },
    { source: { label: 'Export', context: 'submit' }, target: 'تصدير' },
    { source: 'Exporting', target: 'جاري التصدير' },
    { source: 'Export completed', target: 'اكتمل التصدير' },
    { source: 'Failed to export', target: 'فشل التصدير' },

    // Components
    { source: 'optional', target: 'اختياري' },
    { source: 'choose', target: 'اختر' },
    { source: 'Clear value', target: 'مسح القيمة' },
    { source: 'loading...', target: 'جاري التحميل...' },
    { source: 'Nothing found', target: 'لم يتم العثور على شيء' },
    { source: 'Search...', target: 'بحث...' },
    { source: 'Enter at least {0} characters', target: 'أدخل {0} أحرف على الأقل' },
    { source: 'No options', target: 'لا توجد خيارات' },
    { source: 'Drop files here or', target: 'أفلت الملفات هنا أو' },
    { source: 'Upload new', target: 'رفع جديد' },
    { source: 'Clear', target: 'مسح' },
    { source: 'Download', target: 'تحميل' },
    { source: 'Choose file', target: 'اختر ملفاً' },
    { source: 'Choose files', target: 'اختر ملفات' },
    { source: 'Scan with Camera', target: 'المسح بالكاميرا' },
    { source: 'Scan Image file', target: 'مسح ملف صورة' },
    { source: 'Choose camera', target: 'اختر الكاميرا' },
    { source: 'Stop scanning', target: 'إيقاف المسح' },
    { source: 'Scan again', target: 'المسح مجدداً' },
    { source: 'Use this scan', target: 'استخدام هذا المسح' },
    { source: 'Failed to scan', target: 'فشل المسح الضوئي' },
    {
      source: 'Code failed to scan, please try another image',
      target: 'فشل مسح الكود، يرجى تجربة صورة أخرى'
    },
    { source: 'current', target: 'الحالي' },
    { source: 'Day', target: 'يوم' },
    { source: 'Week', target: 'أسبوع' },
    { source: 'Month', target: 'شهر' },
    { source: 'Year', target: 'سنة' },
    { source: 'Today', target: 'اليوم' },
    { source: 'Daily', target: 'يومياً' },
    { source: 'Weekly', target: 'أسبوعياً' },
    { source: 'Monthly', target: 'شهرياً' },
    { source: 'Quarterly', target: 'ربع سنوي' },
    { source: 'Yearly', target: 'سنوياً' },
    { source: 'Hourly', target: 'كل ساعة' },
    { source: 'Minutely', target: 'كل دقيقة' },
    { source: 'Since', target: 'منذ' },
    { source: 'Before', target: 'قبل' },
    { source: 'Between', target: 'بين' },
    { source: 'From date', target: 'من تاريخ' },
    { source: 'To date', target: 'إلى تاريخ' },
    { source: 'Coordinates', target: 'الإحداثيات' },
    { source: 'Latitude', target: 'خط العرض' },
    { source: 'Longitude', target: 'خط الطول' },
    { source: 'Default color', target: 'اللون الافتراضي' },
    { source: 'not specified', target: 'غير محدد' },
    { source: 'Sign using your finger or pointer', target: 'التوقيع باستخدام إصبعك أو المؤشر' },

    // List components
    { source: 'Filter', target: 'تصفية' },
    { source: 'Filter by field', target: 'تصفية حسب الحقل' },
    { source: 'Filter by...', target: 'تصفية حسب...' },
    { source: 'Back', target: 'رجوع' },
    { source: 'Back to {0} fields', target: 'العودة إلى حقول {0}' },
    { source: 'Choose {0} from list', target: 'اختر {0} من القائمة' },
    { source: '{0} fields', target: 'حقول {0}' },
    { source: '{0} relationships', target: 'علاقات {0}' },
    { source: 'Aggregate {0}', target: 'تجميع {0}' },
    { source: 'No fields to select', target: 'لا توجد حقول للتحديد' },
    { source: 'Enter value...', target: 'أدخل قيمة...' },
    { source: 'Exclude', target: 'استبعاد' },
    { source: 'Actions', target: 'إجراءات' },
    { source: 'Search', target: 'بحث' },
    { source: 'Sort 1 → 9', target: 'فرز 1 ← 9' },
    { source: 'Sort 9 → 1', target: 'فرز 9 ← 1' },
    { source: 'Sort A → Z', target: 'فرز أ ← ي' },
    { source: 'Sort Z → A', target: 'فرز ي ← أ' },
    { source: 'Refresh automatically', target: 'تحديث تلقائي' },
    { source: 'All', target: 'الكل' },
    { source: 'Selected', target: 'المحدد' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'للسف، لم يتم العثور على أي {0} يطابق بحثك'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'جاري جلب {0}، يرجى الانتظار...' },
    { source: 'Add filter', target: 'إضافة فلتر' },
    { source: 'Delete this filter', target: 'حذف هذا الفلتر' },
    { source: 'Toggle ordering', target: 'تبديل الترتيب' },
    { source: 'Not configured', target: 'غير مهيأ' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'للأسف، لم يتم تهيئة هذا المكون بعد'
    },
    { source: 'records', target: 'سجلات' },
    { source: '{0} items', target: 'عناصر {0}' },

    // Menu
    { source: 'Users & Teams', target: 'المستخدمون والفرق' },
    { source: 'Billing', target: 'الفواتير' },
    { source: 'Billing & Plans', target: 'الفواتير والخطط' },
    { source: 'API keys', target: 'مفاتيح API' },
    { source: 'Dark Mode', target: 'الوضع الداكن' },
    { source: 'Light Mode', target: 'الوضع الفاتح' },
    { source: 'Disable Staff', target: 'تعطيل الموظفين' },
    { source: 'Enable Staff', target: 'تفعيل الموظفين' },
    { source: 'Manage Templates', target: 'إدارة القوالب' },
    { source: 'Logout', target: 'تسجيل الخروج' },
    { source: 'Activity Log', target: 'سجل الأنشطة' },
    { source: 'Collaborations', target: 'التعاون والمشاركات' },
    { source: 'Open Visual Builder', target: 'فتح الباني المرئي' },

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

    { source: 'less than', target: 'أصغر من' },
    { source: 'is not less than', target: 'ليس أصغر من' },
    { source: '{0} is less than {1}', target: '{0} أصغر من {1}' },
    { source: '{0} is not less than {1}', target: '{0} ليس أصغر من {1}' },

    { source: 'less than or equals', target: 'أصغر من أو يساوي' },
    { source: 'is not less than or equals', target: 'ليس أصغر من أو يساوي' },
    { source: '{0} is less than or equals {1}', target: '{0} أصغر من أو يساوي {1}' },
    { source: '{0} is not less than or equals {1}', target: '{0} ليس أصغر من أو يساوي {1}' },

    { source: 'one of', target: 'واحد من' },
    { source: 'is one of', target: 'هو واحد من' },
    { source: 'is not one of', target: 'ليس واحداً من' },
    { source: '{0} is one of {1}', target: '{0} هو واحد من {1}' },
    { source: '{0} is not one of {1}', target: '{0} ليس واحداً من {1}' },

    { source: 'is null', target: 'فارغ (Null)' },
    { source: 'is not null', target: 'ليس فارغاً (Not Null)' },
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

    { source: 'is Today', target: 'اليوم' },
    { source: 'today', target: 'اليوم' },
    { source: 'is not today', target: 'ليس اليوم' },
    { source: '{0} is today', target: '{0} هو اليوم' },
    { source: '{0} is not today', target: '{0} ليس اليوم' },

    { source: 'is Yesterday', target: 'أمس' },
    { source: 'yesterday', target: 'أمس' },
    { source: 'is not yesterday', target: 'ليس أمس' },
    { source: '{0} is yesterday', target: '{0} كان أمس' },
    { source: '{0} is not yesterday', target: '{0} لم يكن أمس' },

    { source: 'is Last Week', target: 'الأسبوع الماضي' },
    { source: 'last week', target: 'الأسبوع الماضي' },
    { source: 'is not last week', target: 'ليس الأسبوع الماضي' },
    { source: '{0} is last week', target: '{0} كان الأسبوع الماضي' },
    { source: '{0} is not last week', target: '{0} لم يكن الأسبوع الماضي' },

    { source: 'is Last Month', target: 'الشهر الماضي' },
    { source: 'last month', target: 'الشهر الماضي' },
    { source: 'is not last month', target: 'ليس الشهر الماضي' },
    { source: '{0} is last month', target: '{0} كان الشهر الماضي' },
    { source: '{0} is not last month', target: '{0} لم يكن الشهر الماضي' },

    { source: 'is Last Quarter', target: 'الربع السنوي الماضي' },
    { source: 'last quarter', target: 'الربع السنوي الماضي' },
    { source: 'is not last quarter', target: 'ليس الربع السنوي الماضي' },
    { source: '{0} is last quarter', target: '{0} كان الربع الماضي' },
    { source: '{0} is not last quarter', target: '{0} لم يكن الربع الماضي' },

    { source: 'is Last Year', target: 'العام الماضي' },
    { source: 'last year', target: 'العام الماضي' },
    { source: 'is not last year', target: 'ليس العام الماضي' },
    { source: '{0} is last year', target: '{0} كان العام الماضي' },
    { source: '{0} is not last year', target: '{0} لم يكن العام الماضي' },

    { source: 'is Last X Days', target: 'آخر X من الأيام' },
    { source: 'last X days', target: 'آخر X من الأيام' },
    { source: 'is not last X days', target: 'ليس آخر X من الأيام' },
    { source: '{0} is last {1} days', target: '{0} هو آخر {1} أيام' },
    { source: '{0} is not last {1} days', target: '{0} ليس آخر {1} أيام' },

    { source: 'is Current Week', target: 'الأسبوع الحالي' },
    { source: 'current week', target: 'الأسبوع الحالي' },
    { source: 'is not current week', target: 'ليس الأسبوع الحالي' },
    { source: '{0} is current week', target: '{0} هو الأسبوع الحالي' },
    { source: '{0} is not current week', target: '{0} ليس الأسبوع الحالي' },

    { source: 'is Current Month', target: 'الشهر الحالي' },
    { source: 'current month', target: 'الشهر الحالي' },
    { source: 'is not current month', target: 'ليس الشهر الحالي' },
    { source: '{0} is current month', target: '{0} هو الشهر الحالي' },
    { source: '{0} is not current month', target: '{0} ليس الشهر الحالي' },

    { source: 'is Current Quarter', target: 'الربع السنوي الحالي' },
    { source: 'current quarter', target: 'الربع السنوي الحالي' },
    { source: 'is not current quarter', target: 'ليس الربع السنوي الحالي' },
    { source: '{0} is current quarter', target: '{0} هو الربع الحالي' },
    { source: '{0} is not current quarter', target: '{0} ليس الربع الحالي' },

    { source: 'is Current Year', target: 'العام الحالي' },
    { source: 'current year', target: 'العام الحالي' },
    { source: 'is not current year', target: 'ليس العام الحالي' },
    { source: '{0} is current year', target: '{0} هو العام الحالي' },
    { source: '{0} is not current year', target: '{0} ليس العام الحالي' },

    { source: 'is Previous Week', target: 'الأسبوع السابق' },
    { source: 'previous week', target: 'الأسبوع السابق' },
    { source: 'is not previous week', target: 'ليس الأسبوع السابق' },
    { source: '{0} is previous week', target: '{0} هو الأسبوع السابق' },
    { source: '{0} is not previous week', target: '{0} ليس الأسبوع السابق' },

    { source: 'is Previous Month', target: 'الشهر السابق' },
    { source: 'previous month', target: 'الشهر السابق' },
    { source: 'is not previous month', target: 'ليس الشهر السابق' },
    { source: '{0} is previous month', target: '{0} هو الشهر السابق' },
    { source: '{0} is not previous month', target: '{0} ليس الشهر السابق' },

    { source: 'is Previous Quarter', target: 'الربع السابق' },
    { source: 'previous quarter', target: 'الربع السابق' },
    { source: 'is not previous quarter', target: 'ليس الربع السابق' },
    { source: '{0} is previous quarter', target: '{0} هو الربع السابق' },
    { source: '{0} is not previous quarter', target: '{0} ليس الربع السابق' },

    { source: 'is Previous Year', target: 'العام السابق' },
    { source: 'previous year', target: 'العام السابق' },
    { source: 'is not previous year', target: 'ليس العام السابق' },
    { source: '{0} is previous year', target: '{0} هو العام السابق' },
    { source: '{0} is not previous year', target: '{0} ليس العام السابق' },

    { source: 'is Previous X Days', target: 'X الأيام السابقة' },
    { source: 'previous X days', target: 'X الأيام السابقة' },
    { source: 'is not previous X days', target: 'ليس X الأيام السابقة' },
    { source: '{0} is previous {1} days', target: '{0} هو قبل {1} أيام' },
    { source: '{0} is not previous {1} days', target: '{0} ليس قبل {1} أيام' },

    { source: 'is empty', target: 'فارغ' },
    { source: 'is not empty', target: 'ليس فارغاً' },
    { source: '{0} is empty', target: '{0} فارغ' },
    { source: '{0} is not empty', target: '{0} ليس فارغاً' },

    { source: 'covered by', target: 'مغطى بواسطة' },
    { source: 'is not covered by', target: 'غير مغطى بواسطة' },
    { source: '{0} covered by {1}', target: '{0} مغطى بواسطة {1}' },
    { source: '{0} is not covered by {1}', target: '{0} غير مغطى بواسطة {1}' },

    // Activity log
    { source: 'No activities found', target: 'لم يتم العثور على أنشطة' },
    {
      source: 'Start to working with data to log activities.',
      target: 'ابدأ العمل على البيانات لتسجيل الأنشطة.'
    },
    { source: 'All Activity', target: 'جميع الأنشطة' },
    { source: 'Create Record', target: 'إنشاء سجل' },
    { source: 'Update Record', target: 'تحديث سجل' },
    { source: 'Delete Record', target: 'حذف سجل' },
    { source: 'All Members', target: 'جميع الأعضاء' },

    // Collaboration
    { source: 'Timeline', target: 'الخط الزمني' },
    { source: 'Messages', target: 'الرسائل' },
    { source: 'Activity', target: 'النشاط' },
    { source: 'Start chatting with your team', target: 'ابدأ الدردشة مع فريقك' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'اكتب رسالة حول الصفحة الحالية لمتابعة المعلومات المهمة.'
    },
    { source: 'Your Message', target: 'رسالتك' },
    { source: 'Send', target: 'إرسال' },

    // Share
    { source: 'Invite members', target: 'دعوة أعضاء' },
    { source: 'Public share', target: 'مشاركة عامة' },
    { source: 'Sign Up', target: 'تسجيل جديد' },
    { source: 'Members', target: 'الأعضاء' },
    { source: 'Invite with Email', target: 'الدعوة عبر البريد الإلكتروني' },
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
    { source: 'Invite with Link', target: 'الدعوة عبر الرابط' },
    { source: 'Remove link', target: 'إزالة الرابط' },
    { source: 'Add Invite Link', target: 'إضافة رابط دعوة' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'أي شخص على الإنترنت لديه هذا الرابط سيكون قادراً على الانضمام للفريق المحدد.'
    },
    { source: 'Pending Invites', target: 'دعوات معلقة' },
    { source: 'Cancel invite', target: 'إلغاء الدعوة' },
    { source: 'Active Members', target: 'الأعضاء النشطون' },
    { source: 'Remove member', target: 'إزالة العضو' },
    {
      source: 'You are setting sharing for the current page',
      target: 'أنت تقوم بإعداد المشاركة للصفحة الحالية'
    },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'أنت تقوم بإعداد المشاركة لجميع صفحات تطبيقك.'
    },
    { source: 'Public access link', target: 'رابط الوصول العام' },
    { source: 'Updating public access...', target: 'جاري تحديث الوصول العام...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target: 'أي شخص لديه هذا الرابط سيكون قادراً على عرض الصفحة الحالية. بهذه الطريقة يمكنك أيضاً تضمين الصفحة في موقع آخر.'
    },
    { source: 'Embed code (IFRAME)', target: 'كود التضمين (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: 'قم بلصق هذا الكود داخل كود HTML لموقعك في المكان الذي تريد أن تظهر فيه الصفحة الحالية.'
    },
    { source: 'link', target: 'رابط' },
    { source: 'invited', target: 'تمت دعوته' },
    { source: 'Choose Team', target: 'اختر الفريق' },
    { source: 'App Teams', target: 'فرق التطبيق' },
    { source: 'Built-In Teams', target: 'الفرق المدمجة' },
    { source: 'Clear Team', target: 'مسح الفريق' },
    { source: 'Can build application and modify data', target: 'يمكنه بناء التطبيق وتعديل البيانات' },
    { source: 'Can modify data in application', target: 'يمكنه تعديل البيانات في التطبيق' },
    { source: 'Can only view data without modification', target: 'يمكنه فقط عرض البيانات دون تعديلها' },
    { source: 'Add Team', target: 'إضافة فريق' },
    { source: 'Edit Team', target: 'تعديل الفريق' },
    { source: 'Adding Team', target: 'جاري إضافة الفريق' },
    {
      source: 'Keep control over who has access to current App',
      target: 'حافظ على التحكم فيمن يمكنه الوصول إلى التطبيق الحالي'
    },
    { source: 'Enter Team Name', target: 'أدخل اسم الفريق' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'اكتب اسم الفريق، مثل: الدعم، المبيعات، التسويق، إلخ.'
    },
    { source: 'Add a new member to this team.', target: 'إضافة عضو جديد إلى هذا الفريق.' },
    { source: 'Invite new member', target: 'دعوة عضو جديد' },
    { source: 'User', target: 'المستخدم' },
    { source: 'Date Added', target: 'تاريخ الإضافة' },
    { source: 'You', target: 'أنت' },
    { source: 'Edit', target: 'تعديل' },
    { source: 'No users in this team', target: 'لا يوجد مستخدمون في هذا الفريق' },
    { source: 'Page Permissions', target: 'صلاحيات الصفحة' },
    { source: 'App Permissions', target: 'صلاحيات التطبيق' },
    { source: 'Properties', target: 'الخصائص' },
    { source: 'Page name', target: 'اسم الصفحة' },
    { source: 'Access', target: 'الوصول' },
    { source: 'Full Access', target: 'وصول كامل' },
    { source: 'Read Only', target: 'قراءة فقط' },
    { source: 'No Access', target: 'بلا وصول' },
    { source: 'Read', target: 'قراءة' },
    { source: 'Update', target: 'تحديث' },
    { source: 'Write', target: 'كتابة' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'حذف' },
    { source: 'Custom Access', target: 'وصول مخصص' },
    { source: 'Read, create, update and delete data', target: 'قراءة، إنشاء، تحديث وحذف البيانات' },
    { source: 'Choose allowed operations granularly', target: 'اختر العمليات المسموح بها بالتفصيل' },
    { source: 'Without any access to data', target: 'بدون أي وصول للبيانات' },
    { source: 'Name', target: 'الاسم' },
    { source: 'Active', target: 'نشط' },
    { source: 'Settings', target: 'الإعدادات' },
    { source: 'Members and Teams', target: 'الأعضاء والفرق' },
    { source: 'App Builder', target: 'باني التطبيق' },
    { source: 'Collection Permissions', target: 'صلاحيات المجموعات (Collection)' },
    { source: "Grant permissions to app's collection", target: 'منح الصلاحيات لمجموعات التطبيق' },
    { source: 'Collection', target: 'المجموعة (Collection)' },
    {
      source: 'Limit access to your data by team properties',
      target: 'تقييد الوصول إلى بياناتك حسب خصائص الفريق'
    },
    { source: 'Save Team', target: 'حفظ الفريق' },
    { source: 'Create Team', target: 'إنشاء فريق' },
    { source: 'Value', target: 'القيمة' },
    { source: 'No properties specified', target: 'لم يتم تحديد خصائص' },

    // Navigation
    { source: 'Current App', target: 'التطبيق الحالي' },
    { source: 'Home', target: 'الرئيسية' },

    // Profile
    {
      source: 'We are fetching user data, please, wait...',
      target: 'جاري جلب بيانات المستخدم، يرجى الانتظار...'
    },
    { source: 'Profile Settings', target: 'إعدادات الملف الشخصي' },
    { source: 'Basic information about your account.', target: 'معلومات أساسية حول حسابك.' },
    { source: 'Photo', target: 'الصورة' },
    { source: 'your photo', target: 'صورتك' },
    { source: 'Change', target: 'تغيير' },
    { source: 'Upload', target: 'رفع' },
    { source: 'Photo was successfully updated', target: 'تم تحديث الصورة بنجاح' },
    { source: 'Photo was successfully deleted', target: 'تم حذف الصورة بنجاح' },
    { source: 'First Name', target: 'الاسم الأول' },
    { source: 'Last Name', target: 'الاسم الأخير' },
    { source: 'Your Email', target: 'بريدك الإلكتروني' },
    { source: 'Email Change', target: 'تغيير البريد الإلكتروني' },
    { source: 'New Email', target: 'البريد الإلكتروني الجديد' },
    { source: 'Change Email', target: 'تغيير البريد' },
    { source: 'Check your inbox', target: 'تفقد صندوق الوارد الخاص بك' },
    { source: 'Confirmation Email was sent to {0}', target: 'تم إرسال بريد التأكيد إلى {0}' },
    { source: 'Changing Email failed', target: 'فشل تغيير البريد الإلكتروني' },
    { source: 'Password Change', target: 'تغيير كلمة المرور' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target: 'يجب أن تكون كلمة المرور قوية بما يكفي لحماية حسابك، لذا اجعلها بطول 12 حرفاً على الأقل.'
    },
    { source: 'Current Password', target: 'كلمة المرور الحالية' },
    { source: 'New Password', target: 'كلمة المرور الجديدة' },
    { source: 'Confirm New Password', target: 'تأكيد كلمة المرور الجديدة' },
    { source: 'Change Password', target: 'تغيير كلمة المرور' },
    {
      source: 'Current password was successfully updated, all other sessions will be logged out shortly',
      target: 'تم تحديث كلمة المرور الحالية بنجاح، وسيتم تسجيل الخروج من الجلسات الأخرى قريباً'
    },
    { source: 'Saving current password failed', target: 'فشل حفظ كلمة المرور الحالية' },
    { source: 'Short password', target: 'كلمة المرور قصيرة' },
    { source: "Passwords don't match", target: 'كلمات المرور غير متطابقة' },
    { source: 'Personal Preferences', target: 'التفضيلات الشخصية' },
    { source: 'Language', target: 'اللغة' },
    { source: 'Timezone', target: 'المنطقة الزمنية' },
    { source: 'Current time in {0} is', target: 'الوقت الحالي في {0} هو' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'تخصيص تفضيلات إضافية لحسابك.'
    },
    { source: 'News & Proposals', target: 'الأخبار والمقترحات' },
    {
      source: 'Subscribe to our updates and proposals.',
      target: 'الاشتراك في التحديثات والمقترحات الخاصة بنا.'
    },
    { source: 'Save changes', target: 'حفظ التغييرات' },
    { source: 'Current user was successfully updated', target: 'تم تحديث المستخدم الحالي بنجاح' },
    { source: 'Saving current user failed', target: 'فشل حفظ المستخدم الحالي' },

    // My Apps
    { source: 'Type to search...', target: 'اكتب للبحث...' },
    { source: 'My Apps', target: 'تطبيقاتي' },
    { source: 'New App', target: 'تطبيق جديد' },
    { source: 'Builder', target: 'الباني (Builder)' },
    { source: 'App', target: 'تطبيق' },
    { source: 'continue install', target: 'متابعة التثبيت' },
    { source: 'Open builder', target: 'فتح الباني' },
    { source: 'View published', target: 'عرض المنشور' },
    { source: 'Delete App', target: 'حذف التطبيق' },
    { source: 'Start from a template', target: 'البدء من قالب جاهز' },
    { source: 'Preview', target: 'معاينة' },
    { source: 'Contact Support', target: 'الاتصال بالدعم' },
    { source: 'Documentation', target: 'التوثيق المستندي' },
    { source: 'Feature Requests', target: 'طلبات الميزات' },
    { source: 'See What’s New', target: 'شاهد ما هو جديد' },
    { source: 'Search templates...', target: 'بحث عن قوالب...' },
    { source: 'any', target: 'أي' },
    { source: 'more', target: 'المزيد' },
    { source: 'Choose Data Source', target: 'اختر مصدر البيانات' },
    { source: 'works with 30+ data sources', target: 'يعمل مع أكثر من 30 مصدراً للبيانات' },
    { source: 'Use this template', target: 'استخدم هذا القالب' },
    { source: 'stores data in Jet Tables', target: 'يخزن البيانات في جداول جيت (Jet Tables)' },
    { source: 'New Data', target: 'بيانات جديدة' },
    { source: 'using {0}', target: 'باستخدام {0}' },
    { source: "Can't find resource you're looking for?", target: 'لم تجد المصدر الذي تبحث عنه؟' },
    { source: 'Admin Panel', target: 'لوحة التحكم' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'عمليات العرض، الإنشاء، والتحديث (CRUD) على بياناتك'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target: 'ابنِ لوحة تحكم مخصصة بناءً على أي قواعد بيانات، تطبيقات وواجهات برمجية مثل Stripe و Twilio و GraphQL.'
    },
    { source: 'All Integrations', target: 'جميع التكاملات' },
    { source: 'Databases', target: 'قواعد البيانات' },
    { source: 'APIs', target: 'الواجهات البرمجية (APIs)' },
    { source: 'Frameworks', target: 'إطارات العمل (Frameworks)' },
    { source: 'Storages', target: 'وحدات التخزين' },

    // Sign In
    { source: 'Good morning', target: 'صباح الخير' },
    { source: 'Good afternoon', target: 'مساء الخير' },
    { source: 'Good evening', target: 'مساء الخير' },
    { source: 'Sign In', target: 'تسجيل الدخول' },
    { source: 'Welcome Back.', target: 'مرحباً بك مجدداً.' },
    { source: 'Sign in with {0}', target: 'تسجيل الدخول بواسطة {0}' },
    { source: 'or login with', target: 'أو تسجيل الدخول عبر' },
    { source: 'Enter E-mail', target: 'أدخل البريد الإلكتروني' },
    { source: 'Enter password', target: 'أدخل كلمة المرور' },
    { source: 'Login', target: 'تسجيل الدخول' },
    { source: 'Create new account', target: 'إنشاء حساب جديد' },
    { source: 'Forgot my password', target: 'نسيت كلمة المرور' },
    { source: 'required', target: 'مطلوب' },
    { source: 'incorrect Email', target: 'البريد الإلكتروني غير صحيح' },
    { source: 'Minimum password length {0}', target: 'الحد الأدنى لطول كلمة المرور هو {0}' },
    { source: 'Unable to Sign In', target: 'تعذر تسجيل الدخول' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'ابدأ الآن <span class="auth-form__accent">مجاناً اليوم</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target: 'لا يتطلب بطاقة ائتمان. ستحصل على كافة الميزات المتقدمة مجاناً خلال الفترة التجريبية الاحترافية لمدة 14 يوماً.'
    },
    { source: 'Enter First Name', target: 'أدخل الاسم الأول' },
    { source: 'Enter Last Name (optional)', target: 'أدخل الاسم الأخير (اختياري)' },
    { source: 'Enter Email', target: 'أدخل البريد الإلكتروني' },
    { source: 'Password', target: 'كلمة المرور' },
    { source: 'Repeat Password', target: 'تكرار كلمة المرور' },
    {
      source: 'By signing in you’re okay with our',
      target: 'بتسجيلك للدخول فأنت توافق على'
    },
    {
      source: 'Creating an account means you’re okay with our',
      target: 'إنشاء الحساب يعني موافقتك على'
    },
    { source: 'Terms of Service', target: 'شروط الخدمة' },
    { source: 'Privacy Policy', target: 'سياسة الخصوصية' },
    { source: 'and', target: 'و' },
    { source: 'Create account', target: 'إنشاء حساب' },
    { source: 'Already have an account', target: 'لديك حساب بالفعل' },
    { source: 'Unable to Sign Up', target: 'تعذر تسجيل الحساب' },

    // Restore password
    { source: 'Reset your password', target: 'إعادة تعيين كلمة المرور الخاصة بك' },
    { source: 'Email Address', target: 'عنوان البريد الإلكتروني' },
    { source: 'Reset password', target: 'إعادة تعيين كلمة المرور' },
    { source: 'Return to Sign In', target: 'العودة لتسجيل الدخول' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target: 'يرجى تفقد بريدك الإلكتروني – <strong>{0}</strong>. لقد أرسلنا رابط التحقق الذي يجب عليك اتباعه لتغيير كلمة المرور.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be at least 8 characters.',
      target: 'على وشك الانتهاء، فقط أدخل كلمة المرور الجديدة أدناه. <br>يجب أن تكون 8 أحرف على الأقل.'
    },
    { source: 'Reset password & Sign In', target: 'إعادة تعيين كلمة المرور وتسجيل الدخول' },
    { source: 'Unable to Send Code', target: 'تعذر إرسال الكود' },
    { source: 'Unable to Change Password', target: 'تعذر تغيير كلمة المرور' },

    // Email Verification
    { source: 'Email Verification', target: 'التحقق من البريد الإلكتروني' },
    { source: 'Resend verification code', target: 'إعادة إرسال كود التحقق' },
    { source: 'Verification email sent', target: 'تم إرسال بريد التحقق' },
    { source: 'Your Email is now verified', target: 'تم التحقق من بريدك الإلكتروني بنجاح' },
    { source: 'Request is incorrect', target: 'الطلب غير صحيح' },

    // Invites
    {
      source: 'Join <span class="auth-form__accent">{0}</span>',
      target: 'انضم إلى <span class="auth-form__accent">{0}</span>'
    },
    {
      source: '<strong>{0}</strong> has invited you to join <strong>{1}</strong>',
      target: 'قام <strong>{0}</strong> بدعوتك للانضمام إلى <strong>{1}</strong>'
    },
    {
      source: 'Someone has invited you to join <strong>{0}</strong>',
      target: 'قام شخص ما بدعوتك للانضمام إلى <strong>{0}</strong>'
    },
    {
      source: 'You are joining <strong>{0}</strong> using invite link',
      target: 'أنت تنضم إلى <strong>{0}</strong> باستخدام رابط الدعوة'
    },
    { source: 'Join', target: 'انضمام' },
    { source: 'Go to home page', target: 'الانتقال للصفحة الرئيسية' },
    { source: 'Invite link is wrong', target: 'رابط الدعوة غير صحيح' },
    {
      source:
        'Looks like your invitation link has expired or maybe you have followed the wrong link. Please try to ask to invite your again.',
      target: 'يبدو أن رابط الدعوة قد انتهت صلاحيته أو ربما اتبعت رابطاً خاطئاً. يرجى طلب إرسال الدعوة مجدداً.'
    },
    {
      source: 'Unfortunately we failed to load information about this invitation',
      target: 'للأسف فشلنا في تحميل المعلومات المتعلقة بهذه الدعوة'
    },

    // Users & Teams
    { source: 'Members of {0}', target: 'أعضاء {0}' },
    { source: 'How to get started', target: 'كيفية البدء' },
    { source: 'Users API', target: 'الواجهة البرمجية للمستخدمين' },
    { source: 'Teams API', target: 'الواجهة البرمجية للفرق' },
    { source: 'Invite Member', target: 'دعوة عضو' },
    { source: 'Add User property', target: 'إضافة خاصية للمستخدم' },
    { source: 'Add Team property', target: 'إضافة خاصية للفريق' },
    { source: 'Edit property', target: 'تعديل الخاصية' },
    { source: 'Delete property', target: 'حذف الخاصية' },
    { source: 'Users', target: 'المستخدمون' },
    { source: 'Teams', target: 'الفرق' },
    { source: 'Search members', target: 'بحث عن أعضاء' },
    { source: 'Search teams', target: 'بحث عن فرق' },
    { source: '{0} pages', target: '{0} صفحات' },
    { source: 'No members', target: 'لا يوجد أعضاء' }
  ]
};

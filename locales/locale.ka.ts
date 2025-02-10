import { Locale } from './locale';

export const locale: Locale = {
  name: 'georgian',
  language: 'ka',
  items: [
    // General
    { source: 'Save', target: 'შენახვა' },
    { source: 'Create', target: 'შექმნა' },
    { source: 'Duplicating', target: 'დუბლირებნა' },
    { source: 'Duplicate', target: 'დუბლირება' },
    { source: 'Mass Edit', target: 'მასობრივი რედაქტირება' },
    { source: 'Export', target: 'ექსპორტი' },
    { source: 'Import', target: 'იმპორტი' },
    { source: 'Delete', target: 'წაშლა' },
    { source: 'Continue', target: 'გაგრძელება' },
    { source: 'Submit', target: 'გაგზავნა' },
    { source: 'Cancel', target: 'გაუქმება' },
    { source: 'Loading', target: 'ჩატვირთვა' },
    { source: 'Please wait...', target: 'გთხოვთ მოიცადოთ...' },
    { source: 'Loading failed', target: 'ჩატვირთვა ვერ მოხერხდა' },
    { source: 'Unknown error', target: 'უცნობი შეცდომა' },
    { source: 'Add', target: 'დამატება' },
    { source: 'or', target: 'ან' },
    { source: 'Hours', target: 'საათი' },
    { source: 'Minutes', target: 'წუთი' },
    { source: 'Seconds', target: 'წამი' },
    { source: 'Saved', target: 'შენახულია' },
    { source: 'Error', target: 'შეცდომა' },
    { source: 'Page not found', target: 'გვერდი ვერ მოიძებნა' },
    {
      source: 'The specified address is incorrect, or the page does not exist',
      target: 'მითითებული მისამართი არასწორია, ან ასეთი გვერდი არ არსებობს'
    },
    { source: 'Not allowed', target: 'აკრძალულია' },
    {
      source: "You don't have permissions to access this page",
      target: 'თქვენ არ გაქვთ უფლება ამ გვერდზე წვდომის'
    },
    { source: 'Are you sure want to close?', target: 'დარწმუნებული ხართ, რომ გსურთ დახურვა?' },
    { source: 'Close', target: 'დახურვა' },

    // Actions
    { source: 'Action executed', target: 'ქმედება შესრულდა' },
    { source: 'Action executed successfully', target: 'ქმედება წარმატებით შესრულდა' },
    { source: 'Action failed', target: 'ქმედება ვერ განხორციელდა' },
    {
      source: "You don't have permission for run this operation",
      target: 'თქვენ არ გაქვთ ნებართვა ამ ოპერაციის გაშვებისთვის'
    },
    { source: 'Specify parameters', target: 'მიუთითეთ პარამეტრები' },
    { source: 'Executing action', target: 'ქმედების შესრულება' },
    { source: 'You are executing <strong>{0}</strong>', target: 'თქვენ ასრულებთ <strong>{0}</strong>' },
    { source: 'Please fill in the parameters below.', target: 'გთხოვთ შეავსეთ ქვემოთ მოცემული პარამეტრები.' },
    { source: 'Execute', target: 'შესრულება' },
    { source: 'Executing', target: 'შესრულება' },
    { source: 'Finished', target: 'დასრულდა' },
    { source: 'Done', target: 'შესრულდა' },

    // Export
    { source: 'Records Export', target: 'ჩანაწერების ექსპორტი' },
    { source: 'Downloading records data as a file', target: 'ჩანაწერების მონაცემების ჩამოტვირთვა ფაილად' },
    { source: 'Choose format', target: 'ფორმატის არჩევა' },
    { source: 'Number of exporting records', target: 'ექსპორტირების ჩანაწერების რაოდენობა' },
    { source: { label: 'Export', context: 'submit' }, target: 'გაგზავნა' },
    { source: 'Exporting', target: 'ექსპორტი' },
    { source: 'Export completed', target: 'ექსპორტი დასრულდა' },
    { source: 'Failed to export', target: 'ექსპორტირება ვერ მოხერხდა' },

    // Components
    { source: 'optional', target: 'არნიშნული' },
    { source: 'choose', target: 'აირჩიეთ' },
    { source: 'Clear value', target: 'მნიშვნელობის გასუფთავება' },
    { source: 'loading...', target: 'ჩატვირთვა...' },
    { source: 'Nothing found', target: 'ვერაფერი მოიძებნა' },
    { source: 'Search...', target: 'ძიება...' },
    { source: 'Enter at least {0} characters', target: 'შეიყვანეთ მინიმუმ {0} სიმბოლო' },
    { source: 'No options', target: 'არცერთი ვარიანტი' },
    { source: 'Drop files here or', target: 'გადასვა ფაილები აქ ან' },
    { source: 'Upload new', target: 'ახლის ატვირთვა' },
    { source: 'Clear', target: 'გასუფთავება' },
    { source: 'Download', target: 'ჩამოტვირთვა' },
    { source: 'Choose file', target: 'აირჩიეთ ფაილი' },
    { source: 'Choose files', target: 'აირჩიეთ ფაილები' },
    { source: 'Scan with Camera', target: 'სკანირება კამერით' },
    { source: 'Scan Image file', target: 'სურათის ფაილის სკანირება' },
    { source: 'Choose camera', target: 'აირჩიეთ კამერა' },
    { source: 'Stop scanning', target: 'სკანირების შეჩერება' },
    { source: 'Scan again', target: 'სკანირება თავიდან' },
    { source: 'Use this scan', target: 'გამოიყენეთ ეს სკანირება' },
    { source: 'Failed to scan', target: 'სკანირება ვერ მოხერხდა' },
    {
      source: 'Code failed to scan, please try another image',
      target: 'კოდის სკანირება ვერ მოხერხდა, გთხოვთ სცადოთ სხვა სურათი'
    },
    { source: 'current', target: 'მიმდინარე' },
    { source: 'Day', target: 'დღე' },
    { source: 'Week', target: 'კვირა' },
    { source: 'Month', target: 'თვე' },
    { source: 'Year', target: 'წელი' },
    { source: 'Today', target: 'დღეს' },
    { source: 'Daily', target: 'დღიური' },
    { source: 'Weekly', target: 'კვირეული' },
    { source: 'Monthly', target: 'თვის' },
    { source: 'Quarterly', target: 'კვარტალური' },
    { source: 'Yearly', target: 'წლიური' },
    { source: 'Hourly', target: 'საათის' },
    { source: 'Minutely', target: 'წუთის' },
    { source: 'Since', target: 'მას შემდეგ' },
    { source: 'Before', target: 'მანამდე' },
    { source: 'Between', target: 'შორის' },
    { source: 'From date', target: 'თარიღიდან' },
    { source: 'To date', target: 'თარიღამდე' },
    { source: 'Coordinates', target: 'კოორდინატები' },
    { source: 'Latitude', target: 'გრძედი' },
    { source: 'Longitude', target: 'განედი' },
    { source: 'Default color', target: 'ძირითადი ფერი' },
    { source: 'not specified', target: 'არ არის მითითებული' },
    { source: 'Sign using your finger or pointer', target: 'ხელმოწერა თითით ან მაჩვენებლით' },

    // List components
    { source: 'Filter', target: 'ფილტრი' },
    { source: 'Filter by field', target: 'ფილტრაცია ველით' },
    { source: 'Filter by...', target: 'ფილტრაცია...' },
    { source: 'Back', target: 'უკან' },
    { source: 'Back to {0} fields', target: 'დაბრუნება {0} ველებზე' },
    { source: 'Choose {0} from list', target: 'აირჩიეთ {0} სიიდან' },
    { source: '{0} fields', target: '{0} ველები' },
    { source: '{0} relationships', target: '{0} ურთიერთობები' },
    { source: 'Aggregate {0}', target: 'ჯგუფური {0}' },
    { source: 'No fields to select', target: 'არცერთი ველი არჩეული' },
    { source: 'Enter value...', target: 'შეიყვანეთ მნიშვნელობა...' },
    { source: 'Exclude', target: 'გამორიცხვა' },
    { source: 'Actions', target: 'მოქმედებები' },
    { source: 'Search', target: 'ძიება' },
    { source: 'Sort 1 → 9', target: 'დალაგება 1 → 9' },
    { source: 'Sort 9 → 1', target: 'დალაგება 9 → 1' },
    { source: 'Sort A → Z', target: 'დალაგება A → Z' },
    { source: 'Sort Z → A', target: 'დალაგება Z → A' },
    { source: 'Refresh automatically', target: 'ავტომატური განახლება' },
    { source: 'All', target: 'ყველა' },
    { source: 'Selected', target: 'არჩეულია' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'სამწუხაროდ, {0} შესაბამისი თქვენი მოთხოვნა ვერ მოიძებნა'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'ჩვენ ვამოწმებთ {0}, გთხოვთ მოიცადოთ...' },
    { source: 'Add filter', target: 'ფილტრის დამატება' },
    { source: 'Delete this filter', target: 'ამ ფილტრის წაშლა' },
    { source: 'Toggle ordering', target: 'დალაგების გადართვა' },
    { source: 'Not configured', target: 'არ არის კონფიგურირებული' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'სამწუხაროდ, ეს კომპონენტი ჯერ არ არის კონფიგურირებული'
    },
    { source: 'records', target: 'ჩანაწერები' },
    { source: '{0} items', target: '{0} ელემენტი' },

    // Menu
    { source: 'Users & Teams', target: 'მომხმარებლები და გუნდები' },
    { source: 'Billing', target: 'ბილინგი' },
    { source: 'Billing & Plans', target: 'ბილინგი და გეგმები' },
    { source: 'API keys', target: 'API გასაღებები' },
    { source: 'Dark Mode', target: 'მუქი რეჟიმი' },
    { source: 'Light Mode', target: 'ნათელი რეჟიმი' },
    { source: 'Disable Staff', target: 'პერსონალის გამორთვა' },
    { source: 'Enable Staff', target: 'პერსონალის ჩართვა' },
    { source: 'Manage Templates', target: 'შაბლონების მართვა' },
    { source: 'Logout', target: 'გამოსვლა' },
    { source: 'Activity Log', target: 'აქტივობის ჟურნალი' },
    { source: 'Collaborations', target: 'თანამშრომლობა' },
    { source: 'Open Visual Builder', target: 'გამოაჩინეთ ვიზუალური მშენებელი' },

    // Filters
    { source: 'equals', target: 'უდრის' },
    { source: 'does not equal', target: 'არ უდრის' },
    { source: '{0} equals {1}', target: '{0} უდრის {1}' },
    { source: '{0} does not equal {1}', target: '{0} არ უდრის {1}' },

    { source: 'contains', target: 'შეიცავს' },
    { source: 'does not contain', target: 'არ შეიცავს' },
    { source: '{0} contains {1}', target: '{0} შეიცავს {1}' },
    { source: '{0} not contains {1}', target: '{0} არ შეიცავს {1}' },

    { source: 'starts with', target: 'იწყება' },
    { source: 'does not start with', target: 'არ იწყება' },
    { source: '{0} starts with {1}', target: '{0} იწყება {1}' },
    { source: '{0} does not start with {1}', target: '{0} არ იწყება {1}' },

    { source: 'ends with', target: 'მთავრდება' },
    { source: 'does not end with', target: 'არ მთავრდება' },
    { source: '{0} ends with {1}', target: '{0} მთავრდება {1}' },
    { source: '{0} does not end with {1}', target: '{0} არ მთავრდება {1}' },

    { source: 'greater than', target: 'მეტი ვიდრე' },
    { source: 'is not greater than', target: 'არაა მეტი ვიდრე' },
    { source: '{0} is greater than {1}', target: '{0} მეტი ვიდრე {1}' },
    { source: '{0} not greater than {1}', target: '{0} არაა მეტი ვიდრე {1}' },

    { source: 'greater than or equals', target: 'მეტი ან უდრის' },
    { source: 'is not greater than or equals', target: 'არაა მეტი ან არ უდრის' },
    { source: '{0} is greater than or equals {1}', target: '{0} მეტი ან უდრის {1}' },
    { source: '{0} is not greater than or equals {1}', target: '{0} არაა მეტი ან არ უდრის {1}' },

    { source: 'less than', target: 'ნაკლები' },
    { source: 'is not less than', target: 'არაა ნაკლები' },
    { source: '{0} is less than {1}', target: '{0} ნაკლები {1}' },
    { source: '{0} is not less than {1}', target: '{0} არაა ნაკლები {1}' },

    { source: 'less than or equals', target: 'ნაკლები ან უდრის' },
    { source: 'is not less than or equals', target: 'არაა ნაკლები ან არ უდრის' },
    { source: '{0} is less than or equals {1}', target: '{0} ნაკლები ან უდრის {1}' },
    { source: '{0} is not less than or equals {1}', target: '{0} არაა ნაკლები ან არ უდრის {1}' },

    { source: 'one of', target: 'ერთი' },
    { source: 'is one of', target: 'ერთი' },
    { source: 'is not one of', target: 'არაა ერთი' },
    { source: '{0} is one of {1}', target: '{0} ერთი {1}' },
    { source: '{0} is not one of {1}', target: '{0} არაა ერთი {1}' },

    { source: 'is null', target: 'null' },
    { source: 'is not null', target: 'არ არის null' },
    { source: '{0} is null', target: '{0} null' },
    { source: '{0} is not null', target: '{0} არ არის null' },

    { source: 'is future', target: 'მომავალი' },
    { source: 'in the future', target: 'მომავალში' },
    { source: 'is not in the future', target: 'არაა მომავალში' },
    { source: '{0} is in the future', target: '{0} მომავალში' },
    { source: '{0} is not in the future', target: '{0} არაა მომავალში' },

    { source: 'is past', target: 'წარსული' },
    { source: 'in the past', target: 'წარსულში' },
    { source: 'is not in the past', target: 'არაა წარსულში' },
    { source: '{0} is in the past', target: '{0} წარსულში' },
    { source: '{0} is not in the past', target: '{0} არაა წარსულში' },

    { source: 'is Today', target: 'დღეს' },
    { source: 'today', target: 'დღეს' },
    { source: 'is not today', target: 'არ არის დღეს' },
    { source: '{0} is today', target: '{0} დღეს' },
    { source: '{0} is not today', target: '{0} არ არის დღეს' },

    { source: 'is Yesterday', target: 'გუშინ' },
    { source: 'yesterday', target: 'გუშინ' },
    { source: 'is not yesterday', target: 'არ არის გუშინ' },
    { source: '{0} is yesterday', target: '{0} გუშინ' },
    { source: '{0} is not yesterday', target: '{0} არ არის გუშინ' },

    { source: 'is Last Week', target: 'წინა კვირაში' },
    { source: 'last week', target: 'წინა კვირაში' },
    { source: 'is not last week', target: 'არ არის წინა კვირაში' },
    { source: '{0} is last week', target: '{0} წინა კვირაში' },
    { source: '{0} is not last week', target: '{0} არ არის წინა კვირაში' },

    { source: 'is Last Month', target: 'წინა თვეში' },
    { source: 'last month', target: 'წინა თვეში' },
    { source: 'is not last month', target: 'არ არის წინა თვეში' },
    { source: '{0} is last month', target: '{0} წინა თვეში' },
    { source: '{0} is not last month', target: '{0} არ არის წინა თვეში' },

    { source: 'is Last Quarter', target: 'წინა კვარტალში' },
    { source: 'last quarter', target: 'წინა კვარტალში' },
    { source: 'is not last quarter', target: 'არ არის წინა კვარტალში' },
    { source: '{0} is last quarter', target: '{0} წინა კვარტალში' },
    { source: '{0} is not last quarter', target: '{0} არ არის წინა კვარტალში' },

    { source: 'is Last Year', target: 'შარშან' },
    { source: 'last year', target: 'შარშან' },
    { source: 'is not last year', target: 'არ არის შარშან' },
    { source: '{0} is last year', target: '{0} შარშან' },
    { source: '{0} is not last year', target: '{0} არ არის შარშან' },

    { source: 'is Last X Days', target: 'ბოლო X დღეში' },
    { source: 'last X days', target: 'ბოლო X დღეში' },
    { source: 'is not last X days', target: 'არ არის ბოლო X დღეში' },
    { source: '{0} is last {1} days', target: '{0} ბოლო {1} დღეში' },
    { source: '{0} is not last {1} days', target: '{0} არ არის ბოლო {1} დღეში' },

    { source: 'is Current Week', target: 'მიმდინარე კვირაში' },
    { source: 'current week', target: 'მიმდინარე კვირაში' },
    { source: 'is not current week', target: 'არ არის მიმდინარე კვირაში' },
    { source: '{0} is current week', target: '{0} მიმდინარე კვირაში' },
    { source: '{0} is not current week', target: '{0} არ არის მიმდინარე კვირაში' },

    { source: 'is Current Month', target: 'ამ თვეში' },
    { source: 'current month', target: 'ამ თვეში' },
    { source: 'is not current month', target: 'არ არის ამ თვეში' },
    { source: '{0} is current month', target: '{0} ამ თვეში' },
    { source: '{0} is not current month', target: '{0} არ არის ამ თვეში' },

    { source: 'is Current Quarter', target: 'მიმდინარე კვარტალში' },
    { source: 'current quarter', target: 'მიმდინარე კვარტალში' },
    { source: 'is not current quarter', target: 'არ არის მიმდინარე კვარტალში' },
    { source: '{0} is current quarter', target: '{0} მიმდინარე კვარტალში' },
    { source: '{0} is not current quarter', target: '{0} არ არის მიმდინარე კვარტალში' },

    { source: 'is Current Year', target: 'ამ წელს' },
    { source: 'current year', target: 'ამ წელს' },
    { source: 'is not current year', target: 'არ არის ამ წელს' },
    { source: '{0} is current year', target: '{0} ამ წელს' },
    { source: '{0} is not current year', target: '{0} არ არის ამ წელს' },

    { source: 'is Previous Week', target: 'წინა კვირაში' },
    { source: 'previous week', target: 'წინა კვირაში' },
    { source: 'is not previous week', target: 'არ არის წინა კვირაში' },
    { source: '{0} is previous week', target: '{0} წინა კვირაში' },
    { source: '{0} is not previous week', target: '{0} არ არის წინა კვირაში' },

    { source: 'is Previous Month', target: 'წინა თვეში' },
    { source: 'previous month', target: 'წინა თვეში' },
    { source: 'is not previous month', target: 'არ არის წინა თვეში' },
    { source: '{0} is previous month', target: '{0} წინა თვეში' },
    { source: '{0} is not previous month', target: '{0} არ არის წინა თვეში' },

    { source: 'is Previous Quarter', target: 'წინა კვარტალში' },
    { source: 'previous quarter', target: 'წინა კვარტალში' },
    { source: 'is not previous quarter', target: 'არ არის წინა კვარტალში' },
    { source: '{0} is previous quarter', target: '{0} წინა კვარტალში' },
    { source: '{0} is not previous quarter', target: '{0} არ არის წინა კვარტალში' },

    { source: 'is Previous Year', target: 'წინა წელს' },
    { source: 'previous year', target: 'წინა წელს' },
    { source: 'is not previous year', target: 'არ არის წინა წელს' },
    { source: '{0} is previous year', target: '{0} წინა წელს' },
    { source: '{0} is not previous year', target: '{0} არ არის წინა წელს' },

    { source: 'is Previous X Days', target: 'წინა X დღეში' },
    { source: 'previous X days', target: 'წინა X დღეში' },
    { source: 'is not previous X days', target: 'არ არის წინა X დღეში' },
    { source: '{0} is previous {1} days', target: '{0} წინა {1} დღეში' },
    { source: '{0} is not previous {1} days', target: '{0} არ არის წინა {1} დღეში' },

    { source: 'is empty', target: 'ცარიელია' },
    { source: 'is not empty', target: 'არ არის ცარიელი' },
    { source: '{0} is empty', target: '{0} ცარიელია' },
    { source: '{0} is not empty', target: '{0} არ არის ცარიელი' },

    { source: 'covered by', target: 'გადაფარულია' },
    { source: 'is not covered by', target: 'არ არის გადაფარული' },
    { source: '{0} covered by {1}', target: '{0} გადაფარულია {1} მიერ' },
    { source: '{0} is not covered by {1}', target: '{0} არ არის გადაფარული {1} მიერ' },

    // Activity log
    { source: 'No activities found', target: 'აქტივობები არ მოიძებნა' },
    {
      source: 'Start to working with data to log activities.',
      target: 'დაიწყეთ მუშაობა მონაცემებთან აქტივობების ჟურნალისთვის.'
    },
    { source: 'All Activity', target: 'ყველა აქტივობა' },
    { source: 'Create Record', target: 'ჩანაწერის შექმნა' },
    { source: 'Update Record', target: 'ჩანაწერის განახლება' },
    { source: 'Delete Record', target: 'ჩანაწერის წაშლა' },
    { source: 'All Members', target: 'ყველა წევრი' },

    // Collaboration
    { source: 'Timeline', target: 'თაიმლაინი' },
    { source: 'Messages', target: 'შეტყობინებები' },
    { source: 'Activity', target: 'აქტივობა' },
    { source: 'Start chatting with your team', target: 'დაიწყეთ ჩეთები თქვენს გუნდთან' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'მიაწვდეთ მნიშვნელოვანი ინფორმაცია ამჟამინდელი გვერდის შესახებ.'
    },
    { source: 'Your Message', target: 'თქვენი შეტყობინება' },
    { source: 'Send', target: 'გაგზავნა' },

    // Share
    { source: 'Invite members', target: 'წევრების მოწვევა' },
    { source: 'Public share', target: 'საჯარო გაზიარება' },
    { source: 'Sign Up', target: 'რეგისტრაცია' },
    { source: 'Members', target: 'წევრები' },
    { source: 'Invite with Email', target: 'მოწვევა ელფოსტით' },
    { source: 'Invite someone...', target: 'მოწვევა...' },
    { source: 'Send Invite', target: 'მოწვევის გაგზავნა' },
    {
      source: 'Limit access to your data by user properties',
      target: 'მონაცემებზე წვდომის შეზღუდვა მომხმარებლის თვისებებით'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: 'შეიყვანეთ იმ მომხმარებლის ელფოსტა, რომლის მოწვევაც გსურთ.'
    },
    { source: 'Copy', target: 'კოპირება' },
    { source: 'Invite with Link', target: 'მოწვევა ლინკის საშუალებით' },
    { source: 'Remove link', target: 'ლინკის ამოღება' },
    { source: 'Add Invite Link', target: 'დამატება მოწვევითი ლინკი' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'ყველა ინტერნეტ მომხმარებელი ამ ლინკით შეძლებს არჩეულ გუნდთან შეერთებას.'
    },
    { source: 'Pending Invites', target: 'გაგზავნილი მოწვევები' },
    { source: 'Cancel invite', target: 'მოწვევის გაუქმება' },
    { source: 'Active Members', target: 'აქტიური წევრები' },
    { source: 'Remove member', target: 'წევრის ამოღება' },
    {
      source: 'You are setting sharing for the current page',
      target: 'თქვენ პერსონალიზირებთ გაზიარებას ამ გვერდისთვის'
    },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'თქვენ ალაგებთ გაზიარებას აპლიკაციის ყველა გვერდისთვის.'
    },
    { source: 'Public access link', target: 'საჯარო წვდომის ლინკი' },
    { source: 'Updating public access...', target: 'საჯარო წვდომის განახლება...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'ამ ლინკით ყველა შეძლებს ამ გვერდის ნახვას. ამგვარად, შეგიძლიათ ასევე ჩამატოთ当前 გვერდი სხვა ვებ-გვერდზე.'
    },
    { source: 'Embed code (IFRAME)', target: 'ჩასამატებელ კოდი (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: 'ჩასვით ეს კოდი თქვენს ვებგვერდში, სადაც გსურთ ამჟამინდელი გვერდის გამოჩენა.'
    },
    { source: 'link', target: 'ლინკი' },
    { source: 'invited', target: 'მოწვეულია' },
    { source: 'Choose Team', target: 'აირჩიეთ გუნდი' },
    { source: 'App Teams', target: 'პროგრამის გუნდები' },
    { source: 'Built-In Teams', target: 'ჩაშენებული გუნდები' },
    { source: 'Clear Team', target: 'გუნდის გასუფთავება' },
    { source: 'Can build application and modify data', target: 'შეუძლია აპლიკაციის შექმნა და მონაცემების ცვლილება' },
    { source: 'Can modify data in application', target: 'შეუძლია მონაცემების ცვლილება აპლიკაციაში' },
    { source: 'Can only view data without modification', target: 'შეუძლია მხოლოდ მონაცემების ნახვა ცვლილების გარეშე' },
    { source: 'Add Team', target: 'დამატება გუნდი' },
    { source: 'Edit Team', target: 'გუნდის რედაქტირება' },
    { source: 'Adding Team', target: 'გუნდის დამატება' },
    {
      source: 'Keep control over who has access to current App',
      target: 'გამოიყენეთ წვდომის კონტროლი მიმდინარე აპლიკაციაზე'
    },
    { source: 'Enter Team Name', target: 'გუნდის სახელის შემოვლის' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'შეიტანეთ გუნდის სახელი, მაგალითად: მხარდაჭერა, გაყიდვები, მარკეტინგი და ა.შ.'
    },
    { source: 'Add a new member to this team.', target: 'გუნდში ახალი წევრის დამატება.' },
    { source: 'Invite new member', target: 'ახალი წევრის მოწვევა' },
    { source: 'User', target: 'მომხმარებელი' },
    { source: 'Date Added', target: 'დამატების თარიღი' },
    { source: 'You', target: 'თქვენ' },
    { source: 'Edit', target: 'რედაქტირება' },
    { source: 'No users in this team', target: 'ამ ჯგუფში წევრები არ არიან' },
    { source: 'Page Permissions', target: 'გვერდის უფლებები' },
    { source: 'App Permissions', target: 'აპლიკაციის უფლებები' },
    { source: 'Properties', target: 'ტექნიკური მახასიათებლები' },
    { source: 'Page name', target: 'გვერდის სახელი' },
    { source: 'Access', target: 'წვდომა' },
    { source: 'Full Access', target: 'სრული წვდომა' },
    { source: 'Read Only', target: 'მხოლოდ ნახვა' },
    { source: 'No Access', target: 'წვდომის გარეშე' },
    { source: 'Read', target: 'წაკითხვა' },
    { source: 'Update', target: 'განახლება' },
    { source: 'Write', target: 'წერა' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'წაშლა' },
    { source: 'Custom Access', target: 'მორგებული წვდომა' },
    { source: 'Read, create, update and delete data', target: 'მონაცემების წაკითხვა, შექმნა, განახლება და წაშლა' },
    { source: 'Choose allowed operations granularly', target: 'შეარჩიეთ დაშვებული ოპერაციები დეტალურად' },
    { source: 'Without any access to data', target: 'მონაცემებზე წვდომის გარეშე' },
    { source: 'Name', target: 'სახელი' },
    { source: 'Active', target: 'აქტიური' },
    { source: 'Settings', target: 'პარამეტრები' },
    { source: 'Members and Teams', target: 'წევრები და გუნდები' },
    { source: 'App Builder', target: 'აპლიკაციის მშენებელი' },
    { source: 'Collection Permissions', target: 'კოლექციის უფლებები' },
    { source: "Grant permissions to app's collection", target: 'მიაწვდეთ ნებართვები აპლიკაციის კოლექციაზე' },
    { source: 'Collection', target: 'კოლექცია' },
    {
      source: 'Limit access to your data by team properties',
      target: 'შეზღუდეთ წვდომა თქვენს მონაცემებზე გუნდის მახასიათებლებით'
    },
    { source: 'Save Team', target: 'გუნდის შენახვა' },
    { source: 'Create Team', target: 'გუნდის შექმნა' },
    { source: 'Value', target: 'მნიშვნელობა' },
    { source: 'No properties specified', target: 'არ არის მონიშნული მოხმარების ტექნიკური მახასიათებელი' },

    // Navigation
    { source: 'Current App', target: 'მიმდინარე აპლიკაცია' },
    { source: 'Home', target: 'მთავარი' },

    // Profile
    {
      source: 'We are fetching user data, please, wait...',
      target: 'მომხმარებლის მონაცემების აღება, გთხოვთ მოიცადოთ...'
    },
    { source: 'Profile Settings', target: 'პროფილის პარამეტრები' },
    { source: 'Basic information about your account.', target: 'საფუძვლითი ინფორმაცია თქვენი ანგარიშზე.' },
    { source: 'Photo', target: 'ფოტო' },
    { source: 'your photo', target: 'თქვენი ფოტო' },
    { source: 'Change', target: 'ცვლილება' },
    { source: 'Upload', target: 'ატვირთვა' },
    { source: 'Photo was successfully updated', target: 'ფოტო წარმატებით განახლდა' },
    { source: 'Photo was successfully deleted', target: 'ფოტო წარმატებით წაიშალა' },
    { source: 'First Name', target: 'სახელი' },
    { source: 'Last Name', target: 'გვარი' },
    { source: 'Your Email', target: 'თქვენი ელფოსტა' },
    { source: 'Email Change', target: 'ელფოსტის ცვლილება' },
    { source: 'New Email', target: 'ახალი ელფოსტა' },
    { source: 'Change Email', target: 'ელფოსტის ცვლილება' },
    { source: 'Check your inbox', target: 'შეამოწმეთ თქვენი ყუთი' },
    { source: 'Confirmation Email was sent to {0}', target: 'ელფოსტის დადასტურება გაიგზავნა {0}' },
    { source: 'Changing Email failed', target: 'ელფოსტის ცვლილება ვერ მოხერხდა' },
    { source: 'Password Change', target: 'პაროლის ცვლილება' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target: 'პაროლი უნდა იყოს საკმარისად სერიოზული, რომ დაიცვას თქვენი ანგარიში, ამიტომ მოკლეას უნდა იყოს 12 სიმბოლო.'
    },
    { source: 'Current Password', target: 'მიმდინარე პაროლი' },
    { source: 'New Password', target: 'ახალი პაროლი' },
    { source: 'Confirm New Password', target: 'ახალი პაროლის დამუშავება' },
    { source: 'Change Password', target: 'პაროლის ცვლილება' },
    {
      source: 'Current password was successfully updated, all other sessions will be logged out shortly',
      target: 'მიმდინარე პაროლი წარმატებით განახლდა, ყველა სხვა სესია მალე გამოვა სისტემიდან'
    },
    { source: 'Saving current password failed', target: 'მიმდინარე პაროლი ვერ შენახავს' },
    { source: 'Short password', target: 'მოკლე პაროლი' },
    { source: "Passwords don't match", target: 'პაროლები არამაშვადენი' },
    { source: 'Personal Preferences', target: 'პირადი პარამეტრები' },
    { source: 'Language', target: 'ენა' },
    { source: 'Timezone', target: 'დროის სარტყელი' },
    { source: 'Current time in {0} is', target: 'მიმდინარე დრო {0}-ის მიხედვით არის' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'მორგეთ დამატებითი პარამეტრები თქვენი ანგარიშისთვის.'
    },
    { source: 'News & Proposals', target: 'სიახლეები & შეთავაზებები' },
    { source: 'Subscribe to our updates and proposals.', target: 'გამოწერეთ ჩვენი განახლებები და შეთავაზებები.' },
    { source: 'Save changes', target: 'ცვლილებების გადანახვა' },
    { source: 'Current user was successfully updated', target: 'მიმდინარე მომხმარებელი წარმატებით განახლდა' },
    { source: 'Saving current user failed', target: 'მიმდინარე მომხმარებელი ვერ შეინახა' },

    // My Apps
    { source: 'Type to search...', target: 'მოძებნის ფორმა...' },
    { source: 'My Apps', target: 'ჩემი აპლიკაციები' },
    { source: 'New App', target: 'ახალი აპლიკაცია' },
    { source: 'Builder', target: 'მშენებელი' },
    { source: 'App', target: 'აპლიკაცია' },
    { source: 'continue install', target: 'დაიწყეთ ინსტალაცია' },
    { source: 'Open builder', target: 'მშენებლობის გახსნა' },
    { source: 'View published', target: 'გამოქვეყნებულის ნახვა' },
    { source: 'Delete App', target: 'აპლიკაციის წაშლა' },
    { source: 'Start from a template', target: 'გარკვეული მზარდის დაწყება' },
    { source: 'Preview', target: 'ნახვა' },
    { source: 'Contact Support', target: 'ხელსაწყოს მხარდაჭერა' },
    { source: 'Documentation', target: 'დოკუმენტაცია' },
    { source: 'Feature Requests', target: 'ფუნქციის მოთხოვნები' },
    { source: 'See What’s New', target: 'გაყოს ახალი' },
    { source: 'Search templates...', target: 'საბაჟოების საძიებელი...' },
    { source: 'any', target: 'ნებისმიერი' },
    { source: 'more', target: 'მეტი' },
    { source: 'Choose Data Source', target: 'აირჩიეთ ინფორმაციის წყარო' },
    { source: 'works with 30+ data sources', target: '30-ზე მეტი წყარო ინფორმაცია' },
    { source: 'Use this template', target: 'გამოიყენეთ ეს შაბლონი' },
    { source: 'stores data in Jet Tables', target: 'ინფორმაციის დაცვა Jet ცხრილებში' },
    { source: 'New Data', target: 'ახალი ინფორმაცია' },
    { source: 'using {0}', target: 'გამოიყენებთ {0}' },
    { source: "Can't find resource you're looking for?", target: 'ვერ ვპოულობ resurso, რასაც ეძებთ?' },
    { source: 'Admin Panel', target: 'ადმინისტრატორის პანელი' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'მონაცემზე წამართული სიების, შექმნითა და განახლების (CRUD) ოპერაცია'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target:
        'შექმნეთ მომხმარებელზე მორგებული ადმინისტრატორიდან ნებისმიერი მონაცემების ბაზებზე, აპლიკაციებზე და API-ებზე მაგალითად Stripe, Twilio და GraphQL.'
    },
    { source: 'All Integrations', target: 'ყველა ინტეგრაცია' },
    { source: 'Databases', target: 'მონაცემების ბაზები' },
    { source: 'APIs', target: 'API-ები' },
    { source: 'Frameworks', target: 'ფრეიმვორკები' },
    { source: 'Storages', target: 'მოსასრულებელი საცავები' },

    // Sign In
    { source: 'Good morning', target: 'დილა მშვიდობისა' },
    { source: 'Good afternoon', target: 'ნაშუადღევი მშვიდობისა' },
    { source: 'Good evening', target: 'საღამო მშვიდობისა' },
    { source: 'Sign In', target: 'შესვლა' },
    { source: 'Welcome Back.', target: 'კეთილი იყოს დაბრუნება.' },
    { source: 'Sign in with {0}', target: 'შესვლა {0} დახმარებით' },
    { source: 'or login with', target: 'ან შეხვიდეთ' },
    { source: 'Enter E-mail', target: 'შეიყვანეთ ელფოსტა' },
    { source: 'Enter password', target: 'შეიყვანეთ პაროლი' },
    { source: 'Login', target: 'შესვლა' },
    { source: 'Create new account', target: 'ახალი ანგარიშის შექმნა' },
    { source: 'Forgot my password', target: 'დამავიწყა პაროლი' },
    { source: 'required', target: 'სავალდებულო' },
    { source: 'incorrect Email', target: 'არასწორი ელფოსტა' },
    { source: 'Minimum password length {0}', target: 'პაროლის მინიმალური სიგრძე {0}' },
    { source: 'Unable to Sign In', target: 'შესვლა ვერ მოხერხდა' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'დასაწყევლად <span class="auth-form__accent">უფასოდ დღეს</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target: 'არ არის საჭირო ბარათი. მიიღებთ მოწინავე ფუნქციონალს 14 დღიანი PRO საცდელი ვერსიით უფასოდ.'
    },
    { source: 'Enter First Name', target: 'შეიყვანეთ სახელი' },
    { source: 'Enter Last Name (optional)', target: 'შეიყვანეთ გვარი (არასავალდებულო)' },
    { source: 'Enter Email', target: 'შეიყვანეთ ელფოსტა' },
    { source: 'Password', target: 'პაროლი' },
    { source: 'Repeat Password', target: 'გაიმეორეთ პაროლი' },
    { source: 'By signing in you’re okay with our', target: 'თქვენ ეთანხმებით ჩვენს' },
    {
      source: 'Creating an account means you’re okay with our',
      target: 'ანგარიშის შექმნა ნიშნავს რომ თქვენ ეთანხმებით ჩვენს'
    },
    { source: 'Terms of Service', target: 'მომსახურების პირობები' },
    { source: 'Privacy Policy', target: 'პირადი ცხოვრების პოლიტიკა' },
    { source: 'and', target: 'და' },
    { source: 'Create your free account', target: 'შექმენით თქვენი უფასო ანგარიში' },
    { source: 'Already have an account', target: 'უკვე გაქვთ ანგარიში?' },
    { source: 'Unable to Sign Up', target: 'რეგისტრაცია ვერ შესრულდა' },

    // Restore password
    { source: 'Reset your password', target: 'პაროლის გადატვირთვა' },
    { source: 'Email Address', target: 'ელფოსტის მისამართი' },
    { source: 'Reset password', target: 'პაროლის დაბრუნება' },
    { source: 'Return to Sign In', target: 'დაბრუნება შესვლაზე' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'გთხოვთ შეამოწმოთ თქვენი ელფოსტა – <strong>{0}</strong>. გამოგზავნეთ დადასტურების ლინკი, რომელიც უნდა გამოიყენოთ პაროლის შესაცვლელად.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be al least 8 characters.',
      target: 'თითქმის მზად, უბრალოდ შეიყვანეთ თქვენი ახალი პაროლი ქვემოთ. <br>მინიმუმ 8 სიმბოლო.'
    },
    { source: 'Reset password & Sign In', target: 'პაროლის გადატვირთვა & შესვლა' },
    { source: 'Unable to Send Code', target: 'კოდის გაგზავნა ვერ მოხერხდა' },
    { source: 'Unable to Change Password', target: 'პაროლის შეცვლა ვერ შესრულდა' },

    // Email Verification
    { source: 'Email Verification', target: 'ელფოსტას დადასტურება' },
    { source: 'Resend verification code', target: 'გააგზავნეთ დადასტურების კოდი გადატვირთვით' },
    { source: 'Verification email sent', target: 'დადასტურების ელფოსტა გაიგზავნა' },
    { source: 'Your Email is now verified', target: 'თქვენი ელფოსტა ახლა დადასტურებულია' },
    { source: 'Request is incorrect', target: 'მოთხოვნა არასწორია' },

    // Invites
    {
      source: 'Join <span class="auth-form__accent">{0}</span>',
      target: 'შეუერთდით <span class="auth-form__accent">{0}</span>'
    },
    {
      source: '<strong>{0}</strong> has invited you to join <strong>{1}</strong>',
      target: '<strong>{0}</strong> მოგაწვდინა <strong>{1}</strong>-თან'
    },
    {
      source: 'Someone has invited you to join <strong>{0}</strong>',
      target: 'ვინმემ მოგაწვდინა შეუერთდეთ <strong>{0}</strong>-ს'
    },
    {
      source: 'You are joining <strong>{0}</strong> using invite link',
      target: 'თქვენ შეუერთდით <strong>{0}</strong>-თან მეწვეულის ლინკის დახმარებით'
    },
    { source: 'Join', target: 'შეუერთდი' },
    { source: 'Go to home page', target: 'გაგზავნა სტატუსის გვერდზე' },
    { source: 'Invite link is wrong', target: 'მოუწვევის ლინკი არასწორია' },
    {
      source:
        'Looks like your invitation link has expired or maybe you have followed the wrong link. Please try to ask to invite your again.',
      target:
        'თქვენს მოწვევას იმეილი დასრულდა ან არასწორი ლინკით დაიწყეთ. გთხოვთ შეეცადოთ ახლებურად შეკითხვა ისევ მოწვევის თქვენი.'
    },
    {
      source: 'Unfortunately we failed to load information about this invitation',
      target: 'სამწუხაროდ ვერ შევზღუდავდით ინფორმაციას აღნიშნულ მოწვევაზე'
    },

    // Users & Teams
    { source: 'Members of {0}', target: 'წევრი {0}' },
    { source: 'How to get started', target: 'როგორ მივედი' },
    { source: 'Users API', target: 'მომხმარებლები API' },
    { source: 'Teams API', target: 'გუნდები API' },
    { source: 'Invite Member', target: 'წევრის მოწვევა' },
    { source: 'Add User property', target: 'მომხმარებლის თვისებათა დამატება' },
    { source: 'Add Team property', target: 'გუნდის თვისებათა დამატება' },
    { source: 'Edit property', target: 'თვისება ჩასწორება' },
    { source: 'Delete property', target: 'თვისება წაშლა' },
    { source: 'Users', target: 'მომხმარებლები' },
    { source: 'Teams', target: 'გუნდები' },
    { source: 'Search members', target: 'წევრების ძებნა' },
    { source: 'Search teams', target: 'გუნდების ძებნა' },
    { source: '{0} pages', target: '{0} გვერდების' },
    { source: 'No members', target: 'არ არსებობს წევრი' }
  ]
};

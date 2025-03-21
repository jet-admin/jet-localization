import { Locale } from './locale';

export const locale: Locale = {
  name: 'bengali',
  language: 'bn',
  items: [
    // General
    { source: 'Save', target: 'সংরক্ষণ করুন' },
    { source: 'Create', target: 'তৈরি করুন' },
    { source: 'Duplicating', target: 'নকল করা হচ্ছে' },
    { source: 'Duplicate', target: 'নকল' },
    { source: 'Mass Edit', target: 'বড় এডিট' },
    { source: 'Export', target: 'রপ্তানি' },
    { source: 'Import', target: 'আমদানি' },
    { source: 'Delete', target: 'মুছে ফেলুন' },
    { source: 'Continue', target: 'চালিয়ে যান' },
    { source: 'Submit', target: 'জমা দিন' },
    { source: 'Cancel', target: 'বাতিল' },
    { source: 'Loading', target: 'লোড হচ্ছে' },
    { source: 'Please wait...', target: 'অনুগ্রহ করে অপেক্ষা করুন...' },
    { source: 'Loading failed', target: 'লোডিং ব্যর্থ হয়েছে' },
    { source: 'Unknown error', target: 'অজানা ত্রুটি' },
    { source: 'Add', target: 'যোগ করুন' },
    { source: 'or', target: 'অথবা' },
    { source: 'Hours', target: 'ঘন্টা' },
    { source: 'Minutes', target: 'মিনিট' },
    { source: 'Seconds', target: 'সেকেন্ড' },
    { source: 'Saved', target: 'সংরক্ষিত' },
    { source: 'Error', target: 'ত্রুটি' },
    { source: 'Page not found', target: 'পাতা পাওয়া যায়নি' },
    {
      source: 'The specified address is incorrect, or the page does not exist',
      target: 'নির্দিষ্ট ঠিকানা ভুল, অথবা পাতা বিদ্যমান নেই'
    },
    { source: 'Not allowed', target: 'অনুমোদিত নয়' },
    {
      source: "You don't have permissions to access this page",
      target: 'এই পৃষ্ঠায় অ্যাক্সেস করার জন্য আপনার অনুমতি নেই'
    },
    { source: 'Are you sure want to close?', target: 'আপনি কি অবশ্যই বন্ধ করতে চান?' },
    { source: 'Close', target: 'বন্ধ' },

    // Actions
    { source: 'Action executed', target: 'কর্মসম্পাদন' },
    { source: 'Action executed successfully', target: 'কর্ম সফলভাবে সম্পাদন হয়েছে' },
    { source: 'Action failed', target: 'কর্ম ব্যর্থ' },
    {
      source: "You don't have permission for run this operation",
      target: 'এই অপারেশন চালানোর জন্য আপনার অনুমতি নেই'
    },
    { source: 'Specify parameters', target: 'প্যারামিটার নির্দিষ্ট করুন' },
    { source: 'Executing action', target: 'কর্ম সম্পাদন' },
    { source: 'You are executing <strong>{0}</strong>', target: 'আপনি <strong>{0}</strong> সম্পাদন করছেন' },
    { source: 'Please fill in the parameters below.', target: 'অনুগ্রহ করে নিচের প্যারামিটারগুলি পূরণ করুন।' },
    { source: 'Execute', target: 'সম্পাদন করুন' },
    { source: 'Executing', target: 'সম্পাদন হচ্ছে' },
    { source: 'Finished', target: 'শেষ হয়েছে' },
    { source: 'Done', target: 'সম্পন্ন' },

    // Export
    { source: 'Records Export', target: 'রেকর্ড রপ্তানি' },
    { source: 'Downloading records data as a file', target: 'ফাইল হিসেবে রেকর্ড তথ্য ডাউনলোড হচ্ছে' },
    { source: 'Choose format', target: 'ফরম্যাট পছন্দ করুন' },
    { source: 'Number of exporting records', target: 'রপ্তানিকৃত রেকর্ডের সংখ্যা' },
    { source: { label: 'Export', context: 'submit' }, target: 'রপ্তানি' },
    { source: 'Exporting', target: 'রপ্তানির প্রক্রিয়ায়' },
    { source: 'Export completed', target: 'রপ্তানি সম্পন্ন হয়েছে' },
    { source: 'Failed to export', target: 'রপ্তানি ব্যর্থ হয়েছে' },

    // Components
    { source: 'optional', target: 'ঐচ্ছিক' },
    { source: 'choose', target: 'পছন্দ করুন' },
    { source: 'Clear value', target: 'মান মুছে ফেলুন' },
    { source: 'loading...', target: 'লোড হচ্ছে...' },
    { source: 'Nothing found', target: 'কিছু পাওয়া যায়নি' },
    { source: 'Search...', target: 'অনুসন্ধান...' },
    { source: 'Enter at least {0} characters', target: 'কমপক্ষে {0} অক্ষর লিখুন' },
    { source: 'No options', target: 'বিকল্প নেই' },
    { source: 'Drop files here or', target: 'ফাইল এখানে ফেলে দিন অথবা' },
    { source: 'Upload new', target: 'নতুন আপলোড করুন' },
    { source: 'Clear', target: 'মুছে ফেলুন' },
    { source: 'Download', target: 'ডাউনলোড' },
    { source: 'Choose file', target: 'ফাইল পছন্দ করুন' },
    { source: 'Choose files', target: 'ফাইলগুলো পছন্দ করুন' },
    { source: 'Scan with Camera', target: 'ক্যামেরা দিয়ে স্ক্যান করুন' },
    { source: 'Scan Image file', target: 'ছবি ফাইল স্ক্যান করুন' },
    { source: 'Choose camera', target: 'ক্যামেরা পছন্দ করুন' },
    { source: 'Stop scanning', target: 'স্ক্যানিং বন্ধ করুন' },
    { source: 'Scan again', target: 'আবার স্ক্যান করুন' },
    { source: 'Use this scan', target: 'এই স্ক্যান ব্যবহার করুন' },
    { source: 'Failed to scan', target: 'স্ক্যান ব্যর্থ হয়েছে' },
    {
      source: 'Code failed to scan, please try another image',
      target: 'কোড স্ক্যান করা যায়নি, অনুগ্রহ করে অন্য একটি ছবি চেষ্টা করুন'
    },
    { source: 'current', target: 'বর্তমান' },
    { source: 'Day', target: 'দিন' },
    { source: 'Week', target: 'সপ্তাহ' },
    { source: 'Month', target: 'মাস' },
    { source: 'Year', target: 'বছর' },
    { source: 'Today', target: 'আজ' },
    { source: 'Daily', target: 'দৈনিক' },
    { source: 'Weekly', target: 'সাপ্তাহিক' },
    { source: 'Monthly', target: 'মাসিক' },
    { source: 'Quarterly', target: 'ত্রৈমাসিক' },
    { source: 'Yearly', target: 'বার্ষিক' },
    { source: 'Hourly', target: 'প্রতি ঘন্টায়' },
    { source: 'Minutely', target: 'প্রতি মিনিটে' },
    { source: 'Since', target: 'থেকে' },
    { source: 'Before', target: 'পূর্বে' },
    { source: 'Between', target: 'মধ্যে' },
    { source: 'From date', target: 'তারিখ থেকে' },
    { source: 'To date', target: 'তারিখ পর্যন্ত' },
    { source: 'Coordinates', target: 'সমন্বয়' },
    { source: 'Latitude', target: 'অক্ষাংশ' },
    { source: 'Longitude', target: 'দ্রাঘিমাংশ' },
    { source: 'Default color', target: 'ডিফল্ট রঙ' },
    { source: 'not specified', target: 'নির্ধারিত নয়' },
    { source: 'Sign using your finger or pointer', target: 'আপনার আঙুল বা পয়েন্টার ব্যবহার করে সাইন করুন' },

    // List components
    { source: 'Filter', target: 'ফিল্টার' },
    { source: 'Filter by field', target: 'ফিল্ড অনুসারে ফিল্টার করুন' },
    { source: 'Filter by...', target: 'অনুসারে ফিল্টার করুন...' },
    { source: 'Back', target: 'পিছনে' },
    { source: 'Back to {0} fields', target: '{0} ফিল্ডে ফিরে যান' },
    { source: 'Choose {0} from list', target: 'তালিকা থেকে {0} পছন্দ করুন' },
    { source: '{0} fields', target: '{0} ফিল্ড' },
    { source: '{0} relationships', target: '{0} সম্পর্ক' },
    { source: 'Aggregate {0}', target: 'মোট {0}' },
    { source: 'No fields to select', target: 'পছন্দ করার জন্য কোনো ফিল্ড নেই' },
    { source: 'Enter value...', target: 'মান লিখুন...' },
    { source: 'Exclude', target: 'বর্জন' },
    { source: 'Actions', target: 'ক্রিয়াকলাপ' },
    { source: 'Search', target: 'অনুসন্ধান' },
    { source: 'Sort 1 → 9', target: 'সাজান 1 → 9' },
    { source: 'Sort 9 → 1', target: 'সাজান 9 → 1' },
    { source: 'Sort A → Z', target: 'সাজান A → Z' },
    { source: 'Sort Z → A', target: 'সাজান Z → A' },
    { source: 'Refresh automatically', target: 'স্বয়ংক্রিয়ভাবে রিফ্রেশ' },
    { source: 'All', target: 'সব' },
    { source: 'Selected', target: 'নির্বাচিত' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'দুঃখিত, আপনার অনুসন্ধানে কোনো {0} পাওয়া যায়নি'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'আমরা {0} আনছি, অনুগ্রহ করে অপেক্ষা করুন...' },
    { source: 'Add filter', target: 'ফিল্টার যোগ করুন' },
    { source: 'Delete this filter', target: 'এই ফিল্টার মুছে ফেলুন' },
    { source: 'Toggle ordering', target: 'ক্রম পরিবর্তন করুন' },
    { source: 'Not configured', target: 'কনফিগার করা হয়নি' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'দুঃখিত, এই কম্পোনেন্টটি এখনও কনফিগার করা হয়নি'
    },
    { source: 'records', target: 'রেকর্ড' },
    { source: '{0} items', target: '{0} আইটেম' },

    // Menu
    { source: 'Users & Teams', target: 'ব্যবহারকারী ও দল' },
    { source: 'Billing', target: 'বিলিং' },
    { source: 'Billing & Plans', target: 'বিলিং এবং পরিকল্পনা' },
    { source: 'API keys', target: 'এপিআই কী' },
    { source: 'Dark Mode', target: 'ডার্ক মোড' },
    { source: 'Light Mode', target: 'লাইট মোড' },
    { source: 'Disable Staff', target: 'স্টাফ নিষ্ক্রিয় করুন' },
    { source: 'Enable Staff', target: 'স্টাফ সক্রিয় করুন' },
    { source: 'Manage Templates', target: 'টেমপ্লেট পরিচালনা করুন' },
    { source: 'Logout', target: 'লগ আউট' },
    { source: 'Activity Log', target: 'স্পষ্ট ক্রিয়াকলাপ' },
    { source: 'Collaborations', target: 'সহযোগিতা' },
    { source: 'Open Visual Builder', target: 'ভিজ্যুয়াল বিল্ডার খুলুন' },

    // Filters
    { source: 'equals', target: 'সমান' },
    { source: 'does not equal', target: 'সমান নয়' },
    { source: '{0} equals {1}', target: '{0} সমান {1}' },
    { source: '{0} does not equal {1}', target: '{0} সমান নয় {1}' },

    { source: 'contains', target: 'অন্তর্ভুক্ত করে' },
    { source: 'does not contain', target: 'অন্তর্ভুক্ত করে না' },
    { source: '{0} contains {1}', target: '{0} অন্তর্ভুক্ত করে {1}' },
    { source: '{0} not contains {1}', target: '{0} অন্তর্ভুক্ত করে না {1}' },

    { source: 'starts with', target: 'দিয়ে শুরু হয়' },
    { source: 'does not start with', target: 'দিয়ে শুরু হয় না' },
    { source: '{0} starts with {1}', target: '{0} দিয়ে শুরু হয় {1}' },
    { source: '{0} does not start with {1}', target: '{0} দিয়ে শুরু হয় না {1}' },

    { source: 'ends with', target: 'দিয়ে শেষ হয়' },
    { source: 'does not end with', target: 'দিয়ে শেষ নয়' },
    { source: '{0} ends with {1}', target: '{0} দিয়ে শেষ হয় {1}' },
    { source: '{0} does not end with {1}', target: '{0} দিয়ে শেষ নয় {1}' },

    { source: 'greater than', target: 'বেশি' },
    { source: 'is not greater than', target: 'বেশি নয়' },
    { source: '{0} is greater than {1}', target: '{0} বেশি {1} এর চাইতে' },
    { source: '{0} not greater than {1}', target: '{0} বেশি নয় {1} এর চাইতে' },

    { source: 'greater than or equals', target: 'বেশি বা সমান' },
    { source: 'is not greater than or equals', target: 'বেশি বা সমান নয়' },
    { source: '{0} is greater than or equals {1}', target: '{0} বেশি বা সমান {1}' },
    { source: '{0} is not greater than or equals {1}', target: '{0} বেশি বা সমান নয় {1}' },

    { source: 'less than', target: 'কম' },
    { source: 'is not less than', target: 'কম নয়' },
    { source: '{0} is less than {1}', target: '{0} কম {1} থেকে' },
    { source: '{0} is not less than {1}', target: '{0} কম নয় {1} থেকে' },

    { source: 'less than or equals', target: 'কম বা সমান' },
    { source: 'is not less than or equals', target: 'কম বা সমান নয়' },
    { source: '{0} is less than or equals {1}', target: '{0} কম বা সমান {1}' },
    { source: '{0} is not less than or equals {1}', target: '{0} কম বা সমান নয় {1}' },

    { source: 'one of', target: 'একটি' },
    { source: 'is one of', target: 'একটি' },
    { source: 'is not one of', target: 'একটি নয়' },
    { source: '{0} is one of {1}', target: '{0} একটি {1} এর' },
    { source: '{0} is not one of {1}', target: '{0} একটি নয় {1} এর' },

    { source: 'is null', target: 'শূন্য' },
    { source: 'is not null', target: 'শূন্য নয়' },
    { source: '{0} is null', target: '{0} হল শূন্য' },
    { source: '{0} is not null', target: '{0} শূন্য নয়' },

    { source: 'is future', target: 'ভবিষ্যতে' },
    { source: 'in the future', target: 'ভবিষ্যতে' },
    { source: 'is not in the future', target: 'ভবিষ্যতে নয়' },
    { source: '{0} is in the future', target: '{0} ভবিষ্যতে' },
    { source: '{0} is not in the future', target: '{0} ভবিষ্যতে নয়' },

    { source: 'is past', target: 'অতীতে' },
    { source: 'in the past', target: 'অতীতে' },
    { source: 'is not in the past', target: 'অতীতে নয়' },
    { source: '{0} is in the past', target: '{0} অতীতে' },
    { source: '{0} is not in the past', target: '{0} অতীতে নয়' },

    { source: 'is Today', target: 'আজ' },
    { source: 'today', target: 'আজ' },
    { source: 'is not today', target: 'আজ নয়' },
    { source: '{0} is today', target: '{0} আজ' },
    { source: '{0} is not today', target: '{0} আজ নয়' },

    { source: 'is Yesterday', target: 'গতকাল' },
    { source: 'yesterday', target: 'গতকাল' },
    { source: 'is not yesterday', target: 'গতকাল নয়' },
    { source: '{0} is yesterday', target: '{0} গতকাল' },
    { source: '{0} is not yesterday', target: '{0} গতকাল নয়' },

    { source: 'is Last Week', target: 'গত সপ্তাহে' },
    { source: 'last week', target: 'গত সপ্তাহে' },
    { source: 'is not last week', target: 'গত সপ্তাহে নয়' },
    { source: '{0} is last week', target: '{0} গত সপ্তাহে' },
    { source: '{0} is not last week', target: '{0} গত সপ্তাহে নয়' },

    { source: 'is Last Month', target: 'গত মাসে' },
    { source: 'last month', target: 'গত মাসে' },
    { source: 'is not last month', target: 'গত মাসে নয়' },
    { source: '{0} is last month', target: '{0} গত মাসে' },
    { source: '{0} is not last month', target: '{0} গত মাসে নয়' },

    { source: 'is Last Quarter', target: 'গত ত্রৈমাসিকে' },
    { source: 'last quarter', target: 'গত ত্রৈমাসিকে' },
    { source: 'is not last quarter', target: 'গত ত্রৈমাসিকে নয়' },
    { source: '{0} is last quarter', target: '{0} গত ত্রৈমাসিকে' },
    { source: '{0} is not last quarter', target: '{0} গত ত্রৈমাসিকে নয়' },

    { source: 'is Last Year', target: 'গত বছরে' },
    { source: 'last year', target: 'গত বছরে' },
    { source: 'is not last year', target: 'গত বছরে নয়' },
    { source: '{0} is last year', target: '{0} গত বছরে' },
    { source: '{0} is not last year', target: '{0} গত বছরে নয়' },

    { source: 'is Last X Days', target: 'গত X দিনে' },
    { source: 'last X days', target: 'গত X দিনে' },
    { source: 'is not last X days', target: 'গত X দিনে নয়' },
    { source: '{0} is last {1} days', target: '{0} গত {1} দিনে' },
    { source: '{0} is not last {1} days', target: '{0} গত {1} দিনে নয়' },

    { source: 'is Current Week', target: 'বর্তমান সপ্তাহে' },
    { source: 'current week', target: 'বর্তমান সপ্তাহে' },
    { source: 'is not current week', target: 'বর্তমান সপ্তাহে নয়' },
    { source: '{0} is current week', target: '{0} বর্তমান সপ্তাহে' },
    { source: '{0} is not current week', target: '{0} বর্তমান সপ্তাহে নয়' },

    { source: 'is Current Month', target: 'বর্তমান মাসে' },
    { source: 'current month', target: 'বর্তমান মাসে' },
    { source: 'is not current month', target: 'বর্তমান মাসে নয়' },
    { source: '{0} is current month', target: '{0} বর্তমান মাসে' },
    { source: '{0} is not current month', target: '{0} বর্তমান মাসে নয়' },

    { source: 'is Current Quarter', target: 'বর্তমান ত্রৈমাসিকে' },
    { source: 'current quarter', target: 'বর্তমান ত্রৈমাসিকে' },
    { source: 'is not current quarter', target: 'বর্তমান ত্রৈমাসিকে নয়' },
    { source: '{0} is current quarter', target: '{0} বর্তমান ত্রৈমাসিকে' },
    { source: '{0} is not current quarter', target: '{0} বর্তমান ত্রৈমাসিকে নয়' },

    { source: 'is Current Year', target: 'বর্তমান বছরে' },
    { source: 'current year', target: 'বর্তমান বছরে' },
    { source: 'is not current year', target: 'বর্তমান বছরে নয়' },
    { source: '{0} is current year', target: '{0} বর্তমান বছরে' },
    { source: '{0} is not current year', target: '{0} বর্তমান বছরে নয়' },

    { source: 'is Previous Week', target: 'পূর্ববর্তী সপ্তাহে' },
    { source: 'previous week', target: 'পূর্ববর্তী সপ্তাহে' },
    { source: 'is not previous week', target: 'পূর্ববর্তী সপ্তাহে নয়' },
    { source: '{0} is previous week', target: '{0} পূর্ববর্তী সপ্তাহে' },
    { source: '{0} is not previous week', target: '{0} পূর্ববর্তী সপ্তাহে নয়' },

    { source: 'is Previous Month', target: 'পূর্ববর্তী মাসে' },
    { source: 'previous month', target: 'পূর্ববর্তী মাসে' },
    { source: 'is not previous month', target: 'পূর্ববর্তী মাসে নয়' },
    { source: '{0} is previous month', target: '{0} পূর্ববর্তী মাসে' },
    { source: '{0} is not previous month', target: '{0} পূর্ববর্তী মাসে নয়' },

    { source: 'is Previous Quarter', target: 'পূর্ববর্তী ত্রৈমাসিকে' },
    { source: 'previous quarter', target: 'পূর্ববর্তী ত্রৈমাসিকে' },
    { source: 'is not previous quarter', target: 'পূর্ববর্তী ত্রৈমাসিকে নয়' },
    { source: '{0} is previous quarter', target: '{0} পূর্ববর্তী ত্রৈমাসিকে' },
    { source: '{0} is not previous quarter', target: '{0} পূর্ববর্তী ত্রৈমাসিকে নয়' },

    { source: 'is Previous Year', target: 'পূর্ববর্তী বছরে' },
    { source: 'previous year', target: 'পূর্ববর্তী বছরে' },
    { source: 'is not previous year', target: 'পূর্ববর্তী বছরে নয়' },
    { source: '{0} is previous year', target: '{0} পূর্ববর্তী বছরে' },
    { source: '{0} is not previous year', target: '{0} পূর্ববর্তী বছরে নয়' },

    { source: 'is Previous X Days', target: 'পূর্ববর্তী X দিনে' },
    { source: 'previous X days', target: 'পূর্ববর্তী X দিনে' },
    { source: 'is not previous X days', target: 'পূর্ববর্তী X দিনে নয়' },
    { source: '{0} is previous {1} days', target: '{0} পূর্ববর্তী {1} দিনে' },
    { source: '{0} is not previous {1} days', target: '{0} পূর্ববর্তী {1} দিনে নয়' },

    { source: 'is empty', target: 'খালি' },
    { source: 'is not empty', target: 'খালি নয়' },
    { source: '{0} is empty', target: '{0} খালি' },
    { source: '{0} is not empty', target: '{0} খালি নয়' },

    { source: 'covered by', target: 'আবৃত' },
    { source: 'is not covered by', target: 'আবৃত নয়' },
    { source: '{0} covered by {1}', target: '{0} দ্বারা আবৃত {1}' },
    { source: '{0} is not covered by {1}', target: '{0} দ্বারা আবৃত নয় {1}' },

    // Activity log
    { source: 'No activities found', target: 'কোনো ক্রিয়াকলাপ পাওয়া যায়নি' },
    {
      source: 'Start to working with data to log activities.',
      target: 'ক্রিয়াকলাপ লগ করার জন্য ডেটার সঙ্গে কাজ শুরু করুন।'
    },
    { source: 'All Activity', target: 'সমস্ত ক্রিয়াকলাপ' },
    { source: 'Create Record', target: 'রেকর্ড তৈরি করুন' },
    { source: 'Update Record', target: 'রেকর্ড আপডেট করুন' },
    { source: 'Delete Record', target: 'রেকর্ড মুছে ফেলুন' },
    { source: 'All Members', target: 'সমস্ত সদস্য' },

    // Collaboration
    { source: 'Timeline', target: 'টাইমলাইন' },
    { source: 'Messages', target: 'বার্তা' },
    { source: 'Activity', target: 'ক্রিয়াকলাপ' },
    { source: 'Start chatting with your team', target: 'আপনার দলের সাথে চ্যাট শুরু করুন' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'গুরুত্বপূর্ণ তথ্য ট্র্যাক রাখতে বর্তমান পৃষ্ঠার একটি বার্তা নিন।'
    },
    { source: 'Your Message', target: 'আপনার বার্তা' },
    { source: 'Send', target: 'পাঠান' },

    // Share
    { source: 'Invite members', target: 'সদস্য আমন্ত্রণ করুন' },
    { source: 'Public share', target: 'পাবলিক শেয়ার' },
    { source: 'Sign Up', target: 'নিবন্ধন করুন' },
    { source: 'Members', target: 'সদস্যরা' },
    { source: 'Invite with Email', target: 'ইমেইলের সাথে আমন্ত্রণ জানায়' },
    { source: 'Invite someone...', target: 'কাউকে আমন্ত্রণ...' },
    { source: 'Send Invite', target: 'আমন্ত্রণ পাঠান' },
    {
      source: 'Limit access to your data by user properties',
      target: 'ব্যবহারকারীর বৈশিষ্ট্য দ্বারা আপনার ডেটাতে অ্যাক্সেস সীমিত করুন'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: 'সহযোগিতা করার জন্য আপনি যাকে আমন্ত্রণ জানাতে চান তার ইমেল লিখুন।'
    },
    { source: 'Copy', target: 'অনুলিপি' },
    { source: 'Invite with Link', target: 'লিঙ্ক দিয়ে আমন্ত্রণ করুন' },
    { source: 'Remove link', target: 'লিঙ্ক মুছে দিন' },
    { source: 'Add Invite Link', target: 'আমন্ত্রণ লিঙ্ক যোগ করুন' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'ইন্টারনেটে যে কেউ এই লিঙ্ক সহ নির্বাচিত দলে যোগ দিতে সক্ষম হবে.'
    },
    { source: 'Pending Invites', target: 'অপেক্ষমাণ আমন্ত্রণ' },
    { source: 'Cancel invite', target: 'আমন্ত্রণ বাতিল করুন' },
    { source: 'Active Members', target: 'সক্রিয় সদস্যরা' },
    { source: 'Remove member', target: 'সদস্য মুছে দিন' },
    {
      source: 'You are setting sharing for the current page',
      target: 'আপনি বর্তমান পৃষ্ঠার জন্য ভাগ করা সেট করছেন'
    },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'আপনি আপনার অ্যাপ্লিকেশনের সমস্ত পৃষ্ঠার জন্য ভাগ করা সেট করছেন।'
    },
    { source: 'Public access link', target: 'পাবলিক অ্যাক্সেস লিঙ্ক' },
    { source: 'Updating public access...', target: 'পাবলিক অ্যাক্সেস আপডেট হচ্ছে...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'এই লিঙ্ক সহ যে কেউ বর্তমান পৃষ্ঠাটি দেখতে সক্ষম হবে। এভাবে আপনি বর্তমান পৃষ্ঠাটি অন্য ওয়েবসাইটেও এম্বেড করতে পারেন।'
    },
    { source: 'Embed code (IFRAME)', target: 'এম্বেড কোড (আইফ্রেম)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: 'আপনার ওয়েবসাইটের HTML কোডে এই কোডটি পেস্ট করুন যেখানে আপনি বর্তমান পৃষ্ঠাটি প্রদর্শন করতে চান।'
    },
    { source: 'link', target: 'লিংক' },
    { source: 'invited', target: 'আমন্ত্রিত' },
    { source: 'Choose Team', target: 'দল নির্বাচন করুন' },
    { source: 'App Teams', target: 'অ্যাপ দল' },
    { source: 'Built-In Teams', target: 'বিল্ট-ইন দল' },
    { source: 'Clear Team', target: 'দল মুছে দিন' },
    { source: 'Can build application and modify data', target: 'অ্যাপ্লিকেশন তৈরি এবং ডেটা সংশোধন করতে পারে' },
    { source: 'Can modify data in application', target: 'অ্যাপ্লিকেশন ডেটা পরিবর্তন করতে পারে' },
    { source: 'Can only view data without modification', target: 'পরিবর্তন ছাড়াই শুধুমাত্র ডেটা দেখতে পারে' },
    { source: 'Add Team', target: 'দল যোগ করুন' },
    { source: 'Edit Team', target: 'দল সম্পাদনা করুন' },
    { source: 'Adding Team', target: 'দল যোগ করা হচ্ছে' },
    {
      source: 'Keep control over who has access to current App',
      target: 'বর্তমান অ্যাপের অ্যাক্সেস কার কাছে আছে তা নিয়ন্ত্রণ করুন'
    },
    { source: 'Enter Team Name', target: 'দলের নাম লিখুন' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'দলের নাম টাইপ করুন, যেমন: সহায়তা, বিক্রয়, বিপণন, ইত্যাদি'
    },
    { source: 'Add a new member to this team.', target: 'এই দলে একটি নতুন সদস্য যোগ করুন।' },
    { source: 'Invite new member', target: 'নতুন সদস্য আমন্ত্রণ' },
    { source: 'User', target: 'ব্যবহারকারী' },
    { source: 'Date Added', target: 'তারিখ যোগ করা হয়েছে' },
    { source: 'You', target: 'আপনি' },
    { source: 'Edit', target: 'সম্পাদনা করুন' },
    { source: 'No users in this team', target: 'এই দলে কোন ব্যবহারকারী নেই' },
    { source: 'Page Permissions', target: 'পাতার অনুমতি' },
    { source: 'App Permissions', target: 'অ্যাপ অনুমতি' },
    { source: 'Properties', target: 'বৈশিষ্ট্য' },
    { source: 'Page name', target: 'পাতার নাম' },
    { source: 'Access', target: 'প্রবেশ' },
    { source: 'Full Access', target: 'সম্পূর্ণ প্রবেশ' },
    { source: 'Read Only', target: 'শুধুমাত্র পঠনযোগ্য' },
    { source: 'No Access', target: 'কোনও প্রবেশ নেই' },
    { source: 'Read', target: 'পড়ুন' },
    { source: 'Update', target: 'আপডেট করুন' },
    { source: 'Write', target: 'লিখুন' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'মুছে ফেলুন' },
    { source: 'Custom Access', target: 'কাস্টম প্রবেশ' },
    { source: 'Read, create, update and delete data', target: 'ডেটা পড়া, তৈরি, আপডেট এবং মুছে ফেলুন' },
    { source: 'Choose allowed operations granularly', target: 'অনুমোদিত ক্রিয়াকলাপগুলি বিস্তারিতভাবে পছন্দ করুন' },
    { source: 'Without any access to data', target: 'ডেটাতে কোনো প্রবেশ ছাড়াই' },
    { source: 'Name', target: 'নাম' },
    { source: 'Active', target: 'সক্রিয়' },
    { source: 'Settings', target: 'সেটিংস' },
    { source: 'Members and Teams', target: 'সদস্য এবং দল' },
    { source: 'App Builder', target: 'অ্যাপ বিল্ডার' },
    { source: 'Collection Permissions', target: 'সংগ্রহের অনুমতি' },
    { source: "Grant permissions to app's collection", target: 'অ্যাপের সংগ্রহের জন্য অনুমতি প্রদান করুন' },
    { source: 'Collection', target: 'সংগ্রহ' },
    {
      source: 'Limit access to your data by team properties',
      target: 'দলের বৈশিষ্ট্য দ্বারা আপনার ডেটাতে অ্যাক্সেস সীমিত করুন'
    },
    { source: 'Save Team', target: 'দল সংরক্ষণ করুন' },
    { source: 'Create Team', target: 'দল তৈরি করুন' },
    { source: 'Value', target: 'মান' },
    { source: 'No properties specified', target: 'কোন বৈশিষ্ট্য নির্দিষ্ট করা হয়নি' },

    // Navigation
    { source: 'Current App', target: 'বর্তমান অ্যাপ' },
    { source: 'Home', target: 'প্রধান পাতা' },

    // Profile
    {
      source: 'We are fetching user data, please, wait...',
      target: 'আমরা ব্যবহারকারীর ডেটা আনছি, অনুগ্রহ করে অপেক্ষা করুন...'
    },
    { source: 'Profile Settings', target: 'প্রোফাইল সেটিংস' },
    { source: 'Basic information about your account.', target: 'আপনার অ্যাকাউন্টের মৌলিক তথ্য।' },
    { source: 'Photo', target: 'ছবি' },
    { source: 'your photo', target: 'আপনার ছবি' },
    { source: 'Change', target: 'পরিবর্তন করুন' },
    { source: 'Upload', target: 'আপলোড করুন' },
    { source: 'Photo was successfully updated', target: 'ছবি সফলভাবে আপডেট হয়েছে' },
    { source: 'Photo was successfully deleted', target: 'ছবি সফলভাবে মুছে ফেলা হয়েছে' },
    { source: 'First Name', target: 'প্রথম নাম' },
    { source: 'Last Name', target: 'শেষ নাম' },
    { source: 'Your Email', target: 'আপনার ইমেল' },
    { source: 'Email Change', target: 'ইমেল পরিবর্তন' },
    { source: 'New Email', target: 'নতুন ইমেল' },
    { source: 'Change Email', target: 'ইমেল পরিবর্তন করুন' },
    { source: 'Check your inbox', target: 'আপনার ইনবক্স পরীক্ষা করুন' },
    { source: 'Confirmation Email was sent to {0}', target: 'নিশ্চিতকরণ ইমেল {0} এ প্রেরিত হয়েছে' },
    { source: 'Changing Email failed', target: 'ইমেল পরিবর্তন ব্যর্থ হয়েছে' },
    { source: 'Password Change', target: 'পাসওয়ার্ড পরিবর্তন' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target: 'অ্যাকাউন্টের সুরক্ষার জন্য পাসওয়ার্ড যথেষ্ট শক্তিশালী হতে হবে, তাই এটি অন্তত ১২ অক্ষর দীর্ঘ করুন।'
    },
    { source: 'Current Password', target: 'বর্তমান পাসওয়ার্ড' },
    { source: 'New Password', target: 'নতুন পাসওয়ার্ড' },
    { source: 'Confirm New Password', target: 'নতুন পাসওয়ার্ড নিশ্চিত করুন' },
    { source: 'Change Password', target: 'পাসওয়ার্ড পরিবর্তন করুন' },
    {
      source: 'Current password was successfully updated, all other sessions will be logged out shortly',
      target: 'বর্তমান পাসওয়ার্ড সফলভাবে আপডেট হয়েছে, অন্যান্য সমস্ত সেশন শীঘ্রই লগ আউট করা হবে।'
    },
    { source: 'Saving current password failed', target: 'বর্তমান পাসওয়ার্ড সংরক্ষণ ব্যর্থ হয়েছে' },
    { source: 'Short password', target: 'সংক্ষিপ্ত পাসওয়ার্ড' },
    { source: "Passwords don't match", target: 'পাসওয়ার্ডগুলি মেলে না' },
    { source: 'Personal Preferences', target: 'ব্যক্তিগত পছন্দ' },
    { source: 'Language', target: 'ভাষা' },
    { source: 'Timezone', target: 'সময় অঞ্চল' },
    { source: 'Current time in {0} is', target: '{0} এর বর্তমান সময় হল' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'আপনার অ্যাকাউন্টের জন্য অতিরিক্ত পছন্দগুলি কাস্টমাইজ করুন।'
    },
    { source: 'News & Proposals', target: 'সংবাদ ও প্রস্তাব' },
    {
      source: 'Subscribe to our updates and proposals.',
      target: 'আমাদের আপডেট এবং প্রস্তাবগুলিতে সদস্যতা নিন।'
    },
    { source: 'Save changes', target: 'পরিবর্তনগুলি সংরক্ষণ করুন' },
    { source: 'Current user was successfully updated', target: 'বর্তমান ব্যবহারকারী সফলভাবে আপডেট হয়েছে' },
    { source: 'Saving current user failed', target: 'বর্তমান ব্যবহারকারী সংরক্ষণ ব্যর্থ হয়েছে' },

    // My Apps
    { source: 'Type to search...', target: 'অনুসন্ধানের জন্য টাইপ করুন...' },
    { source: 'My Apps', target: 'আমার অ্যাপ্স' },
    { source: 'New App', target: 'নতুন অ্যাপ' },
    { source: 'Builder', target: 'বিল্ডার' },
    { source: 'App', target: 'অ্যাপ' },
    { source: 'continue install', target: 'স্থাপন চালিয়ে যান' },
    { source: 'Open builder', target: 'বিল্ডার খুলুন' },
    { source: 'View published', target: 'প্রকাশিত দেখুন' },
    { source: 'Delete App', target: 'অ্যাপ মুছে ফেলুন' },
    { source: 'Start from a template', target: 'একটি টেমপ্লেট থেকে শুরু করুন' },
    { source: 'Preview', target: 'পূর্বরূপ' },
    { source: 'Contact Support', target: 'সহায়তার সাথে যোগাযোগ করুন' },
    { source: 'Documentation', target: 'ডকুমেন্টেশন' },
    { source: 'Feature Requests', target: 'বৈশিষ্ট্য অনুরোধ' },
    { source: 'See What’s New', target: 'নতুন কি দেখুন' },
    { source: 'Search templates...', target: 'টেমপ্লেট অনুসন্ধান করুন...' },
    { source: 'any', target: 'যেকোনো' },
    { source: 'more', target: 'আরও' },
    { source: 'Choose Data Source', target: 'ডেটা উৎস নির্বাচন করুন' },
    { source: 'works with 30+ data sources', target: '৩০+ ডেটা উৎসের সাথে কাজ করে' },
    { source: 'Use this template', target: 'এই টেমপ্লেটটি ব্যবহার করুন' },
    { source: 'stores data in Jet Tables', target: 'জেট টেবিলে তথ্য সংরক্ষণ করে' },
    { source: 'New Data', target: 'নতুন তথ্য' },
    { source: 'using {0}', target: '{0} ব্যবহার করে' },
    { source: "Can't find resource you're looking for?", target: 'আপনি যে সম্পদটি খুঁজছেন সেটি খুঁজে পাচ্ছেন না?' },
    { source: 'Admin Panel', target: 'প্রশাসনিক প্যানেল' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'আপনার ডেটার উপরে তালিকা, তৈরি ও আপডেট (CRUD) কার্যক্রম।'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target:
        'Stripe, Twilio এবং GraphQL-এর মতো যে কোনো ডাটাবেস, অ্যাপ এবং এপিআই-এর উপর ভিত্তি করে একটি কাস্টম অ্যাডমিন প্যানেল তৈরি করুন।'
    },
    { source: 'All Integrations', target: 'সব ইন্টিগ্রেশন' },
    { source: 'Databases', target: 'ডাটাবেস' },
    { source: 'APIs', target: 'এপিআইস' },
    { source: 'Frameworks', target: 'ফ্রেমওয়ার্কস' },
    { source: 'Storages', target: 'সংগ্রহস্থল' },

    // Sign In
    { source: 'Good morning', target: 'সুপ্রভাত' },
    { source: 'Good afternoon', target: 'শুভ অপরাহ্ন' },
    { source: 'Good evening', target: 'শুভ সন্ধ্যা' },
    { source: 'Sign In', target: 'সাইন ইন' },
    { source: 'Welcome Back.', target: 'ফিরে আসার জন্য স্বাগতম।' },
    { source: 'Sign in with {0}', target: '{0} দিয়ে সাইন ইন করুন' },
    { source: 'or login with', target: 'অথবা লগইন করুন' },
    { source: 'Enter E-mail', target: 'ই-মেইল প্রদান করুন' },
    { source: 'Enter password', target: 'পাসওয়ার্ড প্রদান করুন' },
    { source: 'Login', target: 'লগইন' },
    { source: 'Create new account', target: 'নতুন অ্যাকাউন্ট তৈরি করুন' },
    { source: 'Forgot my password', target: 'পাসওয়ার্ড ভুলে গেছি' },
    { source: 'required', target: 'প্রয়োজনীয়' },
    { source: 'incorrect Email', target: 'ভুল ইমেল' },
    { source: 'Minimum password length {0}', target: 'সর্বনিম্ন পাসওয়ার্ড দৈর্ঘ্য {0}' },
    { source: 'Unable to Sign In', target: 'সাইন ইন করতে অসমর্থ' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'আজই বিনামূল্যে শুরু করুন <span class="auth-form__accent"></span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target: 'কার্ডের প্রয়োজন নেই। আপনি ১৪ দিনের PRO ট্রায়ালের সময় সমস্ত উন্নত কার্যকারিতা বিনামূল্যে পাবেন।'
    },
    { source: 'Enter First Name', target: 'প্রথম নাম লিখুন' },
    { source: 'Enter Last Name (optional)', target: 'শেষ নাম লিখুন (ঐচ্ছিক)' },
    { source: 'Enter Email', target: 'ইমেল প্রবেশ করুন' },
    { source: 'Password', target: 'পাসওয়ার্ড' },
    { source: 'Repeat Password', target: 'পাসওয়ার্ড পুনরাবৃত্তি করুন' },
    { source: 'By signing in you’re okay with our', target: 'সাইন ইন করে আপনি আমাদের সাথে সম্মত' },
    {
      source: 'Creating an account means you’re okay with our',
      target: 'একটি অ্যাকাউন্ট তৈরি করা মানে আপনি আমাদের সাথে সম্মত'
    },
    { source: 'Terms of Service', target: 'পরিষেবার শর্তাবলী' },
    { source: 'Privacy Policy', target: 'গোপনীয়তা নীতি' },
    { source: 'and', target: 'এবং' },
    { source: 'Create your free account', target: 'আপনার বিনামূল্যের অ্যাকাউন্ট তৈরি করুন' },
    { source: 'Already have an account', target: 'ইতিমধ্যে একটি অ্যাকাউন্ট আছে' },
    { source: 'Unable to Sign Up', target: 'নিবন্ধন করতে অক্ষম' },

    // Restore password
    { source: 'Reset your password', target: 'আপনার পাসওয়ার্ড রিসেট করুন' },
    { source: 'Email Address', target: 'ইমেল ঠিকানা' },
    { source: 'Reset password', target: 'পাসওয়ার্ড রিসেট করুন' },
    { source: 'Return to Sign In', target: 'সাইন ইন করার জন্য ফিরে যান' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'দয়া করে আপনার ইমেল চেক করুন – <strong>{0}</strong>. আমরা যা করেছি তার একটি বৈধতা লিঙ্ক প্রেরণ করেছি যা আপনি প্রয়োজনীয় পদক্ষেপগুলি অনুসরণ করবেন।'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be at least 8 characters.',
      target: 'প্রায় শেষ, কেবল নীচে আপনার নতুন পাসওয়ার্ড প্রবেশ করুন। <br>অন্যান্য ক্ষেত্রে ৮ অক্ষর দীর্ঘ হতে হবে।'
    },
    { source: 'Reset password & Sign In', target: 'পাসওয়ার্ড রিসেট করুন এবং সাইন ইন করুন' },
    { source: 'Unable to Send Code', target: 'কোড প্রেরণে অসমর্থ' },
    { source: 'Unable to Change Password', target: 'পাসওয়ার্ড পরিবর্তন করতে অক্ষম' },

    // Email Verification
    { source: 'Email Verification', target: 'ইমেল যাচাইকরণ' },
    { source: 'Resend verification code', target: 'যাচাইকরণ কোড পুনরায় প্রেরণ করুন' },
    { source: 'Verification email sent', target: 'যাচাইকরণ ইমেল প্রেরিত হয়েছে' },
    { source: 'Your Email is now verified', target: 'আপনার ইমেল এখন যাচাই করা হয়েছে' },
    { source: 'Request is incorrect', target: 'অনুরোধটি ভুল' },

    // Invites
    {
      source: 'Join <span class="auth-form__accent">{0}</span>',
      target: 'যোগদান <span class="auth-form__accent">{0}</span>'
    },
    {
      source: '<strong>{0}</strong> has invited you to join <strong>{1}</strong>',
      target: '<strong>{0}</strong> আপনাকে <strong>{1}</strong>-এ যোগদানের জন্য আমন্ত্রণ জানিয়েছে'
    },
    {
      source: 'Someone has invited you to join <strong>{0}</strong>',
      target: 'কেউ আপনাকে <strong>{0}</strong>-এ যোগদানের জন্য আমন্ত্রণ জানিয়েছে'
    },
    {
      source: 'You are joining <strong>{0}</strong> using invite link',
      target: 'আপনি আমন্ত্রণ লিঙ্ক ব্যবহার করে <strong>{0}</strong>-এ যোগদান করছেন'
    },
    { source: 'Join', target: 'যোগদান' },
    { source: 'Go to home page', target: 'হোম পৃষ্ঠায় যান' },
    { source: 'Invite link is wrong', target: 'আমন্ত্রণ লিঙ্ক ভুল' },
    {
      source:
        'Looks like your invitation link has expired or maybe you have followed the wrong link. Please try to ask to invite your again.',
      target:
        'আপনার আমন্ত্রণ লিঙ্কটি মেয়াদ উত্তীর্ণ হয়েছে বা হয়ত আপনি ভুল লিঙ্কটি অনুসরণ করেছেন বলে মনে হচ্ছে। আবার আমন্ত্রণ করার জন্য অনুরোধ করুন।'
    },
    {
      source: 'Unfortunately we failed to load information about this invitation',
      target: 'দুঃখজনকভাবে আমরা এই আমন্ত্রণ সম্পর্কে তথ্য লোড করতে ব্যর্থ হয়েছি'
    },

    // Users & Teams
    { source: 'Members of {0}', target: '{0} এর সদস্য' },
    { source: 'How to get started', target: 'কিভাবে শুরু করবেন' },
    { source: 'Users API', target: 'ব্যবহারকারী এপিআই' },
    { source: 'Teams API', target: 'দল এপিআই' },
    { source: 'Invite Member', target: 'সদস্য আমন্ত্রণ করুন' },
    { source: 'Add User property', target: 'ব্যবহারকারী সম্পত্তি যোগ করুন' },
    { source: 'Add Team property', target: 'দল সম্পত্তি যোগ করুন' },
    { source: 'Edit property', target: 'সম্পত্তি সম্পাদনা করুন' },
    { source: 'Delete property', target: 'সম্পত্তি মুছে ফেলুন' },
    { source: 'Users', target: 'ব্যবহারকারীরা' },
    { source: 'Teams', target: 'দলগুলি' },
    { source: 'Search members', target: 'সদস্য অনুসন্ধান' },
    { source: 'Search teams', target: 'দল অনুসন্ধান' },
    { source: '{0} pages', target: '{0} পৃষ্ঠা' },
    { source: 'No members', target: 'কোনও সদস্য নেই' }
  ]
};

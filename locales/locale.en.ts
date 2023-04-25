import { Locale } from './locale';

export const locale: Locale = {
  name: 'english',
  language: 'en',
  items: [
    // General
    { source: 'Save', target: '' },
    { source: 'Create', target: '' },
    { source: 'Duplicating', target: '' },
    { source: 'Duplicate', target: '' },
    { source: 'Mass Edit', target: '' },
    { source: 'Export', target: '' },
    { source: 'Import', target: '' },
    { source: 'Delete', target: '' },

    // Fields
    { source: 'optional', target: '' },
    { source: 'choose', target: '' },
    { source: 'Clear value', target: '' },
    { source: 'loading...', target: '' },
    { source: 'Nothing found', target: '' },
    { source: 'Search...', target: '' },
    { source: 'Enter at least {0} characters', target: '' },

    // List components
    { source: 'Filter', target: '' },
    { source: 'Filter by field', target: '' },
    { source: 'Filter by...', target: '' },
    { source: 'Back', target: '' },
    { source: 'Back to {0} fields', target: '' },
    { source: 'Choose {0} from list', target: '' },
    { source: '{0} fields', target: '' },
    { source: '{0} relationships', target: '' },
    { source: 'Aggregate {0}', target: '' },
    { source: 'No fields to select', target: '' },
    { source: 'Enter value...', target: '' },
    { source: 'Exclude', target: '' },
    { source: 'Actions', target: '' },
    { source: 'Search', target: '' },
    { source: 'Sort 1 → 9', target: '' },
    { source: 'Sort 9 → 1', target: '' },
    { source: 'Sort A → Z', target: '' },
    { source: 'Sort Z → A', target: '' },
    { source: 'Refresh automatically', target: '' },
    { source: 'All', target: '' },
    { source: 'Selected', target: '' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: ''
    },
    { source: 'We are fetching {0}, please, wait...', target: '' },
    { source: 'Add filter', target: '' },
    { source: 'Delete this filter', target: '' },
    { source: 'Toggle ordering', target: '' },
    { source: 'Loading failed', target: '' },
    { source: 'Not configured', target: '' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: ''
    },
    { source: 'records', target: '' },
    { source: '{0} items', target: '' },

    // Menu
    { source: 'Users & Teams', target: '' },
    { source: 'Billing', target: '' },
    { source: 'Billing & Plans', target: '' },
    { source: 'API keys', target: '' },
    { source: 'Dark Mode', target: '' },
    { source: 'Light Mode', target: '' },
    { source: 'Disable Staff', target: '' },
    { source: 'Enable Staff', target: '' },
    { source: 'Manage Templates', target: '' },
    { source: 'Logout', target: '' },
    { source: 'Activity Log', target: '' },
    { source: 'Collaborations', target: '' },
    { source: 'Open Visual Builder', target: '' },

    // Filters
    { source: 'equals', target: '' },
    { source: 'does not equal', target: '' },
    { source: '{0} equals {1}', target: '' },
    { source: '{0} does not equal {1}', target: '' },

    { source: 'contains', target: '' },
    { source: 'does not contain', target: '' },
    { source: '{0} contains {1}', target: '' },
    { source: '{0} not contains {1}', target: '' },

    { source: 'starts with', target: '' },
    { source: 'does not start with', target: '' },
    { source: '{0} starts with {1}', target: '' },
    { source: '{0} does not start with {1}', target: '' },

    { source: 'ends with', target: '' },
    { source: 'does not end with', target: '' },
    { source: '{0} ends with {1}', target: '' },
    { source: '{0} does not end with {1}', target: '' },

    { source: 'greater than', target: '' },
    { source: 'is not greater than', target: '' },
    { source: '{0} is greater than {1}', target: '' },
    { source: '{0} not greater than {1}', target: '' },

    { source: 'greater than or equals', target: '' },
    { source: 'is not greater than or equals', target: '' },
    { source: '{0} is greater than or equals {1}', target: '' },
    { source: '{0} is not greater than or equals {1}', target: '' },

    { source: 'less than', target: '' },
    { source: 'is not less than', target: '' },
    { source: '{0} is less than {1}', target: '' },
    { source: '{0} is not less than {1}', target: '' },

    { source: 'less than or equals', target: '' },
    { source: 'is not less than or equals', target: '' },
    { source: '{0} is less than or equals {1}', target: '' },
    { source: '{0} is not less than or equals {1}', target: '' },

    { source: 'one of', target: '' },
    { source: 'is one of', target: '' },
    { source: 'is not one of', target: '' },
    { source: '{0} is one of {1}', target: '' },
    { source: '{0} is not one of {1}', target: '' },

    { source: 'is null', target: '' },
    { source: 'is not null', target: '' },
    { source: '{0} is null', target: '' },
    { source: '{0} is not null', target: '' },

    { source: 'is future', target: '' },
    { source: 'in the future', target: '' },
    { source: 'is not in the future', target: '' },
    { source: '{0} is in the future', target: '' },
    { source: '{0} is not in the future', target: '' },

    { source: 'is past', target: '' },
    { source: 'in the past', target: '' },
    { source: 'is not in the past', target: '' },
    { source: '{0} is in the past', target: '' },
    { source: '{0} is not in the past', target: '' },

    { source: 'is Today', target: '' },
    { source: 'today', target: '' },
    { source: 'is not today', target: '' },
    { source: '{0} is today', target: '' },
    { source: '{0} is not today', target: '' },

    { source: 'is Yesterday', target: '' },
    { source: 'yesterday', target: '' },
    { source: 'is not yesterday', target: '' },
    { source: '{0} is yesterday', target: '' },
    { source: '{0} is not yesterday', target: '' },

    { source: 'is Last Week', target: '' },
    { source: 'last week', target: '' },
    { source: 'is not last week', target: '' },
    { source: '{0} is last week', target: '' },
    { source: '{0} is not last week', target: '' },

    { source: 'is Last Month', target: '' },
    { source: 'last month', target: '' },
    { source: 'is not last month', target: '' },
    { source: '{0} is last month', target: '' },
    { source: '{0} is not last month', target: '' },

    { source: 'is Last Quarter', target: '' },
    { source: 'last quarter', target: '' },
    { source: 'is not last quarter', target: '' },
    { source: '{0} is last quarter', target: '' },
    { source: '{0} is not last quarter', target: '' },

    { source: 'is Last Year', target: '' },
    { source: 'last year', target: '' },
    { source: 'is not last year', target: '' },
    { source: '{0} is last year', target: '' },
    { source: '{0} is not last year', target: '' },

    { source: 'is Last X Days', target: '' },
    { source: 'last X days', target: '' },
    { source: 'is not last X days', target: '' },
    { source: '{0} is last {1} days', target: '' },
    { source: '{0} is not last {1} days', target: '' },

    { source: 'is Current Week', target: '' },
    { source: 'current week', target: '' },
    { source: 'is not current week', target: '' },
    { source: '{0} is current week', target: '' },
    { source: '{0} is not current week', target: '' },

    { source: 'is Current Month', target: '' },
    { source: 'current month', target: '' },
    { source: 'is not current month', target: '' },
    { source: '{0} is current month', target: '' },
    { source: '{0} is not current month', target: '' },

    { source: 'is Current Quarter', target: '' },
    { source: 'current quarter', target: '' },
    { source: 'is not current quarter', target: '' },
    { source: '{0} is current quarter', target: '' },
    { source: '{0} is not current quarter', target: '' },

    { source: 'is Current Year', target: '' },
    { source: 'current year', target: '' },
    { source: 'is not current year', target: '' },
    { source: '{0} is current year', target: '' },
    { source: '{0} is not current year', target: '' },

    { source: 'is Previous Week', target: '' },
    { source: 'previous week', target: '' },
    { source: 'is not previous week', target: '' },
    { source: '{0} is previous week', target: '' },
    { source: '{0} is not previous week', target: '' },

    { source: 'is Previous Month', target: '' },
    { source: 'previous month', target: '' },
    { source: 'is not previous month', target: '' },
    { source: '{0} is previous month', target: '' },
    { source: '{0} is not previous month', target: '' },

    { source: 'is Previous Quarter', target: '' },
    { source: 'previous quarter', target: '' },
    { source: 'is not previous quarter', target: '' },
    { source: '{0} is previous quarter', target: '' },
    { source: '{0} is not previous quarter', target: '' },

    { source: 'is Previous Year', target: '' },
    { source: 'previous year', target: '' },
    { source: 'is not previous year', target: '' },
    { source: '{0} is previous year', target: '' },
    { source: '{0} is not previous year', target: '' },

    { source: 'is Previous X Days', target: '' },
    { source: 'previous X days', target: '' },
    { source: 'is not previous X days', target: '' },
    { source: '{0} is previous {1} days', target: '' },
    { source: '{0} is not previous {1} days', target: '' },

    { source: 'is empty', target: '' },
    { source: 'is not empty', target: '' },
    { source: '{0} is empty', target: '' },
    { source: '{0} is not empty', target: '' },

    { source: 'covered by', target: '' },
    { source: 'is not covered by', target: '' },
    { source: '{0} covered by {1}', target: '' },
    { source: '{0} is not covered by {1}', target: '' },

    // Activity log
    { source: 'No activities found', target: '' },
    {
      source: 'Start to working with data to log activities.',
      target: ''
    },
    { source: 'All Activity', target: '' },
    { source: 'Create Record', target: '' },
    { source: 'Update Record', target: '' },
    { source: 'Delete Record', target: '' },
    { source: 'All Members', target: '' },

    // Collaboration
    { source: 'Timeline', target: '' },
    { source: 'Messages', target: '' },
    { source: 'Activity', target: '' },
    { source: 'Start chatting with your team', target: '' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: ''
    },
    { source: 'Your Message', target: '' },
    { source: 'Send', target: '' },

    // Share
    { source: 'Invite members', target: '' },
    { source: 'Public share', target: '' },
    { source: 'Sign Up', target: '' },
    { source: 'Members', target: '' },
    { source: 'Invite with Email', target: '' },
    { source: 'Invite someone...', target: '' },
    { source: 'Send Invite', target: '' },
    {
      source: 'Limit access to your data by user properties',
      target: ''
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: ''
    },
    { source: 'Copy', target: '' },
    { source: 'Invite with Link', target: '' },
    { source: 'Remove link', target: '' },
    { source: 'Add Invite Link', target: '' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: ''
    },
    { source: 'Pending Invites', target: '' },
    { source: 'Cancel invite', target: '' },
    { source: 'Active Members', target: '' },
    { source: 'Remove member', target: '' },
    {
      source: 'You are setting sharing for the current page',
      target: ''
    },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: ''
    },
    { source: 'Public access link', target: '' },
    { source: 'Updating public access...', target: '' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'Cualquier persona con este enlace podrá ver la página actual. De esta manera, también puede incrustar la página actual en otro sitio web.'
    },
    { source: 'Embed code (IFRAME)', target: '' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: ''
    },
    { source: 'link', target: '' },
    { source: 'invited', target: '' },
    { source: 'Choose Team', target: '' },
    { source: 'App Teams', target: '' },
    { source: 'Built-In Teams', target: '' },
    { source: 'Clear Team', target: '' },
    { source: 'Can build application and modify data', target: '' },
    { source: 'Can modify data in application', target: '' },
    { source: 'Can only view data without modification', target: '' },
    { source: 'Add Team', target: '' },
    { source: 'Edit Team', target: '' },
    { source: 'Adding Team', target: '' },
    {
      source: 'Keep control over who has access to current App',
      target: ''
    },
    { source: 'Enter Team Name', target: '' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: ''
    },
    { source: 'Add a new member to this team.', target: '' },
    { source: 'Invite new member', target: '' },
    { source: 'User', target: '' },
    { source: 'Date Added', target: '' },
    { source: 'You', target: '' },
    { source: 'Edit', target: '' },
    { source: 'No users in this team', target: '' },
    { source: 'Page Permissions', target: '' },
    { source: 'App Permissions', target: '' },
    { source: 'Properties', target: '' },
    { source: 'Page name', target: '' },
    { source: 'Access', target: '' },
    { source: 'Full Access', target: '' },
    { source: 'Read Only', target: '' },
    { source: 'No Access', target: '' },
    { source: 'Read', target: '' },
    { source: 'Update', target: '' },
    { source: 'Write', target: '' },
    { source: { label: 'Delete', context: 'permissions' }, target: '' },
    { source: 'Custom Access', target: '' },
    { source: 'Read, create, update and delete data', target: '' },
    { source: 'Choose allowed operations granularly', target: '' },
    { source: 'Without any access to data', target: '' },
    { source: 'Name', target: '' },
    { source: 'Active', target: '' },
    { source: 'Settings', target: '' },
    { source: 'Members and Teams', target: '' },
    { source: 'App Builder', target: '' },
    { source: 'Collection Permissions', target: '' },
    { source: "Grant permissions to app's collection", target: '' },
    { source: 'Collection', target: '' },
    {
      source: 'Limit access to your data by team properties',
      target: ''
    },
    { source: 'Cancel', target: '' },
    { source: 'Save Team', target: '' },
    { source: 'Create Team', target: '' },
    { source: 'Value', target: '' },
    { source: 'No properties specified', target: '' },

    // Navigation
    { source: 'Current App', target: '' },
    { source: 'Home', target: '' },

    // Profile
    { source: 'Loading', target: '' },
    {
      source: 'We are fetching user data, please, wait...',
      target: ''
    },
    { source: 'Profile Settings', target: '' },
    { source: 'Basic information about your account.', target: '' },
    { source: 'Photo', target: '' },
    { source: 'your photo', target: '' },
    { source: 'Change', target: '' },
    { source: 'Upload', target: '' },
    { source: 'First Name', target: '' },
    { source: 'Last Name', target: '' },
    { source: 'Your Email', target: '' },
    { source: 'Password Change', target: '' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target:
        'Una contraseña debe ser lo suficientemente fuerte para proteger su cuenta, así que hágala de al menos 12 caracteres.'
    },
    { source: 'Current Password', target: '' },
    { source: 'New Password', target: '' },
    { source: 'Confirm New Password', target: '' },
    { source: 'Change Password', target: '' },
    { source: 'Personal Preferences', target: '' },
    { source: 'Language', target: '' },
    {
      source: 'Customize additional preferences for your account.',
      target: ''
    },
    { source: 'News & Proposals', target: '' },
    {
      source: 'Subscribe to our updates and proposals.',
      target: ''
    },
    { source: 'Save changes', target: '' },

    // My Apps
    { source: 'Type to search...', target: '' },
    { source: 'My Apps', target: '' },
    { source: 'New App', target: '' },
    { source: 'Builder', target: '' },
    { source: 'App', target: '' },
    { source: 'continue install', target: '' },
    { source: 'Open builder', target: '' },
    { source: 'View published', target: '' },
    { source: 'Delete App', target: '' },
    { source: 'Start from a template', target: '' },
    { source: 'Preview', target: '' },
    { source: 'Contact Support', target: '' },
    { source: 'Documentation', target: '' },
    { source: 'Feature Requests', target: '' },
    { source: 'See What’s New', target: '' },
    { source: 'Search templates...', target: '' },
    { source: 'any', target: '' },
    { source: 'more', target: '' },
    { source: 'Choose Data Source', target: '' },
    { source: 'works with 30+ data sources', target: '' },
    { source: 'Use this template', target: '' },
    { source: 'stores data in Jet Tables', target: '' },
    { source: 'New Data', target: '' },
    { source: 'using {0}', target: '' },
    { source: "Can't find resource you're looking for?", target: '' },
    { source: 'Admin Panel', target: '' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: ''
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target:
        'Cree un panel de administración personalizado basado en cualquier base de datos, aplicaciones y API como Stripe, Twilio y GraphQL.'
    },
    { source: 'All Integrations', target: '' },
    { source: 'Databases', target: '' },
    { source: 'APIs', target: '' },
    { source: 'Frameworks', target: '' },
    { source: 'Storages', target: '' },

    // Sign In
    { source: 'Please wait...', target: '' },
    { source: 'Good morning', target: '' },
    { source: 'Good afternoon', target: '' },
    { source: 'Good evening', target: '' },
    { source: 'Sign In', target: '' },
    { source: 'Welcome Back.', target: '' },
    { source: 'Sign in with {0}', target: '' },
    { source: 'or login with', target: '' },
    { source: 'Enter E-mail', target: '' },
    { source: 'Enter password', target: '' },
    { source: 'Login', target: '' },
    { source: 'Create new account', target: '' },
    { source: 'Forgot my password', target: '' },
    { source: 'required', target: '' },
    { source: 'incorrect Email', target: '' },
    { source: 'Minimum password length {0}', target: '' },
    { source: 'Unable to Sign In', target: '' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: ''
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target: ''
    },
    { source: 'or', target: '' },
    { source: 'Enter First Name', target: '' },
    { source: 'Enter Last Name (optional)', target: '' },
    { source: 'Enter Email', target: '' },
    { source: 'Password', target: '' },
    { source: 'Repeat Password', target: '' },
    {
      source: 'By signing in you’re okay with our',
      target: ''
    },
    {
      source: 'Creating an account means you’re okay with our',
      target: ''
    },
    { source: 'Terms of Service', target: '' },
    { source: 'Privacy Policy', target: '' },
    { source: 'and', target: '' },
    { source: 'Create your free account', target: '' },
    { source: 'Already have an account', target: '' },
    { source: 'Unable to Sign Up', target: '' },

    // Restore password
    { source: 'Reset your password', target: '' },
    { source: 'Email Address', target: '' },
    { source: 'Reset password', target: '' },
    { source: 'Return to Sign In', target: '' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target: ''
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be al least 8 characters.',
      target: ''
    },
    { source: 'Reset password & Sign In', target: '' },
    { source: 'Unable to Send Code', target: '' },
    { source: 'Unable to Change Password', target: '' },

    // Users & Teams
    { source: 'Members of {0}', target: '' },
    { source: 'How to get started', target: '' },
    { source: 'Users API', target: '' },
    { source: 'Teams API', target: '' },
    { source: 'Invite Member', target: '' },
    { source: 'Add User property', target: '' },
    { source: 'Add Team property', target: '' },
    { source: 'Add', target: '' },
    { source: 'Edit property', target: '' },
    { source: 'Delete property', target: '' },
    { source: 'Users', target: '' },
    { source: 'Teams', target: '' },
    { source: 'Search members', target: '' },
    { source: 'Search teams', target: '' },
    { source: '{0} pages', target: '' },
    { source: 'No members', target: '' }
  ]
};

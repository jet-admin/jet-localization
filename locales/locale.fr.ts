import { Locale } from './locale';

export const locale: Locale = {
  name: 'french',
  language: 'fr',
  items: [
    // General
    { source: 'Save', target: 'sauvegarder' },
    { source: 'Create', target: 'Créer' },
    { source: 'Duplicating', target: 'Duplication' },
    { source: 'Duplicate', target: 'Dupliquer' },
    { source: 'Mass Edit', target: 'Modifier en masse' },
    { source: 'Export', target: 'Exporter' },
    { source: 'Import', target: 'Importer' },
    { source: 'Delete', target: 'Effacer' },

    // Fields
    { source: 'optional', target: 'optionnel' },
    { source: 'choose', target: 'choisir' },
    { source: 'Clear value', target: 'Effacer la valeur' },
    { source: 'loading...', target: 'Chargement en cours...' },
    { source: 'Nothing found', target: "Rien n'a été trouvé" },
    { source: 'Search...', target: 'Chercher...' },
    { source: 'Enter at least {0} characters', target: 'Saisissez au moins {0} caractères' },

    // List components
    { source: 'Filter', target: 'Filtre' },
    { source: 'Filter by field', target: 'Filtre par champ' },
    { source: 'Filter by...', target: 'Filtrer par...' },
    { source: 'Back', target: 'Retour' },
    { source: 'Back to {0} fields', target: 'Retour aux champs {0}' },
    { source: 'Choose {0} from list', target: 'Choisissez {0} dans la liste' },
    { source: '{0} fields', target: '{0} champs' },
    { source: '{0} relationships', target: '{0} relations' },
    { source: 'Aggregate {0}', target: 'Agrégat {0}' },
    { source: 'No fields to select', target: 'Aucun champ à sélectionner' },
    { source: 'Enter value...', target: 'Entrez la valeur ...' },
    { source: 'Exclude', target: 'Exclure' },
    { source: 'Actions', target: 'Actions' },
    { source: 'Search', target: 'Chercher' },
    { source: 'Sort 1 → 9', target: 'Trier 1 → 9' },
    { source: 'Sort 9 → 1', target: 'Trier 9 → 1' },
    { source: 'Sort A → Z', target: 'Trier A → Z' },
    { source: 'Sort Z → A', target: 'Trier Z → A' },
    { source: 'Refresh automatically', target: 'Actualiser automatiquement' },
    { source: 'All', target: 'Tout' },
    { source: 'Selected', target: 'Choisi' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: "Malheureusement, aucun {0} correspondant à votre requête n'a été trouvé"
    },
    { source: 'We are fetching {0}, please, wait...', target: 'Nous récupérons {0}, veuillez patienter...' },
    { source: 'Add filter', target: 'Ajouter un filtre' },
    { source: 'Delete this filter', target: 'Supprimer ce filtre' },
    { source: 'Toggle ordering', target: 'Basculer la commande' },
    { source: 'Loading failed', target: 'Échec du chargement' },
    { source: 'Not configured', target: 'Non configuré' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: "Malheureusement, ce composant n'est pas encore configuré"
    },
    { source: 'records', target: 'enregistrements' },
    { source: '{0} items', target: '{0} éléments' },

    // Menu
    { source: 'Users & Teams', target: 'Utilisateurs' },
    { source: 'Billing', target: 'Facturation' },
    { source: 'Billing & Plans', target: 'Facturation' },
    { source: 'API keys', target: 'Clés API' },
    { source: 'Dark Mode', target: 'Mode sombre' },
    { source: 'Light Mode', target: 'Mode clair' },
    { source: 'Disable Staff', target: 'Désactiver le personnel' },
    { source: 'Enable Staff', target: 'Activer le personnel' },
    { source: 'Manage Templates', target: 'Gérer les modèles' },
    { source: 'Logout', target: 'Se déconnecter' },
    { source: 'Activity Log', target: "Journal d'activité" },
    { source: 'Collaborations', target: 'Collaborations' },
    { source: 'Open Visual Builder', target: 'Ouvrir le constructeur visuel' },

    // Filters
    { source: 'equals', target: 'équivaut à' },
    { source: 'does not equal', target: "n'est pas égal" },
    { source: '{0} equals {1}', target: '{0} est égal à {1}' },
    { source: '{0} does not equal {1}', target: "{0} n'égale pas {1}" },

    { source: 'contains', target: 'contient' },
    { source: 'does not contain', target: 'ne contient pas' },
    { source: '{0} contains {1}', target: '{0} contient {1}' },
    { source: '{0} not contains {1}', target: '{0} ne contient pas {1}' },

    { source: 'starts with', target: 'commence avec' },
    { source: 'does not start with', target: 'ne commence pas par' },
    { source: '{0} starts with {1}', target: '{0} commence par {1}' },
    { source: '{0} does not start with {1}', target: '{0} ne commence pas par {1}' },

    { source: 'ends with', target: 'se termine par' },
    { source: 'does not end with', target: 'ne se termine pas avec' },
    { source: '{0} ends with {1}', target: '{0} se termine par {1}' },
    { source: '{0} does not end with {1}', target: '{0} ne se termine pas avec {1}' },

    { source: 'greater than', target: 'plus grand que' },
    { source: 'is not greater than', target: "n'est pas plus grand que" },
    { source: '{0} is greater than {1}', target: '{0} est supérieur à {1}' },
    { source: '{0} not greater than {1}', target: '{0} pas plus grand que {1}' },

    { source: 'greater than or equals', target: 'supérieur ou égal' },
    { source: 'is not greater than or equals', target: "n'est pas plus grand ou égal" },
    { source: '{0} is greater than or equals {1}', target: '{0} est supérieur ou égal {1}' },
    { source: '{0} is not greater than or equals {1}', target: "{0} n'est pas supérieur ou égal {1}" },

    { source: 'less than', target: 'moins que' },
    { source: 'is not less than', target: "n'est pas inférieur" },
    { source: '{0} is less than {1}', target: '{0} est inférieur à {1}' },
    { source: '{0} is not less than {1}', target: "{0} n'est pas inférieur à {1}" },

    { source: 'less than or equals', target: 'inférieur ou égal' },
    { source: 'is not less than or equals', target: "n'est pas inférieur ou égal" },
    { source: '{0} is less than or equals {1}', target: '{0} est inférieur ou égal {1}' },
    { source: '{0} is not less than or equals {1}', target: "{0} n'est pas inférieur ou égal {1}" },

    { source: 'one of', target: 'un des' },
    { source: 'is one of', target: 'fait partie de' },
    { source: 'is not one of', target: "n'est pas l'un des" },
    { source: '{0} is one of {1}', target: "{0} est l'un des {1}" },
    { source: '{0} is not one of {1}', target: "{0} n'est pas l'un des {1}" },

    { source: 'is null', target: 'est nul' },
    { source: 'is not null', target: 'est non nulle' },
    { source: '{0} is null', target: '{0} est nul' },
    { source: '{0} is not null', target: "{0} n'est pas nul" },

    { source: 'is future', target: 'est futur' },
    { source: 'in the future', target: "à l'avenir" },
    { source: 'is not in the future', target: "n'est pas dans le futur" },
    { source: '{0} is in the future', target: '{0} est dans le futur' },
    { source: '{0} is not in the future', target: "{0} n'est pas dans le futur" },

    { source: 'is past', target: 'est passé' },
    { source: 'in the past', target: 'autrefois' },
    { source: 'is not in the past', target: "n'est pas dans le passé" },
    { source: '{0} is in the past', target: '{0} est dans le passé' },
    { source: '{0} is not in the past', target: "{0} n'est pas dans le passé" },

    { source: 'is Today', target: "c'est aujourd'hui" },
    { source: 'today', target: "aujourd'hui" },
    { source: 'is not today', target: "n'est pas aujourd'hui" },
    { source: '{0} is today', target: "{0} est aujourd'hui" },
    { source: '{0} is not today', target: "{0} n'est pas aujourd'hui" },

    { source: 'is Yesterday', target: 'est hier' },
    { source: 'yesterday', target: 'hier' },
    { source: 'is not yesterday', target: "n'est pas hier" },
    { source: '{0} is yesterday', target: '{0} est hier' },
    { source: '{0} is not yesterday', target: "{0} n'est pas hier" },

    { source: 'is Last Week', target: 'est la semaine dernière' },
    { source: 'last week', target: 'La semaine dernière' },
    { source: 'is not last week', target: "n'est pas la semaine dernière" },
    { source: '{0} is last week', target: '{0} est la semaine dernière' },
    { source: '{0} is not last week', target: "{0} n'est pas la semaine dernière" },

    { source: 'is Last Month', target: 'est le mois dernier' },
    { source: 'last month', target: 'le mois dernier' },
    { source: 'is not last month', target: "n'est pas le mois dernier" },
    { source: '{0} is last month', target: '{0} est le mois dernier' },
    { source: '{0} is not last month', target: "{0} n'est pas le mois dernier" },

    { source: 'is Last Quarter', target: 'est le dernier trimestre' },
    { source: 'last quarter', target: 'le dernier quart' },
    { source: 'is not last quarter', target: "n'est pas au dernier trimestre" },
    { source: '{0} is last quarter', target: '{0} est le dernier trimestre' },
    { source: '{0} is not last quarter', target: "{0} n'est pas au dernier trimestre" },

    { source: 'is Last Year', target: "est l'année dernière" },
    { source: 'last year', target: "l'année dernière" },
    { source: 'is not last year', target: "n'est pas l'année dernière" },
    { source: '{0} is last year', target: "{0} est l'année dernière" },
    { source: '{0} is not last year', target: "{0} n'est pas l'année dernière" },

    { source: 'is Last X Days', target: 'est X derniers jours' },
    { source: 'last X days', target: 'Dernier x jours' },
    { source: 'is not last X days', target: "n'est pas les derniers jours" },
    { source: '{0} is last {1} days', target: '{0} est le dernier {1} jours' },
    { source: '{0} is not last {1} days', target: "{0} n'est pas le dernier {1} jours" },

    { source: 'is Current Week', target: 'est la semaine en cours' },
    { source: 'current week', target: 'la semaine en cours' },
    { source: 'is not current week', target: "n'est pas la semaine en cours" },
    { source: '{0} is current week', target: '{0} est la semaine en cours' },
    { source: '{0} is not current week', target: "{0} n'est pas la semaine en cours" },

    { source: 'is Current Month', target: 'est le mois en cours' },
    { source: 'current month', target: 'le mois en cours' },
    { source: 'is not current month', target: "n'est pas le mois en cours" },
    { source: '{0} is current month', target: '{0} est le mois en cours' },
    { source: '{0} is not current month', target: "{0} n'est pas le mois en cours" },

    { source: 'is Current Quarter', target: 'est le trimestre en cours' },
    { source: 'current quarter', target: 'trimestre en cours' },
    { source: 'is not current quarter', target: "n'est pas le trimestre en cours" },
    { source: '{0} is current quarter', target: '{0} est le trimestre en cours' },
    { source: '{0} is not current quarter', target: "{0} n'est pas le trimestre en cours" },

    { source: 'is Current Year', target: "est l'année en cours" },
    { source: 'current year', target: 'année en cours' },
    { source: 'is not current year', target: "n'est pas l'année en cours" },
    { source: '{0} is current year', target: "{0} est l'année en cours" },
    { source: '{0} is not current year', target: "{0} n'est pas l'année en cours" },

    { source: 'is Previous Week', target: 'est la semaine précédente' },
    { source: 'previous week', target: 'la semaine précédente' },
    { source: 'is not previous week', target: "n'est pas la semaine précédente" },
    { source: '{0} is previous week', target: '{0} est la semaine précédente' },
    { source: '{0} is not previous week', target: "{0} n'est pas la semaine précédente" },

    { source: 'is Previous Month', target: 'est le mois précédent' },
    { source: 'previous month', target: 'le mois précédent' },
    { source: 'is not previous month', target: "n'est pas le mois précédent" },
    { source: '{0} is previous month', target: '{0} est le mois précédent' },
    { source: '{0} is not previous month', target: "{0} n'est pas le mois précédent" },

    { source: 'is Previous Quarter', target: 'est le trimestre précédent' },
    { source: 'previous quarter', target: 'trimestre précédent' },
    { source: 'is not previous quarter', target: "n'est pas le trimestre précédent" },
    { source: '{0} is previous quarter', target: '{0} est le trimestre précédent' },
    { source: '{0} is not previous quarter', target: "{0} n'est pas le trimestre précédent" },

    { source: 'is Previous Year', target: "est l'année précédente" },
    { source: 'previous year', target: 'année précédente' },
    { source: 'is not previous year', target: "n'est pas l'année précédente" },
    { source: '{0} is previous year', target: "{0} est l'année précédente" },
    { source: '{0} is not previous year', target: "{0} n'est pas l'année précédente" },

    { source: 'is Previous X Days', target: 'est X jours précédents' },
    { source: 'previous X days', target: 'X jours précédents' },
    { source: 'is not previous X days', target: "n'est pas des jours x précédents" },
    { source: '{0} is previous {1} days', target: '{0} est précédent {1} jours' },
    { source: '{0} is not previous {1} days', target: "{0} n'est pas précédent {1} jours" },

    { source: 'is empty', target: 'est vide' },
    { source: 'is not empty', target: "n'est pas vide" },
    { source: '{0} is empty', target: '{0} est vide' },
    { source: '{0} is not empty', target: "{0} n'est pas vide" },

    { source: 'covered by', target: 'couvert par' },
    { source: 'is not covered by', target: "n'est pas couvert par" },
    { source: '{0} covered by {1}', target: '{0} couvert par {1}' },
    { source: '{0} is not covered by {1}', target: "{0} n'est pas couvert par {1}" },

    // Activity log
    { source: 'No activities found', target: 'Aucune activité trouvée' },
    {
      source: 'Start to working with data to log activities.',
      target: 'Commencez à travailler avec des données pour enregistrer les activités.'
    },
    { source: 'All Activity', target: 'Toutes les activités' },
    { source: 'Create Record', target: 'Créer un enregistrement' },
    { source: 'Update Record', target: "Mettre à jour l'enregistrement" },
    { source: 'Delete Record', target: "Supprimer l'enregistrement" },
    { source: 'All Members', target: 'Tous les membres' },

    // Collaboration
    { source: 'Timeline', target: 'Chronologie' },
    { source: 'Messages', target: 'messages' },
    { source: 'Activity', target: 'Activité' },
    { source: 'Start chatting with your team', target: 'Commencez à discuter avec votre équipe' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'Prenez un message sur la page actuelle pour garder une trace des informations importantes.'
    },
    { source: 'Your Message', target: 'Votre message' },
    { source: 'Send', target: 'Envoyer' },

    // Share
    { source: 'Invite members', target: 'Inviter des membres' },
    { source: 'Public share', target: 'Partage public' },
    { source: 'Sign Up', target: "S'inscrire" },
    { source: 'Members', target: 'Membres' },
    { source: 'Invite with Email', target: 'Inviter par e-mail' },
    { source: 'Invite someone...', target: "Invitez quelqu'un..." },
    { source: 'Send Invite', target: 'Envoyer une invitation' },
    {
      source: 'Limit access to your data by user properties',
      target: "Limitez l'accès à vos données par propriétés utilisateur"
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: "Saisissez l'adresse e-mail de l'utilisateur que vous souhaitez inviter à collaborer."
    },
    { source: 'Copy', target: 'Copie' },
    { source: 'Invite with Link', target: 'Inviter avec lien' },
    { source: 'Remove link', target: 'Supprimer le lien' },
    { source: 'Add Invite Link', target: "Ajouter un lien d'invitation" },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: "Toute personne sur internet disposant de ce lien pourra rejoindre l'équipe sélectionnée."
    },
    { source: 'Pending Invites', target: 'Invitations en attente' },
    { source: 'Cancel invite', target: "Annuler l'invitation" },
    { source: 'Active Members', target: 'Membres actifs' },
    { source: 'Remove member', target: 'Supprimer un membre' },
    {
      source: 'You are setting sharing for the current page',
      target: 'Vous configurez le partage pour la page actuelle'
    },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'Vous configurez le partage pour toutes les pages de votre application.'
    },
    { source: 'Public access link', target: "Lien d'accès public" },
    { source: 'Updating public access...', target: "Mise à jour de l'accès public..." },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'Toute personne disposant de ce lien pourra voir la page actuelle. De cette façon, vous pouvez également intégrer la page actuelle dans un autre site Web.'
    },
    { source: 'Embed code (IFRAME)', target: "Code d'intégration (IFRAME)" },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: 'Collez ce code dans le code HTML de votre site Web où vous souhaitez que la page actuelle apparaisse.'
    },
    { source: 'link', target: 'lien' },
    { source: 'invited', target: 'invité' },
    { source: 'Choose Team', target: "Choisissez l'équipe" },
    { source: 'App Teams', target: "Équipes d'application" },
    { source: 'Built-In Teams', target: 'Équipes intégrées' },
    { source: 'Clear Team', target: "Effacer l'équipe" },
    { source: 'Can build application and modify data', target: 'Peut créer une application et modifier des données' },
    { source: 'Can modify data in application', target: "Peut modifier les données dans l'application" },
    {
      source: 'Can only view data without modification',
      target: 'Peut uniquement afficher les données sans modification'
    },
    { source: 'Add Team', target: 'Ajouter une équipe' },
    { source: 'Edit Team', target: "Modifier l'équipe" },
    { source: 'Adding Team', target: 'Ajouter une équipe' },
    {
      source: 'Keep control over who has access to current App',
      target: "Gardez le contrôle sur qui a accès à l'application actuelle"
    },
    { source: 'Enter Team Name', target: "Entrez le nom de l'équipe" },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: "Tapez le nom de l'équipe, c'est-à-dire : Support, Ventes, Marketing, etc."
    },
    { source: 'Add a new member to this team.', target: 'Ajouter un nouveau membre à cette équipe.' },
    { source: 'Invite new member', target: 'Inviter un nouveau membre' },
    { source: 'User', target: 'Utilisateur' },
    { source: 'Date Added', target: 'date ajoutée' },
    { source: 'You', target: 'Vous' },
    { source: 'Edit', target: 'Éditer' },
    { source: 'No users in this team', target: 'Aucun utilisateur dans cette équipe' },
    { source: 'Page Permissions', target: 'Autorisations de page' },
    { source: 'App Permissions', target: "Autorisations d'application" },
    { source: 'Properties', target: 'Propriétés' },
    { source: 'Page name', target: 'Nom de la page' },
    { source: 'Access', target: 'Accéder' },
    { source: 'Full Access', target: 'Accès total' },
    { source: 'Read Only', target: 'Lecture seule' },
    { source: 'No Access', target: "Aucun accès" },
    { source: 'Read', target: 'Lire' },
    { source: 'Update', target: 'Mise à jour' },
    { source: 'Write', target: 'Écrire' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'autorisations' },
    { source: 'Custom Access', target: 'Accès personnalisé' },
    { source: 'Read, create, update and delete data', target: 'Lire, créer, mettre à jour et supprimer des données' },
    { source: 'Choose allowed operations granularly', target: 'Choisissez les opérations autorisées avec précision' },
    { source: 'Without any access to data', target: 'Sans aucun accès aux données' },
    { source: 'Name', target: 'Nom' },
    { source: 'Active', target: 'Actif' },
    { source: 'Settings', target: 'Réglages' },
    { source: 'Members and Teams', target: 'Membres et équipes' },
    { source: 'App Builder', target: "Créateur d'applications" },
    { source: 'Collection Permissions', target: 'Autorisations de collecte' },
    {
      source: "Grant permissions to app's collection",
      target: "Accorder des autorisations à la collection de l'application"
    },
    { source: 'Collection', target: 'Collection' },
    {
      source: 'Limit access to your data by team properties',
      target: "Limitez l'accès à vos données par propriétés d'équipe"
    },
    { source: 'Cancel', target: 'Annuler' },
    { source: 'Save Team', target: "Enregistrer l'équipe" },
    { source: 'Create Team', target: 'Créer une équipe' },
    { source: 'Value', target: 'Évaluer' },
    { source: 'No properties specified', target: 'Aucune propriété spécifiée' },

    // Navigation
    { source: 'Current App', target: 'Application actuelle' },
    { source: 'Home', target: 'Accueil' },

    // Profile
    { source: 'Loading', target: 'Chargement' },
    {
      source: 'We are fetching user data, please, wait...',
      target: "Nous récupérons les données de l'utilisateur, veuillez patienter..."
    },
    { source: 'Profile Settings', target: 'Paramètres de profil' },
    { source: 'Basic information about your account.', target: 'Informations de base sur votre compte.' },
    { source: 'Photo', target: 'Photo' },
    { source: 'your photo', target: 'ta photo' },
    { source: 'Change', target: 'Modifier' },
    { source: 'Upload', target: 'Téléverser' },
    { source: 'First Name', target: 'Prénom' },
    { source: 'Last Name', target: 'Nom de famille' },
    { source: 'Your Email', target: 'Votre e-mail' },
    { source: 'Password Change', target: 'Changement de mot de passe' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target:
        'Un mot de passe doit être suffisamment fort pour protéger votre compte, alors faites-en au moins 12 caractères.'
    },
    { source: 'Current Password', target: 'Mot de passe actuel' },
    { source: 'New Password', target: 'nouveau mot de passe' },
    { source: 'Confirm New Password', target: 'Confirmer le nouveau mot de passe' },
    { source: 'Change Password', target: 'Changer le mot de passe' },
    { source: 'Personal Preferences', target: 'Préférences personnelles' },
    { source: 'Language', target: 'Langue' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'Personnalisez des préférences supplémentaires pour votre compte.'
    },
    { source: 'News & Proposals', target: 'Nouvelles' },
    { source: 'Subscribe to our updates and proposals.', target: 'Abonnez-vous à nos mises à jour et nos offres.' },
    { source: 'Save changes', target: 'Sauvegarder les modifications' },

    // My Apps
    { source: 'Type to search...', target: 'Tapez pour rechercher...' },
    { source: 'My Apps', target: 'Mes applications' },
    { source: 'New App', target: 'Nouvelle application' },
    { source: 'Builder', target: 'Constructeur' },
    { source: 'App', target: 'Application' },
    { source: 'continue install', target: "continuer l'installation" },
    { source: 'Open builder', target: 'Générateur ouvert' },
    { source: 'View published', target: 'Voir publié' },
    { source: 'Delete App', target: "Supprimer l'application" },
    { source: 'Start from a template', target: "Partir d'un modèle" },
    { source: 'Preview', target: 'Aperçu' },
    { source: 'Contact Support', target: 'Contactez le support' },
    { source: 'Documentation', target: 'Documentation' },
    { source: 'Feature Requests', target: 'Requêtes de nouvelles fonctionnalités' },
    { source: 'See What’s New', target: "Regardez ce qu'il y a de nouveau" },
    { source: 'Search templates...', target: 'Rechercher des modèles...' },
    { source: 'any', target: "n'importe quel" },
    { source: 'more', target: 'Suite' },
    { source: 'Choose Data Source', target: 'Choisissez la source de données' },
    { source: 'works with 30+ data sources', target: 'fonctionne avec 30 sources de données' },
    { source: 'Use this template', target: 'Utilisez ce modèle' },
    { source: 'stores data in Jet Tables', target: 'stocke les données dans des tables Jet' },
    { source: 'New Data', target: 'Nouvelles données' },
    { source: 'using {0}', target: 'en utilisant {0}' },
    {
      source: "Can't find resource you're looking for?",
      target: 'Vous ne trouvez pas la ressource que vous recherchez ?'
    },
    { source: 'Admin Panel', target: "panneau d'administration" },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'Répertorier, créer et mettre à jour (CRUD) les opérations en plus de vos données'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target:
        "Créez un panneau d'administration personnalisé à partir de n'importe quelles bases de données, applications et API telles que Stripe, Twilio et GraphQL."
    },
    { source: 'All Integrations', target: 'Toutes les intégrations' },
    { source: 'Databases', target: 'Bases de données' },
    { source: 'APIs', target: 'Apis' },
    { source: 'Frameworks', target: 'Cadres' },
    { source: 'Storages', target: 'Stockages' },

    // Sign In
    { source: 'Please wait...', target: "Merci de patienter..." },
    { source: 'Good morning', target: 'Bonjour' },
    { source: 'Good afternoon', target: 'Bonjour' },
    { source: 'Good evening', target: 'Bonsoir' },
    { source: 'Sign In', target: "S'identifier" },
    { source: 'Welcome Back.', target: 'Content de te revoir.' },
    { source: 'Sign in with {0}', target: 'Connectez-vous avec {0}' },
    { source: 'or login with', target: 'ou connectez-vous avec' },
    { source: 'Enter E-mail', target: "Entrez l'e-mail" },
    { source: 'Enter password', target: 'Entrer le mot de passe' },
    { source: 'Login', target: 'Connexion' },
    { source: 'Create new account', target: 'Créer un nouveau compte' },
    { source: 'Forgot my password', target: 'Mot de passe oublié' },
    { source: 'required', target: 'obligatoire' },
    { source: 'incorrect Email', target: 'Adresse Email incorrecte' },
    { source: 'Minimum password length {0}', target: 'Longueur minimale du mot de passe {0}' },
    { source: 'Unable to Sign In', target: 'Impossible de se connecter' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'Commencez <span class="auth-form__accent">gratuitement dès aujourd\'hui</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target:
        "Aucune carte requise. Vous bénéficierez gratuitement de toutes les fonctionnalités avancées pendant l'essai PRO de 14 jours."
    },
    { source: 'or', target: 'ou' },
    { source: 'Enter First Name', target: 'Entrez votre prénom' },
    { source: 'Enter Last Name (optional)', target: 'Entrez le nom de famille (facultatif)' },
    { source: 'Enter Email', target: "Entrez l'e-mail" },
    { source: 'Password', target: 'Mot de passe' },
    { source: 'Repeat Password', target: 'Répéter le mot de passe' },
    {
      source: 'Creating an account means you’re okay with our',
      target: "En créant un compte, vous signifiez que vous êtes d'accord avec notre"
    },
    { source: 'Terms of Service', target: "Conditions d'utilisation" },
    { source: 'Privacy Policy', target: 'Politique de confidentialité' },
    { source: 'and', target: 'et' },
    { source: 'Create your free account', target: 'Créez votre compte gratuit' },
    { source: 'Already have an account', target: 'Vous avez déjà un compte' },
    { source: 'Unable to Sign Up', target: "Impossible de s'inscrire" },

    // Restore password
    { source: 'Reset your password', target: 'réinitialisez votre mot de passe' },
    { source: 'Email Address', target: 'Adresse e-mail' },
    { source: 'Reset password', target: 'Réinitialiser le mot de passe' },
    { source: 'Return to Sign In', target: 'Revenir à la connexion' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'Veuillez vérifier votre e-mail - <strong>{0}</strong> . Nous vous avons envoyé le lien de validation à suivre pour changer votre mot de passe.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be al least 8 characters.',
      target:
        'Presque terminé, entrez simplement votre nouveau mot de passe ci-dessous.<br> Il doit contenir au moins 8 caractères.'
    },
    { source: 'Reset password & Sign In', target: 'Réinitialiser le mot de passe' },
    { source: 'Unable to Send Code', target: "Impossible d'envoyer le code" },
    { source: 'Unable to Change Password', target: 'Impossible de modifier le mot de passe' },

    // Users & Teams
    { source: 'Members of {0}', target: 'Membres de {0}' },
    { source: 'How to get started', target: 'Comment débuter' },
    { source: 'Users API', target: 'API des utilisateurs' },
    { source: 'Teams API', target: 'API des équipes' },
    { source: 'Invite Member', target: 'Inviter un membre' },
    { source: 'Add User property', target: 'Ajouter une propriété utilisateur' },
    { source: 'Add Team property', target: "Ajouter une propriété d'équipe" },
    { source: 'Add', target: 'Ajouter' },
    { source: 'Edit property', target: 'Modifier la propriété' },
    { source: 'Delete property', target: 'Supprimer la propriété' },
    { source: 'Users', target: 'Utilisateurs' },
    { source: 'Teams', target: 'Équipes' },
    { source: 'Search members', target: 'Rechercher des membres' },
    { source: 'Search teams', target: 'Rechercher des équipes' },
    { source: '{0} pages', target: '{0}pages' },
    { source: 'No members', target: 'Aucun membre' }
  ]
};

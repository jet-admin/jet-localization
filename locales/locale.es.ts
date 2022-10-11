import { Locale } from './locale';

export const locale: Locale = {
  name: 'spanish',
  language: 'es',
  items: [
    // General
    { source: 'Save', target: 'Ahorrar' },
    { source: 'Create', target: 'Crear' },
    { source: 'Duplicating', target: 'duplicando' },
    { source: 'Duplicate', target: 'Duplicar' },
    { source: 'Mass Edit', target: 'Edición masiva' },
    { source: 'Export', target: 'Exportar' },
    { source: 'Import', target: 'Importar' },
    { source: 'Delete', target: 'Borrar' },

    // Fields
    { source: 'optional', target: 'opcional' },
    { source: 'Choose', target: 'Elegir' },
    { source: 'Clear value', target: 'Borrar valor' },
    { source: 'loading...', target: 'cargando...' },
    { source: 'Nothing found', target: 'Nada Encontrado' },
    { source: 'Search...', target: 'Búsqueda...' },
    { source: 'Enter at least {0} characters', target: 'Introduzca al menos {0} caracteres' },

    // List components
    { source: 'Filter', target: 'Filtrar' },
    { source: 'Exclude', target: 'Excluir' },
    { source: 'Actions', target: 'Comportamiento' },
    { source: 'Search', target: 'Búsqueda' },
    { source: 'Refresh automatically', target: 'Actualizar automáticamente' },
    { source: 'All', target: 'Todos' },
    { source: 'Selected', target: 'Seleccionado' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'Desafortunadamente, no se encontró ningún {0} que coincida con su consulta'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'Estamos recuperando {0}, por favor, espere...' },
    { source: 'Add filter', target: 'Añadir filtro' },
    { source: 'Toggle ordering', target: 'Alternar pedido' },
    { source: 'Loading failed', target: 'Carga fallida' },
    { source: 'Not configured', target: 'No configurado' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'Desafortunadamente, este componente aún no está configurado.'
    },
    { source: 'records', target: 'registros' },
    { source: '{0} items', target: '{0} artículos' },

    // Menu
    { source: 'Users & Teams', target: 'Usuarios' },
    { source: 'Billing', target: 'Facturación' },
    { source: 'Billing & Plans', target: 'Facturación' },
    { source: 'API keys', target: 'claves API' },
    { source: 'Dark Mode', target: 'Modo oscuro' },
    { source: 'Light Mode', target: 'Modo de luz' },
    { source: 'Disable Staff', target: 'Deshabilitar personal' },
    { source: 'Enable Staff', target: 'Habilitar personal' },
    { source: 'Manage Templates', target: 'Administrar plantillas' },
    { source: 'Logout', target: 'Cerrar sesión' },
    { source: 'Activity Log', target: 'Registro de actividades' },
    { source: 'Collaborations', target: 'Colaboraciones' },
    { source: 'Open Visual Builder', target: 'Abra el constructor visual' },

    // Filters
    { source: 'equals', target: 'es igual' },
    { source: 'contains', target: 'contiene' },
    { source: 'starts with', target: 'comienza con' },
    { source: 'ends with', target: 'termina con' },
    { source: 'greater than', target: 'mas grande que' },
    { source: 'greater than or equals', target: 'mayor que o igual' },
    { source: 'less than', target: 'menos que' },
    { source: 'less than or equals', target: 'menor que o igual' },
    { source: 'one of', target: 'uno de' },
    { source: 'is null', target: 'es nulo' },
    { source: 'is future', target: 'es futuro' },
    { source: 'is past', target: 'es pasado' },
    { source: 'is Today', target: 'es hoy' },
    { source: 'is Yesterday', target: 'es ayer' },
    { source: 'is Last Week', target: 'es la semana pasada' },
    { source: 'is Last Month', target: 'es el mes pasado' },
    { source: 'is Last Quarter', target: 'es el último trimestre' },
    { source: 'is Last Year', target: 'es el año pasado' },
    { source: 'is Last X Days', target: 'son los últimos X días' },
    { source: 'is Previous Week', target: 'es la semana anterior' },
    { source: 'is Previous Month', target: 'es el mes anterior' },
    { source: 'is Previous Quarter', target: 'es el trimestre anterior' },
    { source: 'is Previous Year', target: 'es el año anterior' },
    { source: 'is Previous X Days', target: 'es X días anteriores' },
    { source: 'No activities found', target: 'No se encontraron actividades' },
    {
      source: 'Start to working with data to log activities.',
      target: 'Comience a trabajar con datos para registrar actividades.'
    },

    // Activity log
    { source: 'All Activity', target: 'Toda la actividad' },
    { source: 'Create Record', target: 'Crear registro' },
    { source: 'Update Record', target: 'Actualizar registro' },
    { source: 'Delete Record', target: 'Eliminar el registro' },
    { source: 'All Members', target: 'Todos los miembros' },

    // Collaboration
    { source: 'Timeline', target: 'Cronología' },
    { source: 'Messages', target: 'Mensajes' },
    { source: 'Activity', target: 'Actividad' },
    { source: 'Start chatting with your team', target: 'Comienza a chatear con tu equipo' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'Tome un mensaje sobre la página actual para realizar un seguimiento de la información importante.'
    },
    { source: 'Your Message', target: 'Tu mensaje' },
    { source: 'Send', target: 'Enviar' },

    // Share
    { source: 'Invite members', target: 'Invitar a los miembros' },
    { source: 'Public share', target: 'Compartir público' },
    { source: 'Sign Up', target: 'Inscribirse' },
    { source: 'Members', target: 'miembros' },
    { source: 'Invite with Email', target: 'Invitar con correo electrónico' },
    { source: 'Invite someone...', target: 'Invita a alguien...' },
    { source: 'Send Invite', target: 'Enviar invitación' },
    {
      source: 'Limit access to your data by user properties',
      target: 'Limite el acceso a sus datos por propiedades de usuario'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: 'Introduce el correo electrónico del usuario al que te gustaría invitar a colaborar.'
    },
    { source: 'Copy', target: 'Copiar' },
    { source: 'Invite with Link', target: 'Invitar con enlace' },
    { source: 'Remove link', target: 'Remover enlace' },
    { source: 'Add Invite Link', target: 'Añadir enlace de invitación' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'Cualquier persona en Internet con este enlace podrá unirse al equipo seleccionado.'
    },
    { source: 'Pending Invites', target: 'Invitaciones pendientes' },
    { source: 'Cancel invite', target: 'Cancelar invitación' },
    { source: 'Active Members', target: 'Miembros activos' },
    { source: 'Remove member', target: 'Quitar miembro' },
    {
      source: 'You are setting sharing for the current page',
      target: 'Está configurando compartir para la página actual'
    },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'Está configurando compartir para todas las páginas de su aplicación.'
    },
    { source: 'Public access link', target: 'Enlace de acceso público' },
    { source: 'Updating public access...', target: 'Actualizando el acceso público...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'Cualquier persona con este enlace podrá ver la página actual. De esta manera, también puede incrustar la página actual en otro sitio web.'
    },
    { source: 'Embed code (IFRAME)', target: 'Código de inserción (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: 'Pegue este código en el código HTML de su sitio web donde desea que aparezca la página actual.'
    },
    { source: 'link', target: 'Enlace' },
    { source: 'invited', target: 'invitado' },
    { source: 'Choose Team', target: 'Elige equipo' },
    { source: 'App Teams', target: 'Equipos de aplicaciones' },
    { source: 'Built-In Teams', target: 'Equipos Integrados' },
    { source: 'Clear Team', target: 'Borrar equipo' },
    { source: 'Can build application and modify data', target: 'Puede crear aplicaciones y modificar datos.' },
    { source: 'Can modify data in application', target: 'Puede modificar los datos en la aplicación' },
    { source: 'Can only view data without modification', target: 'Solo puede ver datos sin modificar' },
    { source: 'Add Team', target: 'Agregar equipo' },
    { source: 'Edit Team', target: 'Editar equipo' },
    { source: 'Adding Team', target: 'Agregar equipo' },
    {
      source: 'Keep control over who has access to current App',
      target: 'Mantenga el control sobre quién tiene acceso a la aplicación actual'
    },
    { source: 'Enter Team Name', target: 'Ingrese el nombre del equipo' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'Escriba el nombre del equipo, es decir: Soporte, Ventas, Marketing, etc.'
    },
    { source: 'Add a new member to this team.', target: 'Agregar un nuevo miembro a este equipo.' },
    { source: 'Invite new member', target: 'Invitar a un nuevo miembro' },
    { source: 'User', target: 'Usuario' },
    { source: 'Date Added', target: 'Fecha Agregada' },
    { source: 'You', target: 'Tú' },
    { source: 'Edit', target: 'Editar' },
    { source: 'No users in this team', target: 'No hay usuarios en este equipo' },
    { source: 'Page Permissions', target: 'Permisos de página' },
    { source: 'App Permissions', target: 'Permisos de la aplicación' },
    { source: 'Properties', target: 'Propiedades' },
    { source: 'Page name', target: 'Nombre de la página' },
    { source: 'Access', target: 'Acceso' },
    { source: 'Full Access', target: 'Acceso completo' },
    { source: 'Read Only', target: 'Solo lectura' },
    { source: 'No Access', target: 'Sin acceso' },
    { source: 'Read', target: 'Leer' },
    { source: 'Update', target: 'Actualizar' },
    { source: 'Write', target: 'Escribe' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'permisos' },
    { source: 'Custom Access', target: 'Acceso personalizado' },
    { source: 'Read, create, update and delete data', target: 'Leer, crear, actualizar y eliminar datos' },
    { source: 'Choose allowed operations granularly', target: 'Elija las operaciones permitidas de forma granular' },
    { source: 'Without any access to data', target: 'Sin ningún acceso a los datos' },
    { source: 'Name', target: 'Nombre' },
    { source: 'Active', target: 'Activo' },
    { source: 'Settings', target: 'Ajustes' },
    { source: 'Members and Teams', target: 'Miembros y Equipos' },
    { source: 'App Builder', target: 'Creador de aplicaciones' },
    { source: 'Collection Permissions', target: 'Permisos de colección' },
    { source: "Grant permissions to app's collection", target: 'Otorgar permisos a la colección de la aplicación' },
    { source: 'Collection', target: 'Recopilación' },
    {
      source: 'Limit access to your data by team properties',
      target: 'Limite el acceso a sus datos por propiedades del equipo'
    },
    { source: 'Cancel', target: 'Cancelar' },
    { source: 'Save Team', target: 'Guardar equipo' },
    { source: 'Create Team', target: 'Crear equipo' },
    { source: 'Value', target: 'Valor' },
    { source: 'No properties specified', target: 'No se especifican propiedades' },

    // Navigation
    { source: 'Current App', target: 'Aplicación actual' },
    { source: 'Home', target: 'Hogar' },

    // Profile
    { source: 'Loading', target: 'Cargando' },
    {
      source: 'We are fetching user data, please, wait...',
      target: 'Estamos obteniendo datos de usuario, por favor, espere...'
    },
    { source: 'Back', target: 'atrás' },
    { source: 'Profile Settings', target: 'Configuración de perfil' },
    { source: 'Basic information about your account.', target: 'Información básica sobre su cuenta.' },
    { source: 'Photo', target: 'Foto' },
    { source: 'your photo', target: 'tu foto' },
    { source: 'Change', target: 'Cambio' },
    { source: 'Upload', target: 'Subir' },
    { source: 'First Name', target: 'Primer nombre' },
    { source: 'Last Name', target: 'Apellido' },
    { source: 'Your Email', target: 'Tu correo electrónico' },
    { source: 'Password Change', target: 'Cambio de contraseña' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target:
        'Una contraseña debe ser lo suficientemente fuerte para proteger su cuenta, así que hágala de al menos 12 caracteres.'
    },
    { source: 'Current Password', target: 'contraseña actual' },
    { source: 'New Password', target: 'Nueva contraseña' },
    { source: 'Confirm New Password', target: 'Confirmar nueva contraseña' },
    { source: 'Change Password', target: 'Cambia la contraseña' },
    { source: 'Personal Preferences', target: 'Preferencias personales' },
    { source: 'Language', target: 'Idioma' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'Personalice preferencias adicionales para su cuenta.'
    },
    { source: 'News & Proposals', target: 'Noticias' },
    {
      source: 'Subscribe to our updates and proposals.',
      target: 'Suscríbete a nuestras actualizaciones y propuestas.'
    },
    { source: 'Save changes', target: 'Guardar cambios' },

    // My Apps
    { source: 'Type to search...', target: 'Escribe para buscar...' },
    { source: 'My Apps', target: 'Mis aplicaciones' },
    { source: 'New App', target: 'Nueva aplicación' },
    { source: 'Builder', target: 'Constructor' },
    { source: 'App', target: 'aplicación' },
    { source: 'continue install', target: 'continuar con la instalación' },
    { source: 'Open builder', target: 'constructor abierto' },
    { source: 'View published', target: 'Ver publicado' },
    { source: 'Delete App', target: 'Eliminar aplicación' },
    { source: 'Start from a template', target: 'Empezar desde una plantilla' },
    { source: 'Preview', target: 'Avance' },
    { source: 'Contact Support', target: 'Soporte de contacto' },
    { source: 'Documentation', target: 'Documentación' },
    { source: 'Feature Requests', target: 'Peticiones de características' },
    { source: 'See What’s New', target: 'Ver qué hay de nuevo' },
    { source: 'Search templates...', target: 'Buscar plantillas...' },
    { source: 'any', target: 'ningún' },
    { source: 'more', target: 'más' },
    { source: 'Choose Data Source', target: 'Elija fuente de datos' },
    { source: 'works with 30+ data sources', target: 'funciona con 30 fuentes de datos' },
    { source: 'Use this template', target: 'Usa esta plantilla' },
    { source: 'stores data in Jet Tables', target: 'almacena datos en Jet Tables' },
    { source: 'New Data', target: 'Nuevos datos' },
    { source: 'using {0}', target: 'usando {0}' },
    { source: "Can't find resource you're looking for?", target: '¿No puede encontrar el recurso que está buscando?' },
    { source: 'Admin Panel', target: 'Panel de administrador' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'Operaciones de lista, creación y actualización (CRUD) además de sus datos'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target:
        'Cree un panel de administración personalizado basado en cualquier base de datos, aplicaciones y API como Stripe, Twilio y GraphQL.'
    },
    { source: 'All Integrations', target: 'Todas las integraciones' },
    { source: 'Databases', target: 'bases de datos' },
    { source: 'APIs', target: 'API' },
    { source: 'Frameworks', target: 'Marcos' },
    { source: 'Storages', target: 'Almacenamientos' },

    // Sign In
    { source: 'Please wait...', target: 'Espere por favor...' },
    { source: 'Good morning', target: 'Buenos dias' },
    { source: 'Good afternoon', target: 'Buenas tardes' },
    { source: 'Good evening', target: 'Buenas noches' },
    { source: 'Sign In', target: 'Registrarse' },
    { source: 'Welcome Back.', target: 'Bienvenido de nuevo.' },
    { source: 'Sign in with {0}', target: 'Iniciar sesión con {0}' },
    { source: 'or login with', target: 'o inicia sesión con' },
    { source: 'Enter E-mail', target: 'Ingrese correo electrónico' },
    { source: 'Enter password', target: 'Introducir la contraseña' },
    { source: 'Login', target: 'Acceso' },
    { source: 'Create new account', target: 'Crear una nueva cuenta' },
    { source: 'Forgot my password', target: 'Olvidé mi contraseña' },
    { source: 'required', target: 'requerido' },
    { source: 'incorrect Email', target: 'email incorrecto' },
    { source: 'Minimum password length {0}', target: 'Longitud mínima de la contraseña {0}' },
    { source: 'Unable to Sign In', target: 'Incapaz de acceder' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'Comience <span class="auth-form__accent">gratis hoy</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target:
        'No se requiere tarjeta. Obtendrá todas las funciones avanzadas de forma gratuita durante la prueba PRO de 14 días.'
    },
    { source: 'or', target: 'o' },
    { source: 'Enter First Name', target: 'Ingrese el nombre' },
    { source: 'Enter Last Name (optional)', target: 'Ingrese el apellido (opcional)' },
    { source: 'Enter Email', target: 'Ingrese correo electrónico' },
    { source: 'Password', target: 'Clave' },
    { source: 'Repeat Password', target: 'Repita la contraseña' },
    {
      source: 'Creating an account means you’re okay with our',
      target: 'Crear una cuenta significa que está de acuerdo con nuestro'
    },
    { source: 'Terms of Service', target: 'Términos de servicio' },
    { source: 'Privacy Policy', target: 'Política de privacidad' },
    { source: 'and', target: 'y' },
    { source: 'Create your free account', target: 'Crea tu cuenta gratuita' },
    { source: 'Already have an account', target: 'Ya tienes una cuenta' },
    { source: 'Unable to Sign Up', target: 'No puedo registrarme' },

    // Restore password
    { source: 'Reset your password', target: 'Restablecer su contraseña' },
    { source: 'Email Address', target: 'Dirección de correo electrónico' },
    { source: 'Reset password', target: 'Restablecer la contraseña' },
    { source: 'Return to Sign In', target: 'Volver a iniciar sesión' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'Verifique su correo electrónico: <strong>{0}</strong> . Le hemos enviado el enlace de validación que debe seguir para cambiar su contraseña.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be al least 8 characters.',
      target:
        'Casi listo, simplemente ingrese su nueva contraseña a continuación.<br> Debe tener al menos 8 caracteres.'
    },
    { source: 'Reset password & Sign In', target: 'Restablecer la contraseña' },
    { source: 'Unable to Send Code', target: 'No se puede enviar el código' },
    { source: 'Unable to Change Password', target: 'No se puede cambiar la contraseña' },

    // Users & Teams
    { source: 'Members of {0}', target: 'miembros de {0}' },
    { source: 'How to get started', target: 'Cómo empezar' },
    { source: 'Users API', target: 'API de usuarios' },
    { source: 'Teams API', target: 'API de equipos' },
    { source: 'Invite Member', target: 'Miembro invitado' },
    { source: 'Add User property', target: 'Agregar propiedad de usuario' },
    { source: 'Add Team property', target: 'Agregar propiedad de equipo' },
    { source: 'Add', target: 'Agregar' },
    { source: 'Edit property', target: 'Editar propiedad' },
    { source: 'Delete property', target: 'Eliminar propiedad' },
    { source: 'Users', target: 'Usuarios' },
    { source: 'Teams', target: 'equipos' },
    { source: 'Search members', target: 'Buscar miembros' },
    { source: 'Search teams', target: 'Buscar equipos' },
    { source: '{0} pages', target: '{0} páginas' },
    { source: 'No members', target: 'Sin miembros' }
  ]
};

import { Locale } from './locale';

export const locale: Locale = {
  name: 'portuguese',
  language: 'pt',
  items: [
    // General
    { source: 'Save', target: 'Salvar' },
    { source: 'Create', target: 'Crio' },
    { source: 'Duplicating', target: 'Duplicando' },
    { source: 'Duplicate', target: 'Duplicada' },
    { source: 'Mass Edit', target: 'Edição em massa' },
    { source: 'Export', target: 'Exportar' },
    { source: 'Import', target: 'Importar' },
    { source: 'Delete', target: 'Excluir' },

    // Fields
    { source: 'optional', target: 'opcional' },
    { source: 'Choose', target: 'Escolher' },
    { source: 'Clear value', target: 'Valor claro' },
    { source: 'loading...', target: 'carregando...' },
    { source: 'Nothing found', target: 'Nada encontrado' },
    { source: 'Search...', target: 'Procurar...' },
    { source: 'Enter at least {0} characters', target: 'Digite pelo menos {0} caracteres' },

    // List components
    { source: 'Filter', target: 'Filtro' },
    { source: 'Exclude', target: 'Excluir' },
    { source: 'Actions', target: 'Ações' },
    { source: 'Search', target: 'Procurar' },
    { source: 'Refresh automatically', target: 'Atualizar automaticamente' },
    { source: 'All', target: 'Tudo' },
    { source: 'Selected', target: 'Selecionada' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'Infelizmente, não {0} correspondendo à sua consulta encontrada'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'Estamos buscando {0}, por favor, espere ...' },
    { source: 'Add filter', target: 'Adicione o filtro' },
    { source: 'Toggle ordering', target: 'Alterar pedidos' },
    { source: 'Loading failed', target: 'O carregamento falhou' },
    { source: 'Not configured', target: 'Não configurado' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'Infelizmente, este componente ainda não está configurado'
    },
    { source: 'records', target: 'registros' },
    { source: '{0} items', target: '{0} itens' },

    // Menu
    { source: 'Users & Teams', target: 'Usuários e equipes' },
    { source: 'Billing', target: 'Cobrança' },
    { source: 'Billing & Plans', target: 'Cobrança e planos' },
    { source: 'API keys', target: 'Chaves da API' },
    { source: 'Dark Mode', target: 'Modo escuro' },
    { source: 'Light Mode', target: 'Modo de luz' },
    { source: 'Disable Staff', target: 'Desative a equipe' },
    { source: 'Enable Staff', target: 'Ativar pessoal' },
    { source: 'Manage Templates', target: 'Gerenciar modelos' },
    { source: 'Logout', target: 'Sair' },
    { source: 'Activity Log', target: 'Registro de atividade' },
    { source: 'Collaborations', target: 'Colaborações' },
    { source: 'Open Visual Builder', target: 'Open Visual Builder' },

    // Filters
    { source: 'equals', target: 'é igual a' },
    { source: 'contains', target: 'contém' },
    { source: 'starts with', target: 'começa com' },
    { source: 'ends with', target: 'termina com' },
    { source: 'greater than', target: 'Maior que' },
    { source: 'greater than or equals', target: 'maior ou igual' },
    { source: 'less than', target: 'Menor que' },
    { source: 'less than or equals', target: 'menor ou igual' },
    { source: 'one of', target: 'um de' },
    { source: 'is null', target: 'é nulo' },
    { source: 'is future', target: 'é futuro' },
    { source: 'is past', target: 'é passado' },
    { source: 'is Today', target: 'é hoje' },
    { source: 'is Yesterday', target: 'é ontem' },
    { source: 'is Last Week', target: 'é a semana passada' },
    { source: 'is Last Month', target: 'é no mês passado' },
    { source: 'is Last Quarter', target: 'é o último trimestre' },
    { source: 'is Last Year', target: 'é no ano passado' },
    { source: 'is Last X Days', target: 'é o último x dias' },
    { source: 'is Previous Week', target: 'é semana anterior' },
    { source: 'is Previous Month', target: 'é mês anterior' },
    { source: 'is Previous Quarter', target: 'é trimestre anterior' },
    { source: 'is Previous Year', target: 'é o ano anterior' },
    { source: 'is Previous X Days', target: 'é anterior x dias' },
    { source: 'No activities found', target: 'Nenhuma atividade encontrada' },
    {
      source: 'Start to working with data to log activities.',
      target: 'Comece a trabalhar com dados para registrar atividades.'
    },

    // Activity log
    { source: 'All Activity', target: 'Toda atividade' },
    { source: 'Create Record', target: 'Criar registro' },
    { source: 'Update Record', target: 'Atualizar registro' },
    { source: 'Delete Record', target: 'Apagar registro' },
    { source: 'All Members', target: 'Todos os membros' },

    // Collaboration
    { source: 'Timeline', target: 'Linha do tempo' },
    { source: 'Messages', target: 'Mensagens' },
    { source: 'Activity', target: 'Atividade' },
    { source: 'Start chatting with your team', target: 'Comece a conversar com sua equipe' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'Leve uma mensagem sobre a página atual para acompanhar informações importantes.'
    },
    { source: 'Your Message', target: 'Sua mensagem' },
    { source: 'Send', target: 'Mandar' },

    // Share
    { source: 'Invite members', target: 'Convidar membros' },
    { source: 'Public share', target: 'Participação pública' },
    { source: 'Sign Up', target: 'Inscrever-se' },
    { source: 'Members', target: 'Membros' },
    { source: 'Invite with Email', target: 'Convite com e -mail' },
    { source: 'Invite someone...', target: 'Convidar alguém...' },
    { source: 'Send Invite', target: 'Mandar convite' },
    {
      source: 'Limit access to your data by user properties',
      target: 'Limitar o acesso aos seus dados por propriedades do usuário'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: 'Digite o email do usuário que você deseja convidar para colaborar.'
    },
    { source: 'Copy', target: 'cópia de' },
    { source: 'Invite with Link', target: 'Convite com link' },
    { source: 'Remove link', target: 'Remova o link' },
    { source: 'Add Invite Link', target: 'Adicione o link de convite' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'Qualquer pessoa na Internet com este link poderá ingressar na equipe selecionada.'
    },
    { source: 'Pending Invites', target: 'Convites pendentes' },
    { source: 'Cancel invite', target: 'Cancelar convite' },
    { source: 'Active Members', target: 'Membros ativos' },
    { source: 'Remove member', target: 'Remova o membro' },
    {
      source: 'You are setting sharing for the current page',
      target: 'Você está configurando o compartilhamento para a página atual'
    },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'Você está configurando o compartilhamento para todas as páginas do seu aplicativo.'
    },
    { source: 'Public access link', target: 'Link de acesso público' },
    { source: 'Updating public access...', target: 'Atualizando o acesso público ...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'Qualquer pessoa com este link poderá visualizar a página atual. Dessa forma, você também pode incorporar a página atual em outro site.'
    },
    { source: 'Embed code (IFRAME)', target: 'Código de incorporação (iframe)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: 'Cole este código no código HTML do seu site, onde você gostaria que a página atual aparecesse.'
    },
    { source: 'link', target: 'link' },
    { source: 'invited', target: 'convidamos' },
    { source: 'Choose Team', target: 'Escolha a equipe' },
    { source: 'App Teams', target: 'Equipes de aplicativos' },
    { source: 'Built-In Teams', target: 'Equipes embutidas' },
    { source: 'Clear Team', target: 'Equipe clara' },
    { source: 'Can build application and modify data', target: 'Pode criar aplicativos e modificar dados' },
    { source: 'Can modify data in application', target: 'Pode modificar dados no aplicativo' },
    { source: 'Can only view data without modification', target: 'Só pode visualizar dados sem modificação' },
    { source: 'Add Team', target: 'Adicionar equipe' },
    { source: 'Edit Team', target: 'Equipe de edição' },
    { source: 'Adding Team', target: 'Adicionando equipe' },
    {
      source: 'Keep control over who has access to current App',
      target: 'Mantenha o controle sobre quem tem acesso ao aplicativo atual'
    },
    { source: 'Enter Team Name', target: 'Digite o nome da equipe' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'Digite o nome da equipe, ou seja: suporte, vendas, marketing, etc.'
    },
    { source: 'Add a new member to this team.', target: 'Adicione um novo membro a esta equipe.' },
    { source: 'Invite new member', target: 'Convide novo membro' },
    { source: 'User', target: 'Do utilizador' },
    { source: 'Date Added', target: 'data adicionada' },
    { source: 'You', target: 'Você' },
    { source: 'Edit', target: 'Editar' },
    { source: 'No users in this team', target: 'Nenhum usuário nesta equipe' },
    { source: 'Page Permissions', target: 'Permissões de página' },
    { source: 'App Permissions', target: 'Permissões de aplicativos' },
    { source: 'Properties', target: 'Propriedades' },
    { source: 'Page name', target: 'Nome da página' },
    { source: 'Access', target: 'Acesso' },
    { source: 'Full Access', target: 'Acesso total' },
    { source: 'Read Only', target: 'Somente leitura' },
    { source: 'No Access', target: 'Sem acesso' },
    { source: 'Read', target: 'Ler' },
    { source: 'Update', target: 'Atualizar' },
    { source: 'Write', target: 'Escreva' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'Excluir' },
    { source: 'Custom Access', target: 'Acesso personalizado' },
    { source: 'Read, create, update and delete data', target: 'Leia, crie, atualize e exclua dados' },
    { source: 'Choose allowed operations granularly', target: 'Escolha operações permitidas granularmente' },
    { source: 'Without any access to data', target: 'Sem acesso a dados' },
    { source: 'Name', target: 'Nome' },
    { source: 'Active', target: 'Ativa' },
    { source: 'Settings', target: 'Definições' },
    { source: 'Members and Teams', target: 'Membros e equipes' },
    { source: 'App Builder', target: 'Construtor de aplicativos' },
    { source: 'Collection Permissions', target: 'Permissões de coleta' },
    { source: "Grant permissions to app's collection", target: 'Permissões de concessão para a coleção do aplicativo' },
    { source: 'Collection', target: 'Coleção' },
    {
      source: 'Limit access to your data by team properties',
      target: 'Limite o acesso aos seus dados por propriedades da equipe'
    },
    { source: 'Cancel', target: 'Cancelar' },
    { source: 'Save Team', target: 'Salvar equipe' },
    { source: 'Create Team', target: 'Criar equipe' },
    { source: 'Value', target: 'Valor' },
    { source: 'No properties specified', target: 'Nenhuma propriedade especificada' },

    // Navigation
    { source: 'Current App', target: 'Aplicativo atual' },
    { source: 'Home', target: 'Casa' },

    // Profile
    { source: 'Loading', target: 'Carregando' },
    {
      source: 'We are fetching user data, please, wait...',
      target: 'Estamos buscando dados do usuário, por favor, espere ...'
    },
    { source: 'Back', target: 'De volta' },
    { source: 'Profile Settings', target: 'Configurações de perfil' },
    { source: 'Basic information about your account.', target: 'Informações básicas sobre sua conta.' },
    { source: 'Photo', target: 'foto' },
    { source: 'your photo', target: 'sua foto' },
    { source: 'Change', target: 'Mudar' },
    { source: 'Upload', target: 'Envio' },
    { source: 'First Name', target: 'Primeiro nome' },
    { source: 'Last Name', target: 'Sobrenome' },
    { source: 'Your Email', target: 'Seu email' },
    { source: 'Password Change', target: 'Mudança de senha' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target:
        'Uma senha deve ser forte o suficiente para proteger sua conta; portanto, faça com que pelo menos 12 caracteres.'
    },
    { source: 'Current Password', target: 'Senha atual' },
    { source: 'New Password', target: 'Nova Senha' },
    { source: 'Confirm New Password', target: 'Confirme a nova senha' },
    { source: 'Change Password', target: 'Mudar senha' },
    { source: 'Personal Preferences', target: 'Preferências pessoais' },
    { source: 'Language', target: 'Linguagem' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'Personalize preferências adicionais para sua conta.'
    },
    { source: 'News & Proposals', target: 'Notícias e propostas' },
    { source: 'Subscribe to our updates and proposals.', target: 'Inscreva -se em nossas atualizações e propostas.' },
    { source: 'Save changes', target: 'Salvar alterações' },

    // My Apps
    { source: 'Type to search...', target: 'Escreva para pesquisar...' },
    { source: 'My Apps', target: 'Meus aplicativos' },
    { source: 'New App', target: 'Novo aplicativo' },
    { source: 'Builder', target: 'Construtora' },
    { source: 'App', target: 'Aplicativa' },
    { source: 'continue install', target: 'continue install' },
    { source: 'Open builder', target: 'Construtor aberto' },
    { source: 'View published', target: 'Ver publicado' },
    { source: 'Delete App', target: 'Excluir aplicativo' },
    { source: 'Start from a template', target: 'Comece de um modelo' },
    { source: 'Preview', target: 'Visualização' },
    { source: 'Contact Support', target: 'Suporte de contato' },
    { source: 'Documentation', target: 'Documentação' },
    { source: 'Feature Requests', target: 'Solicitações de recursos' },
    { source: 'See What’s New', target: 'Veja o que é novo' },
    { source: 'Search templates...', target: 'Modelos de pesquisa ...' },
    { source: 'any', target: 'alguma' },
    { source: 'more', target: 'mais' },
    { source: 'Choose Data Source', target: 'Escolha a fonte de dados' },
    { source: 'works with 30+ data sources', target: 'funciona com mais de 30 fontes de dados' },
    { source: 'Use this template', target: 'Use este modelo' },
    { source: 'stores data in Jet Tables', target: 'armazena dados em tabelas de jato' },
    { source: 'New Data', target: 'Novos dados' },
    { source: 'using {0}', target: 'usando {0}' },
    {
      source: "Can't find resource you're looking for?",
      target: 'Não consegue encontrar o recurso que você está procurando?'
    },
    { source: 'Admin Panel', target: 'Painel de Administração' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'Liste, crie e atualize (CRUD) operações sobre seus dados'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target:
        'Crie um painel de administração personalizado com base em bancos de dados, aplicativos e APIs como Stripe, Twilio e GraphQL.'
    },
    { source: 'All Integrations', target: 'Todas as integrações' },
    { source: 'Databases', target: 'Bancos de dados' },
    { source: 'APIs', target: 'APIs' },
    { source: 'Frameworks', target: 'Estruturas' },
    { source: 'Storages', target: 'Storários' },

    // Sign In
    { source: 'Please wait...', target: 'Por favor, espere...' },
    { source: 'Good morning', target: 'Bom Dia' },
    { source: 'Good afternoon', target: 'Boa tarde' },
    { source: 'Good evening', target: 'Boa noite' },
    { source: 'Sign In', target: 'Entrar' },
    { source: 'Welcome Back.', target: 'Bem vindo de volta.' },
    { source: 'Sign in with {0}', target: 'Faça login com {0}' },
    { source: 'or login with', target: 'ou login com' },
    { source: 'Enter E-mail', target: 'Digite um e-mail' },
    { source: 'Enter password', target: 'Digite a senha' },
    { source: 'Login', target: 'Conecte-se' },
    { source: 'Create new account', target: 'Criar nova conta' },
    { source: 'Forgot my password', target: 'Esqueci minha senha' },
    { source: 'required', target: 'requeridas' },
    { source: 'incorrect Email', target: 'e-mail incorreto' },
    { source: 'Minimum password length {0}', target: 'Comprimento mínimo de senha {0}' },
    { source: 'Unable to Sign In', target: 'Incapaz de entrar' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'Comece <Span Class = "Auth-Form__accent"> GRATUITO HOJE </SPAN>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target:
        'Nenhum cartão é necessário. Você receberá toda a funcionalidade avançada gratuitamente durante o teste profissional de 14 dias.'
    },
    { source: 'or', target: 'ou' },
    { source: 'Enter First Name', target: 'Introduza o primeiro nome' },
    { source: 'Enter Last Name (optional)', target: 'Digite sobrenome (opcional)' },
    { source: 'Enter Email', target: 'Digite email' },
    { source: 'Password', target: 'Senha' },
    { source: 'Repeat Password', target: 'Repita a senha' },
    {
      source: 'Creating an account means you’re okay with our',
      target: 'Criar uma conta significa que você está bem com nosso'
    },
    { source: 'Terms of Service', target: 'Termos de serviço' },
    { source: 'Privacy Policy', target: 'Política de Privacidade' },
    { source: 'and', target: 'e' },
    { source: 'Create your free account', target: 'Cria a tua conta gratuita' },
    { source: 'Already have an account', target: 'Já tem uma conta' },
    { source: 'Unable to Sign Up', target: 'Incapaz de se inscrever' },

    // Restore password
    { source: 'Reset your password', target: 'Redefina sua senha' },
    { source: 'Email Address', target: 'Endereço de email' },
    { source: 'Reset password', target: 'Redefinir senha' },
    { source: 'Return to Sign In', target: 'Voltar para entrar' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'Por favor, verifique seu e -mail - <strong> {0} </strong>. Enviamos o link de validação que você deve seguir para alterar sua senha.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be al least 8 characters.',
      target: 'Quase feito, basta inserir sua nova senha abaixo. <br> Deve ter e menos 8 caracteres.'
    },
    { source: 'Reset password & Sign In', target: 'Redefinir senha e fazer login' },
    { source: 'Unable to Send Code', target: 'Incapaz de enviar código' },
    { source: 'Unable to Change Password', target: 'Incapaz de alterar a senha' },

    // Users & Teams
    { source: 'Members of {0}', target: 'Membros de {0}' },
    { source: 'How to get started', target: 'Como começar' },
    { source: 'Users API', target: 'API dos usuários' },
    { source: 'Teams API', target: 'API de equipes' },
    { source: 'Invite Member', target: 'Convite membro' },
    { source: 'Add User property', target: 'Adicionar propriedade do usuário' },
    { source: 'Add Team property', target: 'Adicionar propriedade da equipe' },
    { source: 'Add', target: 'Adicionar' },
    { source: 'Edit property', target: 'Editar propriedade' },
    { source: 'Delete property', target: 'Excluir propriedade' },
    { source: 'Users', target: 'Usuárias' },
    { source: 'Teams', target: 'Equipes' },
    { source: 'Search members', target: 'Membros da pesquisa' },
    { source: 'Search teams', target: 'Equipes de pesquisa' },
    { source: '{0} pages', target: '{0} páginas' },
    { source: 'No members', target: 'Nenhum membro' }
  ]
};

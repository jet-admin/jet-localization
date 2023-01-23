import { Locale } from './locale';

export const locale: Locale = {
  name: 'portuguese (Portugal)',
  language: 'pt',
  items: [
    // General
    { source: 'Save', target: 'Salvar' },
    { source: 'Create', target: 'Criar' },
    { source: 'Duplicating', target: 'Duplicando' },
    { source: 'Duplicate', target: 'Duplicar' },
    { source: 'Mass Edit', target: 'Edição em massa' },
    { source: 'Export', target: 'Exportar' },
    { source: 'Import', target: 'Importar' },
    { source: 'Delete', target: 'Excluir' },

    // Fields
    { source: 'optional', target: 'opcional' },
    { source: 'choose', target: 'escolher' },
    { source: 'Clear value', target: 'Limpar valor' },
    { source: 'loading...', target: 'carregando...' },
    { source: 'Nothing found', target: 'Nada encontrado' },
    { source: 'Search...', target: 'Procurar...' },
    { source: 'Enter at least {0} characters', target: 'Digite pelo menos {0} caracteres' },

    // List components
    { source: 'Filter', target: 'Filtrar' }, // Filtro subs. Filtrar verb
    { source: 'Filter by field', target: 'Filtre por campo' },
    { source: 'Filter by...', target: 'Filtrar por...' },
    { source: 'Back', target: 'De volta' },
    { source: 'Back to {0} fields', target: 'De volta aos campos {0}' },
    { source: 'Choose {0} from list', target: 'Escolha {0} da lista' },
    { source: '{0} fields', target: '{0} campos' },
    { source: '{0} relationships', target: '{0} relacionamentos' },
    { source: 'Aggregate {0}', target: 'Agregado {0}' },
    { source: 'No fields to select', target: 'Sem campos para selecionar' },
    { source: 'Enter value...', target: 'Digite o valor ...' },
    { source: 'Exclude', target: 'Excluir' },
    { source: 'Actions', target: 'Ações' },
    { source: 'Search', target: 'Procurar' },
    { source: 'Sort 1 → 9', target: 'Classificar 1 → 9' },
    { source: 'Sort 9 → 1', target: 'Classificar 9 → 1' },
    { source: 'Sort A → Z', target: 'Classificar A → Z' },
    { source: 'Sort Z → A', target: 'Classificar Z → A' },
    { source: 'Refresh automatically', target: 'Atualizar automaticamente' },
    { source: 'All', target: 'Tudo' },
    { source: 'Selected', target: 'Selecionada' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'Infelizmente, nenhum {0} correspondendo à sua consulta foi encontrada'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'Estamos buscando {0}, por favor, aguarde ...' },
    { source: 'Add filter', target: 'Adicionar filtro' },
    { source: 'Delete this filter', target: 'Exclua este filtro' },
    { source: 'Toggle ordering', target: 'Trocar ordenação' },
    { source: 'Loading failed', target: 'O carregamento falhou' },
    { source: 'Not configured', target: 'Não configurado' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'Infelizmente, este componente ainda não está configurado'
    },
    { source: 'records', target: 'registros' },
    { source: '{0} items', target: '{0} itens' },

    // Menu
    { source: 'Users & Teams', target: 'Usuários e Times' },
    { source: 'Billing', target: 'Cobrança' },
    { source: 'Billing & Plans', target: 'Cobrança e planos' },
    { source: 'API keys', target: 'Chaves de API' },
    { source: 'Dark Mode', target: 'Modo escuro' },
    { source: 'Light Mode', target: 'Modo claro' },
    { source: 'Disable Staff', target: 'Desativar equipe' },
    { source: 'Enable Staff', target: 'Ativar equipe' },
    { source: 'Manage Templates', target: 'Gerenciar modelos' },
    { source: 'Logout', target: 'Sair' },
    { source: 'Activity Log', target: 'Registro de atividade' },
    { source: 'Collaborations', target: 'Colaborações' },
    { source: 'Open Visual Builder', target: 'Abrir Visual Builder' }, // Visual builder if literaly translated is Construtor Visual

    // Filters
    { source: 'equals', target: 'igual a' },
    { source: 'does not equal', target: 'não é igual' },
    { source: '{0} equals {1}', target: '{0} é igual a {1}' },
    { source: '{0} does not equal {1}', target: '{0} não é igual a {1}' },

    { source: 'contains', target: 'contém' },
    { source: 'does not contain', target: 'não contém' },
    { source: '{0} contains {1}', target: '{0} contém {1}' },
    { source: '{0} not contains {1}', target: '{0} não contém {1}' },

    { source: 'starts with', target: 'começa com' },
    { source: 'does not start with', target: 'não começa com' },
    { source: '{0} starts with {1}', target: '{0} começa com {1}' },
    { source: '{0} does not start with {1}', target: '{0} não começa com {1}' },

    { source: 'ends with', target: 'termina com' },
    { source: 'does not end with', target: 'não termina com' },
    { source: '{0} ends with {1}', target: '{0} termina com {1}' },
    { source: '{0} does not end with {1}', target: '{0} não termina com {1}' },

    { source: 'greater than', target: 'Maior que' },
    { source: 'is not greater than', target: 'não é maior que' },
    { source: '{0} is greater than {1}', target: '{0} é maior que {1}' },
    { source: '{0} not greater than {1}', target: '{0} não maior que {1}' },

    { source: 'greater than or equals', target: 'maior ou igual' },
    { source: 'is not greater than or equals', target: 'não é maior ou igual' },
    { source: '{0} is greater than or equals {1}', target: '{0} é maior que igual a {1}' },
    { source: '{0} is not greater than or equals {1}', target: '{0} não é maior que igual a {1}' },

    { source: 'less than', target: 'Menor que' },
    { source: 'is not less than', target: 'não é menor que' },
    { source: '{0} is less than {1}', target: '{0} é menor que {1}' },
    { source: '{0} is not less than {1}', target: '{0} não é menor que {1}' },

    { source: 'less than or equals', target: 'menor ou igual' },
    { source: 'is not less than or equals', target: 'não é menor ou igual' },
    { source: '{0} is less than or equals {1}', target: '{0} é menor que igual a {1}' },
    { source: '{0} is not less than or equals {1}', target: '{0} não é menor ou igual a {1}' },

    { source: 'one of', target: 'um de' },
    { source: 'is one of', target: 'é um dos' },
    { source: 'is not one of', target: 'não é um dos' },
    { source: '{0} is one of {1}', target: '{0} é um de {1}' },
    { source: '{0} is not one of {1}', target: '{0} não é um dos {1}' },

    { source: 'is null', target: 'é nulo' },
    { source: 'is not null', target: 'não é nulo' },
    { source: '{0} is null', target: '{0} é nulo' },
    { source: '{0} is not null', target: '{0} não é nulo' },

    { source: 'is future', target: 'é futuro' },
    { source: 'in the future', target: 'no futuro' },
    { source: 'is not in the future', target: 'não está no futuro' },
    { source: '{0} is in the future', target: '{0} está no futuro' },
    { source: '{0} is not in the future', target: '{0} não está no futuro' },

    { source: 'is past', target: 'é passado' },
    { source: 'in the past', target: 'no passado' },
    { source: 'is not in the past', target: 'não está no passado' },
    { source: '{0} is in the past', target: '{0} está no passado' },
    { source: '{0} is not in the past', target: '{0} não está no passado' },

    { source: 'is Today', target: 'é hoje' },
    { source: 'today', target: 'hoje' },
    { source: 'is not today', target: 'não é hoje' },
    { source: '{0} is today', target: '{0} é hoje' },
    { source: '{0} is not today', target: '{0} não é hoje' },

    { source: 'is Yesterday', target: 'é ontem' },
    { source: 'yesterday', target: 'ontem' },
    { source: 'is not yesterday', target: 'não é ontem' },
    { source: '{0} is yesterday', target: '{0} é ontem' },
    { source: '{0} is not yesterday', target: '{0} não é ontem' },

    { source: 'is Last Week', target: 'é na semana passada' },
    { source: 'last week', target: 'Semana Anterior' },
    { source: 'is not last week', target: 'não é na semana passada' },
    { source: '{0} is last week', target: '{0} é a semana passada' },
    { source: '{0} is not last week', target: '{0} não é na semana passada' },

    { source: 'is Last Month', target: 'é no mês passado' },
    { source: 'last month', target: 'mês passado' },
    { source: 'is not last month', target: 'não é no mês passado' },
    { source: '{0} is last month', target: '{0} é no mês passado' },
    { source: '{0} is not last month', target: '{0} não é no mês passado' },

    { source: 'is Last Quarter', target: 'é no último trimestre' },
    { source: 'last quarter', target: 'Ultimo quarto' },
    { source: 'is not last quarter', target: 'não é o último trimestre' },
    { source: '{0} is last quarter', target: '{0} é o último trimestre' },
    { source: '{0} is not last quarter', target: '{0} não é o último trimestre' },

    { source: 'is Last Year', target: 'é no ano passado' },
    { source: 'last year', target: 'ano passado' },
    { source: 'is not last year', target: 'não é no ano passado' },
    { source: '{0} is last year', target: '{0} é no ano passado' },
    { source: '{0} is not last year', target: '{0} não é no ano passado' },

    { source: 'is Last X Days', target: 'é nos últimos x dias' },
    { source: 'last X days', target: 'Últimos x dias' },
    { source: 'is not last X days', target: 'não é o último x dias' },
    { source: '{0} is last {1} days', target: '{0} é o último {1} dias' },
    { source: '{0} is not last {1} days', target: '{0} não é o último {1} dias' },

    { source: 'is Current Week', target: 'é na semana atual' },
    { source: 'current week', target: 'semana atual' },
    { source: 'is not current week', target: 'não é semana atual' },
    { source: '{0} is current week', target: '{0} é a semana atual' },
    { source: '{0} is not current week', target: '{0} não é semana atual' },

    { source: 'is Current Month', target: 'é no mês atual' },
    { source: 'current month', target: 'mês atual' },
    { source: 'is not current month', target: 'não é mês atual' },
    { source: '{0} is current month', target: '{0} é o mês atual' },
    { source: '{0} is not current month', target: '{0} não é mês atual' },

    { source: 'is Current Quarter', target: 'é no trimestre atual' },
    { source: 'current quarter', target: 'trimestre atual' },
    { source: 'is not current quarter', target: 'não é trimestre atual' },
    { source: '{0} is current quarter', target: '{0} é trimestre atual' },
    { source: '{0} is not current quarter', target: '{0} não é trimestre atual' },

    { source: 'is Current Year', target: 'é no ano atual' },
    { source: 'current year', target: 'ano atual' },
    { source: 'is not current year', target: 'não é o ano atual' },
    { source: '{0} is current year', target: '{0} é o ano atual' },
    { source: '{0} is not current year', target: '{0} não é o ano atual' },

    { source: 'is Previous Week', target: 'é na semana anterior' },
    { source: 'previous week', target: 'semana anterior' },
    { source: 'is not previous week', target: 'não é semana anterior' },
    { source: '{0} is previous week', target: '{0} é a semana anterior' },
    { source: '{0} is not previous week', target: '{0} não é semana anterior' },

    { source: 'is Previous Month', target: 'é no mês anterior' },
    { source: 'previous month', target: 'mês anterior' },
    { source: 'is not previous month', target: 'não é mês anterior' },
    { source: '{0} is previous month', target: '{0} é o mês anterior' },
    { source: '{0} is not previous month', target: '{0} não é mês anterior' },

    { source: 'is Previous Quarter', target: 'é no trimestre anterior' },
    { source: 'previous quarter', target: 'trimestre anterior' },
    { source: 'is not previous quarter', target: 'não é trimestre anterior' },
    { source: '{0} is previous quarter', target: '{0} é trimestre anterior' },
    { source: '{0} is not previous quarter', target: '{0} não é trimestre anterior' },

    { source: 'is Previous Year', target: 'é no ano anterior' },
    { source: 'previous year', target: 'ano anterior' },
    { source: 'is not previous year', target: 'não é o ano anterior' },
    { source: '{0} is previous year', target: '{0} é o ano anterior' },
    { source: '{0} is not previous year', target: '{0} não é o ano anterior' },

    { source: 'is Previous X Days', target: 'é anterior a x dias' },
    { source: 'previous X days', target: 'X dias anteriores' },
    { source: 'is not previous X days', target: 'não é anterior x dias' },
    { source: '{0} is previous {1} days', target: '{0} é anterior {1} dias' },
    { source: '{0} is not previous {1} days', target: '{0} não é anterior {1} dias' },

    { source: 'is empty', target: 'está vazia' },
    { source: 'is not empty', target: 'não está vazio' },
    { source: '{0} is empty', target: '{0} está vazio' },
    { source: '{0} is not empty', target: '{0} não está vazio' },

    { source: 'covered by', target: 'coberto por' },
    { source: 'is not covered by', target: 'não é coberto por' },
    { source: '{0} covered by {1}', target: '{0} coberto por {1}' },
    { source: '{0} is not covered by {1}', target: '{0} não é coberto por {1}' },

    // Activity log
    { source: 'No activities found', target: 'Nenhuma atividade encontrada' },
    {
      source: 'Start to working with data to log activities.',
      target: 'Comece a trabalhar com dados para registrar atividades.'
    },
    { source: 'All Activity', target: 'Todas as atividade' },
    { source: 'Create Record', target: 'Criar registro' },
    { source: 'Update Record', target: 'Atualizar registro' },
    { source: 'Delete Record', target: 'Apagar registro' },
    { source: 'All Members', target: 'Todos os membros' },

    // Collaboration
    { source: 'Timeline', target: 'Linha do tempo' },
    { source: 'Messages', target: 'Mensagens' },
    { source: 'Activity', target: 'Atividade' },
    { source: 'Start chatting with your team', target: 'Comece a conversar com seu time' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'Escreva uma mensagem sobre a página atual para acompanhar informações importantes.'
    },
    { source: 'Your Message', target: 'Sua mensagem' },
    { source: 'Send', target: 'Enviar' },

    // Share
    { source: 'Invite members', target: 'Convidar membros' },
    { source: 'Public share', target: 'Compartilharmento público' },
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
    { source: 'Copy', target: 'Copiar' },
    { source: 'Invite with Link', target: 'Convidar com um link' },
    { source: 'Remove link', target: 'Remover o link' },
    { source: 'Add Invite Link', target: 'Adicione link de convite' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'Qualquer pessoa na Internet com este link poderá entrar no time selecionada.'
    },
    { source: 'Pending Invites', target: 'Convites pendentes' },
    { source: 'Cancel invite', target: 'Cancelar convite' },
    { source: 'Active Members', target: 'Membros ativos' },
    { source: 'Remove member', target: 'Remover o membro' },
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
    { source: 'Embed code (IFRAME)', target: 'Código de incorporação (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: 'Cole este código no código HTML do seu site, onde você gostaria que a página atual aparecesse.'
    },
    { source: 'link', target: 'link' },
    { source: 'invited', target: 'convidado' },
    { source: 'Choose Team', target: 'Escolha de time' },
    { source: 'App Teams', target: 'Times de aplicativos' },
    { source: 'Built-In Teams', target: 'Times integrados' },
    { source: 'Clear Team', target: 'Limpar o time' },
    { source: 'Can build application and modify data', target: 'Pode criar aplicativos e modificar dados' },
    { source: 'Can modify data in application', target: 'Pode modificar dados no aplicativo' },
    { source: 'Can only view data without modification', target: 'Só pode visualizar dados sem modificação' },
    { source: 'Add Team', target: 'Adicionar time' },
    { source: 'Edit Team', target: 'Time de edição' },
    { source: 'Adding Team', target: 'Adicionando time' },
    {
      source: 'Keep control over who has access to current App',
      target: 'Mantenha o controle sobre quem tem acesso ao aplicativo atual'
    },
    { source: 'Enter Team Name', target: 'Digite o nome do time' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'Digite o nome do time, ou seja: suporte, vendas, marketing, etc.'
    },
    { source: 'Add a new member to this team.', target: 'Adicione um novo membro ao time.' },
    { source: 'Invite new member', target: 'Convide um novo membro' },
    { source: 'User', target: 'Usuário' },
    { source: 'Date Added', target: 'Data adicionada' },
    { source: 'You', target: 'Você' },
    { source: 'Edit', target: 'Editar' },
    { source: 'No users in this team', target: 'Nenhum usuário neste time' },
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
    { source: 'Write', target: 'Escrever' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'Excluir' },
    { source: 'Custom Access', target: 'Acesso personalizado' },
    { source: 'Read, create, update and delete data', target: 'Leia, crie, atualize e exclua dados' },
    { source: 'Choose allowed operations granularly', target: 'Escolha operações permitidas de forma granular' },
    { source: 'Without any access to data', target: 'Sem acesso a dados' },
    { source: 'Name', target: 'Nome' },
    { source: 'Active', target: 'Ativo' },
    { source: 'Settings', target: 'Definições' },
    { source: 'Members and Teams', target: 'Membros e times' },
    { source: 'App Builder', target: 'Construtor de aplicativos' },
    { source: 'Collection Permissions', target: 'Permissões de coleta' },
    { source: "Grant permissions to app's collection", target: 'Conceder permissões para a coleção do aplicativo' },
    { source: 'Collection', target: 'Coleção' },
    {
      source: 'Limit access to your data by team properties',
      target: 'Limite o acesso aos seus dados por propriedades da equipe'
    },
    { source: 'Cancel', target: 'Cancelar' },
    { source: 'Save Team', target: 'Salvar time' },
    { source: 'Create Team', target: 'Criar time' },
    { source: 'Value', target: 'Valor' },
    { source: 'No properties specified', target: 'Nenhuma propriedade especificada' },

    // Navigation
    { source: 'Current App', target: 'Aplicativo atual' },
    { source: 'Home', target: 'Início' },

    // Profile
    { source: 'Loading', target: 'Carregando' },
    {
      source: 'We are fetching user data, please, wait...',
      target: 'Estamos buscando dados do usuário, por favor, espere ...'
    },
    { source: 'Profile Settings', target: 'Configurações de perfil' },
    { source: 'Basic information about your account.', target: 'Informações básicas sobre sua conta.' },
    { source: 'Photo', target: 'Foto' },
    { source: 'your photo', target: 'sua foto' },
    { source: 'Change', target: 'Mudar' },
    { source: 'Upload', target: 'Carregar' }, // Could also be used as Enviar (send) if is an action button
    { source: 'First Name', target: 'Primeiro nome' },
    { source: 'Last Name', target: 'Sobrenome' },
    { source: 'Your Email', target: 'Seu email' },
    { source: 'Password Change', target: 'Mudança de senha' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target:
        'Uma senha deve ser forte o suficiente para proteger sua conta; portanto, coloque pelo menos 12 caracteres.'
    },
    { source: 'Current Password', target: 'Senha atual' },
    { source: 'New Password', target: 'Nova Senha' },
    { source: 'Confirm New Password', target: 'Confirme a nova senha' },
    { source: 'Change Password', target: 'Mudar senha' },
    { source: 'Personal Preferences', target: 'Preferências pessoais' },
    { source: 'Language', target: 'Idioma' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'Personalize preferências adicionais para sua conta.'
    },
    { source: 'News & Proposals', target: 'Notícias & propostas' },
    { source: 'Subscribe to our updates and proposals.', target: 'Inscreva-se em nossas atualizações e propostas.' },
    { source: 'Save changes', target: 'Salvar alterações' },

    // My Apps
    { source: 'Type to search...', target: 'Escreva para pesquisar...' },
    { source: 'My Apps', target: 'Meus aplicativos' },
    { source: 'New App', target: 'Novo aplicativo' },
    { source: 'Builder', target: 'Builder' },
    { source: 'App', target: 'App' },
    { source: 'continue install', target: 'continuar instalação' },
    { source: 'Open builder', target: 'Abrir Builder' },
    { source: 'View published', target: 'Ver publicado' },
    { source: 'Delete App', target: 'Excluir aplicativo' },
    { source: 'Start from a template', target: 'Comece de um modelo' },
    { source: 'Preview', target: 'Pré-visualização' },
    { source: 'Contact Support', target: 'Contato para suporte' },
    { source: 'Documentation', target: 'Documentação' },
    { source: 'Feature Requests', target: 'Solicitações de recursos' },
    { source: 'See What’s New', target: 'Veja o que é novo' },
    { source: 'Search templates...', target: 'Modelos de pesquisa ...' },
    { source: 'any', target: 'alguma' },
    { source: 'more', target: 'mais' },
    { source: 'Choose Data Source', target: 'Escolha a fonte de dados' },
    { source: 'works with 30+ data sources', target: 'funciona com mais de 30 fontes de dados' },
    { source: 'Use this template', target: 'Use este modelo' },
    { source: 'stores data in Jet Tables', target: 'armazena dados nas Jet Tables' },
    { source: 'New Data', target: 'Novos dados' },
    { source: 'using {0}', target: 'usando {0}' },
    {
      source: "Can't find resource you're looking for?",
      target: 'Não conseguimos encontrar o recurso que você está procurando?'
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
    { source: 'Frameworks', target: 'Frameworks' },
    { source: 'Storages', target: 'Armazenamento' },

    // Sign In
    { source: 'Please wait...', target: 'Por favor, espere...' },
    { source: 'Good morning', target: 'Bom dia' },
    { source: 'Good afternoon', target: 'Boa tarde' },
    { source: 'Good evening', target: 'Boa noite' },
    { source: 'Sign In', target: 'Entrar' },
    { source: 'Welcome Back.', target: 'Bem vindo de volta.' },
    { source: 'Sign in with {0}', target: 'Faça login com {0}' },
    { source: 'or login with', target: 'ou login com' },
    { source: 'Enter E-mail', target: 'Digite um e-mail' },
    { source: 'Enter password', target: 'Digite a senha' },
    { source: 'Login', target: 'Login' },
    { source: 'Create new account', target: 'Criar nova conta' },
    { source: 'Forgot my password', target: 'Esqueci minha senha' },
    { source: 'required', target: 'obrigatório' },
    { source: 'incorrect Email', target: 'e-mail incorreto' },
    { source: 'Minimum password length {0}', target: 'Tamanho mínimo de senha {0}' },
    { source: 'Unable to Sign In', target: 'Não foi possível fazer login' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'Comece <span class="auth-form__accent"> Hoje de graça </span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target:
        'Nenhum cartão é necessário. Você receberá toda a funcionalidade avançada gratuitamente durante o teste profissional de 14 dias.'
    },
    { source: 'or', target: 'ou' },
    { source: 'Enter First Name', target: 'Insira o primeiro nome' },
    { source: 'Enter Last Name (optional)', target: 'Insira o sobrenome (opcional)' },
    { source: 'Enter Email', target: 'Digite o email' },
    { source: 'Password', target: 'Senha' },
    { source: 'Repeat Password', target: 'Repita a senha' },
    {
      source: 'Creating an account means you’re okay with our',
      target: 'Criar uma conta significa que você está bem com nossos'
    },
    { source: 'Terms of Service', target: 'Termos de serviço' },
    { source: 'Privacy Policy', target: 'Política de Privacidade' },
    { source: 'and', target: 'e' },
    { source: 'Create your free account', target: 'Crie a sua conta gratuita' },
    { source: 'Already have an account', target: 'Já tem uma conta' },
    { source: 'Unable to Sign Up', target: 'Não foi possível criar uma conta' },

    // Restore password
    { source: 'Reset your password', target: 'Redefina sua senha' },
    { source: 'Email Address', target: 'Endereço de email' },
    { source: 'Reset password', target: 'Redefinir senha' },
    { source: 'Return to Sign In', target: 'Voltar para entrar' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'Por favor, verifique seu Email – <strong>{0}</strong>. Nós mandamos um link de validação para que você troque a sua senha.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be al least 8 characters.',
      target: 'Quase pronto, basta inserir sua nova senha abaixo. <br> Deve ter pelo menos 8 caracteres.'
    },
    { source: 'Reset password & Sign In', target: 'Redefinir senha e fazer login' },
    { source: 'Unable to Send Code', target: 'Não foi possível enviar código' },
    { source: 'Unable to Change Password', target: 'Não foi possível alterar a senha' },

    // Users & Teams
    { source: 'Members of {0}', target: 'Membros de {0}' },
    { source: 'How to get started', target: 'Como começar' },
    { source: 'Users API', target: 'API dos usuários' },
    { source: 'Teams API', target: 'API de times' },
    { source: 'Invite Member', target: 'Convidar um membro' },
    { source: 'Add User property', target: 'Adicionar propriedade do usuário' },
    { source: 'Add Team property', target: 'Adicionar propriedade do time' },
    { source: 'Add', target: 'Adicionar' },
    { source: 'Edit property', target: 'Editar propriedade' },
    { source: 'Delete property', target: 'Excluir propriedade' },
    { source: 'Users', target: 'Usuários' },
    { source: 'Teams', target: 'Times' },
    { source: 'Search members', target: 'Procurar membros' },
    { source: 'Search teams', target: 'Procurar times' },
    { source: '{0} pages', target: '{0} páginas' },
    { source: 'No members', target: 'Nenhum membro' }
  ]
};

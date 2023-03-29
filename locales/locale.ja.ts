import { Locale } from './locale';

export const locale: Locale = {
  name: 'japanese',
  language: 'ja',
  items: [
    // General
    { source: 'Save', target: '保存' },
    { source: 'Create', target: '作成' },
    { source: 'Duplicating', target: '複製中' },
    { source: 'Duplicate', target: '複製' },
    { source: 'Mass Edit', target: '一括編集' },
    { source: 'Export', target: 'エクスポート' },
    { source: 'Import', target: 'インポート' },
    { source: 'Delete', target: '削除' },

    // Fields
    { source: 'optional', target: '任意' },
    { source: 'choose', target: '選択' },
    { source: 'Clear value', target: '値をクリア' },
    { source: 'loading...', target: '読み込み中...' },
    { source: 'Nothing found', target: '何も見つかりません' },
    { source: 'Search...', target: '検索...' },
    { source: 'Enter at least {0} characters', target: '{0}文字以上入力してください' },

    // List components
    { source: 'Filter', target: '絞り込み条件' },
    { source: 'Filter by field', target: 'フィールドで絞り込み' },
    { source: 'Filter by...', target: '絞り込み条件' },
    { source: 'Back', target: '戻る' },
    { source: 'Back to {0} fields', target: '{0} フィールドに戻る' },
    { source: 'Choose {0} from list', target: 'リストから{0}を選択' },
    { source: '{0} fields', target: '{0} フィールド' },
    { source: '{0} relationships', target: '{0} 関係' },
    { source: 'Aggregate {0}', target: '{0}を集約' },
    { source: 'No fields to select', target: '選択するフィールドがありません' },
    { source: 'Enter value...', target: '値を入力...' },
    { source: 'Exclude', target: '除外' },
    { source: 'Actions', target: 'アクション' },
    { source: 'Search', target: '検索' },
    { source: 'Sort 1 → 9', target: '昇順で並べ替え: 1→9' },
    { source: 'Sort 9 → 1', target: '降順で並べ替え: 9→1' },
    { source: 'Sort A → Z', target: '昇順で並べ替え: A→Z' },
    { source: 'Sort Z → A', target: '降順で並べ替え: Z→A' },
    { source: 'Refresh automatically', target: '自動更新' },
    { source: 'All', target: 'すべて' },
    { source: 'Selected', target: '選択中' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'クエリに一致する {0} が見つかりませんでした'
    },
    { source: 'We are fetching {0}, please, wait...', target: '{0}を取得中です。しばらくお待ちください...' },
    { source: 'Add filter', target: '絞り込み条件を追加' },
    { source: 'Delete this filter', target: 'この絞り込み条件を削除' },
    { source: 'Toggle ordering', target: '並べ替えを切り替え' },
    { source: 'Loading failed', target: '読み込みに失敗しました' },
    { source: 'Not configured', target: '未設定' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'このコンポーネントはまだ設定されていません'
    },
    { source: 'records', target: 'レコード' },
    { source: '{0} items', target: '{0} アイテム' },

    // Menu
    { source: 'Users & Teams', target: 'ユーザー&チーム' },
    { source: 'Billing', target: '請求' },
    { source: 'Billing & Plans', target: '請求&プラン' },
    { source: 'API keys', target: 'APIキー' },
    { source: 'Dark Mode', target: 'ダークモード' },
    { source: 'Light Mode', target: 'ライトモード' },
    { source: 'Disable Staff', target: 'スタッフを無効にする' },
    { source: 'Enable Staff', target: 'スタッフを有効にする' },
    { source: 'Manage Templates', target: 'テンプレートの管理' },
    { source: 'Logout', target: 'ログアウト' },
    { source: 'Activity Log', target: 'アクティビティログ' },
    { source: 'Collaborations', target: 'コラボレーション' },
    { source: 'Open Visual Builder', target: 'ビジュアルビルダーを開く' },

    // Filters
    { source: 'equals', target: 'が次と等しい：' },
    { source: 'does not equal', target: 'が次と等しくない：' },
    { source: '{0} equals {1}', target: '{0}が{1}と等しい' },
    { source: '{0} does not equal {1}', target: '{0}が{1}と等しい' },

    { source: 'contains', target: 'が次を含む：' },
    { source: 'does not contain', target: 'が次を含まない：' },
    { source: '{0} contains {1}', target: '{0}が{1}を含む' },
    { source: '{0} not contains {1}', target: '{0}が{1}を含まない' },

    { source: 'starts with', target: '次で始まる' },
    { source: 'does not start with', target: '次で始まらない' },
    { source: '{0} starts with {1}', target: '{0}が{1}で始まる' },
    { source: '{0} does not start with {1}', target: '{0}が{1}で始まらない' },

    { source: 'ends with', target: 'が次で終わる' },
    { source: 'does not end with', target: 'が次で終わらない' },
    { source: '{0} ends with {1}', target: '{0}が{1}で終わる' },
    { source: '{0} does not end with {1}', target: '{0}が{1}で終わらない' },

    { source: 'greater than', target: 'が次より大きい' },
    { source: 'is not greater than', target: 'が次より大きくない' },
    { source: '{0} is greater than {1}', target: '{0}が{1}より大きい' },
    { source: '{0} not greater than {1}', target: '{0}が{1}より大きくない' },

    { source: 'greater than or equals', target: 'が次以上' },
    { source: 'is not greater than or equals', target: 'が次以上でない：' },
    { source: '{0} is greater than or equals {1}', target: '{0}が{1}以上' },
    { source: '{0} is not greater than or equals {1}', target: '{0}が{1}以上でない' },

    { source: 'less than', target: 'が次より小さい' },
    { source: 'is not less than', target: 'が次より小さくない' },
    { source: '{0} is less than {1}', target: '{0}が{1}より小さい' },
    { source: '{0} is not less than {1}', target: '{0}が{1}より小さくない' },

    { source: 'less than or equals', target: 'が次以下' },
    { source: 'is not less than or equals', target: 'が次以下でない' },
    { source: '{0} is less than or equals {1}', target: '{0}が{1}以下' },
    { source: '{0} is not less than or equals {1}', target: '{0}が{1}以下でない' },

    { source: 'one of', target: 'が次に含まれる：' },
    { source: 'is one of', target: 'が次に含まれる：' },
    { source: 'is not one of', target: 'が次に含まれない：' },
    { source: '{0} is one of {1}', target: '{0}が{1}に含まれる' },
    { source: '{0} is not one of {1}', target: '{0}が{1}に含まれない' },

    { source: 'is null', target: 'がNull' },
    { source: 'is not null', target: 'がNullでない' },
    { source: '{0} is null', target: '{0}がNull' },
    { source: '{0} is not null', target: '{0}がNullでない' },

    { source: 'is future', target: 'が未来' },
    { source: 'in the future', target: '未来' },
    { source: 'is not in the future', target: '次が未来でない' },
    { source: '{0} is in the future', target: '{0}が未来である' },
    { source: '{0} is not in the future', target: '{0}が未来でない' },

    { source: 'is past', target: 'が過去' },
    { source: 'in the past', target: '過去' },
    { source: 'is not in the past', target: 'が過去でない' },
    { source: '{0} is in the past', target: '{0}が過去である' },
    { source: '{0} is not in the past', target: '{0}が過去でない' },

    { source: 'is Today', target: 'が今日' },
    { source: 'today', target: '今日' },
    { source: 'is not today', target: 'が今日でない' },
    { source: '{0} is today', target: '{0}が今日' },
    { source: '{0} is not today', target: '{0}が今日でない' },

    { source: 'is Yesterday', target: 'が昨日' },
    { source: 'yesterday', target: '昨日' },
    { source: 'is not yesterday', target: 'が昨日でない' },
    { source: '{0} is yesterday', target: '{0}が昨日' },
    { source: '{0} is not yesterday', target: '{0}が昨日でない' },

    { source: 'is Last Week', target: 'が過去一週間' },
    { source: 'last week', target: '過去一週間' },
    { source: 'is not last week', target: 'が過去一週間でない' },
    { source: '{0} is last week', target: '{0}が過去一週間' },
    { source: '{0} is not last week', target: '{0}が過去一週間でない' },

    { source: 'is Last Month', target: 'が過去一ヶ月間' },
    { source: 'last month', target: '過去一ヶ月間' },
    { source: 'is not last month', target: 'が過去一ヶ月間でない' },
    { source: '{0} is last month', target: '{0}が過去一ヶ月間' },
    { source: '{0} is not last month', target: '{0}が過去一ヶ月間でない' },

    { source: 'is Last Quarter', target: 'が過去四半期間' },
    { source: 'last quarter', target: '過去四半期間' },
    { source: 'is not last quarter', target: 'が過去四半期間でない' },
    { source: '{0} is last quarter', target: '{0}が過去四半期間' },
    { source: '{0} is not last quarter', target: '{0}が過去四半期間でない' },

    { source: 'is Last Year', target: 'が過去一年間' },
    { source: 'last year', target: '過去一年間' },
    { source: 'is not last year', target: 'が過去一年間でない' },
    { source: '{0} is last year', target: '{0}が過去一年間' },
    { source: '{0} is not last year', target: '{0}が過去一年間でない' },

    { source: 'is Last X Days', target: 'が過去X日間' },
    { source: 'last X days', target: '過去X日間' },
    { source: 'is not last X days', target: 'が過去X日間でない' },
    { source: '{0} is last {1} days', target: '{0}が過去{1}日間である' },
    { source: '{0} is not last {1} days', target: '{0}が過去{1}日間でない' },

    { source: 'is Current Week', target: 'が今週' },
    { source: 'current week', target: '今週' },
    { source: 'is not current week', target: 'が今週ではない' },
    { source: '{0} is current week', target: '{0} が今週' },
    { source: '{0} is not current week', target: '{0} が前週ではない' },

    { source: 'is Current Month', target: 'が今月' },
    { source: 'current month', target: '今月' },
    { source: 'is not current month', target: 'が今月ではない' },
    { source: '{0} is current month', target: '{0} が今月' },
    { source: '{0} is not current month', target: '{0} が今月ではない' },

    { source: 'is Current Quarter', target: 'が今期' },
    { source: 'current quarter', target: '今期' },
    { source: 'is not current quarter', target: 'が今期ではない' },
    { source: '{0} is current quarter', target: '{0} が今期' },
    { source: '{0} is not current quarter', target: '{0} が今期でない' },

    { source: 'is Current Year', target: 'が今年' },
    { source: 'current year', target: '今年' },
    { source: 'is not current year', target: 'が今年ではない' },
    { source: '{0} is current year', target: '{0} が今年' },
    { source: '{0} is not current year', target: '{0} が今年ではない' },

    { source: 'is Previous Week', target: 'が前週' },
    { source: 'previous week', target: '前週' },
    { source: 'is not previous week', target: 'が前週でない' },
    { source: '{0} is previous week', target: '{0}が前週である' },
    { source: '{0} is not previous week', target: '{0}が前週でない' },

    { source: 'is Previous Month', target: 'が前月' },
    { source: 'previous month', target: '前月' },
    { source: 'is not previous month', target: 'が前月でない' },
    { source: '{0} is previous month', target: '{0}が前月' },
    { source: '{0} is not previous month', target: '{0}が前月でない' },

    { source: 'is Previous Quarter', target: 'が前期' },
    { source: 'previous quarter', target: '前期' },
    { source: 'is not previous quarter', target: 'が前期ではない' },
    { source: '{0} is previous quarter', target: '{0} が前期' },
    { source: '{0} is not previous quarter', target: '{0} が前期ではない' },

    { source: 'is Previous Year', target: 'が前年' },
    { source: 'previous year', target: '前年' },
    { source: 'is not previous year', target: 'が前年ではない' },
    { source: '{0} is previous year', target: 'が前年' },
    { source: '{0} is not previous year', target: '{0} が前年ではない' },

    { source: 'is Previous X Days', target: 'が過去 X 日' },
    { source: 'previous X days', target: '過去 X 日' },
    { source: 'is not previous X days', target: 'が過去 x 日ではない' },
    { source: '{0} is previous {1} days', target: '{0} が過去 {1} 日' },
    { source: '{0} is not previous {1} days', target: '{0} が過去 {1} 日ではない' },

    { source: 'is empty', target: 'が空' },
    { source: 'is not empty', target: 'が空でない' },
    { source: '{0} is empty', target: '{0}が空' },
    { source: '{0} is not empty', target: '{0}が空でない' },

    { source: 'covered by', target: 'が次によってカバーされている：' },
    { source: 'is not covered by', target: 'が次によってカバーされていない：' },
    { source: '{0} covered by {1}', target: '{0}が{1}によってカバーされている' },
    { source: '{0} is not covered by {1}', target: '{0}が{1}によってカバーされていない' },

    // Activity log
    { source: 'No activities found', target: 'アクティビティが見つかりません' },
    {
      source: 'Start to working with data to log activities.',
      target: 'データを使用してアクティビティを記録します。'
    },
    { source: 'All Activity', target: 'すべてのアクティビティ' },
    { source: 'Create Record', target: 'レコードを作成' },
    { source: 'Update Record', target: 'レコードを更新' },
    { source: 'Delete Record', target: 'レコードを削除' },
    { source: 'All Members', target: 'すべてのメンバー' },

    // Collaboration
    { source: 'Timeline', target: 'タイムライン' },
    { source: 'Messages', target: 'メッセージ' },
    { source: 'Activity', target: 'アクティビティ' },
    { source: 'Start chatting with your team', target: 'チームとのチャットを開始' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: '重要な情報を追跡するために現在のページについてのメッセージを取得します。'
    },
    { source: 'Your Message', target: 'あなたのメッセージ' },
    { source: 'Send', target: '送信' },

    // Share
    { source: 'Invite members', target: 'メンバーを招待' },
    { source: 'Public share', target: '公開共有' },
    { source: 'Sign Up', target: 'サインアップ' },
    { source: 'Members', target: 'メンバー' },
    { source: 'Invite with Email', target: 'Eメールで招待' },
    { source: 'Invite someone...', target: '招待...' },
    { source: 'Send Invite', target: '招待を送信' },
    {
      source: 'Limit access to your data by user properties',
      target: 'ユーザプロパティによってデータへのアクセスを制限する'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: '招待したいユーザのEメールを入力してください。'
    },
    { source: 'Copy', target: 'コピー' },
    { source: 'Invite with Link', target: 'リンクで招待' },
    { source: 'Remove link', target: 'リンクを削除' },
    { source: 'Add Invite Link', target: '招待リンクを追加' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'このリンクを知っているすべての人が、選択したチームに参加できます。'
    },
    { source: 'Pending Invites', target: '保留中の招待' },
    { source: 'Cancel invite', target: '招待をキャンセル' },
    { source: 'Active Members', target: 'アクティブなメンバー' },
    { source: 'Remove member', target: 'メンバーを削除' },
    {
      source: 'You are setting sharing for the current page',
      target: '現在のページの共有設定を行っています'
    },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'あなたのアプリのすべてのページの共有設定を行っています。'
    },
    { source: 'Public access link', target: 'パブリックアクセスリンク' },
    { source: 'Updating public access...', target: 'パブリックアクセスを更新中...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'このリンクを知っているすべての人が、現在のページを閲覧できます。この方法では、現在のページを別のWebサイトに埋め込むこともできます。'
    },
    { source: 'Embed code (IFRAME)', target: 'コードを埋め込む(IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: 'このコードをWebサイトのHTMLコードに貼り付けると現在のページが表示されます。'
    },
    { source: 'link', target: 'リンク' },
    { source: 'invited', target: '招待済' },
    { source: 'Choose Team', target: 'チームを選択' },
    { source: 'App Teams', target: 'アプリチーム' },
    { source: 'Built-In Teams', target: '組み込みチーム' },
    { source: 'Clear Team', target: 'チームをクリア' },
    { source: 'Can build application and modify data', target: 'アプリケーションの構築とデータの変更が可能' },
    { source: 'Can modify data in application', target: 'アプリケーション内のデータの変更が可能' },
    {
      source: 'Can only view data without modification',
      target: 'データを変更なしで閲覧可能'
    },
    { source: 'Add Team', target: 'チームを追加' },
    { source: 'Edit Team', target: 'チームを編集' },
    { source: 'Adding Team', target: 'チームを追加中' },
    {
      source: 'Keep control over who has access to current App',
      target: '現在のアプリへのアクセス権を持つ人をコントロール'
    },
    { source: 'Enter Team Name', target: 'チーム名を入力' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'チーム名を入力してください。（サポート、営業、マーケティングなど）'
    },
    { source: 'Add a new member to this team.', target: 'このチームに新しいメンバーを追加します。' },
    { source: 'Invite new member', target: '新しいメンバーを招待' },
    { source: 'User', target: 'ユーザー' },
    { source: 'Date Added', target: '追加日' },
    { source: 'You', target: '自分' },
    { source: 'Edit', target: '編集' },
    { source: 'No users in this team', target: 'このチームにはユーザーがいません' },
    { source: 'Page Permissions', target: 'ページの権限' },
    { source: 'App Permissions', target: 'アプリの権限' },
    { source: 'Properties', target: 'プロパティ' },
    { source: 'Page name', target: 'ページ名' },
    { source: 'Access', target: 'アクセス' },
    { source: 'Full Access', target: 'フルアクセス' },
    { source: 'Read Only', target: '読み取り専用' },
    { source: 'No Access', target: 'アクセスなし' },
    { source: 'Read', target: '読み取り' },
    { source: 'Update', target: '更新' },
    { source: 'Write', target: '書き込み' },
    { source: { label: 'Delete', context: 'permissions' }, target: '削除' },
    { source: 'Custom Access', target: 'カスタムアクセス' },
    { source: 'Read, create, update and delete data', target: 'データの読み取り、作成、更新、削除' },
    { source: 'Choose allowed operations granularly', target: '許可する操作を詳細に選択' },
    { source: 'Without any access to data', target: 'データへのアクセスなし' },
    { source: 'Name', target: '名前' },
    { source: 'Active', target: 'アクティブ' },
    { source: 'Settings', target: '設定' },
    { source: 'Members and Teams', target: 'メンバーとチーム' },
    { source: 'App Builder', target: 'アプリビルダー' },
    { source: 'Collection Permissions', target: 'コレクションの権限' },
    {
      source: "Grant permissions to app's collection",
      target: 'アプリのコレクションに対する権限を付与'
    },
    { source: 'Collection', target: 'コレクション' },
    {
      source: 'Limit access to your data by team properties',
      target: 'チームプロパティによってデータへのアクセスを制限'
    },
    { source: 'Cancel', target: 'キャンセル' },
    { source: 'Save Team', target: 'チームを保存' },
    { source: 'Create Team', target: 'チームを作成' },
    { source: 'Value', target: '値' },
    { source: 'No properties specified', target: 'プロパティが指定されていません' },

    // Navigation
    { source: 'Current App', target: '現在のアプリ' },
    { source: 'Home', target: 'ホーム' },

    // Profile
    { source: 'Loading', target: 'ロード中' },
    {
      source: 'We are fetching user data, please, wait...',
      target: 'ユーザーデータを取得しています。しばらくお待ちください...'
    },
    { source: 'Profile Settings', target: 'プロフィール設定' },
    { source: 'Basic information about your account.', target: '自分のアカウントの基本情報' },
    { source: 'Photo', target: '写真' },
    { source: 'your photo', target: '自分の写真' },
    { source: 'Change', target: '変更' },
    { source: 'Upload', target: 'アップロード' },
    { source: 'First Name', target: '名前' },
    { source: 'Last Name', target: '苗字' },
    { source: 'Your Email', target: 'メールアドレス' },
    { source: 'Password Change', target: 'パスワードの変更' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target: '十分に強いパスワードは12文字以上である必要があります。'
    },
    { source: 'Current Password', target: '現在のパスワード' },
    { source: 'New Password', target: '新しいパスワード' },
    { source: 'Confirm New Password', target: '新しいパスワード（確認）' },
    { source: 'Change Password', target: 'パスワードを変更' },
    { source: 'Personal Preferences', target: '個人設定' },
    { source: 'Language', target: '言語' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'アカウントの追加の設定をカスタマイズします。'
    },
    { source: 'News & Proposals', target: 'ニュースと提案' },
    { source: 'Subscribe to our updates and proposals.', target: 'Jet Adminの更新と提案を購読' },
    { source: 'Save changes', target: '変更を保存' },

    // My Apps
    { source: 'Type to search...', target: '入力して検索...' },
    { source: 'My Apps', target: 'マイアプリ' },
    { source: 'New App', target: '新しいアプリ' },
    { source: 'Builder', target: 'ビルダー' },
    { source: 'App', target: 'アプリ' },
    { source: 'continue install', target: 'インストールを続ける' },
    { source: 'Open builder', target: 'ビルダーを開く' },
    { source: 'View published', target: '公開内容を確認' },
    { source: 'Delete App', target: 'アプリを削除' },
    { source: 'Start from a template', target: 'テンプレートから開始' },
    { source: 'Preview', target: 'プレビュー' },
    { source: 'Contact Support', target: 'サポートに連絡' },
    { source: 'Documentation', target: 'ドキュメンテーション' },
    { source: 'Feature Requests', target: '機能リクエスト' },
    { source: 'See What’s New', target: '新着をチェック' },
    { source: 'Search templates...', target: 'テンプレートを検索...' },
    { source: 'any', target: '任意の' },
    { source: 'more', target: 'より多くの' },
    { source: 'Choose Data Source', target: 'データソースを選択' },
    { source: 'works with 30+ data sources', target: '30以上のデータソースで動作' },
    { source: 'Use this template', target: 'このテンプレートを使用' },
    { source: 'stores data in Jet Tables', target: 'Jet Tablesにデータを保存' },
    { source: 'New Data', target: '新しいデータ' },
    { source: 'using {0}', target: '{0}を使用中' },
    {
      source: "Can't find resource you're looking for?",
      target: '探しているリソースが見つかりませんか？'
    },
    { source: 'Admin Panel', target: '管理パネル' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'データ上でのリスト操作（新規作成・更新）'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target: 'Stripe、Twilio、GraphQLなどのデータベース、アプリ、APIに基づいたカスタム管理パネルを構築します。'
    },
    { source: 'All Integrations', target: 'すべての連携' },
    { source: 'Databases', target: 'データベース' },
    { source: 'APIs', target: 'API' },
    { source: 'Frameworks', target: 'フレームワーク' },
    { source: 'Storages', target: 'ストレージ' },

    // Sign In
    { source: 'Please wait...', target: 'しばらくお待ちください...' },
    { source: 'Good morning', target: 'おはようございます' },
    { source: 'Good afternoon', target: 'こんにちは' },
    { source: 'Good evening', target: 'こんばんは' },
    { source: 'Sign In', target: 'サインイン' },
    { source: 'Welcome Back.', target: 'おかえりなさい' },
    { source: 'Sign in with {0}', target: '{0}でサインイン' },
    { source: 'or login with', target: 'または次の方法でログイン：' },
    { source: 'Enter E-mail', target: 'メールアドレスを入力' },
    { source: 'Enter password', target: 'パスワードを入力' },
    { source: 'Login', target: 'ログイン' },
    { source: 'Create new account', target: '新しいアカウントを作成' },
    { source: 'Forgot my password', target: 'パスワードを忘れました' },
    { source: 'required', target: '必須' },
    { source: 'incorrect Email', target: '不正なメールアドレス' },
    { source: 'Minimum password length {0}', target: '最小パスワード長 {0}' },
    { source: 'Unable to Sign In', target: 'サインインできません' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: '<span class="auth-form__accent">今日は無料</span>で始めよう'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target: 'カードは不要です。14日間のPROトライアル期間中、すべての高度な機能を無料で利用できます。'
    },
    { source: 'or', target: 'または' },
    { source: 'Enter First Name', target: '名前を入力' },
    { source: 'Enter Last Name (optional)', target: '苗字を入力（任意）' },
    { source: 'Enter Email', target: 'メールアドレスを入力' },
    { source: 'Password', target: 'パスワード' },
    { source: 'Repeat Password', target: 'パスワードを再入力' },
    {
      source: 'Creating an account means you’re okay with our',
      target: 'アカウントを作成することは、私たちの規約とポリシーに同意したことを意味します。'
    },
    { source: 'Terms of Service', target: '利用規約' },
    { source: 'Privacy Policy', target: 'プライバシーポリシー' },
    { source: 'and', target: 'および' },
    { source: 'Create your free account', target: '無料アカウントを作成' },
    { source: 'Already have an account', target: 'すでにアカウントを持っている' },
    { source: 'Unable to Sign Up', target: 'サインアップできません' },

    // Restore password
    { source: 'Reset your password', target: 'パスワードをリセット' },
    { source: 'Email Address', target: 'メールアドレス' },
    { source: 'Reset password', target: 'パスワードをリセット' },
    { source: 'Return to Sign In', target: 'サインインに戻る' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target: 'メールを確認してください – <strong>{0}</strong>。パスワードを変更するための確認URLを送信しました。'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be al least 8 characters.',
      target:
        'もうすぐ完了です。新しいパスワードを下に入力してください。<br>パスワードは8文字以上でなければなりません。'
    },
    { source: 'Reset password & Sign In', target: 'パスワードをリセットしてサインイン' },
    { source: 'Unable to Send Code', target: 'コードを送信できません' },
    { source: 'Unable to Change Password', target: 'パスワードを変更できません' },

    // Users & Teams
    { source: 'Members of {0}', target: '{0}のメンバー' },
    { source: 'How to get started', target: 'はじめ方' },
    { source: 'Users API', target: 'ユーザーAPI' },
    { source: 'Teams API', target: 'チームAPI' },
    { source: 'Invite Member', target: 'メンバーを招待' },
    { source: 'Add User property', target: 'ユーザープロパティを追加' },
    { source: 'Add Team property', target: 'チームプロパティを追加' },
    { source: 'Add', target: '追加' },
    { source: 'Edit property', target: 'プロパティを編集' },
    { source: 'Delete property', target: 'プロパティを削除' },
    { source: 'Users', target: 'ユーザー' },
    { source: 'Teams', target: 'チーム' },
    { source: 'Search members', target: 'メンバーを検索' },
    { source: 'Search teams', target: 'チームを検索' },
    { source: '{0} pages', target: '{0} ページ' },
    { source: 'No members', target: 'メンバーがいません' }
  ]
};

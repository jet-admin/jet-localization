import { Locale } from './locale';

export const locale: Locale = {
  name: 'chinese (Traditional)',
  language: 'zh-hant',
  items: [
    // General
    { source: 'Save', target: '保存' },
    { source: 'Create', target: '創建' },
    { source: 'Duplicating', target: '複製中' },
    { source: 'Duplicate', target: '複製' },
    { source: 'Mass Edit', target: '批量編輯' },
    { source: 'Export', target: '導出' },
    { source: 'Import', target: '導入' },
    { source: 'Delete', target: '刪除' },
    { source: 'Continue', target: '繼續' },
    { source: 'Submit', target: '提交' },
    { source: 'Cancel', target: '取消' },
    { source: 'Loading', target: '加載中' },
    { source: 'Please wait...', target: '請稍候...' },
    { source: 'Loading failed', target: '加載失敗' },
    { source: 'Unknown error', target: '未知錯誤' },
    { source: 'Add', target: '添加' },
    { source: 'or', target: '或' },
    { source: 'Hours', target: '小時' },
    { source: 'Minutes', target: '分鐘' },
    { source: 'Seconds', target: '秒' },
    { source: 'Saved', target: '已保存' },
    { source: 'Error', target: '錯誤' },
    { source: 'Page not found', target: '頁面未找到' },
    {
      source: 'The specified address is incorrect, or the page does not exist',
      target: '指定的地址不正確，或該頁面不存在'
    },
    { source: 'Not allowed', target: '不允許' },
    {
      source: "You don't have permissions to access this page",
      target: '您沒有權限訪問此頁面'
    },
    { source: 'Are you sure want to close?', target: '您確定要關閉嗎？' },
    { source: 'Close', target: '關閉' },

    // Actions
    { source: 'Action executed', target: '操作已執行' },
    { source: 'Action executed successfully', target: '操作成功執行' },
    { source: 'Action failed', target: '操作失敗' },
    {
      source: "You don't have permission for run this operation",
      target: '您沒有權限執行此操作'
    },
    { source: 'Specify parameters', target: '指定參數' },
    { source: 'Executing action', target: '正在執行操作' },
    { source: 'You are executing <strong>{0}</strong>', target: '您正在執行 <strong>{0}</strong>' },
    { source: 'Please fill in the parameters below.', target: '請填寫下面的參數。' },
    { source: 'Execute', target: '執行' },
    { source: 'Executing', target: '正在執行' },
    { source: 'Finished', target: '完成' },
    { source: 'Done', target: '完成' },

    // Export
    { source: 'Records Export', target: '記錄導出' },
    { source: 'Downloading records data as a file', target: '正在將記錄數據下載為文件' },
    { source: 'Choose format', target: '選擇格式' },
    { source: 'Number of exporting records', target: '導出記錄數量' },
    { source: { label: 'Export', context: 'submit' }, target: '導出' },
    { source: 'Exporting', target: '正在導出' },
    { source: 'Export completed', target: '導出完成' },
    { source: 'Failed to export', target: '導出失敗' },

    // Components
    { source: 'optional', target: '可選' },
    { source: 'choose', target: '選擇' },
    { source: 'Clear value', target: '清除值' },
    { source: 'loading...', target: '加載中...' },
    { source: 'Nothing found', target: '未找到任何結果' },
    { source: 'Search...', target: '搜索...' },
    { source: 'Enter at least {0} characters', target: '至少輸入{0}個字符' },
    { source: 'No options', target: '無選項' },
    { source: 'Drop files here or', target: '將文件拖放到此處或' },
    { source: 'Upload new', target: '上傳新文件' },
    { source: 'Clear', target: '清除' },
    { source: 'Download', target: '下載' },
    { source: 'Choose file', target: '選擇文件' },
    { source: 'Choose files', target: '選擇多個文件' },
    { source: 'Scan with Camera', target: '用相機掃描' },
    { source: 'Scan Image file', target: '掃描圖片文件' },
    { source: 'Choose camera', target: '選擇相機' },
    { source: 'Stop scanning', target: '停止掃描' },
    { source: 'Scan again', target: '再次掃描' },
    { source: 'Use this scan', target: '使用此掃描' },
    { source: 'Failed to scan', target: '掃描失敗' },
    {
      source: 'Code failed to scan, please try another image',
      target: '代碼掃描失敗，請嘗試其他圖像'
    },
    { source: 'current', target: '當前' },
    { source: 'Day', target: '天' },
    { source: 'Week', target: '周' },
    { source: 'Month', target: '月' },
    { source: 'Year', target: '年' },
    { source: 'Today', target: '今天' },
    { source: 'Daily', target: '每天' },
    { source: 'Weekly', target: '每周' },
    { source: 'Monthly', target: '每月' },
    { source: 'Quarterly', target: '每季度' },
    { source: 'Yearly', target: '每年' },
    { source: 'Hourly', target: '每小時' },
    { source: 'Minutely', target: '每分鐘' },
    { source: 'Since', target: '自從' },
    { source: 'Before', target: '之前' },
    { source: 'Between', target: '之間' },
    { source: 'From date', target: '從日期' },
    { source: 'To date', target: '到日期' },
    { source: 'Coordinates', target: '坐標' },
    { source: 'Latitude', target: '緯度' },
    { source: 'Longitude', target: '經度' },
    { source: 'Default color', target: '默認顏色' },
    { source: 'not specified', target: '未指定' },
    { source: 'Sign using your finger or pointer', target: '使用手指或指針簽名' },

    // List components
    { source: 'Filter', target: '過濾' },
    { source: 'Filter by field', target: '按字段過濾' },
    { source: 'Filter by...', target: '過濾條件...' },
    { source: 'Back', target: '返回' },
    { source: 'Back to {0} fields', target: '返回到{0}字段' },
    { source: 'Choose {0} from list', target: '從列表中選擇{0}' },
    { source: '{0} fields', target: '{0}字段' },
    { source: '{0} relationships', target: '{0}關係' },
    { source: 'Aggregate {0}', target: '彙總{0}' },
    { source: 'No fields to select', target: '沒有要選擇的字段' },
    { source: 'Enter value...', target: '輸入值...' },
    { source: 'Exclude', target: '排除' },
    { source: 'Actions', target: '動作' },
    { source: 'Search', target: '搜索' },
    { source: 'Sort 1 → 9', target: '排序 1 → 9' },
    { source: 'Sort 9 → 1', target: '排序 9 → 1' },
    { source: 'Sort A → Z', target: '排序 A → Z' },
    { source: 'Sort Z → A', target: '排序 Z → A' },
    { source: 'Refresh automatically', target: '自動刷新' },
    { source: 'All', target: '全部' },
    { source: 'Selected', target: '已選擇' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: '很遺憾，未找到符合您查詢的{0}'
    },
    { source: 'We are fetching {0}, please, wait...', target: '正在獲取{0}，請稍候...' },
    { source: 'Add filter', target: '添加過濾器' },
    { source: 'Delete this filter', target: '刪除此過濾器' },
    { source: 'Toggle ordering', target: '切換訂購' },
    { source: 'Not configured', target: '未配置' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: '很遺憾，此組件尚未配置'
    },
    { source: 'records', target: '記錄' },
    { source: '{0} items', target: '{0}項' },

    // Menu
    { source: 'Users & Teams', target: '用戶和團隊' },
    { source: 'Billing', target: '賬單' },
    { source: 'Billing & Plans', target: '計劃和計費' },
    { source: 'API keys', target: 'API密鑰' },
    { source: 'Dark Mode', target: '暗黑模式' },
    { source: 'Light Mode', target: '亮模式' },
    { source: 'Disable Staff', target: '禁用工作人員' },
    { source: 'Enable Staff', target: '啟用工作人員' },
    { source: 'Manage Templates', target: '管理模板' },
    { source: 'Logout', target: '登出' },
    { source: 'Activity Log', target: '活動記錄' },
    { source: 'Collaborations', target: '協作' },
    { source: 'Open Visual Builder', target: '打開可視化構建器' },

    // Filters
    { source: 'equals', target: '等於' },
    { source: 'does not equal', target: '不等於' },
    { source: '{0} equals {1}', target: '{0} 等於 {1}' },
    { source: '{0} does not equal {1}', target: '{0} 不等於 {1}' },

    { source: 'contains', target: '包含' },
    { source: 'does not contain', target: '不包含' },
    { source: '{0} contains {1}', target: '{0} 包含 {1}' },
    { source: '{0} not contains {1}', target: '{0} 不包含 {1}' },

    { source: 'starts with', target: '開始於' },
    { source: 'does not start with', target: '不開始於' },
    { source: '{0} starts with {1}', target: '{0} 開始於 {1}' },
    { source: '{0} does not start with {1}', target: '{0} 不開始於 {1}' },

    { source: 'ends with', target: '結束於' },
    { source: 'does not end with', target: '不結束於' },
    { source: '{0} ends with {1}', target: '{0} 結束於 {1}' },
    { source: '{0} does not end with {1}', target: '{0} 不結束於 {1}' },

    { source: 'greater than', target: '大於' },
    { source: 'is not greater than', target: '不大於' },
    { source: '{0} is greater than {1}', target: '{0} 大於 {1}' },
    { source: '{0} not greater than {1}', target: '{0} 不大於 {1}' },

    { source: 'greater than or equals', target: '大於或等於' },
    { source: 'is not greater than or equals', target: '不大於或等於' },
    { source: '{0} is greater than or equals {1}', target: '{0} 大於或等於 {1}' },
    { source: '{0} is not greater than or equals {1}', target: '{0} 不大於或等於 {1}' },

    { source: 'less than', target: '小於' },
    { source: 'is not less than', target: '不小於' },
    { source: '{0} is less than {1}', target: '{0} 小於 {1}' },
    { source: '{0} is not less than {1}', target: '{0} 不小於 {1}' },

    { source: 'less than or equals', target: '小於或等於' },
    { source: 'is not less than or equals', target: '不小於或等於' },
    { source: '{0} is less than or equals {1}', target: '{0} 小於或等於 {1}' },
    { source: '{0} is not less than or equals {1}', target: '{0} 不小於或等於 {1}' },

    { source: 'one of', target: '其中之一' },
    { source: 'is one of', target: '是其中之一' },
    { source: 'is not one of', target: '不是其中之一' },
    { source: '{0} is one of {1}', target: '{0} 是其中之一 {1}' },
    { source: '{0} is not one of {1}', target: '{0} 不是其中之一 {1}' },

    { source: 'is null', target: '是空' },
    { source: 'is not null', target: '不是空' },
    { source: '{0} is null', target: '{0} 是空' },
    { source: '{0} is not null', target: '{0} 不是空' },

    { source: 'is future', target: '在未來' },
    { source: 'in the future', target: '在未來' },
    { source: 'is not in the future', target: '不在未來' },
    { source: '{0} is in the future', target: '{0} 在未來' },
    { source: '{0} is not in the future', target: '{0} 不在未來' },

    { source: 'is past', target: '在過去' },
    { source: 'in the past', target: '在過去' },
    { source: 'is not in the past', target: '不在過去' },
    { source: '{0} is in the past', target: '{0} 在過去' },
    { source: '{0} is not in the past', target: '{0} 不在過去' },

    { source: 'is Today', target: '是今天' },
    { source: 'today', target: '今天' },
    { source: 'is not today', target: '不是今天' },
    { source: '{0} is today', target: '{0} 是今天' },
    { source: '{0} is not today', target: '{0} 不是今天' },

    { source: 'is Yesterday', target: '是昨天' },
    { source: 'yesterday', target: '昨天' },
    { source: 'is not yesterday', target: '不是昨天' },
    { source: '{0} is yesterday', target: '{0} 是昨天' },
    { source: '{0} is not yesterday', target: '{0} 不是昨天' },

    { source: 'is Last Week', target: '是上周' },
    { source: 'last week', target: '上周' },
    { source: 'is not last week', target: '不是上周' },
    { source: '{0} is last week', target: '{0} 是上周' },
    { source: '{0} is not last week', target: '{0} 不是上周' },

    { source: 'is Last Month', target: '是上個月' },
    { source: 'last month', target: '上個月' },
    { source: 'is not last month', target: '不是上個月' },
    { source: '{0} is last month', target: '{0} 是上個月' },
    { source: '{0} is not last month', target: '{0} 不是上個月' },

    { source: 'is Last Quarter', target: '是上一個季度' },
    { source: 'last quarter', target: '上一個季度' },
    { source: 'is not last quarter', target: '不是上一個季度' },
    { source: '{0} is last quarter', target: '{0} 是上一個季度' },
    { source: '{0} is not last quarter', target: '{0} 不是上一個季度' },

    { source: 'is Last Year', target: '是去年' },
    { source: 'last year', target: '去年' },
    { source: 'is not last year', target: '不是去年' },
    { source: '{0} is last year', target: '{0} 是去年' },
    { source: '{0} is not last year', target: '{0} 不是去年' },

    { source: 'is Last X Days', target: '是過去X天' },
    { source: 'last X days', target: '過去X天' },
    { source: 'is not last X days', target: '不是過去X天' },
    { source: '{0} is last {1} days', target: '{0} 是過去的 {1} 天' },
    { source: '{0} is not last {1} days', target: '{0} 不是過去的 {1} 天' },

    { source: 'is Current Week', target: '是本周' },
    { source: 'current week', target: '本周' },
    { source: 'is not current week', target: '不是本周' },
    { source: '{0} is current week', target: '{0} 是本周' },
    { source: '{0} is not current week', target: '{0} 不是本周' },

    { source: 'is Current Month', target: '是本月' },
    { source: 'current month', target: '本月' },
    { source: 'is not current month', target: '不是本月' },
    { source: '{0} is current month', target: '{0} 是本月' },
    { source: '{0} is not current month', target: '{0} 不是本月' },

    { source: 'is Current Quarter', target: '是本季度' },
    { source: 'current quarter', target: '本季度' },
    { source: 'is not current quarter', target: '不是本季度' },
    { source: '{0} is current quarter', target: '{0} 是本季度' },
    { source: '{0} is not current quarter', target: '{0} 不是本季度' },

    { source: 'is Current Year', target: '是今年' },
    { source: 'current year', target: '今年' },
    { source: 'is not current year', target: '不是今年' },
    { source: '{0} is current year', target: '{0} 是今年' },
    { source: '{0} is not current year', target: '{0} 不是今年' },

    { source: 'is Previous Week', target: '是上周' },
    { source: 'previous week', target: '上周' },
    { source: 'is not previous week', target: '不是上周' },
    { source: '{0} is previous week', target: '{0} 是上周' },
    { source: '{0} is not previous week', target: '{0} 不是上周' },

    { source: 'is Previous Month', target: '是上個月' },
    { source: 'previous month', target: '上個月' },
    { source: 'is not previous month', target: '不是上個月' },
    { source: '{0} is previous month', target: '{0} 是上個月' },
    { source: '{0} is not previous month', target: '{0} 不是上個月' },

    { source: 'is Previous Quarter', target: '是上一季度' },
    { source: 'previous quarter', target: '上一季度' },
    { source: 'is not previous quarter', target: '不是上一季度' },
    { source: '{0} is previous quarter', target: '{0} 是上一季度' },
    { source: '{0} is not previous quarter', target: '{0} 不是上一季度' },

    { source: 'is Previous Year', target: '是去年' },
    { source: 'previous year', target: '去年' },
    { source: 'is not previous year', target: '不是去年' },
    { source: '{0} is previous year', target: '{0} 是去年' },
    { source: '{0} is not previous year', target: '{0} 不是去年' },

    { source: 'is Previous X Days', target: '是前X天' },
    { source: 'previous X days', target: '前X天' },
    { source: 'is not previous X days', target: '不是前X天' },
    { source: '{0} is previous {1} days', target: '{0} 是前 {1} 天' },
    { source: '{0} is not previous {1} days', target: '{0} 不是前 {1} 天' },

    { source: 'is empty', target: '為空' },
    { source: 'is not empty', target: '不為空' },
    { source: '{0} is empty', target: '{0} 為空' },
    { source: '{0} is not empty', target: '{0} 不為空' },

    { source: 'covered by', target: '覆蓋於' },
    { source: 'is not covered by', target: '不覆蓋於' },
    { source: '{0} covered by {1}', target: '{0} 覆蓋於 {1}' },
    { source: '{0} is not covered by {1}', target: '{0} 不覆蓋於 {1}' },

    // Activity log
    { source: 'No activities found', target: '未找到活動' },
    {
      source: 'Start to working with data to log activities.',
      target: '開始使用數據來記錄活動。'
    },
    { source: 'All Activity', target: '所有活動' },
    { source: 'Create Record', target: '創建記錄' },
    { source: 'Update Record', target: '更新記錄' },
    { source: 'Delete Record', target: '刪除記錄' },
    { source: 'All Members', target: '所有成員' },

    // Collaboration
    { source: 'Timeline', target: '時間線' },
    { source: 'Messages', target: '消息' },
    { source: 'Activity', target: '活動' },
    { source: 'Start chatting with your team', target: '開始與您的團隊聊天' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: '撰寫有關當前頁面的消息以跟踪重要信息。'
    },
    { source: 'Your Message', target: '您的消息' },
    { source: 'Send', target: '發送' },

    // Share
    { source: 'Invite members', target: '邀請成員' },
    { source: 'Public share', target: '公開分享' },
    { source: 'Sign Up', target: '註冊' },
    { source: 'Members', target: '成員' },
    { source: 'Invite with Email', target: '通過郵件邀請' },
    { source: 'Invite someone...', target: '邀請某人...' },
    { source: 'Send Invite', target: '發送邀請' },
    {
      source: 'Limit access to your data by user properties',
      target: '通過用戶屬性限制對您的數據的訪問'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: '輸入您希望邀請他合作用戶的郵件。'
    },
    { source: 'Copy', target: '複製' },
    { source: 'Invite with Link', target: '通過鏈接邀請' },
    { source: 'Remove link', target: '刪除鏈接' },
    { source: 'Add Invite Link', target: '添加邀請鏈接' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: '互聯網上具有該鏈接的任何人都能加入所選團隊。'
    },
    { source: 'Pending Invites', target: '待處理的邀請' },
    { source: 'Cancel invite', target: '取消邀請' },
    { source: 'Active Members', target: '活躍成員' },
    { source: 'Remove member', target: '移除成員' },
    {
      source: 'You are setting sharing for the current page',
      target: '您正在為當前頁面設置共享'
    },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: '您正在設置應用程序所有頁面的共享。'
    },
    { source: 'Public access link', target: '公共訪問鏈接' },
    { source: 'Updating public access...', target: '正在更新公共訪問...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target: '擁有此鏈接的任何人都可以查看當前頁面。 這樣，您還可以將當前頁面嵌入到另一個網站中。'
    },
    { source: 'Embed code (IFRAME)', target: '嵌入代碼（IFRAME）' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: '將此代碼粘貼到網站HTML代碼中，當前頁面將出現在那裡。'
    },
    { source: 'link', target: '鏈接' },
    { source: 'invited', target: '已邀請' },
    { source: 'Choose Team', target: '選擇團隊' },
    { source: 'App Teams', target: '應用團隊' },
    { source: 'Built-In Teams', target: '內置團隊' },
    { source: 'Clear Team', target: '清空團隊' },
    { source: 'Can build application and modify data', target: '可以構建應用並修改數據' },
    { source: 'Can modify data in application', target: '可以修改應用中的數據' },
    { source: 'Can only view data without modification', target: '只能查看數據而無法修改' },
    { source: 'Add Team', target: '添加團隊' },
    { source: 'Edit Team', target: '編輯團隊' },
    { source: 'Adding Team', target: '添加團隊' },
    {
      source: 'Keep control over who has access to current App',
      target: '控制誰可以訪問當前應用'
    },
    { source: 'Enter Team Name', target: '輸入團隊名稱' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: '輸入團隊名稱，例如：支持，銷售，市場等。'
    },
    { source: 'Add a new member to this team.', target: '向該團隊添加新成員。' },
    { source: 'Invite new member', target: '邀請新成員' },
    { source: 'User', target: '用戶' },
    { source: 'Date Added', target: '添加日期' },
    { source: 'You', target: '你' },
    { source: 'Edit', target: '編輯' },
    { source: 'No users in this team', target: '該團隊中沒有用戶' },
    { source: 'Page Permissions', target: '頁面權限' },
    { source: 'App Permissions', target: '應用權限' },
    { source: 'Properties', target: '屬性' },
    { source: 'Page name', target: '頁面名稱' },
    { source: 'Access', target: '訪問' },
    { source: 'Full Access', target: '完全訪問' },
    { source: 'Read Only', target: '只讀' },
    { source: 'No Access', target: '無訪問权限' },
    { source: 'Read', target: '閱讀' },
    { source: 'Update', target: '更新' },
    { source: 'Write', target: '寫入' },
    { source: { label: 'Delete', context: 'permissions' }, target: '刪除' },
    { source: 'Custom Access', target: '自定義訪問' },
    { source: 'Read, create, update and delete data', target: '讀取，創建，更新和刪除數據' },
    { source: 'Choose allowed operations granularly', target: '選擇允許的操作' },
    { source: 'Without any access to data', target: '無權訪問數據' },
    { source: 'Name', target: '名稱' },
    { source: 'Active', target: '活躍' },
    { source: 'Settings', target: '設置' },
    { source: 'Members and Teams', target: '成員和團隊' },
    { source: 'App Builder', target: '應用構建器' },
    { source: 'Collection Permissions', target: '集合權限' },
    { source: "Grant permissions to app's collection", target: '授予應用集合權限' },
    { source: 'Collection', target: '集合' },
    {
      source: 'Limit access to your data by team properties',
      target: '通過團隊屬性來限制對您數據的訪問'
    },
    { source: 'Save Team', target: '保存團隊' },
    { source: 'Create Team', target: '創建團隊' },
    { source: 'Value', target: '值' },
    { source: 'No properties specified', target: '未指定屬性' },

    // Navigation
    { source: 'Current App', target: '當前應用' },
    { source: 'Home', target: '首頁' },

    // Profile
    {
      source: 'We are fetching user data, please, wait...',
      target: '我們正在獲取用戶數據，請稍候...'
    },
    { source: 'Profile Settings', target: '個人資料設置' },
    { source: 'Basic information about your account.', target: '有關您賬戶的基本信息。' },
    { source: 'Photo', target: '照片' },
    { source: 'your photo', target: '您的照片' },
    { source: 'Change', target: '變更' },
    { source: 'Upload', target: '上傳' },
    { source: 'Photo was successfully updated', target: '照片已成功更新' },
    { source: 'Photo was successfully deleted', target: '照片已成功刪除' },
    { source: 'First Name', target: '名字' },
    { source: 'Last Name', target: '姓' },
    { source: 'Your Email', target: '您的Email' },
    { source: 'Email Change', target: '更改Email' },
    { source: 'New Email', target: '新Email' },
    { source: 'Change Email', target: '更改Email' },
    { source: 'Check your inbox', target: '檢查您的收件箱' },
    { source: 'Confirmation Email was sent to {0}', target: '確認郵件已發送至 {0}' },
    { source: 'Changing Email failed', target: '更改Email失敗' },
    { source: 'Password Change', target: '更改密碼' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target: '密碼應足夠強大，足以保護您的帳戶，因此至少設置12個字符。'
    },
    { source: 'Current Password', target: '當前密碼' },
    { source: 'New Password', target: '新密碼' },
    { source: 'Confirm New Password', target: '確認新密碼' },
    { source: 'Change Password', target: '更改密碼' },
    {
      source: 'Current password was successfully updated, all other sessions will be logged out shortly',
      target: '當前密碼已成功更新，其他所有會話將很快退出登錄'
    },
    { source: 'Saving current password failed', target: '保存當前密碼失敗' },
    { source: 'Short password', target: '密碼太短' },
    { source: "Passwords don't match", target: '密碼不匹配' },
    { source: 'Personal Preferences', target: '個人偏好' },
    { source: 'Language', target: '語言' },
    { source: 'Timezone', target: '時區' },
    { source: 'Current time in {0} is', target: '{0} 的當前時間是' },
    {
      source: 'Customize additional preferences for your account.',
      target: '自定義您帳戶的其他偏好。'
    },
    { source: 'News & Proposals', target: '新聞和提案' },
    {
      source: 'Subscribe to our updates and proposals.',
      target: '訂閱我們的更新和提案。'
    },
    { source: 'Save changes', target: '保存更改' },
    { source: 'Current user was successfully updated', target: '當前用戶已成功更新' },
    { source: 'Saving current user failed', target: '保存當前用戶失敗' },

    // My Apps
    { source: 'Type to search...', target: '輸入以搜索...' },
    { source: 'My Apps', target: '我的應用' },
    { source: 'New App', target: '新應用' },
    { source: 'Builder', target: '構建器' },
    { source: 'App', target: '應用' },
    { source: 'continue install', target: '繼續安裝' },
    { source: 'Open builder', target: '打開構建器' },
    { source: 'View published', target: '查看已發布的' },
    { source: 'Delete App', target: '刪除應用' },
    { source: 'Start from a template', target: '從模板開始' },
    { source: 'Preview', target: '預覽' },
    { source: 'Contact Support', target: '聯繫支持' },
    { source: 'Documentation', target: '文檔' },
    { source: 'Feature Requests', target: '特性請求' },
    { source: 'See What’s New', target: '查看新內容' },
    { source: 'Search templates...', target: '搜索模板...' },
    { source: 'any', target: '任何' },
    { source: 'more', target: '更多' },
    { source: 'Choose Data Source', target: '選擇數據源' },
    { source: 'works with 30+ data sources', target: '適用於30多個數據源' },
    { source: 'Use this template', target: '使用此模板' },
    { source: 'stores data in Jet Tables', target: '將數據存儲在Jet Tables中' },
    { source: 'New Data', target: '新數據' },
    { source: 'using {0}', target: '使用 {0}' },
    { source: "Can't find resource you're looking for?", target: '找不到您要找的資源？' },
    { source: 'Admin Panel', target: '管理面板' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: '在您的數據上進行列出，創建和更新（CRUD）操作'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target: '基於任何數據庫，應用程序和API（例如Stripe，Twilio和GraphQL）構建自定義管理面板。'
    },
    { source: 'All Integrations', target: '所有集成' },
    { source: 'Databases', target: '數據庫' },
    { source: 'APIs', target: 'API' },
    { source: 'Frameworks', target: '框架' },
    { source: 'Storages', target: '存儲' },

    // Sign In
    { source: 'Good morning', target: '早上好' },
    { source: 'Good afternoon', target: '下午好' },
    { source: 'Good evening', target: '晚上好' },
    { source: 'Sign In', target: '登入' },
    { source: 'Welcome Back.', target: '歡迎回來。' },
    { source: 'Sign in with {0}', target: '通過 {0} 登入' },
    { source: 'or login with', target: '或使用其他方式登入' },
    { source: 'Enter E-mail', target: '輸入電子郵件' },
    { source: 'Enter password', target: '輸入密碼' },
    { source: 'Login', target: '登入' },
    { source: 'Create new account', target: '創建新帳戶' },
    { source: 'Forgot my password', target: '忘記密碼' },
    { source: 'required', target: '必需的' },
    { source: 'incorrect Email', target: '電子郵件不正確' },
    { source: 'Minimum password length {0}', target: '密碼最小長度為 {0}' },
    { source: 'Unable to Sign In', target: '無法登入' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: '立即<span class="auth-form__accent">免費開始</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target: '不需要卡。在為期14天的PRO試用期間，您將免費獲得所有高級功能。'
    },
    { source: 'Enter First Name', target: '輸入名字' },
    { source: 'Enter Last Name (optional)', target: '輸入姓氏（可選）' },
    { source: 'Enter Email', target: '輸入電子郵件' },
    { source: 'Password', target: '密碼' },
    { source: 'Repeat Password', target: '重複密碼' },
    {
      source: 'By signing in you’re okay with our',
      target: '登入即代表您同意我們的'
    },
    {
      source: 'Creating an account means you’re okay with our',
      target: '創建帳戶即代表您同意我們的'
    },
    { source: 'Terms of Service', target: '服務條款' },
    { source: 'Privacy Policy', target: '隱私政策' },
    { source: 'and', target: '和' },
    { source: 'Create your free account', target: '創建您的免費帳戶' },
    { source: 'Already have an account', target: '已經有帳戶了' },
    { source: 'Unable to Sign Up', target: '無法註冊' },

    // Restore password
    { source: 'Reset your password', target: '重設您的密碼' },
    { source: 'Email Address', target: '電子郵件地址' },
    { source: 'Reset password', target: '重設密碼' },
    { source: 'Return to Sign In', target: '返回登入' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target: '請檢查您的電子郵件 – <strong>{0}</strong>。我們已經發送驗證鏈接，您應按照它來更改密碼。'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be at least 8 characters.',
      target: '快完成了，只要在下方輸入您的新密碼即可。<br>必須至少8個字符。'
    },
    { source: 'Reset password & Sign In', target: '重設密碼並登入' },
    { source: 'Unable to Send Code', target: '無法發送代碼' },
    { source: 'Unable to Change Password', target: '無法更改密碼' },

    // Email Verification
    { source: 'Email Verification', target: '電子郵件驗證' },
    { source: 'Resend verification code', target: '重新發送驗證碼' },
    { source: 'Verification email sent', target: '驗證郵件已發送' },
    { source: 'Your Email is now verified', target: '您的電子郵件已驗證' },
    { source: 'Request is incorrect', target: '請求不正確' },

    // Invites
    {
      source: 'Join <span class="auth-form__accent">{0}</span>',
      target: '加入 <span class="auth-form__accent">{0}</span>'
    },
    {
      source: '<strong>{0}</strong> has invited you to join <strong>{1}</strong>',
      target: '<strong>{0}</strong> 邀請您加入 <strong>{1}</strong>'
    },
    {
      source: 'Someone has invited you to join <strong>{0}</strong>',
      target: '有人邀請您加入 <strong>{0}</strong>'
    },
    {
      source: 'You are joining <strong>{0}</strong> using invite link',
      target: '您正在使用邀請鏈接加入<strong>{0}</strong>'
    },
    { source: 'Join', target: '加入' },
    { source: 'Go to home page', target: '轉到主頁' },
    { source: 'Invite link is wrong', target: '邀請鏈接錯誤' },
    {
      source:
        'Looks like your invitation link has expired or maybe you have followed the wrong link. Please try to ask to invite your again.',
      target: '您的邀請鏈接似乎已過期，或您可能使用了錯誤的鏈接。請嘗試讓你的邀請重試。'
    },
    {
      source: 'Unfortunately we failed to load information about this invitation',
      target: '很遺憾，我們無法加載有關此邀請的信息'
    },

    // Users & Teams
    { source: 'Members of {0}', target: '{0}的成員' },
    { source: 'How to get started', target: '如何開始' },
    { source: 'Users API', target: '用戶API' },
    { source: 'Teams API', target: '團隊API' },
    { source: 'Invite Member', target: '邀請成員' },
    { source: 'Add User property', target: '添加用戶屬性' },
    { source: 'Add Team property', target: '添加團隊屬性' },
    { source: 'Edit property', target: '編輯屬性' },
    { source: 'Delete property', target: '刪除屬性' },
    { source: 'Users', target: '用戶' },
    { source: 'Teams', target: '團隊' },
    { source: 'Search members', target: '搜索成員' },
    { source: 'Search teams', target: '搜索團隊' },
    { source: '{0} pages', target: '{0}頁' },
    { source: 'No members', target: '沒有成員' }
  ]
};

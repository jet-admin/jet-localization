import { Locale } from './locale';

export const locale: Locale = {
  name: 'chinese (Simplified)',
  language: 'zh-hans',
  items: [
    // General
    { source: 'Save', target: '保存' },
    { source: 'Create', target: '创建' },
    { source: 'Duplicating', target: '正在复制' },
    { source: 'Duplicate', target: '复制' },
    { source: 'Mass Edit', target: '批量编辑' },
    { source: 'Export', target: '导出' },
    { source: 'Import', target: '导入' },
    { source: 'Delete', target: '删除' },
    { source: 'Continue', target: '继续' },
    { source: 'Submit', target: '提交' },
    { source: 'Cancel', target: '取消' },
    { source: 'Loading', target: '加载中' },
    { source: 'Please wait...', target: '请等待...' },
    { source: 'Loading failed', target: '加载失败' },
    { source: 'Unknown error', target: '未知错误' },
    { source: 'Add', target: '添加' },
    { source: 'or', target: '或' },
    { source: 'Hours', target: '小时' },
    { source: 'Minutes', target: '分钟' },
    { source: 'Seconds', target: '秒' },
    { source: 'Saved', target: '已保存' },
    { source: 'Error', target: '错误' },
    { source: 'Page not found', target: '页面未找到' },
    {
      source: 'The specified address is incorrect, or the page does not exist',
      target: '指定的地址不正确，或页面不存在'
    },
    { source: 'Not allowed', target: '不允许' },
    {
      source: "You don't have permissions to access this page",
      target: '您没有权限访问此页面'
    },
    { source: 'Are you sure want to close?', target: '您确定要关闭吗？' },
    { source: 'Close', target: '关闭' },

    // Actions
    { source: 'Action executed', target: '操作已执行' },
    { source: 'Action executed successfully', target: '操作成功执行' },
    { source: 'Action failed', target: '操作失败' },
    {
      source: "You don't have permission for run this operation",
      target: '您没有权限执行此操作'
    },
    { source: 'Specify parameters', target: '指定参数' },
    { source: 'Executing action', target: '正在执行操作' },
    { source: 'You are executing <strong>{0}</strong>', target: '您正在执行<strong>{0}</strong>' },
    { source: 'Please fill in the parameters below.', target: '请填写以下参数。' },
    { source: 'Execute', target: '执行' },
    { source: 'Executing', target: '执行中' },
    { source: 'Finished', target: '已完成' },
    { source: 'Done', target: '完成' },

    // Export
    { source: 'Records Export', target: '记录导出' },
    { source: 'Downloading records data as a file', target: '正在将记录数据下载为文件' },
    { source: 'Choose format', target: '选择格式' },
    { source: 'Number of exporting records', target: '导出的记录数' },
    { source: { label: 'Export', context: 'submit' }, target: '导出' },
    { source: 'Exporting', target: '导出中' },
    { source: 'Export completed', target: '导出完成' },
    { source: 'Failed to export', target: '导出失败' },

    // Components
    { source: 'optional', target: '可选' },
    { source: 'choose', target: '选择' },
    { source: 'Clear value', target: '清除值' },
    { source: 'loading...', target: '加载中...' },
    { source: 'Nothing found', target: '未找到' },
    { source: 'Search...', target: '搜索...' },
    { source: 'Enter at least {0} characters', target: '至少输入 {0} 个字符' },
    { source: 'No options', target: '无选项' },
    { source: 'Drop files here or', target: '将文件拖到此处或' },
    { source: 'Upload new', target: '上传新的' },
    { source: 'Clear', target: '清除' },
    { source: 'Download', target: '下载' },
    { source: 'Choose file', target: '选择文件' },
    { source: 'Choose files', target: '选择文件' },
    { source: 'Scan with Camera', target: '用摄像头扫描' },
    { source: 'Scan Image file', target: '扫描图像文件' },
    { source: 'Choose camera', target: '选择摄像头' },
    { source: 'Stop scanning', target: '停止扫描' },
    { source: 'Scan again', target: '重新扫描' },
    { source: 'Use this scan', target: '使用此扫描' },
    { source: 'Failed to scan', target: '扫描失败' },
    {
      source: 'Code failed to scan, please try another image',
      target: '代码扫描失败，请尝试其他图像'
    },
    { source: 'current', target: '当前' },
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
    { source: 'Hourly', target: '每小时' },
    { source: 'Minutely', target: '每分钟' },
    { source: 'Since', target: '自' },
    { source: 'Before', target: '之前' },
    { source: 'Between', target: '之间' },
    { source: 'From date', target: '开始日期' },
    { source: 'To date', target: '结束日期' },
    { source: 'Coordinates', target: '坐标' },
    { source: 'Latitude', target: '纬度' },
    { source: 'Longitude', target: '经度' },
    { source: 'Default color', target: '默认颜色' },
    { source: 'not specified', target: '未指定' },
    { source: 'Sign using your finger or pointer', target: '用手指或指针签名' },

    // List components
    { source: 'Filter', target: '筛选' },
    { source: 'Filter by field', target: '按字段筛选' },
    { source: 'Filter by...', target: '筛选方式...' },
    { source: 'Back', target: '返回' },
    { source: 'Back to {0} fields', target: '返回到 {0} 字段' },
    { source: 'Choose {0} from list', target: '从列表中选择 {0}' },
    { source: '{0} fields', target: '{0} 个字段' },
    { source: '{0} relationships', target: '{0} 个关系' },
    { source: 'Aggregate {0}', target: '汇总 {0}' },
    { source: 'No fields to select', target: '没有字段可供选择' },
    { source: 'Enter value...', target: '输入值...' },
    { source: 'Exclude', target: '排除' },
    { source: 'Actions', target: '操作' },
    { source: 'Search', target: '搜索' },
    { source: 'Sort 1 → 9', target: '排序 1 → 9' },
    { source: 'Sort 9 → 1', target: '排序 9 → 1' },
    { source: 'Sort A → Z', target: '排序 A → Z' },
    { source: 'Sort Z → A', target: '排序 Z → A' },
    { source: 'Refresh automatically', target: '自动刷新' },
    { source: 'All', target: '全部' },
    { source: 'Selected', target: '已选' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: '不幸的是，未找到与您的查询匹配的 {0}'
    },
    { source: 'We are fetching {0}, please, wait...', target: '我们正在获取 {0}，请稍候...' },
    { source: 'Add filter', target: '添加筛选' },
    { source: 'Delete this filter', target: '删除此筛选' },
    { source: 'Toggle ordering', target: '切换排序' },
    { source: 'Not configured', target: '未配置' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: '不幸的是，此组件尚未配置'
    },
    { source: 'records', target: '记录' },
    { source: '{0} items', target: '{0} 项' },

    // Menu
    { source: 'Users & Teams', target: '用户和团队' },
    { source: 'Billing', target: '计费' },
    { source: 'Billing & Plans', target: '计费和套餐' },
    { source: 'API keys', target: 'API 密钥' },
    { source: 'Dark Mode', target: '夜间模式' },
    { source: 'Light Mode', target: '日间模式' },
    { source: 'Disable Staff', target: '禁用员工' },
    { source: 'Enable Staff', target: '启用员工' },
    { source: 'Manage Templates', target: '管理模板' },
    { source: 'Logout', target: '登出' },
    { source: 'Activity Log', target: '活动日志' },
    { source: 'Collaborations', target: '协同' },
    { source: 'Open Visual Builder', target: '打开可视化构建器' },

    // Filters
    { source: 'equals', target: '等于' },
    { source: 'does not equal', target: '不等于' },
    { source: '{0} equals {1}', target: '{0} 等于 {1}' },
    { source: '{0} does not equal {1}', target: '{0} 不等于 {1}' },

    { source: 'contains', target: '包含' },
    { source: 'does not contain', target: '不包含' },
    { source: '{0} contains {1}', target: '{0} 包含 {1}' },
    { source: '{0} not contains {1}', target: '{0} 不包含 {1}' },

    { source: 'starts with', target: '开始于' },
    { source: 'does not start with', target: '不开始于' },
    { source: '{0} starts with {1}', target: '{0} 开始于 {1}' },
    { source: '{0} does not start with {1}', target: '{0} 不开始于 {1}' },

    { source: 'ends with', target: '结束于' },
    { source: 'does not end with', target: '不结束于' },
    { source: '{0} ends with {1}', target: '{0} 结束于 {1}' },
    { source: '{0} does not end with {1}', target: '{0} 不结束于 {1}' },

    { source: 'greater than', target: '大于' },
    { source: 'is not greater than', target: '不大于' },
    { source: '{0} is greater than {1}', target: '{0} 大于 {1}' },
    { source: '{0} not greater than {1}', target: '{0} 不大于 {1}' },

    { source: 'greater than or equals', target: '大于或等于' },
    { source: 'is not greater than or equals', target: '不大于或等于' },
    { source: '{0} is greater than or equals {1}', target: '{0} 大于或等于 {1}' },
    { source: '{0} is not greater than or equals {1}', target: '{0} 不大于或等于 {1}' },

    { source: 'less than', target: '小于' },
    { source: 'is not less than', target: '不小于' },
    { source: '{0} is less than {1}', target: '{0} 小于 {1}' },
    { source: '{0} is not less than {1}', target: '{0} 不小于 {1}' },

    { source: 'less than or equals', target: '小于或等于' },
    { source: 'is not less than or equals', target: '不小于或等于' },
    { source: '{0} is less than or equals {1}', target: '{0} 小于或等于 {1}' },
    { source: '{0} is not less than or equals {1}', target: '{0} 不小于或等于 {1}' },

    { source: 'one of', target: '其中之一' },
    { source: 'is one of', target: '是其中之一' },
    { source: 'is not one of', target: '不是其中之一' },
    { source: '{0} is one of {1}', target: '{0} 是其中之一 {1}' },
    { source: '{0} is not one of {1}', target: '{0} 不是其中之一 {1}' },

    { source: 'is null', target: '为空' },
    { source: 'is not null', target: '不为空' },
    { source: '{0} is null', target: '{0} 为空' },
    { source: '{0} is not null', target: '{0} 不为空' },

    { source: 'is future', target: '在将来' },
    { source: 'in the future', target: '在将来' },
    { source: 'is not in the future', target: '不在将来' },
    { source: '{0} is in the future', target: '{0} 在将来' },
    { source: '{0} is not in the future', target: '{0} 不在将来' },

    { source: 'is past', target: '在过去' },
    { source: 'in the past', target: '在过去' },
    { source: 'is not in the past', target: '不在过去' },
    { source: '{0} is in the past', target: '{0} 在过去' },
    { source: '{0} is not in the past', target: '{0} 不在过去' },

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

    { source: 'is Last Month', target: '是上个月' },
    { source: 'last month', target: '上个月' },
    { source: 'is not last month', target: '不是上个月' },
    { source: '{0} is last month', target: '{0} 是上个月' },
    { source: '{0} is not last month', target: '{0} 不是上个月' },

    { source: 'is Last Quarter', target: '是上个季度' },
    { source: 'last quarter', target: '上个季度' },
    { source: 'is not last quarter', target: '不是上个季度' },
    { source: '{0} is last quarter', target: '{0} 是上个季度' },
    { source: '{0} is not last quarter', target: '{0} 不是上个季度' },

    { source: 'is Last Year', target: '是去年' },
    { source: 'last year', target: '去年' },
    { source: 'is not last year', target: '不是去年' },
    { source: '{0} is last year', target: '{0} 是去年' },
    { source: '{0} is not last year', target: '{0} 不是去年' },

    { source: 'is Last X Days', target: '是过去 X 天' },
    { source: 'last X days', target: '过去 X 天' },
    { source: 'is not last X days', target: '不是过去 X 天' },
    { source: '{0} is last {1} days', target: '{0} 是过去 {1} 天' },
    { source: '{0} is not last {1} days', target: '{0} 不是过去 {1} 天' },

    { source: 'is Current Week', target: '是当前周' },
    { source: 'current week', target: '当前周' },
    { source: 'is not current week', target: '不是当前周' },
    { source: '{0} is current week', target: '{0} 是当前周' },
    { source: '{0} is not current week', target: '{0} 不是当前周' },

    { source: 'is Current Month', target: '是当前月' },
    { source: 'current month', target: '当前月' },
    { source: 'is not current month', target: '不是当前月' },
    { source: '{0} is current month', target: '{0} 是当前月' },
    { source: '{0} is not current month', target: '{0} 不是当前月' },

    { source: 'is Current Quarter', target: '是当前季度' },
    { source: 'current quarter', target: '当前季度' },
    { source: 'is not current quarter', target: '不是当前季度' },
    { source: '{0} is current quarter', target: '{0} 是当前季度' },
    { source: '{0} is not current quarter', target: '{0} 不是当前季度' },

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

    { source: 'is Previous Month', target: '是上个月' },
    { source: 'previous month', target: '上个月' },
    { source: 'is not previous month', target: '不是上个月' },
    { source: '{0} is previous month', target: '{0} 是上个月' },
    { source: '{0} is not previous month', target: '{0} 不是上个月' },

    { source: 'is Previous Quarter', target: '是上个季度' },
    { source: 'previous quarter', target: '上个季度' },
    { source: 'is not previous quarter', target: '不是上个季度' },
    { source: '{0} is previous quarter', target: '{0} 是上个季度' },
    { source: '{0} is not previous quarter', target: '{0} 不是上个季度' },

    { source: 'is Previous Year', target: '是去年' },
    { source: 'previous year', target: '去年' },
    { source: 'is not previous year', target: '不是去年' },
    { source: '{0} is previous year', target: '{0} 是去年' },
    { source: '{0} is not previous year', target: '{0} 不是去年' },

    { source: 'is Previous X Days', target: '是前 X 天' },
    { source: 'previous X days', target: '前 X 天' },
    { source: 'is not previous X days', target: '不是前 X 天' },
    { source: '{0} is previous {1} days', target: '{0} 是前 {1} 天' },
    { source: '{0} is not previous {1} days', target: '{0} 不是前 {1} 天' },

    { source: 'is empty', target: '为空' },
    { source: 'is not empty', target: '不为空' },
    { source: '{0} is empty', target: '{0} 为空' },
    { source: '{0} is not empty', target: '{0} 不为空' },

    { source: 'covered by', target: '覆盖' },
    { source: 'is not covered by', target: '不覆盖' },
    { source: '{0} covered by {1}', target: '{0} 被 {1} 覆盖' },
    { source: '{0} is not covered by {1}', target: '{0} 没被 {1} 覆盖' },

    // Activity log
    { source: 'No activities found', target: '未找到活动' },
    {
      source: 'Start to working with data to log activities.',
      target: '开始处理数据以记录活动。'
    },
    { source: 'All Activity', target: '所有活动' },
    { source: 'Create Record', target: '创建记录' },
    { source: 'Update Record', target: '更新记录' },
    { source: 'Delete Record', target: '删除记录' },
    { source: 'All Members', target: '所有成员' },

    // Collaboration
    { source: 'Timeline', target: '时间轴' },
    { source: 'Messages', target: '消息' },
    { source: 'Activity', target: '活动' },
    { source: 'Start chatting with your team', target: '开始与您的团队聊天' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: '传递有关当前页面的消息以跟踪重要信息。'
    },
    { source: 'Your Message', target: '您的消息' },
    { source: 'Send', target: '发送' },

    // Share
    { source: 'Invite members', target: '邀请成员' },
    { source: 'Public share', target: '公开分享' },
    { source: 'Sign Up', target: '注册' },
    { source: 'Members', target: '成员' },
    { source: 'Invite with Email', target: '通过电子邮件邀请' },
    { source: 'Invite someone...', target: '邀请某人...' },
    { source: 'Send Invite', target: '发送邀请' },
    {
      source: 'Limit access to your data by user properties',
      target: '通过用户属性限制对您数据的访问'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: '输入您希望邀请合作的用户的电子邮件。'
    },
    { source: 'Copy', target: '复制' },
    { source: 'Invite with Link', target: '通过链接邀请' },
    { source: 'Remove link', target: '移除链接' },
    { source: 'Add Invite Link', target: '添加邀请链接' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: '互联网上的任何人都可以通过此链接加入选定的团队。'
    },
    { source: 'Pending Invites', target: '待处理的邀请' },
    { source: 'Cancel invite', target: '取消邀请' },
    { source: 'Active Members', target: '活跃成员' },
    { source: 'Remove member', target: '移除成员' },
    { source: 'You are setting sharing for the current page', target: '您正在为当前页面设置共享' },
    { source: 'You are setting sharing for all pages of your App.', target: '您正在为您的应用的所有页面设置共享。' },
    { source: 'Public access link', target: '公众访问链接' },
    { source: 'Updating public access...', target: '更新公共访问...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target: '任何有此链接的人都可以查看当前页面。这样，您还可以将当前页面嵌入到另一个网站中。'
    },
    { source: 'Embed code (IFRAME)', target: '嵌入代码（IFRAME）' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: '将此代码粘贴到您希望当前页面出现的网站的HTML代码中。'
    },
    { source: 'link', target: '链接' },
    { source: 'invited', target: '已邀请' },
    { source: 'Choose Team', target: '选择团队' },
    { source: 'App Teams', target: '应用团队' },
    { source: 'Built-In Teams', target: '内置团队' },
    { source: 'Clear Team', target: '清除团队' },
    { source: 'Can build application and modify data', target: '可以构建应用程序和修改数据' },
    { source: 'Can modify data in application', target: '可以修改应用程序中的数据' },
    { source: 'Can only view data without modification', target: '只能查看数据而无法进行修改' },
    { source: 'Add Team', target: '添加团队' },
    { source: 'Edit Team', target: '编辑团队' },
    { source: 'Adding Team', target: '添加团队' },
    {
      source: 'Keep control over who has access to current App',
      target: '控制谁有权访问当前应用'
    },
    { source: 'Enter Team Name', target: '输入团队名称' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: '输入团队名称，例如：支持、销售、市场等。'
    },
    { source: 'Add a new member to this team.', target: '向此团队添加新成员。' },
    { source: 'Invite new member', target: '邀请新成员' },
    { source: 'User', target: '用户' },
    { source: 'Date Added', target: '添加日期' },
    { source: 'You', target: '您' },
    { source: 'Edit', target: '编辑' },
    { source: 'No users in this team', target: '此团队中没有用户' },
    { source: 'Page Permissions', target: '页面权限' },
    { source: 'App Permissions', target: '应用权限' },
    { source: 'Properties', target: '属性' },
    { source: 'Page name', target: '页面名称' },
    { source: 'Access', target: '访问' },
    { source: 'Full Access', target: '完全访问' },
    { source: 'Read Only', target: '只读' },
    { source: 'No Access', target: '无访问权限' },
    { source: 'Read', target: '读取' },
    { source: 'Update', target: '更新' },
    { source: 'Write', target: '写入' },
    { source: { label: 'Delete', context: 'permissions' }, target: '删除' },
    { source: 'Custom Access', target: '自定义访问' },
    { source: 'Read, create, update and delete data', target: '读取、创建、更新和删除数据' },
    { source: 'Choose allowed operations granularly', target: '逐一选择允许的操作' },
    { source: 'Without any access to data', target: '没有任何数据访问权限' },
    { source: 'Name', target: '姓名' },
    { source: 'Active', target: '活跃' },
    { source: 'Settings', target: '设置' },
    { source: 'Members and Teams', target: '成员和团队' },
    { source: 'App Builder', target: '应用构建器' },
    { source: 'Collection Permissions', target: '集合权限' },
    { source: "Grant permissions to app's collection", target: '授予应用程序集合权限' },
    { source: 'Collection', target: '集合' },
    {
      source: 'Limit access to your data by team properties',
      target: '通过团队属性限制对您数据的访问'
    },
    { source: 'Save Team', target: '保存团队' },
    { source: 'Create Team', target: '创建团队' },
    { source: 'Value', target: '值' },
    { source: 'No properties specified', target: '未指定属性' },

    // Navigation
    { source: 'Current App', target: '当前应用' },
    { source: 'Home', target: '首页' },

    // Profile
    {
      source: 'We are fetching user data, please, wait...',
      target: '我们正在获取用户数据，请稍候...'
    },
    { source: 'Profile Settings', target: '个人资料设置' },
    { source: 'Basic information about your account.', target: '您的帐户的基本信息。' },
    { source: 'Photo', target: '照片' },
    { source: 'your photo', target: '您的照片' },
    { source: 'Change', target: '更改' },
    { source: 'Upload', target: '上传' },
    { source: 'Photo was successfully updated', target: '照片已成功更新' },
    { source: 'Photo was successfully deleted', target: '照片已成功删除' },
    { source: 'First Name', target: '名字' },
    { source: 'Last Name', target: '姓氏' },
    { source: 'Your Email', target: '您的电子邮箱' },
    { source: 'Email Change', target: '更改电子邮箱' },
    { source: 'New Email', target: '新电子邮箱' },
    { source: 'Change Email', target: '更改电子邮箱' },
    { source: 'Check your inbox', target: '检查您的收件箱' },
    { source: 'Confirmation Email was sent to {0}', target: '确认邮件已发送到 {0}' },
    { source: 'Changing Email failed', target: '更改电子邮箱失败' },
    { source: 'Password Change', target: '更改密码' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target: '密码应足够强大以保护您的帐户，因此请设置至少 12 个字符的密码。'
    },
    { source: 'Current Password', target: '当前密码' },
    { source: 'New Password', target: '新密码' },
    { source: 'Confirm New Password', target: '确认新密码' },
    { source: 'Change Password', target: '更改密码' },
    {
      source: 'Current password was successfully updated, all other sessions will be logged out shortly',
      target: '当前密码更新成功，所有其他会话将很快注销'
    },
    { source: 'Saving current password failed', target: '保存当前密码失败' },
    { source: 'Short password', target: '密码太短' },
    { source: "Passwords don't match", target: '密码不匹配' },
    { source: 'Personal Preferences', target: '个人偏好' },
    { source: 'Language', target: '语言' },
    { source: 'Timezone', target: '时区' },
    { source: 'Current time in {0} is', target: '{0} 的当前时间是' },
    {
      source: 'Customize additional preferences for your account.',
      target: '自定义帐户的其他偏好设置。'
    },
    { source: 'News & Proposals', target: '新闻和提议' },
    {
      source: 'Subscribe to our updates and proposals.',
      target: '订阅我们的更新和提议。'
    },
    { source: 'Save changes', target: '保存更改' },
    { source: 'Current user was successfully updated', target: '当前用户更新成功' },
    { source: 'Saving current user failed', target: '保存当前用户失败' },

    // My Apps
    { source: 'Type to search...', target: '输入以搜索...' },
    { source: 'My Apps', target: '我的应用' },
    { source: 'New App', target: '新应用' },
    { source: 'Builder', target: '构建器' },
    { source: 'App', target: '应用' },
    { source: 'continue install', target: '继续安装' },
    { source: 'Open builder', target: '打开构建器' },
    { source: 'View published', target: '查看已发布' },
    { source: 'Delete App', target: '删除应用' },
    { source: 'Start from a template', target: '从模板开始' },
    { source: 'Preview', target: '预览' },
    { source: 'Contact Support', target: '联系支持' },
    { source: 'Documentation', target: '文档' },
    { source: 'Feature Requests', target: '功能请求' },
    { source: 'See What’s New', target: '查看最新资讯' },
    { source: 'Search templates...', target: '搜索模板...' },
    { source: 'any', target: '任意' },
    { source: 'more', target: '更多' },
    { source: 'Choose Data Source', target: '选择数据源' },
    { source: 'works with 30+ data sources', target: '与 30 多个数据源协同工作' },
    { source: 'Use this template', target: '使用此模板' },
    { source: 'stores data in Jet Tables', target: '将数据存储在 Jet 表中' },
    { source: 'New Data', target: '新数据' },
    { source: 'using {0}', target: '使用 {0}' },
    { source: "Can't find resource you're looking for?", target: '找不到您要找的资源？' },
    { source: 'Admin Panel', target: '管理面板' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: '在您的数据上执行列出、创建和更新（CRUD）操作'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target: '基于任何数据库、应用程序和 API（如 Stripe、Twilio 和 GraphQL）构建自定义管理面板。'
    },
    { source: 'All Integrations', target: '所有集成' },
    { source: 'Databases', target: '数据库' },
    { source: 'APIs', target: 'API' },
    { source: 'Frameworks', target: '框架' },
    { source: 'Storages', target: '存储' },

    // Sign In
    { source: 'Good morning', target: '早上好' },
    { source: 'Good afternoon', target: '下午好' },
    { source: 'Good evening', target: '晚上好' },
    { source: 'Sign In', target: '登录' },
    { source: 'Welcome Back.', target: '欢迎回来。' },
    { source: 'Sign in with {0}', target: '使用 {0} 登录' },
    { source: 'or login with', target: '或使用以下方式登录' },
    { source: 'Enter E-mail', target: '输入电子邮件' },
    { source: 'Enter password', target: '输入密码' },
    { source: 'Login', target: '登录' },
    { source: 'Create new account', target: '创建新帐户' },
    { source: 'Forgot my password', target: '忘记密码' },
    { source: 'required', target: '必需的' },
    { source: 'incorrect Email', target: '电子邮件不正确' },
    { source: 'Minimum password length {0}', target: '密码最短长度 {0}' },
    { source: 'Unable to Sign In', target: '无法登录' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: '开始 <span class="auth-form__accent">今天免费</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target: '无需卡。在为期 14 天的专业试用期间，您将免费获得所有高级功能。'
    },
    { source: 'Enter First Name', target: '输入名字' },
    { source: 'Enter Last Name (optional)', target: '输入姓氏（可选）' },
    { source: 'Enter Email', target: '输入电子邮件' },
    { source: 'Password', target: '密码' },
    { source: 'Repeat Password', target: '重复密码' },
    {
      source: 'By signing in you’re okay with our',
      target: '登录即表示您同意我们的'
    },
    {
      source: 'Creating an account means you’re okay with our',
      target: '创建帐户意味着您同意我们的'
    },
    { source: 'Terms of Service', target: '服务条款' },
    { source: 'Privacy Policy', target: '隐私政策' },
    { source: 'and', target: '和' },
    { source: 'Create your free account', target: '创建您的免费帐户' },
    { source: 'Already have an account', target: '已经有帐户了' },
    { source: 'Unable to Sign Up', target: '无法注册' },

    // Restore password
    { source: 'Reset your password', target: '重置密码' },
    { source: 'Email Address', target: '电子邮件地址' },
    { source: 'Reset password', target: '重置密码' },
    { source: 'Return to Sign In', target: '返回到登录' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target: '请检查您的电子邮件 – <strong>{0}</strong>。我们已发送验证链接，您应该按照该链接更改密码。'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be at least 8 characters.',
      target: '快完成了，只需在下面输入您的新密码。 <br>必须至少为 8 个字符。'
    },
    { source: 'Reset password & Sign In', target: '重置密码并登录' },
    { source: 'Unable to Send Code', target: '无法发送代码' },
    { source: 'Unable to Change Password', target: '无法更改密码' },

    // Email Verification
    { source: 'Email Verification', target: '电子邮箱验证' },
    { source: 'Resend verification code', target: '重新发送验证码' },
    { source: 'Verification email sent', target: '已发送验证邮件' },
    { source: 'Your Email is now verified', target: '您的电子邮箱已验证' },
    { source: 'Request is incorrect', target: '请求不正确' },

    // Invites
    {
      source: 'Join <span class="auth-form__accent">{0}</span>',
      target: '加入 <span class="auth-form__accent">{0}</span>'
    },
    {
      source: '<strong>{0}</strong> has invited you to join <strong>{1}</strong>',
      target: '<strong>{0}</strong> 邀请您加入 <strong>{1}</strong>'
    },
    {
      source: 'Someone has invited you to join <strong>{0}</strong>',
      target: '有人邀请您加入 <strong>{0}</strong>'
    },
    {
      source: 'You are joining <strong>{0}</strong> using invite link',
      target: '您正在使用邀请链接加入 <strong>{0}</strong>'
    },
    { source: 'Join', target: '加入' },
    { source: 'Go to home page', target: '转到主页' },
    { source: 'Invite link is wrong', target: '邀请链接错误' },
    {
      source:
        'Looks like your invitation link has expired or maybe you have followed the wrong link. Please try to ask to invite your again.',
      target: '您的邀请链接似乎已过期，或者您可能已点击错误的链接。请尝试再次请求邀请。'
    },
    {
      source: 'Unfortunately we failed to load information about this invitation',
      target: '很遗憾，我们未能加载有关此邀请的信息'
    },

    // Users & Teams
    { source: 'Members of {0}', target: '{0} 的成员' },
    { source: 'How to get started', target: '如何开始' },
    { source: 'Users API', target: '用户 API' },
    { source: 'Teams API', target: '团队 API' },
    { source: 'Invite Member', target: '邀请成员' },
    { source: 'Add User property', target: '添加用户属性' },
    { source: 'Add Team property', target: '添加团队属性' },
    { source: 'Edit property', target: '编辑属性' },
    { source: 'Delete property', target: '删除属性' },
    { source: 'Users', target: '用户' },
    { source: 'Teams', target: '团队' },
    { source: 'Search members', target: '搜索成员' },
    { source: 'Search teams', target: '搜索团队' },
    { source: '{0} pages', target: '{0} 页' },
    { source: 'No members', target: '没有成员' }
  ]
};

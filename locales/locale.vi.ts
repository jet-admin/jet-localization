import { Locale } from './locale';

export const locale: Locale = {
  name: 'vietnamese',
  language: 'vi',
  items: [
    // General
    { source: 'Save', target: 'Lưu' },
    { source: 'Create', target: 'Tạo' },
    { source: 'Duplicating', target: 'Sao chép' },
    { source: 'Duplicate', target: 'Bản sao' },
    { source: 'Mass Edit', target: 'Chỉnh sửa hàng loạt' },
    { source: 'Export', target: 'Xuất khẩu' },
    { source: 'Import', target: 'Nhập khẩu' },
    { source: 'Delete', target: 'Xóa' },
    { source: 'Continue', target: 'Tiếp tục' },
    { source: 'Submit', target: 'Gửi đi' },
    { source: 'Cancel', target: 'Hủy bỏ' },
    { source: 'Loading', target: 'Đang tải' },
    { source: 'Please wait...', target: 'Vui lòng chờ...' },
    { source: 'Loading failed', target: 'Tải không thành công' },
    { source: 'Unknown error', target: 'Lỗi không xác định' },
    { source: 'Add', target: 'Thêm vào' },
    { source: 'or', target: 'hoặc' },
    { source: 'Hours', target: 'Giờ' },
    { source: 'Minutes', target: 'Phút' },
    { source: 'Seconds', target: 'Giây' },
    { source: 'Saved', target: 'Đã lưu' },
    { source: 'Error', target: 'Lỗi' },
    { source: 'Page not found', target: 'Không tìm thấy trang' },
    {
      source: 'The specified address is incorrect, or the page does not exist',
      target: 'Địa chỉ được chỉ định không chính xác hoặc trang không tồn tại'
    },
    { source: 'Not allowed', target: 'Không được phép' },
    {
      source: "You don't have permissions to access this page",
      target: 'Bạn không có quyền truy cập trang này'
    },
    { source: 'Are you sure want to close?', target: 'Bạn có chắc muốn đóng không?' },
    { source: 'Close', target: 'Đóng' },

    // Actions
    { source: 'Action executed', target: 'Hành động đã thực hiện' },
    { source: 'Action executed successfully', target: 'Hành động thực hiện thành công' },
    { source: 'Action failed', target: 'Hành động thất bại' },
    {
      source: "You don't have permission for run this operation",
      target: 'Bạn không có quyền để thực hiện thao tác này'
    },
    { source: 'Specify parameters', target: 'Chỉ định thông số' },
    { source: 'Executing action', target: 'Đang thực hiện hành động' },
    { source: 'You are executing <strong>{0}</strong>', target: 'Bạn đang thực hiện <strong>{0}</strong>' },
    { source: 'Please fill in the parameters below.', target: 'Vui lòng điền vào các thông số bên dưới.' },
    { source: 'Execute', target: 'Thực hiện' },
    { source: 'Executing', target: 'Đang thực hiện' },
    { source: 'Finished', target: 'Hoàn thành' },
    { source: 'Done', target: 'Xong' },

    // Export
    { source: 'Records Export', target: 'Xuất khẩu hồ sơ' },
    { source: 'Downloading records data as a file', target: 'Tải dữ liệu hồ sơ dưới dạng tệp' },
    { source: 'Choose format', target: 'Chọn định dạng' },
    { source: 'Number of exporting records', target: 'Số lượng hồ sơ cần xuất khẩu' },
    { source: { label: 'Export', context: 'submit' }, target: 'Xuất khẩu' },
    { source: 'Exporting', target: 'Đang xuất khẩu' },
    { source: 'Export completed', target: 'Xuất khẩu hoàn thành' },
    { source: 'Failed to export', target: 'Xuất khẩu thất bại' },

    // Components
    { source: 'optional', target: 'tùy chọn' },
    { source: 'choose', target: 'chọn' },
    { source: 'Clear value', target: 'Xóa giá trị' },
    { source: 'loading...', target: 'đang tải...' },
    { source: 'Nothing found', target: 'Không tìm thấy' },
    { source: 'Search...', target: 'Tìm kiếm...' },
    { source: 'Enter at least {0} characters', target: 'Nhập ít nhất {0} ký tự' },
    { source: 'No options', target: 'Không có tùy chọn' },
    { source: 'Drop files here or', target: 'Thả tệp tại đây hoặc' },
    { source: 'Upload new', target: 'Tải lên mới' },
    { source: 'Clear', target: 'Xóa' },
    { source: 'Download', target: 'Tải xuống' },
    { source: 'Choose file', target: 'Chọn tệp' },
    { source: 'Choose files', target: 'Chọn các tệp' },
    { source: 'Scan with Camera', target: 'Quét bằng máy ảnh' },
    { source: 'Scan Image file', target: 'Quét tệp hình ảnh' },
    { source: 'Choose camera', target: 'Chọn máy ảnh' },
    { source: 'Stop scanning', target: 'Dừng quét' },
    { source: 'Scan again', target: 'Quét lại' },
    { source: 'Use this scan', target: 'Sử dụng quét này' },
    { source: 'Failed to scan', target: 'Không quét được' },
    {
      source: 'Code failed to scan, please try another image',
      target: 'Mã không quét được, vui lòng thử hình ảnh khác'
    },
    { source: 'current', target: 'hiện tại' },
    { source: 'Day', target: 'Ngày' },
    { source: 'Week', target: 'Tuần' },
    { source: 'Month', target: 'Tháng' },
    { source: 'Year', target: 'Năm' },
    { source: 'Today', target: 'Hôm nay' },
    { source: 'Daily', target: 'Hàng ngày' },
    { source: 'Weekly', target: 'Hàng tuần' },
    { source: 'Monthly', target: 'Hàng tháng' },
    { source: 'Quarterly', target: 'Hàng quý' },
    { source: 'Yearly', target: 'Hàng năm' },
    { source: 'Hourly', target: 'Hàng giờ' },
    { source: 'Minutely', target: 'Hàng phút' },
    { source: 'Since', target: 'Kể từ' },
    { source: 'Before', target: 'Trước' },
    { source: 'Between', target: 'Giữa' },
    { source: 'From date', target: 'Từ ngày' },
    { source: 'To date', target: 'Đến ngày' },
    { source: 'Coordinates', target: 'Tọa độ' },
    { source: 'Latitude', target: 'Vĩ độ' },
    { source: 'Longitude', target: 'Kinh độ' },
    { source: 'Default color', target: 'Màu mặc định' },
    { source: 'not specified', target: 'không được chỉ định' },
    { source: 'Sign using your finger or pointer', target: 'Ký bằng ngón tay hoặc con trỏ của bạn' },

    // List components
    { source: 'Filter', target: 'Bộ lọc' },
    { source: 'Filter by field', target: 'Lọc theo trường' },
    { source: 'Filter by...', target: 'Lọc theo...' },
    { source: 'Back', target: 'Quay lại' },
    { source: 'Back to {0} fields', target: 'Quay lại các trường {0}' },
    { source: 'Choose {0} from list', target: 'Chọn {0} từ danh sách' },
    { source: '{0} fields', target: '{0} trường' },
    { source: '{0} relationships', target: '{0} mối quan hệ' },
    { source: 'Aggregate {0}', target: 'Tổng hợp {0}' },
    { source: 'No fields to select', target: 'Không có trường để chọn' },
    { source: 'Enter value...', target: 'Nhập giá trị...' },
    { source: 'Exclude', target: 'Loại trừ' },
    { source: 'Actions', target: 'Hành động' },
    { source: 'Search', target: 'Tìm kiếm' },
    { source: 'Sort 1 → 9', target: 'Sắp xếp 1 → 9' },
    { source: 'Sort 9 → 1', target: 'Sắp xếp 9 → 1' },
    { source: 'Sort A → Z', target: 'Sắp xếp A → Z' },
    { source: 'Sort Z → A', target: 'Sắp xếp Z → A' },
    { source: 'Refresh automatically', target: 'Làm mới tự động' },
    { source: 'All', target: 'Tất cả' },
    { source: 'Selected', target: 'Đã chọn' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'Rất tiếc, không tìm thấy {0} phù hợp với truy vấn của bạn'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'Chúng tôi đang tìm nạp {0}, vui lòng đợi...' },
    { source: 'Add filter', target: 'Thêm bộ lọc' },
    { source: 'Delete this filter', target: 'Xóa bộ lọc này' },
    { source: 'Toggle ordering', target: 'Chuyển đổi thứ tự' },
    { source: 'Not configured', target: 'Chưa cấu hình' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'Rất tiếc, thành phần này chưa được cấu hình'
    },
    { source: 'records', target: 'hồ sơ' },
    { source: '{0} items', target: '{0} mục' },

    // Menu
    { source: 'Users & Teams', target: 'Người dùng & Đội nhóm' },
    { source: 'Billing', target: 'Thanh toán' },
    { source: 'Billing & Plans', target: 'Thanh toán & Gói' },
    { source: 'API keys', target: 'Khóa API' },
    { source: 'Dark Mode', target: 'Chế độ tối' },
    { source: 'Light Mode', target: 'Chế độ sáng' },
    { source: 'Disable Staff', target: 'Vô hiệu hóa nhân viên' },
    { source: 'Enable Staff', target: 'Kích hoạt nhân viên' },
    { source: 'Manage Templates', target: 'Quản lý mẫu' },
    { source: 'Logout', target: 'Đăng xuất' },
    { source: 'Activity Log', target: 'Nhật ký hoạt động' },
    { source: 'Collaborations', target: 'Cộng tác' },
    { source: 'Open Visual Builder', target: 'Mở Trình tạo trực quan' },

    // Filters
    { source: 'equals', target: 'bằng' },
    { source: 'does not equal', target: 'không bằng' },
    { source: '{0} equals {1}', target: '{0} bằng {1}' },
    { source: '{0} does not equal {1}', target: '{0} không bằng {1}' },

    { source: 'contains', target: 'chứa' },
    { source: 'does not contain', target: 'không chứa' },
    { source: '{0} contains {1}', target: '{0} chứa {1}' },
    { source: '{0} not contains {1}', target: '{0} không chứa {1}' },

    { source: 'starts with', target: 'bắt đầu với' },
    { source: 'does not start with', target: 'không bắt đầu với' },
    { source: '{0} starts with {1}', target: '{0} bắt đầu với {1}' },
    { source: '{0} does not start with {1}', target: '{0} không bắt đầu với {1}' },

    { source: 'ends with', target: 'kết thúc với' },
    { source: 'does not end with', target: 'không kết thúc với' },
    { source: '{0} ends with {1}', target: '{0} kết thúc với {1}' },
    { source: '{0} does not end with {1}', target: '{0} không kết thúc với {1}' },

    { source: 'greater than', target: 'lớn hơn' },
    { source: 'is not greater than', target: 'không lớn hơn' },
    { source: '{0} is greater than {1}', target: '{0} lớn hơn {1}' },
    { source: '{0} not greater than {1}', target: '{0} không lớn hơn {1}' },

    { source: 'greater than or equals', target: 'lớn hơn hoặc bằng' },
    { source: 'is not greater than or equals', target: 'không lớn hơn hoặc bằng' },
    { source: '{0} is greater than or equals {1}', target: '{0} lớn hơn hoặc bằng {1}' },
    { source: '{0} is not greater than or equals {1}', target: '{0} không lớn hơn hoặc bằng {1}' },

    { source: 'less than', target: 'nhỏ hơn' },
    { source: 'is not less than', target: 'không nhỏ hơn' },
    { source: '{0} is less than {1}', target: '{0} nhỏ hơn {1}' },
    { source: '{0} is not less than {1}', target: '{0} không nhỏ hơn {1}' },

    { source: 'less than or equals', target: 'nhỏ hơn hoặc bằng' },
    { source: 'is not less than or equals', target: 'không nhỏ hơn hoặc bằng' },
    { source: '{0} is less than or equals {1}', target: '{0} nhỏ hơn hoặc bằng {1}' },
    { source: '{0} is not less than or equals {1}', target: '{0} không nhỏ hơn hoặc bằng {1}' },

    { source: 'one of', target: 'một trong những' },
    { source: 'is one of', target: 'là một trong những' },
    { source: 'is not one of', target: 'không phải là một trong những' },
    { source: '{0} is one of {1}', target: '{0} là một trong những {1}' },
    { source: '{0} is not one of {1}', target: '{0} không phải là một trong những {1}' },

    { source: 'is null', target: 'là null' },
    { source: 'is not null', target: 'không phải là null' },
    { source: '{0} is null', target: '{0} là null' },
    { source: '{0} is not null', target: '{0} không phải là null' },

    { source: 'is future', target: 'là tương lai' },
    { source: 'in the future', target: 'trong tương lai' },
    { source: 'is not in the future', target: 'không phải trong tương lai' },
    { source: '{0} is in the future', target: '{0} là trong tương lai' },
    { source: '{0} is not in the future', target: '{0} không phải trong tương lai' },

    { source: 'is past', target: 'là quá khứ' },
    { source: 'in the past', target: 'trong quá khứ' },
    { source: 'is not in the past', target: 'không phải trong quá khứ' },
    { source: '{0} is in the past', target: '{0} là trong quá khứ' },
    { source: '{0} is not in the past', target: '{0} không phải trong quá khứ' },

    { source: 'is Today', target: 'là hôm nay' },
    { source: 'today', target: 'hôm nay' },
    { source: 'is not today', target: 'không phải hôm nay' },
    { source: '{0} is today', target: '{0} là hôm nay' },
    { source: '{0} is not today', target: '{0} không phải hôm nay' },

    { source: 'is Yesterday', target: 'là hôm qua' },
    { source: 'yesterday', target: 'hôm qua' },
    { source: 'is not yesterday', target: 'không phải hôm qua' },
    { source: '{0} is yesterday', target: '{0} là hôm qua' },
    { source: '{0} is not yesterday', target: '{0} không phải hôm qua' },

    { source: 'is Last Week', target: 'là tuần trước' },
    { source: 'last week', target: 'tuần trước' },
    { source: 'is not last week', target: 'không phải tuần trước' },
    { source: '{0} is last week', target: '{0} là tuần trước' },
    { source: '{0} is not last week', target: '{0} không phải tuần trước' },

    { source: 'is Last Month', target: 'là tháng trước' },
    { source: 'last month', target: 'tháng trước' },
    { source: 'is not last month', target: 'không phải tháng trước' },
    { source: '{0} is last month', target: '{0} là tháng trước' },
    { source: '{0} is not last month', target: '{0} không phải tháng trước' },

    { source: 'is Last Quarter', target: 'là quý trước' },
    { source: 'last quarter', target: 'quý trước' },
    { source: 'is not last quarter', target: 'không phải quý trước' },
    { source: '{0} is last quarter', target: '{0} là quý trước' },
    { source: '{0} is not last quarter', target: '{0} không phải quý trước' },

    { source: 'is Last Year', target: 'là năm ngoái' },
    { source: 'last year', target: 'năm ngoái' },
    { source: 'is not last year', target: 'không phải năm ngoái' },
    { source: '{0} is last year', target: '{0} là năm ngoái' },
    { source: '{0} is not last year', target: '{0} không phải năm ngoái' },

    { source: 'is Last X Days', target: 'là X ngày qua' },
    { source: 'last X days', target: 'X ngày qua' },
    { source: 'is not last X days', target: 'không phải X ngày qua' },
    { source: '{0} is last {1} days', target: '{0} là {1} ngày qua' },
    { source: '{0} is not last {1} days', target: '{0} không phải {1} ngày qua' },

    { source: 'is Current Week', target: 'là tuần này' },
    { source: 'current week', target: 'tuần này' },
    { source: 'is not current week', target: 'không phải tuần này' },
    { source: '{0} is current week', target: '{0} là tuần này' },
    { source: '{0} is not current week', target: '{0} không phải tuần này' },

    { source: 'is Current Month', target: 'là tháng này' },
    { source: 'current month', target: 'tháng này' },
    { source: 'is not current month', target: 'không phải tháng này' },
    { source: '{0} is current month', target: '{0} là tháng này' },
    { source: '{0} is not current month', target: '{0} không phải tháng này' },

    { source: 'is Current Quarter', target: 'là quý này' },
    { source: 'current quarter', target: 'quý này' },
    { source: 'is not current quarter', target: 'không phải quý này' },
    { source: '{0} is current quarter', target: '{0} là quý này' },
    { source: '{0} is not current quarter', target: '{0} không phải quý này' },

    { source: 'is Current Year', target: 'là năm nay' },
    { source: 'current year', target: 'năm nay' },
    { source: 'is not current year', target: 'không phải năm nay' },
    { source: '{0} is current year', target: '{0} là năm nay' },
    { source: '{0} is not current year', target: '{0} không phải năm nay' },

    { source: 'is Previous Week', target: 'là tuần trước đó' },
    { source: 'previous week', target: 'tuần trước đó' },
    { source: 'is not previous week', target: 'không phải tuần trước đó' },
    { source: '{0} is previous week', target: '{0} là tuần trước đó' },
    { source: '{0} is not previous week', target: '{0} không phải tuần trước đó' },

    { source: 'is Previous Month', target: 'là tháng trước đó' },
    { source: 'previous month', target: 'tháng trước đó' },
    { source: 'is not previous month', target: 'không phải tháng trước đó' },
    { source: '{0} is previous month', target: '{0} là tháng trước đó' },
    { source: '{0} is not previous month', target: '{0} không phải tháng trước đó' },

    { source: 'is Previous Quarter', target: 'là quý trước đó' },
    { source: 'previous quarter', target: 'quý trước đó' },
    { source: 'is not previous quarter', target: 'không phải quý trước đó' },
    { source: '{0} is previous quarter', target: '{0} là quý trước đó' },
    { source: '{0} is not previous quarter', target: '{0} không phải quý trước đó' },

    { source: 'is Previous Year', target: 'là năm trước đó' },
    { source: 'previous year', target: 'năm trước đó' },
    { source: 'is not previous year', target: 'không phải năm trước đó' },
    { source: '{0} is previous year', target: '{0} là năm trước đó' },
    { source: '{0} is not previous year', target: '{0} không phải năm trước đó' },

    { source: 'is Previous X Days', target: 'là X ngày trước đó' },
    { source: 'previous X days', target: 'X ngày trước đó' },
    { source: 'is not previous X days', target: 'không phải X ngày trước đó' },
    { source: '{0} is previous {1} days', target: '{0} là {1} ngày trước đó' },
    { source: '{0} is not previous {1} days', target: '{0} không phải {1} ngày trước đó' },

    { source: 'is empty', target: 'trống' },
    { source: 'is not empty', target: 'không trống' },
    { source: '{0} is empty', target: '{0} trống' },
    { source: '{0} is not empty', target: '{0} không trống' },

    { source: 'covered by', target: 'được bảo phủ bởi' },
    { source: 'is not covered by', target: 'không được bảo phủ bởi' },
    { source: '{0} covered by {1}', target: '{0} được bảo phủ bởi {1}' },
    { source: '{0} is not covered by {1}', target: '{0} không được bảo phủ bởi {1}' },

    // Activity log
    { source: 'No activities found', target: 'Không tìm thấy hoạt động nào' },
    {
      source: 'Start to working with data to log activities.',
      target: 'Bắt đầu làm việc với dữ liệu để ghi nhật ký hoạt động.'
    },
    { source: 'All Activity', target: 'Tất cả hoạt động' },
    { source: 'Create Record', target: 'Tạo hồ sơ' },
    { source: 'Update Record', target: 'Cập nhật hồ sơ' },
    { source: 'Delete Record', target: 'Xóa hồ sơ' },
    { source: 'All Members', target: 'Tất cả thành viên' },

    // Collaboration
    { source: 'Timeline', target: 'Dòng thời gian' },
    { source: 'Messages', target: 'Tin nhắn' },
    { source: 'Activity', target: 'Hoạt động' },
    { source: 'Start chatting with your team', target: 'Bắt đầu trò chuyện với nhóm của bạn' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'Gửi một tin nhắn về trang hiện tại để theo dõi thông tin quan trọng.'
    },
    { source: 'Your Message', target: 'Tin nhắn của bạn' },
    { source: 'Send', target: 'Gửi' },

    // Share
    { source: 'Invite members', target: 'Mời thành viên' },
    { source: 'Public share', target: 'Chia sẻ công khai' },
    { source: 'Sign Up', target: 'Đăng ký' },
    { source: 'Members', target: 'Thành viên' },
    { source: 'Invite with Email', target: 'Mời qua Email' },
    { source: 'Invite someone...', target: 'Mời ai đó...' },
    { source: 'Send Invite', target: 'Gửi lời mời' },
    {
      source: 'Limit access to your data by user properties',
      target: 'Giới hạn quyền truy cập vào dữ liệu của bạn bằng các thuộc tính người dùng'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: 'Nhập email của người bạn muốn mời để cộng tác.'
    },
    { source: 'Copy', target: 'Sao chép' },
    { source: 'Invite with Link', target: 'Mời qua liên kết' },
    { source: 'Remove link', target: 'Xóa liên kết' },
    { source: 'Add Invite Link', target: 'Thêm liên kết mời' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'Bất kỳ ai trên internet có liên kết này đều có thể tham gia đội đã chọn.'
    },
    { source: 'Pending Invites', target: 'Lời mời đang chờ xử lý' },
    { source: 'Cancel invite', target: 'Hủy lời mời' },
    { source: 'Active Members', target: 'Thành viên đang hoạt động' },
    { source: 'Remove member', target: 'Xóa thành viên' },
    {
      source: 'You are setting sharing for the current page',
      target: 'Bạn đang thiết lập chế độ chia sẻ cho trang hiện tại'
    },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'Bạn đang thiết lập chế độ chia sẻ cho tất cả các trang của ứng dụng.'
    },
    { source: 'Public access link', target: 'Liên kết truy cập công khai' },
    { source: 'Updating public access...', target: 'Đang cập nhật truy cập công khai...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        'Bất kỳ ai có liên kết này đều có thể xem trang hiện tại. Bằng cách này, bạn cũng có thể nhúng trang hiện tại vào trang web khác.'
    },
    { source: 'Embed code (IFRAME)', target: 'Mã nhúng (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: 'Dán mã này vào mã HTML của trang web mà bạn muốn trang hiện tại xuất hiện.'
    },
    { source: 'link', target: 'liên kết' },
    { source: 'invited', target: 'đã mời' },
    { source: 'Choose Team', target: 'Chọn đội' },
    { source: 'App Teams', target: 'Đội ứng dụng' },
    { source: 'Built-In Teams', target: 'Đội tích hợp sẵn' },
    { source: 'Clear Team', target: 'Xóa đội' },
    { source: 'Can build application and modify data', target: 'Có thể xây dựng ứng dụng và sửa đổi dữ liệu' },
    { source: 'Can modify data in application', target: 'Có thể sửa đổi dữ liệu trong ứng dụng' },
    { source: 'Can only view data without modification', target: 'Chỉ có thể xem dữ liệu mà không cần chỉnh sửa' },
    { source: 'Add Team', target: 'Thêm đội' },
    { source: 'Edit Team', target: 'Chỉnh sửa đội' },
    { source: 'Adding Team', target: 'Đang thêm đội' },
    {
      source: 'Keep control over who has access to current App',
      target: 'Giữ quyền kiểm soát xem ai có quyền truy cập vào ứng dụng hiện tại'
    },
    { source: 'Enter Team Name', target: 'Nhập tên đội' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'Gõ tên đội, ví dụ: Hỗ trợ, Bán hàng, Tiếp thị, v.v.'
    },
    { source: 'Add a new member to this team.', target: 'Thêm thành viên mới vào đội này.' },
    { source: 'Invite new member', target: 'Mời thành viên mới' },
    { source: 'User', target: 'Người dùng' },
    { source: 'Date Added', target: 'Ngày thêm' },
    { source: 'You', target: 'Bạn' },
    { source: 'Edit', target: 'Chỉnh sửa' },
    { source: 'No users in this team', target: 'Không có người dùng nào trong đội này' },
    { source: 'Page Permissions', target: 'Quyền trang' },
    { source: 'App Permissions', target: 'Quyền ứng dụng' },
    { source: 'Properties', target: 'Thuộc tính' },
    { source: 'Page name', target: 'Tên trang' },
    { source: 'Access', target: 'Truy cập' },
    { source: 'Full Access', target: 'Toàn quyền truy cập' },
    { source: 'Read Only', target: 'Chỉ đọc' },
    { source: 'No Access', target: 'Không truy cập' },
    { source: 'Read', target: 'Đọc' },
    { source: 'Update', target: 'Cập nhật' },
    { source: 'Write', target: 'Viết' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'Xóa' },
    { source: 'Custom Access', target: 'Quyền truy cập tùy chỉnh' },
    { source: 'Read, create, update and delete data', target: 'Đọc, tạo, cập nhật và xoá dữ liệu' },
    { source: 'Choose allowed operations granularly', target: 'Chọn các hoạt động được phép một cách chi tiết' },
    { source: 'Without any access to data', target: 'Không có quyền truy cập dữ liệu' },
    { source: 'Name', target: 'Tên' },
    { source: 'Active', target: 'Hoạt động' },
    { source: 'Settings', target: 'Cài đặt' },
    { source: 'Members and Teams', target: 'Thành viên và đội' },
    { source: 'App Builder', target: 'Xây dựng ứng dụng' },
    { source: 'Collection Permissions', target: 'Quyền thu thập' },
    { source: "Grant permissions to app's collection", target: 'Cấp quyền cho bộ sưu tập của ứng dụng' },
    { source: 'Collection', target: 'Bộ sưu tập' },
    {
      source: 'Limit access to your data by team properties',
      target: 'Giới hạn quyền truy cập dữ liệu của bạn bằng thuộc tính đội'
    },
    { source: 'Save Team', target: 'Lưu đội' },
    { source: 'Create Team', target: 'Tạo đội' },
    { source: 'Value', target: 'Giá trị' },
    { source: 'No properties specified', target: 'Không có thuộc tính nào được chỉ định' },

    // Navigation
    { source: 'Current App', target: 'Ứng dụng hiện tại' },
    { source: 'Home', target: 'Trang chủ' },

    // Profile
    {
      source: 'We are fetching user data, please, wait...',
      target: 'Chúng tôi đang lấy dữ liệu người dùng, vui lòng đợi...'
    },
    { source: 'Profile Settings', target: 'Cài đặt hồ sơ' },
    { source: 'Basic information about your account.', target: 'Thông tin cơ bản về tài khoản của bạn.' },
    { source: 'Photo', target: 'Ảnh' },
    { source: 'your photo', target: 'ảnh của bạn' },
    { source: 'Change', target: 'Thay đổi' },
    { source: 'Upload', target: 'Tải lên' },
    { source: 'Photo was successfully updated', target: 'Ảnh đã được cập nhật thành công' },
    { source: 'Photo was successfully deleted', target: 'Ảnh đã được xóa thành công' },
    { source: 'First Name', target: 'Tên' },
    { source: 'Last Name', target: 'Họ' },
    { source: 'Your Email', target: 'Email của bạn' },
    { source: 'Email Change', target: 'Thay đổi Email' },
    { source: 'New Email', target: 'Email mới' },
    { source: 'Change Email', target: 'Thay đổi Email' },
    { source: 'Check your inbox', target: 'Kiểm tra hộp thư của bạn' },
    { source: 'Confirmation Email was sent to {0}', target: 'Email xác nhận đã được gửi tới {0}' },
    { source: 'Changing Email failed', target: 'Thay đổi Email thất bại' },
    { source: 'Password Change', target: 'Thay đổi mật khẩu' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target: 'Mật khẩu phải đủ mạnh để bảo vệ tài khoản của bạn, nên có ít nhất 12 ký tự.'
    },
    { source: 'Current Password', target: 'Mật khẩu hiện tại' },
    { source: 'New Password', target: 'Mật khẩu mới' },
    { source: 'Confirm New Password', target: 'Xác nhận mật khẩu mới' },
    { source: 'Change Password', target: 'Thay đổi mật khẩu' },
    {
      source: 'Current password was successfully updated, all other sessions will be logged out shortly',
      target: 'Mật khẩu hiện tại đã được cập nhật thành công, tất cả các phiên khác sẽ sớm bị đăng xuất'
    },
    { source: 'Saving current password failed', target: 'Lưu mật khẩu hiện tại không thành công' },
    { source: 'Short password', target: 'Mật khẩu ngắn' },
    { source: "Passwords don't match", target: 'Mật khẩu không khớp' },
    { source: 'Personal Preferences', target: 'Sở thích cá nhân' },
    { source: 'Language', target: 'Ngôn ngữ' },
    { source: 'Timezone', target: 'Múi giờ' },
    { source: 'Current time in {0} is', target: 'Giờ hiện tại ở {0} là' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'Tùy chỉnh thêm các tùy chọn cho tài khoản của bạn.'
    },
    { source: 'News & Proposals', target: 'Tin tức & Đề xuất' },
    {
      source: 'Subscribe to our updates and proposals.',
      target: 'Đăng ký nhận các cập nhật và đề xuất của chúng tôi.'
    },
    { source: 'Save changes', target: 'Lưu thay đổi' },
    { source: 'Current user was successfully updated', target: 'Người dùng hiện tại đã được cập nhật thành công' },
    { source: 'Saving current user failed', target: 'Lưu người dùng hiện tại không thành công' },

    // My Apps
    { source: 'Type to search...', target: 'Nhập để tìm kiếm...' },
    { source: 'My Apps', target: 'Ứng dụng của tôi' },
    { source: 'New App', target: 'Ứng dụng mới' },
    { source: 'Builder', target: 'Trình tạo' },
    { source: 'App', target: 'Ứng dụng' },
    { source: 'continue install', target: 'tiếp tục cài đặt' },
    { source: 'Open builder', target: 'Mở trình tạo' },
    { source: 'View published', target: 'Xem đã xuất bản' },
    { source: 'Delete App', target: 'Xóa ứng dụng' },
    { source: 'Start from a template', target: 'Bắt đầu từ mẫu' },
    { source: 'Preview', target: 'Xem trước' },
    { source: 'Contact Support', target: 'Liên hệ hỗ trợ' },
    { source: 'Documentation', target: 'Tài liệu' },
    { source: 'Feature Requests', target: 'Yêu cầu tính năng' },
    { source: 'See What’s New', target: 'Xem những điều mới' },
    { source: 'Search templates...', target: 'Tìm kiếm mẫu...' },
    { source: 'any', target: 'bất kỳ' },
    { source: 'more', target: 'thêm' },
    { source: 'Choose Data Source', target: 'Chọn nguồn dữ liệu' },
    { source: 'works with 30+ data sources', target: 'hoạt động với hơn 30 nguồn dữ liệu' },
    { source: 'Use this template', target: 'Sử dụng mẫu này' },
    { source: 'stores data in Jet Tables', target: 'lưu trữ dữ liệu trong Jet Tables' },
    { source: 'New Data', target: 'Dữ liệu mới' },
    { source: 'using {0}', target: 'sử dụng {0}' },
    { source: "Can't find resource you're looking for?", target: 'Không tìm thấy tài nguyên bạn đang tìm kiếm?' },
    { source: 'Admin Panel', target: 'Bảng quản trị' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'Danh sách, tạo và cập nhật (CRUD) các thao tác trên dữ liệu của bạn'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target:
        'Xây dựng bảng quản trị tùy chỉnh dựa trên bất kỳ cơ sở dữ liệu, ứng dụng và API nào như Stripe, Twilio và GraphQL.'
    },
    { source: 'All Integrations', target: 'Tất cả tích hợp' },
    { source: 'Databases', target: 'Cơ sở dữ liệu' },
    { source: 'APIs', target: 'APIs' },
    { source: 'Frameworks', target: 'Khung công tác' },
    { source: 'Storages', target: 'Lưu trữ' },

    // Sign In
    { source: 'Good morning', target: 'Chào buổi sáng' },
    { source: 'Good afternoon', target: 'Chào buổi chiều' },
    { source: 'Good evening', target: 'Chào buổi tối' },
    { source: 'Sign In', target: 'Đăng nhập' },
    { source: 'Welcome Back.', target: 'Chào mừng trở lại.' },
    { source: 'Sign in with {0}', target: 'Đăng nhập bằng {0}' },
    { source: 'or login with', target: 'hoặc đăng nhập bằng' },
    { source: 'Enter E-mail', target: 'Nhập email' },
    { source: 'Enter password', target: 'Nhập mật khẩu' },
    { source: 'Login', target: 'Đăng nhập' },
    { source: 'Create new account', target: 'Tạo tài khoản mới' },
    { source: 'Forgot my password', target: 'Quên mật khẩu' },
    { source: 'required', target: 'bắt buộc' },
    { source: 'incorrect Email', target: 'Email không chính xác' },
    { source: 'Minimum password length {0}', target: 'Độ dài mật khẩu tối thiểu {0}' },
    { source: 'Unable to Sign In', target: 'Không thể đăng nhập' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'Bắt đầu <span class="auth-form__accent">miễn phí hôm nay</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target: 'Không cần thẻ. Bạn sẽ nhận được tất cả các chức năng nâng cao miễn phí trong 14 ngày dùng thử PRO.'
    },
    { source: 'Enter First Name', target: 'Nhập tên' },
    { source: 'Enter Last Name (optional)', target: 'Nhập họ (tùy chọn)' },
    { source: 'Enter Email', target: 'Nhập email' },
    { source: 'Password', target: 'Mật khẩu' },
    { source: 'Repeat Password', target: 'Nhập lại mật khẩu' },
    {
      source: 'By signing in you’re okay with our',
      target: 'Bằng cách đăng nhập, bạn đồng ý với'
    },
    {
      source: 'Creating an account means you’re okay with our',
      target: 'Tạo tài khoản có nghĩa là bạn đồng ý với'
    },
    { source: 'Terms of Service', target: 'Điều khoản dịch vụ' },
    { source: 'Privacy Policy', target: 'Chính sách bảo mật' },
    { source: 'and', target: 'và' },
    { source: 'Create account', target: 'Tạo tài khoản' },
    { source: 'Already have an account', target: 'Đã có tài khoản' },
    { source: 'Unable to Sign Up', target: 'Không thể đăng ký' },

    // Restore password
    { source: 'Reset your password', target: 'Đặt lại mật khẩu của bạn' },
    { source: 'Email Address', target: 'Địa chỉ email' },
    { source: 'Reset password', target: 'Đặt lại mật khẩu' },
    { source: 'Return to Sign In', target: 'Quay lại Đăng nhập' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'Vui lòng kiểm tra Email của bạn – <strong>{0}</strong>. Chúng tôi đã gửi liên kết xác thực mà bạn nên theo dõi để thay đổi mật khẩu của mình.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be at least 8 characters.',
      target: 'Gần hoàn thành, chỉ cần nhập mật khẩu mới của bạn dưới đây. <br>Phải ít nhất 8 ký tự.'
    },
    { source: 'Reset password & Sign In', target: 'Đặt lại mật khẩu & Đăng nhập' },
    { source: 'Unable to Send Code', target: 'Không thể gửi mã' },
    { source: 'Unable to Change Password', target: 'Không thể thay đổi mật khẩu' },

    // Email Verification
    { source: 'Email Verification', target: 'Xác minh email' },
    { source: 'Resend verification code', target: 'Gửi lại mã xác minh' },
    { source: 'Verification email sent', target: 'Email xác minh đã được gửi' },
    { source: 'Your Email is now verified', target: 'Email của bạn bây giờ đã được xác minh' },
    { source: 'Request is incorrect', target: 'Yêu cầu không chính xác' },

    // Invites
    {
      source: 'Join <span class="auth-form__accent">{0}</span>',
      target: 'Tham gia <span class="auth-form__accent">{0}</span>'
    },
    {
      source: '<strong>{0}</strong> has invited you to join <strong>{1}</strong>',
      target: '<strong>{0}</strong> đã mời bạn tham gia <strong>{1}</strong>'
    },
    {
      source: 'Someone has invited you to join <strong>{0}</strong>',
      target: 'Ai đó đã mời bạn tham gia <strong>{0}</strong>'
    },
    {
      source: 'You are joining <strong>{0}</strong> using invite link',
      target: 'Bạn đang tham gia <strong>{0}</strong> bằng cách sử dụng liên kết mời'
    },
    { source: 'Join', target: 'Tham gia' },
    { source: 'Go to home page', target: 'Đi đến trang chủ' },
    { source: 'Invite link is wrong', target: 'Liên kết mời không đúng' },
    {
      source:
        'Looks like your invitation link has expired or maybe you have followed the wrong link. Please try to ask to invite your again.',
      target:
        'Có vẻ như liên kết mời của bạn đã hết hạn hoặc có thể bạn đã theo sai liên kết. Vui lòng thử yêu cầu mời lại.'
    },
    {
      source: 'Unfortunately we failed to load information about this invitation',
      target: 'Rất tiếc chúng tôi đã không thể tải thông tin về lời mời này'
    },

    // Users & Teams
    { source: 'Members of {0}', target: 'Thành viên của {0}' },
    { source: 'How to get started', target: 'Cách bắt đầu' },
    { source: 'Users API', target: 'API Người dùng' },
    { source: 'Teams API', target: 'API Đội nhóm' },
    { source: 'Invite Member', target: 'Mời thành viên' },
    { source: 'Add User property', target: 'Thêm thuộc tính người dùng' },
    { source: 'Add Team property', target: 'Thêm thuộc tính đội' },
    { source: 'Edit property', target: 'Chỉnh sửa thuộc tính' },
    { source: 'Delete property', target: 'Xóa thuộc tính' },
    { source: 'Users', target: 'Người dùng' },
    { source: 'Teams', target: 'Đội nhóm' },
    { source: 'Search members', target: 'Tìm kiếm thành viên' },
    { source: 'Search teams', target: 'Tìm kiếm đội' },
    { source: '{0} pages', target: '{0} trang' },
    { source: 'No members', target: 'Không có thành viên nào' }
  ]
};

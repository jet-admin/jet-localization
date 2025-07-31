import { Locale } from './locale';

export const locale: Locale = {
  name: 'thai',
  language: 'th',
  items: [
    // General
    { source: 'Save', target: 'บันทึก' },
    { source: 'Create', target: 'สร้าง' },
    { source: 'Duplicating', target: 'กำลังทำซ้ำ' },
    { source: 'Duplicate', target: 'ทำซ้ำ' },
    { source: 'Mass Edit', target: 'แก้ไขจำนวนมาก' },
    { source: 'Export', target: 'ส่งออก' },
    { source: 'Import', target: 'นำเข้า' },
    { source: 'Delete', target: 'ลบ' },
    { source: 'Continue', target: 'ดำเนินการต่อ' },
    { source: 'Submit', target: 'ส่ง' },
    { source: 'Cancel', target: 'ยกเลิก' },
    { source: 'Loading', target: 'กำลังโหลด' },
    { source: 'Please wait...', target: 'กรุณารอ...' },
    { source: 'Loading failed', target: 'การโหลดล้มเหลว' },
    { source: 'Unknown error', target: 'ข้อผิดพลาดไม่ทราบสาเหตุ' },
    { source: 'Add', target: 'เพิ่ม' },
    { source: 'or', target: 'หรือ' },
    { source: 'Hours', target: 'ชั่วโมง' },
    { source: 'Minutes', target: 'นาที' },
    { source: 'Seconds', target: 'วินาที' },
    { source: 'Saved', target: 'บันทึกแล้ว' },
    { source: 'Error', target: 'ข้อผิดพลาด' },
    { source: 'Page not found', target: 'ไม่พบหน้า' },
    {
      source: 'The specified address is incorrect, or the page does not exist',
      target: 'ที่อยู่ที่ระบุไม่ถูกต้อง หรือหน้าไม่อยู่'
    },
    { source: 'Not allowed', target: 'ไม่อนุญาต' },
    {
      source: "You don't have permissions to access this page",
      target: 'คุณไม่มีสิทธิ์เข้าถึงหน้านี้'
    },
    { source: 'Are you sure want to close?', target: 'คุณแน่ใจหรือไม่ว่าต้องการปิด?' },
    { source: 'Close', target: 'ปิด' },

    // Actions
    { source: 'Action executed', target: 'ดำเนินการเสร็จสิ้น' },
    { source: 'Action executed successfully', target: 'ดำเนินการสำเร็จ' },
    { source: 'Action failed', target: 'ดำเนินการล้มเหลว' },
    {
      source: "You don't have permission for run this operation",
      target: 'คุณไม่มีสิทธิ์ดำเนินการนี้'
    },
    { source: 'Specify parameters', target: 'ระบุตัวแปร' },
    { source: 'Executing action', target: 'กำลังดำเนินการ' },
    { source: 'You are executing <strong>{0}</strong>', target: 'คุณกำลังดำเนินการ <strong>{0}</strong>' },
    { source: 'Please fill in the parameters below.', target: 'กรุณากรอกตัวแปรด้านล่าง' },
    { source: 'Execute', target: 'ดำเนินการ' },
    { source: 'Executing', target: 'กำลังดำเนินการ' },
    { source: 'Finished', target: 'เสร็จสิ้น' },
    { source: 'Done', target: 'เรียบร้อย' },

    // Export
    { source: 'Records Export', target: 'ส่งออกบันทึก' },
    { source: 'Downloading records data as a file', target: 'กำลังโหลดข้อมูลบันทึกเป็นไฟล์' },
    { source: 'Choose format', target: 'เลือกฟอร์แมท' },
    { source: 'Number of exporting records', target: 'จำนวนบันทึกที่ส่งออก' },
    { source: { label: 'Export', context: 'submit' }, target: 'ส่งออก' },
    { source: 'Exporting', target: 'กำลังส่งออก' },
    { source: 'Export completed', target: 'ส่งออกเสร็จสิ้น' },
    { source: 'Failed to export', target: 'การส่งออกล้มเหลว' },

    // Components
    { source: 'optional', target: 'ตัวเลือก' },
    { source: 'choose', target: 'เลือก' },
    { source: 'Clear value', target: 'ล้างค่า' },
    { source: 'loading...', target: 'กำลังโหลด...' },
    { source: 'Nothing found', target: 'ไม่พบสิ่งใด' },
    { source: 'Search...', target: 'ค้นหา...' },
    { source: 'Enter at least {0} characters', target: 'ใส่อย่างน้อย {0} ตัวอักษร' },
    { source: 'No options', target: 'ไม่มีตัวเลือก' },
    { source: 'Drop files here or', target: 'วางไฟล์ที่นี่หรือ' },
    { source: 'Upload new', target: 'อัพโหลดใหม่' },
    { source: 'Clear', target: 'ล้าง' },
    { source: 'Download', target: 'ดาวน์โหลด' },
    { source: 'Choose file', target: 'เลือกไฟล์' },
    { source: 'Choose files', target: 'เลือกไฟล์หลายไฟล์' },
    { source: 'Scan with Camera', target: 'สแกนด้วยกล้อง' },
    { source: 'Scan Image file', target: 'สแกนไฟล์ภาพ' },
    { source: 'Choose camera', target: 'เลือกกล้อง' },
    { source: 'Stop scanning', target: 'หยุดสแกน' },
    { source: 'Scan again', target: 'สแกนอีกครั้ง' },
    { source: 'Use this scan', target: 'ใช้การสแกนนี้' },
    { source: 'Failed to scan', target: 'สแกนล้มเหลว' },
    {
      source: 'Code failed to scan, please try another image',
      target: 'ไม่สามารถสแกนรหัสผ่านได้ โปรดลองอีกครั้ง'
    },
    { source: 'current', target: 'ปัจจุบัน' },
    { source: 'Day', target: 'วัน' },
    { source: 'Week', target: 'สัปดาห์' },
    { source: 'Month', target: 'เดือน' },
    { source: 'Year', target: 'ปี' },
    { source: 'Today', target: 'วันนี้' },
    { source: 'Daily', target: 'รายวัน' },
    { source: 'Weekly', target: 'รายสัปดาห์' },
    { source: 'Monthly', target: 'รายเดือน' },
    { source: 'Quarterly', target: 'รายไตรมาส' },
    { source: 'Yearly', target: 'รายปี' },
    { source: 'Hourly', target: 'รายชั่วโมง' },
    { source: 'Minutely', target: 'รายนาที' },
    { source: 'Since', target: 'ตั้งแต่' },
    { source: 'Before', target: 'ก่อน' },
    { source: 'Between', target: 'ระหว่าง' },
    { source: 'From date', target: 'จากวันที่' },
    { source: 'To date', target: 'ถึงวันที่' },
    { source: 'Coordinates', target: 'พิกัด' },
    { source: 'Latitude', target: 'ละติจูด' },
    { source: 'Longitude', target: 'ลองจิจูด' },
    { source: 'Default color', target: 'สีเริ่มต้น' },
    { source: 'not specified', target: 'ไม่ระบุ' },
    { source: 'Sign using your finger or pointer', target: 'เซ็นชื่อโดยใช้มือหรือปากกา' },

    // List components
    { source: 'Filter', target: 'ตัวกรอง' },
    { source: 'Filter by field', target: 'กรองโดยใช้ฟิลด์' },
    { source: 'Filter by...', target: 'กรองโดย...' },
    { source: 'Back', target: 'กลับ' },
    { source: 'Back to {0} fields', target: 'กลับไปที่ฟิลด์ {0}' },
    { source: 'Choose {0} from list', target: 'เลือก {0} จากรายการ' },
    { source: '{0} fields', target: '{0} ฟิลด์' },
    { source: '{0} relationships', target: '{0} ความสัมพันธ์' },
    { source: 'Aggregate {0}', target: 'รวม {0}' },
    { source: 'No fields to select', target: 'ไม่มีฟิลด์ให้เลือก' },
    { source: 'Enter value...', target: 'ป้อนค่า...' },
    { source: 'Exclude', target: 'ไม่รวม' },
    { source: 'Actions', target: 'การดำเนินการ' },
    { source: 'Search', target: 'ค้นหา' },
    { source: 'Sort 1 → 9', target: 'เรียงจาก 1 → 9' },
    { source: 'Sort 9 → 1', target: 'เรียงจาก 9 → 1' },
    { source: 'Sort A → Z', target: 'เรียงจาก ก → ฮ' },
    { source: 'Sort Z → A', target: 'เรียงจาก ฮ → ก' },
    { source: 'Refresh automatically', target: 'รีเฟรชอัตโนมัติ' },
    { source: 'All', target: 'ทั้งหมด' },
    { source: 'Selected', target: 'ที่เลือก' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: 'ไม่พบ {0} ที่ตรงกับการค้นหาของคุณ'
    },
    { source: 'We are fetching {0}, please, wait...', target: 'เรากำลังดึงข้อมูล {0} กรุณารอ...' },
    { source: 'Add filter', target: 'เพิ่มตัวกรอง' },
    { source: 'Delete this filter', target: 'ลบตัวกรองนี้' },
    { source: 'Toggle ordering', target: 'สลับลำดับ' },
    { source: 'Not configured', target: 'ไม่กำหนดค่า' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: 'ขออภัย ส่วนนี้ยังไม่ได้กำหนดค่า'
    },
    { source: 'records', target: 'บันทึก' },
    { source: '{0} items', target: '{0} รายการ' },

    // Menu
    { source: 'Users & Teams', target: 'ผู้ใช้และทีม' },
    { source: 'Billing', target: 'การเรียกเก็บเงิน' },
    { source: 'Billing & Plans', target: 'การเรียกเก็บเงินและแผน' },
    { source: 'API keys', target: 'คีย์ API' },
    { source: 'Dark Mode', target: 'โหมดกลางคืน' },
    { source: 'Light Mode', target: 'โหมดกลางวัน' },
    { source: 'Disable Staff', target: 'ปิดใช้งานพนักงาน' },
    { source: 'Enable Staff', target: 'เปิดใช้งานพนักงาน' },
    { source: 'Manage Templates', target: 'จัดการเทมเพลต' },
    { source: 'Logout', target: 'ออกจากระบบ' },
    { source: 'Activity Log', target: 'บันทึกกิจกรรม' },
    { source: 'Collaborations', target: 'การทำงานร่วมกัน' },
    { source: 'Open Visual Builder', target: 'เปิดการสร้างภาพ' },

    // Filters
    { source: 'equals', target: 'เท่ากับ' },
    { source: 'does not equal', target: 'ไม่เท่ากับ' },
    { source: '{0} equals {1}', target: '{0} เท่ากับ {1}' },
    { source: '{0} does not equal {1}', target: '{0} ไม่เท่ากับ {1}' },

    { source: 'contains', target: 'ประกอบด้วย' },
    { source: 'does not contain', target: 'ไม่ประกอบด้วย' },
    { source: '{0} contains {1}', target: '{0} ประกอบด้วย {1}' },
    { source: '{0} not contains {1}', target: '{0} ไม่ประกอบด้วย {1}' },

    { source: 'starts with', target: 'เริ่มด้วย' },
    { source: 'does not start with', target: 'ไม่ได้เริ่มด้วย' },
    { source: '{0} starts with {1}', target: '{0} เริ่มด้วย {1}' },
    { source: '{0} does not start with {1}', target: '{0} ไม่ได้เริ่มด้วย {1}' },

    { source: 'ends with', target: 'ลงท้ายด้วย' },
    { source: 'does not end with', target: 'ไม่ได้ลงท้ายด้วย' },
    { source: '{0} ends with {1}', target: '{0} ลงท้ายด้วย {1}' },
    { source: '{0} does not end with {1}', target: '{0} ไม่ได้ลงท้ายด้วย {1}' },

    { source: 'greater than', target: 'มากกว่า' },
    { source: 'is not greater than', target: 'ไม่มากกว่า' },
    { source: '{0} is greater than {1}', target: '{0} มากกว่า {1}' },
    { source: '{0} not greater than {1}', target: '{0} ไม่มากกว่า {1}' },

    { source: 'greater than or equals', target: 'มากกว่าหรือเท่ากับ' },
    { source: 'is not greater than or equals', target: 'ไม่มากกว่าหรือเท่ากับ' },
    { source: '{0} is greater than or equals {1}', target: '{0} มากกว่าหรือเท่ากับ {1}' },
    { source: '{0} is not greater than or equals {1}', target: '{0} ไม่มากกว่าหรือเท่ากับ {1}' },

    { source: 'less than', target: 'น้อยกว่า' },
    { source: 'is not less than', target: 'ไม่ต่ำกว่า' },
    { source: '{0} is less than {1}', target: '{0} น้อยกว่า {1}' },
    { source: '{0} is not less than {1}', target: '{0} ไม่ต่ำกว่า {1}' },

    { source: 'less than or equals', target: 'น้อยกว่าหรือเท่ากับ' },
    { source: 'is not less than or equals', target: 'ไม่ต่ำกว่าหรือเท่ากับ' },
    { source: '{0} is less than or equals {1}', target: '{0} น้อยกว่าหรือเท่ากับ {1}' },
    { source: '{0} is not less than or equals {1}', target: '{0} ไม่ต่ำกว่าหรือเท่ากับ {1}' },

    { source: 'one of', target: 'อย่างใดอย่างหนึ่ง' },
    { source: 'is one of', target: 'เป็นหนึ่งใน' },
    { source: 'is not one of', target: 'ไม่ได้เป็นหนึ่งใน' },
    { source: '{0} is one of {1}', target: '{0} อย่างใดอย่างหนึ่ง {1}' },
    { source: '{0} is not one of {1}', target: '{0} ไม่ได้เป็นหนึ่งใน {1}' },

    { source: 'is null', target: 'เป็นค่าว่าง' },
    { source: 'is not null', target: 'ไม่เป็นค่าว่าง' },
    { source: '{0} is null', target: '{0} เป็นค่าว่าง' },
    { source: '{0} is not null', target: '{0} ไม่เป็นค่าว่าง' },

    { source: 'is future', target: 'ในอนาคต' },
    { source: 'in the future', target: 'ในอนาคต' },
    { source: 'is not in the future', target: 'ไม่อยู่ในอนาคต' },
    { source: '{0} is in the future', target: '{0} ในอนาคต' },
    { source: '{0} is not in the future', target: '{0} ไม่อยู่ในอนาคต' },

    { source: 'is past', target: 'ในอดีต' },
    { source: 'in the past', target: 'ในอดีต' },
    { source: 'is not in the past', target: 'ไม่อยู่ในอดีต' },
    { source: '{0} is in the past', target: '{0} ในอดีต' },
    { source: '{0} is not in the past', target: '{0} ไม่อยู่ในอดีต' },

    { source: 'is Today', target: 'เป็นวันนี้' },
    { source: 'today', target: 'วันนี้' },
    { source: 'is not today', target: 'ไม่ใช่วันนี้' },
    { source: '{0} is today', target: '{0} เป็นวันนี้' },
    { source: '{0} is not today', target: '{0} ไม่ใช่วันนี้' },

    { source: 'is Yesterday', target: 'เป็นเมื่อวานนี้' },
    { source: 'yesterday', target: 'เมื่อวานนี้' },
    { source: 'is not yesterday', target: 'ไม่ใช่เมื่อวานนี้' },
    { source: '{0} is yesterday', target: '{0} เป็นเมื่อวานนี้' },
    { source: '{0} is not yesterday', target: '{0} ไม่ใช่เมื่อวานนี้' },

    { source: 'is Last Week', target: 'เป็นสัปดาห์ที่แล้ว' },
    { source: 'last week', target: 'สัปดาห์ที่แล้ว' },
    { source: 'is not last week', target: 'ไม่ใช่สัปดาห์ที่แล้ว' },
    { source: '{0} is last week', target: '{0} เป็นสัปดาห์ที่แล้ว' },
    { source: '{0} is not last week', target: '{0} ไม่ใช่สัปดาห์ที่แล้ว' },

    { source: 'is Last Month', target: 'เป็นเดือนที่แล้ว' },
    { source: 'last month', target: 'เดือนที่แล้ว' },
    { source: 'is not last month', target: 'ไม่ใช่เดือนที่แล้ว' },
    { source: '{0} is last month', target: '{0} เป็นเดือนที่แล้ว' },
    { source: '{0} is not last month', target: '{0} ไม่ใช่เดือนที่แล้ว' },

    { source: 'is Last Quarter', target: 'เป็นไตรมาสที่แล้ว' },
    { source: 'last quarter', target: 'ไตรมาสที่แล้ว' },
    { source: 'is not last quarter', target: 'ไม่ใช่ไตรมาสที่แล้ว' },
    { source: '{0} is last quarter', target: '{0} เป็นไตรมาสที่แล้ว' },
    { source: '{0} is not last quarter', target: '{0} ไม่ใช่ไตรมาสที่แล้ว' },

    { source: 'is Last Year', target: 'เป็นปีที่แล้ว' },
    { source: 'last year', target: 'ปีที่แล้ว' },
    { source: 'is not last year', target: 'ไม่ใช่ปีที่แล้ว' },
    { source: '{0} is last year', target: '{0} เป็นปีที่แล้ว' },
    { source: '{0} is not last year', target: '{0} ไม่ใช่ปีที่แล้ว' },

    { source: 'is Last X Days', target: 'คือ X วันที่แล้ว' },
    { source: 'last X days', target: 'X วันที่แล้ว' },
    { source: 'is not last X days', target: 'ไม่ใช่ X วันที่แล้ว' },
    { source: '{0} is last {1} days', target: '{0} คือ {1} วันที่แล้ว' },
    { source: '{0} is not last {1} days', target: '{0} ไม่ใช่ {1} วันที่แล้ว' },

    { source: 'is Current Week', target: 'เป็นสัปดาห์นี้' },
    { source: 'current week', target: 'สัปดาห์นี้' },
    { source: 'is not current week', target: 'ไม่ใช่สัปดาห์นี้' },
    { source: '{0} is current week', target: '{0} เป็นสัปดาห์นี้' },
    { source: '{0} is not current week', target: '{0} ไม่ใช่สัปดาห์นี้' },

    { source: 'is Current Month', target: 'เป็นเดือนนี้' },
    { source: 'current month', target: 'เดือนนี้' },
    { source: 'is not current month', target: 'ไม่ใช่เดือนนี้' },
    { source: '{0} is current month', target: '{0} เป็นเดือนนี้' },
    { source: '{0} is not current month', target: '{0} ไม่ใช่เดือนนี้' },

    { source: 'is Current Quarter', target: 'เป็นไตรมาสนี้' },
    { source: 'current quarter', target: 'ไตรมาสนี้' },
    { source: 'is not current quarter', target: 'ไม่ใช่ไตรมาสนี้' },
    { source: '{0} is current quarter', target: '{0} เป็นไตรมาสนี้' },
    { source: '{0} is not current quarter', target: '{0} ไม่ใช่ไตรมาสนี้' },

    { source: 'is Current Year', target: 'เป็นปีนี้' },
    { source: 'current year', target: 'ปีนี้' },
    { source: 'is not current year', target: 'ไม่ใช่ปีนี้' },
    { source: '{0} is current year', target: '{0} เป็นปีนี้' },
    { source: '{0} is not current year', target: '{0} ไม่ใช่ปีนี้' },

    { source: 'is Previous Week', target: 'เป็นสัปดาห์ก่อน' },
    { source: 'previous week', target: 'สัปดาห์ก่อน' },
    { source: 'is not previous week', target: 'ไม่ใช่สัปดาห์ก่อน' },
    { source: '{0} is previous week', target: '{0} เป็นสัปดาห์ก่อน' },
    { source: '{0} is not previous week', target: '{0} ไม่ใช่สัปดาห์ก่อน' },

    { source: 'is Previous Month', target: 'เป็นเดือนก่อน' },
    { source: 'previous month', target: 'เดือนก่อน' },
    { source: 'is not previous month', target: 'ไม่ใช่เดือนก่อน' },
    { source: '{0} is previous month', target: '{0} เป็นเดือนก่อน' },
    { source: '{0} is not previous month', target: '{0} ไม่ใช่เดือนก่อน' },

    { source: 'is Previous Quarter', target: 'เป็นไตรมาสก่อน' },
    { source: 'previous quarter', target: 'ไตรมาสก่อน' },
    { source: 'is not previous quarter', target: 'ไม่ใช่ไตรมาสก่อน' },
    { source: '{0} is previous quarter', target: '{0} เป็นไตรมาสก่อน' },
    { source: '{0} is not previous quarter', target: '{0} ไม่ใช่ไตรมาสก่อน' },

    { source: 'is Previous Year', target: 'เป็นปีก่อน' },
    { source: 'previous year', target: 'ปีก่อน' },
    { source: 'is not previous year', target: 'ไม่ใช่ปีก่อน' },
    { source: '{0} is previous year', target: '{0} เป็นปีก่อน' },
    { source: '{0} is not previous year', target: '{0} ไม่ใช่ปีก่อน' },

    { source: 'is Previous X Days', target: 'คือ X วันที่ผ่านมา' },
    { source: 'previous X days', target: 'X วันที่ผ่านมา' },
    { source: 'is not previous X days', target: 'ไม่ใช่ X วันที่ผ่านมา' },
    { source: '{0} is previous {1} days', target: '{0} คือ {1} วันที่ผ่านมา' },
    { source: '{0} is not previous {1} days', target: '{0} ไม่ใช่ {1} วันที่ผ่านมา' },

    { source: 'is empty', target: 'ว่างเปล่า' },
    { source: 'is not empty', target: 'ไม่ว่างเปล่า' },
    { source: '{0} is empty', target: '{0} ว่างเปล่า' },
    { source: '{0} is not empty', target: '{0} ไม่ว่างเปล่า' },

    { source: 'covered by', target: 'ครอบคลุมโดย' },
    { source: 'is not covered by', target: 'ไม่ครอบคลุมโดย' },
    { source: '{0} covered by {1}', target: '{0} ครอบคลุมโดย {1}' },
    { source: '{0} is not covered by {1}', target: '{0} ไม่ครอบคลุมโดย {1}' },

    // Activity log
    { source: 'No activities found', target: 'ไม่พบกิจกรรม' },
    {
      source: 'Start to working with data to log activities.',
      target: 'เริ่มทำงานกับข้อมูลเพื่อบันทึกกิจกรรม'
    },
    { source: 'All Activity', target: 'กิจกรรมทั้งหมด' },
    { source: 'Create Record', target: 'สร้างบันทึก' },
    { source: 'Update Record', target: 'อัพเดทบันทึก' },
    { source: 'Delete Record', target: 'ลบบันทึก' },
    { source: 'All Members', target: 'สมาชิกทั้งหมด' },

    // Collaboration
    { source: 'Timeline', target: 'ไทม์ไลน์' },
    { source: 'Messages', target: 'ข้อความ' },
    { source: 'Activity', target: 'กิจกรรม' },
    { source: 'Start chatting with your team', target: 'เริ่มแชทกับทีมของคุณ' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: 'เก็บข้อความเกี่ยวกับหน้านี้เพื่อเก็บข้อมูลสำคัญ'
    },
    { source: 'Your Message', target: 'ข้อความของคุณ' },
    { source: 'Send', target: 'ส่ง' },

    // Share
    { source: 'Invite members', target: 'เชิญสมาชิก' },
    { source: 'Public share', target: 'แชร์สาธารณะ' },
    { source: 'Sign Up', target: 'ลงทะเบียน' },
    { source: 'Members', target: 'สมาชิก' },
    { source: 'Invite with Email', target: 'เชิญด้วยอีเมล' },
    { source: 'Invite someone...', target: 'เชิญคน...' },
    { source: 'Send Invite', target: 'ส่งคำเชิญ' },
    {
      source: 'Limit access to your data by user properties',
      target: 'จำกัดการเข้าถึงข้อมูลของคุณด้วยคุณสมบัติของผู้ใช้'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: 'ใส่อีเมลของผู้ใช้ที่คุณต้องการเชิญเพื่อร่วมงาน'
    },
    { source: 'Copy', target: 'คัดลอก' },
    { source: 'Invite with Link', target: 'เชิญด้วยลิงค์' },
    { source: 'Remove link', target: 'ลบลิงค์' },
    { source: 'Add Invite Link', target: 'เพิ่มลิงค์เชิญ' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: 'ใครก็ตามในอินเทอร์เน็ตที่มีลิงค์นี้จะสามารถเข้าร่วมทีมที่เลือกได้'
    },
    { source: 'Pending Invites', target: 'คำเชิญที่รออยู่' },
    { source: 'Cancel invite', target: 'ยกเลิกคำเชิญ' },
    { source: 'Active Members', target: 'สมาชิกที่ใช้งานอยู่' },
    { source: 'Remove member', target: 'ลบสมาชิก' },
    {
      source: 'You are setting sharing for the current page',
      target: 'คุณกำลังตั้งค่าการแชร์สำหรับหน้านี้'
    },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: 'คุณกำลังตั้งค่าการแชร์สำหรับทุกหน้าของแอพของคุณ'
    },
    { source: 'Public access link', target: 'ลิงค์การเข้าถึงสาธารณะ' },
    { source: 'Updating public access...', target: 'กำลังอัปเดตการเข้าถึงสาธารณะ...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target: 'ใครก็ตามที่มีลิงค์นี้จะสามารถดูหน้านี้ได้ นอกจากนี้คุณยังสามารถฝังหน้านี้ในเว็บไซต์อื่นได้ด้วย'
    },
    { source: 'Embed code (IFRAME)', target: 'รหัสฝัง (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: 'วางรหัสนี้ใน HTML ของเว็บไซต์ของคุณที่คุณต้องการให้แสดงหน้านี้'
    },
    { source: 'link', target: 'ลิงค์' },
    { source: 'invited', target: 'เชิญ' },
    { source: 'Choose Team', target: 'เลือกทีม' },
    { source: 'App Teams', target: 'ทีมของแอพ' },
    { source: 'Built-In Teams', target: 'ทีมที่สร้างในตัว' },
    { source: 'Clear Team', target: 'ล้างทีม' },
    { source: 'Can build application and modify data', target: 'สามารถสร้างแอพพลิเคชันและแก้ไขข้อมูลได้' },
    { source: 'Can modify data in application', target: 'สามารถแก้ไขข้อมูลในแอพพลิเคชันได้' },
    { source: 'Can only view data without modification', target: 'สามารถดูข้อมูลได้เท่านั้นโดยไม่สามารถแก้ไขได้' },
    { source: 'Add Team', target: 'เพิ่มทีม' },
    { source: 'Edit Team', target: 'แก้ไขทีม' },
    { source: 'Adding Team', target: 'กำลังเพิ่มทีม' },
    {
      source: 'Keep control over who has access to current App',
      target: 'ควบคุมได้ว่าใครมีสิทธิ์เข้าใช้แอพพลิเคชันนี้'
    },
    { source: 'Enter Team Name', target: 'ใส่ชื่อทีม' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: 'พิมพ์ชื่อทีม เช่น: สนับสนุน, การขาย, การตลาด ฯลฯ'
    },
    { source: 'Add a new member to this team.', target: 'เพิ่มสมาชิกใหม่ในทีมนี้' },
    { source: 'Invite new member', target: 'เชิญสมาชิกใหม่' },
    { source: 'User', target: 'ผู้ใช้' },
    { source: 'Date Added', target: 'วันที่เพิ่ม' },
    { source: 'You', target: 'คุณ' },
    { source: 'Edit', target: 'แก้ไข' },
    { source: 'No users in this team', target: 'ไม่มีผู้ใช้ในทีมนี้' },
    { source: 'Page Permissions', target: 'สิทธิ์หน้า' },
    { source: 'App Permissions', target: 'สิทธิ์แอพพลิเคชัน' },
    { source: 'Properties', target: 'คุณสมบัติ' },
    { source: 'Page name', target: 'ชื่อหน้า' },
    { source: 'Access', target: 'สิทธิ์การเข้าถึง' },
    { source: 'Full Access', target: 'การเข้าถึงเต็มรูปแบบ' },
    { source: 'Read Only', target: 'อ่านอย่างเดียว' },
    { source: 'No Access', target: 'ไม่มีสิทธิ์เข้าถึง' },
    { source: 'Read', target: 'อ่าน' },
    { source: 'Update', target: 'อัปเดต' },
    { source: 'Write', target: 'เขียน' },
    { source: { label: 'Delete', context: 'permissions' }, target: 'ลบ' },
    { source: 'Custom Access', target: 'การเข้าถึงที่กำหนดเอง' },
    { source: 'Read, create, update and delete data', target: 'อ่าน สร้าง อัปเดต และลบข้อมูล' },
    { source: 'Choose allowed operations granularly', target: 'เลือกการดำเนินการที่อนุญาตอย่างละเอียด' },
    { source: 'Without any access to data', target: 'ไม่มีสิทธิ์ในการเข้าถึงข้อมูล' },
    { source: 'Name', target: 'ชื่อ' },
    { source: 'Active', target: 'ใช้งาน' },
    { source: 'Settings', target: 'การตั้งค่า' },
    { source: 'Members and Teams', target: 'สมาชิกและทีม' },
    { source: 'App Builder', target: 'เครื่องมือสร้างแอพพลิเคชัน' },
    { source: 'Collection Permissions', target: 'สิทธิ์การรวบรวม' },
    { source: "Grant permissions to app's collection", target: 'ให้สิทธิ์กับการรวบรวมของแอพพลิเคชัน' },
    { source: 'Collection', target: 'การรวบรวม' },
    {
      source: 'Limit access to your data by team properties',
      target: 'จำกัดการเข้าถึงข้อมูลของคุณด้วยคุณสมบัติของทีม'
    },
    { source: 'Save Team', target: 'บันทึกทีม' },
    { source: 'Create Team', target: 'สร้างทีม' },
    { source: 'Value', target: 'ค่า' },
    { source: 'No properties specified', target: 'ไม่มีคุณสมบัติที่ระบุ' },

    // Navigation
    { source: 'Current App', target: 'แอพปัจจุบัน' },
    { source: 'Home', target: 'หน้าหลัก' },

    // Profile
    {
      source: 'We are fetching user data, please, wait...',
      target: 'เรากำลังดึงข้อมูลผู้ใช้ กรุณารอ...'
    },
    { source: 'Profile Settings', target: 'การตั้งค่าโปรไฟล์' },
    { source: 'Basic information about your account.', target: 'ข้อมูลพื้นฐานเกี่ยวกับบัญชีของคุณ' },
    { source: 'Photo', target: 'รูปภาพ' },
    { source: 'your photo', target: 'รูปภาพของคุณ' },
    { source: 'Change', target: 'เปลี่ยน' },
    { source: 'Upload', target: 'อัปโหลด' },
    { source: 'Photo was successfully updated', target: 'ปรับปรุงรูปภาพแล้วสำเร็จ' },
    { source: 'Photo was successfully deleted', target: 'ลบรูปภาพสำเร็จ' },
    { source: 'First Name', target: 'ชื่อจริง' },
    { source: 'Last Name', target: 'นามสกุล' },
    { source: 'Your Email', target: 'อีเมลของคุณ' },
    { source: 'Email Change', target: 'เปลี่ยนอีเมล' },
    { source: 'New Email', target: 'อีเมลใหม่' },
    { source: 'Change Email', target: 'เปลี่ยนอีเมล' },
    { source: 'Check your inbox', target: 'ตรวจสอบกล่องจดหมายของคุณ' },
    { source: 'Confirmation Email was sent to {0}', target: 'อีเมลยืนยันถูกส่งไปที่ {0}' },
    { source: 'Changing Email failed', target: 'การเปลี่ยนอีเมลล้มเหลว' },
    { source: 'Password Change', target: 'เปลี่ยนรหัสผ่าน' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target: 'รหัสผ่านควรมีความปลอดภัยเพียงพอจะป้องกันบัญชีของคุณ ควรมีความยาวอย่างน้อย 12 อักษร'
    },
    { source: 'Current Password', target: 'รหัสผ่านปัจจุบัน' },
    { source: 'New Password', target: 'รหัสผ่านใหม่' },
    { source: 'Confirm New Password', target: 'ยืนยันรหัสผ่านใหม่' },
    { source: 'Change Password', target: 'เปลี่ยนรหัสผ่าน' },
    {
      source: 'Current password was successfully updated, all other sessions will be logged out shortly',
      target: 'รหัสผ่านปัจจุบันได้รับการอัปเดตเรียบร้อยแล้ว เซสชันอื่น ๆ ทั้งหมดจะถูกออกจากระบบในไม่ช้า'
    },
    { source: 'Saving current password failed', target: 'บันทึกรหัสผ่านปัจจุบันล้มเหลว' },
    { source: 'Short password', target: 'รหัสผ่านสั้นเกินไป' },
    { source: "Passwords don't match", target: 'รหัสผ่านไม่ตรงกัน' },
    { source: 'Personal Preferences', target: 'การตั้งค่าส่วนบุคคล' },
    { source: 'Language', target: 'ภาษา' },
    { source: 'Timezone', target: 'เขตเวลา' },
    { source: 'Current time in {0} is', target: 'เวลาปัจจุบันใน {0} คือ' },
    {
      source: 'Customize additional preferences for your account.',
      target: 'ปรับแต่งการตั้งค่าเสริมสำหรับบัญชีของคุณ'
    },
    { source: 'News & Proposals', target: 'ข่าวสารและข้อเสนอ' },
    {
      source: 'Subscribe to our updates and proposals.',
      target: 'สมัครรับข้อมูลอัปเดตและข้อเสนอของเรา'
    },
    { source: 'Save changes', target: 'บันทึกการเปลี่ยนแปลง' },
    { source: 'Current user was successfully updated', target: 'ปรับปรุงข้อมูลผู้ใช้ปัจจุบันแล้วสำเร็จ' },
    { source: 'Saving current user failed', target: 'บันทึกข้อมูลผู้ใช้ปัจจุบันล้มเหลว' },

    // My Apps
    { source: 'Type to search...', target: 'พิมพ์เพื่อค้นหา...' },
    { source: 'My Apps', target: 'แอพของฉัน' },
    { source: 'New App', target: 'แอพใหม่' },
    { source: 'Builder', target: 'บิวเดอร์' },
    { source: 'App', target: 'แอพ' },
    { source: 'continue install', target: 'ติดตั้งต่อ' },
    { source: 'Open builder', target: 'เปิดบิวเดอร์' },
    { source: 'View published', target: 'ดูที่เผยแพร่แล้ว' },
    { source: 'Delete App', target: 'ลบแอพ' },
    { source: 'Start from a template', target: 'เริ่มจากเทมเพลต' },
    { source: 'Preview', target: 'แสดงตัวอย่าง' },
    { source: 'Contact Support', target: 'ติดต่อสนับสนุน' },
    { source: 'Documentation', target: 'เอกสารประกอบ' },
    { source: 'Feature Requests', target: 'คำขอฟีเจอร์' },
    { source: 'See What’s New', target: 'ดูว่าอะไรใหม่' },
    { source: 'Search templates...', target: 'ค้นหาเทมเพลต...' },
    { source: 'any', target: 'ใดๆ' },
    { source: 'more', target: 'เพิ่มเติม' },
    { source: 'Choose Data Source', target: 'เลือกแหล่งข้อมูล' },
    { source: 'works with 30+ data sources', target: 'ทำงานร่วมกับแหล่งข้อมูลมากกว่า 30 แห่ง' },
    { source: 'Use this template', target: 'ใช้เทมเพลตนี้' },
    { source: 'stores data in Jet Tables', target: 'เก็บข้อมูลใน Jet Tables' },
    { source: 'New Data', target: 'ข้อมูลใหม่' },
    { source: 'using {0}', target: 'ใช้ {0}' },
    { source: "Can't find resource you're looking for?", target: 'ไม่พบทรัพยากรที่คุณกำลังมองหา?' },
    { source: 'Admin Panel', target: 'แผงผู้ดูแลระบบ' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: 'รายการ สร้าง และอัปเดต (CRUD) การดำเนินการบนข้อมูลของคุณ'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target: 'สร้างแผงผู้ดูแลระบบที่กำหนดเองบนฐานข้อมูลใด ๆ แอพ และ API เช่น Stripe, Twilio และ GraphQL'
    },
    { source: 'All Integrations', target: 'การรวมทั้งหมด' },
    { source: 'Databases', target: 'ฐานข้อมูล' },
    { source: 'APIs', target: 'API' },
    { source: 'Frameworks', target: 'เฟรมเวิร์ก' },
    { source: 'Storages', target: 'พื้นที่จัดเก็บ' },

    // Sign In
    { source: 'Good morning', target: 'สวัสดีตอนเช้า' },
    { source: 'Good afternoon', target: 'สวัสดีตอนบ่าย' },
    { source: 'Good evening', target: 'สวัสดีตอนเย็น' },
    { source: 'Sign In', target: 'เข้าสู่ระบบ' },
    { source: 'Welcome Back.', target: 'ยินดีต้อนรับกลับ.' },
    { source: 'Sign in with {0}', target: 'เข้าสู่ระบบด้วย {0}' },
    { source: 'or login with', target: 'หรือเข้าสู่ระบบด้วย' },
    { source: 'Enter E-mail', target: 'ใส่อีเมล' },
    { source: 'Enter password', target: 'ใส่รหัสผ่าน' },
    { source: 'Login', target: 'เข้าสู่ระบบ' },
    { source: 'Create new account', target: 'สร้างบัญชีใหม่' },
    { source: 'Forgot my password', target: 'ลืมรหัสผ่าน' },
    { source: 'required', target: 'ต้องการ' },
    { source: 'incorrect Email', target: 'อีเมลไม่ถูกต้อง' },
    { source: 'Minimum password length {0}', target: 'ความยาวขั้นต่ำของรหัสผ่าน {0}' },
    { source: 'Unable to Sign In', target: 'ไม่สามารถเข้าสู่ระบบได้' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: 'เริ่มต้น <span class="auth-form__accent">ฟรีวันนี้</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target: 'ไม่จำเป็นต้องใช้บัตร คุณจะได้รับฟังก์ชันการทำงานขั้นสูงทั้งหมดฟรีในระหว่างการทดลองใช้งาน PRO 14 วัน'
    },
    { source: 'Enter First Name', target: 'ใส่ชื่อจริง' },
    { source: 'Enter Last Name (optional)', target: 'ใส่นามสกุล (ตัวเลือก)' },
    { source: 'Enter Email', target: 'ใส่อีเมล' },
    { source: 'Password', target: 'รหัสผ่าน' },
    { source: 'Repeat Password', target: 'ยืนยันรหัสผ่าน' },
    {
      source: 'By signing in you’re okay with our',
      target: 'โดยการลงชื่อเข้าคุณโอเคกับ'
    },
    {
      source: 'Creating an account means you’re okay with our',
      target: 'การสร้างบัญชีหมายความว่าคุณโอเคกับ'
    },
    { source: 'Terms of Service', target: 'ข้อกำหนดการใช้บริการ' },
    { source: 'Privacy Policy', target: 'นโยบายความเป็นส่วนตัว' },
    { source: 'and', target: 'และ' },
    { source: 'Create account', target: 'สร้างบัญชี' },
    { source: 'Already have an account', target: 'มีบัญชีแล้ว' },
    { source: 'Unable to Sign Up', target: 'ไม่สามารถลงทะเบียน' },

    // Restore password
    { source: 'Reset your password', target: 'รีเซ็ตรหัสผ่านของคุณ' },
    { source: 'Email Address', target: 'ที่อยู่อีเมล' },
    { source: 'Reset password', target: 'รีเซ็ตรหัสผ่าน' },
    { source: 'Return to Sign In', target: 'กลับสู่การเข้าสู่ระบบ' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target:
        'โปรดตรวจสอบอีเมลของคุณ – <strong>{0}</strong> เราได้ส่งลิงก์ยืนยันที่คุณควรทำตามเพื่อเปลี่ยนรหัสผ่านของคุณ'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be at least 8 characters.',
      target: 'เกือบเสร็จ กรุณาใส่รหัสผ่านใหม่ของคุณด้านล่าง <br>ต้องมีอย่างน้อย 8 ตัวอักษร'
    },
    { source: 'Reset password & Sign In', target: 'รีเซ็ตรหัสผ่าน & เข้าสู่ระบบ' },
    { source: 'Unable to Send Code', target: 'ไม่สามารถส่งรหัส' },
    { source: 'Unable to Change Password', target: 'ไม่สามารถเปลี่ยนรหัสผ่าน' },

    // Email Verification
    { source: 'Email Verification', target: 'การยืนยันอีเมล' },
    { source: 'Resend verification code', target: 'ส่งรหัสยืนยันใหม่' },
    { source: 'Verification email sent', target: 'อีเมลยืนยันถูกส่งแล้ว' },
    { source: 'Your Email is now verified', target: 'อีเมลของคุณถูกยืนยันแล้ว' },
    { source: 'Request is incorrect', target: 'คำขอไม่ถูกต้อง' },

    // Invites
    {
      source: 'Join <span class="auth-form__accent">{0}</span>',
      target: 'เข้าร่วม <span class="auth-form__accent">{0}</span>'
    },
    {
      source: '<strong>{0}</strong> has invited you to join <strong>{1}</strong>',
      target: '<strong>{0}</strong> ได้เชิญคุณเข้าร่วม <strong>{1}</strong>'
    },
    {
      source: 'Someone has invited you to join <strong>{0}</strong>',
      target: 'มีคนเชิญคุณเข้าร่วม <strong>{0}</strong>'
    },
    {
      source: 'You are joining <strong>{0}</strong> using invite link',
      target: 'คุณกำลังเข้าร่วม <strong>{0}</strong> โดยใช้ลิงก์เชิญ'
    },
    { source: 'Join', target: 'เข้าร่วม' },
    { source: 'Go to home page', target: 'ไปที่หน้าหลัก' },
    { source: 'Invite link is wrong', target: 'ลิงก์เชิญผิดพลาด' },
    {
      source:
        'Looks like your invitation link has expired or maybe you have followed the wrong link. Please try to ask to invite your again.',
      target: 'ดูเหมือนว่าลิงก์เชิญของคุณหมดอายุหรือคุณอาจจะติดตามลิงก์ผิด โปรดลองขอให้เชิญคุณอีกครั้ง'
    },
    {
      source: 'Unfortunately we failed to load information about this invitation',
      target: 'น่าเสียดายที่เราล้มเหลวในการโหลดข้อมูลเกี่ยวกับคำเชิญนี้'
    },

    // Users & Teams
    { source: 'Members of {0}', target: 'สมาชิกของ {0}' },
    { source: 'How to get started', target: 'วิธีการเริ่มต้น' },
    { source: 'Users API', target: 'API ผู้ใช้' },
    { source: 'Teams API', target: 'API ทีม' },
    { source: 'Invite Member', target: 'เชิญสมาชิก' },
    { source: 'Add User property', target: 'เพิ่มคุณสมบัติผู้ใช้' },
    { source: 'Add Team property', target: 'เพิ่มคุณสมบัติทีม' },
    { source: 'Edit property', target: 'แก้ไขคุณสมบัติ' },
    { source: 'Delete property', target: 'ลบคุณสมบัติ' },
    { source: 'Users', target: 'ผู้ใช้' },
    { source: 'Teams', target: 'ทีม' },
    { source: 'Search members', target: 'ค้นหาสมาชิก' },
    { source: 'Search teams', target: 'ค้นหาทีม' },
    { source: '{0} pages', target: '{0} หน้า' },
    { source: 'No members', target: 'ไม่มีสมาชิก' }
  ]
};

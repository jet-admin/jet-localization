import { Locale } from './locale';

export const locale: Locale = {
  name: 'korean',
  language: 'ko',
  items: [
    // General
    { source: 'Save', target: '저장' },
    { source: 'Create', target: '생성' },
    { source: 'Duplicating', target: '복제 중' },
    { source: 'Duplicate', target: '복제' },
    { source: 'Mass Edit', target: '일괄 편집' },
    { source: 'Export', target: '내보내기' },
    { source: 'Import', target: '가져오기' },
    { source: 'Delete', target: '삭제' },
    { source: 'Continue', target: '계속하다' },
    { source: 'Cancel', target: '취소' },
    { source: 'Loading', target: '로딩 중' },
    { source: 'Please wait...', target: '잠시 기다려주세요...' },
    { source: 'Loading failed', target: '로딩 실패' },
    { source: 'Unknown error', target: '알 수 없는 오류' },
    { source: 'Add', target: '추가하기' },
    { source: 'or', target: '또는' },
    { source: 'Hours', target: '시간' },
    { source: 'Minutes', target: '분' },
    { source: 'Seconds', target: '초' },
    { source: 'Saved', target: '저장됨' },
    { source: 'Error', target: '오류' },
    { source: 'Page not found', target: '페이지를 찾을 수 없음' },
    {
      source: 'The specified address is incorrect, or the page does not exist',
      target: '지정된 주소가 잘못되었거나 페이지가 존재하지 않습니다'
    },
    { source: 'Not allowed', target: '허용되지 않음' },
    {
      source: "You don't have permissions to access this page",
      target: '이 페이지에 접근할 권한이 없습니다'
    },

    // Actions
    { source: 'Action executed', target: '작업 실행됨' },
    { source: 'Action executed successfully', target: '작업이 성공적으로 실행되었습니다' },
    { source: 'Action failed', target: '작업 실패' },
    {
      source: "You don't have permission for run this operation",
      target: '이 작업을 실행할 권한이 없습니다'
    },
    { source: 'Specify parameters', target: '매개변수 지정' },
    { source: 'Executing action', target: '작업 실행 중' },
    { source: 'You are executing <strong>{0}</strong>', target: '<strong>{0}</strong>을(를) 실행 중입니다' },
    { source: 'Please fill in the parameters below.', target: '아래 매개변수를 입력하세요.' },
    { source: 'Execute', target: '실행하다' },
    { source: 'Executing', target: '실행 중' },
    { source: 'Finished', target: '완료' },
    { source: 'Done', target: '완료됨' },

    // Export
    { source: 'Records Export', target: '기록 내보내기' },
    { source: 'Downloading records data as a file', target: '기록 데이터를 파일로 다운로드 중' },
    { source: 'Choose format', target: '형식 선택' },
    { source: 'Number of exporting records', target: '내보낼 기록 수' },
    { source: { label: 'Export', context: 'submit' }, target: '내보내기' },
    { source: 'Exporting', target: '내보내는 중' },
    { source: 'Export completed', target: '내보내기 완료됨' },
    { source: 'Failed to export', target: '내보내기 실패함' },

    // Components
    { source: 'optional', target: '선택 사항' },
    { source: 'choose', target: '선택' },
    { source: 'Clear value', target: '값 지우기' },
    { source: 'loading...', target: '로딩 중...' },
    { source: 'Nothing found', target: '아무것도 찾지 못함' },
    { source: 'Search...', target: '검색...' },
    { source: 'Enter at least {0} characters', target: '최소 {0}자 이상 입력하세요' },
    { source: 'No options', target: '옵션 없음' },
    { source: 'Drop files here or', target: '여기에 파일을 드롭하거나' },
    { source: 'Upload new', target: '새 업로드' },
    { source: 'Clear', target: '지우기' },
    { source: 'Download', target: '다운로드' },
    { source: 'Choose file', target: '파일 선택' },
    { source: 'Choose files', target: '파일들 선택' },
    { source: 'Scan with Camera', target: '카메라로 스캔하기' },
    { source: 'Scan Image file', target: '이미지 파일 스캔하기' },
    { source: 'Choose camera', target: '카메라 선택' },
    { source: 'Stop scanning', target: '스캔 중지' },
    { source: 'Scan again', target: '다시 스캔' },
    { source: 'Use this scan', target: '이 스캔 사용' },
    { source: 'Failed to scan', target: '스캔 실패' },
    {
      source: 'Code failed to scan, please try another image',
      target: '코드 스캔에 실패했습니다. 다른 이미지를 시도해 보세요'
    },
    { source: 'current', target: '현재의' },
    { source: 'Day', target: '일' },
    { source: 'Week', target: '주' },
    { source: 'Month', target: '월' },
    { source: 'Year', target: '년' },
    { source: 'Today', target: '오늘' },
    { source: 'Daily', target: '매일의' },
    { source: 'Weekly', target: '매주의' },
    { source: 'Monthly', target: '매월의' },
    { source: 'Quarterly', target: '분기의' },
    { source: 'Yearly', target: '매년의' },
    { source: 'Hourly', target: '매 시의' },
    { source: 'Minutely', target: '매 분의' },
    { source: 'Since', target: '이후' },
    { source: 'Before', target: '이전' },
    { source: 'Between', target: '사이에' },
    { source: 'From date', target: '날짜로부터' },
    { source: 'To date', target: '날짜까지' },
    { source: 'Coordinates', target: '좌표' },
    { source: 'Latitude', target: '위도' },
    { source: 'Longitude', target: '경도' },
    { source: 'Default color', target: '기본 색상' },
    { source: 'not specified', target: '지정되지 않음' },
    { source: 'Sign using your finger or pointer', target: '손가락이나 포인터를 사용하여 서명하세요' },

    // List components
    { source: 'Filter', target: '필터' },
    { source: 'Filter by field', target: '필드별 필터' },
    { source: 'Filter by...', target: '필터 기준...' },
    { source: 'Back', target: '뒤로' },
    { source: 'Back to {0} fields', target: '{0} 필드로 돌아가기' },
    { source: 'Choose {0} from list', target: '리스트에서 {0} 선택' },
    { source: '{0} fields', target: '{0} 필드' },
    { source: '{0} relationships', target: '{0} 관계' },
    { source: 'Aggregate {0}', target: '{0} 집계' },
    { source: 'No fields to select', target: '선택할 필드 없음' },
    { source: 'Enter value...', target: '값 입력...' },
    { source: 'Exclude', target: '제외' },
    { source: 'Actions', target: '액션' },
    { source: 'Search', target: '검색' },
    { source: 'Sort 1 → 9', target: '1 → 9로 정렬' },
    { source: 'Sort 9 → 1', target: '9 → 1로 정렬' },
    { source: 'Sort A → Z', target: 'A → Z로 정렬' },
    { source: 'Sort Z → A', target: 'Z → A로 정렬' },
    { source: 'Refresh automatically', target: '자동 새로고침' },
    { source: 'All', target: '전체' },
    { source: 'Selected', target: '선택됨' },
    {
      source: 'Unfortunately, no {0} matching your query found',
      target: '안타깝게도 귀하의 쿼리와 일치하는 {0}을(를) 찾을 수 없습니다'
    },
    { source: 'We are fetching {0}, please, wait...', target: '{0}을(를) 가져오는 중입니다. 잠시만 기다려주세요...' },
    { source: 'Add filter', target: '필터 추가' },
    { source: 'Delete this filter', target: '이 필터 삭제' },
    { source: 'Toggle ordering', target: '정렬 토글' },
    { source: 'Not configured', target: '구성되지 않음' },
    {
      source: 'Unfortunately, this component is not configured yet',
      target: '이 컴포넌트는 아직 구성되지 않았습니다'
    },
    { source: 'records', target: '기록' },
    { source: '{0} items', target: '{0} 항목' },

    // Menu
    { source: 'Users & Teams', target: '사용자 및 팀' },
    { source: 'Billing', target: '결제' },
    { source: 'Billing & Plans', target: '결제 및 플랜' },
    { source: 'API keys', target: 'API 키' },
    { source: 'Dark Mode', target: '다크 모드' },
    { source: 'Light Mode', target: '라이트 모드' },
    { source: 'Disable Staff', target: '직원 비활성화' },
    { source: 'Enable Staff', target: '직원 활성화' },
    { source: 'Manage Templates', target: '템플릿 관리' },
    { source: 'Logout', target: '로그아웃' },
    { source: 'Activity Log', target: '활동 로그' },
    { source: 'Collaborations', target: '협업' },
    { source: 'Open Visual Builder', target: '비주얼 빌더 열기' },

    // Filters
    { source: 'equals', target: '일치함' },
    { source: 'does not equal', target: '일치하지 않음' },
    { source: '{0} equals {1}', target: '{0}는 {1}과(와) 일치' },
    { source: '{0} does not equal {1}', target: '{0}는 {1}과(와) 일치하지 않음' },

    { source: 'contains', target: '포함함' },
    { source: 'does not contain', target: '포함하지 않음' },
    { source: '{0} contains {1}', target: '{0}는 {1}을(를) 포함' },
    { source: '{0} not contains {1}', target: '{0}는 {1}을(를) 포함하지 않음' },

    { source: 'starts with', target: '시작함' },
    { source: 'does not start with', target: '시작하지 않음' },
    { source: '{0} starts with {1}', target: '{0}는 {1}으로 시작' },
    { source: '{0} does not start with {1}', target: '{0}는 {1}으로 시작하지 않음' },

    { source: 'ends with', target: '끝남' },
    { source: 'does not end with', target: '끝나지 않음' },
    { source: '{0} ends with {1}', target: '{0}는 {1}으로 끝남' },
    { source: '{0} does not end with {1}', target: '{0}는 {1}으로 끝나지 않음' },

    { source: 'greater than', target: '보다 큼' },
    { source: 'is not greater than', target: '보다 크지 않음' },
    { source: '{0} is greater than {1}', target: '{0}는 {1}보다 큼' },
    { source: '{0} not greater than {1}', target: '{0}는 {1}보다 크지 않음' },

    { source: 'greater than or equals', target: '보다 크거나 같음' },
    { source: 'is not greater than or equals', target: '보다 크거나 같지 않음' },
    { source: '{0} is greater than or equals {1}', target: '{0}는 {1}보다 크거나 같음' },
    { source: '{0} is not greater than or equals {1}', target: '{0}는 {1}보다 크거나 같지 않음' },

    { source: 'less than', target: '보다 작음' },
    { source: 'is not less than', target: '보다 작지 않음' },
    { source: '{0} is less than {1}', target: '{0}는 {1}보다 작음' },
    { source: '{0} is not less than {1}', target: '{0}는 {1}보다 작지 않음' },

    { source: 'less than or equals', target: '보다 작거나 같음' },
    { source: 'is not less than or equals', target: '보다 작거나 같지 않음' },
    { source: '{0} is less than or equals {1}', target: '{0}는 {1}보다 작거나 같음' },
    { source: '{0} is not less than or equals {1}', target: '{0}는 {1}보다 작거나 같지 않음' },

    { source: 'one of', target: '다음 중 하나임' },
    { source: 'is one of', target: '다음 중 하나임' },
    { source: 'is not one of', target: '다음 중 하나가 아님' },
    { source: '{0} is one of {1}', target: '{0}는 {1} 중 하나임' },
    { source: '{0} is not one of {1}', target: '{0}는 {1} 중 하나가 아님' },

    { source: 'is null', target: 'null임' },
    { source: 'is not null', target: 'null이 아님' },
    { source: '{0} is null', target: '{0}는 null임' },
    { source: '{0} is not null', target: '{0}는 null이 아님' },

    { source: 'is future', target: '미래임' },
    { source: 'in the future', target: '미래에' },
    { source: 'is not in the future', target: '미래가 아님' },
    { source: '{0} is in the future', target: '{0}는 미래임' },
    { source: '{0} is not in the future', target: '{0}는 미래가 아님' },

    { source: 'is past', target: '과거임' },
    { source: 'in the past', target: '과거에' },
    { source: 'is not in the past', target: '과거가 아님' },
    { source: '{0} is in the past', target: '{0}는 과거임' },
    { source: '{0} is not in the past', target: '{0}는 과거가 아님' },

    { source: 'is Today', target: '오늘임' },
    { source: 'today', target: '오늘' },
    { source: 'is not today', target: '오늘이 아님' },
    { source: '{0} is today', target: '{0}는 오늘임' },
    { source: '{0} is not today', target: '{0}는 오늘이 아님' },

    { source: 'is Yesterday', target: '어제임' },
    { source: 'yesterday', target: '어제' },
    { source: 'is not yesterday', target: '어제가 아님' },
    { source: '{0} is yesterday', target: '{0}는 어제임' },
    { source: '{0} is not yesterday', target: '{0}는 어제가 아님' },

    { source: 'is Last Week', target: '지난주임' },
    { source: 'last week', target: '지난주에' },
    { source: 'is not last week', target: '지난주가 아님' },
    { source: '{0} is last week', target: '{0}는 지난주임' },
    { source: '{0} is not last week', target: '{0}는 지난주가 아님' },

    { source: 'is Last Month', target: '지난달임' },
    { source: 'last month', target: '지난달에' },
    { source: 'is not last month', target: '지난달이 아님' },
    { source: '{0} is last month', target: '{0}는 지난달임' },
    { source: '{0} is not last month', target: '{0}는 지난달이 아님' },

    { source: 'is Last Quarter', target: '지난 분기임' },
    { source: 'last quarter', target: '지난 분기에' },
    { source: 'is not last quarter', target: '지난 분기가 아님' },
    { source: '{0} is last quarter', target: '{0}는 지난 분기임' },
    { source: '{0} is not last quarter', target: '{0}는 지난 분기가 아님' },

    { source: 'is Last Year', target: '작년임' },
    { source: 'last year', target: '작년에' },
    { source: 'is not last year', target: '작년이 아님' },
    { source: '{0} is last year', target: '{0}는 작년임' },
    { source: '{0} is not last year', target: '{0}는 작년이 아님' },

    { source: 'is Last X Days', target: '지난 X일임' },
    { source: 'last X days', target: '지난 X일에' },
    { source: 'is not last X days', target: '지난 X일이 아님' },
    { source: '{0} is last {1} days', target: '{0}는 지난 {1}일임' },
    { source: '{0} is not last {1} days', target: '{0}는 지난 {1}일이 아님' },

    { source: 'is Current Week', target: '이번 주임' },
    { source: 'current week', target: '이번 주에' },
    { source: 'is not current week', target: '이번 주가 아님' },
    { source: '{0} is current week', target: '{0}는 이번 주임' },
    { source: '{0} is not current week', target: '{0}는 이번 주가 아님' },

    { source: 'is Current Month', target: '이번 달임' },
    { source: 'current month', target: '이번 달에' },
    { source: 'is not current month', target: '이번 달이 아님' },
    { source: '{0} is current month', target: '{0}는 이번 달임' },
    { source: '{0} is not current month', target: '{0}는 이번 달이 아님' },

    { source: 'is Current Quarter', target: '이번 분기임' },
    { source: 'current quarter', target: '이번 분기에' },
    { source: 'is not current quarter', target: '이번 분기가 아님' },
    { source: '{0} is current quarter', target: '{0}는 이번 분기임' },
    { source: '{0} is not current quarter', target: '{0}는 이번 분기가 아님' },

    { source: 'is Current Year', target: '올해임' },
    { source: 'current year', target: '올해에' },
    { source: 'is not current year', target: '올해가 아님' },
    { source: '{0} is current year', target: '{0}는 올해임' },
    { source: '{0} is not current year', target: '{0}는 올해가 아님' },

    { source: 'is Previous Week', target: '지난주임' },
    { source: 'previous week', target: '지난주에' },
    { source: 'is not previous week', target: '지난주가 아님' },
    { source: '{0} is previous week', target: '{0}는 지난주임' },
    { source: '{0} is not previous week', target: '{0}는 지난주가 아님' },

    { source: 'is Previous Month', target: '지난달임' },
    { source: 'previous month', target: '지난달에' },
    { source: 'is not previous month', target: '지난달이 아님' },
    { source: '{0} is previous month', target: '{0}는 지난달임' },
    { source: '{0} is not previous month', target: '{0}는 지난달이 아님' },

    { source: 'is Previous Quarter', target: '지난 분기임' },
    { source: 'previous quarter', target: '지난 분기에' },
    { source: 'is not previous quarter', target: '지난 분기가 아님' },
    { source: '{0} is previous quarter', target: '{0}는 지난 분기임' },
    { source: '{0} is not previous quarter', target: '{0}는 지난 분기가 아님' },

    { source: 'is Previous Year', target: '지난해임' },
    { source: 'previous year', target: '지난해에' },
    { source: 'is not previous year', target: '지난해가 아님' },
    { source: '{0} is previous year', target: '{0}는 지난해임' },
    { source: '{0} is not previous year', target: '{0}는 지난해가 아님' },

    { source: 'is Previous X Days', target: '지난 X일임' },
    { source: 'previous X days', target: '지난 X일에' },
    { source: 'is not previous X days', target: '지난 X일이 아님' },
    { source: '{0} is previous {1} days', target: '{0}는 지난 {1}일임' },
    { source: '{0} is not previous {1} days', target: '{0}는 지난 {1}일이 아님' },

    { source: 'is empty', target: '비어있음' },
    { source: 'is not empty', target: '비어있지 않음' },
    { source: '{0} is empty', target: '{0}는 비어있음' },
    { source: '{0} is not empty', target: '{0}는 비어있지 않음' },

    { source: 'covered by', target: '에 의해 커버됨' },
    { source: 'is not covered by', target: '에 의해 커버되지 않음' },
    { source: '{0} covered by {1}', target: '{0}는 {1}에 의해 커버됨' },
    { source: '{0} is not covered by {1}', target: '{0}는 {1}에 의해 커버되지 않음' },

    // Activity log
    { source: 'No activities found', target: '활동이 발견되지 않음' },
    {
      source: 'Start to working with data to log activities.',
      target: '활동을 기록하기 위해 데이터 작업을 시작함.'
    },
    { source: 'All Activity', target: '모든 활동' },
    { source: 'Create Record', target: '기록 생성' },
    { source: 'Update Record', target: '기록 업데이트' },
    { source: 'Delete Record', target: '기록 삭제' },
    { source: 'All Members', target: '모든 멤버' },

    // Collaboration
    { source: 'Timeline', target: '타임라인' },
    { source: 'Messages', target: '메시지' },
    { source: 'Activity', target: '활동' },
    { source: 'Start chatting with your team', target: '팀과 채팅 시작' },
    {
      source: 'Take a message about current page to keep track of important info.',
      target: '중요한 정보를 추적하기 위해 현재 페이지에 대한 메시지를 취함.'
    },
    { source: 'Your Message', target: '당신의 메시지' },
    { source: 'Send', target: '보내기' },

    // Share
    { source: 'Invite members', target: '멤버 초대' },
    { source: 'Public share', target: '공개 공유' },
    { source: 'Sign Up', target: '가입하기' },
    { source: 'Members', target: '멤버들' },
    { source: 'Invite with Email', target: '이메일로 초대' },
    { source: 'Invite someone...', target: '누군가를 초대...' },
    { source: 'Send Invite', target: '초대 보내기' },
    {
      source: 'Limit access to your data by user properties',
      target: '사용자 속성에 따라 데이터 접근을 제한하기'
    },
    {
      source: 'Enter the email of the user you’d like to invite to collaborate.',
      target: '협업에 초대하고 싶은 사용자의 이메일 입력하기'
    },
    { source: 'Copy', target: '복사하기' },
    { source: 'Invite with Link', target: '링크로 초대하기' },
    { source: 'Remove link', target: '링크 제거하기' },
    { source: 'Add Invite Link', target: '초대 링크 추가하기' },
    {
      source: 'Anyone on the internet with this link will be able to join the selected team.',
      target: '이 링크를 가진 인터넷 사용자라면 누구나 선택된 팀에 참여할 수 있습니다.'
    },
    { source: 'Pending Invites', target: '보류 중인 초대' },
    { source: 'Cancel invite', target: '초대 취소하기' },
    { source: 'Active Members', target: '활동 중인 멤버' },
    { source: 'Remove member', target: '멤버 제거하기' },
    {
      source: 'You are setting sharing for the current page',
      target: '현재 페이지에 대한 공유 설정을 하고 있습니다'
    },
    {
      source: 'You are setting sharing for all pages of your App.',
      target: '앱의 모든 페이지에 대한 공유 설정을 하고 있습니다.'
    },
    { source: 'Public access link', target: '공개 접근 링크' },
    { source: 'Updating public access...', target: '공개 접근 업데이트 중...' },
    {
      source:
        'Anyone with this link will be able to view current page. This way you can also embed current page into another website.',
      target:
        '이 링크를 가진 사람은 누구나 현재 페이지를 볼 수 있습니다. 이 방법으로 다른 웹사이트에 현재 페이지를 내장할 수도 있습니다.'
    },
    { source: 'Embed code (IFRAME)', target: '내장 코드 (IFRAME)' },
    {
      source: 'Paste this code into the HTML code of your website where you would like current page to appear.',
      target: '현재 페이지가 나타나길 원하는 웹사이트의 HTML 코드에 이 코드를 붙여넣으세요.'
    },
    { source: 'link', target: '링크' },
    { source: 'invited', target: '초대됨' },
    { source: 'Choose Team', target: '팀 선택하기' },
    { source: 'App Teams', target: '앱 팀' },
    { source: 'Built-In Teams', target: '내장 팀' },
    { source: 'Clear Team', target: '팀 지우기' },
    { source: 'Can build application and modify data', target: '애플리케이션 구축 및 데이터 수정 가능' },
    { source: 'Can modify data in application', target: '애플리케이션 내 데이터 수정 가능' },
    { source: 'Can only view data without modification', target: '수정 없이 데이터만 볼 수 있음' },
    { source: 'Add Team', target: '팀 추가하기' },
    { source: 'Edit Team', target: '팀 편집하기' },
    { source: 'Adding Team', target: '팀 추가 중' },
    {
      source: 'Keep control over who has access to current App',
      target: '현재 앱에 접근할 수 있는 사람을 제어하기'
    },
    { source: 'Enter Team Name', target: '팀 이름 입력하기' },
    {
      source: 'Type the team name, i.e: Support, Sales, Marketing, etc.',
      target: '팀 이름을 입력하세요, 예: 지원, 영업, 마케팅 등.'
    },
    { source: 'Add a new member to this team.', target: '이 팀에 새로운 멤버 추가하기.' },
    { source: 'Invite new member', target: '새 멤버 초대하기' },
    { source: 'User', target: '사용자' },
    { source: 'Date Added', target: '추가된 날짜' },
    { source: 'You', target: '당신' },
    { source: 'Edit', target: '편집하기' },
    { source: 'No users in this team', target: '이 팀에 사용자가 없습니다' },
    { source: 'Page Permissions', target: '페이지 권한' },
    { source: 'App Permissions', target: '앱 권한' },
    { source: 'Properties', target: '속성' },
    { source: 'Page name', target: '페이지 이름' },
    { source: 'Access', target: '접근' },
    { source: 'Full Access', target: '전체 접근' },
    { source: 'Read Only', target: '읽기 전용' },
    { source: 'No Access', target: '접근 불가' },
    { source: 'Read', target: '읽기' },
    { source: 'Update', target: '업데이트' },
    { source: 'Write', target: '쓰기' },
    { source: { label: 'Delete', context: 'permissions' }, target: '삭제' },
    { source: 'Custom Access', target: '사용자 정의 접근' },
    { source: 'Read, create, update and delete data', target: '데이터 읽기, 생성, 업데이트 및 삭제' },
    { source: 'Choose allowed operations granularly', target: '허용된 작업을 세분화하여 선택' },
    { source: 'Without any access to data', target: '데이터에 대한 어떠한 접근도 없음' },
    { source: 'Name', target: '이름' },
    { source: 'Active', target: '활성' },
    { source: 'Settings', target: '설정' },
    { source: 'Members and Teams', target: '멤버와 팀' },
    { source: 'App Builder', target: '앱 빌더' },
    { source: 'Collection Permissions', target: '컬렉션 권한' },
    {
      source: "Grant permissions to app's collection",
      target: '앱 컬렉션에 대한 권한 부여'
    },
    { source: 'Collection', target: '컬렉션' },
    {
      source: 'Limit access to your data by team properties',
      target: '팀 속성에 의해 데이터 접근 제한'
    },
    { source: 'Save Team', target: '팀 저장' },
    { source: 'Create Team', target: '팀 생성' },
    { source: 'Value', target: '값' },
    { source: 'No properties specified', target: '지정된 속성 없음' },

    // Navigation
    { source: 'Current App', target: '현재 앱' },
    { source: 'Home', target: '홈' },

    // Profile
    {
      source: 'We are fetching user data, please, wait...',
      target: '사용자 데이터를 가져오는 중입니다. 잠시만 기다려 주세요...'
    },
    { source: 'Profile Settings', target: '프로필 설정' },
    { source: 'Basic information about your account.', target: '계정의 기본 정보입니다.' },
    { source: 'Photo', target: '사진' },
    { source: 'your photo', target: '당신의 사진' },
    { source: 'Change', target: '변경하기' },
    { source: 'Upload', target: '업로드하기' },
    { source: 'Photo was successfully updated', target: '사진이 성공적으로 업데이트되었습니다' },
    { source: 'Photo was successfully deleted', target: '사진이 성공적으로 삭제되었습니다' },
    { source: 'First Name', target: '이름' },
    { source: 'Last Name', target: '성' },
    { source: 'Your Email', target: '이메일' },
    { source: 'Email Change', target: '이메일 변경' },
    { source: 'New Email', target: '새 이메일' },
    { source: 'Change Email', target: '이메일 변경하기' },
    { source: 'Check your inbox', target: '받은 편지함을 확인하세요' },
    { source: 'Confirmation Email was sent to {0}', target: '확인 이메일이 {0}으로 보내졌습니다' },
    { source: 'Changing Email failed', target: '이메일 변경 실패' },
    { source: 'Password Change', target: '비밀번호 변경' },
    {
      source: 'A password should be strong enough to protect your account, so make it at least 12 characters long.',
      target: '계정을 보호하기 위해 비밀번호는 최소 12자 이상이어야 합니다.'
    },
    { source: 'Current Password', target: '현재 비밀번호' },
    { source: 'New Password', target: '새 비밀번호' },
    { source: 'Confirm New Password', target: '새 비밀번호 확인' },
    { source: 'Change Password', target: '비밀번호 변경하기' },
    { source: 'Current password was successfully updated', target: '현재 비밀번호가 성공적으로 업데이트되었습니다' },
    { source: 'Saving current password failed', target: '현재 비밀번호 저장 실패' },
    { source: 'Short password', target: '비밀번호가 짧습니다' },
    { source: "Passwords don't match", target: '비밀번호가 일치하지 않습니다' },
    { source: 'Personal Preferences', target: '개인 설정' },
    { source: 'Language', target: '언어' },
    { source: 'Timezone', target: '표준 시간대' },
    { source: 'Current time in {0} is', target: '{0}의 현재 시간은' },
    {
      source: 'Customize additional preferences for your account.',
      target: '계정에 대한 추가 설정을 사용자 정의합니다.'
    },
    { source: 'News & Proposals', target: '뉴스 및 제안' },
    {
      source: 'Subscribe to our updates and proposals.',
      target: '우리의 업데이트 및 제안을 구독하세요.'
    },
    { source: 'Save changes', target: '변경 사항 저장하기' },
    { source: 'Current user was successfully updated', target: '현재 사용자가 성공적으로 업데이트되었습니다' },
    { source: 'Saving current user failed', target: '현재 사용자 저장 실패' },

    // My Apps
    { source: 'Type to search...', target: '검색어 입력...' },
    { source: 'My Apps', target: '내 앱' },
    { source: 'New App', target: '새 앱' },
    { source: 'Builder', target: '빌더' },
    { source: 'App', target: '앱' },
    { source: 'continue install', target: '설치 계속하기' },
    { source: 'Open builder', target: '빌더 열기' },
    { source: 'View published', target: '게시된 보기' },
    { source: 'Delete App', target: '앱 삭제하기' },
    { source: 'Start from a template', target: '템플릿에서 시작하기' },
    { source: 'Preview', target: '미리보기' },
    { source: 'Contact Support', target: '지원팀에 연락하기' },
    { source: 'Documentation', target: '문서' },
    { source: 'Feature Requests', target: '기능 요청' },
    { source: 'See What’s New', target: '새로운 소식 보기' },
    { source: 'Search templates...', target: '템플릿 검색...' },
    { source: 'any', target: '어떤' },
    { source: 'more', target: '더' },
    { source: 'Choose Data Source', target: '데이터 소스 선택하기' },
    { source: 'works with 30+ data sources', target: '30개 이상의 데이터 소스와 함께 작동' },
    { source: 'Use this template', target: '이 템플릿 사용하기' },
    { source: 'stores data in Jet Tables', target: 'Jet Tables에 데이터 저장하기' },
    { source: 'New Data', target: '새 데이터' },
    { source: 'using {0}', target: '{0} 사용 중' },
    { source: "Can't find resource you're looking for?", target: '찾고 있는 리소스를 찾을 수 없나요?' },
    { source: 'Admin Panel', target: '관리 패널' },
    {
      source: 'List, create and update (CRUD) operations on top of your data',
      target: '데이터 위의 목록, 생성 및 업데이트(CRUD) 작업'
    },
    {
      source: 'Build a custom admin panel based on any databases, apps and APIs like Stripe, Twilio and GraphQL.',
      target: 'Stripe, Twilio, GraphQL 같은 다양한 데이터베이스, 앱, API를 기반으로 맞춤형 관리 패널을 구축하세요.'
    },
    { source: 'All Integrations', target: '모든 통합' },
    { source: 'Databases', target: '데이터베이스' },
    { source: 'APIs', target: 'API들' },
    { source: 'Frameworks', target: '프레임워크' },
    { source: 'Storages', target: '저장소' },

    // Sign In
    { source: 'Good morning', target: '좋은 아침입니다' },
    { source: 'Good afternoon', target: '좋은 오후입니다' },
    { source: 'Good evening', target: '좋은 저녁입니다' },
    { source: 'Sign In', target: '로그인' },
    { source: 'Welcome Back.', target: '다시 오신 것을 환영합니다.' },
    { source: 'Sign in with {0}', target: '{0}으로 로그인' },
    { source: 'or login with', target: '또는 로그인하기' },
    { source: 'Enter E-mail', target: '이메일 입력' },
    { source: 'Enter password', target: '비밀번호 입력' },
    { source: 'Login', target: '로그인' },
    { source: 'Create new account', target: '새 계정 만들기' },
    { source: 'Forgot my password', target: '비밀번호를 잊었습니다' },
    { source: 'required', target: '필수' },
    { source: 'incorrect Email', target: '잘못된 이메일' },
    { source: 'Minimum password length {0}', target: '최소 비밀번호 길이 {0}' },
    { source: 'Unable to Sign In', target: '로그인할 수 없습니다' },

    // Sign Up
    {
      source: 'Get Started <span class="auth-form__accent">Free today</span>',
      target: '지금 시작하세요 <span class="auth-form__accent">오늘은 무료입니다</span>'
    },
    {
      source: "No card required. You'll get all the advanced functionality for free during the 14 day PRO trial.",
      target: '카드가 필요 없습니다. 14일간의 PRO 시험 기간 동안 모든 고급 기능을 무료로 이용할 수 있습니다.'
    },
    { source: 'Enter First Name', target: '이름 입력' },
    { source: 'Enter Last Name (optional)', target: '성 입력 (선택사항)' },
    { source: 'Enter Email', target: '이메일 입력' },
    { source: 'Password', target: '비밀번호' },
    { source: 'Repeat Password', target: '비밀번호 재입력' },
    {
      source: 'By signing in you’re okay with our',
      target: '로그인함으로써 당신은 저희와 함께 함에 동의합니다'
    },
    {
      source: 'Creating an account means you’re okay with our',
      target: '계정을 생성함으로써 당신은 저희와 함께 함에 동의합니다'
    },
    { source: 'Terms of Service', target: '서비스 약관' },
    { source: 'Privacy Policy', target: '개인정보 처리방침' },
    { source: 'and', target: '그리고' },
    { source: 'Create your free account', target: '무료 계정 만들기' },
    { source: 'Already have an account', target: '이미 계정이 있습니다' },
    { source: 'Unable to Sign Up', target: '가입할 수 없습니다' },

    // Restore password
    { source: 'Reset your password', target: '비밀번호 재설정' },
    { source: 'Email Address', target: '이메일 주소' },
    { source: 'Reset password', target: '비밀번호 재설정' },
    { source: 'Return to Sign In', target: '로그인으로 돌아가기' },
    {
      source:
        'Please check your Email – <strong>{0}</strong>. We have sent the validation link you should follow to change your password.',
      target: '이메일을 확인해 주세요 – <strong>{0}</strong>. 비밀번호를 변경할 수 있는 유효성 검사 링크를 보냈습니다.'
    },
    {
      source: 'Almost done, just enter your new password below. <br>Must be al least 8 characters.',
      target: '거의 완료되었습니다. 아래에 새 비밀번호를 입력하세요. <br>최소 8자 이상이어야 합니다.'
    },
    { source: 'Reset password & Sign In', target: '비밀번호 재설정 및 로그인' },
    { source: 'Unable to Send Code', target: '코드를 보낼 수 없습니다' },
    { source: 'Unable to Change Password', target: '비밀번호를 변경할 수 없습니다' },

    // Email Verification
    { source: 'Email Verification', target: '이메일 인증' },
    { source: 'Resend verification code', target: '인증 코드 재전송' },
    { source: 'Verification email sent', target: '인증 이메일 전송됨' },
    { source: 'Your Email is now verified', target: '이메일이 인증되었습니다' },
    { source: 'Request is incorrect', target: '요청이 잘못되었습니다' },

    // Invites
    {
      source: 'Join <span class="auth-form__accent">{0}</span>',
      target: '<span class="auth-form__accent">{0}</span>에 가입하기'
    },
    {
      source: '<strong>{0}</strong> has invited you to join <strong>{1}</strong>',
      target: '<strong>{0}</strong>이(가) 당신을 <strong>{1}</strong>에 초대했습니다'
    },
    {
      source: 'Someone has invited you to join <strong>{0}</strong>',
      target: '누군가 당신을 <strong>{0}</strong>에 초대했습니다'
    },
    {
      source: 'You are joining <strong>{0}</strong> using invite link',
      target: '초대 링크를 사용하여 <strong>{0}</strong>에 가입 중입니다'
    },
    { source: 'Join', target: '참가하다' },
    { source: 'Go to home page', target: '홈 페이지로 이동' },
    { source: 'Invite link is wrong', target: '초대 링크가 잘못되었습니다' },
    {
      source:
        'Looks like your invitation link has expired or maybe you have followed the wrong link. Please try to ask to invite your again.',
      target: '초대 링크가 만료되었거나 잘못된 링크를 따랐을 수 있습니다. 다시 초대해 달라고 요청해 보세요.'
    },
    {
      source: 'Unfortunately we failed to load information about this invitation',
      target: '안타깝게도 이 초대에 대한 정보를 로드하지 못했습니다'
    },

    // Users & Teams
    { source: 'Members of {0}', target: '{0}의 멤버들' },
    { source: 'How to get started', target: '시작하는 방법' },
    { source: 'Users API', target: '사용자 API' },
    { source: 'Teams API', target: '팀 API' },
    { source: 'Invite Member', target: '멤버 초대하기' },
    { source: 'Add User property', target: '사용자 속성 추가하기' },
    { source: 'Add Team property', target: '팀 속성 추가하기' },
    { source: 'Edit property', target: '속성 편집하기' },
    { source: 'Delete property', target: '속성 삭제하기' },
    { source: 'Users', target: '사용자들' },
    { source: 'Teams', target: '팀들' },
    { source: 'Search members', target: '멤버 검색하기' },
    { source: 'Search teams', target: '팀 검색하기' },
    { source: '{0} pages', target: '{0} 페이지들' },
    { source: 'No members', target: '멤버가 없습니다' }
  ]
};

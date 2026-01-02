const ICONS = [
  'http://localhost:9000/bit-setup/app/icons/870b86d7faad4972b77bfddf4fef109d.png',
  'http://localhost:9000/bit-setup/app/icons/chrome.png',
  'http://localhost:9000/bit-setup/app/icons/firefox.png',
  'http://localhost:9000/bit-setup/app/icons/huorong.png',
  'http://localhost:9000/bit-setup/app/icons/bandzip.png',
  'http://localhost:9000/bit-setup/app/icons/qq.png',
  'http://localhost:9000/bit-setup/app/icons/wechat.png',
  'http://localhost:9000/bit-setup/app/icons/tim.png',
  'http://localhost:9000/bit-setup/app/icons/tencent.png',
  'http://localhost:9000/bit-setup/app/icons/potplayer.png',
  'http://localhost:9000/bit-setup/app/icons/listen1.png',
  'http://localhost:9000/bit-setup/app/icons/rainmeter.png',
  'http://localhost:9000/bit-setup/app/icons/lively.png',
  'http://localhost:9000/bit-setup/app/icons/nexus.png',
  'http://localhost:9000/bit-setup/app/icons/bitdock.png',
  'http://localhost:9000/bit-setup/app/icons/folder.png',
  'http://localhost:9000/bit-setup/app/icons/startallback.png',
  'http://localhost:9000/bit-setup/app/icons/spacesniffer.png',
  'http://localhost:9000/bit-setup/app/icons/archpr.png',
  'http://localhost:9000/bit-setup/app/icons/rufus.png',
  'http://localhost:9000/bit-setup/app/icons/trafficmonitor.png',
  'http://localhost:9000/bit-setup/app/icons/memreduct.png',
  'http://localhost:9000/bit-setup/app/icons/geek.png',
  'http://localhost:9000/bit-setup/app/icons/diskgenius.png'
]

const pickIcon = (id) => ICONS[(id - 1) % ICONS.length]

export const appData = [
  {
    icon: pickIcon(1),
    id: 1,
    name: '语音点名',
    description: '一个实用的点名签到工具',
    category: '签到工具',
    size: 12.3 * 1024 * 1024
  },
  {
    icon: pickIcon(2),
    id: 2,
    name: '智能考勤',
    description: '基于人脸识别的智能考勤系统',
    category: '签到工具',
    size: 15.9 * 1024 * 1024
  },
  {
    icon: pickIcon(3),
    id: 3,
    name: '课堂互动',
    description: '增强课堂互动性的教学工具',
    category: '教学工具',
    size: 18.7 * 1024 * 1024
  },
  {
    icon: pickIcon(4),
    id: 4,
    name: '作业管理',
    description: '便捷的作业布置与批改平台',
    category: '学习工具',
    size: 14.7 * 1024 * 1024
  },
  {
    icon: pickIcon(5),
    id: 5,
    name: '备课助手',
    description: '快速生成课件与课堂节奏规划',
    category: '教学工具',
    size: 20.1 * 1024 * 1024
  },
  {
    icon: pickIcon(6),
    id: 6,
    name: '试卷管理',
    description: '试卷录入、组卷与批改统计',
    category: '学习工具',
    size: 16.4 * 1024 * 1024
  }
]

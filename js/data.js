// ===================== 智慧食安管理系统 - 模拟数据 =====================

const MOCK_DATA = {
  // 用户角色
  roles: {
    admin: { name: '平台管理员', menus: ['dashboard', 'users', 'roles', 'permissions', 'system', 'devices', 'alerts', 'samples', 'personnel', 'checks', 'access', 'monitor'] },
    canteenAdmin: { name: '食堂管理员', menus: ['dashboard', 'canteenUsers', 'canteenRoles', 'alerts', 'samples', 'personnel', 'checks', 'access', 'monitor'] },
    staff: { name: '从业人员', menus: ['dashboard', 'mySamples', 'myChecks', 'myTasks', 'personnelInfo'] },
    inspector: { name: '监管用户', menus: ['dashboard', 'dataView', 'monitor', 'reports'] }
  },

  // 用户信息
  users: [
    { id: 1, username: 'admin', password: 'admin123', realName: '张建国', role: 'admin', phone: '13800138001', canteenId: null, avatar: null, lastLogin: '2026-07-21 08:30:00', status: 1 },
    { id: 2, username: 'ct001', password: '123456', realName: '李秀英', role: 'canteenAdmin', phone: '13900139002', canteenId: 1, avatar: null, lastLogin: '2026-07-21 07:45:00', status: 1 },
    { id: 3, username: 'ct002', password: '123456', realName: '王大明', role: 'canteenAdmin', phone: '13700137003', canteenId: 2, avatar: null, lastLogin: '2026-07-20 18:10:00', status: 1 },
    { id: 4, username: 'staff001', password: '123456', realName: '陈小梅', role: 'staff', phone: '13600136004', canteenId: 1, avatar: null, lastLogin: '2026-07-21 06:20:00', status: 1 },
    { id: 5, username: 'staff002', password: '123456', realName: '刘志强', role: 'staff', phone: '13500135005', canteenId: 1, avatar: null, lastLogin: '2026-07-20 20:00:00', status: 1 },
    { id: 6, username: 'staff003', password: '123456', realName: '赵玉华', role: 'staff', phone: '13300133006', canteenId: 2, avatar: null, lastLogin: '2026-07-21 05:50:00', status: 1 },
    { id: 7, username: 'insp001', password: '123456', realName: '孙监管', role: 'inspector', phone: '13100131007', canteenId: null, avatar: null, lastLogin: '2026-07-21 09:00:00', status: 1 }
  ],

  // 食堂信息
  canteens: [
    { id: 1, name: '第一食堂', address: '东区教学楼B座1层', manager: '李秀英', phone: '13900139002', status: 1, area: 1200, staffCount: 18, createTime: '2024-03-15' },
    { id: 2, name: '第二食堂', address: '西区生活区C座2层', manager: '王大明', phone: '13700137003', status: 1, area: 980, staffCount: 15, createTime: '2024-06-20' },
    { id: 3, name: '第三食堂', address: '北区研究生公寓D座1层', manager: '待定', phone: '-', status: 0, area: 800, staffCount: 0, createTime: '2025-01-10' }
  ],

  // 物联网设备
  devices: [
    { id: 'DEV001', type: '温湿度传感器', name: '后厨温湿度-01', canteenId: 1, location: '第一食堂后厨主操作区', status: 'online', lastData: { temperature: 24.5, humidity: 62 }, lastUpdate: '2026-07-21 18:10:00', installDate: '2025-02-10' },
    { id: 'DEV002', type: '温湿度传感器', name: '仓库温湿度-01', canteenId: 1, location: '第一食堂仓库A区', status: 'online', lastData: { temperature: 18.2, humidity: 55 }, lastUpdate: '2026-07-21 18:08:00', installDate: '2025-02-10' },
    { id: 'DEV003', type: '离地靠墙传感器', name: '离地检测-01', canteenId: 1, location: '第一食堂货架区3排', status: 'online', lastData: { distance: 12.5 }, lastUpdate: '2026-07-21 18:05:00', installDate: '2025-03-15' },
    { id: 'DEV004', type: '挡鼠板检测', name: '挡鼠板-01', canteenId: 1, location: '第一食堂仓库入口', status: 'warning', lastData: { status: '倾斜' }, lastUpdate: '2026-07-21 17:55:00', installDate: '2025-03-20' },
    { id: 'DEV005', type: '消毒柜传感器', name: '消毒柜-01', canteenId: 1, location: '第一食堂餐具消毒间', status: 'online', lastData: { temperature: 85, duration: 32 }, lastUpdate: '2026-07-21 18:00:00', installDate: '2025-04-01' },
    { id: 'DEV006', type: '温湿度传感器', name: '后厨温湿度-02', canteenId: 2, location: '第二食堂后厨主操作区', status: 'online', lastData: { temperature: 25.1, humidity: 60 }, lastUpdate: '2026-07-21 18:11:00', installDate: '2025-05-10' },
    { id: 'DEV007', type: '挡鼠板检测', name: '挡鼠板-02', canteenId: 2, location: '第二食堂后厨出入口', status: 'offline', lastData: { status: '未知' }, lastUpdate: '2026-07-21 12:00:00', installDate: '2025-05-15' },
    { id: 'DEV008', type: '离地靠墙传感器', name: '离地检测-02', canteenId: 2, location: '第二食堂米面存放区', status: 'online', lastData: { distance: 15.0 }, lastUpdate: '2026-07-21 18:09:00', installDate: '2025-06-01' }
  ],

  // 异常行为报警
  alerts: [
    { id: 1, type: '未正确着装', level: 'high', canteenId: 1, location: '第一食堂后厨', time: '2026-07-26 11:35:22', status: 'pending', handler: null, handleTime: null, description: '检测到从业人员未佩戴工作帽', image: 'assets/alert1.jpg', deviceId: 'CAM001' },
    { id: 2, type: '抽烟', level: 'high', canteenId: 1, location: '第一食堂后厨', time: '2026-07-26 10:15:00', status: 'pending', handler: null, handleTime: null, description: '后厨操作间发现抽烟行为', image: null, deviceId: 'CAM001' },
    { id: 3, type: '垃圾桶未盖', level: 'medium', canteenId: 1, location: '第一食堂备餐区', time: '2026-07-26 09:48:00', status: 'pending', handler: null, handleTime: null, description: '垃圾桶未加盖超过5分钟', image: null, deviceId: 'CAM002' },
    { id: 4, type: '玩手机', level: 'low', canteenId: 2, location: '第二食堂窗口', time: '2026-07-26 08:30:00', status: 'pending', handler: null, handleTime: null, description: '打餐期间玩手机', image: null, deviceId: 'CAM003' },
    { id: 5, type: '有老鼠', level: 'high', canteenId: 1, location: '第一食堂仓库A区', time: '2026-07-25 22:10:00', status: 'pending', handler: null, handleTime: null, description: '夜间监控发现老鼠活动，需安排消杀', image: null, deviceId: 'CAM004' },
    { id: 6, type: '未正确着装', level: 'medium', canteenId: 2, location: '第二食堂面点间', time: '2026-07-25 06:00:00', status: 'handled', handler: '王大明', handleTime: '2026-07-25 06:10:00', description: '面点师未佩戴口罩', image: null, deviceId: 'CAM005' },
    { id: 7, type: '垃圾桶未盖', level: 'low', canteenId: 1, location: '第一食堂粗加工间', time: '2026-07-24 14:20:00', status: 'handled', handler: '陈小梅', handleTime: '2026-07-24 14:25:00', description: '厨余垃圾桶未盖', image: null, deviceId: 'CAM002' },
    { id: 8, type: '温湿度超标', level: 'high', canteenId: 1, location: '第一食堂冷藏库', time: '2026-07-26 12:05:00', status: 'pending', handler: null, handleTime: null, description: '冷藏库温度持续高于8°C，已超阈值', image: null, deviceId: 'TEMP001' },
    { id: 9, type: '挡鼠板异常', level: 'medium', canteenId: 2, location: '第二食堂后门', time: '2026-07-26 07:20:00', status: 'pending', handler: null, handleTime: null, description: '挡鼠板位移传感器触发，可能被挪动', image: null, deviceId: 'RODENT001' }
  ],

  // 留样数据
  samples: [
    { id: 1, name: '红烧肉', canteenId: 1, mealType: '午餐', sampleDate: '2026-07-21', sampleTime: '11:30', quantity: '150g', sampler: '陈小梅', expireDate: '2026-07-22', status: '正常', storage: '冷藏柜A1', remark: '' },
    { id: 2, name: '清炒时蔬', canteenId: 1, mealType: '午餐', sampleDate: '2026-07-21', sampleTime: '11:32', quantity: '100g', sampler: '陈小梅', expireDate: '2026-07-22', status: '正常', storage: '冷藏柜A1', remark: '' },
    { id: 3, name: '番茄炒蛋', canteenId: 1, mealType: '晚餐', sampleDate: '2026-07-21', sampleTime: '17:30', quantity: '120g', sampler: '刘志强', expireDate: '2026-07-22', status: '正常', storage: '冷藏柜A2', remark: '' },
    { id: 4, name: '糖醋里脊', canteenId: 1, mealType: '晚餐', sampleDate: '2026-07-20', sampleTime: '17:28', quantity: '150g', sampler: '刘志强', expireDate: '2026-07-21', status: '已销毁', storage: '冷藏柜A2', remark: '到期销毁' },
    { id: 5, name: '宫保鸡丁', canteenId: 2, mealType: '午餐', sampleDate: '2026-07-21', sampleTime: '11:25', quantity: '150g', sampler: '赵玉华', expireDate: '2026-07-22', status: '正常', storage: '冷藏柜B1', remark: '' },
    { id: 6, name: '紫菜蛋花汤', canteenId: 2, mealType: '午餐', sampleDate: '2026-07-21', sampleTime: '11:20', quantity: '200ml', sampler: '赵玉华', expireDate: '2026-07-22', status: '正常', storage: '冷藏柜B1', remark: '' },
    { id: 7, name: '土豆烧牛肉', canteenId: 2, mealType: '晚餐', sampleDate: '2026-07-20', sampleTime: '17:20', quantity: '150g', sampler: '赵玉华', expireDate: '2026-07-21', status: '已销毁', storage: '冷藏柜B2', remark: '到期销毁' }
  ],

  // 人员信息
  personnel: [
    { id: 1, empNo: 'YG2024001', name: '陈小梅', phone: '13600136004', canteenId: 1, position: '厨师', healthCardNo: '健2024A001', healthStatus: '有效', healthExpire: '2027-03-15', entryDate: '2024-03-01', facePhoto: null, status: 1 },
    { id: 2, empNo: 'YG2024002', name: '刘志强', phone: '13500135005', canteenId: 1, position: '帮厨', healthCardNo: '健2024A002', healthStatus: '有效', healthExpire: '2027-05-20', entryDate: '2024-04-10', facePhoto: null, status: 1 },
    { id: 3, empNo: 'YG2024003', name: '赵玉华', phone: '13300133006', canteenId: 2, position: '面点师', healthCardNo: '健2024B001', healthStatus: '即将过期', healthExpire: '2026-08-10', entryDate: '2024-06-15', facePhoto: null, status: 1 },
    { id: 4, empNo: 'YG2024004', name: '孙大海', phone: '13200132008', canteenId: 1, position: '洗碗工', healthCardNo: '健2024A003', healthStatus: '有效', healthExpire: '2027-01-10', entryDate: '2024-07-20', facePhoto: null, status: 1 },
    { id: 5, empNo: 'YG2024005', name: '周小芳', phone: '13100131009', canteenId: 1, position: '窗口服务员', healthCardNo: '健2024A004', healthStatus: '有效', healthExpire: '2027-06-30', entryDate: '2024-09-01', facePhoto: null, status: 1 },
    { id: 6, empNo: 'YG2024006', name: '吴国强', phone: '13000130010', canteenId: 2, position: '厨师', healthCardNo: '健2024B002', healthStatus: '已过期', healthExpire: '2026-05-01', entryDate: '2024-10-15', facePhoto: null, status: 0 },
    { id: 7, empNo: 'YG2024007', name: '郑丽华', phone: '12900129011', canteenId: 2, position: '配菜工', healthCardNo: '健2024B003', healthStatus: '有效', healthExpire: '2027-02-28', entryDate: '2025-01-05', facePhoto: null, status: 1 },
    { id: 8, empNo: 'YG2024008', name: '钱进', phone: '12800128012', canteenId: 1, position: '采购员', healthCardNo: '健2024A005', healthStatus: '有效', healthExpire: '2027-04-15', entryDate: '2025-02-20', facePhoto: null, status: 1 },
    { id: 9, empNo: 'YG2024009', name: '马云飞', phone: '12700127013', canteenId: 2, position: '帮厨', healthCardNo: '健2024B004', healthStatus: '有效', healthExpire: '2027-07-10', entryDate: '2025-03-10', facePhoto: null, status: 1 },
    { id: 10, empNo: 'YG2024010', name: '林晓红', phone: '12600126014', canteenId: 1, position: '保洁员', healthCardNo: '健2024A006', healthStatus: '即将过期', healthExpire: '2026-08-05', entryDate: '2025-04-01', facePhoto: null, status: 1 }
  ],

  // 晨午晚检查记录
  checks: [
    { id: 1, personId: 1, name: '陈小梅', canteenId: 1, type: '晨检', date: '2026-07-21', time: '06:15', temperature: 36.4, symptoms: '无', nails: '合格', uniform: '合格', healthStatus: '正常', deviceId: 'CHK001', remark: '' },
    { id: 2, personId: 2, name: '刘志强', canteenId: 1, type: '晨检', date: '2026-07-21', time: '06:18', temperature: 36.5, symptoms: '无', nails: '合格', uniform: '合格', healthStatus: '正常', deviceId: 'CHK001', remark: '' },
    { id: 3, personId: 4, name: '孙大海', canteenId: 1, type: '晨检', date: '2026-07-21', time: '06:10', temperature: 36.3, symptoms: '无', nails: '合格', uniform: '合格', healthStatus: '正常', deviceId: 'CHK001', remark: '' },
    { id: 4, personId: 3, name: '赵玉华', canteenId: 2, type: '晨检', date: '2026-07-21', time: '05:50', temperature: 36.6, symptoms: '无', nails: '合格', uniform: '合格', healthStatus: '正常', deviceId: 'CHK002', remark: '' },
    { id: 5, personId: 1, name: '陈小梅', canteenId: 1, type: '午检', date: '2026-07-21', time: '13:00', temperature: 36.5, symptoms: '无', nails: '合格', uniform: '合格', healthStatus: '正常', deviceId: 'CHK001', remark: '' },
    { id: 6, personId: 2, name: '刘志强', canteenId: 1, type: '午检', date: '2026-07-21', time: '13:05', temperature: 36.7, symptoms: '无', nails: '合格', uniform: '合格', healthStatus: '正常', deviceId: 'CHK001', remark: '' },
    { id: 7, personId: 5, name: '周小芳', canteenId: 1, type: '晨检', date: '2026-07-20', time: '06:20', temperature: 36.2, symptoms: '无', nails: '合格', uniform: '合格', healthStatus: '正常', deviceId: 'CHK001', remark: '' },
    { id: 8, personId: 10, name: '林晓红', canteenId: 1, type: '晨检', date: '2026-07-20', time: '06:05', temperature: 36.8, symptoms: '无', nails: '合格', uniform: '合格', healthStatus: '正常', deviceId: 'CHK001', remark: '' },
    { id: 9, personId: 6, name: '吴国强', canteenId: 2, type: '晨检', date: '2026-07-21', time: '05:45', temperature: 36.5, symptoms: '无', nails: '合格', uniform: '不合格', healthStatus: '异常', deviceId: 'CHK002', remark: '工作服污渍未更换' }
  ],

  // 门禁信息
  access: [
    { id: 1, name: '第一食堂正门', canteenId: 1, location: '东区教学楼B座1层东侧', type: '人脸识别', status: '正常', ip: '192.168.1.101', lastEvent: '2026-07-21 18:05:00', eventType: '刷卡进入', eventPerson: '陈小梅' },
    { id: 2, name: '第一食堂后厨门', canteenId: 1, location: '东区教学楼B座1层北侧', type: '人脸识别', status: '正常', ip: '192.168.1.102', lastEvent: '2026-07-21 18:00:00', eventType: '刷卡进入', eventPerson: '刘志强' },
    { id: 3, name: '第一食堂仓库门', canteenId: 1, location: '东区教学楼B座1层西侧', type: '刷卡门禁', status: '正常', ip: '192.168.1.103', lastEvent: '2026-07-21 17:30:00', eventType: '刷卡进入', eventPerson: '钱进' },
    { id: 4, name: '第二食堂正门', canteenId: 2, location: '西区生活区C座2层南侧', type: '人脸识别', status: '正常', ip: '192.168.2.101', lastEvent: '2026-07-21 18:08:00', eventType: '刷卡进入', eventPerson: '赵玉华' },
    { id: 5, name: '第二食堂后厨门', canteenId: 2, location: '西区生活区C座2层北侧', type: '人脸识别', status: '离线', ip: '192.168.2.102', lastEvent: '2026-07-21 12:00:00', eventType: '刷卡进入', eventPerson: '吴国强' }
  ],

  // 门禁记录
  accessLogs: [
    { id: 1, doorId: 1, doorName: '第一食堂正门', personId: 1, name: '陈小梅', type: '进入', time: '2026-07-21 06:10:00', method: '人脸', result: '成功' },
    { id: 2, doorId: 2, doorName: '第一食堂后厨门', personId: 2, name: '刘志强', type: '进入', time: '2026-07-21 06:12:00', method: '人脸', result: '成功' },
    { id: 3, doorId: 1, doorName: '第一食堂正门', personId: 5, name: '周小芳', type: '进入', time: '2026-07-21 06:30:00', method: '人脸', result: '成功' },
    { id: 4, doorId: 4, doorName: '第二食堂正门', personId: 3, name: '赵玉华', type: '进入', time: '2026-07-21 05:40:00', method: '人脸', result: '成功' },
    { id: 5, doorId: 4, doorName: '第二食堂正门', personId: 9, name: '马云飞', type: '进入', time: '2026-07-21 05:45:00', method: '人脸', result: '成功' },
    { id: 6, doorId: 2, doorName: '第一食堂后厨门', personId: 4, name: '孙大海', type: '进入', time: '2026-07-21 06:00:00', method: '人脸', result: '成功' },
    { id: 7, doorId: 3, doorName: '第一食堂仓库门', personId: 8, name: '钱进', type: '进入', time: '2026-07-21 08:00:00', method: '刷卡', result: '成功' },
    { id: 8, doorId: 1, doorName: '第一食堂正门', personId: 1, name: '陈小梅', type: '离开', time: '2026-07-21 14:00:00', method: '人脸', result: '成功' },
    { id: 9, doorId: 2, doorName: '第一食堂后厨门', personId: 2, name: '刘志强', type: '离开', time: '2026-07-21 14:05:00', method: '人脸', result: '成功' },
    { id: 10, doorId: 1, doorName: '第一食堂正门', personId: 1, name: '陈小梅', type: '进入', time: '2026-07-21 18:05:00', method: '人脸', result: '成功' }
  ],

  // 视频监控（监管用户查看）
  cameras: [
    { id: 'CAM001', name: '后厨主操作区', canteenId: 1, location: '第一食堂后厨', status: '在线', rtsp: 'rtsp://192.168.1.201/stream1', resolution: '1920x1080', direction: '俯视' },
    { id: 'CAM002', name: '备餐区', canteenId: 1, location: '第一食堂备餐间', status: '在线', rtsp: 'rtsp://192.168.1.202/stream1', resolution: '1920x1080', direction: '侧视' },
    { id: 'CAM003', name: '窗口区', canteenId: 2, location: '第二食堂打餐窗口', status: '在线', rtsp: 'rtsp://192.168.2.201/stream1', resolution: '1280x720', direction: '正面' },
    { id: 'CAM004', name: '仓库监控', canteenId: 1, location: '第一食堂仓库A区', status: '在线', rtsp: 'rtsp://192.168.1.203/stream1', resolution: '1920x1080', direction: '俯视' },
    { id: 'CAM005', name: '面点间', canteenId: 2, location: '第二食堂面点间', status: '离线', rtsp: 'rtsp://192.168.2.202/stream1', resolution: '1920x1080', direction: '侧视' }
  ],

  // 菜谱信息
  menus: [
    { id: 1, canteenId: 1, date: '2026-07-21', mealType: '早餐', items: '小米粥、馒头、咸菜、茶叶蛋', nutrition: '碳水为主', allergen: '蛋类' },
    { id: 2, canteenId: 1, date: '2026-07-21', mealType: '午餐', items: '红烧肉、清炒时蔬、番茄蛋汤、米饭', nutrition: '荤素搭配', allergen: '无' },
    { id: 3, canteenId: 1, date: '2026-07-21', mealType: '晚餐', items: '番茄炒蛋、土豆丝、紫菜汤、米饭', nutrition: '清淡为主', allergen: '蛋类' },
    { id: 4, canteenId: 2, date: '2026-07-21', mealType: '午餐', items: '宫保鸡丁、紫菜蛋花汤、炒时蔬、米饭', nutrition: '荤素搭配', allergen: '花生' },
    { id: 5, canteenId: 2, date: '2026-07-21', mealType: '晚餐', items: '清蒸鱼、凉拌黄瓜、米饭', nutrition: '清淡为主', allergen: '鱼类' }
  ],

  // 系统公告
  notices: [
    { id: 1, title: '关于暑期食品安全专项检查的通知', date: '2026-07-18', author: '张建国', type: '重要', content: '根据上级要求，将于7月25日至8月5日开展暑期食品安全专项检查，请各食堂做好准备工作。' },
    { id: 2, title: '挡鼠板设备维护通知', date: '2026-07-15', author: '张建国', type: '普通', content: '计划于7月22日对第二食堂后厨挡鼠板检测设备进行更换电池维护，届时设备将离线2小时。' },
    { id: 3, title: '健康证到期提醒', date: '2026-07-10', author: '李秀英', type: '紧急', content: '以下员工健康证即将到期：赵玉华（8月10日）、林晓红（8月5日），请尽快安排体检。' },
    { id: 4, title: '系统升级公告', date: '2026-07-05', author: '系统管理员', type: '普通', content: '系统将于7月23日凌晨2:00-4:00进行例行升级，期间部分功能可能无法使用。' }
  ],

  // 角色管理
  roles: [
    { id: 1, name: '平台管理员', code: 'admin', description: '系统全部权限，包括参数设置、用户管理、角色权限分配及业务管理等', status: 1, userCount: 1, createTime: '2024-01-01', permissions: ['dashboard','devices','alerts','alertReview','samples','personnel','checks','access','monitor','roles','userMgmt','sysParams','ledger','patrol','safetyInspect','recipes','patrolReview'] },
    { id: 2, name: '食堂管理员', code: 'canteenAdmin', description: '食堂运营管理权限，包括食堂用户管理、预警审核、巡查记录审核等', status: 1, userCount: 2, createTime: '2024-01-01', permissions: ['dashboard','userMgmt','roles','alertReview','patrolReview'] },
    { id: 3, name: '从业人员', code: 'staff', description: '可填报留样/台账/巡检/食安巡查/菜谱', status: 1, userCount: 3, createTime: '2024-01-01', permissions: ['samples','ledger','patrol','safetyInspect','recipes'] },
    { id: 4, name: '监管用户', code: 'inspector', description: '食品安全监管查看权限，包括视频监控查看', status: 1, userCount: 1, createTime: '2024-03-15', permissions: ['monitor'] }
  ],

  // 系统参数
  sysParams: {
    systemName: '智慧食安管理系统',
    systemVersion: 'v1.0.0',
    sampleKeepHours: 48,
    healthCertWarnDays: 30,
    alertAutoHandleHours: 24,
    backupSchedule: '每日凌晨2:00'
  },

  // 台账填报（采购/消毒/废弃物/添加剂）
  ledgers: [
    { id: 1, canteenId: 1, date: '2026-07-21', type: '采购验收台账', item: '大米', quantity: '50', unit: 'kg', operator: '陈小梅', remark: '供应商资质齐全，索证索票完整', status: '已提交' },
    { id: 2, canteenId: 1, date: '2026-07-21', type: '餐具消毒台账', item: '餐盘/碗筷', quantity: '300', unit: '件', operator: '刘志强', remark: '消毒温度85℃，时长30分钟', status: '已提交' },
    { id: 3, canteenId: 1, date: '2026-07-20', type: '餐厨废弃物台账', item: '泔水', quantity: '40', unit: 'kg', operator: '陈小梅', remark: '由资质单位统一回收', status: '已提交' },
    { id: 4, canteenId: 1, date: '2026-07-20', type: '添加剂使用台账', item: '泡打粉', quantity: '0.2', unit: 'kg', operator: '刘志强', remark: '专人保管，按需领用', status: '已提交' },
    { id: 5, canteenId: 2, date: '2026-07-21', type: '采购验收台账', item: '食用油', quantity: '20', unit: 'L', operator: '赵玉华', remark: '品牌合格，留样检测', status: '已提交' },
    { id: 6, canteenId: 2, date: '2026-07-19', type: '餐具消毒台账', item: '餐盘/碗筷', quantity: '260', unit: '件', operator: '赵玉华', remark: '消毒柜运行正常', status: '待提交' }
  ],

  // 巡检（区域卫生/设施/操作）
  patrols: [
    { id: 1, canteenId: 1, date: '2026-07-21', area: '后厨操作区', inspector: '陈小梅', item: '地面卫生/灶台清洁', result: '正常', problem: '', status: '已完成' },
    { id: 2, canteenId: 1, date: '2026-07-21', area: '仓库A区', inspector: '刘志强', item: '离墙离地/防鼠设施', result: '异常', problem: '3号货架离地不足10cm，已现场整改', status: '已完成' },
    { id: 3, canteenId: 1, date: '2026-07-20', area: '餐具消毒间', inspector: '陈小梅', item: '消毒柜运行/餐具存放', result: '正常', problem: '', status: '已完成' },
    { id: 4, canteenId: 2, date: '2026-07-21', area: '面点间', inspector: '赵玉华', item: '操作台/工具归置', result: '正常', problem: '', status: '已完成' },
    { id: 5, canteenId: 2, date: '2026-07-20', area: '后厨出入口', inspector: '赵玉华', item: '挡鼠板完好性', result: '异常', problem: '挡鼠板02倾斜，已报修', status: '待复核' },
    { id: 6, canteenId: 1, date: '2026-07-19', area: '粗加工间', inspector: '刘志强', item: '生熟分开/水槽使用', result: '正常', problem: '', status: '已完成' }
  ],

  // 食安巡查（环境卫生/加工操作/人员卫生/设施设备）
  safetyInspects: [
    { id: 1, canteenId: 1, date: '2026-07-21', time: '09:00', inspector: '李秀英', category: '人员卫生', finding: '个别人员工作帽佩戴不规范', level: '中', handler: '陈小梅', status: '已整改' },
    { id: 2, canteenId: 1, date: '2026-07-20', time: '14:30', inspector: '李秀英', category: '加工操作', finding: '生熟砧板混用，已现场纠正', level: '高', handler: '刘志强', status: '已整改' },
    { id: 3, canteenId: 1, date: '2026-07-20', time: '10:15', inspector: '李秀英', category: '环境卫生', finding: '仓库角落有轻微积水，已清理', level: '低', handler: '陈小梅', status: '已整改' },
    { id: 4, canteenId: 2, date: '2026-07-21', time: '08:40', inspector: '王大明', category: '设施设备', finding: '消毒柜温度显示偏低', level: '中', handler: '赵玉华', status: '待整改' },
    { id: 5, canteenId: 2, date: '2026-07-19', time: '16:00', inspector: '王大明', category: '人员卫生', finding: '健康证到期提醒已下发', level: '低', handler: '赵玉华', status: '已复核' }
  ],

  // 菜谱信息维护
  recipes: [
    { id: 1, canteenId: 1, mealType: '早餐', date: '2026-07-28', dishName: '皮蛋瘦肉粥', category: '主食', price: '3.0', status: '启用' },
    { id: 2, canteenId: 1, mealType: '午餐', date: '2026-07-28', dishName: '红烧肉', category: '荤菜', price: '10.0', status: '启用' },
    { id: 3, canteenId: 1, mealType: '午餐', date: '2026-07-28', dishName: '清炒时蔬', category: '素菜', price: '4.0', status: '启用' },
    { id: 4, canteenId: 1, mealType: '午餐', date: '2026-07-28', dishName: '紫菜蛋花汤', category: '汤品', price: '2.0', status: '启用' },
    { id: 5, canteenId: 1, mealType: '晚餐', date: '2026-07-28', dishName: '宫保鸡丁', category: '荤菜', price: '9.0', status: '启用' },
    { id: 6, canteenId: 2, mealType: '午餐', date: '2026-07-28', dishName: '糖醋里脊', category: '荤菜', price: '10.0', status: '启用' },
    { id: 7, canteenId: 2, mealType: '午餐', date: '2026-07-28', dishName: '番茄炒蛋', category: '荤菜', price: '6.0', status: '启用' },
    { id: 8, canteenId: 2, mealType: '晚餐', date: '2026-07-27', dishName: '凉拌黄瓜', category: '素菜', price: '3.0', status: '停用' }
  ]
};

// 工具函数
const DataStore = {
  get(key) {
    const data = localStorage.getItem('smartFoodSafety_' + key);
    return data ? JSON.parse(data) : null;
  },
  set(key, value) {
    localStorage.setItem('smartFoodSafety_' + key, JSON.stringify(value));
  },
  init() {
    if (!this.get('initialized')) {
      this.set('users', MOCK_DATA.users);
      this.set('canteens', MOCK_DATA.canteens);
      this.set('devices', MOCK_DATA.devices);
      this.set('alerts', MOCK_DATA.alerts);
      this.set('samples', MOCK_DATA.samples);
      this.set('personnel', MOCK_DATA.personnel);
      this.set('checks', MOCK_DATA.checks);
      this.set('access', MOCK_DATA.access);
      this.set('accessLogs', MOCK_DATA.accessLogs);
      this.set('cameras', MOCK_DATA.cameras);
      this.set('menus', MOCK_DATA.menus);
      this.set('notices', MOCK_DATA.notices);
      this.set('roles', MOCK_DATA.roles);
      this.set('sysParams', MOCK_DATA.sysParams);
      this.set('ledgers', MOCK_DATA.ledgers);
      this.set('patrols', MOCK_DATA.patrols);
      this.set('safetyInspects', MOCK_DATA.safetyInspects);
      this.set('recipes', MOCK_DATA.recipes);
      this.set('initialized', true);
    } else if (!this.get('roles')) {
      this.set('roles', MOCK_DATA.roles);
    }
    if (!this.get('ledgers')) this.set('ledgers', MOCK_DATA.ledgers);
    if (!this.get('patrols')) this.set('patrols', MOCK_DATA.patrols);
    if (!this.get('safetyInspects')) this.set('safetyInspects', MOCK_DATA.safetyInspects);
    if (!this.get('recipes')) this.set('recipes', MOCK_DATA.recipes);
    if (!this.get('sysParams')) {
      this.set('sysParams', MOCK_DATA.sysParams);
    }
    // 数据版本迁移：确保预警数据包含待审核记录，角色数据包含权限
    const DATA_VERSION = '2026-07-26-v6';
    if (this.get('dataVersion') !== DATA_VERSION) {
      this.set('alerts', MOCK_DATA.alerts);
      this.set('roles', MOCK_DATA.roles);
      this.set('recipes', MOCK_DATA.recipes);
      this.set('dataVersion', DATA_VERSION);
    }
  },
  getAll() {
    return {
      users: this.get('users') || MOCK_DATA.users,
      canteens: this.get('canteens') || MOCK_DATA.canteens,
      devices: this.get('devices') || MOCK_DATA.devices,
      alerts: this.get('alerts') || MOCK_DATA.alerts,
      samples: this.get('samples') || MOCK_DATA.samples,
      personnel: this.get('personnel') || MOCK_DATA.personnel,
      checks: this.get('checks') || MOCK_DATA.checks,
      access: this.get('access') || MOCK_DATA.access,
      accessLogs: this.get('accessLogs') || MOCK_DATA.accessLogs,
      cameras: this.get('cameras') || MOCK_DATA.cameras,
      menus: this.get('menus') || MOCK_DATA.menus,
      notices: this.get('notices') || MOCK_DATA.notices,
      roles: this.get('roles') || MOCK_DATA.roles,
      sysParams: this.get('sysParams') || MOCK_DATA.sysParams,
      ledgers: this.get('ledgers') || MOCK_DATA.ledgers,
      patrols: this.get('patrols') || MOCK_DATA.patrols,
      safetyInspects: this.get('safetyInspects') || MOCK_DATA.safetyInspects,
      recipes: this.get('recipes') || MOCK_DATA.recipes
    };
  }
};

// 全局数据引用
let DB = DataStore.getAll();

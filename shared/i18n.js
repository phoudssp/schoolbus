// SafeRide — minimal i18n. All UI text passes through t().
// Languages: en (English), lo (Lao). Toggle persists in localStorage.

window.APP_I18N = {
  en: {
    // Brand
    brand: 'SafeRide',
    tagline: 'Safe school transport, end to end.',

    // Common
    today: 'Today',
    morning: 'Morning',
    afternoon: 'Afternoon',
    school: 'School',
    schools: 'Schools',
    student: 'Student',
    students: 'Students',
    bus: 'Bus',
    buses: 'Buses',
    driver: 'Driver',
    drivers: 'Drivers',
    parent: 'Parent',
    guardian: 'Guardian',
    route: 'Route',
    run: 'Run',
    stop: 'Stop',
    stops: 'Stops',
    time: 'Time',
    status: 'Status',
    alerts: 'Alerts',
    notifications: 'Notifications',
    home: 'Home',
    back: 'Back',
    settings: 'Settings',
    language: 'Language',
    profile: 'Profile',
    eta: 'ETA',
    minutes: 'min',
    onSchedule: 'On schedule',
    late: 'Late',
    delayed: 'Delayed',
    completed: 'Completed',
    inTransit: 'In transit',
    atStop: 'At stop',
    idle: 'Idle',
    starting: 'Starting',
    notStarted: 'Not started',
    boarded: 'Boarded',
    exited: 'Exited',
    arrived: 'Arrived at school',
    droppedOff: 'Dropped off at home',
    expected: 'Expected',
    scanned: 'Scanned',
    scan: 'Scan',
    scanned_count: 'scanned',
    of: 'of',
    boardingCount: 'Boarded',

    // Roles
    operator: 'Operator',
    dispatcher: 'Dispatcher',
    schoolAdmin: 'School Admin',
    parentApp: 'Parent App',
    driverApp: 'Driver App',
    operatorApp: 'Operator Dashboard',
    schoolApp: 'School Dashboard',

    // Landing
    landingTitle: 'SafeRide School Bus Platform',
    landingSubtitle: 'A safer, simpler way to run school transport across many schools.',
    seePresentation: 'View Presentation',
    tryApps: 'Try the Apps',
    forOperator: 'For the Bus Company',
    forOperatorDesc: 'Live fleet view across every school you serve. One dashboard, total control.',
    forDriver: 'For Drivers',
    forDriverDesc: 'Tablet-first app: today\'s route, manifest, one-tap QR scan, end-of-route check.',
    forParent: 'For Parents',
    forParentDesc: 'Live bus location, instant notifications when your child boards or arrives.',
    forSchool: 'For Schools',
    forSchoolDesc: 'See which buses arrived, who\'s on board, and reconcile attendance in seconds.',
    openApp: 'Open',

    // Operator dashboard
    fleetOverview: 'Fleet Overview',
    activeBuses: 'Active buses',
    studentsTransported: 'Students transported today',
    eventsToday: 'Events today',
    onTimeRate: 'On-time rate',
    schoolsServed: 'Schools served',
    liveMap: 'Live Fleet Map',
    busList: 'Bus List',
    filterBySchool: 'Filter by school',
    allSchools: 'All schools',
    currentRun: 'Current run',
    nextStop: 'Next stop',
    onBoard: 'On board',
    todaySchedule: 'Today\'s schedule',
    incidentLog: 'Incident log',
    runDetails: 'Run details',
    departed: 'Departed',
    expectedArrival: 'Expected arrival',
    busDetails: 'Bus details',
    callDriver: 'Call driver',
    messageDriver: 'Message driver',

    // Driver app
    preTripCheck: 'Pre-trip inspection',
    preTripDone: 'Pre-trip complete',
    startRoute: 'Start route',
    nextStopIn: 'Next stop in',
    walkBus: 'Walk the bus',
    walkBusConfirm: 'I have walked the bus. No children remain.',
    completeRun: 'Complete run',
    runComplete: 'Run complete',
    boardScan: 'Board scan',
    exitScan: 'Exit scan',
    tapToScan: 'Tap to simulate scan',
    manualBoard: 'Manual board',
    manifestStop: 'Stop manifest',
    headcount: 'Headcount',
    expectedHere: 'Expected here',
    noShow: 'No-show',
    markNoShow: 'Mark no-show',
    forgotCard: 'Forgot card',
    selectFromRoster: 'Select from roster',
    pretrip: {
      brakes: 'Brakes',
      lights: 'Lights & signals',
      mirrors: 'Mirrors',
      tires: 'Tires',
      stopArm: 'Stop arm',
      doors: 'Doors',
      seatbelts: 'Seatbelts',
      emergency: 'Emergency exit'
    },

    // Parent app
    yourChildren: 'Your children',
    todayStatus: 'Today\'s status',
    timeline: 'Timeline',
    nextEvent: 'Next event',
    busApproachingStop: 'Bus approaching your stop',
    childBoarded: 'Boarded',
    childArrivedSchool: 'Arrived at school',
    childBoardedReturn: 'Boarded for home',
    childDroppedOff: 'Dropped off at home',
    youAreHere: 'You are here',
    minutesAway: 'min away',
    busNumber: 'Bus',
    driverName: 'Driver',
    callSchool: 'Call school',
    callOperator: 'Call bus company',
    onBus: 'On the bus',
    atSchool: 'At school',
    atHome: 'At home',
    waitingAtHome: 'Waiting at home',

    // School admin
    todayBuses: 'Today\'s incoming buses',
    arrivedAt: 'Arrived',
    pending: 'Pending',
    studentLookup: 'Student lookup',
    searchStudents: 'Search students…',
    busAttendance: 'Bus attendance',
    classroomAttendance: 'Classroom attendance',
    discrepancies: 'Discrepancies',
    presentBus: 'Present (bus)',
    absent: 'Absent',
    incidents: 'Incidents',
    noIncidents: 'No incidents today',

    // Presentation
    pitchTitle: 'SafeRide',
    pitchSubtitle: 'A modern school bus platform for bus companies serving many schools.',
    slideProblemTitle: 'The problem',
    slideSolutionTitle: 'Our solution',
    slideHowItWorksTitle: 'How it works',
    slide4EventsTitle: 'The 4 events that matter',
    slideAppsTitle: 'Four apps, one platform',
    slideSafetyTitle: 'Safety built-in',
    slideWhyTitle: 'Why SafeRide',
    slideAskTitle: 'Let\'s pilot it',

    // Misc
    poweredBy: 'Powered by',
    languageSwitch: 'ລາວ',
    appReady: 'App ready',
    demoNote: 'Prototype — mock data',
    mins: 'min',
    seconds: 'sec'
  },

  lo: {
    brand: 'SafeRide',
    tagline: 'ການເດີນທາງໄປໂຮງຮຽນທີ່ປອດໄພ ແລະ ງ່າຍດາຍ.',

    today: 'ມື້ນີ້',
    morning: 'ເຊົ້າ',
    afternoon: 'ແລງ',
    school: 'ໂຮງຮຽນ',
    schools: 'ໂຮງຮຽນ',
    student: 'ນັກຮຽນ',
    students: 'ນັກຮຽນ',
    bus: 'ລົດເມ',
    buses: 'ລົດເມ',
    driver: 'ຄົນຂັບ',
    drivers: 'ຄົນຂັບ',
    parent: 'ຜູ້ປົກຄອງ',
    guardian: 'ຜູ້ປົກຄອງ',
    route: 'ເສັ້ນທາງ',
    run: 'ຮອບ',
    stop: 'ປ້າຍຈອດ',
    stops: 'ປ້າຍຈອດ',
    time: 'ເວລາ',
    status: 'ສະຖານະ',
    alerts: 'ການແຈ້ງເຕືອນ',
    notifications: 'ການແຈ້ງເຕືອນ',
    home: 'ໜ້າຫຼັກ',
    back: 'ກັບຄືນ',
    settings: 'ການຕັ້ງຄ່າ',
    language: 'ພາສາ',
    profile: 'ໂປຣໄຟລ໌',
    eta: 'ເວລາມາຮອດ',
    minutes: 'ນາທີ',
    onSchedule: 'ຕາມເວລາ',
    late: 'ຊ້າ',
    delayed: 'ຊັກຊ້າ',
    completed: 'ສຳເລັດ',
    inTransit: 'ກຳລັງເດີນທາງ',
    atStop: 'ຢູ່ປ້າຍຈອດ',
    idle: 'ບໍ່ໄດ້ໃຊ້ງານ',
    starting: 'ກຳລັງເລີ່ມ',
    notStarted: 'ຍັງບໍ່ເລີ່ມ',
    boarded: 'ຂຶ້ນລົດແລ້ວ',
    exited: 'ລົງລົດແລ້ວ',
    arrived: 'ມາຮອດໂຮງຮຽນແລ້ວ',
    droppedOff: 'ສົ່ງເຖິງບ້ານແລ້ວ',
    expected: 'ຄາດໝາຍ',
    scanned: 'ສະແກນແລ້ວ',
    scan: 'ສະແກນ',
    scanned_count: 'ສະແກນແລ້ວ',
    of: 'ຈາກ',
    boardingCount: 'ຂຶ້ນລົດແລ້ວ',

    operator: 'ຜູ້ດຳເນີນການ',
    dispatcher: 'ຜູ້ຄວບຄຸມ',
    schoolAdmin: 'ຜູ້ຈັດການໂຮງຮຽນ',
    parentApp: 'ແອັບຜູ້ປົກຄອງ',
    driverApp: 'ແອັບຄົນຂັບ',
    operatorApp: 'ໜ້າຄວບຄຸມຜູ້ດຳເນີນການ',
    schoolApp: 'ໜ້າຄວບຄຸມໂຮງຮຽນ',

    landingTitle: 'ລະບົບລົດເມໂຮງຮຽນ SafeRide',
    landingSubtitle: 'ວິທີໃໝ່ ປອດໄພ ແລະ ງ່າຍດາຍ ໃນການບໍລິຫານລົດເມໂຮງຮຽນຫຼາຍແຫ່ງ.',
    seePresentation: 'ເບິ່ງການນຳສະເໜີ',
    tryApps: 'ລອງໃຊ້ແອັບ',
    forOperator: 'ສຳລັບບໍລິສັດລົດເມ',
    forOperatorDesc: 'ເບິ່ງລົດທຸກຄັນແບບສົດໆ ທົ່ວທຸກໂຮງຮຽນ. ໜ້າຄວບຄຸມດຽວ ຄວບຄຸມທັງໝົດ.',
    forDriver: 'ສຳລັບຄົນຂັບ',
    forDriverDesc: 'ແອັບສຳລັບແທັບເລັດ: ເສັ້ນທາງມື້ນີ້, ລາຍຊື່ນັກຮຽນ, ສະແກນ QR ດ້ວຍປຸ່ມດຽວ.',
    forParent: 'ສຳລັບຜູ້ປົກຄອງ',
    forParentDesc: 'ເບິ່ງຕຳແໜ່ງລົດສົດໆ ແລະ ແຈ້ງເຕືອນທັນທີເມື່ອລູກຂຶ້ນລົດ ຫຼື ມາຮອດໂຮງຮຽນ.',
    forSchool: 'ສຳລັບໂຮງຮຽນ',
    forSchoolDesc: 'ເບິ່ງລົດທີ່ມາຮອດແລ້ວ ໃຜຢູ່ໃນລົດ ແລະ ກວດສອບການເຂົ້າຮຽນໄດ້ທັນທີ.',
    openApp: 'ເປີດ',

    fleetOverview: 'ພາບລວມລົດທັງໝົດ',
    activeBuses: 'ລົດທີ່ກຳລັງແລ່ນ',
    studentsTransported: 'ນັກຮຽນທີ່ສົ່ງມື້ນີ້',
    eventsToday: 'ເຫດການມື້ນີ້',
    onTimeRate: 'ອັດຕາຕາມເວລາ',
    schoolsServed: 'ໂຮງຮຽນທີ່ບໍລິການ',
    liveMap: 'ແຜນທີ່ລົດສົດໆ',
    busList: 'ລາຍຊື່ລົດ',
    filterBySchool: 'ກັ່ນຕອງຕາມໂຮງຮຽນ',
    allSchools: 'ທຸກໂຮງຮຽນ',
    currentRun: 'ຮອບປະຈຸບັນ',
    nextStop: 'ປ້າຍຈອດຕໍ່ໄປ',
    onBoard: 'ຢູ່ໃນລົດ',
    todaySchedule: 'ຕາຕະລາງມື້ນີ້',
    incidentLog: 'ບັນທຶກເຫດການ',
    runDetails: 'ລາຍລະອຽດຮອບ',
    departed: 'ອອກແລ້ວ',
    expectedArrival: 'ຄາດວ່າຈະມາຮອດ',
    busDetails: 'ລາຍລະອຽດລົດ',
    callDriver: 'ໂທຫາຄົນຂັບ',
    messageDriver: 'ສົ່ງຂໍ້ຄວາມຫາຄົນຂັບ',

    preTripCheck: 'ກວດກາກ່ອນອອກລົດ',
    preTripDone: 'ກວດກາສຳເລັດ',
    startRoute: 'ເລີ່ມເສັ້ນທາງ',
    nextStopIn: 'ປ້າຍຈອດຕໍ່ໄປໃນອີກ',
    walkBus: 'ກວດກາພາຍໃນລົດ',
    walkBusConfirm: 'ຂ້ອຍໄດ້ກວດກາພາຍໃນລົດແລ້ວ ບໍ່ມີນັກຮຽນຄ້າງຢູ່.',
    completeRun: 'ສຳເລັດຮອບ',
    runComplete: 'ຮອບສຳເລັດແລ້ວ',
    boardScan: 'ສະແກນຂຶ້ນລົດ',
    exitScan: 'ສະແກນລົງລົດ',
    tapToScan: 'ກົດເພື່ອຈຳລອງການສະແກນ',
    manualBoard: 'ຂຶ້ນລົດແບບກຳເອງ',
    manifestStop: 'ລາຍຊື່ປ້າຍຈອດ',
    headcount: 'ຈຳນວນຄົນ',
    expectedHere: 'ຄາດໝາຍຢູ່ນີ້',
    noShow: 'ບໍ່ມາ',
    markNoShow: 'ໝາຍວ່າບໍ່ມາ',
    forgotCard: 'ລືມບັດ',
    selectFromRoster: 'ເລືອກຈາກລາຍຊື່',
    pretrip: {
      brakes: 'ເບຣກ',
      lights: 'ໄຟ ແລະ ສັນຍານ',
      mirrors: 'ກະຈົກສ່ອງ',
      tires: 'ຍາງ',
      stopArm: 'ປ້າຍຢຸດ',
      doors: 'ປະຕູ',
      seatbelts: 'ສາຍຮັດປອດໄພ',
      emergency: 'ປະຕູສຸກເສີນ'
    },

    yourChildren: 'ລູກຂອງທ່ານ',
    todayStatus: 'ສະຖານະມື້ນີ້',
    timeline: 'ໄລຍະເວລາ',
    nextEvent: 'ເຫດການຕໍ່ໄປ',
    busApproachingStop: 'ລົດກຳລັງໃກ້ຮອດປ້າຍຈອດ',
    childBoarded: 'ຂຶ້ນລົດແລ້ວ',
    childArrivedSchool: 'ມາຮອດໂຮງຮຽນແລ້ວ',
    childBoardedReturn: 'ຂຶ້ນລົດກັບບ້ານແລ້ວ',
    childDroppedOff: 'ສົ່ງເຖິງບ້ານແລ້ວ',
    youAreHere: 'ທ່ານຢູ່ນີ້',
    minutesAway: 'ນາທີຈະຮອດ',
    busNumber: 'ລົດເລກ',
    driverName: 'ຄົນຂັບ',
    callSchool: 'ໂທຫາໂຮງຮຽນ',
    callOperator: 'ໂທຫາບໍລິສັດລົດ',
    onBus: 'ຢູ່ໃນລົດ',
    atSchool: 'ຢູ່ໂຮງຮຽນ',
    atHome: 'ຢູ່ບ້ານ',
    waitingAtHome: 'ກຳລັງລໍຖ້າຢູ່ບ້ານ',

    todayBuses: 'ລົດທີ່ຈະມາມື້ນີ້',
    arrivedAt: 'ມາຮອດເມື່ອ',
    pending: 'ກຳລັງລໍ',
    studentLookup: 'ຄົ້ນຫານັກຮຽນ',
    searchStudents: 'ຄົ້ນຫານັກຮຽນ…',
    busAttendance: 'ລົດເຂົ້າຮຽນ',
    classroomAttendance: 'ການເຂົ້າຫ້ອງຮຽນ',
    discrepancies: 'ບໍ່ກົງກັນ',
    presentBus: 'ມາ (ລົດ)',
    absent: 'ຂາດ',
    incidents: 'ເຫດການ',
    noIncidents: 'ບໍ່ມີເຫດການມື້ນີ້',

    pitchTitle: 'SafeRide',
    pitchSubtitle: 'ລະບົບລົດເມໂຮງຮຽນທັນສະໄໝ ສຳລັບບໍລິສັດທີ່ບໍລິການຫຼາຍໂຮງຮຽນ.',
    slideProblemTitle: 'ບັນຫາ',
    slideSolutionTitle: 'ທາງອອກຂອງພວກເຮົາ',
    slideHowItWorksTitle: 'ມັນເຮັດວຽກແນວໃດ',
    slide4EventsTitle: '4 ເຫດການຫຼັກ',
    slideAppsTitle: 'ສີ່ແອັບ ໃນລະບົບດຽວ',
    slideSafetyTitle: 'ຄວາມປອດໄພທີ່ສ້າງມາໃນຕົວ',
    slideWhyTitle: 'ເປັນຫຍັງຕ້ອງ SafeRide',
    slideAskTitle: 'ມາທົດລອງນຳກັນ',

    poweredBy: 'ສ້າງໂດຍ',
    languageSwitch: 'EN',
    appReady: 'ແອັບພ້ອມໃຊ້ງານ',
    demoNote: 'ຕົວຢ່າງ — ຂໍ້ມູນຈຳລອງ',
    mins: 'ນາທີ',
    seconds: 'ວິ'
  }
};

window.APP_LANG = localStorage.getItem('saferide_lang') || 'en';

window.t = function(key) {
  const parts = key.split('.');
  let v = APP_I18N[APP_LANG] || APP_I18N.en;
  for (const p of parts) v = (v || {})[p];
  if (v == null) {
    let f = APP_I18N.en;
    for (const p of parts) f = (f || {})[p];
    return f != null ? f : key;
  }
  return v;
};

window.setLang = function(lang) {
  if (!APP_I18N[lang]) return;
  APP_LANG = lang;
  localStorage.setItem('saferide_lang', lang);
  document.documentElement.setAttribute('lang', lang);
  // Re-translate any element with [data-i18n]
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
  });
  // Notify pages that maintain dynamic content
  window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
};

window.toggleLang = function() {
  setLang(APP_LANG === 'en' ? 'lo' : 'en');
};

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.setAttribute('lang', APP_LANG);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
  });
});

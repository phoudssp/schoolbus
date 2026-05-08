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
    seconds: 'sec',

    // Top nav (operator app sections)
    nav: {
      dashboard: 'Dashboard',
      manage: 'Manage',
      billing: 'Billing',
      reports: 'Reports'
    },

    // Manage hub
    manage: {
      title: 'Manage',
      subtitle: 'Schools, fleet, people, and plans — everything you administer.',
      schoolsCard: 'Schools',
      schoolsDesc: 'Schools you serve. Edit address, bell schedule, contacts.',
      busesCard: 'Buses',
      busesDesc: 'Fleet roster — plates, capacity, status, last service.',
      driversCard: 'Drivers',
      driversDesc: 'Drivers, licenses, assignments, leave status.',
      studentsCard: 'Students',
      studentsDesc: 'Roster across all schools. Register, edit, generate QR cards.',
      parentsCard: 'Parent accounts',
      parentsDesc: 'Parent app accounts. Invite, reset password, suspend.',
      plansCard: 'Subscription plans',
      plansDesc: 'Pricing tiers and features your customers can choose.'
    },

    // CRUD common
    crud: {
      add: 'Add',
      edit: 'Edit',
      delete: 'Delete',
      archive: 'Archive',
      save: 'Save',
      cancel: 'Cancel',
      close: 'Close',
      search: 'Search…',
      filter: 'Filter',
      none: 'None',
      yes: 'Yes',
      no: 'No',
      confirm: 'Confirm',
      confirmDelete: 'Are you sure you want to delete this?',
      saved: 'Saved',
      deleted: 'Deleted',
      created: 'Created',
      sent: 'Sent',
      copied: 'Copied'
    },

    // Schools page
    schoolsPage: {
      title: 'Schools',
      subtitle: 'School customers served by your fleet.',
      addSchool: 'Add school',
      name: 'School name',
      nameLo: 'Lao name',
      address: 'Address',
      bellAm: 'AM bell',
      bellPm: 'PM bell',
      color: 'Map color',
      students: 'Students',
      coordinates: 'Coordinates'
    },

    // Buses page
    busesPage: {
      title: 'Buses',
      subtitle: 'Your fleet — plates, capacities, status.',
      addBus: 'Add bus',
      busId: 'Bus ID',
      plate: 'Plate',
      capacity: 'Capacity',
      year: 'Year',
      lastService: 'Last service',
      notes: 'Notes',
      decommission: 'Decommission'
    },

    // Drivers page
    driversPage: {
      title: 'Drivers',
      subtitle: 'Driver roster, licenses, and assignments.',
      addDriver: 'Add driver',
      driverName: 'Full name',
      phone: 'Phone',
      license: 'License #',
      licenseExpiry: 'License expiry',
      hiredAt: 'Hired',
      assignedBus: 'Assigned bus',
      onLeave: 'On leave',
      inactive: 'Inactive'
    },

    // Students page
    studentsPage: {
      title: 'Students',
      subtitle: 'All registered students across your schools.',
      registerStudent: 'Register student',
      studentName: 'Full name',
      grade: 'Grade',
      stop: 'Home stop',
      qr: 'QR card',
      printQr: 'Print QR card',
      generateQr: 'Generate QR',
      regenerateQr: 'Regenerate token',
      linkGuardian: 'Link to guardian'
    },

    // Parents page
    parentsPage: {
      title: 'Parent accounts',
      subtitle: 'Login accounts that parents use to access the app.',
      addParent: 'Add parent',
      parentName: 'Parent name',
      email: 'Email',
      phone: 'Phone',
      children: 'Children',
      account: 'Account',
      lastLogin: 'Last login',
      sendInvite: 'Send invite',
      resetPassword: 'Reset password',
      activeAccount: 'Active',
      invitedAccount: 'Invited',
      suspendedAccount: 'Suspended',
      neverLoggedIn: 'Never logged in',
      inviteSent: 'Invitation sent',
      passwordReset: 'Password reset link sent'
    },

    // Plans page
    plansPage: {
      title: 'Subscription plans',
      subtitle: 'Pricing tiers your school customers subscribe to.',
      addPlan: 'Add plan',
      planName: 'Plan name',
      pricePerStudent: 'Price per student / month',
      features: 'Features',
      schoolsOnPlan: 'Schools on this plan',
      duplicate: 'Duplicate'
    },

    // Billing
    billing: {
      title: 'Billing & Subscriptions',
      mrr: 'Monthly recurring revenue',
      activeSubs: 'Active subscriptions',
      outstanding: 'Outstanding',
      studentsBilled: 'Students billed',
      revenueTrend: 'Revenue — last 6 months',
      subscriptions: 'School subscriptions',
      school: 'School',
      plan: 'Plan',
      students: 'Students',
      perStudent: 'per student',
      monthly: 'Monthly',
      status: 'Status',
      renewsOn: 'Renews on',
      manage: 'Manage',
      invoices: 'Recent invoices',
      invoiceNo: 'Invoice #',
      period: 'Period',
      amount: 'Amount',
      issued: 'Issued',
      due: 'Due',
      paidOn: 'Paid',
      action: 'Action',
      view: 'View',
      download: 'Download',
      paid: 'Paid',
      pending: 'Pending',
      overdue: 'Overdue',
      active: 'Active',
      trial: 'Trial',
      expired: 'Expired',
      autoRenew: 'Auto-renew',
      upcomingRenewals: 'Upcoming renewals',
      noRenewals: 'No renewals in the next 30 days',
      newSchool: 'Add school',
      planStandard: 'Standard',
      planPremium: 'Premium',
      planEnterprise: 'Enterprise'
    },

    // Reports
    reports: {
      title: 'Reports',
      subtitle: 'Generate and export operational, safety, and financial reports.',
      catOps: 'Operations',
      catSafety: 'Safety',
      catFinance: 'Finance',
      catSchool: 'School-specific',
      generate: 'Generate',
      preview: 'Preview',
      eventsToday: 'Events today',
      transportedToday: 'Students transported today',
      onTimePerf: 'On-time this week',
      incidentsMonth: 'Incidents this month',
      previewTitle: 'This week — daily ridership',
      date: 'Date',
      boarded: 'Boarded',
      exited: 'Exited',
      ontimePct: 'On-time %',
      lastRun: 'Last generated',
      never: 'Never',
      formatPdf: 'PDF',
      formatCsv: 'CSV',
      formatXlsx: 'XLSX',
      generated: 'Report generated'
    }
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
    seconds: 'ວິ',

    // Top nav
    nav: {
      dashboard: 'ໜ້າຄວບຄຸມ',
      manage: 'ຈັດການ',
      billing: 'ການເງິນ',
      reports: 'ລາຍງານ'
    },

    // Manage hub
    manage: {
      title: 'ຈັດການ',
      subtitle: 'ໂຮງຮຽນ, ລົດ, ຄົນ ແລະ ແພັກເກັດ — ທຸກຢ່າງທີ່ທ່ານຄຸ້ມຄອງ.',
      schoolsCard: 'ໂຮງຮຽນ',
      schoolsDesc: 'ໂຮງຮຽນທີ່ທ່ານໃຫ້ບໍລິການ. ແກ້ໄຂທີ່ຢູ່, ເວລາໂຮງຮຽນ, ຕິດຕໍ່.',
      busesCard: 'ລົດ',
      busesDesc: 'ລາຍຊື່ລົດ — ປ້າຍທະບຽນ, ຄວາມຈຸ, ສະຖານະ.',
      driversCard: 'ຄົນຂັບ',
      driversDesc: 'ຄົນຂັບ, ໃບອະນຸຍາດ, ການມອບໝາຍ.',
      studentsCard: 'ນັກຮຽນ',
      studentsDesc: 'ນັກຮຽນທຸກຄົນທົ່ວທຸກໂຮງຮຽນ. ລົງທະບຽນ, ແກ້ໄຂ, ສ້າງບັດ QR.',
      parentsCard: 'ບັນຊີຜູ້ປົກຄອງ',
      parentsDesc: 'ບັນຊີສຳລັບແອັບຜູ້ປົກຄອງ. ເຊີນ, ຣີເຊັດລະຫັດ, ໂຈະ.',
      plansCard: 'ແພັກເກັດການສະໝັກ',
      plansDesc: 'ລະດັບລາຄາ ແລະ ຄຸນສົມບັດທີ່ລູກຄ້າເລືອກໄດ້.'
    },

    // CRUD common
    crud: {
      add: 'ເພີ່ມ',
      edit: 'ແກ້ໄຂ',
      delete: 'ລຶບ',
      archive: 'ຈັດເກັບ',
      save: 'ບັນທຶກ',
      cancel: 'ຍົກເລີກ',
      close: 'ປິດ',
      search: 'ຄົ້ນຫາ…',
      filter: 'ກັ່ນຕອງ',
      none: 'ບໍ່ມີ',
      yes: 'ແມ່ນ',
      no: 'ບໍ່ແມ່ນ',
      confirm: 'ຢືນຢັນ',
      confirmDelete: 'ທ່ານແນ່ໃຈວ່າຕ້ອງການລຶບແທ້ບໍ?',
      saved: 'ບັນທຶກແລ້ວ',
      deleted: 'ລຶບແລ້ວ',
      created: 'ສ້າງແລ້ວ',
      sent: 'ສົ່ງແລ້ວ',
      copied: 'ສຳເນົາແລ້ວ'
    },

    // Schools
    schoolsPage: {
      title: 'ໂຮງຮຽນ',
      subtitle: 'ໂຮງຮຽນທີ່ໃຊ້ບໍລິການລົດຂອງທ່ານ.',
      addSchool: 'ເພີ່ມໂຮງຮຽນ',
      name: 'ຊື່ໂຮງຮຽນ (ອັງກິດ)',
      nameLo: 'ຊື່ໂຮງຮຽນ (ລາວ)',
      address: 'ທີ່ຢູ່',
      bellAm: 'ຣະຄັງເຊົ້າ',
      bellPm: 'ຣະຄັງແລງ',
      color: 'ສີໃນແຜນທີ່',
      students: 'ນັກຮຽນ',
      coordinates: 'ພິກັດ'
    },

    busesPage: {
      title: 'ລົດ',
      subtitle: 'ກອງລົດຂອງທ່ານ — ປ້າຍທະບຽນ, ຄວາມຈຸ, ສະຖານະ.',
      addBus: 'ເພີ່ມລົດ',
      busId: 'ລະຫັດລົດ',
      plate: 'ປ້າຍທະບຽນ',
      capacity: 'ຄວາມຈຸ',
      year: 'ປີ',
      lastService: 'ບຳລຸງຮັກສາລ່າສຸດ',
      notes: 'ໝາຍເຫດ',
      decommission: 'ປົດປ່ອຍ'
    },

    driversPage: {
      title: 'ຄົນຂັບ',
      subtitle: 'ລາຍຊື່ຄົນຂັບ ແລະ ໃບອະນຸຍາດ.',
      addDriver: 'ເພີ່ມຄົນຂັບ',
      driverName: 'ຊື່ເຕັມ',
      phone: 'ໂທລະສັບ',
      license: 'ເລກໃບອະນຸຍາດ',
      licenseExpiry: 'ວັນໝົດອາຍຸ',
      hiredAt: 'ຈ້າງເມື່ອ',
      assignedBus: 'ລົດທີ່ມອບໝາຍ',
      onLeave: 'ລາພັກ',
      inactive: 'ບໍ່ໃຊ້ງານ'
    },

    studentsPage: {
      title: 'ນັກຮຽນ',
      subtitle: 'ນັກຮຽນທຸກຄົນທີ່ລົງທະບຽນຢູ່ໃນທຸກໂຮງຮຽນ.',
      registerStudent: 'ລົງທະບຽນນັກຮຽນ',
      studentName: 'ຊື່ເຕັມ',
      grade: 'ຊັ້ນ',
      stop: 'ປ້າຍຈອດທີ່ບ້ານ',
      qr: 'ບັດ QR',
      printQr: 'ພິມບັດ QR',
      generateQr: 'ສ້າງ QR',
      regenerateQr: 'ສ້າງລະຫັດໃໝ່',
      linkGuardian: 'ເຊື່ອມຕໍ່ກັບຜູ້ປົກຄອງ'
    },

    parentsPage: {
      title: 'ບັນຊີຜູ້ປົກຄອງ',
      subtitle: 'ບັນຊີລ໋ອກອິນທີ່ຜູ້ປົກຄອງໃຊ້ເຂົ້າແອັບ.',
      addParent: 'ເພີ່ມຜູ້ປົກຄອງ',
      parentName: 'ຊື່ຜູ້ປົກຄອງ',
      email: 'ອີເມວ',
      phone: 'ໂທລະສັບ',
      children: 'ລູກ',
      account: 'ບັນຊີ',
      lastLogin: 'ເຂົ້າຊົມລ່າສຸດ',
      sendInvite: 'ສົ່ງຄຳເຊີນ',
      resetPassword: 'ຣີເຊັດລະຫັດຜ່ານ',
      activeAccount: 'ໃຊ້ງານ',
      invitedAccount: 'ເຊີນແລ້ວ',
      suspendedAccount: 'ໂຈະ',
      neverLoggedIn: 'ຍັງບໍ່ເຄີຍເຂົ້າ',
      inviteSent: 'ສົ່ງຄຳເຊີນແລ້ວ',
      passwordReset: 'ສົ່ງລິ້ງຣີເຊັດລະຫັດແລ້ວ'
    },

    plansPage: {
      title: 'ແພັກເກັດການສະໝັກ',
      subtitle: 'ລະດັບລາຄາທີ່ໂຮງຮຽນລູກຄ້າສະໝັກ.',
      addPlan: 'ເພີ່ມແພັກເກັດ',
      planName: 'ຊື່ແພັກເກັດ',
      pricePerStudent: 'ລາຄາຕໍ່ນັກຮຽນ / ເດືອນ',
      features: 'ຄຸນສົມບັດ',
      schoolsOnPlan: 'ໂຮງຮຽນທີ່ໃຊ້ແພັກນີ້',
      duplicate: 'ສຳເນົາ'
    },

    // Billing
    billing: {
      title: 'ການເງິນ ແລະ ການສະໝັກໃຊ້ງານ',
      mrr: 'ລາຍຮັບປະຈຳເດືອນ',
      activeSubs: 'ການສະໝັກໃຊ້ງານ',
      outstanding: 'ຄ້າງຊຳລະ',
      studentsBilled: 'ນັກຮຽນທີ່ຄິດຄ່າ',
      revenueTrend: 'ລາຍຮັບ — 6 ເດືອນທີ່ຜ່ານມາ',
      subscriptions: 'ການສະໝັກໃຊ້ງານຂອງໂຮງຮຽນ',
      school: 'ໂຮງຮຽນ',
      plan: 'ແພັກເກັດ',
      students: 'ນັກຮຽນ',
      perStudent: 'ຕໍ່ນັກຮຽນ',
      monthly: 'ຕໍ່ເດືອນ',
      status: 'ສະຖານະ',
      renewsOn: 'ຕໍ່ອາຍຸວັນທີ',
      manage: 'ຈັດການ',
      invoices: 'ໃບເກັບເງິນຫຼ້າສຸດ',
      invoiceNo: 'ເລກໃບເກັບເງິນ',
      period: 'ໄລຍະ',
      amount: 'ຈຳນວນ',
      issued: 'ອອກໃບ',
      due: 'ກຳນົດ',
      paidOn: 'ຊຳລະ',
      action: 'ການກະທຳ',
      view: 'ເບິ່ງ',
      download: 'ດາວໂຫຼດ',
      paid: 'ຊຳລະແລ້ວ',
      pending: 'ກຳລັງລໍ',
      overdue: 'ເກີນກຳນົດ',
      active: 'ໃຊ້ງານ',
      trial: 'ທົດລອງ',
      expired: 'ໝົດອາຍຸ',
      autoRenew: 'ຕໍ່ອາຍຸອັດຕະໂນມັດ',
      upcomingRenewals: 'ການຕໍ່ອາຍຸທີ່ຈະມາເຖິງ',
      noRenewals: 'ບໍ່ມີການຕໍ່ອາຍຸໃນ 30 ວັນຕໍ່ໄປ',
      newSchool: 'ເພີ່ມໂຮງຮຽນ',
      planStandard: 'ມາດຕະຖານ',
      planPremium: 'ພຣີມຽມ',
      planEnterprise: 'ອົງກອນ'
    },

    // Reports
    reports: {
      title: 'ລາຍງານ',
      subtitle: 'ສ້າງ ແລະ ສົ່ງອອກລາຍງານການດຳເນີນງານ, ຄວາມປອດໄພ ແລະ ການເງິນ.',
      catOps: 'ການດຳເນີນງານ',
      catSafety: 'ຄວາມປອດໄພ',
      catFinance: 'ການເງິນ',
      catSchool: 'ສະເພາະໂຮງຮຽນ',
      generate: 'ສ້າງ',
      preview: 'ເບິ່ງຕົວຢ່າງ',
      eventsToday: 'ເຫດການມື້ນີ້',
      transportedToday: 'ນັກຮຽນທີ່ຮັບສົ່ງມື້ນີ້',
      onTimePerf: 'ມາຕາມເວລາ ອາທິດນີ້',
      incidentsMonth: 'ເຫດການເດືອນນີ້',
      previewTitle: 'ອາທິດນີ້ — ການເດີນທາງປະຈຳວັນ',
      date: 'ວັນທີ',
      boarded: 'ຂຶ້ນລົດ',
      exited: 'ລົງລົດ',
      ontimePct: '% ມາຕາມເວລາ',
      lastRun: 'ສ້າງລ່າສຸດ',
      never: 'ບໍ່ເຄີຍ',
      formatPdf: 'PDF',
      formatCsv: 'CSV',
      formatXlsx: 'XLSX',
      generated: 'ສ້າງລາຍງານແລ້ວ'
    }
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

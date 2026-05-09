// SafeRide — shared mock data for the prototype
// Geography: Vientiane, Laos. Center ~17.97, 102.61
// "Now" is fixed at 07:05 AM so most morning runs are mid-flight for a realistic demo.

window.APP_NOW = new Date('2026-05-07T07:05:00+07:00');

window.APP_DATA = {
  operator: {
    id: 'OP-1',
    name: 'Phetaloun SchoolBus',
    nameLo: 'ບໍລິສັດ Phetaloun ຂົນສົ່ງນັກຮຽນ',
    city: 'Houayxay, Bokeo',
    cityLo: 'ຫ້ວຍຊາຍ, ບໍ່ແກ້ວ',
    center: [20.2750, 100.4350],
    // Bokeo (Lao side) bounds — keep map east of the Mekong, never crosses to Thailand
    bounds: { sw: [20.2200, 100.4180], ne: [20.3200, 100.4800] },
    contact: { phone: '+856 84 555 0100', email: 'ops@phetaloun.la' }
  },

  schools: [
    {
      id: 'vis',
      name: 'Lycée Santiphab',
      nameLo: 'ໂຮງຮຽນລີເຊ ສັນຕິພາບ',
      shortName: 'LSB',
      address: 'Ban Houayxai Centre, Houayxay',
      coords: [20.2720, 100.4280],
      bellAm: '07:30',
      bellPm: '14:30',
      color: '#0E4D92',  // Phetaloun deep blue
      students: 320
    },
    {
      id: 'sgs',
      name: 'Huaysaiy High School',
      nameLo: 'ໂຮງຮຽນມັດທະຍົມຫ້ວຍຊາຍ',
      shortName: 'HHS',
      address: 'Ban Phadeng, Houayxay',
      coords: [20.2780, 100.4400],
      bellAm: '08:00',
      bellPm: '15:00',
      color: '#29ABE2',  // Phetaloun cyan
      students: 280
    },
    {
      id: 'pty',
      name: 'Bokeo Primary School',
      nameLo: 'ໂຮງຮຽນປະຖົມບໍ່ແກ້ວ',
      shortName: 'BPS',
      address: 'Ban Donphung, Houayxay',
      coords: [20.2680, 100.4470],
      bellAm: '08:30',
      bellPm: '15:30',
      color: '#10B981',  // green
      students: 200
    }
  ],

  buses: [
    { id: 'B-101', plate: 'ບກ-1234', capacity: 40, status: 'active' },
    { id: 'B-102', plate: 'ບກ-1567', capacity: 40, status: 'active' },
    { id: 'B-103', plate: 'ບກ-1890', capacity: 30, status: 'active' },
    { id: 'B-104', plate: 'ບກ-2134', capacity: 40, status: 'active' },
    { id: 'B-105', plate: 'ບກ-2456', capacity: 22, status: 'active', notes: 'Special needs / wheelchair-equipped' },
    { id: 'B-106', plate: 'ບກ-2789', capacity: 40, status: 'idle', notes: 'Backup bus' }
  ],

  drivers: [
    { id: 'D-001', name: 'Bounmy Phimmasone',     phone: '+856 20 5555 1234', avatar: '🧑‍✈️' },
    { id: 'D-002', name: 'Khamla Souvannavong',   phone: '+856 20 5555 2345', avatar: '👨‍✈️' },
    { id: 'D-003', name: 'Souksavanh Vongphachanh', phone: '+856 20 5555 3456', avatar: '🧑‍✈️' },
    { id: 'D-004', name: 'Phouvanh Inthavong',    phone: '+856 20 5555 4567', avatar: '👨‍✈️' },
    { id: 'D-005', name: 'Somphone Sisouphan',    phone: '+856 20 5555 5678', avatar: '🧑‍✈️' },
    { id: 'D-006', name: 'Khamtanh Saysana',      phone: '+856 20 5555 6789', avatar: '👨‍✈️' }
  ],

  guardians: [
    { id: 'G-001', name: 'Mr. Chanthavong',     phone: '+856 20 7771 0001', studentIds: ['S-1001', 'S-2001'] },
    { id: 'G-002', name: 'Mrs. Vongchanh',      phone: '+856 20 7771 0002', studentIds: ['S-1002'] },
    { id: 'G-003', name: 'Ms. Phommachanh',     phone: '+856 20 7771 0003', studentIds: ['S-1003', 'S-1004'] },
    { id: 'G-004', name: 'Mr. & Mrs. Smith',    phone: '+856 20 7771 0004', studentIds: ['S-1005'] },
    { id: 'G-005', name: 'Mr. Souksakhone',     phone: '+856 20 7771 0005', studentIds: ['S-2002'] },
    { id: 'G-006', name: 'Ms. Nakamura',        phone: '+856 20 7771 0006', studentIds: ['S-3001'] },
    { id: 'G-007', name: 'Mr. Sengsouvanh',     phone: '+856 20 7771 0007', studentIds: ['S-3002', 'S-3003'] }
  ],

  // 30 students across 3 schools. Realistic Lao + international mix.
  students: [
    // VIS — Vientiane International (Bus B-101 + B-102 + B-103)
    { id: 'S-1001', name: 'Noi Chanthavong',     grade: 'Grade 3', schoolId: 'vis', guardianId: 'G-001', stopId: 'STOP-A1' },
    { id: 'S-1002', name: 'Maly Vongchanh',      grade: 'Grade 5', schoolId: 'vis', guardianId: 'G-002', stopId: 'STOP-A2' },
    { id: 'S-1003', name: 'Tom Phommachanh',     grade: 'Grade 2', schoolId: 'vis', guardianId: 'G-003', stopId: 'STOP-A1' },
    { id: 'S-1004', name: 'Lily Phommachanh',    grade: 'Grade 4', schoolId: 'vis', guardianId: 'G-003', stopId: 'STOP-A1' },
    { id: 'S-1005', name: 'Emma Smith',          grade: 'Grade 6', schoolId: 'vis', guardianId: 'G-004', stopId: 'STOP-A3' },
    { id: 'S-1006', name: 'Khone Sayasith',      grade: 'Grade 1', schoolId: 'vis', guardianId: 'G-001', stopId: 'STOP-A2' },
    { id: 'S-1007', name: 'Sone Phakdy',         grade: 'Grade 3', schoolId: 'vis', guardianId: 'G-002', stopId: 'STOP-A4' },
    { id: 'S-1008', name: 'Anna Lopez',          grade: 'Grade 5', schoolId: 'vis', guardianId: 'G-004', stopId: 'STOP-A3' },
    { id: 'S-1009', name: 'Kham Sisavath',       grade: 'Grade 2', schoolId: 'vis', guardianId: 'G-003', stopId: 'STOP-B1' },
    { id: 'S-1010', name: 'Bounthavy Soulinh',   grade: 'Grade 4', schoolId: 'vis', guardianId: 'G-001', stopId: 'STOP-B2' },
    { id: 'S-1011', name: 'Vilay Khammounty',    grade: 'Grade 6', schoolId: 'vis', guardianId: 'G-002', stopId: 'STOP-B1' },
    { id: 'S-1012', name: 'Daisy Lee',           grade: 'Grade 1', schoolId: 'vis', guardianId: 'G-004', stopId: 'STOP-B3' },

    // Sengsavanh (Bus B-101 second run + B-104)
    { id: 'S-2001', name: 'Pat Chanthavong',     grade: 'Grade 1', schoolId: 'sgs', guardianId: 'G-001', stopId: 'STOP-A1' },
    { id: 'S-2002', name: 'Khoun Souksakhone',   grade: 'Grade 2', schoolId: 'sgs', guardianId: 'G-005', stopId: 'STOP-A5' },
    { id: 'S-2003', name: 'Mai Phongsavanh',     grade: 'Grade 3', schoolId: 'sgs', guardianId: 'G-005', stopId: 'STOP-C1' },
    { id: 'S-2004', name: 'Thip Vongdara',       grade: 'Grade 1', schoolId: 'sgs', guardianId: 'G-002', stopId: 'STOP-C1' },
    { id: 'S-2005', name: 'Lin Inthavong',       grade: 'Grade 4', schoolId: 'sgs', guardianId: 'G-001', stopId: 'STOP-C2' },
    { id: 'S-2006', name: 'Bounkham Senekhamty', grade: 'Grade 5', schoolId: 'sgs', guardianId: 'G-007', stopId: 'STOP-C2' },
    { id: 'S-2007', name: 'Phout Lattanavong',   grade: 'Grade 2', schoolId: 'sgs', guardianId: 'G-003', stopId: 'STOP-C3' },
    { id: 'S-2008', name: 'Soulinh Bouasavanh',  grade: 'Grade 3', schoolId: 'sgs', guardianId: 'G-005', stopId: 'STOP-C3' },

    // Panyathip (Bus B-102 + B-104)
    { id: 'S-3001', name: 'Yuki Nakamura',       grade: 'Grade 4', schoolId: 'pty', guardianId: 'G-006', stopId: 'STOP-D1' },
    { id: 'S-3002', name: 'Phet Sengsouvanh',    grade: 'Grade 2', schoolId: 'pty', guardianId: 'G-007', stopId: 'STOP-D2' },
    { id: 'S-3003', name: 'Manny Sengsouvanh',   grade: 'Grade 5', schoolId: 'pty', guardianId: 'G-007', stopId: 'STOP-D2' },
    { id: 'S-3004', name: 'Sara Park',           grade: 'Grade 6', schoolId: 'pty', guardianId: 'G-006', stopId: 'STOP-D3' },
    { id: 'S-3005', name: 'Khamtan Vongphakdy',  grade: 'Grade 3', schoolId: 'pty', guardianId: 'G-002', stopId: 'STOP-D1' },
    { id: 'S-3006', name: 'Lien Tran',           grade: 'Grade 4', schoolId: 'pty', guardianId: 'G-006', stopId: 'STOP-D3' },
    { id: 'S-3007', name: 'Noy Kingsada',        grade: 'Grade 1', schoolId: 'pty', guardianId: 'G-005', stopId: 'STOP-D4' },
    { id: 'S-3008', name: 'Air Sayavong',        grade: 'Grade 5', schoolId: 'pty', guardianId: 'G-007', stopId: 'STOP-D4' },

    // Special needs (Bus B-105)
    { id: 'S-4001', name: 'Boun Vongsavanh',     grade: 'Grade 2', schoolId: 'vis', guardianId: 'G-001', stopId: 'STOP-E1', specialNeeds: true, notes: 'Wheelchair, must have attendant' },
    { id: 'S-4002', name: 'Mali Sayyalath',      grade: 'Grade 4', schoolId: 'sgs', guardianId: 'G-007', stopId: 'STOP-E2', specialNeeds: true, notes: 'Seizure protocol; meds in red bag' }
  ],

  // Stops in Houayxay — ALL coordinates kept east of the Mekong (lng >= 100.4200)
  // so the live map never displays the Thailand side of the river.
  stops: {
    // Cluster A — central Houayxay (around Lycée Santiphab)
    'STOP-A1': { coords: [20.2700, 100.4250], name: 'Ban Houayxai Junction',     nameLo: 'ສາມແຍກບ້ານຫ້ວຍຊາຍ' },
    'STOP-A2': { coords: [20.2740, 100.4310], name: 'Ban Phadeng Market',        nameLo: 'ຕະຫຼາດບ້ານຜາແດງ' },
    'STOP-A3': { coords: [20.2680, 100.4290], name: 'Ban Donphung Village',      nameLo: 'ບ້ານດອນຜຸ້ງ' },
    'STOP-A4': { coords: [20.2710, 100.4360], name: 'Talat Sao Junction',        nameLo: 'ສາມແຍກຕະຫຼາດເຊົ້າ' },
    'STOP-A5': { coords: [20.2690, 100.4220], name: 'Sengsavanh Corner',         nameLo: 'ສາມແຍກເຊັງສະຫວັນ' },
    // Cluster B — north
    'STOP-B1': { coords: [20.2860, 100.4310], name: 'Ban Donsai Village',        nameLo: 'ບ້ານດອນຊາຍ' },
    'STOP-B2': { coords: [20.2900, 100.4380], name: 'North Hill',                nameLo: 'ດອຍເໜືອ' },
    'STOP-B3': { coords: [20.2830, 100.4250], name: 'Pakkhing Junction',         nameLo: 'ສາມແຍກປາກຄິງ' },
    // Cluster C — south-east toward Tonpheung
    'STOP-C1': { coords: [20.2580, 100.4480], name: 'Tonpheung Bridge',          nameLo: 'ຂົວຕົ້ນເຜິ້ງ' },
    'STOP-C2': { coords: [20.2540, 100.4580], name: 'Ban Donmak Village',        nameLo: 'ບ້ານດອນຫມາກ' },
    'STOP-C3': { coords: [20.2610, 100.4650], name: 'Pakkha Junction',           nameLo: 'ສາມແຍກປາກຄ້າ' },
    // Cluster D — east
    'STOP-D1': { coords: [20.2820, 100.4400], name: 'Houayxay Mall',             nameLo: 'ສູນການຄ້າຫ້ວຍຊາຍ' },
    'STOP-D2': { coords: [20.2780, 100.4520], name: 'Ban Donthong Junction',     nameLo: 'ສາມແຍກບ້ານດອນທອງ' },
    'STOP-D3': { coords: [20.2880, 100.4450], name: 'Wat Phra Kaew',             nameLo: 'ວັດພະແກ້ວ' },
    'STOP-D4': { coords: [20.2700, 100.4500], name: 'South Bridge',              nameLo: 'ຂົວໃຕ້' },
    // Cluster E — Special needs route
    'STOP-E1': { coords: [20.2660, 100.4350], name: 'Ban Khounta Village',       nameLo: 'ບ້ານຄູນຕາ' },
    'STOP-E2': { coords: [20.2720, 100.4420], name: 'Ban Donglan Junction',      nameLo: 'ສາມແຍກບ້ານດົງລານ' },
    // School stops
    'STOP-VIS': { coords: [20.2720, 100.4280], name: 'Lycée Santiphab',          nameLo: 'ໂຮງຮຽນລີເຊ ສັນຕິພາບ', isSchool: 'vis' },
    'STOP-SGS': { coords: [20.2780, 100.4400], name: 'Huaysaiy High School',     nameLo: 'ໂຮງຮຽນມັດທະຍົມຫ້ວຍຊາຍ', isSchool: 'sgs' },
    'STOP-PTY': { coords: [20.2680, 100.4470], name: 'Bokeo Primary School',     nameLo: 'ໂຮງຮຽນປະຖົມບໍ່ແກ້ວ', isSchool: 'pty' }
  },

  // Routes — each bus's day. Each route has multiple runs.
  // For demo, we model AM only (PM is symmetric).
  routes: [
    {
      id: 'R-101',
      busId: 'B-101',
      driverId: 'D-001',
      runs: [
        {
          id: 'RUN-101-AM-VIS',
          direction: 'AM', schoolId: 'vis',
          start: '06:25', schoolArrival: '07:25',
          stops: [
            { stopId: 'STOP-A1', time: '06:30', studentIds: ['S-1001', 'S-1003', 'S-1004'] },
            { stopId: 'STOP-A2', time: '06:42', studentIds: ['S-1002', 'S-1006'] },
            { stopId: 'STOP-A3', time: '06:55', studentIds: ['S-1005', 'S-1008'] },
            { stopId: 'STOP-A4', time: '07:08', studentIds: ['S-1007'] },
            { stopId: 'STOP-VIS', time: '07:25', studentIds: [], isSchool: true }
          ]
        },
        {
          id: 'RUN-101-AM-SGS',
          direction: 'AM', schoolId: 'sgs',
          start: '07:35', schoolArrival: '07:55',
          stops: [
            { stopId: 'STOP-A1', time: '07:38', studentIds: ['S-2001'] },
            { stopId: 'STOP-A5', time: '07:45', studentIds: ['S-2002'] },
            { stopId: 'STOP-SGS', time: '07:55', studentIds: [], isSchool: true }
          ]
        }
      ]
    },
    {
      id: 'R-102',
      busId: 'B-102',
      driverId: 'D-002',
      runs: [
        {
          id: 'RUN-102-AM-PTY',
          direction: 'AM', schoolId: 'pty',
          start: '07:00', schoolArrival: '08:25',
          stops: [
            { stopId: 'STOP-D1', time: '07:05', studentIds: ['S-3001', 'S-3005'] },
            { stopId: 'STOP-D2', time: '07:18', studentIds: ['S-3002', 'S-3003'] },
            { stopId: 'STOP-D3', time: '07:30', studentIds: ['S-3004', 'S-3006'] },
            { stopId: 'STOP-D4', time: '07:42', studentIds: ['S-3007', 'S-3008'] },
            { stopId: 'STOP-PTY', time: '08:25', studentIds: [], isSchool: true }
          ]
        }
      ]
    },
    {
      id: 'R-103',
      busId: 'B-103',
      driverId: 'D-003',
      runs: [
        {
          id: 'RUN-103-AM-VIS',
          direction: 'AM', schoolId: 'vis',
          start: '06:45', schoolArrival: '07:25',
          stops: [
            { stopId: 'STOP-B1', time: '06:50', studentIds: ['S-1009', 'S-1011'] },
            { stopId: 'STOP-B2', time: '07:00', studentIds: ['S-1010'] },
            { stopId: 'STOP-B3', time: '07:08', studentIds: ['S-1012'] },
            { stopId: 'STOP-VIS', time: '07:25', studentIds: [], isSchool: true }
          ]
        }
      ]
    },
    {
      id: 'R-104',
      busId: 'B-104',
      driverId: 'D-004',
      runs: [
        {
          id: 'RUN-104-AM-SGS',
          direction: 'AM', schoolId: 'sgs',
          start: '07:15', schoolArrival: '07:55',
          stops: [
            { stopId: 'STOP-C1', time: '07:20', studentIds: ['S-2003', 'S-2004'] },
            { stopId: 'STOP-C2', time: '07:32', studentIds: ['S-2005', 'S-2006'] },
            { stopId: 'STOP-C3', time: '07:45', studentIds: ['S-2007', 'S-2008'] },
            { stopId: 'STOP-SGS', time: '07:55', studentIds: [], isSchool: true }
          ]
        }
      ]
    },
    {
      id: 'R-105',
      busId: 'B-105',
      driverId: 'D-005',
      runs: [
        {
          id: 'RUN-105-AM-MIXED',
          direction: 'AM', schoolId: 'vis',
          start: '06:50', schoolArrival: '07:55',
          notes: 'Special needs — attendant on board',
          stops: [
            { stopId: 'STOP-E1', time: '06:55', studentIds: ['S-4001'] },
            { stopId: 'STOP-VIS', time: '07:25', studentIds: [], isSchool: true },
            { stopId: 'STOP-E2', time: '07:40', studentIds: ['S-4002'] },
            { stopId: 'STOP-SGS', time: '07:55', studentIds: [], isSchool: true }
          ]
        }
      ]
    }
  ],

  // Today's events as of APP_NOW (07:05). 4 events/student/day, but we only show
  // events that have happened so far today.
  events: [
    // Bus 101 — completed VIS Stop A1 boards, en route to A2
    { id: 'E-001', studentId: 'S-1001', busId: 'B-101', runId: 'RUN-101-AM-VIS', stopId: 'STOP-A1', type: 'BOARD',  direction: 'AM', timestamp: '2026-05-07T06:30:18+07:00' },
    { id: 'E-002', studentId: 'S-1003', busId: 'B-101', runId: 'RUN-101-AM-VIS', stopId: 'STOP-A1', type: 'BOARD',  direction: 'AM', timestamp: '2026-05-07T06:30:42+07:00' },
    { id: 'E-003', studentId: 'S-1004', busId: 'B-101', runId: 'RUN-101-AM-VIS', stopId: 'STOP-A1', type: 'BOARD',  direction: 'AM', timestamp: '2026-05-07T06:31:05+07:00' },
    { id: 'E-004', studentId: 'S-1002', busId: 'B-101', runId: 'RUN-101-AM-VIS', stopId: 'STOP-A2', type: 'BOARD',  direction: 'AM', timestamp: '2026-05-07T06:42:33+07:00' },
    { id: 'E-005', studentId: 'S-1006', busId: 'B-101', runId: 'RUN-101-AM-VIS', stopId: 'STOP-A2', type: 'BOARD',  direction: 'AM', timestamp: '2026-05-07T06:42:58+07:00' },
    { id: 'E-006', studentId: 'S-1005', busId: 'B-101', runId: 'RUN-101-AM-VIS', stopId: 'STOP-A3', type: 'BOARD',  direction: 'AM', timestamp: '2026-05-07T06:55:11+07:00' },
    { id: 'E-007', studentId: 'S-1008', busId: 'B-101', runId: 'RUN-101-AM-VIS', stopId: 'STOP-A3', type: 'BOARD',  direction: 'AM', timestamp: '2026-05-07T06:55:48+07:00' },

    // Bus 102 — done with first stop, en route to second
    { id: 'E-010', studentId: 'S-3001', busId: 'B-102', runId: 'RUN-102-AM-PTY', stopId: 'STOP-D1', type: 'BOARD',  direction: 'AM', timestamp: '2026-05-07T07:05:09+07:00' },
    { id: 'E-011', studentId: 'S-3005', busId: 'B-102', runId: 'RUN-102-AM-PTY', stopId: 'STOP-D1', type: 'BOARD',  direction: 'AM', timestamp: '2026-05-07T07:05:22+07:00' },

    // Bus 103 — partway through, B1 done, B2 just starting
    { id: 'E-020', studentId: 'S-1009', busId: 'B-103', runId: 'RUN-103-AM-VIS', stopId: 'STOP-B1', type: 'BOARD',  direction: 'AM', timestamp: '2026-05-07T06:50:18+07:00' },
    { id: 'E-021', studentId: 'S-1011', busId: 'B-103', runId: 'RUN-103-AM-VIS', stopId: 'STOP-B1', type: 'BOARD',  direction: 'AM', timestamp: '2026-05-07T06:50:45+07:00' },
    { id: 'E-022', studentId: 'S-1010', busId: 'B-103', runId: 'RUN-103-AM-VIS', stopId: 'STOP-B2', type: 'BOARD',  direction: 'AM', timestamp: '2026-05-07T07:00:31+07:00' },

    // Bus 105 — picked up first special-needs student
    { id: 'E-030', studentId: 'S-4001', busId: 'B-105', runId: 'RUN-105-AM-MIXED', stopId: 'STOP-E1', type: 'BOARD', direction: 'AM', timestamp: '2026-05-07T06:55:14+07:00' }
  ],

  // Live bus positions at APP_NOW (07:05) — all east of Mekong (lng >= 100.4200)
  livePositions: {
    'B-101': { coords: [20.2700, 100.4290], heading: 45,  status: 'in_transit', currentRunId: 'RUN-101-AM-VIS', nextStopId: 'STOP-A4', etaMin: 3 },
    'B-102': { coords: [20.2790, 100.4420], heading: 90,  status: 'in_transit', currentRunId: 'RUN-102-AM-PTY', nextStopId: 'STOP-D2', etaMin: 11 },
    'B-103': { coords: [20.2870, 100.4280], heading: 270, status: 'at_stop',    currentRunId: 'RUN-103-AM-VIS', nextStopId: 'STOP-B2', etaMin: 0 },
    'B-104': { coords: [20.2580, 100.4500], heading: 30,  status: 'starting',   currentRunId: 'RUN-104-AM-SGS', nextStopId: 'STOP-C1', etaMin: 5 },
    'B-105': { coords: [20.2680, 100.4380], heading: 60,  status: 'in_transit', currentRunId: 'RUN-105-AM-MIXED', nextStopId: 'STOP-VIS', etaMin: 18 },
    'B-106': { coords: [20.2750, 100.4350], heading: 0,   status: 'idle',       currentRunId: null, nextStopId: null, etaMin: null }
  },

  // Simulated alerts visible on the operator dashboard
  alerts: [
    { id: 'A-1', severity: 'info',    busId: 'B-101', message: 'Run RUN-101-AM-VIS on schedule',       messageLo: 'ເສັ້ນທາງ RUN-101-AM-VIS ຕາມເວລາ',                  ts: '2026-05-07T06:55:00+07:00' },
    { id: 'A-2', severity: 'warning', busId: 'B-104', message: 'Bus 104 starting 5 min late',          messageLo: 'ລົດ 104 ອອກຊ້າ 5 ນາທີ',                            ts: '2026-05-07T07:01:00+07:00' },
    { id: 'A-3', severity: 'info',    busId: 'B-105', message: 'Special needs student S-4001 boarded', messageLo: 'ນັກຮຽນພິເສດ S-4001 ຂຶ້ນລົດແລ້ວ',                  ts: '2026-05-07T06:55:14+07:00' },
    { id: 'A-4', severity: 'warning', busId: 'B-102', message: 'Light traffic near Tonpheung Rd',      messageLo: 'ລົດແອອັດເລັກນ້ອຍແຖວທາງຕົ້ນເຜິ້ງ',                ts: '2026-05-07T07:03:00+07:00' }
  ],

  // ========== Billing & subscriptions ==========
  // Pricing model: per-student per month, in Lao Kip (LAK).
  plans: {
    standard:   { id: 'standard',   name: 'Standard',   nameLo: 'ມາດຕະຖານ', perStudent: 100000, features: ['live_tracking', 'parent_app'] },
    premium:    { id: 'premium',    name: 'Premium',    nameLo: 'ພຣີມຽມ',     perStudent: 150000, features: ['live_tracking', 'parent_app', 'reports', 'sms_fallback'] },
    enterprise: { id: 'enterprise', name: 'Enterprise', nameLo: 'ອົງກອນ',     perStudent: 200000, features: ['live_tracking', 'parent_app', 'reports', 'sms_fallback', 'priority_support', 'custom_branding'] }
  },

  // One subscription per school
  subscriptions: [
    { id: 'SUB-VIS', schoolId: 'vis', planId: 'premium',  studentsBilled: 320, status: 'active', startedAt: '2025-09-01', renewsAt: '2026-09-01', autoRenew: true, monthlyAmount: 48000000, currency: 'LAK' },
    { id: 'SUB-SGS', schoolId: 'sgs', planId: 'standard', studentsBilled: 180, status: 'active', startedAt: '2025-11-15', renewsAt: '2026-11-15', autoRenew: true, monthlyAmount: 18000000, currency: 'LAK' },
    { id: 'SUB-PTY', schoolId: 'pty', planId: 'premium',  studentsBilled: 240, status: 'active', startedAt: '2026-01-08', renewsAt: '2027-01-08', autoRenew: true, monthlyAmount: 36000000, currency: 'LAK' }
  ],

  // Recent invoices — last 4 months across schools
  invoices: [
    { id: 'INV-2026-05-VIS', schoolId: 'vis', period: '2026-05', issuedAt: '2026-05-01', dueAt: '2026-05-15', amount: 48000000, status: 'pending' },
    { id: 'INV-2026-05-SGS', schoolId: 'sgs', period: '2026-05', issuedAt: '2026-05-01', dueAt: '2026-05-15', amount: 18000000, status: 'paid',    paidAt: '2026-05-04' },
    { id: 'INV-2026-05-PTY', schoolId: 'pty', period: '2026-05', issuedAt: '2026-05-01', dueAt: '2026-05-15', amount: 36000000, status: 'pending' },
    { id: 'INV-2026-04-VIS', schoolId: 'vis', period: '2026-04', issuedAt: '2026-04-01', dueAt: '2026-04-15', amount: 48000000, status: 'paid',    paidAt: '2026-04-08' },
    { id: 'INV-2026-04-SGS', schoolId: 'sgs', period: '2026-04', issuedAt: '2026-04-01', dueAt: '2026-04-15', amount: 17600000, status: 'paid',    paidAt: '2026-04-05' },
    { id: 'INV-2026-04-PTY', schoolId: 'pty', period: '2026-04', issuedAt: '2026-04-01', dueAt: '2026-04-15', amount: 36000000, status: 'paid',    paidAt: '2026-04-09' },
    { id: 'INV-2026-03-VIS', schoolId: 'vis', period: '2026-03', issuedAt: '2026-03-01', dueAt: '2026-03-15', amount: 46500000, status: 'paid',    paidAt: '2026-03-12' },
    { id: 'INV-2026-03-SGS', schoolId: 'sgs', period: '2026-03', issuedAt: '2026-03-01', dueAt: '2026-03-15', amount: 17600000, status: 'paid',    paidAt: '2026-03-05' },
    { id: 'INV-2026-03-PTY', schoolId: 'pty', period: '2026-03', issuedAt: '2026-03-01', dueAt: '2026-03-15', amount: 34500000, status: 'overdue' },
    { id: 'INV-2026-02-VIS', schoolId: 'vis', period: '2026-02', issuedAt: '2026-02-01', dueAt: '2026-02-15', amount: 46500000, status: 'paid',    paidAt: '2026-02-09' },
    { id: 'INV-2026-02-SGS', schoolId: 'sgs', period: '2026-02', issuedAt: '2026-02-01', dueAt: '2026-02-15', amount: 17500000, status: 'paid',    paidAt: '2026-02-04' },
    { id: 'INV-2026-02-PTY', schoolId: 'pty', period: '2026-02', issuedAt: '2026-02-01', dueAt: '2026-02-15', amount: 34500000, status: 'paid',    paidAt: '2026-02-10' }
  ],

  // Revenue history (last 6 months) for the trend chart, in Kip
  revenueHistory: [
    { month: '2025-12', revenue:  64000000, schools: 2 },
    { month: '2026-01', revenue: 102000000, schools: 3 },
    { month: '2026-02', revenue:  98500000, schools: 3 },
    { month: '2026-03', revenue:  98600000, schools: 3 },
    { month: '2026-04', revenue: 101600000, schools: 3 },
    { month: '2026-05', revenue: 102000000, schools: 3 }
  ],

  // ========== Reports module ==========
  // Report definitions surfaced on the reports page
  reportTypes: [
    { id: 'daily-ridership',  category: 'operations', icon: '📊', name: 'Daily Ridership Report',     nameLo: 'ລາຍງານການເດີນທາງປະຈຳວັນ',
      desc: 'Per route boarding/exit counts with timestamps and GPS.',
      descLo: 'ຈຳນວນຂຶ້ນ-ລົງລົດແຕ່ລະເສັ້ນທາງ ພ້ອມເວລາ ແລະ GPS.' },
    { id: 'monthly-attendance', category: 'operations', icon: '📅', name: 'Monthly Attendance',         nameLo: 'ການເຂົ້າຮຽນປະຈຳເດືອນ',
      desc: 'Per-school, per-student attendance via the bus, by day.',
      descLo: 'ການເຂົ້າຮຽນຜ່ານລົດ ແຍກຕາມໂຮງຮຽນ, ນັກຮຽນ ແລະ ວັນ.' },
    { id: 'on-time-perf',     category: 'operations', icon: '⏱️', name: 'On-Time Performance',         nameLo: 'ການມາຕາມເວລາ',
      desc: 'Percentage of runs on schedule across all routes.',
      descLo: 'ເປີເຊັນຂອງເສັ້ນທາງທີ່ມາຕາມເວລາ ທົ່ວທຸກເສັ້ນ.' },
    { id: 'fleet-utilization', category: 'operations', icon: '🚌', name: 'Fleet Utilization',           nameLo: 'ການນຳໃຊ້ລົດ',
      desc: 'Bus hours, kilometers, capacity used by route.',
      descLo: 'ຊົ່ວໂມງລົດແລ່ນ, ກິໂລແມັດ ແລະ ການນຳໃຊ້ຄວາມຈຸແຕ່ລະເສັ້ນທາງ.' },
    { id: 'incident-log',     category: 'safety',     icon: '⚠️', name: 'Incident Log',                 nameLo: 'ບັນທຶກເຫດການ',
      desc: 'All flagged incidents — wrong bus, no-shows, late arrivals.',
      descLo: 'ເຫດການທີ່ຖືກແຈ້ງເຕືອນທັງໝົດ — ຂຶ້ນຜິດລົດ, ບໍ່ມາ, ຊ້າ.' },
    { id: 'walk-bus-comp',    category: 'safety',     icon: '✅', name: 'Walk-the-Bus Compliance',      nameLo: 'ການກວດກາພາຍໃນລົດ',
      desc: 'Percent of runs with confirmed end-of-route walk-through.',
      descLo: 'ເປີເຊັນຂອງເສັ້ນທາງທີ່ມີການກວດກາພາຍໃນລົດເມື່ອສຳເລັດ.' },
    { id: 'monthly-revenue',  category: 'finance',    icon: '💰', name: 'Monthly Revenue Report',       nameLo: 'ລາຍງານລາຍຮັບປະຈຳເດືອນ',
      desc: 'Revenue breakdown by school and plan tier.',
      descLo: 'ລາຍຮັບແຍກຕາມໂຮງຮຽນ ແລະ ຂັ້ນຂອງແພັກເກັດ.' },
    { id: 'outstanding-inv',  category: 'finance',    icon: '🧾', name: 'Outstanding Invoices',         nameLo: 'ໃບເກັບເງິນຄ້າງຊຳລະ',
      desc: 'All unpaid and overdue invoices across schools.',
      descLo: 'ໃບເກັບເງິນທີ່ຍັງບໍ່ຊຳລະ ແລະ ເກີນກຳນົດ ທົ່ວທຸກໂຮງຮຽນ.' },
    { id: 'school-export',    category: 'school',     icon: '📤', name: 'Per-School Data Export',       nameLo: 'ສົ່ງຂໍ້ມູນແຍກໂຮງຮຽນ',
      desc: 'Full data dump for a single school — for their records.',
      descLo: 'ສົ່ງອອກຂໍ້ມູນທັງໝົດສຳລັບໂຮງຮຽນດຽວ — ສຳລັບເກັບໄວ້ໃນບັນທຶກ.' }
  ],

  // Sample data for the "Daily Ridership" preview chart on the reports page
  dailyRidershipPreview: [
    { date: '2026-05-01', boarded: 712, exited: 706, ontime: 96 },
    { date: '2026-05-02', boarded: 718, exited: 715, ontime: 97 },
    { date: '2026-05-05', boarded: 715, exited: 711, ontime: 95 },
    { date: '2026-05-06', boarded: 720, exited: 718, ontime: 98 },
    { date: '2026-05-07', boarded: 723, exited: 720, ontime: 96 }
  ],

  // Helper lookups built once
  byId: null
};

// ========== Curriculum subjects (for the school score module) ==========
window.APP_DATA.subjects = [
  { id: 'math',    name: 'Mathematics',    nameLo: 'ຄະນິດສາດ',     icon: 'calculator' },
  { id: 'lao',     name: 'Lao Language',   nameLo: 'ພາສາລາວ',       icon: 'book-open' },
  { id: 'eng',     name: 'English',        nameLo: 'ພາສາອັງກິດ',   icon: 'languages' },
  { id: 'sci',     name: 'Science',        nameLo: 'ວິທະຍາສາດ',     icon: 'flask-conical' },
  { id: 'soc',     name: 'Social Studies', nameLo: 'ສັງຄົມສາດ',     icon: 'globe' },
  { id: 'art',     name: 'Art',            nameLo: 'ສິລະປະ',         icon: 'palette' },
  { id: 'pe',      name: 'Physical Ed.',   nameLo: 'ພະລະສຶກສາ',     icon: 'activity' }
];

// ========== Enrich existing rows with management-only fields ==========
// (qrToken on students, email/accountStatus/lastLogin on guardians,
// license + status on drivers). Computed deterministically so they stay
// stable across reloads in the prototype.
(function enrichForCrud() {
  const d = window.APP_DATA;

  // Helper: deterministic 4-hex-char token from a string
  function hash4(s) {
    let h = 7;
    for (let i = 0; i < s.length; i++) h = ((h * 31) + s.charCodeAt(i)) | 0;
    return (h >>> 0).toString(16).slice(-4).toUpperCase().padStart(4, '0');
  }

  // Helper: NFC UID looks like a real Mifare 7-byte UID (e.g. 04:A3:F7:1B:C2:5E:80).
  // Deterministic from the seed so it stays stable across reloads.
  window.nfcUidFor = function (seed) {
    let h = 17;
    for (let i = 0; i < seed.length; i++) h = ((h * 131) + seed.charCodeAt(i)) | 0;
    let parts = ['04'];   // NXP MIFARE prefix
    for (let i = 0; i < 6; i++) {
      h = ((h * 31) + i + 1) | 0;
      parts.push(((h >>> 0) & 0xFF).toString(16).padStart(2, '0').toUpperCase());
    }
    return parts.join(':');
  };

  const schoolById = Object.fromEntries(d.schools.map(s => [s.id, s]));

  // Students: add qrToken, nfcUid, photoInitials, registeredAt
  d.students.forEach(s => {
    const school = schoolById[s.schoolId];
    const idNum = s.id.split('-')[1];
    s.qrToken       = s.qrToken      || `${school.shortName.toUpperCase().replace(/[^A-Z]/g, '').slice(0, 3) || 'SR'}-${idNum}-${hash4(s.id)}`;
    s.nfcUid        = s.nfcUid       || nfcUidFor(s.id);
    s.cardIssuedAt  = s.cardIssuedAt || '2025-09-02';
    s.photoInitials = s.name.split(' ').map(p => p[0]).slice(0, 2).join('');
    s.registeredAt  = s.registeredAt || '2025-09-02';
    s.status        = s.status || 'active';   // active | inactive | graduated
  });

  // Schools: add status flag
  d.schools.forEach(s => {
    s.status = s.status || 'active';
  });

  // Buses: status already exists ('active' / 'idle'). Add year + lastService.
  d.buses.forEach(b => {
    b.year        = b.year        || (2018 + (parseInt(b.id.slice(-1)) % 6));
    b.lastService = b.lastService || '2026-04-15';
  });

  // Drivers: license, status, hire date
  const driverInfo = {
    'D-001': { licenseNo: 'LD-2019-1042', licenseExpiry: '2027-08-12', hiredAt: '2019-08-15', status: 'active'   },
    'D-002': { licenseNo: 'LD-2020-0687', licenseExpiry: '2026-12-30', hiredAt: '2020-09-01', status: 'active'   },
    'D-003': { licenseNo: 'LD-2018-2210', licenseExpiry: '2027-03-22', hiredAt: '2018-06-12', status: 'active'   },
    'D-004': { licenseNo: 'LD-2021-1188', licenseExpiry: '2028-01-08', hiredAt: '2021-02-20', status: 'active'   },
    'D-005': { licenseNo: 'LD-2017-0455', licenseExpiry: '2026-11-15', hiredAt: '2017-05-08', status: 'active'   },
    'D-006': { licenseNo: 'LD-2022-3074', licenseExpiry: '2027-07-04', hiredAt: '2022-03-18', status: 'on_leave' }
  };
  d.drivers.forEach(dr => {
    Object.assign(dr, driverInfo[dr.id] || { licenseNo: 'LD-?', licenseExpiry: '2027-01-01', hiredAt: '2020-01-01', status: 'active' });
    // Find which bus this driver is assigned to via routes
    const route = d.routes.find(r => r.driverId === dr.id);
    dr.assignedBusId = route ? route.busId : null;
  });

  // Guardians: email + login info + linked student count
  const guardianInfo = {
    'G-001': { email: 'chanthavong.family@gmail.com',  accountStatus: 'active',  lastLogin: '2026-05-07T22:31:00+07:00', createdAt: '2025-09-01' },
    'G-002': { email: 'vongchanh.maly@gmail.com',      accountStatus: 'active',  lastLogin: '2026-05-07T18:12:00+07:00', createdAt: '2025-09-04' },
    'G-003': { email: 'phommachanh@gmail.com',         accountStatus: 'active',  lastLogin: '2026-05-07T20:55:00+07:00', createdAt: '2025-09-08' },
    'G-004': { email: 'smith.family@expat.la',         accountStatus: 'active',  lastLogin: '2026-05-06T07:42:00+07:00', createdAt: '2025-09-15' },
    'G-005': { email: 'souksakhone.k@gmail.com',       accountStatus: 'invited', lastLogin: null,                        createdAt: '2026-05-05' },
    'G-006': { email: 'nakamura.yuki@expat.la',        accountStatus: 'active',  lastLogin: '2026-05-07T19:20:00+07:00', createdAt: '2025-10-12' },
    'G-007': { email: 'sengsouvanh@gmail.com',         accountStatus: 'suspended', lastLogin: '2026-04-29T12:08:00+07:00', createdAt: '2025-09-22' }
  };
  d.guardians.forEach(g => {
    Object.assign(g, guardianInfo[g.id] || { email: '—', accountStatus: 'active', lastLogin: null, createdAt: '2025-09-01' });
  });

  // Plans: feature labels for UI
  const featLabels = {
    live_tracking:    'Live GPS tracking',
    parent_app:       'Parent mobile app',
    reports:          'Reports & exports',
    sms_fallback:     'SMS notifications',
    priority_support: '24/7 priority support',
    custom_branding:  'Custom branding'
  };
  Object.values(d.plans).forEach(p => {
    p.featureLabels = p.features.map(f => featLabels[f] || f);
  });

  // Students: pin a house near their stop (jittered ±0.0035° ≈ 350m for visible spread)
  // Clamp lng to be safely east of the Mekong (>= 100.4220) so houses never appear in Thailand.
  d.students.forEach(s => {
    if (s.house) return;
    const stop = d.stops[s.stopId];
    const baseCoords = stop ? stop.coords : d.operator.center;
    // Deterministic jitter from the student id
    const idNum = parseInt(s.id.split('-')[1] || '50', 10);
    const jitterLat = ((idNum * 13) % 70 - 35) / 10000;     // ~ ±0.0035°
    const jitterLng = ((idNum * 7)  % 70 - 35) / 10000;
    let lat = baseCoords[0] + jitterLat;
    let lng = Math.max(100.4220, baseCoords[1] + jitterLng);   // clamp to Lao side
    s.house = {
      coords: [lat, lng],
      addressLine: `${stop ? stop.name : 'Houayxay'}, House #${s.id.slice(-3)}`
    };
  });
})();

// ========== Score / attendance / admin user data (NEW) ==========
(function buildAcademicAndAdmin() {
  const d = window.APP_DATA;

  // ----- Scores (per student × subject, recent semester) -----
  d.scores = [];
  let sId = 1;
  const seedRng = (n) => {
    let h = 5; for (let i = 0; i < n.length; i++) h = ((h * 31) + n.charCodeAt(i)) | 0;
    return () => { h = (h * 9301 + 49297) & 0x7fffffff; return h / 0x7fffffff; };
  };
  const recentMonths = ['2026-03', '2026-04', '2026-05'];
  d.students.forEach(stu => {
    const r = seedRng(stu.id);
    d.subjects.forEach(sub => {
      // 1-2 scores per subject per student (recent assessments)
      const count = 1 + Math.floor(r() * 2);
      for (let i = 0; i < count; i++) {
        const month = recentMonths[Math.min(recentMonths.length - 1, Math.floor(r() * recentMonths.length))];
        const day = 1 + Math.floor(r() * 28);
        const base = 60 + Math.floor(r() * 38);
        d.scores.push({
          id: 'SC-' + String(sId++).padStart(4, '0'),
          studentId: stu.id,
          schoolId: stu.schoolId,
          subject: sub.id,
          subjectName: sub.name,
          score: base,
          max: 100,
          assessmentType: ['Quiz','Test','Assignment','Mid-term','Final'][Math.floor(r() * 5)],
          date: `${month}-${String(day).padStart(2, '0')}`,
          comment: '',
          teacher: ['Mrs. Phanthavong','Mr. Khamla','Ms. Inthavong','Mr. Sourivong','Ms. Bouasavanh'][Math.floor(r() * 5)]
        });
      }
    });
  });

  // ----- Absences (parent-requested, school approves) -----
  d.absences = [
    { id: 'ABS-001', studentId: 'S-1001', date: '2026-05-09', reason: 'Doctor appointment',           requestedAt: '2026-05-08T19:30:00+07:00', requestedBy: 'G-001', status: 'requested', schoolNote: '' },
    { id: 'ABS-002', studentId: 'S-2001', date: '2026-05-09', reason: 'Family emergency',             requestedAt: '2026-05-08T20:15:00+07:00', requestedBy: 'G-001', status: 'requested', schoolNote: '' },
    { id: 'ABS-003', studentId: 'S-1003', date: '2026-05-08', reason: 'Sick — fever',                 requestedAt: '2026-05-07T22:00:00+07:00', requestedBy: 'G-003', status: 'approved',  schoolNote: 'Get well soon' },
    { id: 'ABS-004', studentId: 'S-3001', date: '2026-05-12', reason: 'Family trip',                  requestedAt: '2026-05-08T08:10:00+07:00', requestedBy: 'G-006', status: 'approved',  schoolNote: '' },
    { id: 'ABS-005', studentId: 'S-1002', date: '2026-05-11', reason: 'Dental check-up (Mon AM)',     requestedAt: '2026-05-08T09:45:00+07:00', requestedBy: 'G-002', status: 'requested', schoolNote: '' }
  ];

  // ----- Admin users (super admin & school admins & dispatcher etc.) -----
  d.adminUsers = [
    { id: 'U-001', name: 'Souvanh Phimmasone',  email: 'souvanh@saferide.la',     role: 'super_admin',  status: 'active', lastLogin: '2026-05-09T07:02:00+07:00', avatar: '👑' },
    { id: 'U-002', name: 'Khamla Vorasen',      email: 'khamla@saferide.la',      role: 'admin',        status: 'active', lastLogin: '2026-05-08T18:42:00+07:00', avatar: '🛡️' },
    { id: 'U-003', name: 'Phout Sengsouvanh',   email: 'phout.dispatch@saferide.la', role: 'dispatcher', status: 'active', lastLogin: '2026-05-09T06:55:00+07:00', avatar: '📡' },
    { id: 'U-004', name: 'Bounnyong Sayasone',  email: 'principal@his.edu.la',    role: 'school_admin', schoolId: 'vis', status: 'active', lastLogin: '2026-05-09T07:18:00+07:00', avatar: '🏫' },
    { id: 'U-005', name: 'Manivanh Khotsana',   email: 'principal@bps.edu.la',    role: 'school_admin', schoolId: 'sgs', status: 'active', lastLogin: '2026-05-08T15:30:00+07:00', avatar: '🏫' },
    { id: 'U-006', name: 'Sengphet Vongdara',   email: 'principal@hss.edu.la',    role: 'school_admin', schoolId: 'pty', status: 'active', lastLogin: '2026-05-08T16:12:00+07:00', avatar: '🏫' },
    { id: 'U-007', name: 'Khamphone Sisouphan', email: 'khamphone@saferide.la',   role: 'admin',        status: 'invited', lastLogin: null, avatar: '🛡️' }
  ];

  // ----- Notifications (per guardian for the parent app) -----
  d.notifications = [
    { id: 'N-001', guardianId: 'G-001', type: 'board',     studentId: 'S-1001', title: 'Noi boarded Bus B-101',         body: 'Ban Houayxai Junction · 06:30',          createdAt: '2026-05-09T06:30:18+07:00', read: false },
    { id: 'N-002', guardianId: 'G-001', type: 'arrived',   studentId: 'S-1001', title: 'Noi arrived at school',          body: 'Houayxay International School · 07:25', createdAt: '2026-05-09T07:25:00+07:00', read: false },
    { id: 'N-003', guardianId: 'G-001', type: 'absence',   studentId: 'S-1001', title: 'Absence request received',       body: 'Doctor appointment · awaiting school',  createdAt: '2026-05-08T19:31:00+07:00', read: true },
    { id: 'N-004', guardianId: 'G-001', type: 'score',     studentId: 'S-1001', title: 'New score posted',               body: 'Math · 87/100',                          createdAt: '2026-05-08T15:00:00+07:00', read: true },
    { id: 'N-005', guardianId: 'G-001', type: 'approach',  studentId: 'S-2001', title: 'Bus B-101 is 2 min from Pat',    body: 'Ban Houayxai Junction',                  createdAt: '2026-05-09T07:36:00+07:00', read: false }
  ];

  // ----- Helper indices (defensive: byId may not be built yet) -----
  d.byId = d.byId || {};
  d.byId.score      = Object.fromEntries(d.scores.map(s => [s.id, s]));
  d.byId.absence    = Object.fromEntries(d.absences.map(a => [a.id, a]));
  d.byId.adminUser  = Object.fromEntries(d.adminUsers.map(u => [u.id, u]));
  d.byId.subject    = Object.fromEntries(d.subjects.map(s => [s.id, s]));
})();

// ========== Live monitoring helpers ==========
// Pre-compute the "path" each bus follows: array of [lat,lng] from current
// position through remaining stops to the school.
window.busPath = function(busId) {
  const lp = APP_DATA.livePositions[busId];
  if (!lp || !lp.currentRunId) return [lp ? lp.coords : APP_DATA.operator.center];
  for (const r of APP_DATA.routes) {
    for (const run of r.runs) {
      if (run.id !== lp.currentRunId) continue;
      const stopCoords = run.stops.map(s => APP_DATA.byId.stop[s.stopId].coords);
      // Find the index of the next stop and rebuild path from current position
      const nextIdx = run.stops.findIndex(s => s.stopId === lp.nextStopId);
      const tail = nextIdx >= 0 ? stopCoords.slice(nextIdx) : stopCoords;
      return [lp.coords, ...tail];
    }
  }
  return [lp.coords];
};

// Build id→object lookups for convenience
(function buildIndices() {
  const d = window.APP_DATA;
  Object.assign(d.byId = d.byId || {}, {
    school:       Object.fromEntries(d.schools.map(s => [s.id, s])),
    bus:          Object.fromEntries(d.buses.map(b => [b.id, b])),
    driver:       Object.fromEntries(d.drivers.map(dr => [dr.id, dr])),
    student:      Object.fromEntries(d.students.map(s => [s.id, s])),
    guardian:     Object.fromEntries(d.guardians.map(g => [g.id, g])),
    route:        Object.fromEntries(d.routes.map(r => [r.id, r])),
    stop:         d.stops,
    plan:         d.plans,
    subscription: Object.fromEntries(d.subscriptions.map(s => [s.id, s])),
    subBySchool:  Object.fromEntries(d.subscriptions.map(s => [s.schoolId, s]))
  });
})();

// ========== Billing helpers ==========
// fmtMoney(amount, currency = 'LAK')
//   LAK ≥ 1,000,000 → "48M ₭" or "17.6M ₭"
//   LAK ≥ 1,000     → "150K ₭"
//   LAK < 1,000     → "500 ₭"
window.fmtMoney = function(amount, currency = 'LAK') {
  if (currency === 'USD') {
    return '$' + amount.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  }
  // Default: LAK with M / K abbreviations
  if (amount >= 1000000) {
    const m = amount / 1000000;
    const s = (m % 1 === 0) ? m.toFixed(0) : m.toFixed(1);
    return s + 'M ₭';
  }
  if (amount >= 1000) {
    return Math.round(amount / 1000) + 'K ₭';
  }
  return amount.toLocaleString('en-US') + ' ₭';
};
window.fmtMonth = function(yyyymm) {
  const [y, m] = yyyymm.split('-');
  return new Date(y, parseInt(m) - 1, 1).toLocaleString('en-US', { month: 'short', year: 'numeric' });
};
window.totalMRR = function() {
  return APP_DATA.subscriptions
    .filter(s => s.status === 'active')
    .reduce((a, s) => a + s.monthlyAmount, 0);
};
window.outstandingTotal = function() {
  return APP_DATA.invoices
    .filter(i => i.status === 'pending' || i.status === 'overdue')
    .reduce((a, i) => a + i.amount, 0);
};
window.totalStudentsBilled = function() {
  return APP_DATA.subscriptions
    .filter(s => s.status === 'active')
    .reduce((a, s) => a + s.studentsBilled, 0);
};
window.invoicesForSchool = function(schoolId) {
  return APP_DATA.invoices.filter(i => i.schoolId === schoolId)
    .sort((a, b) => b.period.localeCompare(a.period));
};

// Utility: format Date or ISO string as HH:mm
window.fmtTime = function(t) {
  const d = (t instanceof Date) ? t : new Date(t);
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
};

// Utility: get all events for a student today
window.eventsForStudent = function(studentId) {
  return APP_DATA.events.filter(e => e.studentId === studentId)
                         .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
};

// Utility: get all events for a run today
window.eventsForRun = function(runId) {
  return APP_DATA.events.filter(e => e.runId === runId);
};

// Utility: haversine distance in km between two [lat, lng] coords
window.haversineKm = function(a, b) {
  const R = 6371;  // earth radius km
  const toRad = d => d * Math.PI / 180;
  const dLat = toRad(b[0] - a[0]);
  const dLon = toRad(b[1] - a[1]);
  const lat1 = toRad(a[0]);
  const lat2 = toRad(b[0]);
  const x = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(x));
};

// Utility: total km along an ordered list of [lat,lng] points
window.routeKm = function(points) {
  let total = 0;
  for (let i = 1; i < points.length; i++) total += haversineKm(points[i - 1], points[i]);
  return total;
};

// Utility: get coords array for a run (start point + all stops + school)
window.runCoords = function(run) {
  const d = window.APP_DATA;
  return run.stops.map(s => d.byId.stop[s.stopId].coords);
};

// Utility: nearest-neighbor TSP from a start point through a list of [lat,lng]
// to an end point. Returns the optimized order of indices into `points`.
window.nearestNeighborOrder = function(points, endIdx) {
  const n = points.length;
  if (n <= 2) return points.map((_, i) => i);
  const visited = new Array(n).fill(false);
  const order = [0];                       // pin first stop as start
  visited[0] = true;
  if (endIdx != null) visited[endIdx] = true;
  while (order.length < n - (endIdx != null ? 1 : 0)) {
    const last = points[order[order.length - 1]];
    let best = -1, bestD = Infinity;
    for (let i = 0; i < n; i++) {
      if (visited[i]) continue;
      const dist = haversineKm(last, points[i]);
      if (dist < bestD) { bestD = dist; best = i; }
    }
    if (best < 0) break;
    visited[best] = true;
    order.push(best);
  }
  if (endIdx != null) order.push(endIdx);
  return order;
};

// Utility: which run is a bus currently on
window.currentRunForBus = function(busId) {
  const lp = APP_DATA.livePositions[busId];
  if (!lp || !lp.currentRunId) return null;
  for (const r of APP_DATA.routes) {
    for (const run of r.runs) {
      if (run.id === lp.currentRunId) return { route: r, run };
    }
  }
  return null;
};

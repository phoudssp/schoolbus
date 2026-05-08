// SafeRide — shared mock data for the prototype
// Geography: Vientiane, Laos. Center ~17.97, 102.61
// "Now" is fixed at 07:05 AM so most morning runs are mid-flight for a realistic demo.

window.APP_NOW = new Date('2026-05-07T07:05:00+07:00');

window.APP_DATA = {
  operator: {
    id: 'OP-1',
    name: 'SafeRide Bus Co.',
    nameLo: 'ບໍລິສັດ SafeRide ຂົນສົ່ງນັກຮຽນ',
    city: 'Vientiane',
    cityLo: 'ນະຄອນຫຼວງວຽງຈັນ',
    center: [17.9700, 102.6150],
    contact: { phone: '+856 21 555 0100', email: 'ops@saferide.la' }
  },

  schools: [
    {
      id: 'vis',
      name: 'Vientiane International School',
      nameLo: 'ໂຮງຮຽນສາກົນວຽງຈັນ',
      shortName: 'VIS',
      address: 'Tha Ngon Road, Saysettha',
      coords: [17.9650, 102.6020],
      bellAm: '07:30',
      bellPm: '14:30',
      color: '#2563EB',  // blue
      students: 320
    },
    {
      id: 'sgs',
      name: 'Sengsavanh Primary School',
      nameLo: 'ໂຮງຮຽນປະຖົມເຊັງສະຫວັນ',
      shortName: 'Sengsavanh',
      address: 'Sisattanak District',
      coords: [17.9580, 102.6280],
      bellAm: '08:00',
      bellPm: '15:00',
      color: '#059669',  // green
      students: 180
    },
    {
      id: 'pty',
      name: 'Panyathip International School',
      nameLo: 'ໂຮງຮຽນສາກົນປັນຍາທິບ',
      shortName: 'Panyathip',
      address: 'Saysettha District',
      coords: [17.9740, 102.6480],
      bellAm: '08:30',
      bellPm: '15:30',
      color: '#D97706',  // amber
      students: 240
    }
  ],

  buses: [
    { id: 'B-101', plate: 'ດທ-1234', capacity: 40, status: 'active' },
    { id: 'B-102', plate: 'ດທ-1567', capacity: 40, status: 'active' },
    { id: 'B-103', plate: 'ດທ-1890', capacity: 30, status: 'active' },
    { id: 'B-104', plate: 'ດທ-2134', capacity: 40, status: 'active' },
    { id: 'B-105', plate: 'ດທ-2456', capacity: 22, status: 'active', notes: 'Special needs / wheelchair-equipped' },
    { id: 'B-106', plate: 'ດທ-2789', capacity: 40, status: 'idle', notes: 'Backup bus' }
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

  // Stops with coordinates around Vientiane neighborhoods
  stops: {
    // Cluster A — Sisattanak / central
    'STOP-A1': { coords: [17.9460, 102.5950], name: 'Saylom Junction',           nameLo: 'ສາມແຍກໄຊລົມ' },
    'STOP-A2': { coords: [17.9520, 102.6010], name: 'Wat Sisaket Stop',          nameLo: 'ປ້າຍວັດສີສະເກດ' },
    'STOP-A3': { coords: [17.9590, 102.5920], name: 'Hong Kham Village',         nameLo: 'ບ້ານຫົງຄຳ' },
    'STOP-A4': { coords: [17.9430, 102.5870], name: 'Mekong Riverside',          nameLo: 'ແຄມຂອງ' },
    'STOP-A5': { coords: [17.9480, 102.6030], name: 'Talat Sao Junction',        nameLo: 'ສາມແຍກຕະຫຼາດເຊົ້າ' },
    // Cluster B — Sikhottabong / west
    'STOP-B1': { coords: [17.9710, 102.5800], name: 'Sikhottabong Market',       nameLo: 'ຕະຫຼາດສີໂຄດຕະບອງ' },
    'STOP-B2': { coords: [17.9810, 102.5760], name: 'Phonsinuan Village',        nameLo: 'ບ້ານໂພນສີນວນ' },
    'STOP-B3': { coords: [17.9690, 102.5850], name: 'Wattay Junction',           nameLo: 'ສາມແຍກວັດໄຕ' },
    // Cluster C — Hadxaifong / east-south
    'STOP-C1': { coords: [17.9410, 102.6520], name: 'Hadxaifong Bridge',         nameLo: 'ຂົວຫາດຊາຍຟອງ' },
    'STOP-C2': { coords: [17.9380, 102.6620], name: 'Dong Dok Village',          nameLo: 'ບ້ານດົງໂດກ' },
    'STOP-C3': { coords: [17.9450, 102.6700], name: 'Salakham Junction',         nameLo: 'ສາມແຍກສາລາຄຳ' },
    // Cluster D — Saysettha / east
    'STOP-D1': { coords: [17.9820, 102.6390], name: 'Saysettha Mall',            nameLo: 'ສູນການຄ້າໄຊເສດຖາ' },
    'STOP-D2': { coords: [17.9760, 102.6510], name: 'Phonpapao Junction',        nameLo: 'ສາມແຍກໂພນປະເພົາ' },
    'STOP-D3': { coords: [17.9880, 102.6420], name: 'That Luang Square',         nameLo: 'ຫໍພະທາດຫຼວງ' },
    'STOP-D4': { coords: [17.9700, 102.6540], name: 'Saphanthong Tai',           nameLo: 'ສະພານທອງໃຕ້' },
    // Cluster E — Special needs route
    'STOP-E1': { coords: [17.9560, 102.6080], name: 'Khounta Village',           nameLo: 'ບ້ານຄູນຕາ' },
    'STOP-E2': { coords: [17.9620, 102.6320], name: 'Dongpalan Junction',        nameLo: 'ສາມແຍກດົງປາລານ' },
    // School stops
    'STOP-VIS':       { coords: [17.9650, 102.6020], name: 'Vientiane International School', nameLo: 'ໂຮງຮຽນສາກົນວຽງຈັນ', isSchool: 'vis' },
    'STOP-SGS':       { coords: [17.9580, 102.6280], name: 'Sengsavanh School',              nameLo: 'ໂຮງຮຽນເຊັງສະຫວັນ', isSchool: 'sgs' },
    'STOP-PTY':       { coords: [17.9740, 102.6480], name: 'Panyathip School',               nameLo: 'ໂຮງຮຽນປັນຍາທິບ', isSchool: 'pty' }
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

  // Live bus positions at APP_NOW (07:05). Used for the operator/parent maps.
  livePositions: {
    'B-101': { coords: [17.9555, 102.5970], heading: 45,  status: 'in_transit', currentRunId: 'RUN-101-AM-VIS', nextStopId: 'STOP-A4', etaMin: 3 },
    'B-102': { coords: [17.9790, 102.6440], heading: 90,  status: 'in_transit', currentRunId: 'RUN-102-AM-PTY', nextStopId: 'STOP-D2', etaMin: 11 },
    'B-103': { coords: [17.9750, 102.5780], heading: 270, status: 'at_stop',    currentRunId: 'RUN-103-AM-VIS', nextStopId: 'STOP-B2', etaMin: 0 },
    'B-104': { coords: [17.9420, 102.6500], heading: 30,  status: 'starting',   currentRunId: 'RUN-104-AM-SGS', nextStopId: 'STOP-C1', etaMin: 5 },
    'B-105': { coords: [17.9590, 102.6090], heading: 60,  status: 'in_transit', currentRunId: 'RUN-105-AM-MIXED', nextStopId: 'STOP-VIS', etaMin: 18 },
    'B-106': { coords: [17.9700, 102.6150], heading: 0,   status: 'idle',       currentRunId: null, nextStopId: null, etaMin: null }
  },

  // Simulated alerts visible on the operator dashboard
  alerts: [
    { id: 'A-1', severity: 'info',    busId: 'B-101', message: 'Run RUN-101-AM-VIS on schedule',     messageLo: 'ເສັ້ນທາງ RUN-101-AM-VIS ຕາມເວລາ',                  ts: '2026-05-07T06:55:00+07:00' },
    { id: 'A-2', severity: 'warning', busId: 'B-104', message: 'Bus 104 starting 5 min late',        messageLo: 'ລົດ 104 ອອກຊ້າ 5 ນາທີ',                          ts: '2026-05-07T07:01:00+07:00' },
    { id: 'A-3', severity: 'info',    busId: 'B-105', message: 'Special needs student S-4001 boarded', messageLo: 'ນັກຮຽນພິເສດ S-4001 ຂຶ້ນລົດແລ້ວ',                ts: '2026-05-07T06:55:14+07:00' },
    { id: 'A-4', severity: 'warning', busId: 'B-102', message: 'Light traffic on Phonpapao Rd',      messageLo: 'ລົດແອອັດເລັກນ້ອຍຖະໜົນໂພນປະເພົາ',                  ts: '2026-05-07T07:03:00+07:00' }
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

// Build id→object lookups for convenience
(function buildIndices() {
  const d = window.APP_DATA;
  d.byId = {
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
  };
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

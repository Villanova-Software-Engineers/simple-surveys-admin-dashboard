
export const surveyStats = {
  totalParticipants: 24,
  completedSurveys: 156,
  expiredSurveys: 18,
  responseRate: 89.7
}

export const participants = [
  {
    id: 'P001',
    completedSurveys: 8,
    expiredSurveys: 2,
    status: 'Active'
  },
  {
    id: 'P002',
    completedSurveys: 10,
    expiredSurveys: 0,
    status: 'Active'
  },
  {
    id: 'P003',
    completedSurveys: 5,
    expiredSurveys: 5,
    status: 'Inactive'
  },
  {
    id: 'P004',
    completedSurveys: 7,
    expiredSurveys: 3,
    status: 'Active'
  },
  {
    id: 'P005',
    completedSurveys: 9,
    expiredSurveys: 1,
    status: 'Active'
  }
]

export const surveyResponses = [
  {
    id: 'R001',
    participantId: 'P001',
    surveyId: 'Morning Survey',
    notificationTime: '2026-10-09T08:00:00',
    completedTime: null,
    latencyMs: 135000,
    status: 'Completed'
  },
  {
    id: 'R002',
    participantId: 'P002',
    surveyId: 'Morning Survey',
    notificationTime: '2026-10-09T08:00:00',
    completedTime: '2026-10-09T08:01:30',
    latencyMs: 90000,
    status: 'Completed'
  },
  {
    id: 'R003',
    participantId: 'P003',
    surveyId: 'Morning Survey',
    notificationTime: '2026-10-09T08:00:00',
    completedTime: null,
    latencyMs: null,
    status: 'Expired'
  },
  {
    id: 'R004',
    participantId: 'P004',
    surveyId: 'Afternoon Survey',
    notificationTime: '2026-10-09T13:00:00',
    completedTime: '2026-10-09T13:03:20',
    latencyMs: 200000,
    status: 'Completed'
  },
  {
    id: 'R005',
    participantId: 'P005',
    surveyId: 'Afternoon Survey',
    notificationTime: '2026-10-09T13:00:00',
    completedTime: null,
    latencyMs: null,
    status: 'Ignored'
  }
]

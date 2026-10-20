
export function calculateSurveyStats(responses, participants) {
  const totalParticipants = participants.length

  const completedSurveys = responses.filter(
    (response) => response.status === 'Completed'
  ).length

  const expiredSurveys = responses.filter(
    (response) => response.status === 'Expired'
  ).length

  const responseRate = responses.length > 0
    ? (completedSurveys / responses.length) * 100
    : 0

  return {
    totalParticipants,
    completedSurveys,
    expiredSurveys,
    responseRate
  }
}

import ResponseChart from '../components/ResponseChart'
import StatCard from '../components/StatCard'
import { participants, surveyResponses } from '../data/mockData'
import { calculateSurveyStats } from '../utils/surveyCalculations'

function Dashboard() {
  const stats = calculateSurveyStats(surveyResponses, participants)

  return (
    <section>
      <h1>Overview</h1>
      <p>Monitor survey participation and response activity.</p>

      <h2>Survey Statistics</h2>

      <div className="stats-grid">
        <StatCard
          title="Total Participants"
          value={stats.totalParticipants}
        />

        <StatCard
          title="Completed Surveys"
          value={stats.completedSurveys}
        />

        <StatCard
          title="Expired Surveys"
          value={stats.expiredSurveys}
        />

        <StatCard
          title="Response Rate"
          value={`${stats.responseRate.toFixed(1)}%`}
        />
    </div>
        <ResponseChart responses={surveyResponses} />
    </section>
  )
}

export default Dashboard

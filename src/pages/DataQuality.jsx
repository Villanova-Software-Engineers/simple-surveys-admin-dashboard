
import { surveyResponses } from '../data/mockData'
import StatCard from '../components/StatCard'

function DataQuality() {
  // Total number of survey prompts
  const totalResponses = surveyResponses.length

  // Separate responses by status
  const completedResponses = surveyResponses.filter(
    (response) => response.status === 'Completed'
  )

  const expiredResponses = surveyResponses.filter(
    (response) => response.status === 'Expired'
  )

  // Calculate completion rate
  const completionRate = totalResponses > 0
    ? (completedResponses.length / totalResponses) * 100
    : 0

  // Only use valid latency values from completed responses
  const validLatencyResponses = completedResponses.filter(
    (response) =>
      typeof response.latencyMs === 'number' &&
      Number.isFinite(response.latencyMs) &&
      response.latencyMs >= 0
  )

  // Calculate average latency in milliseconds
  const totalLatency = validLatencyResponses.reduce(
    (sum, response) => sum + response.latencyMs,
    0
  )

  const averageLatency = validLatencyResponses.length > 0
    ? totalLatency / validLatencyResponses.length
    : null

  // Identify completed responses missing timestamps
  const missingTimestamps = completedResponses.filter(
    (response) => !response.completedTime
  )

  const flaggedResponses = completedResponses.filter(
    (response) =>
      !response.completedTime ||
      typeof response.latencyMs !== 'number' ||
      !Number.isFinite(response.latencyMs) ||
      response.latencyMs < 0
  )

  return (
    <section>
      <h1>Data Quality</h1>
      <p>
        Monitor survey completion, response timing,
        and missing data.
      </p>

      <h2>Quality Metrics</h2>

      <div className="stats-grid">
        <StatCard
          title="Completion Rate"
          value={`${completionRate.toFixed(1)}%`}
        />

        <StatCard
          title="Average Response Latency"
          value={
            averageLatency === null
              ? 'N/A'
              : `${(averageLatency / 1000).toFixed(0)} sec`
          }
        />

        <StatCard
          title="Expired Surveys"
          value={expiredResponses.length}
        />

        <StatCard
          title="Missing Completion Timestamps"
          value={missingTimestamps.length}
        />
          </div>
          
      <h2>Flagged Records</h2>

      <div className="table-container">
        <table className="participants-table">
          <thead>
            <tr>
              <th>Response ID</th>
              <th>Participant ID</th>
              <th>Issue</th>
            </tr>
          </thead>

          <tbody>
            {flaggedResponses.map((response) => (
              <tr key={response.id}>
                <td>{response.id}</td>
                <td>{response.participantId}</td>
                <td>
                  {!response.completedTime
                    ? 'Missing completion timestamp'
                    : 'Invalid response latency'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {flaggedResponses.length === 0 && (
          <p className="empty-message">
            No data quality issues detected by the current checks.
          </p>
        )}
      </div>

    </section>
  )
}

export default DataQuality

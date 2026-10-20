
import { useState } from 'react'
import { surveyResponses } from '../data/mockData'

function Responses() {
  const [statusFilter, setStatusFilter] = useState('All')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  
const filteredResponses = surveyResponses.filter((response) => {
  const matchesStatus =
    statusFilter === 'All' || response.status === statusFilter

  const responseDate = response.notificationTime.slice(0, 10)

  const matchesStartDate =
    !startDate || responseDate >= startDate

  const matchesEndDate =
    !endDate || responseDate <= endDate

  return matchesStatus && matchesStartDate && matchesEndDate
})


  function formatTime(timestamp) {
    if (!timestamp) {
      return '—'
    }

    return new Date(timestamp).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  function formatLatency(latencyMs) {
    if (latencyMs === null) {
      return '—'
    }

    return `${(latencyMs / 1000).toFixed(0)} sec`
  }

  return (
    <section>
      <h1>Responses</h1>
      <p>Monitor survey responses and completion status.</p>

      <div className="responses-toolbar">
        <label htmlFor="status-filter">Filter by status:</label>

        <select
          id="status-filter"
          value={statusFilter}
          onChange={(event) => setStatusFilter(event.target.value)}
        >
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Expired">Expired</option>
          <option value="Ignored">Ignored</option>
        </select>
      </div>


<div className="date-range-filter">
  <div className="date-field">
    <label htmlFor="start-date">Start Date</label>
    <input
      id="start-date"
      type="date"
      value={startDate}
      max={endDate || undefined}
      onChange={(event) => setStartDate(event.target.value)}
    />
  </div>

  <div className="date-field">
    <label htmlFor="end-date">End Date</label>
    <input
      id="end-date"
      type="date"
      value={endDate}
      min={startDate || undefined}
      onChange={(event) => setEndDate(event.target.value)}
    />
  </div>

  <button
    type="button"
    className="clear-date-button"
    onClick={() => {
      setStartDate('')
      setEndDate('')
    }}
  >
    Clear Dates
  </button>
</div>


      <div className="table-container">
        <table className="participants-table">
          <thead>
            <tr>
              <th>Participant ID</th>
              <th>Survey</th>
              <th>Notification Time</th>
              <th>Completion Time</th>
              <th>Latency</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredResponses.map((response) => (
              <tr key={response.id}>
                <td>{response.participantId}</td>
                <td>{response.surveyId}</td>
                <td>{formatTime(response.notificationTime)}</td>
                <td>{formatTime(response.completedTime)}</td>
                <td>{formatLatency(response.latencyMs)}</td>
                <td>
                  <span
                    className={`response-status status-${response.status.toLowerCase()}`}
                  >
                    {response.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredResponses.length === 0 && (
          <p className="empty-message">
            No responses match this filter.
          </p>
        )}
      </div>
    </section>
  )
}

export default Responses

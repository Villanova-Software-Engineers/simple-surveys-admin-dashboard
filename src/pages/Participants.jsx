import { useState } from 'react'
import { participants, surveyResponses } from '../data/mockData'

function Participants() {

const [searchTerm, setSearchTerm] = useState('')

const filteredParticipants = participants.filter((participant) =>
  participant.id.toLowerCase().includes(searchTerm.toLowerCase())
)

  return (
    <section>
      <h1>Participants</h1>
      <p>Monitor participant activity and survey completion.</p>

        <div className="participants-toolbar">
        <label htmlFor="participant-search">Search participants:</label>

        <input
            id="participant-search"
            type="search"
            placeholder="Search by participant ID..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
        />
        </div>

      <div className="table-container">
        <table className="participants-table">
          <thead>
            <tr>
              <th>Participant ID</th>
              <th>Completed Surveys</th>
              <th>Expired Surveys</th>
              <th>Completion Rate</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredParticipants.map((participant) => {
              const participantResponses = surveyResponses.filter(
                (response) => response.participantId === participant.id
              )

              const completedSurveys = participantResponses.filter(
                (response) => response.status === 'Completed'
              ).length

              const expiredSurveys = participantResponses.filter(
                (response) => response.status === 'Expired'
              ).length
                
              
              const completionRate = participantResponses.length > 0
                ? (completedSurveys / participantResponses.length) * 100
                : null


              
return (
  <tr key={participant.id}>
    <td>{participant.id}</td>
    <td>{completedSurveys}</td>
    <td>{expiredSurveys}</td>

    <td>
      {completionRate === null ? (
        <span>—</span>
      ) : (
        <div className="participant-progress">
          <div
            className="participant-progress-track"
            role="progressbar"
            aria-label={`Completion rate for ${participant.id}`}
            aria-valuenow={completionRate}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="participant-progress-fill"
              style={{ width: `${completionRate}%` }}
            />
          </div>
          <span>{completionRate.toFixed(0)}%</span>
        </div>
      )}
    </td>

    <td>
      <span
        className={
          participant.status === 'Active'
            ? 'status-active'
            : 'status-inactive'
        }
      >
        {participant.status}
      </span>
    </td>
  </tr>
)

            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Participants
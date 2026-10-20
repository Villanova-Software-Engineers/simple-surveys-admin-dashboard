
function ResponseChart({ responses }) {
  const total = responses.length

  const statuses = [
    { label: 'Completed', className: 'completed' },
    { label: 'Expired', className: 'expired' },
    { label: 'Ignored', className: 'ignored' }
  ]

  return (
    <div className="response-chart">
      <h2>Response Status Breakdown</h2>

      {statuses.map((status) => {
        const count = responses.filter(
          (response) => response.status === status.label
        ).length

        const percentage = total > 0
          ? (count / total) * 100
          : 0

        return (
          <div className="chart-row" key={status.label}>
            <div className="chart-label">
              <span>{status.label}</span>
              <span>
                {count} ({percentage.toFixed(1)}%)
              </span>
            </div>

            <div className="chart-track">
              <div
                className={`chart-bar ${status.className}`}
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ResponseChart

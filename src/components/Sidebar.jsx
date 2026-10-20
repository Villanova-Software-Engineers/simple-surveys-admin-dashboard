
function Sidebar({ activePage, setActivePage }) {
  const pages = [
    'Overview',
    'Participants',
    'Responses',
    'Data Quality'
  ]

  return (
    <aside className="sidebar">
      <h2>Simple Surveys</h2>

      <nav aria-label="Dashboard navigation">
        <ul>
          {pages.map((page) => (
            <li key={page}>
              <button
                type="button"
                className={activePage === page ? 'active' : ''}
                onClick={() => setActivePage(page)}
                aria-current={activePage === page ? 'page' : undefined}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar

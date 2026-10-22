import "../styles/under-update.css";

export default function UnderUpdate() {
  return (
    <section className="uu-section" aria-labelledby="uu-title">
      {/* Decorative background elements */}
      <div className="uu-decoration uu-decoration-one" />
      <div className="uu-decoration uu-decoration-two" />

      <div className="uu-container">
        <div className="uu-card">
          {/* Animated icon */}
          <div className="uu-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0 .33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33 1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82 1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </div>

          {/* Status badge */}
          <span className="uu-badge">
            <span className="uu-status-dot" />
            Maintenance
          </span>

          {/* Main heading */}
          <h1 id="uu-title" className="uu-title">
            The site is being
            <span className="uu-highlight"> updated.</span>
          </h1>

          {/* Subtitle */}
          <p className="uu-sub">Stay tuned</p>

          {/* Animated progress bar */}
          <div
            className="uu-bar"
            role="progressbar"
            aria-label="Website update in progress"
            aria-valuetext="In progress"
          >
            <span />
          </div>
        </div>
      </div>
    </section>
  );
}

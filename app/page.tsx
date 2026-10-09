export default function Home() {
  return (
    <>
      <section>
        <div className="hero">
          <div className="hero-text">
            <h1>Divyansh Lalwani</h1>
            <p>
              I am the founder and CEO of <a href="https://layernorm.co" target="_blank" rel="noopener noreferrer">LayerNorm</a>,
              where we are building <a href="https://getoverlay.io" target="_blank" rel="noopener noreferrer">Overlay</a>:
              a control plane for AI employees that enterprises can create, manage, and deploy
              wherever work happens. Overlay is open source and self-hostable.
            </p>
            <p>
              Previously, I studied biomedical engineering and applied math at <a href="https://www.jhu.edu" target="_blank" rel="noopener noreferrer">Johns Hopkins</a>,
              automated FDA submission checks at <a href="https://www.bms.com" target="_blank" rel="noopener noreferrer">Bristol Myers Squibb</a>,
              and did research on brain-computer interfaces at the <a href="https://thakorlab.github.io" target="_blank" rel="noopener noreferrer">Thakor Lab</a> and
              stroke diagnostics with <a href="https://bme.jhu.edu" target="_blank" rel="noopener noreferrer">AptaTech</a>.
            </p>
            <p>
              I was also a <a href="https://neo.com/scholars" target="_blank" rel="noopener noreferrer">Neo Scholar Finalist</a> and
              a builder at <a href="https://foundersinc.com" target="_blank" rel="noopener noreferrer">Founders, Inc.</a>
            </p>
            <p className="muted" style={{ fontSize: '0.9rem' }}>
              p.s. call me dev (like &quot;they&apos;ve&quot;)
            </p>
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/dev-profile.jpg"
            alt="Divyansh Lalwani"
            className="profile-image"
          />
        </div>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          <a href="mailto:divyansh@layernorm.co">divyansh@layernorm.co</a>
          {' '}or <a href="https://calendar.app.google/C93M6yNfS8k6gQdP8" target="_blank" rel="noopener noreferrer">book a call</a>
        </p>
      </section>

      <section>
        <h2>Elsewhere</h2>
        <p>
          <a href="https://x.com/dsllwn" target="_blank" rel="noopener noreferrer">X</a>,{' '}
          <a href="https://linkedin.com/in/divyansh-lalwani/" target="_blank" rel="noopener noreferrer">LinkedIn</a>,{' '}
          <a href="https://github.com/DevelopedByDev" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
      </section>

      <section>
        <h2>Experience</h2>
        <div className="entry">
          <span className="entry-title">Founder &amp; CEO, LayerNorm</span>
          <span className="entry-date">2026 - present</span>
        </div>
        <div className="entry">
          <span className="entry-title">Builder, Founders, Inc. (Canopy)</span>
          <span className="entry-date">2026</span>
        </div>
        <div className="entry">
          <span className="entry-title">Scholar Finalist, Neo</span>
          <span className="entry-date">2025 - 2026</span>
        </div>
        <div className="entry">
          <span className="entry-title">Statistical Programming Intern, Bristol Myers Squibb</span>
          <span className="entry-date">2024</span>
        </div>
        <div className="entry">
          <span className="entry-title">Undergraduate Researcher, JHU School of Medicine</span>
          <span className="entry-date">2023</span>
        </div>
        <div className="entry">
          <div>
            <span className="entry-title">Design Team Member, JHU Biomedical Engineering</span>
            <div className="entry-sub">Publication: A Point-of-Care System for Prehospital Stroke Screening</div>
          </div>
          <span className="entry-date">2023</span>
        </div>
        <div className="entry">
          <span className="entry-title">Machine Learning Intern, NeuroEquilibrium</span>
          <span className="entry-date">2021 - 2022</span>
        </div>
      </section>

      <section>
        <h2>Previous Projects</h2>
        <div className="work-grid">
          <div className="work-item">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/autoquill.png" alt="AutoQuill" className="work-thumb" />
            <div className="work-body">
              <h3>AutoQuill</h3>
              <div className="work-venue">2025</div>
              <p className="work-desc">AI-powered voice assistant in your menubar. Voice to action with one hotkey.</p>
              <p className="work-links">
                website <a href="https://getautoquill.com" target="_blank" rel="noopener noreferrer">getautoquill.com</a>
              </p>
            </div>
          </div>

          <div className="work-item">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/sur.png" alt="Students for Unified Relief" className="work-thumb" />
            <div className="work-body">
              <h3>Students for Unified Relief</h3>
              <div className="work-venue">2021</div>
              <p className="work-desc">Cofounded initiative that raised $53,000 for oxygen concentrators during covid.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

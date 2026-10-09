import { getAllPosts } from '@/lib/posts'

export default function Home() {
  const posts = getAllPosts()

  return (
    <>
      {/* Hero Section */}
      <section id="home">
        <div className="hero-content">
          <div className="hero-text">
            <h1>divyansh lalwani</h1>
            <p className="intro-text">
              biomedical engineering + applied math @ <strong>johns hopkins</strong>. 
              enchanted by ai, especially in productivity and healthcare. 
              building software to improve how humans interact with ai on computers.
            </p>
            
            <div className="social-links">
              <a href="mailto:divyansh@layernorm.co" className="social-link" style={{ textDecoration: 'underline' }}>email</a>
              <a href="https://x.com/dsllwn" target="_blank" rel="noopener noreferrer" className="social-link" style={{ textDecoration: 'underline' }}>x</a>
              <a href="http://linkedin.com/in/divyansh-lalwani/" target="_blank" rel="noopener noreferrer" className="social-link" style={{ textDecoration: 'underline' }}>linkedin</a>
              <a href="http://github.com/DevelopedByDev" target="_blank" rel="noopener noreferrer" className="social-link" style={{ textDecoration: 'underline' }}>github</a>
            </div>

            <p className="muted mono" style={{ fontSize: '0.845rem', marginTop: '1.3rem' }}>
              p.s. call me dev (like "they've")
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

      {/* Experiences Section */}
      <section id="experiences">
        <h2>experiences</h2>
        
        <h3>technical</h3>
        <div>
          <div className="entry">
            <div className="entry-header">
              <span className="entry-title">software engineering @ bristol myers squibb</span>
              <span className="entry-date">2024</span>
            </div>
            <p className="entry-description">
              automated FDA submission processes using Python OCR pipelines, ensuring 100% accuracy in document validation
            </p>
          </div>

          <div className="entry">
            <div className="entry-header">
              <span className="entry-title">motor rehabilitation quantifier @ jhu medicine</span>
              <span className="entry-date">2023</span>
            </div>
            <p className="entry-description">
              developed computer vision system tracking joint motion post-surgery. achieved 96.7% accuracy in rehabilitation analysis
            </p>
          </div>

          <div className="entry">
            <div className="entry-header">
              <span className="entry-title">neuroengineering research @ jhu medicine</span>
              <span className="entry-date">2023</span>
            </div>
            <p className="entry-description">
              designed in-ear EEG systems for brain-computer interfaces. developed electrodes optimizing conductance and impedance
            </p>
          </div>

          <div className="entry">
            <div className="entry-header">
              <span className="entry-title">aptatech @ jhu biomedical engineering</span>
              <span className="entry-date">2022 – 2023</span>
            </div>
            <p className="entry-description">
              led prototype development for an aptamer-based electrochemical assay to diagnose ischemic stroke
            </p>
          </div>

          <div className="entry">
            <div className="entry-header">
              <span className="entry-title">ml for diabetic retinopathy @ neuroequilibrium</span>
              <span className="entry-date">2021 – 2022</span>
            </div>
            <p className="entry-description">
              trained deep CNNs to classify retinal OCT scans with 95.2% accuracy. deployed for rural telemedicine
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2>projects</h2>
        
        <h3>technical</h3>
        <div>
          <div className="entry">
            <div className="entry-header">
              <a href="https://getautoquill.com" target="_blank" rel="noopener noreferrer" className="entry-title link-underline">
                AutoQuill
              </a>
              <span className="entry-date">2025</span>
            </div>
            <p className="entry-description">
              ai-powered voice assistant that lives in your menubar. capture thoughts, transcribe meetings, and transform voice into action — all with a single hotkey
            </p>
          </div>
        </div>

        <h3>social</h3>
        <div>
          <div className="entry">
            <div className="entry-header">
              <span className="entry-title">resident advisor @ johns hopkins</span>
              <span className="entry-date">2023 – present</span>
            </div>
            <p className="entry-description">
              supporting first-year students through leadership, community-building, and crisis management
            </p>
          </div>
          
          <div className="entry">
            <div className="entry-header">
              <span className="entry-title">students for unified relief</span>
              <span className="entry-date">2021</span>
            </div>
            <p className="entry-description">
              cofounded initiative that raised $53,000 to provide oxygen concentrators to hospitals during covid-19
            </p>
          </div>

          <div className="entry">
            <div className="entry-header">
              <span className="entry-title">education initiatives</span>
              <span className="entry-date">2020 – 2021</span>
            </div>
            <p className="entry-description">
              taught programming and creative writing to 150+ students with accessible curricula for young learners
            </p>
          </div>
        </div>
      </section>

      {/* Writing Section */}
      <section id="writing">
        <h2>writing</h2>
        <p className="intro-text" style={{ marginBottom: '0.975rem' }}>
          thoughts on building, learning, and the journey to becoming a better developer. 
          for shorter writing, check out my <a href="https://x.com/dsllwn" target="_blank" rel="noopener noreferrer" className="link-underline">x</a>
        </p>

        <h3>essays</h3>
        <div>
          {posts.map((post) => (
            <a 
              key={post.slug} 
              href={`/writing/${encodeURIComponent(post.slug)}`}
              className="blog-entry block"
            >
              <div className="blog-title">{post.title}</div>
              <div className="blog-date">
                {new Date(post.date).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric',
                  year: 'numeric'
                })}
              </div>
              {post.excerpt && <p className="blog-excerpt">{post.excerpt}</p>}
            </a>
          ))}
        </div>
      </section>

      {/* Misc Section */}
      <section id="misc">
        <h2>misc</h2>
        
        <h3>college</h3>
        <div>
          <div className="entry">
            <div className="entry-header">
              <a href="https://neo.com/scholars" target="_blank" rel="noopener noreferrer" className="entry-title link-underline">
                neo scholar finalist
              </a>
            </div>
          </div>
        </div>

        <h3>high school</h3>
        <div>
          <div className="entry">
            <div className="entry-header">
              <span className="entry-title">student body president · valedictorian · act 36/36</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

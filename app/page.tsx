export default function Home() {
  return (
    <section id="home">
      <h1>divyansh (dev) lalwani</h1>
      <p className="text-lg">
        biomedical engineering and applied math @ johns hopkins. enchanted by ai, especially in productivity and healthcare. currently building software to help genz reclaim their focus in a distracted world.
      </p>

      <p className="text-lg">
        will be in sf starting may 16. if you're building something cool, hmu
      </p>
      
      <div className="flex flex-col md:flex-row gap-4">
        <a href="mailto:dlalwan1@jhu.edu">
          dlalwan1@jhu.edu
        </a>
        <a href="https://x.com/dsllwn" target="_blank" rel="noopener noreferrer">x</a>
        <a href="http://linkedin.com/in/divyansh-lalwani/" target="_blank" rel="noopener noreferrer">
          linkedin
        </a>
        <a href="http://github.com/DevelopedByDev" target="_blank" rel="noopener noreferrer">
          github
        </a>
      </div>
      <br />
      <p>
        p.s. dev is pronounced like "they've"
      </p>
    </section>
  )
}
export default function Projects() {
  return (
    <section id="projects">
      <h2>projects</h2>
      
      <h3>technical</h3>
      <div className="space-y-6">
        <div>
          <div className="flex justify-between items-baseline mb-2">
            <h4 className="font-bold text-lg">ColorGuesserPro <a href="/projects/colorguesspro-privacy" className="text-sm font-normal underline ml-2">privacy policy</a></h4>
            <span className="time-span">2025</span>
          </div>
          <p>a simple app to put your color theory skills to the test; made to get experience using swiftui</p>
        </div>
      </div>

      <h3 className="mt-8">social</h3>

      <div className="space-y-6">

        <div>
          <div className="flex justify-between items-baseline mb-2">
            <h4 className="font-bold text-lg">resident advisor, johns hopkins university</h4>
            <span className="time-span">2023 – Present</span>
          </div>
          <p>supporting <strong>first-year students</strong> through leadership, community-building, and crisis management</p>
        </div>
        
        <div>
          <div className="flex justify-between items-baseline mb-2">
            <h4 className="font-bold text-lg">students for unified relief</h4>
            <span className="time-span">2021</span>
          </div>
          <p>cofounded an initiative that raised <strong>USD 53,000</strong> to provide <strong>oxygen concentrators</strong> to hospitals during the covid-19 crisis. Recognized by <strong>healthcare leaders and government officials</strong></p>
        </div>

        <div>
          <div className="flex justify-between items-baseline mb-2">
            <h4 className="font-bold text-lg">education initiatives</h4>
            <span className="time-span">2020 – 2021</span>
          </div>
          <p>taught <strong>programming and creative writing</strong> to <strong>150+ students</strong>, designing accessible curricula for young learners</p>
        </div>
      </div>
    </section>
  )
}
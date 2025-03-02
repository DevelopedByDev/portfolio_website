export default function Experiences() {
  return (
    <section id="experiences">
      <h2>experiences</h2>
      
      <h3>technical</h3>
      <div className="space-y-6">
        <div>
          <div className="flex justify-between items-baseline mb-2">
            <h4 className="font-bold text-lg">software engineering for clinical trials @ bristol myers squibb</h4>
            <span className="time-span">2024</span>
          </div>
          <p>Automated <strong>FDA submission processes</strong> using <strong>Python OCR pipelines</strong>, ensuring <strong>100% accuracy</strong> in document validation.</p>
        </div>

        <div>
          <div className="flex justify-between items-baseline mb-2">
            <h4 className="font-bold text-lg">motor rehabilitation quantifier @ jhu school of medicine</h4>
            <span className="time-span">2023</span>
          </div>
          <p>Developed a <strong>computer vision system</strong> to track joint motion post-surgery. Achieved <strong>96.7% accuracy</strong> in analyzing rehabilitation progress.</p>
        </div>

        <div>
          <div className="flex justify-between items-baseline mb-2">
            <h4 className="font-bold text-lg">neuroengineering research @ jhu school of medicine</h4>
            <span className="time-span">2023</span>
          </div>
          <p>Designed and assembled <strong>in-ear EEG systems</strong> for <strong>brain-computer interfaces</strong>. Developed electrodes optimizing for <strong>conductance and impedance</strong>, contributing to <strong>wearable neurotechnology</strong>.</p>
        </div>

        <div>
          <div className="flex justify-between items-baseline mb-2">
            <h4 className="font-bold text-lg">aptatech @ jhu biomedical engineering</h4>
            <span className="time-span">2022 – 2023</span>
          </div>
          <p>Led prototype development for an <strong>aptamer-based electrochemical assay</strong> to diagnose <strong>ischemic stroke</strong>.</p>
        </div>

        <div>
          <div className="flex justify-between items-baseline mb-2">
            <h4 className="font-bold text-lg">machine learning for diabetic retinopathy @ neuroequilibrium</h4>
            <span className="time-span">2021 – 2022</span>
          </div>
          <p>Trained <strong>deep CNNs</strong> to classify <strong>retinal OCT scans</strong>, achieving <strong>95.2% accuracy</strong> on clinical data. Deployed the system for <strong>rural telemedicine</strong>.</p>
        </div>
      </div>
    </section>
  )
}
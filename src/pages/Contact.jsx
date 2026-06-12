import { PageHead } from '../components/Building.jsx'
import { college } from '../data/site.js'

export function Contact() {
  return (
    <div className="container page">
      <PageHead eyebrow="Contact" title="Contact Us" />
      <div style={{ display: 'grid', gap: 28, gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.2fr)' }} className="contact-grid">
        <div>
          <h3 style={{ color: 'var(--garnet)' }}>{college.name}</h3>
          <p className="prose">
            {college.name}<br />
            {college.place}
          </p>
          <div className="deflist" style={{ marginTop: 16 }}>
            <div className="item"><strong>Phone:</strong> -0816-2278569(add number)</div>
            <div className="item"><strong>Email:</strong> library@sscasc.in (add email)</div>
            <div className="item"><strong>Librarian:</strong> Smt. Parimala B N.</div>
          </div>
          <div style={{ marginTop: 16, display: 'flex', gap: 12 }}>
            <a className="btn btn-gold" href={college.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
            <a className="btn btn-ghost" style={{ color: 'var(--garnet)', borderColor: 'var(--garnet)' }} href={college.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>
        <div>
          <iframe
            className="map-embed"
            title="College location on Google Maps"
            src={college.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}

export function Disclaimer() {
  return (
    <div className="container page">
      <PageHead eyebrow="Legal" title="Disclaimer" />
      <p className="prose">
        The information on this website is provided by the Library &amp; Information Center for
        general informational purposes. External links open third-party websites that are not
        controlled by the library; we are not responsible for their content or availability.
        While we strive for accuracy, details such as timings, budgets and collection counts
        may change and should be confirmed at the library.
      </p>
    </div>
  )
}

export function Privacy() {
  return (
    <div className="container page">
      <PageHead eyebrow="Legal" title="Privacy Policy" />
      <p className="prose">
        This website does not collect personal information without consent. Language and
        accessibility preferences are stored only in your browser. Any feedback you submit is
        used solely to improve library services. No data is sold or shared with third parties.
      </p>
    </div>
  )
}

export function NotFound() {
  return (
    <div className="container page">
      <PageHead eyebrow="404" title="Page not found" />
      <p className="prose">The page you are looking for does not exist. Use the navigation above or the search to find what you need.</p>
    </div>
  )
}

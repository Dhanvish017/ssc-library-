import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import { heroStats, navStructure } from '../data/site.js'

const QUICK = [
  { icon: '📚', title: 'Library Collection', desc: '69,456 books, journals, magazines and rare palm-leaf manuscripts.', to: '/collection' },
  { icon: '🔎', title: 'OPAC Search', desc: 'Search the catalogue online and locate any title in the library.', to: '/services#opac' },
  { icon: '🌐', title: 'Open Access', desc: 'Curated OA journals, books and electronic theses & dissertations.', to: '/oa-resources' },
  { icon: '🧪', title: 'Research Support', desc: 'Discovery, reference, plagiarism and academic-profile tools.', to: '/research-support' },
  { icon: '🤖', title: 'AI Tools', desc: 'Vetted AI assistants for writing, summarizing and literature search.', to: '/ai-tools' },
  { icon: '🎓', title: 'E-learning', desc: 'SWAYAM, NPTEL, Coursera, edX and other learning platforms.', to: '/e-learning' },
]

const sidebarLinks = navStructure.find((i) => i.label === 'More')?.children ?? []

export default function Home() {
  const { t } = useApp()
  return (
    <div className="sidebar-layout">

      {/* Column 1 — vertical star menu */}
      <nav className="sidebar-menu" aria-label="Library sections">
        <ul>
          {sidebarLinks.map((l) => (
            <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
          ))}
        </ul>
      </nav>

      {/* Column 2 — homepage content */}
      <div className="sidebar-main">
        <div className="eyebrow">{t('heroEyebrow')}</div>
        <h2 dangerouslySetInnerHTML={{ __html: t('heroTitle') }} />
        <p className="prose">{t('heroLead')}</p>
        <p className="prose">
          {t('tagline')} The acquisition of knowledge enlightens the personality of an
          individual and fosters intellectual development. Our library is fully automated,
          with free access to the Internet and INFLIBNET, a reference section, reading room,
          journal section and an internet-equipped digital library.
        </p>
        <div className="hero-cta">
          <Link className="btn btn-gold" to="/collection">{t('exploreCollection')}</Link>
          <Link className="btn btn-outline" to="/services#opac">{t('openOpac')}</Link>
        </div>
        <div className="hero-stats">
          {heroStats.map((s) => (
            <div className="hero-stat" key={s.label}>
              <div className="num">{s.num}</div>
              <div className="lbl">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="section" style={{ marginTop: '40px' }}>
          <h3>Quick access</h3>
          <div className="card-grid">
            {QUICK.map((c) => (
              <Link to={c.to} className="card" key={c.title} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="icon" aria-hidden="true">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <span className="card-link">Open →</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
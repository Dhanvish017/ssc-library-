import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import { college } from '../data/site.js'

const LAST_UPDATED = '11 June 2026'

export default function Footer() {
  const { t } = useApp()
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h4>{t('libCenter')}</h4>
          <p style={{ fontSize: '0.9rem', maxWidth: '40ch' }}>{t('footerAbout')}</p>
          <p style={{ fontSize: '0.9rem' }}>{t('college')}, {college.place}</p>
        </div>
        <div>
          <h4>{t('quickLinks')}</h4>
          <ul className="footer-links">
            <li><Link to="/collection">Library Collection</Link></li>
            <li><Link to="/services">Library Services</Link></li>
            <li><Link to="/oa-resources">Open Access Resources</Link></li>
            <li><Link to="/research-support">Research Support</Link></li>
            <li><Link to="/e-learning">E-learning Platforms</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4>{t('connect')}</h4>
          <ul className="footer-links">
            <li><a href={college.youtube} target="_blank" rel="noopener noreferrer">YouTube Channel</a></li>
            <li><a href={college.facebook} target="_blank" rel="noopener noreferrer">Facebook Page</a></li>
            <li><Link to="/feedback">Feedback</Link></li>
            <li><Link to="/virtual-tour">Virtual Tour</Link></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>{t('copyright').replace('{year}', year)}</span>
        <span>
          {t('lastUpdated')}: {LAST_UPDATED}
          <Link to="/disclaimer">{t('disclaimer')}</Link>
          <Link to="/privacy">{t('privacy')}</Link>
          <a href="mailto:webmaster@sscasc.in">{t('webmaster')}</a>
        </span>
      </div>
    </footer>
  )
}

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
        contact
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

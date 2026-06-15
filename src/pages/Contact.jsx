import { PageHead } from '../components/Building.jsx'
import { college } from '../data/site.js'
import PageLayout from '../components/PageLayout.jsx'
import { useApp } from '../context/AppContext.jsx'

export function Contact() {
  const { t } = useApp()
  return (
    <PageLayout>
      <div className="container page">
        <PageHead eyebrow={t('pages.contact.eyebrow')} title={t('pages.contact.title')} />
        <div style={{ display: 'grid', gap: 28, gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.2fr)' }} className="contact-grid">
          <div>
            <h3 style={{ color: 'var(--garnet)' }}>{t('college')}</h3>
            <p className="prose">
              {t('college')}<br />
              {t('pages.contact.place')}
            </p>
            <div className="deflist" style={{ marginTop: 16 }}>
              <div className="item"><strong>{t('pages.contact.phoneLabel')}</strong> {t('pages.contact.phoneVal')}</div>
              <div className="item"><strong>{t('pages.contact.emailLabel')}</strong> {t('pages.contact.emailVal')}</div>
              <div className="item"><strong>{t('pages.contact.librarianLabel')}</strong> {t('pages.contact.librarianName')}</div>
            </div>
            <div style={{ marginTop: 16, display: 'flex', gap: 12 }}>
              <a className="btn btn-gold" href={college.youtube} target="_blank" rel="noopener noreferrer">{t('pages.contact.youtube')}</a>
              <a className="btn btn-ghost" style={{ color: 'var(--garnet)', borderColor: 'var(--garnet)' }} href={college.facebook} target="_blank" rel="noopener noreferrer">{t('pages.contact.facebook')}</a>
            </div>
          </div>
          <div>
            <iframe
              className="map-embed"
              title={t('pages.contact.mapTitle')}
              src={college.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export function Disclaimer() {
  const { t } = useApp()
  return (
    <PageLayout>
      <div className="container page">
        <PageHead eyebrow={t('pages.contact.disclaimerEyebrow')} title={t('pages.contact.disclaimerTitle')} />
        <p className="prose">
          {t('pages.contact.disclaimerDesc')}
        </p>
      </div>
    </PageLayout>
  )
}

export function Privacy() {
  const { t } = useApp()
  return (
    <PageLayout>
      <div className="container page">
        <PageHead eyebrow={t('pages.contact.privacyEyebrow')} title={t('pages.contact.privacyTitle')} />
        <p className="prose">
          {t('pages.contact.privacyDesc')}
        </p>
      </div>
    </PageLayout>
  )
}

export function NotFound() {
  const { t } = useApp()
  return (
    <PageLayout>
      <div className="container page">
        <PageHead eyebrow={t('pages.contact.notfoundEyebrow')} title={t('pages.contact.notfoundTitle')} />
        <p className="prose">{t('pages.contact.notfoundDesc')}</p>
      </div>
    </PageLayout>
  )
}

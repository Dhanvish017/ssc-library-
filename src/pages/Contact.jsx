import { PageHead } from '../components/Building.jsx'
import { college } from '../data/site.js'
import PageLayout from '../components/PageLayout.jsx'
import { useApp } from '../context/AppContext.jsx'
import EditableField from '../components/EditableField.jsx'

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
              <EditableField page="contact" section="details" field="place" fallback={t('pages.contact.place')} />
            </p>
            <div className="deflist" style={{ marginTop: 16 }}>
              <div className="item">
                <strong>{t('pages.contact.phoneLabel')}</strong>{' '}
                <EditableField page="contact" section="details" field="phone" fallback={t('pages.contact.phoneVal')} />
              </div>
              <div className="item">
                <strong>{t('pages.contact.emailLabel')}</strong>{' '}
                <EditableField page="contact" section="details" field="email" fallback={t('pages.contact.emailVal')} />
              </div>
              <div className="item">
                <strong>{t('pages.contact.librarianLabel')}</strong>{' '}
                <EditableField page="contact" section="details" field="librarian" fallback={t('pages.contact.librarianName')} />
              </div>
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
        <EditableField page="contact" section="disclaimer" field="desc" fallback={t('pages.contact.disclaimerDesc')} as="p" className="prose" multiline />
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
        <EditableField page="contact" section="privacy" field="desc" fallback={t('pages.contact.privacyDesc')} as="p" className="prose" multiline />
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
        <EditableField page="contact" section="notfound" field="desc" fallback={t('pages.contact.notfoundDesc')} as="p" className="prose" />
      </div>
    </PageLayout>
  )
}

import { useState } from 'react'
import { PageHead } from '../components/Building.jsx'
import PageLayout from '../components/PageLayout.jsx'
import { useApp } from '../context/AppContext.jsx'
import gallery1 from '../assets/gallery/gallery1.jpeg'
import gallery2 from '../assets/gallery/gallery2.jpeg'
import gallery3 from '../assets/gallery/gallery3.jpeg'
import gallery4 from '../assets/gallery/gallery4.jpeg'

export function Gallery() {
  const { t } = useApp()
  const items = [
    { title: 'Reading Room', image: gallery1 },
    { title: 'Reference Section', image: gallery2 },
    { title: 'Digital Library', image: gallery3 },
    { title: 'Journal Section', image: gallery4 },
  ]
  return (
    <PageLayout>
      <div className="container page">
        <PageHead eyebrow={t('pages.more.galleryEyebrow')} title={t('pages.more.galleryTitle')} />
        <p className="prose">{t('pages.more.galleryIntro')}</p>
        <div className="gallery-grid">
          {items.map((item, index) => (
            <div className="gallery-item" key={item.title}>

              <img
                src={item.image}
                alt={item.title}
                className={`gallery-image ${index === 0 ? 'gallery-image-1' : ''}`}
              />


            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}

export function VirtualTour() {
  const { t } = useApp()
  return (
    <PageLayout>
      <div className="container page">
        <PageHead eyebrow={t('pages.more.tourEyebrow')} title={t('pages.more.tourTitle')} />
        <p className="prose">
          {t('pages.more.tourIntro')}
        </p>
      </div>
    </PageLayout>
  )
}

export function BestPractices() {
  const { t } = useApp()
  return (
    <PageLayout>
      <div className="container page">
        <PageHead eyebrow={t('pages.more.practicesEyebrow')} title={t('pages.more.practicesTitle')} />
        <p className="prose">
          {t('pages.more.practicesIntro')}
        </p>
        <div className="deflist">
        </div>
      </div>
    </PageLayout>
  )
}

export function Activities() {
  const { t } = useApp()
  return (
    <PageLayout>
      <div className="container page">
        <PageHead eyebrow={t('pages.more.activitiesEyebrow')} title={t('pages.more.activitiesTitle')} />
        <p className="prose">
          {t('pages.more.activities')}
        </p>
      </div>
    </PageLayout>
  )
}

export function Feedback() {
  const { t } = useApp()
  const [sent, setSent] = useState(false)
  return (
    <PageLayout>
      <div className="container page">
        <PageHead eyebrow={t('pages.askus.feedbackEyebrow')} title={t('pages.askus.feedbackTitle')} />
        <p className="prose">{t('pages.askus.feedbackIntro')}</p>
        {sent ? (
          <div className="notice">{t('pages.askus.feedbackSuccess')}</div>
        ) : (
          <form className="form-grid" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
            <div>
              <label htmlFor="fb-name">{t('pages.askus.feedback.name')}</label>
              <input id="fb-name" type="text" required />
            </div>
            <div>
              <label htmlFor="fb-email">{t('pages.askus.feedback.email')}</label>
              <input id="fb-email" type="email" required />
            </div>
            <div>
              <label htmlFor="fb-type">{t('pages.askus.feedback.type')}</label>
              <select id="fb-type">
                <option value="Suggestion">{t('pages.askus.feedback.options.suggestion')}</option>
                <option value="Compliment">{t('pages.askus.feedback.options.compliment')}</option>
                <option value="Complaint">{t('pages.askus.feedback.options.complaint')}</option>
                <option value="Resource request">{t('pages.askus.feedback.options.resourceRequest')}</option>
              </select>
            </div>
            <div>
              <label htmlFor="fb-msg">{t('pages.askus.feedback.message')}</label>
              <textarea id="fb-msg" rows="5" required></textarea>
            </div>
            <button className="btn btn-gold" type="submit">{t('pages.askus.feedback.submit')}</button>
          </form>
        )}
      </div>
    </PageLayout>
  )
}

import { useState } from 'react'
import { PageHead } from '../components/Building.jsx'
import PageLayout from '../components/PageLayout.jsx'
import { useApp } from '../context/AppContext.jsx'
import EditableField from '../components/EditableField.jsx'

export function FAQ() {
  const { t } = useApp()
  const faqKeys = ['1', '2', '3', '4', '5', '6']

  return (
    <PageLayout>
      <div className="container page">
        <PageHead eyebrow={t('pages.askus.faqEyebrow')} title={t('pages.askus.faqTitle')} />
        <div className="prose">
          {faqKeys.map(n => (
            <div key={n} style={{ marginBottom: '20px' }}>
              <EditableField page="askus" section="faq" field={`q${n}`} fallback={t(`pages.askus.faq.q${n}`)} as="h3" />
              <EditableField page="askus" section="faq" field={`a${n}`} fallback={t(`pages.askus.faq.a${n}`)} as="p" multiline />
            </div>
          ))}
        </div>
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
        <EditableField page="askus" section="feedback" field="intro" fallback={t('pages.askus.feedbackIntro')} as="p" className="prose" multiline />
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

export function ReportConnectionProblem() {
  const { t } = useApp()
  return (
    <PageLayout>
      <div className="container page">
        <PageHead eyebrow={t('pages.askus.reportEyebrow')} title={t('pages.askus.reportTitle')} />
        <EditableField page="askus" section="report" field="intro" fallback={t('pages.askus.reportIntro')} as="p" className="prose" multiline />
        <form className="form-grid" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label>{t('pages.askus.report.name')}</label>
            <input type="text" />
          </div>
          <div>
            <label>{t('pages.askus.report.email')}</label>
            <input type="email" />
          </div>
          <div>
            <label>{t('pages.askus.report.problemDesc')}</label>
            <textarea rows="5"></textarea>
          </div>
          <button className="btn btn-gold">{t('pages.askus.report.submit')}</button>
        </form>
      </div>
    </PageLayout>
  )
}

export function RecommendBook() {
  const { t } = useApp()
  return (
    <PageLayout>
      <div className="container page">
        <PageHead eyebrow={t('pages.askus.recommendBookEyebrow')} title={t('pages.askus.recommendBookTitle')} />
        <EditableField page="askus" section="recommendBook" field="intro" fallback={t('pages.askus.recommendBookIntro')} as="p" className="prose" multiline />
        <form className="form-grid" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label>{t('pages.askus.recommendBook.name')}</label>
            <input type="text" />
          </div>
          <div>
            <label>{t('pages.askus.recommendBook.email')}</label>
            <input type="email" />
          </div>
          <div>
            <label>{t('pages.askus.recommendBook.title')}</label>
            <input type="text" />
          </div>
          <div>
            <label>{t('pages.askus.recommendBook.authors')}</label>
            <input type="text" />
          </div>
          <div>
            <label>{t('pages.askus.recommendBook.publisher')}</label>
            <input type="text" />
          </div>
          <div>
            <label>{t('pages.askus.recommendBook.year')}</label>
            <input type="text" />
          </div>
          <div>
            <label>{t('pages.askus.recommendBook.isbn')}</label>
            <input type="text" />
          </div>
          <div>
            <label>{t('pages.askus.recommendBook.reason')}</label>
            <textarea rows="4" placeholder={t('pages.askus.recommendBook.reasonPlaceholder')}></textarea>
          </div>
          <button className="btn btn-gold">{t('pages.askus.recommendBook.submit')}</button>
        </form>
      </div>
    </PageLayout>
  )
}

export function RecommendJournals() {
  const { t } = useApp()
  return (
    <PageLayout>
      <div className="container page">
        <PageHead eyebrow={t('pages.askus.recommendJournalEyebrow')} title={t('pages.askus.recommendJournalTitle')} />
        <EditableField page="askus" section="recommendJournal" field="intro" fallback={t('pages.askus.recommendJournalIntro')} as="p" className="prose" multiline />
        <form className="form-grid" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label>{t('pages.askus.recommendJournal.name')}</label>
            <input type="text" />
          </div>
          <div>
            <label>{t('pages.askus.recommendJournal.email')}</label>
            <input type="email" />
          </div>
          <div>
            <label>{t('pages.askus.recommendJournal.title')}</label>
            <input type="text" />
          </div>
          <div>
            <label>{t('pages.askus.recommendJournal.publisher')}</label>
            <input type="text" />
          </div>
          <div>
            <label>{t('pages.askus.recommendJournal.issn')}</label>
            <input type="text" />
          </div>
          <div>
            <label>{t('pages.askus.recommendJournal.frequency')}</label>
            <input type="text" />
          </div>
          <div>
            <label>{t('pages.askus.recommendJournal.subject')}</label>
            <input type="text" />
          </div>
          <div>
            <label>{t('pages.askus.recommendJournal.reason')}</label>
            <textarea rows="4" placeholder={t('pages.askus.recommendJournal.reasonPlaceholder')} />
          </div>
          <button className="btn btn-gold">{t('pages.askus.recommendJournal.submit')}</button>
        </form>
      </div>
    </PageLayout>
  )
}

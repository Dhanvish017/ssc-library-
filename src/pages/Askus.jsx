import { useState } from 'react'
import { PageHead } from '../components/Building.jsx'
import PageLayout from '../components/PageLayout.jsx'
import { useApp } from '../context/AppContext.jsx'

export function FAQ() {
  const { t } = useApp()
  const faqs = [
    {
      q: t('pages.askus.faq.q1'),
      a: t('pages.askus.faq.a1')
    },
    {
      q: t('pages.askus.faq.q2'),
      a: t('pages.askus.faq.a2')
    },
    {
      q: t('pages.askus.faq.q3'),
      a: t('pages.askus.faq.a3')
    },
    {
      q: t('pages.askus.faq.q4'),
      a: t('pages.askus.faq.a4')
    },
    {
      q: t('pages.askus.faq.q5'),
      a: t('pages.askus.faq.a5')
    },
    {
      q: t('pages.askus.faq.q6'),
      a: t('pages.askus.faq.a6')
    }
  ]

  return (
    <PageLayout>
      <div className="container page">
        <PageHead eyebrow={t('pages.askus.faqEyebrow')} title={t('pages.askus.faqTitle')} />

        <div className="prose">
          {faqs.map((faq, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
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

export function ReportConnectionProblem() {
  const { t } = useApp()
  return (
    <PageLayout>
      <div className="container page">
        <PageHead eyebrow={t('pages.askus.reportEyebrow')} title={t('pages.askus.reportTitle')} />

        <p className="prose">
          {t('pages.askus.reportIntro')}
        </p>

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

          <button className="btn btn-gold">
            {t('pages.askus.report.submit')}
          </button>
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

        <p className="prose">
          {t('pages.askus.recommendBookIntro')}
        </p>

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

          <button className="btn btn-gold">
            {t('pages.askus.recommendBook.submit')}
          </button>
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

        <p className="prose">
          {t('pages.askus.recommendJournalIntro')}
        </p>

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
            <textarea
              rows="4"
              placeholder={t('pages.askus.recommendJournal.reasonPlaceholder')}
            />
          </div>

          <button className="btn btn-gold">
            {t('pages.askus.recommendJournal.submit')}
          </button>
        </form>
      </div>
    </PageLayout>
  )
}

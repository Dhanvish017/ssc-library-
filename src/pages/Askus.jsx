import { useState } from 'react'
import { PageHead } from '../components/Building.jsx'
import PageLayout from '../components/PageLayout.jsx'
import { useApp } from '../context/AppContext.jsx'
import EditableField from '../components/EditableField.jsx'
import { supabase } from '../services/supabase.js'

// --- shared helpers ---

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validateForm(fields, required) {
  for (const key of required) {
    if (!fields[key].trim()) return 'Please fill in all required fields.'
  }
  if (!isValidEmail(fields.email)) return 'Please enter a valid email address.'
  return null
}

function trimFields(fields) {
  return Object.fromEntries(
    Object.entries(fields).map(([k, v]) => [k, typeof v === 'string' ? v.trim() : v])
  )
}

// Off-screen style: visible to bots, invisible to humans.
// Not display:none — bots skip those on purpose.
const HP_STYLE = {
  position: 'absolute',
  left: '-9999px',
  width: '1px',
  height: '1px',
  overflow: 'hidden',
  opacity: 0,
  pointerEvents: 'none',
}

function useHoneypot() {
  const [hp, setHp] = useState('')
  return {
    isSpam: () => hp !== '',
    hpInput: {
      name: 'website',
      type: 'text',
      value: hp,
      onChange: e => setHp(e.target.value),
      tabIndex: -1,
      autoComplete: 'off',
      'aria-hidden': 'true',
      style: HP_STYLE,
    },
  }
}

// --- components ---

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
  const blank = { name: '', email: '', feedback_type: 'Suggestion', message: '' }
  const [fields, setFields] = useState(blank)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)
  const { isSpam, hpInput } = useHoneypot()

  const set = k => e => setFields(p => ({ ...p, [k]: e.target.value }))

  async function handleSubmit(e) {
    e.preventDefault()
    if (isSpam()) return
    const err = validateForm(fields, ['name', 'email', 'message'])
    if (err) { setError(err); return }
    setError('')
    setLoading(true)
    const { error: dbErr } = await supabase.from('feedback').insert(trimFields(fields))
    setLoading(false)
    if (dbErr) { setError('Submission failed. Please try again.'); return }
    setFields(blank)
    setSent(true)
  }

  return (
    <PageLayout>
      <div className="container page">
        <PageHead eyebrow={t('pages.askus.feedbackEyebrow')} title={t('pages.askus.feedbackTitle')} />
        {sent ? (
          <div className="notice">{t('pages.askus.feedbackSuccess')}</div>
        ) : (
          <>
          <EditableField page="askus" section="feedback" field="intro" fallback={t('pages.askus.feedbackIntro')} as="p" className="prose" multiline />
          <form className="form-grid" onSubmit={handleSubmit}>
            <input {...hpInput} />
            {error && <div style={{ color: 'var(--garnet)', marginBottom: 8, gridColumn: '1 / -1' }}>{error}</div>}
            <div>
              <label htmlFor="fb-name">{t('pages.askus.feedback.name')}</label>
              <input id="fb-name" type="text" required value={fields.name} onChange={set('name')} />
            </div>
            <div>
              <label htmlFor="fb-email">{t('pages.askus.feedback.email')}</label>
              <input id="fb-email" type="email" required value={fields.email} onChange={set('email')} />
            </div>
            <div>
              <label htmlFor="fb-type">{t('pages.askus.feedback.type')}</label>
              <select id="fb-type" value={fields.feedback_type} onChange={set('feedback_type')}>
                <option value="Suggestion">{t('pages.askus.feedback.options.suggestion')}</option>
                <option value="Compliment">{t('pages.askus.feedback.options.compliment')}</option>
                <option value="Complaint">{t('pages.askus.feedback.options.complaint')}</option>
                <option value="Resource request">{t('pages.askus.feedback.options.resourceRequest')}</option>
              </select>
            </div>
            <div>
              <label htmlFor="fb-msg">{t('pages.askus.feedback.message')}</label>
              <textarea id="fb-msg" rows="5" required value={fields.message} onChange={set('message')} />
            </div>
            <button className="btn btn-gold" type="submit" disabled={loading}>
              {loading ? 'Submitting…' : t('pages.askus.feedback.submit')}
            </button>
          </form>
          </>
        )}
      </div>
    </PageLayout>
  )
}

export function ReportConnectionProblem() {
  const { t } = useApp()
  const blank = { name: '', email: '', problem_description: '' }
  const [fields, setFields] = useState(blank)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)
  const { isSpam, hpInput } = useHoneypot()

  const set = k => e => setFields(p => ({ ...p, [k]: e.target.value }))

  async function handleSubmit(e) {
    e.preventDefault()
    if (isSpam()) return
    const err = validateForm(fields, ['name', 'email', 'problem_description'])
    if (err) { setError(err); return }
    setError('')
    setLoading(true)
    const { error: dbErr } = await supabase.from('connection_reports').insert(trimFields(fields))
    setLoading(false)
    if (dbErr) { setError('Submission failed. Please try again.'); return }
    setFields(blank)
    setSent(true)
  }

  return (
    <PageLayout>
      <div className="container page">
        <PageHead eyebrow={t('pages.askus.reportEyebrow')} title={t('pages.askus.reportTitle')} />
        {sent ? (
          <div className="notice">{t('pages.askus.reportSuccess')}</div>
        ) : (
          <>
            <EditableField page="askus" section="report" field="intro" fallback={t('pages.askus.reportIntro')} as="p" className="prose" multiline />
            <form className="form-grid" onSubmit={handleSubmit}>
              <input {...hpInput} />
              {error && <div style={{ color: 'var(--garnet)', marginBottom: 8, gridColumn: '1 / -1' }}>{error}</div>}
              <div>
                <label>{t('pages.askus.report.name')}</label>
                <input type="text" required value={fields.name} onChange={set('name')} />
              </div>
              <div>
                <label>{t('pages.askus.report.email')}</label>
                <input type="email" required value={fields.email} onChange={set('email')} />
              </div>
              <div>
                <label>{t('pages.askus.report.problemDesc')}</label>
                <textarea rows="5" required value={fields.problem_description} onChange={set('problem_description')} />
              </div>
              <button className="btn btn-gold" type="submit" disabled={loading}>
                {loading ? 'Submitting…' : t('pages.askus.report.submit')}
              </button>
            </form>
          </>
        )}
      </div>
    </PageLayout>
  )
}

export function RecommendBook() {
  const { t } = useApp()
  const blank = { name: '', email: '', book_title: '', authors: '', publisher: '', publication_year: '', isbn: '', reason: '' }
  const [fields, setFields] = useState(blank)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)
  const { isSpam, hpInput } = useHoneypot()

  const set = k => e => setFields(p => ({ ...p, [k]: e.target.value }))

  async function handleSubmit(e) {
    e.preventDefault()
    if (isSpam()) return
    const err = validateForm(fields, ['name', 'email', 'book_title'])
    if (err) { setError(err); return }
    setError('')
    setLoading(true)
    const { error: dbErr } = await supabase.from('book_recommendations').insert(trimFields(fields))
    setLoading(false)
    if (dbErr) { setError('Submission failed. Please try again.'); return }
    setFields(blank)
    setSent(true)
  }

  return (
    <PageLayout>
      <div className="container page">
        <PageHead eyebrow={t('pages.askus.recommendBookEyebrow')} title={t('pages.askus.recommendBookTitle')} />
        {sent ? (
          <div className="notice">{t('pages.askus.recommendBookSuccess')}</div>
        ) : (
          <>
            <EditableField page="askus" section="recommendBook" field="intro" fallback={t('pages.askus.recommendBookIntro')} as="p" className="prose" multiline />
            <form className="form-grid" onSubmit={handleSubmit}>
              <input {...hpInput} />
              {error && <div style={{ color: 'var(--garnet)', marginBottom: 8, gridColumn: '1 / -1' }}>{error}</div>}
              <div>
                <label>{t('pages.askus.recommendBook.name')}</label>
                <input type="text" required value={fields.name} onChange={set('name')} />
              </div>
              <div>
                <label>{t('pages.askus.recommendBook.email')}</label>
                <input type="email" required value={fields.email} onChange={set('email')} />
              </div>
              <div>
                <label>{t('pages.askus.recommendBook.title')}</label>
                <input type="text" required value={fields.book_title} onChange={set('book_title')} />
              </div>
              <div>
                <label>{t('pages.askus.recommendBook.authors')}</label>
                <input type="text" value={fields.authors} onChange={set('authors')} />
              </div>
              <div>
                <label>{t('pages.askus.recommendBook.publisher')}</label>
                <input type="text" value={fields.publisher} onChange={set('publisher')} />
              </div>
              <div>
                <label>{t('pages.askus.recommendBook.year')}</label>
                <input type="text" value={fields.publication_year} onChange={set('publication_year')} />
              </div>
              <div>
                <label>{t('pages.askus.recommendBook.isbn')}</label>
                <input type="text" value={fields.isbn} onChange={set('isbn')} />
              </div>
              <div>
                <label>{t('pages.askus.recommendBook.reason')}</label>
                <textarea rows="4" placeholder={t('pages.askus.recommendBook.reasonPlaceholder')} value={fields.reason} onChange={set('reason')} />
              </div>
              <button className="btn btn-gold" type="submit" disabled={loading}>
                {loading ? 'Submitting…' : t('pages.askus.recommendBook.submit')}
              </button>
            </form>
          </>
        )}
      </div>
    </PageLayout>
  )
}

export function RecommendJournals() {
  const { t } = useApp()
  const blank = { name: '', email: '', journal_title: '', publisher: '', issn: '', frequency: '', subject: '', reason: '' }
  const [fields, setFields] = useState(blank)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)
  const { isSpam, hpInput } = useHoneypot()

  const set = k => e => setFields(p => ({ ...p, [k]: e.target.value }))

  async function handleSubmit(e) {
    e.preventDefault()
    if (isSpam()) return
    const err = validateForm(fields, ['name', 'email', 'journal_title'])
    if (err) { setError(err); return }
    setError('')
    setLoading(true)
    const { error: dbErr } = await supabase.from('journal_recommendations').insert(trimFields(fields))
    setLoading(false)
    if (dbErr) { setError('Submission failed. Please try again.'); return }
    setFields(blank)
    setSent(true)
  }

  return (
    <PageLayout>
      <div className="container page">
        <PageHead eyebrow={t('pages.askus.recommendJournalEyebrow')} title={t('pages.askus.recommendJournalTitle')} />
        {sent ? (
          <div className="notice">{t('pages.askus.recommendJournalSuccess')}</div>
        ) : (
          <>
            <EditableField page="askus" section="recommendJournal" field="intro" fallback={t('pages.askus.recommendJournalIntro')} as="p" className="prose" multiline />
            <form className="form-grid" onSubmit={handleSubmit}>
              <input {...hpInput} />
              {error && <div style={{ color: 'var(--garnet)', marginBottom: 8, gridColumn: '1 / -1' }}>{error}</div>}
              <div>
                <label>{t('pages.askus.recommendJournal.name')}</label>
                <input type="text" required value={fields.name} onChange={set('name')} />
              </div>
              <div>
                <label>{t('pages.askus.recommendJournal.email')}</label>
                <input type="email" required value={fields.email} onChange={set('email')} />
              </div>
              <div>
                <label>{t('pages.askus.recommendJournal.title')}</label>
                <input type="text" required value={fields.journal_title} onChange={set('journal_title')} />
              </div>
              <div>
                <label>{t('pages.askus.recommendJournal.publisher')}</label>
                <input type="text" value={fields.publisher} onChange={set('publisher')} />
              </div>
              <div>
                <label>{t('pages.askus.recommendJournal.issn')}</label>
                <input type="text" value={fields.issn} onChange={set('issn')} />
              </div>
              <div>
                <label>{t('pages.askus.recommendJournal.frequency')}</label>
                <input type="text" value={fields.frequency} onChange={set('frequency')} />
              </div>
              <div>
                <label>{t('pages.askus.recommendJournal.subject')}</label>
                <input type="text" value={fields.subject} onChange={set('subject')} />
              </div>
              <div>
                <label>{t('pages.askus.recommendJournal.reason')}</label>
                <textarea rows="4" placeholder={t('pages.askus.recommendJournal.reasonPlaceholder')} value={fields.reason} onChange={set('reason')} />
              </div>
              <button className="btn btn-gold" type="submit" disabled={loading}>
                {loading ? 'Submitting…' : t('pages.askus.recommendJournal.submit')}
              </button>
            </form>
          </>
        )}
      </div>
    </PageLayout>
  )
}

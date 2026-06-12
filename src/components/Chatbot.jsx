import { useEffect, useRef, useState } from 'react'
import { useApp } from '../context/AppContext.jsx'

// Frontend-only assistant. A real API can be wired into `getReply` later.
const QUICK = ['Library timings', 'How to borrow', 'OPAC', 'E-resources']

function getReply(text) {
  const q = text.toLowerCase()
  if (q.includes('tim') || q.includes('hour') || q.includes('open'))
    return 'The library is open on all working days. See the Library Timings page under “About Us” for the current schedule.'
  if (q.includes('borrow') || q.includes('issue') || q.includes('lend'))
    return 'Books are issued and returned through the Circulation service using your library identity card. Visit the Services page for details.'
  if (q.includes('opac') || q.includes('catalog') || q.includes('search book'))
    return 'OPAC (Online Public Access Catalogue) lets you search the library collection. You will find it on the Services page.'
  if (q.includes('e-resource') || q.includes('ebook') || q.includes('e-book') || q.includes('journal') || q.includes('nlist') || q.includes('n-list'))
    return 'Through INFLIBNET N-LIST you can access about 6,000 e-journals and 97,000 e-books, plus our Open Access collections.'
  if (q.includes('staff') || q.includes('librarian'))
    return 'You can find the names and roles of our library staff on the Library Staff page under “About Us”.'
  if (q.includes('contact') || q.includes('address') || q.includes('map'))
    return 'Our address, phone, email and a Google Map are on the Contact Us page.'
  return 'Thanks for your question! I can help with timings, borrowing, OPAC, e-resources, staff and contact details. Try one of the quick options below.'
}

export default function Chatbot() {
  const { t } = useApp()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const bodyRef = useRef(null)

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ from: 'bot', text: t('chatWelcome') }])
    }
  }, [open]) // eslint-disable-line

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages])

  const send = (text) => {
    const clean = text.trim()
    if (!clean) return
    setMessages((m) => [...m, { from: 'user', text: clean }])
    setInput('')
    setTimeout(() => {
      setMessages((m) => [...m, { from: 'bot', text: getReply(clean) }])
    }, 350)
  }

  return (
    <>
      {open && (
        <div className="chat-panel" role="dialog" aria-label={t('chatTitle')}>
          <div className="chat-header">
            <div>
              <div className="ch-title">{t('chatTitle')}</div>
              <div className="ch-sub">{t('chatSub')}</div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat">✕</button>
          </div>
          <div className="chat-body" ref={bodyRef}>
            {messages.map((m, i) => (
              <div key={i} className={`bubble ${m.from}`}>{m.text}</div>
            ))}
          </div>
          <div className="chat-quick">
            {QUICK.map((q) => (
              <button key={q} onClick={() => send(q)}>{q}</button>
            ))}
          </div>
          <form
            className="chat-input"
            onSubmit={(e) => { e.preventDefault(); send(input) }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t('chatPlaceholder')}
              aria-label={t('chatPlaceholder')}
            />
            <button type="submit">{t('chatSend')}</button>
          </form>
        </div>
      )}
      <button
        className="chat-fab"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close library assistant' : 'Open library assistant'}
        aria-expanded={open}
      >
        {open ? '✕' : '💬'}
      </button>
    </>
  )
}

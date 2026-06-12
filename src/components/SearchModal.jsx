import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import { runSearch } from '../data/searchIndex.js'

function highlight(text, query) {
  const terms = query.trim().split(/\s+/).filter(Boolean)
  if (!terms.length) return text
  const escaped = terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')
  const splitRe = new RegExp(`(${escaped})`, 'gi')
  const testRe = new RegExp(`^(?:${escaped})$`, 'i') // non-global, stateless
  const parts = text.split(splitRe)
  return parts.map((p, i) => (testRe.test(p) ? <mark key={i}>{p}</mark> : <span key={i}>{p}</span>))
}

export default function SearchModal({ open, onClose }) {
  const { t } = useApp()
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)
  const navigate = useNavigate()
  const results = runSearch(query)

  useEffect(() => {
    if (open) {
      setQuery('')
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [open])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    if (open) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  const go = (to) => { onClose(); navigate(to) }

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={t('search')}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <input
          ref={inputRef}
          className="modal-search-input"
          type="search"
          placeholder={t('searchPlaceholder')}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label={t('searchPlaceholder')}
        />
        <div className="search-results">
          {query && results.length === 0 && (
            <div className="search-empty">{t('searchEmpty')}</div>
          )}
          {results.map((r) => (
            <a
              key={r.to}
              href={r.to}
              className="search-result"
              onClick={(e) => { e.preventDefault(); go(r.to) }}
            >
              <span className="sr-crumb">{r.crumb}</span>
              <div className="sr-title">{highlight(r.title, query)}</div>
              <div className="sr-snippet">{highlight(r.text.slice(0, 120) + '…', query)}</div>
            </a>
          ))}
        </div>
        <div className="search-hint">{t('searchHint')}</div>
      </div>
    </div>
  )
}

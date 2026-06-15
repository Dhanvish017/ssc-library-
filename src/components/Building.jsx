import { useEffect } from 'react'
import { useApp } from '../context/AppContext.jsx'

// Sets the section heading and (optionally) updates the document title.
export function PageHead({ eyebrow, title }) {
  useEffect(() => {
    if (title) document.title = `SSCASC Library, Tumkur`
  }, [title])
  return (
    <header className="page-head">
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2>{title}</h2>
    </header>
  )
}

// Three-column resource table: Name | Link | Description.
export function ResourceTable({ caption, rows, linkLabel = 'Visit' }) {
  const { t } = useApp()
  return (
    <div className="table-wrap">
      <table className="data">
        {caption && <caption>{caption}</caption>}
        <thead>
          <tr>
            <th style={{ width: '3rem' }}>{t('pages.resources.tableHeaders.hash', '#')}</th>
            <th>{t('pages.resources.tableHeaders.resource', 'Resource')}</th>
            <th>{t('pages.resources.tableHeaders.link', 'Link')}</th>
            <th>{t('pages.resources.tableHeaders.desc', 'Use / Description')}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([name, url, desc], i) => (
            <tr key={url + i}>
              <td>{i + 1}</td>
              <td>{t(`pages.resources.items.${name}.name`, name)}</td>
              <td>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {t('pages.resources.tableHeaders.linkLabel', linkLabel)} →
                </a>
              </td>
              <td>{t(`pages.resources.items.${name}.desc`, desc)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Grouped tool table: Category | Tools (links) | Purpose.
export function ToolTable({ caption, groups }) {
  const { t } = useApp()
  return (
    <div className="table-wrap">
      <table className="data">
        {caption && <caption>{caption}</caption>}
        <thead>
          <tr>
            <th style={{ width: '3rem' }}>{t('pages.resources.tableHeaders.hash', '#')}</th>
            <th>{t('pages.resources.tableHeaders.category', 'Category')}</th>
            <th>{t('pages.resources.tableHeaders.tools', 'Tools')}</th>
            <th>{t('pages.resources.tableHeaders.purpose', 'Purpose')}</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((g, i) => (
            <tr key={g.heading}>
              <td>{i + 1}</td>
              <td><strong>{t(`pages.resources.groups.${g.heading}.heading`, g.heading)}</strong></td>
              <td>
                {g.tools.map(([name, url], j) => (
                  <span key={url}>
                    <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
                    {j < g.tools.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </td>
              <td>{t(`pages.resources.groups.${g.heading}.purpose`, g.purpose)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Simple two-column link list (name | link).
export function LinkTable({ caption, rows }) {
  const { t } = useApp()
  return (
    <div className="table-wrap">
      <table className="data">
        {caption && <caption>{caption}</caption>}
        <thead>
          <tr>
            <th style={{ width: '3rem' }}>{t('pages.resources.tableHeaders.hash', '#')}</th>
            <th>{t('pages.resources.tableHeaders.platform', 'Platform')}</th>
            <th>{t('pages.resources.tableHeaders.link', 'Link')}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([name, url], i) => (
            <tr key={url}>
              <td>{i + 1}</td>
              <td>{name}</td>
              <td>
                <a href={url} target="_blank" rel="noopener noreferrer">{url.replace(/^https?:\/\//, '').replace(/\/$/, '')}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

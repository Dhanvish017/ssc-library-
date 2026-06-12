import { useEffect } from 'react'

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
  return (
    <div className="table-wrap">
      <table className="data">
        {caption && <caption>{caption}</caption>}
        <thead>
          <tr>
            <th style={{ width: '3rem' }}>#</th>
            <th>Resource</th>
            <th>Link</th>
            <th>Use / Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([name, url, desc], i) => (
            <tr key={url + i}>
              <td>{i + 1}</td>
              <td>{name}</td>
              <td>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {linkLabel} →
                </a>
              </td>
              <td>{desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Grouped tool table: Category | Tools (links) | Purpose.
export function ToolTable({ caption, groups }) {
  return (
    <div className="table-wrap">
      <table className="data">
        {caption && <caption>{caption}</caption>}
        <thead>
          <tr>
            <th style={{ width: '3rem' }}>#</th>
            <th>Category</th>
            <th>Tools</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((g, i) => (
            <tr key={g.heading}>
              <td>{i + 1}</td>
              <td><strong>{g.heading}</strong></td>
              <td>
                {g.tools.map(([name, url], j) => (
                  <span key={url}>
                    <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
                    {j < g.tools.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </td>
              <td>{g.purpose}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Simple two-column link list (name | link).
export function LinkTable({ caption, rows }) {
  return (
    <div className="table-wrap">
      <table className="data">
        {caption && <caption>{caption}</caption>}
        <thead>
          <tr>
            <th style={{ width: '3rem' }}>#</th>
            <th>Platform</th>
            <th>Link</th>
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

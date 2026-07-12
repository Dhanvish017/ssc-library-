import { useEffect } from 'react'
import { useApp } from '../context/AppContext.jsx'
import EditableField from './EditableField.jsx'

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
// Pass tableKey to enable inline editing of name and desc cells.
export function ResourceTable({ caption, rows, linkLabel = 'Visit', tableKey = null, pageKey = 'resources' }) {
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
              <td>
                {tableKey
                  ? <EditableField page={pageKey} section={tableKey} field={`row_${i}_name`} fallback={t(`pages.resources.items.${name}.name`, name)} />
                  : t(`pages.resources.items.${name}.name`, name)
                }
              </td>
              <td>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {t('pages.resources.tableHeaders.linkLabel', linkLabel)} →
                </a>
              </td>
              <td>
                {tableKey
                  ? <EditableField page={pageKey} section={tableKey} field={`row_${i}_desc`} fallback={t(`pages.resources.items.${name}.desc`, desc)} multiline />
                  : t(`pages.resources.items.${name}.desc`, desc)
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Grouped tool table: Category | Tools (links) | Purpose.
// Pass tableKey to enable inline editing of heading and purpose cells.
export function ToolTable({ caption, groups, tableKey = null, pageKey = 'resources' }) {
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
              <td>
                <strong>
                  {tableKey
                    ? <EditableField page={pageKey} section={tableKey} field={`group_${i}_heading`} fallback={t(`pages.resources.groups.${g.heading}.heading`, g.heading)} />
                    : t(`pages.resources.groups.${g.heading}.heading`, g.heading)
                  }
                </strong>
              </td>
              <td>
                {g.tools.map(([name, url], j) => (
                  <span key={url}>
                    <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
                    {j < g.tools.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </td>
              <td>
                {tableKey
                  ? <EditableField page={pageKey} section={tableKey} field={`group_${i}_purpose`} fallback={t(`pages.resources.groups.${g.heading}.purpose`, g.purpose)} multiline />
                  : t(`pages.resources.groups.${g.heading}.purpose`, g.purpose)
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Simple two-column link list (name | link).
// Pass tableKey to enable inline editing of the platform name cell.
export function LinkTable({ caption, rows, tableKey = null, pageKey = 'resources' }) {
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
              <td>
                {tableKey
                  ? <EditableField page={pageKey} section={tableKey} field={`row_${i}_name`} fallback={name} />
                  : name
                }
              </td>
              <td>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

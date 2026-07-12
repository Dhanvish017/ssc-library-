import { useState } from 'react'
import { useAdmin } from '../context/AdminContext'

export default function EditableField({
  page,
  section,
  field,
  fallback = '',
  multiline = false,
  html = false,
  as: Tag = 'span',
  className,
  style,
}) {
  const { isAdmin, getContent, saveField } = useAdmin()
  const value = getContent(page, section, field, fallback)
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState('')
  const [saving, setSaving] = useState(false)
  const [toast, setToast] = useState(false)

  if (!isAdmin) {
    if (html) return <Tag className={className} style={style} dangerouslySetInnerHTML={{ __html: value }} />
    return <Tag className={className} style={style}>{value}</Tag>
  }

  const startEdit = () => {
    setDraft(value)
    setEditing(true)
  }

  const handleSave = async () => {
    setSaving(true)
    const { error } = await saveField(page, section, field, draft)
    setSaving(false)
    if (!error) {
      setEditing(false)
      setToast(true)
      setTimeout(() => setToast(false), 2500)
    }
  }

  if (editing) {
    return (
      <div className="editable-editing">
        {multiline || html ? (
          <textarea
            className="editable-textarea"
            value={draft}
            onChange={e => setDraft(e.target.value)}
            rows={Math.max(4, (draft.match(/\n/g) || []).length + 2)}
            autoFocus
          />
        ) : (
          <input
            className="editable-input"
            value={draft}
            onChange={e => setDraft(e.target.value)}
            autoFocus
          />
        )}
        <div className="editable-actions">
          <button className="editable-save" onClick={handleSave} disabled={saving}>
            {saving ? 'Saving…' : 'Save'}
          </button>
          <button className="editable-cancel" onClick={() => setEditing(false)}>Cancel</button>
        </div>
      </div>
    )
  }

  return (
    <div className="editable-wrapper">
      {html
        ? <Tag className={className} style={style} dangerouslySetInnerHTML={{ __html: value }} />
        : <Tag className={className} style={style}>{value}</Tag>
      }
      <button className="editable-pencil" onClick={startEdit} title="Edit text">✏</button>
      {toast && <div className="editable-toast">Saved!</div>}
    </div>
  )
}

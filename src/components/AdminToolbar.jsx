import { useEffect } from 'react'
import { useAdmin } from '../context/AdminContext'

export default function AdminToolbar() {
  const { isAdmin, logout } = useAdmin()

  useEffect(() => {
    if (isAdmin) {
      document.body.classList.add('admin-mode')
    } else {
      document.body.classList.remove('admin-mode')
    }
    return () => document.body.classList.remove('admin-mode')
  }, [isAdmin])

  if (!isAdmin) return null

  return (
    <div className="admin-toolbar">
      <span className="admin-toolbar-indicator">⚙ Admin Mode</span>
      <button className="admin-toolbar-logout" onClick={logout}>Logout</button>
    </div>
  )
}

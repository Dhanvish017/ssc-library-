import { useState } from 'react'
import { useAdmin } from '../context/AdminContext'

export default function LoginModal() {
  const { showLoginModal, setShowLoginModal, login } = useAdmin()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  if (!showLoginModal) return null

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const { error: err } = await login(email, password)
    setLoading(false)
    if (err) {
      setError(err.message)
    } else {
      setEmail('')
      setPassword('')
    }
  }

  return (
    <div className="modal-overlay" onClick={() => setShowLoginModal(false)}>
      <div className="modal" style={{ maxWidth: 360 }} onClick={e => e.stopPropagation()}>
        <h2 style={{ marginBottom: 20, fontSize: '1.1rem', fontFamily: 'var(--font-display)' }}>Admin Login</h2>
        <form onSubmit={handleSubmit} className="form-grid">
          <div>
            <label htmlFor="admin-email">Email</label>
            <input
              id="admin-email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              autoFocus
            />
          </div>
          <div>
            <label htmlFor="admin-password">Password</label>
            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p style={{ color: '#c0392b', fontSize: '0.85rem', margin: 0 }}>{error}</p>}
          <button className="btn btn-gold" type="submit" disabled={loading}>
            {loading ? 'Logging in…' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  )
}

import { useState } from 'react'
import { PageHead } from '../components/Building.jsx'

export function Gallery() {
  const items = ['Reading Room', 'Reference Section', 'Digital Library', 'Journal Section', 'Book Exhibition', 'Orientation Day', 'Rare Collection', 'Circulation Desk']
  return (
    <div className="container page">
      <PageHead eyebrow="More" title="Photo Gallery" />
      <p className="prose">A glimpse of the library spaces and activities. Replace these placeholders with actual photographs.</p>
      <div className="gallery-grid">
        {items.map((label) => (
          <div className="gallery-item" key={label}>{label}</div>
        ))}
      </div>
    </div>
  )
}

export function VirtualTour() {
  return (
    <div className="container page">
      <PageHead eyebrow="More" title="Library Virtual Tour" />
      <p className="prose">
        Take a virtual walkthrough of the library — the reading room, reference section,
        journal section and digital library.
      </p>
      <div className="notice">
        Virtual tour placeholder — embed a 360° tour or a YouTube walkthrough video here. You
        can reuse the college YouTube channel for the embed.
      </div>
    </div>
  )
}

export function BestPractices() {
  return (
    <div className="container page">
      <PageHead eyebrow="More" title="Best Practices" />
      <p className="prose">
        The library follows certain best practices to promote reading habits, effective use of
        resources and student participation.
      </p>
      <div className="deflist">
        <div className="item">
          <strong>Best User of the Library Award:</strong> Recognition is given to students and
          users who make effective and regular use of library resources.
        </div>
        <div className="item">
          <strong>Weekly Library Guidance — MANADAALADA MAATU:</strong> Library guidance for
          students every Thursday from 11:15 a.m. to 11:30 a.m. to improve awareness about
          books, magazines and library use.
        </div>
      </div>
    </div>
  )
}

export function Activities() {
  const items = ['Library orientation for new students', 'Book exhibitions', 'Reading and awareness programmes', 'Information-literacy sessions']
  return (
    <div className="container page">
      <PageHead eyebrow="More" title="Library Activities" />
      <ul className="prose">{items.map((i) => <li key={i}>{i}</li>)}</ul>
    </div>
  )
}

export function Feedback() {
  const [sent, setSent] = useState(false)
  return (
    <div className="container page">
      <PageHead eyebrow="More" title="Feedback" />
      <p className="prose">Your suggestions help us improve. Please share your feedback below.</p>
      {sent ? (
        <div className="notice">Thank you — your feedback has been recorded (demo). Connect this form to your backend or a Google Form to collect responses.</div>
      ) : (
        <form className="form-grid" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
          <div>
            <label htmlFor="fb-name">Name</label>
            <input id="fb-name" type="text" required />
          </div>
          <div>
            <label htmlFor="fb-email">Email</label>
            <input id="fb-email" type="email" required />
          </div>
          <div>
            <label htmlFor="fb-type">Type</label>
            <select id="fb-type">
              <option>Suggestion</option>
              <option>Compliment</option>
              <option>Complaint</option>
              <option>Resource request</option>
            </select>
          </div>
          <div>
            <label htmlFor="fb-msg">Message</label>
            <textarea id="fb-msg" rows="5" required></textarea>
          </div>
          <button className="btn btn-gold" type="submit">Submit feedback</button>
        </form>
      )}
    </div>
  )
}

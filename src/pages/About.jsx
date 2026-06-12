import { PageHead } from '../components/Building.jsx'
import { staff, budget, college } from '../data/site.js'

function Page({ children }) {
  return <div className="container page">{children}</div>
}

export function AboutInstitution() {
  return (
    <Page>
      <PageHead eyebrow="About Us" title="About the Institution" />
      <div className="prose">
        <p>
          {college.name}, {college.place}, functions under the guidance and ideals of Sree
          Siddaganga Education Society and Sree Siddaganga Mutt. The institution works to
          provide quality education, discipline, value-based learning and overall development
          to students.
        </p>
        <p>
          The college offers education in Arts, Science and Commerce streams and encourages
          students to develop knowledge, skills and social responsibility. During the academic
          year 2025–26, the college received national-level recognition through accreditation
          with an “A” grade, reflecting its quality of education, administration, discipline,
          skill development and commitment to academic excellence.
        </p>
      </div>
    </Page>
  )
}

export function AboutLibrary() {
  return (
    <Page>
      <PageHead eyebrow="About Us" title="About the Library" />
      <div className="prose">
        <p>The library is the heart of the institution.</p>
        <p>
          The library is a key to the world of knowledge. The acquisition of knowledge helps
          enlighten the personality of an individual at the vital, spiritual and mental levels,
          inculcates social virtues and fosters intellectual development to make one a worthy
          citizen.
        </p>
        <p>
          A well-housed and well-managed library is the foundation of the modern educational
          structure. To keep pace with the ever-expanding field of knowledge, the library is
          updated from time to time. It holds a rich and growing collection of books,
          magazines, newspapers, journals and computers to meet present and future needs.
        </p>
        <p>
          Our library is automated using information technology, and users are given free
          access to the Internet and INFLIBNET. The library comprises a Reference Section, a
          Reading Room Section, a Journal Section, and a computer- and internet-equipped
          Digital Library.
        </p>
      </div>
    </Page>
  )
}

export function Vision() {
  return (
    <Page>
      <PageHead eyebrow="About Us" title="Vision & Mission" />
      <div className="section">
        <h3>Vision</h3>
        <p className="prose">
          To be a vibrant centre of learning that opens the door to knowledge for every student
          and teacher, nurturing intellectual growth, values and lifelong reading habits.
        </p>
      </div>
      <div className="section">
        <h3>Mission</h3>
        <ul className="prose">
          <li>Build and maintain a rich, relevant and well-organised collection of resources.</li>
          <li>Provide free and equitable access to information, the Internet and INFLIBNET.</li>
          <li>Support teaching, learning and research through modern library services.</li>
          <li>Promote reading habits and effective use of resources among all users.</li>
        </ul>
      </div>
    </Page>
  )
}

export function Rules() {
  const rules = [
    'A valid library identity card is required to enter and borrow.',
    'Maintain silence and discipline inside the library at all times.',
    'Handle books and resources with care; do not mark or damage them.',
    'Return borrowed books on or before the due date to avoid fines.',
    'Reference books, journals and rare collections are for in-library use.',
    'Personal belongings and bags are to be kept at the property counter.',
  ]
  return (
    <Page>
      <PageHead eyebrow="About Us" title="Library Rules" />
      <ul className="prose">
        {rules.map((r) => <li key={r}>{r}</li>)}
      </ul>
      <div className="notice" style={{ marginTop: '20px' }}>
        Rules are indicative and may be updated by the Library Committee. Please check the
        notice board or ask at the circulation desk for the latest guidelines.
      </div>
    </Page>
  )
}

export function Committee() {
  return (
    <Page>
      <PageHead eyebrow="About Us" title="Library Committee" />
      <p className="prose">
        The Library Committee guides the development of the library, advises on the budget and
        collection, and reviews services and policies to serve students and staff better.
      </p>
      <div className="notice">
        Committee member details will be published here. (Add the Principal, Librarian and
        nominated faculty members as available.)
      </div>
    </Page>
  )
}

export function Timings() {
  const rows = [
    ['Monday – Friday', '9:00 a.m. – 6:00 p.m.'],
    ['Saturday', '9:00 a.m. – 4:00 p.m.'],
    ['Sunday & Holidays', 'Closed'],
    ['Examination period', 'Extended hours as notified'],
  ]
  return (
    <Page>
      <PageHead eyebrow="About Us" title="Library Timings" />
      <div className="table-wrap" style={{ maxWidth: 520 }}>
        <table className="data">
          <thead><tr><th>Day</th><th>Timings</th></tr></thead>
          <tbody>{rows.map(([d, h]) => <tr key={d}><td>{d}</td><td>{h}</td></tr>)}</tbody>
        </table>
      </div>
      <div className="notice" style={{ marginTop: 18 }}>
        Timings are indicative — please confirm current working hours at the circulation desk.
      </div>
    </Page>
  )
}

export function Future() {
  const plans = [
    'Full digitisation of the catalogue and rare palm-leaf manuscripts.',
    'RFID-based circulation and self-check kiosks.',
    'Expanded e-resource subscriptions and remote access.',
    'A dedicated research commons and discussion zone.',
    'Regular information-literacy and database training programmes.',
  ]
  return (
    <Page>
      <PageHead eyebrow="About Us" title="Future Plan" />
      <ul className="prose">{plans.map((p) => <li key={p}>{p}</li>)}</ul>
    </Page>
  )
}

export function Staff() {
  return (
    <Page>
      <PageHead eyebrow="About Us" title="Library Staff" />
      <p className="prose">
        The library staff maintain the collection, guide users, support circulation work, and
        help students and teachers access the information they need.
      </p>
      <div className="table-wrap" style={{ maxWidth: 720 }}>
        <table className="data">
          <thead><tr><th>Sl. No.</th><th>Name</th><th>Designation / Role</th></tr></thead>
          <tbody>
            {staff.map((s, i) => (
              <tr key={s.name}><td>{s.sl || ''}</td><td>{s.name}</td><td>{s.role}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </Page>
  )
}

export function Budget() {
  return (
    <Page>
      <PageHead eyebrow="About Us" title="Library Budget" />
      <p className="prose">
        The library is supported by an annual budget for building and maintaining its
        collection. Indicative figures from the institutional report are shown below.
      </p>
      <div className="table-wrap" style={{ maxWidth: 560 }}>
        <table className="data">
          <thead><tr><th>Head</th><th>Amount</th></tr></thead>
          <tbody>{budget.map((b) => <tr key={b.head}><td>{b.head}</td><td>{b.amount}</td></tr>)}</tbody>
        </table>
      </div>
    </Page>
  )
}

import { useState } from 'react'
import PageLayout from '../components/PageLayout.jsx'
import { PageHead } from '../components/Building.jsx'
import { useApp } from '../context/AppContext.jsx'

export default function NoticeBoard() {
  const { t, lang } = useApp()
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  // Sample notice list (Bilingual content)
  const notices = [
    {
      id: 1,
      date: '2026-06-12',
      category: 'Circular',
      categoryKn: 'ಸುತ್ತೋಲೆ',
      title: 'E-Resources Orientation Programme for Semester I Students',
      titleKn: 'ಮೊದಲ ಸೆಮಿಸ್ಟರ್ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಇ-ಸಂಪನ್ಮೂಲಗಳ ಪರಿಚಯ ಕಾರ್ಯಕ್ರಮ',
      desc: 'All newly admitted Semester I students are requested to attend the orientation session on utilizing INFLIBNET N-LIST and other digital library platforms. Session will be held in the Digital Library Room.',
      descKn: 'ಹೊಸದಾಗಿ ದಾಖಲಾದ ಮೊದಲ ಸೆಮಿಸ್ಟರ್ ವಿದ್ಯಾರ್ಥಿಗಳು ಇನ್ಫ್ಲಿಬ್ನೆಟ್ ಎನ್-ಲಿಸ್ಟ್ ಮತ್ತು ಇತರ ಡಿಜಿಟಲ್ ಗ್ರಂಥಾಲಯ ವೇದಿಕೆಗಳನ್ನು ಬಳಸುವ ಬಗ್ಗೆ ಮಾಹಿತಿ ಕಾರ್ಯಕ್ರಮಕ್ಕೆ ಹಾಜರಾಗಲು ಕೋರಲಾಗಿದೆ. ಈ ಕಾರ್ಯಕ್ರಮವು ಡಿಜಿಟಲ್ ಲೈಬ್ರರಿ ಕೊಠಡಿಯಲ್ಲಿ ನಡೆಯಲಿದೆ.',
      attachment: '#/orientation-pdf',
      important: true,
    },
    {
      id: 2,
      date: '2026-06-08',
      category: 'Books',
      categoryKn: 'ಪುಸ್ತಕಗಳು',
      title: 'New Additions to Competitive Exam Section (June 2026)',
      titleKn: 'ಸ್ಪರ್ಧಾತ್ಮಕ ಪರೀಕ್ಷಾ ವಿಭಾಗಕ್ಕೆ ಹೊಸ ಪುಸ್ತಕಗಳ ಸೇರ್ಪಡೆ (ಜೂನ್ 2026)',
      desc: 'Latest books for UPSC, KPSC, banking, and other competitive examinations have been added to the reference rack. Users can consult these books inside the reference section.',
      descKn: 'ಯುಪಿಎಸ್ಸಿ, ಕೆಪಿಎಸ್ಸಿ, ಬ್ಯಾಂಕಿಂಗ್ ಮತ್ತು ಇತರ ಸ್ಪರ್ಧಾತ್ಮಕ ಪರೀಕ್ಷೆಗಳ ಇತ್ತೀಚಿನ ಪುಸ್ತಕಗಳನ್ನು ಉಲ್ಲೇಖ ವಿಭಾಗಕ್ಕೆ ಸೇರಿಸಲಾಗಿದೆ. ಓದುಗರು ಈ ಪುಸ್ತಕಗಳನ್ನು ಉಲ್ಲೇಖ ವಿಭಾಗದಲ್ಲಿ ಬಳಸಬಹುದು.',
      attachment: '#/book-list-pdf',
      important: false,
    },
    {
      id: 3,
      date: '2026-06-01',
      category: 'Timings',
      categoryKn: 'ಸಮಯ',
      title: 'Extended Library Hours During Semester Examinations',
      titleKn: 'ಸೆಮಿಸ್ಟರ್ ಪರೀಕ್ಷೆಗಳ ಸಂದರ್ಭದಲ್ಲಿ ಗ್ರಂಥಾಲಯದ ಸಮಯ ವಿಸ್ತರಣೆ',
      desc: 'To support student preparation, library reading rooms will remain open from 8:00 a.m. to 7:00 p.m. on all weekdays starting June 15, 2026.',
      descKn: 'ವಿದ್ಯಾರ್ಥಿಗಳ ಪರೀಕ್ಷಾ ತಯಾರಿಗೆ ನೆರವಾಗಲು, ಜೂನ್ 15, 2026 ರಿಂದ ಎಲ್ಲಾ ಕೆಲಸದ ದಿನಗಳಲ್ಲಿ ಗ್ರಂಥಾಲಯದ ಓದುವ ಕೊಠಡಿಗಳು ಬೆಳಿಗ್ಗೆ 8:00 ರಿಂದ ಸಂಜೆ 7:00 ರವರೆಗೆ ತೆರೆದಿರುತ್ತವೆ.',
      attachment: null,
      important: true,
    },
    {
      id: 4,
      date: '2026-05-25',
      category: 'Events',
      categoryKn: 'ಕಾರ್ಯಕ್ರಮಗಳು',
      title: 'Annual Book Exhibition 2026',
      titleKn: 'ವಾರ್ಷಿಕ ಪುಸ್ತಕ ಪ್ರದರ್ಶನ 2026',
      desc: 'SSCASC Library will host its Annual Book Exhibition in collaboration with leading publishers on June 22-23, 2026. All faculty and students are invited to suggest titles for acquisition.',
      descKn: 'ಶ್ರೀ ಸಿದ್ದಗಂಗಾ ಕಾಲೇಜು ಗ್ರಂಥಾಲಯವು ಜೂನ್ 22-23, 2026 ರಂದು ಪ್ರಮುಖ ಪ್ರಕಾಶಕರ ಸಹಯೋಗದೊಂದಿಗೆ ವಾರ್ಷಿಕ ಪುಸ್ತಕ ಪ್ರದರ್ಶನವನ್ನು ಆಯೋಜಿಸಲಿದೆ. ಪುಸ್ತಕಗಳನ್ನು ಖರೀದಿಸಲು ಶಿಫಾರಸು ಮಾಡಲು ಕೋರಲಾಗಿದೆ.',
      attachment: '#/exhibition-invite',
      important: false,
    },
    {
      id: 5,
      date: '2026-05-18',
      category: 'Circular',
      categoryKn: 'ಸುತ್ತೋಲೆ',
      title: 'Submission of Borrowed Books for Library Clearance Certificate',
      titleKn: 'ಲೈಬ್ರರಿ ಕ್ಲಿಯರೆನ್ಸ್ ಪ್ರಮಾಣಪತ್ರಕ್ಕಾಗಿ ಎರವಲು ಪಡೆದ ಪುಸ್ತಕಗಳ ಸಲ್ಲಿಕೆ',
      desc: 'Final year students of B.A, B.Sc & B.Com are instructed to return all borrowed library books and clear pending dues on or before June 20 to obtain No-Dues Certificate.',
      descKn: 'ಬಿ.ಎ, ಬಿ.ಎಸ್ಸಿ ಮತ್ತು ಬಿ.ಕಾಂ ಅಂತಿಮ ವರ್ಷದ ವಿದ್ಯಾರ್ಥಿಗಳು ನೋ-ಡ್ಯೂಸ್ ಪ್ರಮಾಣಪತ್ರ ಪಡೆಯಲು ಎರವಲು ಪಡೆದ ಎಲ್ಲಾ ಪುಸ್ತಕಗಳನ್ನು ಜೂನ್ 20 ರೊಳಗೆ ಹಿಂತಿರುಗಿಸಬೇಕು.',
      attachment: '#/clearance-circular',
      important: true,
    }
  ]

  const categories = ['All', 'Circular', 'Books', 'Timings', 'Events']

  const filteredNotices = notices.filter(n => {
    const titleText = lang === 'kn' ? n.titleKn : n.title
    const descText = lang === 'kn' ? n.descKn : n.desc
    const matchesSearch = titleText.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          descText.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = activeCategory === 'All' || n.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <PageLayout>
      <div className="container page">
        <PageHead 
          eyebrow={lang === 'kn' ? 'ಮಾಹಿತಿ ಮತ್ತು ನವೀಕರಣಗಳು' : 'Information & Updates'} 
          title={lang === 'kn' ? 'ಗ್ರಂಥಾಲಯ ಸೂಚನಾ ಫಲಕ' : 'Library Notice Board'} 
        />
        
        {/* Search & Category Filter Controls */}
        <div style={filterContainerStyle}>
          <input 
            type="text" 
            placeholder={lang === 'kn' ? 'ಸೂಚನೆಗಳನ್ನು ಹುಡುಕಿ...' : 'Search notices...'} 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={searchInputStyle}
          />
          <div style={categoryTabsStyle}>
            {categories.map(cat => {
              const displayCat = lang === 'kn' ? getCategoryKn(cat) : cat
              const isActive = activeCategory === cat
              return (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={isActive ? activeTabStyle : inactiveTabStyle}
                >
                  {displayCat}
                </button>
              )
            })}
          </div>
        </div>

        {/* Notices Feed */}
        <div style={feedContainerStyle}>
          {filteredNotices.length > 0 ? (
            filteredNotices.map((notice) => (
              <div 
                key={notice.id} 
                className="card" 
                style={noticeCardStyle(notice.important)}
              >
                <div style={cardHeaderStyle}>
                  <span style={noticeDateStyle}>📅 {notice.date}</span>
                  <span style={noticeBadgeStyle(notice.important)}>
                    {lang === 'kn' ? notice.categoryKn : notice.category}
                  </span>
                </div>
                
                <h3 style={noticeTitleStyle}>
                  {notice.important && <span style={impStarStyle}>★ </span>}
                  {lang === 'kn' ? notice.titleKn : notice.title}
                </h3>
                
                <p style={noticeDescStyle}>
                  {lang === 'kn' ? notice.descKn : notice.desc}
                </p>

                {notice.attachment && (
                  <div style={attachmentStyle}>
                    <a 
                      href={notice.attachment} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={attachmentLinkStyle}
                    >
                      📎 {lang === 'kn' ? 'ಲಗತ್ತು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ (PDF)' : 'Download Attachment (PDF)'}
                    </a>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div style={emptyStateStyle}>
              <p>{lang === 'kn' ? 'ಯಾವುದೇ ಹೊಸ ಸೂಚನೆಗಳು ಕಂಡುಬಂದಿಲ್ಲ.' : 'No announcements match your search or filters.'}</p>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  )
}

function getCategoryKn(cat) {
  switch(cat) {
    case 'All': return 'ಎಲ್ಲಾ'
    case 'Circular': return 'ಸುತ್ತೋಲೆ'
    case 'Books': return 'ಪುಸ್ತಕಗಳು'
    case 'Timings': return 'ಸಮಯ'
    case 'Events': return 'ಕಾರ್ಯಕ್ರಮಗಳು'
    default: return cat
  }
}

// Inline Styles for custom Notice Board elements matching Garnet/Gold theme
const filterContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  marginBottom: '28px',
  background: 'var(--paper)',
  padding: '18px',
  borderRadius: 'var(--radius)',
  border: '1px solid var(--line)',
}

const searchInputStyle = {
  padding: '10px 14px',
  border: '1px solid var(--line)',
  borderRadius: '8px',
  fontSize: '0.95rem',
  fontFamily: 'var(--font-body)',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',
}

const categoryTabsStyle = {
  display: 'flex',
  gap: '8px',
  flexWrap: 'wrap',
}

const tabBase = {
  padding: '6px 14px',
  borderRadius: '20px',
  fontSize: '0.85rem',
  fontFamily: 'var(--font-body)',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  border: '1px solid var(--line)',
}

const activeTabStyle = {
  ...tabBase,
  background: 'var(--garnet)',
  color: '#ffffff',
  borderColor: 'var(--garnet)',
}

const inactiveTabStyle = {
  ...tabBase,
  background: '#ffffff',
  color: 'var(--garnet)',
}

const feedContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
}

const noticeCardStyle = (important) => ({
  borderLeft: important ? '6px solid var(--garnet)' : '1px solid var(--line)',
  background: important ? '#fffdfa' : '#ffffff',
  padding: '24px',
  textAlign: 'left',
  transform: 'none',
  boxShadow: 'var(--shadow)',
})

const cardHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '12px',
}

const noticeDateStyle = {
  fontSize: '0.82rem',
  color: 'var(--ink-soft)',
  fontWeight: '500',
}

const noticeBadgeStyle = (important) => ({
  background: important ? 'var(--gold-soft)' : '#f0f0f0',
  color: important ? 'var(--garnet-dark)' : 'var(--ink-soft)',
  padding: '4px 10px',
  borderRadius: '4px',
  fontSize: '0.76rem',
  fontWeight: '700',
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
})

const noticeTitleStyle = {
  fontFamily: 'var(--font-display)',
  fontSize: '1.3rem',
  margin: '0 0 10px 0',
  color: 'var(--garnet)',
  lineHeight: '1.25',
  fontWeight: '700',
}

const impStarStyle = {
  color: 'var(--gold)',
  fontSize: '1.4rem',
}

const noticeDescStyle = {
  fontSize: '0.92rem',
  lineHeight: '1.5',
  color: 'var(--ink-soft)',
  margin: '0 0 14px 0',
}

const attachmentStyle = {
  borderTop: '1px dashed var(--line)',
  paddingTop: '12px',
}

const attachmentLinkStyle = {
  color: 'var(--gold)',
  fontWeight: '600',
  fontSize: '0.86rem',
  textDecoration: 'none',
}

const emptyStateStyle = {
  padding: '40px',
  textAlign: 'center',
  color: 'var(--ink-soft)',
  background: 'var(--paper)',
  border: '1px dashed var(--line)',
  borderRadius: 'var(--radius)',
}

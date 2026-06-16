import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import { navStructure } from '../data/site.js'
import noticeBoardImg from '../assets/notice_board.png'
import {
  FaFacebook,
  FaYoutube,
  FaWhatsapp,
  FaLinkedin,
  FaResearchgate,
  FaSlideshare,
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { SiAcademia } from 'react-icons/si'
import { MdArticle } from 'react-icons/md'

const sidebarLinks = navStructure.find((i) => i.label === 'More')?.children ?? []

export default function PageLayout({ children }) {
  const { t } = useApp()

  return (
    <>

      <div className="sidebar-layout">

        {/* Column 1 — Left Sidebar Area */}
        <div className="sidebar-left-area">
          <nav className="sidebar-menu" aria-label="Library sections">
            <ul>
              {sidebarLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>
                    {t(`home.${l.label}`)}
                  </Link>
                </li>
              ))}

              <li>
                <a
                  href="https://tumkuruniversity.ac.in/?%2Fug_syllabus"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('nav.syllabus')}
                </a>
              </li>

              <li>
                <a
                  href="https://drive.google.com/drive/folders/1-yMB3mqyGBuH2LKI6cdqlzgbEXfl3Zym"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('nav.questionPapers')}
                </a>
              </li>
            </ul>
          </nav>

          <Link to="/noticeboard" className="noticeboard-card-wrapper" aria-label="Library Notice Board">
            <img src={noticeBoardImg} alt="Library Notice Board" className="noticeboard-card-img" />
          </Link>
        </div>

        {/* Column 2 — page content */}
        <div className="sidebar-main">
          {children}
        </div>

      </div>

      {/* Right social media sidebar */}
      <div className="social-sidebar-wrapper">
        <div className="social-sidebar">

          <a href="https://www.facebook.com/%40sscasctumakuru" target="_blank" rel="noopener noreferrer" title="Facebook" style={{ background: '#1877F2' }}>
            <FaFacebook />
          </a>

          <a href="https://www.youtube.com/channel/UCtOT6x8-A7guJOS0FwnZPUQ" target="_blank" rel="noopener noreferrer" title="YouTube" style={{ background: '#FF0000' }}>
            <FaYoutube />
          </a>

          <a href="https://x.com/SSCASCLibrary" target="_blank" rel="noopener noreferrer" title="X" style={{ background: '#000000' }}>
            <FaXTwitter />
          </a>

          <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" title="WhatsApp" style={{ background: '#25D366' }}>
            <FaWhatsapp />
          </a>

          <a href="https://www.researchgate.net" target="_blank" rel="noopener noreferrer" title="ResearchGate" style={{ background: '#00CCBB' }}>
            <FaResearchgate />
          </a>

          <a href="https://www.academia.edu" target="_blank" rel="noopener noreferrer" title="Academia" style={{ background: '#41454A' }}>
            <SiAcademia />
          </a>

          <a href="https://www.linkedin.com/in/library-tumkur-063a8a416/" target="_blank" rel="noopener noreferrer" title="LinkedIn" style={{ background: '#0A66C2' }}>
            <FaLinkedin />
          </a>

          <a href="https://slideshare.net" target="_blank" rel="noopener noreferrer" title="SlideShare" style={{ background: '#008ED2' }}>
            <FaSlideshare />
          </a>

          <a href="https://yourblog.com" target="_blank" rel="noopener noreferrer" title="Blog" style={{ background: '#FF8C00' }}>
            <MdArticle />
          </a>

        </div>
      </div>
    </>
  )
}

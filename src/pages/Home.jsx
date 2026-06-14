import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import { heroStats, navStructure } from '../data/site.js'
import {
  FaFacebook,
  FaYoutube,
  FaWhatsapp,
  FaLinkedin,
  FaResearchgate,
  FaSlideshare
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiAcademia } from "react-icons/si";
import { MdArticle } from "react-icons/md";


const sidebarLinks = navStructure.find((i) => i.label === 'More')?.children ?? []

export default function Home() {
  const { t } = useApp()
  return (
    <>
      <div className="sidebar-layout">

        {/* Column 1 — vertical star menu */}
        <nav className="sidebar-menu" aria-label="Library sections">
          <ul>
            {sidebarLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>
                  {t(`home.${l.label}`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Column 2 — homepage content */}
        <div className="sidebar-main">
          <div className="eyebrow">{t('heroEyebrow')}</div>
          <h2 dangerouslySetInnerHTML={{ __html: t('About the Library') }} />
          <p className="prose">The Library of Sree Siddaganga College of Arts, Science and Commerce, Tumakuru, was established during the academic year 1966–67 with the objective of supporting the teaching, learning, and research activities of the institution. Over the years, the library has developed into a rich knowledge resource centre catering to the academic needs of students, faculty members, and researchers.

            The library houses a collection of 69,456 books covering various disciplines in Arts, Science, Commerce, and General Studies. In addition, it subscribes to 12 scholarly journals, 6 magazines, and 10 newspapers to keep users informed about current developments and trends.

            A unique feature of the library is its valuable collection of Palm Leaf Manuscripts and manuscripts, which preserve the rich cultural, literary, and historical heritage of the region. The library is committed to providing quality information services and fostering a culture of reading, learning, and lifelong knowledge acquisition among its users.</p>


          <div className="hero-stats">
            {heroStats.map((s) => (
              <div className="hero-stat" key={s.label}>
                <div className="num">{s.num}</div>
                <div className="lbl">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="section" style={{ marginTop: '40px' }}>

          </div>
        </div>

      </div>

      <div className="social-sidebar-wrapper">
        <div className="social-sidebar">

          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook" style={{ background: '#1877F2' }}>
            <FaFacebook />
          </a>

          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" title="YouTube" style={{ background: '#FF0000' }}>
            <FaYoutube />
          </a>

          <a href="https://x.com" target="_blank" rel="noopener noreferrer" title="X" style={{ background: '#000000' }}>
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

          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn" style={{ background: '#0A66C2' }}>
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
  );

}


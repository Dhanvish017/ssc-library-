import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import { navStructure, college } from '../data/site.js'
import logo from '../assets/logo.png'
import banner from '../assets/banner.png'
import { FaYoutube, FaFacebook } from "react-icons/fa";
import ReadAloudButton from "./ReadAloudButton";
import { useEffect } from 'react'
import SwamijiPhoto from './SwamijiPhoto.jsx'
import bgbanner from '../assets/bgbanner.png'
import bigswamiji from '../assets/bigswamiji.png'
import tsh from '../assets/tsh.png'

function LangAndAccess() {
  const { lang, toggleLang, incScale, decScale, resetScale, t } = useApp()
  return (
    <div className="ctrl-group" role="group" aria-label={t('accessibility')}>
      <button className="ctrl-btn" onClick={decScale} aria-label="Decrease text size">{t('decreaseText')}</button>
      <button className="ctrl-btn" onClick={resetScale} aria-label="Reset text size">{t('resetText')}</button>
      <button className="ctrl-btn" onClick={incScale} aria-label="Increase text size">{t('increaseText')}</button>
      <button
        className="ctrl-btn"
        onClick={toggleLang}
        aria-pressed={lang === 'kn'}
        aria-label="Toggle language English Kannada"
      >
        {lang === 'en' ? 'ಕನ್ನಡ' : 'English'}
      </button>
    </div>
  )
}

export default function Header({ onOpenSearch }) {
  const { t } = useApp()
  const [navOpen, setNavOpen] = useState(false)
  const [expanded, setExpanded] = useState(null)
  const { pathname } = useLocation()

  useEffect(() => {
    setExpanded(null)
    setNavOpen(false)
  }, [pathname])

  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="topbar-links">
            <span>{college.accreditation}</span>
          </div>
          <div className="topbar-social">
            <ReadAloudButton />
            <LangAndAccess />
          </div>
        </div>
      </div>





      <div className="header-main">
        <img
          src={logo}
          alt="College Logo"
          className="header-logo"
        />

        <div className="header-banner">
          <img
            src={bgbanner}
            alt={college.name}
            className="header-banner-img"
          />
        </div>

        <img
          src={tsh}
          alt="Swamiji"
          className="header-swamiji"
        />
      </div>



      <div className="masthead">
        <div className="container">
          <Link to="/" className="brand" aria-label="Home">
            <span className="brand-text">
              <h1>{t('libCenter')}</h1>
            </span>
          </Link>
          <div className="header-actions">
            <div className="masthead-contact" aria-hidden="false">
              <a href="mailto:library@sscasc.in">library@sscasc.in</a>
              <span>-0816-2278569</span>
            </div>
            <button className="search-trigger" onClick={onOpenSearch} aria-label={t('search')}>
              <span aria-hidden="true">🔍</span>
              <span className="label">{t('search')}</span>
            </button>
            <button
              className="menu-toggle"
              aria-expanded={navOpen}
              aria-controls="primary-nav"
              onClick={() => setNavOpen((o) => !o)}
            >
              <span aria-hidden="true">☰</span> {t('menu')}
            </button>
          </div>
        </div>
      </div>

      <nav className="mainnav" aria-label="Primary">
        <div className="container">
          <ul className={`navlist ${navOpen ? 'open' : ''}`} id="primary-nav">
            {navStructure
              .filter(item => item.label !== 'More')
              .map((item) => {
                const isActive = item.to && (item.to === '/' ? pathname === '/' : pathname.startsWith(item.to))
                if (item.children) {
                  const open = expanded === item.label
                  return (
                    <li key={item.label} className={open ? 'expanded' : ''}>
                      <button
                        aria-expanded={open}
                        onClick={() => setExpanded(open ? null : item.label)}
                      >
                        {t(`nav.${item.label}`)} <span className="caret" aria-hidden="true">▼</span>
                      </button>
                      <ul className="dropdown">
                        {item.children.map((c) => (
                          <li key={c.to}>
                            <Link to={c.to} onClick={() => { setNavOpen(false); setExpanded(null) }}>
                              {t(`nav.${c.label}`)}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  )
                }
                return (
                  <li key={item.to} className={isActive ? 'active' : ''}>
                    <NavLink to={item.to} onClick={() => setNavOpen(false)}>
                      {t(`nav.${item.label}`)}
                    </NavLink>
                  </li>
                )
              })}
          </ul>
        </div>
      </nav>
    </>
  )
}

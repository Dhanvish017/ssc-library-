import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import SearchModal from './components/SearchModal.jsx'
import Chatbot from './components/Chatbot.jsx'
import SwamijiPhoto from './components/SwamijiPhoto.jsx'
import LoginModal from './components/LoginModal.jsx'
import AdminToolbar from './components/AdminToolbar.jsx'
import { AdminProvider } from './context/AdminContext.jsx'
import { useApp } from './context/AppContext.jsx'

import Home from './pages/Home.jsx'
import {
  AboutInstitution, AboutLibrary, Vision, Rules, Committee, Timings, Future, Staff, Budget,
} from './pages/About.jsx'
import { Collection, Services } from './pages/CollectionServices.jsx'
import { OAResources, ResearchSupport, AITools, Elearning } from './pages/Resources.jsx'
import { Gallery, VirtualTour, BestPractices, Activities } from './pages/More.jsx'
import { Contact, Disclaimer, Privacy, NotFound } from './pages/Contact.jsx'
import { FAQ, Feedback, ReportConnectionProblem, RecommendBook, RecommendJournals } from './pages/Askus.jsx'
import NoticeBoard from './pages/noticeboard.jsx'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function AppInner() {
  const [searchOpen, setSearchOpen] = useState(false)
  const { t } = useApp()

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) {
        e.preventDefault()
        setSearchOpen(true)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">{t('skip')}</a>
      <ScrollManager />
      <AdminToolbar />
      <div className="site-frame">
        <Header onOpenSearch={() => setSearchOpen(true)} />
        <main id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/institution" element={<AboutInstitution />} />
            <Route path="/about/library" element={<AboutLibrary />} />
            <Route path="/about/vision" element={<Vision />} />
            <Route path="/about/rules" element={<Rules />} />
            <Route path="/about/committee" element={<Committee />} />
            <Route path="/about/timings" element={<Timings />} />
            <Route path="/about/future" element={<Future />} />
            <Route path="/about/staff" element={<Staff />} />
            <Route path="/about/budget" element={<Budget />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/services" element={<Services />} />
            <Route path="/oa-resources" element={<OAResources />} />
            <Route path="/research-support" element={<ResearchSupport />} />
            <Route path="/ai-tools" element={<AITools />} />
            <Route path="/e-learning" element={<Elearning />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/virtual-tour" element={<VirtualTour />} />
            <Route path="/best-practices" element={<BestPractices />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/racp" element={<ReportConnectionProblem />} />
            <Route path="/rab" element={<RecommendBook />} />
            <Route path="/rj" element={<RecommendJournals />} />
            <Route path="/noticeboard" element={<NoticeBoard />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <div className="site-watermark" aria-hidden="true">SSCASC&nbsp;LIBRARY</div>
      <Chatbot />
      <SwamijiPhoto />
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
      <LoginModal />
    </>
  )
}

export default function App() {
  return (
    <AdminProvider>
      <AppInner />
    </AdminProvider>
  )
}

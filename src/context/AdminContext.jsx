import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { supabase } from '../services/supabase'

const AdminContext = createContext(null)

export function AdminProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [pageContent, setPageContent] = useState({})
  const [gallery, setGallery] = useState([])
  const [hitCount, setHitCount] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAdmin(!!session)
    })
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAdmin(!!session)
    })
    return () => subscription.unsubscribe()
  }, [])

  useEffect(() => {
    loadPageContent()
    loadGallery()
    trackVisit()
  }, [])

  const loadPageContent = async () => {
    const { data } = await supabase.from('page_content').select('*')
    if (!data) return
    const map = {}
    data.forEach(({ page, section, field, value }) => {
      if (!map[page]) map[page] = {}
      if (!map[page][section]) map[page][section] = {}
      map[page][section][field] = value
    })
    setPageContent(map)
  }

  const loadGallery = async () => {
    const { data } = await supabase.from('gallery').select('*').order('display_order')
    if (data) setGallery(data)
  }

  const trackVisit = async () => {
    const { data: row } = await supabase
      .from('website_stats')
      .select('id, total_visits')
      .single()

    if (!localStorage.getItem('ssc_visited')) {
      localStorage.setItem('ssc_visited', 'true')
      const newCount = (row?.total_visits ?? 0) + 1
      if (row) {
        await supabase
          .from('website_stats')
          .update({ total_visits: newCount, last_updated: new Date().toISOString() })
          .eq('id', row.id)
      } else {
        await supabase
          .from('website_stats')
          .insert({ total_visits: 1, last_updated: new Date().toISOString() })
      }
      setHitCount(newCount)
    } else {
      setHitCount(row?.total_visits ?? null)
    }
  }

  const getContent = useCallback((page, section, field, fallback = '') => {
    return pageContent?.[page]?.[section]?.[field] ?? fallback
  }, [pageContent])

  const updateContent = useCallback((page, section, field, value) => {
    setPageContent(prev => ({
      ...prev,
      [page]: {
        ...(prev[page] || {}),
        [section]: {
          ...((prev[page] || {})[section] || {}),
          [field]: value,
        },
      },
    }))
  }, [])

  const saveField = async (page, section, field, value) => {
    const { data: existing } = await supabase
      .from('page_content')
      .select('id')
      .eq('page', page)
      .eq('section', section)
      .eq('field', field)
      .maybeSingle()

    let error
    if (existing) {
      const res = await supabase
        .from('page_content')
        .update({ value, updated_at: new Date().toISOString() })
        .eq('id', existing.id)
      error = res.error
    } else {
      const res = await supabase
        .from('page_content')
        .insert({ page, section, field, value, updated_at: new Date().toISOString() })
      error = res.error
    }
    if (!error) updateContent(page, section, field, value)
    return { error }
  }

  const login = async (email, password) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (!error) setShowLoginModal(false)
    return { error }
  }

  const logout = async () => {
    await supabase.auth.signOut()
  }

  return (
    <AdminContext.Provider value={{
      isAdmin,
      showLoginModal,
      setShowLoginModal,
      gallery,
      setGallery,
      hitCount,
      getContent,
      updateContent,
      saveField,
      loadGallery,
      login,
      logout,
    }}>
      {children}
    </AdminContext.Provider>
  )
}

export const useAdmin = () => useContext(AdminContext)

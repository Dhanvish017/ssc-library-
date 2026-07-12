import { useState, useRef } from 'react'
import { PageHead } from '../components/Building.jsx'
import PageLayout from '../components/PageLayout.jsx'
import { useApp } from '../context/AppContext.jsx'
import { useAdmin } from '../context/AdminContext.jsx'
import EditableField from '../components/EditableField.jsx'
import { supabase } from '../services/supabase.js'
import gallery1 from '../assets/gallery/gallery1.jpeg'
import gallery2 from '../assets/gallery/gallery2.jpeg'
import gallery3 from '../assets/gallery/gallery3.jpeg'
import gallery4 from '../assets/gallery/gallery4.jpeg'

const LOCAL_FALLBACK = [
  { id: 'local-1', title: 'Reading Room', image_url: gallery1 },
  { id: 'local-2', title: 'Reference Section', image_url: gallery2 },
  { id: 'local-3', title: 'Digital Library', image_url: gallery3 },
  { id: 'local-4', title: 'Journal Section', image_url: gallery4 },
]

export function Gallery() {
  const { t } = useApp()
  const { isAdmin, gallery, loadGallery } = useAdmin()
  const [uploading, setUploading] = useState(false)
  const uploadRef = useRef(null)

  const displayItems = gallery.length > 0 ? gallery : LOCAL_FALLBACK
  const isSupabase = gallery.length > 0

  const handleUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    setUploading(true)
    const filename = `gallery/${Date.now()}_${file.name}`
    const { error: storageErr } = await supabase.storage.from('images').upload(filename, file)
    if (!storageErr) {
      const { data: { publicUrl } } = supabase.storage.from('images').getPublicUrl(filename)
      await supabase.from('gallery').insert({
        title: file.name.replace(/\.[^/.]+$/, ''),
        image_url: publicUrl,
        display_order: gallery.length + 1,
        created_at: new Date().toISOString(),
      })
      await loadGallery()
    }
    setUploading(false)
    e.target.value = ''
  }

  const handleReplace = async (item, e) => {
    const file = e.target.files[0]
    if (!file) return
    const filename = `gallery/${Date.now()}_${file.name}`
    const { error: storageErr } = await supabase.storage.from('images').upload(filename, file)
    if (!storageErr) {
      const { data: { publicUrl } } = supabase.storage.from('images').getPublicUrl(filename)
      await supabase.from('gallery').update({ image_url: publicUrl }).eq('id', item.id)
      await loadGallery()
    }
    e.target.value = ''
  }

  const handleDelete = async (item) => {
    if (!window.confirm('Delete this image from the gallery?')) return
    await supabase.from('gallery').delete().eq('id', item.id)
    await loadGallery()
  }

  return (
    <PageLayout>
      <div className="container page">
        <PageHead eyebrow={t('pages.more.galleryEyebrow')} title={t('pages.more.galleryTitle')} />
        <EditableField page="more" section="gallery" field="intro" fallback={t('pages.more.galleryIntro')} as="p" className="prose" />
        {isAdmin && (
          <div style={{ marginBottom: 16 }}>
            <input ref={uploadRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleUpload} />
            <button className="btn btn-gold" onClick={() => uploadRef.current?.click()} disabled={uploading}>
              {uploading ? 'Uploading…' : '+ Upload Image'}
            </button>
          </div>
        )}
        <div className="gallery-grid">
          {displayItems.map((item, index) => (
            <div className="gallery-item" key={item.id} style={{ position: 'relative' }}>
              <img
                src={item.image_url}
                alt={item.title}
                className={`gallery-image ${index === 0 ? 'gallery-image-1' : ''}`}
              />
              {isAdmin && isSupabase && (
                <div className="gallery-admin-controls">
                  <label className="gallery-admin-btn">
                    Replace
                    <input type="file" accept="image/*" style={{ display: 'none' }} onChange={e => handleReplace(item, e)} />
                  </label>
                  <button className="gallery-admin-btn gallery-admin-delete" onClick={() => handleDelete(item)}>
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}

export function VirtualTour() {
  const { t } = useApp()
  return (
    <PageLayout>
      <div className="container page">
        <PageHead eyebrow={t('pages.more.tourEyebrow')} title={t('pages.more.tourTitle')} />
        <EditableField page="more" section="tour" field="intro" fallback={t('pages.more.tourIntro')} as="p" className="prose" />
      </div>
    </PageLayout>
  )
}

export function BestPractices() {
  const { t } = useApp()
  return (
    <PageLayout>
      <div className="container page">
        <PageHead eyebrow={t('pages.more.practicesEyebrow')} title={t('pages.more.practicesTitle')} />
        <EditableField page="more" section="practices" field="intro" fallback={t('pages.more.practicesIntro')} as="p" className="prose" />
        <div className="deflist" />
      </div>
    </PageLayout>
  )
}

export function Activities() {
  const { t } = useApp()
  return (
    <PageLayout>
      <div className="container page">
        <PageHead eyebrow={t('pages.more.activitiesEyebrow')} title={t('pages.more.activitiesTitle')} />
        <EditableField page="more" section="activities" field="text" fallback={t('pages.more.activities')} as="p" className="prose" />
      </div>
    </PageLayout>
  )
}

export function Feedback() {
  const { t } = useApp()
  const [sent, setSent] = useState(false)
  return (
    <PageLayout>
      <div className="container page">
        <PageHead eyebrow={t('pages.askus.feedbackEyebrow')} title={t('pages.askus.feedbackTitle')} />
        <p className="prose">{t('pages.askus.feedbackIntro')}</p>
        {sent ? (
          <div className="notice">{t('pages.askus.feedbackSuccess')}</div>
        ) : (
          <form className="form-grid" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
            <div>
              <label htmlFor="fb-name">{t('pages.askus.feedback.name')}</label>
              <input id="fb-name" type="text" required />
            </div>
            <div>
              <label htmlFor="fb-email">{t('pages.askus.feedback.email')}</label>
              <input id="fb-email" type="email" required />
            </div>
            <div>
              <label htmlFor="fb-type">{t('pages.askus.feedback.type')}</label>
              <select id="fb-type">
                <option value="Suggestion">{t('pages.askus.feedback.options.suggestion')}</option>
                <option value="Compliment">{t('pages.askus.feedback.options.compliment')}</option>
                <option value="Complaint">{t('pages.askus.feedback.options.complaint')}</option>
                <option value="Resource request">{t('pages.askus.feedback.options.resourceRequest')}</option>
              </select>
            </div>
            <div>
              <label htmlFor="fb-msg">{t('pages.askus.feedback.message')}</label>
              <textarea id="fb-msg" rows="5" required></textarea>
            </div>
            <button className="btn btn-gold" type="submit">{t('pages.askus.feedback.submit')}</button>
          </form>
        )}
      </div>
    </PageLayout>
  )
}

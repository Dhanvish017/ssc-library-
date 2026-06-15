import { useApp } from '../context/AppContext.jsx'
import { heroStats } from '../data/site.js'
import PageLayout from '../components/PageLayout.jsx'

export default function Home() {
  const { t } = useApp()
  return (
    <PageLayout>
      <div className="eyebrow">{t('heroEyebrow')}</div>
      <h2 dangerouslySetInnerHTML={{ __html: t('Welcome to Library') }} />
      <p className="prose" dangerouslySetInnerHTML={{ __html: t('pages.home.intro') }} />

      <div className="hero-stats">
        {heroStats.map((s) => (
          <div className="hero-stat" key={s.label}>
            <div className="num">{s.num}</div>
            <div className="lbl">{t(`pages.home.stats.${s.label}`, s.label)}</div>
          </div>
        ))}
      </div>
      <div className="section" style={{ marginTop: '40px' }}>
      </div>
    </PageLayout>
  )
}

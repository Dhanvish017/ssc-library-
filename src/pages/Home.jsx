import { useApp } from '../context/AppContext.jsx'
import { useAdmin } from '../context/AdminContext.jsx'
import { heroStats } from '../data/site.js'
import PageLayout from '../components/PageLayout.jsx'
import EditableField from '../components/EditableField.jsx'

export default function Home() {
  const { t } = useApp()
  const { isAdmin, getContent } = useAdmin()
  return (
    <PageLayout>
      <div className="eyebrow">{t('heroEyebrow')}</div>
      <h2 dangerouslySetInnerHTML={{ __html: t('Welcome to Library') }} />
      <EditableField
        page="home" section="intro" field="text"
        fallback={t('pages.home.intro')}
        as="p" className="prose" html multiline
      />

      <div className="hero-stats">
        {heroStats.map((s, i) => (
          <div className="hero-stat" key={s.label}>
            <div className="num">
              {isAdmin
                ? <EditableField page="home" section="stats" field={`num_${i}`} fallback={s.num} />
                : getContent('home', 'stats', `num_${i}`, s.num)
              }
            </div>
            <div className="lbl">
              {isAdmin
                ? <EditableField page="home" section="stats" field={`label_${i}`} fallback={t(`pages.home.stats.${s.label}`, s.label)} />
                : getContent('home', 'stats', `label_${i}`, t(`pages.home.stats.${s.label}`, s.label))
              }
            </div>
          </div>
        ))}
      </div>
      <div className="section" style={{ marginTop: '40px' }} />
    </PageLayout>
  )
}

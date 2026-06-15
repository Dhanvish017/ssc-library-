import { PageHead, ResourceTable, ToolTable, LinkTable } from '../components/Building.jsx'
import { oaJournals, oaBooks, etds, researchTools, aiTools, elearning } from '../data/site.js'
import PageLayout from '../components/PageLayout.jsx'
import { useApp } from '../context/AppContext.jsx'

export function OAResources() {
  const { t } = useApp()
  return (
    <PageLayout>
      <div className="container page">
        <PageHead eyebrow={t('pages.resources.oaEyebrow')} title={t('pages.resources.oaTitle')} />
        <p className="prose">
          {t('pages.resources.oaIntro')}
        </p>
        <div className="section">
          <h3>{t('pages.resources.oaJournalsTitle')}</h3>
          <ResourceTable rows={oaJournals} />
        </div>
        <div className="section">
          <h3>{t('pages.resources.oaBooksTitle')}</h3>
          <ResourceTable rows={oaBooks} />
        </div>
        <div className="section">
          <h3>{t('pages.resources.etdsTitle')}</h3>
          <ResourceTable rows={etds} />
        </div>
      </div>
    </PageLayout>
  )
}

export function ResearchSupport() {
  const { t } = useApp()
  return (
    <PageLayout>
      <div className="container page">
        <PageHead eyebrow={t('pages.resources.researchEyebrow')} title={t('pages.resources.researchTitle')} />
        <p className="prose">
          {t('pages.resources.researchIntro')}
        </p>
        <ToolTable groups={researchTools} />
      </div>
    </PageLayout>
  )
}

export function AITools() {
  const { t } = useApp()
  return (
    <PageLayout>
      <div className="container page">
        <PageHead eyebrow={t('pages.resources.aiEyebrow')} title={t('pages.resources.aiTitle')} />
        <p className="prose">
          {t('pages.resources.aiIntro')}
        </p>
        <ToolTable groups={aiTools} />
      </div>
    </PageLayout>
  )
}

export function Elearning() {
  const { t } = useApp()
  return (
    <PageLayout>
      <div className="container page">
        <PageHead eyebrow={t('pages.resources.elearningEyebrow')} title={t('pages.resources.elearningTitle')} />
        <p className="prose">
          {t('pages.resources.elearningIntro')}
        </p>
        <LinkTable rows={elearning} />
      </div>
    </PageLayout>
  )
}

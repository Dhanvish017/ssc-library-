import { PageHead, ResourceTable, ToolTable, LinkTable } from '../components/Building.jsx'
import { oaJournals, oaBooks, etds, researchTools, aiTools, elearning } from '../data/site.js'
import PageLayout from '../components/PageLayout.jsx'
import { useApp } from '../context/AppContext.jsx'
import EditableField from '../components/EditableField.jsx'

export function OAResources() {
  const { t } = useApp()
  return (
    <PageLayout>
      <div className="container page">
        <PageHead eyebrow={t('pages.resources.oaEyebrow')} title={t('pages.resources.oaTitle')} />
        <EditableField page="resources" section="oa" field="intro" fallback={t('pages.resources.oaIntro')} as="p" className="prose" multiline />
        <div className="section">
          <EditableField page="resources" section="oa" field="journalsTitle" fallback={t('pages.resources.oaJournalsTitle')} as="h3" />
          <ResourceTable rows={oaJournals} tableKey="oaJournals" />
        </div>
        <div className="section">
          <EditableField page="resources" section="oa" field="booksTitle" fallback={t('pages.resources.oaBooksTitle')} as="h3" />
          <ResourceTable rows={oaBooks} tableKey="oaBooks" />
        </div>
        <div className="section">
          <EditableField page="resources" section="oa" field="etdsTitle" fallback={t('pages.resources.etdsTitle')} as="h3" />
          <ResourceTable rows={etds} tableKey="etds" />
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
        <EditableField page="resources" section="research" field="intro" fallback={t('pages.resources.researchIntro')} as="p" className="prose" multiline />
        <ToolTable groups={researchTools} tableKey="researchTools" />
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
        <EditableField page="resources" section="ai" field="intro" fallback={t('pages.resources.aiIntro')} as="p" className="prose" multiline />
        <ToolTable groups={aiTools} tableKey="aiTools" />
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
        <EditableField page="resources" section="elearning" field="intro" fallback={t('pages.resources.elearningIntro')} as="p" className="prose" multiline />
        <LinkTable rows={elearning} tableKey="elearning" />
      </div>
    </PageLayout>
  )
}

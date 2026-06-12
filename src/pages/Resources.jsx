import { PageHead, ResourceTable, ToolTable, LinkTable } from '../components/Building.jsx'
import { oaJournals, oaBooks, etds, researchTools, aiTools, elearning } from '../data/site.js'

export function OAResources() {
  return (
    <div className="container page">
      <PageHead eyebrow="Open Access" title="OA Resources" />
      <p className="prose">
        Open Access resources are freely available scholarly journals, books and theses.
        Explore the curated directories below for research and study.
      </p>
      <div className="section"><h3>OA Journals</h3><ResourceTable rows={oaJournals} /></div>
      <div className="section"><h3>OA Books</h3><ResourceTable rows={oaBooks} /></div>
      <div className="section"><h3>ETDs — Electronic Theses &amp; Dissertations</h3><ResourceTable rows={etds} /></div>
    </div>
  )
}

export function ResearchSupport() {
  return (
    <div className="container page">
      <PageHead eyebrow="Research" title="Research Support System" />
      <p className="prose">
        A curated set of tools to support every stage of research — from literature discovery
        and data analysis to reference management, plagiarism checking and scholarly writing.
      </p>
      <ToolTable groups={researchTools} />
    </div>
  )
}

export function AITools() {
  return (
    <div className="container page">
      <PageHead eyebrow="AI" title="AI Tools" />
      <p className="prose">
        Selected AI tools that assist with academic writing, summarising, literature search,
        presentations and finding suitable journals. Use them responsibly and in line with
        academic-integrity norms.
      </p>
      <ToolTable groups={aiTools} />
    </div>
  )
}

export function Elearning() {
  return (
    <div className="container page">
      <PageHead eyebrow="E-learning" title="E-learning Platforms" />
      <p className="prose">
        National and global e-learning platforms offering courses, lectures and study material
        across disciplines.
      </p>
      <LinkTable rows={elearning} />
    </div>
  )
}

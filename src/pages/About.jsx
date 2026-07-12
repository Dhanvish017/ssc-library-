import { PageHead } from '../components/Building.jsx'
import { staff, budget } from '../data/site.js'
import PageLayout from '../components/PageLayout.jsx'
import { useApp } from '../context/AppContext.jsx'
import EditableField from '../components/EditableField.jsx'

export function AboutInstitution() {
  const { t } = useApp()
  return (
    <PageLayout>
      <div className="container page">
        <PageHead eyebrow={t('pages.about.aboutUs')} title={t('pages.about.institutionTitle')} />
        <div className="prose">
          <EditableField page="about" section="institution" field="para1" fallback={t('pages.about.institutionPara1')} as="p" html multiline />
          <EditableField page="about" section="institution" field="para2" fallback={t('pages.about.institutionPara2')} as="p" html multiline />
          <EditableField page="about" section="institution" field="para3" fallback={t('pages.about.institutionPara3')} as="p" html multiline />
          <EditableField page="about" section="institution" field="para4" fallback={t('pages.about.institutionPara4')} as="p" html multiline />
        </div>
      </div>
    </PageLayout>
  )
}

export function AboutLibrary() {
  const { t } = useApp()
  return (
    <PageLayout>
      <div className="container page">
        <PageHead eyebrow={t('pages.about.aboutUs')} title={t('pages.about.libraryTitle')} />
        <div className="prose">
          <EditableField page="about" section="library" field="para1" fallback={t('pages.about.libraryPara1')} as="p" multiline />
          <EditableField page="about" section="library" field="para2" fallback={t('pages.about.libraryPara2')} as="p" multiline />
          <EditableField page="about" section="library" field="para3" fallback={t('pages.about.libraryPara3')} as="p" multiline />
          <EditableField page="about" section="library" field="para4" fallback={t('pages.about.libraryPara4')} as="p" multiline />
        </div>
      </div>
    </PageLayout>
  )
}

export function Vision() {
  const { t } = useApp()
  return (
    <PageLayout>
      <div className="container page">
        <PageHead eyebrow={t('pages.about.aboutUs')} title={t('pages.about.visionMissionTitle')} />
        <div className="section">
          <h3>{t('pages.about.visionHeading')}</h3>
          <EditableField page="about" section="vision" field="text" fallback={t('pages.about.visionText')} as="p" className="prose" multiline />
        </div>
        <div className="section">
          <h3>{t('pages.about.missionHeading')}</h3>
          <ul className="prose">
            <li><EditableField page="about" section="mission" field="item1" fallback={t('pages.about.missionItem1')} /></li>
            <li><EditableField page="about" section="mission" field="item2" fallback={t('pages.about.missionItem2')} /></li>
            <li><EditableField page="about" section="mission" field="item3" fallback={t('pages.about.missionItem3')} /></li>
            <li><EditableField page="about" section="mission" field="item4" fallback={t('pages.about.missionItem4')} /></li>
          </ul>
        </div>
      </div>
    </PageLayout>
  )
}

export function Rules() {
  const { t } = useApp()
  const ruleKeys = ['rule1', 'rule2', 'rule3', 'rule4', 'rule5', 'rule6']
  return (
    <PageLayout>
      <div className="container page">
        <PageHead eyebrow={t('pages.about.aboutUs')} title={t('pages.about.rulesTitle')} />
        <ul className="prose">
          {ruleKeys.map(key => (
            <li key={key}>
              <EditableField page="about" section="rules" field={key} fallback={t(`pages.about.${key}`)} />
            </li>
          ))}
        </ul>
      </div>
    </PageLayout>
  )
}

export function Committee() {
  const { t } = useApp()
  return (
    <PageLayout>
      <div className="container page">
        <PageHead eyebrow={t('pages.about.aboutUs')} title={t('pages.about.committeeTitle')} />
        <EditableField page="about" section="committee" field="desc" fallback={t('pages.about.committeeDesc')} as="p" className="prose" multiline />
      </div>
    </PageLayout>
  )
}

export function Timings() {
  const { t } = useApp()
  const rows = [
    [t('pages.about.timingsRowMonFri'), t('pages.about.timingsRowMonFriVal')],
    [t('pages.about.timingsRowSat'), t('pages.about.timingsRowSatVal')],
    [t('pages.about.timingsRowSunHolidays'), t('pages.about.timingsRowSunHolidaysVal')],
    [t('pages.about.timingsRowExam'), t('pages.about.timingsRowExamVal')],
  ]
  return (
    <PageLayout>
      <div className="container page">
        <PageHead eyebrow={t('pages.about.aboutUs')} title={t('pages.about.timingsTitle')} />
        <div className="table-wrap" style={{ maxWidth: 520 }}>
          <table className="data">
            <thead>
              <tr>
                <th>{t('pages.about.timingsTableHeaderDay')}</th>
                <th>{t('pages.about.timingsTableHeaderTimings')}</th>
              </tr>
            </thead>
            <tbody>{rows.map(([d, h]) => <tr key={d}><td>{d}</td><td>{h}</td></tr>)}</tbody>
          </table>
        </div>
      </div>
    </PageLayout>
  )
}

export function Future() {
  const { t } = useApp()
  return (
    <PageLayout>
      <div className="container page">
        <PageHead eyebrow={t('pages.about.aboutUs')} title={t('pages.about.futureTitle')} />
        <EditableField page="about" section="future" field="text" fallback={t('pages.about.futurePara')} as="div" className="prose" html multiline />
      </div>
    </PageLayout>
  )
}

export function Staff() {
  const { t } = useApp()
  return (
    <PageLayout>
      <div className="container page">
        <PageHead eyebrow={t('pages.about.aboutUs')} title={t('pages.about.staffTitle')} />
        <EditableField page="about" section="staff" field="desc" fallback={t('pages.about.staffDesc')} as="p" className="prose" multiline />
        <div className="table-wrap" style={{ maxWidth: 720 }}>
          <table className="data">
            <thead>
              <tr>
                <th>{t('pages.about.staffHeaderSl')}</th>
                <th>{t('pages.about.staffHeaderName')}</th>
                <th>{t('pages.about.staffHeaderRole')}</th>
              </tr>
            </thead>
            <tbody>
              {staff.map((s) => (
                <tr key={s.name}>
                  <td>{s.sl || ''}</td>
                  <td>{t(`pages.about.staffNames.${s.key}`, s.name)}</td>
                  <td>{t(`pages.about.staffRoles.${s.role}`, s.role)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageLayout>
  )
}

export function Budget() {
  const { t } = useApp()
  return (
    <PageLayout>
      <div className="container page">
        <PageHead eyebrow={t('pages.about.aboutUs')} title={t('pages.about.budgetTitle')} />
        <EditableField page="about" section="budget" field="desc" fallback={t('pages.about.budgetDesc')} as="p" className="prose" multiline />
        <div className="table-wrap" style={{ maxWidth: 560 }}>
          <table className="data">
            <thead>
              <tr>
                <th>{t('pages.about.budgetHeaderHead')}</th>
                <th>{t('pages.about.budgetHeaderAmount')}</th>
              </tr>
            </thead>
            <tbody>
              {budget.map((b) => (
                <tr key={b.head}>
                  <td>{t(`pages.about.budgetHeads.${b.head}`, b.head)}</td>
                  <td>{b.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageLayout>
  )
}

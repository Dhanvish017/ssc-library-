import { PageHead } from '../components/Building.jsx'
import { staff, budget, college } from '../data/site.js'
import PageLayout from '../components/PageLayout.jsx'
import { useApp } from '../context/AppContext.jsx'

export function AboutInstitution() {
  const { t } = useApp()
  return (
    <PageLayout>
      <div className="container page">
        <PageHead eyebrow={t('pages.about.aboutUs')} title={t('pages.about.institutionTitle')} />
        <div className="prose">
          <p dangerouslySetInnerHTML={{ __html: t('pages.about.institutionPara1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('pages.about.institutionPara2') }} />
          <p dangerouslySetInnerHTML={{ __html: t('pages.about.institutionPara3') }} />
          <p dangerouslySetInnerHTML={{ __html: t('pages.about.institutionPara4') }} />
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
          <p>{t('pages.about.libraryPara1')}</p>
          <p>{t('pages.about.libraryPara2')}</p>
          <p>{t('pages.about.libraryPara3')}</p>
          <p>{t('pages.about.libraryPara4')}</p>
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
          <p className="prose">
            {t('pages.about.visionText')}
          </p>
        </div>
        <div className="section">
          <h3>{t('pages.about.missionHeading')}</h3>
          <ul className="prose">
            <li>{t('pages.about.missionItem1')}</li>
            <li>{t('pages.about.missionItem2')}</li>
            <li>{t('pages.about.missionItem3')}</li>
            <li>{t('pages.about.missionItem4')}</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  )
}

export function Rules() {
  const { t } = useApp()
  const rules = [
    t('pages.about.rule1'),
    t('pages.about.rule2'),
    t('pages.about.rule3'),
    t('pages.about.rule4'),
    t('pages.about.rule5'),
    t('pages.about.rule6'),
  ]
  return (
    <PageLayout>
      <div className="container page">
        <PageHead eyebrow={t('pages.about.aboutUs')} title={t('pages.about.rulesTitle')} />
        <ul className="prose">
          {rules.map((r) => <li key={r}>{r}</li>)}
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
        <p className="prose">
          {t('pages.about.committeeDesc')}
        </p>
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
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: t('pages.about.futurePara') }}
        />
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
        <p className="prose">
          {t('pages.about.staffDesc')}
        </p>
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
        <p className="prose">
          {t('pages.about.budgetDesc')}
        </p>
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

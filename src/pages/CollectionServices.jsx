import { PageHead } from '../components/Building.jsx'
import { collection, services } from '../data/site.js'
import PageLayout from '../components/PageLayout.jsx'
import { useApp } from '../context/AppContext.jsx'

export function Collection() {
  const { t } = useApp()
  return (
    <PageLayout>
      <div className="container page">
        <PageHead eyebrow={t('pages.collection.eyebrow')} title={t('pages.collection.title')} />
        <p className="prose">
          {t('pages.collection.intro')}
        </p>

        <div className="section" id="books">
          <h3>{t('pages.collection.stockTitle')}</h3>
          <div className="table-wrap">
            <table className="data">
              <thead>
                <tr>
                  <th>{t('pages.collection.tableHeaderSl')}</th>
                  <th>{t('pages.collection.tableHeaderItem')}</th>
                  <th>{t('pages.collection.tableHeaderDetails')}</th>
                </tr>
              </thead>
              <tbody>
                {collection.map((c) => (
                  <tr key={c.sl}>
                    <td>{c.sl}</td>
                    <td>{t(`pages.collection.items.${c.item}`, c.item)}</td>
                    <td>{t(`pages.collection.details.${c.details}`, c.details)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="section" id="journals">
          <h3>{t('pages.collection.journalsTitle')}</h3>
          <p className="prose">
            {t('pages.collection.journalsDesc')}
          </p>
        </div>

        <div className="section" id="question-paper">
          <h3>{t('pages.collection.questionPaperTitle')}</h3>
          <p className="prose">
            {t('pages.collection.questionPaperDesc')}
          </p>
        </div>

        <div className="section" id="magazines">
          <h3>{t('pages.collection.magazinesTitle')}</h3>
          <p className="prose">
            {t('pages.collection.magazinesDesc')}
          </p>
        </div>
      </div>
    </PageLayout>
  )
}

export function Services() {
  const { t } = useApp()
  return (
    <PageLayout>
      <div className="container page">
        <PageHead eyebrow={t('pages.services.eyebrow')} title={t('pages.services.title')} />
        <p className="prose">{t('pages.services.intro')}</p>

        <div className="section" id="circulation">
          <h3>{t('pages.services.circulationTitle')}</h3>
          <div className="deflist">
            {services.map(([name, desc]) => (
              <div className="item" key={name}>
                <strong>{t(`pages.services.list.${name}.title`, name)}:</strong> {t(`pages.services.list.${name}.desc`, desc)}
              </div>
            ))}
          </div>
        </div>

        <div className="section" id="reference">
          <h3>{t('pages.services.referenceTitle')}</h3>
          <p className="prose">
            {t('pages.services.referenceDesc')}
          </p>
        </div>

        <div className="section" id="opac">
          <h3>{t('pages.services.opacTitle')}</h3>
          <p className="prose">
            {t('pages.services.opacDesc')}
          </p>
        </div>
      </div>
    </PageLayout>
  )
}

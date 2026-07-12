import { PageHead } from '../components/Building.jsx'
import { collection, services } from '../data/site.js'
import PageLayout from '../components/PageLayout.jsx'
import { useApp } from '../context/AppContext.jsx'
import EditableField from '../components/EditableField.jsx'

export function Collection() {
  const { t } = useApp()
  return (
    <PageLayout>
      <div className="container page">
        <PageHead eyebrow={t('pages.collection.eyebrow')} title={t('pages.collection.title')} />
        <EditableField page="collection" section="intro" field="text" fallback={t('pages.collection.intro')} as="p" className="prose" multiline />

        <div className="section" id="books">
          <EditableField page="collection" section="stockSection" field="title" fallback={t('pages.collection.stockTitle')} as="h3" />
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
                    <td>
                      <EditableField
                        page="collection" section="items" field={`row_${c.sl}_item`}
                        fallback={t(`pages.collection.items.${c.item}`, c.item)}
                      />
                    </td>
                    <td>
                      <EditableField
                        page="collection" section="items" field={`row_${c.sl}_details`}
                        fallback={t(`pages.collection.details.${c.details}`, c.details)}
                        multiline
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="section" id="journals">
          <EditableField page="collection" section="journals" field="title" fallback={t('pages.collection.journalsTitle')} as="h3" />
          <EditableField page="collection" section="journals" field="desc" fallback={t('pages.collection.journalsDesc')} as="p" className="prose" multiline />
        </div>

        <div className="section" id="question-paper">
          <EditableField page="collection" section="questionPaper" field="title" fallback={t('pages.collection.questionPaperTitle')} as="h3" />
          <EditableField page="collection" section="questionPaper" field="desc" fallback={t('pages.collection.questionPaperDesc')} as="p" className="prose" multiline />
        </div>

        <div className="section" id="magazines">
          <EditableField page="collection" section="magazines" field="title" fallback={t('pages.collection.magazinesTitle')} as="h3" />
          <EditableField page="collection" section="magazines" field="desc" fallback={t('pages.collection.magazinesDesc')} as="p" className="prose" multiline />
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
        <EditableField page="services" section="intro" field="text" fallback={t('pages.services.intro')} as="p" className="prose" multiline />

        <div className="section" id="circulation">
          <EditableField page="services" section="circulation" field="title" fallback={t('pages.services.circulationTitle')} as="h3" />
          <div className="deflist">
            {services.map(([name, desc], i) => (
              <div className="item" key={name}>
                <strong>
                  <EditableField
                    page="services" section="list" field={`item_${i}_title`}
                    fallback={t(`pages.services.list.${name}.title`, name)}
                  />
                </strong>:{' '}
                <EditableField
                  page="services" section="list" field={`item_${i}_desc`}
                  fallback={t(`pages.services.list.${name}.desc`, desc)}
                  multiline
                />
              </div>
            ))}
          </div>
        </div>

        <div className="section" id="reference">
          <EditableField page="services" section="reference" field="title" fallback={t('pages.services.referenceTitle')} as="h3" />
          <EditableField page="services" section="reference" field="desc" fallback={t('pages.services.referenceDesc')} as="p" className="prose" multiline />
        </div>

        <div className="section" id="opac">
          <EditableField page="services" section="opac" field="title" fallback={t('pages.services.opacTitle')} as="h3" />
          <EditableField page="services" section="opac" field="desc" fallback={t('pages.services.opacDesc')} as="p" className="prose" multiline />
        </div>
      </div>
    </PageLayout>
  )
}

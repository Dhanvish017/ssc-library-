import { PageHead } from '../components/Building.jsx'
import { collection, services } from '../data/site.js'

export function Collection() {
  return (
    <div className="container page">
      <PageHead eyebrow="Collection" title="Library Collection" />
      <p className="prose">
        The college library has a rich collection of books and information resources for
        students, teachers and staff — a total of 69,456 books across 13,032 titles. The
        collection includes textbooks, reference books, periodicals, magazines, newspapers,
        journals, previous question papers, competitive-examination books and other learning
        materials.
      </p>

      <div className="section" id="books">
        <h3>Stock at a glance</h3>
        <div className="table-wrap">
          <table className="data">
            <thead><tr><th>Sl. No.</th><th>Resource / Stock Item</th><th>Details</th></tr></thead>
            <tbody>
              {collection.map((c) => (
                <tr key={c.sl}><td>{c.sl}</td><td>{c.item}</td><td>{c.details}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="section" id="journals">
        <h3>Journals</h3>
        <p className="prose">
          The library subscribes to printed journals across disciplines, complemented by
          thousands of e-journals through INFLIBNET N-LIST and open access collections.
        </p>
      </div>

      <div className="section" id="magazines">
        <h3>Magazines &amp; Newspapers</h3>
        <p className="prose">
          A range of general and subject magazines and daily newspapers are available in the
          reading room to keep users informed and to support general reading.
        </p>
      </div>
    </div>
  )
}

export function Services() {
  return (
    <div className="container page">
      <PageHead eyebrow="Services" title="Library Services" />
      <p className="prose">The library provides the following services to students and staff:</p>

      <div className="section" id="circulation">
        <h3>Circulation &amp; user services</h3>
        <div className="deflist">
          {services.map(([name, desc]) => (
            <div className="item" key={name}><strong>{name}:</strong> {desc}</div>
          ))}
        </div>
      </div>

      <div className="section" id="reference">
        <h3>Reference service</h3>
        <p className="prose">
          Users are assisted in finding and using reference sources, encyclopaedias,
          dictionaries, yearbooks and subject reference works for study and research.
        </p>
      </div>

      <div className="section" id="opac">
        <h3>OPAC — Online Public Access Catalogue</h3>
        <p className="prose">
          OPAC lets you search the library collection by title, author, subject or keyword and
          check availability before visiting the shelves.
        </p>
        <div className="notice">
          OPAC link placeholder — connect your library automation OPAC URL here (for example,
          Koha or SOUL). Replace this notice with the live catalogue link or embed.
        </div>
      </div>
    </div>
  )
}

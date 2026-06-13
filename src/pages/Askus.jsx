import { useState } from 'react'
import { PageHead } from '../components/Building.jsx'



function Page({ children }) {
    return <div className="container page">{children}</div>
}
export function FAQ() {
    const faqs = [
        {
            q: 'What are the library timings?',
            a: 'The library is open from 9:00 AM to 6:00 PM on working days.'
        },
        {
            q: 'How many books can I borrow?',
            a: 'Students may borrow books as per the library borrowing rules.'
        },
        {
            q: 'Can I access INFLIBNET resources?',
            a: 'Yes. INFLIBNET resources are available through the library.'
        },
        {
            q: 'Is Wi-Fi available in the library?',
            a: 'Yes. Internet and digital library facilities are available for users.'
        },
        {
            q: 'Can I renew borrowed books?',
            a: 'Yes, provided the book has not been reserved by another user.'
        },
        {
            q: 'How can I suggest a new book for purchase?',
            a: 'Students and faculty may submit suggestions to the librarian.'
        }
    ]

    return (
        <Page>
            <PageHead eyebrow="Ask Us" title="Frequently Asked Questions" />

            <div className="prose">
                {faqs.map((faq, index) => (
                    <div key={index} style={{ marginBottom: '20px' }}>
                        <h3>{faq.q}</h3>
                        <p>{faq.a}</p>
                    </div>
                ))}
            </div>

            <div className="notice" style={{ marginTop: '20px' }}>
                If your question is not listed here, please contact the library staff
                or submit your query through the feedback section.
            </div>
        </Page>
    )
}


export function Feedback() {
    const [sent, setSent] = useState(false)
    return (
        <div className="container page">
            <PageHead eyebrow="More" title="Feedback" />
            <p className="prose">Your suggestions help us improve. Please share your feedback below.</p>
            {sent ? (
                <div className="notice">Thank you — your feedback has been recorded (demo). Connect this form to your backend or a Google Form to collect responses.</div>
            ) : (
                <form className="form-grid" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
                    <div>
                        <label htmlFor="fb-name">Name</label>
                        <input id="fb-name" type="text" required />
                    </div>
                    <div>
                        <label htmlFor="fb-email">Email</label>
                        <input id="fb-email" type="email" required />
                    </div>
                    <div>
                        <label htmlFor="fb-type">Type</label>
                        <select id="fb-type">
                            <option>Suggestion</option>
                            <option>Compliment</option>
                            <option>Complaint</option>
                            <option>Resource request</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="fb-msg">Message</label>
                        <textarea id="fb-msg" rows="5" required></textarea>
                    </div>
                    <button className="btn btn-gold" type="submit">Submit feedback</button>
                </form>
            )}
        </div>
    )
}


export function ReportConnectionProblem() {
    return (
        <div className="container page">
            <PageHead eyebrow="Ask Us" title="Report a Connection Problem" />

            <p className="prose">
                If you are facing issues accessing OPAC, e-resources, INFLIBNET,
                library Wi-Fi, digital library services, or any online resource,
                please report the problem to the library staff.
            </p>

            <form className="form-grid">
                <div>
                    <label>Name</label>
                    <input type="text" />
                </div>

                <div>
                    <label>Email</label>
                    <input type="email" />
                </div>

                <div>
                    <label>Problem Description</label>
                    <textarea rows="5"></textarea>
                </div>

                <button className="btn btn-gold">
                    Submit Report
                </button>
            </form>
        </div>
    )
}


export function RecommendBook() {
    return (
        <div className="container page">
            <PageHead eyebrow="Ask Us" title="Recommend a Book" />

            <p className="prose">
                Have you read a great book recently?
                Do you feel a title would benefit our collection?
                Please share your book recommendations with us.
            </p>

            <form className="form-grid">
                <div>
                    <label>Your Name</label>
                    <input type="text" />
                </div>

                <div>
                    <label>Email</label>
                    <input type="email" />
                </div>

                <div>
                    <label>Book Title</label>
                    <input type="text" />
                </div>

                <div>
                    <label>Author(s)</label>
                    <input type="text" />
                </div>

                <div>
                    <label>Publisher (Optional)</label>
                    <input type="text" />
                </div>

                <div>
                    <label>Year of Publication (Optional)</label>
                    <input type="text" />
                </div>

                <div>
                    <label>ISBN (Optional)</label>
                    <input type="text" />
                </div>

                <div>
                    <label>Reason / Justification</label>
                    <textarea rows="4" placeholder="Why should we add this book to the library?"></textarea>
                </div>

                <button className="btn btn-gold">
                    Submit Recommendation
                </button>
            </form>
        </div>
    )
}


export function RecommendJournals() {
    return (
        <div className="container page">
            <PageHead eyebrow="Ask Us" title="Recommend Journals" />

            <p className="prose">
                Suggest journals, magazines, or periodicals that would enrich our
                library’s collection and support teaching and research.
            </p>

            <form className="form-grid">
                <div>
                    <label>Your Name</label>
                    <input type="text" />
                </div>

                <div>
                    <label>Email</label>
                    <input type="email" />
                </div>

                <div>
                    <label>Journal Title</label>
                    <input type="text" />
                </div>

                <div>
                    <label>Publisher</label>
                    <input type="text" />
                </div>

                <div>
                    <label>ISSN (Optional)</label>
                    <input type="text" />
                </div>

                <div>
                    <label>Frequency (Monthly, Quarterly, Yearly, etc.)</label>
                    <input type="text" />
                </div>

                <div>
                    <label>Subject Area</label>
                    <input type="text" />
                </div>

                <div>
                    <label>Reason for Recommendation</label>
                    <textarea
                        rows="4"
                        placeholder="How will this journal benefit students and researchers?"
                    />
                </div>

                <button className="btn btn-gold">
                    Submit Recommendation
                </button>
            </form>
        </div>
    );
}


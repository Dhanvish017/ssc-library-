// Builds a flat, searchable index of pages + sections from site data.
// Search returns matching entries so the UI can render clickable links
// to the pages that contain the keyword (per the brief).

import {
  oaJournals, oaBooks, etds, researchTools, aiTools, elearning,
  services, collection, staff,
} from './site.js'

const flatTools = (groups) =>
  groups.flatMap((g) => g.tools.map(([name]) => name).join(' ') + ' ' + g.heading + ' ' + g.purpose)

export const searchIndex = [
  { title: 'Home', crumb: 'Home', to: '/', text: 'home library information center gateway knowledge catalogue welcome' },
  { title: 'About the Institution', crumb: 'About Us', to: '/about/institution', text: 'sree siddaganga college arts science commerce tumkur education society mutt naac a grade accreditation' },
  { title: 'About the Library', crumb: 'About Us', to: '/about/library', text: 'library heart institution automated infilibnet reference reading room journal digital library 68433 books' },
  { title: 'Vision & Mission', crumb: 'About Us', to: '/about/vision', text: 'vision mission statement knowledge values intellectual development' },
  { title: 'Library Rules', crumb: 'About Us', to: '/about/rules', text: 'library rules silence borrowing identity card discipline conduct' },
  { title: 'Library Committee', crumb: 'About Us', to: '/about/committee', text: 'library committee members governance advisory' },
  { title: 'Library Timings', crumb: 'About Us', to: '/about/timings', text: 'library timings hours open monday saturday working hours schedule' },
  { title: 'Future Plan', crumb: 'About Us', to: '/about/future', text: 'future plan digitization rfid modernization expansion roadmap' },
  { title: 'Library Staff', crumb: 'About Us', to: '/about/staff', text: 'library staff ' + staff.map((s) => s.name + ' ' + s.role).join(' ') },
  { title: 'Library Budget', crumb: 'About Us', to: '/about/budget', text: 'library budget expenditure books periodicals journals 148900 rupees' },
  { title: 'Library Collection', crumb: 'Collection', to: '/collection', text: 'collection ' + collection.map((c) => c.item + ' ' + c.details).join(' ') + ' books journals magazines newspapers palm leaves question papers' },
  { title: 'Library Services', crumb: 'Services', to: '/services', text: 'services circulation reference opac ' + services.map((s) => s[0] + ' ' + s[1]).join(' ') },
  { title: 'OA Resources', crumb: 'Open Access', to: '/oa-resources', text: 'open access oa journals books etds theses dissertations ' + [...oaJournals, ...oaBooks, ...etds].map((r) => r[0] + ' ' + r[2]).join(' ') },
  { title: 'Research Support', crumb: 'Research', to: '/research-support', text: 'research support tools ' + flatTools(researchTools).join(' ') },
  { title: 'AI Tools', crumb: 'AI', to: '/ai-tools', text: 'ai tools artificial intelligence ' + flatTools(aiTools).join(' ') },
  { title: 'E-learning Platforms', crumb: 'E-learning', to: '/e-learning', text: 'e-learning ' + elearning.map((e) => e[0]).join(' ') + ' swayam nptel coursera edx' },
  { title: 'Photo Gallery', crumb: 'More', to: '/gallery', text: 'photo gallery images events photographs library' },
  { title: 'Library Virtual Tour', crumb: 'More', to: '/virtual-tour', text: 'virtual tour 360 walkthrough sections reading room' },
  { title: 'Best Practices', crumb: 'More', to: '/best-practices', text: 'best practices best user library award weekly guidance manadaalada maatu thursday' },
  { title: 'Library Activities', crumb: 'More', to: '/activities', text: 'library activities orientation book exhibition events' },
  { title: 'Feedback', crumb: 'More', to: '/feedback', text: 'feedback suggestions form contact opinion' },
  { title: 'Contact Us', crumb: 'Contact', to: '/contact', text: 'contact address phone email google map location tumkur directions' },
  {
    title: 'FAQ',
    crumb: 'Ask Us',
    to: '/faq',
    text: 'frequently asked questions library faq help borrowing membership'
  },

  {
    title: 'Recommend a Book',
    crumb: 'Ask Us',
    to: '/recommend-book',
    text: 'recommend book purchase suggestion library collection'
  },

  {
    title: 'Recommend Journals',
    crumb: 'Ask Us',
    to: '/recommend-journals',
    text: 'recommend journals subscription research periodicals'
  },

  {
    title: 'Give Feedback',
    crumb: 'Ask Us',
    to: '/feedback',
    text: 'feedback suggestion complaint appreciation library services'
  },

  {
    title: 'Syllabus',
    external: 'https://tumkuruniversity.ac.in/?%2Fug_syllabus',
    text: 'syllabus ug syllabus curriculum tumkur university'
  },

  {
    title: 'Question Papers',
    external: 'https://drive.google.com/drive/folders/1-yMB3mqyGBuH2LKI6cdqlzgbEXfl3Zym',
    text: 'question papers previous year papers old papers'
  }
]


export function runSearch(query) {
  const q = query.trim().toLowerCase()
  if (!q) return []
  const terms = q.split(/\s+/)
  return searchIndex
    .map((entry) => {
      const hay = (entry.title + ' ' + entry.crumb + ' ' + entry.text).toLowerCase()
      let score = 0
      for (const term of terms) {
        if (entry.title.toLowerCase().includes(term)) score += 5
        if (hay.includes(term)) score += 1
      }
      return { ...entry, score }
    })
    .filter((e) => e.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 12)


}

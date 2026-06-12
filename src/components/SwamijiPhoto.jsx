import swamiji from '../assets/sq.png'

// Persistent figure anchored to the bottom-left corner on every page.
// Decorative + non-blocking (pointer-events handled in CSS), like the
// reference layout. Replace src/assets/sd.png to change the photo.
export default function SwamijiPhoto() {
  return (
    <img
      className="swamiji-photo"
      src={swamiji}
      alt="His Holiness — Sree Siddaganga Mutt"
    />
  )
}

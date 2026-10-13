(() => {
  const root = document.documentElement
  const STORAGE_KEY = 'mg-portfolio-lang'

  const setLang = (lang) => {
    root.dataset.lang = lang
    root.lang = lang
    try { localStorage.setItem(STORAGE_KEY, lang) } catch {}
  }

  let saved = null
  try { saved = localStorage.getItem(STORAGE_KEY) } catch {}
  const browserLang = (navigator.language || 'es').toLowerCase().startsWith('es') ? 'es' : 'en'
  setLang(saved || browserLang)

  document.getElementById('langToggle').addEventListener('click', () => {
    setLang(root.dataset.lang === 'es' ? 'en' : 'es')
  })

  document.getElementById('year').textContent = new Date().getFullYear()

  const lightbox = document.getElementById('lightbox')
  const lightboxImg = lightbox.querySelector('img')
  const close = () => { lightbox.hidden = true; lightboxImg.src = '' }

  document.querySelectorAll('.shot img').forEach((img) => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src
      lightboxImg.alt = img.alt
      lightbox.hidden = false
    })
  })
  lightbox.addEventListener('click', (e) => { if (e.target !== lightboxImg) close() })
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close() })
})()

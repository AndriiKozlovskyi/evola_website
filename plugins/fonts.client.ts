export default defineNuxtPlugin(() => {
  const loadFonts = () => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href =
      'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Sora:wght@600;700;800&display=swap'
    document.head.appendChild(link)
  }

  if (document.readyState === 'complete') {
    loadFonts()
  } else {
    window.addEventListener('load', loadFonts, { once: true })
  }
})

export default defineNuxtPlugin(() => {
  let loaded = false

  const load = () => {
    if (loaded) return
    loaded = true

    // GA4
    const gaScript = document.createElement('script')
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-SV44Q2B4KH'
    gaScript.async = true
    document.head.appendChild(gaScript)

    ;(window as any).dataLayer = (window as any).dataLayer || []
    function gtag(...args: any[]) { (window as any).dataLayer.push(args) }
    ;(window as any).gtag = gtag
    gtag('js', new Date())
    gtag('config', 'G-SV44Q2B4KH')

    // GTM
    const gtmScript = document.createElement('script')
    gtmScript.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MKB9FKVR');`
    document.head.appendChild(gtmScript)

    // GTM noscript
    const ns = document.createElement('noscript')
    ns.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MKB9FKVR" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
    document.body.prepend(ns)
  }

  // Fire after 3 s idle, or on first user interaction — whichever comes first
  const timer = setTimeout(load, 3000)

  const onInteraction = () => {
    clearTimeout(timer)
    load()
  }

  const events = ['mousedown', 'mousemove', 'keydown', 'scroll', 'touchstart', 'click']
  events.forEach(e => window.addEventListener(e, onInteraction, { once: true, passive: true }))
})

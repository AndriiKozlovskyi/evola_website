export default defineNuxtPlugin(() => {
  const imageLoader = (img: HTMLImageElement) => {
    const handleLoad = () => {
      img.classList.add('loaded')
    }
    
    if (img.complete) {
      handleLoad()
    } else {
      img.addEventListener('load', handleLoad)
    }
  }

  return {
    provide: {
      imageLoader
    }
  }
})
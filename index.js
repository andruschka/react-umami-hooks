const React = require('react')

export const registerUmamiScript = (url, websiteId, dataDomain) => {
  if (url && websiteId && dataDomain) {
    const head = document.getElementsByTagName('head')[0]
    const script = document.createElement('script')
    script.type = 'text/javascript';
    script.src = url;
    script.async = 'async'
    script.defer = 'defer'
    script.setAttribute('data-auto-track', 'false')
    script.setAttribute('data-domains', dataDomain)
    script.setAttribute('data-website-id', websiteId)
    head.appendChild(script);
  }
}

export default (url, referrer, websiteId, skipPageView) => {
  skipPageView = skipPageView || false
  React.useEffect(() => {
    if (!skipPageView && window.umami) {
      try {
        const umami = window.umami
        umami.trackView(url, referrer, websiteId)
      } catch (err) {
        console.warn && console.warn(err.message)
      }
    }
  }, [url, referrer, websiteId, skipPageView])

  const trackEvent = (eventValue, eventType) => {
    try {
      eventType = eventType || 'custom'
      const umami = window.umami
      umami.trackEvent(eventValue, eventType, url, websiteId)
    } catch (err) {
      console.warn && console.warn(err.message)
    }
  }

  return trackEvent
}

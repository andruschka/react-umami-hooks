const React = require('react')

module.exports = (url, referrer, websiteId, skipPageView) => {
  skipPageView = skipPageView || false
  React.useEffect(() => {
    if (!skipPageView) {
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

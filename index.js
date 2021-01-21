const React = require('react')

module.exports = (url, referrer, websiteId, noPageView = false) => {
  React.useEffect(() => {
    if (!noPageView) {
      try {
        const umami = window.umami
        umami.trackView(url, referrer, websiteId)
      } catch (err) {
        console.warn && console.warn(err.message)
      }
    }
  }, [url, referrer, websiteId, noPageView])

  const trackEvent = (eventValue, eventType = 'custom') => {
    try {
      const umami = window.umami
      umami.trackEvent(eventValue, eventType, url, websiteId)
    } catch (err) {
      console.warn && console.warn(err.message)
    }
  }

  return [trackEvent]
}

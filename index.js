const React = require('react')

exports.useTrackView = (url, referrer, websiteId) => {
  React.useEffect(() => {
    try {
      const umami = window.umami
      umami.trackView(url, referrer, websiteId)
    } catch (err) {
      console.warn && console.warn(err.message)
    }
  }, [url, referrer, websiteId])
}

exports.useTrackEvent = (url, websiteId) => {
  return React.useMemo(() => (eventValue, eventType) => {
    try {
      const umami = window.umami
      umami.trackEvent(eventValue, eventType || 'custom', url, websiteId)
    } catch (err) {
      console.warn && console.warn(err.message)
    }
  }, [url, websiteId])
}

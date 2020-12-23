# 🥓 react-umami-hooks
React hooks for [umami analytics](https://umami.is/).  
Track page views and events from React components.

## Install
> React is a peer dependency!
```
$ npm i react-umami-hooks
```

Then follow the instructions on the [umami docs page](https://umami.is/docs/) to add the script to the `<head>` section of your page if you have not already. After this (disable the automatic page view tracking)[https://umami.is/docs/tracker-config] ba adding 
`data-auto-track="false"` to your tracking script so it looks something like this:  
```
<script async defer
  src="http://mywebsite/umami.js"
  data-website-id="94db1cb1-74f4-4a40-ad6c-962362670409"
  data-auto-track="false"
></script>
```
 
 ## Usage
You can now import and use `useTrackView` and `useTrackEvent` from this module:
```javascript
const { React } = require('react')
const { useTrackView, useTrackEvent } = require('react-umami-hooks')

const HomePage = (props) => {
  useTrackView('/') // will only get fired once
  const _track = useTrackEvent('/')

const handleSignupClick = () => {
    _track('Signup CTA clicked')
    // ...
  }

  return (
    <>
      <nav></nav>
      ...
    </>
  )
}

```

### useTrackView(url, [referrer], [website_id]) : undefined
Tracks a page view. Only runs once per rendered component. Use this on the top page components for tracking page views. The **referrer** and **website_id** values are optional. They will default to the page referrer and data-website-id defined by the script. Returns undefined.

## useTrackEvent([url], [website_id]) : function
Creates a track function. The **url** and **website_id** values are optional. They will default to the page url and data-website-id defined by the script. Returns a track function:

## _track(event_value, [event_type]) : undefined
The **event_type** is optional, defaults to `custom`. 

# 🥓 react-use-umami
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
const useUmami = require('@parcellab/react-use-umami')

const HomePage = (props) => {
  const _trackEvt = useUmami('/') // will fire a page view once
  // call this hook only in the top main component and pass the _track function down where it is needed!

const handleSignupClick = () => {
    _trackEvt('Signup CTA', 'click') // will register a 'click' event with value 'Signup CTA'
    // ...
    _trackEvt('Form submitted') // will register a 'custom' event with value 'Form submitted'
  }

  return (
    <>
      <nav></nav>
      ...
    </>
  )
}

```

### useUmami(url, [referrer], [website_id], [skipPageView]) : function trackEvt
Tracks a page view. Only runs once per rendered component. Use this on the top page components for tracking page views. The **referrer** and **website_id** values are optional. They will default to the page referrer and data-website-id defined by the script. Returns a function for tracking events. If **skipPageView** is true, the initial page view will not be triggered.  

### trackEvt(event_value, [event_type]) : undefined
Tracks a (custom) event. If **event_type** is omitted it will default to 'custom'. Can be called multiple times.

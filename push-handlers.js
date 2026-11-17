// Added to the app's service worker (quasar.config.js > pwa > importScripts, version 2).
// Shows push messages from our Worker (even when the app is closed) and opens the app when one is tapped.
const PUSH_LOG = 'gag-push-log'

// Keeps a short record of the pushes this device received, so #/pwa-check can show what happened
async function logPush(entry) {
  try {
    const cache = await caches.open(PUSH_LOG)
    await cache.put(`/push-log/${Date.now()}`, new Response(JSON.stringify(entry)))
    const keys = await cache.keys()
    if (keys.length > 10) await cache.delete(keys[0])
  } catch { /* the log is only a help */ }
}

// A push from the Worker arrives as { data: { title, body, url, tag } }
self.addEventListener('push', (event) => {
  event.waitUntil((async () => {
    const entry = { at: new Date().toISOString() }
    let payload = {}
    try { payload = event.data ? event.data.json() : {}; entry.keys = Object.keys(payload).join(',') }
    catch (e) { entry.parseError = String(e); payload = { data: { body: event.data && event.data.text() } } }
    const d = payload.data || payload.notification || {}
    entry.title = d.title || ''
    const base = self.registration.scope
    try {
      await self.registration.showNotification(d.title || "Garde's Art Gallery", {
        body: d.body || '', tag: d.tag || 'gag', icon: `${base}icons/icon-192.png`, badge: `${base}icons/icon-192.png`, data: { url: d.url || base }
      })
      entry.result = 'shown'
    } catch (e) { entry.result = `could not show: ${e}` }
    await logPush(entry)
  })())
})

// Tapping a notification opens (or focuses) the app
self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  const url = (event.notification.data && event.notification.data.url) || self.registration.scope
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
      for (const c of list) {
        if ('focus' in c) {
          if (c.navigate) c.navigate(url).catch(() => {})
          return c.focus()
        }
      }
      return self.clients.openWindow(url)
    })
  )
})

// The #/pwa-check page asks "are you there?" to confirm this file is part of the running service worker
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'gag-ping' && event.ports && event.ports[0]) event.ports[0].postMessage({ ok: true, version: 2 })
})

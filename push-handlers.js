// Added to the service worker (quasar.config.js > pwa > importScripts).
// Shows push messages from our Worker (even when the app is closed) and opens the app when one is tapped.
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const url =
    (event.notification.data && event.notification.data.url) ||
    self.registration.scope;
  event.waitUntil(
    self.clients
      .matchAll({ type: "window", includeUncontrolled: true })
      .then((list) => {
        for (const c of list) {
          if ("focus" in c) {
            if (c.navigate) c.navigate(url).catch(() => {});
            return c.focus();
          }
        }
        return self.clients.openWindow(url);
      }),
  );
});

// A push from the Worker arrives as { data: { title, body, url, tag } }
self.addEventListener("push", (event) => {
  let payload = {};
  try {
    payload = event.data ? event.data.json() : {};
  } catch {
    payload = { data: { body: event.data && event.data.text() } };
  }
  const d = payload.data || payload.notification || {};
  const base = self.registration.scope;
  event.waitUntil(
    self.registration.showNotification(d.title || "Garde's Art Gallery", {
      body: d.body || "",
      tag: d.tag || "gag",
      icon: `${base}icons/icon-192.png`,
      badge: `${base}icons/icon-192.png`,
      data: { url: d.url || base },
    }),
  );
});

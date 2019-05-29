if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(
      reg => {
        console.log('ServiceWorker registration successful with scope: ', reg.scope);
      },
      err => {
        console.warn('ServiceWorker registration failed: ', err);
      },
    );
  });
}

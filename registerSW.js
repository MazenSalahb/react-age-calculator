if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/react-age-calculator/sw.js', { scope: '/react-age-calculator/' })})}
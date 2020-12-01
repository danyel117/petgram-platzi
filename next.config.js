const withPWA = require('next-pwa');
const withOffline = require('next-offline');

const nextConfig = withPWA({
  pwa: {
    dest: 'public',
  },
  workboxOpts: {
    runtimeCaching: [
      {
        urlPattern: new RegExp('https://res.cloudinary.com|images.unsplash.com'),
        handler: 'CacheFirst',
        options: {
          cacheName: 'images',
        },
      },
      {
        urlPattern: new RegExp('https://petgram-server-24iykciv5.now.sh'),
        handler: 'NetworkFirst',
        options: {
          cacheName:'api'
        },
      },
    ],
  },
});

// module.exports = withOffline(nextConfig)

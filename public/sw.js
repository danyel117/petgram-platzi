if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,c,n)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(c.map(s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}})).then(e=>{const s=n(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/AO7nXIdLNnTTFsMnXQxqt/_buildManifest.js",revision:"2f5f73ebf57daa5bac4fa0ed17215aa0"},{url:"/_next/static/AO7nXIdLNnTTFsMnXQxqt/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/17.fce3e6bb049b3f0f9fe6.js",revision:"a352b8ef331aa0de84984284f57280e0"},{url:"/_next/static/chunks/252f366e.27e7a4acf444f56a13b1.js",revision:"6fee882729016b4fa6ba542319323945"},{url:"/_next/static/chunks/31d4405e554d73eb34f146c53cce5c07817a5370.9c5128fc8feb6582edbd.js",revision:"18bdabf3241799b4463f20ed6df38887"},{url:"/_next/static/chunks/3642056a19cc9a3326a043dbdcf0f168b31ca957.44d1ea8b6bd0c2e69b9a.js",revision:"7716241fe100a94c636634f7c8f4ecf6"},{url:"/_next/static/chunks/91ac613fde6b2504c946a934050edca5939fdc70.2d92f2db977ac595f81c.js",revision:"0ef19d3976402e7e7c92fea8746e3569"},{url:"/_next/static/chunks/9c7538b587e86dc258d3940f46e2ad4abb6f74d1.f169fad33335c01a5203.js",revision:"dec93c1da7d4555069015b2619b0c180"},{url:"/_next/static/chunks/commons.8efcb680d37dd3ee49c0.js",revision:"533024f022e2afedcdafd1932588aa10"},{url:"/_next/static/chunks/framework.2113c6061a2f456066a1.js",revision:"ac196392982f758234fd98a3f8722f8f"},{url:"/_next/static/chunks/main-8b24132fa93036321fcf.js",revision:"fd4bf724b7e4b40196b6663c99a79fb7"},{url:"/_next/static/chunks/pages/_app-4038b71f92641c5c367a.js",revision:"9afd689297598c274f5c47573a8ca0c9"},{url:"/_next/static/chunks/pages/_error-488a1b18f8d8c3adddde.js",revision:"1ec11996616ff4605f693fdbfdcde67d"},{url:"/_next/static/chunks/pages/detail/%5Bid%5D-2e82c18390a7ccbdd4b7.js",revision:"08e0a65f4cf978578bff6963bc5afdc1"},{url:"/_next/static/chunks/pages/favs-c04a3335187ac6749485.js",revision:"667f091c2f5a3023ed3ffac3ee0a2f01"},{url:"/_next/static/chunks/pages/index-970f364e81eba66372f4.js",revision:"6bef2955dbb27498bda798af5a9e56a5"},{url:"/_next/static/chunks/pages/photos/%5Bname%5D-271af173d5e32669da8d.js",revision:"efd16c3f41d982510c941b2e095501be"},{url:"/_next/static/chunks/pages/user-00c1a5b0f450232443ed.js",revision:"bd4840fde3a468a2689032ac3259e457"},{url:"/_next/static/chunks/polyfills-49d513b8e73258edd797.js",revision:"a36b1c6feeca01c1468c6087d2958b03"},{url:"/_next/static/chunks/webpack-1c559b1c0fb123a391a7.js",revision:"b7f006d74ba03d82326ee60202e35db0"},{url:"/icons/android-chrome-192x192.png",revision:"ca358417fb2fd68c07d998f961e16fef"},{url:"/icons/apple-touch-icon.png",revision:"ca358417fb2fd68c07d998f961e16fef"},{url:"/icons/dog.ico",revision:"3cd3e5472b79a7c4f066927f30b41940"},{url:"/icons/dog.png",revision:"ca358417fb2fd68c07d998f961e16fef"},{url:"/icons/favicon.ico",revision:"3cd3e5472b79a7c4f066927f30b41940"},{url:"/icons/icon-512x512.png",revision:"ca358417fb2fd68c07d998f961e16fef"},{url:"/manifest.json",revision:"e8c2abe773bacaa76c9754aa2263bd8a"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));

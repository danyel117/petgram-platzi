if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,c,n)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(c.map(s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}})).then(e=>{const s=n(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/16.8a5d8d9843ea8f7ca363.js",revision:"a2bd82e18831f4c78a68bfc69c90b369"},{url:"/_next/static/chunks/252f366e.27e7a4acf444f56a13b1.js",revision:"6fee882729016b4fa6ba542319323945"},{url:"/_next/static/chunks/31d4405e554d73eb34f146c53cce5c07817a5370.9c5128fc8feb6582edbd.js",revision:"18bdabf3241799b4463f20ed6df38887"},{url:"/_next/static/chunks/3642056a19cc9a3326a043dbdcf0f168b31ca957.44d1ea8b6bd0c2e69b9a.js",revision:"7716241fe100a94c636634f7c8f4ecf6"},{url:"/_next/static/chunks/574208263263b02392c387b281156185f5a68fc2.674453c9e0ddd4f480c5.js",revision:"3ae5979f05c4d6a81a03781836afe720"},{url:"/_next/static/chunks/commons.8efcb680d37dd3ee49c0.js",revision:"533024f022e2afedcdafd1932588aa10"},{url:"/_next/static/chunks/framework.2113c6061a2f456066a1.js",revision:"ac196392982f758234fd98a3f8722f8f"},{url:"/_next/static/chunks/main-464b3a35a26215e1bb52.js",revision:"9ccbbfcf34cb8f8982ae0f0d9478940f"},{url:"/_next/static/chunks/pages/_app-99ccd48c4839b517a964.js",revision:"bc069fe4f8723e3b5bb1d0122e4ae546"},{url:"/_next/static/chunks/pages/_error-fb5a539b98878be0db2f.js",revision:"533b0f70207ce85ae91f7fe84eaa864e"},{url:"/_next/static/chunks/pages/detail/%5Bid%5D-d5654ea372ae46e883e7.js",revision:"c7e6a985af718d558ab51a93518e3061"},{url:"/_next/static/chunks/pages/favs-bb9f8b0792a3b7a3e2fe.js",revision:"a4b39c3829b197bb1b12db9ac993a71b"},{url:"/_next/static/chunks/pages/index-5b894ecc3ccf73cedeab.js",revision:"12d234eab4b2cf8876ef950931a20a1a"},{url:"/_next/static/chunks/pages/photos/%5Bname%5D-5b06c8a769d9657c02f1.js",revision:"821ab0de2048dac1f09892fac53c5ecb"},{url:"/_next/static/chunks/pages/user-9c7397188150a7ab5626.js",revision:"d553921f4eadf379c83a085f285a19e1"},{url:"/_next/static/chunks/polyfills-e5012cf49fbb0a2642db.js",revision:"03cf8d0f2720a3ed786ea3c4fd75711d"},{url:"/_next/static/chunks/webpack-709fedb52b279bafb774.js",revision:"632b2d87180b57227f7229f177ebece5"},{url:"/_next/static/cwjzAxR50TkBbeHFq3Dyf/_buildManifest.js",revision:"888bd5079df6fb2f0a4f2cac937cab7c"},{url:"/_next/static/cwjzAxR50TkBbeHFq3Dyf/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/icons/android-chrome-192x192.png",revision:"ca358417fb2fd68c07d998f961e16fef"},{url:"/icons/apple-touch-icon.png",revision:"ca358417fb2fd68c07d998f961e16fef"},{url:"/icons/dog.ico",revision:"3cd3e5472b79a7c4f066927f30b41940"},{url:"/icons/dog.png",revision:"ca358417fb2fd68c07d998f961e16fef"},{url:"/icons/favicon.ico",revision:"3cd3e5472b79a7c4f066927f30b41940"},{url:"/icons/icon-512x512.png",revision:"ca358417fb2fd68c07d998f961e16fef"},{url:"/manifest.json",revision:"e8c2abe773bacaa76c9754aa2263bd8a"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));

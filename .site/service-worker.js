/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4a6afbe698a08016b04299a32aba3487"
  },
  {
    "url": "api/cli.html",
    "revision": "a5681d0452be9b4447fec09284b87ac2"
  },
  {
    "url": "api/node.html",
    "revision": "0c454f9c2cddcc96663eef177aa51c57"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.31e278a2.css",
    "revision": "3f087ba41330efaf3fec5ed114f8dc1d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b2ca54f2.js",
    "revision": "47536a362bab0dc22415501a2b94e090"
  },
  {
    "url": "assets/js/11.8d8eeae2.js",
    "revision": "9a8e2fcc072d6f7ac164ece24475eaa7"
  },
  {
    "url": "assets/js/12.8e4c26e5.js",
    "revision": "e70d333757b3c5bb01ea3a7867c9ed23"
  },
  {
    "url": "assets/js/13.d30f6df8.js",
    "revision": "87e5b251f211a03a694d63586e8d9629"
  },
  {
    "url": "assets/js/14.9d4e62f8.js",
    "revision": "31230502b280b5f1e9aafa56adf4030b"
  },
  {
    "url": "assets/js/15.9cfb7213.js",
    "revision": "f5496bcc2625976bee9e0fdd613bcd78"
  },
  {
    "url": "assets/js/16.3336f052.js",
    "revision": "5b58f7bab7a3d29386b8f7e4a5f3a260"
  },
  {
    "url": "assets/js/17.2273bff9.js",
    "revision": "f785a75a561548f819843838c0d4f381"
  },
  {
    "url": "assets/js/18.dc884425.js",
    "revision": "3e676b3a35230a517bc23095ce4473b8"
  },
  {
    "url": "assets/js/19.97227f7e.js",
    "revision": "21e99c112fa34e4629c52f165fee6b1c"
  },
  {
    "url": "assets/js/20.9f4425e0.js",
    "revision": "d91222a8f55aeee139387eb00bec3a17"
  },
  {
    "url": "assets/js/21.cfa00ffd.js",
    "revision": "6ffcda07d064e7a571c67930e53f2b79"
  },
  {
    "url": "assets/js/22.c7367113.js",
    "revision": "1b7948c136ce5e2c5d52ea200028d8ec"
  },
  {
    "url": "assets/js/23.94704c3e.js",
    "revision": "1189145ea95424f87588421f936d02b9"
  },
  {
    "url": "assets/js/24.683396de.js",
    "revision": "0b14b9d3bf76107eaf8de20431e4f92e"
  },
  {
    "url": "assets/js/25.0981729e.js",
    "revision": "91bfde4dcda7f2f1636225b98362d081"
  },
  {
    "url": "assets/js/26.67b70825.js",
    "revision": "15829da2120dc92667b59628dae9a464"
  },
  {
    "url": "assets/js/27.153d0b9a.js",
    "revision": "425317bf264747eb0aabf674c02fe3c6"
  },
  {
    "url": "assets/js/28.1f7810fb.js",
    "revision": "4882b75607b58b5223d546edd5397fbb"
  },
  {
    "url": "assets/js/29.3454df20.js",
    "revision": "9513febbf06c84456bd14f01f8af2505"
  },
  {
    "url": "assets/js/30.3d56e5f5.js",
    "revision": "e58d2f318be9b41356ef9cdaec2de8f7"
  },
  {
    "url": "assets/js/31.e5f33b35.js",
    "revision": "aa3e6f46332afc8f8a8abcf3bc363dfc"
  },
  {
    "url": "assets/js/32.f656761d.js",
    "revision": "76b7297986603e762c9137a5a17e4e2e"
  },
  {
    "url": "assets/js/33.90adadda.js",
    "revision": "d7daaebbb106e78b102a9837ef25971e"
  },
  {
    "url": "assets/js/34.1782210f.js",
    "revision": "e95c6f5b18a1affe8d1706953e9c89ee"
  },
  {
    "url": "assets/js/35.723f29a8.js",
    "revision": "96d8ee27e92118b266cfd52ff9c69a20"
  },
  {
    "url": "assets/js/36.2903e725.js",
    "revision": "ccdf058745fec24903df61bbd7002dfe"
  },
  {
    "url": "assets/js/37.4cba33b7.js",
    "revision": "73faaf40b04ad04db64cd7224e1f1183"
  },
  {
    "url": "assets/js/38.db951cec.js",
    "revision": "b6537c36e187c293997bbe1c5293c2da"
  },
  {
    "url": "assets/js/39.14e946b3.js",
    "revision": "dc6fe61b9fe25bce24f200e11f108ac2"
  },
  {
    "url": "assets/js/40.5d066743.js",
    "revision": "dc869b62276782561e3e414f28a2962e"
  },
  {
    "url": "assets/js/41.e54b3e93.js",
    "revision": "fe6447e6c3397b89fd3ff2e86aa1dcb2"
  },
  {
    "url": "assets/js/42.f6e78a24.js",
    "revision": "25d33875e7677f42ad165e06a093c4e1"
  },
  {
    "url": "assets/js/43.9d98abb8.js",
    "revision": "6339889a53d471e9e5217b550b1aeb07"
  },
  {
    "url": "assets/js/44.993259a5.js",
    "revision": "b24563723ce029a8c01121388214896e"
  },
  {
    "url": "assets/js/45.9137d034.js",
    "revision": "124c6c258f62f71af8fdd82d189116dc"
  },
  {
    "url": "assets/js/46.d2377184.js",
    "revision": "ab877c439703d2422808436da125ccc1"
  },
  {
    "url": "assets/js/47.0d028c30.js",
    "revision": "73a443a5a30deb73bfb5c28b25079ccf"
  },
  {
    "url": "assets/js/48.b6980ea5.js",
    "revision": "902e5df0283849bfadc3a39f227fc53b"
  },
  {
    "url": "assets/js/49.8caa9db0.js",
    "revision": "c2380eb804d75aa81558d3795a2082d1"
  },
  {
    "url": "assets/js/5.be77fe7f.js",
    "revision": "81b106749d0fe886252601d501b7bb47"
  },
  {
    "url": "assets/js/50.0eba368b.js",
    "revision": "2cccac6150c824bc4963bb654fdaa37f"
  },
  {
    "url": "assets/js/51.a07b600c.js",
    "revision": "0d86043c938e3d6780a2b04169e55aa8"
  },
  {
    "url": "assets/js/52.cfebd4fd.js",
    "revision": "c499e5da6b2e50009b1a7ce56f782179"
  },
  {
    "url": "assets/js/53.f730af1c.js",
    "revision": "23fba0c302ed03ca4b970af5ba050be2"
  },
  {
    "url": "assets/js/54.aabb59cb.js",
    "revision": "c218056ddb9970326604de1776f4866d"
  },
  {
    "url": "assets/js/55.bfc009d5.js",
    "revision": "2fc2ac69b0eca7589e360a2297ae7388"
  },
  {
    "url": "assets/js/56.bde11aa1.js",
    "revision": "a96c2f0d32e9c0ec700f855d4fd39b35"
  },
  {
    "url": "assets/js/57.63f24685.js",
    "revision": "41494b03543070ddf4ee483a5498bc91"
  },
  {
    "url": "assets/js/58.1d56932e.js",
    "revision": "348aa84bbe571fed6e9b8c8c3b0e548e"
  },
  {
    "url": "assets/js/59.15df5eed.js",
    "revision": "8e725a3e8598ba67f869e41df9111f3a"
  },
  {
    "url": "assets/js/6.dd2e26c3.js",
    "revision": "43c9332da7d3f3e62a38388780f232e0"
  },
  {
    "url": "assets/js/60.1b200088.js",
    "revision": "71929650cabdd37941bbaa1a707b8894"
  },
  {
    "url": "assets/js/61.fc1beb86.js",
    "revision": "f338149e658fd2b1ad7fecd1eb7beee8"
  },
  {
    "url": "assets/js/62.c41f7d1e.js",
    "revision": "5483c2cd7adf6c2503b734406e1a76fb"
  },
  {
    "url": "assets/js/63.5a5a3a68.js",
    "revision": "97511908761fb8482e88fd2abc458349"
  },
  {
    "url": "assets/js/64.63af2881.js",
    "revision": "b1ca8c63382eab7665aca66394fd0229"
  },
  {
    "url": "assets/js/65.86b6757a.js",
    "revision": "b0817adb9cff8a6fa0e3faf123f26dd7"
  },
  {
    "url": "assets/js/66.58a2ad4e.js",
    "revision": "9b969780d05f9830bd588b19faeeabb7"
  },
  {
    "url": "assets/js/67.4dc3e0c0.js",
    "revision": "12c1fdcac0c6055a95a65d5230d11845"
  },
  {
    "url": "assets/js/7.c58c0511.js",
    "revision": "004c3c42e7ad4d41becdd520ebe1524c"
  },
  {
    "url": "assets/js/8.cb321a96.js",
    "revision": "5649c2fb5c7b3a64aaa3ef87b3105d3b"
  },
  {
    "url": "assets/js/9.e3c49ff5.js",
    "revision": "8e21baf88ada2dc7a5164f3beaee9c44"
  },
  {
    "url": "assets/js/app.b774390f.js",
    "revision": "b0c71b912b844a2b1ea8b82429541a41"
  },
  {
    "url": "assets/js/vendors~docsearch.271cdf46.js",
    "revision": "d04c5014c7c9fde928f0d4430f604c0f"
  },
  {
    "url": "assets/js/vendors~flowchart.1d2b6a9b.js",
    "revision": "d18058b84381a4d3c47f377ae075a068"
  },
  {
    "url": "assets/js/vendors~notification.daa49b46.js",
    "revision": "8d8a269d5721ac98f5071696aea2ed1a"
  },
  {
    "url": "config/index.html",
    "revision": "61f9f7d91bc434ce6b66388323153320"
  },
  {
    "url": "faq/index.html",
    "revision": "c45d9fc738b3c65af4ab87b0d4b95ddc"
  },
  {
    "url": "guide/assets.html",
    "revision": "4c6c3734434f787d54393cb9796009f7"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "5708a46874a5188ec5b77ad82d777ec1"
  },
  {
    "url": "guide/deploy.html",
    "revision": "5ead0338dbd0936f61b9712299ddbca4"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "cbc9e5c095dd90e76037c168c2b814c1"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "b0d0bf2c9e63027bdc0feafe00932208"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "a4330fe8a6de796ab23e8b3d1fbc8f98"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "c229390951cccdb67e07a1ad3f375375"
  },
  {
    "url": "guide/i18n.html",
    "revision": "bc6b8cb715af5ade6e13ab1a0dcf142f"
  },
  {
    "url": "guide/index.html",
    "revision": "f62d7d8e2d3c5b40ba803de227acf598"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "4c0a3d585a7f2ffe3d47a698f06f2c6d"
  },
  {
    "url": "guide/markdown.html",
    "revision": "ae0d61c72660a408225eded499b20552"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "093546c04a24501f2ed6e8638aa66e64"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "744a8c6bbb82ce0c00876fefa8786472"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "index.html",
    "revision": "019c802578bc6954e54ca70afd6422ee"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "miscellaneous/design-concepts.html",
    "revision": "a836272199feb4bc75b59d041c174ee8"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "4153d2dc5ccd6958bf5a0833f4464d3a"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "ce39b594a211783babc5e5dd081fdfa4"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "fe6fff604c60dec77cf73d3b81c03e9a"
  },
  {
    "url": "notes/index.html",
    "revision": "4f839aac3864b700ee315196ebb65fd5"
  },
  {
    "url": "notes/using-a-theme.html",
    "revision": "52ab7d62fe9097d0bfd845b13918f6fc"
  },
  {
    "url": "notes/writing-a-theme.html",
    "revision": "5c01693bb657aef2f29684275007adc8"
  },
  {
    "url": "notes/程序员和数学.html",
    "revision": "945031a49fe57c3519527564121188ec"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "6ee27dd963bbd2c4b910ebddd5cf2cb3"
  },
  {
    "url": "plugin/index.html",
    "revision": "119aca731ea282e7116c9cca6723031e"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "7a7cfe9464ce798da75122c451d32446"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "90882464e3dee974a7a744297a6ea580"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "1acd1e5287616d3043fa4855acc843a4"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "091b327cc5b4ff28cd1ea583834166b4"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "1bc3028e1aa5815a02b8f38770bfadeb"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "9f4be1c09dd7b5ad448aceb9bec2ce84"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "711198c28268fc303614ae96a70b24b7"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "e804a349cb242f1ea363f67a8c2a180a"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "94f8d196e039e03e6924c33267d0df1f"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "63cc5bece7e68d50a77009627aef0a0b"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "8e1418ef0c388481b87b89b84a025299"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "d51b8ba6858d4a11f376f47c61f39dea"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "da61350e3a3ceb1e7cb1fc7c1300cb00"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "3fdf63bb903f8e1a53441858ed41e81c"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "78f583ceec465e11b4a5eafc2db94e59"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "b2369ea49fcaeab4540ef6e68748e0d5"
  },
  {
    "url": "theme/index.html",
    "revision": "c68821e3b3907198728af9079229c8ad"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "64b7c6f810569f3ddf1c5e89a138a0a3"
  },
  {
    "url": "theme/option-api.html",
    "revision": "79b9dbd38f84ec3365d553a481427bba"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "3aefa227c4b7412ca1f61f74d1721329"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "7f4b9ed28be741bc9b45adcd29b70948"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

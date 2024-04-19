'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a25edbef747adc2d904133838e75c998",
"assets/AssetManifest.bin.json": "71f3a9a2e75141541b8cf0b0348492bf",
"assets/AssetManifest.json": "253b65e7903ff50f68d89b8b074db103",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"assets/assets/icons/bloc.png": "977fbfba561065f9a68c4b47f9774531",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/dart.png": "1ab71d33e7ba834836197b4fa8726da0",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/firebase.png": "36170822afe4c716cfbdb96dac8cd10e",
"assets/assets/icons/flutter.png": "1105c9a994c1a6638daed558d5b631fd",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/images/about1.png": "403f83879700c5a7e8038f30b0974ba1",
"assets/assets/images/about2.png": "71485e9b7ecaa63eaeb7afb95e03f0af",
"assets/assets/images/about3.png": "3b1e220b1998d5dff94dab183a077ce4",
"assets/assets/images/about4.png": "8d09e31a7184cb465a98fdc5b15f05f5",
"assets/assets/images/about5.png": "f1f3fcd8bb83b8384f257b398669c34a",
"assets/assets/images/aboutus.png": "59ee81b7624bfda7c253b9d521cd4841",
"assets/assets/images/companylogo.png": "77746db0f08e6f8474bac2cc295a3d51",
"assets/assets/images/contactus.png": "e2ef63baa5d76b22b2faaf6f7214a7ef",
"assets/assets/images/course1.png": "40977d372a8764b6c33027aba3acdd3f",
"assets/assets/images/course2.png": "d36c91e43558ff2f2223c6f88243738d",
"assets/assets/images/course3.png": "a2f182b669032b0c35f74b7c40162594",
"assets/assets/images/course4.png": "82feeaaba00a00542b1c60a753c9293b",
"assets/assets/images/course7.png": "4dd1af7e9f96e5dec1c92a0ca0a648e4",
"assets/assets/images/course8.png": "1eb2a9cad8f85154167f0f6f84b0fc81",
"assets/assets/images/courses.png": "e6599909411dcaf1d80cb560dd465f38",
"assets/assets/images/doctor.png": "b7a983fb5bf36114133c169f66bbfef7",
"assets/assets/images/education.png": "b3cd8eba2f6fd70c4d7f106f230fc4a3",
"assets/assets/images/eduguardian.png": "f81d518187668586282b0161ed0dfd77",
"assets/assets/images/image.png": "9fb5704e719f93940bba93d69ebbd5cb",
"assets/assets/images/level3eight.png": "fad1896d7ae17f298dc606d82535994c",
"assets/assets/images/level3eleven.png": "e504dfb1c71f931658ab5ab311077b01",
"assets/assets/images/level3five.png": "c90115be93e498aaa9ae66cddf2f919f",
"assets/assets/images/level3four.png": "1aaed302dcc3703a594a5d7ab9acf8fd",
"assets/assets/images/level3nine.png": "9156688757449f9cc6c6495b5285bd48",
"assets/assets/images/level3one.png": "c1070347cd579da400c614cf27812b61",
"assets/assets/images/level3seven.png": "4dd1af7e9f96e5dec1c92a0ca0a648e4",
"assets/assets/images/level3six.png": "5905445cd5bbb91bcc80e7582e716fe9",
"assets/assets/images/level3ten.png": "6a4d7540e4c943f2abfc0b3312a6cfcb",
"assets/assets/images/level3three.png": "605dfde6ed0fac2f10076648cdfe11f8",
"assets/assets/images/level3twelve.png": "31f6b0254dc5d9d6d2a2bb4e9ff1183f",
"assets/assets/images/level3two.png": "f5b99f4737a8367fb6fcf21bfa608200",
"assets/assets/images/logocourse.png": "e627dd1223abc61ee48db2f1b4280c92",
"assets/assets/images/mission.png": "b80a077af7a27fae2a6f6dc101e5c13a",
"assets/assets/images/OurServices.png": "be501afb37d20b04b33abe6b98811595",
"assets/assets/images/qualifications.png": "8a4dbeddd3b52e7c46785f2bc7315568",
"assets/assets/images/service1.png": "bb7c6ecc90dd1d26e5a394b2e413acfd",
"assets/assets/images/service2.png": "22a62d8c1dd395cf95d9ebd4709f06fe",
"assets/assets/images/service3.png": "aef9425b46144bd8d1291b69738a7529",
"assets/assets/images/service4.png": "3cd02410a7b6e7b2f49cdb5635c437be",
"assets/assets/images/submit.png": "6ceb880118a538a7ac076f62a26eb816",
"assets/assets/images/team.png": "1826b2f663ce9f9862a0e9c758694237",
"assets/assets/images/university1.png": "3cc3fc937f39d7b2a30cf4515453e6ad",
"assets/assets/images/university10.png": "d36dc4d1330fd427685f7b82193dbd1e",
"assets/assets/images/university11.png": "c6be4857de31a9512cd28b2451eb3168",
"assets/assets/images/university2.png": "5a4c9da341c3b5d3ce857c06ad07fb0d",
"assets/assets/images/university3.png": "0c407017fc7fd979c2618a5d9d5aefe6",
"assets/assets/images/university4.png": "2861b0435cf82e50c936d0e04111fc6a",
"assets/assets/images/university5.png": "79448cc609d942396ab3a28f9e691b2a",
"assets/assets/images/university6.png": "050af0eead8e2583c90662fac239292e",
"assets/assets/images/university7.png": "01ecfc74ee29f8dc7dc4d0e44012f6cc",
"assets/assets/images/university8.png": "82bdeac77dcc3d9d8d54f0f49b4e7edd",
"assets/assets/images/university9.png": "67da98973112ab5d676a843f5e1ef71f",
"assets/assets/images/why1.png": "96e27a5eeb3edeeab3858b1dc9e79aa5",
"assets/assets/images/why2.png": "b80a077af7a27fae2a6f6dc101e5c13a",
"assets/assets/images/why3.png": "f833b29cae66829dba08c243450d6612",
"assets/assets/images/why4.png": "c83f8a2e4299875344c182faf4ddbf25",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "649fef883655ab814feb78fb3ac138c5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efd8b05dcb3b52ba07eda66114c208b7",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ac590740010fd97bf3e1dd19adee3e53",
"/": "ac590740010fd97bf3e1dd19adee3e53",
"main.dart.js": "3931e1f2b7fdebd85ee8201f450512d4",
"manifest.json": "c3e841dde64984428789dc355f4d39d7",
"version.json": "b0949b1408965930b0a11c4f067ed8b8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

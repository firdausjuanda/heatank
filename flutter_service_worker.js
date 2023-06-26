'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e6dc07484e450530ca3bfa0164a7a735",
".git/config": "5de07490d2ff7a5c7cffbe51a43d9b1f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2d3d91fab493d6e3fd8a358c119e5cc3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "41e5cd9a687bad679de5bf1b87a65bf5",
".git/logs/refs/heads/master": "41e5cd9a687bad679de5bf1b87a65bf5",
".git/logs/refs/remotes/main/master": "8b00d67cd26643c2b0417aec7e217aee",
".git/objects/0a/e8fceee208e88961a4f35eb29320f84b1d05dd": "e4c961a133a01856c37c8a08a05a7041",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/15/f11c0ba44074dcf0779fef247ed88ac13d3d79": "57b3bf4bc2468955b1ae0c6dd6d889b5",
".git/objects/2d/f3ea8f55f4a72674325b8d38d5af9fa939c9e3": "057d28069453bf98acc50076863cc3d7",
".git/objects/30/f6e4af36c5088af60953449248c9b24385d22d": "b8ea907dae8e1b1d3c1b98ad8f0bdc04",
".git/objects/34/026c3669d73b59e136c75d25c7468ea1bc9f08": "a2c58a0b7a64fbcf54d43f4ab2f99744",
".git/objects/34/3d56e66c3353eb5345b46d0e9cab156a2d21e2": "eb1290c6baa6cf3811052d964faf259c",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/50/5b0b0d1e815338bc1c62387949e3d40cf6e09c": "eb4aaec00b5261f379fbda71b8fdb3cb",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/2105645d336964308b8d299016ee8dc95ddb33": "89c7e9b52badc784995105951beb16d3",
".git/objects/81/5022c4190d4c388dbbd7bd8e8e678ac919e92d": "d90b8c63d603e16918334ff8af3fc63d",
".git/objects/81/53e0b33025bcadd45f5154f0674c40d50a2ba1": "727f755dd9f50ab28b0e8d9566898b6d",
".git/objects/84/c3e9f7df760a2f305a59896bc4a50485c3b053": "26f9bf21c9ad09f6b11c13426c8906a8",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/cfdc046866b4562530ad1d27c8712169ab5e09": "0881eedbb461e977d50efb1207fe178d",
".git/objects/8f/912051734f6845fbdb570121deff3b24ba45de": "54199ea36f3d6138dd378e6b582bc4cd",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/88d418ba123de5ea0cfc0235eade00b9686603": "ffe0183d490d125312585bb41177a84f",
".git/objects/b0/28ce22a9ba3a2e3a8c27a40fdfb82d4cacfcae": "69a23ab9179c8faa2724235365c0b5ba",
".git/objects/d1/443da06ce4b5adb0c6142586141713bfb37c91": "716cd42de53cf2df75f9a41c1462fd03",
".git/objects/e0/85c38d0d62d2711f6e87309723a8b090c6c51a": "95c99a3acd70b28de1f1b81bc7c7b195",
".git/objects/e2/b26920f8d9ca8655850028dc0cab1baff6e28a": "d77e69d603cd541fc4b52cc391599b54",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f0/fdc844d1a1da86f583ae6a13eececfba2e3fbc": "b3599e9ed5f97c97a17ecadb47a76daa",
".git/objects/f4/70ba2c68ab81dc3d8d3a960ca56f810dfff61a": "c747c5b41315375e6735d427eefec67c",
".git/objects/ff/8643d98ff6830eb57f2c346adf22fe21a33592": "6f346601a96b4d53f691a9e070164dbe",
".git/refs/heads/master": "d8a49782bf7d61031cf026d29714ff38",
".git/refs/remotes/main/master": "d8a49782bf7d61031cf026d29714ff38",
"assets/AssetManifest.json": "7344ec84109eddb7e82a649282d854e9",
"assets/assets/img/fird_logo.png": "abeec525395f3c5690c82c03310a2c86",
"assets/assets/img/fird_logo_white.png": "87bc8b2388e5741eb9f395ddd67c4d7d",
"assets/assets/img/HeaTank.png": "70be9988bdf3ed950609f48c7c278e01",
"assets/assets/img/wilmar_trans.png": "5a2377e04d25c745d923cc05f9a4d55f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "c488d753770b3b4bb984c170f94ff500",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "e53d2cc90fae090ef99c77a5a17af5c6",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "5324902ee9e930db8c3edea1c7487520",
"icons/Icon-512.png": "00f0a51e392f4f56f9a57c9ce458c44f",
"icons/Icon-maskable-192.png": "5324902ee9e930db8c3edea1c7487520",
"icons/Icon-maskable-512.png": "00f0a51e392f4f56f9a57c9ce458c44f",
"index.html": "db864a24093a90307124d9d50a44695b",
"/": "db864a24093a90307124d9d50a44695b",
"main.dart.js": "07c3069f07b969aa6d1f393c050cb8d4",
"manifest.json": "851e08331a9295cabdb9855380a51a6d",
"version.json": "2013b580a18d408d25f10ee566771df8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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

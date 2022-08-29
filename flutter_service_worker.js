'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "my_icon.png": "3b56b104bb0be5797926c4bf51299262",
"version.json": "f57a3437790f5b208a78a3291464f26d",
"index.html": "c5a63cd3b39cbb91de555dad55d55191",
"/": "c5a63cd3b39cbb91de555dad55d55191",
"main.dart.js": "99c279cef14d56eb29dc7e13f9cd5d52",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a7c728ef4e1b27a793da7a9ffd388e98",
".git/config": "c7b3e716af515904fc2efb5301230ad8",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0c/7716d0d066a86067f2cdcfaac152bfd46e022b": "e219750e3278d63808786a836c6cc46b",
".git/objects/57/dd3357df87993165db68f4f3c7b9482ade0b79": "da9a0083b7e6881efba952b8d7af419b",
".git/objects/03/84edf3dbfc40e530c2bd41e31b2cf2a660f2dc": "0cfd33d28ad64e0d1366072f1e23a387",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/32/61c8f649bf6bf2b0f4274646b36d324b72cc70": "57168f2ad666d09b86c3a291d9cb6935",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/a4/2d147e3e8d657c380de0674434802bbcf62451": "6db924915e1c599871968c3aebccbbb6",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/da/bf7c242e938c49fccd0cba88dc2fdccb2f65ee": "bbf7d12e4139b11a89628b8be2fcfda5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/cddb3d48dd28237337b94b3119064f8ac87a9c": "f6a0ee59f37c5dccd5f7f6e0c64571c5",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/10b1b580726372d222be273c1770355b836fe9": "f9d20cdc177ec3b34443d73403189dff",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/49f675591d4a8010afe6689e2ade71711d648a": "0933ca16bc6d4163e97c9744b796f1ae",
".git/objects/fd/ff532603aee813060ac0faa6cd13e5dfa92927": "54a5ed4acfbbc30deb43baa3306dee6a",
".git/objects/f2/1a36c732d12473b77a0aa52d99634aaa9cb613": "649b6afc1adf1567b215a8add0c92f52",
".git/objects/e4/128ac7053be84d0a9602a1b210f201c398cb49": "8c5115a44ecdd4d6775aefa37d55f603",
".git/objects/fe/3cf95cab84582a7b4f99e4333bd93f323a519c": "43c828788c9b14853082b6445f7bb708",
".git/objects/ec/c3f12e1fc1c268684e18dcd0711f06ff32279d": "60cb29e85941604520efe8bc326b0524",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/29/455936be05e37bf7a654065323858d393d8a0f": "a0fec687d7b97b99a94c06ab543998ed",
".git/objects/16/619ee3b158ae330de1077d5cec25636ef642f7": "fa94ed21d32708013db55770c51c38ed",
".git/objects/80/9ecfb55124ca54294498174cd8cbfbf3b24444": "a45b363a11724c22b7e2841145d3ad97",
".git/objects/74/6600499c0c04a2905090c6226949baae24b5bf": "f63188253ac02d5da0f63565a84479cf",
".git/objects/28/7369f1347bb5e5e2dd192fe5878e0a8dc5b231": "d91e081e9cec055d8b293fd97f8050b4",
".git/objects/17/2f1e15241176534efeaf84dcda80a01de4d138": "a9c9ba2b407e0f37450835b8b34d4b51",
".git/objects/8f/008c36844f28454149ce1a22effe513dc726e6": "0fa45b087e693064e5a2ce35615095ae",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/bc56e7e332eda99c87d670b816cbc02831a594": "bcd133fe0516ec00a78293fde7b36b02",
".git/objects/4c/3ae210eef8d6fcf6cc865d353637ac73d2dfb9": "c05a85bfcaf339e51b47563cdda31666",
".git/objects/4c/72b09f723d232b03e540cdaa1499c6e8847bf6": "ae90793952021fff0b28c35a41e025fe",
".git/objects/26/78b9f5c7794f5a21cbdccacd86e83313e17d55": "3fcd433675d6b58fa41de1f7d6bb3be0",
".git/objects/81/d1aaeeec2d5196a88820b0dbd77f9467fa1f81": "d49a0f7204c6eeab2daa5a7f8c4f940e",
".git/objects/81/56c7d2563b69964072640bdbbbd5e9229a3d3e": "aedd648079337b19bb7c7c9003f462e3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/22933f5100a65ec8b287e02f39857601a4cef4": "75a4624e146002692d1ddcfd5501bf8f",
".git/objects/31/8d70ed03cd5c91bee2eb3648ec633072d1a65f": "fb041f5ba57256823e21f64644dd95ba",
".git/objects/91/ad2014565ab634a870a23e1342d86d0b1c3b6c": "0da47bd4333eba78afd05b14603b4ef1",
".git/objects/96/bea43c1c62a37c1f1731b003da7ed559fcf720": "cd4f4f62577878670e9bcfcf67b2c8bf",
".git/objects/01/af4daa93fed166a910bb27b44a601bbadb1101": "cc3f751ef0f8983b648aefd3d80291f4",
".git/objects/39/19a59e10b761c94840eb0c590290c3f21dad29": "c7b6eda519b3dc5ac4da2d2d92418442",
".git/objects/55/8af2a32f19908c5a1905b6e9873a068ed443b4": "eae7241c73be6bcf1a3bb547cf630c6d",
".git/objects/63/efa7528d75859e3eee8070757bbcbc094ff27e": "d89a413f3c9f3c58aace400d4ffa710d",
".git/objects/ba/6d36d35da07f2ed830585020e77f905bf66676": "faa2df005252572a5c01684a42fe547c",
".git/objects/a0/00d6d1d30b0559eb055b4e11775dd7dccca6dd": "640b907341df713b9b0187fbaf7b3769",
".git/objects/a7/9cb4d1ef7e2d789d2c586a3a5a54b89f6c2d71": "a64a5ae602ddcde600adad9b0c75b4ea",
".git/objects/b8/a3a7b9db2516c7d80b19808a0e606dfc619eb8": "c9c1c37875202a548d17908e0be58972",
".git/objects/a9/520b78ac4635319aafe2cc88f1b40c8289b1c8": "f268f08f109671711197a41d2104993e",
".git/objects/d5/0f364b35adb29db06b50c6e5c7ec26b088842b": "f4fae3dfa6dd94602167b707bdc77247",
".git/objects/d2/97f2aa4d18b8c8e17a54e0d5750ea332521126": "8d8a3d82d09291cd78aa4c8a032cfb13",
".git/objects/d2/60d9174fe6e979dca1b521c8b77b24b9a323e9": "bf12dc639859bc29cda537fe7033ed42",
".git/objects/b7/9b33651a0c3904114bf3b7bf649b3135a7cfd0": "a51110b2c63c307e76f7c9ee279a30d3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/0405cf4d46dd2039501050a4328acf8a09662b": "dec14b2951b6aff3c6ca3a4b916828e9",
".git/objects/c3/d08e104d048790742c232015104b4b908a058d": "5f69ec7c1f4192c347152cc8111ef206",
".git/objects/c4/d9c1cb7dc58eff5b77b88e066275b4a89be28a": "95cf353d4f096bb2f0930d266be853bf",
".git/objects/c4/b14a67a8896c210667c8226a066b0eb125ad62": "9011d392bc386cb35ff23cc09bea54e1",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/e8/d65dd74a0a7eb2558eb5655f91eec8c4b228d1": "5dad375bea61178fe95849144ca5ec0b",
".git/objects/e8/e03e04ee2f61c7c4d1f30bb9a19dbea1b0bb4d": "307e86083d5bedbfb5278217bb778f30",
".git/objects/c2/8c91477bb3dcb14ad2f2a2d9fa63cffe2e11fd": "0e94b18f65d494159d86adfbfe02d260",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e9/0e87ed69a7ebb8d965ec248fb86286423f103f": "4abcf8c77330fc7fd658318fc2374d78",
".git/objects/e9/bf41d2a7d767a41583f89ccbc83f94f090c3e7": "8f6e1fb73b154d4b665d7e8e8518918b",
".git/objects/e9/23409bc5d4977df994fa088db97e3e350d6872": "5c45115f3b990f7e9fc8fd027f2539dc",
".git/objects/e0/e078ec94987844b0ad5e18b43b6e731d227d53": "0af0f78cb14fe5db6b1162a4ded87342",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/f42cacb88ba3012f548945dd15ca7f86f804bf": "cd2fbcc0fac88a9ebeea12a814770343",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/4a/d9e1d977062ec02565cab15ea59ff692749fa6": "567dd5e20c22f1f59a8a4c1be6692e11",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/8d/a352968c9b19a582b0c543659887fef8b3e613": "12d01d39ae550266b0f58123240f2489",
".git/objects/12/69dcf96c4b198f764d6e2663a77e82ce8e7a90": "5361f4e24b3c01e328d3e8a383ef65f5",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/78/901a87f4204f98e1071f6176c81bcb20636fe0": "88275ba369c076e1c3fbf13f7882b4d0",
".git/objects/78/fd720d4a733fed24ac2867d053d5261b308e33": "7f76bd0500b62524fcc80a04e7321b94",
".git/objects/7a/2c172672082e5186b54e6cda00b8187213ee1f": "52cc336ec7a6344bdfd716cb595bbbb6",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d0d90400b0763f20ae423a17f277eebc",
".git/logs/refs/heads/master": "21af9aa9a1c8ce67f96b884c632cb878",
".git/logs/refs/remotes/origin/master": "1a7812228b9315a1724c1b7883be13af",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "8e2774e1b7959daf1cb97835891aad15",
".git/refs/remotes/origin/master": "8e2774e1b7959daf1cb97835891aad15",
".git/index": "eef60370528e681c7821bcaf55203d67",
".git/COMMIT_EDITMSG": "5d603fc8c5b47534d533bf14a50936dc",
".git/FETCH_HEAD": "868d7525bd54ad09a0575bf980b42cff",
"assets/AssetManifest.json": "5456afe54991f0e8f275ea0779637e67",
"assets/NOTICES": "99f1e6f0d019c17516bec4c36bce61ba",
"assets/FontManifest.json": "c60f7f2c0a39d977b00cf430eb5fc2dc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/svgs/main/search.svg": "cab3350e3bf79a0bc15f1d51eb02ee88",
"assets/assets/svgs/main/logout.svg": "fb807ec3f85cc0217abcbd0f6423b7ec",
"assets/assets/svgs/main/group.svg": "9d28bbff832b1c2be4ca45d5758ecc95",
"assets/assets/svgs/main/settings.svg": "6fbc21c19de88de22b8764d88f19b5a8",
"assets/assets/svgs/main/dashboard.svg": "c7039b0e756b4e00b1990f7f6741ddb8",
"assets/assets/svgs/main/homework.svg": "b5782346235f337170098bdbbe6598b3",
"assets/assets/svgs/main/message.svg": "5ee118f8b5c7405356c5695ebf15cbc6",
"assets/assets/svgs/main/schedule.svg": "a9242f357bf64a0f19ef07d716d1fb3d",
"assets/assets/svgs/logo.svg": "73210f3fda2e93be5943a713e7b04839",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/poppins/Poppins-ExtraBold.ttf": "544fa4f2678a8285eb88b8dfe503c90c",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/poppins/Poppins-Black.ttf": "0573b9231a8316427ad6e751b52e87a4",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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

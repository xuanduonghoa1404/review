import puppeteer from "puppeteer";

const listStore = [
//   "thanhtvtest.myshopify.com",
//   "newsttest2.myshopify.com",
//   "liam-store-dev.myshopify.com",
//   "hoa-dev-store-1.myshopify.com",
//   "easify-attachment-live-app.myshopify.com",
//   "dat-liverpool.myshopify.com",
//   "quanglinhstore.myshopify.com",
//   "test-easify-product-options-app.myshopify.com",
//   "shoptest-trang.myshopify.com",
//   "liv-food.myshopify.com",
//   "dohoa649.myshopify.com",
//   "htzy0n-nb.myshopify.com",
//   "micahbeng.myshopify.com",
//   "anh-27-dev.myshopify.com",
//   "bugfix-missing-template.myshopify.com",
//   "auto-discount-2.myshopify.com",
//   "phu-dev-store.myshopify.com",
//   "tigren-demo.myshopify.com",
//   "tigren-home-credit.myshopify.com",
//   "tigren-test-trung.myshopify.com",
//   "hoa-test-store.myshopify.com",
//   "test-product-attachment.myshopify.com",
//   "testgameforece.myshopify.com",
//   "easify-product-options.myshopify.com",
//   "demo-product-attachments.myshopify.com",
//   "hoangpm-dev.myshopify.com",
//   "easify-inventory-sync.myshopify.com",
//   "maitest-attachment.myshopify.com",
//   "inventorydevtest1.myshopify.com",
//   "neo-demo-store.myshopify.com",
//   "net-development.myshopify.com",
//   "zoe-app-testing.myshopify.com",
//   "shop-lovebomb.myshopify.com",
//   "store-for-testing-production.myshopify.com",
//   "test-easify-product-options.myshopify.com",
//   "ha-tra.myshopify.com",
//   "57b813-f2.myshopify.com",
//   "quickstart-9fa495fe.myshopify.com",
//   "jolie8386.myshopify.com",
//   "jenstyl.myshopify.com",
//   "hungnd11.myshopify.com",
//   "storeapp-development.myshopify.com",
//   "1980test.myshopify.com",
//   "the-most-expensive-store-on-the-world.myshopify.com",
//   // 'softplay2you.myshopify.com',
//   // 'wxqtest.myshopify.com',
//   // 'my-k9-nl.myshopify.com',
//   // 'orms-pb-test.myshopify.com',
//   "net-development-store-usa.myshopify.com",
//   "linh-nhi-store.myshopify.com",
//   "liam-test-store-2.myshopify.com",
//   // 'style-bundle-dev.myshopify.com',
//   // 'kate-forman-designs.myshopify.com',
//   // 'shop-brazen-fox.myshopify.com',
//   "easify-store-production.myshopify.com",
//   // 'demo-store-eu.myshopify.com',
//   // 'jacobsonsjewellery.myshopify.com',
//   // 'palette-imp.myshopify.com',
//   "seppy-custom-options-base-on-po.myshopify.com",
//   "seppy-cloud-store-develop.myshopify.com",
//   "product-options-store-stg.myshopify.com",
//   "roman-dev-5.myshopify.com",
  // 'happytassels.myshopify.com',
  // 'playr-fit-teamwear.myshopify.com',
  // 'nakswood-store.myshopify.com',
  // 'ahma-coffee.myshopify.com',
  "seatcraft-eurotec.myshopify.com",
  "southernpinesgolf.myshopify.com",
  "coding-with-menny.myshopify.com",
  "build-tigren-mystore-com.myshopify.com",
  "linhdesigner.myshopify.com",
  "stgv3new.myshopify.com",
  // 'testshopchristian2.myshopify.com',
  // 'jagdish-meals.myshopify.com',
  // 'the-radiator-company.myshopify.com',
  "inventory-sync-dev.myshopify.com",
  // 'londondiamonds.myshopify.com',
  // 'cpapoutlet.myshopify.com',
  // 'capolavoro-com.myshopify.com',
  // 'nakswood-store.myshopify.com',
  "dev-store-for-new.myshopify.com",
  // 'love-art-frames.myshopify.com',
  "bs-honey-bees-ltd.myshopify.com",
  "minhphamhong.myshopify.com",
  "addonnewcustomer.myshopify.com",
  // 'kp-april-24.myshopify.com',
  // 'chalet-perfect.myshopify.com',
  // 'jens-test-store-for-testing.myshopify.com',
  // 'dev-adamot.myshopify.com',
  "mann-cosmetic.myshopify.com",
  "venus-opticians.myshopify.com",
  "crusttest-2024.myshopify.com",
  "developecansandco.myshopify.com",
  "securityhousestore.myshopify.com",
  "butter-boy-cookies.myshopify.com",
  "storemetatest.myshopify.com",
  // 'coein.myshopify.com',
  "zenshadetest.myshopify.com",
  "doughnut-test-store.myshopify.com",
  // 'ecodiamante.myshopify.com',
  // 'instudios-co-uk.myshopify.com',
  // 'insheds-co-uk.myshopify.com',
  // 'index-bindery.myshopify.com',
  "monsterprint-dk.myshopify.com",
  "bbbv2.myshopify.com",
  // 'home-themedhome.myshopify.com',
  "localmarket-test.myshopify.com",
  "asrinventions.myshopify.com",
  // 'fragranceglamour.myshopify.com',
  // 'mon-event-prive.myshopify.com',
  // 'attaway-spain.myshopify.com',
  // 'artifylb.myshopify.com',
  "221baker.myshopify.com",
  // 'bougiebodega.myshopify.com',
  "the-anh-test1.myshopify.com",
  "test27613872168736.myshopify.com",
  // 'the-anokha-bandhan.myshopify.com',
  // 'bordados-de-tania.myshopify.com',
  // 'gp-easify-product-options.myshopify.com',
  // 'bobbleheadscheap.myshopify.com',
  // 'the-anokha-bandhan.myshopify.com',
  // 'insheds-co-uk.myshopify.com',
  "newaddontest.myshopify.com",
  "newaddon2install.myshopify.com",
  "discipline-infotech.myshopify.com",
  "jmd-test-store1.myshopify.com",
  // 'abackdrop.myshopify.com',
  "stadtcollagen-test.myshopify.com",
  "realsandbox.myshopify.com",
  // 'cicil-working.myshopify.com',
  // 'bbflowerbar.myshopify.com',
  // 'jkdesignsjewelry.myshopify.com',
  "quickstart-8f6ac778.myshopify.com",
  "minony.myshopify.com",
  // 'visionsts.myshopify.com',
  "patisserie-de-store-demo.myshopify.com",
  // 'stammschneiderei.myshopify.com',
  "altaqreer.myshopify.com",
  // 'polymatheia-test.myshopify.com',
  // 'streammarketuk.myshopify.com',
  "jakdevstore.myshopify.com",
  // 'aal-ltd-molift.myshopify.com',
  // 'ideautoworks.myshopify.com',
  // 'anantham-silks-store.myshopify.com',
  "thanhquynh.myshopify.com",
  "boxbuil.myshopify.com",
  "itraaaa.myshopify.com",
  "quickstart-08c0000b.myshopify.com",
  "22-mer.myshopify.com",
  "dev-mytruckerpro.myshopify.com",
  "idc-copy-test.myshopify.com",
  "test-pluginss.myshopify.com",
  // 'global-safety-indust.myshopify.com',
  "futurelifetest.myshopify.com",
  "priyanka-adexlabs.myshopify.com",
  "for-the-roses.myshopify.com",
  "check-flow-checkout.myshopify.com",
  // 'bissellharvest.myshopify.com',
  "dtf02ss.myshopify.com",
  "wemust-ca.myshopify.com",
  "dtf01ss.myshopify.com",
  "norse-interiors-staging.myshopify.com",
  // 'getstufd.myshopify.com',
  // 'hjs-kitchen.myshopify.com',
  "operation-christmas-child.myshopify.com",
  // 'stembystem-test.myshopify.com',
  "earleys-fashion.myshopify.com",
  "inksquidstudio.myshopify.com",
  "naho-workware.myshopify.com",
  "yoeditions-test.myshopify.com",
  "quickstart-4c5448ef.myshopify.com",
  "charles-davis-photography.myshopify.com",
  "seal-commerce-asia.myshopify.com",
  "tuanna-store.myshopify.com",
  "ngocnt-demo-store.myshopify.com",
  "linh-jennifer-store.myshopify.com",
  "net-development-bfs.myshopify.com",
  "annatest888.myshopify.com",
  "project-develop.myshopify.com",
  // 'gearone-dev.myshopify.com',
  // 'navaaura.myshopify.com',
  // 'lahana-jewelry.myshopify.com',
  "amws-themes-tester.myshopify.com",
  "loopandtwist.myshopify.com",
  // 'sochy-new-devs.myshopify.com',
  "john-bull-test.myshopify.com",
  // 'online-blinds-4-u.myshopify.com',
  "boutique-wheels.myshopify.com",
  "magilie-dev.myshopify.com",
  // 'partysavesmile.myshopify.com',
  "kv-printshop.myshopify.com", // Partner
  // 'alnaturalcomplementos.myshopify.com',
  "lifeponicsolutions.myshopify.com",
  "faculty-sandbox.myshopify.com", // Partner
  "quickstart-fac1e1c5.myshopify.com",
  // 'thrive-printing.myshopify.com',
  // 'eurovendingcl.myshopify.com',
  "trinityviolincase.myshopify.com",
  "santoro-creative-shop.myshopify.com",
  "epowerguysdev.myshopify.com",
  // 'qool-dev.myshopify.com',
  // 'printasypk.myshopify.com',
  // 'jdn-monocrane.myshopify.com',
  "al-prac.myshopify.com", // Partner
  // 'acierdetaildecoupeannecy.myshopify.com',
  "barkevs.myshopify.com",
  // 'launchboxwellness.myshopify.com',
  "testtesttest123343.myshopify.com",
  "bigzdev1.myshopify.com",
  "armin-wh-store.myshopify.com",
  "pd-interiors.myshopify.com",
  // 'dt-teststore-checkout-extensibility.myshopify.com',
  // 'nellys-grannys.myshopify.com',
  // 'customcrest.myshopify.com',
  // 'mbertable.myshopify.com',
  // 'bdlaserteststore.myshopify.com',
  "tusksolutions.myshopify.com",
  "test-olympic.myshopify.com",
  // 'nagaopticals.myshopify.com',
  "billynguyen.myshopify.com",
  "apoio-dev.myshopify.com",
  "maccabi-tlv-store.myshopify.com",
  "wlk-druck.myshopify.com",
  "myko-test.myshopify.com",
  "arthritis-test-store.myshopify.com",
  "bpom-dev.myshopify.com",
  "smokevents.myshopify.com",
  "pmt-v2.myshopify.com",
  "paint-2-0.myshopify.com",
  "north-sea-ropes.myshopify.com",
  "evolve-dev2.myshopify.com",
  "paradise-posters-apps.myshopify.com",
  "tshirt-pod-co.myshopify.com",
  "gourmet-chip-company-dev.myshopify.com",
  "lambert-et-fils-dev.myshopify.com",
  "goldener-loffel.myshopify.com",
  "qd-draft.myshopify.com", // Partner
  "dbguestbook.myshopify.com",
  "school-uniform-test.myshopify.com", // Partner
  // 'spartanburg-charcuterie-company.myshopify.com',
  "dyno-dreamz-tech.myshopify.com", // Partner
  "pgm-demo.myshopify.com", // Development
  "greenmind-travel.myshopify.com",
  // 'sevgi-lambasi-4.myshopify.com', // Development
  // 'combatepmire.myshopify.com', // Development
  "littleia-in.myshopify.com", // Development
  "bauhaus-manila-ph.myshopify.com", // Development
  // 'glossoppicnmix.myshopify.com', // Development
  "egilbertillustrations.myshopify.com", // Development
  "racollabs.myshopify.com", // Partner
  "laguna-b-clone.myshopify.com", // Development
  // 'spartanburg-charcuterie-company.myshopify.com', // Development
  "bg-dummystore.myshopify.com", // Development
  // 'porque-hub.myshopify.com', // Development
  "upakarnastore.myshopify.com", // Development
  "testing-steve.myshopify.com", // Development
  "a7818k.myshopify.com", // Partner
  "grokera.myshopify.com", // Partner,
  "apdstudios.myshopify.com", // Development
  // 'broken-road-custom-designs.myshopify.com', // Development
  // 'uss-online.myshopify.com', // Development
  "bundle-trial-store.myshopify.com", // Development
  "sandboxkobalt.myshopify.com", // Partner
  "demo-sanjay-s-new.myshopify.com", // Partner
  "dawn-test-tony.myshopify.com", // Development
  "aryan-web.myshopify.com", // Development
  "slidepods-demo.myshopify.com", // Development
  "hatdaddytesting2.myshopify.com", // Partner
  "fastdigi-demo-store.myshopify.com", // Partner
  "dentaldirekt-staging.myshopify.com", // Development
  "wildflowerprintsau.myshopify.com", // Development
  "expresscakes.myshopify.com", // Development
  "itya-ui42.myshopify.com", // Development
  "dekoraalbum.myshopify.com", // Development
  "the-wells-demo.myshopify.com", // Development
  "knt-dev.myshopify.com", // Development
  "hoc-dev-store-2.myshopify.com", // Development
  "moonbundle-dev-qualit-q.myshopify.com", // Development
  "qairo-pe.myshopify.com", // Development
  "originaltasteco.myshopify.com", // Development
  "lappartdechloe.myshopify.com", // Development
  "rolf-glass-glassware.myshopify.com", // Development
  "didiz-gifts.myshopify.com", // Development
  "hira-la.myshopify.com", // Development
  "dev-hemmingsen-kids.myshopify.com", // Development
  "ego-website.myshopify.com", // Development
  "hugo-development-test.myshopify.com", // Partner
  "seisdeltres-pruebas.myshopify.com", // Development
  "ag-cv-development-testing.myshopify.com", // Development
  "seraphictest.myshopify.com", // Development
  "pixel-demo-site.myshopify.com", // Partner
  "staginghrmtestapp2.myshopify.com", // Partner
  "muhammadreh-dev.myshopify.com", // Partner
  "vitalii-markets-test.myshopify.com", // Partner
  "zacklabs.myshopify.com", // Partner
  "hardypaw-dev.myshopify.com", // Partner
];

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const validStores = [];

  for (const store of listStore) {
    const url = `https://${store}`;
    try {
      console.log(`\n🔎 Checking: ${url}`);

      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });

      const hasPasswordForm =
        (await page.$('form[action="/password"]')) !== null;
      const hasShopNotFound = (await page.$("#shop-not-found")) !== null;

      if (hasShopNotFound) {
        console.log(`❌ ${store} → Shop not found`);
        continue; // skip
      }

      if (!hasPasswordForm) {
        validStores.push(store);
        console.log(`✅ ${store} → Public (no password form)`);
      } else {
        console.log(`🔒 ${store} → Password protected`);
      }
    } catch (err) {
      console.error(`⚠️ Error checking ${store}:`, err.message);
    }
  }

  await browser.close();

  console.log("\n📋 Final list (public, valid stores):", validStores);
})();

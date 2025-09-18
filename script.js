
import puppeteer from "puppeteer";
import { createObjectCsvWriter } from "csv-writer";

  async function scrapeAllShopifyAppReviews(
    baseUrl,
    outputFile = "reviews.csv"
  ) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    let allReviews = [];
    let currentPage = 1;
    let hasNextPage = true;

    while (hasNextPage) {
      const url = `${baseUrl}&page=${currentPage}`;
      console.log(`Scraping page ${currentPage}: ${url}`);
      await page.goto(url, { waitUntil: "networkidle2" });

      const reviews = await page.evaluate(() => {
        const reviewData = [];
        const reviewElements = document.querySelectorAll(
          ".tw-pb-md.md\\:tw-pb-lg.tw-mb-md.md\\:tw-mb-lg.tw-pt-0.last\\:tw-pb-0"
        );

        for (let element of reviewElements) {
          const storeNameElement = element.querySelector(".tw-text-heading-xs");
          const storeName = storeNameElement
            ? storeNameElement.innerText.trim()
            : null;

          const ratingContainer = element
            .querySelector(".tw-flex.tw-relative")
            .getAttribute("aria-label");
          let rating = 0;
          if (ratingContainer) {
            rating = ratingContainer[0];
          } else {
            rating = null;
          }

          const dateElement = element.querySelector(
            ".tw-text-body-xs.tw-text-fg-tertiary"
          );
          const date = dateElement ? dateElement.innerText.trim() : null;

          const contentElement = element.querySelector(
            "[data-truncate-content-copy]"
          );
          const content = contentElement
            ? contentElement.innerText.trim()
            : null;
          const replied = element.querySelector(
            "[data-merchant-review-reply] .tw-text-fg-tertiary"
          );
          if (storeName) {
            reviewData.push({
              storeName,
              review: ratingContainer,
              date,
              content,
              replied: !!replied,
            });
          }
        }

        return reviewData;
      });

      allReviews = allReviews.concat(reviews);

      const nextButton = await page.$('a[aria-label="Go to Next Page"]');
      hasNextPage =
        !!nextButton &&
        !(await page.evaluate(
          (el) =>
            el.hasAttribute("disabled") || el.classList.contains("disabled"),
          nextButton
        ));

      if (hasNextPage) {
        currentPage++;
      } else {
        console.log("No more pages to scrape.");
      }
      // if (currentPage > 5) {
      //   hasNextPage = false;
      // }
    }

    await browser.close();
    // Write reviews to CSV
    const csvWriter = createObjectCsvWriter({
      path: outputFile,
      header: [
        { id: "storeName", title: "Store Name" },
        { id: "review", title: "Review" },
        { id: "date", title: "Date" },
        { id: "content", title: "Content" },
        { id: "replied", title: "Replied" },
      ],
    });

    await csvWriter.writeRecords(allReviews);
    console.log(`Reviews saved to ${outputFile}`);

    return allReviews;
  }

  // Usage example
  const baseUrl =
    "https://apps.shopify.com/easify-product-options/reviews?sort_by=newest";
  scrapeAllShopifyAppReviews(baseUrl, 'reviews.csv')
    .then((reviews) => console.log(JSON.stringify(reviews, null, 2)))
    .catch((error) => console.error("Error:", error));
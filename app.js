import puppeteer from "puppeteer";

const launchPuppeteer = async (url) => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // Navigate the page to a URL
    await page.goto(url);

    // Set screen size
    await page.setViewport({ width: 1080, height: 1024 });

    await page.screenshot({ path: "screenshot.png" });

    console.log("Screenshot taken and saved as screenshot.png");

    await browser.close();
  } catch (error) {
    console.error("Error launching Puppeteer:", error);
  }
};

console.log("Launching Screenshot Tool...");
launchPuppeteer("https://www.joshfarr.com");

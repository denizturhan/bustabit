const puppeteer = require("puppeteer");
const fs = require("fs");

let id = 6752706;
(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.bustabit.com/game/" + id);
  await page.waitForSelector(
    "body > div > div > div > div > div > nav > a:nth-child(1)"
  );

  const getData = async () => {
    try {
      await page.waitForNetworkIdle();
      const veri = await page.evaluate(() => {
        const busted = Number(
          document
            .querySelector(
              "body > div > div > div > div > div > div > p > span:nth-child(2)"
            )
            .textContent.split("x")[0]
        );

        const gameId = Number(
          document
            .querySelector("body > div > div > div > div > div > div > h3")
            .textContent.split("#")[1]
        );

        return { busted, gameId };
      });
      console.log(veri);

      fs.readFile("data.json", "utf8", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          const obj = JSON.parse(data);
          obj.data.push(veri);
          fs.writeFile("data.json", JSON.stringify(obj), (err) => {
            if (err) {
              console.log(err);
            } else {
              console.log("Datsa written to file");
            }
          });
        }
      });
      await page.click(
        "body > div > div > div > div > div > nav > a:nth-child(1)"
      );

      await page.waitForNetworkIdle();
    } catch (error) {
      console.log(error);
    }
  };

  for (let i = 0; i < 50000; i++) {
    await getData();
  }
  await browser.close();
})();

import puppeteer from "puppeteer";
import * as cheerio from "cheerio"

interface JobData {
  title: string;
  applyLink: string;
  location: string;
  salary: string;
  experience: string;
  postingDate: string;
  description: string;
}

export default async function naukriScraper (url:string){
    try{
    const chrome = await puppeteer.launch();
    const page = await chrome.newPage();
    await page.setUserAgent(
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36'
    );
    await page.goto(url);
    await page.waitForSelector(".Jobs", { timeout: 2000 });
    const body = await page.evaluate(() => {
        return document.querySelector("body")?.innerHTML || "";
    });
    const $ = cheerio.load(body);
    const data: Record<string, JobData> = {};
    $("article").each((_idx, el) => {
        data[_idx] = {
        title: $(el).find(".title").text(),
        applyLink: $(el).find(".title").attr('href') || '',
        location: $(el).find(".location span").text(),
        salary: $(el).find(".salary span").text(),
        experience: $(el).find(".experience span").text(),
        postingDate: $(el).find(".jobTupleFooter div span").text(),
        description: $(el).find(".job-description div").text(),
        };
    });

    await chrome.close();
    return data;
      } catch (error:any) {
    console.error("Error in scraping data:", error.message);
    throw error;
  }
}

// pages/api/scrape.ts
import { NextApiRequest, NextApiResponse } from 'next';
import * as cheerio from "cheerio";
import puppeteer from "puppeteer";

interface JobData {
  title: string;
  applyLink: string;
  location: string;
  salary: string;
  experience: string;
  postingDate: string;
  description: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  const { url } = req.body;
  console.log(url)
  try {
    const chrome = await puppeteer.launch();
    const page = await chrome.newPage();
    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36'
    );

    const response = await page.goto(url);

    if (!response || !response.ok()) {
      throw new Error(`Failed to fetch ${url}. Status: ${response ? response.status() : 'unknown'}`);
    }

    await page.waitForSelector(".Jobs", { timeout: 2000 });

    const body = await page.evaluate(() => {
      return document.querySelector("body")?.innerHTML || "";
    });

    const $ = cheerio.load(body);
    const data:any = [];
    $("article").each((_idx, el) => {
      data.push({
        title: $(el).find(".title").text(),
        applyLink: $(el).find(".title").attr('href') || '',
        location: $(el).find(".location span").text(),
        salary: $(el).find(".salary span").text(),
        experience: $(el).find(".experience span").text(),
        postingDate: $(el).find(".jobTupleFooter div span").text(),
        description: $(el).find(".job-description div").text(),
      });
    });

    await chrome.close();

    res.status(200).json({ success: true, data });
  } catch (error: any) {
    console.error("Error in API:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
}

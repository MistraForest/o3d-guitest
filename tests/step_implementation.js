/* globals gauge*/
"use strict";
const { openBrowser, closeBrowser, screenshot } = require('taiko');
const path = require("path");
const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
    await openBrowser({args:['--window-size=1880,970'], headless: headless })
});

afterSuite(async () => {
    await closeBrowser();
});

gauge.customScreenshotWriter = async function () {
    const screenshotFilePath = path.join(process.env['gauge_screenshots_dir'], `screenshot-${process.hrtime.bigint()}.png`);
    await screenshot({ path: screenshotFilePath });
    return path.basename(screenshotFilePath);
};


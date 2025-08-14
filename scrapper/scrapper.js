// scraper.js
import puppeteer from "puppeteer";
import fs from "fs";
import readline from "readline";

async function extractFormFields(page) {
  return await page.$$eval("form input, form select, form textarea", elements =>
    elements.map(el => ({
      tag: el.tagName.toLowerCase(),
      type: el.type || null,
      name: el.name || null,
      id: el.id || null,
      value: el.value || null,
      placeholder: el.placeholder || null,
      required: el.required || false
    }))
  );
}

function askQuestion(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise(resolve => rl.question(query, ans => {
    rl.close();
    resolve(ans);
  }));
}

(async () => {
  const browser = await puppeteer.launch({ headless: false }); // visible so you can see OTP step
  const page = await browser.newPage();

  console.log("Opening Step-1...");
  await page.goto("https://udyamregistration.gov.in/UdyamRegistration.aspx", { waitUntil: "networkidle2" });

  // Fill Aadhaar No & Name
  await page.type('input[name="ctl00$ContentPlaceHolder1$txtadharno"]', "466289877601");
  await page.type('input[name="ctl00$ContentPlaceHolder1$txtownername"]', "Dev Singh");

  // Click validate button (Step-1)
  await page.click('input[name="ctl00$ContentPlaceHolder1$btnValidateAadhaar"]');
  console.log("✅ Clicked Validate Aadhaar, OTP should be sent to linked mobile.");

  // Wait for OTP field
  await page.waitForSelector('input[name="ctl00$ContentPlaceHolder1$txtOtp1"]', { timeout: 60000 });

  // Ask for OTP
  const otp = await askQuestion("Enter OTP received: ");
  await page.type('input[name="ctl00$ContentPlaceHolder1$txtOtp1"]', otp);

  // Click OTP Validate button
  await page.click('input[name="ctl00$ContentPlaceHolder1$btnValidate"]');

  // Wait for Step-2 form to load (adjust selector if needed)
  await page.waitForSelector('input[name="ctl00$ContentPlaceHolder1$txtname"]', { timeout: 60000 });

  // Extract Step-2
  console.log("Extracting Step-2 fields...");
  const step2Fields = await extractFormFields(page);
  fs.writeFileSync("step2.json", JSON.stringify(step2Fields, null, 2));
  console.log("✅ Saved step2.json");

  await browser.close();
})();

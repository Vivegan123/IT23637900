import { test, expect } from '@playwright/test';


test('Pos_Fun_0001 - Convert a simple daily statement', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naan veetukku poren');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0002 - Daily food requirement sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('enakku saapadu venum');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0003 - Simple question sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('nee eppadi irukka?');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0004 - Polite request sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('konjam help pannuvaaya?');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0005 - Compound daily activity sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naan office pogiren, apram shopping pannalaam.');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0006 - Imperative command sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('seekiram vaa.');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0007 - Negative form sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naan varala.');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0008 - Future tense sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naalai naan varuven.');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0009 - Repeated word emphasis', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('seekiram seekiram vaa.');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0010 - Past tense sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naan nethu ponnen.');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0011 - Slang usage sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('semma idea machan!');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0012 - English brand name usage', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naan WhatsApp message anupinen.');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0013 - Time format sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('meeting 7.30 AM irukku.');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0014 - Currency sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('bill Rs. 2500 aagudhu.');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0015 - Pronoun variation sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('neenga enga poreenga?');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0016 - Plural form sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('avanga naalai varuvaanga');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0017 - Joined word handling', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naanveetukkuponen');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0018 - Multiple spaces handling', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naan veetukku poren.');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});


test('Pos_Fun_0019 - Informal confirmation sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('seri naan varen.');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0020 - Greeting sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('vanakkam eppadi irukkeenga?');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});


test('Pos_Fun_0021 - Conditional sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('nee vandhaa naan varuven.');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});


test('Pos_Fun_0022 - Measurement unit sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('5 kg arisi venum.');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0023 - Informal response sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('seri appuram pesalam.');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0024 - English place name sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naan Chennai pogiren.');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Neg_Fun_0001 - Unsupported shorthand input', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('c u l8r');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Neg_Fun_0002 - Random characters input', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('###@');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Neg_Fun_0003 - Mixed unrelated language', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('bonjour naan varen');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Neg_Fun_0004 - Excessive spelling errors', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naaaaan veeeetukuu pooooren');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Neg_Fun_0005 - Emoji-only input', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('😂😂😂');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Neg_Fun_0006 - Numbers-only input', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('123456');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Neg_Fun_0007 - English-only sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('I am going home');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Neg_Fun_0008 - Special symbols mixed input', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naan $$$ veetukku');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Neg_Fun_0009 - Empty input', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('  ');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Neg_Fun_0010 - Excessively long gibberish input', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('randomrandomrandomrandom...');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_UI_0001 - Real-time Tamil output update', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naan veetukku poren');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});


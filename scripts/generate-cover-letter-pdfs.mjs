import { spawnSync } from "node:child_process";
import {
  existsSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const contentDir = path.join(root, "content");
const publicDir = path.join(root, "public");

const chromeCandidates = [
  process.env.CHROME_PATH,
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  path.join(
    os.localappdata ?? path.join(os.homedir(), "AppData", "Local"),
    "Google",
    "Chrome",
    "Application",
    "chrome.exe"
  ),
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
].filter(Boolean);

const chrome = chromeCandidates.find((candidate) => existsSync(candidate));

if (!chrome) {
  throw new Error(
    "Chrome introuvable. Définissez CHROME_PATH avec le chemin vers Chrome/Chromium."
  );
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderHtml(letter) {
  const paragraphs = letter.paragraphs
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("\n");

  return `<!doctype html>
<html lang="${escapeHtml(letter.locale)}">
  <head>
    <meta charset="utf-8" />
    <title>${escapeHtml(letter.printTitle)}</title>
    <style>
      @page { size: A4; margin: 14mm; }
      * { box-sizing: border-box; }
      html, body { margin: 0; padding: 0; }
      body {
        color: #111827;
        font-family: "Segoe UI", Arial, Helvetica, sans-serif;
        font-size: 9.8pt;
        line-height: 1.42;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .accent {
        height: 3px;
        margin-bottom: 14px;
        border-radius: 999px;
        background: linear-gradient(90deg, #22d3ee, #a855f7, #f472b6);
      }
      header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 20px;
        padding-bottom: 10px;
        margin-bottom: 14px;
        border-bottom: 1px solid #e5e7eb;
      }
      .brand { font-size: 13pt; font-weight: 700; color: #0f172a; }
      .brand span { display: block; margin-top: 2px; font-size: 8pt; font-weight: 400; color: #475569; }
      .contact { text-align: right; font-size: 8pt; color: #475569; line-height: 1.5; }
      .date { margin-bottom: 12px; color: #475569; font-size: 9pt; }
      .subject { margin: 0 0 12px; font-weight: 700; color: #0f172a; }
      .recipient { margin: 0 0 10px; font-weight: 600; }
      p { margin: 0 0 7pt; text-align: justify; }
      .closing { margin-top: 12px; }
      .signature { margin-top: 18px; }
      .signature strong { display: block; font-size: 10.5pt; color: #0f172a; }
      .signature span { display: block; margin-top: 2px; color: #64748b; font-size: 8.5pt; }
    </style>
  </head>
  <body>
    <div class="accent"></div>
    <header>
      <div class="brand">
        ${escapeHtml(letter.signatureName)}
        <span>${escapeHtml(letter.signatureRole)}</span>
      </div>
      <div class="contact">
        Sousse, Tunisie<br />
        khalifaboufares@gmail.com<br />
        +216 93 973 109
      </div>
    </header>
    <div class="date">${escapeHtml(letter.date)}</div>
    <p class="subject">${escapeHtml(letter.subject)}</p>
    <p class="recipient">${escapeHtml(letter.recipient)}</p>
    ${paragraphs}
    <p class="closing">${escapeHtml(letter.closing)}</p>
    <div class="signature">
      <strong>${escapeHtml(letter.signatureName)}</strong>
      <span>${escapeHtml(letter.signatureRole)}</span>
    </div>
  </body>
</html>`;
}

const tempDir = mkdtempSafe();

function mkdtempSafe() {
  return mkdirSync(path.join(os.tmpdir(), `mkb-cover-letter-${Date.now()}`), {
    recursive: true,
  });
}

try {
  for (const lang of ["fr", "en"]) {
    const letter = JSON.parse(
      readFileSync(path.join(contentDir, `cover-letter.${lang}.json`), "utf8")
    );
    const htmlPath = path.join(tempDir, `cover-letter-${lang}.html`);
    const pdfPath = path.join(publicDir, letter.pdfPath.replace(/^\//, ""));

    writeFileSync(htmlPath, renderHtml(letter), "utf8");

    const result = spawnSync(
      chrome,
      [
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        "--disable-extensions",
        "--disable-background-networking",
        "--no-first-run",
        "--no-default-browser-check",
        `--user-data-dir=${path.join(tempDir, `chrome-${lang}`)}`,
        "--no-pdf-header-footer",
        "--virtual-time-budget=2000",
        `--print-to-pdf=${pdfPath}`,
        pathToFileURL(htmlPath).href,
      ],
      { cwd: root, encoding: "utf8" }
    );

    if (result.error) throw result.error;
    if (result.status !== 0) {
      throw new Error(
        `Échec de génération PDF pour ${lang}:\n${result.stdout}\n${result.stderr}`
      );
    }

    const pdf = readFileSync(pdfPath);
    if (pdf.subarray(0, 4).toString() !== "%PDF") {
      throw new Error(`Le fichier généré pour ${lang} n'est pas un PDF valide.`);
    }

    console.log(`PDF généré : ${path.relative(root, pdfPath)} (${pdf.length} octets)`);
  }
} finally {
  rmSync(tempDir, { recursive: true, force: true });
}

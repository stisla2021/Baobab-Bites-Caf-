# QR Code Guide for Baobab Bites Café

This file explains how the QR code was created for the website and what the terminal commands did.

## What the QR code does
The QR code points visitors directly to the website:

https://stisla2021.github.io/Baobab-Bites-Cafe/

When someone scans it with a phone camera, it opens the café website instantly.

## How the QR code was created
We used Python with the `qrcode` library to generate an image file called `qr_code.png`.

### Python command used
The terminal command used was:

```powershell
& 'C:/Users/stisl/AppData/Local/Programs/Python/Python313/python.exe' -c "import qrcode; from pathlib import Path; p = Path(r'c:/Users/stisl/Desktop/Baobab Bites Cafe/qr_code.png'); qrcode.make('https://stisla2021.github.io/Baobab-Bites-Cafe/').save(p); print(p); print(p.exists(), p.stat().st_size)"
```

### What this command does
- `import qrcode` loads the QR code library.
- `from pathlib import Path` lets Python work with files and folders.
- `p = Path(...)` creates the output file path for the QR image.
- `qrcode.make('https://...')` creates the QR code from the website URL.
- `.save(p)` saves the QR image as `qr_code.png`.
- `print(...)` shows the file location and confirms the file exists.

## Why the QR code was added to the site
The QR code was added to the website pages so customers can scan it and open the café website quickly on their phones.

## Files created and updated
- Created: `qr_code.png`
- Updated: `index.html`
- Updated: `contact.html`
- Updated: `menu.html`
- Updated: `css/style.css`

## Git commands used to upload everything to GitHub
These were used to save and publish the changes:

```bash
git add index.html contact.html menu.html css/style.css qr_code.png
git commit -m "Add QR section to contact and menu pages"
git push origin master
```

### What these commands do
- `git add ...` stages the files for commit.
- `git commit -m ...` saves the changes with a message.
- `git push origin master` uploads the updates to GitHub.

## Summary
The QR code was created from the website link, saved as an image file, added to the site pages, and uploaded to GitHub so the changes are live online.

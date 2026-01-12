# Run the Website Locally

This project’s UI lives in the `website/` folder. It’s a static site (HTML/CSS/JS) with links to the root-level Markdown guides.

Important: Start a static server from the REPO ROOT (not the `website/` folder) so the Guides links (e.g., `../05-RESOURCES-AND-LINKS.md`) work.

---

## Quick Start (Python 3)

```bash
# From the repo root
cd /Users/girish/azure-security-learning
python3 -m http.server 5500
# Open the site
open "http://localhost:5500/website/"
# Open the guides (example)
open "http://localhost:5500/05-RESOURCES-AND-LINKS.md"
```

- If `python3` isn’t found on macOS: `brew install python`

---

## Alternative: Node.js (npx serve)

```bash
# From the repo root
cd /Users/girish/azure-security-learning
npx serve -l 5500 .
# Or install globally
# npm install -g serve && serve -l 5500 .
```

Open: http://localhost:5500/website/

---

## Alternative: VS Code Live Server

- Install the "Live Server" extension
- Open the repo root in VS Code
- Right-click `website/index.html` → "Open with Live Server"
- Ensure the server root is the repo root if you want the Guides links to the `.md` files to load directly

---

## Why serve from the repo root?

The Guides section in the UI links to Markdown files stored at the repository root (e.g., `../01-DAILY-STUDY-SCHEDULE.md`).
- If you serve only `website/`, those `../*.md` links won’t be reachable (404).
- Serving from the repo root makes both `/website/` and root `.md` files available.

Note: Markdown files will display as plain text in the browser. To view them with rich rendering, use VS Code’s Markdown Preview or GitHub.

---

## Troubleshooting

- Port already in use:
  ```bash
  lsof -i :5500 | awk 'NR>1 {print $2}' | xargs -r kill -9
  # Then retry your server command
  ```
- Exit 127 when starting from `website/`:
  - This usually means the shell could not find `python3` in that subshell. Start from the repo root, or use a full path to Python.
  - Example:
    ```bash
    cd /Users/girish/azure-security-learning
    /usr/bin/python3 -m http.server 5500
    open "http://localhost:5500/website/"
    ```
- Change port (example):
  ```bash
  python3 -m http.server 8080
  # open http://localhost:8080/website/
  ```
- 404 on `*.md` guides:
  - You probably started the server inside `website/`. Start it from the repo root instead.
- `python3: command not found`:
  - Install Python on macOS: `brew install python`

---

## Helpful URLs

- Site: http://localhost:5500/website/
- Guides (examples):
  - http://localhost:5500/01-DAILY-STUDY-SCHEDULE.md
  - http://localhost:5500/02-HANDS-ON-LAB-GUIDE.md
  - http://localhost:5500/05-RESOURCES-AND-LINKS.md

---

Updated: January 2026

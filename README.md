# 🌐 ★ N0TE'S WEB ZONE ★

> **WELCOME, INTERNET TRAVELER!** 👾
> You have entered my totally legitimate corner of the World Wide Web.

```text
╔══════════════════════════════════════════════╗
║       W E L C O M E   T O   M Y   S I T E   ║
╠══════════════════════════════════════════════╣
║                                              ║
║        🚧 UNDER CONSTRUCTION 🚧              ║
║                                              ║
║     Best viewed in 800x600 resolution        ║
║     Netscape Navigator recommended           ║
║                                              ║
╚══════════════════════════════════════════════╝
```

## 🖥️ What is this?

**hello-static** — это маленький статический сайт на:

* 🧱 HTML
* 🎨 CSS
* ⚡ JavaScript
* 🤖 GitHub Actions
* 🚀 GitHub Pages

Главная идея проекта — сделать сайт в стиле **Web 1.0 / старого интернета**:

```text
✨ ugly borders
✨ blinking warnings
✨ visitor counter
✨ ASCII art
✨ guestbook
✨ bright colors
✨ 800x600 supremacy
```

И да...

**Современный дизайн был запрещён.** 😎

---

## 🌐 LIVE WEBSITE

🚀 **Сайт уже можно посмотреть здесь:**

👉 https://N0TEthis.github.io/hello-static/

```text
╭────────────────────────────────────────╮
│  YOU ARE VISITOR #000042               │
│                                        │
│  ★ THANK YOU FOR VISITING ★            │
╰────────────────────────────────────────╯
```

---

## 📁 Project structure

```text
hello-static/
│
├── .github/
│   └── workflows/
│       └── ci-cd.yml
│
├── public/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── favicon.svg
│
├── .gitignore
├── .htmlvalidate.json
├── .stylelintrc.json
├── eslint.config.js
├── package.json
└── package-lock.json
```

---

## 🤖 CI/CD

Проект использует **GitHub Actions**.

При каждом `push` в `main` запускается проверка:

```text
        PUSH
          │
          ▼
┌─────────────────┐
│   HTML Validate │
└────────┬────────┘
         ▼
┌─────────────────┐
│   Stylelint     │
└────────┬────────┘
         ▼
┌─────────────────┐
│   ESLint        │
└────────┬────────┘
         ▼
┌─────────────────┐
│ Upload Artifact │
└────────┬────────┘
         ▼
       SUCCESS
         │
         ▼
┌─────────────────┐
│ GitHub Pages    │
│     DEPLOY      │
└─────────────────┘
```

Если хотя бы одна проверка не проходит — сайт **не деплоится**.

💀

---

## 🔍 Quality checks

Для проверки используются:

| Tool            | Purpose             |
| --------------- | ------------------- |
| `html-validate` | Проверка HTML       |
| `stylelint`     | Проверка CSS        |
| `eslint`        | Проверка JavaScript |
| GitHub Actions  | CI/CD               |
| GitHub Pages    | Hosting             |

---

## 🧪 Run locally

Если Node.js уже установлен:

```bash
npm ci
```

Запустить все проверки:

```bash
npm run lint
```

Отдельно:

```bash
npm run lint:html
npm run lint:css
npm run lint:js
```

Если всё хорошо:

```text
✔ HTML valid
✔ CSS valid
✔ JavaScript valid

★ NO ERRORS ★
```

---

## 🚀 Deployment

Деплой происходит автоматически через:

```text
GitHub Actions
      +
GitHub Pages
```

Никакого:

```text
❌ FTP
❌ ручной загрузки файлов
❌ "а куда я это должен скопировать?"
```

Просто:

```bash
git add .
git commit -m "update site"
git push
```

И CI/CD всё сделает само. 🤖

---

## 💾 Retro features

На сайте присутствуют настоящие элементы эпохи Web 1.0:

* 🚧 `UNDER CONSTRUCTION`
* 👁️ visitor counter
* 📖 guestbook
* 💾 ASCII art
* 🌈 яркие цвета
* 🪟 Windows 95-style окна
* 🔗 текстовые ссылки
* 📺 надпись `Best viewed in 800x600`
* 💻 HTML/CSS/JS badges

```text
╔════════════════════════════════╗
║       INTERNET 1999            ║
║                                ║
║   [ HOME ] [ ABOUT ]           ║
║   [ STUFF ] [ GUESTBOOK ]      ║
║                                ║
║   ★ YOU ARE VISITOR #000042 ★  ║
╚════════════════════════════════╝
```

---

## 🏆 Browser compatibility

Работает в:

```text
✓ Firefox
✓ Chrome
✓ Edge
✓ Safari
✓ Netscape Navigator* 
```

* Возможно, потребуется машина времени. ⏰

---

## 📜 License

Это учебный проект.

Feel free to look around.

Just don't steal my pixels. 👀

---

```text
███████╗███╗   ██╗██████╗
██╔════╝████╗  ██║██╔══██╗
█████╗  ██╔██╗ ██║██║  ██║
██╔══╝  ██║╚██╗██║██║  ██║
███████╗██║ ╚████║██████╔╝
╚══════╝╚═╝  ╚═══╝╚═════╝

★ THANK YOU FOR VISITING ★

Last updated: 2026
Made with HTML + CSS + JavaScript
Powered by questionable amounts of caffeine ☕
```

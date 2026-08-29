# EntrancePrep Studio & Practice Hub 🎓

An all-in-one, feature-rich, 100% client-side web application for entrance exam practice, note-taking, formula flashcards, and focus study management.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-Fully%20Functional-brightgreen.svg)
![Tech Stack](https://img.shields.io/badge/tech-HTML5%20%7C%20CSS3%20%7C%20JS-blueviolet.svg)

---

## 🌟 Key Features

- 🎯 **Verified Multi-Subject Question Bank (200+ MCQs)**:
  - Subject coverage: *Physics, Chemistry, Mathematics, Biology & Agriculture, Computer Science, General Aptitude, and English*.
  - Subject filter pills and real-time score tracking.
  - Verified correct answer highlighting with detailed step-by-step explanations and hints.
- 📝 **Student Notes Studio**:
  - Full-featured note editor with Markdown and plain text support.
  - Subject tagging (*Physics, Chemistry, Math, Biology, CS, General*).
  - Note pinning, keyword search, auto-save in `localStorage`, and one-click **Markdown Export (`.md`)**.
- 🃏 **3D Flashcards Memory Trainer**:
  - Flip-card revision system for formulas, definitions, and equations.
  - Smooth 3D CSS flip animations.
- 📐 **Searchable Formula Cheat Sheets**:
  - Quick reference library for Physics mechanics, Physical Chemistry, and Calculus equations.
- ⏱️ **Pomodoro Focus Timer**:
  - 25-minute focus session timer with start/pause/reset controls and session completion alerts.
- 🌙 **Dark & Light Mode Support**:
  - Clean glassmorphic design system with instant dark/light theme switching.

---

## 📂 Repository Structure

```text
entranceprep/
├── index.html         # Main web application shell with sidebar & 5 views
├── css/
│   └── app.css        # Custom CSS design system, dark mode tokens & 3D animations
├── js/
│   ├── questions.js   # 200+ verified entrance exam question bank with hints & solutions
│   └── app.js         # Core application engine (quiz controller, notes CRUD, flashcards, pomodoro timer)
└── README.md          # Project documentation
```

---

## 💻 How to Run Locally

### Option 1: Direct File Access
Open [`index.html`](file:///home/nepal/Documents/entranceprep/index.html) directly in any modern web browser.

### Option 2: Local HTTP Web Server
Serve the project directory using a local web server:

```bash
# Clone the repository
git clone git@github.com:wilamtoner/entranceprep.git
cd entranceprep

# Option A: Using Python 3
python3 -m http.server 8000

# Option B: Using Node.js npx
npx serve .
```

Then navigate to `http://localhost:8000` in your web browser.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

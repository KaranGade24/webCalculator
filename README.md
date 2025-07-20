# webCalculator

# 🧮 Web Calculator

A stylish and interactive web calculator built with HTML, CSS, and JavaScript.  
This calculator supports basic arithmetic operations, keyboard input, and local history storage.

---

## 🔗 Live Demo

👉 [Try the Calculator Now](https://karangade24.github.io/webCalculator/)

---

## ✨ Features

- ✅ Basic arithmetic: `+`, `-`, `*`, `/`, `%`
- ✅ History panel with click-to-fill old results
- ✅ `C` (clear) and `X` (backspace) buttons
- ✅ Full keyboard input support
- ✅ Mobile responsive layout
- ✅ LocalStorage saves calculation history

---

## 🎨 UI & Styling

- Clean, mobile-friendly layout with modern button design
- Calculator body styled with red background and rounded corners (`.cal-body`)
- Output/input areas styled with black backgrounds and white text
- Buttons have:
  - Rounded design
  - Hover effects
  - Flexbox layout for neat alignment
- History panel slides in and out with control buttons

---

## 🛠️ Built With

| Technology | Purpose                    |
| ---------- | -------------------------- |
| HTML5      | Markup structure           |
| CSS3       | Styling and layout         |
| JavaScript | Calculator logic + storage |

---

## 📂 File Structure

## 📂 webCalculator/

├── index.html # Calculator layout
├── style.css # Button layout & styles
├── script.js # All logic and interaction
└── README.md # Project description and info

---

## 🚀 How to Run Locally

1. Clone this repository:

   ```bash
   git clone https://github.com/KaranGade24/webCalculator.git

   ```

2. Navigate into the folder:
   cd webCalculator

3. Open index.html in your browser.

## ⌨️ Keyboard Controls

| Key             | Action                |
| --------------- | --------------------- |
| 0–9             | Enter number          |
| `+ - * / %`     | Operators             |
| `.`             | Decimal point         |
| `=` or `Enter`  | Evaluate expression   |
| `C` or `Delete` | Clear input/output    |
| `Backspace`     | Delete last character |
| `H` or `h`      | Show History Panel    |
| `K` or `k`      | Hide History Panel    |

# 🧠 Functionality Overview

1. eval() is used to calculate expressions safely

2. Input/output shown in .input-box and .output-box

3. History is saved using localStorage and shown dynamically

4. Clicking a history item re-fills the input box

## 🙋‍♂️ Author

[![GitHub – Karan Gade](https://img.shields.io/badge/GitHub-KaranGade24-181717?style=for-the-badge&logo=github)](https://github.com/KaranGade24)

> 💻 Passionate Web Developer building cool, responsive UIs  
> 📬 Connect with me: [KaranGade24](https://github.com/KaranGade24)

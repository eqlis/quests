# Quests 🧩

Quests is an Angular-based application for creating and completing **quests**, where each quest consists of a sequence of puzzles or tasks that must be solved one by one.

At the moment, the project contains a single quest — a **Christmas Gift Hunt**, where each completed task reveals a hint that guides the player to the next hidden gift. All tasks and answers are currently static and handled entirely on the client.

While the current implementation is intentionally simple and frontend-only, the original idea behind this project is to evolve it into a **platform for creating and sharing quests**, where users could design their own quests and invite friends to participate, or join publicly available quests created by others.

---

## ✨ Features

- Quest-based structure with sequential tasks
- Client-side answer validation
- Immediate visual feedback for correct and incorrect answers
- Modular Angular architecture with reusable components
- Client-side routing for navigating between quests and tasks

---

## 🛠️ Tech Stack

- **Angular**
- **TypeScript**
- **HTML & CSS**
- **GitHub Pages** (static hosting)

---

## 🌍 Live Demo

🔗 https://eqlis.github.io/quests/

---

## 🚀 Getting Started (Local Development)

### Prerequisites

- Node.js (LTS recommended)
- Angular CLI

### Install dependencies

```
npm install
```

### Run the app locally
```
ng serve
```

### Then open in browser
```
http://localhost:4200/
```

## 📁 Project Notes

- The project is built using an Angular Universal setup, but only the **browser build** is deployed to GitHub Pages.
- No backend is currently used; all data and validation logic are handled on the client.
- The project prioritizes simplicity and clarity over scalability in its current form.
- This repository serves as both a learning project and a foundation for potential future expansion.

## 🚧 Future Improvements

Some ideas for future development include:

- Backend integration for dynamic quest and task management
- User accounts and authentication
- Quest creation tools for users
- Ability to invite friends to private quests
- Public quest discovery and participation
- Persistent progress tracking
- Improved validation and optional hint systems

These features are outside the scope of the current implementation but represent the long-term vision for the project.

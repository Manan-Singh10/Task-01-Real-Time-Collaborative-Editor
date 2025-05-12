# 📝 Real-Time Collaborative Editor

A real-time collaborative text editor built using **React**, **TipTap**, **Yjs**, and **TailwindCSS**. Multiple users can edit the document simultaneously with live updates and see each other's cursors and usernames.

## 🚀 Live Demo

🔗 [Live App Link](https://task-01-real-time-collaborative-editor.vercel.app/)  
🌐 [Y-WebSocket Server (Render)](wss://y-websocket-server-lcra.onrender.com)

---

## ✨ Features

- **Rich Text Editor** built with [TipTap](https://tiptap.dev/)
- Collaborative editing using **Yjs CRDT**
- **Real-time updates** via [y-websocket-server](https://github.com/yjs/y-websocket-server)
- **Fake Auth** with localStorage
- **User cursor tracking** with names
- Supports:
  - Bold / Italic / Underline / Strikethrough
  - Code block
  - Highlighter
  - Headings (H1, H2, H3)
  - Bullet lists

---

## 🧠 How It Works

### 🧩 Editor

The editor is powered by **TipTap**, enhanced with:

- `Collaboration` and `CollaborationCursor` extensions from Yjs
- Custom menu bar for styling options

### 🔁 Real-Time Sync

- Uses **Yjs** as a CRDT for managing document state
- Uses **y-websocket** for WebSocket-based communication
- WebSocket server deployed on **Render**
  - Forked from: https://github.com/yjs/y-websocket
  - Modified `server.js` to use `0.0.0.0` as host for Render deployment

### 🔐 User Identification

- On first visit, user is prompted to enter a username and password
- User data is stored in `localStorage` for persistence
- Displayed in real-time cursors with unique colors

---

## 🗂 Folder Structure

```
root/
├── public/
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── Editor.jsx
│   │   ├── MenuBar.jsx
│   │   ├── LoginForm.jsx
│   │   ├── Signout.jsx
│   │   └── SignoutForm.jsx
│   └── App.jsx
├── index.html
└── vite.config.js
```

---

## 🛠 Tech Stack

- **React** (with Vite)
- **TypeScript (optional)** – currently using JavaScript
- **TailwindCSS** – utility-first styling
- **Yjs** – conflict-free replicated data type
- **y-websocket** – for real-time data sync
- **Render.com** – for WebSocket server deployment

---

## 🧪 How to Run Locally

### Prerequisites:

- Node.js >= 18
- npm / yarn / pnpm

### 1. Clone the Repo

```bash
git clone https://github.com/Manan-Singh10/Task-01-Real-Time-Collaborative-Editor.git
cd realtime-collab-editor
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App

```bash
npm run dev
```

> 🟡 Note: The app uses a live WebSocket server hosted on Render. Make sure the URL in `Editor.jsx` points to:  
> `wss://y-websocket-server-lcra.onrender.com`

---

## 📹 Project Overview (Video)

📽️ **[Watch the project explanation](https://drive.google.com/file/d/1if-k6_ROlbdwWiD-KEVK61Mend2QD3rb/view)**  
Includes a walkthrough of architecture, challenges, and implementation decisions.

---

## 🧠 Key Implementation Decisions

- **WebSocket > WebRTC:**  
  Chose `y-websocket` for better scalability and multi-device support. While `y-webrtc` is simpler, it only works for local peer connections.

- **Render Deployment:**  
  Hosting `y-websocket` server on Render made it easy to share across devices without a dedicated backend.

- **Fake Auth via localStorage:**  
  Simple user identification without full authentication, perfect for demos and prototypes.

---

## 📬 Feedback & Contributions

Feel free to fork, raise issues, or contribute improvements!

---

## 📄 License

MIT License

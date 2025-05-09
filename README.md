# 🎲 Tokar - Real-Time Multiplayer Ludo Game (Web)

Tokar is a real-time, multiplayer web-based Ludo game inspired by Ludo King, built to learn advanced backend concepts, WebSocket communication, and full-stack scalability. It supports public matchmaking and private rooms with smooth gameplay experience.

---

## 📁 Tech Stack

### 💻 Frontend
- React (Vite)
- Tailwind CSS
- ShadCN UI
- Redux + Redux Toolkit
- Redux Persist
- React Router DOM
- Framer Motion

---

## 📦 Folder Structure
```
src/
├── assets/           # Static assets (images, icons, dice)
├── components/       # Reusable UI components (Button, Modal, etc.)
├── custom-hooks/     # Custom React hooks (e.g. useSocket, useCountdown)
├── lib/              # Any shared logic modules
├── pages/            # Screens: Home, Lobby, Matchmaking, Game
├── redux/            # Store, slices, and persist setup
│   └── slices/
├── services/         # API logic and Socket.IO integration
├── utils/            # Helper functions (e.g. rollDice, randomColor)
├── App.jsx           # Root component
├── main.jsx          # Entry point with Redux & Router setup
```

---

## 🛠️ Setup Instructions

1. Clone the repo  
   ```bash
        git clone https://github.com/your-username/tokar.git
   ```
2.	Install dependencies
    ```bash
        npm install
    ```
3.	Run the frontend
    ```bash
        npm run dev
    ```

🧑‍💻 Author
Made with ❤️ by Sahil Ladhania

📜 License
This project is licensed for learning and educational use.# Tokar_Web


# 🚀 MGN-Investments Web App

### FastAPI (Python) + React (Vite) + PostgreSQL + Docker

A modern full-stack web app boilerplate.
Clone, copy the `.env`, and start coding — works the same for everyone!

---

## 🧩 Tech Stack

| Layer              | Technology     | Description                           |
| :----------------- | :------------- | :------------------------------------ |
| 🐍 **Backend**     | FastAPI        | High-performance Python API framework |
| ⚛️ **Frontend**    | React + Vite   | Modern frontend tooling               |
| 🐘 **Database**    | PostgreSQL     | Reliable relational database          |
| 🐳 **Environment** | Docker Compose | Unified development setup             |
| 💻 **Editor**      | VS Code        | Recommended IDE for all teammates     |

---

## 🧭 Project Structure

```
MGN-investments/
├── backend/
│   ├── Dockerfile
│   ├── requirements.txt
│   └── src/
│       └── main.py
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   ├── index.html
│   └── src/
│       ├── App.jsx
│       └── main.jsx
├── .env.example
├── docker-compose.yml
├── .gitignore
├── Makefile
└── README.md
```

---

## 🧰 First-Time Setup (for every teammate)

### 1️⃣ Install Required Tools

* [Docker Desktop](https://www.docker.com/products/docker-desktop/) 🐳
* [Visual Studio Code](https://code.visualstudio.com/)
* VS Code extensions:

  * Python
  * JavaScript / React
  * *(Optional)* Docker

---

### 2️⃣ Clone the Project

```bash
git clone https://github.com/exeaucity/MGN-Gold-Investments.git
cd MGN-investments
```

---

### 3️⃣ Create Your Local Environment File

Copy `.env.example` → `.env`

**Windows PowerShell**

```bash
copy .env.example .env
```

**macOS/Linux**

```bash
cp .env.example .env
```

✅ `.env` is ignored by Git — it’s your local config.
Do **not** commit it.

---

### 4️⃣ Start Everything

```bash
docker compose up --build
```

Docker will build and start:

* 🐘 PostgreSQL (DB)
* ⚙️ FastAPI (backend)
* ⚛️ React (frontend)

---

### 5️⃣ Test It

When startup finishes, open:

* **Backend** → [http://localhost:4000/health](http://localhost:4000/health)

  ```json
  {"ok": true, "env": "backend"}
  ```

* **Frontend** → [http://localhost:5173](http://localhost:5173)

If both load — ✅ you’re good to go!

---

## 🧑‍💻 Daily Development Routine

| Step  | Command                                | Purpose                          |
| :---- | :------------------------------------- | :------------------------------- |
| 🐳 1. | *(Start Docker Desktop)*               | Make sure Docker is running      |
| 💾 2. | `git pull`                             | Get teammates’ latest code       |
| ⚙️ 3. | `docker compose up`                    | Start backend + frontend + DB    |
| ✏️ 4. | *(edit in VS Code)*                    | Code normally; auto-reload works |
| 💬 5. | `git add . && git commit -m "message"` | Save your work                   |
| ☁️ 6. | `git push`                             | Push updates to GitHub           |
| 🛑 7. | **Ctrl + C**                           | Stop containers                  |
| 🧹 8. | `docker compose down -v`               | (Optional) Reset containers + DB |

---

## ⚙️ Common Issues & Fixes

| Problem                            | Cause                       | Fix                                            |
| :--------------------------------- | :-------------------------- | :--------------------------------------------- |
| ❌ `no configuration file provided` | Ran command in wrong folder | Run inside `MGN-investments/`                  |
| ❌ `IndentationError` (backend)     | Bad spacing in Python       | Use 4 spaces                                   |
| ❌ `frontend exited with code 1`    | Invalid `package.json`      | Ensure valid JSON                              |
| ❌ `port already in use`            | Port 4000/5173 busy         | Stop other containers / change port            |
| ❌ `Module not found`               | Missing dependencies        | `docker compose up --build`                    |
| ❌ `database errors`                | Wrong DB URL                | Check `.env`: `postgres://app:app@db:5432/app` |

---

## 🧩 Makefile Shortcuts (optional)

If `make` is installed, you can use these:

```bash
make up       # docker compose up --build
make down     # docker compose down
make clean    # docker compose down -v
```

---

## 🔒 Git Rules

✅ Commit these:

```
backend/
frontend/
docker-compose.yml
.env.example
.gitignore
README.md
Makefile
```

❌ Never commit these:

```
.env
__pycache__/
node_modules/
frontend/dist/
```

---

## 🧠 Quick Summary

**First-time setup:**

```bash
git clone <repo>
cd MGN-investments
cp .env.example .env
docker compose up --build
```

**Daily routine:**

```bash
git pull
docker compose up
# ... code ...
git add .
git commit -m "update"
git push
```

**Stop everything:**

```bash
docker compose down
```

---

## 📦 Example Endpoints & Frontend Check

**Backend (`backend/src/main.py`)**

```python
@app.get("/health")
async def health():
    return {"ok": True, "env": "backend"}
```

**Frontend (`frontend/src/App.jsx`)**

```jsx
useEffect(() => {
  fetch("http://localhost:4000/health")
    .then(r => r.json())
    .then(d => setStatus(JSON.stringify(d, null, 2)));
}, []);
```

---

## 💬 Need Help?

Check logs:

```bash
docker compose logs --no-color backend | tail -n 50
docker compose logs --no-color frontend | tail -n 50
```

Ask your teammates or share the error in our project chat. 😊

---

### Made with ❤️ by the MGN-Investments Team

---

Would you like me to append a short **Contributing section** (branching + PR workflow) at the end so your friends know exactly how to collaborate on GitHub?

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
import psycopg2
from src.routers import test1 

app = FastAPI()
app.include_router(test1.router)


# Allow the React dev server to call the API (relax for dev)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DATABASE_URL = os.getenv("DATABASE_URL", "postgres://app:app@db:5432/app")

@app.get("/health")
async def health():
    return {"okgg": True, "env": "backend"}


@app.get("/api/users")
async def users():
    try:
        conn = psycopg2.connect(DATABASE_URL)
        cur = conn.cursor()
        cur.execute("SELECT 1;")
        cur.close()
        conn.close()
        return {"db_ok": True, "users": []}
    except Exception as e:
        return {"error": str(e)}



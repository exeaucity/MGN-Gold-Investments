import React from "react";
import { useEffect, useState } from "react";

const API = import.meta.env.VITE_API_URL || "http://localhost:4000";

export default function App() {
  const [status, setStatus] = useState("loading...");

  useEffect(() => {
    fetch(`${API}/health`)
      .then((r) => r.json())
      .then((d) => setStatus(JSON.stringify(d, null, 2)))
      .catch((e) => setStatus(String(e)));
  }, []);

  return (
    <div style={{ fontFamily: "system-ui", padding: 24 }}>
      <h1>Frontend ✅</h1>
      <p>Backend health:</p>
      <pre>{status}</pre>
      <p>API base: {API}</p>
    </div>
  );
}

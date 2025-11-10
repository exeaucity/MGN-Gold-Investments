import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,              // listen on 0.0.0.0 inside the container
    strictPort: true,        // don't auto-switch ports
    watch: { usePolling: true } // reliable file watching in Docker/WSL/VMs
  }
});

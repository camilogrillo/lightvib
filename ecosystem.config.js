module.exports = {
  apps: [
    {
      name: "lightvib",
      script: ".next/standalone/server.js",
      cwd: "/var/www/lightvib",
      env: {
        NODE_ENV: "production",
        PORT: 3010,
        // Secrets are loaded from /var/www/lightvib/.env.production on the server
        // Never put API keys here — this file is public on GitHub
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "300M",
    },
  ],
};

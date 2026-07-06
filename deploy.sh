#!/bin/bash
# LightVib — deploy script for Ubuntu 22.04 / Nginx / PM2
# Run this on the server: bash deploy.sh

set -e

SITE_DIR="/var/www/lightvib"
REPO="https://github.com/camilogrillo/lightvib.git"

echo "==> Setting up LightVib..."

# 1. Create site directory
sudo mkdir -p $SITE_DIR
sudo chown $USER:$USER $SITE_DIR

# 2. Clone or pull latest code
if [ -d "$SITE_DIR/.git" ]; then
  echo "==> Pulling latest code..."
  cd $SITE_DIR && git pull
else
  echo "==> Cloning repo..."
  git clone $REPO $SITE_DIR
  cd $SITE_DIR
fi

# 3. Install dependencies
echo "==> Installing dependencies..."
npm ci --production=false

# 4. Build
echo "==> Building..."
npm run build

# 5. Copy static assets into standalone build
cp -r .next/static .next/standalone/.next/static
cp -r public .next/standalone/public

# 6. Create .env.production if it doesn't exist yet
if [ ! -f "$SITE_DIR/.env.production" ]; then
  echo "==> Creating .env.production — fill in the values before starting!"
  cat > $SITE_DIR/.env.production <<EOF
MAILCHIMP_API_KEY=your-api-key-here
MAILCHIMP_LIST_ID=347969319d
EOF
  echo ""
  echo "!!! Edit $SITE_DIR/.env.production with the real keys, then run this script again."
  exit 0
fi

# 7. Start or reload with PM2 (Next.js reads .env.production automatically)
echo "==> Starting with PM2..."
pm2 describe lightvib > /dev/null 2>&1 && pm2 reload lightvib || pm2 start ecosystem.config.js
pm2 save

echo ""
echo "==> Done! LightVib running on port 3010"
echo "==> Now configure Nginx (see nginx-lightvib.conf)"

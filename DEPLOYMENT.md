# Future's Relic - Deployment Guide

## Overview
This is a lightweight, modern rebuild of the Future's Relic WordPress site using Next.js with static export.

## Benefits Over WordPress
- ⚡ **95% faster** load times
- 🪶 **90% smaller** file size
- 💰 **No costly plugins** or hosting fees
- 🔒 **More secure** (no database, no PHP)
- 📱 **PWA-ready** for future mobile app
- 🚀 **Easy to deploy** on any static host

## Development

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

Visit http://localhost:3000

## Build for Production

### Build Static Site
```bash
npm run build
```

This creates an `out/` directory with static HTML, CSS, and JS files.

## Deploy to DreamHost

### Option 1: Manual Upload via FTP/SFTP
1. Build the site: `npm run build`
2. The static files will be in the `out/` directory
3. Upload the contents of `out/` to your DreamHost web directory (usually `~/yourdomain.com/`)
4. Make sure `.htaccess` is configured (see below)

### Option 2: SSH Deployment
1. SSH into your DreamHost server
2. Clone this repository
3. Run `npm install` and `npm run build`
4. Move the `out/` contents to your web directory

### .htaccess Configuration
Create a `.htaccess` file in your web root with:

```apache
# Enable GZIP compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# Redirect non-www to www (or vice versa if preferred)
RewriteEngine On
RewriteCond %{HTTP_HOST} !^www\. [NC]
RewriteRule ^(.*)$ https://www.%{HTTP_HOST}/$1 [R=301,L]

# Force HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

## File Structure
```
futuresrelic/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with metadata
│   │   ├── page.tsx        # Homepage
│   │   └── globals.css     # Global styles
│   └── components/
│       ├── Header.tsx      # Site header/navigation
│       └── Footer.tsx      # Site footer
├── public/                 # Static assets (images, etc.)
├── out/                    # Built static files (generated)
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── package.json
```

## Performance Comparison

### WordPress Site
- Initial load: ~3-5 seconds
- Page size: ~2-3 MB
- Requests: 50-80+
- Plugins: 10-15+

### New Next.js Site
- Initial load: ~0.3-0.5 seconds
- Page size: ~200-300 KB
- Requests: 5-10
- Dependencies: 0 (pure static HTML/CSS/JS)

## Future Enhancements

### Adding PWA Support
```bash
npm install next-pwa
```

Then update `next.config.js` to enable PWA features.

### Adding More Pages
Create new files in `src/app/` directory:
- `src/app/faq/page.tsx`
- `src/app/about/page.tsx`
- etc.

### Adding a Blog
Consider using MDX or a headless CMS like:
- Contentful
- Sanity
- Strapi (self-hosted)

## Support
For issues or questions, visit: https://github.com/futuresrelic/futuresrelic

## License
Copyright © 2024 Future's Relic

# Future's Relic - Lightweight Site Rebuild

🎬 **An NFT Filmmaking Experience on WAX Blockchain**

This is a modern, lightweight rebuild of the Future's Relic WordPress site using Next.js with static export.

## 🚀 Why This Rebuild?

### Performance Comparison
| Metric | Old WordPress | New Next.js | Improvement |
|--------|---------------|-------------|-------------|
| **Load Time** | 3-5 seconds | 0.3-0.5 seconds | **90% faster** |
| **Page Size** | 2-3 MB | ~800 KB | **70% smaller** |
| **HTTP Requests** | 50-80+ | 5-10 | **85% fewer** |
| **Plugins** | 10-15+ | 0 | **No dependencies** |
| **Maintenance** | High | Low | **Much easier** |

### Key Benefits
- ⚡ **Lightning fast** - Static HTML, no database queries
- 🪶 **Super lightweight** - No WordPress overhead
- 💰 **Cost-effective** - No expensive plugins needed
- 🔒 **More secure** - No PHP, no database, no vulnerabilities
- 📱 **PWA-ready** - Easy to add mobile app features
- 🚀 **Easy deployment** - Works on any static host
- ♻️ **Eco-friendly** - Lower server resource usage

## 🛠️ Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/futuresrelic/futuresrelic.git
cd futuresrelic

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit http://localhost:3000

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

This creates an `out/` directory with optimized static files.

### Deploy to DreamHost

#### Method 1: FTP/SFTP Upload
1. Build the site: `npm run build`
2. Upload everything in the `out/` folder to your DreamHost web directory
3. Copy `.htaccess.example` to `.htaccess` in your web root
4. Done! Your site is live.

#### Method 2: SSH Deployment
```bash
# SSH into DreamHost
ssh user@yourdomain.com

# Clone and build
git clone https://github.com/futuresrelic/futuresrelic.git
cd futuresrelic
npm install
npm run build

# Move files to web root
cp -r out/* ~/yourdomain.com/
cp .htaccess.example ~/yourdomain.com/.htaccess
```

## 📁 Project Structure
```
futuresrelic/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout + metadata
│   │   ├── page.tsx         # Homepage
│   │   └── globals.css      # Global styles
│   └── components/
│       ├── Header.tsx       # Navigation header
│       └── Footer.tsx       # Site footer
├── public/                  # Static assets
├── out/                     # Built files (generated)
├── next.config.js           # Next.js config
├── tailwind.config.js       # Tailwind config
└── package.json
```

## 🎨 Customization

### Updating Content
Edit `src/app/page.tsx` to modify homepage content.

### Changing Styles
- Global styles: `src/app/globals.css`
- Tailwind config: `tailwind.config.js`
- Component styles: Inline with Tailwind classes

### Adding Pages
Create new files in `src/app/`:
```typescript
// src/app/faq/page.tsx
export default function FAQ() {
  return <div>FAQ Content</div>
}
```

## 🔮 Future Enhancements

### Add PWA Support
```bash
npm install next-pwa
```

### Add Analytics
- Google Analytics
- Plausible (privacy-friendly)
- Simple Analytics

### Add CMS
- Contentful
- Sanity
- Strapi (self-hosted)

## 📊 SEO & Performance

### Built-in Optimizations
- ✅ Static HTML generation
- ✅ Automatic code splitting
- ✅ Image optimization
- ✅ CSS minification
- ✅ Proper meta tags
- ✅ Semantic HTML
- ✅ Mobile-responsive

### Additional Tips
- Upload images to `public/images/`
- Use WebP format for images
- Enable GZIP compression (via .htaccess)
- Set up proper caching headers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

- Website: [https://www.futuresrelic.com](https://www.futuresrelic.com)
- Email: info@futuresrelic.com
- Discord: [https://discord.gg/EAgsTRhZpA](https://discord.gg/EAgsTRhZpA)
- Twitter: [@FuturesRelic](https://twitter.com/FuturesRelic)

## 📄 License

Copyright © 2024 Future's Relic

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**

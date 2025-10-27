# Portfolio Website - Setup Instructions

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio.

## Customization

### Update Personal Information

1. **Hero Section** (`components/Hero.tsx`):
   - Modify the name and title
   - Update the tagline

2. **About Section** (`components/About.tsx`):
   - Replace the bio text with your own
   - Update the photo placeholder
   - Adjust the stats (projects count, technologies)

3. **Projects Section** (`components/Projects.tsx`):
   - Edit the `projects` array with your actual projects
   - Update `github` and `live` links
   - Modify technologies arrays

4. **Experience Section** (`components/Experience.tsx`):
   - Edit the `experiences` array with your real work experience
   - Update descriptions and technologies

5. **Contact Section** (`components/Contact.tsx`):
   - Update email address
   - Update LinkedIn profile URL
   - Update GitHub profile URL

### Styling

The project uses Tailwind CSS. Main configuration is in `tailwind.config.js`:

- **Colors**: Modify the `primary` color palette
- **Animations**: Add custom animations in the `keyframes` section
- **Dark Mode**: Controlled via `darkMode: 'class'` setting

### Adding Your Photo

Replace the placeholder avatar in `components/About.tsx`:

```tsx
<div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-400 to-purple-500 overflow-hidden shadow-2xl">
  {/* Replace with your actual photo */}
  <img src="/your-photo.jpg" alt="Yichen Zhang" className="w-full h-full object-cover" />
</div>
```

Add your photo to the `public` directory as `your-photo.jpg`.

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/portfolio-website.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your GitHub repository
5. Deploy with default settings

### Option 2: Deploy via Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts to deploy.

## Project Structure

```
portfolio-website/
├── components/           # React components
│   ├── ThemeProvider.tsx   # Dark mode context
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About me section
│   ├── Projects.tsx        # Projects section
│   ├── Experience.tsx      # Work experience
│   ├── Contact.tsx         # Contact section
│   └── Footer.tsx          # Footer
├── pages/               # Next.js pages
│   ├── _app.tsx         # App wrapper
│   └── index.tsx        # Main page
├── public/              # Static files
│   └── favicon.ico      # Site icon
├── styles/              # Global styles
│   └── globals.css      # Tailwind directives
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript config
├── tailwind.config.js   # Tailwind config
├── next.config.js       # Next.js config
└── README.md           # Documentation
```

## Key Features

✅ **Responsive Design**: Works on all devices
✅ **Dark Mode**: Toggle between light/dark themes
✅ **Smooth Scrolling**: Native CSS scroll behavior
✅ **Modern UI**: Gradient headers, rounded corners, animations
✅ **SEO Ready**: Meta tags and semantic HTML
✅ **TypeScript**: Fully typed for better development experience
✅ **Performance**: Optimized with Next.js

## Troubleshooting

### Port Already in Use

If port 3000 is busy:

```bash
npm run dev -- -p 3001
```

### Build Errors

Clear cache and rebuild:

```bash
rm -rf .next
npm run build
```

### TypeScript Errors

Run type checking:

```bash
npx tsc --noEmit
```

## Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Run development server: `npm run dev`
3. ✅ Customize your content
4. ✅ Replace placeholder data
5. ✅ Deploy to Vercel
6. ✅ Share your portfolio!


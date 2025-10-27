# Portfolio Website

A modern, responsive portfolio website for Yichen Zhang (章怡辰), CS graduate student at Northeastern University.

## Features

- 🎨 Modern UI with Tailwind CSS
- 🌙 Dark mode support
- 📱 Fully responsive design
- ⚡ Built with Next.js and React
- 🎭 Smooth scrolling navigation
- ✨ Subtle animations and transitions

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

### Deploy to Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Deploy with one click

The site will be available at `your-username.vercel.app`

## Project Structure

```
├── components/        # React components
│   ├── Navbar.tsx    # Navigation with theme toggle
│   ├── Hero.tsx      # Hero section
│   ├── About.tsx     # About me section
│   ├── Projects.tsx  # Projects showcase
│   ├── Experience.tsx # Work experience
│   ├── Contact.tsx   # Contact information
│   ├── Footer.tsx    # Footer
│   └── ThemeProvider.tsx # Dark mode provider
├── pages/            # Next.js pages
│   ├── _app.tsx      # App wrapper
│   └── index.tsx     # Main page
├── styles/           # Global styles
│   └── globals.css   # Tailwind directives
└── public/           # Static assets
```

## Customization

1. **Update Personal Information**: Edit the components in `/components` directory
2. **Add Projects**: Update the `projects` array in `components/Projects.tsx`
3. **Add Experience**: Update the `experiences` array in `components/Experience.tsx`
4. **Change Colors**: Modify the Tailwind config in `tailwind.config.js`
5. **Update Contact Links**: Edit the links in `components/Contact.tsx`

## License

MIT License - feel free to use this template for your own portfolio!


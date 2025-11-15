# Design Document

## Overview

The walmsles.dev landing page is a single-page static website built with Astro, designed to showcase Michael Walmsley's professional identity, blog content, social profiles, workshops, and conference talks. The site will be deployed to AWS Amplify Hosting with a custom domain configuration.

### Technology Stack

- **Framework**: Astro 4.x (static site generator)
- **Styling**: Tailwind CSS for utility-first styling
- **Deployment**: AWS Amplify Hosting
- **Domain**: walmsles.dev (custom domain)
- **Build Output**: Static HTML/CSS/JS files

### Design Principles

1. **Performance First**: Minimal JavaScript, optimized assets, fast load times
2. **Mobile Responsive**: Mobile-first design approach
3. **Accessibility**: WCAG 2.1 AA compliance
4. **Maintainability**: Simple content structure for easy updates
5. **Professional Aesthetic**: Clean, modern design reflecting technical expertise

## Architecture

### Site Structure

```
walmsles.dev/
├── src/
│   ├── pages/
│   │   └── index.astro          # Main landing page
│   ├── components/
│   │   ├── Hero.astro            # Hero section with name and title
│   │   ├── About.astro           # Professional bio section
│   │   ├── BlogLinks.astro       # Blog platform links
│   │   ├── SocialLinks.astro     # Social/professional profiles
│   │   ├── Workshops.astro       # Workshop listings
│   │   ├── ConferenceTalks.astro # Conference talk listings
│   │   └── Footer.astro          # Page footer
│   ├── layouts/
│   │   └── BaseLayout.astro      # Base HTML structure
│   ├── data/
│   │   ├── workshops.json        # Workshop data
│   │   └── talks.json            # Conference talk data
│   └── styles/
│       └── global.css            # Global styles and Tailwind imports
├── public/
│   ├── favicon.ico
│   └── images/                   # Optimized images
├── astro.config.mjs              # Astro configuration
├── tailwind.config.mjs           # Tailwind configuration
├── amplify.yml                   # AWS Amplify build configuration
└── package.json
```

### Component Hierarchy

```
BaseLayout
└── index.astro
    ├── Hero
    ├── About
    ├── BlogLinks
    ├── SocialLinks
    ├── Workshops
    ├── ConferenceTalks
    └── Footer
```

## Components and Interfaces

### BaseLayout Component

**Purpose**: Provides the HTML document structure, meta tags, and global styles

**Props**:
- `title: string` - Page title
- `description: string` - Meta description

**Features**:
- SEO meta tags
- Responsive viewport configuration
- Global CSS imports
- Font loading

### Hero Component

**Purpose**: Displays name and professional title prominently

**Content**:
- Name: "Michael Walmsley"
- Title: "Serverless Architect & AWS Community Builder"
- Visual design: Large typography, centered layout

### About Component

**Purpose**: Professional bio section

**Content**:
- Brief bio text about serverless and cloud-native focus
- Paragraph format with readable line length

### BlogLinks Component

**Purpose**: Links to blog platforms

**Data Structure**:
```typescript
interface BlogLink {
  name: string;
  url: string;
  description: string;
  icon?: string;
}
```

**Links**:
- Serverless DNA (serverlessdna.com)
- Personal Blog (blog.walmsles.dev)
- DEV Community (dev.to/walmsles)

### SocialLinks Component

**Purpose**: Professional and social profile links

**Data Structure**:
```typescript
interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
```

**Links**:
- LinkedIn (linkedin.com/in/walmsles)
- GitHub (github.com/walmsles)
- YouTube (youtube.com/@walmsles)
- Twitter/X (x.com/walmsles)
- AWS Community Builder (builder.aws.com/community/@walmsles)

### Workshops Component

**Purpose**: Display workshop listings

**Data Structure**:
```typescript
interface Workshop {
  title: string;
  description?: string;
  date?: string;
  venue?: string;
  link?: string;
}
```

**Features**:
- Reverse chronological ordering
- Optional links to materials
- Responsive card layout

### ConferenceTalks Component

**Purpose**: Display conference talk listings

**Data Structure**:
```typescript
interface ConferenceTalk {
  title: string;
  conference: string;
  date?: string;
  location?: string;
  slidesLink?: string;
  recordingLink?: string;
}
```

**Features**:
- Reverse chronological ordering
- Links to slides and recordings
- Conference name display

### Footer Component

**Purpose**: Page footer with copyright

**Content**:
- Copyright notice
- Year (dynamic)

## Data Models

### workshops.json

```json
[
  {
    "title": "Workshop Title",
    "description": "Workshop description",
    "date": "2024-01-15",
    "venue": "Programming and Tools Meetup",
    "link": "https://example.com/workshop"
  }
]
```

### talks.json

```json
[
  {
    "title": "Talk Title",
    "conference": "Conference Name",
    "date": "2024-03-20",
    "location": "City, Country",
    "slidesLink": "https://example.com/slides",
    "recordingLink": "https://example.com/recording"
  }
]
```

## Styling and Design System

### Color Palette

```css
:root {
  --color-primary: #FF9900;      /* AWS Orange */
  --color-secondary: #232F3E;    /* AWS Dark Blue */
  --color-accent: #146EB4;       /* AWS Light Blue */
  --color-text: #16191F;         /* Dark text */
  --color-text-light: #687078;   /* Light text */
  --color-background: #FFFFFF;   /* White background */
  --color-surface: #F7F9FA;      /* Light gray surface */
}
```

### Typography

- **Headings**: System font stack (SF Pro, Segoe UI, Roboto)
- **Body**: System font stack
- **Sizes**:
  - H1: 3rem (mobile: 2rem)
  - H2: 2rem (mobile: 1.5rem)
  - H3: 1.5rem (mobile: 1.25rem)
  - Body: 1rem
  - Small: 0.875rem

### Responsive Breakpoints

```css
/* Mobile first approach */
sm: 640px   /* Small devices */
md: 768px   /* Tablets */
lg: 1024px  /* Desktops */
xl: 1280px  /* Large desktops */
```

### Layout

- **Container**: Max-width 1200px, centered
- **Spacing**: 8px base unit (using Tailwind spacing scale)
- **Section Padding**: 4rem vertical (mobile: 2rem)
- **Grid**: CSS Grid for card layouts

## Performance Optimization

### Build Optimization

1. **Static Generation**: All pages pre-rendered at build time
2. **Asset Optimization**:
   - Image optimization with Astro's built-in image component
   - CSS purging via Tailwind
   - Minification of HTML/CSS/JS
3. **Code Splitting**: Minimal JavaScript, component-level CSS

### Loading Strategy

1. **Critical CSS**: Inlined in `<head>`
2. **Fonts**: System fonts (no external font loading)
3. **Images**: Lazy loading for below-fold content
4. **External Links**: `rel="noopener noreferrer"` for security

### Performance Targets

- First Contentful Paint: < 1.5s
- Time to Interactive: < 2.5s
- Total Page Size: < 500KB
- Lighthouse Score: > 95

## Deployment Configuration

### AWS Amplify Setup

**amplify.yml**:
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

### Build Commands

- **Install**: `npm ci`
- **Build**: `npm run build`
- **Output Directory**: `dist/`

### Domain Configuration

- **Primary Domain**: walmsles.dev
- **SSL/TLS**: Automatic via AWS Certificate Manager
- **Redirects**: www.walmsles.dev → walmsles.dev (if needed)

## Accessibility

### WCAG 2.1 AA Compliance

1. **Color Contrast**: Minimum 4.5:1 for normal text, 3:1 for large text
2. **Keyboard Navigation**: All interactive elements accessible via keyboard
3. **Focus Indicators**: Visible focus states for all interactive elements
4. **Semantic HTML**: Proper heading hierarchy, landmarks
5. **Alt Text**: Descriptive alt text for all images
6. **Link Text**: Descriptive link text (no "click here")

### ARIA Labels

- Navigation landmarks
- Section headings
- External link indicators

## Error Handling

### Build Errors

- Missing data files: Graceful fallback to empty arrays
- Invalid JSON: Build-time validation with clear error messages

### Runtime Errors

- Broken external links: No runtime errors (static links)
- Missing images: Alt text provides context

## Testing Strategy

### Manual Testing

1. **Visual Testing**: Cross-browser testing (Chrome, Firefox, Safari, Edge)
2. **Responsive Testing**: Test on multiple device sizes
3. **Accessibility Testing**: Screen reader testing, keyboard navigation
4. **Performance Testing**: Lighthouse audits

### Validation

1. **HTML Validation**: W3C validator
2. **CSS Validation**: W3C CSS validator
3. **Link Checking**: Verify all external links work
4. **JSON Validation**: Validate data files against schema

### Pre-deployment Checklist

- [ ] All links tested and working
- [ ] Responsive design verified on mobile/tablet/desktop
- [ ] Lighthouse score > 95
- [ ] Accessibility audit passed
- [ ] Content reviewed for accuracy
- [ ] Meta tags and SEO elements in place
- [ ] Favicon present
- [ ] Custom domain configured in Amplify

## Future Enhancements

Potential features for future iterations:

1. **Blog RSS Integration**: Automatically pull latest blog posts
2. **Dark Mode**: Toggle for dark/light theme
3. **Analytics**: Privacy-focused analytics integration
4. **Contact Form**: Simple contact form with serverless backend
5. **Newsletter Signup**: Email subscription integration
6. **Speaking Calendar**: Upcoming talks and events
7. **Project Showcase**: Featured projects or case studies

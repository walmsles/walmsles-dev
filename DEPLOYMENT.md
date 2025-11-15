# Deployment Guide

## AWS Amplify Deployment

This guide covers deploying the walmsles.dev landing page to AWS Amplify Hosting.

### Prerequisites

- AWS Account with Amplify access
- GitHub repository connected to AWS Amplify
- Custom domain (walmsles.dev) registered

### Deployment Steps

#### 1. Connect Repository to AWS Amplify

1. Log in to AWS Console and navigate to AWS Amplify
2. Click "New app" → "Host web app"
3. Select GitHub as the repository provider
4. Authorize AWS Amplify to access your GitHub account
5. Select the `walmsles/walmsles-dev` repository
6. Select the `main` branch

#### 2. Configure Build Settings

The build configuration is already defined in `amplify.yml`:

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

AWS Amplify will automatically detect and use this configuration.

#### 3. Set Up Custom Domain (walmsles.dev)

1. In the Amplify Console, go to "Domain management"
2. Click "Add domain"
3. Enter your domain: `walmsles.dev`
4. Follow the DNS configuration steps:
   - Add the provided CNAME records to your domain registrar
   - Wait for DNS propagation (can take up to 48 hours)
5. Amplify will automatically provision an SSL/TLS certificate via AWS Certificate Manager

#### 4. Configure SSL/TLS Certificate

AWS Amplify automatically provisions and manages SSL/TLS certificates for custom domains using AWS Certificate Manager (ACM). No manual configuration required.

The certificate will:
- Be automatically renewed before expiration
- Support both `walmsles.dev` and `www.walmsles.dev`
- Use TLS 1.2 or higher

#### 5. Optional: Configure Redirects

If you want to redirect `www.walmsles.dev` to `walmsles.dev`, add this to your domain settings in Amplify Console.

### Deployment Checklist

Before deploying to production, verify:

- [ ] All external links are correct and working
- [ ] Content is accurate and up-to-date
- [ ] Build completes successfully locally (`npm run build`)
- [ ] No console errors in browser
- [ ] Responsive design tested on mobile, tablet, and desktop
- [ ] Accessibility audit passed (Lighthouse)
- [ ] Performance metrics meet targets (Lighthouse score > 95)
- [ ] Meta tags and SEO elements are correct
- [ ] Favicon is present and displays correctly

### Continuous Deployment

Once connected, AWS Amplify will automatically:
- Build and deploy on every push to the `main` branch
- Run the build commands defined in `amplify.yml`
- Deploy the contents of the `dist/` directory
- Invalidate the CDN cache

### Build Monitoring

Monitor builds in the Amplify Console:
1. Navigate to your app in AWS Amplify
2. Click on the branch name (main)
3. View build logs and deployment status

### Troubleshooting

#### Build Fails

- Check build logs in Amplify Console
- Verify `package.json` dependencies are correct
- Ensure Node.js version is compatible (Amplify uses Node 18 by default)

#### Domain Not Working

- Verify DNS records are correctly configured
- Wait for DNS propagation (up to 48 hours)
- Check domain status in Amplify Console

#### SSL Certificate Issues

- Ensure domain ownership is verified
- Check ACM certificate status in AWS Console
- Verify CNAME records for certificate validation

### Performance Optimization

The site is optimized for performance:
- Static HTML generation (no server-side rendering)
- Minimal JavaScript
- Optimized CSS with Tailwind purging
- SVG favicon (small file size)
- CDN distribution via AWS CloudFront

### Cost Estimation

AWS Amplify Hosting costs:
- Build minutes: First 1,000 minutes/month free
- Hosting: First 15 GB served/month free
- Data transfer: First 15 GB/month free

For a simple landing page with moderate traffic, costs should remain within the free tier.

### Support

For issues or questions:
- AWS Amplify Documentation: https://docs.aws.amazon.com/amplify/
- GitHub Issues: https://github.com/walmsles/walmsles-dev/issues

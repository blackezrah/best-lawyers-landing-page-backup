# Instapage Migration Notes

The landing page has been cleaned to avoid Vercel-specific runtime behavior. It builds as a static page and does not use Vercel Analytics, Server Actions, Middleware, Edge Runtime features, or platform-specific routing.

Remaining framework-specific features to replace during an Instapage migration:

- Next.js app shell: `app/layout.tsx` and `app/page.tsx` should be flattened into one Instapage HTML page.
- React components: component markup in `components/premier/` should be rendered into static HTML sections.
- Tailwind CSS classes: compile the final CSS and include only the generated styles needed by the landing page.
- `motion/react`: replace reveal, scroll, and testimonial transitions with small vanilla JavaScript and CSS transitions, or omit motion where Instapage support is limited.

Portable assets:

- `public/premier-placement-laptop.png`
- `public/fonts/IBMPlexSans-Regular.ttf`
- `public/fonts/IBMPlexSans-SemiBold.ttf`
- `public/fonts/IBMPlexSans-Bold.ttf`
- `public/fonts/IBMPlexSerif-Regular.ttf`
- `public/fonts/IBMPlexSerif-SemiBold.ttf`
- `public/fonts/IBMPlexSerif-Bold.ttf`

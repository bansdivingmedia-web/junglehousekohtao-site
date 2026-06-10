# COZY Koh Tao

Premium boutique resort website built with Astro and Tailwind CSS.

## Edit Content

- Resort settings and booking links: `src/data/siteSettings.ts`
- Homepage text: `src/data/homepage.ts`
- Rooms, prices, descriptions and room images: `src/data/rooms.ts`
- Gallery images and alt text: `src/data/gallery.ts`
- Testimonials: `src/data/testimonials.ts`
- Experiences: `src/data/experiences.ts`

## Replace Images

Place replacement files in `public/images/`, then update the matching image path in the data files. Page components read from the data files, so prices, descriptions, contact information and gallery images do not need to be edited in layout code.

## Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

The site builds to `dist/` and is ready for Netlify. `netlify.toml` is already configured.

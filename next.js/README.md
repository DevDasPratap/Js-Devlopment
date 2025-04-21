# Next.js is a fullstack web development framework.
- Supports server-side rendering (SSR).
- Enables static site generation (SSG).
- Provides API routes for building full-stack applications (frontend and backend).
- Offers performance optimizations for faster and more efficient pages.
- Supports Incremental Static Regeneration (ISR) to pre-render pages at build time and update them after deployment.
- SEO-friendly by default.
- Includes a built-in routing system with file-based routing.
- Supports CSS and Sass for styling.
- Provides TypeScript support for type-safe development.
- Includes image optimization features.
- Supports internationalization for multi-language applications.
- Features fast refresh for a better development experience.
- Automatically performs code splitting for optimized loading.
- Offers middleware for advanced request handling.
- Supports dynamic imports for lazy loading components.
- Provides built-in support for environment variables.
- Integrates well with popular deployment platforms like Vercel.

The `.next` folder contains cache data for Next.js.

By default, Next.js uses Server-Side Rendering (SSR) for all files.

All `page.tsx/jsx` and `layout` files are rendered using SSR.

To enable Client-Side Rendering (CSR), use the `"use client"` directive at the top of the file.

A `"use client"` directive enables Client-Side Rendering (CSR) for tasks like state management, event handling, and accessing browser APIs.

Dynamic route with ()

### Commands :

npx create-next-app@latest
Need to install the following packages:
create-next-app@15.3.1
Ok to proceed? (y) y
✔ What is your project named? … my-next-app
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like your code inside a `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to use Turbopack for `next dev`? … No / Yes
✔ Would you like to customize the import alias (`@/*` by default)? … No / Yes
